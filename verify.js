import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('dist/index.html', 'utf8');
console.log('HTML size:', html.length, 'bytes');

const assetMatches = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
console.log('Discovered assets:', assetMatches);

let allGood = true;
for (const asset of assetMatches) {
  if (asset.startsWith('http')) continue;
  const filePath = path.join('dist', asset.replace(/^\//, ''));
  const exists = fs.existsSync(filePath);
  console.log(`Checking ${filePath}:`, exists ? 'OK' : 'MISSING');
  if (!exists) allGood = false;
}

if (!allGood) {
  console.error('Asset verification failed!');
  process.exit(1);
} else {
  console.log('BUILD ASSETS INTEGRITY VERIFICATION PASSED!');
}
