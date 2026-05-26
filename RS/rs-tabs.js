(function () {
  var ORANGE = "#db7031";
  var WHITE = "#ffffff";
  var MOBILE_QUERY = "(max-width: 767px)";

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
          text: "Манси – народ гор, ветра и тайги, их численность около 12 000 человек. В их мире всё имеет голос: ручей говорит с путником, ветер предупреждает об опасности, а медведь приходит не как зверь, а как гость. Человек здесь не царь природы. Он – слушатель."
        },
        {
          id: "6a0aeee2dba84a62fb2c7986",
          text: "Они живут на западных склонах Урала и в бассейне реки Северная Сосьва. Это край тайги, переходящей в тундру."
        },
        {
          id: "6a0aeefadba84a62fb2c7e84",
          text: "Гонки на обласах на Кубок губернатора Югры собирают сотни участников и зрителей. Здесь соревнования становятся праздником: проводятся обряды, мастер-классы по ремёслам, звучит музыка. «Газпром нефть» поддерживает событие – и оно остаётся живым и настоящим."
        }
      ],
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
          text: "Ненцы – крупнейший кочевой народ России, их численность – около 45 000 человек. Многие из них до сих пор живут так, как жили предки тысячу лет назад: каслают по тундре вслед за оленьими стадами. Для ненца олень – это всё: жизнь, дом, путь, время."
        },
        {
          id: "6a0afa6e24639135cf4b65fe",
          text: "Они живут на огромной территории от Кольского полуострова до Таймыра, но сердце их земли – Ямал, что в переводе с ненецкого означает «край земли»."
        },
        {
          id: "6a0afa6e2d250f7a2fd48cdf",
          text: "За полярным кругом, в селе Мыс Каменный, проходит «Дыхание Арктики» – фестиваль искусства и творчества, рожденный в самой тундре. Здесь встречаются ремёсла, музыка и танец. На один день село превращается в живой круговорот талантов и традиций. «Родные города» помогли этой идее стать реальностью. И теперь в ней может участвовать каждый."
        }
      ],
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
          text: "Селькупы – один из самых малочисленных народов Сибири: их около 4 500 человек. «Селькуп» означает «лесной человек», они рыболовы и охотники. Их главное орудие – лодка-обласок, выдолбленная из цельного ствола кедра или осины. Она лёгкая, манёвренная, идеальная для таёжных рек с порогами и мелями."
        },
        {
          id: "6a0b047a2348b2c2ddd483bf",
          text: "Они живут на севере Томской области и в Красноселькупском районе Ямало-Ненецкого автономного округа, в бассейне рек Таз и Пур."
        },
        {
          id: "6a0b047ad89100fff3b27e80",
          text: "«Сказки Севера» – проект программы «Родные города», который собирает голоса коренных народов. Фольклор здесь звучит как радиоспектакль – живо, точно, бережно.\nСегодня проект объединяет разные регионы и культуры.\nВ их числе и селькупские сказки, доступные для свободного прослушивания."
        }
      ],
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
          text: "Ханты – один из древнейших народов Западной Сибири. Их численность – около 30 000 человек и за каждым стоит род, уходящий корнями вглубь веков. Их культура выросла из движения: сезонных переходов, охоты, рыболовства. Здесь традиции – не наследие, а повседневность."
        },
        {
          id: "6a0afcd9edfa8892990d081c",
          text: "Ханты живут в Ханты-Мансийском автономном округе-Югре, по берегам великих рек: Оби, Иртыша, Конды и Казыма."
        },
        {
          id: "6a0afcdadbe170b7568de1c7",
          text: "День оленевода – праздник, в котором сходятся спорт, быт, мастерство и родовая память. Еще в ХМАО-Югре при поддержке «Газпром нефти» проходит конкурс профессионального мастерства среди оленеводов на Кубок губернатора Югры. Они соревнуются в гонках оленьих упряжек, укладке нарт, беге на охотничьих лыжах.\nКаждый год это помогает сохранять вековые традиции древнего народа."
        }
      ],
      prev: ["6a154053362dc1a1f0a675c6", "6a154054b2b5a58faa96a962"],
      next: ["6a154053fe20c7b4e17f86d8", "6a1540539993f385d1b7e17f"]
    }
  ];

  var ready = false;
  var states = [];

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

  function setPanelText(node, text) {
    var paragraph = node.querySelector(".text-viewer p");

    if (!paragraph) return;

    paragraph.innerHTML = text
      .split("\n")
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

  function preparePanel(widget, shell) {
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
      shell.classList.add("rs-tabs-panel-shell");
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

    state.tabs.forEach(function (tab, tabIndex) {
      colorTab(tab, tabIndex === state.active);
      tab.setAttribute("aria-selected", tabIndex === state.active ? "true" : "false");
    });

    state.panels.forEach(function (panel, panelIndex) {
      setRectStyle(panel.shell, state.panelSlot);
      panel.shell.style.zIndex = String(state.panelZ + panelIndex);
      panel.shell.style.transition = instant ? "none" : "opacity 320ms ease, visibility 320ms ease";
      panel.shell.style.opacity = panelIndex === state.active ? "1" : "0";
      panel.shell.style.visibility = panelIndex === state.active ? "visible" : "hidden";
      panel.shell.style.pointerEvents = panelIndex === state.active ? "auto" : "none";
      panel.widget.setAttribute("aria-hidden", panelIndex === state.active ? "false" : "true");
    });
  }

  function setMobileMode(state) {
    var isMobile = window.matchMedia(MOBILE_QUERY).matches;

    state.tabs.forEach(function (tab, index) {
      tab.style.pointerEvents = isMobile ? "none" : "auto";
      tab.setAttribute("tabindex", isMobile ? "-1" : "0");
      colorTab(tab, index === state.active);
    });
  }

  function bindClick(node, handler) {
    node.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      handler();
    }, true);
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

    var nextStates = [];

    for (var groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
      var group = groups[groupIndex];
      var tabs = asArray(group.tabs);
      var panels = group.panels.map(function (panel) {
        var widget = byId(panel.id);

        return widget ? {
          widget: widget,
          shell: getPanelShell(widget),
          text: panel.text
        } : null;
      }).filter(Boolean);
      var prev = asArray(group.prev);
      var next = asArray(group.next);

      if (tabs.length !== 3 || panels.length !== 3 || prev.length === 0 || next.length === 0) {
        return false;
      }

      panels.forEach(function (panel) {
        preparePanel(panel.widget, panel.shell);
        setPanelText(panel.widget, panel.text);
      });

      nextStates.push({
        active: 0,
        tabs: tabs,
        panels: panels,
        prev: prev,
        next: next,
        panelSlot: getRectStyle(panels[0].shell),
        panelZ: Number(panels[0].shell.style.zIndex || 1)
      });
    }

    states = nextStates;

    states.forEach(function (state) {
      state.tabs.forEach(function (tab, index) {
        tab.setAttribute("role", "tab");
        bindClick(tab, function () {
          if (!window.matchMedia(MOBILE_QUERY).matches) {
            showPanel(state, index, false);
          }
        });
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
      ".rs-tabs-arrow { -webkit-tap-highlight-color: transparent !important; outline: none !important; }",
      ".rs-tabs-arrow, .rs-tabs-arrow * { -webkit-tap-highlight-color: transparent !important; }",
      ".rs-tabs-arrow-hit { cursor: pointer; transition: none !important; }",
      ".rs-tabs-arrow-hit:hover, .rs-tabs-arrow-hit:active, .rs-tabs-arrow-hit:focus { filter: none !important; opacity: 1 !important; outline: none !important; }",
      ".rs-tabs-arrow-icon { cursor: pointer; opacity: .8 !important; transition: opacity 180ms ease !important; }",
      ".rs-tabs-arrow-icon svg, .rs-tabs-arrow-icon svg * { transition: fill 180ms ease, opacity 180ms ease !important; }",
      ".rs-tabs-arrow-icon svg, .rs-tabs-arrow-icon svg path { fill: #ffffff !important; }",
      ".rs-tabs-arrow-icon:hover, .rs-tabs-arrow-icon:focus { opacity: 1 !important; filter: none !important; outline: none !important; }",
      ".rs-tabs-arrow-icon:active { opacity: 1 !important; filter: none !important; }",
      ".rs-tabs-arrow-icon:active svg, .rs-tabs-arrow-icon:active svg path { fill: #db7031 !important; }"
    ].join("\n");
    document.head.appendChild(style);
  }

  function boot() {
    injectStyles();

    var attempts = 0;
    var timer = null;
    var observer = null;

    function stopWatching() {
      if (timer) window.clearInterval(timer);
      if (observer) observer.disconnect();
    }

    function tryInit(countAttempt) {
      if (countAttempt) attempts += 1;

      if (init()) {
        stopWatching();
        return true;
      }

      if (attempts >= 240) {
        stopWatching();
      }

      return false;
    }

    if (tryInit(true)) return;

    timer = window.setInterval(function () { tryInit(true); }, 250);

    if (window.MutationObserver && document.body) {
      observer = new MutationObserver(function () { tryInit(false); });
      observer.observe(document.body, { childList: true, subtree: true });
    }

    [1000, 3000, 8000, 15000, 30000].forEach(function (delay) {
      window.setTimeout(function () { tryInit(false); }, delay);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
