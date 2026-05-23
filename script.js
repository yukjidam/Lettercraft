// ── DATA ──────────────────────────────────────────────────────────────────────
const THEMES = [
  {id:'warm',    name:'Warm Parchment', bg:'#fdf6e3',paper:'#fffdf5',border:'#e6d5b0',accent:'#b5813e',text:'#3d2b0e',sub:'#8c6d3f',emoji:'🌾',starC:'#f7c59f'},
  {id:'rose',    name:'Rose Garden',   bg:'#fff0f3',paper:'#fff8fa',border:'#f0c4ce',accent:'#d4607a',text:'#3d0e18',sub:'#9c4457',emoji:'🌹',starC:'#f4c0d1'},
  {id:'ocean',   name:'Ocean Blue',    bg:'#e8f4f8',paper:'#f4fafc',border:'#b0d8e6',accent:'#2e7d9c',text:'#0a2d3a',sub:'#3a7a96',emoji:'🌊',starC:'#B5D4F4'},
  {id:'forest',  name:'Forest Sage',   bg:'#edf3ec',paper:'#f5f9f4',border:'#bcd4b8',accent:'#4a7c59',text:'#0e2614',sub:'#4a6f4d',emoji:'🌿',starC:'#9FE1CB'},
  {id:'lavender',name:'Lavender Mist', bg:'#f3f0fa',paper:'#f9f7fd',border:'#c8bce8',accent:'#6b50b4',text:'#1e1040',sub:'#6b50a0',emoji:'💜',starC:'#CECBF6'},
  {id:'midnight',name:'Midnight Ink',  bg:'#1a1a2e',paper:'#16213e',border:'#334466',accent:'#e0b96a',text:'#e8e0d0',sub:'#a09888',emoji:'🌙',starC:'#e0b96a'},
  {id:'autumn',  name:'Autumn Leaves', bg:'#fdf0e4',paper:'#fff8ef',border:'#e8c49a',accent:'#c4622d',text:'#3a1a08',sub:'#8a4a2a',emoji:'🍂',starC:'#FAC775'},
  {id:'cherry',  name:'Cherry Blossom',bg:'#fff9f6',paper:'#fffdf9',border:'#f0c8c8',accent:'#c47070',text:'#44333a',sub:'#885566',emoji:'🌸',starC:'#f4c0d1'},
  {id:'mint',    name:'Mint Fresh',    bg:'#edfaf5',paper:'#f5fdfa',border:'#a8e6d0',accent:'#2a8f6f',text:'#0a2e22',sub:'#3a7a60',emoji:'🍃',starC:'#9FE1CB'},
  {id:'golden',  name:'Golden Hour',   bg:'#fdf8e1',paper:'#fffef5',border:'#e8d88a',accent:'#b8972a',text:'#3a2e08',sub:'#8a7030',emoji:'✨',starC:'#FAC775'},
];

const EMOJI_SETS = {
  general:        ['✉️','📝','🌟','💫','✨','🌈','☀️','🌙','⭐','💖','🦋','🕊️','🌺','🌻','💐','🎀','🎁','🌷','🍀','💝'],
  birthday:       ['🎂','🎁','🎉','🎈','🎊','🥳','🎆','🎇','🍰','🧁','🎶','🌟','✨','🥂','🎀','🎠','🌈','💫','⭐','🎵'],
  love:           ['💌','❤️','💖','💕','💗','💓','🌹','🌷','💍','✨','🦋','💫','💝','😍','🥰','💘','💞','♥️','🌸'],
  'thank-you':    ['🙏','💛','🌟','✨','💐','🌺','🌼','⭐','🎁','🌈','💖','🤗','😊','🌻','💝','🌷','🦋','🌸','🎀','💫'],
  friendship:     ['🤝','🫂','💛','🌟','✨','🥳','🎉','🦋','🌈','☀️','💐','🌻','🍀','💚','😊','🎶','🌷','💝','⭐','🎁'],
  apology:        ['💫','🌸','🕊️','💐','🌷','❤️','🌹','✨','🙏','💛','🌈','🦋','💝','🌺','⭐','🌙','💖','🌟','🍀','😔'],
  congratulations:['🏆','🥇','🎉','🎊','🌟','⭐','✨','🎆','🎇','🥂','🎓','💪','🌈','🦅','🎁','🎀','👑','💫','🚀','🎶'],
  holiday:        ['🎄','⛄','❄️','🎅','🤶','🦌','🎁','✨','🌟','⭐','🕯️','🍪','🧦','🔔','🎶','❤️','🌨️','🎊','🎉','🎠'],
};

const DIVIDERS = ['— ✦ —','· · · · ·','✿ ✿ ✿','— ◦ —','⁕ ⁕ ⁕','✦ ✦ ✦','• — •','~ ~ ~','❧ ❧','(none)'];
const TEXTURES = [
  {id:'none',  label:'Plain'},
  {id:'dots',  label:'Dots'},
  {id:'lines', label:'Lines'},
  {id:'grid',  label:'Grid'},
  {id:'cross', label:'Cross'},
];
const CURSOR_OPTIONS = ['🌸','⭐','💖','🦋','✨','🌺','💫','🎀','🌹','🍀','🎈','❄️','🌙','🔮','🦄'];
const EFFECTS = [
  {id:'confetti', label:'Confetti',   desc:'Paper confetti burst',  icon:'🎊'},
  {id:'balloons', label:'Balloons',   desc:'Floating balloons',     icon:'🎈'},
  {id:'fireworks',label:'Fireworks',  desc:'Colorful fireworks',    icon:'✨'},
  {id:'hearts',   label:'Hearts',     desc:'Floating hearts',       icon:'💗'},
  {id:'stars',    label:'More Stars', desc:'Extra star burst',      icon:'⭐'},
  {id:'petals',   label:'Petals',     desc:'Falling flower petals', icon:'🌸'},
];

