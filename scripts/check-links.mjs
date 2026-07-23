import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const references = new Set();
const attributePattern = /\b(?:href|src)=["']([^"']+)["']/g;

for (const match of html.matchAll(attributePattern)) {
  const reference = match[1].trim();
  if (
    !reference ||
    reference.includes('$') ||
    reference.startsWith('#') ||
    reference.startsWith('data:') ||
    /^[a-z][a-z0-9+.-]*:/i.test(reference)
  ) {
    continue;
  }
  references.add(reference.split(/[?#]/)[0]);
}

for (const match of html.matchAll(/\bimage:'([^']+)'/g)) {
  references.add(match[1]);
}

// The canonical playbook is loaded by fetch rather than an HTML attribute.
references.add('docs/playbook-source.md');

const missing = [];
for (const reference of references) {
  const target = path.resolve(root, reference);
  if (!target.startsWith(`${root}${path.sep}`)) {
    missing.push(`${reference} (escapes repository root)`);
    continue;
  }
  try {
    await access(target);
  } catch {
    missing.push(reference);
  }
}

if (missing.length) {
  console.error(`Missing or unsafe local references:\n${missing.map(item => `- ${item}`).join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Local references: OK (${references.size} checked).`);
}
