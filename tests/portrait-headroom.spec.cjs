// Desktop and mobile framing checks for the approved portrait artwork.
// Run: npx playwright test tests/portrait-headroom.spec.cjs --workers=1
const {test,expect}=require('@playwright/test');
const base='http://127.0.0.1:8765/';
test.setTimeout(90_000);
const paths=[
 'vn-new.html?scene=evelyn-1',
 'vn-evelyn-ruth.html',
 'vn-marcus-david.html',
 'vn-marcus-david-ch2.html',
 'vn-marcus-david-ch3.html',
 'vn-marcus-david-ch4.html',
 'vn-marcus-david-ch5.html',
 'vn-daniel-bennett-ch1.html',
 'vn-daniel-sarah-ch3.html'
];
test.beforeEach(async({page})=>{
 await page.route('https://fonts.googleapis.com/**',route=>route.abort());
 await page.route('https://fonts.gstatic.com/**',route=>route.abort());
});
for(const viewport of [{width:1360,height:900},{width:390,height:844}]){
 test('role selection portraits have visible top margin and equal dimensions '+viewport.width,async({page})=>{
  await page.setViewportSize(viewport);
  await page.goto(base+'game.html',{waitUntil:'domcontentloaded'});
  await page.evaluate(()=>localStorage.setItem('power-to-change-381-days-tutorial-v1','seen'));
  await page.locator('#cover-actions button').first().click();
  const imgs=page.locator('.role-card-portrait');
  await expect(imgs).toHaveCount(3);
  const frames=await imgs.evaluateAll(elements=>elements.map(el=>{
   const image=el.getBoundingClientRect(),art=el.closest('.role-art').getBoundingClientRect();
   const css=getComputedStyle(el);
   return {name:el.alt,naturalWidth:el.naturalWidth,naturalHeight:el.naturalHeight,topMargin:Math.round(image.top-art.top),
    bottomGap:Math.round(art.bottom-image.bottom),width:Math.round(image.width),height:Math.round(image.height),
    pos:css.objectPosition,fit:css.objectFit};
  }));
  console.log('CARD_FRAMING '+viewport.width+' '+JSON.stringify(frames));
  for(const frame of frames){
   expect(frame.naturalWidth,frame.name+' image loaded').toBeGreaterThan(0);
   expect(frame.naturalHeight,frame.name+' image loaded').toBeGreaterThan(0);
   expect(frame.topMargin,frame.name+' top breathing room').toBeGreaterThanOrEqual(7);
   expect(frame.bottomGap,frame.name+' image fills lower area').toBeGreaterThanOrEqual(-1);
   expect(frame.pos,frame.name+' crop keeps full hair').toBe('50% 0%');
   expect(frame.fit).toBe('cover');
  }
  expect(new Set(frames.map(f=>f.topMargin)).size).toBe(1);
 });
 test('all nine original and shared illustrated layouts preserve face framing '+viewport.width,async({page})=>{
  await page.setViewportSize(viewport);
  for(const path of paths){
    await page.goto(base+path,{waitUntil:'domcontentloaded'});
    const shared=path.startsWith('vn-new');
    const stage=page.locator(shared?'#stage':'.scene');
    await expect(stage).toBeVisible();
    const portraits=page.locator('.portrait');
    await expect(portraits).toHaveCount(2);
    if(shared){
      for(let i=0;i<9&&await page.locator('.portrait:not([hidden])').count()===0;i++)
        await page.locator('#next').click();
    }else{
      // Narration hides the legacy dialogue card; advance into a speaking beat
      // so nameplate-to-dialogue clearance measures real visible surfaces.
      for(let i=0;i<14&&!(await page.locator('.dialogue-box').isVisible());i++)
        await page.locator('#next').click();
      await expect(page.locator('.dialogue-box')).toBeVisible();
    }
    const metrics=await page.evaluate(shared=>{
      const box=document.querySelector(shared?'#stage':'.scene').getBoundingClientRect();
      const dialogue=document.querySelector(shared?'.dialogue':'.dialogue-box').getBoundingClientRect();
      const images=[...document.querySelectorAll('.portrait')].map(el=>{
        const rect=el.getBoundingClientRect();
        const css=getComputedStyle(el);
        return {top:Math.round(rect.top-box.top),bottom:Math.round(box.bottom-rect.bottom),
          height:Math.round(rect.height),width:Math.round(rect.width),pos:css.objectPosition,
          fit:css.objectFit,src:!!el.getAttribute('src'),naturalWidth:el.naturalWidth};
      });
      const labels=[...document.querySelectorAll('.portrait-label')]
        .filter(el=>getComputedStyle(el).visibility!=='hidden'&&!el.hasAttribute('hidden'))
        .map(el=>Math.round(el.getBoundingClientRect().bottom-dialogue.top));
      return {frameHeight:Math.round(box.height),images,labelsFromDialogueTop:labels};
    },shared);
    console.log('VN_FRAMING '+viewport.width+' '+path+' '+JSON.stringify(metrics));
    for(const labelBottomGap of metrics.labelsFromDialogueTop){
      expect(labelBottomGap,path+' nameplate must stay above the dialogue text box').toBeLessThanOrEqual(15);
    }
    for(const frame of metrics.images){
      // The art keeps its original width/height; only the box placement/crop changed.
      if(frame.height===0)continue; // a hidden portrait on a narrator beat
      expect(frame.top,path+' should not clip at top').toBeGreaterThan(15);
      expect(frame.bottom,path+' should remain inside the framed scene').toBeGreaterThanOrEqual(-5);
      expect(frame.fit).toBe('cover');
      expect(frame.pos,path+' should keep the entire face and hair visible').toBe('50% 0%');
      if(frame.src)expect(frame.naturalWidth,path+' loads approved artwork').toBeGreaterThan(0);
    }
  }
 });
}
