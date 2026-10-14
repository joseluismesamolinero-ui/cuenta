(() => {
  'use strict';
  const KEY = 'cuentaApp_v1';
  const HIDDEN_PIN_DIGEST = '2710fe0afa87068c545c345a89c1fab8022726d626705a2ecc701656b1ee2838';
  const EMOJI_GROUPS = {
    'Populares':'✳ ⭐ ✨ 💫 🔥 ❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 💕 💞 💓 💗 💖 💘 💝 💟 💌 🌟 🌈 ☀️ 🌙 ⚡ ☁️ 🌿 🍀 🌱 🌸 🌻 🪴 🦋 🐾 🎉 🎊 🎁 🎈 🏆 🥇 💎 👑 🪄 🧿 🔮 ☕ 🍵 🥤 🍺 🍷 🍹 🍸 🍻 🥂 🍾 🚬 🚭 📱 🎧 🏠 🚗 💰 💸',
    'Caras':'😀 😃 😄 😁 😆 😅 😂 🤣 🥲 🥹 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😜 🤪 😝 🤑 🤗 🫠 🤭 🫢 🫣 🤫 🤔 🫡 🤐 🤨 😐 😑 😶 🫥 😶‍🌫️ 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 🥱 😴 😌 😛 😜 😒 😓 😔 😕 🫤 🙃 🥴 😵‍💫 😵 🤯 🤠 🥳 🥸 😎 🤓 🧐 😕 😟 🙁 ☹️ 😮 😯 😲 😳 🥺 🥹 😦 😧 😨 😰 😥 😢 😭 😱 😖 😣 😞 😓 😩 😤 😡 😠 🤬 😈 👿 💀 ☠️ 💩 🤡 👻 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾',
    'Personas':'👋 🫶 🤲 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤟 🤘 👌 🤌 🤏 🫳 🫴 👈 👉 👆 👇 ☝️ ✋ 🖐️ 🤚 🖖 👋 🤙 💪 🦾 🖕 ✍️ 🙋 🙅 🙆 💁 🙇 🤦 🤷 🙎 🙍 💆 💇 🧏 🧑‍⚕️ 👨‍⚕️ 👩‍⚕️ 🧑‍🎓 👨‍🎓 👩‍🎓 🧑‍🏫 👨‍🏫 👩‍🏫 🧑‍🍳 👨‍🍳 👩‍🍳 🧑‍🌾 👨‍🌾 👩‍🌾 🧑‍🔧 👨‍🔧 👩‍🔧 🧑‍💻 👨‍💻 👩‍💻 🧑‍🎤 👨‍🎤 👩‍🎤 🧑‍🎨 👨‍🎨 👩‍🎨 🧑‍🚀 👨‍🚀 👩‍🚀 🧑‍🚒 👨‍🚒 👩‍🚒 👶 🧒 👦 👧 🧑 👨 👩 🧔 🧓 👴 👵 🧑‍🦰 👩‍🦰 👨‍🦰 🧑‍🦱 👩‍🦱 👨‍🦱 🧑‍🦳 👩‍🦳 👨‍🦳 🧑‍🦲 👩‍🦲 👨‍🦲 🧑‍🦯 👩‍🦯 👨‍🦯 🧑‍🦼 👩‍🦼 👨‍🦼 🧑‍🦽 👩‍🦽 👨‍🦽 🧑‍🤝‍🧑 👭 👬 👫 💏 💑 👪 👨‍👩‍👧 👨‍👩‍👦 👨‍👩‍👧‍👦 👩‍👩‍👧 👨‍👨‍👦 🫂 👣 🧠 🫀 🫁 🦷 🦴 👀 👁️ 👅 👄 👂 👃 🫦',
    'Animales':'🐶 🐕 🐩 🐺 🦊 🦝 🐱 🐈 🦁 🐯 🐅 🐆 🐴 🫎 🫏 🐎 🦄 🦓 🦌 🦬 🐮 🐂 🐃 🐄 🐷 🐖 🐗 🐽 🐏 🐑 🐐 🐪 🐫 🦙 🦒 🐘 🦣 🦏 🦛 🐭 🐁 🐀 🐹 🐰 🐇 🐿️ 🦫 🦔 🦇 🐻 🐨 🐼 🦥 🦦 🦨 🦘 🦡 🐾 🦃 🐔 🐓 🐣 🐤 🐥 🐦 🐧 🕊️ 🦅 🦆 🦢 🦉 🦤 🪶 🦩 🦚 🦜 🪽 🐸 🐊 🐢 🦎 🐍 🐲 🐉 🦕 🦖 🐳 🐋 🐬 🦭 🐟 🐠 🐡 🦈 🐙 🐚 🪸 🪼 🦀 🦞 🦐 🦑 🦪 🐌 🦋 🐛 🐜 🐝 🪲 🐞 🦗 🪳 🕷️ 🕸️ 🦂 🦟 🪰 🪱 🦠',
    'Naturaleza':'🌵 🎄 🌲 🌳 🌴 🪵 🌱 🌿 ☘️ 🍀 🎍 🪴 🎋 🍃 🍂 🍁 🍄 🪨 🪹 🪺 🌾 💐 🌷 🪷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 🪐 💫 ⭐ 🌟 ✨ 🌠 ☄️ 🌤️ ☀️ 🌥️ ⛅ 🌦️ ☁️ 🌧️ ⛈️ 🌩️ 🌨️ ❄️ ☃️ ⛄ 🌬️ 💨 🌪️ 🌫️ 🌈 ☔ 💧 💦 🌊 🔥',
    'Comida':'🍏 🍎 🍐 🍊 🍋 🍋‍🟩 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🫒 🥑 🍆 🥔 🥕 🌽 🌶️ 🫑 🥒 🥬 🥦 🧄 🧅 🥜 🫘 🌰 🫚 🫛 🍄 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥛 🧋 🥤 🧃 ☕ 🫖 🍵 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾',
    'Actividades':'⚽ 🏀 🏈 ⚾ 🥎 🎾 🏐 🏉 🎱 🏓 🏸 🏒 🏑 🥍 🏏 🪃 🥅 ⛳ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛼 🛷 ⛸️ 🥌 🎿 ⛷️ 🏂 🪂 🏋️ 🤼 🤸 ⛹️ 🤺 🤾 🏌️ 🏇 🧘 🧗 🚴 🚵 🤽 🤿 🏊 🏄 🛀 🛌 🏆 🥇 🥈 🥉 🏅 🎖️ 🏵️ 🎗️ 🎫 🎟️ 🎪 🤹 🎭 🩰 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🪘 🎷 🎺 🪗 🎸 🪕 🎻 🪈 🎲 ♟️ 🎯 🎳 🎮 🕹️ 🧩 🧸 🪅 🪩',
    'Viajes':'🚗 🚕 🚙 🚌 🚎 🏎️ 🚓 🚑 🚒 🚐 🛻 🚚 🚛 🚜 🦯 🦽 🦼 🛴 🚲 🛵 🏍️ 🛺 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩️ 💺 🛰️ 🚀 🛸 🚁 🛶 ⛵ 🚤 🛥️ 🛳️ ⛴️ 🚢 ⚓ 🛟 ⛽ 🚧 🚦 🚥 🚏 🗺️ 🗿 🗽 🗼 🏰 🏯 🏟️ 🎡 🎢 🎠 ⛲ 🏖️ 🏝️ 🏜️ 🏕️ ⛺ 🏠 🏡 🏘️ 🏚️ 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏩 🏪 🏫 🏛️ ⛪ 🕌 🛕 🕍 ⛩️ 🕋 🌁 🌃 🌄 🌅 🌆 🌇 🌉 🌌',
    'Objetos':'⌚ 📱 📲 💻 🖥️ 🖨️ ⌨️ 🖱️ 🖲️ 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽️ 🎞️ 📞 ☎️ 📟 📠 🔋 🪫 🔌 💡 🔦 🕯️ 🪔 🧯 🛢️ 💸 💵 💴 💶 💷 🪙 💰 💳 🧾 💹 📔 📕 📖 📗 📘 📙 📚 📓 📒 📃 📜 📄 📰 🗞️ 📑 🔖 🏷️ 💼 📁 📂 🗂️ 📅 📆 🗒️ 🗓️ 📇 📈 📉 📊 📋 📌 📍 📎 🖇️ 📏 📐 ✂️ 🗃️ 🗄️ 🗑️ 🔒 🔓 🔏 🔐 🔑 🗝️ 🔨 🪓 ⛏️ ⚒️ 🛠️ 🗡️ ⚔️ 🔫 🪃 🛡️ 🪚 🔧 🪛 🔩 ⚙️ 🗜️ ⚖️ 🦯 🧰 🪝 🧲 🪜 🧪 🧫 🧬 🔬 🔭 📡 💉 🩸 💊 🩹 🩺 🩻 🩼 🚪 🛏️ 🛋️ 🪑 🚿 🛁 🪞 🪟 🧹 🧺 🧻 🪠 🧽 🧴 🛎️ 🔑 🧷 🧸 🧵 🪡 🧶 🪢',
    'Símbolos':'❤️ 🧡 💛 💚 💙 💜 🤎 🖤 🤍 🩷 🩵 🩶 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ♥️ ♠️ ♦️ ♣️ 🃏 🀄 🎴 ☮️ ✝️ ☪️ 🕉️ ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕ 🛑 ⛔ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 🔱 ⚜️ 〽️ ⚠️ 🚸 🔰 ♻️ ✅ 🈯 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿ 🅿️ 🛗 🛂 🛃 🛄 🛅 🚹 🚺 🚻 🚼 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🔢 🔣 🆕 🆙 🆒 🆓 🆖 🆗 🆕 🆙 🔝 🔛 🔜 🔚 🔃 🔄 🔙 🔚 🔛 🔜 ➕ ➖ ➗ ✖️ 🟰 ♾️ 💲 💱 ™️ ©️ ®️ 🔴 🟠 🟡 🟢 🔵 🟣 ⚫ ⚪ 🟤 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 💬 💭 🗯️ ♠️ ♣️ ♥️ ♦️ 🔀 🔁 🔂 ▶️ ⏩ ⏭️ ⏯️ ◀️ ⏪ ⏮️ 🔼 ⏫ 🔽 ⏬ ⏸️ ⏹️ ⏺️ ⏏️ 🎵 🎶 🔊 🔉 🔈 🔇 🔔 🔕',
    'Banderas':'🏁 🚩 🎌 🏴 🏳️ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ 🇪🇸 🇲🇽 🇦🇷 🇨🇴 🇨🇱 🇵🇪 🇻🇪 🇺🇸 🇨🇦 🇬🇧 🇮🇪 🇫🇷 🇩🇪 🇮🇹 🇵🇹 🇧🇷 🇯🇵 🇰🇷 🇨🇳 🇮🇳 🇦🇺 🇳🇿 🇨🇭 🇳🇱 🇧🇪 🇸🇪 🇳🇴 🇩🇰 🇫🇮 🇵🇱 🇺🇦 🇷🇺 🇬🇷 🇹🇷 🇲🇦 🇪🇬 🇿🇦 🇳🇬 🇹🇭 🇻🇳 🇮🇩 🇵🇭 🇸🇦 🇦🇪 🇮🇱 🇨🇺 🇵🇷 🇺🇾 🇪🇨 🇧🇴 🇨🇷 🇵🇦 🇩🇴 🇬🇹 🇭🇳 🇸🇻 🇳🇮 🇵🇾 🇮🇸 🇦🇹 🇨🇿 🇷🇴 🇭🇺 🇭🇷 🇷🇸 🇸🇰 🇸🇮 🇧🇬 🇱🇺 🇲🇨 🇦🇩 🇲🇹 🇨🇾 🇹🇼 🇭🇰 🇸🇬 🇲🇾 🇵🇰 🇧🇩 🇱🇰 🇳🇵 🇰🇪 🇬🇭 🇪🇹 🇹🇳 🇶🇦 🇯🇴 🇱🇧 🇮🇷 🇮🇶 🇵🇸 🇺🇳 🏴'
  };
  const tones=['🏻','🏼','🏽','🏾','🏿'];
  const tonedBases=['👋','🤚','🖐️','✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🙏','💪','🦵','🦶','👂','👃','🧑','👨','👩','🧒','👦','👧','👶','🧓','👴','👵','🙋','🙆','🙅','💁','🙇','🤦','🤷','🧏','💆','💇','🚶','🏃','🧎','🧍','🧘','🛀','🏋️','🤸','🤼','⛹️','🏌️','🏄','🏊','🚴','🚵','🧗','🤽','🤾','🧑‍⚕️','🧑‍🎓','🧑‍🏫','🧑‍🍳','🧑‍🌾','🧑‍🔧','🧑‍💻','🧑‍🎤','🧑‍🎨','🧑‍🚀','🧑‍🚒','🕵️','👮','👷','💂','🥷','🤴','👸','🤵','👰','🎅','🤶','🧙','🧝','🧛','🧟','🧞','🧜','🧚','🦸','🦹'];
  EMOJI_GROUPS['Personas'] += ' ' + tonedBases.flatMap(base=>tones.map(tone=>base+tone)).join(' ');
  const CATEGORIES = ['Todos',...Object.keys(EMOJI_GROUPS)];
  let emojiCategory='Todos', emojiLimit=120;
  const $ = id => document.getElementById(id);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`);
  const blank = () => ({fields:[],events:[]});
  let state = load();
  let period = 'all', editingId = null, selectedEmoji = '✳', selectedImage = null, manageId = null, manageEventId = null, toastTimer = null, revealHidden = false;
  function load(){ try { const s=JSON.parse(localStorage.getItem(KEY)); if(s&&Array.isArray(s.fields)&&Array.isArray(s.events)){s.hiddenFolders=Array.isArray(s.hiddenFolders)?s.hiddenFolders:[];return s;} } catch {} return blank(); }
  function persist(){ try { localStorage.setItem(KEY,JSON.stringify(state)); } catch { showToast('No hay espacio suficiente para guardar la imagen. Prueba con otra más pequeña.'); } }
  async function matchesHiddenPin(pin){const bytes=new TextEncoder().encode(`cuenta-hidden-folders-v1:${pin}`),hash=new Uint8Array(await crypto.subtle.digest('SHA-256',bytes));return Array.from(hash,b=>b.toString(16).padStart(2,'0')).join('')===HIDDEN_PIN_DIGEST;}
  function startOfDay(d){return new Date(d.getFullYear(),d.getMonth(),d.getDate());}
  function weekStart(d){const x=startOfDay(d);x.setDate(x.getDate()-((x.getDay()+6)%7));return x;}
  function periodStart(key){const d=new Date();if(key==='today')return startOfDay(d);if(key==='week')return weekStart(d);if(key==='month')return new Date(d.getFullYear(),d.getMonth(),1);return null;}
  function inPeriod(ts,key){const since=periodStart(key);return !since||new Date(ts)>=since;}
  function eventsFor(id='all'){
    if(id==='all')return state.events;
    if(id.startsWith('folder:')){const folder=id.slice(7),ids=new Set(state.fields.filter(f=>(f.folder?.trim()||'Sin carpeta')===folder).map(f=>f.id));return state.events.filter(e=>ids.has(e.fieldId));}
    return state.events.filter(e=>e.fieldId===id);
  }
  function countFor(id,key='all'){return eventsFor(id).filter(e=>inPeriod(e.at,key)).length;}
  function dateText(ts){const d=new Date(ts),now=new Date();if(d.toDateString()===now.toDateString())return `Hoy · ${d.toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'})}`;return d.toLocaleDateString('es-ES',{day:'numeric',month:'short'})+' · '+d.toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'});}
  function fullDateText(ts){return new Date(ts).toLocaleString('es-ES',{weekday:'short',day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});}
  function toLocalInput(ts){const d=new Date(ts),local=new Date(d.getTime()-d.getTimezoneOffset()*60000);return local.toISOString().slice(0,16);}
  function render(){renderHome();refreshFieldOptions();drawChart();renderHistory();}
  function renderHome(){
    const visibleFields=state.fields.filter(f=>revealHidden||!(state.hiddenFolders||[]).includes(f.folder?.trim()||'Sin carpeta'));
    const ranked=visibleFields.map(f=>({field:f,count:countFor(f.id,period)})).sort((a,b)=>b.count-a.count);
    const leader=ranked[0]?.count?ranked[0]:null;
    $('summaryTotal').textContent=leader?.count||0;$('summaryCaption').textContent=leader?leader.field.name:'Aún sin registros';
    document.querySelectorAll('.period-tab').forEach(b=>b.classList.toggle('selected',b.dataset.period===period));
    const grouped=new Map();for(const f of state.fields){const folder=f.folder?.trim()||'Sin carpeta';if(!grouped.has(folder))grouped.set(folder,[]);grouped.get(folder).push(f);}
    $('fieldCount').textContent=`${state.fields.length} ${state.fields.length===1?'campo':'campos'}`;
    $('emptyState').hidden=state.fields.length>0;
    const area=$('fieldsArea'),hiddenArea=$('hiddenShelfArea');area.innerHTML='';hiddenArea.innerHTML='';
    const hidden=state.hiddenFolders||[];
    if(revealHidden&&hidden.length){
      const reveal=document.createElement('section');reveal.className='hidden-shelf';
      reveal.innerHTML='<div class="hidden-shelf-head"><div><span class="eyebrow">SOLO PARA TI</span><h3>Carpetas ocultas</h3></div><button class="secondary-button hide-shelf-button" type="button">Volver a ocultar</button></div><div class="hidden-groups"></div>';
      reveal.querySelector('.hide-shelf-button').addEventListener('click',()=>{revealHidden=false;renderHome();refreshFieldOptions();drawChart();});
      const hiddenGroups=reveal.querySelector('.hidden-groups');
      for(const folder of hidden){const fields=grouped.get(folder);if(fields)appendFolderBlock(hiddenGroups,folder,fields,true);}
      hiddenArea.append(reveal);
    }
    for(const [folder,fields] of grouped){
      if(hidden.includes(folder))continue;
      appendFolderBlock(area,folder,fields,false);
    }
  }
  function appendFolderBlock(container,folder,fields,isHidden){
      const block=document.createElement('section');block.className='folder-block';
      block.innerHTML=`<div class="folder-heading"><span class="folder-emoji">${folder==='Sin carpeta'?'◫':'▱'}</span><span class="folder-title">${escapeHTML(folder)} <span style="font-weight:400;color:#a0a49b">· ${fields.length}</span></span>${folder!=='Sin carpeta'?`<button class="folder-hide-button" type="button">${isHidden?'Mostrar en inicio':'Ocultar'}</button>`:''}</div><div class="counter-grid"></div>`;
      const folderButton=block.querySelector('.folder-hide-button');
      if(folderButton)folderButton.addEventListener('click',()=>{if(isHidden){state.hiddenFolders=state.hiddenFolders.filter(x=>x!==folder);}else{state.hiddenFolders=[...new Set([...(state.hiddenFolders||[]),folder])];}persist();renderHome();refreshFieldOptions();drawChart();});
      const grid=block.querySelector('.counter-grid');
      for(const f of fields){const card=document.createElement('article');card.className='counter-card';card.tabIndex=0;card.setAttribute('aria-label',`Añadir uno a ${f.name}`);
        const icon=f.image?`<img src="${f.image}" alt="">`:escapeHTML(f.emoji||'✳');
        const n=countFor(f.id),last=eventsFor(f.id).sort((a,b)=>new Date(b.at)-new Date(a.at))[0];
        card.innerHTML=`<div class="counter-actions"><button class="tiny-action undo-action" title="Deshacer último registro" aria-label="Deshacer último registro de ${escapeHTML(f.name)}">↶</button><button class="tiny-action edit-action" title="Editar campo" aria-label="Editar ${escapeHTML(f.name)}">···</button></div><div class="counter-icon">${icon}</div><div class="counter-name">${escapeHTML(f.name)}</div><div class="counter-total"><strong>${n}</strong><span>${n===1?'vez':'veces'}</span></div><div class="counter-last">${last?`Último · ${dateText(last.at)}`:'Toca para empezar'}</div><span class="counter-add" aria-hidden="true">＋</span>`;
        card.addEventListener('click',e=>{if(e.target.closest('.edit-action')){e.stopPropagation();openManage(f.id);return;}if(e.target.closest('.undo-action')){e.stopPropagation();undo(f.id);return;}increment(f.id);});
        card.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target===card){e.preventDefault();increment(f.id);}});grid.append(card);
      }
      if(!isHidden){const add=document.createElement('button');add.className='small-add-card';add.innerHTML='<b>＋</b><span>Añadir campo</span>';add.addEventListener('click',()=>openForm(null,folder));grid.append(add);}
      container.append(block);
  }
  function increment(id){state.events.push({id:uid(),fieldId:id,at:new Date().toISOString()});persist();render();}
  function undo(id){const i=state.events.map(e=>e.fieldId).lastIndexOf(id);if(i<0){showToast('Todavía no hay registros que deshacer.');return;}state.events.splice(i,1);persist();render();showToast('Último registro deshecho.');}
  function renderHistory(){
    const hidden=state.hiddenFolders||[],visibleIds=new Set(state.fields.filter(f=>revealHidden||!hidden.includes(f.folder?.trim()||'Sin carpeta')).map(f=>f.id));
    const items=state.events.filter(e=>visibleIds.has(e.fieldId)).sort((a,b)=>new Date(b.at)-new Date(a.at));
    $('historyCount').textContent=`${items.length} ${items.length===1?'registro':'registros'}`;
    const box=$('eventHistory');box.innerHTML='';
    if(!items.length){box.innerHTML='<div class="history-empty">Todavía no hay registros para revisar.</div>';return;}
    for(const event of items){const field=state.fields.find(f=>f.id===event.fieldId);if(!field)continue;const row=document.createElement('article');row.className='event-row';row.innerHTML=`<div class="event-row-main"><span class="event-row-icon">${field.image?`<img src="${field.image}" alt="">`:escapeHTML(field.emoji||'✳')}</span><div class="event-row-info"><strong>${escapeHTML(field.name)}</strong><span>${escapeHTML(field.folder||'Sin carpeta')}</span><time>${escapeHTML(fullDateText(event.at))}</time></div></div><div class="event-row-actions"><button class="secondary-button edit-event-button" data-event-id="${escapeHTML(event.id)}" type="button">Editar</button><button class="secondary-button danger-button delete-event-button" data-event-id="${escapeHTML(event.id)}" type="button" aria-label="Eliminar toque de ${escapeHTML(field.name)}">×</button></div>`;box.append(row);}
    box.querySelectorAll('.edit-event-button').forEach(button=>button.addEventListener('click',()=>openEventEditor(button.dataset.eventId)));
    box.querySelectorAll('.delete-event-button').forEach(button=>button.addEventListener('click',()=>deleteEvent(button.dataset.eventId)));
  }
  function openEventEditor(id){const event=state.events.find(item=>item.id===id);if(!event)return;manageEventId=id;const field=state.fields.find(item=>item.id===event.fieldId);$('eventDialogTitle').textContent=field?.name||'Editar toque';$('eventEditDateTime').max=toLocalInput(new Date());$('eventEditDateTime').value=toLocalInput(event.at);$('eventDialog').showModal();}
  function deleteEvent(id){const event=state.events.find(item=>item.id===id);if(!event)return;if(!confirm('¿Eliminar este toque? Esta acción no se puede deshacer.'))return;state.events=state.events.filter(item=>item.id!==id);persist();$('eventDialog').close();render();showToast('Toque eliminado.');}
  function refreshFieldOptions(){const select=$('chartField'),previous=select.value,visibleFields=state.fields.filter(f=>revealHidden||!(state.hiddenFolders||[]).includes(f.folder?.trim()||'Sin carpeta')),folders=[...new Set(visibleFields.map(f=>f.folder?.trim()).filter(Boolean))];select.innerHTML='<option value="all">Todos los campos</option>'+folders.map(folder=>`<option value="folder:${escapeHTML(folder)}">Carpeta · ${escapeHTML(folder)}</option>`).join('')+visibleFields.map(f=>`<option value="${escapeHTML(f.id)}">${escapeHTML(f.folder?f.folder+' · ':'')}${escapeHTML(f.name)}</option>`).join('');if([...select.options].some(o=>o.value===previous))select.value=previous;else select.value='all';
    $('folderOptions').innerHTML=[...new Set(visibleFields.map(f=>f.folder).filter(Boolean))].map(f=>`<option value="${escapeHTML(f)}"></option>`).join('');const forgot=$('forgotField'),old=forgot.value;forgot.innerHTML=visibleFields.map(f=>`<option value="${escapeHTML(f.id)}">${escapeHTML(f.folder?f.folder+' · ':'')}${escapeHTML(f.name)}</option>`).join('');if([...forgot.options].some(o=>o.value===old))forgot.value=old;$('forgotForm').querySelector('[type=submit]').disabled=!visibleFields.length;$('forgotDateTime').max=toLocalInput(new Date());if(!$('forgotDateTime').value)$('forgotDateTime').value=toLocalInput(new Date());}
  function openForm(id=null,folder=''){editingId=id;selectedImage=null;emojiCategory='Todos';emojiLimit=120;$('emojiSearch').value='';const f=state.fields.find(x=>x.id===id);selectedEmoji=f?.emoji||'✳';
    $('formTitle').textContent=f?'Editar campo':'Añadir un campo';$('formKicker').textContent=f?'AJUSTA TU CONTADOR':'PERSONALIZA TU CONTADOR';$('fieldName').value=f?.name||'';$('fieldFolder').value=f?.folder||folder;$('fieldEmoji').value=f?.emoji||'';$('fieldImage').value='';$('uploadName').textContent=f?.image?'Imagen actual guardada · puedes elegir otra':'Opcional · se guarda en este dispositivo';
    $('fieldForm').querySelector('[type=submit]').textContent=f?'Guardar cambios':'Guardar campo';drawEmojiPicker();$('fieldDialog').showModal();setTimeout(()=>$('fieldName').focus(),60);}
  function drawEmojiPicker(){
    const catBox=$('emojiCategories'),box=$('emojiPicker'),q=$('emojiSearch').value.trim().toLocaleLowerCase('es');
    catBox.innerHTML=CATEGORIES.map(c=>`<button type="button" class="category-chip ${emojiCategory===c?'active':''}">${escapeHTML(c)}</button>`).join('');
    catBox.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{emojiCategory=b.textContent;emojiLimit=120;drawEmojiPicker();}));
    let groups=emojiCategory==='Todos'?Object.entries(EMOJI_GROUPS):[[emojiCategory,EMOJI_GROUPS[emojiCategory]||'']];
    const searchGroups={cigarro:'Populares',cigarrillo:'Populares',porro:'Naturaleza',cannabis:'Naturaleza',comida:'Comida',pizza:'Comida',hamburguesa:'Comida',bebida:'Comida',fruta:'Comida',perro:'Animales',gato:'Animales',mascota:'Animales',caballo:'Animales',pájaro:'Animales',pez:'Animales',flor:'Naturaleza',planta:'Naturaleza',árbol:'Naturaleza',deporte:'Actividades',música:'Actividades',viaje:'Viajes',coche:'Viajes',avión:'Viajes',bandera:'Banderas',país:'Banderas',amor:'Símbolos',corazón:'Símbolos',cara:'Caras',emoción:'Caras',persona:'Personas',mano:'Personas',piel:'Personas',casa:'Viajes',trabajo:'Objetos',dinero:'Objetos'};
    if(q){const target=searchGroups[q];groups=groups.filter(([name])=>name.toLocaleLowerCase('es').includes(q)||name===target||q==='emoji'||q==='emojis');}
    let emojis=[...new Set(groups.flatMap(([,items])=>items.split(/\s+/).filter(Boolean)))];
    if(q&&!groups.length)emojis=Array.from(q).filter(ch=>/\p{Extended_Pictographic}/u.test(ch));
    const visible=emojis.slice(0,emojiLimit);
    box.innerHTML=visible.map(e=>`<button type="button" class="emoji-choice ${selectedEmoji===e?'active':''}" aria-label="Icono ${e}">${e}</button>`).join('')||'<span class="emoji-no-results">No hay coincidencias. Puedes escribir cualquier emoji en el campo inferior.</span>';
    box.querySelectorAll('.emoji-choice').forEach(b=>b.addEventListener('click',()=>{selectedEmoji=b.textContent;$('fieldEmoji').value='';drawEmojiPicker();}));
    if(emojis.length>visible.length){const more=document.createElement('button');more.type='button';more.className='emoji-more';more.textContent=`Ver más (${emojis.length-visible.length})`;more.addEventListener('click',()=>{emojiLimit+=120;drawEmojiPicker();});box.append(more);}
  }
  function openManage(id){const f=state.fields.find(x=>x.id===id);if(!f)return;manageId=id;$('confirmTitle').textContent=f.name;$('confirmCopy').textContent=`${countFor(id)} ${countFor(id)===1?'registro guardado':'registros guardados'} en este campo.`;$('confirmDialog').showModal();}
  function closeManage(){ $('confirmDialog').close(); }
  function showToast(message){const d=$('toastDialog');$('toastMessage').textContent=message;if(!d.open)d.show();clearTimeout(toastTimer);toastTimer=setTimeout(()=>{if(d.open)d.close();},2100);}
  $('addFieldBtn').addEventListener('click',()=>openForm());$('emptyAddBtn').addEventListener('click',()=>openForm());
  $('fieldEmoji').addEventListener('input',()=>{if($('fieldEmoji').value.trim())selectedEmoji=$('fieldEmoji').value.trim();});
  $('emojiSearch').addEventListener('input',()=>{emojiLimit=120;drawEmojiPicker();});
  $('fieldImage').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;if(!file.type.startsWith('image/')){showToast('Elige un archivo de imagen.');return;}try{selectedImage=await resizeImage(file);$('uploadName').textContent=file.name;}catch{showToast('No se ha podido abrir esa imagen.');}});
  function resizeImage(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=reject;reader.onload=()=>{const img=new Image();img.onerror=reject;img.onload=()=>{const scale=Math.min(1,360/Math.max(img.width,img.height)),canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(img.width*scale));canvas.height=Math.max(1,Math.round(img.height*scale));canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL('image/jpeg',.78));};img.src=reader.result;};reader.readAsDataURL(file);});}
  $('fieldForm').addEventListener('submit',e=>{e.preventDefault();const name=$('fieldName').value.trim(),folder=$('fieldFolder').value.trim(),custom=$('fieldEmoji').value.trim();if(!name)return;const f=state.fields.find(x=>x.id===editingId);if(f){f.name=name;f.folder=folder;f.emoji=custom||selectedEmoji;f.image=selectedImage||f.image||null;}else state.fields.push({id:uid(),name,folder,emoji:custom||selectedEmoji,image:selectedImage||null,createdAt:new Date().toISOString()});persist();$('fieldDialog').close();render();showToast(f?'Campo actualizado.':'Campo creado.');});
  document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
  $('editFieldAction').addEventListener('click',()=>{const id=manageId;closeManage();openForm(id);});
  $('deleteFieldAction').addEventListener('click',()=>{const f=state.fields.find(x=>x.id===manageId);if(!f)return;if(!confirm(`¿Eliminar «${f.name}» y todos sus registros? Esta acción no se puede deshacer.`))return;state.fields=state.fields.filter(x=>x.id!==manageId);state.events=state.events.filter(x=>x.fieldId!==manageId);persist();closeManage();render();showToast('Campo eliminado.');});
  document.querySelectorAll('.period-tab').forEach(b=>b.addEventListener('click',()=>{period=b.dataset.period;renderHome();}));
  function showPage(pageId){document.querySelectorAll('.nav-item[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===pageId));document.querySelectorAll('.page').forEach(page=>page.classList.toggle('active',page.id===pageId));if(pageId==='statsPage')drawChart();if(pageId==='forgotPage')renderHistory();window.scrollTo({top:0,behavior:'smooth'});}
  document.querySelectorAll('.nav-item[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
  $('hiddenAccessBtn').addEventListener('click',()=>{if(revealHidden){revealHidden=false;renderHome();refreshFieldOptions();drawChart();renderHistory();return;}$('pinError').textContent='';$('pinInput').value='';$('pinDialog').showModal();setTimeout(()=>$('pinInput').focus(),60);});
  $('pinForm').addEventListener('submit',async e=>{e.preventDefault();if(!await matchesHiddenPin($('pinInput').value)){$('pinError').textContent='Contraseña incorrecta.';$('pinInput').value='';$('pinInput').focus();return;}revealHidden=true;$('pinDialog').close();renderHome();refreshFieldOptions();drawChart();renderHistory();showPage('homePage');});
  $('forgotForm').addEventListener('submit',e=>{e.preventDefault();const fieldId=$('forgotField').value,at=new Date($('forgotDateTime').value);if(!fieldId||Number.isNaN(at.getTime()))return;state.events.push({id:uid(),fieldId,at:at.toISOString()});persist();$('forgotDateTime').value=toLocalInput(new Date());render();showToast('Toque añadido.');});
  $('eventForm').addEventListener('submit',e=>{e.preventDefault();const event=state.events.find(item=>item.id===manageEventId),date=new Date($('eventEditDateTime').value);if(!event||Number.isNaN(date.getTime()))return;event.at=date.toISOString();persist();$('eventDialog').close();render();showToast('Fecha y hora actualizadas.');});
  $('deleteEventBtn').addEventListener('click',()=>deleteEvent(manageEventId));
  $('chartField').addEventListener('change',drawChart);$('chartGrouping').addEventListener('change',drawChart);window.addEventListener('resize',()=>{if($('statsPage').classList.contains('active'))drawChart();});
  function chartBuckets(group,scope='all'){const now=new Date(),out=[];if(group==='hour'){for(let h=0;h<24;h++)out.push({key:`h${h}`,label:`${String(h).padStart(2,'0')}`,start:new Date(now.getFullYear(),now.getMonth(),now.getDate(),h),end:new Date(now.getFullYear(),now.getMonth(),now.getDate(),h+1)});}else if(group==='day'){for(let k=13;k>=0;k--){const d=startOfDay(now);d.setDate(d.getDate()-k);const e=new Date(d);e.setDate(e.getDate()+1);out.push({key:d.toISOString().slice(0,10),label:d.toLocaleDateString('es-ES',{weekday:'short',day:'numeric'}),start:d,end:e});}}else if(group==='week'){for(let k=11;k>=0;k--){const d=weekStart(now);d.setDate(d.getDate()-7*k);const e=new Date(d);e.setDate(e.getDate()+7);out.push({key:`w${d.toISOString().slice(0,10)}`,label:d.toLocaleDateString('es-ES',{day:'numeric',month:'short'}),start:d,end:e});}}else if(group==='month'){for(let k=11;k>=0;k--){const d=new Date(now.getFullYear(),now.getMonth()-k,1),e=new Date(d.getFullYear(),d.getMonth()+1,1);out.push({key:`m${d.getFullYear()}-${d.getMonth()}`,label:d.toLocaleDateString('es-ES',{month:'short'}),start:d,end:e});}}else if(group==='year'){for(let k=4;k>=0;k--){const y=now.getFullYear()-k;out.push({key:`y${y}`,label:String(y),start:new Date(y,0,1),end:new Date(y+1,0,1)});}}else{let fields=state.fields;if(scope.startsWith('folder:'))fields=fields.filter(f=>(f.folder?.trim()||'Sin carpeta')===scope.slice(7));else if(scope!=='all')fields=fields.filter(f=>f.id===scope);for(const f of fields)out.push({key:f.id,label:f.name,start:null,end:null});}return out;}
  function updateMonthlyLeader(){const since=new Date(new Date().getFullYear(),new Date().getMonth(),1),visible=state.fields.filter(f=>revealHidden||!(state.hiddenFolders||[]).includes(f.folder?.trim()||'Sin carpeta')),ranked=visible.map(f=>({field:f,count:state.events.filter(e=>e.fieldId===f.id&&new Date(e.at)>=since).length})).sort((a,b)=>b.count-a.count),leader=ranked[0]?.count?ranked[0]:null;$('insightText').textContent=leader?`El más frecuentado es ${leader.field.name}, con ${leader.count} ${leader.count===1?'toque':'toques'}.`:'Este mes todavía no hay registros.';}
  function drawChart(){if(!$('activityChart'))return;const fieldId=$('chartField').value,group=$('chartGrouping').value,events=eventsFor(fieldId),buckets=chartBuckets(group,fieldId),vals=buckets.map(b=>group==='all'?events.filter(e=>e.fieldId===b.key).length:events.filter(e=>{const d=new Date(e.at);return d>=b.start&&d<b.end;}).length),sum=events.length;const canvas=$('activityChart'),ctx=canvas.getContext('2d'),rect=canvas.getBoundingClientRect(),ratio=window.devicePixelRatio||1;canvas.width=Math.max(1,Math.round(rect.width*ratio));canvas.height=Math.max(1,Math.round(rect.height*ratio));ctx.scale(ratio,ratio);ctx.clearRect(0,0,rect.width,rect.height);$('chartTotal').textContent=sum;$('chartEmpty').style.display=sum?'none':'grid';const names={hour:'Registros por hora',day:'Registros por día',week:'Registros por semana',month:'Registros por mes',year:'Registros por año',all:'Resumen general'};$('chartTitle').textContent=names[group];$('chartLegend').textContent=fieldId==='all'?'Todos los campos':fieldId.startsWith('folder:')?`Carpeta · ${fieldId.slice(7)}`:state.fields.find(f=>f.id===fieldId)?.name||'Registros';$('chartRange').textContent=group==='hour'?'Hoy':group==='day'?'Últimos 14 días':group==='week'?'Últimas 12 semanas':group==='month'?'Últimos 12 meses':group==='year'?'Últimos 5 años':'Acumulado';updateMonthlyLeader();
    if(!sum)return;
    const max=Math.max(...vals,1),left=31,right=rect.width-10,top=14,bottom=rect.height-31,w=right-left,h=bottom-top,n=vals.length,step=w/Math.max(n,1),barW=Math.min(group==='hour'?9:26,step*.56);ctx.font='10px system-ui';ctx.textAlign='right';ctx.textBaseline='middle';ctx.fillStyle='#a2a79e';const ticks=4;for(let i=0;i<=ticks;i++){const y=top+h*i/ticks,value=Math.round(max*(1-i/ticks));ctx.strokeStyle='#eff1ec';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(left,y);ctx.lineTo(right,y);ctx.stroke();ctx.fillText(value,left-7,y);}
    const points=[];vals.forEach((v,i)=>{const x=left+step*i+step/2,y=bottom-(v/max)*h;points.push({x,y});});ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.strokeStyle='#648a6f';ctx.lineWidth=2.2;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke();points.forEach((p,i)=>{if(vals[i]){ctx.beginPath();ctx.arc(p.x,p.y,3.3,0,Math.PI*2);ctx.fillStyle='#648a6f';ctx.fill();ctx.beginPath();ctx.arc(p.x,p.y,1.3,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();}else if(group!=='all'){ctx.beginPath();ctx.arc(p.x,bottom-1,1.6,0,Math.PI*2);ctx.fillStyle='#bdc9bd';ctx.fill();}});
    ctx.textAlign='center';ctx.textBaseline='top';ctx.fillStyle='#92988f';const stride=Math.max(1,Math.ceil(n/(group==='hour'?8:7)));buckets.forEach((b,i)=>{if(i%stride===0||i===n-1){let label=b.label;if(group==='all'&&label.length>8)label=label.slice(0,7)+'…';ctx.fillText(label,left+step*i+step/2,bottom+9);}});
  }
  $('exportBtn').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({format:'cuenta-backup-v1',exportedAt:new Date().toISOString(),...state},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`cuenta-copia-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(url);showToast('Copia de seguridad descargada.');});
  $('importBtn').addEventListener('click',()=>$('importFile').click());$('importFile').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;try{const data=JSON.parse(await file.text());if(!Array.isArray(data.fields)||!Array.isArray(data.events))throw new Error();if(!confirm(`La copia contiene ${data.fields.length} campos y ${data.events.length} registros. Se añadirán a lo que ya tienes, sin borrar tus datos actuales. ¿Continuar?`))return;const fields=new Map(state.fields.map(f=>[f.id,f]));for(const f of data.fields)fields.set(f.id,f);const events=new Map(state.events.map(e=>[e.id,e]));for(const e of data.events)events.set(e.id,e);state={fields:[...fields.values()],events:[...events.values()]};persist();render();showToast('Copia añadida a tus datos.');}catch{showToast('El archivo no parece una copia válida de Cuenta.');}finally{e.target.value='';}});
  $('dateLabel').textContent=new Date().toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long'}).toUpperCase();
  if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
  render();
})();
