// Regression checks for nine sourced, choice-faithful poetic end screens.
// Run with: node --test tests/poetic-ending.test.cjs
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=(name)=>fs.readFileSync(path.join(root,name),'utf8');
const expected={evelyn:['rebuilding','ties','footing'],marcus:['costly','organizer','teacher'],daniel:['stand','hesitant','observer']};
function getConclusions(){
 const markup=read('poetic-final.html');
 const script=markup.match(/<script>([\s\S]*?)<\/script>/)?.[1];
 assert.ok(script,'ending script exists');
 new vm.Script(script);
 const raw=script.match(/const ENDINGS=(\{[\s\S]*?\});\s*const params=/)?.[1];
 assert.ok(raw,'find nine-ending dataset');
 return {markup,script,entries:JSON.parse(raw)};
}
test('all nine story-accurate endings have unique summaries and documented quotes',()=>{
 const {entries}=getConclusions();
 assert.deepEqual(Object.keys(entries).sort(),Object.keys(expected).sort());
 const unique=new Set();
 for(const [role,ids] of Object.entries(expected)){
  assert.deepEqual(Object.keys(entries[role]),ids);
  for(const id of ids){
   const e=entries[role][id];
   assert.equal(e.lines.length,4,role+'/'+id);
   assert.ok(e.lines.every(line=>line.length>=13&&line.length<115),role+'/'+id);
   assert.match(e.quote,/\w/);
   assert.match(e.credit,/\d{4}/);
   assert.match(e.source,/^https:\/\//);
   assert.ok(!unique.has(e.quote),'Every outcome has its own quote: '+role+'/'+id);
   unique.add(e.quote);
  }
 }
 assert.equal(unique.size,9);
});
test('final presentation is vintage parchment and preserves animation controls and readable reduced motion',()=>{
 const {markup}=getConclusions();
 assert.match(markup,/class="viewport"/);
 assert.match(markup,/class="summary"/);
 assert.match(markup,/class="quote-group"/);
 assert.match(markup,/summary\.style\.filter/);
 assert.match(markup,/quote\.style\.textShadow/);
 for(const id of ['replay','pause','skip'])assert.match(markup,new RegExp('id="'+id+'"'));
 assert.match(markup,/prefers-reduced-motion/);
 assert.doesNotMatch(markup,/class="antique-cover"|class="book"/);
 assert.doesNotMatch(markup,/<audio|autoplay\s*=\s*true/);
});
test('chapter five finale comes after complete epilogue, historical sources and reflection',()=>{
 const game=read('game.js'),html=read('game.html');
 const fn=game.slice(game.indexOf('function renderEndingChapter5()'),game.indexOf('function relationshipLabel('));
 assert.ok(fn.indexOf('historical-afterword')>=0);
 assert.ok(fn.indexOf('reflection-card')>fn.indexOf('historical-afterword'));
 assert.ok(fn.indexOf('poetic-ending-entry')>fn.indexOf('reflection-card'));
 assert.ok(fn.includes("body.querySelector('#open-poetic-conclusion').addEventListener('click',openPoeticFinalConclusion)"));
 assert.ok(fn.includes('.historical-afterword, .reflection-card, .scene-actions, .poetic-ending-entry'));
 assert.ok(game.includes('const id=finalEndingId()'));
 assert.ok(game.includes("dialog.showModal()"));
 assert.match(html,/poetic-final\.html|poetic-final-frame/);
 assert.match(html,/poetic-final-overlay\.css/);
 assert.match(html,/poetic-final-close/);
 assert.ok(!game.includes("screen='poetic'"),'no changes to saved screen values');
});
test('original saved state handling and outcome thresholds stay unchanged',()=>{
 const game=read('game.js');
 assert.ok(game.includes("if(['scene','result','ending'].includes(screen))state.screen=screen"));
 assert.ok(game.includes("stability<=35?'rebuilding':network>=65?'ties':'footing'"));
 assert.ok(game.includes("stability<=40?'costly':contribution>=65?'organizer':'teacher'"));
 assert.ok(game.includes("contribution>=60&&stability<60?'stand':contribution>=40?'hesitant':'observer'"));
 assert.ok(game.includes('function finalRelationshipNotes()'));
 assert.ok(game.includes("screen='ending';store();render()"));
});
