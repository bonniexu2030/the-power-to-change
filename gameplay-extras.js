/* The Power to Change — Light Gameplay Additions, November 2026
   Optional exploration, keepsakes, activities, and discovery stamps.
   No framework. Preserves the original five-chapter decisions and save key.
   Map is a schematic of story settings, NOT a geographic Montgomery map.
*/
(function(){
  'use strict';
  const places=[
    {id:'homes',name:'Neighborhood Homes',short:'Homes',chapter:1,x:18,y:27,kind:'Fictional story setting',
      text:'Kitchen tables, front steps, and neighbors helped sustain the boycott. These particular homes belong to our fictional characters; they are not mapped to historical addresses.'},
    {id:'holt',name:'Holt Street Baptist Church',short:'Holt Street',chapter:1,x:48,y:17,kind:'Documented historical location',
      text:'On December 5, 1955, thousands gathered here for the Montgomery Improvement Association’s mass meeting and supported continuing the boycott.',
      url:'https://kinginstitute.stanford.edu/holt-street-baptist-church-montgomery-alabama'},
    {id:'college',name:'Alabama State College',short:'College',chapter:1,x:78,y:32,kind:'Documented institution',
      text:'Alabama State College was important to the boycott’s organizing. Jo Ann Robinson prepared leaflets with help from a network of students and others.',
      url:'https://kinginstitute.stanford.edu/montgomery-bus-boycott'},
    {id:'hardware',name:'Bennett’s Hardware',short:'Hardware',chapter:1,x:17,y:70,kind:'Fictional story setting',
      text:'This invented store belongs to Daniel’s storyline. It invites players to consider how everyday work can reinforce or challenge unequal treatment.'},
    {id:'carpool',name:'Volunteer Route Desk',short:'Route Desk',chapter:2,x:46,y:60,kind:'Illustrative organizing setting',
      text:'The Montgomery Improvement Association coordinated an extensive carpool. This fictional planning desk represents the careful work behind the real transportation system.',
      url:'https://kinginstitute.stanford.edu/montgomery-bus-boycott'},
    {id:'court',name:'Federal Case Records',short:'Case File',chapter:4,x:79,y:69,kind:'Historical case, illustrative pin',
      text:'The Browder v. Gayle plaintiffs challenged compulsory bus segregation in federal court. This pin represents the case file, not a particular courtroom address.'},
    {id:'bus',name:'Integrated Bus Stop',short:'Bus Stop',chapter:5,x:50,y:87,kind:'Illustrative story setting',
      text:'Montgomery buses began integrated service on December 21, 1956. This is a representative bus stop, not a claimed historical stop location.'}
  ];
  const memories={
    evelyn:[
      ['leaflet','Folded Boycott Leaflet','A fictional copy of the leaflet Ruth asked about on the first Sunday evening.',1],
      ['schedule','Neighbor’s Ride Card','A well-used note from the long months of finding a way to work.',2],
      ['drawing','Ruth’s Envelope Drawing','The back of an envelope where Ruth drew while listening to the news.',3],
      ['clipping','Court Decision Clipping','A newspaper scrap Evelyn read while the boycott continued.',4],
      ['ticket','Window-Seat Memory','A small paper reminder of the changes Ruth and Evelyn discussed.',5]
    ],
    marcus:[
      ['leaflet','David’s Leaflet','A fictional leaflet left on Marcus’s desk at the beginning of the boycott.',1],
      ['schedule','Volunteer Ride Notes','Names and schedules representing the work behind daily transportation.',2],
      ['letter','Letter from Home','A folded letter from Marcus’s mother about college and safety.',3],
      ['clipping','Federal Ruling Clipping','A clipping Marcus and David discussed during the long wait.',4],
      ['notebook','Teacher’s Notebook','A question Marcus hopes to carry into a future classroom.',5]
    ],
    daniel:[
      ['receipt','Hardware Store Receipt','A fictional sales slip from Bennett’s Hardware.',1],
      ['carbon','Carbon-Copy Order','A copy of the store transaction that forced an uncomfortable decision.',2],
      ['note','Sarah’s Supper Note','A reminder of the difficult conversation Daniel and Sarah shared.',3],
      ['clipping','Desegregation Headline','The newspaper report Daniel read behind the shop counter.',4],
      ['paper','First Integrated Bus Notice','A fictional reminder of the new law and the work still ahead.',5]
    ]
  };
  const challenges={
    route:{
      chapter:2,title:'The Volunteer Route Desk',tag:'FIELD ACTIVITY 01',
      intro:'A fictional planning exercise inspired by the boycott’s carpool system. Two riders need dependable transportation, but drivers have different schedules. Which detail will you organize first? There is no perfect answer.',
      options:[
        {id:'confirm',label:'Confirm which drivers can actually leave before sunrise.',note:'Your notes prioritize reliability. This helps reduce missed pickups, though you still need a plan for riders far from the drivers.'},
        {id:'stops',label:'Coordinate a shared pickup point for nearby riders.',note:'Your notes prioritize efficient pickups. This could save time, but you must consider riders who cannot easily walk farther.'},
        {id:'backup',label:'Ask neighbors to identify backup rides for missed pickups.',note:'Your notes prioritize resilience when plans fail. Backup rides require extra time and volunteers, but they can help prevent someone from being stranded.'}
      ],
      souvenir:['route-slip','Volunteer Route Slip','A fictional planning slip saved from your optional carpool exercise.']
    },
    evidence:{
      chapter:4,title:'Assemble a Case Note',tag:'FIELD ACTIVITY 02',
      intro:'You are assembling a short index card for the Browder v. Gayle court file. Which part of the historical case will you emphasize? All three are important pieces of the same story.',
      options:[
        {id:'women',label:'The women who brought their experiences into the courtroom.',note:'Your index card names Aurelia Browder, Claudette Colvin, Susie McDonald, and Mary Louise Smith, whose civil suit challenged segregation.'},
        {id:'ruling',label:'The June ruling that compulsory bus segregation was unconstitutional.',note:'Your note emphasizes the federal district court decision. The appeal meant the ruling did not immediately desegregate Montgomery buses.'},
        {id:'affirm',label:'The November Supreme Court affirmation and the continuing boycott.',note:'Your note records that the Supreme Court upheld the decision, but the order had not yet reached Montgomery and the boycott continued.'}
      ],
      souvenir:['case-note','Courthouse Index Card','Your own fictional index card describing a piece of the constitutional challenge.']
    }
  };
  const milestones=[
    {id:'first',icon:'✳',title:'First Step',description:'Make the first major decision.',check:(s)=>!!s.choices?.ch1},
    {id:'places',icon:'⌖',title:'Around Montgomery',description:'Explore three places on the story map.',check:(s)=>getExtras(s).visits.length>=3},
    {id:'desk',icon:'▤',title:'Hands-on History',description:'Complete an optional field activity.',check:(s)=>Object.keys(getExtras(s).activities).length>=1},
    {id:'archive',icon:'◈',title:'Archive Reader',description:'Open at least three historical documents.',check:(s)=>documentCount(s)>=3},
    {id:'keepsakes',icon:'✉',title:'Keepsake Collector',description:'Gather four story keepsakes.',check:(s)=>getMemories(s).length>=4},
    {id:'finish',icon:'★',title:'381 Days',description:'Finish the fifth chapter of one character’s story.',check:(s)=>!!s.choices?.ch5}
  ];
  let currentState=null,saveState=null,viewer=null,section='map',selectedPlace='homes',status='';
  const escape=(v)=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;");
  const chapter=(s)=>Math.max(1,Math.min(5,Number(s?.chapter)||1));
  function getExtras(s){
    if(!s.extras||typeof s.extras!=='object')s.extras={visits:[],activities:{}};
    if(!Array.isArray(s.extras.visits))s.extras.visits=[];
    if(!s.extras.activities||typeof s.extras.activities!=='object')s.extras.activities={};
    return s.extras;
  }
  function documentCount(s){
    return ['documentsOpened','carpoolOpened','bombingOpened','trialOpened','ch4caseOpened','ch5documentOpened'].filter(k=>!!s[k]).length;
  }
  function getMemories(s){
    const rows=[];
    if(!s)return rows;
    for(const [id,title,detail,ch] of (memories[s.role]||[])){
      if(s.choices&&s.choices['ch'+ch])rows.push({id,title,detail,chapter:ch});
    }
    const extra=getExtras(s);
    for(const [key,task] of Object.entries(challenges)){
      if(extra.activities[key]&&task.chapter<=chapter(s)){
        rows.push({id:task.souvenir[0],title:task.souvenir[1],detail:task.souvenir[2],chapter:task.chapter});
      }
    }
    if(extra.visits.length>=3)rows.push({id:'postcard',title:'Montgomery Story Postcard',detail:'An illustrated postcard from exploring three places on the schematic story map.',chapter:chapter(s)});
    return rows;
  }
  function achievements(s){return milestones.map(x=>({...x,earned:!!x.check(s)}));}
  function persist(){
    if(currentState&&saveState)saveState();
    refreshCounts();
  }
  function notify(note){status=note;}
  function init(){
    if(viewer)return;
    const actions=document.querySelector('.topbar-actions');
    if(!actions)return;
    for(const [view,icon,label] of [['map','⌖','Story map'],['keepsakes','▧','Keepsakes'],['achievements','✳','Stamps']]){
      const btn=document.createElement('button');
      btn.type='button';btn.className='icon-button extras-header-button';btn.hidden=true;
      btn.setAttribute('aria-label','Open '+label.toLowerCase());
      btn.setAttribute('data-extras-open',view);
      btn.innerHTML='<span aria-hidden="true" class="extras-icon">'+icon+'</span><span class="button-label">'+label+'</span>';
      btn.addEventListener('click',()=>open(view));
      actions.insertBefore(btn,document.getElementById('open-journal'));
    }
    viewer=document.createElement('dialog');
    viewer.className='extras-dialog';viewer.id='gameplay-extras';
    viewer.setAttribute('aria-label','Explore Montgomery, keepsakes, field activities and achievements');
    viewer.innerHTML='<div class="extras-shell"><div class="extras-head"><div><p class="extras-eyebrow">THE POWER TO CHANGE · PERSONAL ARCHIVE</p><h2 id="extras-title">Explore Montgomery</h2></div><button class="extras-close" type="button" aria-label="Close exploration panel">×</button></div><nav class="extras-nav" aria-label="Exploration menu"></nav><div class="extras-body" id="extras-body"></div></div>';
    document.body.append(viewer);
    viewer.querySelector('.extras-close').addEventListener('click',()=>viewer.close());
    viewer.addEventListener('click',ev=>{if(ev.target===viewer)viewer.close()});
  }
  function refreshCounts(){
    if(!currentState)return;
    const earned=achievements(currentState).filter(a=>a.earned).length;
    const labels=document.querySelectorAll('[data-extras-open]');
    labels.forEach(btn=>{
      btn.hidden=false;
      if(btn.getAttribute('data-extras-open')==='achievements'){
        btn.setAttribute('title',earned+' of '+milestones.length+' discovery stamps');
      }
    });
  }
  function hideControls(){
    document.querySelectorAll('[data-extras-open]').forEach(btn=>btn.hidden=true);
    if(viewer?.open)viewer.close();
  }
  function decorateSidebar(s,screen){
    if(!['scene','result','ending'].includes(screen))return;
    const sidebar=document.querySelector('.chapter-side');
    if(!sidebar||sidebar.querySelector('.extras-side-card'))return;
    const el=document.createElement('div');
    el.className='extras-side-card';
    el.innerHTML='<p class="side-label">EXPLORE THE STORY</p><p>A schematic city map, keepsakes, and discovery stamps.</p><button type="button" class="extras-side-link" data-extra-side="map">OPEN THE MAP ↗</button>';
    if([2,4].includes(chapter(s))){
      const id=chapter(s)===2?'route':'evidence';
      el.innerHTML+='<div class="extras-side-divider"></div><p class="side-label">OPTIONAL FIELD ACTIVITY</p><p>'+escape(challenges[id].title)+'</p><button type="button" class="extras-side-link" data-extra-side="activities">OPEN FIELD DESK ↗</button>';
    }
    sidebar.append(el);
    el.querySelectorAll('[data-extra-side]').forEach(btn=>btn.addEventListener('click',()=>open(btn.getAttribute('data-extra-side'))));
  }
  function render(state,screen,store){
    init();
    if(!viewer)return;
    currentState=state||null;
    saveState=typeof store==='function'?store:null;
    if(!currentState||['cover','roles'].includes(screen)){hideControls();return;}
    // Create optional save fields on old and new runs without modifying choices.
    const wasMissing=!currentState.extras;
    getExtras(currentState);
    if(wasMissing)persist();
    refreshCounts();
    decorateSidebar(currentState,screen);
  }
  function open(view){
    if(!currentState)return;
    init();
    section=['map','keepsakes','activities','achievements'].includes(view)?view:'map';
    status='';
    if(section==='map' && chapter(currentState)>=2 && !getExtras(currentState).visits.includes(selectedPlace))selectedPlace='carpool';
    draw();
    if(!viewer.open)viewer.showModal();
  }
  function draw(){
    if(!viewer||!currentState)return;
    const names={map:'Explore Montgomery',keepsakes:'Your Keepsakes',activities:'The Field Desk',achievements:'Discovery Stamps'};
    viewer.querySelector('#extras-title').textContent=names[section];
    const nav=viewer.querySelector('.extras-nav');
    nav.innerHTML=[['map','⌖ Map'],['keepsakes','▧ Keepsakes'],['activities','◫ Field Desk'],['achievements','✳ Stamps']].map(([id,label])=>
      '<button type="button" class="extras-tab'+(id===section?' is-active':'')+'" data-extras-tab="'+id+'" aria-pressed="'+(id===section?'true':'false')+'">'+label+'</button>'
    ).join('');
    nav.querySelectorAll('[data-extras-tab]').forEach(btn=>btn.addEventListener('click',()=>{
      section=btn.getAttribute('data-extras-tab');status='';draw();
    }));
    const area=viewer.querySelector('#extras-body');
    const notice=status?'<p role="status" class="extras-notice">'+escape(status)+'</p>':'';
    area.innerHTML=notice+(section==='map'?drawMap():section==='keepsakes'?drawKeepsakes():section==='activities'?drawActivities():drawAchievements());
    if(section==='map')bindMap(area);
    if(section==='activities')bindActivities(area);
  }
  function drawMap(){
    const ch=chapter(currentState),extra=getExtras(currentState);
    const available=places.filter(p=>p.chapter<=ch);
    if(!available.some(p=>p.id===selectedPlace))selectedPlace=available[0].id;
    const chosen=places.find(p=>p.id===selectedPlace)||available[0];
    const pins=available.map(p=>'<button type="button" class="story-map-pin'+(selectedPlace===p.id?' is-selected':'')+(extra.visits.includes(p.id)?' is-visited':'')+'" data-map-place="'+p.id+'" style="left:'+p.x+'%;top:'+p.y+'%" title="'+escape(p.name)+'" aria-label="Explore '+escape(p.name)+'"><span class="map-pin-symbol">✳</span><span class="map-pin-label">'+escape(p.short)+'</span></button>').join('');
    const legend=available.map(p=>'<button type="button" class="map-legend-button'+(selectedPlace===p.id?' selected':'')+'" data-map-place="'+p.id+'">'+(extra.visits.includes(p.id)?'✓ ':'○ ')+escape(p.name)+'</button>').join('');
    return '<p class="extras-intro">Explore a few story settings in any order. New places unlock as the historical timeline advances. This map is <strong>schematic and not to scale</strong>; fictional locations and pin positions are illustrative, not historical addresses.</p>'+
      '<div class="story-map-board"><div class="map-road map-road-a"></div><div class="map-road map-road-b"></div><div class="map-road map-road-c"></div><div class="map-crossing"></div><span class="map-watermark">MONTGOMERY · 1955–56</span>'+pins+'</div>'+
      '<div class="map-legend">'+legend+'</div><div class="map-discovery"><p class="extras-eyebrow">'+escape(chosen.kind)+' · '+(extra.visits.includes(chosen.id)?'VISITED':'NEW DISCOVERY')+'</p><h3>'+escape(chosen.name)+'</h3><p>'+escape(chosen.text)+'</p>'+(chosen.url?'<a href="'+chosen.url+'" target="_blank" rel="noopener noreferrer">READ THE HISTORICAL SOURCE ↗</a>':'')+'</div>'+
      '<p class="extras-footer">'+extra.visits.filter(id=>places.some(p=>p.id===id)).length+' of '+places.length+' story settings discovered · Exploring does not alter your character’s decisions.</p>';
  }
  function bindMap(area){
    area.querySelectorAll('[data-map-place]').forEach(btn=>btn.addEventListener('click',()=>{
      const id=btn.getAttribute('data-map-place');
      const item=places.find(p=>p.id===id&&p.chapter<=chapter(currentState));
      if(!item)return;
      selectedPlace=id;
      const visits=getExtras(currentState).visits;
      if(!visits.includes(id)){
        visits.push(id);notify('Discovered '+item.name+' · A new story-map note was recorded.');persist();
      }else status='';
      draw();
    }));
  }
  function drawKeepsakes(){
    const items=getMemories(currentState);
    const all=(memories[currentState.role]||[]).length+3;
    const cards=items.map((m,i)=>
      '<article class="extras-keepsake"><div class="keepsake-symbol" aria-hidden="true">'+(['✉','▤','✎','◈','✳','⌖','▧'][i%7])+'</div>'+
      '<div><p class="extras-eyebrow">KEEPSAKE · CHAPTER '+m.chapter+'</p><h3>'+escape(m.title)+'</h3><p>'+escape(m.detail)+'</p></div></article>'
    ).join('');
    return '<p class="extras-intro">These are <strong>fictional personal mementos</strong> inspired by your story—not historical documents. Some appear automatically after major decisions; others come from optional exploration.</p>'+
     '<div class="extras-counter">'+items.length+' keepsakes in your personal collection</div>'+
     '<div class="extras-keepsake-grid">'+(cards||'<p class="extras-empty">Your story has just begun. A first keepsake will appear after your opening decision.</p>')+'</div>'+
     '<p class="extras-footer">Your existing journal and historical sources are separate and remain available as before.</p>';
  }
  function drawActivities(){
    const ch=chapter(currentState),extra=getExtras(currentState);
    const cards=Object.entries(challenges).map(([key,task])=>{
      const locked=task.chapter>ch;
      const done=extra.activities[key];
      const doneOption=task.options.find(x=>x.id===done);
      return '<article class="extras-activity'+(locked?' is-locked':'')+'"><p class="extras-eyebrow">'+task.tag+' · '+(locked?'UNLOCKS IN CHAPTER '+task.chapter:done?'COMPLETED':'AVAILABLE')+'</p>'+
        '<h3>'+escape(task.title)+'</h3><p>'+escape(task.intro)+'</p>'+
        (locked?'<p class="extras-muted">Progress to Chapter '+task.chapter+' to unlock.</p>':
         done?'<div class="activity-result"><strong>YOUR FIELD NOTE</strong><p>'+escape(doneOption?.note||'Completed.')+'</p><span>✳ Keepsake added to your collection</span></div>':
         '<div class="activity-options">'+task.options.map(x=>'<button type="button" class="activity-choice" data-activity="'+key+'" data-response="'+x.id+'">'+escape(x.label)+'</button>').join('')+'</div>')+
        '</article>';
    }).join('');
    return '<p class="extras-intro">Two optional, low-pressure activities let you interact with the work behind the movement. No timers, moral scores, or correct-answer grades. These <strong>do not change the storyline</strong>.</p><div class="extras-activity-stack">'+cards+'</div>';
  }
  function bindActivities(area){
    area.querySelectorAll('[data-activity]').forEach(btn=>btn.addEventListener('click',()=>{
      const id=btn.getAttribute('data-activity'),response=btn.getAttribute('data-response');
      const task=challenges[id];
      if(!task||task.chapter>chapter(currentState)||getExtras(currentState).activities[id]||!task.options.some(o=>o.id===response))return;
      getExtras(currentState).activities[id]=response;
      notify('Field note recorded · '+task.souvenir[1]+' added to your keepsakes.');
      persist();draw();
    }));
  }
  function drawAchievements(){
    const a=achievements(currentState),count=a.filter(x=>x.earned).length;
    const items=a.map(x=>'<article class="extras-stamp'+(x.earned?' earned':' locked')+'"><span class="stamp-image" aria-hidden="true">'+x.icon+'</span><div><p class="extras-eyebrow">'+(x.earned?'DISCOVERED':'NOT YET DISCOVERED')+'</p><h3>'+escape(x.title)+'</h3><p>'+escape(x.description)+'</p></div></article>').join('');
    return '<p class="extras-intro">These stamps recognize curiosity, exploration, and completing the story. They are <strong>not grades or measures of morality</strong>, and no ending requires collecting them.</p>'+
      '<div class="extras-counter">'+count+' of '+a.length+' discovery stamps</div><div class="extras-stamp-grid">'+items+'</div>';
  }
  window.GameplayExtras={render,open,places,memories,achievements,getMemories,documentCount};
})();