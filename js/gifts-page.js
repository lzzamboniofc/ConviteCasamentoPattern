(() => {
  "use strict";

  const wedding = window.WEDDING_CONFIG;
  const giftCfg = window.GIFT_LIST_CONFIG;
  if (!wedding || !giftCfg) {
    console.error("Configuração da lista de presentes não encontrada.");
    return;
  }

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const getPath = (obj, path) => path.split(".").reduce((acc, key) => acc?.[key], obj);
  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  // Mesmo tema e tipografia do convite principal.
  const presets = window.WEDDING_PRESETS || { themes: {}, fonts: {} };
  const presetTheme = presets.themes?.[wedding.themePreset] || {};
  const resolvedTheme = { ...presetTheme, ...(wedding.theme || {}) };
  const presetFonts = presets.fonts?.[wedding.fontPreset] || presets.fonts?.editorial || {};
  const themeMap = {
    paper: "--paper", paper2: "--paper-2", ink: "--ink", inkSoft: "--ink-soft",
    accent: "--accent", accentDark: "--accent-dark", accentWarm: "--accent-warm",
    white: "--white", black: "--black"
  };
  Object.entries(resolvedTheme).forEach(([key, value]) => {
    if (themeMap[key] && value) document.documentElement.style.setProperty(themeMap[key], value);
  });
  if (presetFonts.display) document.documentElement.style.setProperty("--font-display", presetFonts.display);
  if (presetFonts.body) document.documentElement.style.setProperty("--font-body", presetFonts.body);
  if (presetFonts.ui) document.documentElement.style.setProperty("--font-ui", presetFonts.ui);
  $('meta[name="theme-color"]')?.setAttribute("content", resolvedTheme.paper || "#F4F0E8");

  $$('[data-wedding]').forEach((el) => {
    const value = getPath(wedding, el.dataset.wedding);
    if (value !== undefined && value !== null) el.textContent = value;
  });

  document.title = `${giftCfg.title} — ${wedding.couple.firstName} & ${wedding.couple.secondName}`;
  $("#giftPageTitle").textContent = giftCfg.title || "Lista de presentes";
  $("#giftEyebrow").textContent = giftCfg.eyebrow || "Se quiser nos presentear";
  $("#giftIntro").textContent = giftCfg.intro || "";
  $("#giftNotice").textContent = giftCfg.notice || "";
  $("#giftCount").textContent = String(giftCfg.items?.length || 0);

  const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: giftCfg.currency || "BRL" });
  const categoryLabel = (id) => giftCfg.categories?.find((item) => item.id === id)?.label || id;

  // Mantém ?convidado=... ao voltar para o convite.
  const invitationLinks = $$('a[href^="index.html"]');
  if (location.search) {
    invitationLinks.forEach((link) => {
      const raw = link.getAttribute("href");
      const [path, hash = ""] = raw.split("#");
      link.href = `${path}${location.search}${hash ? `#${hash}` : ""}`;
    });
  }

  // Filters
  const filters = $("#giftFilters");
  let activeFilter = location.hash === "#lua-de-mel" ? "lua-de-mel" : "all";
  filters.innerHTML = (giftCfg.categories || []).map((cat) => `
    <button class="gift-filter${cat.id === activeFilter ? " is-active" : ""}" type="button" data-gift-filter="${escapeHtml(cat.id)}" aria-pressed="${cat.id === activeFilter}">${escapeHtml(cat.label)}</button>
  `).join("");

  const grid = $("#giftGrid");
  grid.innerHTML = (giftCfg.items || []).map((item, index) => `
    <article class="gift-card" data-gift-category="${escapeHtml(item.category)}" data-gift-id="${escapeHtml(item.id)}">
      <button class="gift-card__button" type="button" data-open-gift="${escapeHtml(item.id)}" aria-label="Ver QR Code de ${escapeHtml(item.title)}">
        <div class="gift-card__media">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy">
          <span class="gift-card__number">${String(index + 1).padStart(2, "0")}</span>
        </div>
        <span class="gift-card__category">${escapeHtml(categoryLabel(item.category))}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="gift-card__description">${escapeHtml(item.description || "")}</p>
        <div class="gift-card__bottom">
          <strong class="gift-card__price">${currency.format(item.price)}</strong>
          <span class="gift-card__cta">Presentear →</span>
        </div>
      </button>
    </article>
  `).join("");

  const applyFilter = (id, { scroll = false } = {}) => {
    activeFilter = id;
    let visible = 0;
    $$(".gift-card", grid).forEach((card) => {
      const show = id === "all" || card.dataset.giftCategory === id;
      card.hidden = !show;
      if (show) visible += 1;
    });
    $$(".gift-filter", filters).forEach((button) => {
      const selected = button.dataset.giftFilter === id;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    $("#giftEmpty").hidden = visible > 0;
    if (scroll) $("#lista")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  applyFilter(activeFilter);

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gift-filter]");
    if (!button) return;
    applyFilter(button.dataset.giftFilter);
  });
  $$('[data-filter-jump]').forEach((button) => button.addEventListener("click", () => applyFilter(button.dataset.filterJump, { scroll: true })));

  // Modal / QR
  const modal = $("#giftModal");
  const copyButton = $("#giftCopyPix");
  let activeGift = null;
  let previousFocus = null;

  const openGift = (id) => {
    const item = giftCfg.items.find((gift) => gift.id === id);
    if (!item) return;
    activeGift = item;
    previousFocus = document.activeElement;
    $("#giftModalPhoto").src = item.image;
    $("#giftModalPhoto").alt = item.title;
    $("#giftModalCategory").textContent = categoryLabel(item.category);
    $("#giftModalTitle").textContent = item.title;
    $("#giftModalDescription").textContent = item.description || "";
    $("#giftModalPrice").textContent = currency.format(item.price);
    $("#giftModalQr").src = item.qrImage;
    $("#giftModalQr").alt = `QR Code de ${item.title} no valor de ${currency.format(item.price)}`;

    const realPixAvailable = giftCfg.payment?.mode === "real" && item.pixCode;
    copyButton.hidden = !realPixAvailable;
    $("#giftModalNote").textContent = realPixAvailable
      ? "Confira o valor no aplicativo do seu banco antes de concluir o pagamento."
      : (giftCfg.payment?.instructions || "QR Code demonstrativo. Substitua pelo PIX real antes de publicar.");

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("gift-modal-open");
    window.setTimeout(() => $(".gift-modal__close", modal)?.focus(), 30);
  };

  const closeGift = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("gift-modal-open");
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
  };

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-gift]");
    if (button) openGift(button.dataset.openGift);
  });
  $$('[data-gift-close]', modal).forEach((button) => button.addEventListener("click", closeGift));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeGift();
  });
  copyButton.addEventListener("click", async () => {
    if (!activeGift?.pixCode) return;
    try {
      await navigator.clipboard.writeText(activeGift.pixCode);
      copyButton.textContent = "PIX copiado";
      window.setTimeout(() => { copyButton.textContent = "Copiar PIX copia e cola"; }, 1800);
    } catch (_) {
      copyButton.textContent = "Não foi possível copiar";
    }
  });

  // Header mobile + scroll progress
  const menuToggle = $("#giftMenuToggle");
  menuToggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("gift-menu-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  $$("#giftNav a").forEach((link) => link.addEventListener("click", () => {
    document.body.classList.remove("gift-menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const percent = max > 0 ? (scrollY / max) * 100 : 0;
    $("#giftProgressBar").style.width = `${Math.min(100, percent)}%`;
    $("#giftBackToTop").classList.toggle("is-visible", scrollY > Math.min(420, innerHeight * .6));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
