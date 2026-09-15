(() => {
  "use strict";

  const cfg = window.WEDDING_CONFIG;
  if (!cfg) {
    console.error("WEDDING_CONFIG não encontrado. Verifique js/config.js.");
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

  // THEME + TYPOGRAPHY ----------------------------------------
  // Escolha o preset em config.js. `theme` continua disponível para
  // sobrescrever apenas uma ou duas cores sem duplicar a paleta inteira.
  const presets = window.WEDDING_PRESETS || { themes: {}, fonts: {} };
  const presetTheme = presets.themes?.[cfg.themePreset] || {};
  const resolvedTheme = { ...presetTheme, ...(cfg.theme || {}) };
  const presetFonts = presets.fonts?.[cfg.fontPreset] || presets.fonts?.editorial || {};
  const heroPresetFonts = presets.fonts?.[cfg.heroFontPreset] || presetFonts;

  const themeMap = {
    paper: "--paper",
    paper2: "--paper-2",
    ink: "--ink",
    inkSoft: "--ink-soft",
    accent: "--accent",
    accentDark: "--accent-dark",
    accentWarm: "--accent-warm",
    white: "--white",
    black: "--black"
  };
  Object.entries(resolvedTheme).forEach(([key, value]) => {
    if (themeMap[key] && value) document.documentElement.style.setProperty(themeMap[key], value);
  });
  if (presetFonts.display) document.documentElement.style.setProperty("--font-display", presetFonts.display);
  if (presetFonts.body) document.documentElement.style.setProperty("--font-body", presetFonts.body);
  if (presetFonts.ui) document.documentElement.style.setProperty("--font-ui", presetFonts.ui);
  if (heroPresetFonts.display) document.documentElement.style.setProperty("--font-hero-display", heroPresetFonts.display);
  if (heroPresetFonts.body) document.documentElement.style.setProperty("--font-hero-body", heroPresetFonts.body);
  if (heroPresetFonts.ui) document.documentElement.style.setProperty("--font-hero-ui", heroPresetFonts.ui);

  // Cores independentes para textos posicionados sobre fotografias.
  // Podem ser alteradas diretamente em `photoText` no config.js.
  const photoText = cfg.photoText || {};
  const setPhotoVars = (group, prefix, fallback = {}) => {
    const values = photoText[group] || {};
    document.documentElement.style.setProperty(`--photo-${prefix}-text`, values.text || fallback.text || "var(--white)");
    document.documentElement.style.setProperty(`--photo-${prefix}-muted`, values.muted || fallback.muted || "rgba(255,255,255,.72)");
    document.documentElement.style.setProperty(`--photo-${prefix}-accent`, values.accent || fallback.accent || "var(--accent-warm)");
  };
  setPhotoVars("opening", "opening");
  setPhotoVars("hero", "hero");
  setPhotoVars("dateBreak", "date-break");

  // SEO / META ------------------------------------------------
  document.title = `${cfg.couple.firstName} & ${cfg.couple.secondName} — ${cfg.wedding.longDate}`;
  const description = `${cfg.couple.firstName} & ${cfg.couple.secondName} convidam você para celebrar seu casamento em ${cfg.wedding.longDate}.`;
  $('meta[name="description"]')?.setAttribute("content", description);
  $('meta[property="og:title"]')?.setAttribute("content", document.title);
  $('meta[property="og:description"]')?.setAttribute("content", description);
  $('meta[name="theme-color"]')?.setAttribute("content", resolvedTheme.paper || "#F4F0E8");

  // TEXT BINDING ---------------------------------------------
  $$('[data-text]').forEach((el) => {
    const value = getPath(cfg, el.dataset.text);
    if (value !== undefined && value !== null) el.textContent = value;
  });

  // IMAGES ---------------------------------------------------
  const imageBindings = [
    ["#heroImage", cfg.hero?.image],
    ["#openingRevealImage", cfg.hero?.image],
    ["#storyImage", cfg.story?.image],
    ["#dateBreakImage", cfg.dateBreakImage],
    ["#dressImage", cfg.dressCode?.image],
    ["#rsvpImage", cfg.images?.rsvp]
  ];
  imageBindings.forEach(([selector, src]) => { if (src && $(selector)) $(selector).src = src; });

  // PERSONALIZED OPENING ------------------------------------
  const opening = $("#opening");
  const openButton = $("#openInvitation");
  const greeting = $("#personalGreeting");
  const guestParam = cfg.opening?.guestQueryParam || "convidado";
  const guestName = new URLSearchParams(location.search).get(guestParam);

  if (guestName && greeting) {
    greeting.textContent = `${cfg.opening.guestPrefix || "Especialmente para"} ${guestName}`;
  }

  const shouldSkipOpening = !cfg.opening?.enabled ||
    (cfg.opening?.showOncePerSession && sessionStorage.getItem("weddingInvitationOpened") === "1");

  const setOpeningProgress = (value) => {
    const progress = Math.max(0, Math.min(1, value));
    const percent = progress * 100;
    const inset = (1 - progress) * 50;
    const imageScale = 1.075 - (progress * .035);
    const handleTravel = openButton ? Math.max(0, openButton.clientWidth - 60) : 0;

    opening?.style.setProperty("--opening-progress", progress.toFixed(4));
    opening?.style.setProperty("--opening-inset", `${inset.toFixed(3)}%`);
    opening?.style.setProperty("--opening-image-scale", imageScale.toFixed(4));
    openButton?.style.setProperty("--drag-progress", progress.toFixed(4));
    openButton?.style.setProperty("--drag-percent", `${percent.toFixed(2)}%`);
    openButton?.style.setProperty("--drag-handle-x", `${(progress * handleTravel).toFixed(2)}px`);
    // Só troca para a paleta sobre foto quando a imagem realmente começa a aparecer.
    opening?.classList.toggle("has-photo-text", progress >= 0.28);
  };

  const finishOpening = () => {
    document.body.classList.remove("is-locked");
    opening?.classList.add("is-hidden");
    sessionStorage.setItem("weddingInvitationOpened", "1");
  };

  let openingDone = false;
  const playOpening = () => {
    if (!opening || openingDone) return;
    openingDone = true;
    setOpeningProgress(1);
    opening.classList.remove("is-resetting", "is-dragging");
    opening.classList.add("is-opening");
    document.body.classList.add("hero-is-entering");
    window.setTimeout(() => document.body.classList.remove("hero-is-entering"), 1250);
    window.setTimeout(finishOpening, 720);
  };

  if (shouldSkipOpening) {
    opening?.classList.add("is-hidden");
    document.body.classList.remove("is-locked");
  } else if (opening && openButton) {
    setOpeningProgress(0);

    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const mobileWidth = window.matchMedia("(max-width: 820px)");
    const dragEnabled = () => cfg.opening?.dragToOpenOnMobile !== false && coarsePointer.matches && mobileWidth.matches;
    const threshold = Math.max(.45, Math.min(.9, Number(cfg.opening?.dragThreshold) || .68));

    let dragging = false;
    let pointerId = null;
    let startX = 0;
    let progress = 0;
    let moved = false;

    const resetDrag = () => {
      if (openingDone) return;
      dragging = false;
      pointerId = null;
      opening.classList.remove("is-dragging");
      opening.classList.add("is-resetting");
      setOpeningProgress(0);
      progress = 0;
      window.setTimeout(() => opening.classList.remove("is-resetting"), 420);
    };

    openButton.addEventListener("pointerdown", (event) => {
      if (!dragEnabled() || openingDone) return;
      dragging = true;
      moved = false;
      pointerId = event.pointerId;
      startX = event.clientX;
      opening.classList.remove("is-resetting");
      opening.classList.add("is-dragging");
      openButton.setPointerCapture?.(pointerId);
      event.preventDefault();
    });

    openButton.addEventListener("pointermove", (event) => {
      if (!dragging || event.pointerId !== pointerId || openingDone) return;
      const rect = openButton.getBoundingClientRect();
      const travel = Math.max(120, rect.width - 72);
      const delta = Math.max(0, event.clientX - startX);
      progress = Math.max(0, Math.min(1, delta / travel));
      if (delta > 5) moved = true;
      setOpeningProgress(progress);
      if (progress >= threshold) playOpening();
      event.preventDefault();
    });

    const endDrag = (event) => {
      if (!dragging || openingDone) return;
      if (event?.pointerId != null && event.pointerId !== pointerId) return;
      if (progress >= threshold) playOpening();
      else resetDrag();
    };

    openButton.addEventListener("pointerup", endDrag);
    openButton.addEventListener("pointercancel", endDrag);
    openButton.addEventListener("lostpointercapture", () => { if (dragging && !openingDone) resetDrag(); });

    openButton.addEventListener("click", (event) => {
      if (openingDone) return;
      if (dragEnabled()) {
        event.preventDefault();
        // Em telas touch o gesto horizontal é a interação principal.
        // Um toque simples não dispara a transição por engano.
        if (moved) moved = false;
        return;
      }
      playOpening();
    });
  }

  // MARQUEE --------------------------------------------------

  // STORY ----------------------------------------------------
  if ($("#storyParagraphs")) {
    $("#storyParagraphs").innerHTML = (cfg.story?.paragraphs || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  }

  // COUNTDOWN ------------------------------------------------
  const targetDate = new Date(cfg.wedding.dateISO);
  const updateCountdown = () => {
    const distance = Math.max(0, targetDate.getTime() - Date.now());
    const values = {
      days: Math.floor(distance / 86400000),
      hours: Math.floor((distance % 86400000) / 3600000),
      minutes: Math.floor((distance % 3600000) / 60000),
      seconds: Math.floor((distance % 60000) / 1000)
    };
    Object.entries(values).forEach(([key, value]) => {
      const el = $(`[data-count="${key}"]`);
      if (el) el.textContent = String(value).padStart(2, "0");
    });
  };
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  // EVENTS ---------------------------------------------------
  const arrowIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 7l5 5-5 5"/></svg>`;
  if ($("#eventGrid")) {
    $("#eventGrid").innerHTML = (cfg.events || []).map((event, index) => `
      <article class="event-card reveal">
        <span class="event-card__number">0${index + 1}</span>
        <h3>${escapeHtml(event.title)}</h3>
        <p class="event-card__time">${escapeHtml(event.time)}</p>
        <address><strong>${escapeHtml(event.venue)}</strong><br>${escapeHtml(event.address)}</address>
        <div class="event-card__links">
          ${event.mapsUrl ? `<a class="text-link" href="${escapeHtml(event.mapsUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(event.mapsLabel || "Ver mapa")} ${arrowIcon}</a>` : ""}
        </div>
      </article>
    `).join("");
  }

  // SCHEDULE -------------------------------------------------
  if ($("#timeline")) {
    $("#timeline").innerHTML = (cfg.schedule?.items || []).map((item) => `
      <article class="timeline-item reveal">
        <time>${escapeHtml(item.time)}</time>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join("");
  }

  // GALLERY --------------------------------------------------
  const galleryItems = cfg.gallery?.images || [];
  let activeGalleryIndex = 0;
  const galleryGrid = $("#galleryGrid");
  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxCaption = $("#lightboxCaption");

  if (galleryGrid) {
    galleryGrid.innerHTML = galleryItems.map((item, index) => `
      <div class="reveal">
        <button class="gallery-item" type="button" data-gallery-index="${index}" aria-label="Ampliar ${escapeHtml(item.caption || `foto ${index + 1}`)}">
          <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || "Foto do casal")}" loading="lazy">
        </button>
        <div class="gallery-item__caption"><span>${escapeHtml(item.caption || `Foto ${index + 1}`)}</span><span>${String(index + 1).padStart(2, "0")}</span></div>
      </div>
    `).join("");
  }

  const showLightboxItem = (index) => {
    if (!galleryItems.length) return;
    activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[activeGalleryIndex];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt || "Foto do casal";
    lightboxCaption.textContent = item.caption || "";
  };

  const openLightbox = (index) => {
    showLightboxItem(index);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  };

  const closeLightbox = () => {
    lightbox?.classList.remove("is-open");
    lightbox?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
  };

  galleryGrid?.addEventListener("click", (e) => {
    const button = e.target.closest("[data-gallery-index]");
    if (button) openLightbox(Number(button.dataset.galleryIndex));
  });
  $("#lightboxClose")?.addEventListener("click", closeLightbox);
  $("#lightboxPrev")?.addEventListener("click", () => showLightboxItem(activeGalleryIndex - 1));
  $("#lightboxNext")?.addEventListener("click", () => showLightboxItem(activeGalleryIndex + 1));
  lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox?.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLightboxItem(activeGalleryIndex - 1);
    if (e.key === "ArrowRight") showLightboxItem(activeGalleryIndex + 1);
  });

  // DRESS CODE -----------------------------------------------
  if ($("#dressPalette")) {
    $("#dressPalette").innerHTML = (cfg.dressCode?.palette || []).map((color) => `<span style="background:${escapeHtml(color)}" title="${escapeHtml(color)}"></span>`).join("");
  }

  // INFO CARDS -----------------------------------------------
  const iconSet = {
    car: `<svg viewBox="0 0 24 24"><path d="M4 14h16l-2-6H6l-2 6Zm1 0v5m14-5v5M7 18h.01M17 18h.01M3 14h18"/></svg>`,
    clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
    heart: `<svg viewBox="0 0 24 24"><path d="M12 20s-7-4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6-7 10-7 10Z"/></svg>`,
    camera: `<svg viewBox="0 0 24 24"><path d="M4 7h4l1-2h6l1 2h4v12H4V7Z"/><circle cx="12" cy="13" r="3.5"/></svg>`,
    pin: `<svg viewBox="0 0 24 24"><path d="M12 21s6-6.3 6-12a6 6 0 0 0-12 0c0 5.7 6 12 6 12Z"/><circle cx="12" cy="9" r="2"/></svg>`,
    message: `<svg viewBox="0 0 24 24"><path d="M5 5h14v11H9l-4 4V5Z"/></svg>`
  };
  if ($("#infoGrid")) {
    $("#infoGrid").innerHTML = (cfg.guestInfo || []).map((item) => `
      <article class="info-card reveal">
        <div class="info-card__icon">${iconSet[item.icon] || iconSet.heart}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join("");
  }

  // GIFTS ----------------------------------------------------
  const giftsSection = $("#presentes");
  if (!cfg.gifts?.links?.length) {
    giftsSection?.remove();
  } else if ($("#giftLinks")) {
    $("#giftLinks").innerHTML = cfg.gifts.links.map((item) => {
      const rawUrl = item.url || "#";
      const isExternal = /^https?:\/\//i.test(rawUrl);
      let resolvedUrl = rawUrl;
      // Em páginas internas, mantém ?convidado=... para preservar a personalização.
      if (!isExternal && rawUrl !== "#" && location.search) {
        const [path, hash = ""] = rawUrl.split("#");
        resolvedUrl = `${path}${location.search}${hash ? `#${hash}` : ""}`;
      }
      return `<a class="gift-link" href="${escapeHtml(resolvedUrl)}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(item.label)} ${arrowIcon}</a>`;
    }).join("");
    $("#giftLinks").addEventListener("click", (e) => {
      const link = e.target.closest('a[href="#"]');
      if (link) {
        e.preventDefault();
        alert("Substitua este link em js/config.js > gifts.links.");
      }
    });
  }

  // FAQ ------------------------------------------------------
  if ($("#faqList")) {
    $("#faqList").innerHTML = (cfg.faq || []).map((item, index) => `
      <article class="accordion-item reveal ${index === 0 ? "is-open" : ""}">
        <button class="accordion-button" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
          <span>${escapeHtml(item.question)}</span><span class="accordion-icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-panel"><div><p>${escapeHtml(item.answer)}</p></div></div>
      </article>
    `).join("");
    $("#faqList").addEventListener("click", (e) => {
      const button = e.target.closest(".accordion-button");
      if (!button) return;
      const item = button.closest(".accordion-item");
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // RSVP -----------------------------------------------------
  const rsvpForm = $("#rsvpForm");
  const formStatus = $("#formStatus");
  if (cfg.rsvp?.collectMealPreference === false) $('[data-rsvp-extra="meal"]')?.remove();

  const buildWhatsappMessage = (data) => {
    return [
      `Olá! RSVP — ${cfg.couple.firstName} & ${cfg.couple.secondName}`,
      `Nome: ${data.get("nome") || ""}`,
      `Presença: ${data.get("presenca") || ""}`,
      `Número de pessoas: ${data.get("convidados") || "1"}`,
      data.get("alimentacao") ? `Alimentação: ${data.get("alimentacao")}` : "",
      data.get("mensagem") ? `Mensagem: ${data.get("mensagem")}` : ""
    ].filter(Boolean).join("\n");
  };

  rsvpForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(rsvpForm);
    formStatus.textContent = "";

    if (cfg.rsvp.mode === "whatsapp") {
      if (!cfg.rsvp.whatsappNumber) {
        formStatus.textContent = "Defina o número do WhatsApp em js/config.js para ativar o envio.";
        return;
      }
      const url = `https://wa.me/${cfg.rsvp.whatsappNumber}?text=${encodeURIComponent(buildWhatsappMessage(data))}`;
      window.open(url, "_blank", "noopener,noreferrer");
      formStatus.textContent = "Abrimos o WhatsApp com sua confirmação pronta para enviar.";
      return;
    }

    if (cfg.rsvp.mode === "form") {
      if (!cfg.rsvp.formAction) {
        formStatus.textContent = "Defina a URL do formulário em js/config.js para ativar o envio.";
        return;
      }
      try {
        const response = await fetch(cfg.rsvp.formAction, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error("Falha ao enviar");
        formStatus.textContent = cfg.rsvp.successMessage || "Confirmação enviada com sucesso!";
        rsvpForm.reset();
      } catch (error) {
        formStatus.textContent = "Não foi possível enviar agora. Tente novamente em instantes.";
      }
      return;
    }

    // Modo demonstração
    formStatus.textContent = "Demonstração: o formulário está funcionando. Escolha 'whatsapp' ou 'form' em js/config.js para receber respostas reais.";
  });

  // CALENDAR -------------------------------------------------
  const toIcsDate = (dateString) => {
    const d = new Date(dateString);
    return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  };
  $("#calendarButton")?.addEventListener("click", () => {
    const locationText = (cfg.events || []).map((e) => `${e.title}: ${e.venue} — ${e.address}`).join(" | ");
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Convite Casamento Premium//PT-BR",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@convite-casamento`,
      `DTSTAMP:${toIcsDate(new Date().toISOString())}`,
      `DTSTART:${toIcsDate(cfg.wedding.dateISO)}`,
      `DTEND:${toIcsDate(cfg.wedding.endISO)}`,
      `SUMMARY:${cfg.wedding.calendarTitle}`,
      `DESCRIPTION:${cfg.wedding.calendarDescription}`,
      `LOCATION:${locationText.replaceAll(",", "\\,")}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "casamento.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // SHARE ----------------------------------------------------
  $("#shareButton")?.addEventListener("click", async () => {
    const payload = { title: cfg.share?.title || document.title, text: cfg.share?.text || "", url: location.href };
    try {
      if (navigator.share) await navigator.share(payload);
      else {
        await navigator.clipboard.writeText(location.href);
        $("#shareButton span").textContent = "Link copiado";
        setTimeout(() => { $("#shareButton span").textContent = "Compartilhar convite"; }, 1800);
      }
    } catch (_) { /* cancelamento do compartilhamento */ }
  });

  // MUSIC ----------------------------------------------------
  const musicButton = $("#musicButton");
  const audio = $("#backgroundMusic");
  if (cfg.music?.enabled && cfg.music?.file && musicButton && audio) {
    musicButton.hidden = false;
    audio.src = cfg.music.file;
    musicButton.addEventListener("click", async () => {
      try {
        if (audio.paused) {
          await audio.play();
          musicButton.classList.add("is-playing");
          $(".music-button__label", musicButton).textContent = cfg.music.labelPause || "Pausar";
        } else {
          audio.pause();
          musicButton.classList.remove("is-playing");
          $(".music-button__label", musicButton).textContent = cfg.music.labelPlay || "Música";
        }
      } catch (_) {
        console.warn("Não foi possível reproduzir o áudio. Verifique o arquivo configurado.");
      }
    });
  }

  // FLOATING NAV / PROGRESS ----------------------------------
  const floatingNav = $("#floatingNav");
  const heroSection = $("#inicio");

  // O menu só aparece depois que o hero deixa de ser a tela principal.
  if (floatingNav && heroSection && "IntersectionObserver" in window) {
    const navVisibilityObserver = new IntersectionObserver(([entry]) => {
      floatingNav.classList.toggle("is-visible", !entry.isIntersecting);
    }, { threshold: 0.15 });
    navVisibilityObserver.observe(heroSection);
  } else if (floatingNav) {
    const updateNavVisibility = () => floatingNav.classList.toggle("is-visible", scrollY > innerHeight * .72);
    window.addEventListener("scroll", updateNavVisibility, { passive: true });
    updateNavVisibility();
  }

  const onScroll = () => {
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    const percent = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;
    if ($("#progressBar")) $("#progressBar").style.width = `${Math.min(100, percent)}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Destaca o atalho correspondente quando uma das cinco seções principais entra em foco.
  const floatingLinks = $$("#floatingNav a");
  const floatingTargets = floatingLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if ("IntersectionObserver" in window && floatingTargets.length) {
    const navActiveObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      floatingLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { threshold: [0.2, 0.45, 0.7], rootMargin: "-12% 0px -52%" });
    floatingTargets.forEach((section) => navActiveObserver.observe(section));
  }

  // REVEAL ---------------------------------------------------
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealAll = () => $$(".reveal").forEach((el) => el.classList.add("is-visible"));
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealAll();
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.11, rootMargin: "0px 0px -7% 0px" });
    $$(".reveal").forEach((el) => revealObserver.observe(el));
  }

  // SUBTLE HERO PARALLAX ------------------------------------
  if (!reducedMotion && matchMedia("(min-width: 821px)").matches) {
    const heroImage = $("#heroImage");
    window.addEventListener("scroll", () => {
      if (!heroImage || scrollY > innerHeight * 1.2) return;
      heroImage.style.transform = `scale(1.04) translate3d(0, ${Math.min(scrollY * .055, 38)}px, 0)`;
    }, { passive: true });
  }
})();
