(function () {
  const ACTIVE_COLOR = "rgba(219, 112, 49, 1)";
  const INACTIVE_COLOR = "rgba(255, 255, 255, 1)";
  const FADE_MS = 260;
  const MOBILE_ANCHOR_TOP_OFFSET = 235;
  const TAB_TITLES = ["НАРОД", "ГДЕ ЖИВУТ?", "ГДЕ ПОЗНАКОМИТЬСЯ?"];
  const DESKTOP_CARD_LEFT = 209;
  const TABLET_MAX_WIDTH = 1100;

  const mobileMenuAnchors = {
    "6a05c584f4bf2d123b379c35": "6a0dba3f7b6c123ad165f8f8",
    "6a05c90af8cefaf7d03f1000": "6a0dbb9255e6896a5576b005",
    "6a05c94345311d55df796884": "6a0dbef04a64fa1cdfe270a0",
    "6a05c95dba7e36a6b612666b": "6a0dc08a5a89ce621117ff7d",
  };
  const mobileMenuIds = Object.keys(mobileMenuAnchors);
  const FOOTER_CREDIT_ID = "6a0f1cac15c8c40ffd1467c3";
  const FOOTER_COPY_ID = "6a072f5e0c642388577880b7";
  const FOOTER_BG_ID = "6a072dec59463c902286e8da";
  const FOOTER_SOCIAL_BG_IDS = [
    "6a0dbd8f44bd48ffb052c771",
    "6a0dbdccf53dd5b8e8c09e39",
  ];
  const FOOTER_SOCIAL_ICON_IDS = [
    "6a0dc0103dbb87fec187cbc9",
    "6a0dc0709855c1b471aba0cc",
  ];
  const HIDDEN_DECORATION_IDS = [
    "6a0da96cbcac38ba2d39d67e",
  ];
  const FOOTER_PARTNERS_ID = "rodnoi-footer-partners";
  const PREMIER_LOGO_URL = "https://i-p.rmcdn.net/5c8d09396049ea61eff81239/6339958/image-4ff0e154-6555-4d24-bada-8eb59ca52c85.png?w=194&cX=5&cY=0&cW=432&cH=94";
  const RUTUBE_LOGO_URL = "https://i-p.rmcdn.net/5c8d09396049ea61eff81239/6339958/image-8c0f7601-0309-4320-bfdd-667e32376d34.png?w=190&cX=12&cY=0&cW=418&cH=94";

  const sections = [
    {
      buttons: [
        "6a06fe1963c79f6832d278fe",
        "6a06ff1e01e50624b6ef1132",
        "6a06ff3ef9f83a4060887aef",
      ],
      texts: [
        "6a0aeb41ec0efb96fb5efe1e",
        "6a0aeee2dba84a62fb2c7986",
        "6a0aeefadba84a62fb2c7e84",
      ],
      content: [
        "Манси – народ гор, ветра и тайги, их численность около 12 000 человек. В их мире всё имеет голос: ручей говорит с путником, ветер предупреждает об опасности, а медведь приходит не как зверь, а как гость. Человек здесь не царь природы. Он – слушатель.",
        "Они живут на западных склонах Урала и в бассейне реки Северная Сосьва. Это край тайги, переходящей в тундру.",
        "Гонки на обласах на Кубок губернатора Югры собирают сотни участников и зрителей. Здесь соревнования становятся праздником: проводятся обряды, мастер-классы по ремёслам, звучит музыка. «Газпром нефть» поддерживает событие – и оно остаётся живым и настоящим.",
      ],
    },
    {
      buttons: [
        "6a0afa6de9863e17b2d25cff",
        "6a0afa6d395e41dd77a065be",
        "6a0afa6d74006e1df15fb26e",
      ],
      texts: [
        "6a0afa6dedfa8892990af81a",
        "6a0afa6e24639135cf4b65fe",
        "6a0afa6e2d250f7a2fd48cdf",
      ],
      content: [
        "Ненцы – крупнейший кочевой народ России, их численность – около 45 000 человек. Многие из них до сих пор живут так, как жили предки тысячу лет назад: каслают по тундре вслед за оленьими стадами. Для ненца олень – это всё: жизнь, дом, путь, время.",
        "Они живут на огромной территории от Кольского полуострова до Таймыра, но сердце их земли – Ямал, что в переводе с ненецкого означает «край земли».",
        "За полярным кругом, в селе Мыс Каменный, проходит «Дыхание Арктики» – фестиваль искусства и творчества, рожденный в самой тундре. Здесь встречаются ремёсла, музыка и танец. На один день село превращается в живой круговорот талантов и традиций. «Родные города» помогли этой идее стать реальностью. И теперь в ней может участвовать каждый.",
      ],
    },
    {
      buttons: [
        "6a0b047a52f5fd4a56e81359",
        "6a0b047abb291fa9bf0dc84f",
        "6a0b047a949e02fd4322226b",
      ],
      texts: [
        "6a0b047a52f5fd4a56e8136e",
        "6a0b047a2348b2c2ddd483bf",
        "6a0b047ad89100fff3b27e80",
      ],
      content: [
        "Селькупы – один из самых малочисленных народов Сибири: их около 4 500 человек. «Селькуп» означает «лесной человек», они рыболовы и охотники. Их главное орудие – лодка-обласок, выдолбленная из цельного ствола кедра или осины. Она лёгкая, манёвренная, идеальная для таёжных рек с порогами и мелями.",
        "Они живут на севере Томской области и в Красноселькупском районе Ямало-Ненецкого автономного округа, в бассейне рек Таз и Пур.",
        "«Сказки Севера» – проект программы «Родные города», который собирает голоса коренных народов. Фольклор здесь звучит как радиоспектакль – живо, точно, бережно.<br>Сегодня проект объединяет разные регионы и культуры.<br>В их числе и селькупские сказки, доступные для свободного прослушивания.",
      ],
    },
    {
      buttons: [
        "6a0afcd906a26add81adf5e2",
        "6a0afcd9e0b3efaa8a8d0683",
        "6a0afcd90c982c0da510f8ab",
      ],
      texts: [
        "6a0afcd9dcfe1c8db2172afd",
        "6a0afcd9edfa8892990d081c",
        "6a0afcdadbe170b7568de1c7",
      ],
      content: [
        "Ханты – один из древнейших народов Западной Сибири. Их численность – около 30 000 человек и за каждым стоит род, уходящий корнями вглубь веков. Их культура выросла из движения: сезонных переходов, охоты, рыболовства. Здесь традиции – не наследие, а повседневность.",
        "Ханты живут в Ханты-Мансийском автономном округе-Югре, по берегам великих рек: Оби, Иртыша, Конды и Казыма.",
        "День оленевода – праздник, в котором сходятся спорт, быт, мастерство и родовая память. Еще в ХМАО-Югре при поддержке «Газпром нефти» проходит конкурс профессионального мастерства среди оленеводов на Кубок губернатора Югры. Они соревнуются в гонках оленьих упряжек, укладке нарт, беге на охотничьих лыжах.<br>Каждый год это помогает сохранять вековые традиции древнего народа.",
      ],
    },
  ];

  const buttonMap = new Map();

  function byId(id) {
    return document.querySelector(`[data-id="${id}"]`);
  }

  function allById(id) {
    return Array.from(document.querySelectorAll(`[data-id="${id}"]`));
  }

  function firstById(id) {
    return allById(id)[0] || null;
  }

  function isPhoneViewport() {
    return window.innerWidth <= 600;
  }

  function getPageScrollElement() {
    return document.scrollingElement || document.documentElement;
  }

  function getScrollTop() {
    return window.scrollY || getPageScrollElement().scrollTop || 0;
  }

  function setScrollTop(top) {
    const safeTop = Math.max(0, top);
    const scrollElement = getPageScrollElement();

    scrollElement.scrollTop = safeTop;
    document.documentElement.scrollTop = safeTop;
    document.body.scrollTop = safeTop;

    window.scrollTo(0, safeTop);
  }

  function scrollToMobileAnchor(menuId) {
    if (!isPhoneViewport()) return false;

    const targetId = mobileMenuAnchors[menuId];
    const target = targetId && byId(targetId);

    if (!target) return false;

    const targetTop = target.getBoundingClientRect().top + getScrollTop();
    const scrollTop = targetTop - MOBILE_ANCHOR_TOP_OFFSET;

    setScrollTop(scrollTop);
    window.setTimeout(() => setScrollTop(scrollTop), 80);
    window.setTimeout(() => setScrollTop(scrollTop), 320);
    window.setTimeout(() => setScrollTop(scrollTop), 800);
    window.setTimeout(() => setScrollTop(scrollTop), 1500);
    window.setTimeout(() => setScrollTop(scrollTop), 2200);

    return true;
  }

  function handleMobileMenuClick(event) {
    return false;
  }

  function fitSingleLineText(widget) {
    const text = widget.querySelector(".text-viewer p") || widget.querySelector("p");
    if (!text) return;

    const textBox = widget.querySelector(".text-viewer") || text.parentElement;
    const baseSize = parseFloat(text.dataset.baseFontSize || window.getComputedStyle(text).fontSize);
    if (!baseSize) return;

    text.dataset.baseFontSize = String(baseSize);
    text.style.fontSize = `${baseSize}px`;

    const availableWidth = (textBox && textBox.clientWidth) || widget.clientWidth;
    const textWidth = text.scrollWidth;

    if (!availableWidth || !textWidth || textWidth <= availableWidth) return;

    const fittedSize = Math.max(13, Math.floor((baseSize * availableWidth) / textWidth));
    text.style.fontSize = `${fittedSize}px`;
  }

  function getCardTopShift() {
    if (window.innerWidth <= 600) return -123.2;
    if (window.innerWidth <= TABLET_MAX_WIDTH) return -120;
    return -103.2;
  }

  function positionCardRoot(widget) {
    if (!widget.dataset.ethnoOriginalTop) {
      widget.dataset.ethnoOriginalTop = widget.style.top || "";
    }
    if (!widget.dataset.ethnoOriginalLeft) {
      widget.dataset.ethnoOriginalLeft = widget.style.left || "";
    }

    const originalTop = parseFloat(widget.dataset.ethnoOriginalTop);
    const originalLeft = parseFloat(widget.dataset.ethnoOriginalLeft);
    if (!Number.isFinite(originalTop) || !Number.isFinite(originalLeft)) return;

    widget.style.top = `${originalTop + getCardTopShift()}px`;

    if (window.innerWidth <= 600) {
      widget.style.left = "0px";
    } else if (window.innerWidth <= TABLET_MAX_WIDTH) {
      widget.style.left = "50%";
    } else {
      widget.style.left = `${DESKTOP_CARD_LEFT}px`;
    }
  }

  function positionCardRoots() {
    sections.forEach((section) => {
      if (section.displayWidget) positionCardRoot(section.displayWidget);
    });
  }

  function fixMobileMenuTypography() {
    mobileMenuIds.forEach((menuId) => {
      allById(menuId).forEach(fitSingleLineText);
    });
  }

  function mobileMenuSelector(suffix = "") {
    return mobileMenuIds.map((id) => `[data-id="${id}"]${suffix}`).join(",\n      ");
  }

  function initMobileMenuAnchors() {
    mobileMenuIds.forEach((menuId) => {
      allById(menuId).forEach((menuItem) => {
        if (menuItem.dataset.mobileAnchorFixed) return;

        menuItem.dataset.mobileAnchorFixed = "true";
        menuItem.addEventListener("click", (event) => {
          handleMobileMenuClick(event);
        }, true);
      });
    });

    fixMobileMenuTypography();
  }

  function fixFooterCreditText() {
    const widgets = allById(FOOTER_CREDIT_ID);
    if (!widgets.length) return false;

    let fixed = false;
    widgets.forEach((widget) => {
      widget.style.visibility = "hidden";
      widget.setAttribute("aria-hidden", "true");
      fixed = true;
    });

    return fixed;
  }

  function hideDecorations() {
    HIDDEN_DECORATION_IDS.forEach((id) => {
      allById(id).forEach((widget) => {
        widget.style.display = "none";
        widget.setAttribute("aria-hidden", "true");
      });
    });
  }

  function createFooterPartnersMarkup() {
    return `
      <div class="rodnoi-footer-partners__group rodnoi-footer-partners__authors">
        <div class="rodnoi-footer-partners__title">Проект создан при учатистии:</div>
        <div class="rodnoi-footer-partners__logos rodnoi-footer-partners__logos--authors">
          <img class="rodnoi-footer-partners__rd" src="dist/img/rd-logo.svg" alt="radugadesign">
          <img class="rodnoi-footer-partners__riki" src="dist/img/riki.svg" alt="RIKI">
        </div>
      </div>
      <div class="rodnoi-footer-partners__group rodnoi-footer-partners__media">
        <div class="rodnoi-footer-partners__title">Медиапартнеры:</div>
        <div class="rodnoi-footer-partners__logos rodnoi-footer-partners__logos--media">
          <img class="rodnoi-footer-partners__premier" src="${PREMIER_LOGO_URL}" alt="Premier">
          <img class="rodnoi-footer-partners__rutube" src="${RUTUBE_LOGO_URL}" alt="RUTUBE">
        </div>
      </div>
    `;
  }

  function getFooterPartners() {
    let partners = document.getElementById(FOOTER_PARTNERS_ID);
    if (!partners) {
      partners = document.createElement("div");
      partners.id = FOOTER_PARTNERS_ID;
      partners.innerHTML = createFooterPartnersMarkup();
    }

    const footerBg = firstById(FOOTER_BG_ID);
    const pageContainer = footerBg && footerBg.closest(".page-content-container");
    const parent = pageContainer || document.body;
    if (partners.parentElement !== parent) {
      parent.appendChild(partners);
    }

    return partners;
  }

  function stretchFooterBackground(footerBg) {
    if (!footerBg) return;

    const pageContainer = footerBg.closest(".page-content-container");
    const pageRect = pageContainer && pageContainer.getBoundingClientRect();
    const zoom = pageContainer
      ? (parseFloat(pageContainer.style.zoom) || pageRect.width / pageContainer.offsetWidth || 1)
      : 1;
    const pageLeft = pageRect ? pageRect.left : 0;
    const viewportWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;
    const targetWidth = Math.ceil(viewportWidth / zoom);

    footerBg.style.left = `${-pageLeft / zoom}px`;
    footerBg.style.width = `${targetWidth}px`;
    footerBg.style.maxWidth = "none";
    footerBg.style.overflow = "hidden";

    footerBg.querySelectorAll("img, .viewable, .svg-scale-wrapper").forEach((node) => {
      node.style.width = "100%";
      node.style.height = "100%";
      node.style.maxWidth = "none";
      node.style.objectFit = "cover";
    });
  }

  function positionFooterPartners() {
    const credit = firstById(FOOTER_CREDIT_ID);
    const copy = firstById(FOOTER_COPY_ID);
    const footerBg = firstById(FOOTER_BG_ID);
    const socialBgNodes = FOOTER_SOCIAL_BG_IDS
      .map((id) => firstById(id))
      .filter(Boolean);
    const socialIconNodes = FOOTER_SOCIAL_ICON_IDS
      .map((id) => firstById(id))
      .filter(Boolean);
    const socialRects = socialBgNodes
      .map((node) => node.getBoundingClientRect())
      .filter((rect) => rect.width > 0 && rect.height > 0);

    if (!credit || !copy || !footerBg || !socialRects.length) return false;

    stretchFooterBackground(footerBg);

    copy.style.transform = "none";

    const footerRect = footerBg ? footerBg.getBoundingClientRect() : null;
    const footerLeft = Number.isFinite(footerBg.offsetLeft)
      ? footerBg.offsetLeft
      : parseFloat(footerBg.style.left) || 0;
    const footerTop = Number.isFinite(footerBg.offsetTop)
      ? footerBg.offsetTop
      : parseFloat(footerBg.style.top) || 0;
    const footerWidth = footerBg.offsetWidth || parseFloat(footerBg.style.width) || (footerRect && footerRect.width) || 1200;
    const scale = footerRect
      ? Math.max(0.5, Math.min(1.05, footerWidth / 1200))
      : Math.max(0.5, Math.min(1.05, window.innerWidth / 1200));
    const isMobileViewport = window.innerWidth <= 600;
    const isTabletViewport = window.innerWidth > 600 && window.innerWidth <= TABLET_MAX_WIDTH;
    const mobileScale = footerWidth / 390;
    const tabletScale = footerWidth / 768;

    const partners = getFooterPartners();
    partners.style.display = "block";
    partners.style.setProperty(
      "--footer-partners-scale",
      (isMobileViewport ? mobileScale : (isTabletViewport ? tabletScale : scale)).toFixed(4),
    );

    const author = partners.querySelector(".rodnoi-footer-partners__authors");
    const media = partners.querySelector(".rodnoi-footer-partners__media");
    if (!author || !media) return false;

    let authorTop = footerTop + (220.89 * scale);
    let mediaTop = authorTop;
    let authorLeft = footerLeft + (40.46 * scale);
    let mediaLeft = footerLeft + (322.16 * scale);
    const copyTargetLeft = footerLeft + (609.45 * scale);

    if (window.innerWidth <= 600) {
      authorTop = footerTop + (86.08 * mobileScale);
      mediaTop = footerTop + (196.2 * mobileScale);
      authorLeft = footerLeft + (30.09 * mobileScale);
      mediaLeft = footerLeft + (28.77 * mobileScale);

      const copyTargetLeftMobile = footerLeft + (32.63 * mobileScale);
      const copyTargetTopMobile = footerTop + (444.92 * mobileScale);
      copy.style.transform = `translate(${copyTargetLeftMobile - copy.offsetLeft}px, ${copyTargetTopMobile - copy.offsetTop}px)`;

      const sortedSocialBgNodes = [...socialBgNodes].sort((a, b) => a.offsetLeft - b.offsetLeft);
      const sortedSocialIconNodes = [...socialIconNodes].sort((a, b) => a.offsetLeft - b.offsetLeft);
      const socialTargetsMobile = [
        { bgLeft: 23.59, bgTop: 370.58, iconLeft: 41.09, iconTop: 395.06 },
        { bgLeft: 85.56, bgTop: 369.39, iconLeft: 101.77, iconTop: 391.32 },
      ];
      sortedSocialBgNodes.forEach((bgNode, index) => {
        const target = socialTargetsMobile[index];
        if (!target) return;

        const bgTargetLeft = footerLeft + (target.bgLeft * mobileScale);
        const bgTargetTop = footerTop + (target.bgTop * mobileScale);
        bgNode.style.transform = `translate(${bgTargetLeft - bgNode.offsetLeft}px, ${bgTargetTop - bgNode.offsetTop}px)`;

        const iconNode = sortedSocialIconNodes[index];
        if (!iconNode) return;
        const iconTargetLeft = footerLeft + (target.iconLeft * mobileScale);
        const iconTargetTop = footerTop + (target.iconTop * mobileScale);
        iconNode.style.transform = `translate(${iconTargetLeft - iconNode.offsetLeft}px, ${iconTargetTop - iconNode.offsetTop}px)`;
      });
    } else if (window.innerWidth <= TABLET_MAX_WIDTH) {
      authorTop = footerTop + (38.83 * tabletScale);
      mediaTop = authorTop;
      authorLeft = footerLeft + (30.5 * tabletScale);
      mediaLeft = footerLeft + (323.32 * tabletScale);

      const copyTargetLeftTablet = footerLeft + (30.5 * tabletScale);
      const copyTargetTopTablet = footerTop + (171.75 * tabletScale);
      copy.style.transform = `translate(${copyTargetLeftTablet - copy.offsetLeft}px, ${copyTargetTopTablet - copy.offsetTop}px)`;

      const sortedSocialBgNodes = [...socialBgNodes].sort((a, b) => a.offsetLeft - b.offsetLeft);
      const sortedSocialIconNodes = [...socialIconNodes].sort((a, b) => a.offsetLeft - b.offsetLeft);
      const socialTargets = [
        { left: 614.55, top: 155.76 },
        { left: 676.53, top: 154.58 },
      ];
      sortedSocialBgNodes.forEach((node, index) => {
        const target = socialTargets[index];
        if (!target) return;
        const socialTargetLeft = footerLeft + (target.left * tabletScale);
        const socialTargetTop = footerTop + (target.top * tabletScale);
        node.style.transform = `translate(${socialTargetLeft - node.offsetLeft}px, ${socialTargetTop - node.offsetTop}px)`;

        const iconNode = sortedSocialIconNodes[index];
        if (!iconNode) return;
        iconNode.style.transform = `translate(${socialTargetLeft - node.offsetLeft}px, ${socialTargetTop - node.offsetTop}px)`;
      });
    } else {
      copy.style.transform = `translate(${copyTargetLeft - copy.offsetLeft}px, ${-11.6 * scale}px)`;
      const socialLift = -20 * scale;
      socialBgNodes.forEach((node) => {
        node.style.transform = `translateY(${socialLift}px)`;
      });
      socialIconNodes.forEach((node) => {
        node.style.transform = `translateY(${socialLift}px)`;
      });
    }

    author.style.left = `${authorLeft}px`;
    author.style.top = `${authorTop}px`;
    media.style.left = `${mediaLeft}px`;
    media.style.top = `${mediaTop}px`;

    partners.dataset.positioned = "true";
    return true;
  }

  function initFooterPartners() {
    const creditReady = fixFooterCreditText();
    const partnersReady = positionFooterPartners();
    return creditReady && partnersReady;
  }

  function startFooterPartnersSync() {
    if (window.__rodnoiFooterPartnersSync) return;
    window.__rodnoiFooterPartnersSync = true;

    const sync = () => {
      positionFooterPartners();
      window.requestAnimationFrame(sync);
    };

    window.requestAnimationFrame(sync);
  }

  function createCardMarkup() {
    return `
      <div class="ethno-card" role="region" aria-label="Информация о народе">
        <button class="ethno-card-arrow ethno-card-arrow-prev" type="button" aria-label="Предыдущая карточка"></button>
        <div class="ethno-card-content">
          <div class="ethno-card-title"></div>
          <div class="ethno-card-copy"></div>
        </div>
        <button class="ethno-card-arrow ethno-card-arrow-next" type="button" aria-label="Следующая карточка"></button>
        <div class="ethno-card-pagination" aria-label="Навигация по карточкам"></div>
      </div>
    `;
  }

  function setControlState(section, activeIndex) {
    section.buttons.forEach((buttonId, index) => {
      allById(buttonId).forEach((button) => {
        const isActive = index === activeIndex;
        button.classList.toggle("ethno-tab-active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    });

    const pagers = section.displayWidget.querySelectorAll(".ethno-card-page");
    pagers.forEach((pager, index) => {
      const isActive = index === activeIndex;
      pager.classList.toggle("is-active", isActive);
      pager.setAttribute("aria-current", isActive ? "true" : "false");
    });

    const prev = section.displayWidget.querySelector(".ethno-card-arrow-prev");
    const next = section.displayWidget.querySelector(".ethno-card-arrow-next");

    if (prev) {
      prev.disabled = false;
      prev.classList.remove("is-disabled");
    }

    if (next) {
      next.disabled = false;
      next.classList.remove("is-disabled");
    }
  }

  function renderCard(section, index, instant = false) {
    const content = section.displayWidget.querySelector(".ethno-card-content");
    const title = section.displayWidget.querySelector(".ethno-card-title");
    const copy = section.displayWidget.querySelector(".ethno-card-copy");
    if (!content || !title || !copy) return;

    const update = () => {
      title.innerHTML = TAB_TITLES[index];
      title.classList.toggle("ethno-card-title--single-line", index === 2);
      copy.innerHTML = section.content[index];
      section.currentIndex = index;
      setControlState(section, index);
      content.classList.remove("is-fading");
    };

    if (instant) {
      update();
      return;
    }

    content.classList.add("is-fading");
    window.setTimeout(update, FADE_MS);
  }

  function initSection(section) {
    if (section.initialized) return true;

    const buttons = section.buttons.map(byId);
    const textWidgets = section.texts.map(byId);

    if (buttons.some((button) => !button) || textWidgets.some((text) => !text)) {
      return false;
    }

    const displayWidget = textWidgets[0];
    section.displayWidget = displayWidget;
    section.currentIndex = 0;

    displayWidget.classList.add("ethno-card-root", "ethno-tab-panel");
    displayWidget.setAttribute("aria-live", "polite");
    positionCardRoot(displayWidget);
    displayWidget.innerHTML = createCardMarkup();

    const pagination = displayWidget.querySelector(".ethno-card-pagination");
    section.content.forEach((_, index) => {
      const pager = document.createElement("button");
      pager.className = "ethno-card-page";
      pager.type = "button";
      pager.textContent = String(index + 1);
      pager.setAttribute("aria-label", `Открыть карточку ${index + 1}`);
      pager.addEventListener("click", () => activate(index));
      pagination.appendChild(pager);
    });

    const prev = displayWidget.querySelector(".ethno-card-arrow-prev");
    const next = displayWidget.querySelector(".ethno-card-arrow-next");
    prev.addEventListener("click", () => activate(section.currentIndex - 1));
    next.addEventListener("click", () => activate(section.currentIndex + 1));

    textWidgets.slice(1).forEach((widget) => {
      widget.classList.add("ethno-tab-hidden-source");
      widget.setAttribute("aria-hidden", "true");
    });

    const activate = (index) => {
      const total = section.content.length;
      const normalizedIndex = ((index % total) + total) % total;
      if (normalizedIndex === section.currentIndex) return;
      renderCard(section, normalizedIndex);
    };

    buttons.forEach((button, index) => {
      button.classList.add("ethno-tab-button", "ethno-tab-hidden-control");
      button.setAttribute("role", "tab");
      button.setAttribute("tabindex", "0");
      buttonMap.set(section.buttons[index], () => activate(index));

      allById(section.buttons[index]).forEach((buttonLayer) => {
        buttonLayer.classList.add("ethno-tab-button-layer", "ethno-tab-hidden-control");
        buttonLayer.onclick = () => activate(index);
        buttonLayer.addEventListener("click", () => activate(index));
        buttonLayer.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activate(index);
          }
        });
      });
    });

    renderCard(section, 0, true);
    section.initialized = true;
    return true;
  }

  function injectStyles() {
    if (document.getElementById("ethno-tabs-styles")) return;

    const style = document.createElement("style");
    style.id = "ethno-tabs-styles";
    style.textContent = `
      .ethno-tab-button,
      .ethno-tab-button .common-button,
      .ethno-tab-button .text {
        transition: color 260ms ease, opacity 260ms ease;
      }

      .ethno-tab-button .text,
      .ethno-tab-button .text * {
        color: ${INACTIVE_COLOR} !important;
      }

      .ethno-tab-button:hover .text,
      .ethno-tab-button:hover .text *,
      .ethno-tab-button.ethno-tab-active .text,
      .ethno-tab-button.ethno-tab-active .text * {
        color: ${ACTIVE_COLOR} !important;
      }

      .ethno-tab-panel {
        color: ${INACTIVE_COLOR} !important;
        opacity: 1;
        overflow: visible !important;
      }

      .ethno-card-root {
        width: 884px !important;
        height: 304px !important;
        overflow: visible !important;
        transform: translateX(-116px) !important;
        z-index: 470 !important;
        pointer-events: auto !important;
      }

      .ethno-card-root .text-viewer,
      .ethno-card-root .text-viewer *,
      .ethno-card-root p,
      .ethno-card-root p * {
        overflow: visible !important;
        color: ${INACTIVE_COLOR} !important;
      }

      .ethno-card {
        position: relative;
        width: 100%;
        min-height: 304px;
        color: ${INACTIVE_COLOR};
        font-family: custom_184208, Arial, sans-serif;
        text-align: center;
      }

      .ethno-card-content {
        position: absolute;
        top: 0;
        left: 50%;
        width: 652px;
        height: 238px;
        opacity: 1;
        transform: translateX(-50%);
        transition: opacity ${FADE_MS}ms ease;
      }

      .ethno-card-content.is-fading {
        opacity: 0;
      }

      .ethno-card-title {
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        margin: 0;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.25;
        text-transform: uppercase;
      }

      .ethno-card-title.ethno-card-title--single-line {
        white-space: nowrap;
      }

      .ethno-card-copy {
        position: absolute;
        top: 53.92px;
        left: 0;
        width: 100%;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.45;
      }

      .ethno-card-arrow {
        position: absolute;
        top: 93.49px;
        width: 71.3px;
        height: 71.3px;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        transform: none;
        background: url("dist/img/Arrow-bg.png") center / contain no-repeat;
        box-shadow: none;
      }

      .ethno-card-arrow::after {
        display: none;
      }

      .ethno-card-arrow::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 18px;
        height: 20px;
        opacity: 0.8;
        background-color: #fff;
        -webkit-mask: url("dist/img/arrow-picto.svg") center / contain no-repeat;
        mask: url("dist/img/arrow-picto.svg") center / contain no-repeat;
        transform: translate(-50%, -50%) translate(0, -2px);
        transition: opacity ${FADE_MS}ms ease, background-color ${FADE_MS}ms ease;
      }

      .ethno-card-arrow-prev {
        left: 0;
      }

      .ethno-card-arrow-next {
        right: 0;
      }

      .ethno-card-arrow-prev::before {
        transform: translate(-50%, -50%) translate(-2px, -2px) rotate(180deg);
      }

      .ethno-card-arrow-next::before {
        transform: translate(-50%, -50%) translate(2px, -2px);
      }

      .ethno-card-arrow:hover:not(:disabled)::before {
        opacity: 1;
      }

      .ethno-card-arrow:active:not(:disabled)::before {
        opacity: 1;
        background-color: #DB7031;
      }

      .ethno-card-arrow.is-disabled,
      .ethno-card-arrow:disabled {
        cursor: default;
        filter: saturate(0.75) brightness(0.9);
        opacity: 0.48;
      }

      .ethno-card-pagination {
        position: absolute;
        top: 274px;
        left: 50%;
        display: flex;
        gap: 13px;
        align-items: center;
        transform: translateX(-50%);
      }

      .ethno-card-page {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        margin: 0;
        padding: 0;
        border: 2px solid ${INACTIVE_COLOR};
        border-radius: 50%;
        background: transparent;
        color: ${INACTIVE_COLOR};
        cursor: pointer;
        font-family: custom_184208, Arial, sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        transition: color ${FADE_MS}ms ease, border-color ${FADE_MS}ms ease, transform ${FADE_MS}ms ease;
      }

      .ethno-card-page:hover,
      .ethno-card-page.is-active {
        border-color: ${ACTIVE_COLOR};
        color: ${ACTIVE_COLOR};
      }

      .ethno-card-page:hover {
        transform: scale(1.08);
      }

      .ethno-tab-hidden-source,
      .ethno-tab-hidden-control {
        opacity: 0 !important;
        pointer-events: none !important;
        visibility: hidden !important;
      }

      @media (max-width: 1100px) {
        .ethno-card-root {
          width: calc(68vw + 108px) !important;
          height: 300px !important;
          transform: translateX(-50%) !important;
        }

        .ethno-card {
          min-height: 300px;
        }

        .ethno-card-content {
          top: 0;
          width: calc(100% - 172px);
          height: 198px;
        }

        .ethno-card-title {
          top: -4px;
          font-size: 17px;
        }

        .ethno-card-copy {
          top: 52px;
          font-size: 17px;
          line-height: 1.42;
        }

        .ethno-card-arrow {
          top: 104px;
          width: 64px;
          height: 64px;
        }

        .ethno-card-arrow-prev {
          left: 0;
        }

        .ethno-card-arrow-next {
          right: 0;
        }

        .ethno-card-pagination {
          top: 266px;
        }
      }

      @media (max-width: 600px) {
        .ethno-card-root {
          left: 0 !important;
          width: 100% !important;
          height: 382px !important;
          transform: none !important;
        }

        .ethno-card {
          min-height: 382px;
        }

        .ethno-card-content {
          top: 0;
          width: 100%;
          height: 264px;
          transform: translateX(-50%);
        }

        .ethno-card-title {
          top: 0;
          left: 50%;
          width: 140px;
          font-size: 16px;
          line-height: 1.25;
          transform: translateX(-50%);
        }

        .ethno-card-title.ethno-card-title--single-line {
          width: 236px;
          font-size: 14px;
          line-height: 1.15;
        }

        .ethno-card-copy {
          top: 63.17px;
          left: 50%;
          width: 264.94px;
          font-size: 16px;
          line-height: 1.42;
          transform: translateX(-50%);
        }

        .ethno-card-arrow {
          top: 324.82px;
          bottom: auto;
          width: 71.3px;
          height: 71.3px;
          transform: none;
        }

        .ethno-card-arrow-prev {
          left: 38.18px;
        }

        .ethno-card-arrow-next {
          right: 33.18px;
        }

        .ethno-card-pagination {
          top: 346.97px;
          gap: 11px;
        }
      }

      ${mobileMenuSelector()} {
        overflow: visible !important;
      }

      ${mobileMenuSelector(" .text-viewer")},
      ${mobileMenuSelector(" .text-viewer *")} {
        overflow: visible !important;
        max-width: none !important;
        word-break: keep-all !important;
        overflow-wrap: normal !important;
        hyphens: none !important;
        white-space: nowrap !important;
      }

      #${FOOTER_PARTNERS_ID} {
        position: absolute;
        inset: 0 auto auto 0;
        z-index: 441;
        pointer-events: none;
        color: #fff;
        font-family: custom_184208, Inter, Arial, sans-serif;
      }

      .rodnoi-footer-partners__group {
        position: absolute;
        width: 229px;
        height: 127px;
        transform: scale(var(--footer-partners-scale, 1));
        transform-origin: left top;
      }

      .rodnoi-footer-partners__media {
        height: 119px;
      }

      .rodnoi-footer-partners__title {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        white-space: normal;
      }

      .rodnoi-footer-partners__logos {
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        margin-top: 0;
      }

      .rodnoi-footer-partners__logos--authors {
        gap: 34px;
      }

      .rodnoi-footer-partners__logos--media {
        gap: 32px;
      }

      .rodnoi-footer-partners__rd {
        width: 98px;
        height: auto;
      }

      .rodnoi-footer-partners__riki {
        width: 66px;
        height: auto;
      }

      .rodnoi-footer-partners__premier {
        width: 92px;
        height: auto;
      }

      .rodnoi-footer-partners__rutube {
        width: 87px;
        height: auto;
      }

      @media (min-width: 601px) and (max-width: 1100px) {
        .rodnoi-footer-partners__group {
          width: 237.532px;
          height: 66.026px;
        }

        .rodnoi-footer-partners__title {
          transform: none;
        }

        .rodnoi-footer-partners__logos {
          bottom: auto;
          align-items: flex-start;
        }

        .rodnoi-footer-partners__logos--authors {
          left: 2.54px;
          top: 37.25px;
          gap: 40.36px;
        }

        .rodnoi-footer-partners__logos--authors .rodnoi-footer-partners__rd {
          width: 126.184px;
          margin-top: 5.87px;
        }

        .rodnoi-footer-partners__logos--authors .rodnoi-footer-partners__riki {
          width: 67px;
          margin-top: 0;
        }

        .rodnoi-footer-partners__logos--media {
          left: 1.52px;
          top: 40.58px;
          gap: 20px;
        }

        .rodnoi-footer-partners__logos--media .rodnoi-footer-partners__premier {
          width: 92px;
          margin-top: 2px;
        }

        .rodnoi-footer-partners__logos--media .rodnoi-footer-partners__rutube {
          width: 87px;
          margin-top: 0;
        }
      }

      @media (max-width: 600px) {
        .rodnoi-footer-partners__group {
          width: 237.532px;
          height: 66.026px;
        }

        .rodnoi-footer-partners__title {
          transform: none;
        }

        .rodnoi-footer-partners__logos {
          bottom: auto;
          align-items: flex-start;
        }

        .rodnoi-footer-partners__logos--authors {
          left: 2.54px;
          top: 43.12px;
          gap: 37.82px;
        }

        .rodnoi-footer-partners__logos--authors .rodnoi-footer-partners__rd {
          width: 126.184px;
          margin-top: 0;
        }

        .rodnoi-footer-partners__logos--authors .rodnoi-footer-partners__riki {
          width: 67px;
          margin-top: -5.87px;
        }

        .rodnoi-footer-partners__logos--media {
          left: 1.52px;
          top: 40.58px;
          gap: 20px;
        }

        .rodnoi-footer-partners__logos--media .rodnoi-footer-partners__premier {
          width: 92px;
          margin-top: 2px;
        }

        .rodnoi-footer-partners__logos--media .rodnoi-footer-partners__rutube {
          width: 87px;
          margin-top: 0;
        }
      }

      @media (min-width: 1101px) {
        .rodnoi-footer-partners__title {
          transform: translateY(50px);
        }
      }
    `;
    document.head.appendChild(style);
  }

  function initTabs() {
    injectStyles();
    initMobileMenuAnchors();
    hideDecorations();
    const sectionsReady = sections.map(initSection).every(Boolean);
    const footerReady = initFooterPartners();
    startFooterPartnersSync();
    return sectionsReady && footerReady;
  }

  function waitForReadymag() {
    const timer = window.setInterval(() => {
      if (initTabs()) {
        window.clearInterval(timer);
      }
    }, 250);

    const observer = new MutationObserver(() => {
      if (initTabs()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener("scroll", initTabs, { passive: true });
    window.setInterval(positionFooterPartners, 250);
    window.addEventListener("resize", () => {
      positionCardRoots();
      initTabs();
      positionFooterPartners();
    }, { passive: true });
    window.addEventListener("scroll", positionFooterPartners, { passive: true });
    window.addEventListener("load", fixMobileMenuTypography, { passive: true });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fixMobileMenuTypography);
    }
  }

  window.addEventListener("click", handleMobileMenuClick, true);

  document.addEventListener("click", (event) => {
    if (handleMobileMenuClick(event)) return;

    const target = event.target.closest("[data-id]");
    if (!target) return;

    const activate = buttonMap.get(target.getAttribute("data-id"));
    if (activate) activate();
  }, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForReadymag);
  } else {
    waitForReadymag();
  }
})();
