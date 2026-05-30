(function () {
  var BASE_PATH = "/specprojects/rodnoysever/";
  var FIRST_SCREEN_DELAY_MS = 2200;
  var POSTER_WAIT_LIMIT_MS = 9000;
  var SEQUENCE_CONCURRENCY = 6;
  var SEQUENCE_SETTLE_MS = 450;

  var sequenceFramePattern = /^img\/[^/]+\/[0-9a-f-]{36}\/\d{6}\.jpg$/i;
  var sequences = [];
  var sequenceByBase = {};
  var releasedBases = {};
  var pendingSequenceAttrs = [];
  var pendingSequenceProps = [];
  var pendingSequenceFetches = [];
  var pendingSequenceXhrs = [];
  var pendingSequenceStyles = [];
  var flowStarted = false;

  function normalizeUrl(value) {
    if (!value || typeof value !== "string") return "";
    if (/^(data:|blob:|#)/i.test(value)) return "";
    var url = value.trim().replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
    try {
      url = new URL(url, window.location.href).pathname;
    } catch (e) {
      return "";
    }
    if (url.indexOf(BASE_PATH) === 0) url = url.slice(BASE_PATH.length);
    if (url.charAt(0) === "/") url = url.slice(1);
    return url.split("?")[0];
  }

  function sequenceBaseFromUrl(value) {
    var url = normalizeUrl(value);
    if (!sequenceFramePattern.test(url)) return "";
    return url.replace(/\/\d{6}\.jpg$/i, "");
  }

  function isBlockedSequenceFrame(value) {
    var base = sequenceBaseFromUrl(value);
    return !!base && !releasedBases[base];
  }

  function activePlacement(sequence) {
    if (window.innerWidth <= 639 && sequence.placement.phone) return sequence.placement.phone;
    if (window.innerWidth <= 899 && sequence.placement.tablet) return sequence.placement.tablet;
    return sequence.placement.desktop;
  }

  function collectSequences() {
    var seen = [];
    var byId = {};

    function walk(value) {
      if (!value || typeof value !== "object" || seen.indexOf(value) !== -1) return;
      seen.push(value);

      if (value.type === "shots" && value._id && value.firstFrameLambdaUrl && value.basePath && !byId[value._id]) {
        var base = normalizeUrl(value.basePath);
        var sequence = {
          id: value._id,
          base: base,
          posterUrl: value.firstFrameLambdaUrl,
          numberOfImages: Number(value.numberOfImages) || 0,
          placement: {
            desktop: { x: value.x, y: value.y, w: value.w, h: value.h },
            phone: value.viewport_phone_portrait || null,
            tablet: value.viewport_tablet_portrait || null
          },
          node: null,
          poster: null,
          posterLoaded: false,
          sequenceLoaded: false
        };
        byId[value._id] = sequence;
        sequences.push(sequence);
        sequenceByBase[base] = sequence;
      }

      Object.keys(value).forEach(function (key) {
        walk(value[key]);
      });
    }

    if (window.ServerData) walk(window.ServerData);
    sortSequences();
  }

  function sortSequences() {
    sequences.sort(function (a, b) {
      var ap = activePlacement(a) || {};
      var bp = activePlacement(b) || {};
      return (Number(ap.y) || 0) - (Number(bp.y) || 0);
    });
    window.__RS_SEQUENCE_ORDER__ = sequences.map(function (sequence) {
      return sequence.id;
    });
  }

  function findSequenceNode(sequence) {
    return document.querySelector([
      '.rmwidget.widget-shots[data-id="' + sequence.id + '"]',
      '.rmwidget[data-id="' + sequence.id + '"]',
      '.rmwidget[data-rmwidget-id="' + sequence.id + '"]',
      '[data-id="' + sequence.id + '"]',
      '[data-rmwidget-id="' + sequence.id + '"]',
      '[id="' + sequence.id + '"]'
    ].join(","));
  }

  function installPoster(sequence) {
    var node = findSequenceNode(sequence);
    if (!node) return false;
    sequence.node = node;

    if (sequence.poster && sequence.poster.isConnected && sequence.poster.parentNode === node) return true;
    if (sequence.poster && sequence.poster.parentNode) sequence.poster.parentNode.removeChild(sequence.poster);

    if (window.getComputedStyle(node).position === "static") node.style.position = "relative";
    node.style.overflow = "hidden";

    var poster = document.createElement("img");
    poster.className = "rs-sequence-poster";
    poster.setAttribute("data-rs-sequence-id", sequence.id);
    poster.alt = "";
    poster.decoding = "async";
    poster.loading = "eager";
    poster.src = sequence.posterUrl;
    poster.style.cssText = [
      "position:absolute",
      "inset:0",
      "width:100%",
      "height:100%",
      "object-fit:cover",
      "display:block",
      "z-index:2147483647",
      "opacity:1",
      "visibility:visible",
      "pointer-events:none"
    ].join(";");
    node.appendChild(poster);
    sequence.poster = poster;
    return true;
  }

  function preloadPoster(sequence) {
    return new Promise(function (resolve) {
      var image = new Image();
      image.onload = function () {
        sequence.posterLoaded = true;
        resolve();
      };
      image.onerror = function () {
        sequence.posterLoaded = true;
        resolve();
      };
      image.src = sequence.posterUrl;
    });
  }

  function waitForPosterNodes(startTime, resolve) {
    var installed = sequences.map(installPoster).filter(Boolean).length;
    if (installed === sequences.length || Date.now() - startTime > POSTER_WAIT_LIMIT_MS) {
      resolve();
      return;
    }
    setTimeout(function () {
      waitForPosterNodes(startTime, resolve);
    }, 250);
  }

  function waitForAllPosterNodes() {
    return new Promise(function (resolve) {
      waitForPosterNodes(Date.now(), resolve);
    });
  }

  function padFrame(index) {
    return String(index).padStart(6, "0");
  }

  function frameUrl(sequence, index) {
    return BASE_PATH + sequence.base + "/" + padFrame(index) + ".jpg?c";
  }

  function preloadSequenceFrames(sequence) {
    return new Promise(function (resolve) {
      var total = sequence.numberOfImages;
      var next = 1;
      var active = 0;
      var completed = 0;

      if (!total) {
        resolve();
        return;
      }

      function doneOne() {
        active -= 1;
        completed += 1;
        pump();
      }

      function pump() {
        if (completed >= total) {
          sequence.sequenceLoaded = true;
          resolve();
          return;
        }

        while (active < SEQUENCE_CONCURRENCY && next <= total) {
          active += 1;
          var image = new Image();
          image.onload = doneOne;
          image.onerror = doneOne;
          if (nativeSrcSetter) {
            nativeSrcSetter.call(image, frameUrl(sequence, next));
          } else {
            image.src = frameUrl(sequence, next);
          }
          next += 1;
        }
      }

      pump();
    });
  }

  function releaseQueuedItemsForBase(base) {
    releasedBases[base] = true;

    pendingSequenceAttrs = pendingSequenceAttrs.filter(function (item) {
      if (sequenceBaseFromUrl(item.value) !== base) return true;
      try {
        nativeSetAttribute.call(item.node, item.name, item.value);
      } catch (e) {}
      return false;
    });

    pendingSequenceProps = pendingSequenceProps.filter(function (item) {
      if (sequenceBaseFromUrl(item.value) !== base) return true;
      try {
        nativeSrcSetter.call(item.node, item.value);
      } catch (e) {}
      return false;
    });

    pendingSequenceStyles = pendingSequenceStyles.filter(function (item) {
      if (sequenceBaseFromUrl(item.value) !== base) return true;
      try {
        if (item.method === "setProperty") {
          nativeSetProperty.call(item.style, item.name, item.value, item.priority || "");
        } else if (item.method === "backgroundImage") {
          nativeBackgroundImageSetter.call(item.style, item.value);
        } else if (item.method === "background") {
          nativeBackgroundSetter.call(item.style, item.value);
        } else if (item.method === "cssText") {
          nativeCssTextSetter.call(item.style, item.value);
        }
      } catch (e) {}
      return false;
    });

    pendingSequenceFetches = pendingSequenceFetches.filter(function (item) {
      var resource = item.args[0];
      var url = typeof resource === "string" ? resource : resource && resource.url;
      if (sequenceBaseFromUrl(url) !== base) return true;
      try {
        item.resolve(nativeFetch.apply(window, item.args));
      } catch (e) {
        item.reject(e);
      }
      return false;
    });

    pendingSequenceXhrs = pendingSequenceXhrs.filter(function (item) {
      if (sequenceBaseFromUrl(item.url) !== base) return true;
      try {
        nativeXhrSend.apply(item.xhr, item.args);
      } catch (e) {}
      return false;
    });

    try {
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
    } catch (e) {}
  }

  function hidePoster(sequence) {
    if (sequence.poster) {
      sequence.poster.style.display = "none";
    }
  }

  function loadSequencesInOrder(index) {
    if (index >= sequences.length) {
      window.__RS_SEQUENCE_LOADING__ = null;
      window.__RS_SEQUENCES_RELEASED__ = true;
      return;
    }

    var sequence = sequences[index];
    window.__RS_SEQUENCE_LOADING__ = sequence.id;

    preloadSequenceFrames(sequence).then(function () {
      releaseQueuedItemsForBase(sequence.base);
      setTimeout(function () {
        hidePoster(sequence);
        loadSequencesInOrder(index + 1);
      }, SEQUENCE_SETTLE_MS);
    });
  }

  function startPosterAndSequenceFlow() {
    if (flowStarted) return;
    flowStarted = true;
    Promise.all(sequences.map(preloadPoster)).then(function () {
      window.__RS_SEQUENCE_POSTERS_READY__ = true;
      return waitForAllPosterNodes();
    }).then(function () {
      sequences.forEach(installPoster);
      window.__RS_SEQUENCE_POSTERS_VISIBLE__ = true;
      loadSequencesInOrder(0);
    });
  }

  var nativeSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    var lowerName = String(name || "").toLowerCase();
    if (this instanceof HTMLImageElement && (lowerName === "src" || lowerName === "srcset") && isBlockedSequenceFrame(value)) {
      pendingSequenceAttrs.push({ node: this, name: name, value: value });
      return;
    }
    return nativeSetAttribute.apply(this, arguments);
  };

  var imageProto = HTMLImageElement.prototype;
  var sourceProto = window.HTMLSourceElement && HTMLSourceElement.prototype;

  function getPropertyDescriptor(proto, prop) {
    while (proto) {
      var descriptor = Object.getOwnPropertyDescriptor(proto, prop);
      if (descriptor) return descriptor;
      proto = Object.getPrototypeOf(proto);
    }
    return null;
  }

  var srcDescriptor = getPropertyDescriptor(imageProto, "src");
  var srcsetDescriptor = getPropertyDescriptor(imageProto, "srcset");
  var sourceSrcsetDescriptor = sourceProto && getPropertyDescriptor(sourceProto, "srcset");
  var nativeSrcSetter = srcDescriptor && srcDescriptor.set;
  var nativeSrcsetSetter = srcsetDescriptor && srcsetDescriptor.set;
  var nativeSourceSrcsetSetter = sourceSrcsetDescriptor && sourceSrcsetDescriptor.set;

  if (srcDescriptor && nativeSrcSetter) {
    Object.defineProperty(imageProto, "src", {
      configurable: true,
      enumerable: srcDescriptor.enumerable,
      get: srcDescriptor.get,
      set: function (value) {
        if (isBlockedSequenceFrame(value)) {
          pendingSequenceProps.push({ node: this, value: value });
          return;
        }
        return nativeSrcSetter.call(this, value);
      }
    });
  }

  if (srcsetDescriptor && nativeSrcsetSetter) {
    Object.defineProperty(imageProto, "srcset", {
      configurable: true,
      enumerable: srcsetDescriptor.enumerable,
      get: srcsetDescriptor.get,
      set: function (value) {
        if (isBlockedSequenceFrame(value)) {
          pendingSequenceAttrs.push({ node: this, name: "srcset", value: value });
          return;
        }
        return nativeSrcsetSetter.call(this, value);
      }
    });
  }

  if (sourceProto && sourceSrcsetDescriptor && nativeSourceSrcsetSetter) {
    Object.defineProperty(sourceProto, "srcset", {
      configurable: true,
      enumerable: sourceSrcsetDescriptor.enumerable,
      get: sourceSrcsetDescriptor.get,
      set: function (value) {
        if (isBlockedSequenceFrame(value)) {
          pendingSequenceAttrs.push({ node: this, name: "srcset", value: value });
          return;
        }
        return nativeSourceSrcsetSetter.call(this, value);
      }
    });
  }

  var styleProto = window.CSSStyleDeclaration && CSSStyleDeclaration.prototype;
  var nativeSetProperty = styleProto && styleProto.setProperty;
  var backgroundImageDescriptor = styleProto && getPropertyDescriptor(styleProto, "backgroundImage");
  var backgroundDescriptor = styleProto && getPropertyDescriptor(styleProto, "background");
  var cssTextDescriptor = styleProto && getPropertyDescriptor(styleProto, "cssText");
  var nativeBackgroundImageSetter = backgroundImageDescriptor && backgroundImageDescriptor.set;
  var nativeBackgroundSetter = backgroundDescriptor && backgroundDescriptor.set;
  var nativeCssTextSetter = cssTextDescriptor && cssTextDescriptor.set;

  if (styleProto && nativeSetProperty) {
    styleProto.setProperty = function (name, value, priority) {
      var lowerName = String(name || "").toLowerCase();
      if ((lowerName === "background" || lowerName === "background-image") && isBlockedSequenceFrame(value)) {
        pendingSequenceStyles.push({ style: this, method: "setProperty", name: name, value: value, priority: priority });
        return;
      }
      return nativeSetProperty.apply(this, arguments);
    };
  }

  if (styleProto && backgroundImageDescriptor && nativeBackgroundImageSetter) {
    Object.defineProperty(styleProto, "backgroundImage", {
      configurable: true,
      enumerable: backgroundImageDescriptor.enumerable,
      get: backgroundImageDescriptor.get,
      set: function (value) {
        if (isBlockedSequenceFrame(value)) {
          pendingSequenceStyles.push({ style: this, method: "backgroundImage", value: value });
          return;
        }
        return nativeBackgroundImageSetter.call(this, value);
      }
    });
  }

  if (styleProto && backgroundDescriptor && nativeBackgroundSetter) {
    Object.defineProperty(styleProto, "background", {
      configurable: true,
      enumerable: backgroundDescriptor.enumerable,
      get: backgroundDescriptor.get,
      set: function (value) {
        if (isBlockedSequenceFrame(value)) {
          pendingSequenceStyles.push({ style: this, method: "background", value: value });
          return;
        }
        return nativeBackgroundSetter.call(this, value);
      }
    });
  }

  if (styleProto && cssTextDescriptor && nativeCssTextSetter) {
    Object.defineProperty(styleProto, "cssText", {
      configurable: true,
      enumerable: cssTextDescriptor.enumerable,
      get: cssTextDescriptor.get,
      set: function (value) {
        if (isBlockedSequenceFrame(value)) {
          pendingSequenceStyles.push({ style: this, method: "cssText", value: value });
          return;
        }
        return nativeCssTextSetter.call(this, value);
      }
    });
  }

  var nativeFetch = window.fetch;
  if (nativeFetch) {
    window.fetch = function () {
      var args = arguments;
      var resource = args[0];
      var url = typeof resource === "string" ? resource : resource && resource.url;
      if (isBlockedSequenceFrame(url)) {
        return new Promise(function (resolve, reject) {
          pendingSequenceFetches.push({ args: args, resolve: resolve, reject: reject });
        });
      }
      return nativeFetch.apply(window, args);
    };
  }

  var nativeXhrOpen = XMLHttpRequest.prototype.open;
  var nativeXhrSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    this.__rsSequenceUrl = url;
    return nativeXhrOpen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function () {
    if (isBlockedSequenceFrame(this.__rsSequenceUrl)) {
      pendingSequenceXhrs.push({ xhr: this, url: this.__rsSequenceUrl, args: arguments });
      return;
    }
    return nativeXhrSend.apply(this, arguments);
  };

  collectSequences();
  window.__RS_SEQUENCE_COUNT__ = sequences.length;

  function scheduleStart() {
    setTimeout(startPosterAndSequenceFlow, FIRST_SCREEN_DELAY_MS);
  }

  if (document.readyState === "complete") {
    scheduleStart();
  } else {
    window.addEventListener("load", scheduleStart, { once: true });
    setTimeout(scheduleStart, FIRST_SCREEN_DELAY_MS + 5000);
  }
})();