const FONTS = [
  {id:'playfair',   family:"'Playfair Display',Georgia,serif",   import:"family=Playfair+Display:ital,wght@0,400;0,600;1,400",  label:'Playfair — Classic'},
  {id:'lora',       family:"'Lora',Georgia,serif",               import:"family=Lora:ital,wght@0,400;1,400",                    label:'Lora — Elegant'},
  {id:'cormorant',  family:"'Cormorant Garamond',Georgia,serif",  import:"family=Cormorant+Garamond:ital,wght@0,400;1,400",     label:'Cormorant — Refined'},
  {id:'caveat',     family:"'Caveat',cursive",                    import:"family=Caveat:wght@400;600",                          label:'Caveat — Handwritten'},
  {id:'dancing',    family:"'Dancing Script',cursive",            import:"family=Dancing+Script:wght@400;600",                  label:'Dancing Script — Romantic'},
  {id:'sacramento', family:"'Sacramento',cursive",                import:"family=Sacramento",                                   label:'Sacramento — Flowing'},
  {id:'spectral',   family:"'Spectral',Georgia,serif",            import:"family=Spectral:ital,wght@0,300;0,400;1,300",         label:'Spectral — Literary'},
  {id:'garamond',   family:"'EB Garamond',Georgia,serif",         import:"family=EB+Garamond:ital,wght@0,400;1,400",            label:'EB Garamond — Timeless'},
  {id:'crimson',    family:"'Crimson Pro',Georgia,serif",          import:"family=Crimson+Pro:ital,wght@0,400;1,400",            label:'Crimson Pro — Stately'},
  {id:'baskerville',family:"'Libre Baskerville',Georgia,serif",   import:"family=Libre+Baskerville:ital,wght@0,400;1,400",     label:'Libre Baskerville — Book'},
  {id:'raleway',    family:"'Raleway',sans-serif",                 import:"family=Raleway:ital,wght@0,300;0,400;1,300",         label:'Raleway — Modern'},
  {id:'josefin',    family:"'Josefin Slab',serif",                 import:"family=Josefin+Slab:wght@300;400",                  label:'Josefin Slab — Geometric'},
];

// Letter card accent decorations per type (shown in letter preview, steps 1-5)
const TYPE_DECORATIONS = {
  general:        {topBadge:'✉', pattern:'none'},
  birthday:       {topBadge:'🎂', pattern:'confetti'},
  love:           {topBadge:'♡', pattern:'hearts'},
  'thank-you':    {topBadge:'✿', pattern:'dots'},
  friendship:     {topBadge:'🤝', pattern:'stars'},
  apology:        {topBadge:'🕊', pattern:'none'},
  congratulations:{topBadge:'★', pattern:'stars'},
  holiday:        {topBadge:'❄', pattern:'snowflakes'},
};

// ── STATE ─────────────────────────────────────────────────────────────────────
const S = {
  step:0, type:'general', typeName:'General',
  theme: THEMES[7],
  font:'lora',
  to:'',from:'',greeting:'',quote:'',quoteAuthor:'',message:'',closing:'',
  emojis:[], divider:'— ✦ —', texture:'none',
  showDate:'yes', customDate:'', ps:'',
  headerBar:'rainbow',
  cursorEmoji:'🌸',
  starCount:40,
  envelope:'yes', openBtnText:'Open your letter',
  effects:['confetti','balloons','fireworks','hearts'],
  trailStyle:'both',
  watermark:'', showBrand:'yes',
  fileName:'', pageTitle:'', maxWidth:520,
  generatedHTML:''
};

// ── INIT ──────────────────────────────────────────────────────────────────────
function init(){
  buildThemeGrid();
  buildFontGrid();
  buildEmojiPicker();
  buildDividerGrid();
  buildTextureGrid();
  buildCursorGrid();
  buildEffectGrid();
  document.getElementById('greetField').value = 'Dearest,';
  document.getElementById('closingField').value = 'With warmth,';
  S.greeting = 'Dearest,'; S.closing = 'With warmth,';
  document.querySelectorAll('.theme-swatch')[7]?.classList.add('selected');
  document.querySelectorAll('.theme-swatch')[0]?.classList.remove('selected');
  initResizeHandle();
  scalePreviewIframe();
  window.addEventListener('resize', scalePreviewIframe);
  updatePreview();
}

function buildThemeGrid(){
  document.getElementById('themeGrid').innerHTML = THEMES.map((t,i)=>`
    <div class="theme-swatch${i===7?' selected':''}" onclick="selectTheme(this,'${t.id}')" data-id="${t.id}">
      <div class="swatch-preview" style="background:${t.bg}">${t.emoji}</div>
      <div class="swatch-label" style="background:${t.paper};color:${t.text};font-family:'DM Sans',sans-serif;font-size:0.68rem">${t.name}</div>
    </div>`).join('');
}

function buildFontGrid(){
  const sampleText = 'Dearest friend,';
  document.getElementById('fontGrid').innerHTML = FONTS.map(f=>`
    <div class="font-card${f.id==='lora'?' selected':''}" onclick="selectFont(this,'${f.id}')" data-font="${f.id}">
      <div class="sample" style="font-family:${f.family}">${sampleText}</div>
      <div class="fname">${f.label}</div>
    </div>`).join('');
}

function buildEmojiPicker(){
  const emojis = EMOJI_SETS[S.type]||EMOJI_SETS.general;
  document.getElementById('emojiPicker').innerHTML = emojis.map(e=>`
    <button class="emoji-btn${S.emojis.includes(e)?' selected':''}" onclick="toggleEmoji(this,'${e}')" title="${e}">${e}</button>`).join('');
}

function buildDividerGrid(){
  document.getElementById('dividerGrid').innerHTML = DIVIDERS.map((d,i)=>`
    <div class="div-card${i===0?' selected':''}" onclick="selectDivider(this,'${d}')">${d==='(none)'?'(none)':d}</div>`).join('');
}

function buildTextureGrid(){
  document.getElementById('textureGrid').innerHTML = TEXTURES.map((t,i)=>`
    <div class="div-card${i===0?' selected':''}" onclick="selectTexture(this,'${t.id}')">${t.label}</div>`).join('');
}

function buildCursorGrid(){
  document.getElementById('cursorGrid').innerHTML = CURSOR_OPTIONS.map(e=>`
    <div class="cursor-opt${e===S.cursorEmoji?' selected':''}" onclick="selectCursor(this,'${e}')">${e}</div>`).join('');
}

