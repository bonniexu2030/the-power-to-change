// Run: node --test tests/illustrated-conversion.test.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');

const oldScenes={
 'evelyn-5':['vn-evelyn-ruth.html','evelyn-ruth-ch5'],
 'marcus-1':['vn-marcus-david.html','marcus-david-ch1'],
 'marcus-2':['vn-marcus-david-ch2.html','marcus-david-ch2'],
 'marcus-3':['vn-marcus-david-ch3.html','marcus-david-ch3'],
 'marcus-4':['vn-marcus-david-ch4.html','marcus-david-ch4'],
 'marcus-5':['vn-marcus-david-ch5.html','marcus-david-ch5'],
 'daniel-1':['vn-daniel-bennett-ch1.html','daniel-bennett-ch1'],
 'daniel-3-talk':['vn-daniel-sarah-ch3.html','daniel-sarah-ch3']
};
const newSceneIds=['evelyn-1','evelyn-2','evelyn-3','evelyn-4','daniel-2','daniel-3-intro','daniel-4','daniel-5'];
const expectedPortraits=['evelyn','ruth','lottie','marcus','david','daniel','sarah','bennett','thomas','whitmore'];
const expectedBackgrounds=['brooksKitchen','marcusRoom','meeting','campus','carterKitchen','hardware'];

test('all 15 playable chapters map to a VN and Daniel III also has a choice-sensitive second scene',()=>{
 const script=read('game.js');
 for(const role of ['evelyn','marcus','daniel'])for(let chapter=1;chapter<=5;chapter++){
  assert.match(script,new RegExp("'"+role+"-"+chapter+"(?:':|-(?:intro|talk)':)"),role+' chapter '+chapter);
 }
 assert.ok(script.includes("'daniel-3-intro'"));
 assert.ok(script.includes("'daniel-3-talk'"));
 assert.ok(script.includes('prepareIllustratedPresentation()'));
 assert.ok(script.includes('illustratedSceneKey()'));
 assert.ok(script.includes('if(PTC_FULL_ILLUSTRATED)prepareIllustratedPresentation()'));
 assert.ok(script.includes('ptcActiveIllustratedKey'));
});

test('all newly written scripts are valid, complete and use approved art identifiers',()=>{
 const sandbox={window:{}};
 vm.runInNewContext(read('vn-new-scenes.js'),sandbox);
 const scenes=sandbox.window.PTCNewScenes;
 assert.deepEqual(Object.keys(scenes).sort(),[...newSceneIds].sort());
 const cast=new Set(expectedPortraits);
 for(const [id,scene] of Object.entries(scenes)){
  assert.ok(scene.beats.length>=9,id+' should contain a complete dialogue');
  assert.ok(expectedBackgrounds.includes(scene.background),id+' must use approved background');
  assert.ok(cast.has(scene.left)&&cast.has(scene.right),id+' must use approved protagonists');
  assert.ok(scene.title&&scene.date&&scene.place,id+' missing scene context');
  for(const beat of scene.beats){
   assert.ok(beat.who==='narrator'||cast.has(beat.who),id+' has an unknown speaker');
   assert.ok(beat.text||beat.choice,id+' contains an empty beat');
   if(beat.choice){
    assert.ok(['first','second','third','fourth'].includes(beat.choice),id+' invalid branch');
    assert.ok(Object.keys(beat.variants||{}).length>=2,id+' missing branching variants');
   }
   for(const person of [beat.left,beat.right].filter(Boolean))assert.ok(cast.has(person),id+' missing portrait');
  }
 }
});

test('all original illustrated scenes retain their dialogue and completion signals',()=>{
 const main=read('game.js');
 for(const [key,[filename,signal]] of Object.entries(oldScenes)){
  const html=read(filename);
  assert.ok(html.includes('power-to-change-vn-finished'),filename+' lost finish message');
  assert.ok(html.includes(signal),filename+' lost completion signal');
  assert.ok(main.includes("'"+key+"'"),key+' lost scene mapping');
 }
});

test('the illustrated player has portraits, backgrounds, back, next, and skip controls',()=>{
 const html=read('vn-new.html');
 assert.ok(html.includes('src="artwork/portraits.js?'));
 assert.ok(html.includes('src="vn-new-scenes.js?'));
 for(const control of ['portrait-left','portrait-right','prev','next','skip','speaker','line','stage'])assert.ok(html.includes('id="'+control+'"'));
 assert.ok(html.includes("'power-to-change-vn-finished'"));
 assert.ok(html.includes('data.background'));
 assert.ok(html.includes('e.key'));
 assert.ok(html.includes('prefers-reduced-motion'));
});

test('the original progression, archives, two-stage choices and saves remain in the game',()=>{
 const js=read('game.js'),html=read('game.html'),css=read('game.css');
 assert.ok(js.includes("const SAVE_KEY = 'power-to-change-381-days-v1'"));
 assert.ok(js.includes("const ROLE_SAVE_PREFIX = 'power-to-change-381-days-role-v1-'"));
 for(const script of ['chapter-two.js','chapter-three.js','chapter-four.js','chapter-five.js','gameplay-extras.js'])assert.ok(html.includes('src="'+script+'?'));
 for(const fn of ['chooseChapter2','chooseChapter3','chooseChapter4','chooseChapter5','unlockChapterFourChoices','renderJournal','readRoleSave','store'])assert.ok(js.includes('function '+fn+'('));
 assert.ok(js.includes('ch2prep')&&js.includes('ch3talk')&&js.includes('ch4caseOpened'));
 assert.ok(html.includes('id="illustrated-dialog"')&&html.includes('id="illustrated-frame"'));
 assert.ok(css.includes('body.illustrated-mode #scene-body > .story-prose'));
 assert.ok(css.includes('body.illustrated-mode:not(.illustrated-ready)'));
 new Function(js);
 const newPage=read('vn-new.html');
 for(const script of [...newPage.matchAll(/<script(?:[^>]*)>([\s\S]*?)<\/script>/g)].map(x=>x[1]).filter(Boolean))new Function(script);
});
