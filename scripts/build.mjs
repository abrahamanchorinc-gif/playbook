import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');

await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'docs'), { recursive: true });

await Promise.all([
  cp(path.join(root, 'index.html'), path.join(output, 'index.html')),
  cp(path.join(root, '_headers'), path.join(output, '_headers')),
  cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true }),
  cp(
    path.join(root, 'docs', 'playbook-source.md'),
    path.join(output, 'docs', 'playbook-source.md')
  )
]);

console.log('Built deployable static site in dist/.');
