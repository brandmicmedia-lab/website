import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');
const startMarker = '<script id="schema-json-ld" type="application/ld+json">';
const endMarker = '</script>';

const startIndex = html.indexOf(startMarker);
if (startIndex === -1) {
  console.error('ERROR: schema-json-ld script tag not found');
  process.exit(1);
}

const jsonStart = startIndex + startMarker.length;
const jsonEnd = html.indexOf(endMarker, jsonStart);
const jsonString = html.substring(jsonStart, jsonEnd).trim();

try {
  const parsed = JSON.parse(jsonString);
  console.log('SUCCESS: JSON-LD is valid!');
  console.log('Schema @graph count:', parsed['@graph'].length);
  parsed['@graph'].forEach((item, i) => {
    console.log(`  [${i + 1}] Type: ${item['@type']}, ID: ${item['@id'] || 'N/A'}`);
  });
} catch (err) {
  console.error('JSON parse error:', err);
  process.exit(1);
}
