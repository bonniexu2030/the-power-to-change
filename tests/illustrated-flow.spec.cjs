// Browser regression: run with npx playwright test tests/illustrated-flow.spec.cjs
const {test,expect}=require('@playwright/test');
const base='http://127.0.0.1:8765/game.html';
test.setTimeout(90_000);
function fixture(role,chapter,talkSelected=true){
 const options={evelyn:{ch1:'ride',ch2:'help',ch3talk:'truth',ch3:'shared',ch4:'home'},
   marcus:{ch1:'quiet',ch2:'schedule',ch2prep:'confirm',ch3talk:'plan',ch3:'behind',ch4:'boundaries'},
   daniel:{ch1:'question',ch2:'quiet_sale',ch3talk:'listen',ch3:'private',ch4:'private'}};
 const choices={};
 if(chapter>=2)choices.ch1=options[role].ch1;
 if(chapter>=3){choices.ch2=options[role].ch2;if(role==='marcus')choices.ch2prep='confirm';}
 if(chapter>=3&&talkSelected)choices.ch3talk=options[role].ch3talk;
 if(chapter>=4){choices.ch3=options[role].ch3;if(!choices.ch3talk)choices.ch3talk=options[role].ch3talk;}
 if(chapter>=5)choices.ch4=options[role].ch4;
 const relationships={evelyn:{ruth:0,lottie:1},marcus:{mother:0,david:1},daniel:{sarah:1,bennett:0}}[role];
 return {version:1,role,chapter,stats:{stability:58,network:55,contribution:40},relationships,choices,screen:'scene'};
}
const cases=[];
for(const role of ['evelyn','marcus','daniel'])for(let ch=1;ch<=5;ch++)cases.push([role,ch]);
test.beforeEach(async({page})=>{
 await page.route('https://fonts.googleapis.com/**',route=>route.abort());
 await page.route('https://fonts.gstatic.com/**',route=>route.abort());
});
for(const [role,chapter] of cases){
 const key=role+'-'+chapter+(role==='daniel'&&chapter===3?'-talk':'');
 test(role+' chapter '+chapter+' loads, finishes and restores original choices',async({page})=>{
  await page.goto(base,{waitUntil:'domcontentloaded'});
  const saved=fixture(role,chapter);
  await page.evaluate(data=>localStorage.setItem('power-to-change-381-days-v1',JSON.stringify(data)),saved);
  await page.reload({waitUntil:'domcontentloaded'});
  const dialog=page.locator('#illustrated-dialog');
  await expect(dialog).toBeVisible({timeout:12000});
  await expect(page.locator('#scene-body > .story-prose')).toBeHidden();
  await expect(page.locator('#illustrated-frame')).toHaveAttribute('src',/vn-(?:new|marcus|evelyn|daniel)/);
  const frame=page.frameLocator('#illustrated-frame');
  const isNew=role==='evelyn'&&chapter<5||role==='daniel'&&[2,4,5].includes(chapter);
  if(isNew){
   await expect(frame.locator('#line')).not.toBeEmpty();
   await expect(frame.locator('#portrait-left')).toHaveAttribute('src',/^data:image\/jpeg;base64,/);
   await expect.poll(async()=>frame.locator('#stage').evaluate(node=>node.style.getPropertyValue('--scene-image').startsWith('url("data:image/jpeg;base64,')),{timeout:10000}).toBe(true);
   await frame.locator('#next').click();
   await expect(frame.locator('#counter')).toContainText('02 /');
   await frame.locator('#prev').click();
   await expect(frame.locator('#counter')).toContainText('01 /');
   await frame.locator('#skip').click();
  }else if(role==='evelyn'&&chapter===5){
   await page.locator('#illustrated-close').click();
  }else{
   await frame.locator('#skip-scene').click();
  }
  await expect(dialog).toBeHidden({timeout:10000});
  const now=await page.evaluate(()=>JSON.parse(localStorage.getItem('power-to-change-381-days-v1')));
  expect(now.illustratedSeen?.[key]).toBe(true);
  expect(now.screen).toBe('scene');
  expect(now.chapter).toBe(chapter);
  expect(now.choices).toEqual(saved.choices);
  expect(now.stats).toEqual(saved.stats);
  if(chapter===4){
   await expect(page.locator('.chapter-four-evidence')).toBeVisible();
   await expect(page.locator('#ch4-choice-area')).toBeHidden();
  }else{
   await expect(page.locator('#scene-body .prompt')).toBeVisible();
   await expect(page.locator('#scene-body .choice').first()).toBeVisible();
  }
 });
}
test('Daniel chapter III begins illustrated, keeps the preliminary choice, then opens the existing conversation',async({page})=>{
 await page.goto(base,{waitUntil:'domcontentloaded'});
 const saved=fixture('daniel',3,false);
 await page.evaluate(data=>localStorage.setItem('power-to-change-381-days-v1',JSON.stringify(data)),saved);
 await page.reload({waitUntil:'domcontentloaded'});
 const modal=page.locator('#illustrated-dialog');
 await expect(modal).toBeVisible();
 await expect(page.locator('#illustrated-frame')).toHaveAttribute('src',/vn-new\.html/);
 await page.frameLocator('#illustrated-frame').locator('#skip').click();
 await expect(modal).toBeHidden();
 await expect(page.locator('#chapter-three-talk .choice').first()).toBeVisible();
 await page.locator('#chapter-three-talk .choice').first().click();
 await expect(modal).toBeVisible();
 await expect(page.locator('#illustrated-frame')).toHaveAttribute('src',/vn-daniel-sarah-ch3\.html/);
 await page.frameLocator('#illustrated-frame').locator('#skip-scene').click();
 await expect(modal).toBeHidden();
 await expect(page.locator('#chapter-three-choices .choice').first()).toBeVisible();
 const now=await page.evaluate(()=>JSON.parse(localStorage.getItem('power-to-change-381-days-v1')));
 expect(now.illustratedSeen['daniel-3-intro']).toBe(true);
 expect(now.illustratedSeen['daniel-3-talk']).toBe(true);
 expect(now.choices.ch3talk).toBe('listen');
});
test('reloading a viewed chapter shows original choices and replay control without restarting the scene',async({page})=>{
 await page.goto(base,{waitUntil:'domcontentloaded'});
 const save=fixture('evelyn',2);
 save.illustratedSeen={'evelyn-2':true};
 await page.evaluate(data=>localStorage.setItem('power-to-change-381-days-v1',JSON.stringify(data)),save);
 await page.reload({waitUntil:'domcontentloaded'});
 await expect(page.locator('#illustrated-dialog')).toBeHidden();
 await expect(page.locator('.illustrated-cue button')).toBeVisible();
 await expect(page.locator('#scene-body .choice').first()).toBeVisible();
 await page.locator('.illustrated-cue button').click();
 await expect(page.locator('#illustrated-dialog')).toBeVisible();
 await page.locator('#illustrated-close').click();
 await expect(page.locator('#illustrated-dialog')).toBeHidden();
});


