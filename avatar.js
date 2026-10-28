/* Avatar Roi v2 — asistente flotante en formato conversación. Extensión (chrome.storage) o web/bookmarklet (localStorage). */
(() => {
  if (window.__roi) return; window.__roi = 1;
  const cs = document.currentScript;
  const API = ''; // URL por defecto que recibe cada valoración por POST (opcional)
  const DEFAULT_IMG = 'data:image/jpeg;base64,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';
  const CTX = window.ROI_CONTEXT || null; // {name, type: 'place'|'web'|'org'} → lo usan los enlaces/QR
  let IMG = (cs && cs.dataset.avatar) || DEFAULT_IMG;
  const isExt = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local;
  const store = {
    get: async k => isExt ? (await chrome.storage.local.get(k))[k] : JSON.parse(localStorage.getItem(k) || 'null'),
    set: async (k, v) => isExt ? chrome.storage.local.set({ [k]: v }) : localStorage.setItem(k, JSON.stringify(v))
  };
  const COL = ['#e8605a', '#f0913a', '#f2d05c', '#8cc35e', '#5fb760'];
  const MOU = ['M33 68Q50 56 67 68', 'M33 66Q50 58 67 66', 'M34 64H66', 'M32 60Q50 76 68 60', 'M30 58Q50 82 70 58'];
  const NAMES = ['Muy mal', 'Mal', 'Neutral', 'Bien', 'Muy bien'];
  const TAGS = [['Frustrado', 'Enfadado', 'Decepcionado'], ['Incómodo', 'Confuso', 'Inseguro'], ['Indiferente', 'Tranquilo', 'Con dudas'], ['Cómodo', 'Tranquilo', 'Agradecido'], ['Inspirado', 'Motivado', 'Entusiasmado']];
  const face = i => `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="${COL[i]}"/><circle cx="36" cy="40" r="5" fill="#3a2a1a"/><circle cx="64" cy="40" r="5" fill="#3a2a1a"/>${i === 0 ? '<path d="M26 28L44 34M74 28L56 34" stroke="#3a2a1a" stroke-width="5" stroke-linecap="round"/>' : ''}<path d="${MOU[i]}" stroke="#3a2a1a" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`;

  const css = `
  :host{all:initial}*{box-sizing:border-box}
  .w{position:fixed;right:20px;bottom:20px;font:14px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;color:#26331f;z-index:2147483647}
  button{font:inherit;color:inherit;cursor:pointer;border:0;background:none}
  button:focus-visible,textarea:focus-visible,input:focus-visible{outline:3px solid #3f5a3a;outline-offset:2px}
  .fabw{position:relative;width:78px;margin-left:auto}
  .fab{display:block;width:78px;height:78px;border-radius:50%;background:#e9efdc;border:4px solid #fff;box-shadow:0 10px 28px #3f5a3a66;padding:0;overflow:hidden;touch-action:none;animation:bob 4s ease-in-out infinite;transition:border-color .3s}
  .fab:active{cursor:grabbing}.av{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}
  .badge{display:none;position:absolute;right:-6px;bottom:-4px;width:30px;height:30px;border-radius:50%;background:#fff;padding:2px;box-shadow:0 3px 8px #0003}.badge svg{display:block;width:100%;height:100%}
  @keyframes bob{50%{transform:translateY(-4px)}}
  @keyframes pop{from{opacity:0;transform:translateY(8px) scale(.97)}}
  @keyframes cheer{30%{transform:translateY(-14px) rotate(-6deg)}60%{transform:translateY(0) rotate(5deg)}}
  .cheer .fab{animation:cheer .7s}
  .panel,.hi{display:none;position:absolute;right:0;bottom:94px;background:#fbf7ec;border-radius:20px;box-shadow:0 18px 50px #26331f40}
  .panel{width:320px;max-width:calc(100vw - 32px);animation:pop .22s;overflow:hidden}.open .panel{display:block}
  .hi{width:230px;padding:14px 34px 14px 16px;font-size:15px;animation:pop .3s}.showhi:not(.open) .hi{display:block}
  .x{position:absolute;top:8px;right:10px;font-size:20px;color:#7a866f;line-height:1;padding:4px}
  .hd{display:flex;gap:10px;align-items:center;padding:10px 14px;background:#e9efdc;font-weight:700}.hd .av{width:32px;height:32px;border-radius:50%;flex:none}.hd .x{top:10px}
  .chat{max-height:min(320px,55vh);overflow-y:auto;padding:8px 12px 12px;scroll-behavior:smooth}
  .b{max-width:90%;padding:8px 12px;border-radius:16px 16px 16px 4px;margin:6px 0;background:#fff;font-size:13.5px;animation:pop .2s;word-break:break-word}
  .b.me{margin-left:auto;background:#3f5a3a;color:#fff;border-radius:16px 16px 4px 16px}
  .blk{margin:4px 0 10px;animation:pop .2s}.lock{pointer-events:none;opacity:.5}
  .faces{display:flex;justify-content:space-between}.faces button{width:40px;height:40px;padding:0;border-radius:50%;transition:transform .15s}.faces button:hover,.faces .on{transform:scale(1.2)}
  .chips{display:flex;flex-wrap:wrap;gap:6px}.chips button,.opts button{border:1px solid #cfd6c2;border-radius:99px;padding:7px 14px;background:#fff;font-size:13px}.chips button:hover,.opts button:hover{background:#e9efdc;border-color:#3f5a3a}
  .opts{display:flex;flex-direction:column;gap:6px;align-items:flex-start}
  input,textarea{width:100%;padding:9px 10px;border:1px solid #cfd6c2;border-radius:12px;font:inherit;background:#fff;color:#26331f}textarea{height:64px;resize:none}
  .send{width:100%;margin-top:8px;padding:10px;border-radius:12px;background:#3f5a3a;color:#fff;font-weight:600}
  @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}`;

  const host = document.createElement('div'); host.id = 'avatar-roi-host';
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = `<style>${css}</style><div class="w" id="w">
    <div class="hi">¡Hola! 👋<br>${CTX ? '¿Cómo ha sido tu experiencia?' : '¿Cómo te sientes con esta experiencia?'}<button class="x" aria-label="Cerrar" id="hx">×</button></div>
    <div class="panel" role="dialog" aria-label="Avatar Roi"><div class="hd"><img class="av" alt="">Roi<button class="x" id="cl" aria-label="Cerrar">×</button></div><div class="chat" aria-live="polite"></div></div>
    <div class="fabw"><button class="fab" aria-label="Abrir Avatar Roi"><img class="av" alt=""></button><span class="badge"></span></div></div>`;
  const $ = s => root.querySelector(s), $$ = s => [...root.querySelectorAll(s)];
  const w = $('#w'), fab = $('.fab'), chat = $('.chat'), badge = $('.badge');
  const setImg = u => { IMG = u; $$('.av').forEach(i => i.src = u); };
  setImg(IMG);
  const toggle = o => { w.classList.toggle('open', o); w.classList.remove('showhi'); };

  /* Arrastrar / abrir */
  let drag = null;
  fab.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, r: parseFloat(w.style.right) || 20, b: parseFloat(w.style.bottom) || 20, moved: false }; fab.setPointerCapture(e.pointerId); });
  fab.addEventListener('pointermove', e => {
    if (!drag) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (Math.abs(dx) + Math.abs(dy) > 5) drag.moved = true;
    if (drag.moved) { w.style.right = Math.max(8, drag.r - dx) + 'px'; w.style.bottom = Math.max(8, drag.b - dy) + 'px'; }
  });
  fab.addEventListener('pointerup', () => { if (drag && !drag.moved) toggle(); drag = null; });
  fab.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  $('#cl').onclick = () => toggle(false); $('#hx').onclick = () => w.classList.remove('showhi');
  setTimeout(() => { if (!w.classList.contains('open')) w.classList.add('showhi'); }, 2500);
  setTimeout(() => w.classList.remove('showhi'), 9000);

  /* Conversación */
  const S = {};
  const add = (cls, html) => { const d = document.createElement('div'); d.className = cls; if (html != null) d.innerHTML = html; chat.append(d); chat.scrollTop = chat.scrollHeight; return d; };
  const bot = t => { add('b').textContent = t; };
  const me = t => { add('b me').textContent = t; };
  const lock = d => d.classList.add('lock');
  const block = (cls, html, on) => { const d = add('blk ' + cls, html); d.onclick = e => { const b = e.target.closest('button'); if (b && !d.classList.contains('lock')) on(b, d); }; return d; };
  const setMood = m => { if (m == null) { badge.style.display = 'none'; fab.style.borderColor = '#fff'; return; } badge.innerHTML = face(m); badge.style.display = 'block'; fab.style.borderColor = COL[m]; };
  const host_ = () => location.hostname || 'esta página';

  function start() {
    chat.innerHTML = ''; setMood(null);
    Object.assign(S, { mood: null, tag: '', type: CTX ? CTX.type : null, target: null, place: CTX && CTX.type === 'place' ? { name: CTX.name } : null, comment: '' });
    bot(CTX ? `¡Hola! 👋 ¿Cómo te sientes con ${CTX.name}?` : `Hola, soy Roi 👋 ¿Cómo te sientes con ${host_()}?`);
    block('faces', COL.map((_, i) => `<button data-m="${i}" aria-label="${NAMES[i]}">${face(i)}</button>`).join(''), (b, d) => {
      S.mood = +b.dataset.m; lock(d); b.classList.add('on'); d.classList.remove('lock'); d.style.pointerEvents = 'none'; d.style.opacity = 1;
      me(NAMES[S.mood]); setMood(S.mood); setTimeout(askTag, 250);
    });
  }
  function askTag() {
    bot('¿Qué te hace sentir así?');
    block('chips', TAGS[S.mood].map(t => `<button>${t}</button>`).join(''), (b, d) => { S.tag = b.textContent; lock(d); me(S.tag); setTimeout(askWhat, 200); });
  }
  function askWhat() {
    if (CTX) return askComment();
    bot('¿Qué quieres valorar?');
    block('opts', '<button data-a="page">Esta página</button><button data-a="element">Algo concreto de la página</button><button data-a="place">Un lugar físico</button>', (b, d) => {
      lock(d); S.type = b.dataset.a; me(b.textContent);
      if (S.type === 'page') askComment();
      else if (S.type === 'element') pick();
      else askPlace();
    });
  }
  const sel = el => { const p = []; for (let n = el, d = 0; n && n.nodeType === 1 && d < 3; n = n.parentElement, d++) p.unshift(n.tagName.toLowerCase() + (n.id ? '#' + n.id : n.classList[0] ? '.' + n.classList[0] : '')); return p.join(' > '); };
  function pick() {
    bot('Pulsa sobre lo que quieres valorar (Esc para cancelar).'); toggle(false);
    const box = document.createElement('div');
    Object.assign(box.style, { position: 'fixed', zIndex: 2147483646, pointerEvents: 'none', border: '2px solid #3f5a3a', background: '#3f5a3a22', borderRadius: '4px' });
    document.documentElement.append(box);
    const move = e => { if (e.target === host) return; const r = e.target.getBoundingClientRect(); Object.assign(box.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' }); };
    const end = () => { box.remove(); document.removeEventListener('mousemove', move, true); document.removeEventListener('click', click, true); document.removeEventListener('keydown', key, true); toggle(true); };
    const click = e => { if (e.target === host) return; e.preventDefault(); e.stopPropagation(); S.target = { selector: sel(e.target), text: (e.target.innerText || e.target.alt || '').trim().slice(0, 80) }; end(); me('🎯 ' + S.target.selector); askComment(); };
    const key = e => { if (e.key === 'Escape') { end(); bot('Vale, lo dejamos en la página.'); askComment(); } };
    document.addEventListener('mousemove', move, true); document.addEventListener('click', click, true); document.addEventListener('keydown', key, true);
  }
  function askPlace() {
    bot('¿Cómo quieres indicar el lugar?');
    block('opts', '<button data-p="gps">📍 Usar mi ubicación</button><button data-p="txt">✍️ Escribir el lugar</button>', (b, d) => { lock(d); me(b.textContent); b.dataset.p === 'gps' ? locate() : typePlace(); });
  }
  function typePlace(msg) {
    bot(msg || '¿Cómo se llama el lugar?');
    const d = add('blk', '<input placeholder="Ej. Parque Central, Valencia" aria-label="Lugar"><button class="send">Continuar</button>');
    const go = () => { const v = d.querySelector('input').value.trim(); if (!v) return; S.place = { name: v }; lock(d); me('✍️ ' + v); askComment(); };
    d.querySelector('.send').onclick = go; d.querySelector('input').onkeydown = e => { if (e.key === 'Enter') go(); };
  }
  function locate() {
    bot('Buscando dónde estás…');
    if (!navigator.geolocation) return typePlace('No puedo ubicarte desde aquí. Escríbelo tú:');
    navigator.geolocation.getCurrentPosition(async p => {
      const { latitude: lat, longitude: lng } = p.coords; let name = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
      try { const r = await (await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&accept-language=es&lat=${lat}&lon=${lng}`)).json(); name = r.name || (r.display_name || name).split(',').slice(0, 2).join(','); } catch (e) {}
      S.place = { name, lat, lng }; me('📍 ' + name); askComment();
    }, () => typePlace('No tengo permiso de ubicación. Escríbelo tú:'), { timeout: 8000 });
  }
  function askComment() {
    bot('¿Quieres añadir algo? Es opcional.');
    const d = add('blk', '<textarea placeholder="Cuéntanos tu experiencia…" aria-label="Comentario"></textarea><button class="send">Enviar valoración</button>');
    d.querySelector('.send').onclick = () => { S.comment = d.querySelector('textarea').value.trim(); lock(d); if (S.comment) me(S.comment); submit(); };
  }
  async function submit() {
    const subject = CTX ? CTX.name : S.type === 'place' ? (S.place && S.place.name) : host_();
    const rec = { id: Date.now().toString(36), ts: new Date().toISOString(), url: location.href, title: document.title, type: S.type, subject, mood: S.mood, moodName: NAMES[S.mood], tags: [S.tag], comment: S.comment, target: S.target, place: S.place };
    const list = (await store.get('roi_ratings')) || []; list.unshift(rec); await store.set('roi_ratings', list.slice(0, 500));
    const ep = API || (await store.get('roi_endpoint'));
    if (ep) fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(rec) }).catch(() => {});
    bot('¡Gracias! Tu valoración ya cuenta 💚'); w.classList.add('cheer'); setTimeout(() => w.classList.remove('cheer'), 800);
    block('opts', '<button>Hacer otra valoración</button>', () => start());
    window.dispatchEvent(new CustomEvent('roi:rated', { detail: rec }));
  }

  window.AvatarRoi = { open: () => toggle(true), close: () => toggle(false), img: () => IMG };
  if (isExt) chrome.storage.onChanged.addListener(c => { if (c.roi_hidden) host.style.display = c.roi_hidden.newValue ? 'none' : ''; if (c.roi_avatar) setImg(c.roi_avatar.newValue || DEFAULT_IMG); });
  Promise.resolve(store.get('roi_hidden')).then(h => { if (h) host.style.display = 'none'; });
  Promise.resolve(store.get('roi_avatar')).then(a => { if (a && !(cs && cs.dataset.avatar)) setImg(a); });
  start();
  document.documentElement.append(host);
  if (cs && cs.dataset.open) toggle(true);
})();