function buildEffectGrid(){
  document.getElementById('effectGrid').innerHTML = EFFECTS.map(e=>`
    <div class="effect-card${S.effects.includes(e.id)?' selected':''}" onclick="toggleEffect(this,'${e.id}')">
      <span class="eico">${e.icon}</span>
      <div><div class="elabel">${e.label}</div><div class="edesc">${e.desc}</div></div>
    </div>`).join('');
}

// ── SELECTIONS ────────────────────────────────────────────────────────────────
function selectType(el,type,name){
  document.querySelectorAll('.type-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  S.type=type; S.typeName=name;
  S.emojis=[]; buildEmojiPicker();
  renderSelectedEmojis(); updatePreview();
}

function selectTheme(el,id){
  document.querySelectorAll('.theme-swatch').forEach(s=>s.classList.remove('selected'));
  el.classList.add('selected');
  S.theme=THEMES.find(t=>t.id===id);
  updatePreview();
}

function selectFont(el,font){
  document.querySelectorAll('.font-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected'); S.font=font; updatePreview();
}

function selectDivider(el,d){
  document.querySelectorAll('.div-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected'); S.divider=d; updatePreview();
}

function selectTexture(el,id){
  document.querySelectorAll('#textureGrid .div-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected'); S.texture=id; updatePreview();
}

function selectCursor(el,e){
  document.querySelectorAll('.cursor-opt').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected'); S.cursorEmoji=e; updatePreview();
}

function toggleEffect(el,id){
  const idx=S.effects.indexOf(id);
  if(idx===-1) S.effects.push(id); else S.effects.splice(idx,1);
  el.classList.toggle('selected');
  updatePreview();
}

function toggleEmoji(btn,emoji){
  const idx=S.emojis.indexOf(emoji);
  if(idx===-1){if(S.emojis.length>=8)return;S.emojis.push(emoji);btn.classList.add('selected');}
  else{S.emojis.splice(idx,1);btn.classList.remove('selected');}
  renderSelectedEmojis(); updatePreview();
}

function renderSelectedEmojis(){
  const w=document.getElementById('selectedEmojis');
  if(!S.emojis.length){w.innerHTML='<span style="font-size:0.75rem;color:var(--ink3)">None selected</span>';return;}
  w.innerHTML=S.emojis.map(e=>`<div class="sel-tag" onclick="removeEmoji('${e}')">${e}<span class="rm">✕</span></div>`).join('');
}

function removeEmoji(e){
  S.emojis=S.emojis.filter(x=>x!==e);
  document.querySelectorAll('.emoji-btn').forEach(b=>{if(b.textContent===e)b.classList.remove('selected');});
  renderSelectedEmojis(); updatePreview();
}

function onDateToggle(){
  S.showDate=document.getElementById('dateToggle').value;
  document.getElementById('customDateWrap').style.display=S.showDate==='custom'?'block':'none';
  updatePreview();
}

function onMsgInput(){
  const el=document.getElementById('msgField');
  const cc=document.getElementById('charCount');
  const len=el.value.length;
  cc.textContent=len+' / 750';
  cc.className='char-count'+(len>700?' warn':'');
  S.message=el.value;
  updatePreview();
}

// ── IFRAME SCALING — makes iframe content fit the preview panel ───────────────
function scalePreviewIframe(){
  const frame = document.getElementById('previewFrame');
  const iframe = document.getElementById('previewIframe');
  if(!frame||!iframe) return;
  const fw = frame.clientWidth;
  const fh = frame.clientHeight;
  const isMobile = window.innerWidth <= 900;
  // On mobile, simulate a 390px wide phone viewport; on desktop use 800px
  const iframeW = isMobile ? 390 : 800;
  const iframeH = isMobile ? 844 : 900;
  const scale = Math.min(fw/iframeW, fh/iframeH);
  const scaledW = iframeW * scale;
  const offsetX = (fw - scaledW) / 2;
  iframe.style.width = iframeW + 'px';
  iframe.style.height = iframeH + 'px';
  iframe.style.transform = `translateX(${offsetX}px) scale(${scale})`;
  iframe.style.transformOrigin = 'top left';
}

// ── RESIZE HANDLE ─────────────────────────────────────────────────────────────
function initResizeHandle(){
  const handle  = document.getElementById('resizeHandle');
  const layout  = document.getElementById('appLayout');
  const editor  = document.getElementById('editorPanel');
  const preview = document.getElementById('previewPanel');
  if(!handle||!layout) return;

  let dragging=false, startX=0, startEditorW=0, startPreviewW=0;

  handle.addEventListener('mousedown', e=>{
    e.preventDefault();
    dragging=true;
    startX=e.clientX;
    startEditorW=editor.offsetWidth;
    startPreviewW=preview.offsetWidth;
    handle.classList.add('dragging');
    document.body.style.userSelect='none';
    document.body.style.cursor='col-resize';
    // prevent iframe from stealing mouse events
    document.getElementById('previewIframe').style.pointerEvents='none';
  });

  document.addEventListener('mousemove', e=>{
    if(!dragging) return;
    const dx=e.clientX-startX;
    const totalW = layout.offsetWidth;
    const maxEditor = Math.floor(totalW * 0.5) - 5;
    const newEditor=Math.max(300, Math.min(maxEditor, startEditorW+dx));
    const newPreview=Math.max(totalW - newEditor - 5, Math.floor(totalW * 0.5));
    layout.style.gridTemplateColumns=`${newEditor}px 5px ${newPreview}px`;
    scalePreviewIframe();
  });

  document.addEventListener('mouseup', ()=>{
    if(!dragging) return;
    dragging=false;
    handle.classList.remove('dragging');
    document.body.style.userSelect='';
    document.body.style.cursor='';
    document.getElementById('previewIframe').style.pointerEvents='';
    scalePreviewIframe();
  });
}

// ── NAV ───────────────────────────────────────────────────────────────────────
function goToStep(n){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById('s'+n).classList.add('active');
  document.querySelectorAll('.step-tab').forEach((t,i)=>{
    t.classList.remove('active','done');
    if(i===n) t.classList.add('active');
    if(i<n)   t.classList.add('done');
  });
  S.step=n;
  document.getElementById('progressFill').style.width=((n+1)/6*100)+'%';
  readFields();
  updatePreview();
}

function readFields(){
  S.to           = document.getElementById('toField').value;
  S.from         = document.getElementById('fromField').value;
  S.greeting     = document.getElementById('greetField').value;
  S.quote        = document.getElementById('quoteField').value;
  S.quoteAuthor  = document.getElementById('quoteAuthorField').value;
  S.message      = document.getElementById('msgField').value;
  S.closing      = document.getElementById('closingField').value;
  S.ps           = document.getElementById('psField').value;
  S.headerBar    = document.getElementById('headerBar').value;
  S.starCount    = parseInt(document.getElementById('starCount').value)||0;
  S.envelope     = document.getElementById('envelopeToggle').value;
  S.openBtnText  = document.getElementById('openBtnText').value;
  S.trailStyle   = document.getElementById('trailStyle').value;
  S.watermark    = document.getElementById('watermarkField').value;
  S.fileName     = document.getElementById('fileNameField').value;
  S.pageTitle    = document.getElementById('pageTitleField').value;
  S.maxWidth     = parseInt(document.getElementById('widthSlider').value)||520;
  S.showBrand    = document.getElementById('brandToggle').value;
  S.customDate   = document.getElementById('customDate').value;
  S.showDate     = document.getElementById('dateToggle').value;
}

// ── PREVIEW ───────────────────────────────────────────────────────────────────
function updatePreview(){
  readFields();
  let html;
  if(S.step === 0){
    html = generateEnvelopePreview();
  } else {
    // Steps 1-5: always show the letter directly (no envelope reveal needed in preview)
    const savedEnvelope = S.envelope;
    S.envelope = 'no';
    html = generateHTML();
    S.envelope = savedEnvelope;
  }
  const iframe = document.getElementById('previewIframe');
  try{
    const d = iframe.contentDocument || iframe.contentWindow.document;
    d.open(); d.write(html); d.close();
  } catch(e){
    iframe.srcdoc = html;
  }
  scalePreviewIframe();
}

// ── ENVELOPE PREVIEW (Step 0 only) ────────────────────────────────────────────
function generateEnvelopePreview(){
  const t = S.theme||THEMES[7];
  const ff = getFontFamily();
  // Classic single envelope SVG — same design, theme-colored
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:100%;height:100%;background:${t.bg};display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1.2rem;font-family:${ff}}
.env-wrap{display:flex;flex-direction:column;align-items:center;gap:0.9rem}
.env-svg{filter:drop-shadow(0 8px 24px rgba(0,0,0,0.14));animation:wobble 3s ease-in-out infinite}
@keyframes wobble{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}
.hint{font-size:13px;color:${t.sub};letter-spacing:0.06em;animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:0.4}50%{opacity:1}}
.open-btn{font-family:${ff};font-size:15px;color:${t.text};background:${t.bg};border:1.5px solid ${t.border};border-radius:999px;padding:0.65rem 2.2rem;letter-spacing:0.03em;cursor:pointer}
.type-label{font-size:11px;color:${t.sub};text-transform:uppercase;letter-spacing:0.12em;opacity:0.7}
</style></head><body>
<div class="env-wrap">
  <div class="type-label">${esc(S.typeName)} Letter</div>
  <svg class="env-svg" width="240" height="160" viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="240" height="160" rx="12" fill="${t.bg}" stroke="${t.accent}" stroke-width="2"/>
    <polygon points="0,0 120,82 240,0" fill="${t.border}"/>
    <line x1="0" y1="160" x2="120" y2="82" stroke="${t.accent}" stroke-width="1.2" opacity="0.5"/>
    <line x1="240" y1="160" x2="120" y2="82" stroke="${t.accent}" stroke-width="1.2" opacity="0.5"/>
    <text x="120" y="132" text-anchor="middle" font-family="serif" font-size="32" fill="${t.accent}">♡</text>
  </svg>
  <p class="hint">✦ tap to open ✦</p>
  <button class="open-btn">${esc(S.openBtnText)||'Open your letter'}</button>
