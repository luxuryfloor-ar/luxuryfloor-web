(function () {
  'use strict';

  /* ── RESOURCES ───────────────────────────────────────────────────────── */
  function injectResources() {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fa = document.createElement('link');
      fa.rel = 'stylesheet'; fa.crossOrigin = 'anonymous';
      fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fa);
    }
  }

  /* ── STYLES ──────────────────────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('LFSP-styles')) return;
    const s = document.createElement('style');
    s.id = 'LFSP-styles';
    s.textContent = getCSS();
    document.head.appendChild(s);
  }

  function getCSS() {
    const p  = '#C8A951';
    const pd = '#A8873A';

    return `
      /* ═══════════════════════════════════════════════
         WRAPPER
      ═══════════════════════════════════════════════ */
      #LFSP-wrapper * { box-sizing: border-box; margin: 0; padding: 0; }
      #LFSP-wrapper {
        width: 100%; overflow-x: hidden;
      }

      /* ── SECCIONES ── */
      .LFSP-section {
        padding: 72px 0 !important;
        background: #FFFFFF;
        border-top: 1px solid #F3F4F6;
      }
      .LFSP-section--alt { background: #F9FAFB; }
      .LFSP-inner {
        max-width: 1200px;
        margin: 0 auto !important;
        padding: 0 24px !important;
      }

      /* ── TIPOGRAFÍA ── */
      .LFSP-label {
        font-size: 11px; font-weight: 700; letter-spacing: 1.8px;
        text-transform: uppercase; color: ${p}; margin-bottom: 8px;
      }
      .LFSP-gold-line {
        width: 40px; height: 3px;
        background: linear-gradient(90deg, ${p}, ${pd});
        border-radius: 2px; margin-bottom: 14px;
      }
      .LFSP-sec-title {
        font-size: 30px; font-weight: 800; color: #111827;
        letter-spacing: -0.5px; line-height: 1.2; margin-bottom: 10px !important;
      }
      .LFSP-sec-sub {
        font-size: 15px; color: #6B7280;
        line-height: 1.65; max-width: 520px;
      }

      /* ── REVEAL ── */
      .LFSP-reveal {
        opacity: 0; transform: translateY(22px);
        transition: opacity 0.65s ease, transform 0.65s ease;
      }
      .LFSP-reveal.LFSP-vis { opacity: 1; transform: translateY(0); }
      .LFSP-d1 { transition-delay: 0.08s; }
      .LFSP-d2 { transition-delay: 0.16s; }

      /* ═══════════════════════════════════════════════
         SECCIÓN 1 — VIDEOS
      ═══════════════════════════════════════════════ */
      .LFSP-vsplit {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px; align-items: center;
      }

      /* Carousel */
      .LFSP-vcar-wrap {
        position: relative;
        user-select: none; -webkit-user-select: none;
      }
      .LFSP-vcar-row {
        display: flex; align-items: center;
        justify-content: center; gap: 12px;
      }
      .LFSP-vcar-slot {
        border-radius: 20px; overflow: hidden;
        position: relative; flex-shrink: 0;
        background: #F3F4F6;
        transition: opacity .5s ease, filter .5s ease, transform .5s ease;
      }
      .LFSP-vcar-slot video {
        width: 100%; height: 100%;
        object-fit: cover; display: block;
        pointer-events: none;
        transition: opacity 0.25s ease;
      }
      .LFSP-vcar-slot--main {
        flex: 0 0 56%; max-width: 240px;
        aspect-ratio: 9/16; cursor: pointer; z-index: 2;
        border: 2px solid #E5E7EB;
        box-shadow: 0 8px 32px rgba(0,0,0,0.10);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .LFSP-vcar-slot--main:hover {
        border-color: ${p}60;
        box-shadow: 0 12px 40px rgba(0,0,0,0.15);
      }
      .LFSP-vcar-slot--main:hover .LFSP-vcar-expand { opacity: 1; }
      .LFSP-vcar-slot--main.LFSP-switching video { opacity: 0.3; }
      .LFSP-vcar-slot--side {
        flex: 0 0 22%; max-width: 110px;
        aspect-ratio: 9/16;
        opacity: 0.42; filter: brightness(0.88);
        transform: scale(0.94); cursor: pointer; z-index: 1;
        border: 1px solid #E5E7EB;
      }
      .LFSP-vcar-slot--side:hover {
        opacity: 0.68; filter: brightness(0.96); transform: scale(0.97);
      }
      .LFSP-vcar-side-overlay { position: absolute; inset: 0; }
      .LFSP-vcar-expand {
        position: absolute; bottom: 10px; right: 10px;
        width: 32px; height: 32px; border-radius: 50%;
        background: rgba(0,0,0,0.40); backdrop-filter: blur(6px);
        display: flex; align-items: center; justify-content: center;
        color: #fff; font-size: 11px;
        opacity: 0; transition: opacity 0.25s;
      }

      /* Controles */
      .LFSP-vcar-controls {
        display: flex; align-items: center;
        justify-content: center; gap: 14px; margin-top: 20px !important;
      }
      .LFSP-vcar-arrow {
        width: 40px; height: 40px; border-radius: 50%;
        background: #FFFFFF; border: 1px solid #E5E7EB;
        color: #374151; cursor: pointer; font-size: 12px;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.2s; flex-shrink: 0;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      }
      .LFSP-vcar-arrow:hover { background: #FDF8EC; border-color: ${p}; color: ${p}; }
      .LFSP-vcar-dots { display: flex; gap: 6px; align-items: center; }
      .LFSP-vcar-dot {
        width: 7px; height: 7px; border-radius: 50%;
        background: #D1D5DB; cursor: pointer; border: none;
        transition: background 0.3s, transform 0.3s;
      }
      .LFSP-vcar-dot.active { background: ${p}; transform: scale(1.4); }

      /* Columna de texto */
      .LFSP-vtext .LFSP-sec-sub { margin-bottom: 24px; }

      .LFSP-vstats {
        display: flex; gap: 24px;
        padding: 18px 0 !important;
      }
      .LFSP-vstat-val {
        font-size: 26px; font-weight: 800; color: #111827;
        letter-spacing: -0.5px; line-height: 1;
      }
      .LFSP-vstat-val em { color: ${p}; font-style: normal; }
      .LFSP-vstat-lbl { font-size: 12px; color: #9CA3AF; margin-top: 4px; line-height: 1.4; }

      .LFSP-vfeats { display: flex; flex-direction: column; gap: 10px; }
      .LFSP-vfeat {
        display: flex; align-items: flex-start; gap: 14px;
        padding: 16px !important; background: #FFFFFF;
        border: 1px solid #E5E7EB; border-radius: 14px;
        transition: border-color 0.25s, box-shadow 0.25s;
      }
      .LFSP-vfeat:hover {
        border-color: ${p}40;
        box-shadow: 0 2px 12px rgba(200,169,81,0.10);
      }
      .LFSP-vfeat-icon {
        width: 42px; height: 42px; flex-shrink: 0;
        background: #FDF8EC; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
      }
      .LFSP-vfeat-icon i { color: ${p}; font-size: 16px; }
      .LFSP-vfeat-title { font-size: 13px; font-weight: 700; color: #111827; margin-bottom: 3px; }
      .LFSP-vfeat-desc  { font-size: 12px; color: #6B7280; line-height: 1.6; }

      /* Modal de video */
      .LFSP-vmodal {
        display: none; position: fixed; inset: 0; z-index: 99999;
        align-items: center; justify-content: center;
      }
      .LFSP-vmodal.active { display: flex; }
      .LFSP-vmodal-backdrop {
        position: absolute; inset: 0;
        background: rgba(0,0,0,0.88); backdrop-filter: blur(8px);
      }
      .LFSP-vmodal-content {
        position: relative; z-index: 1;
        width: min(420px, 92vw); border-radius: 20px;
        overflow: hidden; background: #000;
        box-shadow: 0 24px 80px rgba(0,0,0,0.6);
      }
      .LFSP-vmodal-video {
        width: 100%; max-height: 88vh; display: block; object-fit: contain;
      }
      .LFSP-vmodal-close {
        position: absolute; top: 10px; right: 10px; z-index: 2;
        width: 36px; height: 36px; border-radius: 50%; border: none;
        background: rgba(255,255,255,0.18); color: #fff; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        font-size: 16px; transition: background 0.2s; backdrop-filter: blur(4px);
      }
      .LFSP-vmodal-close:hover { background: rgba(255,255,255,0.32); }

      /* ═══════════════════════════════════════════════
         SECCIÓN 2 — SCREENSHOTS
      ═══════════════════════════════════════════════ */
      .LFSP-gallery-head {
        display: flex; align-items: flex-end;
        justify-content: space-between; gap: 20px;
        flex-wrap: wrap; margin-bottom: 36px !important;
      }
      .LFSP-verified-badge {
        display: inline-flex; align-items: center; gap: 6px;
        background: #F0FDF4; border: 1px solid #BBF7D0;
        color: #16A34A; font-size: 12px; font-weight: 600;
        padding: 6px 14px !important; border-radius: 99px; white-space: nowrap;
      }
      .LFSP-verified-badge i { font-size: 11px; }

      /* Screenshot carousel */
      .LFSP-sc-wrap { position: relative; user-select: none; -webkit-user-select: none; }
      .LFSP-sc-viewport { overflow: hidden; }
      .LFSP-sc-track {
        display: flex;
        transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        will-change: transform;
      }
      .LFSP-sc-slide {
        flex: 0 0 100%; display: flex; justify-content: center;
        padding: 0 80px; box-sizing: border-box;
        align-items: center;
      }
      .LFSP-sc-slide img {
        max-width: 800px;
        max-height: 500px;
        width: auto; height: auto; display: block;
        border-radius: 20px;
        cursor: pointer; object-fit: contain;
      }
      .LFSP-sc-controls {
        display: flex; align-items: center;
        justify-content: center; gap: 14px; margin-top: 20px !important;
      }
      .LFSP-sc-arrow {
        width: 40px; height: 40px; border-radius: 50%;
        background: #FFFFFF; border: 1px solid #E5E7EB;
        color: #374151; cursor: pointer; font-size: 12px;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.2s; flex-shrink: 0;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      }
      .LFSP-sc-arrow:hover { background: #FDF8EC; border-color: ${p}; color: ${p}; }
      .LFSP-sc-dots { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; justify-content: center; }
      .LFSP-sc-dot {
        width: 7px; height: 7px; border-radius: 50%;
        background: #D1D5DB; cursor: pointer; border: none;
        transition: background 0.3s, transform 0.3s;
      }
      .LFSP-sc-dot.active { background: ${p}; transform: scale(1.4); }

      /* Lightbox */
      .LFSP-lightbox {
        display: none; position: fixed; inset: 0; z-index: 99999;
        align-items: center; justify-content: center; padding: 20px;
      }
      .LFSP-lightbox.active { display: flex; }
      .LFSP-lightbox-backdrop {
        position: absolute; inset: 0;
        background: rgba(0,0,0,0.92); backdrop-filter: blur(10px);
      }
      .LFSP-lightbox-content {
        position: relative; z-index: 1;
        max-width: min(640px, 92vw); max-height: 92vh;
        display: flex; align-items: center; justify-content: center;
      }
      .LFSP-lb-img {
        max-width: 100%; max-height: 88vh;
        display: block; object-fit: contain;
        border-radius: 16px;
        box-shadow: 0 24px 80px rgba(0,0,0,0.5);
      }
      .LFSP-lb-close {
        position: absolute; top: -14px; right: -14px; z-index: 2;
        width: 36px; height: 36px; border-radius: 50%; border: none;
        background: rgba(255,255,255,0.2); color: #fff; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        font-size: 15px; transition: background 0.2s; backdrop-filter: blur(6px);
        box-shadow: 0 2px 12px rgba(0,0,0,0.3);
      }
      .LFSP-lb-close:hover { background: rgba(255,255,255,0.38); }
      .LFSP-lb-nav {
        position: fixed; top: 50%; transform: translateY(-50%); z-index: 2;
        width: 44px; height: 44px; border-radius: 50%; border: none;
        background: rgba(255,255,255,0.18); color: #fff; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px; transition: background 0.2s; backdrop-filter: blur(6px);
      }
      .LFSP-lb-nav:hover { background: rgba(255,255,255,0.32); }
      .LFSP-lb-prev { left: 16px; }
      .LFSP-lb-next { right: 16px; }

      /* ── RESPONSIVE ───────────────────────────────── */
      @media (max-width: 820px) {
        .LFSP-vsplit { grid-template-columns: 1fr; gap: 36px; }
        .LFSP-sec-title { font-size: 24px; }
        .LFSP-vstats { gap: 16px; }
        .LFSP-sc-slide { padding: 0 48px; }
      }
      @media (max-width: 540px) {
        .LFSP-section { padding: 48px 0 !important; }
        .LFSP-inner { padding: 0 16px !important; }
        .LFSP-sec-title { font-size: 20px; }
        .LFSP-vcar-slot--main { flex: 0 0 60%; }
        .LFSP-vcar-slot--side { flex: 0 0 18%; max-width: 90px; }
        .LFSP-vcar-row { gap: 8px; }
        .LFSP-vstats { flex-wrap: wrap; gap: 12px; }
        .LFSP-sc-slide { padding: 0 20px; }
        .LFSP-gallery-head { flex-direction: column; align-items: flex-start; }
        .LFSP-lb-prev { left: 10px; }
        .LFSP-lb-next { right: 10px; }
      }
    `;
  }

  /* ── HTML BUILDERS ───────────────────────────────────────────────────── */

  function buildVideosSection() {
    var dots = '';
    for (var i = 0; i < 5; i++) {
      dots += '<button class="LFSP-vcar-dot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '"></button>';
    }

    return `
      <section class="LFSP-section" id="LFSP-videos">
        <div class="LFSP-inner">
          <div class="LFSP-vsplit LFSP-reveal">

            <!-- Carousel de videos -->
            <div class="LFSP-vcar-wrap">
              <div class="LFSP-vcar-row" id="LFSP-vcar-row">
                <div class="LFSP-vcar-slot LFSP-vcar-slot--side" id="LFSP-prev-slot">
                  <video muted playsinline preload="none"></video>
                  <div class="LFSP-vcar-side-overlay"></div>
                </div>
                <div class="LFSP-vcar-slot LFSP-vcar-slot--main" id="LFSP-main-slot">
                  <video muted playsinline autoplay loop preload="auto"></video>
                  <div class="LFSP-vcar-expand"><i class="fa-solid fa-expand"></i></div>
                </div>
                <div class="LFSP-vcar-slot LFSP-vcar-slot--side" id="LFSP-next-slot">
                  <video muted playsinline preload="none"></video>
                  <div class="LFSP-vcar-side-overlay"></div>
                </div>
              </div>
              <div class="LFSP-vcar-controls">
                <button class="LFSP-vcar-arrow" id="LFSP-vcar-prev">
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <div class="LFSP-vcar-dots" id="LFSP-vcar-dots">${dots}</div>
                <button class="LFSP-vcar-arrow" id="LFSP-vcar-next">
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <!-- Columna de texto -->
            <div class="LFSP-vtext">
              <p class="LFSP-label">Prueba Social</p>
              <div class="LFSP-gold-line"></div>
              <h2 class="LFSP-sec-title">Tenemos lo mejor<br>para tu auto</h2>
              <p class="LFSP-sec-sub">Más de 1500 clientes satisfechos respaldan nuestra calidad y servicio.</p>

              <div class="LFSP-vstats">
                <div>
                  <div class="LFSP-vstat-val">1500<em>+</em></div>
                  <div class="LFSP-vstat-lbl">Clientes<br>satisfechos</div>
                </div>
                <div>
                  <div class="LFSP-vstat-val">+1 <em>año</em></div>
                  <div class="LFSP-vstat-lbl">En el<br>mercado</div>
                </div>
                <div>
                  <div class="LFSP-vstat-val">3 <em>cuotas</em></div>
                  <div class="LFSP-vstat-lbl">Sin interés con<br>Mercado Pago</div>
                </div>
              </div>

              <div class="LFSP-vfeats">
                <div class="LFSP-vfeat">
                  <div class="LFSP-vfeat-icon"><i class="fa-solid fa-medal"></i></div>
                  <div>
                    <div class="LFSP-vfeat-title">Material premium comprobado</div>
                    <div class="LFSP-vfeat-desc">PVC arriba, goma EVA en el medio y base de velcro. No se deforma ni destiñe.</div>
                  </div>
                </div>
                <div class="LFSP-vfeat">
                  <div class="LFSP-vfeat-icon"><i class="fa-solid fa-ruler-combined"></i></div>
                  <div>
                    <div class="LFSP-vfeat-title">Calce milimétrico verificado</div>
                    <div class="LFSP-vfeat-desc">Escaneo láser 3D por modelo. Cada alfombra diseñada exclusivamente para tu vehículo.</div>
                  </div>
                </div>
                <div class="LFSP-vfeat">
                  <div class="LFSP-vfeat-icon"><i class="fa-brands fa-whatsapp"></i></div>
                  <div>
                    <div class="LFSP-vfeat-title">Atención personalizada</div>
                    <div class="LFSP-vfeat-desc">Te asesoramos por WhatsApp antes y después de la compra.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>`;
  }

  function buildGallerySection() {
    var slides = '';
    var dots = '';
    for (var i = 0; i < 8; i++) {
      var src = 'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/testimonio' + (i + 1) + '.jfif';
      slides += '<div class="LFSP-sc-slide" data-index="' + i + '"><img src="' + src + '" alt="Testimonio de cliente verificado ' + (i + 1) + '" loading="lazy"></div>';
      dots += '<button class="LFSP-sc-dot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '"></button>';
    }

    return `
      <section class="LFSP-section LFSP-section--alt">
        <div class="LFSP-inner">
          <div class="LFSP-gallery-head LFSP-reveal">
            <div>
              <p class="LFSP-label">Opiniones verificadas</p>
              <div class="LFSP-gold-line"></div>
              <h2 class="LFSP-sec-title">Lo que dicen nuestros clientes</h2>
              <p class="LFSP-sec-sub">Capturas reales de compradores que ya transformaron el interior de su auto.</p>
            </div>
            <div class="LFSP-verified-badge">
              <i class="fa-solid fa-circle-check"></i>
              Compradores verificados
            </div>
          </div>
          <div class="LFSP-sc-wrap LFSP-reveal LFSP-d1">
            <div class="LFSP-sc-viewport" id="LFSP-sc-viewport">
              <div class="LFSP-sc-track" id="LFSP-sc-track">
                ${slides}
              </div>
            </div>
            <div class="LFSP-sc-controls">
              <button class="LFSP-sc-arrow" id="LFSP-sc-prev">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <div class="LFSP-sc-dots" id="LFSP-sc-dots">${dots}</div>
              <button class="LFSP-sc-arrow" id="LFSP-sc-next">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>`;
  }

  function buildHTML() {
    return `
      <div id="LFSP-wrapper">

        ${buildVideosSection()}
        ${buildGallerySection()}

        <!-- Modal de video (con sonido) -->
        <div class="LFSP-vmodal" id="LFSP-vmodal">
          <div class="LFSP-vmodal-backdrop" id="LFSP-vmodal-bg"></div>
          <div class="LFSP-vmodal-content">
            <button class="LFSP-vmodal-close" id="LFSP-vmodal-close">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <video class="LFSP-vmodal-video" id="LFSP-vmodal-video" controls playsinline></video>
          </div>
        </div>

        <!-- Lightbox de capturas -->
        <div class="LFSP-lightbox" id="LFSP-lightbox">
          <div class="LFSP-lightbox-backdrop" id="LFSP-lb-bg"></div>
          <button class="LFSP-lb-nav LFSP-lb-prev" id="LFSP-lb-prev">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <div class="LFSP-lightbox-content">
            <button class="LFSP-lb-close" id="LFSP-lb-close">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <img class="LFSP-lb-img" id="LFSP-lb-img" src="" alt="">
          </div>
          <button class="LFSP-lb-nav LFSP-lb-next" id="LFSP-lb-next">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>

      </div>`;
  }

  /* ── INTERACTIVIDAD ──────────────────────────────────────────────────── */

  function setupVideoCarousel() {
    var srcs = [
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/cliente1.mp4',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/cliente2.mp4',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/cliente3.mp4',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/cliente4.mp4',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/cliente5.mp4'
    ];
    var n = srcs.length;

    var prevSlot   = document.getElementById('LFSP-prev-slot');
    var mainSlot   = document.getElementById('LFSP-main-slot');
    var nextSlot   = document.getElementById('LFSP-next-slot');
    var dotsWrap   = document.getElementById('LFSP-vcar-dots');
    var modal      = document.getElementById('LFSP-vmodal');
    var modalBg    = document.getElementById('LFSP-vmodal-bg');
    var modalVid   = document.getElementById('LFSP-vmodal-video');
    var modalClose = document.getElementById('LFSP-vmodal-close');
    var prevBtn    = document.getElementById('LFSP-vcar-prev');
    var nextBtn    = document.getElementById('LFSP-vcar-next');

    if (!prevSlot || !mainSlot || !nextSlot || !modal || modal.dataset.lfinit) return;
    modal.dataset.lfinit = '1';

    var current = 0;
    var dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.LFSP-vcar-dot')) : [];

    function idx(i) { return ((i % n) + n) % n; }

    function setSlot(slot, src, autoplay) {
      var vid = slot.querySelector('video');
      if ((vid.getAttribute('src') || '') !== src) { vid.setAttribute('src', src); vid.load(); }
      if (autoplay) vid.play().catch(function () {});
      else vid.pause();
    }

    function go(i) {
      current = idx(i);
      mainSlot.classList.add('LFSP-switching');
      setTimeout(function () { mainSlot.classList.remove('LFSP-switching'); }, 280);
      setSlot(prevSlot, srcs[idx(current - 1)], false);
      setSlot(mainSlot, srcs[current], true);
      setSlot(nextSlot, srcs[idx(current + 1)], false);
      dots.forEach(function (dot, j) { dot.classList.toggle('active', j === current); });
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { go(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(current + 1); });
    prevSlot.addEventListener('click', function () { go(current - 1); });
    nextSlot.addEventListener('click', function () { go(current + 1); });

    if (dotsWrap) {
      dotsWrap.addEventListener('click', function (e) {
        var btn = e.target.closest('.LFSP-vcar-dot');
        if (btn) go(parseInt(btn.dataset.i, 10));
      });
    }

    mainSlot.addEventListener('click', function () {
      modalVid.src = srcs[current];
      modalVid.load();
      modalVid.play().catch(function () {});
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    function closeVideoModal() {
      modal.classList.remove('active');
      modalVid.pause(); modalVid.src = '';
      document.body.style.overflow = '';
    }
    if (modalBg)    modalBg.addEventListener('click', closeVideoModal);
    if (modalClose) modalClose.addEventListener('click', closeVideoModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) closeVideoModal();
    });

    var swipeStartX = 0;
    var carRow = document.getElementById('LFSP-vcar-row');
    if (carRow) {
      carRow.addEventListener('touchstart', function (e) { swipeStartX = e.touches[0].clientX; }, { passive: true });
      carRow.addEventListener('touchend', function (e) {
        var dx = swipeStartX - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 40) go(dx > 0 ? current + 1 : current - 1);
      }, { passive: true });
    }

    go(0);
  }

  function setupScreenshotCarousel() {
    var viewport = document.getElementById('LFSP-sc-viewport');
    var track    = document.getElementById('LFSP-sc-track');
    var dotsWrap = document.getElementById('LFSP-sc-dots');
    var prevBtn  = document.getElementById('LFSP-sc-prev');
    var nextBtn  = document.getElementById('LFSP-sc-next');
    var lightbox = document.getElementById('LFSP-lightbox');
    var lbBg     = document.getElementById('LFSP-lb-bg');
    var lbImg    = document.getElementById('LFSP-lb-img');
    var lbClose  = document.getElementById('LFSP-lb-close');
    var lbPrev   = document.getElementById('LFSP-lb-prev');
    var lbNext   = document.getElementById('LFSP-lb-next');

    if (!track || !viewport || track.dataset.lfinit) return;
    track.dataset.lfinit = '1';

    var images = [
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/testimonio1.jfif',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/testimonio2.jfif',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/testimonio3.jfif',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/testimonio4.jfif',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/testimonio5.jfif',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/testimonio6.jfif',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/testimonio7.jfif',
      'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/testimonio8.jfif'
    ];
    var n = images.length;
    var current = 0;
    var lbCurrent = 0;
    var timer;
    var dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.LFSP-sc-dot')) : [];

    function go(i) {
      current = ((i % n) + n) % n;
      track.style.transform = 'translateX(-' + (current * viewport.offsetWidth) + 'px)';
      dots.forEach(function (d, j) { d.classList.toggle('active', j === current); });
    }

    function tick()  { go(current + 1); }
    function start() { timer = setInterval(tick, 3500); }
    function stop()  { clearInterval(timer); }

    if (prevBtn) prevBtn.addEventListener('click', function () { stop(); go(current - 1); start(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { stop(); go(current + 1); start(); });

    if (dotsWrap) {
      dotsWrap.addEventListener('click', function (e) {
        var dot = e.target.closest('.LFSP-sc-dot');
        if (dot) { stop(); go(parseInt(dot.dataset.i, 10)); start(); }
      });
    }

    var swipeX = 0;
    viewport.addEventListener('touchstart', function (e) { swipeX = e.touches[0].clientX; stop(); }, { passive: true });
    viewport.addEventListener('touchend', function (e) {
      var dx = swipeX - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) go(dx > 0 ? current + 1 : current - 1);
      start();
    }, { passive: true });

    track.addEventListener('click', function (e) {
      var slide = e.target.closest('.LFSP-sc-slide');
      if (!slide) return;
      openLightbox(parseInt(slide.dataset.index, 10));
    });

    function openLightbox(i) {
      lbCurrent = ((i % n) + n) % n;
      if (lbImg) lbImg.src = images[lbCurrent];
      if (lightbox) { lightbox.classList.add('active'); document.body.style.overflow = 'hidden'; }
    }

    function closeLightbox() {
      if (lightbox) lightbox.classList.remove('active');
      if (lbImg) lbImg.src = '';
      document.body.style.overflow = '';
    }

    if (lbBg)    lbBg.addEventListener('click', closeLightbox);
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev)  lbPrev.addEventListener('click', function () { openLightbox(lbCurrent - 1); });
    if (lbNext)  lbNext.addEventListener('click', function () { openLightbox(lbCurrent + 1); });

    document.addEventListener('keydown', function (e) {
      if (!lightbox || !lightbox.classList.contains('active')) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  openLightbox(lbCurrent - 1);
      if (e.key === 'ArrowRight') openLightbox(lbCurrent + 1);
    });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { go(current); }, 150);
    });

    go(0);
    start();
  }

  function setupScrollReveal() {
    var els = document.querySelectorAll('#LFSP-wrapper .LFSP-reveal');
    if (!els.length) return;

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('LFSP-vis'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
      els.forEach(function (el) { obs.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('LFSP-vis'); });
    }
  }

  /* ── INIT ────────────────────────────────────────────────────────────── */
  function init() {
    if (!document.querySelector('.section-featured-home')) return;
    if (document.getElementById('LFSP-wrapper')) return;

    var target = document.querySelector('.section-featured-home');
    if (!target) return;

    target.insertAdjacentHTML('afterend', buildHTML());

    requestAnimationFrame(function () {
      setupScrollReveal();
      setupVideoCarousel();
      setupScreenshotCarousel();
    });

    console.log('[Luxury Floor Social Proof] ✅ OK');
  }

  /* ── OBSERVER (SPA) ──────────────────────────────────────────────────── */
  function initObserver() {
    if (document.getElementById('LFSP-wrapper')) return;
    var obs = new MutationObserver(function (_, observer) {
      if (document.querySelector('.section-featured-home') && !document.getElementById('LFSP-wrapper')) {
        init();
        if (document.getElementById('LFSP-wrapper')) observer.disconnect();
      }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { obs.disconnect(); }, 15000);
  }

  /* ── BOOTSTRAP ───────────────────────────────────────────────────────── */
  injectResources();
  injectStyles();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); initObserver(); });
  } else {
    init();
    initObserver();
  }

  if (typeof LS !== 'undefined' && LS.ready) {
    LS.ready
      .then(function () { if (!document.getElementById('LFSP-wrapper')) init(); })
      .catch(function (e) { console.warn('[LFSP] LS.ready error:', e); });
  }

})();
