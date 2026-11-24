// Browser integration checks across all nine final epilogues.
const {test,expect}=require('@playwright/test');
const base='http://127.0.0.1:8765/game.html';
test.setTimeout(60_000);
const matrix=[
 ['evelyn','rebuilding',27,68,30,'Still Rebuilding'],
 ['evelyn','ties',60,75,42,'Community Ties'],
 ['evelyn','footing',60,42,40,'Finding Her Footing'],
 ['marcus','costly',37,53,70,'Costly Commitment'],
 ['marcus','organizer',58,55,73,'Emerging Organizer'],
 ['marcus','teacher',58,55,43,'A Future Teacher'],
 ['daniel','stand',48,51,70,'A Visible Stand'],
 ['daniel','hesitant',63,51,45,'A Hesitant Ally'],
 ['daniel','observer',63,51,23,'The Comfortable Observer']
];
function fixture(role,stability,network,contribution){
 const choices={
  evelyn:{ch1:'ride',ch2:'help',ch3talk:'truth',ch3:'shared',ch4:'home',ch5:'ride'},
  marcus:{ch1:'quiet',ch2:'schedule',ch2prep:'confirm',ch3talk:'plan',ch3:'behind',ch4:'boundaries',ch5:'teach'},
  daniel:{ch1:'question',ch2:'quiet_sale',ch3talk:'listen',ch3:'private',ch4:'private',ch5:'consistent'}
 }[role];
 const relationships={evelyn:{ruth:1,lottie:1},marcus:{mother:1,david:1},daniel:{sarah:1,bennett:-1}}[role];
 return {version:1,role,chapter:5,screen:'ending',stats:{stability,network,contribution},relationships,choices};
}
test.beforeEach(async({page})=>{
 await page.route('https://fonts.googleapis.com/**',route=>route.abort());
 await page.route('https://fonts.gstatic.com/**',route=>route.abort());
});
for(const [role,id,stability,network,contribution,title] of matrix){
 test(role+'/'+id+' opens unique last scene after sources and reflection without changing save',async({page})=>{
  await page.goto(base,{waitUntil:'domcontentloaded'});
  const saved=fixture(role,stability,network,contribution);
  await page.evaluate(data=>{
   localStorage.setItem('power-to-change-381-days-v1',JSON.stringify(data));
   localStorage.setItem('power-to-change-animated-text-v1','off');
  },saved);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.getByRole('heading',{name:title,exact:true})).toBeVisible();
  await expect(page.locator('.historical-afterword')).toBeVisible();
  await expect(page.locator('.reflection-card')).toBeVisible();
  const entry=page.locator('.poetic-ending-entry');
  await expect(entry).toBeVisible();
  await entry.locator('#open-poetic-conclusion').click();
  const dialog=page.locator('#poetic-final-dialog');
  await expect(dialog).toBeVisible();
  await expect(page.locator('#poetic-final-frame')).toHaveAttribute('src',new RegExp('role='+role+'&ending='+id+'&embed=1'));
  const embedded=page.frameLocator('#poetic-final-frame');
  await expect(embedded.locator('html')).toHaveClass(/embedded/);
  await expect(embedded.locator('.viewport')).toBeVisible();
  await embedded.locator('#skip').click();
  await expect(embedded.locator('.quote-group')).toBeVisible();
  const seen=await page.evaluate(()=>JSON.parse(localStorage.getItem('power-to-change-381-days-v1')));
  expect(seen.stats).toEqual(saved.stats);
  expect(seen.choices).toEqual(saved.choices);
  expect(seen.screen).toBe('ending');
  await page.locator('#poetic-final-close').click();
  await expect(dialog).toBeHidden();
  await expect(page.locator('.historical-afterword')).toBeVisible();
 });
}
test('final scene supports replay and preserves the option to explore another perspective',async({page})=>{
 await page.goto(base,{waitUntil:'domcontentloaded'});
 const saved=fixture('evelyn',61,45,41);
 await page.evaluate(data=>{
  localStorage.setItem('power-to-change-381-days-v1',JSON.stringify(data));
  localStorage.setItem('power-to-change-animated-text-v1','off');
 },saved);
 await page.reload({waitUntil:'domcontentloaded'});
 await page.locator('#open-poetic-conclusion').click();
 const embed=page.frameLocator('#poetic-final-frame');
 await embed.locator('#skip').click();
 await embed.locator('#replay').click();
 await expect(embed.locator('#status')).toContainText('Writing');
 await page.locator('#poetic-final-other').click();
 await expect(page.locator('#poetic-final-dialog')).toBeHidden();
 await expect(page.locator('#app')).toContainText('Choose');
 const roleSave=await page.evaluate(()=>JSON.parse(localStorage.getItem('power-to-change-381-days-role-v1-evelyn')));
 expect(roleSave.screen).toBe('ending');
});