</div>
</body></html>`;
}

// ── HTML GENERATOR ────────────────────────────────────────────────────────────
function esc(s){
  if(!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function getFontFamily(){
  const f=FONTS.find(x=>x.id===S.font);
  return f ? f.family : "'Lora',Georgia,serif";
}

function getFontImport(){
  const f=FONTS.find(x=>x.id===S.font);
  return f ? `<link href="https://fonts.googleapis.com/css2?${f.import}&display=swap" rel="stylesheet">` : '';
}

function getTextureBg(id){
  const map={
    none:'',
    dots:'radial-gradient(circle,rgba(0,0,0,0.05) 1px,transparent 1px) 0 0 / 20px 20px',
    lines:'repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(0,0,0,0.05) 28px,rgba(0,0,0,0.05) 29px)',
    grid:'linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px) 0 0 / 24px 24px',
    cross:'radial-gradient(circle,rgba(0,0,0,0.06) 1px,transparent 1px) 0 0 / 32px 32px,radial-gradient(circle,rgba(0,0,0,0.06) 1px,transparent 1px) 16px 16px / 32px 32px',
  };
  return map[id]||'';
}

// Per-type letter card top decoration (colored band with icon)
function getTypeAccentHTML(type, t){
  const map = {
    general:        {icon:'✉',   label:''},
    birthday:       {icon:'🎂',  label:''},
    love:           {icon:'♡',   label:''},
    'thank-you':    {icon:'✿',   label:''},
    friendship:     {icon:'🤝',  label:''},
    apology:        {icon:'🕊',  label:''},
    congratulations:{icon:'★',   label:''},
    holiday:        {icon:'❄',   label:''},
  };
  const d = map[type]||map.general;
  return `<div style="text-align:center;font-size:1.6rem;color:${t.accent};margin-bottom:1.1rem;letter-spacing:0.1em;opacity:0.6">${d.icon}</div>`;
}

function generateHTML(){
  const t   = S.theme||THEMES[7];
  const ff  = getFontFamily();
  const fi  = getFontImport();
  const to  = esc(S.to)||'Friend';
  const from= esc(S.from)||'Me';
  const greeting = esc(S.greeting)||'Dearest,';
  const msg = (esc(S.message)||'I wanted to write you this letter to let you know how much you mean to me.').replace(/\n/g,'<br>');
  const closing = esc(S.closing)||'With warmth,';
  const title   = esc(S.pageTitle)||`A Letter for ${to}`;
  const mw = S.maxWidth||520;

  const dateStr = S.showDate==='no' ? '' :
    S.showDate==='custom' && S.customDate ? esc(S.customDate) :
    new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});

  const emojiRow = S.emojis.length ? `<div class="emoji-row">${S.emojis.map(e=>`<span>${e}</span>`).join(' ')}</div>` : '';

  const divHTML = S.divider && S.divider!=='(none)' ?
    `<div class="divider">${esc(S.divider)}</div>` :
    `<div style="border-top:0.5px solid ${t.border};margin:1.5rem 0"></div>`;

  const quoteHTML = S.quote ?
    `<div class="letter-quote">${esc(S.quote)}${S.quoteAuthor?`<span class="attr">${esc(S.quoteAuthor)}</span>`:''}</div><hr class="q-divider"/>` : '';

  const psHTML = S.ps ? `<div class="letter-ps">P.S. ${esc(S.ps)}</div>` : '';

  const txBg = getTextureBg(S.texture);
  const paperBg = txBg
    ? `background-color:${t.paper};background-image:${txBg}`
    : `background-color:${t.paper}`;

  let headerBarCSS = '';
  if(S.headerBar==='rainbow'){
    headerBarCSS=`.letter-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3.5px;background:linear-gradient(90deg,${t.border},${t.accent},${t.starC},${t.accent},${t.border});background-size:300%;animation:rainbow 4s linear infinite}@keyframes rainbow{0%{background-position:0%}100%{background-position:300%}}`;
  } else if(S.headerBar==='solid'){
    headerBarCSS=`.letter-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3.5px;background:${t.accent}}`;
  }

  // Type-specific letter card top decoration
  const typeAccent = getTypeAccentHTML(S.type, t);

  // Envelope SVG (single classic design, theme-colored)
  const envSVG = `<svg class="env-svg" width="200" height="132" viewBox="0 0 200 132" onclick="openLetter()" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="200" height="132" rx="10" fill="${t.bg}" stroke="${t.accent}" stroke-width="1.5"/>
    <polygon points="0,0 100,68 200,0" fill="${t.border}"/>
    <line x1="0" y1="132" x2="100" y2="68" stroke="${t.accent}" stroke-width="1" opacity="0.5"/>
    <line x1="200" y1="132" x2="100" y2="68" stroke="${t.accent}" stroke-width="1" opacity="0.5"/>
    <text x="100" y="110" text-anchor="middle" font-family="serif" font-size="28" fill="${t.accent}">♡</text>
    <animateTransform attributeName="transform" type="rotate" values="0 100 66;2 100 66;-2 100 66;0 100 66" dur="2.5s" repeatCount="indefinite"/>
  </svg>`;

  const effectBtns = S.effects.map(id=>{
    const def=EFFECTS.find(e=>e.id===id);
    if(!def) return '';
    return `<button class="act-btn" onclick="${id}Effect()">${def.icon} ${def.label}</button>`;
  }).join('');

  const watermarkHTML = S.watermark ? `<p class="watermark">${esc(S.watermark)}</p>` :
    S.showBrand==='yes' ? `<p class="watermark">made with Lettercraft by yukjidam ♡</p>` : '';

  const COLORS = JSON.stringify([t.starC,t.accent,t.border,'#f4c0d1','#f7c59f','#9FE1CB','#B5D4F4','#CECBF6']);
  const SPARKLES = JSON.stringify(['✦','✧','⋆','·','✿','♡']);
  const CURSORS_JS = JSON.stringify([S.cursorEmoji,'⭐','💫','✨',S.cursorEmoji]);
  const trailCode = S.trailStyle==='none' ? '' : buildTrailCode(S.trailStyle);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${title}</title>
${fi}
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{width:100%;height:100%}
body{width:100%;min-height:100%;background:${t.bg};overflow-y:auto;overflow-x:hidden}
.stage{width:100%;min-height:100vh;position:relative;display:flex;align-items:center;justify-content:center;padding:2rem 1rem;cursor:none}
.custom-cursor{position:fixed;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);font-size:22px;line-height:1;transition:font-size 0.15s}
.trail-dot{position:fixed;pointer-events:none;z-index:9990;border-radius:50%;transform:translate(-50%,-50%);animation:trailFade 0.7s ease-out forwards}
@keyframes trailFade{0%{opacity:0.8;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(0.1)}}
.sparkle{position:fixed;pointer-events:none;z-index:9991;font-size:14px;transform:translate(-50%,-50%);animation:sparklePop 0.6s ease-out forwards}
@keyframes sparklePop{0%{opacity:1;transform:translate(-50%,-50%) scale(0.5) rotate(0deg)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.3) rotate(180deg)}100%{opacity:0;transform:translate(calc(-50% + var(--sx)),calc(-50% + var(--sy))) scale(0) rotate(360deg)}}
.sky{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.star{position:absolute;width:5px;height:5px;border-radius:50%;opacity:0;animation:twinkle 3s ease-in-out infinite}
@keyframes twinkle{0%,100%{opacity:0;transform:scale(0.5)}50%{opacity:0.8;transform:scale(1.3)}}
.balloon{position:fixed;bottom:-120px;opacity:0;font-size:32px;pointer-events:none;transform-origin:bottom center;z-index:5;animation:floatUp var(--dur,7s) ease-in var(--delay,0s) forwards}
@keyframes floatUp{0%{bottom:-80px;opacity:0;transform:rotate(var(--tilt,0deg))}10%{opacity:1}80%{opacity:1}100%{bottom:110%;opacity:0;transform:rotate(calc(var(--tilt,0deg)*-1)) translateX(var(--drift,0px))}}
.confetti-layer,.firework-layer,.floating-layer{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:6}
.cp{position:absolute;border-radius:2px;animation:cpfall linear forwards;opacity:0}
@keyframes cpfall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}
.fw{position:absolute;width:6px;height:6px;border-radius:50%;animation:fwBurst 0.8s ease-out forwards}
@keyframes fwBurst{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(var(--fx),var(--fy)) scale(0);opacity:0}}
.fh{position:absolute;animation:itemFloat 3s ease-out forwards;opacity:0}
@keyframes itemFloat{0%{opacity:0;transform:translateY(0) scale(0.5)}20%{opacity:1}100%{opacity:0;transform:translateY(-200px) scale(1.2) rotate(15deg)}}
.center-content{position:relative;z-index:10;display:flex;flex-direction:column;align-items:center;gap:1.2rem;width:100%;max-width:${mw}px}
.envelope-scene{display:flex;flex-direction:column;align-items:center;gap:1rem}
.env-svg{cursor:none;transition:transform 0.25s cubic-bezier(.34,1.56,.64,1);filter:drop-shadow(0 4px 16px rgba(0,0,0,0.1))}
.env-svg:hover{transform:scale(1.08) rotate(-2deg)}
.hint-text{font-family:${ff};font-size:13px;color:${t.sub};letter-spacing:0.05em;animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:0.4}50%{opacity:1}}
.open-btn{font-family:${ff};font-size:15px;color:${t.text};background:${t.bg};border:1.5px solid ${t.border};border-radius:999px;padding:0.65rem 2.2rem;cursor:none;letter-spacing:0.03em;transition:all 0.2s}
.open-btn:hover{background:${t.border};transform:translateY(-2px)}
.letter-wrap{display:none;width:100%;opacity:0;transform:translateY(24px) scale(0.96);transition:opacity 0.6s cubic-bezier(.22,1,.36,1),transform 0.6s cubic-bezier(.22,1,.36,1)}
.letter-wrap.show{opacity:1;transform:translateY(0) scale(1)}
.letter-card{${paperBg};border:0.5px solid ${t.border};border-radius:16px;padding:2rem 2.3rem 1.8rem;position:relative;overflow:hidden}
${headerBarCSS}
.emoji-row{text-align:center;font-size:1.5rem;margin-bottom:1.2rem;letter-spacing:0.2em}
.letter-quote{font-family:${ff};font-style:italic;font-size:13.5px;color:${t.sub};line-height:1.8;border-left:2px solid ${t.border};padding-left:1rem;margin-bottom:1.2rem}
.letter-quote .attr{display:block;margin-top:0.3rem;font-style:normal;font-size:11.5px;color:${t.sub};opacity:0.8}
.q-divider{border:none;border-top:0.5px solid ${t.border};margin-bottom:1.2rem}
.letter-heading{font-family:${ff};font-size:1.25rem;font-weight:600;color:${t.accent};margin-bottom:0.9rem;line-height:1.3}
.letter-header-row{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.4rem;flex-wrap:wrap;gap:0.5rem}
.letter-to-label{font-size:0.78rem;color:${t.sub};letter-spacing:0.05em;text-transform:uppercase}
.letter-to-name{font-size:1.1rem;font-weight:600;color:${t.text};font-family:${ff};margin-top:2px}
.letter-date{font-size:0.82rem;color:${t.sub};text-align:right;font-style:italic}
.divider{text-align:center;color:${t.accent};font-size:1rem;letter-spacing:0.3em;margin:1.5rem 0;opacity:0.7}
.letter-body{font-family:${ff};font-size:15.5px;line-height:1.88;color:${t.text};word-break:break-word;overflow-wrap:break-word}
.letter-sign{margin-top:1.4rem;display:flex;flex-direction:column;align-items:flex-end;gap:0.2rem}
.letter-sign .closing{font-family:${ff};font-style:italic;font-size:0.9rem;color:${t.sub}}
.letter-sign .from{font-family:${ff};font-size:1.1rem;font-weight:600;color:${t.accent}}
.letter-ps{margin-top:1.2rem;padding-top:1rem;border-top:0.5px solid ${t.border};font-family:${ff};font-size:0.88rem;font-style:italic;color:${t.sub}}
.action-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:0.6rem}
.act-btn{font-family:${ff};font-size:13px;border-radius:999px;padding:0.42rem 1rem;cursor:none;border:1.5px solid ${t.border};background:transparent;color:${t.text};transition:all 0.18s}
.act-btn:hover{background:${t.bg};transform:translateY(-1px)}
.watermark{position:fixed;bottom:12px;left:50%;transform:translateX(-50%);z-index:100;font-family:${ff};font-style:italic;font-size:11px;color:${t.sub};letter-spacing:0.06em;pointer-events:none;white-space:nowrap;opacity:0.7}
@media(max-width:540px){
  .letter-card{padding:1.5rem 1.2rem 1.3rem}
  .letter-body{font-size:14.5px}
  .custom-cursor{display:none}
  .stage{cursor:auto}
  .open-btn,.act-btn,.env-svg{cursor:pointer}
  .letter-header-row{flex-direction:column}
}
</style>
</head>
<body>
<div class="stage" id="stage">
  <div class="custom-cursor" id="cursor">${S.cursorEmoji}</div>
  <div class="sky" id="sky"></div>
  <div class="confetti-layer" id="confettiLayer"></div>
  <div class="firework-layer" id="fwLayer"></div>
  <div class="floating-layer" id="floatLayer"></div>

  <div class="center-content">
    ${S.envelope==='yes' ? `
    <div class="envelope-scene" id="envScene">
      ${envSVG}
      <p class="hint-text">✦ tap to open ✦</p>
      <button class="open-btn" onclick="openLetter()">${esc(S.openBtnText)||'Open your letter'}</button>
    </div>` : ''}

    <div class="letter-wrap${S.envelope==='no'?' show':''}" id="letterWrap" ${S.envelope==='no'?'style="display:block"':''}>
      <div class="letter-card">
        ${typeAccent}
        <div class="letter-header-row">
          <div>
            <div class="letter-to-label">To</div>
            <div class="letter-to-name">${to}</div>
          </div>
          ${dateStr?`<div class="letter-date">${dateStr}</div>`:''}
        </div>
        ${emojiRow}
        ${quoteHTML}
        <div class="letter-heading">${greeting}</div>
        <p class="letter-body">${msg}</p>
        ${divHTML}
        <div class="letter-sign">
          <span class="closing">${closing}</span>
          <span class="from">${from}</span>
        </div>
        ${psHTML}
      </div>
      ${effectBtns?`<div class="action-row">${effectBtns}</div>`:''}
    </div>
  </div>
  ${watermarkHTML}
</div>
<script>
var COLORS=${COLORS};
var SPARKLES=${SPARKLES};
var CURSORS=${CURSORS_JS};
var cursorIdx=0,lastSparkleX=-999,lastSparkleY=-999;
var cursorEl=document.getElementById('cursor');
var isMobile=()=>window.matchMedia('(max-width:540px)').matches;

document.addEventListener('mousemove',function(e){
  if(isMobile())return;
  var x=e.clientX,y=e.clientY;
  cursorEl.style.left=x+'px';cursorEl.style.top=y+'px';
  ${trailCode}
});
document.addEventListener('click',function(e){
  if(isMobile())return;
  cursorIdx=(cursorIdx+1)%CURSORS.length;
  cursorEl.textContent=CURSORS[cursorIdx];
  for(var i=0;i<6;i++)spawnSparkle(e.clientX+(Math.random()*30-15),e.clientY+(Math.random()*30-15));
});
function spawnTrailDot(x,y,size){
  var d=document.createElement('div');d.className='trail-dot';
  d.style.cssText='width:'+size+'px;height:'+size+'px;left:'+x+'px;top:'+y+'px;background:'+COLORS[Math.floor(Math.random()*COLORS.length)]+';animation-duration:'+(0.4+Math.random()*0.3)+'s';
  document.body.appendChild(d);setTimeout(function(){d.remove()},900);
}
function spawnSparkle(x,y){
  var s=document.createElement('div');s.className='sparkle';
  s.textContent=SPARKLES[Math.floor(Math.random()*SPARKLES.length)];
  var angle=Math.random()*Math.PI*2,dist=18+Math.random()*22;
  s.style.cssText='left:'+x+'px;top:'+y+'px;color:'+COLORS[Math.floor(Math.random()*COLORS.length)]+';--sx:'+Math.cos(angle)*dist+'px;--sy:'+Math.sin(angle)*dist+'px';
  document.body.appendChild(s);setTimeout(function(){s.remove()},700);
}
(function initStars(){
  var sky=document.getElementById('sky');
  for(var i=0;i<${S.starCount};i++){
    var s=document.createElement('div');s.className='star';
    s.style.cssText='left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;animation-delay:'+Math.random()*5+'s;animation-duration:'+(2+Math.random()*3)+'s;background:'+COLORS[Math.floor(Math.random()*COLORS.length)];
    sky.appendChild(s);
  }
})();
function openLetter(){
  var env=document.getElementById('envScene');
  var lw=document.getElementById('letterWrap');
  if(!env)return;
  env.style.transition='opacity 0.35s,transform 0.35s';
  env.style.opacity='0';env.style.transform='scale(0.88) translateY(-10px)';
  setTimeout(function(){
    env.style.display='none';
    lw.style.display='block';
    requestAnimationFrame(function(){requestAnimationFrame(function(){
      lw.classList.add('show');
      ${S.effects.includes('confetti')?'confettiEffect();':''}
      ${S.effects.includes('balloons')?'setTimeout(balloonsEffect,200);':''}
      ${S.effects.includes('fireworks')?'setTimeout(fireworksEffect,500);':''}
      ${S.effects.includes('hearts')?'setTimeout(heartsEffect,300);':''}
      ${S.effects.includes('stars')?'setTimeout(starsEffect,100);':''}
      ${S.effects.includes('petals')?'setTimeout(petalsEffect,150);':''}
    });});
  },350);
}
function confettiEffect(){
  var layer=document.getElementById('confettiLayer');
  for(var i=0;i<70;i++){
    var cp=document.createElement('div');cp.className='cp';
    var dur=1.5+Math.random()*2.5;
    cp.style.cssText='left:'+(5+Math.random()*90)+'%;top:-10px;width:'+(5+Math.random()*7)+'px;height:'+(5+Math.random()*7)+'px;background:'+COLORS[Math.floor(Math.random()*COLORS.length)]+';border-radius:'+(Math.random()>0.4?'50%':'2px')+';animation-duration:'+dur+'s;animation-delay:'+Math.random()*0.8+'s';
    layer.appendChild(cp);setTimeout(function(c){return function(){c.remove()}}(cp),(dur+2)*1000);
  }
}
function balloonsEffect(){
  var BALL=['🎈','🎀','🎁','🌸','💝','🌷','⭐'];
  var sky=document.getElementById('sky');
  for(var i=0;i<10;i++){
    var b=document.createElement('div');b.className='balloon';
    b.textContent=BALL[Math.floor(Math.random()*BALL.length)];
    var dur=5+Math.random()*4;
    b.style.cssText='left:'+(3+Math.random()*92)+'%;--dur:'+dur+'s;--delay:'+Math.random()*1.5+'s;--tilt:'+(Math.random()*20-10)+'deg;--drift:'+(Math.random()*60-30)+'px;font-size:'+(22+Math.random()*20)+'px';
    sky.appendChild(b);setTimeout(function(bb){return function(){bb.remove()}}(b),(dur+3)*1000);
  }
}
function fireworksEffect(){
  var layer=document.getElementById('fwLayer');
  for(var burst=0;burst<9;burst++){
    var cx=10+Math.random()*80,cy=8+Math.random()*65;
    var color=COLORS[Math.floor(Math.random()*COLORS.length)];
    (function(cx,cy,color,delay){setTimeout(function(){
      for(var p=0;p<18;p++){
        var fw=document.createElement('div');fw.className='fw';
        var angle=(p/18)*Math.PI*2,dist=45+Math.random()*60;
        fw.style.cssText='left:'+cx+'%;top:'+cy+'%;background:'+color+';--fx:'+Math.cos(angle)*dist+'px;--fy:'+Math.sin(angle)*dist+'px;animation-duration:'+(0.5+Math.random()*0.4)+'s';
        layer.appendChild(fw);setTimeout(function(f){return function(){f.remove()}}(fw),1500);
      }
    },delay)})(cx,cy,color,burst*150);
  }
}
function heartsEffect(){
  var layer=document.getElementById('floatLayer');
  var em=['💗','💕','💖','💝','🩷','❤️','🌸'];
  for(var i=0;i<16;i++){
    (function(delay){setTimeout(function(){
      var h=document.createElement('div');h.className='fh';
      h.textContent=em[Math.floor(Math.random()*em.length)];
      h.style.cssText='left:'+(8+Math.random()*84)+'%;bottom:'+(5+Math.random()*30)+'%;font-size:'+(14+Math.random()*18)+'px;animation-duration:'+(2+Math.random()*2)+'s';
      layer.appendChild(h);setTimeout(function(){h.remove()},4000);
    },delay)})(i*80);
  }
}
function starsEffect(){
  var layer=document.getElementById('floatLayer');
  var em=['⭐','✨','💫','🌟','✦','✧'];
  for(var i=0;i<20;i++){
    (function(delay){setTimeout(function(){
      var h=document.createElement('div');h.className='fh';
      h.textContent=em[Math.floor(Math.random()*em.length)];
      h.style.cssText='left:'+(5+Math.random()*90)+'%;bottom:'+(5+Math.random()*30)+'%;font-size:'+(12+Math.random()*16)+'px;animation-duration:'+(1.5+Math.random()*2)+'s';
      layer.appendChild(h);setTimeout(function(){h.remove()},4000);
    },delay)})(i*60);
  }
}
function petalsEffect(){
  var layer=document.getElementById('floatLayer');
  var em=['🌸','🌺','🌷','🌹','🪷','💐'];
  for(var i=0;i<18;i++){
    (function(delay){setTimeout(function(){
      var h=document.createElement('div');h.className='fh';
      h.textContent=em[Math.floor(Math.random()*em.length)];
      h.style.cssText='left:'+(5+Math.random()*90)+'%;bottom:'+(5+Math.random()*40)+'%;font-size:'+(12+Math.random()*14)+'px;animation-duration:'+(2+Math.random()*2)+'s';
      layer.appendChild(h);setTimeout(function(){h.remove()},4500);
    },delay)})(i*70);
  }
}
${S.envelope==='no'?`
window.addEventListener('load',function(){
  ${S.effects.includes('confetti')?'confettiEffect();':''}
  ${S.effects.includes('balloons')?'setTimeout(balloonsEffect,200);':''}
  ${S.effects.includes('fireworks')?'setTimeout(fireworksEffect,600);':''}
  ${S.effects.includes('hearts')?'setTimeout(heartsEffect,300);':''}
  ${S.effects.includes('stars')?'setTimeout(starsEffect,100);':''}
  ${S.effects.includes('petals')?'setTimeout(petalsEffect,150);':''}
});`:''}
<\/script>
</body>
</html>`;
}

