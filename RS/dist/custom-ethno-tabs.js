(function () {
  const ACTIVE_COLOR = "rgba(219, 112, 49, 1)";
  const INACTIVE_COLOR = "rgba(255, 255, 255, 1)";
  const FADE_MS = 260;
  const MOBILE_ANCHOR_TOP_OFFSET = 235;

  const mobileMenuAnchors = {
    "6a05c584f4bf2d123b379c35": "6a0dba3f7b6c123ad165f8f8",
    "6a05c90af8cefaf7d03f1000": "6a0dbb9255e6896a5576b005",
    "6a05c94345311d55df796884": "6a0dbef04a64fa1cdfe270a0",
    "6a05c95dba7e36a6b612666b": "6a0dc08a5a89ce621117ff7d",
  };

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

  function initMobileMenuAnchors() {
    Object.keys(mobileMenuAnchors).forEach((menuId) => {
      allById(menuId).forEach((menuItem) => {
        if (menuItem.dataset.mobileAnchorFixed) return;

        menuItem.dataset.mobileAnchorFixed = "true";
        menuItem.addEventListener("click", (event) => {
          handleMobileMenuClick(event);
        }, true);
      });
    });
  }

  function setText(widget, html) {
    const paragraph = widget.querySelector(".text-viewer p") || widget.querySelector("p");
    if (paragraph) {
      paragraph.innerHTML = html;
      paragraph.style.color = INACTIVE_COLOR;
    }
  }

  function setButtonState(buttons, activeIndex) {
    buttons.forEach((button, index) => {
      const isActive = index === activeIndex;
      button.classList.toggle("ethno-tab-active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function initSection(section) {
    if (section.initialized) return true;

    const buttons = section.buttons.map(byId);
    const textWidgets = section.texts.map(byId);

    if (buttons.some((button) => !button) || textWidgets.some((text) => !text)) {
      return false;
    }

    const displayWidget = textWidgets[0];
    displayWidget.classList.add("ethno-tab-panel");
    displayWidget.setAttribute("aria-live", "polite");
    setText(displayWidget, section.content[0]);

    textWidgets.slice(1).forEach((widget) => {
      widget.classList.add("ethno-tab-hidden-source");
      widget.setAttribute("aria-hidden", "true");
    });

    const activate = (index) => {
      if (buttons[index].classList.contains("ethno-tab-active")) return;

      setButtonState(buttons, index);
      displayWidget.classList.add("ethno-tab-panel-fading");

      window.setTimeout(() => {
        setText(displayWidget, section.content[index]);
        displayWidget.classList.remove("ethno-tab-panel-fading");
      }, FADE_MS);
    };

    buttons.forEach((button, index) => {
      button.classList.add("ethno-tab-button");
      button.setAttribute("role", "tab");
      button.setAttribute("tabindex", "0");
      button.style.cursor = "pointer";
      buttonMap.set(section.buttons[index], () => activate(index));

      allById(section.buttons[index]).forEach((buttonLayer) => {
        buttonLayer.classList.add("ethno-tab-button-layer");
        buttonLayer.style.cursor = "pointer";
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

    setButtonState(buttons, 0);
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
        transition: opacity ${FADE_MS}ms ease;
      }

      .ethno-tab-panel .text-viewer,
      .ethno-tab-panel .text-viewer *,
      .ethno-tab-panel p,
      .ethno-tab-panel p * {
        color: ${INACTIVE_COLOR} !important;
      }

      .ethno-tab-panel.ethno-tab-panel-fading {
        opacity: 0;
      }

      .ethno-tab-hidden-source {
        opacity: 0 !important;
        pointer-events: none !important;
        visibility: hidden !important;
      }
    `;
    document.head.appendChild(style);
  }

  function initTabs() {
    injectStyles();
    initMobileMenuAnchors();
    return sections.map(initSection).every(Boolean);
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
    window.addEventListener("resize", initTabs, { passive: true });
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
