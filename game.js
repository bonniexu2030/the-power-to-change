/* The Power to Change — Chapter I prototype.
 * No framework or build step required. Suitable for GitHub Pages.
 * All playable characters, dialogue, and personal scenes are fictional.
 */
'use strict';

const SAVE_KEY = 'power-to-change-381-days-v1';
const game = {
  evelyn: {
    name: 'Evelyn Brooks', descriptor: 'A working mother', age: '36',
    summary: 'A domestic worker and mother balancing her daughter’s needs with a growing protest.',
    portrait: 'E', color: 'role-evelyn', roleLabel: 'DOMESTIC WORKER · MOTHER',
    stats: { stability: 45, network: 55, contribution: 35 },
    relationships: { ruth: 0, lottie: 0 },
    relationshipNames: { ruth: 'Ruth · daughter', lottie: 'Lottie Mae · neighbor' },
    heading: 'A Promise for Monday', place: 'SUNDAY EVENING · DECEMBER 4, 1955 · EVELYN’S KITCHEN',
    intro: [
      'The kitchen is quiet except for the ticking clock above the stove.',
      'Evelyn sits at the table, counting the money left from her last paycheck. Beside it lies a folded leaflet calling on Montgomery’s Black residents to stay off the buses tomorrow.',
      'Ruth leans over her mother’s shoulder. “Are you going to do it, Mama?”',
      'Evelyn thinks about the Whitmore family, who expect her at work at eight. She thinks about what she wants Ruth to grow up believing. Earlier, Lottie Mae offered to ask whether a neighbor could give her a ride, but nothing was certain.',
      'Ruth asks again. Evelyn folds the leaflet carefully. “I haven’t decided yet, baby.”'
    ],
    prompt: 'How will Evelyn get to work on Monday?',
    choices: [
      { id:'walk', label:'Walk to work, even if it means arriving tired or late.', delta:{stability:-12,network:0,contribution:15}, relation:{ruth:1},
        result:'Before sunrise, Evelyn sets out on foot. Every block makes the meaning of the leaflet more real. By the time she reaches work, she is tired and anxious about what her employer might say. Ruth will remember that her mother walked.',
        toast:'Personal Stability under pressure · Movement Contribution grew',
        memory:'You chose to walk rather than use the bus.' },
      { id:'ride', label:'Ask Lottie Mae to help arrange a ride.', delta:{stability:-3,network:12,contribution:10}, relation:{lottie:1},
        result:'Evelyn asks Lottie Mae for help. A ride may be possible, but it depends on neighbors with their own jobs and responsibilities. Evelyn feels grateful—and a little uneasy about how much she is asking. Lottie promises they will try to make it work.',
        toast:'Support Network strengthened · Movement Contribution grew',
        memory:'You turned to Lottie Mae and the neighborhood ride network.' },
      { id:'bus', label:'Ride the bus because the family needs the paycheck.', delta:{stability:10,network:-3,contribution:-8}, relation:{},
        result:'Evelyn leaves for work knowing her wages are more secure today. She agrees with the protest, but she cannot afford to miss a shift. When Ruth asks why she rode, Evelyn explains that supporting change and protecting a family can sometimes pull a person in different directions.',
        toast:'Personal Stability protected · Movement Contribution shifted',
        memory:'You protected your paycheck by riding the bus.' }
    ],
    end: ['By evening, word of the one-day protest has spread across Montgomery. The community has begun something larger than a single morning without buses.',
      'Ruth studies the leaflet on the table. Evelyn still does not know how she will get to work tomorrow.'],
    next:'A delayed ride, an impatient employer, and a new responsibility to the neighborhood'
  },
  marcus: {
    name:'Marcus Ellis', descriptor:'A college student', age:'20',
    summary:'An Alabama State College student weighing his future as a teacher against the demands of activism.',
    portrait:'M', color:'role-marcus', roleLabel:'COLLEGE STUDENT · FUTURE TEACHER',
    stats:{stability:65,network:50,contribution:30},
    relationships:{mother:0,david:0},
    relationshipNames:{mother:'Mrs. Ellis · mother',david:'David · friend'},
    heading:'Words That Travel', place:'SATURDAY · DECEMBER 3, 1955 · NEAR ALABAMA STATE COLLEGE',
    intro:[
      'Marcus is halfway through his reading when David appears at the door with a stack of papers.',
      '“They’re asking people not to ride the buses Monday,” David says, placing a leaflet on the desk. “We could help get the word out.”',
      'Marcus studies the page. His mother has worked hard to help him stay in college; she reminds him that education can open doors that were closed to her.',
      'But what good is preparing to teach the next generation, Marcus wonders, if he accepts the same injustices that limit their future?',
      'David gathers the papers. “Are you coming?”'
    ],
    prompt:'How will Marcus respond to David?',
    choices:[
      {id:'public',label:'Help distribute leaflets openly in the community.',delta:{stability:-8,network:7,contribution:16},relation:{david:1},
        result:'Marcus joins David in spreading the word. The work is urgent, sometimes uncomfortable, and much less glamorous than he imagined. People begin to recognize him as someone willing to help.',
        toast:'Movement Contribution grew · David’s trust strengthened',
        memory:'You helped distribute boycott information publicly.'},
      {id:'quiet',label:'Help prepare and distribute information discreetly.',delta:{stability:-4,network:10,contribution:10},relation:{david:1},
        result:'Marcus offers to organize the papers and help behind the scenes. He stays busy longer than planned, but David appreciates the practical work. Marcus begins to learn how coordination turns a plan into collective action.',
        toast:'Support Network strengthened · Movement Contribution grew',
        memory:'You contributed discreetly behind the scenes.'},
      {id:'study',label:'Protect your study time and avoid joining the effort for now.',delta:{stability:8,network:-3,contribution:-5},relation:{david:-1},
        result:'Marcus returns to his coursework, aware that David is disappointed. He tells himself that college matters, too. Yet the leaflet remains on his desk, and he suspects the question will return.',
        toast:'Personal Stability protected · Relationship with David changed',
        memory:'You prioritized schoolwork and stepped back for now.'}
    ],
    end:['By Monday evening, the first boycott has drawn widespread participation. At a mass meeting, residents decide to continue.',
      'Marcus looks again at the leaflet David brought. He had thought the question was about one day; now it feels much bigger.'],
    next:'Ride schedules, community responsibilities, and tensions between organizing and school'
  },
  daniel: {
    name:'Daniel Carter', descriptor:'A store employee', age:'27',
    summary:'A white hardware-store employee beginning to question the segregation he grew up accepting.',
    portrait:'D', color:'role-daniel', roleLabel:'HARDWARE-STORE EMPLOYEE',
    stats:{stability:75,network:40,contribution:20},
    relationships:{sarah:0,bennett:0},
    relationshipNames:{sarah:'Sarah · wife',bennett:'Mr. Bennett · employer'},
    heading:'Business as Usual',place:'SATURDAY AFTERNOON · DECEMBER 3, 1955 · BENNETT’S HARDWARE',
    intro:[
      'Daniel is arranging a shelf of tools when Thomas Reed enters the shop. They recognize each other, though their conversations rarely go beyond the weather and the price of nails.',
      'The newspaper on the counter carries news of Rosa Parks’s arrest.',
      'Mr. Bennett folds the paper. “All this fuss about the buses. People ought to leave well enough alone.” Thomas places his purchase on the counter without answering.',
      'Daniel has heard remarks like this all his life. He has seldom asked himself why Montgomery works the way it does. Now the silence feels heavy.',
      'Bennett turns to him. “Don’t you agree?” Daniel thinks about the promotion his employer mentioned last month. Then he looks at Thomas.'
    ],
    prompt:'What does Daniel say?',
    choices:[
      {id:'agree',label:'Agree with Mr. Bennett to avoid workplace conflict.',delta:{stability:8,network:-2,contribution:-4},relation:{bennett:1},
        result:'Bennett nods, satisfied. Daniel finishes the sale as usual, but the memory of Thomas’s silence lingers. Keeping the peace seems simple until he wonders whose peace he is preserving.',
        toast:'Personal Stability protected · Bennett’s confidence increased',
        memory:'You agreed with your employer’s dismissal of the protest.'},
      {id:'silent',label:'Finish the purchase without responding.',delta:{stability:4,network:0,contribution:0},relation:{},
        result:'Daniel rings up the purchase and says nothing. Thomas collects his change and leaves. The exchange ends quietly, but Daniel cannot tell himself that his silence erased what was said.',
        toast:'Personal Stability remained steady · Your silence was remembered',
        memory:'You stayed silent while your employer spoke.'},
      {id:'question',label:'Question why the customers’ concerns are being dismissed.',delta:{stability:-8,network:3,contribution:8},relation:{bennett:-1},
        result:'“I don’t know,” Daniel says. “Maybe there’s a reason they’re protesting.” Bennett studies him for a moment before turning away. Daniel has not changed his employer’s mind; he has only made his own uncertainty visible.',
        toast:'Personal Stability under pressure · Relationship with Bennett changed',
        memory:'You questioned your employer’s dismissal of the boycott.'}
    ],
    end:['News of Monday’s boycott reaches the hardware store. Bennett expects things to return to normal the next day.',
      'Daniel is no longer so sure. Something beyond the familiar routine of the store has begun to change.'],
    next:'A customer seeking carpool supplies, difficult choices at work, and tension with Bennett'
  }
};