function buildTrailCode(style){
  if(style==='none') return '';
  let code='var sd=Math.sqrt((x-lastSparkleX)**2+(y-lastSparkleY)**2);';
  if(style==='dots'||style==='both'){
    code+=`var dx2=x-(lastX2||x),dy2=y-(lastY2||y);var dist2=Math.sqrt(dx2*dx2+dy2*dy2);if(dist2>4){var sz=Math.max(3,Math.min(10,dist2*0.5));spawnTrailDot(x,y,sz);}lastX2=x;lastY2=y;`;
  }
  if(style==='sparkle'||style==='both'){
    code+=`if(sd>28){spawnSparkle(x,y);lastSparkleX=x;lastSparkleY=y;}`;
  }
  return code;
}

// ── GENERATE ──────────────────────────────────────────────────────────────────
function startGenerate(){
  readFields();
  S.generatedHTML=generateHTML();
  const overlay=document.getElementById('loadingScreen');
  overlay.classList.add('show');
  const bar=document.getElementById('loadingBarFill');
  const msg=document.getElementById('loadingMsg');
  const steps=[[0,'Preparing the parchment...'],[20,'Mixing the ink...'],[42,'Writing your words...'],[60,'Placing decorations...'],[78,'Adding the magic effects...'],[90,'Sealing the envelope...'],[100,'Done!']];
  let i=0;
  function tick(){
    if(i>=steps.length){setTimeout(()=>{overlay.classList.remove('show');showDone();},400);return;}
    const[pct,text]=steps[i++];bar.style.width=pct+'%';msg.textContent=text;setTimeout(tick,420);
  }
  tick();
}