for(const [role,choice,expected] of [
 ['evelyn','walk',{stability:46,network:55,contribution:55}],
 ['marcus','public',{stability:50,network:62,contribution:56}],
 ['daniel','agree',{stability:66,network:53,contribution:36}]
]){
 test(role+' Chapter I decision still changes stats and persists on reload',async({page})=>{
  await page.goto(base,{waitUntil:'domcontentloaded'});
  const state=fixture(role,1);
  await page.evaluate(s=>localStorage.setItem('power-to-change-381-days-v1',JSON.stringify(s)),state);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#illustrated-dialog')).toBeVisible();
  await page.locator('#illustrated-close').click();
  await expect(page.locator('#choices .choice').first()).toBeVisible();
  await page.locator('#choices .choice').first().click();
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('power-to-change-381-days-v1')));
  expect(saved.screen).toBe('result');
  expect(saved.choices.ch1).toBe(choice);
  expect(saved.stats).toEqual(expected);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#illustrated-dialog')).toBeHidden();
  await expect(page.locator('#scene-body .consequence')).toBeVisible();
  const again=await page.evaluate(()=>JSON.parse(localStorage.getItem('power-to-change-381-days-v1')));
  expect(again.choices.ch1).toBe(choice);
 });
}
test('Chapter IV still requires examining the courthouse file before choosing',async({page})=>{
 await page.goto(base,{waitUntil:'domcontentloaded'});
 const state=fixture('evelyn',4);
 await page.evaluate(s=>localStorage.setItem('power-to-change-381-days-v1',JSON.stringify(s)),state);
 await page.reload({waitUntil:'domcontentloaded'});
 await expect(page.locator('#illustrated-dialog')).toBeVisible();
 await page.locator('#illustrated-close').click();
 await expect(page.locator('#ch4-choice-area')).toBeHidden();
 await page.locator('#ch4-open-file').click();
 await expect(page.locator('#casefile')).toBeVisible();
 await page.locator('#casefile [data-close="casefile"]').click();
 await expect(page.locator('#ch4-choice-area')).toBeVisible();
 await page.locator('#ch4-choices .choice').first().click();
 const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('power-to-change-381-days-v1')));
 expect(saved.ch4caseOpened).toBe(true);
 expect(saved.choices.ch4).toBe('recover');
 expect(saved.screen).toBe('result');
});
test('Chapter V completes its choice and personal ending without loss of saved progress',async({page})=>{
 await page.goto(base,{waitUntil:'domcontentloaded'});
 const state=fixture('evelyn',5);
 await page.evaluate(s=>localStorage.setItem('power-to-change-381-days-v1',JSON.stringify(s)),state);
 await page.reload({waitUntil:'domcontentloaded'});
 await expect(page.locator('#illustrated-dialog')).toBeVisible();
 await page.locator('#illustrated-close').click();
 await page.locator('#chapter-five-choices .choice').first().click();
 await expect(page.locator('#continue-actions button').first()).toBeVisible();
 await page.locator('#continue-actions button').first().click();
 await expect(page.locator('.epilogue-title')).toBeVisible();
 await page.reload({waitUntil:'domcontentloaded'});
 await expect(page.locator('.epilogue-title')).toBeVisible();
 const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('power-to-change-381-days-v1')));
 expect(saved.screen).toBe('ending');
 expect(saved.choices.ch5).toBe('ride');
});
