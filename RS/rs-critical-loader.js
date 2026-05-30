(function () {
  var BASE_PATH = "/specprojects/rodnoysever/";
  var IMAGE_PREFIX = "img/";
  var RELEASE_DELAY_MS = 2200;
  var SEQUENCE_RELEASE_DELAY_MS = 6000;
  var PLACEHOLDER_SRC = "rs-placeholder.svg";
  var released = false;
  var sequencesReleased = false;
  var pendingAttrs = [];
  var pendingProps = [];
  var pendingStyles = [];
  var pendingFetches = [];
  var pendingXhrs = [];
  var pendingSequenceAttrs = [];
  var pendingSequenceProps = [];
  var pendingSequenceStyles = [];
  var pendingSequenceFetches = [];
  var pendingSequenceXhrs = [];
  var deferredOriginals = [];
  var serverDataMutations = [];
  var sequencePosters = [];
  var sequencePosterIds = {};
  var sequencePostersReady = false;
  var sequencePosterPreloadStarted = false;
  var sequenceReleaseCheckStarted = false;

  var criticalImages = {
    "img/5437a6b88fe9f3bb016a8096/6339958/DAVnKmwcKviSZ4h7fmGwe.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/Duo8BLsoqzLr1vpVezv_n.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/I3cRM7aJLbdOVLQ5DUj2F.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/PAQ7s03eSJ9bJ2Bg7nTrJ.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/PPsbpYDSuBWUf-CoNsKHM.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/QCn4BHj0JNN2DtWL-fUuX.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/UEiqT9sJ9OZj6_cUVyObp.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/WHP5-i30JLrs1hBM3IaRT.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/Xyx-P7H3G0UmmLnROHllB.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/YXO909MOzq7w4mh7oVuw8.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/ZMZ14uW8ap1gZDSpReZXD.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/b1udWwlxTnzwH0R2cEuAD.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/bTE6v6G1DlpuEE8sjpTyr.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/bmyDBZInajf9GKHFOAld0.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/c0BDJ9n1WNg1oE66QrmrL.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/dBBb6ZbmIcqoI4LPY6wcK.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/eFgWfJn-ixuEcJ0C-mfYX.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/fFUeKYnNpft1oQGTug05n.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/feTaZOyiqAc_6vokuNzUY.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/i2G0GsMwMn-aXhuB9vPfL.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-1e5feccf-6d82-4270-8b1e-e5b06604b8ee.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-4cf8ad4a-d115-43b2-86ff-ede7858f0bd3.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-68331d82-2519-464a-a5f6-a11fa3c63aad.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-68331d82-2519-464a-a5f6-a11fa3c63aad_w-40_q-50.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-68331d82-2519-464a-a5f6-a11fa3c63aad_w-960.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-80bcc4c9-4e7d-4995-9936-3a5895b19081.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-80bcc4c9-4e7d-4995-9936-3a5895b19081_w-40_q-50.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-80bcc4c9-4e7d-4995-9936-3a5895b19081_w-778.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-a5a02906-2f6c-472d-8938-89446a8fa1b8.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-a5a02906-2f6c-472d-8938-89446a8fa1b8_w-40_q-50.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-cf5127b6-f53b-4add-ab0d-be79319bf771.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-e8e91570-4bef-4b18-8216-c022a86c92e9.jpg": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-ee27f6bb-682e-48f5-b617-6bbb959f83bc.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/image-ee27f6bb-682e-48f5-b617-6bbb959f83bc_w-40_q-50.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/o3-947DjVZ0b_hDaTXlzn.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/xZDCWToJAlyddBaBhCDGI.png": true,
    "img/5437a6b88fe9f3bb016a8096/6339958/zaB2UENe_CYkAmDdpxIwJ.png": true,
    "img/5c8d09396049ea61eff81239/6339958/BQmN2mFJZfukCPRulpZvX.png": true,
    "img/5c8d09396049ea61eff81239/6339958/DRIlNmY92rAr9_JOqh7I0.png": true,
    "img/5c8d09396049ea61eff81239/6339958/EgsqecGPFGuSE8mq-AU0w.png": true,
    "img/5c8d09396049ea61eff81239/6339958/F0ihr-7sZAM4W9xDUZ6zF.png": true,
    "img/5c8d09396049ea61eff81239/6339958/LYFmD5c7ju0H6WJ9BDc0Q.png": true,
    "img/5c8d09396049ea61eff81239/6339958/LZRASKk48wn6Za4gdoyX-.png": true,
    "img/5c8d09396049ea61eff81239/6339958/NC7ghH6DWU1l7GKafRiXL.png": true,
    "img/5c8d09396049ea61eff81239/6339958/OZllqugVVecIFHGd108R5.png": true,
    "img/5c8d09396049ea61eff81239/6339958/ZalYRQZRvt2hHp9w4EMjL.png": true,
    "img/5c8d09396049ea61eff81239/6339958/ZmHY4Z7_-oO-AR4wl1DUi.png": true,
    "img/5c8d09396049ea61eff81239/6339958/image-ab43b1c1-6ca6-4cc5-85a5-fd4c4b1cfff8.png": true,
    "img/5c8d09396049ea61eff81239/6339958/image-ab43b1c1-6ca6-4cc5-85a5-fd4c4b1cfff8_w-40_q-50.png": true,
    "img/5c8d09396049ea61eff81239/6339958/k81Ghny6fuuj0lo8-Ys_d.png": true,
    "img/5c8d09396049ea61eff81239/6339958/m4qhect8X3UHMQ6nlsxu_.png": true,
    "img/5c8d09396049ea61eff81239/6339958/w-llb83Sm9Lm1Zk-F-T__.png": true,
    "img/5c8d09396049ea61eff81239/6339958/xeUIpLd4_ne3eTaLI87cj.png": true,
    "img/5c8d09396049ea61eff81239/6339958/yWSXfzGqeMMD2VhI9UpEm.png": true,
    "img/optimized-backgrounds/bg-mobile.jpg": true,
    "img/optimized-backgrounds/bg-tablet.jpg": true,
    "img/optimized-first-screen/desktop-bg-first-block.jpg": true,
    "img/optimized-first-screen/mobile-hero-first-block.jpg": true,
    "img/optimized-first-screen/tablet-hero-first-block.jpg": true
  };

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

  function isSequenceFrameUrl(url) {
    return /^img\/[^/]+\/[0-9a-f-]{36}\/\d{6}\.jpg$/i.test(url);
  }

  function isSequenceBaseUrl(url) {
    return /^img\/[^/]+\/[0-9a-f-]{36}$/i.test(url);
  }

  function isFirstSequenceFrameUrl(url) {
    return /^img\/[^/]+\/[0-9a-f-]{36}\/000001\.jpg$/i.test(url);
  }

  function shouldDefer(value) {
    var url = normalizeUrl(value);
    return !!url && url.indexOf(IMAGE_PREFIX) === 0 && url.indexOf("img/shots-templates/") !== 0 && !criticalImages[url] && !isSequenceBaseUrl(url) && !isSequenceFrameUrl(url);
  }

  function shouldDeferSequence(value) {
    var url = normalizeUrl(value);
    return !!url && isSequenceFrameUrl(url);
  }

  function makePlaceholder(originalUrl) {
    var index = deferredOriginals.push(originalUrl) - 1;
    return PLACEHOLDER_SRC + "#rsd=" + index;
  }

  function getDeferredOriginal(value) {
    if (!value || typeof value !== "string") return "";
    var match = value.match(/#rsd=(\d+)/);
    if (!match) return "";
    return deferredOriginals[Number(match[1])] || "";
  }

  function restoreDeferredCss(value) {
    if (!value || typeof value !== "string") return "";
    return value.replace(/rs-placeholder\.svg#rsd=(\d+)/g, function (_, index) {
      return deferredOriginals[Number(index)] || "";
    });
  }

  function collectSequencePoster(value) {
    if (!value || value.type !== "shots" || !value._id || !value.firstFrameLambdaUrl) return;
    if (sequencePosterIds[value._id]) return;
    sequencePosterIds[value._id] = true;
    sequencePosters.push({
      id: value._id,
      posterUrl: value.firstFrameLambdaUrl,
      baseUrl: value.path || value.basePath || "",
      numberOfImages: Number(value.numberOfImages) || 0,
      placement: {
        desktop: { x: value.x, y: value.y, w: value.w, h: value.h },
        phone: value.viewport_phone_portrait || null,
        tablet: value.viewport_tablet_portrait || null
      },
      preloadImage: null,
      image: null,
      fallbackImage: null,
      shown: false,
      loaded: false
    });
  }

  function collectSequencePostersFromServerData() {
    var seen = [];

    function walk(value) {
      if (!value || typeof value !== "object") return;
      if (seen.indexOf(value) !== -1) return;
      seen.push(value);
      collectSequencePoster(value);
      Object.keys(value).forEach(function (key) {
        walk(value[key]);
      });
    }

    if (window.ServerData) walk(window.ServerData);
  }

  function installServerDataPlaceholders() {
    var seen = [];

    function walk(value) {
      if (!value || typeof value !== "object") return;
      if (seen.indexOf(value) !== -1) return;
      seen.push(value);
      collectSequencePoster(value);

      Object.keys(value).forEach(function (key) {
        var item = value[key];
        if (typeof item === "string" && shouldDefer(item)) {
          serverDataMutations.push({ node: value, key: key, original: item });
          value[key] = makePlaceholder(item);
          return;
        }
        if (item && typeof item === "object") walk(item);
      });
    }

    if (window.ServerData) walk(window.ServerData);
    window.__RS_DEFERRED_ORIGINALS__ = deferredOriginals;
  }

  function installSequencePosters() {
    sequencePosters.forEach(function (poster) {
      if (poster.image && poster.image.isConnected) return;
      if (poster.image && !poster.image.isConnected) {
        poster.image = null;
        poster.shown = false;
      }
      var node = document.querySelector([
        '.rmwidget[data-id="' + poster.id + '"]',
        '.rmwidget[data-rmwidget-id="' + poster.id + '"]',
        '[data-id="' + poster.id + '"]',
        '[data-rmwidget-id="' + poster.id + '"]',
        '[id="' + poster.id + '"]'
      ].join(","));
      if (!node) return;

      var currentPosition = window.getComputedStyle(node).position;
      if (currentPosition === "static") node.style.position = "relative";
      node.style.overflow = "hidden";

      var image = document.createElement("img");
      image.className = "rs-sequence-poster";
      image.setAttribute("data-rs-sequence-id", poster.id);
      image.alt = "";
      image.decoding = "async";
      image.loading = "eager";
      image.style.cssText = [
        "position:absolute",
        "inset:0",
        "width:100%",
        "height:100%",
        "object-fit:cover",
        "display:none",
        "z-index:2147483647",
        "opacity:1",
        "visibility:visible",
        "pointer-events:none"
      ].join(";");

      node.appendChild(image);
      poster.image = image;
      if (poster.fallbackImage && poster.fallbackImage.parentNode) {
        poster.fallbackImage.parentNode.removeChild(poster.fallbackImage);
        poster.fallbackImage = null;
      }
    });
  }

  function getActivePlacement(poster) {
    if (window.innerWidth <= 639 && poster.placement.phone) return poster.placement.phone;
    if (window.innerWidth <= 899 && poster.placement.tablet) return poster.placement.tablet;
    return poster.placement.desktop;
  }

  function getPosterDocumentRect(poster) {
    if (!poster.image) return null;
    var rect = poster.image.parentElement.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height
    };
  }

  function getSequenceLayoutMetrics() {
    for (var i = 0; i < sequencePosters.length; i += 1) {
      var poster = sequencePosters[i];
      var placement = getActivePlacement(poster);
      var rect = getPosterDocumentRect(poster);
      if (!placement || !rect || !placement.w || !placement.h) continue;
      var scaleX = rect.width / placement.w;
      var scaleY = rect.height / placement.h;
      return {
        scaleX: scaleX,
        scaleY: scaleY,
        offsetX: rect.left - placement.x * scaleX,
        offsetY: rect.top - placement.y * scaleY
      };
    }
    return null;
  }

  function getPageLayoutMetrics() {
    var page = document.querySelector(".rmpage, .rm-page, [data-rm-page], #mags > div, #mags");
    if (!page) return null;

    var rect = page.getBoundingClientRect();
    var activePage = window.innerWidth <= 639 && window.ServerData && window.ServerData.project
      ? window.ServerData.project.phoneWidth
      : window.innerWidth <= 899 && window.ServerData && window.ServerData.project
        ? (window.ServerData.project.tabletWidth || window.ServerData.project.desktopWidth)
        : window.ServerData && window.ServerData.project
          ? window.ServerData.project.desktopWidth
          : 1200;
    if (!activePage || !rect.width) return null;

    var scale = rect.width / activePage;
    return {
      scaleX: scale,
      scaleY: scale,
      offsetX: rect.left + window.scrollX,
      offsetY: rect.top + window.scrollY
    };
  }

  function ensureFallbackPosters() {
    if (!sequencePostersReady) return;
    var metrics = getSequenceLayoutMetrics() || getPageLayoutMetrics();
    if (!metrics) return;

    sequencePosters.forEach(function (poster) {
      if (poster.loaded || poster.image) return;
      var placement = getActivePlacement(poster);
      if (!placement || placement.hidden) return;

      if (!poster.fallbackImage) {
        var image = document.createElement("img");
        image.className = "rs-sequence-poster rs-sequence-poster-fallback";
        image.setAttribute("data-rs-sequence-id", poster.id);
        image.alt = "";
        image.decoding = "async";
        image.loading = "eager";
        image.src = poster.posterUrl;
        image.style.cssText = [
          "position:absolute",
          "object-fit:cover",
          "display:block",
          "z-index:2147483647",
          "opacity:1",
          "visibility:visible",
          "pointer-events:none"
        ].join(";");
        document.body.appendChild(image);
        poster.fallbackImage = image;
      }

      poster.fallbackImage.style.left = metrics.offsetX + placement.x * metrics.scaleX + "px";
      poster.fallbackImage.style.top = metrics.offsetY + placement.y * metrics.scaleY + "px";
      poster.fallbackImage.style.width = placement.w * metrics.scaleX + "px";
      poster.fallbackImage.style.height = placement.h * metrics.scaleY + "px";
    });
  }

  function isElementVisible(element) {
    if (!element) return false;
    var style = window.getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
    return element.complete !== false && element.naturalWidth !== 0;
  }

  function hasVisiblePoster(poster) {
    return poster.loaded || isElementVisible(poster.image) || isElementVisible(poster.fallbackImage);
  }

  function allSequencePostersVisible() {
    if (!sequencePostersReady || !sequencePosters.length) return false;
    showSequencePosters();
    ensureFallbackPosters();
    return sequencePosters.every(hasVisiblePoster);
  }

  function showSequencePosters() {
    collectSequencePostersFromServerData();
    if (!sequencePostersReady) return;
    installSequencePosters();
    var hasMissingPoster = false;
    sequencePosters.forEach(function (poster) {
      if (poster.loaded) return;
      if (!poster.image) {
        hasMissingPoster = true;
        return;
      }
      if (poster.shown) return;
      poster.shown = true;
      poster.image.src = poster.posterUrl;
      poster.image.style.display = "block";
    });
    ensureFallbackPosters();
    if (hasMissingPoster) setTimeout(showSequencePosters, 500);
  }

  function refreshSequencePosters() {
    if (!released || !sequencePostersReady) return;
    showSequencePosters();
    hideLoadedSequencePosters();
  }

  function preloadSequencePosters(done) {
    collectSequencePostersFromServerData();

    if (sequencePostersReady) {
      done();
      return;
    }

    if (sequencePosterPreloadStarted) {
      setTimeout(function () {
        preloadSequencePosters(done);
      }, 250);
      return;
    }

    sequencePosterPreloadStarted = true;
    var remaining = sequencePosters.length;
    var finished = false;

    function completeOne() {
      if (finished) return;
      remaining -= 1;
      if (remaining <= 0) completeAll();
    }

    function completeAll() {
      if (finished) return;
      finished = true;
      sequencePostersReady = true;
      window.__RS_SEQUENCE_POSTERS_READY__ = true;
      done();
    }

    if (!remaining) {
      completeAll();
      return;
    }

    sequencePosters.forEach(function (poster) {
      var image = new Image();
      poster.preloadImage = image;
      image.onload = completeOne;
      image.onerror = completeOne;
      image.src = poster.posterUrl;
    });

    setTimeout(completeAll, 8000);
  }

  function countLoadedSequenceFrames(poster) {
    if (!poster.baseUrl || !poster.numberOfImages) return 0;
    var base = new URL(poster.baseUrl, window.location.href).pathname.replace(/\/$/, "");
    var loaded = {};
    performance.getEntriesByType("resource").forEach(function (entry) {
      var path = "";
      try {
        path = new URL(entry.name, window.location.href).pathname;
      } catch (e) {
        return;
      }
      if (path.indexOf(base + "/") !== 0) return;
      var match = path.match(/\/(\d{6})\.jpg$/);
      if (match) loaded[match[1]] = true;
    });
    return Object.keys(loaded).length;
  }

  function hideLoadedSequencePosters() {
    var needsAnotherCheck = false;
    installSequencePosters();
    sequencePosters.forEach(function (poster) {
      if (poster.loaded) return;
      if (!poster.image && !poster.fallbackImage) {
        needsAnotherCheck = true;
        return;
      }
      var loadedFrames = countLoadedSequenceFrames(poster);
      if (poster.numberOfImages && loadedFrames >= poster.numberOfImages) {
        poster.loaded = true;
        if (poster.image) poster.image.style.display = "none";
        if (poster.fallbackImage) poster.fallbackImage.style.display = "none";
        return;
      }
      if (poster.image && poster.shown) {
        poster.image.style.display = "block";
      }
      if (poster.fallbackImage) {
        poster.fallbackImage.style.display = "block";
      }
      needsAnotherCheck = true;
    });
    ensureFallbackPosters();
    if (needsAnotherCheck) setTimeout(hideLoadedSequencePosters, 1000);
  }

  function getPropertyDescriptor(proto, prop) {
    while (proto) {
      var descriptor = Object.getOwnPropertyDescriptor(proto, prop);
      if (descriptor) return descriptor;
      proto = Object.getPrototypeOf(proto);
    }
    return null;
  }

  function enqueueAttr(node, name, value) {
    pendingAttrs.push({ node: node, name: name, value: value });
  }

  function enqueueProp(node, name, value) {
    pendingProps.push({ node: node, name: name, value: value });
  }

  function enqueueStyle(style, method, name, value, priority) {
    pendingStyles.push({ style: style, method: method, name: name, value: value, priority: priority });
  }

  function enqueueSequenceAttr(node, name, value) {
    pendingSequenceAttrs.push({ node: node, name: name, value: value });
  }

  function enqueueSequenceProp(node, name, value) {
    pendingSequenceProps.push({ node: node, name: name, value: value });
  }

  function enqueueSequenceStyle(style, method, name, value, priority) {
    pendingSequenceStyles.push({ style: style, method: method, name: name, value: value, priority: priority });
  }

  function releaseQueuedItems(attrs, props, styles, fetches, xhrs) {
    while (attrs.length) {
      var attr = attrs.shift();
      try {
        nativeSetAttribute.call(attr.node, attr.name, attr.value);
      } catch (e) {}
    }

    while (props.length) {
      var prop = props.shift();
      try {
        nativeSrcSetter.call(prop.node, prop.value);
      } catch (e) {}
    }

    while (styles.length) {
      var style = styles.shift();
      try {
        if (style.method === "setProperty") {
          nativeSetProperty.call(style.style, style.name, style.value, style.priority || "");
        } else if (style.method === "backgroundImage") {
          nativeBackgroundImageSetter.call(style.style, style.value);
        } else if (style.method === "background") {
          nativeBackgroundSetter.call(style.style, style.value);
        } else if (style.method === "cssText") {
          nativeCssTextSetter.call(style.style, style.value);
        }
      } catch (e) {}
    }

    while (fetches.length) {
      var pendingFetch = fetches.shift();
      try {
        pendingFetch.resolve(nativeFetch.apply(window, pendingFetch.args));
      } catch (e) {
        pendingFetch.reject(e);
      }
    }

    while (xhrs.length) {
      var pendingXhr = xhrs.shift();
      try {
        nativeXhrSend.apply(pendingXhr.xhr, pendingXhr.args);
      } catch (e) {}
    }
  }

  function releaseDeferredSequences() {
    if (sequencesReleased) return;
    collectSequencePostersFromServerData();
    if (!allSequencePostersVisible()) {
      setTimeout(releaseDeferredSequences, 250);
      return;
    }
    sequencesReleased = true;
    window.__RS_SEQUENCES_DEFERRED_RELEASED__ = true;
    releaseQueuedItems(pendingSequenceAttrs, pendingSequenceProps, pendingSequenceStyles, pendingSequenceFetches, pendingSequenceXhrs);
    hideLoadedSequencePosters();

    try {
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
    } catch (e) {}
  }

  function scheduleDeferredSequencesRelease() {
    if (sequenceReleaseCheckStarted) return;
    sequenceReleaseCheckStarted = true;

    function waitForVisiblePosters() {
      collectSequencePostersFromServerData();
      if (allSequencePostersVisible()) {
        setTimeout(releaseDeferredSequences, SEQUENCE_RELEASE_DELAY_MS);
        return;
      }
      setTimeout(waitForVisiblePosters, 250);
    }

    waitForVisiblePosters();
  }

  function releaseDeferredImages() {
    if (released) return;
    released = true;
    window.__RS_IMAGES_DEFERRED_RELEASED__ = true;

    while (serverDataMutations.length) {
      var mutation = serverDataMutations.shift();
      try {
        mutation.node[mutation.key] = mutation.original;
      } catch (e) {}
    }

    releaseQueuedItems(pendingAttrs, pendingProps, pendingStyles, pendingFetches, pendingXhrs);

    preloadSequencePosters(function () {
      showSequencePosters();

      try {
        window.dispatchEvent(new Event("resize"));
        window.dispatchEvent(new Event("scroll"));
      } catch (e) {}

      scheduleDeferredSequencesRelease();
    });
  }

  var nativeSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    var lowerName = String(name || "").toLowerCase();
    var original = getDeferredOriginal(value);
    if (!released && original && this instanceof HTMLImageElement && (lowerName === "src" || lowerName === "srcset")) {
      enqueueAttr(this, name, original);
      this.dataset.rsDeferredSrc = original;
      return nativeSetAttribute.call(this, name, PLACEHOLDER_SRC);
    }
    if (!sequencesReleased && this instanceof HTMLImageElement && (lowerName === "src" || lowerName === "srcset") && shouldDeferSequence(value)) {
      enqueueSequenceAttr(this, name, value);
      this.dataset.rsDeferredSequenceSrc = value;
      return;
    }
    if (!released && this instanceof HTMLImageElement && (lowerName === "src" || lowerName === "srcset") && shouldDefer(value)) {
      enqueueAttr(this, name, value);
      this.dataset.rsDeferredSrc = value;
      return;
    }
    return nativeSetAttribute.apply(this, arguments);
  };

  var imageProto = HTMLImageElement.prototype;
  var sourceProto = window.HTMLSourceElement && HTMLSourceElement.prototype;
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
        var original = getDeferredOriginal(value);
        if (!released && original) {
          enqueueProp(this, "src", original);
          this.dataset.rsDeferredSrc = original;
          return nativeSrcSetter.call(this, PLACEHOLDER_SRC);
        }
        if (!sequencesReleased && shouldDeferSequence(value)) {
          enqueueSequenceProp(this, "src", value);
          this.dataset.rsDeferredSequenceSrc = value;
          return;
        }
        if (!released && shouldDefer(value)) {
          enqueueProp(this, "src", value);
          this.dataset.rsDeferredSrc = value;
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
        var original = getDeferredOriginal(value);
        if (!released && original) {
          enqueueAttr(this, "srcset", original);
          this.dataset.rsDeferredSrcset = original;
          return nativeSrcsetSetter.call(this, PLACEHOLDER_SRC);
        }
        if (!sequencesReleased && shouldDeferSequence(value)) {
          enqueueSequenceAttr(this, "srcset", value);
          this.dataset.rsDeferredSequenceSrcset = value;
          return;
        }
        if (!released && shouldDefer(value)) {
          enqueueAttr(this, "srcset", value);
          this.dataset.rsDeferredSrcset = value;
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
        var original = getDeferredOriginal(value);
        if (!released && original) {
          enqueueAttr(this, "srcset", original);
          this.dataset.rsDeferredSrcset = original;
          return nativeSourceSrcsetSetter.call(this, PLACEHOLDER_SRC);
        }
        if (!sequencesReleased && shouldDeferSequence(value)) {
          enqueueSequenceAttr(this, "srcset", value);
          this.dataset.rsDeferredSequenceSrcset = value;
          return;
        }
        if (!released && shouldDefer(value)) {
          enqueueAttr(this, "srcset", value);
          this.dataset.rsDeferredSrcset = value;
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
      var originalCss = restoreDeferredCss(value);
      if (!released && originalCss && (lowerName === "background" || lowerName === "background-image")) {
        enqueueStyle(this, "setProperty", name, originalCss, priority);
        return nativeSetProperty.call(this, name, value, priority || "");
      }
      if (!sequencesReleased && (lowerName === "background" || lowerName === "background-image") && shouldDeferSequence(value)) {
        enqueueSequenceStyle(this, "setProperty", name, value, priority);
        return;
      }
      if (!released && (lowerName === "background" || lowerName === "background-image") && shouldDefer(value)) {
        enqueueStyle(this, "setProperty", name, value, priority);
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
        var originalCss = restoreDeferredCss(value);
        if (!released && originalCss) {
          enqueueStyle(this, "backgroundImage", "backgroundImage", originalCss);
          return nativeBackgroundImageSetter.call(this, value);
        }
        if (!sequencesReleased && shouldDeferSequence(value)) {
          enqueueSequenceStyle(this, "backgroundImage", "backgroundImage", value);
          return;
        }
        if (!released && shouldDefer(value)) {
          enqueueStyle(this, "backgroundImage", "backgroundImage", value);
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
        var originalCss = restoreDeferredCss(value);
        if (!released && originalCss) {
          enqueueStyle(this, "background", "background", originalCss);
          return nativeBackgroundSetter.call(this, value);
        }
        if (!sequencesReleased && shouldDeferSequence(value)) {
          enqueueSequenceStyle(this, "background", "background", value);
          return;
        }
        if (!released && shouldDefer(value)) {
          enqueueStyle(this, "background", "background", value);
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
        var originalCss = restoreDeferredCss(value);
        if (!released && originalCss) {
          enqueueStyle(this, "cssText", "cssText", originalCss);
          return nativeCssTextSetter.call(this, value);
        }
        if (!sequencesReleased && shouldDeferSequence(value)) {
          enqueueSequenceStyle(this, "cssText", "cssText", value);
          return;
        }
        if (!released && shouldDefer(value)) {
          enqueueStyle(this, "cssText", "cssText", value);
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
      if (!sequencesReleased && shouldDeferSequence(url)) {
        return new Promise(function (resolve, reject) {
          pendingSequenceFetches.push({ args: args, resolve: resolve, reject: reject });
        });
      }
      if (!released && shouldDefer(url)) {
        return new Promise(function (resolve, reject) {
          pendingFetches.push({ args: args, resolve: resolve, reject: reject });
        });
      }
      return nativeFetch.apply(window, args);
    };
  }

  var nativeXhrOpen = XMLHttpRequest.prototype.open;
  var nativeXhrSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    this.__rsDeferredUrl = url;
    return nativeXhrOpen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function () {
    if (!sequencesReleased && shouldDeferSequence(this.__rsDeferredUrl)) {
      pendingSequenceXhrs.push({ xhr: this, args: arguments });
      return;
    }
    if (!released && shouldDefer(this.__rsDeferredUrl)) {
      pendingXhrs.push({ xhr: this, args: arguments });
      return;
    }
    return nativeXhrSend.apply(this, arguments);
  };

  window.RSReleaseDeferredImages = releaseDeferredImages;
  installServerDataPlaceholders();
  window.addEventListener("scroll", refreshSequencePosters, { passive: true });
  window.addEventListener("resize", refreshSequencePosters);

  function scheduleRelease() {
    var run = function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          setTimeout(releaseDeferredImages, RELEASE_DELAY_MS);
        });
      });
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", run, { once: true });
    } else {
      run();
    }
  }

  scheduleRelease();
  setTimeout(releaseDeferredImages, RELEASE_DELAY_MS + 5000);
})();