const app = document.getElementById('app');
const journal = document.getElementById('journal');
const journalContent = document.getElementById('journal-content');
const archive = document.getElementById('archive');
const toast = document.getElementById('toast');
const journalButton = document.getElementById('open-journal');
let toastTimer;
let stopActiveNarration = null;
let state = readSavedState();
let screen = state ? state.screen : 'cover';

function safeText(text){return String(text).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');}
function readSavedState(){
  try{
    const parsed=JSON.parse(localStorage.getItem(SAVE_KEY));
    if(!parsed||parsed.version!==1||!game[parsed.role]||!['scene','result','ending'].includes(parsed.screen))return null;
    if(!parsed.stats||!parsed.relationships)return null;
    return parsed;
  }catch(error){return null;}
}
function store(){if(!state)return;state.screen=screen;try{localStorage.setItem(SAVE_KEY,JSON.stringify(state));}catch(error){/* browser storage may be disabled */}}
function clamp(n,min,max){return Math.min(max,Math.max(min,n));}
function roleData(){return state?game[state.role]:null;}
function scrollTop(){window.scrollTo({top:0,behavior:'instant'});}
function render(){
  // Cleanly stop an ongoing text reveal before switching story pages.
  if (stopActiveNarration) { stopActiveNarration(); stopActiveNarration = null; }
  journalButton.hidden=!state;
  if(screen==='cover')renderCover();
  else if(screen==='roles')renderRoles();
  else if(screen==='scene')renderScene();
  else if(screen==='result')renderResult();
  else if(screen==='ending')renderEnding();
  else{screen='cover';renderCover();}
  if(state)renderJournal();
  scrollTop();
}
/* A quick, cinematic typewriter effect for story passages.
 * Animates only the visual text; never writes HTML or requires a game choice to wait.
 * The Skip button reveals all paragraphs instantly. Reduced-motion users see full text.
 */
function revealStoryText(paragraphSelector, lockedSelector) {
  const paragraphs = Array.from(app.querySelectorAll(paragraphSelector));
  if (!paragraphs.length) return;
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  const gatedElements = Array.from(app.querySelectorAll(lockedSelector));
  const fullTexts = paragraphs.map(p => p.textContent);
  const glyphs = fullTexts.map(text => Array.from(text));
  // Reserve the final paragraph sizes to prevent the page jumping as words are revealed.
  paragraphs.forEach((p, i) => {
    p.style.minHeight = `${Math.ceil(p.getBoundingClientRect().height)}px`;
    p.setAttribute('aria-label', fullTexts[i]);
    p.setAttribute('aria-live', 'off');
    p.textContent = '';
    p.classList.add('typing-pending');
  });
  gatedElements.forEach(el => { el.hidden = true; });

  const skip = document.createElement('button');
  skip.type = 'button';
  skip.className = 'reading-skip';
  skip.textContent = 'Show all text ↗';
  skip.setAttribute('aria-label', 'Skip the text animation and show the complete scene');
  const placeTime = app.querySelector('.place-time');
  if (placeTime) placeTime.insertAdjacentElement('afterend', skip);

  let cancelled = false;
  let frameId = null;
  let delayId = null;
  let current = 0;
  let startTime = null;
  const millisecondsPerCharacter = 5.7; // Fast enough to remain pleasant on repeat plays.
  const betweenParagraphsMs = 145;

  const stop = () => {
    cancelled = true;
    if (frameId !== null) cancelAnimationFrame(frameId);
    if (delayId !== null) clearTimeout(delayId);
  };
  stopActiveNarration = stop;

  const finish = (wasSkipped = false) => {
    if (cancelled) return;
    stop();
    paragraphs.forEach((p, i) => {
      p.textContent = fullTexts[i];
      p.classList.remove('typing-pending', 'typing-active');
      p.style.minHeight = '';
      p.removeAttribute('aria-label');
      p.removeAttribute('aria-live');
    });
    skip.remove();
    gatedElements.forEach(el => {
      el.hidden = false;
      el.classList.add('reading-unlocked');
    });
    stopActiveNarration = null;
    if (wasSkipped) {
      const firstChoice = gatedElements.flatMap(el => [...el.querySelectorAll('button')])[0];
      if (firstChoice) firstChoice.focus({ preventScroll: true });
    }
  };

  skip.addEventListener('click', () => finish(true));

  function animateParagraph(timestamp) {
    if (cancelled) return;
    if (startTime === null) startTime = timestamp;
    const count = Math.min(glyphs[current].length, Math.floor((timestamp - startTime) / millisecondsPerCharacter));
    paragraphs[current].textContent = glyphs[current].slice(0, count).join('');
    if (count < glyphs[current].length) {
      frameId = requestAnimationFrame(animateParagraph);
    } else {
      paragraphs[current].classList.remove('typing-active');
      paragraphs[current].classList.add('typing-complete');
      current += 1;
      if (current < paragraphs.length) {
        delayId = setTimeout(startParagraph, betweenParagraphsMs);
      } else {
        finish();
      }
    }
  }

  function startParagraph() {
    if (cancelled) return;
    paragraphs[current].classList.remove('typing-pending');
    paragraphs[current].classList.add('typing-active');
    startTime = null;
    frameId = requestAnimationFrame(animateParagraph);
  }
  startParagraph();
}

function makeButton(label,handler,classes='btn btn-primary'){
  const button=document.createElement('button');button.type='button';button.className=classes;button.textContent=label;button.addEventListener('click',handler);return button;
}
function renderCover(){
 app.innerHTML=`<div class="chapter-cover"><section class="cover-copy"><p class="eyebrow">BOOK ONE · THE MONTGOMERY BUS BOYCOTT</p><h1 class="hero-title">381 <em>Days.</em></h1><p class="lede">One city. Three lives. A movement that changes history.</p><p class="lede">Step into Montgomery in December 1955. Your choices shape a person's relationships, security, and place in a larger struggle—but history was never made by one person alone.</p><div class="cover-actions" id="cover-actions"></div><p class="disclaimer">Historical fiction: playable characters and dialogue are invented. Major events and historical documents are drawn from the documented Montgomery Bus Boycott. This prototype contains Chapter I.</p></section><div class="collage" aria-hidden="true"><div class="collage-sheet"><p class="date">MONTGOMERY · 1955</p><div class="big-type">THE<br>LONG<br>WALK</div></div><div class="collage-polaroid"><div class="polaroid-illustration"></div><span class="polaroid-caption">ORDINARY DAYS. EXTRAORDINARY DECISIONS.</span></div><div class="collage-note"><p>What would<br>you have<br>done?</p></div><div class="tape"></div><div class="round-seal">FILE<br>NO. 01</div></div></div>`;
 const actions=document.getElementById('cover-actions');
 actions.append(makeButton(state?'Continue your story →':'Open the story →',()=>{screen=state?state.screen:'roles';render()}));
 if(state)actions.append(makeButton('Choose a new role',()=>{if(confirm('Start a fresh story? Your current chapter progress will be replaced.')){state=null;try{localStorage.removeItem(SAVE_KEY)}catch(e){}screen='roles';render()}},'btn btn-secondary'));
}
function renderRoles(){
 app.innerHTML='<div class="page-heading"><p class="eyebrow">ARCHIVE / CHARACTER FILES</p><h1>Choose your perspective.</h1><p>Three people, one historical movement. Their circumstances, obligations, and freedoms are not the same. Each character has a different opening chapter.</p></div><div id="role-list" class="roles"></div><p class="disclaimer">You can replay another character when you finish Chapter I. All playable characters are fictional.</p>';
 const list=document.getElementById('role-list');
 for(const [id,role] of Object.entries(game)){
  const button=document.createElement('button');button.type='button';button.className='role-card';
  button.innerHTML=`<div class="role-art ${role.color}"><div class="role-shape"></div><span>${role.portrait}</span></div><div class="role-body"><span class="role-index">CHARACTER FILE / ${id==='evelyn'?'01':id==='marcus'?'02':'03'}</span><h2>${role.name}</h2><p>${role.summary}</p></div><div class="role-select"><span>BEGIN THIS STORY</span><span>↗</span></div>`;
  button.addEventListener('click',()=>startRole(id));list.append(button);
 }
}
function startRole(id){
 const data=game[id];state={version:1,role:id,stats:{...data.stats},relationships:{...data.relationships},choices:{},screen:'scene'};
 screen='scene';store();render();
}
function storyLayout(kind){
 const role=roleData();
 app.innerHTML=`<div class="chapter-head"><span class="small-caps">PART I · THE FIRST STEP</span><span class="chapter-progress">01 / 05 CHAPTERS</span></div><div class="chapter-grid"><article class="book-page"><div class="book-content" id="scene-body"></div></article><aside class="chapter-side"><div class="sidebar-card"><p class="side-label">CHARACTER FILE</p><h2>${safeText(role.name)}</h2><p>${safeText(role.roleLabel)}<br>AGE ${safeText(role.age)}</p><p style="margin-top:15px">Your earlier choices will matter later. You can open your journal at any time.</p></div><button class="archive-ticket" id="open-archive" type="button" aria-label="Examine the historical boycott leaflet"><span class="file-icon">▤</span><h3>Found in the archive</h3><p>DOCUMENT NO. 01<br>THE 1955 BOYCOTT LEAFLET<br>CLICK TO EXAMINE ↗</p></button><div class="side-timeline"><strong>DEC 1</strong> · ROSA PARKS ARRESTED<br><strong>DEC 5</strong> · FIRST BOYCOTT DAY<br><strong>DEC 5</strong> · MASS MEETING</div></aside></div>`;
 document.getElementById('open-archive').addEventListener('click',()=>{archive.showModal();state.documentsOpened= true;store();renderJournal()});
 return document.getElementById('scene-body');
}
function renderScene(){
 const data=roleData();const body=storyLayout();
 body.innerHTML=`<p class="chapter-eyebrow">DECEMBER 1955 · A STORY IN FIVE CHAPTERS</p><h1>${safeText(data.heading)}</h1><p class="place-time">${safeText(data.place)}</p><div class="story-prose">${data.intro.map(p=>`<p>${safeText(p)}</p>`).join('')}</div><section class="prompt"><h2>${safeText(data.prompt)}</h2><div class="choice-list" id="choices"></div><p class="mini-note">There is no perfect answer. The journal tracks circumstances, not morality.</p></section>`;
 const list=body.querySelector('#choices');
 data.choices.forEach((choice,index)=>{
  const b=document.createElement('button');b.type='button';b.className='choice';b.innerHTML=`<span class="choice-number">${String.fromCharCode(65+index)}</span><span>${safeText(choice.label)}</span>`;
  b.addEventListener('click',()=>choose(choice.id));list.append(b);
 });
 revealStoryText('.story-prose p', '.prompt');
}
function choose(choiceId){
 if(!state||screen!=='scene'||state.choices.ch1)return;
 const choice=roleData().choices.find(c=>c.id===choiceId);if(!choice)return;
 state.choices.ch1=choiceId;
 for(const [key,n] of Object.entries(choice.delta))state.stats[key]=clamp(state.stats[key]+n,0,100);
 for(const [key,n] of Object.entries(choice.relation))state.relationships[key]=clamp((state.relationships[key]||0)+n,-2,2);
 screen='result';store();render();showToast(choice.toast);
}
function renderResult(){
 const data=roleData();const selected=data.choices.find(c=>c.id===state.choices.ch1);
 if(!selected){screen='scene';render();return;}
 const body=storyLayout();
 body.innerHTML=`<p class="chapter-eyebrow">YOUR DECISION / DECEMBER 1955</p><h1>The choice is made.</h1><p class="place-time">${safeText(data.name.toUpperCase())} · CHAPTER I</p><div class="story-prose"><p>${safeText(selected.label)}</p></div><div class="consequence"><span class="label">WHAT HAPPENS NEXT</span><p>${safeText(selected.result)}</p></div><p class="insight">Your journal has recorded this decision and any changes in security, relationships, or contribution. These measures describe circumstances—not whether you are a good person.</p><div class="scene-actions" id="continue-actions"></div>`;
 body.querySelector('#continue-actions').append(makeButton('Continue the chapter →',()=>{screen='ending';store();render()}));
  revealStoryText('.story-prose p, .consequence p', '.insight, .scene-actions');
}
function renderEnding(){
 const data=roleData();const chosen=data.choices.find(c=>c.id===state.choices.ch1);
 if(!chosen){screen='scene';render();return;}
 const body=storyLayout();
 body.innerHTML=`<p class="chapter-eyebrow">DECEMBER 5, 1955 · MONDAY EVENING</p><h1>One Day Becomes Something More.</h1><p class="place-time">END OF CHAPTER I</p><div class="story-prose">${data.end.map(p=>`<p>${safeText(p)}</p>`).join('')}<p>At Holt Street Baptist Church, a mass meeting supports continuing the boycott. The movement is no longer a protest planned for only one day.</p></div><div class="finishing"><span class="tag">YOUR STORY REMEMBERS</span><p>${safeText(chosen.memory)}</p><h2>Next: The Long Walk</h2><p>${safeText(data.next)}.</p><p class="preview-lock">CHAPTER II IS THE NEXT DEVELOPMENT MILESTONE</p></div><div class="scene-actions" id="ending-actions"></div><p class="insight">Read more in the historical archive. When the next chapter is added, this same save system will carry your choices forward.</p>`;
 const actions=body.querySelector('#ending-actions');
 actions.append(makeButton('Replay another role →',()=>{if(confirm('Try another character? This will replace your current saved run.')){try{localStorage.removeItem(SAVE_KEY)}catch(e){}state=null;screen='roles';render()}}));
 actions.append(makeButton('Back to introduction',()=>{screen='cover';render()},'btn btn-secondary'));
  revealStoryText('.story-prose p', '.finishing, .scene-actions, .insight');
}
function relationshipLabel(value){return value<=-2?'Strained':value===-1?'Uneasy':value===0?'Complicated':value===1?'Growing trust':'Strong trust';}
function gaugeLabel(value){return value<35?'Strained':value<70?'Steady':'Strong';}
function renderJournal(){
 if(!state){journalContent.innerHTML='';return;}
 const data=roleData(),selected=data.choices.find(c=>c.id===state.choices.ch1);
 const labels={stability:'Personal Stability',network:'Support Network',contribution:'Movement Contribution'};
 const values=Object.entries(labels).map(([key,label])=>`<div class="meter"><div class="meter-head"><strong>${label}</strong><span>${gaugeLabel(state.stats[key])}</span></div><div class="bar"><div class="bar-fill ${key}" style="width:${clamp(state.stats[key],0,100)}%"></div></div></div>`).join('');
 const rels=Object.entries(data.relationshipNames).map(([key,name])=>`<div class="relationship"><strong>${safeText(name)}</strong><em>${relationshipLabel(state.relationships[key])}</em></div>`).join('');
 journalContent.innerHTML=`<p class="journal-intro">${safeText(data.name)} · Chapter I / V<br>Your circumstances and personal connections change as you make decisions.</p><p class="journal-section-label">YOUR CIRCUMSTANCES</p>${values}<p class="journal-section-label">PEOPLE IN YOUR LIFE</p>${rels}<p class="journal-section-label">REMEMBERED DECISIONS</p><div class="journal-note">${selected?safeText(selected.memory):'Your first decision has not been made yet.'}</div><p class="journal-section-label">HISTORICAL SOURCES</p><p class="journal-intro">${state.documentsOpened?'You examined the December 1955 boycott leaflet.':'The December 1955 boycott leaflet has not been opened yet.'}</p><p class="journal-section-label">GAME CONTROLS</p><button class="small-action" id="reset-game">Start a new role / reset progress</button>`;
 document.getElementById('reset-game').addEventListener('click',()=>{if(confirm('Reset your current run? Your choices will be erased.')){journal.close();state=null;try{localStorage.removeItem(SAVE_KEY)}catch(e){}screen='roles';render()}});
}
let toastCount=0;
function showToast(message){
 clearTimeout(toastTimer);toastCount++;
 toast.classList.remove('is-hiding');toast.innerHTML='<div class="toast-head">✳ JOURNAL UPDATED</div><p>'+safeText(message)+'</p>';
 toast.hidden=false;
 const id=toastCount;
 toastTimer=setTimeout(()=>{if(id!==toastCount)return;toast.classList.add('is-hiding');setTimeout(()=>{if(id===toastCount){toast.hidden=true;toast.classList.remove('is-hiding')}},350)},3200);
}

journalButton.addEventListener('click',()=>{if(state){renderJournal();journal.showModal()}});
for(const name of ['journal','archive']){
 const d=document.getElementById(name);
 d.querySelector(`[data-close="${name}"]`).addEventListener('click',()=>d.close());
 d.addEventListener('click',e=>{if(e.target===d)d.close()});
}
render();
