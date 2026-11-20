// Run: node --test tests/artwork-integrity.test.cjs
// Read-only regression checks: protects approved artwork and the existing game flow.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');

const cast = ['evelyn','ruth','lottie','marcus','david','daniel','sarah','bennett','thomas','whitmore'];
const scenes = {
  'vn-evelyn-ruth.html': 'brooksKitchen',
  'vn-marcus-david.html': 'marcusRoom',
  'vn-marcus-david-ch2.html': 'meeting',
  'vn-marcus-david-ch3.html': 'campus',
  'vn-marcus-david-ch4.html': 'marcusRoom',
  'vn-marcus-david-ch5.html': 'marcusRoom',
  'vn-daniel-bennett-ch1.html': 'hardware',
  'vn-daniel-sarah-ch3.html': 'carterKitchen'
};

test('all ten approved portraits are embedded as JPEG data URIs', () => {
  const source = read('artwork/portraits.js');
  const matches = [...source.matchAll(/"([a-z]+)":"data:image\/jpeg;base64,([^"]+)"/g)];
  assert.deepEqual(matches.map(m => m[1]), cast);
  for (const [, name, encoded] of matches) {
    const image = Buffer.from(encoded, 'base64');
    assert.ok(image.length > 1000, name + ' portrait is empty');
    assert.equal(image.subarray(0, 3).toString('hex'), 'ffd8ff', name + ' is not JPEG');
    assert.equal(image.subarray(-2).toString('hex'), 'ffd9', name + ' is truncated');
  }
});

test('all illustrated conversations load their portraits and correct clean background', () => {
  for (const [filename, key] of Object.entries(scenes)) {
    const html = read(filename);
    const assetFile = 'artwork/background-' + key + '.js';
    assert.ok(fs.existsSync(path.join(root, assetFile)), filename + ' has missing background');
    assert.ok(html.includes('src="artwork/portraits.js?'), filename + ' has missing portrait loader');
    assert.ok(html.includes('src="' + assetFile + '?'), filename + ' has missing background loader');
    assert.ok(html.includes('ptcArt.backgrounds.' + key), filename + ' has wrong background key');
    assert.ok(html.includes('ptcArt.portraits[person]'), filename + ' has missing dynamic character art');
    assert.ok(html.includes('setState()'), filename + ' lost dialogue presentation');
    const background = read(assetFile);
    assert.ok(background.includes('backgrounds.' + key + '="data:image/jpeg;base64,'), assetFile + ' lacks image');
  }
});

test('interactive game state, branches, saves and cast gallery remain connected', () => {
  const html = read('game.html');
  const js = read('game.js');
  assert.ok(html.includes('artwork/portraits.js?'));
  assert.ok(js.includes("const SAVE_KEY = 'power-to-change-381-days-v1'"));
  assert.ok(js.includes("const ROLE_SAVE_PREFIX = 'power-to-change-381-days-role-v1-'"));
  assert.ok(js.includes('const castCharacters=['));
  for (const character of cast) assert.ok(js.includes("['" + character + "'"), character + ' missing from gallery');
  for (const extra of ['chapter-two.js','chapter-three.js','chapter-four.js','chapter-five.js','gameplay-extras.js','game.js']) {
    assert.ok(html.includes('src="' + extra + '?'), 'missing script ' + extra);
  }
  for (const page of Object.keys(scenes)) assert.ok(fs.existsSync(path.join(root, page)), page + ' is missing');
});
