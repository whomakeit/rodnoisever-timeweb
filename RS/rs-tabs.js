(function () {
  var ORANGE = "#db7031";
  var WHITE = "#ffffff";
  var MOBILE_QUERY = "(max-width: 767px)";
  var TABLET_QUERY = "(min-width: 768px) and (max-width: 1199px)";
  var MENU_BASE_WIDTHS = {
    mobile: 390,
    tablet: 786,
    desktop: 1200
  };
  var FILM_WIDGET_ID = "6a0dc30f29e9a6eed7aa03e0";
  var FILM_BUTTON_ID = "6a17a341f60bd383a92f868a";
  var FILM_BUTTON_BACK_ID = "6a17a341a21f0039c5577ca6";
  var ABOUT_BUTTON_ID = "6a05bdec2661493605c17c15";
  var FILM_EMBED_URL = "https://rutube.ru/play/embed/360d493ea3a46fba26ac545c325b76db/";
  var FILM_RATIO = 16 / 9;
  var REPEATING_BG_WIDGET_IDS = [
    "6a17c00df993377826d737bb",
    "6a17c08d06226c9057501f54",
    "6a17c7578a9798aa2fab7d35",
    "6a17c757b4a77a49328cfb66",
    "6a17c75d418afa65d6607683",
    "6a17c75e2ba475e409ecb598",
    "6a17c76bbda81c3a8687de56",
    "6a17c76c8a9798aa2fab7e54",
    "6a17c7816065b50a21cd9564",
    "6a17c8520f4f2d1cd6eb05f7",
    "6a17cde4b4a77a49328e2d2b",
    "6a17ce2f2ba475e409ededfa",
    "6a17ce345766f604e9c19a5a",
    "6a17ce3d4d451d6d587c9d16",
    "6a17ce43b668129059acad40",
    "6a17d1df418afa65d6629316",
    "6a17d20865a29ae4e19fc239",
    "6a17d212b271d6235381e547",
    "6a17d21a8b9bbfbd8629d5c4",
    "6a17d22212887f10dee3ff41",
    "6a17d22832efd845531a126e",
    "6a17d231b271d6235381e6cd",
    "6a17d2436065b50a21cfd7ca",
    "6a17d24306226c905755b02b",
    "6a17d24412887f10dee40128",
    "6a17d269076bb5b8abcefb41",
    "6a17d26a5766f604e9c25113",
    "6a17d27128cc6e607da51b25",
    "6a17d27234949c0b1ffa218d",
    "6a17d27ac71591d0a9b4b5c0",
    "6a17d27b56edba8a84a2ed8d"
  ];
  var HERO_UNDER_BACKGROUND_WIDGET_IDS = [
    "6a17c886f60bd383a939675e",
    "6a10964d466ebcc22981655b",
    "6a10966c6bef335571e1e2dd",
    "6a17ce4ca683619c9fd0ac10",
    "6a10976542323948e776bb66",
    "6a10977d9965a9147fe425ea"
  ];
  var HIDDEN_WIDGET_IDS = [
    "6a153f2db2b5a58faa968cc7"
  ];

  var groups = [
    {
      tabs: [
        "6a06fe1963c79f6832d278fe",
        "6a06ff1e01e50624b6ef1132",
        "6a06ff3ef9f83a4060887aef"
      ],
      panels: [
        {
          id: "6a0aeb41ec0efb96fb5efe1e",
          title: "МАНСИ",
          text: "Манси – народ гор, ветра и тайги, их численность около 12 000 человек. В их мире всё имеет голос: ручей говорит с путником, ветер предупреждает об опасности, а медведь приходит не как зверь, а как гость. Человек здесь не царь природы. Он – слушатель."
        },
        {
          id: "6a0aeee2dba84a62fb2c7986",
          title: "ГДЕ ЖИВУТ?",
          text: "Они живут на западных склонах Урала и в бассейне реки Северная Сосьва. Это край тайги, переходящей в тундру."
        },
        {
          id: "6a0aeefadba84a62fb2c7e84",
          title: "ГДЕ ПОЗНАКОМИТЬСЯ?",
          text: "Гонки на обласах на Кубок губернатора Югры собирают сотни участников и зрителей. Здесь соревнования становятся праздником: проводятся обряды, мастер-классы по ремёслам, звучит музыка. «Газпром нефть» поддерживает событие – и оно остаётся живым и настоящим."
        }
      ],
      pager: "6a16be9fa18ff42d8f2428d8",
      prev: ["6a1540fed28110d3bae33c70", "6a1540fe5ebefe8083e2e307"],
      next: ["6a1540fd671c381dd2c712cf", "6a1540fefe20c7b4e17fc43c"]
    },
    {
      tabs: [
        "6a0afa6de9863e17b2d25cff",
        "6a0afa6d395e41dd77a065be",
        "6a0afa6d74006e1df15fb26e"
      ],
      panels: [
        {
          id: "6a0afa6dedfa8892990af81a",
          title: "НЕНЦЫ",
          text: "Ненцы – крупнейший кочевой народ России, их численность – около 45 000 человек. Многие из них до сих пор живут так, как жили предки тысячу лет назад: каслают по тундре вслед за оленьими стадами. Для ненца олень – это всё: жизнь, дом, путь, время."
        },
        {
          id: "6a0afa6e24639135cf4b65fe",
          title: "ГДЕ ЖИВУТ?",
          text: "Они живут на огромной территории от Кольского полуострова до Таймыра, но сердце их земли – Ямал, что в переводе с ненецкого означает «край земли».",
          tabletOffsetY: 28
        },
        {
          id: "6a0afa6e2d250f7a2fd48cdf",
          title: "ГДЕ ПОЗНАКОМИТЬСЯ?",
          text: "За полярным кругом, в селе Мыс Каменный, проходит «Дыхание Арктики» – фестиваль искусства и творчества, рожденный в самой тундре. Здесь встречаются ремёсла, музыка и танец. На один день село превращается в живой круговорот талантов и традиций. «Родные города» помогли этой идее стать реальностью. И теперь в ней может участвовать каждый."
        }
      ],
      pager: "6a16cdab8b9bbfbd86b3eaac",
      prev: ["6a15408c5ebefe8083e2da5d", "6a15408da0954400c80bcba5"],
      next: ["6a15408cbea2020047dee5ad", "6a15408c9993f385d1b8140a"]
    },
    {
      tabs: [
        "6a0b047a52f5fd4a56e81359",
        "6a0b047abb291fa9bf0dc84f",
        "6a0b047a949e02fd4322226b"
      ],
      panels: [
        {
          id: "6a0b047a52f5fd4a56e8136e",
          title: "СЕЛЬКУПЫ",
          text: "Селькупы – один из самых малочисленных народов Сибири: их около 4 500 человек. «Селькуп» означает «лесной человек», они рыболовы и охотники. Их главное орудие – лодка-обласок, выдолбленная из цельного ствола кедра или осины. Она лёгкая, манёвренная, идеальная для таёжных рек с порогами и мелями."
        },
        {
          id: "6a0b047a2348b2c2ddd483bf",
          title: "ГДЕ ЖИВУТ?",
          text: "Они живут на севере Томской области и в Красноселькупском районе Ямало-Ненецкого автономного округа, в бассейне рек Таз и Пур."
        },
        {
          id: "6a0b047ad89100fff3b27e80",
          title: "ГДЕ ПОЗНАКОМИТЬСЯ?",
          text: "«Сказки Севера» – проект программы «Родные города», который собирает голоса коренных народов. Фольклор здесь звучит как радиоспектакль – живо, точно, бережно.\nСегодня проект объединяет разные регионы и культуры.\nВ их числе и селькупские сказки, доступные для свободного прослушивания."
        }
      ],
      pager: "6a16da8c5c879c631855c924",
      prev: ["6a153e69316b91b5a1842e55", "6a153f7dfe20c7b4e17f7763"],
      next: ["6a153e5b13f67ba7e2f6102a", "6a153f4142323948e7e219aa"]
    },
    {
      tabs: [
        "6a0afcd906a26add81adf5e2",
        "6a0afcd9e0b3efaa8a8d0683",
        "6a0afcd90c982c0da510f8ab"
      ],
      panels: [
        {
          id: "6a0afcd9dcfe1c8db2172afd",
          title: "ХАНТЫ",
          text: "Ханты – один из древнейших народов Западной Сибири. Их численность – около 30 000 человек и за каждым стоит род, уходящий корнями вглубь веков. Их культура выросла из движения: сезонных переходов, охоты, рыболовства. Здесь традиции – не наследие, а повседневность."
        },
        {
          id: "6a0afcd9edfa8892990d081c",
          title: "ГДЕ ЖИВУТ?",
          text: "Ханты живут в Ханты-Мансийском автономном округе-Югре, по берегам великих рек: Оби, Иртыша, Конды и Казыма."
        },
        {
          id: "6a0afcdadbe170b7568de1c7",
          title: "ГДЕ ПОЗНАКОМИТЬСЯ?",
          text: "День оленевода – праздник, в котором сходятся спорт, быт, мастерство и родовая память. Еще в ХМАО-Югре при поддержке «Газпром нефти» проходит конкурс профессионального мастерства среди оленеводов на Кубок губернатора Югры. Они соревнуются в гонках оленьих упряжек, укладке нарт, беге на охотничьих лыжах.\nКаждый год это помогает сохранять вековые традиции древнего народа."
        }
      ],
      pager: "6a16c8fe5b0a264b78529c27",
      prev: ["6a154053362dc1a1f0a675c6", "6a154054b2b5a58faa96a962"],
      next: ["6a154053fe20c7b4e17f86d8", "6a1540539993f385d1b7e17f"]
    }
  ];

  var ready = false;
  var filmReady = false;
  var menuAnchorsReady = false;
  var states = [];

  var desktopMenuAnchors = {
    "МАНСИ": 1502,
    "НЕНЦЫ": 2786,
    "СЕЛЬКУПЫ": 4116,
    "ХАНТЫ": 5437
  };
  var tabletMenuAnchors = {
    "МАНСИ": 1890,
    "НЕНЦЫ": 2960,
    "СЕЛЬКУПЫ": 4100,
    "ХАНТЫ": 5127
  };
  var mobileMenuAnchors = {
    "МАНСИ": 1521,
    "НЕНЦЫ": 3109,
    "СЕЛЬКУПЫ": 4714,
    "ХАНТЫ": 6305
  };

  function byId(id) {
    return document.querySelector('[data-id="' + id + '"]');
  }

  function asArray(ids) {
    return ids.map(byId).filter(Boolean);
  }

  function getPanelShell(node) {
    if (node.parentElement && node.parentElement.classList.contains("animation-container")) {
      return node.parentElement;
    }

    return node;
  }

  function getRectStyle(node) {
    return {
      left: node.style.left,
      top: node.style.top,
      width: node.style.width,
      height: node.style.height
    };
  }

  function setRectStyle(node, rect) {
    node.style.left = rect.left;
    node.style.top = rect.top;
    node.style.width = rect.width;
    node.style.height = rect.height;
  }

  function initRepeatingBackground() {
    var container = document.querySelector(".page-content-container");
    var background;

    if (!container) return false;

    background = container.querySelector(".rs-repeating-background");
    if (!background) {
      background = document.createElement("div");
      background.className = "rs-repeating-background";
      background.setAttribute("aria-hidden", "true");
      container.insertBefore(background, container.firstChild);
    }

    return true;
  }

  function setPanelSlot(panel, rect) {
    setRectStyle(panel.shell, rect);

    if (!panel.tabletOffsetY || !window.matchMedia(TABLET_QUERY).matches) {
      return;
    }

    panel.shell.style.top = (getInlineNumber(panel.shell, "top") + panel.tabletOffsetY) + "px";
  }

  function setPanelText(node, text) {
    setWidgetText(node, text, true);
  }

  function getTextTarget(node) {
    return node.querySelector(".common-button .text") || node.querySelector(".text-viewer p");
  }

  function setWidgetText(node, text, allowLineBreaks) {
    var paragraph = getTextTarget(node);

    if (!paragraph) return;

    paragraph.innerHTML = (allowLineBreaks ? text.split("\n") : [text])
      .map(function (line) {
        return line.trim();
      })
      .filter(Boolean)
      .map(function (line) {
        return line
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      })
      .join("<br>");
  }

  function getInlineNumber(node, prop) {
    var value = parseFloat(node.style[prop]);

    return Number.isFinite(value) ? value : 0;
  }

  function prepareTitle(node) {
    var width = getInlineNumber(node, "width");
    var left = getInlineNumber(node, "left");

    node.classList.add("rs-tabs-title");
    node.dataset.rsTitleCenter = String(left + width / 2);
    node.style.width = "430px";
    node.style.left = (left + width / 2 - 215) + "px";
    node.style.overflow = "visible";
    node.style.transition = "opacity 240ms ease";
    node.querySelectorAll(".common-button, .text, .text-viewer, .text-viewer p").forEach(function (child) {
      child.style.overflow = "visible";
      child.style.width = "100%";
      child.style.textAlign = "center";
      child.style.whiteSpace = "nowrap";
    });
  }

  function setTitle(state, title, instant) {
    var node = state.title;

    window.clearTimeout(state.titleTimer);

    if (instant) {
      node.style.transition = "none";
      node.style.opacity = "1";
      setWidgetText(node, title, false);
      window.requestAnimationFrame(function () {
        node.style.transition = "opacity 240ms ease";
      });
      return;
    }

    node.style.transition = "opacity 180ms ease";
    node.style.opacity = "0";
    state.titleTimer = window.setTimeout(function () {
      setWidgetText(node, title, false);
      node.style.transition = "opacity 260ms ease";
      node.style.opacity = "1";
    }, 180);
  }

  function setPager(node, active) {
    var paragraph = node.querySelector(".text-viewer p");
    var labels = ["➊", "➋", "➌"];

    if (!paragraph) return;

    paragraph.innerHTML = [0, 1, 2].map(function (index) {
      return '<span class="rs-tabs-pager-dot" data-rs-tab-index="' + index + '" style="color:' + (index === active ? ORANGE : WHITE) + '">' + labels[index] + '</span>';
    }).join(" ");
  }

  function preparePanel(widget, shell) {
    widget.classList.add("rs-tabs-panel");
    shell.classList.add("rs-tabs-panel-shell");

    if (widget !== shell) {
      widget.style.left = "0px";
      widget.style.top = "0px";
      widget.style.marginLeft = "";
      widget.style.marginTop = "";
      widget.style.zoom = "";
      shell.style.offsetPath = "none";
      shell.style.offsetDistance = "0px";
      shell.style.offsetRotate = "0deg";
      shell.style.transform = "none";
      shell.style.cursor = "";
    }
  }

  function colorTab(tab, active) {
    tab.style.cursor = window.matchMedia(MOBILE_QUERY).matches ? "default" : "pointer";
    tab.style.color = active ? ORANGE : WHITE;
    tab.querySelectorAll("*").forEach(function (child) {
      child.style.color = active ? ORANGE : WHITE;
    });
  }

  function showPanel(state, index, instant) {
    state.active = (index + state.panels.length) % state.panels.length;

    setTitle(state, state.panels[state.active].title, instant);
    state.title.setAttribute("aria-live", "polite");
    setPager(state.pager, state.active);

    state.panels.forEach(function (panel, panelIndex) {
      setPanelSlot(panel, state.panelSlot);
      panel.shell.style.zIndex = String(state.panelZ + panelIndex);
      panel.shell.style.transition = instant ? "none" : "opacity 320ms ease, visibility 320ms ease";
      panel.shell.style.opacity = panelIndex === state.active ? "1" : "0";
      panel.shell.style.visibility = panelIndex === state.active ? "visible" : "hidden";
      panel.shell.style.pointerEvents = panelIndex === state.active ? "auto" : "none";
      panel.widget.setAttribute("aria-hidden", panelIndex === state.active ? "false" : "true");
    });
  }

  function setMobileMode(state) {
    state.hiddenTabs.forEach(function (tab) {
      tab.style.pointerEvents = "none";
      tab.setAttribute("tabindex", "-1");
      tab.setAttribute("aria-hidden", "true");
    });
    state.title.style.pointerEvents = "none";
    state.pager.style.pointerEvents = "auto";
  }

  function bindClick(node, handler) {
    node.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      handler(event);
    }, true);
  }

  function getMenuAnchorTarget(event) {
    var link = event.target.closest && event.target.closest("a.anchor-link");
    var label = link ? link.textContent.trim().replace(/\s+/g, " ") : "";
    var isMobile = window.matchMedia(MOBILE_QUERY).matches;
    var isTablet = window.matchMedia(TABLET_QUERY).matches;
    var mode = isMobile ? "mobile" : (isTablet ? "tablet" : "desktop");
    var anchors = isMobile ? mobileMenuAnchors : (isTablet ? tabletMenuAnchors : desktopMenuAnchors);
    var position = anchors[label];

    if (Number.isFinite(position)) {
      position = Math.round(position * (document.documentElement.clientWidth / MENU_BASE_WIDTHS[mode]));
    }

    return Number.isFinite(position) ? position : null;
  }

  function scrollToMenuAnchor(position) {
    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  }

  function initMenuAnchors() {
    if (menuAnchorsReady) return;

    document.addEventListener("click", function (event) {
      var position = getMenuAnchorTarget(event);
      if (position === null) return;

      event.preventDefault();
      event.stopPropagation();
      scrollToMenuAnchor(position);
    }, true);
    document.addEventListener("keydown", function (event) {
      var position = getMenuAnchorTarget(event);
      if (position === null) return;
      if (event.key !== "Enter" && event.key !== " ") return;

      event.preventDefault();
      event.stopPropagation();
      scrollToMenuAnchor(position);
    }, true);

    menuAnchorsReady = true;
  }

  function createFilmIframe() {
    var iframe = document.createElement("iframe");
    iframe.className = "rs-film-iframe";
    iframe.src = FILM_EMBED_URL + "?autoplay=true";
    iframe.title = "Родной Север. Фильм";
    iframe.allow = "clipboard-write; autoplay; fullscreen; picture-in-picture; encrypted-media";
    iframe.allowFullscreen = true;
    iframe.setAttribute("webkitallowfullscreen", "true");
    iframe.setAttribute("mozallowfullscreen", "true");

    return iframe;
  }

  function sendFilmCommand(player, type, data) {
    var iframe = player.querySelector("iframe");
    if (!iframe || !iframe.contentWindow) return;

    iframe.contentWindow.postMessage(JSON.stringify({
      type: type,
      data: data || {}
    }), "*");
  }

  function isFilmFullscreenMode() {
    return window.matchMedia("(max-width: 1199px)").matches;
  }

  function placeFilmPlayer(widget, player) {
    var parent = isFilmFullscreenMode() ? document.body : widget;

    if (player.parentElement !== parent) parent.appendChild(player);
  }

  function getFilmWidgetViewportRect(widget) {
    var rect = widget.getBoundingClientRect();
    var page = widget.closest(".page-content-container");
    var viewport = window.visualViewport || {};
    var viewportLeft = Number.isFinite(viewport.offsetLeft) ? viewport.offsetLeft : 0;
    var viewportWidth = Number.isFinite(viewport.width) ? viewport.width : document.documentElement.clientWidth;
    var pageRect;
    var pageWidth;
    var pageHeight;
    var scaleX;
    var scaleY;
    var zoom;
    var width;
    var height;
    var result;
    var clippedLeft;
    var clippedRight;

    if (!page) return rect;

    pageRect = page.getBoundingClientRect();
    pageWidth = getInlineNumber(page, "width") || page.offsetWidth;
    pageHeight = getInlineNumber(page, "height") || page.offsetHeight;
    zoom = parseFloat(window.getComputedStyle(page).zoom);
    scaleX = Number.isFinite(zoom) && zoom > 0 ? zoom : (pageWidth ? pageRect.width / pageWidth : 1);
    scaleY = Number.isFinite(zoom) && zoom > 0 ? zoom : (pageHeight ? pageRect.height / pageHeight : scaleX);
    width = getInlineNumber(widget, "width") || widget.offsetWidth || rect.width;
    height = getInlineNumber(widget, "height") || widget.offsetHeight || rect.height;

    result = {
      left: (getInlineNumber(page, "left") + getInlineNumber(widget, "left")) * scaleX - window.pageXOffset,
      top: pageRect.top + getInlineNumber(widget, "top") * scaleY,
      width: width * scaleX,
      height: height * scaleY
    };

    if (!window.matchMedia("(max-width: 1199px)").matches) return result;

    if (Math.abs(rect.height - result.height) < 2) {
      result.top = rect.top;
      result.height = rect.height;
    }
    if (window.matchMedia("(min-width: 600px) and (max-width: 1199px)").matches) {
      result.top += 50;
    }

    clippedLeft = Math.max(result.left, viewportLeft);
    clippedRight = Math.min(result.left + result.width, viewportLeft + viewportWidth);

    return {
      left: clippedLeft,
      top: result.top,
      width: Math.max(0, clippedRight - clippedLeft),
      height: result.height
    };
  }

  function syncFilmPlayerToWidget(widget, player, frame) {
    var viewport = window.visualViewport || {};
    var fullscreen = isFilmFullscreenMode();
    var rect = fullscreen ? {
      left: 0,
      top: 0,
      width: Number.isFinite(viewport.width) ? viewport.width : document.documentElement.clientWidth,
      height: Number.isFinite(viewport.height) ? viewport.height : window.innerHeight
    } : {
      left: 0,
      top: 0,
      width: getInlineNumber(widget, "width") || widget.offsetWidth,
      height: getInlineNumber(widget, "height") || widget.offsetHeight
    };
    var frameMaxWidth = Math.max(0, rect.width);
    var frameMaxHeight = Math.max(0, rect.height);
    var frameWidth;
    var frameHeight;

    placeFilmPlayer(widget, player);
    player.style.position = fullscreen ? "fixed" : "absolute";
    player.style.left = Math.round(rect.left) + "px";
    player.style.top = Math.round(rect.top) + "px";
    player.style.width = Math.round(rect.width) + "px";
    player.style.height = Math.round(rect.height) + "px";

    frameWidth = Math.min(frameMaxWidth, frameMaxHeight * FILM_RATIO);
    frameHeight = frameWidth / FILM_RATIO;

    if (frameHeight > frameMaxHeight) {
      frameHeight = frameMaxHeight;
      frameWidth = frameHeight * FILM_RATIO;
    }

    frame.style.width = Math.round(frameWidth) + "px";
    frame.style.height = Math.round(frameHeight) + "px";
  }

  function safeSyncFilmPlayerToWidget(widget, player, frame) {
    try {
      syncFilmPlayerToWidget(widget, player, frame);
      return true;
    } catch (error) {
      player.classList.remove("rs-film-player-open");
      widget.classList.remove("rs-film-open");
      return false;
    }
  }

  function stabilizeFilmPlayer(widget, player, frame) {
    var started = Date.now();

    function tick() {
      if (!widget.classList.contains("rs-film-open")) return;
      safeSyncFilmPlayerToWidget(widget, player, frame);
      if (Date.now() - started < 2500) window.requestAnimationFrame(tick);
    }

    window.requestAnimationFrame(tick);
  }

  function initFilmPlayer() {
    if (filmReady) return true;

    var widget = byId(FILM_WIDGET_ID);
    var button = byId(FILM_BUTTON_ID);
    var buttonBack = byId(FILM_BUTTON_BACK_ID);
    if (!widget) return false;
    if (!button) return false;

    var cover = widget.querySelector(".shots-cover");
    if (!cover) return false;

    var player = document.createElement("div");
    var frame = document.createElement("div");
    var close = document.createElement("button");
    var filmOpenScrollY = 0;
    var filmPausedByScroll = false;

    widget.classList.add("rs-film-widget");
    cover.classList.add("rs-film-cover");
    button.classList.add("rs-film-trigger");
    button.setAttribute("role", "button");
    button.setAttribute("tabindex", "0");
    if (buttonBack) buttonBack.classList.add("rs-film-trigger");
    player.className = "rs-film-player";
    frame.className = "rs-film-frame";
    close.className = "rs-film-close";
    close.type = "button";
    close.setAttribute("aria-label", "Закрыть фильм");
    close.innerHTML = '<span aria-hidden="true"></span>';

    player.appendChild(frame);
    player.appendChild(close);
    placeFilmPlayer(widget, player);

    function openFilm() {
      if (widget.classList.contains("rs-film-open")) return;

      if (!safeSyncFilmPlayerToWidget(widget, player, frame)) return;
      frame.appendChild(createFilmIframe());
      widget.classList.add("rs-film-open");
      player.classList.add("rs-film-player-open");
      if (isFilmFullscreenMode()) {
        document.documentElement.classList.add("rs-film-modal-lock");
        document.body.classList.add("rs-film-modal-lock");
      }
      if (!isFilmFullscreenMode()) {
        button.classList.add("rs-film-trigger-hidden");
        if (buttonBack) buttonBack.classList.add("rs-film-trigger-hidden");
      }
      if (!isFilmFullscreenMode()) {
        filmOpenScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        filmPausedByScroll = false;
        stabilizeFilmPlayer(widget, player, frame);
      }
    }

    function scrollToFilmAndOpen() {
      var rect = widget.getBoundingClientRect();
      var top = rect.top + window.pageYOffset;
      var offset = Math.max(0, (window.innerHeight - rect.height) / 2);

      if (isFilmFullscreenMode()) {
        openFilm();
        return;
      }

      window.scrollTo({
        top: Math.max(0, top - offset),
        behavior: "smooth"
      });
      window.setTimeout(openFilm, 720);
    }

    function closeFilm() {
      if (!widget.classList.contains("rs-film-open")) return;

      widget.classList.remove("rs-film-open");
      player.classList.remove("rs-film-player-open");
      document.documentElement.classList.remove("rs-film-modal-lock");
      document.body.classList.remove("rs-film-modal-lock");
      button.classList.remove("rs-film-trigger-hidden");
      if (buttonBack) buttonBack.classList.remove("rs-film-trigger-hidden");
      filmPausedByScroll = false;
      window.setTimeout(function () {
        var iframe = player.querySelector("iframe");
        if (iframe) iframe.remove();
      }, 380);
    }

    function handleDesktopFilmScroll() {
      var currentScrollY;

      if (isFilmFullscreenMode() || !widget.classList.contains("rs-film-open")) return;

      currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (!filmPausedByScroll && Math.abs(currentScrollY - filmOpenScrollY) > 72) {
        sendFilmCommand(player, "player:pause");
        filmPausedByScroll = true;
      }
    }

    bindClick(button, openFilm);
    if (buttonBack) bindClick(buttonBack, openFilm);
    bindClick(close, closeFilm);
    player.addEventListener("click", function (event) {
      if (event.target === player) closeFilm();
    });
    document.addEventListener("click", function (event) {
      var aboutButton = event.target.closest('[data-id="' + ABOUT_BUTTON_ID + '"]');
      if (!aboutButton) return;

      event.preventDefault();
      event.stopPropagation();
      scrollToFilmAndOpen();
    }, true);
    button.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;

      event.preventDefault();
      event.stopPropagation();
      openFilm();
    }, true);
    document.addEventListener("keydown", function (event) {
      var aboutButton = event.target.closest && event.target.closest('[data-id="' + ABOUT_BUTTON_ID + '"]');
      if (!aboutButton || (event.key !== "Enter" && event.key !== " ")) return;

      event.preventDefault();
      event.stopPropagation();
      scrollToFilmAndOpen();
    }, true);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeFilm();
    });
    window.addEventListener("resize", function () {
      if (widget.classList.contains("rs-film-open")) safeSyncFilmPlayerToWidget(widget, player, frame);
    });
    window.addEventListener("scroll", function () {
      if (!widget.classList.contains("rs-film-open")) return;
      safeSyncFilmPlayerToWidget(widget, player, frame);
      handleDesktopFilmScroll();
    });
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", function () {
        if (widget.classList.contains("rs-film-open")) safeSyncFilmPlayerToWidget(widget, player, frame);
      });
      window.visualViewport.addEventListener("scroll", function () {
        if (widget.classList.contains("rs-film-open")) safeSyncFilmPlayerToWidget(widget, player, frame);
      });
    }
    window.addEventListener("message", function (event) {
      var iframe = player.querySelector("iframe");
      var message;

      if (!iframe || event.source !== iframe.contentWindow) return;

      try {
        message = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch (error) {
        return;
      }

      if (!message || message.type !== "player:ready") return;

      sendFilmCommand(player, "player:play");
    });

    filmReady = true;
    return true;
  }

  function prepareArrowPair(pair) {
    pair.forEach(function (arrow, index) {
      arrow.classList.add("rs-tabs-arrow");
      arrow.classList.add(index === 0 ? "rs-tabs-arrow-hit" : "rs-tabs-arrow-icon");
      arrow.setAttribute("role", "button");
      arrow.setAttribute("tabindex", "0");
    });
  }

  function init() {
    if (ready) return true;

    initMenuAnchors();

    var nextStates = [];

    for (var groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
      var group = groups[groupIndex];
      var tabs = asArray(group.tabs);
      var title = byId(group.tabs[0]);
      var pager = byId(group.pager);
      var panels = group.panels.map(function (panel) {
        var widget = byId(panel.id);

        return widget ? {
          widget: widget,
          shell: getPanelShell(widget),
          title: panel.title,
          text: panel.text,
          tabletOffsetY: panel.tabletOffsetY || 0
        } : null;
      }).filter(Boolean);
      var prev = asArray(group.prev);
      var next = asArray(group.next);

      if (!title || !pager || panels.length !== 3 || prev.length === 0 || next.length === 0) {
        return false;
      }

      panels.forEach(function (panel) {
        preparePanel(panel.widget, panel.shell);
        setPanelText(panel.widget, panel.text);
      });
      prepareTitle(title);

      nextStates.push({
        active: 0,
        title: title,
        hiddenTabs: tabs.filter(function (tab) {
          return tab !== title;
        }),
        pager: pager,
        panels: panels,
        prev: prev,
        next: next,
        panelSlot: getRectStyle(panels[0].shell),
        panelZ: Number(panels[0].shell.style.zIndex || 1)
      });
    }

    states = nextStates;

    states.forEach(function (state) {
      state.pager.setAttribute("role", "tablist");
      bindClick(state.pager, function (event) {
        var dot = event.target.closest("[data-rs-tab-index]");

        if (!dot) return;
        showPanel(state, Number(dot.getAttribute("data-rs-tab-index")), false);
      });

      prepareArrowPair(state.prev);
      prepareArrowPair(state.next);

      state.prev.forEach(function (arrow) {
        bindClick(arrow, function () {
          showPanel(state, state.active - 1, false);
        });
      });

      state.next.forEach(function (arrow) {
        bindClick(arrow, function () {
          showPanel(state, state.active + 1, false);
        });
      });

      showPanel(state, 0, true);
      setMobileMode(state);
    });

    window.addEventListener("resize", function () {
      states.forEach(setMobileMode);
    });

    ready = true;
    return true;
  }

  function injectStyles() {
    if (document.getElementById("rs-tabs-style")) return;

    var style = document.createElement("style");
    style.id = "rs-tabs-style";
    style.textContent = [
      HIDDEN_WIDGET_IDS.map(function (id) {
        return '.rmwidget[data-id="' + id + '"] { display: none !important; }';
      }).join("\n"),
      REPEATING_BG_WIDGET_IDS.map(function (id) {
        return '.rmwidget[data-id="' + id + '"], .animation-container:has(.rmwidget[data-id="' + id + '"]) { display: none !important; }';
      }).join("\n"),
      HERO_UNDER_BACKGROUND_WIDGET_IDS.map(function (id) {
        return '.rmwidget[data-id="' + id + '"], .animation-container:has(.rmwidget[data-id="' + id + '"]) { z-index: 299 !important; }';
      }).join("\n"),
      ".rs-tabs-arrow { -webkit-tap-highlight-color: transparent !important; outline: none !important; }",
      ".rs-tabs-arrow, .rs-tabs-arrow * { -webkit-tap-highlight-color: transparent !important; }",
      ".rs-tabs-arrow-hit { cursor: pointer; transition: none !important; }",
      ".rs-tabs-arrow-hit:hover, .rs-tabs-arrow-hit:active, .rs-tabs-arrow-hit:focus { filter: none !important; opacity: 1 !important; outline: none !important; }",
      ".rs-tabs-arrow-icon { cursor: pointer; opacity: .8 !important; transition: opacity 180ms ease !important; }",
      ".rs-tabs-arrow-icon svg, .rs-tabs-arrow-icon svg * { transition: fill 180ms ease, opacity 180ms ease !important; }",
      ".rs-tabs-arrow-icon svg, .rs-tabs-arrow-icon svg path { fill: #ffffff !important; }",
      ".rs-tabs-arrow-icon:hover, .rs-tabs-arrow-icon:focus { opacity: 1 !important; filter: none !important; outline: none !important; }",
      ".rs-tabs-arrow-icon:active { opacity: 1 !important; filter: none !important; }",
      ".rs-tabs-arrow-icon:active svg, .rs-tabs-arrow-icon:active svg path { fill: #db7031 !important; }",
      ".rs-tabs-pager-dot { cursor: pointer; display: inline-block; min-width: 1em; text-align: center; -webkit-tap-highlight-color: transparent; transition: color 220ms ease, opacity 220ms ease; }",
      ".rs-tabs-pager-dot:hover, .rs-tabs-pager-dot:focus { color: #db7031 !important; opacity: 1; outline: none; }",
      "@media (max-width: 639px) { .rmwidget[data-id='6a16be9fa18ff42d8f2428d8'], .animation-container:has(.rmwidget[data-id='6a16be9fa18ff42d8f2428d8']) { width: 74px !important; overflow: visible !important; } .rmwidget[data-id='6a16be9fa18ff42d8f2428d8'] .text-viewer, .rmwidget[data-id='6a16be9fa18ff42d8f2428d8'] .text-viewer p { width: 74px !important; max-width: none !important; overflow: visible !important; white-space: nowrap !important; } .rmwidget[data-id='6a16be9fa18ff42d8f2428d8'] .text-viewer p { display: flex !important; flex-direction: row !important; align-items: center !important; justify-content: center !important; gap: 7px !important; } .rmwidget[data-id='6a16be9fa18ff42d8f2428d8'] .rs-tabs-pager-dot { display: inline-flex !important; align-items: center !important; justify-content: center !important; min-width: 18px !important; } }",
      ".rs-tabs-title, .rs-tabs-title * { overflow: visible !important; }",
      ".rs-tabs-title .common-button, .rs-tabs-title .text { width: 100% !important; max-width: none !important; text-align: center !important; white-space: nowrap !important; }",
      ".rs-tabs-panel .text-viewer, .rs-tabs-panel .text-viewer *, .rs-tabs-panel-shell .text-viewer, .rs-tabs-panel-shell .text-viewer * { color: #ffffff !important; }",
      ".rs-repeating-background { position: absolute; left: -87px; top: 615px; width: 1200px; height: 6967px; z-index: 300; pointer-events: none; background-image: url('img/5437a6b88fe9f3bb016a8096/6339958/image-d7b8c8f9-6e42-43cf-9b95-c496d5901e49.jpg'); background-repeat: repeat-y; background-position: 0 0; background-size: 1200px 675px; }",
      "@media (min-width: 640px) and (max-width: 899px) { .rs-repeating-background { left: -2px; top: 922px; width: 770px; height: 5591px; background-image: url('img/5437a6b88fe9f3bb016a8096/6339958/image-9e3a8f6a-26d4-4ee2-bbd5-5b54b8dd445c.jpg'); background-position: 0 0; background-size: 770px 1155px; } }",
      "@media (max-width: 639px) { .rs-repeating-background { left: -36px; top: 637px; width: 392px; height: 8063px; background-image: url('img/5437a6b88fe9f3bb016a8096/6339958/image-3319bb60-aed5-4ab9-a87d-e44518140855_w-784.jpg'); background-size: 392px 504px; } .rmwidget[data-id='6a17d2ece9035cfef7236c8b'], .animation-container:has(.rmwidget[data-id='6a17d2ece9035cfef7236c8b']) { z-index: 296 !important; } .rmwidget[data-id='6a10976542323948e776bb66'], .animation-container:has(.rmwidget[data-id='6a10976542323948e776bb66']) { z-index: 297 !important; } .rmwidget[data-id='6a10977d9965a9147fe425ea'], .animation-container:has(.rmwidget[data-id='6a10977d9965a9147fe425ea']) { z-index: 298 !important; } }",
      "html.rs-film-modal-lock, body.rs-film-modal-lock { overflow: hidden !important; touch-action: none !important; }",
      ".rs-film-widget { overflow: hidden !important; }",
      ".rs-film-cover { transition: opacity 360ms ease, visibility 360ms ease !important; }",
      ".rs-film-player { position: absolute; z-index: 10010; background: #000; opacity: 0; visibility: hidden; pointer-events: none; transition: opacity 360ms ease, visibility 360ms ease; }",
      ".rs-film-frame { position: absolute; left: 50%; top: 50%; max-width: 100%; max-height: 100%; overflow: hidden; background: #000; transform: translate(-50%, -50%); }",
      ".rs-film-iframe { display: block; width: 100%; height: 100%; border: 0; background: #000; }",
      ".rs-film-trigger { cursor: pointer; -webkit-tap-highlight-color: transparent; }",
      ".rs-film-trigger-hidden { opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }",
      ".rs-film-close { position: absolute; right: 18px; top: 18px; z-index: 1030; width: 66px; height: 66px; padding: 0; border: 0; border-radius: 0; background: transparent; cursor: pointer; opacity: .96; transition: transform 180ms ease, opacity 180ms ease, filter 180ms ease; -webkit-tap-highlight-color: transparent; }",
      ".rs-film-close::before { position: absolute; left: 50%; top: 50%; width: 24px; height: 24px; content: ''; background: #fff; transform: translate(-50%, -50%); -webkit-mask: url('img/close-icon.svg') center / contain no-repeat; mask: url('img/close-icon.svg') center / contain no-repeat; }",
      ".rs-film-close:hover, .rs-film-close:focus { opacity: 1; outline: none; transform: scale(1.04); filter: brightness(1.05); }",
      ".rs-film-close:active { transform: scale(.98); }",
      ".rs-film-close span { display: none; }",
      ".rs-film-open .rs-film-cover { opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }",
      ".rs-film-player-open { opacity: 1; visibility: visible; pointer-events: auto; }",
      "@media (max-width: 1199px) { .rs-film-player { background: rgba(0, 0, 0, .73) !important; } .rs-film-frame { max-width: 100% !important; max-height: 100% !important; } .rs-film-close { right: calc(18px + env(safe-area-inset-right)); top: calc(18px + env(safe-area-inset-top)); } }",
      "@media (max-width: 767px) { .rs-film-close { right: calc(14px + env(safe-area-inset-right)); top: calc(14px + env(safe-area-inset-top)); width: 54px; height: 54px; } .rs-film-close::before { width: 20px; height: 20px; } }"
    ].join("\n");
    document.head.appendChild(style);
  }

  function boot() {
    injectStyles();

    var tabsDone = init();
    var filmDone = initFilmPlayer();
    var backgroundDone = initRepeatingBackground();
    if (tabsDone && filmDone && backgroundDone) return;

    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      tabsDone = ready || init();
      filmDone = filmReady || initFilmPlayer();
      backgroundDone = backgroundDone || initRepeatingBackground();

      if ((tabsDone && filmDone && backgroundDone) || attempts >= 40) {
        window.clearInterval(timer);
      }
    }, 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
