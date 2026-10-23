(function () {
  'use strict';

  /* ── RESOURCES ───────────────────────────────────────────────── */
  function injectResources() {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fa = document.createElement('link');
      fa.rel = 'stylesheet';
      fa.crossOrigin = 'anonymous';
      fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fa);
    }
  }

  /* ── STYLES ──────────────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('LFC-styles')) return;
    const s = document.createElement('style');
    s.id = 'LFC-styles';
    s.textContent = getCSS();
    document.head.appendChild(s);
  }

  function getCSS() {
    return `
      /* ═══════════════════════════════════════
         CARD
      ═══════════════════════════════════════ */
      .js-products-featured-container {
        padding: 0 18px;
      }
      .js-item-product {
        padding: 0 8px !important;
      }
      .js-item-product .item {
        background: #FFFFFF !important;
        border: 1px solid #E5E7EB !important;
        border-radius: 20px !important;
        overflow: hidden !important;
        transition: border-color 0.25s ease, box-shadow 0.25s ease !important;
        box-shadow: 0 1px 6px rgba(0,0,0,0.06) !important;
      }
      .js-item-product .item:hover {
        border-color: #C8A951 !important;
        box-shadow: 0 6px 24px rgba(0,0,0,0.10) !important;
      }

      /* ═══════════════════════════════════════
         IMAGE AREA
      ═══════════════════════════════════════ */
      .js-item-product .js-product-item-image-container-private,
      .js-item-product .product-item-image-container {
        background: #F4F4F5 !important;
        overflow: hidden !important;
      }
      .js-item-product .js-item-image-padding {
        padding-bottom: 133.3333% !important;
      }
      .js-item-product .product-item-image-featured {
        opacity: 1 !important;
        transition: opacity 0.4s ease !important;
        will-change: opacity !important;
      }
      .js-item-product .item:hover .product-item-image-featured {
        opacity: 0 !important;
      }
      .js-item-product .product-item-image-secondary {
        display: block !important;
        opacity: 0 !important;
        transition: opacity 0.4s ease !important;
        will-change: opacity !important;
      }
      .js-item-product .item:hover .product-item-image-secondary {
        opacity: 1 !important;
      }

      /* ═══════════════════════════════════════
         LABELS (% OFF / ENVÍO GRATIS)
      ═══════════════════════════════════════ */
      .js-item-product .js-offer-label {
        background: #C8A951 !important;
        color: #1A1A1A !important;
        border-radius: 10px !important;
        font-weight: 700 !important;
        padding: 1px 5px;
      }
      .js-item-product .js-free-shipping-minimum-label {
        background: #16A34A !important;
        color: #fff !important;
        border-radius: 10px !important;
        font-weight: 600 !important;
      }

      /* ═══════════════════════════════════════
         DESCRIPTION BOX
      ═══════════════════════════════════════ */
      .js-item-product .item-description {
        padding: 13px 14px 12px !important;
        background: #FFFFFF !important;
        text-align: left !important;
      }

      /* ═══════════════════════════════════════
         PRODUCT NAME
      ═══════════════════════════════════════ */
      .js-item-product .item-name {
        font-size: 13px !important;
        font-weight: 600 !important;
        color: #111827 !important;
        opacity: 1 !important;
        margin-bottom: 6px !important;
        line-height: 1.45 !important;
        text-align: left !important;
        text-decoration: none !important;
      }

      /* ═══════════════════════════════════════
         PRECIOS NATIVOS TN
      ═══════════════════════════════════════ */
      .js-item-product .item-price-container {
        display: flex !important;
        flex-wrap: wrap !important;
        align-items: baseline !important;
        gap: 6px !important;
        text-align: left !important;
        margin-bottom: 2px !important;
      }
      .js-item-product .item-price {
        font-size: 15px !important;
        font-weight: 700 !important;
        color: #111827 !important;
      }
      .js-item-product .price-compare {
        font-size: 12px !important;
        color: #9CA3AF !important;
        text-decoration: line-through !important;
      }

      /* Ocultar bloque nativo de transferencia e installments */
      .js-item-product .payment-discount-price-product-container {
        display: none !important;
      }
      .js-item-product .js-max-installments-container,
      .js-item-product .item-installments {
        display: none !important;
      }

      /* ═══════════════════════════════════════
         BLOQUE TRANSFERENCIA — nuevo diseño
      ═══════════════════════════════════════ */
      .LFC-transfer {
        background: linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%);
        border: 1px solid #86EFAC;
        border-radius: 12px;
        padding: 10px 12px 8px;
        margin: 8px 0 6px;
      }

      /* Fila superior: ícono + label */
      .LFC-t-header {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 4px;
      }
      .LFC-t-icon {
        font-size: 16px !important;
        color: #15803D !important;
        flex-shrink: 0;
        display:none;
      }
      .LFC-t-label-text {
        font-size: 10px !important;
        color: #166534 !important;
        font-weight: 600 !important;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }

      /* Fila del precio */
      .LFC-t-price-row {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
      .LFC-t-price {
        font-size: 34px !important;
        font-weight: 800 !important;
        color: #15803D !important;
        letter-spacing: -0.5px;
        line-height: 1;
      }
      .LFC-free {
        display: inline-flex; align-items: center; gap: 6px;
        margin: 0 0 8px; padding: 4px 10px;
        border-radius: 999px; background: #111827; color: #F5D98B !important;
        font-size: 11px !important; font-weight: 800 !important; letter-spacing: .4px; text-transform: uppercase;
      }
      .LFC-free i { color: #F5D98B !important; font-size: 11px !important; display: inline-block !important; }
      .LFC-t-badge {
        display: inline-block;
        background: #16A34A;
        color: #fff;
        font-size: 11px !important;
        font-weight: 700 !important;
        padding: 2px 8px;
        border-radius: 20px;
        white-space: nowrap;
        letter-spacing: 0.3px;
      }

      /* Cuotas */
      .LFC-t-installments {
        font-size: 18px !important;
        color: #374151 !important;
        font-weight: 800 !important;
        margin-top: 6px;
        padding-top: 6px;
        border-top: 1px dashed #BBF7D0;
        display: block;
        line-height: 1.35;
      }
      .LFC-t-installments i {
        font-size: 16px !important;
        color: #6B7280 !important;
        display:none;
      }
      .LFC-t-installments strong {
        color: #111827;
        font-weight: 700;
      }

      /* ═══════════════════════════════════════
         BOTÓN CTA
      ═══════════════════════════════════════ */
      .js-item-product .item-actions {
        padding-top: 8px !important;
        margin-top: 6px !important;
        border-top: 1px solid #F3F4F6 !important;
      }

      .js-item-product .js-addtocart.cart {
        background: linear-gradient(135deg, #C8A951, #d7a52f) !important;
        color: #1A1A1A !important;
        border: none !important;
        border-radius: 12px !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.6px !important;
        padding: 10px 14px !important;
        width: 100% !important;
        cursor: pointer !important;
        display: block !important;
        text-decoration: none !important;
        transition: box-shadow 0.22s ease, opacity 0.22s ease !important;
      }
      .js-item-product .js-addtocart.cart:hover {
        opacity: 0.88 !important;
        box-shadow: 0 4px 14px rgba(200,169,81,0.4) !important;
        text-decoration: none !important;
      }

      .js-item-product .item-actions .js-quickshop-modal-open {
        background: linear-gradient(135deg, #C8A951, #d7a52f) !important;
        color: #1A1A1A !important;
        border: none !important;
        border-radius: 12px !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.6px !important;
        padding: 10px 14px !important;
        width: 100% !important;
        cursor: pointer !important;
        display: block !important;
        text-align: center !important;
        text-decoration: none !important;
        transition: box-shadow 0.22s ease, opacity 0.22s ease !important;
        box-sizing: border-box !important;
      }
      .js-item-product .item-actions .js-quickshop-modal-open:hover {
        opacity: 0.88 !important;
        box-shadow: 0 4px 14px rgba(200,169,81,0.4) !important;
        text-decoration: none !important;
      }

      .js-item-product .js-open-quickshop-icon,
      .js-item-product .item-quickshop-icon {
        display: none !important;
      }

      .js-item-product .item-link,
      .js-item-product .item-link:hover,
      .js-item-product .item-link:focus,
      .js-item-product .item-link:active,
      .js-item-product a,
      .js-item-product a:hover {
        text-decoration: none !important;
      }

      /* ═══════════════════════════════════════
         RESPONSIVE — mobile
         (LFC-transfer SIEMPRE visible)
      ═══════════════════════════════════════ */
      @media (max-width: 540px) {
        .js-item-product .js-addtocart.cart {
          padding: 8px 12px !important;
          font-size: 12px !important;
        }
        .js-item-product .item-actions .js-quickshop-modal-open {
          padding: 8px 12px !important;
          font-size: 12px !important;
        }
        .js-item-product .item-name  { font-size: 12px !important; }
        .js-item-product .item-price { font-size: 14px !important; }

        /* Precio transferencia un poco más chico en mobile */
        .LFC-t-price { font-size: 17px !important; }
        .LFC-transfer { padding: 8px 10px 7px; }

        /* Ocultar solo el texto "Pagando con transferencia" pero dejar precio y badge */
        .LFC-t-label-text { font-size: 9px !important; }
        .LFC-t-header { margin-bottom: 3px; }

        .LFC-t-installments { font-size: 10px !important; }
      }
    `;
  }
  /* ── UTILS ───────────────────────────────────────────────────── */
  function formatARS(amount) {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency', currency: 'ARS',
      minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(amount);
  }

  /* ── FORMATEAR PRECIOS TN ────────────────────────────────────── */
  function formatPrices(card) {
    const priceEl = card.querySelector('.js-price-display');
    if (priceEl) {
      const raw = parseInt(priceEl.getAttribute('data-product-price') || '0', 10);
      const formatted = raw > 0
        ? formatARS(raw / 100)
        : priceEl.textContent.trim().replace(/,\d{2}\s*$/, '');
      if (priceEl.textContent.trim() !== formatted) priceEl.textContent = formatted;
    }

    const compareEl = card.querySelector('.js-compare-price-display');
    if (compareEl) {
      const cleaned = compareEl.textContent.trim().replace(/,\d{2}\s*$/, '');
      if (compareEl.textContent.trim() !== cleaned) compareEl.textContent = cleaned;
    }
  }

  /* ── PRECIO TRANSFERENCIA (con % calculado) ──────────────────── */
  function getTransferInfo(card) {
    const priceEl = card.querySelector('[data-product-price]');
    const originalCents = priceEl
      ? parseInt(priceEl.getAttribute('data-product-price') || '0', 10)
      : 0;

    const discountEl = card.querySelector('.js-payment-discount-price-product');
    if (discountEl) {
      const raw = parseInt(discountEl.getAttribute('data-priceraw-without-shipping') || '0', 10);
      if (raw > 0) {
        return { text: formatARS(Math.round(originalCents / 100 * 0.95)), pct: 5 };
      }
    }

    if (originalCents > 0) {
      return {
        text: formatARS(Math.round(originalCents / 100 * 0.95)),
        pct: 5
      };
    }

    return null;
  }

  /* ── FORMAS DE PAGO EN CUOTAS ───────────────────────────────────
     Débito: GOcuotas (siempre sin interés, lo cobra GOcuotas).
     Crédito: lo que diga Tienda Nube para 3 cuotas de Mercado Pago
     (si tiene interés muestra el valor con interés).
     GOCUOTAS_CUOTAS: poner 2, 3 o 4 cuando se confirme en el panel de GOcuotas. */
  var GOCUOTAS_CUOTAS = 4;
  /* Tarjeta de crédito de Mercado Pago: hasta 3 cuotas sin interés (promo activa desde oct 2026). Poner 0 para sacarlo. */
  var MP_CARD_CUOTAS = 3;

  function getCreditInstallment(card) {
    try {
      var ve = card.querySelector('[data-variants]');
      var v = ve && JSON.parse(ve.getAttribute('data-variants'));
      var d = v && v[0] && v[0].installments_data && JSON.parse(v[0].installments_data);
      var p = d && (d['Mercado Pago'] || d['Pago Nube']);
      if (p && p[3]) return p[3];
    } catch (e) {}
    return null;
  }

  function getPayLinesHTML(card) {
    var pe = card.querySelector('[data-product-price]');
    var price = pe ? parseInt(pe.getAttribute('data-product-price') || '0', 10) / 100 : 0;
    var deb = (GOCUOTAS_CUOTAS > 1 && price > 0)
      ? 'Débito: hasta ' + GOCUOTAS_CUOTAS + ' × <strong>' + formatARS(Math.round(price / GOCUOTAS_CUOTAS)) + '</strong> sin interés'
      : 'Débito: cuotas sin interés con <strong>GOcuotas</strong>';
    var mpCard = (MP_CARD_CUOTAS > 1 && price > 0)
      ? 'Tarjeta Mercado Pago: hasta ' + MP_CARD_CUOTAS + ' × <strong>' + formatARS(Math.round(price / MP_CARD_CUOTAS)) + '</strong> sin interés'
      : '';
    var cr = getCreditInstallment(card);
    var cred = cr
      ? (mpCard ? 'Otras tarjetas: ' : 'Crédito: ') + '3 × <strong>' + formatARS(cr.installment_value) + '</strong>' + (cr.without_interests ? ' sin interés' : '')
      : 'Crédito: en cuotas con <strong>Mercado Pago</strong>';
    return '<div class="LFC-t-installments"><i class="fa-solid fa-credit-card"></i>' + deb + '</div>' +
           (mpCard ? '<div class="LFC-t-installments"><i class="fa-solid fa-credit-card"></i>' + mpCard + '</div>' : '') +
           '<div class="LFC-t-installments"><i class="fa-regular fa-credit-card"></i>' + cred + '</div>';
  }

  /* ── CUOTAS (viejo, ya no se usa en pantalla) ───────────────── */
  function getInstallmentsText(card) {
    try {
      const variantsEl = card.querySelector('[data-variants]');
      if (variantsEl) {
        const variants = JSON.parse(variantsEl.getAttribute('data-variants'));
        if (variants && variants[0] && variants[0].installments_data) {
          const data = JSON.parse(variants[0].installments_data);
          for (const provider of Object.values(data)) {
            if (provider[3] && provider[3].without_interests) {
              return '3 cuotas sin interés con Mercado Pago de ' + formatARS(provider[3].installment_value);
            }
          }
        }
      }
    } catch (e) {}

    const priceEl = card.querySelector('[data-product-price]');
    if (priceEl) {
      const cents = parseInt(priceEl.getAttribute('data-product-price') || '0', 10);
      if (cents > 0) {
        return '3 cuotas sin interés con Mercado Pago de ' + formatARS(Math.round(cents / 100 / 3));
      }
    }

    return null;
  }

  /* ── RENDER BLOQUE TRANSFERENCIA ─────────────────────────────── */
  function renderBanner(card) {
    const priceContainer = card.querySelector('.item-price-container');
    if (!priceContainer) return;

    const transferInfo = getTransferInfo(card);
    if (!transferInfo) return;

    const installmentsText = null;

    // Parsear cuotas para resaltar el monto
    let installmentsHTML = '';
    if (installmentsText) {
      // "3 cuotas sin interés de $X.XXX" → resaltar el monto
      const match = installmentsText.match(/^(.+de\s*)(\$[\d.,]+)$/);
      if (match) {
        installmentsHTML =
          '<div class="LFC-t-installments">' +
            '<i class="fa-solid fa-credit-card"></i>' +
            match[1] + '<strong>' + match[2] + '</strong>' +
          '</div>';
      } else {
        installmentsHTML =
          '<div class="LFC-t-installments">' +
            '<i class="fa-solid fa-credit-card"></i>' +
            installmentsText +
          '</div>';
      }
    }

    let banner = card.querySelector('.LFC-transfer');
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'LFC-transfer';
      priceContainer.insertAdjacentElement('afterend', banner);
    }

    var freeShip = [].some.call(card.querySelectorAll('.js-shipping-label-private:not(.js-free-shipping-minimum-label)'), function (el) {
      return !el.classList.contains('hidden') && /gratis/i.test(el.textContent);
    });
    banner.innerHTML =
      (freeShip ? '<div class="LFC-free"><i class="fa-solid fa-truck-fast"></i> Envío gratis</div>' : '') +
      '<div class="LFC-t-header">' +
        '<i class="fa-solid fa-building-columns LFC-t-icon"></i>' +
        '<span class="LFC-t-label-text">Por transferencia</span>' +
      '</div>' +
      '<div class="LFC-t-price-row">' +
        '<span class="LFC-t-price">' + transferInfo.text + '</span>' +
        (transferInfo.pct ? '<span class="LFC-t-badge">' + transferInfo.pct + '% OFF</span>' : '') +
      '</div>' +
      getPayLinesHTML(card);
  }

  /* ── ENHANCE ONE CARD ────────────────────────────────────────── */
  function enhanceCard(card) {
    if (card.dataset.lfcInit) return;
    card.dataset.lfcInit = '1';

    renderBanner(card);
    formatPrices(card);

    const priceContainer = card.querySelector('.item-price-container');
    if (priceContainer) {
      new MutationObserver(function () { renderBanner(card); formatPrices(card); })
        .observe(priceContainer, { childList: true, subtree: true, characterData: true });
    }

    const discountEl = card.querySelector('.js-payment-discount-price-product');
    if (discountEl) {
      new MutationObserver(function () { renderBanner(card); })
        .observe(discountEl, {
          attributes: true, attributeFilter: ['data-priceraw-without-shipping'],
          childList: true, subtree: true, characterData: true
        });
    }

    var retries = 0;
    var ivl = setInterval(function () {
      formatPrices(card);
      var b = card.querySelector('.LFC-transfer');
      if (!b) { clearInterval(ivl); return; }
      if (!b.querySelector('.LFC-t-installments')) {
        renderBanner(card);
      }
      if (++retries >= 6) clearInterval(ivl);
    }, 800);
  }

  /* ── ENHANCE ALL ─────────────────────────────────────────────── */
  function enhanceAll() {
    document.querySelectorAll('.js-item-product').forEach(enhanceCard);
  }

  /* ── WATCH DOM (scroll infinito / SPA) ──────────────────────── */
  function watchDOM() {
    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return;
          if (node.classList && node.classList.contains('js-item-product')) enhanceCard(node);
          if (node.querySelectorAll) node.querySelectorAll('.js-item-product').forEach(enhanceCard);
        });
      });
    }).observe(document.body || document.documentElement, { childList: true, subtree: true });
  }

  /* ── INIT ────────────────────────────────────────────────────── */
  function init() {
    injectResources();
    injectStyles();
    enhanceAll();
    watchDOM();
    console.log('[Luxury Floor Cards] ✅ OK');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  if (typeof LS !== 'undefined' && LS.ready) {
    LS.ready
      .then(function () { enhanceAll(); })
      .catch(function (e) { console.warn('[LFC] LS.ready:', e); });
  }

})();