(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
     UTILITIES
  ═══════════════════════════════════════════════════════════ */

  function getWhatsAppHref() {
    try {
      if (window.LS && window.LS.store && window.LS.store.whatsapp) {
        var n = String(window.LS.store.whatsapp).replace(/\D/g, '');
        if (n.length >= 10) return 'https://wa.me/' + n;
      }
    } catch (e) { }
    try {
      var el = document.querySelector('[href*="wa.me"]') ||
        document.querySelector('[href*="whatsapp.com/send"]');
      if (el) return el.getAttribute('href');
    } catch (e) { }
    return 'https://wa.me/5491100000000';
  }

  function buildBrandCardHTML(name, href, imgSrc) {
    return (
      '<a href="' + href + '" class="LFH-brand-card">' +
      (imgSrc
        ? '<picture><source type="image/webp" srcset="' + imgSrc + '"><img class="LFH-brand-img" src="' + imgSrc + '" alt="' + name + '" loading="eager" decoding="async"></picture>'
        : '<div class="LFH-brand-img-ph"></div>') +
      '<div class="LFH-brand-overlay"><span class="LFH-brand-name">' + name + '</span></div>' +
      '</a>'
    );
  }

  /* ═══════════════════════════════════════════════════════════
     RESOURCES + STYLES
  ═══════════════════════════════════════════════════════════ */

  function injectResources() {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      var fa = document.createElement('link');
      fa.rel = 'stylesheet'; fa.crossOrigin = 'anonymous';
      fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fa);
    }
  }

  function injectStyles() {
    if (document.getElementById('LFH-styles')) return;
    var s = document.createElement('style');
    s.id = 'LFH-styles';
    s.textContent = getCSS();
    document.head.appendChild(s);
  }

  function getCSS() {
    return '#LFH-wrapper * { box-sizing: border-box; } #LFH-wrapper { width: 100%; overflow-x: hidden; } .LFH-inner { max-width: 1400px; margin: 0 auto !important; padding: 0 24px !important; } .LFH-gold-line { width: 36px; height: 3px; background: linear-gradient(90deg, #C8A951, #A8873A); border-radius: 2px; margin-bottom: 12px !important; } .LFH-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #C8A951; display: block; } .LFH-reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.65s ease, transform 0.65s ease; } .LFH-reveal.LFH-vis { opacity: 1; transform: translateY(0); } .LFH-d1 { transition-delay: 0.10s; } .LFH-d2 { transition-delay: 0.20s; } .LFH-d3 { transition-delay: 0.30s; } .LFH-sec-header { margin-bottom: 32px !important; } .LFH-sec-title { font-size: clamp(22px, 3vw, 34px); font-weight: 800; color: #F0F0F0; text-transform: uppercase; letter-spacing: -0.5px; line-height: 1.15; margin-bottom: 8px !important; } .LFH-sec-sub { font-size: 14px; color: #AAAAAA; line-height: 1.65; max-width: 540px; } .LFH-btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px !important; background: linear-gradient(135deg, #C8A951 0%, #A8873A 100%); color: #1A1A1A; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; border-radius: 12px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 20px rgba(200,169,81,0.35); } .LFH-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(200,169,81,0.5); } .LFH-btn-secondary { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px !important; background: transparent; color: #F0F0F0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; border: 1.5px solid #333; border-radius: 12px; text-decoration: none; transition: border-color 0.2s, color 0.2s; } .LFH-btn-secondary:hover { border-color: #C8A951; color: #C8A951; } .LFH-btn-wa { background: #075e54 !important; border: 1.5px solid #128c7e !important; color: #fff !important; } .LFH-btn-wa:hover { background: #128c7e !important; border-color: #25d366 !important; color: #fff !important; } #LFH-hero { background: #000; overflow: hidden; } .LFH-hero-inner { width: 100%; max-width: 1400px; margin: 0 auto !important; padding: 0 !important; display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 0; align-items: stretch;} .LFH-hero-left { padding: 56px 40px 44px 24px !important; display: flex; flex-direction: column; justify-content: center; } .LFH-hero-right { display: flex; align-items: center; justify-content: center; overflow: hidden; } .LFH-hero-banner { width: 100%; height: 100%; object-fit: contain; object-position: center; display: block; border-radius: 16px; } .LFH-hero-title-mobile, .LFH-hero-desc-mobile { display: none; } .LFH-hero-title-desktop, .LFH-hero-desc-desktop { display: block; } .LFH-hero-title { font-size: clamp(24px, 3.2vw, 46px); font-weight: 900; color: #fff; text-transform: uppercase; letter-spacing: -1px; line-height: 0.95; margin-bottom: 12px !important; white-space: pre-line; } .LFH-hero-title span { color: #efefef; } .LFH-hero-desc { font-size: 13px; color: #AAAAAA; line-height: 1.6; max-width: 460px; margin-bottom: 14px !important; } .LFH-hero-btns { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 14px !important; } .LFH-hero-eyebrow-wrap { display: flex; align-items: center; gap: 10px; margin-bottom: 14px !important; } .LFH-badge { display: inline-flex; align-items: center; padding: 3px 10px !important; background: rgba(200,169,81,0.12); border: 1px solid rgba(200,169,81,0.4); border-radius: 99px; font-size: 10px; font-weight: 700; color: #C8A951; letter-spacing: 0.5px; text-transform: uppercase; white-space: nowrap; } .LFH-hero-search { max-width: 520px; margin-top: 0; } .LFH-hero-feats { display: block; width: 100%; padding: 20px 0 24px !important; } .LFH-hero-feats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; width: 100%; } .LFH-hero-feat-card { display: flex; align-items: center; gap: 12px; padding: 14px 16px !important; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); border-radius: 12px; } .LFH-feat-icon-wrap { width: 34px; height: 34px; flex-shrink: 0; background: #2A2110; border-radius: 8px; display: flex; align-items: center; justify-content: center; } .LFH-feat-icon-wrap i { color: #C8A951; font-size: 14px; } .LFH-feat-title { font-size: 11px; font-weight: 800; color: #F0F0F0; text-transform: uppercase; letter-spacing: 0.3px; margin-bottom: 2px !important; } .LFH-feat-desc { font-size: 10px; color: #AAAAAA; line-height: 1.35; } @media (max-width: 1024px) {.js-search-form{display:none} } @media (max-width: 768px) { .LFH-hero-inner { grid-template-columns: 1fr; min-height: auto; } .LFH-hero-left { padding: 0 20px 24px !important; } .LFH-hero-right { padding: 0 20px 20px; } .LFH-hero-banner { min-height: 0; width: 100%; height: auto; border-radius: 12px; } .LFH-hero-feats-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; } .LFH-hero-title-desktop { display: none; } .LFH-hero-title-mobile { display: block; } .LFH-hero-desc-desktop { display: none; } .LFH-hero-desc-mobile { display: block; } } @media (max-width: 480px) { .LFH-hero-feats { display: none; } } #LFH-features { background: #0A0A0A; padding: 16px 0 20px !important; border-top: 1px solid #1A1A1A; border-bottom: 1px solid #1A1A1A; } #LFH-features .LFH-sec-header { margin-bottom: 0 !important; } #LFH-features .LFH-gold-line { margin-bottom: 6px !important; } #LFH-features .LFH-sec-title { font-size: 15px; letter-spacing: 2px; margin-bottom: 0 !important; } #LFH-features .LFH-brands-slider { margin-top: 10px !important; } #LFH-ba-section { background: #000; padding: 72px 0 !important; } .LFH-ba-split { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; } .LFH-ba-wrap { border-radius: 20px; overflow: hidden; box-shadow: 0 0 0 1px #1A1A1A, 0 8px 40px rgba(0,0,0,0.6); } .LFH-ba-container { position: relative; width: 100%; aspect-ratio: 3/2; background: #111; cursor: ew-resize; user-select: none; -webkit-user-select: none; touch-action: pan-y; } .LFH-ba-img { position: absolute; inset: 0; background-size: cover; background-position: center; } .LFH-ba-before { z-index: 1; } .LFH-ba-after { z-index: 2; will-change: clip-path; } .LFH-ba-label { position: absolute; top: 14px; padding: 4px 14px !important; border-radius: 99px; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; } .LFH-ba-before .LFH-ba-label { right: 14px; background: rgba(0,0,0,0.65); color: #888; } .LFH-ba-after .LFH-ba-label { left: 14px; background: #C8A951; color: #1A1A1A; } .LFH-ba-handle { position: absolute; top: 0; bottom: 0; z-index: 10; pointer-events: none; display: flex; flex-direction: column; align-items: center; will-change: left; } .LFH-ba-line { width: 2px; flex: 1; background: rgba(255,255,255,0.9); } .LFH-ba-btn { position: absolute; top: 50%; transform: translateY(-50%); width: 46px; height: 46px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 14px rgba(0,0,0,0.55); } .LFH-ba-btn i { font-size: 14px; color: #111; } .LFH-ba-caption { text-align: center; padding: 10px 0 0 !important; font-size: 12px; color: #AAAAAA; font-style: italic; } .LFH-ba-layers-title { font-size: clamp(18px, 2.2vw, 24px); font-weight: 800; color: #F0F0F0; text-transform: uppercase; letter-spacing: -0.3px; line-height: 1.2; margin-bottom: 8px !important; } .LFH-ba-layers-sub { font-size: 13px; color: #AAAAAA; line-height: 1.65; margin-bottom: 28px !important; } .LFH-ba-layers-list { display: flex; flex-direction: column; } .LFH-ba-layer-item { display: flex; align-items: center; gap: 16px; padding: 16px 0 !important; border-bottom: 1px solid #111; } .LFH-ba-layer-item:last-child { border-bottom: none; } .LFH-ba-layer-circle { width: 100px; height: 100px; flex-shrink: 0; border-radius: 50%; overflow: hidden; border: 2px solid #333; background: #0A0A0A; display: flex; align-items: center; justify-content: center; } .LFH-ba-layer-circle img { width: 100%; height: 100%; object-fit: cover; } .LFH-ba-layer-circle i { color: #C8A951; font-size: 20px; } .LFH-ba-layer-num { font-size: 14px; font-weight: 800; color: #C8A951; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px !important; } .LFH-ba-layer-title { font-size: 16px; font-weight: 800; color: #F0F0F0; margin-bottom: 3px !important; } .LFH-ba-layer-desc { font-size: 14px; color: #AAAAAA; line-height: 1.5; } @media (max-width: 1024px) { .LFH-ba-split { gap: 36px; } } @media (max-width: 768px) { .LFH-ba-split { grid-template-columns: 1fr; } .LFH-ba-container { aspect-ratio: 1/1; } #LFH-ba-section { padding: 48px 0 !important; } } .LFH-search-form { display: flex; border: 1.5px solid #2A2A2A; border-radius: 14px; overflow: hidden; background: rgba(13,13,13,0.9); transition: border-color 0.25s; } .LFH-search-form:focus-within { border-color: #C8A951; } .LFH-search-input { flex: 1; background: transparent; border: none; padding: 11px 14px !important; font-size: 13px; color: #F0F0F0; outline: none; min-width: 0; } .LFH-search-input::placeholder { color: #555; } .LFH-search-btn { padding: 0 18px !important; flex-shrink: 0; border: none; cursor: pointer; background: linear-gradient(135deg, #C8A951 0%, #A8873A 100%); color: #1A1A1A; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 6px; transition: opacity 0.2s; } .LFH-search-btn:hover { opacity: 0.88; } @media (max-width: 600px) { .LFH-search-btn-text { display: none; } .LFH-search-btn { padding: 0 !important; width: 48px; flex-shrink: 0; justify-content: center; } } .LFH-brands-slider { display: flex; align-items: center; gap: 8px; margin-top: 36px !important; } .LFH-brands-overflow { flex: 1; overflow-x: auto; -webkit-overflow-scrolling: touch; scroll-behavior: smooth; scrollbar-width: none; } .LFH-brands-overflow::-webkit-scrollbar { display: none; } .LFH-brands-track { display: flex; gap: 10px; align-items: flex-start; } .LFH-brand-card { width: 90px; aspect-ratio: 1/1; flex-shrink: 0; flex-grow: 0; position: relative; border-radius: 14px; overflow: hidden; background: #111; border: 1px solid #1A1A1A; text-decoration: none; display: block; transition: border-color 0.2s; } .LFH-brand-card:hover { border-color: rgba(200,169,81,0.33); } .LFH-brand-card:hover .LFH-brand-overlay { opacity: 1; } .LFH-brand-card:hover .LFH-brand-img { transform: scale(1.06); } .LFH-brand-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.35s ease; } .LFH-brand-img-ph { width: 100%; height: 100%; background: #1A1A1A; } .LFH-brand-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 10px !important; opacity: 0; transition: opacity 0.3s ease; } .LFH-brand-name { font-size: 11px; font-weight: 800; color: #fff; text-align: center; text-transform: uppercase; letter-spacing: 0.5px; padding: 0 6px !important; text-shadow: 0 1px 4px rgba(0,0,0,0.9); } .LFH-brands-arrow { width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; background: #111; border: 1px solid #2A2A2A; color: #F0F0F0; cursor: pointer; font-size: 13px; display: flex; align-items: center; justify-content: center; transition: background 0.2s, border-color 0.2s, color 0.2s; } .LFH-brands-arrow:hover { background: #1A1A1A; border-color: #C8A951; color: #C8A951; } @media (max-width: 960px) { .LFH-brands-arrow { display: none; } .LFH-brands-slider { gap: 0; } } #LFH-about { background: #050505; padding: 80px 0 !important; border-top: 1px solid #1A1A1A; } .LFH-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; } .LFH-about-img-wrap { border-radius: 20px; overflow: hidden; aspect-ratio: 1; background: #111; border: 1px solid #1A1A1A; } .LFH-about-img { width: 100%; height: 100%; object-fit: cover; display: block; } .LFH-about-title { font-size: clamp(24px, 3vw, 36px); font-weight: 900; color: #F0F0F0; text-transform: uppercase; letter-spacing: -0.5px; line-height: 1.1; margin-bottom: 20px !important; } .LFH-about-desc { font-size: 15px; color: #AAAAAA; line-height: 1.85; margin-bottom: 32px !important; border-left: 3px solid #C8A951; padding-left: 18px !important; } @media (max-width: 1024px) { .LFH-about-grid { gap: 40px; } .LFH-about-img-wrap { aspect-ratio: 3/2; } } @media (max-width: 768px) { .LFH-about-grid { grid-template-columns: 1fr; } .LFH-about-img-wrap { aspect-ratio: 3/2; max-height: 300px; order: -1; } #LFH-about { padding: 52px 0 !important; } } .LFH-brand-card picture { display: block; width: 100%; height: 100%; } .LFH-ba-layer-circle picture { display: block; width: 100%; height: 100%; } .LFH-eyebrow-mobile { display: none; } @media (max-width: 480px) { .LFH-eyebrow-desktop { display: none; } .LFH-eyebrow-mobile { display: block; } .LFH-hero-btns { flex-wrap: nowrap; } .LFH-hero-btns .LFH-btn-primary, .LFH-hero-btns .LFH-btn-secondary { padding: 9px 12px !important; font-size: 11px; flex: 1; justify-content: center; } .LFH-hero-btns .LFH-btn-primary i { display: none; } .LFH-hero-btns .LFH-btn-primary { gap: 0; } .LFH-hero-title { font-size: 26px !important; line-height: 0.9; margin-bottom: 8px !important; } .LFH-hero-desc { font-size: 12px; margin-bottom: 10px !important; } }';
  }

  /* ═══════════════════════════════════════════════════════════
     HTML BUILDERS
  ═══════════════════════════════════════════════════════════ */

  function buildHero() {
    var waHref = getWhatsAppHref();

    /* ── CONFIGURAR ESTAS URLs con las imágenes subidas al CDN ── */
    var IMG_BANNER_DESKTOP = 'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@366a5e609046b56e1d686dace726a2091fcdfccf/src/media/banner-desktop.jpg';
    var IMG_BANNER_MOBILE  = 'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@366a5e609046b56e1d686dace726a2091fcdfccf/src/media/banner-desktop.jpg';
    /* ─────────────────────────────────────────────────────────── */

    var featCards = [
      { icon: 'fa-solid fa-ruler-combined', title: 'Ajuste Perfecto', desc: 'Calce milimétrico para tu modelo exacto' },
      { icon: 'fa-solid fa-droplet-slash', title: '100% Impermeable', desc: 'PVC de alta densidad, sin absorción' },
      { icon: 'fa-solid fa-broom', title: 'Fácil de Limpiar', desc: 'Limpieza en segundos con paño húmedo' },
      { icon: 'fa-solid fa-shield-halved', title: 'Máxima Durabilidad', desc: 'Material de uso profesional' }
    ].map(function (f) {
      return (
        '<div class="LFH-hero-feat-card LFH-reveal">' +
        '<div class="LFH-feat-icon-wrap"><i class="' + f.icon + '"></i></div>' +
        '<div>' +
        '<div class="LFH-feat-title">' + f.title + '</div>' +
        '<div class="LFH-feat-desc">' + f.desc + '</div>' +
        '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<section id="LFH-hero">' +
      '<div class="LFH-hero-inner">' +

      '<div class="LFH-hero-left">' +
      '<div class="LFH-hero-text">' +
      '<div class="LFH-hero-eyebrow-wrap LFH-reveal">' +
      '<a class="LFH-badge" href="#LFSP-videos" title="Ver videos de clientes">+1500 clientes satisfechos</a>' +
      '</div>' +
      '<h1 class="LFH-hero-title LFH-reveal LFH-d1">' +
      '<span class="LFH-hero-title-desktop">ALFOMBRAS\nTERMOFORMADAS</span>' +
      '<span class="LFH-hero-title-mobile">ALFOMBRAS\nTERMOFORMADAS</span>' +
      '</h1>' +
      '<p class="LFH-hero-desc LFH-reveal LFH-d2">' +
      '<span class="LFH-hero-desc-desktop LFH-hero-tagline">Protección premium para tu auto</span>' +
      '<span class="LFH-hero-desc-mobile LFH-hero-tagline">Protección premium para tu auto</span>' +
      '</p>' +
      '<div class="LFH-hero-btns LFH-reveal LFH-d3">' +
      '<a href="/productos" class="LFH-btn-primary">VER PRODUCTOS</a>' +
      '<a href="' + waHref + '" class="LFH-btn-secondary LFH-btn-wa" target="_blank" rel="noopener noreferrer">' +
      '<i class="fa-brands fa-whatsapp"></i> CONSULTANOS' +
      '</a>' +
      '</div>' +
      '<div class="LFH-hero-search LFH-reveal LFH-d3">' +
      '<form class="LFH-search-form" action="/search/" method="get">' +
      '<input class="LFH-search-input" type="search" name="q"' +
      ' placeholder="Ej: Toyota Corolla, VW Golf, Ford Ranger..."' +
      ' autocomplete="off" aria-label="Buscar productos">' +
      '<button class="LFH-search-btn" type="submit" aria-label="Buscar">' +
      '<i class="fa-solid fa-magnifying-glass"></i><span class="LFH-search-btn-text"> BUSCAR</span>' +
      '</button>' +
      '</form>' +
      '</div>' +
      '</div>' +
      '</div>' +

      '<div class="LFH-hero-right">' +
      '<picture>' +
      '<source media="(max-width: 768px)" srcset="' + IMG_BANNER_MOBILE + '">' +
      '<img class="LFH-hero-banner" src="' + IMG_BANNER_DESKTOP + '" alt="Luxury Floor - Alfombras Premium para Autos" loading="eager" decoding="async">' +
      '</picture>' +
      '</div>' +

      '</div>' +
      '<div class="LFH-inner">' +
      '<div class="LFH-hero-feats">' +
      '<div class="LFH-hero-feats-grid">' + featCards + '</div>' +
      '</div>' +
      '</div>' +
      '</section>'
    );
  }

  function buildFeatures() {
    var cards = [
      buildBrandCardHTML('VOLKSWAGEN', 'https://www.luxuryfloor.com.ar/volkswagen/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770735496465-7049736356-e734f281b269bcbe84a43a9590934eca1770735497-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('TOYOTA', 'https://www.luxuryfloor.com.ar/toyota/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770733556150-7847836652-9de3895faa5536c82d21075415c4422c1770733559-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('CHEVROLET', 'https://www.luxuryfloor.com.ar/chevrolet/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770733556150-1579376725-bb0d7e997ded069c437396a7603e37351770733557-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('FORD', 'https://www.luxuryfloor.com.ar/ford/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770733556150-3830131793-9ce4c980c93dfe7d45696739a4f624291770733560-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('PEUGEOT', 'https://www.luxuryfloor.com.ar/peugeot/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770734988422-2735732493-1aae7e74b052f759cc673609daaae1781770734988-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('FIAT', 'https://www.luxuryfloor.com.ar/fiat/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770734870786-1628923474-c4ff9a6e77f7546d16db1778da8529391770734872-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('CITROEN', 'https://www.luxuryfloor.com.ar/citroen/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770734436138-8981738194-d7a3f6ef3f733fd0448135cf8665b7211770734438-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('NISSAN', 'https://www.luxuryfloor.com.ar/nissan/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770733556150-7870429549-7a9ec3dd4f490f91190cf778881e69681770733560-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('JEEP', 'https://www.luxuryfloor.com.ar/jeep/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770733556150-2975817857-843fd2e866a1782d7db8745b8173c2181770733560-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('RENAULT', 'https://www.luxuryfloor.com.ar/renault/', 'https://dcdn-us.mitiendanube.com/stores/007/264/679/themes/morelia/2-slide-1770759711254-7993486408-0552b135e96733730f03cc114665fe411770759712-240-0.webp?7880983552975064735'),
      buildBrandCardHTML('HONDA', 'https://www.luxuryfloor.com.ar/honda/', 'https://d1a9qnv764bsoo.cloudfront.net/stores/007/264/679/rte/97.png'),
      buildBrandCardHTML('HYUNDAI', 'https://www.luxuryfloor.com.ar/hyundai/', 'https://d1a9qnv764bsoo.cloudfront.net/stores/007/264/679/rte/98.png'),
      buildBrandCardHTML('AUDI', 'https://www.luxuryfloor.com.ar/audi/', 'https://d1a9qnv764bsoo.cloudfront.net/stores/007/264/679/rte/99.png'),
      buildBrandCardHTML('DODGE', 'https://www.luxuryfloor.com.ar/ram/', 'https://d1a9qnv764bsoo.cloudfront.net/stores/007/264/679/rte/dodge.png')
    ].join('');

    return (
      '<section id="LFH-features">' +
      '<div class="LFH-inner">' +
      '<div class="LFH-sec-header">' +
      '<div class="LFH-gold-line LFH-reveal"></div>' +
      '<h2 class="LFH-sec-title LFH-reveal LFH-d1">BUSCA POR TU MARCA</h2>' +
      '</div>' +
      '<div class="LFH-brands-slider">' +
      '<button class="LFH-brands-arrow" id="LFH-brands-prev" aria-label="Anterior">' +
      '<i class="fa-solid fa-chevron-left"></i>' +
      '</button>' +
      '<div class="LFH-brands-overflow" id="LFH-brands-overflow">' +
      '<div class="LFH-brands-track" id="LFH-brands-track">' +
      cards +
      '</div>' +
      '</div>' +
      '<button class="LFH-brands-arrow" id="LFH-brands-next" aria-label="Siguiente">' +
      '<i class="fa-solid fa-chevron-right"></i>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '</section>'
    );
  }

  function buildBeforeAfter() {
    var imgBefore = 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/c02ff150-406b-4a74-8eab-4f850d6cdfc8.jfif';
    var imgAfter = 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/4ec5cf4e-f412-4f53-bb66-2814fb6960d1.jfif';

    var layerItems = [
      { num: '01', title: 'Capa Superior: PVC', img: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/cc9b60eb-1313-4c6c-b5a0-2fb89339a0ab.png', desc: 'Impermeable, duradera y con textura a juego.' },
      { num: '02', title: 'Capa Intermedia: Espuma EVA', img: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/0af98a08-ca60-47be-8607-d59dbb956d36.png', desc: 'Proporciona estructura, soporte y flexibilidad.' },
      { num: '03', title: 'Capa Inferior: Velcro', img: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/68bb6e03-42d7-4869-8425-57769c1a33de.png', desc: 'Se agarra al piso del auto para que la alfombra no se corra. Ayuda a mantener la alfombra en su lugar y reduce el movimiento.' }
    ].map(function (l) {
      return (
        '<div class="LFH-ba-layer-item">' +
        '<div class="LFH-ba-layer-circle">' +
        (l.img ? '<picture><img src="' + l.img + '" alt="' + l.title + '" loading="eager" decoding="async"></picture>' : '<i class="fa-solid fa-layer-group"></i>') +
        '</div>' +
        '<div>' +
        '<div class="LFH-ba-layer-num">' + l.num + '</div>' +
        '<div class="LFH-ba-layer-title">' + l.title + '</div>' +
        '<div class="LFH-ba-layer-desc">' + l.desc + '</div>' +
        '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<section id="LFH-ba-section">' +
      '<div class="LFH-inner">' +
      '<div class="LFH-ba-split">' +
      '<div class="LFH-ba-split-left">' +
      '<div class="LFH-sec-header">' +
      '<div class="LFH-gold-line LFH-reveal"></div>' +
      '<h2 class="LFH-sec-title LFH-reveal LFH-d1">Mirá lo que es el cambio</h2>' +
      '<p class="LFH-sec-sub LFH-reveal LFH-d2">Arrastrá el divisor para verlo.</p>' +
      '</div>' +
      '<div class="LFH-reveal LFH-d3">' +
      '<div class="LFH-ba-wrap">' +
      '<div class="LFH-ba-container" id="LFH-ba">' +
      '<div class="LFH-ba-img LFH-ba-before" style="background-image:url(\'' + imgBefore + '\')">' +
      '<span class="LFH-ba-label">ANTES</span>' +
      '</div>' +
      '<div class="LFH-ba-img LFH-ba-after" id="LFH-ba-after" style="background-image:url(\'' + imgAfter + '\')">' +
      '<span class="LFH-ba-label">DESPUES</span>' +
      '</div>' +
      '<div class="LFH-ba-handle" id="LFH-ba-handle">' +
      '<div class="LFH-ba-line"></div>' +
      '<div class="LFH-ba-btn"><i class="fa-solid fa-arrows-left-right"></i></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<p class="LFH-ba-caption">Interior real - resultado del producto instalado</p>' +
      '</div>' +
      '</div>' +
      '<div class="LFH-ba-split-right LFH-reveal LFH-d2">' +
      '<div class="LFH-gold-line"></div>' +
      '<h2 class="LFH-ba-layers-title">Construccion Premium de 3 Capas</h2>' +
      '<p class="LFH-ba-layers-sub">Cada capa cumple un rol especifico. El resultado es una alfombra que protege, fija y dura.</p>' +
      '<div class="LFH-ba-layers-list">' + layerItems + '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>'
    );
  }

  function buildAbout() {
    return (
      '<section id="LFH-about">' +
      '<div class="LFH-inner">' +
      '<div class="LFH-about-grid">' +
      '<div class="LFH-about-text LFH-reveal">' +
      '<div class="LFH-gold-line"></div>' +
      '<h2 class="LFH-about-title">Somos un grupo que ama dar lo mejor de sí</h2>' +
      '<div class="LFH-about-desc"><p>Traemos los mejores productos y buscamos encarar cada vez más modelos, para que cada uno tenga sus alfombras si las quiere.</p><p>Como se fabrican en China, nosotros nos encargamos de que te quedes tranquilo: buscamos lo mejor, te damos la mejor onda que tenemos y respondemos ante cualquier cosa que pase, para que siempre tengas nuestro respaldo.</p></div>' +
      '<a href="https://www.instagram.com/reel/DZTShDbRsw9/" id="LFH-know-us-btn" class="LFH-btn-secondary">' +
      'Conocenos <i class="fa-solid fa-arrow-right"></i>' +
      '</a>' +
      '</div>' +
      '<div class="LFH-about-img-wrap LFH-reveal LFH-d1">' +
      '<img class="LFH-about-img" src="https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/nosotros.png" alt="Sobre Nosotros - Luxury Floor" loading="lazy">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>'
    );
  }

  function buildHTML() {
    return (
      '<div id="LFH-wrapper">' +
      buildHero() +
      buildFeatures() +
      buildBeforeAfter() +
      buildAbout() +
      '</div>'
    );
  }

  /* ═══════════════════════════════════════════════════════════
     INTERACTIONS
  ═══════════════════════════════════════════════════════════ */

  function setupBeforeAfter() {
    var container = document.getElementById('LFH-ba');
    var after = document.getElementById('LFH-ba-after');
    var handle = document.getElementById('LFH-ba-handle');
    if (!container || !after || !handle || container.dataset.lfinit) return;
    container.dataset.lfinit = '1';

    function setPos(pct) {
      pct = Math.max(4, Math.min(96, pct));
      after.style.clipPath = 'inset(0 ' + (100 - pct).toFixed(2) + '% 0 0)';
      handle.style.left = pct.toFixed(2) + '%';
      handle.style.transform = 'translateX(-50%)';
    }
    setPos(50);

    var dragging = false;
    function pctFromEvent(e) {
      var rect = container.getBoundingClientRect();
      var cx = e.touches ? e.touches[0].clientX : e.clientX;
      return ((cx - rect.left) / rect.width) * 100;
    }

    container.addEventListener('mousedown', function () { dragging = true; });
    container.addEventListener('touchstart', function () { dragging = true; }, { passive: true });
    window.addEventListener('mouseup', function () { dragging = false; });
    window.addEventListener('touchend', function () { dragging = false; });
    window.addEventListener('mousemove', function (e) { if (dragging) setPos(pctFromEvent(e)); });
    window.addEventListener('touchmove', function (e) { if (dragging) setPos(pctFromEvent(e)); }, { passive: true });
  }

  function setupBrandsSlider() {
    var overflow = document.getElementById('LFH-brands-overflow');
    var btnPrev = document.getElementById('LFH-brands-prev');
    var btnNext = document.getElementById('LFH-brands-next');
    if (!overflow || !btnPrev || !btnNext || overflow.dataset.lfinit) return;
    overflow.dataset.lfinit = '1';
    var SCROLL = 300;
    btnPrev.addEventListener('click', function () { overflow.scrollLeft -= SCROLL; });
    btnNext.addEventListener('click', function () { overflow.scrollLeft += SCROLL; });
  }

  function smoothScrollToEl(el) {
    var rect = el.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var targetY = rect.top + scrollTop;
    var startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var diff = targetY - startY;
    var duration = 600;
    var startTime = null;
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    function step(ts) {
      if (!startTime) startTime = ts;
      var elapsed = ts - startTime;
      var progress = easeInOutCubic(Math.min(elapsed / duration, 1));
      var scrollEl = document.scrollingElement || document.documentElement || document.body;
      scrollEl.scrollTop = startY + diff * progress;
      if (elapsed < duration) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function setupKnowUsBtn() {
    var btn = document.getElementById('LFH-know-us-btn');
    if (!btn) return;
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  }

  function setupScrollReveal() {
    var els = document.querySelectorAll('#LFH-wrapper .LFH-reveal');
    if (!els.length) return;

    function revealEl(el) { el.classList.add('LFH-vis'); }

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { revealEl(e.target); obs.unobserve(e.target); }
        });
      }, { threshold: 0.05 });
      els.forEach(function (el) { obs.observe(el); });
      setTimeout(function () {
        els.forEach(function (el) {
          if (!el.classList.contains('LFH-vis')) revealEl(el);
        });
      }, 2500);
    } else {
      els.forEach(revealEl);
    }
  }

  /* ═══════════════════════════════════════════════════════════
     INIT
  ═══════════════════════════════════════════════════════════ */

  var DOMCache = {
    container: null,
    wrapper: null,
    init: function () {
      this.container = document.querySelector('.js-home-sections-container');
      this.wrapper = document.getElementById('LFH-wrapper');
    }
  };

  function hideBrandsOrig() {
    var orig = document.querySelector('[data-store="home-categories-featured"]');
    if (orig) orig.style.setProperty('display', 'none', 'important');
  }

  function init() {
    DOMCache.init();
    if (!DOMCache.container || DOMCache.wrapper) return;

    injectResources();
    injectStyles();
    hideBrandsOrig();

    DOMCache.container.insertAdjacentHTML('afterbegin', buildHTML());
    DOMCache.wrapper = document.getElementById('LFH-wrapper');

    requestAnimationFrame(function () {
      setupBeforeAfter();
      setupBrandsSlider();
      setupScrollReveal();
      setupKnowUsBtn();
    });

    console.log('[Luxury Floor Home] OK');
  }

  var obsInstance = null;
  function initObserver() {
    if (obsInstance) return;
    obsInstance = new MutationObserver(function (_, obs) {
      DOMCache.init();
      if (DOMCache.container && !DOMCache.wrapper) {
        init(); obs.disconnect(); obsInstance = null;
      }
    });
    obsInstance.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () {
      if (obsInstance) { obsInstance.disconnect(); obsInstance = null; }
    }, 10000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); initObserver(); });
  } else {
    init();
    initObserver();
  }

  if (typeof LS !== 'undefined' && LS.ready) {
    LS.ready
      .then(function () { DOMCache.init(); if (!DOMCache.wrapper) init(); })
      .catch(function (e) { console.warn('[LFH Home] LS.ready error:', e); });
  }

})();

