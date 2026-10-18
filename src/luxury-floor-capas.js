/* Luxury Floor — escena "Así está hecha por dentro"
   La alfombra entera se abre capa por capa mientras se baja (cámara de costado),
   hace zoom en PVC, EVA y velcro, y se vuelve a cerrar.
   Se muestra en la portada (después del banner) y en cada ficha de producto (antes de la descripción). */
(function () {
  'use strict';
  if (window.__LFL_LOADED) return;
  window.__LFL_LOADED = true;

  var IMG = 'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@eeb3aff3241117fce4be3914ed43d7adaaea9137/src/media/capas/';

  var IMG2 = 'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@a54790e04a357cf3443e0f876a0c20f37886bff7/src/media/capas/';

  var CSS = '' +
    '#LFL{--lfl-top:0px;background:linear-gradient(180deg,#000,#100e0b 50%,#000);color:#F0F0F0;font-family:inherit;position:relative;z-index:1}' +
    '#LFL *{box-sizing:border-box}' +
    '#LFL .LFL-intro{max-width:1100px;margin:0 auto;padding:clamp(48px,7vw,96px) 20px clamp(8px,2vw,24px);text-align:center}' +
    '#LFL .LFL-intro .LFL-eyebrow{margin-bottom:12px}' +
    '#LFL .LFL-intro h2{margin:0 auto 10px;max-width:16em}' +
    '#LFL .LFL-intro-sub{margin:0 auto 28px;max-width:34em;font-size:15px;line-height:1.6;color:#A89F8F}' +
    '#LFL .LFL-fig{position:relative;margin:0 auto;max-width:900px;border-radius:24px;overflow:hidden;background:#ececec;box-shadow:0 30px 80px rgba(0,0,0,.55),0 0 0 1px rgba(200,169,81,.18)}' +
    '#LFL .LFL-fig img{display:block;width:100%;height:auto;max-width:none}' +
    '#LFL .LFL-legend{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin:22px 0 0;padding:0;list-style:none}' +
    '#LFL .LFL-legend li{display:flex;align-items:center;gap:10px;padding:8px 14px 8px 8px;border:1px solid rgba(200,169,81,.28);border-radius:999px;font-size:14px;color:#E9E3D6;background:rgba(200,169,81,.06)}' +
    '#LFL .LFL-legend b{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#C8A951;color:#111;font-size:12px;font-weight:800}' +
    '#LFL .LFL-in{width:100%;max-width:1200px;margin:0 auto;padding:24px 20px;display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(24px,4vw,56px);align-items:center}' +
    '#LFL .LFL-eyebrow{display:block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#C8A951;margin:0 0 10px}' +
    '#LFL h2{margin:0 0 18px;font-size:clamp(22px,3.2vw,36px);font-weight:900;line-height:1.05;text-transform:uppercase;letter-spacing:-.5px;color:#F0F0F0}' +
    '#LFL .LFL-lead{margin:-6px 0 22px;max-width:30em;font-size:14px;line-height:1.55;color:#A89F8F}' +
    '#LFL .LFL-steps{display:grid}' +
    '#LFL .LFL-step{grid-area:1/1;opacity:0;transform:translateY(14px);transition:opacity .5s,transform .5s,visibility 0s .5s;visibility:hidden}' +
    '#LFL .LFL-step.on{opacity:1;transform:none;visibility:visible;transition:opacity .5s,transform .5s}' +
    '#LFL .LFL-step h3{margin:0 0 6px;font-size:19px;font-weight:700;color:#E6C978}' +
    '#LFL .LFL-step p{margin:0;max-width:26em;font-size:15px;line-height:1.55;color:#D6D0C4}' +
    '#LFL .LFL-stack{display:flex;flex-direction:column;gap:6px;margin:20px 0 0;padding:0;list-style:none;width:min(260px,100%)}' +
    '#LFL .LFL-stack li{padding:7px 12px;border:1px solid rgba(200,169,81,.24);border-radius:8px;color:#A89F8F;font-size:13px;transition:background .4s,color .4s,border-color .4s}' +
    '#LFL .LFL-stack li.on{background:rgba(200,169,81,.16);border-color:#C8A951;color:#E6C978}' +
    '#LFL .LFL-view{position:relative;aspect-ratio:1456/1088;border-radius:20px;overflow:hidden;background:#d4d4d4;box-shadow:0 30px 80px rgba(0,0,0,.55)}' +
    '#LFL .LFL-pan{position:relative;width:100%;height:100%;transform-origin:0 0;will-change:transform;backface-visibility:hidden}' +
    '#LFL .LFL-ly{position:absolute;inset:0;width:100%;height:100%;max-width:none;will-change:transform,opacity;backface-visibility:hidden}' +
    '#LFL .LFL-track{height:calc(100vh + 7 * 70vh);height:calc(100svh + 7 * 70svh)}' +
    '#LFL .LFL-stage{position:sticky;top:var(--lfl-top);height:calc(100vh - var(--lfl-top));height:calc(100svh - var(--lfl-top));display:flex;align-items:center}' +
    '@media (max-width:820px){' +
      '#LFL .LFL-in{grid-template-columns:minmax(0,1fr);gap:14px;padding:12px 16px}' +
      '#LFL .LFL-intro{padding:40px 16px 4px}' +
      '#LFL .LFL-fig{border-radius:16px}' +
      '#LFL .LFL-legend{gap:8px}' +
      '#LFL .LFL-legend li{font-size:13px;padding:6px 12px 6px 6px}' +
      '#LFL .LFL-view{order:-1;border-radius:14px}' +
      '#LFL h2{margin-bottom:10px;font-size:22px}' +
      '#LFL .LFL-eyebrow{display:none}' +
      '#LFL .LFL-stack{flex-direction:row;flex-wrap:wrap;width:auto;margin-top:12px}' +
      '#LFL .LFL-step p{font-size:14px}' +
      '#LFL .LFL-lead{margin:-2px 0 12px;font-size:13px}' +
      '#LFL .LFL-track{height:calc(100vh + 6 * 60vh);height:calc(100svh + 6 * 60svh)}' +
    '}' +
    '@media (prefers-reduced-motion:reduce){#LFL .LFL-track{height:auto}#LFL .LFL-stage{position:static;height:auto}#LFL *{transition:none!important}}';

  var HTML = '' +
    '<section id="LFL" aria-label="Cómo está hecha la alfombra">' +
      '<div class="LFL-intro">' +
        '<span class="LFL-eyebrow">Por dentro</span>' +
        '<h2>Tres capas, una sola alfombra</h2>' +
        '<p class="LFL-intro-sub">Cada capa cumple un trabajo distinto. Bajá y mirá cómo se abre.</p>' +
        '<figure class="LFL-fig"><img src="' + IMG2 + 'capas-ilustracion.webp" alt="Ilustración de las tres capas de la alfombra: PVC con chapa de metal arriba, goma EVA en el medio y base de velcro abajo" width="1456" height="1088" loading="lazy" decoding="async"></figure>' +
        '<ol class="LFL-legend"><li><b>1</b>PVC con relieve</li><li><b>2</b>Goma EVA</li><li><b>3</b>Base de velcro</li></ol>' +
      '</div>' +
      '<div class="LFL-track" id="LFL-track">' +
        '<div class="LFL-stage">' +
          '<div class="LFL-in">' +
            '<div class="LFL-copy">' +
              '<span class="LFL-eyebrow">Por dentro</span>' +
              '<h2>Así está hecha por dentro</h2>' +
              '<p class="LFL-lead">Escaneamos la plataforma de cada vehículo y con esas medidas mandamos a fabricar tu alfombra. Por eso calza justo en tu modelo.</p>' +
              '<div class="LFL-steps">' +
                '<article class="LFL-step on"><h3>Tres capas</h3><p>Cada una cumple un trabajo distinto. Seguí bajando y la abrimos de a una.</p></article>' +
                '<article class="LFL-step"><h3>Arriba, PVC con relieve</h3><p>Es la cara que ves y pisás. Tiene la textura en relieve y una chapa de metal en el apoyapiés del conductor.</p></article>' +
                '<article class="LFL-step"><h3>En el medio, goma EVA</h3><p>Le da cuerpo a la alfombra y sostiene la forma del piso de tu auto.</p></article>' +
                '<article class="LFL-step"><h3>Abajo, base de velcro</h3><p>Se agarra al piso del auto para que la alfombra no se corra al manejar.</p></article>' +
              '</div>' +
              '<ol class="LFL-stack" aria-hidden="true">' +
                '<li data-l="top" class="on">Capa superior · PVC</li>' +
                '<li data-l="mid" class="on">Capa intermedia · EVA</li>' +
                '<li data-l="base" class="on">Base · Velcro</li>' +
              '</ol>' +
            '</div>' +
            '<div class="LFL-view" id="LFL-view">' +
              '<div class="LFL-pan" id="LFL-pan">' +
                '<img class="LFL-ly" src="' + IMG + 'capa-fondo.webp" alt="" width="1456" height="1088" loading="lazy" decoding="async">' +
                '<img class="LFL-ly" id="LFL-base" src="' + IMG + 'capa-velcro.webp" alt="Base de velcro" width="1456" height="1088" loading="lazy" decoding="async">' +
                '<img class="LFL-ly" id="LFL-eva" src="' + IMG + 'capa-eva.webp" alt="Capa intermedia de goma EVA" width="1456" height="1088" loading="lazy" decoding="async">' +
                '<img class="LFL-ly" id="LFL-top" src="' + IMG + 'capa-pvc.webp" alt="Capa superior de PVC con relieve y chapa de metal en el apoyapiés" width="1456" height="1088" loading="lazy" decoding="async">' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

  function isProduct() {
    return location.pathname.indexOf('/productos/') === 0 && location.pathname.replace(/\/+$/, '') !== '/productos' ||
           !!document.querySelector('[data-store^="product-info-"]');
  }
  function isHome() { return location.pathname === '/' || location.pathname === ''; }

  /* Dónde va: en la portada después del bloque principal; en la ficha antes de la descripción */
  function findAnchor() {
    if (isHome()) {
      var w = document.getElementById('LFH-wrapper');
      if (w) return { el: w, pos: 'afterend' };
      return null;
    }
    if (isProduct()) {
      var d = document.getElementById('LFD-desc-wrapper');
      if (d) return { el: d, pos: 'beforebegin' };
      return null;
    }
    return null;
  }

  /* position:sticky no funciona si un contenedor tiene overflow hidden/auto.
     overflow "clip" recorta igual pero deja funcionar el sticky. */
  function freeSticky(el) {
    var n = el.parentElement;
    while (n && n !== document.body && n !== document.documentElement) {
      var cs = getComputedStyle(n);
      if (/(hidden|auto|scroll)/.test(cs.overflowX)) n.style.overflowX = 'clip';
      if (/(hidden|auto|scroll)/.test(cs.overflowY)) n.style.overflowY = 'clip';
      n = n.parentElement;
    }
  }

  /* Altura del encabezado fijo de la tienda, para que la escena no quede tapada.
     Se busca una sola vez y después solo se mide (es barato). */
  var headEls = null;
  function headerOffset() {
    if (!headEls) {
      headEls = [].slice.call(document.querySelectorAll('header, .js-head-main, .head-main, [data-store="head"]')).filter(function (h) {
        var p = getComputedStyle(h).position; return p === 'fixed' || p === 'sticky';
      });
    }
    var best = 0;
    for (var i = 0; i < headEls.length; i++) {
      var r = headEls[i].getBoundingClientRect();
      if (r.top <= 1 && r.bottom > best && r.bottom < window.innerHeight * 0.4) best = r.bottom;
    }
    return Math.round(best);
  }

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  /* curva suave: arranca y frena despacio */
  function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  function setup(root) {
    var track = root.querySelector('#LFL-track'), view = root.querySelector('#LFL-view'), pan = root.querySelector('#LFL-pan'),
        lyTop = root.querySelector('#LFL-top'), lyEva = root.querySelector('#LFL-eva'), lyBase = root.querySelector('#LFL-base'),
        steps = [].slice.call(root.querySelectorAll('.LFL-step')), lis = [].slice.call(root.querySelectorAll('.LFL-stack li'));
    var IH = 1088, DTOP = 215, DBASE = -185;
    /* p, abierto, centro x, centro y, zoom */
    var K = [[0,0,.5,.5,1],[.08,0,.5,.5,1],[.18,.5,.40,.5,1.18],[.30,1,.62,.5,1.18],
             [.38,1,.55,.33,2.3],[.46,1,.55,.33,2.3],
             [.54,1,.42,.74,2.6],[.62,1,.42,.74,2.6],
             [.70,1,.74,.82,2.6],[.79,1,.74,.82,2.6],
             [.88,1,.5,.5,1],[.96,0,.5,.5,1],[1,0,.5,.5,1]];
    var S = [[.33,0,['top','mid','base']],[.50,1,['top']],[.66,2,['mid']],[.84,3,['base']],[1.01,0,['top','mid','base']]];
    var cur = -1;

    function render(p) {
      var i = 0; while (i < K.length - 2 && p > K[i + 1][0]) i++;
      var a = K[i], b = K[i + 1], t = b[0] > a[0] ? ease(clamp((p - a[0]) / (b[0] - a[0]), 0, 1)) : 1;
      var o = a[1] + (b[1] - a[1]) * t, cx = a[2] + (b[2] - a[2]) * t, cy = a[3] + (b[3] - a[3]) * t, s = a[4] + (b[4] - a[4]) * t;
      var W = view.clientWidth, H = view.clientHeight;
      var tx = clamp(W / 2 - s * cx * W, W - s * W, 0), ty = clamp(H / 2 - s * cy * H, H - s * H, 0);
      pan.style.transform = 'translate3d(' + tx.toFixed(2) + 'px,' + ty.toFixed(2) + 'px,0) scale(' + s.toFixed(4) + ')';
      lyTop.style.transform = 'translate3d(0,' + ((1 - o) * DTOP / IH * 100).toFixed(3) + '%,0)';
      lyBase.style.transform = 'translate3d(0,' + ((1 - o) * DBASE / IH * 100).toFixed(3) + '%,0)';
      lyEva.style.opacity = clamp((o - .1) / .4, 0, 1).toFixed(3);
      var k = 0; while (p >= S[k][0]) k++;
      if (k !== cur) {
        cur = k;
        steps.forEach(function (el, j) { el.classList.toggle('on', j === S[k][1]); });
        lis.forEach(function (li) { li.classList.toggle('on', S[k][2].indexOf(li.dataset.l) > -1); });
      }
    }

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { render(0.42); return; }

    /* La escena no salta con cada movimiento del scroll: la posición mostrada
       "persigue" a la del scroll con una inercia corta, así se ve fluida
       también con la rueda del mouse o el dedo en el celular. */
    var lastT = -1, target = 0, shown = -1, raf = 0;
    function measure() {
      var T = headerOffset();
      if (T !== lastT) { lastT = T; root.style.setProperty('--lfl-top', T + 'px'); }
      var r = track.getBoundingClientRect(), total = track.offsetHeight - (window.innerHeight - T);
      target = total > 0 ? clamp((T - r.top) / total, 0, 1) : 0;
    }
    function loop() {
      raf = 0;
      if (shown < 0) shown = target;
      var d = target - shown;
      shown = Math.abs(d) < 0.0004 ? target : shown + d * 0.14;
      render(shown);
      if (shown !== target) raf = requestAnimationFrame(loop);
    }
    function onScroll() {
      measure();
      if (!raf) raf = requestAnimationFrame(loop);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onResize();
    setTimeout(onResize, 1500);
  }

  function mount() {
    if (document.getElementById('LFL')) return true;
    var at = findAnchor();
    if (!at) return false;
    if (!document.getElementById('LFL-styles')) {
      var st = document.createElement('style'); st.id = 'LFL-styles'; st.textContent = CSS;
      document.head.appendChild(st);
    }
    at.el.insertAdjacentHTML(at.pos, HTML);
    var root = document.getElementById('LFL');
    freeSticky(root);
    setup(root);
    return true;
  }

  function start() {
    if (!isHome() && !isProduct()) return;
    if (mount()) return;
    /* los bloques de la portada y la ficha los arma otro script: esperar a que aparezcan */
    var obs = new MutationObserver(function () { if (mount()) obs.disconnect(); });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { obs.disconnect(); }, 15000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