function showDone(){
  document.getElementById('appLayout').style.display='none';
  document.getElementById('doneScreen').classList.add('show');
  const btn=document.getElementById('downloadBtn');
  const to=S.to||'friend';
  const fname=(S.fileName?S.fileName.replace(/[^a-z0-9_\-]/gi,'_'):`letter-for-${to.replace(/\s+/g,'-').toLowerCase()}`)+'.html';
  btn.onclick=()=>downloadHTML(S.generatedHTML,fname);
}

function downloadHTML(html,filename){
  const blob=new Blob([html],{type:'text/html;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function restartApp(){
  document.getElementById('doneScreen').classList.remove('show');
  document.getElementById('appLayout').style.display='grid';
  goToStep(0);
}

// ── MOBILE TAB SWITCHING ──────────────────────────────────────────────────────
function isMobileLayout(){return window.innerWidth<=900}

function switchMobileTab(tab){
  if(!isMobileLayout()) return;
  const panel=document.getElementById('previewPanel');
  const tabEdit=document.getElementById('tabEdit');
  const tabPreview=document.getElementById('tabPreview');
  if(tab==='preview'){
    panel.classList.add('mobile-open');
    tabPreview.classList.add('active');
    tabEdit.classList.remove('active');
    scalePreviewIframe();
  } else {
    panel.classList.remove('mobile-open');
    tabEdit.classList.add('active');
    tabPreview.classList.remove('active');
  }
}

function closeMobilePreview(){
  switchMobileTab('edit');
}

init();
