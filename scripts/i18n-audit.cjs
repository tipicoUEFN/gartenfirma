const fs = require('fs');
const path = require('path');

const root = process.cwd();
const locales = ['de-AT', 'en', 'sl', 'hr', 'hu'];

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, out);
    } else if (/\.(js|jsx|ts|tsx)$/.test(name)) {
      out.push(full);
    }
  }
  return out;
}

function hasPath(obj, key) {
  const parts = key.split('.');
  let cur = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== 'object' || !(part in cur)) {
      return false;
    }
    cur = cur[part];
  }
  return true;
}

const localeData = Object.fromEntries(
  locales.map((lng) => {
    const file = path.join(root, 'public', 'locales', lng, 'translation.json');
    return [lng, JSON.parse(fs.readFileSync(file, 'utf8'))];
  }),
);

const srcFiles = walk(path.join(root, 'src'));
const keyRegex = /\bt\(\s*['\"]([^'\"]+)['\"]/g;
const usedKeys = new Set();

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = keyRegex.exec(content)) !== null) {
    usedKeys.add(match[1]);
  }
}

const missing = Object.fromEntries(locales.map((lng) => [lng, []]));

for (const key of [...usedKeys].sort()) {
  for (const lng of locales) {
    if (!hasPath(localeData[lng], key)) {
      missing[lng].push(key);
    }
  }
}

const missingCount = Object.values(missing).reduce((acc, arr) => acc + arr.length, 0);

if (missingCount > 0) {
  console.error('i18n audit failed: missing translation keys detected.');
  console.error(JSON.stringify({ usedKeyCount: usedKeys.size, missing }, null, 2));
  process.exit(1);
}

console.log(`i18n audit passed. Used keys: ${usedKeys.size}. Locales checked: ${locales.join(', ')}`);
