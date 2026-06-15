const app = document.querySelector('#app');
const live = document.querySelector('#live-region');
const cloud = window.LineworkCloud;
const lessonIds = Object.keys(COURSE.lessons);
const saved = JSON.parse(localStorage.getItem('linework-progress') || '{}');
let currentLessonId = saved.currentLessonId && COURSE.lessons[saved.currentLessonId] ? saved.currentLessonId : lessonIds[0];
let lesson = COURSE.lessons[currentLessonId];

const legacyProgress = saved.score !== undefined ? {
  'difference-quotients': { score:saved.score || 0, question:saved.question || 0 }
} : {};
const savedView = ['portal','overview','lesson','examples','practice'].includes(saved.view) ? saved.view : 'portal';
const state = {
  view:savedView, section:saved.lessonState?.[currentLessonId]?.section || 0, completed:saved.completed || [], guide:false,
  feedback:'', exampleReturn:null, theme:saved.theme || 'light',
  progress:saved.progress || legacyProgress, lessonState:saved.lessonState || {}, updatedAt:saved.updatedAt || 0,
  modal:null, authStep:'email', authEmail:'', modalMessage:'', cloudReady:false, pendingFeedback:false,
};
let cloudSaveTimer;

function progress() {
  if (!state.progress[currentLessonId]) state.progress[currentLessonId] = { score:0, question:0 };
  return state.progress[currentLessonId];
}
function syncCompletedLessons() {
  let changed=false;
  for(const id of lessonIds) {
    if((state.progress[id]?.score || 0)>=10 && !state.completed.includes(id)) { state.completed.push(id); changed=true; }
  }
  return changed;
}
function lessonProgress() {
  if(!state.lessonState[currentLessonId]) state.lessonState[currentLessonId]={section:0,passed:[]};
  if(!Array.isArray(state.lessonState[currentLessonId].passed)) state.lessonState[currentLessonId].passed=[];
  return state.lessonState[currentLessonId];
}
function sectionPassed() { return lessonProgress().passed.includes(lesson.sections[state.section].id); }
function progressSnapshot() {
  return {
    currentLessonId, view:state.view, completed:state.completed, theme:state.theme,
    progress:state.progress, lessonState:state.lessonState, updatedAt:state.updatedAt,
  };
}
function persist(options={}) {
  if(!options.keepTimestamp) state.updatedAt=Date.now();
  const snapshot=progressSnapshot();
  localStorage.setItem('linework-progress', JSON.stringify(snapshot));
  if(!options.localOnly && cloud?.user && state.cloudReady) {
    clearTimeout(cloudSaveTimer);
    cloudSaveTimer=setTimeout(()=>cloud.saveProgress(progressSnapshot()).catch(showCloudError),450);
  }
}
function normalize(value) {
  return answerExpression(value).toLowerCase().replace(/[\s*]/g,'').replace(/−/g,'-').replace(/²/g,'^2')
    .replace(/³/g,'^3').replace(/≠/g,'!=').trim();
}
function answerExpression(value) {
  const text=String(value).trim();
  const equal=text.indexOf('=');
  if(equal<0 || text.indexOf('=',equal+1)>=0) return text;
  const left=text.slice(0,equal).replace(/\s+/g,'').toLowerCase();
  const isOutputLabel=left==='y'||left==='f^-1(x)'||left==='f⁻¹(x)'||left==='f^{-1}(x)';
  return isOutputLabel ? text.slice(equal+1).trim() : text;
}
function tokenizeExpression(value) {
  const source=value.toLowerCase().replace(/−/g,'-').replace(/²/g,'^2').replace(/³/g,'^3')
    .replace(/√\s*\(/g,'sqrt(').replace(/√([a-z0-9.]+)/g,'sqrt($1)').replace(/\s+/g,'');
  const raw=source.match(/sqrt|[a-z]|\d*\.\d+|\d+\.?\d*|[()+\-*/^]/g);
  if(!raw || raw.join('')!==source) throw new Error('Unsupported expression');
  const tokens=[];
  const isEnd=t=>t && (t.type==='number'||t.type==='variable'||t.value===')');
  const isStart=t=>t && (t.type==='number'||t.type==='variable'||t.type==='function'||t.value==='(');
  for(const value of raw) {
    const token=/^\d/.test(value)||value.startsWith('.')?{type:'number',value:Number(value)}
      :value==='sqrt'?{type:'function',value}
      :/^[a-z]+$/.test(value)?{type:'variable',value}
      :{type:'operator',value};
    if(isEnd(tokens[tokens.length-1])&&isStart(token)) tokens.push({type:'operator',value:'*'});
    tokens.push(token);
  }
  return tokens;
}
function evaluateExpression(value, variables={}) {
  const tokens=tokenizeExpression(value); let index=0;
  const peek=()=>tokens[index]; const take=()=>tokens[index++];
  function primary() {
    const token=take(); if(!token) throw new Error('Missing value');
    if(token.type==='number') return token.value;
    if(token.type==='variable') { if(!(token.value in variables)) throw new Error('Unknown variable'); return variables[token.value]; }
    if(token.type==='function') { if(take()?.value!=='(') throw new Error('Missing parenthesis'); const result=expression(); if(take()?.value!==')') throw new Error('Missing parenthesis'); return Math.sqrt(result); }
    if(token.value==='(') { const result=expression(); if(take()?.value!==')') throw new Error('Missing parenthesis'); return result; }
    if(token.value==='-') return -primary();
    if(token.value==='+') return primary();
    throw new Error('Unexpected token');
  }
  function power() { let left=primary(); if(peek()?.value==='^'){take();left=Math.pow(left,power());} return left; }
  function product() { let left=power(); while(peek()&&['*','/'].includes(peek().value)){const op=take().value;const right=power();left=op==='*'?left*right:left/right;} return left; }
  function expression() { let left=product(); while(peek()&&['+','-'].includes(peek().value)){const op=take().value;const right=product();left=op==='+'?left+right:left-right;} return left; }
  const result=expression(); if(index!==tokens.length) throw new Error('Unused token'); return result;
}
function algebraicallyEquivalent(left,right) {
  left=answerExpression(left); right=answerExpression(right);
  const variableNames=[...new Set(`${left} ${right}`.toLowerCase().match(/[a-z]+/g)||[])].filter(name=>name!=='sqrt');
  if(variableNames.length>3) return false;
  const samples=[-3,-1.25,.5,2,4.5,7]; let compared=0;
  for(let i=0;i<samples.length;i++) {
    const vars={}; variableNames.forEach((name,j)=>vars[name]=samples[(i+j*2)%samples.length]);
    try {
      const a=evaluateExpression(left,vars), b=evaluateExpression(right,vars);
      if(!Number.isFinite(a)||!Number.isFinite(b)) continue;
      compared++; if(Math.abs(a-b)>1e-8*Math.max(1,Math.abs(a),Math.abs(b))) return false;
    } catch { return false; }
  }
  return compared>=2;
}
function matches(value, accepted) {
  return accepted.some(answer => normalize(answer)===normalize(value)||algebraicallyEquivalent(value,answer));
}
function escapeHTML(value) {
  return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function exponentHTML(value) {
  return value.replace(/\^\(?(-?[a-zA-Z0-9]+)\)?/g, '<sup>$1</sup>');
}
function mathHTML(value) {
  let text = escapeHTML(value);
  text = text.replace(/(\[[^\]]+\](?:\^[a-zA-Z0-9-]+)?|\([^()]+\)(?:\^[a-zA-Z0-9-]+)?|[a-zA-Z0-9.]+(?:\^[a-zA-Z0-9-]+)?)\s*\/\s*(\([^()]+\)(?:\^[a-zA-Z0-9-]+)?|[a-zA-Z0-9.]+(?:\^[a-zA-Z0-9-]+)?)/g,
    (_, top, bottom) => `<span class="fraction"><span>${exponentHTML(top)}</span><span>${exponentHTML(bottom)}</span></span>`);
  return exponentHTML(text).replace(/!=/g,'≠').replace(/\*/g,'·');
}
function announce(message) { live.textContent=''; requestAnimationFrame(()=>live.textContent=message); }
function themeLabel() { return state.theme === 'dark' ? 'light' : 'dark'; }
function accountLabel() {
  if(!cloud?.user) return 'sign in';
  return cloud.profile?.username || cloud.user.email?.split('@')[0] || 'account';
}

function header() {
  return `<header class="topbar ${state.view==='portal'?'portal-topbar':''}"><button type="button" class="brand" data-go="portal" aria-label="Go to course portal">linework</button><div class="top-actions"><button type="button" class="text-button account-button" data-account><span class="sync-dot ${cloud?.user?'online':''}" aria-hidden="true"></span>${escapeHTML(cloud?.user ? accountLabel() : 'login')}</button><button type="button" class="text-button help-button" data-guide aria-label="Open keyboard guide"><span class="key">?</span></button></div></header>`;
}
function layout(content) {
  document.documentElement.dataset.theme = state.theme;
  app.innerHTML = `<div class="shell">${header()}<main>${content}</main></div>${state.guide ? guide() : ''}${state.modal ? modal() : ''}`;
  bind(); updatePortalHeader();
}

function modal() {
  if(state.modal==='auth') return authModal();
  if(state.modal==='account') return accountModal();
  return feedbackModal();
}
function modalFrame(title,body) {
  return `<aside class="modal-screen" role="dialog" aria-modal="true" aria-label="${escapeHTML(title)}"><div class="modal-bar"><span>${escapeHTML(title)}</span><button type="button" class="text-button" data-close-modal><span class="key">Esc</span>close</button></div><div class="modal-body">${body}</div></aside>`;
}
function authModal() {
  if(state.authStep==='code') return modalFrame('Sign in',`<p class="eyebrow">Check your email</p><h2>Enter the code.</h2><p>Instant sent a magic code to <strong>${escapeHTML(state.authEmail)}</strong>. This device will stay signed in.</p><form class="modal-form" data-code-form><label>Magic code<input name="code" inputmode="numeric" autocomplete="one-time-code" required autofocus></label><button class="primary">Verify code</button></form><button type="button" class="text-button" data-change-email>Use another email</button><p class="modal-message">${escapeHTML(state.modalMessage)}</p>`);
  return modalFrame('Sign in',`<p class="eyebrow">Optional cloud sync</p><h2>Keep your place<br>across devices.</h2><p>Every lesson works without an account. Sign in only to sync progress and send feedback.</p><form class="modal-form" data-email-form><label>Email address<input name="email" type="email" autocomplete="email" required autofocus></label><button class="primary">Send magic code</button></form><p class="modal-message">${escapeHTML(state.modalMessage)}</p>`);
}
function accountModal() {
  if(!cloud?.user) return authModal();
  const username=cloud.profile?.username || '';
  return modalFrame('Account',`<p class="eyebrow">Cloud sync active</p><h2>${escapeHTML(accountLabel())}</h2><p>${escapeHTML(cloud.user.email || '')}</p><form class="modal-form" data-username-form><label>Feedback username<input name="username" maxlength="30" value="${escapeHTML(username)}" placeholder="How your feedback is labeled" required></label><button class="primary">Save username</button></form><p class="sync-copy"><span class="sync-dot online"></span> Progress is saved locally and synced with InstantDB.</p><button type="button" class="text-button boxed" data-sign-out>Sign out on this device</button><p class="modal-message">${escapeHTML(state.modalMessage)}</p>`);
}
function feedbackModal() {
  if(!cloud?.user) return authModal();
  const username=cloud.profile?.username || '';
  const history=(cloud.feedback || []).slice(0,5).map(item=>`<li><time>${new Date(item.createdAt).toLocaleString()}</time><span>${escapeHTML(item.message)}</span></li>`).join('');
  return modalFrame('Give feedback',`<p class="eyebrow">Signed in as ${escapeHTML(cloud.user.email || '')}</p><h2>What should<br>change?</h2><form class="modal-form" data-feedback-form><label>Username<input name="username" maxlength="30" value="${escapeHTML(username)}" required></label><label>Feedback<textarea name="message" maxlength="2000" rows="6" placeholder="Tell me what was confusing, broken, or useful." required autofocus></textarea></label><button class="primary">Send feedback</button></form><p class="modal-message">${escapeHTML(state.modalMessage)}</p>${history?`<section class="feedback-history"><h3>Your recent feedback</h3><ol>${history}</ol></section>`:''}`);
}

function portal() {
  if(syncCompletedLessons()) persist();
  const done = state.completed.length;
  const average = lessonIds.length ? Math.round(lessonIds.reduce((sum,id)=>sum+(state.progress[id]?.score || 0),0)/lessonIds.length) : 0;
  const lessonRows = lessonIds.map((id,index)=>{
    const item = COURSE.lessons[id];
    const p = state.progress[id] || {score:0};
    const complete = state.completed.includes(id) || p.score>=10;
    return `<button class="lesson-row" data-lesson="${id}"><span class="lesson-index">${String(index+1).padStart(2,'0')}</span><span><strong>${item.title}</strong><small>${item.standard} · ${item.estimated}</small></span><span class="lesson-status">${complete?'Complete':`${p.score}/10`}</span><span aria-hidden="true">→</span></button>`;
  }).join('');
  layout(`<div class="portal"><section class="portal-intro"><div><p class="eyebrow">Florida Precalculus Honors · 1202340</p><h1>Learn<br>the line.</h1></div><div><p class="intro-copy">Clear lessons. Practice built into every step. A complete 36-lesson path through Florida precalculus.</p><button class="primary" data-lesson="${currentLessonId}">Continue learning <span aria-hidden="true">→</span></button></div></section><section class="stats"><div class="stat"><strong>${done}</strong><span>lessons complete</span></div><div class="stat"><strong>${average}/10</strong><span>average mastery</span></div><div class="stat"><strong>${lessonIds.length}</strong><span>lessons available</span></div><div class="stat"><strong>36</strong><span>lessons planned</span></div></section><section class="available"><div class="section-heading"><h2>Available now</h2><span class="eyebrow">Tab to choose · Enter to open</span></div>${lessonRows}</section></div>`);
}

function overview() {
  layout(`<section class="lesson-head"><div class="lesson-title"><p class="eyebrow">${lesson.eyebrow}</p><h1>${lesson.title}</h1><span class="standard-code">${lesson.standard}</span></div><div class="lesson-meta"><div><p class="eyebrow">Florida benchmark</p><p class="standard-text">${lesson.standardText}</p></div><dl class="meta-grid"><div><dt>Objective</dt><dd>${lesson.objective}</dd></div><div><dt>Estimated time</dt><dd>${lesson.estimated}</dd></div></dl><button class="primary continue" data-start>Start lesson <span aria-hidden="true">→</span></button></div></section>`);
}

function diagram(type) {
  const svg = (label,body) => `<svg viewBox="0 0 800 320" role="img" aria-label="${label}" preserveAspectRatio="xMidYMid meet">${body}</svg>`;
  const arrow = `<defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor"/></marker></defs>`;
  if(type==='machine') return svg('A function machine replacing x with x plus h',`${arrow}<rect x="270" y="85" width="260" height="150" class="shape"/><path d="M60 160H250M550 160H740" class="heavy" marker-end="url(#arrow)"/><text x="70" y="135">x + h</text><text x="355" y="170" class="big">f( input )</text><text x="590" y="135">f(x + h)</text>`);
  if(type==='area') return svg('Area model for x plus h squared',`<rect x="235" y="35" width="330" height="250" class="shape"/><path d="M465 35V285M235 205H565" class="thin"/><text x="335" y="125" class="big">x²</text><text x="500" y="125" class="big">xh</text><text x="335" y="255" class="big">xh</text><text x="500" y="255" class="big">h²</text><text x="365" y="312">x + h</text><text x="175" y="165">x + h</text>`);
  if(type==='cancel') return svg('Like terms cancel after subtraction',`<text x="70" y="115" class="equation">x² + 2xh + h² + 3x + 3h − x² − 3x</text><path d="M70 82L112 125M570 82L520 125M385 82L425 125M720 82L675 125" class="strike"/><path d="M270 185H530" class="thin"/><text x="285" y="245" class="equation">2xh + h² + 3h</text>`);
  if(type==='factor') return svg('Factoring h from every term',`${arrow}<text x="70" y="105" class="equation">2xh + h² + 3h</text><path d="M330 125V170H560V125" class="thin"/><path d="M445 178V215" class="heavy" marker-end="url(#arrow)"/><text x="265" y="275" class="equation">h(2x + h + 3)</text>`);
  if(['composition-machine','composition-step-one','composition-step-two'].includes(type)) {
    const first = type==='composition-step-one' ? '3' : type==='composition-step-two' ? '7' : 'x';
    const middle = type==='composition-step-one' ? '7' : type==='composition-step-two' ? '7' : 'g(x)';
    return svg('Two function machines connected in order',`${arrow}<path d="M45 160H165M365 160H435M635 160H755" class="heavy" marker-end="url(#arrow)"/><rect x="180" y="90" width="170" height="140" class="shape"/><rect x="450" y="90" width="170" height="140" class="shape"/><text x="80" y="135" class="big">${first}</text><text x="245" y="170" class="big">g</text><text x="385" y="135" class="big">${middle}</text><text x="515" y="170" class="big">f</text><text x="680" y="135" class="big">${type==='composition-step-two'?'49':'f(g(x))'}</text><text x="205" y="265">first</text><text x="485" y="265">second</text>`);
  }
  if(type==='composition-substitute') return svg('The inside function replaces x in the outside function',`${arrow}<text x="70" y="90" class="equation">f(x) = x²</text><text x="70" y="155" class="equation">g(x) = x + 4</text><path d="M380 125H500" class="heavy" marker-end="url(#arrow)"/><rect x="525" y="70" width="220" height="120" class="shape"/><text x="565" y="140" class="equation">(x + 4)²</text><text x="530" y="235">g(x) replaces x</text>`);
  if(type==='composition-order') return svg('Changing composition order changes the rule',`<rect x="65" y="55" width="300" height="205" class="shape"/><rect x="435" y="55" width="300" height="205" class="shape"/><text x="135" y="105">g first, then f</text><text x="105" y="170" class="equation">(x + 4)²</text><text x="500" y="105">f first, then g</text><text x="500" y="170" class="equation">x² + 4</text><text x="330" y="300" class="big">≠</text>`);
  if(type==='domain-gate') return svg('A domain gate blocks an input that creates division by zero',`${arrow}<path d="M55 160H260M535 160H745" class="heavy" marker-end="url(#arrow)"/><rect x="280" y="70" width="235" height="180" class="shape"/><text x="330" y="135">denominator</text><text x="345" y="190" class="equation">x − 2</text><path d="M385 90L485 230M485 90L385 230" class="strike"/><text x="80" y="125" class="big">x = 2</text><text x="595" y="125" class="big">blocked</text>`);
  if(type.includes('inverse')) return svg('A function and its inverse undo one another',`${arrow}<path d="M55 115H255M545 115H745M745 220H545M255 220H55" class="heavy" marker-end="url(#arrow)"/><rect x="275" y="55" width="250" height="120" class="shape"/><rect x="275" y="185" width="250" height="80" class="shape"/><text x="80" y="90" class="big">input</text><text x="350" y="125" class="equation">f</text><text x="655" y="90" class="big">output</text><text x="340" y="235" class="equation">f⁻¹</text>`);
  if(type.includes('horizontal-line')) return svg('Horizontal line test across a function graph',`<path d="M70 270H745M110 295V30" class="axis"/><path d="M140 250C250 230 260 70 390 75S540 260 690 120" class="curve"/><path d="M90 145H730" class="strike"/><circle cx="225" cy="145" r="7"/><circle cx="580" cy="145" r="7"/><text x="500" y="125">two intersections</text>`);
  if(type.includes('transformation') || type.includes('parent-anchor') || type.includes('point-mapping') || type.includes('shift') || type.includes('stretch')) return svg('A parent graph and its transformed graph',`<path d="M55 270H755M400 295V25" class="axis"/><path d="M190 250Q280 55 370 250" class="thin"/><path d="M430 250Q535 100 640 250" class="curve"/><circle cx="280" cy="55" r="6"/><circle cx="535" cy="100" r="6"/><text x="160" y="50">parent</text><text x="595" y="85">transformed</text><path d="M300 75L490 100" class="heavy" marker-end="url(#arrow)"/>`);
  if(type.includes('model')) return svg('A model connects a situation, rule, and prediction',`${arrow}<rect x="40" y="90" width="190" height="130" class="shape"/><rect x="305" y="90" width="190" height="130" class="shape"/><rect x="570" y="90" width="190" height="130" class="shape"/><path d="M230 155H290M495 155H555" class="heavy" marker-end="url(#arrow)"/><text x="90" y="145" class="big">situation</text><text x="355" y="145" class="big">model</text><text x="610" y="145" class="big">prediction</text><text x="90" y="180">inputs</text><text x="350" y="180">equation</text><text x="620" y="180">meaning</text>`);
  if(type.includes('polynomial')) return svg('Polynomial zeros, multiplicity, and end behavior',`<path d="M55 270H755M400 295V25" class="axis"/><path d="M75 245C150 230 180 80 260 160S365 245 420 190S500 85 555 175S650 245 735 55" class="curve"/><circle cx="210" cy="205" r="6"/><circle cx="400" cy="205" r="6"/><circle cx="635" cy="205" r="6"/><text x="180" y="235">zero</text><text x="370" y="235">zero</text><text x="605" y="235">zero</text>`);
  if(type.includes('rational')) return svg('Rational function with a hole and asymptotes',`<path d="M55 270H755M400 295V25" class="axis"/><path d="M255 25V290M55 90H755" class="strike" stroke-dasharray="8 8"/><path d="M70 245C130 235 205 205 245 135M270 285C310 215 350 155 390 120M420 75C500 45 615 50 740 65" class="curve"/><circle cx="340" cy="170" r="9" fill="var(--paper)" stroke="currentColor" stroke-width="3"/><text x="185" y="45">vertical asymptote</text><text x="570" y="78">horizontal asymptote</text><text x="350" y="195">hole</text>`);
  if(type.includes('representation') || type.includes('feature-comparison')) return svg('The same function shown as an equation, table, and graph',`<rect x="35" y="55" width="220" height="210" class="shape"/><rect x="290" y="55" width="220" height="210" class="shape"/><rect x="545" y="55" width="220" height="210" class="shape"/><text x="95" y="95" class="big">equation</text><text x="350" y="95" class="big">table</text><text x="620" y="95" class="big">graph</text><text x="80" y="170" class="equation">f(x)</text><path d="M335 125H465M400 125V235M335 165H465M335 205H465" class="thin"/><path d="M580 230H730M610 250V120M620 220Q665 125 715 190" class="curve"/>`);
  const close = type==='secant-close';
  return svg('A secant line through two points on a curve',`<path d="M70 270H750M115 295V30" class="axis"/><path d="M125 250 C260 280 475 220 690 55" class="curve"/><path d="M${close?280:215} ${close?225:250}L${close?500:610} ${close?145:105}" class="heavy"/><circle cx="${close?280:215}" cy="${close?225:250}" r="7"/><circle cx="${close?500:610}" cy="${close?145:105}" r="7"/><text x="${close?205:135}" y="${close?260:285}">(x, f(x))</text><text x="${close?510:615}" y="${close?135:95}">(x+h, f(x+h))</text><text x="390" y="82">secant line</text>`);
}

function mathEntry(label='Your answer') {
  return `<div class="math-entry"><div class="math-preview empty" aria-hidden="true">Your math will appear here</div><input aria-label="${label}" autocomplete="off" spellcheck="false" placeholder="Type with ^ for powers and / for fractions"></div>`;
}
function lessonSection() {
  const s = lesson.sections[state.section];
  const extraStart = lesson.sections.length + 1;
  const rail = lesson.sections.map((item,i)=>`<button data-section="${i}" class="${i===state.section?'active':''}"><span>${item.label}</span>${item.title}</button>`).join('') + `<button data-go="examples"><span>${String(extraStart).padStart(2,'0')}</span>Examples</button><button data-go="practice"><span>${String(extraStart+1).padStart(2,'0')}</span>Practice</button>`;
  layout(`<section class="lesson-screen"><nav class="rail" style="--rail-items:${lesson.sections.length+2}" aria-label="Lesson sections">${rail}</nav><article class="lesson-content" tabindex="-1"><p class="kicker">${s.kicker}</p><h2>${s.title}</h2><div class="prose">${s.body.map(p=>`<p>${p}</p>`).join('')}</div><div class="formula">${mathHTML(s.formula)}</div><figure class="diagram">${diagram(s.diagram)}</figure><aside class="note"><strong>Keep in mind</strong>${s.note}</aside><section class="check"><span class="check-label">Pause and try · press A to jump here</span><h3>${mathHTML(s.check.prompt)}</h3><form data-check><div class="answer-row">${mathEntry()}<button class="primary">Check</button></div></form><p class="feedback">${state.feedback}</p></section><nav class="screen-nav"><button data-prev ${state.section===0?'disabled':''}>← Previous</button><button data-next>${state.section===lesson.sections.length-1?'Worked examples →':'Next step →'}</button></nav></article></section>`);
}
function examples() {
  layout(`<section class="examples"><p class="eyebrow">Three complete references</p><h1>Worked<br>examples.</h1>${lesson.examples.map((ex,i)=>`<article class="example" id="example-${i}"><div><span class="eyebrow">Example 0${i+1}</span><h2>${ex.title}</h2></div><div><div class="example-problem">${mathHTML(ex.problem)}</div><ol class="steps">${ex.steps.map(x=>`<li>${mathHTML(x)}</li>`).join('')}</ol></div></article>`).join('')}<nav class="screen-nav"><button data-section="${lesson.sections.length-1}">← Back to lesson</button><button data-go="practice">${state.exampleReturn !== null ? 'Return to practice →' : 'Begin mastery practice →'}</button></nav></section>`);
  if(state.exampleReturn !== null) requestAnimationFrame(()=>document.querySelector(`#example-${state.exampleReturn}`)?.scrollIntoView());
}
function practice() {
  const p = progress();
  const q = lesson.practice[p.question % lesson.practice.length];
  layout(`<section class="practice"><h1>Practice.</h1><div class="mastery" tabindex="0" aria-describedby="mastery-tip"><span class="mastery-label">Reach 10</span><div class="track"><div class="track-fill" style="width:${p.score*10}%"></div><div class="ticks">${Array.from({length:11},()=>'<i></i>').join('')}</div></div><span class="score">${p.score}</span><span class="mastery-tip" id="mastery-tip" role="tooltip">Correct +1 · Incorrect −1 · Score never drops below 0</span></div>${p.score>=10?`<section class="completion"><p class="eyebrow">Lesson complete</p><div class="question">You reached 10. You have mastered ${lesson.title.toLowerCase()}.</div><button class="primary" data-finish>Return to portal</button></section>`:`<div class="practice-body"><div class="practice-question"><div class="question-number">Question ${(p.question%lesson.practice.length)+1} of ${lesson.practice.length}</div><div class="question">${mathHTML(q.q)}</div><form data-practice>${mathEntry('Practice answer')}<div class="practice-actions"><button class="primary">Submit answer</button><button type="button" class="text-button boxed" data-skip>Skip →</button></div></form><p class="feedback">${state.feedback}</p></div><aside class="example-links"><h3>Reference examples</h3>${lesson.examples.map((ex,i)=>`<button data-example="${i}"><span>0${i+1}</span><strong>${ex.title}</strong><small>${mathHTML(ex.problem)}</small></button>`).join('')}</aside></div>`}</section>`);
  if(p.score<10) requestAnimationFrame(()=>document.querySelector('[data-practice] input')?.focus());
}
function guide() {
  const shortcuts = [['Tab','Move through every control'],['Enter','Open or submit'],['← / →','Previous or next lesson step'],['1–6','Open a lesson step'],['A','Focus the answer box'],['E','Worked examples'],['P','Mastery practice'],['F','Give feedback'],['H','Course portal'],['Alt+T','Invert light / dark'],['?','Open this guide'],['Esc','Close guide or leave input']];
  return `<aside class="guide" role="dialog" aria-modal="true" aria-label="Keyboard guide"><div class="guide-head"><span class="eyebrow">Keyboard guide</span><button class="text-button" data-guide><span class="key">Esc</span>close</button></div><h2>No mouse<br>needed.</h2><div class="guide-grid">${shortcuts.map(([key,description])=>`<div class="guide-item"><span><span class="key">${key}</span></span><span>${description}</span></div>`).join('')}</div></aside>`;
}

function selectLesson(id) { currentLessonId=id; lesson=COURSE.lessons[id]; state.section=lessonProgress().section || 0; persist(); go('overview'); }
function go(view) { state.view=view; state.feedback=''; if(view!=='examples') state.exampleReturn=null; persist(); render(); window.scrollTo(0,0); }
function render() {
  if(state.view==='portal') portal(); else if(state.view==='overview') overview();
  else if(state.view==='lesson') lessonSection(); else if(state.view==='examples') examples(); else practice();
}
function next() {
  if(state.view==='overview') { state.view='lesson'; state.section=lessonProgress().section || 0; persist(); render(); }
  else if(state.view==='lesson') {
    if(!sectionPassed()) {
      state.feedback='Answer this section correctly and press Enter before moving on.';
      const feedback=document.querySelector('.feedback'); if(feedback) feedback.textContent=state.feedback;
      announce(state.feedback); return;
    }
    if(state.section < lesson.sections.length-1) { state.section++; lessonProgress().section=state.section; state.feedback=''; persist(); render(); window.scrollTo(0,0); }
    else go('examples');
  } else if(state.view==='examples') go('practice');
}
function prev() {
  if(state.view==='lesson' && state.section>0) { state.section--; lessonProgress().section=state.section; state.feedback=''; persist(); render(); window.scrollTo(0,0); }
  else if(state.view==='examples') { state.view='lesson'; state.section=lesson.sections.length-1; render(); }
}
function updateMathPreview(input) {
  const preview = input.closest('.math-entry')?.querySelector('.math-preview');
  if(!preview) return;
  preview.innerHTML = input.value ? mathHTML(input.value) : 'Your math will appear here';
  preview.classList.toggle('empty', !input.value);
}
function toggleTheme() { state.theme=state.theme==='dark'?'light':'dark'; persist(); render(); announce(`${state.theme} mode`); }
function updatePortalHeader() { document.querySelector('.portal-topbar')?.classList.toggle('visible',window.scrollY>80); }
function showCloudError(error) {
  state.modalMessage=error?.body?.message || error?.message || 'Cloud sync is unavailable right now.';
  if(state.modal) render();
}
function openFeedback() {
  state.modalMessage='';
  if(cloud?.user) state.modal='feedback';
  else { state.modal='auth'; state.pendingFeedback=true; }
  render();
}
function mergeCloudProgress(remote) {
  if(!remote) { state.cloudReady=true; persist(); return; }
  const remoteIsNewer=(remote.updatedAt || 0)>state.updatedAt;
  state.completed=[...new Set([...(state.completed||[]),...(remote.completed||[])])];
  for(const [id,item] of Object.entries(remote.progress||{})) {
    const local=state.progress[id] || {score:0,question:0};
    state.progress[id]={
      score:Math.max(local.score||0,item.score||0),
      question:remoteIsNewer?(item.question||0):(local.question||0),
    };
  }
  for(const [id,item] of Object.entries(remote.lessonState||{})) {
    const local=state.lessonState[id] || {section:0,passed:[]};
    state.lessonState[id]={
      section:remoteIsNewer?(item.section||0):(local.section||0),
      passed:[...new Set([...(local.passed||[]),...(item.passed||[])])],
    };
  }
  if(remoteIsNewer) {
    if(COURSE.lessons[remote.currentLessonId]) currentLessonId=remote.currentLessonId;
    if(['portal','overview','lesson','examples','practice'].includes(remote.view)) state.view=remote.view;
    lesson=COURSE.lessons[currentLessonId];
    state.section=state.lessonState[currentLessonId]?.section || 0;
  }
  state.updatedAt=Math.max(state.updatedAt,remote.updatedAt||0);
  state.cloudReady=true;
  persist();
}
function bind() {
  document.querySelectorAll('[data-go]').forEach(el=>el.onclick=()=>go(el.dataset.go));
  document.querySelectorAll('[data-lesson]').forEach(el=>el.onclick=()=>selectLesson(el.dataset.lesson));
  document.querySelectorAll('[data-guide]').forEach(el=>el.onclick=()=>{state.guide=!state.guide;render();});
  document.querySelectorAll('[data-feedback]').forEach(el=>el.onclick=openFeedback);
  document.querySelectorAll('[data-account]').forEach(el=>el.onclick=()=>{state.modal=cloud?.user?'account':'auth';state.modalMessage='';render();});
  document.querySelectorAll('[data-close-modal]').forEach(el=>el.onclick=()=>{state.modal=null;state.pendingFeedback=false;render();});
  document.querySelector('[data-change-email]')?.addEventListener('click',()=>{state.authStep='email';state.modalMessage='';render();});
  document.querySelector('[data-email-form]')?.addEventListener('submit',async e=>{
    e.preventDefault(); state.authEmail=new FormData(e.target).get('email').toString().trim(); state.modalMessage='Sending code…';render();
    try { await cloud.sendCode(state.authEmail); state.authStep='code';state.modalMessage='';render(); } catch(error) { state.authStep='email';showCloudError(error); }
  });
  document.querySelector('[data-code-form]')?.addEventListener('submit',async e=>{
    e.preventDefault();const code=new FormData(e.target).get('code').toString();state.modalMessage='Verifying…';render();
    try { await cloud.verifyCode(code); } catch(error) { showCloudError(error); }
  });
  document.querySelector('[data-username-form]')?.addEventListener('submit',async e=>{
    e.preventDefault();const username=new FormData(e.target).get('username').toString();state.modalMessage='Saving…';render();
    try { await cloud.saveUsername(username);state.modalMessage='Username saved.';render(); } catch(error) { showCloudError(error); }
  });
  document.querySelector('[data-feedback-form]')?.addEventListener('submit',async e=>{
    e.preventDefault();const data=new FormData(e.target);state.modalMessage='Sending…';render();
    try {
      await cloud.sendFeedback({username:data.get('username').toString(),message:data.get('message').toString(),lessonId:currentLessonId,view:state.view});
      state.modalMessage='Feedback sent and timestamped.';render();
    } catch(error) { showCloudError(error); }
  });
  document.querySelector('[data-sign-out]')?.addEventListener('click',async()=>{try{await cloud.signOut();state.modal='auth';state.authStep='email';state.modalMessage='Signed out on this device.';render();}catch(error){showCloudError(error);}});
  document.querySelector('[data-start]')?.addEventListener('click',()=>{state.view='lesson';state.section=lessonProgress().section || 0;persist();render();});
  document.querySelectorAll('[data-section]').forEach(el=>el.onclick=()=>{state.view='lesson';state.section=Number(el.dataset.section);lessonProgress().section=state.section;state.feedback='';persist();render();window.scrollTo(0,0);});
  document.querySelector('[data-next]')?.addEventListener('click',next);
  document.querySelector('[data-prev]')?.addEventListener('click',prev);
  document.querySelectorAll('.math-entry input').forEach(input=>input.addEventListener('input',()=>updateMathPreview(input)));
  document.querySelector('[data-check]')?.addEventListener('submit',e=>{
    e.preventDefault(); const s=lesson.sections[state.section]; const value=e.target.querySelector('input').value;
    const correct=matches(value,s.check.accept);
    if(correct && !lessonProgress().passed.includes(s.id)) lessonProgress().passed.push(s.id);
    state.feedback=correct?'Correct. Now press → for the next step.':`Not yet. ${s.check.hint}`;
    persist();
    announce(state.feedback); render(); requestAnimationFrame(()=>document.querySelector('[data-check] input')?.focus());
  });
  document.querySelector('[data-practice]')?.addEventListener('submit',e=>{
    e.preventDefault(); const p=progress(); const q=lesson.practice[p.question%lesson.practice.length];
    const correct=matches(e.target.querySelector('input').value,q.accepted);
    p.score=Math.max(0,Math.min(10,p.score+(correct?1:-1)));
    if(p.score>=10 && !state.completed.includes(lesson.id)) state.completed.push(lesson.id);
    state.feedback=correct?'Correct. Your mastery moves up one.':`Not quite. The answer is ${q.a}. Your mastery moves down one.`;
    p.question=(p.question+1)%lesson.practice.length; persist(); announce(state.feedback); render();
  });
  document.querySelector('[data-skip]')?.addEventListener('click',()=>{const p=progress();p.question=(p.question+1)%lesson.practice.length;state.feedback='Skipped. Your score stays the same.';persist();render();});
  document.querySelectorAll('[data-example]').forEach(el=>el.onclick=()=>{state.exampleReturn=Number(el.dataset.example);state.view='examples';render();});
  document.querySelector('[data-finish]')?.addEventListener('click',()=>{if(!state.completed.includes(lesson.id))state.completed.push(lesson.id);persist();go('portal');});
}

document.addEventListener('keydown',e=>{
  if(e.repeat) return;
  const inInput=e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
  if(inInput) {
    if(e.key==='Escape') e.target.blur();
    else if(sectionPassed() && e.key==='ArrowRight') { e.preventDefault(); next(); }
    else if(sectionPassed() && e.key==='ArrowLeft') { e.preventDefault(); prev(); }
    return;
  }
  if(e.key==='?' ) { state.guide=!state.guide; render(); return; }
  if(e.key==='Escape' && state.modal) { state.modal=null;state.pendingFeedback=false;render();return; }
  if(e.key==='Escape' && state.guide) { state.guide=false; render(); return; }
  if(state.guide || state.modal) return;
  const key=e.key.toLowerCase();
  if(key==='h') go('portal');
  else if(key==='t' && e.altKey) { e.preventDefault(); toggleTheme(); }
  else if(key==='p') go('practice');
  else if(key==='e') go('examples');
  else if(key==='f') { e.preventDefault(); openFeedback(); }
  else if(key==='a') { e.preventDefault(); document.querySelector('.math-entry input')?.focus(); }
  else if(/^[1-9]$/.test(key) && state.view==='lesson') { const index=Number(key)-1; if(index<lesson.sections.length){state.section=index;lessonProgress().section=state.section;persist();render();window.scrollTo(0,0);} }
  else if(e.key==='ArrowRight') next();
  else if(e.key==='ArrowLeft') prev();
});
window.addEventListener('linework-auth',event=>{
  if(event.detail.user) {
    state.modal=state.pendingFeedback?'feedback':(state.modal==='auth'?'account':state.modal);
    state.authStep='email';state.modalMessage='';render();
  } else if(!event.detail.user && state.modal==='account') { state.modal='auth';render(); }
});
window.addEventListener('linework-cloud-data',event=>{
  const remote=event.detail.progress;
  if(!state.cloudReady || (remote?.updatedAt||0)>state.updatedAt) mergeCloudProgress(remote);
  else if(state.modal) render();
});
window.addEventListener('linework-cloud-error',event=>{state.modalMessage=event.detail.message;if(state.modal)render();});
window.addEventListener('scroll',updatePortalHeader,{passive:true});
render();
