// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _initJs = require("./init.js");
var _initJsDefault = parcelHelpers.interopDefault(_initJs);
(0, _initJsDefault.default)();

},{"./init.js":"hBLPf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBLPf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _onChange = require("on-change");
var _onChangeDefault = parcelHelpers.interopDefault(_onChange);
var _renderJs = require("./render.js");
var _renderJsDefault = parcelHelpers.interopDefault(_renderJs);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
exports.default = ()=>{
    const elements = {
        result: document.querySelector(".feedback"),
        form: document.querySelector(".rss-form"),
        input: document.getElementById("url-input"),
        error: document.querySelector(".error")
    };
    const state = (0, _onChangeDefault.default)({
        result: [],
        error: ""
    }, (0, _renderJsDefault.default)(elements));
    (0, _viewJsDefault.default)(elements, state);
};

},{"on-change":"dzmLG","./render.js":"lPFSt","./view.js":"ai2uB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dzmLG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable unicorn/prefer-spread */ var _constantsJs = require("./lib/constants.js");
var _isBuiltinJs = require("./lib/is-builtin.js");
var _pathJs = require("./lib/path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
var _isSymbolJs = require("./lib/is-symbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
var _isIteratorJs = require("./lib/is-iterator.js");
var _isIteratorJsDefault = parcelHelpers.interopDefault(_isIteratorJs);
var _wrapIteratorJs = require("./lib/wrap-iterator.js");
var _wrapIteratorJsDefault = parcelHelpers.interopDefault(_wrapIteratorJs);
var _ignorePropertyJs = require("./lib/ignore-property.js");
var _ignorePropertyJsDefault = parcelHelpers.interopDefault(_ignorePropertyJs);
var _cacheJs = require("./lib/cache.js");
var _cacheJsDefault = parcelHelpers.interopDefault(_cacheJs);
var _smartCloneJs = require("./lib/smart-clone/smart-clone.js");
var _smartCloneJsDefault = parcelHelpers.interopDefault(_smartCloneJs);
const defaultOptions = {
    equals: Object.is,
    isShallow: false,
    pathAsArray: false,
    ignoreSymbols: false,
    ignoreUnderscores: false,
    ignoreDetached: false,
    details: false
};
const onChange = (object, onChange1, options = {})=>{
    options = {
        ...defaultOptions,
        ...options
    };
    const proxyTarget = Symbol("ProxyTarget");
    const { equals , isShallow , ignoreDetached , details  } = options;
    const cache = new (0, _cacheJsDefault.default)(equals);
    const hasOnValidate = typeof options.onValidate === "function";
    const smartClone = new (0, _smartCloneJsDefault.default)(hasOnValidate);
    // eslint-disable-next-line max-params
    const validate = (target, property, value, previous, applyData)=>!hasOnValidate || smartClone.isCloning || options.onValidate((0, _pathJsDefault.default).concat(cache.getPath(target), property), value, previous, applyData) === true;
    const handleChangeOnTarget = (target, property, value, previous)=>{
        if (!(0, _ignorePropertyJsDefault.default)(cache, options, property) && !(ignoreDetached && cache.isDetached(target, object))) handleChange(cache.getPath(target), property, value, previous);
    };
    // eslint-disable-next-line max-params
    const handleChange = (changePath, property, value, previous, applyData)=>{
        if (smartClone.isCloning) smartClone.update(changePath, property, previous);
        else onChange1((0, _pathJsDefault.default).concat(changePath, property), value, previous, applyData);
    };
    const getProxyTarget = (value)=>value ? value[proxyTarget] || value : value;
    const prepareValue = (value, target, property, basePath)=>{
        if ((0, _isBuiltinJs.isBuiltinWithoutMutableMethods)(value) || property === "constructor" || isShallow && !(0, _smartCloneJsDefault.default).isHandledMethod(target, property) || (0, _ignorePropertyJsDefault.default)(cache, options, property) || cache.isGetInvariant(target, property) || ignoreDetached && cache.isDetached(target, object)) return value;
        if (basePath === undefined) basePath = cache.getPath(target);
        return cache.getProxy(value, (0, _pathJsDefault.default).concat(basePath, property), handler, proxyTarget);
    };
    const handler = {
        get (target, property, receiver) {
            if ((0, _isSymbolJsDefault.default)(property)) {
                if (property === proxyTarget || property === (0, _constantsJs.TARGET)) return target;
                if (property === (0, _constantsJs.UNSUBSCRIBE) && !cache.isUnsubscribed && cache.getPath(target).length === 0) {
                    cache.unsubscribe();
                    return target;
                }
            }
            const value = (0, _isBuiltinJs.isBuiltinWithMutableMethods)(target) ? Reflect.get(target, property) : Reflect.get(target, property, receiver);
            return prepareValue(value, target, property);
        },
        set (target, property, value, receiver) {
            value = getProxyTarget(value);
            const reflectTarget = target[proxyTarget] || target;
            const previous = reflectTarget[property];
            if (equals(previous, value) && property in target) return true;
            const isValid = validate(target, property, value, previous);
            if (isValid && cache.setProperty(reflectTarget, property, value, receiver, previous)) {
                handleChangeOnTarget(target, property, target[property], previous);
                return true;
            }
            return !isValid;
        },
        defineProperty (target, property, descriptor) {
            if (!cache.isSameDescriptor(descriptor, target, property)) {
                const previous = target[property];
                if (validate(target, property, descriptor.value, previous) && cache.defineProperty(target, property, descriptor, previous)) handleChangeOnTarget(target, property, descriptor.value, previous);
            }
            return true;
        },
        deleteProperty (target, property) {
            if (!Reflect.has(target, property)) return true;
            const previous = Reflect.get(target, property);
            const isValid = validate(target, property, undefined, previous);
            if (isValid && cache.deleteProperty(target, property, previous)) {
                handleChangeOnTarget(target, property, undefined, previous);
                return true;
            }
            return !isValid;
        },
        apply (target, thisArg, argumentsList) {
            const thisProxyTarget = thisArg[proxyTarget] || thisArg;
            if (cache.isUnsubscribed) return Reflect.apply(target, thisProxyTarget, argumentsList);
            if ((details === false || details !== true && !details.includes(target.name)) && (0, _smartCloneJsDefault.default).isHandledType(thisProxyTarget)) {
                let applyPath = (0, _pathJsDefault.default).initial(cache.getPath(target));
                const isHandledMethod = (0, _smartCloneJsDefault.default).isHandledMethod(thisProxyTarget, target.name);
                smartClone.start(thisProxyTarget, applyPath, argumentsList);
                let result = Reflect.apply(target, smartClone.preferredThisArg(target, thisArg, thisProxyTarget), isHandledMethod ? argumentsList.map((argument)=>getProxyTarget(argument)) : argumentsList);
                const isChanged = smartClone.isChanged(thisProxyTarget, equals);
                const previous = smartClone.stop();
                if ((0, _smartCloneJsDefault.default).isHandledType(result) && isHandledMethod) {
                    if (thisArg instanceof Map && target.name === "get") applyPath = (0, _pathJsDefault.default).concat(applyPath, argumentsList[0]);
                    result = cache.getProxy(result, applyPath, handler);
                }
                if (isChanged) {
                    const applyData = {
                        name: target.name,
                        args: argumentsList,
                        result
                    };
                    const changePath = smartClone.isCloning ? (0, _pathJsDefault.default).initial(applyPath) : applyPath;
                    const property = smartClone.isCloning ? (0, _pathJsDefault.default).last(applyPath) : "";
                    if (validate((0, _pathJsDefault.default).get(object, changePath), property, thisProxyTarget, previous, applyData)) handleChange(changePath, property, thisProxyTarget, previous, applyData);
                    else smartClone.undo(thisProxyTarget);
                }
                if ((thisArg instanceof Map || thisArg instanceof Set) && (0, _isIteratorJsDefault.default)(result)) return (0, _wrapIteratorJsDefault.default)(result, target, thisArg, applyPath, prepareValue);
                return result;
            }
            return Reflect.apply(target, thisArg, argumentsList);
        }
    };
    const proxy = cache.getProxy(object, options.pathAsArray ? [] : "", handler);
    onChange1 = onChange1.bind(proxy);
    if (hasOnValidate) options.onValidate = options.onValidate.bind(proxy);
    return proxy;
};
onChange.target = (proxy)=>proxy && proxy[0, _constantsJs.TARGET] || proxy;
onChange.unsubscribe = (proxy)=>proxy[0, _constantsJs.UNSUBSCRIBE] || proxy;
exports.default = onChange;

},{"./lib/constants.js":"1Uoep","./lib/is-builtin.js":"aCszl","./lib/path.js":"iEtjY","./lib/is-symbol.js":"1kB5C","./lib/is-iterator.js":"92Ixh","./lib/wrap-iterator.js":"8qfrh","./lib/ignore-property.js":"4ug92","./lib/cache.js":"d037F","./lib/smart-clone/smart-clone.js":"4nHqz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Uoep":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PATH_SEPARATOR", ()=>PATH_SEPARATOR);
parcelHelpers.export(exports, "TARGET", ()=>TARGET);
parcelHelpers.export(exports, "UNSUBSCRIBE", ()=>UNSUBSCRIBE);
const PATH_SEPARATOR = ".";
const TARGET = Symbol("target");
const UNSUBSCRIBE = Symbol("unsubscribe");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aCszl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBuiltinWithMutableMethods", ()=>isBuiltinWithMutableMethods);
parcelHelpers.export(exports, "isBuiltinWithoutMutableMethods", ()=>isBuiltinWithoutMutableMethods);
function isBuiltinWithMutableMethods(value) {
    return value instanceof Date || value instanceof Set || value instanceof Map || value instanceof WeakSet || value instanceof WeakMap || ArrayBuffer.isView(value);
}
function isBuiltinWithoutMutableMethods(value) {
    return (typeof value === "object" ? value === null : typeof value !== "function") || value instanceof RegExp;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iEtjY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantsJs = require("./constants.js");
var _isArrayJs = require("./is-array.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isSymbolJs = require("./is-symbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
const path = {
    after: (path1, subPath)=>{
        if ((0, _isArrayJsDefault.default)(path1)) return path1.slice(subPath.length);
        if (subPath === "") return path1;
        return path1.slice(subPath.length + 1);
    },
    concat: (path2, key)=>{
        if ((0, _isArrayJsDefault.default)(path2)) {
            path2 = [
                ...path2
            ];
            if (key) path2.push(key);
            return path2;
        }
        if (key && key.toString !== undefined) {
            if (path2 !== "") path2 += (0, _constantsJs.PATH_SEPARATOR);
            if ((0, _isSymbolJsDefault.default)(key)) return path2 + key.toString();
            return path2 + key;
        }
        return path2;
    },
    initial: (path3)=>{
        if ((0, _isArrayJsDefault.default)(path3)) return path3.slice(0, -1);
        if (path3 === "") return path3;
        const index = path3.lastIndexOf((0, _constantsJs.PATH_SEPARATOR));
        if (index === -1) return "";
        return path3.slice(0, index);
    },
    last: (path4)=>{
        if ((0, _isArrayJsDefault.default)(path4)) return path4[path4.length - 1] || "";
        if (path4 === "") return path4;
        const index = path4.lastIndexOf((0, _constantsJs.PATH_SEPARATOR));
        if (index === -1) return path4;
        return path4.slice(index + 1);
    },
    walk: (path5, callback)=>{
        if ((0, _isArrayJsDefault.default)(path5)) for (const key of path5)callback(key);
        else if (path5 !== "") {
            let position = 0;
            let index = path5.indexOf((0, _constantsJs.PATH_SEPARATOR));
            if (index === -1) callback(path5);
            else while(position < path5.length){
                if (index === -1) index = path5.length;
                callback(path5.slice(position, index));
                position = index + 1;
                index = path5.indexOf((0, _constantsJs.PATH_SEPARATOR), position);
            }
        }
    },
    get (object, path6) {
        this.walk(path6, (key)=>{
            if (object) object = object[key];
        });
        return object;
    }
};
exports.default = path;

},{"./constants.js":"1Uoep","./is-array.js":"gDBsB","./is-symbol.js":"1kB5C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDBsB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Array.isArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kB5C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isSymbol(value) {
    return typeof value === "symbol";
}
exports.default = isSymbol;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92Ixh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isIterator(value) {
    return typeof value === "object" && typeof value.next === "function";
}
exports.default = isIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8qfrh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantsJs = require("./constants.js");
function wrapIterator(iterator, target, thisArg, applyPath, prepareValue) {
    const originalNext = iterator.next;
    if (target.name === "entries") iterator.next = function() {
        const result = originalNext.call(this);
        if (result.done === false) {
            result.value[0] = prepareValue(result.value[0], target, result.value[0], applyPath);
            result.value[1] = prepareValue(result.value[1], target, result.value[0], applyPath);
        }
        return result;
    };
    else if (target.name === "values") {
        const keyIterator = thisArg[0, _constantsJs.TARGET].keys();
        iterator.next = function() {
            const result = originalNext.call(this);
            if (result.done === false) result.value = prepareValue(result.value, target, keyIterator.next().value, applyPath);
            return result;
        };
    } else iterator.next = function() {
        const result = originalNext.call(this);
        if (result.done === false) result.value = prepareValue(result.value, target, result.value, applyPath);
        return result;
    };
    return iterator;
}
exports.default = wrapIterator;

},{"./constants.js":"1Uoep","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ug92":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isSymbolJs = require("./is-symbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
function ignoreProperty(cache, options, property) {
    return cache.isUnsubscribed || options.ignoreSymbols && (0, _isSymbolJsDefault.default)(property) || options.ignoreUnderscores && property.charAt(0) === "_" || "ignoreKeys" in options && options.ignoreKeys.includes(property);
}
exports.default = ignoreProperty;

},{"./is-symbol.js":"1kB5C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d037F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
class Cache {
    constructor(equals){
        this._equals = equals;
        this._proxyCache = new WeakMap();
        this._pathCache = new WeakMap();
        this.isUnsubscribed = false;
    }
    _getDescriptorCache() {
        if (this._descriptorCache === undefined) this._descriptorCache = new WeakMap();
        return this._descriptorCache;
    }
    _getProperties(target) {
        const descriptorCache = this._getDescriptorCache();
        let properties = descriptorCache.get(target);
        if (properties === undefined) {
            properties = {};
            descriptorCache.set(target, properties);
        }
        return properties;
    }
    _getOwnPropertyDescriptor(target, property) {
        if (this.isUnsubscribed) return Reflect.getOwnPropertyDescriptor(target, property);
        const properties = this._getProperties(target);
        let descriptor = properties[property];
        if (descriptor === undefined) {
            descriptor = Reflect.getOwnPropertyDescriptor(target, property);
            properties[property] = descriptor;
        }
        return descriptor;
    }
    getProxy(target, path, handler, proxyTarget) {
        if (this.isUnsubscribed) return target;
        const reflectTarget = target[proxyTarget];
        const source = reflectTarget || target;
        this._pathCache.set(source, path);
        let proxy = this._proxyCache.get(source);
        if (proxy === undefined) {
            proxy = reflectTarget === undefined ? new Proxy(target, handler) : target;
            this._proxyCache.set(source, proxy);
        }
        return proxy;
    }
    getPath(target) {
        return this.isUnsubscribed ? undefined : this._pathCache.get(target);
    }
    isDetached(target, object) {
        return !Object.is(target, (0, _pathJsDefault.default).get(object, this.getPath(target)));
    }
    defineProperty(target, property, descriptor) {
        if (!Reflect.defineProperty(target, property, descriptor)) return false;
        if (!this.isUnsubscribed) this._getProperties(target)[property] = descriptor;
        return true;
    }
    setProperty(target, property, value, receiver, previous) {
        if (!this._equals(previous, value) || !(property in target)) {
            const descriptor = this._getOwnPropertyDescriptor(target, property);
            if (descriptor !== undefined && "set" in descriptor) return Reflect.set(target, property, value, receiver);
            return Reflect.set(target, property, value);
        }
        return true;
    }
    deleteProperty(target, property, previous) {
        if (Reflect.deleteProperty(target, property)) {
            if (!this.isUnsubscribed) {
                const properties = this._getDescriptorCache().get(target);
                if (properties) {
                    delete properties[property];
                    this._pathCache.delete(previous);
                }
            }
            return true;
        }
        return false;
    }
    isSameDescriptor(a, target, property) {
        const b = this._getOwnPropertyDescriptor(target, property);
        return a !== undefined && b !== undefined && Object.is(a.value, b.value) && (a.writable || false) === (b.writable || false) && (a.enumerable || false) === (b.enumerable || false) && (a.configurable || false) === (b.configurable || false) && a.get === b.get && a.set === b.set;
    }
    isGetInvariant(target, property) {
        const descriptor = this._getOwnPropertyDescriptor(target, property);
        return descriptor !== undefined && descriptor.configurable !== true && descriptor.writable !== true;
    }
    unsubscribe() {
        this._descriptorCache = null;
        this._pathCache = null;
        this._proxyCache = null;
        this.isUnsubscribed = true;
    }
}
exports.default = Cache;

},{"./path.js":"iEtjY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nHqz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isArrayJs = require("../is-array.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isBuiltinJs = require("../is-builtin.js");
var _isObjectJs = require("../is-object.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _cloneObjectJs = require("./clone/clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
var _cloneArrayJs = require("./clone/clone-array.js");
var _cloneArrayJsDefault = parcelHelpers.interopDefault(_cloneArrayJs);
var _cloneDateJs = require("./clone/clone-date.js");
var _cloneDateJsDefault = parcelHelpers.interopDefault(_cloneDateJs);
var _cloneSetJs = require("./clone/clone-set.js");
var _cloneSetJsDefault = parcelHelpers.interopDefault(_cloneSetJs);
var _cloneMapJs = require("./clone/clone-map.js");
var _cloneMapJsDefault = parcelHelpers.interopDefault(_cloneMapJs);
var _cloneWeaksetJs = require("./clone/clone-weakset.js");
var _cloneWeaksetJsDefault = parcelHelpers.interopDefault(_cloneWeaksetJs);
var _cloneWeakmapJs = require("./clone/clone-weakmap.js");
var _cloneWeakmapJsDefault = parcelHelpers.interopDefault(_cloneWeakmapJs);
class SmartClone {
    constructor(hasOnValidate){
        this._stack = [];
        this._hasOnValidate = hasOnValidate;
    }
    static isHandledType(value) {
        return (0, _isObjectJsDefault.default)(value) || (0, _isArrayJsDefault.default)(value) || (0, _isBuiltinJs.isBuiltinWithMutableMethods)(value);
    }
    static isHandledMethod(target, name) {
        if ((0, _isObjectJsDefault.default)(target)) return (0, _cloneObjectJsDefault.default).isHandledMethod(name);
        if ((0, _isArrayJsDefault.default)(target)) return (0, _cloneArrayJsDefault.default).isHandledMethod(name);
        if (target instanceof Set) return (0, _cloneSetJsDefault.default).isHandledMethod(name);
        if (target instanceof Map) return (0, _cloneMapJsDefault.default).isHandledMethod(name);
        return (0, _isBuiltinJs.isBuiltinWithMutableMethods)(target);
    }
    get isCloning() {
        return this._stack.length > 0;
    }
    start(value, path, argumentsList) {
        let CloneClass = (0, _cloneObjectJsDefault.default);
        if ((0, _isArrayJsDefault.default)(value)) CloneClass = (0, _cloneArrayJsDefault.default);
        else if (value instanceof Date) CloneClass = (0, _cloneDateJsDefault.default);
        else if (value instanceof Set) CloneClass = (0, _cloneSetJsDefault.default);
        else if (value instanceof Map) CloneClass = (0, _cloneMapJsDefault.default);
        else if (value instanceof WeakSet) CloneClass = (0, _cloneWeaksetJsDefault.default);
        else if (value instanceof WeakMap) CloneClass = (0, _cloneWeakmapJsDefault.default);
        this._stack.push(new CloneClass(value, path, argumentsList, this._hasOnValidate));
    }
    update(fullPath, property, value) {
        this._stack[this._stack.length - 1].update(fullPath, property, value);
    }
    preferredThisArg(target, thisArg, thisProxyTarget) {
        const { name  } = target;
        const isHandledMethod = SmartClone.isHandledMethod(thisProxyTarget, name);
        return this._stack[this._stack.length - 1].preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget);
    }
    isChanged(isMutable, value, equals) {
        return this._stack[this._stack.length - 1].isChanged(isMutable, value, equals);
    }
    undo(object) {
        if (this._previousClone !== undefined) this._previousClone.undo(object);
    }
    stop() {
        this._previousClone = this._stack.pop();
        return this._previousClone.clone;
    }
}
exports.default = SmartClone;

},{"../is-array.js":"gDBsB","../is-builtin.js":"aCszl","../is-object.js":"ftVyq","./clone/clone-object.js":"9qeRV","./clone/clone-array.js":"bBNzZ","./clone/clone-date.js":"j9TOv","./clone/clone-set.js":"fgNCY","./clone/clone-map.js":"6ho0u","./clone/clone-weakset.js":"fYqiz","./clone/clone-weakmap.js":"5vqZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ftVyq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isObject(value) {
    return toString.call(value) === "[object Object]";
}
exports.default = isObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qeRV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pathJs = require("../../path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
var _isArrayJs = require("../../is-array.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isObjectJs = require("../../is-object.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _arrayJs = require("../methods/array.js");
var _setJs = require("../methods/set.js");
var _mapJs = require("../methods/map.js");
var _objectJs = require("../methods/object.js");
class CloneObject {
    constructor(value, path, argumentsList, hasOnValidate){
        this._path = path;
        this._isChanged = false;
        this._clonedCache = new Set();
        this._hasOnValidate = hasOnValidate;
        this._changes = hasOnValidate ? [] : null;
        this.clone = path === undefined ? value : this._shallowClone(value);
    }
    static isHandledMethod(name) {
        return (0, _objectJs.IMMUTABLE_OBJECT_METHODS).has(name);
    }
    _shallowClone(value) {
        let clone = value;
        if ((0, _isObjectJsDefault.default)(value)) clone = {
            ...value
        };
        else if ((0, _isArrayJsDefault.default)(value) || ArrayBuffer.isView(value)) clone = [
            ...value
        ];
        else if (value instanceof Date) clone = new Date(value);
        else if (value instanceof Set) clone = new Set([
            ...value
        ].map((item)=>this._shallowClone(item)));
        else if (value instanceof Map) {
            clone = new Map();
            for (const [key, item] of value.entries())clone.set(key, this._shallowClone(item));
        }
        this._clonedCache.add(clone);
        return clone;
    }
    preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget) {
        if (isHandledMethod) {
            if ((0, _isArrayJsDefault.default)(thisProxyTarget)) this._onIsChanged = (0, _arrayJs.MUTABLE_ARRAY_METHODS)[name];
            else if (thisProxyTarget instanceof Set) this._onIsChanged = (0, _setJs.MUTABLE_SET_METHODS)[name];
            else if (thisProxyTarget instanceof Map) this._onIsChanged = (0, _mapJs.MUTABLE_MAP_METHODS)[name];
            return thisProxyTarget;
        }
        return thisArg;
    }
    update(fullPath, property, value) {
        const changePath = (0, _pathJsDefault.default).after(fullPath, this._path);
        if (property !== "length") {
            let object = this.clone;
            (0, _pathJsDefault.default).walk(changePath, (key)=>{
                if (object && object[key]) {
                    if (!this._clonedCache.has(object[key])) object[key] = this._shallowClone(object[key]);
                    object = object[key];
                }
            });
            if (this._hasOnValidate) this._changes.push({
                path: changePath,
                property,
                previous: value
            });
            if (object && object[property]) object[property] = value;
        }
        this._isChanged = true;
    }
    undo(object) {
        let change;
        for(let index = this._changes.length - 1; index !== -1; index--){
            change = this._changes[index];
            (0, _pathJsDefault.default).get(object, change.path)[change.property] = change.previous;
        }
    }
    isChanged(value) {
        return this._onIsChanged === undefined ? this._isChanged : this._onIsChanged(this.clone, value);
    }
}
exports.default = CloneObject;

},{"../../path.js":"iEtjY","../../is-array.js":"gDBsB","../../is-object.js":"ftVyq","../methods/array.js":"4tBgH","../methods/set.js":"46LPZ","../methods/map.js":"jZpKy","../methods/object.js":"7GRup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tBgH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MUTABLE_ARRAY_METHODS", ()=>MUTABLE_ARRAY_METHODS);
parcelHelpers.export(exports, "HANDLED_ARRAY_METHODS", ()=>HANDLED_ARRAY_METHODS);
var _isDiffCertainJs = require("../diff/is-diff-certain.js");
var _isDiffCertainJsDefault = parcelHelpers.interopDefault(_isDiffCertainJs);
var _isDiffArraysJs = require("../diff/is-diff-arrays.js");
var _isDiffArraysJsDefault = parcelHelpers.interopDefault(_isDiffArraysJs);
var _objectJs = require("./object.js");
const IMMUTABLE_ARRAY_METHODS = new Set([
    "concat",
    "includes",
    "indexOf",
    "join",
    "keys",
    "lastIndexOf", 
]);
const MUTABLE_ARRAY_METHODS = {
    push: (0, _isDiffCertainJsDefault.default),
    pop: (0, _isDiffCertainJsDefault.default),
    shift: (0, _isDiffCertainJsDefault.default),
    unshift: (0, _isDiffCertainJsDefault.default),
    copyWithin: (0, _isDiffArraysJsDefault.default),
    reverse: (0, _isDiffArraysJsDefault.default),
    sort: (0, _isDiffArraysJsDefault.default),
    splice: (0, _isDiffArraysJsDefault.default),
    flat: (0, _isDiffArraysJsDefault.default),
    fill: (0, _isDiffArraysJsDefault.default)
};
const HANDLED_ARRAY_METHODS = new Set([
    ...(0, _objectJs.IMMUTABLE_OBJECT_METHODS),
    ...IMMUTABLE_ARRAY_METHODS,
    ...Object.keys(MUTABLE_ARRAY_METHODS), 
]);

},{"../diff/is-diff-certain.js":"ebvvd","../diff/is-diff-arrays.js":"9w3oa","./object.js":"7GRup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebvvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffCertain() {
    return true;
}
exports.default = isDiffCertain;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9w3oa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffArrays(clone, value) {
    return clone.length !== value.length || clone.some((item, index)=>value[index] !== item);
}
exports.default = isDiffArrays;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7GRup":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IMMUTABLE_OBJECT_METHODS", ()=>IMMUTABLE_OBJECT_METHODS);
const IMMUTABLE_OBJECT_METHODS = new Set([
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf", 
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46LPZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COLLECTION_ITERATOR_METHODS", ()=>COLLECTION_ITERATOR_METHODS);
parcelHelpers.export(exports, "IMMUTABLE_SET_METHODS", ()=>IMMUTABLE_SET_METHODS);
parcelHelpers.export(exports, "MUTABLE_SET_METHODS", ()=>MUTABLE_SET_METHODS);
parcelHelpers.export(exports, "HANDLED_SET_METHODS", ()=>HANDLED_SET_METHODS);
var _isDiffSetsJs = require("../diff/is-diff-sets.js");
var _isDiffSetsJsDefault = parcelHelpers.interopDefault(_isDiffSetsJs);
const COLLECTION_ITERATOR_METHODS = [
    "keys",
    "values",
    "entries", 
];
const IMMUTABLE_SET_METHODS = new Set([
    "has",
    "toString", 
]);
const MUTABLE_SET_METHODS = {
    add: (0, _isDiffSetsJsDefault.default),
    clear: (0, _isDiffSetsJsDefault.default),
    delete: (0, _isDiffSetsJsDefault.default),
    forEach: (0, _isDiffSetsJsDefault.default)
};
const HANDLED_SET_METHODS = new Set([
    ...IMMUTABLE_SET_METHODS,
    ...Object.keys(MUTABLE_SET_METHODS),
    ...COLLECTION_ITERATOR_METHODS, 
]);

},{"../diff/is-diff-sets.js":"k2NHL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k2NHL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffSets(clone, value) {
    if (clone.size !== value.size) return true;
    for (const element of clone){
        if (!value.has(element)) return true;
    }
    return false;
}
exports.default = isDiffSets;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jZpKy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MUTABLE_MAP_METHODS", ()=>MUTABLE_MAP_METHODS);
parcelHelpers.export(exports, "HANDLED_MAP_METHODS", ()=>HANDLED_MAP_METHODS);
var _isDiffMapsJs = require("../diff/is-diff-maps.js");
var _isDiffMapsJsDefault = parcelHelpers.interopDefault(_isDiffMapsJs);
var _setJs = require("./set.js");
const IMMUTABLE_MAP_METHODS = new Set([
    ...(0, _setJs.IMMUTABLE_SET_METHODS),
    "get"
]);
const MUTABLE_MAP_METHODS = {
    set: (0, _isDiffMapsJsDefault.default),
    clear: (0, _isDiffMapsJsDefault.default),
    delete: (0, _isDiffMapsJsDefault.default),
    forEach: (0, _isDiffMapsJsDefault.default)
};
const HANDLED_MAP_METHODS = new Set([
    ...IMMUTABLE_MAP_METHODS,
    ...Object.keys(MUTABLE_MAP_METHODS),
    ...(0, _setJs.COLLECTION_ITERATOR_METHODS), 
]);

},{"../diff/is-diff-maps.js":"m0SsD","./set.js":"46LPZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"m0SsD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffMaps(clone, value) {
    if (clone.size !== value.size) return true;
    let bValue;
    for (const [key, aValue] of clone){
        bValue = value.get(key);
        if (bValue !== aValue || bValue === undefined && !value.has(key)) return true;
    }
    return false;
}
exports.default = isDiffMaps;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBNzZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("../methods/array.js");
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneArray extends (0, _cloneObjectJsDefault.default) {
    static isHandledMethod(name) {
        return (0, _arrayJs.HANDLED_ARRAY_METHODS).has(name);
    }
}
exports.default = CloneArray;

},{"../methods/array.js":"4tBgH","./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j9TOv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneDate extends (0, _cloneObjectJsDefault.default) {
    undo(object) {
        object.setTime(this.clone.getTime());
    }
    isChanged(value, equals) {
        return !equals(this.clone.valueOf(), value.valueOf());
    }
}
exports.default = CloneDate;

},{"./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fgNCY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setJs = require("../methods/set.js");
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneSet extends (0, _cloneObjectJsDefault.default) {
    static isHandledMethod(name) {
        return (0, _setJs.HANDLED_SET_METHODS).has(name);
    }
    undo(object) {
        for (const value of this.clone)object.add(value);
        for (const value1 of object)if (!this.clone.has(value1)) object.delete(value1);
    }
}
exports.default = CloneSet;

},{"../methods/set.js":"46LPZ","./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ho0u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapJs = require("../methods/map.js");
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneMap extends (0, _cloneObjectJsDefault.default) {
    static isHandledMethod(name) {
        return (0, _mapJs.HANDLED_MAP_METHODS).has(name);
    }
    undo(object) {
        for (const [key, value] of this.clone.entries())object.set(key, value);
        for (const key1 of object.keys())if (!this.clone.has(key1)) object.delete(key1);
    }
}
exports.default = CloneMap;

},{"../methods/map.js":"jZpKy","./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYqiz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneWeakSet extends (0, _cloneObjectJsDefault.default) {
    constructor(value, path, argumentsList, hasOnValidate){
        super(undefined, path, argumentsList, hasOnValidate);
        this._arg1 = argumentsList[0];
        this._weakValue = value.has(this._arg1);
    }
    isChanged(value) {
        return this._weakValue !== value.has(this._arg1);
    }
    undo(object) {
        if (this._weakValue && !object.has(this._arg1)) object.add(this._arg1);
        else object.delete(this._arg1);
    }
}
exports.default = CloneWeakSet;

},{"./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5vqZf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneWeakMap extends (0, _cloneObjectJsDefault.default) {
    constructor(value, path, argumentsList, hasOnValidate){
        super(undefined, path, argumentsList, hasOnValidate);
        this._weakKey = argumentsList[0];
        this._weakHas = value.has(this._weakKey);
        this._weakValue = value.get(this._weakKey);
    }
    isChanged(value) {
        return this._weakValue !== value.get(this._weakKey);
    }
    undo(object) {
        const weakHas = object.has(this._weakKey);
        if (this._weakHas && !weakHas) object.set(this._weakKey, this._weakValue);
        else if (!this._weakHas && weakHas) object.delete(this._weakKey);
        else if (this._weakValue !== object.get(this._weakKey)) object.set(this._weakKey, this._weakValue);
    }
}
exports.default = CloneWeakMap;

},{"./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPFSt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-param-reassign */ const renderError = (elements, value)=>{
    if (value === "") return;
    const error = value;
    elements.error.textContent = error;
    elements.error.classList.add("text-danger");
};
const createTitle = (name, title)=>{
    if (name.querySelector(".card")) return;
    const div = document.createElement("div");
    name.appendChild(div);
    div.classList.add("card", "border-0");
    const ul = document.createElement("ul");
    const card = document.createElement("div");
    div.appendChild(card);
    card.classList.add("card-body");
    div.appendChild(ul);
    ul.classList.add("list-group", "border-0", "rounded-0");
    const h2 = document.createElement("h2");
    card.appendChild(h2);
    h2.classList.add("card-title", "h4");
    h2.textContent = title;
};
const renderResult = (elements, value)=>{
    elements.error.textContent = "";
    const { result  } = elements;
    createTitle(result, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u044B\u0447\u0435\u0441\u043B\u0435\u043D\u0438\u0439");
    const ul = result.querySelector(".list-group");
    ul.innerHTML = "";
    value.forEach((element)=>{
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        ul.prepend(li);
        li.classList.add("list-group-item", "border-0", "border-end-0");
        li.appendChild(h3);
        h3.classList.add("h6", "m-0");
        h3.textContent = element;
    });
    elements.input.value = "";
    elements.input.focus();
};
const render = (elements)=>(path, value)=>{
        switch(path){
            case "result":
                renderResult(elements, value);
                break;
            case "error":
                renderError(elements, value);
                break;
            default:
                break;
        }
    };
exports.default = render;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ai2uB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-unused-vars */ /* eslint-disable radix */ /* eslint-disable no-restricted-globals */ /* eslint-disable no-shadow */ /* eslint-disable no-param-reassign */ var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
const normalizationArray = (arr)=>arr.map((item, index, arr)=>{
        const number = parseInt(item);
        return isNaN(number) ? item : number;
    });
const generateArr = (value)=>{
    const arr = value.replace(/\s/g, "").split(",");
    const normalizeArr = normalizationArray(arr);
    const filterArr = normalizeArr.filter((el)=>el !== "");
    return filterArr;
};
const view = (elements, state)=>{
    elements.form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const { value  } = elements.input;
        const arr = generateArr(value);
        try {
            const sumElements = (0, _sumJsDefault.default)(arr);
            state.result.push(sumElements);
        } catch (e1) {
            state.error = e1;
        }
    });
};
exports.default = view;

},{"./sum.js":"889Oh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"889Oh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-unused-vars */ const isStringInArr = (arr)=>arr.some((elem)=>typeof elem === "string");
const sumOfMinimumElements = (arr)=>{
    if (arr.length < 2) throw Error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u043E\u043B\u0435\u0435 \u0434\u0432\u0443\u0445 \u0446\u0438\u0444\u0440 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E");
    if (isStringInArr(arr)) throw Error("\u041C\u0430\u0441\u0441\u0438\u0432 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");
    const sortArr = arr.sort((a, b)=>a - b);
    const [one, two, ...tail] = sortArr;
    return one + two;
};
exports.default = sumOfMinimumElements;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequiredc7f")

//# sourceMappingURL=index.975ef6c8.js.map
