// Browser regression for integrated first-run tutorial and removal of optional map.
// Requires local server on http://127.0.0.1:8765.
const {test,expect}=require('@playwright/test');
const gameUrl='http://127.0.0.1:8765/game.html';
test.setTimeout(90_000);
test.beforeEach(async({page})=>{
 await page.route('https://fonts.googleapis.com/**',route=>route.abort());
 await page.route('https://fonts.gstatic.com/**',route=>route.abort());
});

test('first-time player gets approved tutorial before character selection, then advances',async({page})=>{
 await page.goto(gameUrl,{waitUntil:'domcontentloaded'});
 await expect(page.locator('#game-tutorial-dialog')).toBeHidden();
 await page.locator('#cover-actions button').first().click();
 const dialog=page.locator('#game-tutorial-dialog');
 await expect(dialog).toBeVisible();
 const tutor=page.frameLocator('#game-tutorial-frame');
 await expect(tutor.locator('#guide-heading')).toContainText('ordinary moments');
 await tutor.locator('#continue').click();
 await expect(tutor.locator('#guide-heading')).toContainText('Listen before');
 await tutor.locator('#next-line').click();
 await expect(tutor.locator('.speaker')).toContainText('2 / 3');
 await tutor.locator('#prev-line').click();
 await expect(tutor.locator('.speaker')).toContainText('1 / 3');
 await tutor.locator('#history-toggle').click();
 await expect(tutor.locator('#history-panel')).toBeVisible();
 await tutor.locator('#history-close').click();
 await tutor.locator('#continue').click();
 await expect(tutor.locator('#guide-heading')).toContainText('Every choice');
 await tutor.locator('[data-choice="0"]').click();
 await expect(tutor.locator('#result-msg')).toContainText('+10 Network');
 await expect(tutor.locator('.score-value').nth(1)).toHaveText('60');
 await tutor.locator('#continue').click();
 await expect(tutor.locator('#guide-heading')).toContainText('Keep the record');
 await tutor.locator('[data-tool="archive"]').click();
 await expect(tutor.locator('#tool-panel')).toContainText('Historical Archive');
 await tutor.locator('[data-tool="saves"]').click();
 await expect(tutor.locator('#tool-panel')).toContainText('Restart');
 await tutor.locator('#continue').click();
 await expect(tutor.locator('#guide-heading')).toContainText('file is yours');
 await tutor.locator('#continue').click();
 await expect(dialog).toBeHidden();
 await expect(page.getByRole('heading',{name:'Choose your perspective.'})).toBeVisible();
 await expect(page.locator('#role-list .role-card')).toHaveCount(3);
 expect(await page.evaluate(()=>localStorage.getItem('power-to-change-381-days-tutorial-v1'))).toBe('seen');
 expect(await page.evaluate(()=>localStorage.getItem('power-to-change-381-days-v1'))).toBeNull();
});

test('skipping tutorial proceeds to role selection, Help replays without resetting story',async({page})=>{
 await page.goto(gameUrl,{waitUntil:'domcontentloaded'});
 await page.locator('#cover-actions button').first().click();
 const tutor=page.frameLocator('#game-tutorial-frame');
 await tutor.locator('#skip').click();
 await expect(page.locator('#game-tutorial-dialog')).toBeHidden();
 await expect(page.locator('#role-list .role-card')).toHaveCount(3);
 await page.locator('#help-tutorial').click();
 await expect(page.locator('#game-tutorial-dialog')).toBeVisible();
 await page.locator('#game-tutorial-close').click();
 await expect(page.locator('#game-tutorial-dialog')).toBeHidden();
 await expect(page.locator('#role-list .role-card')).toHaveCount(3);
});

test('returning player with a save skips onboarding and keeps map removed but other extras',async({page})=>{
 await page.goto(gameUrl,{waitUntil:'domcontentloaded'});
 const state={version:1,chapter:5,role:'evelyn',screen:'ending',
  stats:{stability:54,network:66,contribution:61},
  relationships:{ruth:1,lottie:1},
  choices:{ch1:'ride',ch2:'help',ch3talk:'truth',ch3:'shared',ch4:'home',ch5:'ride'}};
 await page.evaluate(s=>localStorage.setItem('power-to-change-381-days-v1',JSON.stringify(s)),state);
 await page.reload({waitUntil:'domcontentloaded'});
 await expect(page.locator('.epilogue-cover')).toBeVisible();
 await expect(page.locator('#game-tutorial-dialog')).toBeHidden();
 await expect(page.locator('[data-extras-open="map"]')).toHaveCount(0);
 await expect(page.locator('[data-extra-side="map"]')).toHaveCount(0);
 await expect(page.locator('[data-extras-open="keepsakes"]')).toBeVisible();
 await expect(page.locator('[data-extras-open="achievements"]')).toBeVisible();
 await expect(page.locator('[data-extra-side="keepsakes"]')).toBeVisible();
 await page.locator('[data-extras-open="keepsakes"]').click();
 await expect(page.locator('#gameplay-extras')).toBeVisible();
 await expect(page.locator('[data-extras-tab]')).toHaveCount(3);
 await expect(page.locator('#gameplay-extras')).not.toContainText('Story Map');
 await page.locator('#gameplay-extras .extras-close').click();
 await page.locator('#help-tutorial').click();
 const dialog=page.locator('#game-tutorial-dialog');
 await expect(dialog).toBeVisible();
 await page.locator('#game-tutorial-close').click();
 await expect(dialog).toBeHidden();
 const again=await page.evaluate(()=>JSON.parse(localStorage.getItem('power-to-change-381-days-v1')));
 expect(again.stats).toEqual(state.stats);
 expect(again.choices).toEqual(state.choices);
 expect(again.screen).toBe('ending');
});

test('saved role without global save also avoids interrupting returning players',async({page})=>{
 await page.goto(gameUrl,{waitUntil:'domcontentloaded'});
 const state={version:1,chapter:1,role:'marcus',screen:'scene',stats:{stability:65,network:50,contribution:30},relationships:{mother:0,david:0},choices:{}};
 await page.evaluate(s=>localStorage.setItem('power-to-change-381-days-role-v1-marcus',JSON.stringify(s)),state);
 await page.reload({waitUntil:'domcontentloaded'});
 await page.locator('#cover-actions button').first().click();
 await expect(page.locator('#game-tutorial-dialog')).toBeHidden();
 await expect(page.locator('#role-list .role-card')).toHaveCount(3);
});
