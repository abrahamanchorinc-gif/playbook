import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [source, html] = await Promise.all([
  readFile(path.join(root, 'docs', 'playbook-source.md'), 'utf8'),
  readFile(path.join(root, 'index.html'), 'utf8')
]);

const failures = [];
const requireMatch = (condition, message) => {
  if (!condition) failures.push(message);
};

const partMarkers = ['PART B', 'PART C', 'PART D', 'PART E'];
let previousIndex = -1;
for (const marker of partMarkers) {
  const index = source.indexOf(`# ${marker}`);
  requireMatch(index > previousIndex, `${marker} is missing or out of order in the canonical source.`);
  previousIndex = index;
}

for (let step = 0; step <= 10; step += 1) {
  const pattern = new RegExp(`^## Step ${step} — .+$`, 'gm');
  const matches = source.match(pattern) || [];
  requireMatch(matches.length === 1, `Expected exactly one canonical Step ${step} heading.`);
}

requireMatch(
  html.includes("fetch('docs/playbook-source.md',{cache:'no-store'})"),
  'The app must load canonical content directly from docs/playbook-source.md.'
);
requireMatch(
  html.includes('Canonical playbook · verbatim source') &&
    html.includes('Canonical playbook · verbatim Step'),
  'Canonical source and step content must remain explicitly labelled as verbatim.'
);
requireMatch(
  html.includes('Friendly preview · app-authored') &&
    html.includes('Illustrative example · fictional project · AI-generated'),
  'App-authored previews and illustrative example content must remain clearly labelled.'
);
requireMatch(
  html.includes('window.WALKTHROUGH_V2 = true') &&
    html.includes('if(!window.WALKTHROUGH_V2)'),
  'The v1 compatibility implementation must remain present behind the v2 switch.'
);
requireMatch(
  html.includes("const V1_KEY = 'walkthrough-v1'") &&
    html.includes("const STORAGE_KEY = 'walkthrough-v2'") &&
    html.includes('migrateV1('),
  'Versioned persistence and v1 migration must remain wired.'
);

if (failures.length) {
  console.error(failures.map(failure => `- ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Canonical content contract: OK (Parts B–E, Steps 0–10, labels, v1 migration).');
}
