// Ahora necesito que modifiques el boton de whatsapp y el cta para que tengan un background similar a la tarjeta de transferencia.

// Y tambien necesito que la seccion de imagenes al scrollear te siga, hasta terminar de ver la descripcion.

// En mobil hace que el "#single-product > div" que tenga mt-0 y p-4 (hacelo con js ya que actualmente esta con importante y lo tengo que sobrescribir)

(function () {
  'use strict';

  const CONFIG = {
    productUrl: '/productos/',
    primaryColor:   '#C8A951',
    primaryDark:    '#A8873A',
    goldLight:      '#2A2110',
    textDark:       '#F0F0F0',
    textLight:      '#AAAAAA',
    rating:      4.9,
    reviewCount: 127,
    cuotas:      3,
    gocuotasCuotas: 4, // GOcuotas permite hasta 4 cuotas con débito
    whatsappNumber: '5491132058419',
    whatsappText:   'Hola! Me interesa recibir atención personalizada sobre uno de sus productos.',
    transferDiscount: 5,
    imgTruck:  'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/93.png',
    imgReview: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/94.png',
    price: 0, originalPrice: 0, discount: 0,

    dropdownBenefits: [
      {
        icon: 'fa-solid fa-layer-group',
        title: '3 capas de materiales premium',
        type: 'layers',
        layers: [
          { img: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/cc9b60eb-1313-4c6c-b5a0-2fb89339a0ab.png', name: 'Capa Superior: PVC', desc: 'PVC con relieve, impermeable y fácil de lavar. Lleva chapa de metal en el apoyapiés del conductor.' },
          { img: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/0af98a08-ca60-47be-8607-d59dbb956d36.png', name: 'Capa Intermedia: EVA', desc: 'Goma EVA que le da cuerpo a la alfombra y sostiene la forma del piso de tu vehículo.' },
          { img: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/68bb6e03-42d7-4869-8425-57769c1a33de.png', name: 'Base: Velcro', desc: 'Base de velcro que se agarra al piso del auto para que la alfombra no se corra.' }
        ]
      },
      {
        icon: 'fa-solid fa-microchip',
        title: 'Ingeniería en cada detalle',
        content: 'Cada alfombra Luxury Floor es el resultado de un proceso de ingeniería preciso: tomamos las medidas exactas del piso de cada modelo de vehículo y con ellas fabricamos la alfombra. El resultado es un calce milimétrico que cubre cada rincón, sin espacios ni solapamientos. Los bordes están termoformados y sellados para evitar que la suciedad se acumule debajo.'
      },
      {
        icon: 'fa-solid fa-images',
        title: 'Antes y Después',
        content: 'Mirá lo que es el cambio. Antes: tapizados genéricos que se desplazan, no cubren bien los bordes y se manchan con facilidad. Después: tu auto con alfombras que parecen de fábrica, con un interior limpio, protegido y de nivel premium. Más de 1500 clientes ya tienen su Luxury Floor — el tuyo puede ser el siguiente.'
      },
      {
        icon: 'fa-solid fa-users',
        title: 'Más de 1500 clientes avalan nuestra calidad y servicio',
        content: 'Con más de 1500 clientes satisfechos en todo el país y más de un año en el mercado, Luxury Floor es la elección de quienes quieren proteger y elevar el interior de su auto. Envíos a todo el país y atención personalizada por WhatsApp.'
      },
      {
        icon: 'fa-solid fa-star',
        title: '¿Por qué elegir unas alfombras Luxury Floor?',
        content: '✓ Calce milimétrico por modelo — no es genérico\n✓ 100% impermeables — cualquier líquido queda contenido\n✓ Instalación en segundos sin herramientas\n✓ Limpieza en segundos con un paño húmedo\n✓ Refuerzo extra en la zona del conductor\n✓ Envío a todo el país con seguimiento'
      }
    ],

    keyFeatures: [
      { icon: 'fa-solid fa-ruler-combined', title: 'Calce milimétrico', text: 'A medida cada detalle' },
      { icon: 'fa-solid fa-droplet-slash',  title: 'Impermeable',       text: 'Protege tu auto de los líquidos' },
      { icon: 'fa-solid fa-shield-halved',  title: 'Alta resistencia',  text: 'Dura años' },
      { icon: 'fa-solid fa-broom',          title: 'Fácil limpieza',    text: 'Con solo un paño húmedo' }
    ],

    faqs: [
      { icon: 'fa-solid fa-ruler-combined', question: '¿Cómo garantizan el calce?',          answer: 'Cada alfombra se fabrica con las medidas exactas del piso de tu modelo. Está hecha exclusivamente para tu auto, no es genérica.' },
      { icon: 'fa-solid fa-droplet',        question: '¿Qué pasa si se derrama un líquido?', answer: 'La superficie 100% impermeable contiene el líquido sin filtrarse. Simplemente retirá la alfombra, volcá el líquido y limpiala con un paño húmedo.' },
      { icon: 'fa-solid fa-truck-fast',     question: '¿Cuánto demora el envío?',            answer: 'Enviamos a todo el país. CABA y GBA: 24 a 48hs. Interior: 3 a 5 días hábiles. Todos los envíos incluyen seguimiento en tiempo real.' },
      { icon: 'fa-solid fa-credit-card',    question: '¿Puedo pagar en cuotas?',             answer: 'Sí. Con tarjeta de débito pagás hasta 4 cuotas sin interés con GOcuotas. Con tarjeta de crédito pagás en cuotas: el interés lo ves antes de confirmar el pago. Si pagás por transferencia tenés 5% de descuento.' }
    ],

    selectors: {
      toHide: [
        '.breadcrumbs',
        '.js-product-name',
        '.js-price-container',
        '.js-product-form',
        '.js-product-payments-container',
        '.price-container',
        '[data-store^="product-price-"]',
        '[data-store^="product-form-"]'
      ],
      addToCart: [
        'input[type="submit"].js-addtocart.js-prod-submit-form',
        '.js-addtocart',
        '[data-component="product.add-to-cart"]'
      ]
    }
  };

  const DOMCache = {
    productContainer: null,
    wrapper: null,
    init() {
      this.productContainer = document.querySelector('[data-store^="product-info-"]');
      this.wrapper = document.querySelector('.LF-wrapper');
    },
    refresh() { this.wrapper = document.querySelector('.LF-wrapper'); }
  };

  function isTargetProduct() {
    return window.location.pathname.includes(CONFIG.productUrl) ||
           !!document.querySelector('[data-store^="product-info-"]');
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency', currency: 'ARS',
      minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
  }

  function getProductName() {
    try { if (window.LS && window.LS.product && window.LS.product.name) return window.LS.product.name; } catch (e) {}
    const el = document.querySelector('[data-store^="product-name-"]');
    return el ? el.textContent.trim() : '';
  }

  function getDynamicPrices() {
    try {
      if (window.LS && window.LS.product) {
        const p = window.LS.product;
        const v = p.variants && p.variants[0];
        const price   = (v && v.price)           || p.price;
        const compare = (v && v.compare_at_price) || p.compare_at_price || 0;
        if (price && price > 0) {
          return { price, originalPrice: compare, discount: compare > price ? Math.round((1 - price / compare) * 100) : 0 };
        }
      }
    } catch (e) {}
    try {
      const el = document.querySelector('[data-product-price]');
      if (el) { const raw = parseInt(el.getAttribute('data-product-price') || '0', 10); if (raw > 0) return { price: raw / 100, originalPrice: 0, discount: 0 }; }
    } catch (e) {}
    try {
      const el = document.querySelector('.js-price-display');
      if (el) {
        const raw = el.textContent.replace(/\./g, '').replace(',', '.').replace(/[^0-9.]/g, '');
        const parsed = parseFloat(raw);
        if (!isNaN(parsed) && parsed > 0) return { price: parsed, originalPrice: 0, discount: 0 };
      }
    } catch (e) {}
    return { price: CONFIG.price, originalPrice: CONFIG.originalPrice, discount: CONFIG.discount };
  }

  function calcDisplayPrices(price, origPrice, disc) {
    if (origPrice > 0 && disc > 0) return { origPrice, disc };
    return { origPrice: 0, disc: 0 };
  }

  function fixImageGallery() {
    const imgStore = document.querySelector('[data-store^="product-image-"]');
    if (!imgStore || imgStore.dataset.lfImg === '1') return;
    imgStore.dataset.lfImg = '1';

    const leftCol = imgStore.querySelector('.col-md-auto');
    if (leftCol) leftCol.style.cssText = 'display: none !important;';

    const mainCol = imgStore.querySelector('.col.px-3');
    if (mainCol) {
      mainCol.style.cssText = 'flex: 0 0 100% !important; max-width: 100% !important; padding: 0 !important;';
    }

    const thumbLinks = imgStore.querySelectorAll('.js-product-thumb');
    if (thumbLinks.length > 1 && mainCol) {
      const strip = document.createElement('div');
      strip.className = 'LF-thumb-strip';
      strip.id = 'LF-thumb-strip';

      thumbLinks.forEach((thumbLink, i) => {
        const img = thumbLink.querySelector('img');
        if (!img) return;
        const srcset = img.getAttribute('srcset') || img.getAttribute('data-srcset') || '';
        let src = srcset ? srcset.split(',')[0].trim().split(' ')[0] : '';
        if (!src || src.includes('empty-placeholder')) src = img.src || '';

        const btn = document.createElement('div');
        btn.className = 'LF-thumb-btn' + (i === 0 ? ' LF-thumb-active' : '');
        btn.dataset.thumbIndex = String(i);
        if (src && !src.includes('empty-placeholder')) btn.style.backgroundImage = `url(${src})`;

        btn.addEventListener('click', () => {
          thumbLink.click();
          document.querySelectorAll('#LF-thumb-strip .LF-thumb-btn').forEach(b => b.classList.remove('LF-thumb-active'));
          btn.classList.add('LF-thumb-active');
        });
        strip.appendChild(btn);
      });

      const swiperEl = mainCol.querySelector('.js-swiper-product');
      if (swiperEl) swiperEl.insertAdjacentElement('afterend', strip);
      else mainCol.appendChild(strip);

      const swiper = imgStore.querySelector('.js-swiper-product');
      if (swiper) {
        new MutationObserver(() => {
          const activeSlide = swiper.querySelector('.swiper-slide-active');
          if (!activeSlide) return;
          const pos = parseInt(activeSlide.dataset.imagePosition || '0', 10);
          document.querySelectorAll('#LF-thumb-strip .LF-thumb-btn').forEach((b, i) => b.classList.toggle('LF-thumb-active', i === pos));
        }).observe(swiper, { subtree: true, attributes: true, attributeFilter: ['class'] });
      }
    }

    const mobileNav = imgStore.querySelector('.js-swiper-product-pagination');
    if (mobileNav) { const row = mobileNav.closest('.row'); if (row) row.style.cssText = 'display:none!important;'; }
  }

  function preconnectResources() {
    [{ href: 'https://cdnjs.cloudflare.com' }].forEach(r => {
      if (document.querySelector(`link[href="${r.href}"]`)) return;
      const l = document.createElement('link'); l.rel = 'preconnect'; l.href = r.href;
      document.head.appendChild(l);
    });
  }

  function hideOriginalElementsImmediately() {
    if (!isTargetProduct() || document.getElementById('LF-critical-hide')) return;
    const s = document.createElement('style');
    s.id = 'LF-critical-hide';
    s.textContent = CONFIG.selectors.toHide.join(',\n') + `{ visibility:hidden!important;height:0!important;overflow:hidden!important;opacity:0!important; }`;
    document.head.insertBefore(s, document.head.firstChild);
  }

  function hideOriginalElements() {
    if (!isTargetProduct()) return;
    CONFIG.selectors.toHide.forEach(sel => {
      try { document.querySelectorAll(sel).forEach(el => { if (el && el.style) el.style.cssText = 'display:none!important;'; }); } catch (e) {}
    });
  }

  function injectStyles() {
    if (document.getElementById('LF-product-styles')) return;
    const fa = document.createElement('link');
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    fa.rel = 'stylesheet'; fa.crossOrigin = 'anonymous';
    if (!document.querySelector('link[href*="font-awesome"]')) document.head.appendChild(fa);
    const s = document.createElement('style'); s.id = 'LF-product-styles'; s.textContent = getStyles();
    document.head.appendChild(s);
  }

  function getStyles() {
    const p = CONFIG.primaryColor, pd = CONFIG.primaryDark, td = CONFIG.textDark, tl = CONFIG.textLight, gl = CONFIG.goldLight;
    return `
      /* ── LAYOUT DESKTOP #single-product ─────────── */
      #single-product { background: #000 !important; }
      #single-product > .container > .row {
        display: flex !important; flex-wrap: wrap !important; align-items: flex-start !important;
      }
      @media (min-width: 768px) {
        #single-product > .container > .row > .col-md-7 {
          flex: 0 0 58.333333% !important; max-width: 58.333333% !important;
          position: sticky !important; top: 20px !important; align-self: flex-start !important;
        }
        #single-product > .container > .row > [data-store^="product-info-"] {
          flex: 0 0 41.666667% !important; max-width: 41.666667% !important;
        }
      }
      @media (max-width: 767px) {
        #single-product > .container > .row > .col-md-7,
        #single-product > .container > .row > [data-store^="product-info-"] {
          flex: 0 0 100% !important; max-width: 100% !important;
        }
      }

      /* ── IMAGEN 1:1 + border-radius ──────────────── */
      .js-product-slide-link { padding-bottom: 100% !important; }
      .product-slider-image  { border-radius: 16px !important; overflow: hidden !important; }
      [data-store^="product-image-"] .row { margin: 0 !important; }

      /* ── THUMBNAILS ABAJO ────────────────────────── */
      .LF-thumb-strip {
        display: flex; gap: 8px; padding-top: 20px; justify-content: center; flex-wrap: wrap;
      }
      .LF-thumb-btn {
        width: 100px; height: 100px; border-radius: 16px;
        background-size: cover; background-position: center; background-color: #1A1A1A;
        border: 2px solid #333; cursor: pointer; transition: border-color 0.2s, transform 0.15s; flex-shrink: 0;
      }
      .social-share-button{ display: none !important; }
      .LF-thumb-btn:hover { transform: scale(1.06); border-color: ${p}; }
      .LF-thumb-btn.LF-thumb-active { border-color: ${p}; box-shadow: 0 0 0 1px ${p}; }
      @media (max-width: 768px) { .LF-thumb-btn { width: 50px; height: 50px; } }

      /* ── WRAPPER ─────────────────────────────────── */
      .LF-wrapper * { box-sizing: border-box; margin: 0; padding: 0; }
      .LF-wrapper {
        max-width: 100%; padding: 0; margin: 0 0 20px;
        opacity: 0; animation: LF-fadeIn 0.4s ease forwards;
      }
      @keyframes LF-fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }

      /* ── STARS ───────────────────────────────────── */
      .LF-reviews { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
      .LF-stars   { display: flex; gap: 2px; color: ${p}; font-size: 16px; }
      .LF-rating-text  { font-size: 15px; font-weight: 600; color: ${td}; }
      .LF-review-count { font-size: 13px; color: ${tl}; }

      /* ── TITLE ───────────────────────────────────── */
      .LF-title-row { display: flex; align-items: flex-start; gap: 10px; flex-wrap: wrap; margin-bottom: 8px; }
      .LF-product-title { font-size: 26px; font-weight: 800; color: ${td}; line-height: 1.25; letter-spacing: -0.4px; flex: 1; min-width: 0; }
      .LF-premium-badge {
        display: inline-flex; align-items: center;
        background: linear-gradient(135deg, ${p}, ${pd}); color: #1A1A1A;
        font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px;
        padding: 4px 10px; border-radius: 16px; white-space: nowrap; flex-shrink: 0;
        align-self: center; box-shadow: 0 2px 8px rgba(200,169,81,0.35);
      }
      .LF-subtitle { font-size: 14px; color: ${tl}; margin-bottom: 14px; font-weight: 400; line-height: 1.55; }

      /* ── BENEFIT CARDS ───────────────────────────── */
      .LF-benefit-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px; }
      .LF-benefit-card {
        background: #111; border: 1px solid #2A2A2A; border-radius: 16px;
        padding: 14px 12px; display: flex; align-items: center; gap: 10px; transition: border-color 0.2s;
      }
      .LF-benefit-card:hover { border-color: #3A3A3A; }
      .LF-benefit-card-img { width: 44px; height: 44px; object-fit: contain; flex-shrink: 0; }
      .LF-benefit-card-title { font-size: 12px; font-weight: 700; color: ${td}; margin-bottom: 3px; line-height: 1.3; }
      .LF-benefit-card-desc  { font-size: 11px; color: ${tl}; line-height: 1.4; }
      @media (max-width: 480px) { .LF-benefit-cards { grid-template-columns: 1fr; gap: 8px; } }

      /* ── PRECIO BLOCK ────────────────────────────── */
      .LF-price-block {
        display: flex; flex-direction: column; gap: 8px; margin: 8px 0 16px;
      }
      .LF-pb-main {
        display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        padding: 12px 14px; border-radius: 14px;
        background: #111; border: 1px solid #1E1E1E;
      }
      .LF-pb-main-icon {
        width: 38px; height: 38px; flex-shrink: 0; border-radius: 50%;
        background: #1A1A1A; display: flex; align-items: center; justify-content: center;
      }
      .LF-pb-main-icon i { color: ${p}; font-size: 15px; }
      .LF-pb-main-content { flex: 1; }
      .LF-pb-main-label { font-size: 11px; font-weight: 600; color: #777; margin-bottom: 4px; }
      .LF-pb-main-vals { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
      .LF-pb-price { font-size: 22px; font-weight: 800; color: ${td}; letter-spacing: -0.5px; }
      .LF-pb-original { font-size: 16px; color: #555; text-decoration: line-through; font-weight: 400; }
      .LF-pb-price-loading { font-size: 20px; font-weight: 500; color: ${tl}; font-style: italic; }
      .LF-pb-row {
        display: flex; align-items: center; gap: 12px;
        padding: 12px 14px; border-radius: 14px;
      }
      .LF-pb-row--cuotas { background: #111; border: 1px solid #1E1E1E; }
      .LF-pb-row--transfer {
        background: linear-gradient(135deg, #062818 0%, #0a3520 100%);
        border: 1.5px solid #22c55e;
      }
      .LF-pb-row-icon {
        width: 38px; height: 38px; flex-shrink: 0; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
      }
      .LF-pb-row--cuotas .LF-pb-row-icon { background: #1A1A1A; }
      .LF-pb-row--cuotas .LF-pb-row-icon i { color: ${p}; font-size: 15px; }
      .LF-pb-row--transfer .LF-pb-row-icon { background: rgba(34,197,94,0.15); }
      .LF-pb-row--transfer .LF-pb-row-icon i { color: #22c55e; font-size: 15px; }
      .LF-pb-row-content { flex: 1; }
      .LF-pb-row-label { font-size: 11px; font-weight: 600; margin-bottom: 2px; }
      .LF-pb-row--cuotas .LF-pb-row-label { color: #777; }
      .LF-pb-row--transfer .LF-pb-row-label { color: #86efac; }
      .LF-pb-row-note { font-size: 12px; color: #9CA3AF; margin-top: 2px; }
      .LF-pb-free { display: flex; align-items: center; gap: 12px; padding: 12px 16px; margin-bottom: 8px; border-radius: 14px; background: linear-gradient(135deg, #2A2110 0%, #1A1408 100%); border: 1px solid ${p}; }
      .LF-pb-free i { color: ${p}; font-size: 20px; }
      .LF-pb-free strong { display: block; color: #E6C978; font-size: 17px; font-weight: 800; letter-spacing: .2px; line-height: 1.1; text-transform: uppercase; }
      .LF-pb-free span { color: #CFC6B4; font-size: 12px; }
      .LF-pb-row-val { font-size: 18px; font-weight: 800; line-height: 1.2; }
      .LF-pb-row--cuotas .LF-pb-row-val { color: ${td}; }
      .LF-pb-row--transfer .LF-pb-row-val { color: #4ade80; font-size: 34px; letter-spacing: -0.5px; }
      .LF-pb-badge {
        font-size: 11px; font-weight: 800; letter-spacing: 0.5px;
        padding: 3px 9px; border-radius: 8px; white-space: nowrap; flex-shrink: 0;
      }
      .LF-pb-row--transfer .LF-pb-badge { font-size: 20px; background: #22c55e; color: #062818; }
      .LF-pb-badge--price { background: ${p}; color: #1A1A1A; display: none; }
      @media (max-width: 768px) { .LF-pb-row--transfer .LF-pb-row-val { font-size: 24px; } }
      @media (max-width: 480px) {
        .LF-pb-row { padding: 10px 12px; gap: 10px; }
        .LF-pb-row-val { font-size: 16px; }
        .LF-pb-row--transfer .LF-pb-row-val { font-size: 22px; }
      }

      /* ── DROPDOWN BENEFITS ───────────────────────── */
      .LF-dropdown-benefits { margin: 20px 0; }
      .LF-db-item { border: 1px solid #1E1E1E; border-radius: 16px; margin-bottom: 8px; overflow: hidden; background: #0D0D0D; }
      .LF-db-header { display: flex; justify-content: space-between; align-items: center; padding: 16px; cursor: pointer; transition: background 0.2s; gap: 10px; }
      .LF-db-header:hover { background: #111; }
      .LF-db-header-left { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }
      .LF-db-icon { width: 36px; height: 36px; background: ${gl}; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
      .LF-db-icon i { color: ${p}; font-size: 15px; }
      .LF-db-title { font-size: 14px; font-weight: 600; color: ${td}; line-height: 1.3; }
      .LF-db-chevron { color: ${tl}; font-size: 13px; transition: transform 0.25s; flex-shrink: 0; }
      .LF-db-item.active .LF-db-chevron { transform: rotate(180deg); }
      .LF-db-body { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; }
      .LF-db-item.active .LF-db-body { max-height: 900px; }
      .LF-db-body-content { padding: 4px 16px 16px; font-size: 13px; color: ${tl}; line-height: 1.7; white-space: pre-line; }
      .LF-layers-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; white-space: normal; }
      .LF-layer-card { background: #111; border: 1px solid #222; border-radius: 12px; overflow: hidden; text-align: center; }
      .LF-layer-card img { width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block; }
      .LF-layer-card-placeholder { width: 100%; aspect-ratio: 1/1; background: #1A1A1A; display: flex; align-items: center; justify-content: center; }
      .LF-layer-card-placeholder i { color: #333; font-size: 28px; }
      .LF-layer-card-info { padding: 8px 6px; }
      .LF-layer-name { font-size: 11px; font-weight: 700; color: ${td}; margin-bottom: 3px; }
      .LF-layer-desc { font-size: 10px; color: ${tl}; line-height: 1.4; }
      @media (max-width: 480px) { .LF-layers-grid { gap: 6px; } .LF-layer-card-info { padding: 6px 4px; } }

      /* ── KEY FEATURES GRID (4 items) ─────────────── */
      .LF-key-features { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin: 20px 0; }
      .LF-key-feature-card {
        padding: 12px 6px; background: #111; border: 1px solid #222;
        border-radius: 16px; text-align: center; transition: all 0.2s;
      }
      .LF-key-feature-card:hover { border-color: ${p}; transform: translateY(-2px); }
      .LF-key-feature-icon { width: 40px; height: 40px; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; background: ${gl}; border-radius: 50%; }
      .LF-key-feature-icon i { color: ${p}; font-size: 16px; }
      .LF-key-feature-title { font-size: 10px; font-weight: 700; color: ${td}; margin-bottom: 2px; }
      .LF-key-feature-text  { font-size: 9px; color: ${tl}; }
      @media (max-width: 480px) { .LF-key-features { grid-template-columns: repeat(2,1fr); gap: 6px; } }

      /* ── STOCK ───────────────────────────────────── */
      .LF-stock-alert { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
      .LF-stock-dot   { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; animation: LF-pulse 2s ease-in-out infinite; }
      @keyframes LF-pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.5; transform:scale(1.35); } }
      .LF-stock-text  { font-size: 13px; font-weight: 600; color: #22c55e; }

      /* ── BOTÓN CARRITO ───────────────────────────── */
      .LF-add-to-cart {
        width: 100%; background: linear-gradient(
315deg, #6c581f 0%, #2a2110 100%);
        color: #e7e7e7; font-size: 16px; font-weight: 800;
        text-transform: uppercase; letter-spacing: 0.8px;
        padding: 18px; border: none; border-radius: 16px; cursor: pointer;
        transition: all 0.25s; margin: 12px 0 10px;
        box-shadow: 0 4px 15px rgba(200,169,81,0.35);
        display: flex; align-items: center; justify-content: center; gap: 10px;
      }
      .LF-add-to-cart:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(200,169,81,0.5); }
      .LF-add-to-cart:active { transform: translateY(0); }

      /* ── BOTÓN WHATSAPP ──────────────────────────── */
      .LF-whatsapp-btn {
        display: flex; align-items: center; justify-content: center; gap: 10px;
        width: 100%; padding: 16px 20px; background: linear-gradient(135deg, #062818 0%, #0a3520 100%); color: #fff !important;
        font-size: 15px; font-weight: 700;
        border: 1.5px solid #22c55e; border-radius: 16px; cursor: pointer;
        text-decoration: none !important; margin: 4px 0 16px;
        transition: all 0.25s; box-shadow: 0 4px 14px rgba(37,211,102,0.3); letter-spacing: 0.3px;
      }
      .LF-whatsapp-btn:hover { background: #1ebe5d; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,211,102,0.45); color: #fff !important; text-decoration: none !important; }
      .LF-whatsapp-btn:active { transform: translateY(0); }
      .LF-whatsapp-btn svg { flex-shrink: 0; }
      @media (max-width: 480px) { .LF-whatsapp-btn { font-size: 14px; padding: 14px 16px; } }

      /* ── TRUST BADGES ────────────────────────────── */
      .LF-trust-badges { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin: 8px 0 18px; padding: 14px; background: #0D0D0D; border-radius: 16px; border: 1px solid #1E1E1E; }
      .LF-trust-badge { display: flex; flex-direction: column; align-items: center; gap: 5px; }
      .LF-trust-badge i { color: ${p}; font-size: 18px; }
      .LF-trust-badge span { font-size: 11px; font-weight: 600; color: ${td}; text-align: center; line-height: 1.3; }
      @media (max-width: 480px) { .LF-trust-badges { grid-template-columns: repeat(2,1fr); } }

      /* ── TESTIMONIALS ────────────────────────────── */
      .LF-tsec { margin: 24px 0 20px; }
      .LF-tsec-title { font-size: 18px; font-weight: 700; color: ${td}; margin-bottom: 14px; }
      .LF-tvp { overflow: hidden; margin-bottom: 14px; }
      .LF-ttrack { display: flex; transition: transform 0.5s cubic-bezier(0.4,0,0.2,1); will-change: transform; }
      .LF-tslide { flex: 0 0 100%; min-width: 0; padding: 0 5px; box-sizing: border-box; }
      @media (min-width: 768px) { .LF-tslide { flex: 0 0 50%; } }
      .LF-tcard {
        background: #111; border: 1px solid #222; border-left: 3px solid ${p};
        border-radius: 16px; padding: 16px; position: relative; overflow: hidden; height: 100%;
      }
      .LF-tstars { display: flex; gap: 2px; color: ${p}; font-size: 12px; margin-bottom: 10px; }
      .LF-thead  { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
      .LF-tavatar {
        width: 42px; height: 42px; background: linear-gradient(135deg, ${p}, ${pd});
        color: #1A1A1A; border-radius: 50%; display: flex; align-items: center; justify-content: center;
        font-weight: 800; font-size: 13px; flex-shrink: 0;
      }
      .LF-tname  { font-size: 14px; font-weight: 700; color: ${td}; }
      .LF-tverif { font-size: 12px; color: #22c55e; font-weight: 500; margin-top: 2px; }
      .LF-tverif i { margin-right: 3px; }
      .LF-tbody  { font-size: 13px; color: #BBBBBB; line-height: 1.65; font-style: italic; }
      .LF-tquote { position: absolute; bottom: 10px; right: 12px; font-size: 26px; color: ${p}; opacity: 0.1; }
      .LF-tnav   { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 14px; }
      .LF-tnbtn  { width: 34px; height: 34px; background: #111; border: 1px solid #2A2A2A; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; color: ${td}; transition: all 0.2s; font-size: 13px; }
      .LF-tnbtn:hover { background: #1A1A1A; border-color: ${p}; color: ${p}; }
      .LF-tdots  { display: flex; gap: 6px; }
      .LF-tdot   { width: 8px; height: 8px; background: #333; border-radius: 50%; cursor: pointer; transition: all 0.25s; }
      .LF-tdot.active { background: ${p}; transform: scale(1.3); }

      /* ── FAQs ────────────────────────────────────── */
      .LF-faqs { margin: 28px 0; }
      .LF-faqs-title { font-size: 18px; font-weight: 700; color: ${td}; margin-bottom: 14px; }
      .LF-faq-item { border: 1px solid #1E1E1E; border-radius: 16px; margin-bottom: 8px; overflow: hidden; background: #0D0D0D; }
      .LF-faq-question { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; cursor: pointer; transition: background 0.2s; }
      .LF-faq-question:hover { background: #111; }
      .LF-faq-q-content { display: flex; align-items: center; gap: 10px; flex: 1; }
      .LF-faq-q-icon { color: ${p}; font-size: 15px; min-width: 18px; }
      .LF-faq-question span { font-size: 14px; font-weight: 600; color: ${td}; }
      .LF-faq-chevron { color: ${tl}; font-size: 13px; transition: transform 0.25s; flex-shrink: 0; }
      .LF-faq-item.active .LF-faq-chevron { transform: rotate(180deg); }
      .LF-faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
      .LF-faq-item.active .LF-faq-answer { max-height: 280px; }
      .LF-faq-answer-content { padding: 0 16px 16px 44px; font-size: 13px; color: ${tl}; line-height: 1.65; }
      @media (max-width: 480px) { .LF-faq-answer-content { padding-left: 16px; } }

      /* ── DIVIDER ─────────────────────────────────── */
      .LF-divider { border: none; border-top: 1px solid #1A1A1A; margin: 20px 0; }

      /* ── USER CONTENT ────────────────────────────── */
      .user-content, .user-content p, .user-content li, .user-content span, .user-content em, .user-content strong {
        color: #CCCCCC !important;
      }
      .user-content strong { color: #E0E0E0 !important; }
      .user-content a { color: ${p} !important; }
      #single-product > div{
        margin-top: 0 !important;
      }
      #LF-pb-main { display: none !important; }
    `;
  }

  /* Crédito: 3 cuotas según lo que informa Tienda Nube (Mercado Pago o Pago Nube).
     Si tiene interés, se muestra el valor de la cuota y el total con interés. */
  function creditVal(price) {
    try {
      var ve = document.querySelector('.js-product-container[data-variants]') || document.querySelector('[data-variants]');
      var v = ve && JSON.parse(ve.getAttribute('data-variants'));
      var d = v && v[0] && v[0].installments_data && JSON.parse(v[0].installments_data);
      var p = d && (d['Mercado Pago'] || d['Pago Nube']);
      var c = p && p[3];
      if (c) return '3 × ' + formatPrice(c.installment_value) + (c.without_interests ? ' sin interés' : ' (total ' + formatPrice(c.total_value) + ')');
    } catch (e) {}
    return 'Ver opciones al pagar';
  }

  /* Envío gratis: Tienda Nube pone la etiqueta "Envío gratis" en los productos que lo tienen activado
     (la de "superando $X" es otra y se ignora) */
  function hasFreeShipping() {
    return [].some.call(document.querySelectorAll('.js-shipping-label-private:not(.js-free-shipping-minimum-label)'), function (el) {
      return !el.closest('.js-item-product') && !el.classList.contains('hidden') && /gratis/i.test(el.textContent);
    });
  }

  function buildHTML() {
    const { price, originalPrice, discount } = getDynamicPrices();
    const productName = getProductName();
    const transferPrice = price > 0 ? Math.round(price * (1 - CONFIG.transferDiscount / 100)) : 0;
    const { origPrice: dispOriginal, disc: dispDiscount } = price > 0
      ? calcDisplayPrices(price, originalPrice, discount)
      : { origPrice: 0, disc: 0 };

    const stars = Array(5).fill(0).map((_, i) =>
      i < Math.floor(CONFIG.rating) ? '<i class="fa-solid fa-star"></i>' :
      (i < CONFIG.rating ? '<i class="fa-solid fa-star-half-stroke"></i>' : '<i class="fa-regular fa-star"></i>')
    ).join('');

    const transferVal = price > 0 ? formatPrice(transferPrice) : '—';
    const cuotasVal   = price > 0 ? creditVal(price) : '—';
    const debitoVal   = (CONFIG.gocuotasCuotas > 1 && price > 0) ? 'Hasta ' + CONFIG.gocuotasCuotas + ' × ' + formatPrice(price / CONFIG.gocuotasCuotas) + ' sin interés' : 'Sin interés';

    const priceRowInner = price > 0
      ? `<div class="LF-pb-main-icon"><i class="fa-solid fa-tag"></i></div>
         <div class="LF-pb-main-content">
           <div class="LF-pb-main-label">Precio efectivo / débito</div>
           <div class="LF-pb-main-vals">
             <span class="LF-pb-price" id="LF-pb-price-val">${formatPrice(price)}</span>
             <span class="LF-pb-original" id="LF-pb-original-val">${formatPrice(dispOriginal)}</span>
           </div>
         </div>
         <span class="LF-pb-badge LF-pb-badge--price" id="LF-pb-discount-val">-${dispDiscount}%</span>`
      : `<span class="LF-pb-price-loading">Cargando precio...</span>`;

    const waUrl  = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappText)}`;
    const waIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

    const dropdownBenefitsHTML = CONFIG.dropdownBenefits.map(b => {
      let bodyContent;
      if (b.type === 'layers') {
        const layerCards = b.layers.map(l => `
          <div class="LF-layer-card">
            ${l.img
              ? `<img src="${l.img}" alt="${l.name}" loading="lazy">`
              : `<div class="LF-layer-card-placeholder"><i class="fa-solid fa-layer-group"></i></div>`
            }
            <div class="LF-layer-card-info">
              <div class="LF-layer-name">${l.name}</div>
              <div class="LF-layer-desc">${l.desc}</div>
            </div>
          </div>
        `).join('');
        bodyContent = `<div class="LF-layers-grid">${layerCards}</div>`;
      } else {
        bodyContent = b.content || '';
      }
      return `
        <div class="LF-db-item">
          <div class="LF-db-header">
            <div class="LF-db-header-left">
              <div class="LF-db-icon"><i class="${b.icon}"></i></div>
              <span class="LF-db-title">${b.title}</span>
            </div>
            <i class="fa-solid fa-chevron-down LF-db-chevron"></i>
          </div>
          <div class="LF-db-body">
            <div class="LF-db-body-content">${bodyContent}</div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="LF-wrapper">


        <div class="LF-title-row">
          <h1 class="LF-product-title">${productName || 'Alfombra Termoformada'}</h1>
          <span class="LF-premium-badge">PREMIUM</span>
        </div>

        <p class="LF-subtitle">Hechas a medida de tu modelo: calce milimétrico y 100% impermeables.</p>

        <div class="LF-benefit-cards">
          <div class="LF-benefit-card">
            <img class="LF-benefit-card-img" src="${CONFIG.imgReview}" alt="Hecha para tu modelo">
            <div>
              <div class="LF-benefit-card-title">Hecha para tu modelo</div>
              <div class="LF-benefit-card-desc">Fabricada con las medidas de tu auto para un calce exacto.</div>
            </div>
          </div>
          <div class="LF-benefit-card">
            <img class="LF-benefit-card-img" src="${CONFIG.imgTruck}" alt="Envíos a todo el país">
            <div>
              <div class="LF-benefit-card-title">Envíos a todo el país</div>
              <div class="LF-benefit-card-desc">Con seguimiento en tiempo real. CABA y GBA en 24–48hs.</div>
            </div>
          </div>
        </div>

        <div class="LF-price-block" id="LF-price-block">
          ${hasFreeShipping() ? `<div class="LF-pb-free"><i class="fa-solid fa-truck-fast"></i><div><strong>Envío gratis</strong><span>a todo el país</span></div></div>` : ''}
          <div class="LF-pb-row LF-pb-row--transfer">
            <div class="LF-pb-row-icon"><i class="fa-solid fa-building-columns"></i></div>
            <div class="LF-pb-row-content">
              <div class="LF-pb-row-label">Pagando por transferencia · 5% OFF</div>
              <div class="LF-pb-row-val" id="LF-pb-transfer-val">${transferVal}</div>
              <div class="LF-pb-row-note">${price > 0 ? 'Precio de lista ' + formatPrice(price) : ''}</div>
            </div>
          </div>
          <div class="LF-pb-row LF-pb-row--cuotas">
            <div class="LF-pb-row-icon"><i class="fa-solid fa-credit-card"></i></div>
            <div class="LF-pb-row-content">
              <div class="LF-pb-row-label">Tarjeta de débito en cuotas sin interés · GOcuotas</div>
              <div class="LF-pb-row-val" id="LF-pb-debito-val">${debitoVal}</div>
            </div>
          </div>
          <div class="LF-pb-row LF-pb-row--cuotas">
            <div class="LF-pb-row-icon"><i class="fa-regular fa-credit-card"></i></div>
            <div class="LF-pb-row-content">
              <div class="LF-pb-row-label">Tarjeta de crédito en cuotas · Mercado Pago</div>
              <div class="LF-pb-row-val" id="LF-pb-cuotas-val">${cuotasVal}</div>
            </div>
          </div>
          <div class="LF-pb-main" id="LF-pb-main">${priceRowInner}</div>
        </div>

        <div class="LF-dropdown-benefits" id="LF-dropdown-benefits">
          ${dropdownBenefitsHTML}
        </div>

        <div class="LF-key-features">
          ${CONFIG.keyFeatures.map(f => `
            <div class="LF-key-feature-card">
              <div class="LF-key-feature-icon"><i class="${f.icon}"></i></div>
              <div class="LF-key-feature-title">${f.title}</div>
              <div class="LF-key-feature-text">${f.text}</div>
            </div>
          `).join('')}
        </div>

        <hr class="LF-divider">

        <div class="LF-stock-alert">
          <span class="LF-stock-dot"></span>
          <span class="LF-stock-text">En stock — Listo para despachar hoy</span>
        </div>

        <button class="LF-add-to-cart" id="LF-add-to-cart">
          <i class="fa-solid fa-cart-shopping"></i> Agregar al Carrito
        </button>

        <a class="LF-whatsapp-btn" href="${waUrl}" target="_blank" rel="noopener noreferrer">
          ${waIcon} Atención personalizada por WhatsApp
        </a>

        <div class="LF-trust-badges">
          <div class="LF-trust-badge"><i class="fa-solid fa-ruler-combined"></i><span>Calce a medida</span></div>
          <div class="LF-trust-badge"><i class="fa-solid fa-lock"></i><span>Compra Segura</span></div>
          <div class="LF-trust-badge"><i class="fa-solid fa-truck-fast"></i><span>Envío Rápido</span></div>
          <div class="LF-trust-badge"><i class="fa-solid fa-star"></i><span>+1500 Clientes</span></div>
        </div>

        <div class="LF-tsec">
          <h3 class="LF-tsec-title">Lo que dicen nuestros clientes</h3>
          <div class="LF-tvp">
            <div class="LF-ttrack" id="LF-ttrack">

              <div class="LF-tslide">
                <div class="LF-tcard">
                  <div class="LF-tstars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                  <div class="LF-thead">
                    <div class="LF-tavatar">GR</div>
                    <div><div class="LF-tname">Gonzalo R.</div><div class="LF-tverif"><i class="fa-solid fa-circle-check"></i> Comprador verificado</div></div>
                  </div>
                  <div class="LF-tbody">"Tengo dos chicos y el piso siempre terminaba destruido. Con el Luxury Floor un trapo húmedo y queda impecable. Se ve muy premium, da otro nivel al interior."</div>
                  <i class="fa-solid fa-quote-right LF-tquote"></i>
                </div>
              </div>

              <div class="LF-tslide">
                <div class="LF-tcard">
                  <div class="LF-tstars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                  <div class="LF-thead">
                    <div class="LF-tavatar">MA</div>
                    <div><div class="LF-tname">María A.</div><div class="LF-tverif"><i class="fa-solid fa-circle-check"></i> Comprador verificado</div></div>
                  </div>
                  <div class="LF-tbody">"Excelente calidad y calce perfecto. Llegó antes de lo esperado y la instalación fue súper sencilla. Lo recomiendo a cualquiera que quiera cuidar su auto."</div>
                  <i class="fa-solid fa-quote-right LF-tquote"></i>
                </div>
              </div>

              <div class="LF-tslide">
                <div class="LF-tcard">
                  <div class="LF-tstars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                  <div class="LF-thead">
                    <div class="LF-tavatar">JP</div>
                    <div><div class="LF-tname">Juan P.</div><div class="LF-tverif"><i class="fa-solid fa-circle-check"></i> Comprador verificado</div></div>
                  </div>
                  <div class="LF-tbody">"Lo compré con dudas pero quedé sorprendido. El ajuste es milimétrico, parece que vino de fábrica así. La limpieza es facilísima. Vale cada peso."</div>
                  <i class="fa-solid fa-quote-right LF-tquote"></i>
                </div>
              </div>

              <div class="LF-tslide">
                <div class="LF-tcard">
                  <div class="LF-tstars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                  <div class="LF-thead">
                    <div class="LF-tavatar">LC</div>
                    <div><div class="LF-tname">Laura C.</div><div class="LF-tverif"><i class="fa-solid fa-circle-check"></i> Comprador verificado</div></div>
                  </div>
                  <div class="LF-tbody">"Compré para el 2008 G2 y es increíble. El calce es perfecto y el material se siente muy sólido. Mucho mejor que las alfombras genéricas que usaba antes."</div>
                  <i class="fa-solid fa-quote-right LF-tquote"></i>
                </div>
              </div>

            </div>
          </div>
          <div class="LF-tnav">
            <button class="LF-tnbtn" id="LF-tp"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="LF-tdots">
              <span class="LF-tdot active" data-i="0"></span>
              <span class="LF-tdot" data-i="1"></span>
            </div>
            <button class="LF-tnbtn" id="LF-tn"><i class="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>

        <div class="LF-faqs">
          <h3 class="LF-faqs-title">Preguntas Frecuentes</h3>
          ${CONFIG.faqs.map(faq => `
            <div class="LF-faq-item">
              <div class="LF-faq-question">
                <div class="LF-faq-q-content">
                  ${faq.icon ? `<i class="${faq.icon} LF-faq-q-icon"></i>` : ''}
                  <span>${faq.question}</span>
                </div>
                <i class="fa-solid fa-chevron-down LF-faq-chevron"></i>
              </div>
              <div class="LF-faq-answer">
                <div class="LF-faq-answer-content">${faq.answer}</div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;
  }

  function patchPriceIfNeeded() {
    const mainEl = document.getElementById('LF-pb-main');
    if (!mainEl || !mainEl.querySelector('.LF-pb-price-loading')) return;
    const { price, originalPrice, discount } = getDynamicPrices();
    if (price <= 0) return;
    const transferPrice = Math.round(price * (1 - CONFIG.transferDiscount / 100));
    const { origPrice: dispOriginal, disc: dispDiscount } = calcDisplayPrices(price, originalPrice, discount);

    mainEl.innerHTML = `
      <div class="LF-pb-main-icon"><i class="fa-solid fa-tag"></i></div>
      <div class="LF-pb-main-content">
        <div class="LF-pb-main-label">Precio efectivo / débito</div>
        <div class="LF-pb-main-vals">
          <span class="LF-pb-price" id="LF-pb-price-val">${formatPrice(price)}</span>
          <span class="LF-pb-original" id="LF-pb-original-val">${formatPrice(dispOriginal)}</span>
        </div>
      </div>
      <span class="LF-pb-badge LF-pb-badge--price" id="LF-pb-discount-val">-${dispDiscount}%</span>
    `;

    const cuotasEl = document.getElementById('LF-pb-cuotas-val');
    if (cuotasEl && cuotasEl.textContent === '—') {
      cuotasEl.textContent = creditVal(price);
    }
    const transferEl = document.getElementById('LF-pb-transfer-val');
    if (transferEl && transferEl.textContent === '—') {
      transferEl.textContent = formatPrice(transferPrice);
    }
  }

  function setupAddToCartButton() {
    const btn = document.getElementById('LF-add-to-cart');
    if (!btn || btn.dataset.initialized) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      for (const sel of CONFIG.selectors.addToCart) {
        const orig = document.querySelector(sel);
        if (orig) { orig.click(); break; }
      }
    });
    btn.dataset.initialized = 'true';
  }

  function setupDropdownBenefits() {
    const container = document.getElementById('LF-dropdown-benefits');
    if (!container || container.dataset.init) return;
    container.addEventListener('click', function (e) {
      const header = e.target.closest('.LF-db-header');
      if (!header) return;
      const item = header.closest('.LF-db-item');
      if (!item) return;
      container.querySelectorAll('.LF-db-item.active').forEach(o => { if (o !== item) o.classList.remove('active'); });
      item.classList.toggle('active');
    });
    container.dataset.init = '1';
  }

  function setupFAQs() {
    const wrapper = document.querySelector('.LF-wrapper');
    if (!wrapper || wrapper.dataset.faqsInit) return;
    wrapper.addEventListener('click', function (e) {
      const q = e.target.closest('.LF-faq-question');
      if (!q) return;
      const item = q.closest('.LF-faq-item');
      if (!item) return;
      wrapper.querySelectorAll('.LF-faq-item.active').forEach(o => { if (o !== item) o.classList.remove('active'); });
      item.classList.toggle('active');
    });
    wrapper.dataset.faqsInit = 'true';
  }

  function setupTestimonialsSlider() {
    const track = document.getElementById('LF-ttrack');
    const btnP  = document.getElementById('LF-tp');
    const btnN  = document.getElementById('LF-tn');
    const dots  = document.querySelectorAll('.LF-tdot');
    if (!track || track.dataset.lfinit) return;
    track.dataset.lfinit = '1';

    const vp = track.parentElement;
    let cur = 0;
    const TOTAL_PAGES = 2;
    let timer;

    function go(p) {
      cur = ((p % TOTAL_PAGES) + TOTAL_PAGES) % TOTAL_PAGES;
      track.style.transform = 'translateX(-' + (cur * vp.offsetWidth) + 'px)';
      dots.forEach(function (d, i) { d.classList.toggle('active', i === cur); });
    }

    function tick()  { go(cur + 1); }
    function start() { timer = setInterval(tick, 4200); }
    function stop()  { clearInterval(timer); }

    if (btnP) btnP.addEventListener('click', function () { stop(); go(cur - 1); start(); });
    if (btnN) btnN.addEventListener('click', function () { stop(); go(cur + 1); start(); });
    dots.forEach(function (d) {
      d.addEventListener('click', function () { stop(); go(parseInt(d.dataset.i, 10)); start(); });
    });

    var sx = 0;
    vp.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    vp.addEventListener('touchend', function (e) {
      var dx = sx - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) { stop(); go(cur + (dx > 0 ? 1 : -1)); start(); }
    }, { passive: true });

    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { go(cur); }, 200); });

    start();
  }

  function init() {
    if (!isTargetProduct()) return;
    DOMCache.init();
    if (!DOMCache.productContainer || DOMCache.wrapper) return;
    try {
      hideOriginalElements();
      fixImageGallery();
      DOMCache.productContainer.insertAdjacentHTML('afterbegin', buildHTML());
      DOMCache.refresh();
      requestAnimationFrame(function () {
        setupAddToCartButton();
        setupDropdownBenefits();
        setupFAQs();
        setupTestimonialsSlider();
        setTimeout(patchPriceIfNeeded, 500);
        setTimeout(patchPriceIfNeeded, 1500);
        setTimeout(patchPriceIfNeeded, 3000);
      });
      console.log('[Luxury Floor v3] ✅ OK');
    } catch (err) {
      console.error('[Luxury Floor v3] ❌', err);
    }
  }

  let obsInstance = null;
  function initObserver() {
    if (obsInstance) return;
    obsInstance = new MutationObserver(function (_, obs) {
      DOMCache.init();
      if (DOMCache.productContainer && isTargetProduct() && !DOMCache.wrapper) {
        init(); obs.disconnect(); obsInstance = null;
      }
    });
    obsInstance.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { if (obsInstance) { obsInstance.disconnect(); obsInstance = null; } }, 10000);
  }

  preconnectResources();
  if (isTargetProduct()) hideOriginalElementsImmediately();
  injectStyles();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); initObserver(); });
  } else {
    init(); initObserver();
  }

  if (typeof LS !== 'undefined' && LS.ready) {
    LS.ready
      .then(function () { DOMCache.init(); if (!DOMCache.wrapper) init(); else patchPriceIfNeeded(); })
      .catch(function (e) { console.warn('[LF v3] LS.ready error:', e); });
  }

})();
