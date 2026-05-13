/* ──────────────────────────────────────────────
   ГИДРАЗИЛ — UI behaviours
   ────────────────────────────────────────────── */

(function () {
  const D = window.GIDRAZIL;
  if (!D) return;
  const BASE = (window.SITE_BASE || '').replace(/\/$/, '');

  // ───────────────────────────────
  // CAROUSEL
  // ───────────────────────────────
  function initCarousel() {
    const wrap = document.querySelector('[data-carousel]');
    if (!wrap) return;
    const track = wrap.querySelector('.carousel-track');
    const dotsBox = wrap.querySelector('.carousel-dots');
    const prevBtn = wrap.querySelector('[data-prev]');
    const nextBtn = wrap.querySelector('[data-next]');

    // build slides
    track.innerHTML = D.promos.map((p, i) => `
      <article class="promo-card ${p.style}">
        <span class="corner-num">${String(i+1).padStart(2,'0')} / ${String(D.promos.length).padStart(2,'0')}</span>
        <span class="badge"><span class="dot"></span> ${p.tag}</span>
        <h3>${p.title}</h3>
        <div class="promo-meta">
          <div class="left"><p>${p.desc}</p></div>
          <div class="price">
            <div class="num">${p.price}</div>
            <div class="unit">${p.unit}</div>
          </div>
        </div>
      </article>
    `).join('');

    // dots
    const slidesPerView = () => window.innerWidth <= 720 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
    let pages = Math.max(1, D.promos.length - slidesPerView() + 1);
    let idx = 0;
    function renderDots() {
      pages = Math.max(1, D.promos.length - slidesPerView() + 1);
      dotsBox.innerHTML = '';
      for (let i = 0; i < pages; i++) {
        const b = document.createElement('button');
        if (i === idx) b.classList.add('active');
        b.addEventListener('click', () => { idx = i; apply(); });
        dotsBox.appendChild(b);
      }
    }
    function apply() {
      const card = track.querySelector('.promo-card');
      if (!card) return;
      const cardW = card.getBoundingClientRect().width + 20;
      track.style.transform = `translateX(${-idx * cardW}px)`;
      [...dotsBox.children].forEach((b, i) => b.classList.toggle('active', i === idx));
    }
    function step(d) { idx = (idx + d + pages) % pages; apply(); }
    prevBtn?.addEventListener('click', () => step(-1));
    nextBtn?.addEventListener('click', () => step(1));
    window.addEventListener('resize', () => { renderDots(); idx = Math.min(idx, pages-1); apply(); });

    renderDots();
    apply();

    // auto-advance
    let timer = setInterval(() => step(1), 6500);
    wrap.addEventListener('mouseenter', () => clearInterval(timer));
    wrap.addEventListener('mouseleave', () => timer = setInterval(() => step(1), 6500));
  }

  // ───────────────────────────────
  // SERVICES TILES — placeholder art
  // ───────────────────────────────
  function initServiceTiles() {
    document.querySelectorAll('[data-svc-art]').forEach((el) => {
      const slug = el.dataset.svcArt;
      el.innerHTML = artSVG(slug);
    });
  }
  function artSVG(slug) {
    const map = {
      "tonirovka":   `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="20" y="35" width="160" height="70" rx="8"/><rect x="35" y="50" width="55" height="40" rx="4"/><rect x="110" y="50" width="55" height="40" rx="4" fill="currentColor" opacity="0.5"/></svg>`,
      "okleyka-zon": `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M30 90 Q60 40 100 40 Q140 40 170 90"/><circle cx="60" cy="90" r="10"/><circle cx="140" cy="90" r="10"/><path d="M40 65 L160 65" stroke-dasharray="3 5"/></svg>`,
      "polnaya-okl": `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 95 L40 60 L160 60 L180 95 Z"/><path d="M40 95 L40 110 M160 95 L160 110"/><circle cx="55" cy="95" r="9"/><circle cx="145" cy="95" r="9"/><path d="M70 60 L130 60" stroke-dasharray="2 4"/></svg>`,
      "polirovka":   `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="100" cy="70" r="40"/><circle cx="100" cy="70" r="25"/><circle cx="100" cy="70" r="10"/><path d="M65 35 L75 45 M125 35 L135 45 M65 95 L75 105"/></svg>`,
      "himchistka":  `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="40" y="40" width="120" height="60" rx="8"/><path d="M55 55 L75 75 M85 55 L65 75 M105 60 L115 70 M105 70 L115 60 M130 55 L150 75 M130 75 L150 55"/></svg>`,
      "deteyling":   `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M40 70 L70 70 L80 50 L120 50 L130 70 L160 70"/><circle cx="70" cy="80" r="10"/><circle cx="130" cy="80" r="10"/><path d="M85 60 L115 60" stroke-dasharray="2 3"/><circle cx="100" cy="40" r="3" fill="currentColor"/></svg>`,
      "salon":       `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="60" y="30" width="80" height="60" rx="6"/><path d="M50 90 L150 90 L160 110 L40 110 Z"/><circle cx="100" cy="50" r="4"/></svg>`,
      "moyka":       `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M30 90 L50 55 L150 55 L170 90 Z"/><circle cx="60" cy="90" r="10"/><circle cx="140" cy="90" r="10"/><path d="M70 30 Q72 35 70 40 M90 30 Q92 35 90 40 M110 30 Q112 35 110 40 M130 30 Q132 35 130 40"/></svg>`,
      "dop":         `<svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="40" y="40" width="40" height="40" rx="4"/><rect x="90" y="40" width="40" height="40" rx="4"/><rect x="140" y="40" width="20" height="40" rx="4"/><rect x="40" y="90" width="40" height="20" rx="4"/><rect x="90" y="90" width="70" height="20" rx="4"/></svg>`,
    };
    return map[slug] || `<svg viewBox="0 0 200 140"><rect x="20" y="20" width="160" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`;
  }

  // ───────────────────────────────
  // PRICING CALCULATOR
  // ───────────────────────────────
  function initPricing() {
    const root = document.querySelector('[data-pricing]');
    if (!root) return;
    const brandBox = root.querySelector('[data-brands]');
    const modelBox = root.querySelector('[data-models]');
    const tabsBox = root.querySelector('[data-svc-tabs]');
    const tableBox = root.querySelector('[data-table]');
    const totalEl = root.querySelector('[data-total]');
    const currentBrandEl = root.querySelector('[data-current-brand]');
    const currentModelEl = root.querySelector('[data-current-model]');
    const currentSvcEl = root.querySelector('[data-current-svc]');

    const state = {
      brand: "BMW",
      model: "5 серии",
      svcKey: "moyka",
      selected: new Set(),
    };

    // brands
    brandBox.innerHTML = D.carBrands.map(b => `
      <button class="brand-chip ${b===state.brand?'active':''}" data-brand="${b}">${b}</button>
    `).join('');
    brandBox.addEventListener('click', e => {
      const btn = e.target.closest('[data-brand]');
      if (!btn) return;
      state.brand = btn.dataset.brand;
      state.model = D.carModels[state.brand][0];
      renderModels();
      renderTable();
      brandBox.querySelectorAll('.brand-chip').forEach(b => b.classList.toggle('active', b.dataset.brand === state.brand));
    });

    function renderModels() {
      const models = D.carModels[state.brand] || [];
      modelBox.innerHTML = models.map(m => `
        <button class="model-chip ${m===state.model?'active':''}" data-model="${m}">${m} <span class="mono" style="font-size:11px;color:inherit;opacity:0.55;margin-left:8px">${D.sizeClass[m]||'M'}</span></button>
      `).join('');
      currentBrandEl.textContent = state.brand;
      currentModelEl.textContent = state.model;
    }
    modelBox.addEventListener('click', e => {
      const btn = e.target.closest('[data-model]');
      if (!btn) return;
      state.model = btn.dataset.model;
      renderModels();
      renderTable();
    });

    // service tabs
    const svcKeys = Object.keys(D.priceMatrix);
    tabsBox.innerHTML = svcKeys.map(k => `
      <button class="service-tab ${k===state.svcKey?'active':''}" data-svc="${k}">${D.priceMatrix[k].label}</button>
    `).join('');
    tabsBox.addEventListener('click', e => {
      const btn = e.target.closest('[data-svc]');
      if (!btn) return;
      state.svcKey = btn.dataset.svc;
      state.selected.clear();
      tabsBox.querySelectorAll('.service-tab').forEach(t => t.classList.toggle('active', t.dataset.svc === state.svcKey));
      renderTable();
    });

    function renderTable() {
      const size = D.sizeClass[state.model] || "M";
      const svc = D.priceMatrix[state.svcKey];
      currentSvcEl.textContent = svc.label;

      tableBox.innerHTML = `
        <table class="price-table">
          <thead>
            <tr>
              <th style="width:46px"></th>
              <th>Услуга</th>
              <th style="text-align:right">Время</th>
              <th style="text-align:right">Цена ${size}</th>
            </tr>
          </thead>
          <tbody>
            ${svc.items.map((it, i) => `
              <tr>
                <td><input type="checkbox" data-item="${it.id}" ${state.selected.has(it.id)?'checked':''} style="width:18px;height:18px;accent-color:var(--accent)"></td>
                <td>
                  <div class="item-title">${it.title}</div>
                  <div class="item-meta">${it.sub}</div>
                </td>
                <td class="dur">${it.dur}</td>
                <td class="amount">${formatN(it.price[size])} ₽</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      tableBox.querySelectorAll('input[data-item]').forEach(cb => {
        cb.addEventListener('change', () => {
          const id = cb.dataset.item;
          if (cb.checked) state.selected.add(id); else state.selected.delete(id);
          updateTotal();
        });
      });
      updateTotal();
    }
    function updateTotal() {
      const size = D.sizeClass[state.model] || "M";
      const svc = D.priceMatrix[state.svcKey];
      const sum = svc.items.filter(it => state.selected.has(it.id)).reduce((a, b) => a + b.price[size], 0);
      totalEl.textContent = formatN(sum) + " ₽";
    }

    renderModels();
    renderTable();
  }

  function formatN(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F');
  }

  // ───────────────────────────────
  // EXTRAS GRID
  // ───────────────────────────────
  function initExtras() {
    const box = document.querySelector('[data-extras]');
    if (!box) return;
    box.innerHTML = D.extras.map(x => `
      <article class="extra-card">
        <div class="ph">
          <span class="tag">${x.title.toUpperCase()}</span>
          <span class="id">№ ${x.id}</span>
          <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="1.2">
            <path d="${x.iconPath}"/>
          </svg>
        </div>
        <h4>${x.title}</h4>
        <p class="desc">${x.desc}</p>
        <div class="foot">
          <span class="price">${x.price}</span>
          <button class="add" aria-label="Добавить">+</button>
        </div>
      </article>
    `).join('');
  }

  // ───────────────────────────────
  // BOOKING FORM
  // ───────────────────────────────
  function initBooking() {
    const form = document.querySelector('[data-booking]');
    if (!form) return;
    const dateInput = form.querySelector('input[name="date"]');
    if (dateInput) {
      const tom = new Date(); tom.setDate(tom.getDate()+1);
      dateInput.min = new Date().toISOString().split('T')[0];
      dateInput.value = tom.toISOString().split('T')[0];
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('[data-status]');
      const submit = form.querySelector('button[type="submit"]');
      submit.disabled = true;
      submit.textContent = "Отправляем в МАХ…";
      setTimeout(() => {
        submit.disabled = false;
        submit.textContent = "Отправлено ✓";
        if (status) {
          status.style.display = 'block';
          status.textContent = "Заявка отправлена в МАХ. Менеджер ответит в течение 15 минут.";
        }
        setTimeout(() => {
          submit.textContent = "Записаться";
          if (status) status.style.display = 'none';
          form.reset();
        }, 4500);
      }, 800);
    });
  }

  // ───────────────────────────────
  // SERVICES NAV (build header link too)
  // ───────────────────────────────
  function buildServicesGrid() {
    const grid = document.querySelector('[data-services-grid]');
    if (!grid) return;
    // 9 services, varied tile sizes
    const sizes = ["size-6","size-6","size-4","size-4","size-4","size-6","size-6","size-4","size-8"];
    const flats = [false,false,true,false,false,false,true,false,false];
    grid.innerHTML = D.services.map((s, i) => `
      <a class="svc-tile ${sizes[i]||'size-4'} ${flats[i]?'flat':''}" href="${BASE}/service?s=${s.slug}">
        <span class="ph-fill"></span>
        <span class="ph-mark">${s.num} · ${s.title}</span>
        <span class="ph-num">[gdz-${s.num}]</span>
        <span class="ph-art" data-svc-art="${s.slug}"></span>
        <h3>${s.title}</h3>
        <div class="svc-line">
          <p>${s.short}</p>
          <span class="open">Открыть <span style="font-family:var(--mono)">→</span></span>
        </div>
      </a>
    `).join('');
    initServiceTiles();
  }

  // ───────────────────────────────
  // SERVICE PAGE
  // ───────────────────────────────
  function initServicePage() {
    const root = document.querySelector('[data-service-page]');
    if (!root) return;
    const params = new URLSearchParams(location.search);
    const slug = params.get('s') || D.services[0].slug;
    const svc = D.services.find(x => x.slug === slug) || D.services[0];
    const matrix = D.priceMatrix[slug];

    document.title = `${svc.title} — ГИДРАЗИЛ`;
    root.querySelector('[data-svc-num]').textContent = svc.num;
    root.querySelector('[data-svc-title]').textContent = svc.title.toUpperCase();
    root.querySelector('[data-svc-short]').textContent = svc.short;
    root.querySelector('[data-crumb-name]').textContent = svc.title;

    // related
    const idx = D.services.findIndex(x => x.slug === slug);
    const a = D.services[(idx+1)%D.services.length];
    const b = D.services[(idx+2)%D.services.length];
    const c = D.services[(idx+3)%D.services.length];
    const relBox = root.querySelector('[data-related]');
    relBox.innerHTML = [a,b,c].map(s => `
      <a href="${BASE}/service?s=${s.slug}">
        <span class="n">${s.num} · следующая услуга</span>
        <span class="t">${s.title}</span>
        <span class="body-sm" style="margin-top:6px">${s.short}</span>
      </a>
    `).join('');

    // pricing teaser (use matrix M size if exists)
    const teaserBox = root.querySelector('[data-price-teaser]');
    if (matrix && teaserBox) {
      teaserBox.innerHTML = `
        <div class="svc-list">
          ${matrix.items.map((it,i) => `
            <div class="row">
              <span class="n">${String(i+1).padStart(2,'0')}</span>
              <div class="t">
                <div class="title">${it.title}</div>
                <div class="sub">${it.sub}</div>
              </div>
              <span class="v">от ${formatN(it.price.S)} ₽</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (teaserBox) {
      teaserBox.innerHTML = `<p class="lede" style="color:var(--text-3)">Прайс рассчитываем индивидуально по фотографиям и осмотру — оставьте заявку, ответим в течение 15 минут.</p>`;
    }

    // service art into hero photos
    root.querySelectorAll('[data-svc-art]').forEach(el => {
      el.innerHTML = artSVG(slug);
    });

    // pre-select service in booking form if present
    const svcInput = root.querySelector('select[name="service"]');
    if (svcInput) {
      svcInput.value = slug;
    }
  }

  // ───────────────────────────────
  // YEAR
  // ───────────────────────────────
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  }

  // ───────────────────────────────
  // boot
  // ───────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    buildServicesGrid();
    initCarousel();
    initPricing();
    initExtras();
    initBooking();
    initServicePage();
    initYear();
  });

  window.GIDRAZIL_UI = { artSVG };
})();