/* Luxury Floor: el "+1500 clientes satisfechos" del inicio lleva a los videos de clientes */
(function () {
  var st = document.createElement('style');
  st.textContent = '.LFH-hero-desc .LFH-hero-tagline{align-items:center;gap:12px;font-size:clamp(15px,1.55vw,20px)!important;font-weight:500;letter-spacing:.3px;color:#E6C978;line-height:1.3}.LFH-hero-desc .LFH-hero-tagline::before{content:"";width:28px;height:2px;flex:0 0 28px;border-radius:2px;background:linear-gradient(90deg,#C8A951,#A8873A)}.LFH-hero-desc-desktop.LFH-hero-tagline{display:flex}.LFH-hero-desc-mobile.LFH-hero-tagline{display:none}@media (max-width:768px){.LFH-hero-desc-desktop.LFH-hero-tagline{display:none}.LFH-hero-desc-mobile.LFH-hero-tagline{display:flex;font-size:15px!important}}.LFH-about-desc p{margin:0}.LFH-about-desc p+p{margin-top:14px!important}a.LFH-badge{cursor:pointer;text-decoration:none;color:inherit}a.LFH-badge:hover{filter:brightness(1.15)}#LFSP-videos{scroll-margin-top:80px}';
  document.head.appendChild(st);
  document.addEventListener('click', function (e) {
    var badge = e.target.closest && e.target.closest('.LFH-badge');
    if (!badge) return;
    var target = document.getElementById('LFSP-videos') ||
      (document.getElementById('LFSP-main-slot') && document.getElementById('LFSP-main-slot').closest('section'));
    if (!target) return;
    e.preventDefault();
    var y = target.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
})();
