// Portrait framing and headroom visual regression checks.
// Run: node --test tests/portrait-headroom.test.cjs
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const legacy=[
 'vn-evelyn-ruth.html',
 'vn-marcus-david.html','vn-marcus-david-ch2.html',
 'vn-marcus-david-ch3.html','vn-marcus-david-ch4.html','vn-marcus-david-ch5.html',
 'vn-daniel-bennett-ch1.html','vn-daniel-sarah-ch3.html'
];
test('three character-selection portrait images fill their card edges with no gray top stripe',()=>{
 const css=read('game.css');
 assert.match(css,/\.role-art \.role-card-portrait\{[^}]+inset:0;top:0;right:0;bottom:0;left:0;[^}]+width:100%;height:100%;object-fit:cover;object-position:50% 6%/);
 assert.doesNotMatch(css,/\.role-art \.role-card-portrait\{[^}]*top:10px/);
 assert.doesNotMatch(css,/\.role-art \.role-card-portrait\{top:8px/);
 assert.match(css,/\.role-art:has\(\.role-card-portrait\)::before\{display:none;\}/);
 assert.match(read('game.html'),/game\.css\?v=20261125-portrait-no-stripe-v1/,'Chrome must fetch the updated CSS instead of the prior version');
 const game=read('game.js');
 assert.ok(game.includes("for(const [id,role] of Object.entries(game))"));
 assert.ok(game.includes("img.src=portraitSource"));
 assert.ok(game.includes("img.alt='Portrait of '+role.name"));
});
test('all eight legacy illustrated conversations share lower picture frames and top-first crop',()=>{
 for(const f of legacy){
  const h=read(f);
  assert.match(h,/\.portrait\{position:absolute;bottom:17%;/,'legacy desktop bottom: '+f);
  assert.match(h,/object-fit:cover;object-position:center top;/,'full face/hair: '+f);
  assert.doesNotMatch(h,/object-position:center (?:20|24)%/,'legacy override must not crop the hair: '+f);
  assert.match(h,/\.portrait\{bottom:22%;width:36%;height:32%;border-width:4px\}/,'responsive shift: '+f);
  assert.match(h,/\.portrait-label\{position:absolute;bottom:32%;/,'desktop nameplates clear the text box: '+f);
  assert.match(h,/\.portrait-label\{bottom:36%;font-size:9px;padding:5px\}/,'mobile nameplates clear the text box: '+f);
  assert.match(h,/\.portrait\.active/,'active/inactive appearance retained: '+f);
  if(f.startsWith('vn-daniel'))assert.match(h,/height:35%;bottom:24%/,'Daniel extra narrow case: '+f);
  const inline=[...h.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(Boolean);
  for(const s of inline)assert.doesNotThrow(()=>new vm.Script(s),'script valid: '+f);
 }
});
test('new illustrated player matches revised crop and lower placement without shrinking',()=>{
 const h=read('vn-new.html');
 assert.match(h,/\.portrait\{position:absolute;bottom:168px;/);
 assert.match(h,/width:clamp\(110px,25%,290px\);height:clamp\(195px,50%,430px\)/);
 assert.match(h,/object-fit:cover;object-position:center top;/);
 assert.match(h,/\.portrait\{width:35%;height:40%;bottom:181px;border-width:4px\}/);
 assert.match(h,/\.portrait-label\{position:absolute;bottom:169px/);
 assert.match(h,/\.portrait-label\{bottom:182px/);
 assert.match(h,/\.portrait\.active/);
});
test('real game uses cache-busted stylesheet and every real illustrated route',()=>{
 const h=read('game.html'),js=read('game.js');
 assert.match(h,/game\.css\?v=20261125-portrait-no-stripe-v1/);
 assert.match(h,/game\.js\?v=20261124-portrait-headroom-v1/);
 assert.match(js,/v:'20261124-portrait-headroom-v1'/);
 for(const id of ['evelyn-5','marcus-1','marcus-2','marcus-3','marcus-4','marcus-5','daniel-1','daniel-3-talk'])
   assert.ok(js.includes("'"+id+"':{file:"),'legacy scene retained: '+id);
 for(const id of ['evelyn-1','evelyn-2','evelyn-3','evelyn-4','daniel-2','daniel-3-intro','daniel-4','daniel-5'])
   assert.ok(js.includes("'"+id+"':{newId:"),'shared new scene retained: '+id);
 assert.match(js,/function finalEndingId\(\)/);
 assert.match(js,/function openGameTutorial\(/);
 assert.match(js,/function renderEndingChapter5\(/);
});
