(function () {
  'use strict';

  const CONFIG = {
    productUrl: '/productos/',

    primaryColor: '#C8A951',
    primaryDark: '#A8873A',
    goldLight: '#2A2110',
    textDark: '#F0F0F0',
    textLight: '#AAAAAA',

    imgLayersDiagram: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/iuhgasdhjkdasjk.png',
    imgCarpetRender: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/ea4b1b3a-d777-450f-9559-1a1da71c71e1.png',
    imgBefore: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/c02ff150-406b-4a74-8eab-4f850d6cdfc8.jfif',
    imgAfter: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/4ec5cf4e-f412-4f53-bb66-2814fb6960d1.jfif',
    videoBaseUrl: 'https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@dc7945eb4eba3759e30e1f5c40dd5a796cf685e6/src/media/luxury-',
    videoCount: 4,

    layers: [
      {
        num: '01',
        title: 'Capa Superior: PVC',
        img: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/cc9b60eb-1313-4c6c-b5a0-2fb89339a0ab.png',
        desc: 'Impermeable, duradera y con textura a juego.'
      },
      {
        num: '02',
        title: 'Capa Intermedia: Espuma EVA',
        img: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/0af98a08-ca60-47be-8607-d59dbb956d36.png',
        desc: 'Proporciona estructura, soporte y flexibilidad.'
      },
      {
        num: '03',
        title: 'Capa Inferior: Velcro',
        img: 'https://d1a9qnv764bsoo.cloudfront.net/stores/006/464/401/rte/68bb6e03-42d7-4869-8425-57769c1a33de.png',
        desc: 'Se agarra al piso del auto para que la alfombra no se corra.'
      }
    ],

    specs: [
      { icon: 'fa-solid fa-ruler-combined', title: 'Calce Milimétrico', desc: 'Escaneo láser 3D por modelo' },
      { icon: 'fa-solid fa-layer-group', title: '3 Capas', desc: 'PVC + EVA + Velcro' },
      { icon: 'fa-solid fa-weight-hanging', title: 'Alta Densidad', desc: 'Material de uso profesional' },
      { icon: 'fa-solid fa-palette', title: 'Negro Premium', desc: 'Color sólido, sin desteñir' },
      { icon: 'fa-solid fa-anchor', title: 'Clips Incluidos', desc: 'Fijación mecánica segura' },
      { icon: 'fa-solid fa-temperature-low', title: 'Todos los Climas', desc: 'No se deforma con el calor' }
    ],

    testimonials: [
      {
        initials: 'GR', name: 'Gonzalo R.', location: 'Buenos Aires',
        text: 'Hola Martín, buenas tardes. Quería avisarte que llegaron las alfombras para el Peugeot 307 y quedaron excelentes. Ya las coloqué y la verdad superaron mis expectativas. Muy buena calidad, fácil de instalar y encajaron perfecto. Cambiaron por completo el interior del auto. Muchas gracias también por la atención y la confianza en todo momento.'
      },
      {
        initials: 'MA', name: 'María A.', location: 'Córdoba',
        text: 'Llegaron las alfombras hasta Tierra del Fuego en tiempo y forma. La verdad impecable todo, muchísimo mejor de lo que esperaba. Calzaron perfecto y se nota la calidad apenas las ves. Cumplieron ampliamente mis expectativas. Excelente producto y excelente atención de principio a fin. Cliente más que conforme, 10 de 10.'
      },
      {
        initials: 'JP', name: 'Juan P.', location: 'Rosario',
        text: 'Capos, los felicito porque quedó genial. La verdad no esperaba que quedaran tan bien puestas en el auto. Se nota que es un producto de primera y con muy buenas terminaciones. Gracias también por la atención y la buena onda durante toda la compra. Da gusto comprar así, los voy a recomendar seguro.'
      },
      {
        initials: 'LC', name: 'Laura C.', location: 'Mendoza',
        text: 'Un lujo posta, hermosas y de muy buena calidad. Las doblamos un poquito para colocarlas y ni se marcaron, tremenda calidad. Quedaron perfectas y le dieron otra imagen al auto. Súper recomendables esas alfombras. Gracias por responder siempre rápido y por la excelente atención.'
      }
    ],

    compareRows: [
      { feature: 'Calce en el vehículo', bad: 'Puede no encajar — genérica', good: 'Ajuste láser 3D por modelo' },
      { feature: 'Impermeabilidad', bad: 'Absorbe líquidos y mancha', good: 'PVC 100% impermeable' },
      { feature: 'Fijación', bad: 'Se mueve al frenar o acelerar', good: 'Clips + base de velcro' },
      { feature: 'Limpieza', bad: 'Requiere cepillo y detergente', good: 'Paño húmedo en 10 segundos' },
      { feature: 'Zona del conductor', bad: 'Mismo espesor en todo el piso', good: 'Refuerzo extra donde más desgasta' },
      { feature: 'Vida útil', bad: '6–12 meses en uso intenso', good: 'Años — material de alta densidad' }
    ],

    ctaFeatures: [
      { icon: 'fa-solid fa-ruler-combined', text: 'Calce milimétrico para tu modelo exacto' },
      { icon: 'fa-solid fa-droplet-slash',  text: 'Impermeable 100% — limpieza en segundos' },
      { icon: 'fa-solid fa-anchor',         text: 'Fijación total con clips y base antideslizante' },
      { icon: 'fa-solid fa-rotate-left',    text: 'Garantía de satisfacción por 30 días' }
    ],

    addToCartSelectors: [
      'input[type="submit"].js-addtocart.js-prod-submit-form',
      '.js-addtocart',
      '[data-component="product.add-to-cart"]'
    ]
  };

  const DOMCache = {
    target: null,
    wrapper: null,
    init() {
      this.target = document.querySelector('.user-content')
        || document.querySelector('[data-store^="product-description-"]');
      this.wrapper = document.getElementById('LFD-desc-wrapper');
    }
  };

  function isTargetProduct() {
    return window.location.pathname.includes(CONFIG.productUrl)
      || !!document.querySelector('[data-store^="product-info-"]');
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency', currency: 'ARS',
      minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
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
    return { price: 0, originalPrice: 0, discount: 0 };
  }

  function injectStyles() {
    const fa = document.createElement('link');
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    fa.rel = 'stylesheet'; fa.crossOrigin = 'anonymous';
    if (!document.querySelector('link[href*="font-awesome"]')) document.head.appendChild(fa);

    if (document.getElementById('LFD-desc-styles')) return;
    const s = document.createElement('style');
    s.id = 'LFD-desc-styles';
    s.textContent = getStyles();
    document.head.appendChild(s);
  }

  function getStyles() {
    const p = CONFIG.primaryColor;
    const pd = CONFIG.primaryDark;
    const td = CONFIG.textDark;
    const tl = CONFIG.textLight;
    const gl = CONFIG.goldLight;

    return `
      .LFD-wrapper * { box-sizing: border-box; margin: 0; padding: 0; }
      .LFD-wrapper {
        background: #000; color: ${td};
        width: 100%; overflow-x: hidden;
      }
      .LFD-sec-title, .LFD-sec-sub{ text-align:start;}

      .LFD-section { padding: 56px 0; border-bottom: 1px solid #0F0F0F; }
      .LFD-section:last-child { border-bottom: none; }
      .LFD-inner { max-width: 1048px; margin: 0 auto; padding: 0 24px; }

      .LFD-gold-line {
        width: 36px; height: 3px;
        background: linear-gradient(90deg, ${p}, ${pd});
        border-radius: 2px; margin-bottom: 12px;
      }
      .LFD-sec-title {
        font-size: 24px; font-weight: 800; color: ${td};
        letter-spacing: -0.5px; margin-bottom: 6px; line-height: 1.2;
        text-transform: uppercase;
      }
      .LFD-sec-sub {
        font-size: 14px; color: ${tl}; line-height: 1.6;
        margin-bottom: 36px; max-width: 540px;
      }

      .LFD-reveal {
        opacity: 0;
        transform: translateY(22px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .LFD-reveal.LFD-vis { opacity: 1; transform: translateY(0); text-align: start; }
      .LFD-reveal-d1 { transition-delay: 0.1s; }
      .LFD-reveal-d2 { transition-delay: 0.2s; }
      .LFD-reveal-d3 { transition-delay: 0.3s; }

      .LFD-layers-split {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
      }
      .LFD-layer-list { display: flex; flex-direction: column; }
      .LFD-layer-item {
        display: flex; align-items: center; gap: 18px;
        padding: 20px 0; border-bottom: 1px solid #111;
      }
      .LFD-layer-item:last-child { border-bottom: none; }
      .LFD-layer-circle {
        width: 100px; height: 100px; flex-shrink: 0;
        border-radius: 50%; overflow: hidden;
        border: 2px solid #555555; background: #0A0A0A;
        display: flex; align-items: center; justify-content: center;
      }
      .LFD-layer-circle img { width: 100%; height: 100%; object-fit: cover; }
      .LFD-layer-circle i { color: ${p}; font-size: 22px; }
      .LFD-layer-label {
        font-size: 12px; font-weight: 800; letter-spacing: 0.6px;
        text-transform: uppercase; color: ${td}; margin-bottom: 5px;
      }
      .LFD-layer-sub { font-size: 12px; color: ${tl}; line-height: 1.5; }
      .LFD-diagram-frame {
        border-radius: 20px; overflow: hidden;
        background: #080808; border: 1px solid #1A1A1A;
      }
      .LFD-diagram-frame img { width: 100%; height: auto; display: block; }

      @media (max-width: 680px) {
        .LFD-layers-split { grid-template-columns: 1fr; gap: 28px; }
        .LFD-sec-sub{margin:0;}
      }

      .LFD-desc-prose {
        font-size: 15px; color: #CCCCCC; line-height: 1.85;
        border-left: 3px solid ${p}; padding-left: 20px;
        margin-bottom: 36px;
        margin-top: 16px;
      }
      .LFD-specs-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }
      .LFD-spec-card {
        background: #0D0D0D; border: 1px solid #1A1A1A;
        border-radius: 16px; padding: 18px 14px; text-align: center;
        transition: border-color 0.2s, transform 0.2s;
        cursor: default;
      }
      .LFD-spec-card:hover { border-color: ${p}40; transform: translateY(-3px); }
      .LFD-spec-icon-wrap {
        width: 44px; height: 44px; margin: 0 auto 12px;
        background: ${gl}; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
      }
      .LFD-spec-icon-wrap i { color: ${p}; font-size: 16px; }
      .LFD-spec-title { font-size: 12px; font-weight: 700; color: ${td}; margin-bottom: 3px; }
      .LFD-spec-desc  { font-size: 11px; color: ${tl}; }
      @media (max-width: 540px) { .LFD-specs-grid { grid-template-columns: repeat(2, 1fr); } }

      .LFD-ba-wrap {
        border-radius: 20px; overflow: hidden;
        box-shadow: 0 0 0 1px #1A1A1A, 0 8px 32px rgba(0,0,0,0.6);
      }
      .LFD-ba-container {
        position: relative; width: 100%; aspect-ratio: 3/2;
        background: #111; cursor: ew-resize; user-select: none;
        -webkit-user-select: none; touch-action: pan-y;
      }
      .LFD-ba-img {
        position: absolute; inset: 0;
        background-size: cover; background-position: center;
      }
      .LFD-ba-before { z-index: 1; }
      .LFD-ba-after  { z-index: 2; will-change: clip-path; }

      .LFD-ba-label {
        position: absolute; top: 14px;
        padding: 4px 12px; border-radius: 99px;
        font-size: 10px; font-weight: 800; letter-spacing: 1.5px;
        text-transform: uppercase;
      }
      .LFD-ba-before .LFD-ba-label {
        right: 14px; background: rgba(0,0,0,0.65); color: #888;
      }
      .LFD-ba-after .LFD-ba-label {
        left: 14px; background: ${p}; color: #1A1A1A;
      }

      .LFD-ba-handle {
        position: absolute; top: 0; bottom: 0;
        z-index: 10; pointer-events: none;
        display: flex; flex-direction: column; align-items: center;
        will-change: left;
      }
      .LFD-ba-line { width: 2px; flex: 1; background: rgba(255,255,255,0.9); }
      .LFD-ba-btn {
        position: absolute; top: 50%; transform: translateY(-50%);
        width: 46px; height: 46px; border-radius: 50%;
        background: #fff;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 2px 14px rgba(0,0,0,0.55);
      }
      .LFD-ba-btn i { font-size: 14px; color: #111; }
      .LFD-ba-caption {
        text-align: center; padding: 10px 0 0;
        font-size: 12px; color: ${tl}; font-style: italic;
      }

      .LFD-vsplit {
        display: grid; grid-template-columns: 1fr 1fr;
        gap: 52px; align-items: center;
      }
      .LFD-vsplit-carousel { display: flex; flex-direction: column; align-items: center; }
      .LFD-vsplit-text .LFD-gold-line { margin-bottom: 14px; }
      .LFD-vsplit-title {
        font-size: 26px; font-weight: 800; color: ${td};
        letter-spacing: -0.4px; line-height: 1.2; margin-bottom: 10px;
        text-transform: uppercase;
      }
      .LFD-vsplit-sub {
        font-size: 14px; color: ${tl}; line-height: 1.65; margin-bottom: 28px;
      }
      .LFD-vsplit-feats { display: flex; flex-direction: column; gap: 12px; }

      .LFD-vsplit-tcard {
        background: #0A0A0A; border: 1px solid #1A1A1A;
        border-left: 3px solid ${p};
        border-radius: 14px; padding: 16px;
        position: relative; overflow: hidden;
        transition: border-color 0.2s;
      }
      .LFD-vsplit-tcard:hover { border-color: ${p}; border-left-color: ${p}; }
      .LFD-vsplit-thead { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
      .LFD-vsplit-tavatar {
        width: 36px; height: 36px; flex-shrink: 0;
        background: linear-gradient(135deg, ${p}, ${pd});
        color: #1A1A1A; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-weight: 800; font-size: 11px;
      }
      .LFD-vsplit-tname { font-size: 13px; font-weight: 700; color: ${td}; line-height: 1.2; }
      .LFD-vsplit-tlocation { font-size: 11px; color: ${tl}; margin-top: 2px; }
      .LFD-vsplit-tbody { font-size: 12px; color: #BBBBBB; line-height: 1.65; font-style: italic; }
      .LFD-vsplit-tverif { font-size: 11px; color: #22c55e; margin-top: 8px; font-weight: 500; }
      .LFD-vsplit-tverif i { margin-right: 3px; }
      .LFD-vsplit-tquote {
        position: absolute; bottom: 8px; right: 12px;
        font-size: 24px; color: ${p}; opacity: 0.08;
        pointer-events: none;
      }

      @media (max-width: 768px) {
        .LFD-vsplit { grid-template-columns: 1fr; gap: 28px; }
        .LFD-vsplit-title { font-size: 22px; }
        .LFD-vsplit-sub { margin-bottom: 20px; }
      }

      .LFD-vcar-wrap {
        position: relative; width: 100%;
        user-select: none; -webkit-user-select: none;
      }
      .LFD-vcar-row {
        display: flex; align-items: center; justify-content: center;
        gap: 10px; width: 100%;
      }
      .LFD-vcar-slot {
        border-radius: 16px; overflow: hidden;
        position: relative; flex-shrink: 0; background: #111;
        transition: opacity 0.55s cubic-bezier(0.4,0,0.2,1),
                    filter  0.55s cubic-bezier(0.4,0,0.2,1),
                    transform 0.55s cubic-bezier(0.4,0,0.2,1);
      }
      .LFD-vcar-slot video {
        width: 100%; height: 100%; object-fit: cover;
        display: block; pointer-events: none; transition: opacity 0.25s ease;
      }
      .LFD-vcar-slot--main {
        flex: 0 0 56%; max-width: 260px; aspect-ratio: 9/16;
        cursor: pointer; z-index: 2;
        border: 2px solid #282828; box-shadow: 0 8px 32px rgba(0,0,0,0.55);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .LFD-vcar-slot--main:hover { border-color: ${p}30; box-shadow: 0 12px 40px rgba(0,0,0,0.65); }
      .LFD-vcar-slot--main:hover .LFD-vcar-expand { opacity: 1; }
      .LFD-vcar-slot--main.LFD-switching video { opacity: 0.35; }
      .LFD-vcar-slot--side {
        flex: 0 0 22%; max-width: 110px; aspect-ratio: 9/16;
        opacity: 0.5; filter: brightness(0.55); transform: scale(0.94);
        cursor: pointer; z-index: 1; border: 1px solid #181818;
      }
      .LFD-vcar-slot--side:hover { opacity: 0.68; filter: brightness(0.75); transform: scale(0.97); }
      .LFD-vcar-side-overlay { position: absolute; inset: 0; }
      .LFD-vcar-expand {
        position: absolute; bottom: 10px; right: 10px;
        width: 30px; height: 30px; border-radius: 50%;
        background: rgba(255,255,255,0.1); backdrop-filter: blur(6px);
        display: flex; align-items: center; justify-content: center;
        color: #fff; font-size: 11px; opacity: 0; transition: opacity 0.25s;
      }
      .LFD-vcar-controls {
        display: flex; align-items: center; justify-content: center;
        gap: 14px; margin-top: 16px;
      }
      .LFD-vcar-arrow {
        width: 38px; height: 38px; border-radius: 50%;
        background: #111; border: 1px solid #2A2A2A;
        color: ${td}; cursor: pointer; font-size: 12px;
        display: flex; align-items: center; justify-content: center;
        transition: background 0.2s, border-color 0.2s, color 0.2s; flex-shrink: 0;
      }
      .LFD-vcar-arrow:hover { background: #1A1A1A; border-color: ${p}; color: ${p}; }
      .LFD-vcar-dots { display: flex; gap: 6px; align-items: center; }
      .LFD-vcar-dot {
        width: 7px; height: 7px; border-radius: 50%;
        background: #333; cursor: pointer;
        transition: background 0.3s, transform 0.3s; border: none;
      }
      .LFD-vcar-dot.active { background: ${p}; transform: scale(1.3); }

      .LFD-vmodal {
        display: none; position: fixed; inset: 0; z-index: 99999;
        align-items: center; justify-content: center;
      }
      .LFD-vmodal.active { display: flex; }
      .LFD-vmodal-backdrop {
        position: absolute; inset: 0; background: rgba(0,0,0,0.92);
      }
      .LFD-vmodal-content {
        position: relative; z-index: 1;
        width: min(420px, 94vw);
        border-radius: 18px; overflow: hidden; background: #000;
        box-shadow: 0 24px 80px rgba(0,0,0,0.8);
      }
      .LFD-vmodal-video {
        width: 100%; max-height: 85vh; display: block; object-fit: contain;
      }
      .LFD-vmodal-close {
        position: absolute; top: 10px; right: 10px; z-index: 2;
        width: 36px; height: 36px; border-radius: 50%; border: none;
        background: rgba(0,0,0,0.65); color: #fff; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        font-size: 16px; transition: background 0.2s;
      }
      .LFD-vmodal-close:hover { background: rgba(255,255,255,0.18); }

      @media (max-width: 580px) {
        .LFD-vcar-slot--main { flex: 0 0 58%; }
        .LFD-vcar-slot--side { flex: 0 0 18%; max-width: 90px; }
        .LFD-vcar-row { gap: 8px; }
        .LFD-ba-container { aspect-ratio: 1; }
      }

      .LFD-compare-wrap {
        border-radius: 16px; overflow: hidden;
        border: 1px solid #1A1A1A;
        margin-top: 16px;
      }
      .LFD-compare-table {
        width: 100%; border-collapse: collapse;
      }
      .LFD-compare-table thead th {
        padding: 14px 20px;
        font-size: 12px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
        border-bottom: 1px solid #1A1A1A;
      }
      .LFD-compare-table thead th:first-child {
        background: #080808; color: ${tl};
        width: 32%; text-align: left;
      }
      .LFD-th-bad {
        background: #0A0A0A; color: #555;
        text-align: center; width: 34%;
      }
      .LFD-th-good {
        background: ${gl}; color: ${p};
        text-align: center; width: 34%;
        border-left: 1px solid ${p}40;
      }
      .LFD-compare-table tbody td {
        padding: 13px 20px; font-size: 13px;
        border-bottom: 1px solid #0D0D0D;
        vertical-align: middle;
      }
      .LFD-compare-table tbody tr:last-child td { border-bottom: none; }
      .LFD-compare-table tbody td:first-child {
        background: #060606; color: #888; font-weight: 500;
      }
      .LFD-td-bad {
        background: #080808; color: #484848;
        text-align: center;
      }
      .LFD-td-good {
        background: #0C160C; color: #4ade80;
        text-align: center; font-weight: 600;
        border-left: 1px solid ${p}30;
      }
      .LFD-compare-table tbody tr:hover td { background: #111 !important; }
      .LFD-compare-table tbody tr:hover .LFD-td-good { background: #101A10 !important; }

      @media (max-width: 600px) {
        .LFD-compare-table thead th,
        .LFD-compare-table tbody td { padding: 11px 12px; font-size: 11px; }
      }

      .LFD-cta-section { padding: 60px 0; border-bottom: none; }
      .LFD-cta-box {
        background: linear-gradient(135deg, #0D0D0D 0%, #161616 100%);
        border: 1px solid #2A2A2A; border-radius: 24px;
        padding: 48px 40px; text-align: center;
      }
      .LFD-cta-box .LFD-gold-line { margin: 0 auto 16px; }
      .LFD-cta-title {
        font-size: 30px; font-weight: 800; color: ${td};
        letter-spacing: -0.5px; line-height: 1.2; margin-bottom: 14px; text-align: center;
      }
      .LFD-cta-title span { color: ${p}; }
      .LFD-cta-desc {
        font-size: 15px; color: ${tl}; line-height: 1.65;
        max-width: 500px; margin: 0 auto 32px;
      }
      .LFD-cta-features {
        display: grid; grid-template-columns: 1fr 1fr;
        gap: 10px; margin-bottom: 36px; text-align: left;
        max-width: 600px; margin-left: auto; margin-right: auto;
      }
      .LFD-cta-feat {
        display: flex; align-items: center; gap: 10px;
        background: #111; border: 1px solid #222; border-radius: 12px;
        padding: 13px 16px;
      }
      .LFD-cta-feat i { color: ${p}; font-size: 15px; flex-shrink: 0; }
      .LFD-cta-feat span { font-size: 13px; color: ${td}; line-height: 1.35; }

      /* CTA Price — transfer hero */
      .LFD-cta-transfer-hero {
        background: linear-gradient(135deg, #062818 0%, #0a3520 100%);
        border: 2px solid #22c55e;
        border-radius: 20px;
        padding: 24px 28px;
        max-width: 440px;
        margin: 0 auto 12px;
        position: relative;
        overflow: hidden;
      }
      .LFD-cta-transfer-hero::before {
        content: none;
        position: absolute; top: 0; right: 0;
        background: #22c55e; color: #062818;
        font-size: 11px; font-weight: 800; letter-spacing: 0.5px;
        padding: 5px 14px;
        border-bottom-left-radius: 12px;
      }
      .LFD-cta-transfer-label {
        font-size: 11px; font-weight: 700; color: #86efac;
        letter-spacing: 1px; text-transform: uppercase;
        display: flex; align-items: center; gap: 6px; margin-bottom: 6px;
      }
      .LFD-cta-transfer-label i { font-size: 13px; }
      .LFD-cta-transfer-price {
        font-size: 46px; font-weight: 800; color: #4ade80;
        letter-spacing: -2px; line-height: 1;
      }
      .LFD-cta-transfer-sub {
        font-size: 12px; color: #86efac; margin-top: 4px;
      }

      .LFD-cta-list-row { display: none !important; }
      .LFD-cta-list-row-off {
        display: flex; align-items: center; justify-content: center; gap: 10px;
        max-width: 440px; margin: 0 auto 8px;
        background: #0A0A0A; border: 1px solid #1E1E1E;
        border-radius: 14px; padding: 12px 16px;
      }
      .LFD-cta-list-label { font-size: 12px; color: #555; }
      .LFD-cta-list-price { font-size: 18px; font-weight: 700; color: #555; text-decoration: line-through; }
      .LFD-cta-cuotas-row {
        display: flex; align-items: center; gap: 10px;
        max-width: 440px; margin: 0 auto 12px;
        background: #0D0D0D; border: 1px solid #1E1E1E;
        border-radius: 14px; padding: 12px 16px;
      }
      .LFD-cta-cuotas-icon {
        width: 34px; height: 34px; flex-shrink: 0; border-radius: 50%;
        background: #1A1A1A;
        display: flex; align-items: center; justify-content: center;
      }
      .LFD-cta-cuotas-icon i { color: ${p}; font-size: 14px; }
      .LFD-cta-cuotas-content { flex: 1; text-align: left; }
      .LFD-cta-cuotas-label { font-size: 11px; color: #666; margin-bottom: 2px; }
      .LFD-cta-cuotas-val { font-size: 16px; font-weight: 700; color: ${td}; }

      .LFD-cta-price-loading { font-size: 20px; font-weight: 500; color: ${tl}; font-style: italic; }

      .LFD-cta-btn {
        width: 100%; max-width: 440px;
        padding: 20px 24px;
        background: linear-gradient(135deg, ${p} 0%, ${pd} 100%);
        color: #1A1A1A; font-size: 17px; font-weight: 800;
        text-transform: uppercase; letter-spacing: 0.8px;
        border: none; border-radius: 16px; cursor: pointer;
        display: flex; align-items: center; justify-content: center; gap: 10px;
        transition: all 0.25s; box-shadow: 0 4px 20px rgba(200,169,81,0.4);
        margin: 0 auto;
      }
      .LFD-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(200,169,81,0.55); }
      .LFD-cta-btn:active { transform: translateY(0); }
      .LFD-cta-guarantee { font-size: 12px; color: ${tl}; margin-top: 16px; text-align:center; }
      .LFD-cta-guarantee i { color: #22c55e; margin-right: 4px; }

      @media (max-width: 580px) {
        .LFD-inner{ padding: 0;}
        .LFD-cta-box { padding: 32px 16px; }
        .LFD-cta-title { font-size: 22px; }
        .LFD-cta-desc { font-size: 14px; margin-bottom: 24px; }
        .LFD-cta-features { grid-template-columns: 1fr; gap: 8px; margin-bottom: 28px; }
        .LFD-cta-feat { padding: 11px 14px; }
        .LFD-cta-feat span { font-size: 12px; }
        .LFD-cta-transfer-price { font-size: 36px; }
        .LFD-cta-btn { font-size: 15px; padding: 17px 20px; }
      }
    `;
  }

  function buildLayersSection() {
    const layerItems = CONFIG.layers.map(l => `
      <div class="LFD-layer-item">
        <div class="LFD-layer-circle">
          ${l.img ? `<img src="${l.img}" alt="${l.title}">` : `<i class="fa-solid fa-layer-group"></i>`}
        </div>
        <div>
          <div class="LFD-layer-label">${l.title}</div>
          <div class="LFD-layer-sub">${l.desc}</div>
        </div>
      </div>
    `).join('');

    return `
      <section class="LFD-section">
        <div class="LFD-inner">
          <div class="LFD-gold-line LFD-reveal"></div>
          <h2 class="LFD-sec-title LFD-reveal LFD-reveal-d1">Construcción Premium de 3 Capas</h2>
          <p class="LFD-sec-sub LFD-reveal LFD-reveal-d2">Cada capa cumple un rol específico. El resultado es una alfombra que protege, fija y dura.</p>
          <div class="LFD-layers-split LFD-reveal LFD-reveal-d3">
            <div class="LFD-layer-list">${layerItems}</div>
            <div class="LFD-diagram-frame">
              <img src="${CONFIG.imgLayersDiagram}" alt="Construcción de 3 capas Luxury Floor">
            </div>
          </div>
        </div>
      </section>`;
  }

  function buildBeforeAfterSection() {
    return `
      <section class="LFD-section">
        <div class="LFD-inner">
          <div class="LFD-gold-line LFD-reveal"></div>
          <h2 class="LFD-sec-title LFD-reveal LFD-reveal-d1">La diferencia es inmediata</h2>
          <p class="LFD-sec-sub LFD-reveal LFD-reveal-d2">Arrastrá el divisor para comparar el interior con y sin Luxury Floor 3D.</p>
          <div class="LFD-reveal LFD-reveal-d3">
            <div class="LFD-ba-wrap">
              <div class="LFD-ba-container" id="LFD-ba">
                <div class="LFD-ba-img LFD-ba-before" style="background-image:url('${CONFIG.imgBefore}')">
                  <span class="LFD-ba-label">ANTES</span>
                </div>
                <div class="LFD-ba-img LFD-ba-after" id="LFD-ba-after" style="background-image:url('${CONFIG.imgAfter}')">
                  <span class="LFD-ba-label">DESPUÉS</span>
                </div>
                <div class="LFD-ba-handle" id="LFD-ba-handle">
                  <div class="LFD-ba-line"></div>
                  <div class="LFD-ba-btn"><i class="fa-solid fa-arrows-left-right"></i></div>
                </div>
              </div>
            </div>
            <p class="LFD-ba-caption">Interior real — resultado del producto instalado</p>
          </div>
        </div>
      </section>`;
  }

  function buildVideosSection() {
    const testimonialCards = CONFIG.testimonials.slice(0, 2).map(t => `
      <div class="LFD-vsplit-tcard">
        <div class="LFD-vsplit-thead">
          <div class="LFD-vsplit-tavatar">${t.initials}</div>
          <div>
            <div class="LFD-vsplit-tname">${t.name}</div>
            <div class="LFD-vsplit-tlocation">${t.location}</div>
          </div>
        </div>
        <div class="LFD-vsplit-tbody">"${t.text}"</div>
        <div class="LFD-vsplit-tverif"><i class="fa-solid fa-circle-check"></i> Comprador verificado</div>
        <i class="fa-solid fa-quote-right LFD-vsplit-tquote"></i>
      </div>
    `).join('');

    return `
      <section class="LFD-section">
        <div class="LFD-inner">
          <div class="LFD-vsplit LFD-reveal">

            <div class="LFD-vsplit-carousel">
              <div class="LFD-vcar-wrap">
                <div class="LFD-vcar-row">
                  <div class="LFD-vcar-slot LFD-vcar-slot--side" id="LFD-vcar-prev-slot">
                    <video muted playsinline preload="none"></video>
                    <div class="LFD-vcar-side-overlay"></div>
                  </div>
                  <div class="LFD-vcar-slot LFD-vcar-slot--main" id="LFD-vcar-main-slot">
                    <video muted playsinline autoplay loop preload="auto"></video>
                    <div class="LFD-vcar-expand"><i class="fa-solid fa-expand"></i></div>
                  </div>
                  <div class="LFD-vcar-slot LFD-vcar-slot--side" id="LFD-vcar-next-slot">
                    <video muted playsinline preload="none"></video>
                    <div class="LFD-vcar-side-overlay"></div>
                  </div>
                </div>
                <div class="LFD-vcar-controls">
                  <button class="LFD-vcar-arrow" id="LFD-vcar-prev"><i class="fa-solid fa-chevron-left"></i></button>
                  <div class="LFD-vcar-dots" id="LFD-vcar-dots"></div>
                  <button class="LFD-vcar-arrow" id="LFD-vcar-next"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
              </div>
            </div>

            <div class="LFD-vsplit-text">
              <div class="LFD-gold-line"></div>
              <h2 class="LFD-vsplit-title">¿Qué opinan nuestros clientes?</h2>
              <p class="LFD-vsplit-sub">Más de 1500 clientes satisfechos avalan nuestra calidad y servicio.</p>
              <div class="LFD-vsplit-feats">
                ${testimonialCards}
              </div>
            </div>

          </div>
        </div>
      </section>`;
  }

  function buildWhySection() {
    return `
      <section class="LFD-section">
        <div class="LFD-inner">
          <div class="LFD-gold-line LFD-reveal"></div>
          <h2 class="LFD-sec-title LFD-reveal LFD-reveal-d1">¿Por qué Luxury Floor 3D?</h2>
          <p class="LFD-sec-sub LFD-reveal LFD-reveal-d2">La diferencia no es de precio — es de ingeniería.</p>
          <div class="LFD-compare-wrap LFD-reveal LFD-reveal-d3">
            <table class="LFD-compare-table">
              <thead>
                <tr>
                  <th></th>
                  <th class="LFD-th-bad">Alfombra genérica</th>
                  <th class="LFD-th-good">Luxury Floor 3D</th>
                </tr>
              </thead>
              <tbody>
                ${CONFIG.compareRows.map(r => `
                  <tr>
                    <td>${r.feature}</td>
                    <td class="LFD-td-bad">✕ ${r.bad}</td>
                    <td class="LFD-td-good">✓ ${r.good}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </section>`;
  }

  function buildFinalCTA() {
    const { price, originalPrice, discount } = getDynamicPrices();
    const transferPrice = price > 0 ? Math.round(price) : 0;

    const transferHeroHtml = price > 0
      ? `<div class="LFD-cta-transfer-hero">
           <div class="LFD-cta-transfer-label"><i class="fa-solid fa-building-columns"></i> Precio de contado</div>
           <div class="LFD-cta-transfer-price">${formatPrice(transferPrice)}</div>
           <div class="LFD-cta-transfer-sub">Transferencia o efectivo</div>
         </div>
         <div class="LFD-cta-cuotas-row">
           <div class="LFD-cta-cuotas-icon"><i class="fa-solid fa-credit-card"></i></div>
           <div class="LFD-cta-cuotas-content">
             <div class="LFD-cta-cuotas-label">Hasta 3 cuotas sin interés con tarjeta de Mercado Pago</div>
             <div class="LFD-cta-cuotas-val" id="LFD-cta-cuotas-val">${formatPrice(price / 3)} c/u</div>
           </div>
         </div>
         <div class="LFD-cta-list-row">
           <span class="LFD-cta-list-label">Precio de lista:</span>
           <span class="LFD-cta-list-price">${formatPrice(price)}</span>
           ${originalPrice > 0 ? `<span style="font-size:11px;color:#555;text-decoration:line-through;">${formatPrice(originalPrice)}</span>` : ''}
         </div>         
         `
      : `<span class="LFD-cta-price-loading" id="LFD-cta-price-loading">Cargando precio...</span>`;

    return `
      <section class="LFD-section LFD-cta-section">
        <div class="LFD-inner">
          <div class="LFD-cta-box LFD-reveal">
            <div class="LFD-gold-line"></div>
            <h2 class="LFD-cta-title">Dale a tu auto el cuidado que se merece</h2>
            <div id="LFD-cta-price-block">
              ${transferHeroHtml}
            </div>
            <button class="LFD-cta-btn" id="LFD-cta-btn">
              <i class="fa-solid fa-cart-shopping"></i> Agregar al Carrito
            </button>
            <p class="LFD-cta-guarantee">
              <i class="fa-solid fa-shield-halved"></i> Garantía de satisfacción 30 días &nbsp;·&nbsp; Envío a todo el país
            </p>
          </div>
        </div>
      </section>`;
  }

  function buildHTML() {
    return `
      <div class="LFD-wrapper" id="LFD-desc-wrapper">
        ${buildLayersSection()}
        ${buildBeforeAfterSection()}
        ${buildVideosSection()}
        ${buildWhySection()}
        ${buildFinalCTA()}
        <div class="LFD-vmodal" id="LFD-vmodal">
          <div class="LFD-vmodal-backdrop" id="LFD-vmodal-bg"></div>
          <div class="LFD-vmodal-content">
            <button class="LFD-vmodal-close" id="LFD-vmodal-close"><i class="fa-solid fa-xmark"></i></button>
            <video class="LFD-vmodal-video" id="LFD-vmodal-video" controls playsinline></video>
          </div>
        </div>
      </div>`;
  }

  function setupBeforeAfter() {
    const container = document.getElementById('LFD-ba');
    const after = document.getElementById('LFD-ba-after');
    const handle = document.getElementById('LFD-ba-handle');
    if (!container || !after || !handle || container.dataset.lfinit) return;
    container.dataset.lfinit = '1';

    function setPos(pct) {
      pct = Math.max(4, Math.min(96, pct));
      after.style.clipPath = `inset(0 ${(100 - pct).toFixed(2)}% 0 0)`;
      handle.style.left = pct.toFixed(2) + '%';
      handle.style.transform = 'translateX(-50%)';
    }

    setPos(50);

    let dragging = false;
    function pctFromEvent(e) {
      const rect = container.getBoundingClientRect();
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      return ((cx - rect.left) / rect.width) * 100;
    }

    container.addEventListener('mousedown', () => { dragging = true; });
    container.addEventListener('touchstart', () => { dragging = true; }, { passive: true });
    window.addEventListener('mouseup', () => { dragging = false; });
    window.addEventListener('touchend', () => { dragging = false; });
    window.addEventListener('mousemove', e => { if (dragging) setPos(pctFromEvent(e)); });
    window.addEventListener('touchmove', e => { if (dragging) setPos(pctFromEvent(e)); }, { passive: true });
  }

  function setupVideos() {
    const srcs = Array.from({ length: CONFIG.videoCount }, function (_, i) {
      return CONFIG.videoBaseUrl + (i + 1) + '.mp4';
    });
    const n = srcs.length;

    const prevSlot = document.getElementById('LFD-vcar-prev-slot');
    const mainSlot = document.getElementById('LFD-vcar-main-slot');
    const nextSlot = document.getElementById('LFD-vcar-next-slot');
    const dotsWrap = document.getElementById('LFD-vcar-dots');
    const modal    = document.getElementById('LFD-vmodal');
    const modalBg  = document.getElementById('LFD-vmodal-bg');
    const modalVid = document.getElementById('LFD-vmodal-video');
    const modalClose = document.getElementById('LFD-vmodal-close');

    if (!prevSlot || !mainSlot || !nextSlot || !modal || modal.dataset.lfinit) return;
    modal.dataset.lfinit = '1';

    var current = 0;

    var dots = [];
    for (var d = 0; d < n; d++) {
      var dot = document.createElement('button');
      dot.className = 'LFD-vcar-dot' + (d === 0 ? ' active' : '');
      dot.dataset.i = String(d);
      dotsWrap.appendChild(dot);
      dots.push(dot);
    }

    function idx(i) { return ((i % n) + n) % n; }

    function setSlot(slot, src, autoplay) {
      var vid = slot.querySelector('video');
      var cur = vid.getAttribute('src') || '';
      if (cur !== src) { vid.setAttribute('src', src); vid.load(); }
      if (autoplay) vid.play().catch(function () {});
      else vid.pause();
    }

    function go(i) {
      current = idx(i);
      mainSlot.classList.add('LFD-switching');
      setTimeout(function () { mainSlot.classList.remove('LFD-switching'); }, 280);
      setSlot(prevSlot, srcs[idx(current - 1)], false);
      setSlot(mainSlot, srcs[current],           true);
      setSlot(nextSlot, srcs[idx(current + 1)],  false);
      dots.forEach(function (dot, j) { dot.classList.toggle('active', j === current); });
    }

    document.getElementById('LFD-vcar-prev').addEventListener('click', function () { go(current - 1); });
    document.getElementById('LFD-vcar-next').addEventListener('click', function () { go(current + 1); });

    prevSlot.addEventListener('click', function () { go(current - 1); });
    nextSlot.addEventListener('click', function () { go(current + 1); });

    dotsWrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.LFD-vcar-dot');
      if (btn) go(parseInt(btn.dataset.i, 10));
    });

    mainSlot.addEventListener('click', function () {
      modalVid.src = srcs[current];
      modalVid.load();
      modalVid.play().catch(function () {});
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    function closeModal() {
      modal.classList.remove('active');
      modalVid.pause();
      modalVid.src = '';
      document.body.style.overflow = '';
    }
    if (modalBg) modalBg.addEventListener('click', closeModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

    var swipeStartX = 0;
    var carRow = document.querySelector('.LFD-vcar-row');
    if (carRow) {
      carRow.addEventListener('touchstart', function (e) { swipeStartX = e.touches[0].clientX; }, { passive: true });
      carRow.addEventListener('touchend', function (e) {
        var dx = swipeStartX - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 40) go(dx > 0 ? current + 1 : current - 1);
      }, { passive: true });
    }

    go(0);
  }

  function setupCTAButton() {
    const btn = document.getElementById('LFD-cta-btn');
    if (!btn || btn.dataset.lfinit) return;
    btn.dataset.lfinit = '1';
    btn.addEventListener('click', function () {
      for (var i = 0; i < CONFIG.addToCartSelectors.length; i++) {
        var orig = document.querySelector(CONFIG.addToCartSelectors[i]);
        if (orig) { orig.click(); break; }
      }
    });
  }

  function patchCTAPrice() {
    const block = document.getElementById('LFD-cta-price-block');
    if (!block || !document.getElementById('LFD-cta-price-loading')) return;
    const { price, originalPrice } = getDynamicPrices();
    if (price <= 0) return;
    const transferPrice = Math.round(price);
    block.innerHTML = `
      <div class="LFD-cta-transfer-hero">
        <div class="LFD-cta-transfer-label"><i class="fa-solid fa-building-columns"></i> Precio de contado</div>
        <div class="LFD-cta-transfer-price">${formatPrice(transferPrice)}</div>
        <div class="LFD-cta-transfer-sub">Transferencia o efectivo</div>
      </div>
      <div class="LFD-cta-cuotas-row">
        <div class="LFD-cta-cuotas-icon"><i class="fa-solid fa-credit-card"></i></div>
        <div class="LFD-cta-cuotas-content">
          <div class="LFD-cta-cuotas-label">Hasta 3 cuotas sin interés con tarjeta de Mercado Pago</div>
          <div class="LFD-cta-cuotas-val">${formatPrice(price / 3)} c/u</div>
        </div>
      </div>
      <div class="LFD-cta-list-row">
        <span class="LFD-cta-list-label">Precio de lista:</span>
        <span class="LFD-cta-list-price">${formatPrice(price)}</span>
        ${originalPrice > 0 ? `<span style="font-size:11px;color:#555;text-decoration:line-through;">${formatPrice(originalPrice)}</span>` : ''}
      </div>      
      `;
  }

  function setupScrollReveal() {
    const els = document.querySelectorAll('#LFD-desc-wrapper .LFD-reveal');
    if (!els.length) return;

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('LFD-vis');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      els.forEach(el => obs.observe(el));
    } else {
      els.forEach(el => el.classList.add('LFD-vis'));
    }
  }

  function init() {
    if (!isTargetProduct()) return;
    DOMCache.init();
    if (DOMCache.wrapper) return;

    const target = DOMCache.target;
    if (!target) return;

    target.style.cssText = 'display:none!important;';
    target.insertAdjacentHTML('afterend', buildHTML());
    DOMCache.wrapper = document.getElementById('LFD-desc-wrapper');

    requestAnimationFrame(() => {
      setupBeforeAfter();
      setupScrollReveal();
      setupVideos();
      setupCTAButton();
      setTimeout(patchCTAPrice, 500);
      setTimeout(patchCTAPrice, 1500);
      setTimeout(patchCTAPrice, 3000);
    });

    console.log('[Luxury Floor Description] ✅ OK');
  }

  let obsInstance = null;
  function initObserver() {
    if (obsInstance) return;
    obsInstance = new MutationObserver(function (_, obs) {
      DOMCache.init();
      if (DOMCache.target && isTargetProduct() && !DOMCache.wrapper) {
        init(); obs.disconnect(); obsInstance = null;
      }
    });
    obsInstance.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(() => { if (obsInstance) { obsInstance.disconnect(); obsInstance = null; } }, 10000);
  }

  injectStyles();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { init(); initObserver(); });
  } else {
    init();
    initObserver();
  }

  if (typeof LS !== 'undefined' && LS.ready) {
    LS.ready
      .then(() => { DOMCache.init(); if (!DOMCache.wrapper) init(); })
      .catch(e => console.warn('[LFD Description] LS.ready error:', e));
  }

})();