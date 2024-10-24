/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6251:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.createStorage = void 0;
var WEB_STORAGE_ACCESS_ERROR_MESSAGE = "Cannot access Web Storage API";
var createStorage = function (storageType) {
    var storageProvider;
    // To handle incognito mode. Calling localStorage throws an error when in incognito
    try {
        storageProvider = storageType === "local" ? localStorage : sessionStorage;
    }
    catch (e) {
        console.warn(WEB_STORAGE_ACCESS_ERROR_MESSAGE);
    }
    var storage = {
        setItem: function (key, value) {
            try {
                storageProvider.setItem(key, JSON.stringify(value));
            }
            catch (e) {
                console.warn(WEB_STORAGE_ACCESS_ERROR_MESSAGE);
            }
        },
        getItem: function (key) {
            try {
                var rawStorageValue = storageProvider.getItem(key);
                return rawStorageValue && JSON.parse(rawStorageValue);
            }
            catch (e) {
                console.warn(WEB_STORAGE_ACCESS_ERROR_MESSAGE);
                return null;
            }
        },
        removeItem: function (key) {
            try {
                storageProvider.removeItem(key);
            }
            catch (e) {
                console.warn(WEB_STORAGE_ACCESS_ERROR_MESSAGE);
            }
        },
        clear: function () {
            try {
                storageProvider.clear();
            }
            catch (e) {
                console.warn(WEB_STORAGE_ACCESS_ERROR_MESSAGE);
            }
        },
        /** Stores a key/value pair within `ada-functional-storage` Storage key */
        setFnItem: function (key, value) {
            var _a;
            var currentValue = storage.getItem("ada-functional-storage") || {};
            var newValue = __assign(__assign({}, currentValue), (_a = {}, _a[key] = value, _a));
            storage.setItem("ada-functional-storage", newValue);
        },
        /** Gets a value under `ada-functional-storage` Storage key */
        getFnItem: function (key) {
            var value = storage.getItem("ada-functional-storage");
            return (value && value[key]) || null;
        }
    };
    return storage;
};
exports.createStorage = createStorage;


/***/ }),

/***/ 6183:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = true;
__webpack_unused_export__ = exports.ad = exports.BB = void 0;
var create_storage_1 = __webpack_require__(6251);
exports.BB = (0, create_storage_1.createStorage)("local");
exports.ad = (0, create_storage_1.createStorage)("session");
/** Checks if Web Storage API is supported */
var isWebStorageSupported = function () {
    try {
        var key = "key_to_test_local_storage";
        localStorage.setItem(key, key);
        localStorage.removeItem(key);
        return true;
    }
    catch (e) {
        return false;
    }
};
__webpack_unused_export__ = isWebStorageSupported;


/***/ }),

/***/ 9186:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5301);

/***/ }),

/***/ 977:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5930);

/***/ }),

/***/ 7293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5140);

/***/ }),

/***/ 8233:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(4474);

/***/ }),

/***/ 20:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5267);

/***/ }),

/***/ 8341:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ isBrowserBundle; },
/* harmony export */   a: function() { return /* binding */ isDebugBuild; }
/* harmony export */ });
/**
 * This module mostly exists for optimizations in the build process
 * through rollup and terser.  We define some global constants which
 * are normally undefined.  However terser overrides these with global
 * definitions which can be evaluated by the static analyzer when
 * creating a bundle.
 *
 * In turn the `isDebugBuild` and `isBrowserBundle` functions are pure
 * and can help us remove unused code from the bundles.
 */
/**
 * Figures out if we're building with debug functionality.
 *
 * @returns true if this is a debug build
 */
function isDebugBuild() {
    return typeof __SENTRY_NO_DEBUG__ !== 'undefined' && !__SENTRY_BROWSER_BUNDLE__;
}
/**
 * Figures out if we're building a browser bundle.
 *
 * @returns true if this is a browser bundle build.
 */
function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== 'undefined' && !!__SENTRY_BROWSER_BUNDLE__;
}
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 6475:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ getGlobalObject; }
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6284);
/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */

var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
    return ((0,_node__WEBPACK_IMPORTED_MODULE_0__/* .isNodeEnv */ .wD)()
        ? __webpack_require__.g
        : typeof window !== 'undefined' // eslint-disable-line no-restricted-globals
            ? window // eslint-disable-line no-restricted-globals
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject);
}
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 6284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fj: function() { return /* binding */ dynamicRequire; },
/* harmony export */   wD: function() { return /* binding */ isNodeEnv; }
/* harmony export */ });
/* unused harmony export loadModule */
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8341);
/* module decorator */ module = __webpack_require__.hmd(module);
/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */

/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    // explicitly check for browser bundles as those can be optimized statically
    // by terser/rollup.
    return (!(0,_env__WEBPACK_IMPORTED_MODULE_0__/* .isBrowserBundle */ .Z)() &&
        Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]');
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
}
/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */
function loadModule(moduleName) {
    var mod;
    try {
        mod = dynamicRequire(module, moduleName);
    }
    catch (e) {
        // no-empty
    }
    try {
        var cwd = dynamicRequire(module, 'process').cwd;
        mod = dynamicRequire(module, cwd() + "/node_modules/" + moduleName);
    }
    catch (e) {
        // no-empty
    }
    return mod;
}
//# sourceMappingURL=node.js.map

/***/ }),

/***/ 9297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lu: function() { return /* binding */ dateTimestampInSeconds; },
/* harmony export */   zf: function() { return /* binding */ timestampInSeconds; }
/* harmony export */ });
/* unused harmony exports timestampWithMs, usingPerformanceAPI, _browserPerformanceTimeOriginMode, browserPerformanceTimeOrigin */
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6475);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6284);
/* module decorator */ module = __webpack_require__.hmd(module);


/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
var dateTimestampSource = {
    nowSeconds: function () { return Date.now() / 1000; },
};
/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
    var performance = (0,_global__WEBPACK_IMPORTED_MODULE_0__/* .getGlobalObject */ .V)().performance;
    if (!performance || !performance.now) {
        return undefined;
    }
    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    var timeOrigin = Date.now() - performance.now();
    return {
        now: function () { return performance.now(); },
        timeOrigin: timeOrigin,
    };
}
/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
    try {
        var perfHooks = (0,_node__WEBPACK_IMPORTED_MODULE_1__/* .dynamicRequire */ .fj)(module, 'perf_hooks');
        return perfHooks.performance;
    }
    catch (_) {
        return undefined;
    }
}
/**
 * The Performance API implementation for the current platform, if available.
 */
var platformPerformance = (0,_node__WEBPACK_IMPORTED_MODULE_1__/* .isNodeEnv */ .wD)() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === undefined
    ? dateTimestampSource
    : {
        nowSeconds: function () { return (platformPerformance.timeOrigin + platformPerformance.now()) / 1000; },
    };
/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
// Re-exported with an old name for backwards-compatibility.
var timestampWithMs = (/* unused pure expression or super */ null && (timestampInSeconds));
/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */
var usingPerformanceAPI = platformPerformance !== undefined;
/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */
var _browserPerformanceTimeOriginMode;
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
var browserPerformanceTimeOrigin = (function () {
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    var performance = (0,_global__WEBPACK_IMPORTED_MODULE_0__/* .getGlobalObject */ .V)().performance;
    if (!performance || !performance.now) {
        _browserPerformanceTimeOriginMode = 'none';
        return undefined;
    }
    var threshold = 3600 * 1000;
    var performanceNow = performance.now();
    var dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    var timeOriginDelta = performance.timeOrigin
        ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
        : threshold;
    var timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    // eslint-disable-next-line deprecation/deprecation
    var navigationStart = performance.timing && performance.timing.navigationStart;
    var hasNavigationStart = typeof navigationStart === 'number';
    // if navigationStart isn't available set delta to threshold so it isn't used
    var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    var navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            _browserPerformanceTimeOriginMode = 'timeOrigin';
            return performance.timeOrigin;
        }
        else {
            _browserPerformanceTimeOriginMode = 'navigationStart';
            return navigationStart;
        }
    }
    // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
    _browserPerformanceTimeOriginMode = 'dateNow';
    return dateNow;
})();
//# sourceMappingURL=time.js.map

/***/ }),

/***/ 6544:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(6473);

module.exports = parent;


/***/ }),

/***/ 2795:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(5926);

module.exports = parent;


/***/ }),

/***/ 4615:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(6368);

module.exports = parent;


/***/ }),

/***/ 847:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(6158);

module.exports = parent;


/***/ }),

/***/ 1342:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(3959);

module.exports = parent;


/***/ }),

/***/ 6682:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7640);
var entryVirtual = __webpack_require__(5296);

module.exports = entryVirtual('Array').indexOf;


/***/ }),

/***/ 2342:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(3381);
var method = __webpack_require__(6682);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf) ? method : own;
};


/***/ }),

/***/ 5933:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(6889);
var path = __webpack_require__(7675);

module.exports = path.Object.assign;


/***/ }),

/***/ 8825:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(8805);
var path = __webpack_require__(7675);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),

/***/ 9069:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7375);
var path = __webpack_require__(7675);

module.exports = path.Object.getOwnPropertySymbols;


/***/ }),

/***/ 9768:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(9676);
var path = __webpack_require__(7675);

module.exports = path.Object.keys;


/***/ }),

/***/ 5301:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(6544);

module.exports = parent;


/***/ }),

/***/ 5930:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(2795);

module.exports = parent;


/***/ }),

/***/ 5140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(4615);

module.exports = parent;


/***/ }),

/***/ 4474:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(847);

module.exports = parent;


/***/ }),

/***/ 5267:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(1342);

module.exports = parent;


/***/ }),

/***/ 182:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var isCallable = __webpack_require__(2073);
var tryToString = __webpack_require__(4003);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 8347:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var isObject = __webpack_require__(5774);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ 4581:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(9441);
var toAbsoluteIndex = __webpack_require__(8630);
var lengthOfArrayLike = __webpack_require__(954);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 2217:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(2116);
var uncurryThis = __webpack_require__(9036);
var IndexedObject = __webpack_require__(6731);
var toObject = __webpack_require__(5809);
var lengthOfArrayLike = __webpack_require__(954);
var arraySpeciesCreate = __webpack_require__(6601);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 538:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7131);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ 8067:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var toAbsoluteIndex = __webpack_require__(8630);
var lengthOfArrayLike = __webpack_require__(954);
var createProperty = __webpack_require__(8724);

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ 820:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(9036);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 9077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var isArray = __webpack_require__(1972);
var isConstructor = __webpack_require__(6553);
var isObject = __webpack_require__(5774);
var wellKnownSymbol = __webpack_require__(6615);

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 6601:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(9077);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(9036);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 5663:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var TO_STRING_TAG_SUPPORT = __webpack_require__(7104);
var isCallable = __webpack_require__(2073);
var classofRaw = __webpack_require__(244);
var wellKnownSymbol = __webpack_require__(6615);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 8471:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5560);
var definePropertyModule = __webpack_require__(6381);
var createPropertyDescriptor = __webpack_require__(3768);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 3768:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(5141);
var definePropertyModule = __webpack_require__(6381);
var createPropertyDescriptor = __webpack_require__(3768);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 8643:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(7675);
var hasOwn = __webpack_require__(4373);
var wrappedWellKnownSymbolModule = __webpack_require__(1635);
var defineProperty = (__webpack_require__(6381).f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 5560:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7131);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 6171:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var isObject = __webpack_require__(5774);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 4084:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(7827);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 6312:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var userAgent = __webpack_require__(4084);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 5296:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(7675);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),

/***/ 347:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 1938:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5391);
var apply = __webpack_require__(1981);
var uncurryThis = __webpack_require__(9036);
var isCallable = __webpack_require__(2073);
var getOwnPropertyDescriptor = (__webpack_require__(5687).f);
var isForced = __webpack_require__(3488);
var path = __webpack_require__(7675);
var bind = __webpack_require__(2116);
var createNonEnumerableProperty = __webpack_require__(8471);
var hasOwn = __webpack_require__(4373);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ 7131:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 1981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(5164);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 2116:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(9036);
var aCallable = __webpack_require__(182);
var NATIVE_BIND = __webpack_require__(5164);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 5164:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7131);

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 3057:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(5164);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 9036:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(5164);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 7827:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(7675);
var global = __webpack_require__(5391);
var isCallable = __webpack_require__(2073);

var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 3514:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(182);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 5391:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 4373:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(9036);
var toObject = __webpack_require__(5809);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 6145:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 9417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(7827);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 2633:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5560);
var fails = __webpack_require__(7131);
var createElement = __webpack_require__(6171);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 6731:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var uncurryThis = __webpack_require__(9036);
var fails = __webpack_require__(7131);
var classof = __webpack_require__(244);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 6678:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(9036);
var isCallable = __webpack_require__(2073);
var store = __webpack_require__(4993);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9257:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(7683);
var global = __webpack_require__(5391);
var uncurryThis = __webpack_require__(9036);
var isObject = __webpack_require__(5774);
var createNonEnumerableProperty = __webpack_require__(8471);
var hasOwn = __webpack_require__(4373);
var shared = __webpack_require__(4993);
var sharedKey = __webpack_require__(651);
var hiddenKeys = __webpack_require__(6145);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 1972:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(244);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 2073:
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 6553:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(9036);
var fails = __webpack_require__(7131);
var isCallable = __webpack_require__(2073);
var classof = __webpack_require__(5663);
var getBuiltIn = __webpack_require__(7827);
var inspectSource = __webpack_require__(6678);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 3488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7131);
var isCallable = __webpack_require__(2073);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 5774:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(2073);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 3599:
/***/ (function(module) {

module.exports = true;


/***/ }),

/***/ 3969:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var getBuiltIn = __webpack_require__(7827);
var isCallable = __webpack_require__(2073);
var isPrototypeOf = __webpack_require__(3381);
var USE_SYMBOL_AS_UID = __webpack_require__(1004);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ 954:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(2954);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 5852:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(6312);
var fails = __webpack_require__(7131);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 7683:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var isCallable = __webpack_require__(2073);
var inspectSource = __webpack_require__(6678);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 8593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(5560);
var uncurryThis = __webpack_require__(9036);
var call = __webpack_require__(3057);
var fails = __webpack_require__(7131);
var objectKeys = __webpack_require__(5556);
var getOwnPropertySymbolsModule = __webpack_require__(6841);
var propertyIsEnumerableModule = __webpack_require__(6337);
var toObject = __webpack_require__(5809);
var IndexedObject = __webpack_require__(6731);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 3628:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(8347);
var definePropertiesModule = __webpack_require__(9157);
var enumBugKeys = __webpack_require__(347);
var hiddenKeys = __webpack_require__(6145);
var html = __webpack_require__(9417);
var documentCreateElement = __webpack_require__(6171);
var sharedKey = __webpack_require__(651);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 9157:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5560);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(2506);
var definePropertyModule = __webpack_require__(6381);
var anObject = __webpack_require__(8347);
var toIndexedObject = __webpack_require__(9441);
var objectKeys = __webpack_require__(5556);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 6381:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var global = __webpack_require__(5391);
var DESCRIPTORS = __webpack_require__(5560);
var IE8_DOM_DEFINE = __webpack_require__(2633);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(2506);
var anObject = __webpack_require__(8347);
var toPropertyKey = __webpack_require__(5141);

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 5687:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5560);
var call = __webpack_require__(3057);
var propertyIsEnumerableModule = __webpack_require__(6337);
var createPropertyDescriptor = __webpack_require__(3768);
var toIndexedObject = __webpack_require__(9441);
var toPropertyKey = __webpack_require__(5141);
var hasOwn = __webpack_require__(4373);
var IE8_DOM_DEFINE = __webpack_require__(2633);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 3126:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(244);
var toIndexedObject = __webpack_require__(9441);
var $getOwnPropertyNames = (__webpack_require__(2036).f);
var arraySlice = __webpack_require__(8067);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 2036:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(4512);
var enumBugKeys = __webpack_require__(347);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 6841:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 3381:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(9036);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 4512:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(9036);
var hasOwn = __webpack_require__(4373);
var toIndexedObject = __webpack_require__(9441);
var indexOf = (__webpack_require__(4581).indexOf);
var hiddenKeys = __webpack_require__(6145);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 5556:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(4512);
var enumBugKeys = __webpack_require__(347);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 6337:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 5759:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(7104);
var classof = __webpack_require__(5663);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 6034:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var call = __webpack_require__(3057);
var isCallable = __webpack_require__(2073);
var isObject = __webpack_require__(5774);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 7675:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 6438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(8471);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),

/***/ 8890:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 9696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 5051:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(7104);
var defineProperty = (__webpack_require__(6381).f);
var createNonEnumerableProperty = __webpack_require__(8471);
var hasOwn = __webpack_require__(4373);
var toString = __webpack_require__(5759);
var wellKnownSymbol = __webpack_require__(6615);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ 651:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(3557);
var uid = __webpack_require__(7980);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 4993:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var setGlobal = __webpack_require__(9696);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 3557:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(3599);
var store = __webpack_require__(4993);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 8630:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(6759);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 9441:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(6731);
var requireObjectCoercible = __webpack_require__(8890);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 6759:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ 2954:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(6759);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 5809:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var requireObjectCoercible = __webpack_require__(8890);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 5045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var call = __webpack_require__(3057);
var isObject = __webpack_require__(5774);
var isSymbol = __webpack_require__(3969);
var getMethod = __webpack_require__(3514);
var ordinaryToPrimitive = __webpack_require__(6034);
var wellKnownSymbol = __webpack_require__(6615);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 5141:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(5045);
var isSymbol = __webpack_require__(3969);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 7104:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(6615);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 7803:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var classof = __webpack_require__(5663);

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ 4003:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 7980:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(9036);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 1004:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(5852);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 2506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5560);
var fails = __webpack_require__(7131);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 1635:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(6615);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 6615:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(5391);
var shared = __webpack_require__(3557);
var hasOwn = __webpack_require__(4373);
var uid = __webpack_require__(7980);
var NATIVE_SYMBOL = __webpack_require__(5852);
var USE_SYMBOL_AS_UID = __webpack_require__(1004);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 7640:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(1938);
var uncurryThis = __webpack_require__(9036);
var $IndexOf = (__webpack_require__(4581).indexOf);
var arrayMethodIsStrict = __webpack_require__(538);

var un$IndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0
      : $IndexOf(this, searchElement, fromIndex);
  }
});


/***/ }),

/***/ 6889:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(1938);
var assign = __webpack_require__(8593);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 8805:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(1938);
var DESCRIPTORS = __webpack_require__(5560);
var defineProperty = (__webpack_require__(6381).f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ 9676:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(1938);
var toObject = __webpack_require__(5809);
var nativeKeys = __webpack_require__(5556);
var fails = __webpack_require__(7131);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 7375:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(1938);
var global = __webpack_require__(5391);
var getBuiltIn = __webpack_require__(7827);
var apply = __webpack_require__(1981);
var call = __webpack_require__(3057);
var uncurryThis = __webpack_require__(9036);
var IS_PURE = __webpack_require__(3599);
var DESCRIPTORS = __webpack_require__(5560);
var NATIVE_SYMBOL = __webpack_require__(5852);
var fails = __webpack_require__(7131);
var hasOwn = __webpack_require__(4373);
var isArray = __webpack_require__(1972);
var isCallable = __webpack_require__(2073);
var isObject = __webpack_require__(5774);
var isPrototypeOf = __webpack_require__(3381);
var isSymbol = __webpack_require__(3969);
var anObject = __webpack_require__(8347);
var toObject = __webpack_require__(5809);
var toIndexedObject = __webpack_require__(9441);
var toPropertyKey = __webpack_require__(5141);
var $toString = __webpack_require__(7803);
var createPropertyDescriptor = __webpack_require__(3768);
var nativeObjectCreate = __webpack_require__(3628);
var objectKeys = __webpack_require__(5556);
var getOwnPropertyNamesModule = __webpack_require__(2036);
var getOwnPropertyNamesExternal = __webpack_require__(3126);
var getOwnPropertySymbolsModule = __webpack_require__(6841);
var getOwnPropertyDescriptorModule = __webpack_require__(5687);
var definePropertyModule = __webpack_require__(6381);
var definePropertiesModule = __webpack_require__(9157);
var propertyIsEnumerableModule = __webpack_require__(6337);
var arraySlice = __webpack_require__(820);
var redefine = __webpack_require__(6438);
var shared = __webpack_require__(3557);
var sharedKey = __webpack_require__(651);
var hiddenKeys = __webpack_require__(6145);
var uid = __webpack_require__(7980);
var wellKnownSymbol = __webpack_require__(6615);
var wrappedWellKnownSymbolModule = __webpack_require__(1635);
var defineWellKnownSymbol = __webpack_require__(8643);
var setToStringTag = __webpack_require__(5051);
var InternalStateModule = __webpack_require__(9257);
var $forEach = (__webpack_require__(2217).forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 6473:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(2342);

module.exports = parent;


/***/ }),

/***/ 5926:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(5933);

module.exports = parent;


/***/ }),

/***/ 6368:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(8825);

module.exports = parent;


/***/ }),

/***/ 6158:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(9069);

module.exports = parent;


/***/ }),

/***/ 3959:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(9768);

module.exports = parent;


/***/ }),

/***/ 5473:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(4343);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),

/***/ 4343:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.parse = __webpack_require__(5776);
exports.stringify = __webpack_require__(9086);


/***/ }),

/***/ 5776:
/***/ (function(module) {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),

/***/ 9086:
/***/ (function(module) {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),

/***/ 181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ 7654:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;


/***/ }),

/***/ 9797:
/***/ (function(module) {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, mac, networkInterfaces; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ index_npm; }
});

// NAMESPACE OBJECT: ./node_modules/@sentry/core/esm/integrations/index.js
var integrations_namespaceObject = {};
__webpack_require__.r(integrations_namespaceObject);
__webpack_require__.d(integrations_namespaceObject, {
  FunctionToString: function() { return FunctionToString; },
  InboundFilters: function() { return InboundFilters; }
});

// NAMESPACE OBJECT: ./node_modules/@sentry/browser/esm/integrations/index.js
var esm_integrations_namespaceObject = {};
__webpack_require__.r(esm_integrations_namespaceObject);
__webpack_require__.d(esm_integrations_namespaceObject, {
  Breadcrumbs: function() { return Breadcrumbs; },
  Dedupe: function() { return Dedupe; },
  GlobalHandlers: function() { return GlobalHandlers; },
  LinkedErrors: function() { return LinkedErrors; },
  TryCatch: function() { return TryCatch; },
  UserAgent: function() { return UserAgent; }
});

// NAMESPACE OBJECT: ./node_modules/@sentry/browser/esm/index.js
var browser_esm_namespaceObject = {};
__webpack_require__.r(browser_esm_namespaceObject);
__webpack_require__.d(browser_esm_namespaceObject, {
  yu: function() { return BrowserClient; },
  IQ: function() { return INTEGRATIONS; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js
var define_property = __webpack_require__(7293);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(181);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
;// CONCATENATED MODULE: ./node_modules/preact/dist/preact.module.js
var n,l,u,i,t,r,o,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function v(n,l,u){var i,t=arguments,r={};for(i in l)"key"!==i&&"ref"!==i&&(r[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(r.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===r[i]&&(r[i]=n.defaultProps[i]);return h(n,r,l&&l.key,l&&l.ref,null)}function h(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(o.__v=o),n.vnode&&n.vnode(o),o}function y(){return{current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?_(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function w(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m)}function m(){for(var n;m.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o,f;n.__d&&(o=(r=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},r)).__v=i,t=T(f,r,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==o?_(r):o),$(u,r),t!=o&&k(r)))})}function g(n,l,u,i,t,r,o,c,s,v){var y,d,k,w,m,g,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=o?o[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(w=u.__k[y]=null==(w=l[y])||"boolean"==typeof w?null:"string"==typeof w||"number"==typeof w?h(null,w,null,null,w):Array.isArray(w)?h(p,{children:w},null,null,null):null!=w.__e||null!=w.__c?h(w.type,w.props,w.key,null,w.__v):w)){if(w.__=u,w.__b=u.__b+1,null===(k=A[y])||k&&w.key==k.key&&w.type===k.type)A[y]=void 0;else for(d=0;d<P;d++){if((k=A[d])&&w.key==k.key&&w.type===k.type){A[d]=void 0;break}k=null}m=T(n,w,k=k||f,t,r,o,c,s,v),(d=w.ref)&&k.ref!=d&&(b||(b=[]),k.ref&&b.push(k.ref,null,w),b.push(d,w.__c||m,w)),null!=m?(null==g&&(g=m),s=x(n,w,k,A,o,m,s),"option"==u.type?n.value="":"function"==typeof u.type&&(u.__d=s)):s&&k.__e==s&&s.parentNode!=n&&(s=_(k))}if(u.__e=g,null!=o&&"function"!=typeof u.type)for(y=o.length;y--;)null!=o[y]&&a(o[y]);for(y=P;y--;)null!=A[y]&&I(A[y],A[y]);if(b)for(y=0;y<b.length;y++)H(b[y],b[++y],b[++y])}function b(n){return null==n||"boolean"==typeof n?[]:Array.isArray(n)?e.concat.apply([],n.map(b)):[n]}function x(n,l,u,i,t,r,o){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||r!=o||null==r.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(r),f=null;else{for(e=o,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==r)break n;n.insertBefore(r,o),f=o}return void 0!==f?f:r.nextSibling}function A(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||C(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||C(n,r,l[r],u[r],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function C(n,l,u,i,t){var r,o,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l)if(r=n.style,"string"==typeof u)r.cssText=u;else{if("string"==typeof i&&(r.cssText="",i=null),i)for(e in i)u&&e in u||P(r,e,"");if(u)for(c in u)i&&u[c]===i[c]||P(r,c,u[c])}else"o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,N,o),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function z(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&z(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)))}function T(l,u,i,t,r,o,f,e,c){var a,v,h,y,_,k,w,m,b,x,A,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(m=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?w=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(m,x):(u.__c=v=new d(m,x),v.constructor=P,v.render=L),b&&b.sub(v),v.props=m,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(m,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(m,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(m,v.__s,x)||u.__v===i.__v){v.props=m,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),z(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(m,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,k)})}v.context=x,v.props=m,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,g(l,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),w&&(v.__E=v.__=null),v.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,r,o,f,c);(a=n.diffed)&&a(u)}catch(l){u.__v=null,n.__e(l,u,i)}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,r,o,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=r)for(s=0;s<r.length;s++)if(null!=(a=r[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,r[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),r=null,c=!1}if(null===l.type)p!==d&&n.data!=d&&(n.data=d);else{if(null!=r&&(r=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=r)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""))}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,g(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,r,o,f,c)),c||("value"in d&&void 0!==(s=d.value)&&s!==n.value&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1))}return n}function H(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function I(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||H(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(o=0;o<t.length;o++)t[o]&&I(t[o],u,i);null!=r&&a(r)}function L(n,l,u){return this.constructor(n,u)}function M(l,u,i){var t,o,c;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],T(u,(t?u:i||u).__k=l,o||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),$(c,l)}function O(n,l){M(n,l,r)}function S(n,l){var u,i;for(i in l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),u={},l)"key"!==i&&"ref"!==i&&(u[i]=l[i]);return h(n.type,u,l.key||n.key,l.ref||n.ref,null)}function q(n){var l={},u={__c:"__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(n){t.props.value!==n.value&&i.some(function(l){l.context=n.value,w(l)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u.Provider.__=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return w(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),w(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this))},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,r=f,o=0;
//# sourceMappingURL=preact.module.js.map

;// CONCATENATED MODULE: ./src/client/lib/contexts.ts

const StoreContext = q(null);
const MessageServiceContext = q(null);
;// CONCATENATED MODULE: ./src/common/helpers/errors.ts
/**
 * Creates a standardized Error type for Ada Embed.
 */
class AdaEmbedError extends Error {
  constructor(message) {
    super(message);
    this.name = "AdaEmbedError";
  }
}

/**
 * This is needed to ensure we standardize warnings we expose to the client.
 */
function warn(warningText) {
  // Nothing meaningful to warn about.
  if (!warningText) {
    return;
  }

  // Capitalize
  let text = warningText.charAt(0).toUpperCase() + warningText.slice(1);
  const lastChar = text.charAt(text.length - 1);
  const acceptedLastChars = [".", "?", "!"];

  // Add period if one wasn't added
  if (!acceptedLastChars.includes(lastChar)) {
    text = `${text}.`;
  }
  console.warn(`Ada Embed - ${text}`);
}
// EXTERNAL MODULE: ./node_modules/uniqid/index.js
var uniqid = __webpack_require__(9797);
var uniqid_default = /*#__PURE__*/__webpack_require__.n(uniqid);
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
    tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_es6_assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/version.js
var SDK_VERSION = '6.17.1';
//# sourceMappingURL=version.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var tslib_es6_extendStatics = function(d, b) {
    tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return tslib_es6_extendStatics(d, b);
};

function tslib_es6_extends(d, b) {
    tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_tslib_es6_assign = function() {
    tslib_tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_tslib_es6_assign.apply(this, arguments);
}

function tslib_es6_rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function tslib_es6_generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function tslib_es6_exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function tslib_es6_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function tslib_es6_read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function tslib_tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(tslib_es6_read(arguments[i]));
    return ar;
}

function tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function tslib_es6_await(v) {
    return this instanceof tslib_es6_await ? (this.v = v, this) : new tslib_es6_await(v);
}

function tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof tslib_es6_values === "function" ? tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function tslib_es6_classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function tslib_es6_classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/@sentry/hub/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var tslib_tslib_es6_extendStatics = function(d, b) {
    tslib_tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return tslib_tslib_es6_extendStatics(d, b);
};

function tslib_tslib_es6_extends(d, b) {
    tslib_tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var node_modules_tslib_tslib_es6_assign = function() {
    node_modules_tslib_tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return node_modules_tslib_tslib_es6_assign.apply(this, arguments);
}

function tslib_tslib_es6_rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function tslib_tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function tslib_tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function tslib_tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function tslib_tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function tslib_tslib_es6_generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function tslib_tslib_es6_exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function tslib_tslib_es6_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function tslib_tslib_es6_read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function node_modules_tslib_tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(tslib_tslib_es6_read(arguments[i]));
    return ar;
}

function tslib_tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function tslib_tslib_es6_await(v) {
    return this instanceof tslib_tslib_es6_await ? (this.v = v, this) : new tslib_tslib_es6_await(v);
}

function tslib_tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof tslib_tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function tslib_tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: tslib_tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function tslib_tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof tslib_tslib_es6_values === "function" ? tslib_tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function tslib_tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function tslib_tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function tslib_tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function tslib_tslib_es6_classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function tslib_tslib_es6_classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/is.js
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/unbound-method
var objectToString = Object.prototype.toString;
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (objectToString.call(wat)) {
        case '[object Error]':
        case '[object Exception]':
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
function isBuiltin(wat, ty) {
    return objectToString.call(wat) === "[object " + ty + "]";
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return isBuiltin(wat, 'ErrorEvent');
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return isBuiltin(wat, 'DOMError');
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return isBuiltin(wat, 'DOMException');
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return isBuiltin(wat, 'String');
}
/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function is_isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return isBuiltin(wat, 'Object');
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return isBuiltin(wat, 'RegExp');
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat && wat.then && typeof wat.then === 'function');
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    }
    catch (_e) {
        return false;
    }
}
//# sourceMappingURL=is.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/time.js
var time = __webpack_require__(9297);
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/syncpromise.js
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */
function resolvedSyncPromise(value) {
    return new SyncPromise(function (resolve) {
        resolve(value);
    });
}
/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */
function rejectedSyncPromise(reason) {
    return new SyncPromise(function (_, reject) {
        reject(reason);
    });
}
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
var SyncPromise = /** @class */ (function () {
    function SyncPromise(executor) {
        var _this = this;
        this._state = 0 /* PENDING */;
        this._handlers = [];
        /** JSDoc */
        this._resolve = function (value) {
            _this._setResult(1 /* RESOLVED */, value);
        };
        /** JSDoc */
        this._reject = function (reason) {
            _this._setResult(2 /* REJECTED */, reason);
        };
        /** JSDoc */
        this._setResult = function (state, value) {
            if (_this._state !== 0 /* PENDING */) {
                return;
            }
            if (isThenable(value)) {
                void value.then(_this._resolve, _this._reject);
                return;
            }
            _this._state = state;
            _this._value = value;
            _this._executeHandlers();
        };
        /** JSDoc */
        this._executeHandlers = function () {
            if (_this._state === 0 /* PENDING */) {
                return;
            }
            var cachedHandlers = _this._handlers.slice();
            _this._handlers = [];
            cachedHandlers.forEach(function (handler) {
                if (handler[0]) {
                    return;
                }
                if (_this._state === 1 /* RESOLVED */) {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    handler[1](_this._value);
                }
                if (_this._state === 2 /* REJECTED */) {
                    handler[2](_this._value);
                }
                handler[0] = true;
            });
        };
        try {
            executor(this._resolve, this._reject);
        }
        catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */
    SyncPromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            _this._handlers.push([
                false,
                function (result) {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                    }
                    else {
                        try {
                            resolve(onfulfilled(result));
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                },
                function (reason) {
                    if (!onrejected) {
                        reject(reason);
                    }
                    else {
                        try {
                            resolve(onrejected(reason));
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                },
            ]);
            _this._executeHandlers();
        });
    };
    /** JSDoc */
    SyncPromise.prototype.catch = function (onrejected) {
        return this.then(function (val) { return val; }, onrejected);
    };
    /** JSDoc */
    SyncPromise.prototype.finally = function (onfinally) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            var val;
            var isRejected;
            return _this.then(function (value) {
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, function (reason) {
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(function () {
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    };
    return SyncPromise;
}());

//# sourceMappingURL=syncpromise.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/global.js
var esm_global = __webpack_require__(6475);
;// CONCATENATED MODULE: ./node_modules/@sentry/hub/esm/scope.js


/**
 * Absolute maximum number of breadcrumbs added to an event.
 * The `maxBreadcrumbs` option cannot be higher than this value.
 */
var MAX_BREADCRUMBS = 100;
/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope = /** @class */ (function () {
    function Scope() {
        /** Flag if notifying is happening. */
        this._notifyingListeners = false;
        /** Callback for client to receive scope changes. */
        this._scopeListeners = [];
        /** Callback list that will be called after {@link applyToEvent}. */
        this._eventProcessors = [];
        /** Array of breadcrumbs. */
        this._breadcrumbs = [];
        /** User */
        this._user = {};
        /** Tags */
        this._tags = {};
        /** Extra */
        this._extra = {};
        /** Contexts */
        this._contexts = {};
        /**
         * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
         * sent to Sentry
         */
        this._sdkProcessingMetadata = {};
    }
    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
    Scope.clone = function (scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = node_modules_tslib_tslib_es6_spread(scope._breadcrumbs);
            newScope._tags = node_modules_tslib_tslib_es6_assign({}, scope._tags);
            newScope._extra = node_modules_tslib_tslib_es6_assign({}, scope._extra);
            newScope._contexts = node_modules_tslib_tslib_es6_assign({}, scope._contexts);
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._session = scope._session;
            newScope._transactionName = scope._transactionName;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = node_modules_tslib_tslib_es6_spread(scope._eventProcessors);
            newScope._requestSession = scope._requestSession;
        }
        return newScope;
    };
    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
    Scope.prototype.addScopeListener = function (callback) {
        this._scopeListeners.push(callback);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addEventProcessor = function (callback) {
        this._eventProcessors.push(callback);
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setUser = function (user) {
        this._user = user || {};
        if (this._session) {
            this._session.update({ user: user });
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getUser = function () {
        return this._user;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getRequestSession = function () {
        return this._requestSession;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setRequestSession = function (requestSession) {
        this._requestSession = requestSession;
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTags = function (tags) {
        this._tags = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._tags), tags);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTag = function (key, value) {
        var _a;
        this._tags = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._tags), (_a = {}, _a[key] = value, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtras = function (extras) {
        this._extra = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._extra), extras);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtra = function (key, extra) {
        var _a;
        this._extra = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._extra), (_a = {}, _a[key] = extra, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setFingerprint = function (fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setLevel = function (level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTransactionName = function (name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Can be removed in major version.
     * @deprecated in favor of {@link this.setTransactionName}
     */
    Scope.prototype.setTransaction = function (name) {
        return this.setTransactionName(name);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setContext = function (key, context) {
        var _a;
        if (context === null) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this._contexts[key];
        }
        else {
            this._contexts = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._contexts), (_a = {}, _a[key] = context, _a));
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSpan = function (span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSpan = function () {
        return this._span;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getTransaction = function () {
        // Often, this span (if it exists at all) will be a transaction, but it's not guaranteed to be. Regardless, it will
        // have a pointer to the currently-active transaction.
        var span = this.getSpan();
        return span && span.transaction;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSession = function (session) {
        if (!session) {
            delete this._session;
        }
        else {
            this._session = session;
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSession = function () {
        return this._session;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.update = function (captureContext) {
        if (!captureContext) {
            return this;
        }
        if (typeof captureContext === 'function') {
            var updatedScope = captureContext(this);
            return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
            this._tags = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._tags), captureContext._tags);
            this._extra = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._extra), captureContext._extra);
            this._contexts = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._contexts), captureContext._contexts);
            if (captureContext._user && Object.keys(captureContext._user).length) {
                this._user = captureContext._user;
            }
            if (captureContext._level) {
                this._level = captureContext._level;
            }
            if (captureContext._fingerprint) {
                this._fingerprint = captureContext._fingerprint;
            }
            if (captureContext._requestSession) {
                this._requestSession = captureContext._requestSession;
            }
        }
        else if (isPlainObject(captureContext)) {
            // eslint-disable-next-line no-param-reassign
            captureContext = captureContext;
            this._tags = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._tags), captureContext.tags);
            this._extra = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._extra), captureContext.extra);
            this._contexts = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._contexts), captureContext.contexts);
            if (captureContext.user) {
                this._user = captureContext.user;
            }
            if (captureContext.level) {
                this._level = captureContext.level;
            }
            if (captureContext.fingerprint) {
                this._fingerprint = captureContext.fingerprint;
            }
            if (captureContext.requestSession) {
                this._requestSession = captureContext.requestSession;
            }
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clear = function () {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._requestSession = undefined;
        this._span = undefined;
        this._session = undefined;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
        var maxCrumbs = typeof maxBreadcrumbs === 'number' ? Math.min(maxBreadcrumbs, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
        // No data has been changed, so don't notify scope listeners
        if (maxCrumbs <= 0) {
            return this;
        }
        var mergedBreadcrumb = node_modules_tslib_tslib_es6_assign({ timestamp: (0,time/* dateTimestampInSeconds */.lu)() }, breadcrumb);
        this._breadcrumbs = node_modules_tslib_tslib_es6_spread(this._breadcrumbs, [mergedBreadcrumb]).slice(-maxCrumbs);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clearBreadcrumbs = function () {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event Event
     * @param hint May contain additional information about the original exception.
     * @hidden
     */
    Scope.prototype.applyToEvent = function (event, hint) {
        if (this._extra && Object.keys(this._extra).length) {
            event.extra = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._extra), event.extra);
        }
        if (this._tags && Object.keys(this._tags).length) {
            event.tags = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._tags), event.tags);
        }
        if (this._user && Object.keys(this._user).length) {
            event.user = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._user), event.user);
        }
        if (this._contexts && Object.keys(this._contexts).length) {
            event.contexts = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._contexts), event.contexts);
        }
        if (this._level) {
            event.level = this._level;
        }
        if (this._transactionName) {
            event.transaction = this._transactionName;
        }
        // We want to set the trace context for normal events only if there isn't already
        // a trace context on the event. There is a product feature in place where we link
        // errors with transaction and it relies on that.
        if (this._span) {
            event.contexts = node_modules_tslib_tslib_es6_assign({ trace: this._span.getTraceContext() }, event.contexts);
            var transactionName = this._span.transaction && this._span.transaction.name;
            if (transactionName) {
                event.tags = node_modules_tslib_tslib_es6_assign({ transaction: transactionName }, event.tags);
            }
        }
        this._applyFingerprint(event);
        event.breadcrumbs = node_modules_tslib_tslib_es6_spread((event.breadcrumbs || []), this._breadcrumbs);
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        event.sdkProcessingMetadata = this._sdkProcessingMetadata;
        return this._notifyEventProcessors(node_modules_tslib_tslib_es6_spread(getGlobalEventProcessors(), this._eventProcessors), event, hint);
    };
    /**
     * Add data which will be accessible during event processing but won't get sent to Sentry
     */
    Scope.prototype.setSDKProcessingMetadata = function (newData) {
        this._sdkProcessingMetadata = node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, this._sdkProcessingMetadata), newData);
        return this;
    };
    /**
     * This will be called after {@link applyToEvent} is finished.
     */
    Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        return new SyncPromise(function (resolve, reject) {
            var processor = processors[index];
            if (event === null || typeof processor !== 'function') {
                resolve(event);
            }
            else {
                var result = processor(node_modules_tslib_tslib_es6_assign({}, event), hint);
                if (isThenable(result)) {
                    void result
                        .then(function (final) { return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve); })
                        .then(null, reject);
                }
                else {
                    void _this._notifyEventProcessors(processors, result, hint, index + 1)
                        .then(resolve)
                        .then(null, reject);
                }
            }
        });
    };
    /**
     * This will be called on every set call.
     */
    Scope.prototype._notifyScopeListeners = function () {
        var _this = this;
        // We need this check for this._notifyingListeners to be able to work on scope during updates
        // If this check is not here we'll produce endless recursion when something is done with the scope
        // during the callback.
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach(function (callback) {
                callback(_this);
            });
            this._notifyingListeners = false;
        }
    };
    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
    Scope.prototype._applyFingerprint = function (event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint
            ? Array.isArray(event.fingerprint)
                ? event.fingerprint
                : [event.fingerprint]
            : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) {
            event.fingerprint = event.fingerprint.concat(this._fingerprint);
        }
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) {
            delete event.fingerprint;
        }
    };
    return Scope;
}());

/**
 * Returns the global event processors.
 */
function getGlobalEventProcessors() {
    /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access  */
    var global = (0,esm_global/* getGlobalObject */.V)();
    global.__SENTRY__ = global.__SENTRY__ || {};
    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
    return global.__SENTRY__.globalEventProcessors;
    /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}
//# sourceMappingURL=scope.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var node_modules_tslib_tslib_es6_extendStatics = function(d, b) {
    node_modules_tslib_tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return node_modules_tslib_tslib_es6_extendStatics(d, b);
};

function node_modules_tslib_tslib_es6_extends(d, b) {
    node_modules_tslib_tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var utils_node_modules_tslib_tslib_es6_assign = function() {
    utils_node_modules_tslib_tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return utils_node_modules_tslib_tslib_es6_assign.apply(this, arguments);
}

function node_modules_tslib_tslib_es6_rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function node_modules_tslib_tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function node_modules_tslib_tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function node_modules_tslib_tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function node_modules_tslib_tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function node_modules_tslib_tslib_es6_generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function node_modules_tslib_tslib_es6_exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function node_modules_tslib_tslib_es6_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function node_modules_tslib_tslib_es6_read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function utils_node_modules_tslib_tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(node_modules_tslib_tslib_es6_read(arguments[i]));
    return ar;
}

function node_modules_tslib_tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function node_modules_tslib_tslib_es6_await(v) {
    return this instanceof node_modules_tslib_tslib_es6_await ? (this.v = v, this) : new node_modules_tslib_tslib_es6_await(v);
}

function node_modules_tslib_tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof node_modules_tslib_tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function node_modules_tslib_tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: node_modules_tslib_tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function node_modules_tslib_tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof node_modules_tslib_tslib_es6_values === "function" ? node_modules_tslib_tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function node_modules_tslib_tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function node_modules_tslib_tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function node_modules_tslib_tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function node_modules_tslib_tslib_es6_classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function node_modules_tslib_tslib_es6_classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/env.js
var env = __webpack_require__(8341);
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/polyfill.js
var setPrototypeOf = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
/**
 * setPrototypeOf polyfill using __proto__
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function setProtoOf(obj, proto) {
    // @ts-ignore __proto__ does not exist on obj
    obj.__proto__ = proto;
    return obj;
}
/**
 * setPrototypeOf polyfill using mixin
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function mixinProperties(obj, proto) {
    for (var prop in proto) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
            // @ts-ignore typescript complains about indexing so we remove
            obj[prop] = proto[prop];
        }
    }
    return obj;
}
//# sourceMappingURL=polyfill.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/error.js


/** An error emitted by Sentry SDKs and related utilities. */
var SentryError = /** @class */ (function (_super) {
    node_modules_tslib_tslib_es6_extends(SentryError, _super);
    function SentryError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _newTarget.prototype.constructor.name;
        setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return SentryError;
}(Error));

//# sourceMappingURL=error.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/dsn.js



/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
    return protocol === 'http' || protocol === 'https';
}
/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */
function dsnToString(dsn, withPassword) {
    if (withPassword === void 0) { withPassword = false; }
    var host = dsn.host, path = dsn.path, pass = dsn.pass, port = dsn.port, projectId = dsn.projectId, protocol = dsn.protocol, publicKey = dsn.publicKey;
    return (protocol + "://" + publicKey + (withPassword && pass ? ":" + pass : '') +
        ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
}
function dsnFromString(str) {
    var match = DSN_REGEX.exec(str);
    if (!match) {
        throw new SentryError("Invalid Sentry Dsn: " + str);
    }
    var _a = node_modules_tslib_tslib_es6_read(match.slice(1), 6), protocol = _a[0], publicKey = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
    var path = '';
    var projectId = lastPath;
    var split = projectId.split('/');
    if (split.length > 1) {
        path = split.slice(0, -1).join('/');
        projectId = split.pop();
    }
    if (projectId) {
        var projectMatch = projectId.match(/^\d+/);
        if (projectMatch) {
            projectId = projectMatch[0];
        }
    }
    return dsnFromComponents({ host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, publicKey: publicKey });
}
function dsnFromComponents(components) {
    // TODO this is for backwards compatibility, and can be removed in a future version
    if ('user' in components && !('publicKey' in components)) {
        components.publicKey = components.user;
    }
    return {
        user: components.publicKey || '',
        protocol: components.protocol,
        publicKey: components.publicKey || '',
        pass: components.pass || '',
        host: components.host,
        port: components.port || '',
        path: components.path || '',
        projectId: components.projectId,
    };
}
function validateDsn(dsn) {
    if (!(0,env/* isDebugBuild */.a)()) {
        return;
    }
    var port = dsn.port, projectId = dsn.projectId, protocol = dsn.protocol;
    var requiredComponents = ['protocol', 'publicKey', 'host', 'projectId'];
    requiredComponents.forEach(function (component) {
        if (!dsn[component]) {
            throw new SentryError("Invalid Sentry Dsn: " + component + " missing");
        }
    });
    if (!projectId.match(/^\d+$/)) {
        throw new SentryError("Invalid Sentry Dsn: Invalid projectId " + projectId);
    }
    if (!isValidProtocol(protocol)) {
        throw new SentryError("Invalid Sentry Dsn: Invalid protocol " + protocol);
    }
    if (port && isNaN(parseInt(port, 10))) {
        throw new SentryError("Invalid Sentry Dsn: Invalid port " + port);
    }
    return true;
}
/** The Sentry Dsn, identifying a Sentry instance and project. */
function makeDsn(from) {
    var components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
    validateDsn(components);
    return components;
}
//# sourceMappingURL=dsn.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/browser.js


/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem, keyAttrs) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        var currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        var height = 0;
        var len = 0;
        var separator = ' > ';
        var sepLength = separator.length;
        var nextStr = void 0;
        // eslint-disable-next-line no-plusplus
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    }
    catch (_oO) {
        return '<unknown>';
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
    var elem = el;
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    var keyAttrPairs = keyAttrs && keyAttrs.length
        ? keyAttrs.filter(function (keyAttr) { return elem.getAttribute(keyAttr); }).map(function (keyAttr) { return [keyAttr, elem.getAttribute(keyAttr)]; })
        : null;
    if (keyAttrPairs && keyAttrPairs.length) {
        keyAttrPairs.forEach(function (keyAttrPair) {
            out.push("[" + keyAttrPair[0] + "=\"" + keyAttrPair[1] + "\"]");
        });
    }
    else {
        if (elem.id) {
            out.push("#" + elem.id);
        }
        // eslint-disable-next-line prefer-const
        className = elem.className;
        if (className && isString(className)) {
            classes = className.split(/\s+/);
            for (i = 0; i < classes.length; i++) {
                out.push("." + classes[i]);
            }
        }
    }
    var allowedAttrs = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < allowedAttrs.length; i++) {
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
/**
 * A safe form of location.href
 */
function getLocationHref() {
    var global = (0,esm_global/* getGlobalObject */.V)();
    try {
        return global.document.location.href;
    }
    catch (oO) {
        return '';
    }
}
//# sourceMappingURL=browser.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/memo.js
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Helper to decycle json objects
 */
function memoBuilder() {
    var hasWeakSet = typeof WeakSet === 'function';
    var inner = hasWeakSet ? new WeakSet() : [];
    function memoize(obj) {
        if (hasWeakSet) {
            if (inner.has(obj)) {
                return true;
            }
            inner.add(obj);
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (var i = 0; i < inner.length; i++) {
            var value = inner[i];
            if (value === obj) {
                return true;
            }
        }
        inner.push(obj);
        return false;
    }
    function unmemoize(obj) {
        if (hasWeakSet) {
            inner.delete(obj);
        }
        else {
            for (var i = 0; i < inner.length; i++) {
                if (inner[i] === obj) {
                    inner.splice(i, 1);
                    break;
                }
            }
        }
    }
    return [memoize, unmemoize];
}
//# sourceMappingURL=memo.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/stacktrace.js
var defaultFunctionName = '<anonymous>';
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== 'function') {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
//# sourceMappingURL=stacktrace.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/string.js

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    if (typeof str !== 'string' || max === 0) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function string_snipLine(line, colno) {
    var newLine = line;
    var lineLength = newLine.length;
    if (lineLength <= 150) {
        return newLine;
    }
    if (colno > lineLength) {
        // eslint-disable-next-line no-param-reassign
        colno = lineLength;
    }
    var start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    var end = Math.min(start + 140, lineLength);
    if (end > lineLength - 5) {
        end = lineLength;
    }
    if (end === lineLength) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = "'{snip} " + newLine;
    }
    if (end < lineLength) {
        newLine += ' {snip}';
    }
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
    if (!isString(value)) {
        return false;
    }
    if (isRegExp(pattern)) {
        return pattern.test(value);
    }
    if (typeof pattern === 'string') {
        return value.indexOf(pattern) !== -1;
    }
    return false;
}
/**
 * Given a string, escape characters which have meaning in the regex grammar, such that the result is safe to feed to
 * `new RegExp()`.
 *
 * Based on https://github.com/sindresorhus/escape-string-regexp. Vendored to a) reduce the size by skipping the runtime
 * type-checking, and b) ensure it gets down-compiled for old versions of Node (the published package only supports Node
 * 12+).
 *
 * @param regexString The string to escape
 * @returns An version of the string with all special regex characters escaped
 */
function escapeStringForRegex(regexString) {
    // escape the hyphen separately so we can also replace it with a unicode literal hyphen, to avoid the problems
    // discussed in https://github.com/sindresorhus/escape-string-regexp/issues/20.
    return regexString.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
//# sourceMappingURL=string.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/object.js






/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacementFactory(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === 'function') {
        try {
            markFunctionWrapped(wrapped, original);
        }
        catch (_Oo) {
            // This can throw if multiple fill happens on a global object like XMLHttpRequest
            // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
        }
    }
    source[name] = wrapped;
}
/**
 * Defines a non enumerable property.  This creates a non enumerable property on an object.
 *
 * @param func The function to set a property to
 * @param name the name of the special sentry property
 * @param value the property to define
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function addNonEnumerableProperty(func, name, value) {
    Object.defineProperty(func, name, {
        value: value,
    });
}
/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */
function markFunctionWrapped(wrapped, original) {
    var proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, '__sentry_original__', original);
}
/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */
function getOriginalFunction(func) {
    return func.__sentry_original__;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
/**
 * Transforms any object into an object literal with all its attributes
 * attached to it.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 */
function getWalkSource(value) {
    if (isError(value)) {
        var error = value;
        var err = {
            message: error.message,
            name: error.name,
            stack: error.stack,
        };
        for (var i in error) {
            if (Object.prototype.hasOwnProperty.call(error, i)) {
                err[i] = error[i];
            }
        }
        return err;
    }
    if (isEvent(value)) {
        var event_1 = value;
        var source = {};
        // Accessing event attributes can throw (see https://github.com/getsentry/sentry-javascript/issues/768 and
        // https://github.com/getsentry/sentry-javascript/issues/838), but accessing `type` hasn't been wrapped in a
        // try-catch in at least two years and no one's complained, so that's likely not an issue anymore
        source.type = event_1.type;
        try {
            source.target = isElement(event_1.target)
                ? htmlTreeAsString(event_1.target)
                : Object.prototype.toString.call(event_1.target);
        }
        catch (_oO) {
            source.target = '<unknown>';
        }
        try {
            source.currentTarget = isElement(event_1.currentTarget)
                ? htmlTreeAsString(event_1.currentTarget)
                : Object.prototype.toString.call(event_1.currentTarget);
        }
        catch (_oO) {
            source.currentTarget = '<unknown>';
        }
        if (typeof CustomEvent !== 'undefined' && isInstanceOf(value, CustomEvent)) {
            source.detail = event_1.detail;
        }
        for (var attr in event_1) {
            if (Object.prototype.hasOwnProperty.call(event_1, attr)) {
                source[attr] = event_1[attr];
            }
        }
        return source;
    }
    return value;
}
/** Calculates bytes size of input string */
function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/** JSDoc */
function normalizeToSize(object, 
// Default Node.js REPL depth
depth, 
// 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize) {
    if (depth === void 0) { depth = 3; }
    if (maxSize === void 0) { maxSize = 100 * 1024; }
    var serialized = normalize(object, depth);
    if (jsonSize(serialized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return serialized;
}
/**
 * Transform any non-primitive, BigInt, or Symbol-type value into a string. Acts as a no-op on strings, numbers,
 * booleans, null, and undefined.
 *
 * @param value The value to stringify
 * @returns For non-primitive, BigInt, and Symbol-type values, a string denoting the value's type, type and value, or
 *  type and `description` property, respectively. For non-BigInt, non-Symbol primitives, returns the original value,
 *  unchanged.
 */
function serializeValue(value) {
    // Node.js REPL notation
    if (typeof value === 'string') {
        return value;
    }
    var type = Object.prototype.toString.call(value);
    if (type === '[object Object]') {
        return '[Object]';
    }
    if (type === '[object Array]') {
        return '[Array]';
    }
    var normalized = normalizeValue(value);
    return is_isPrimitive(normalized) ? normalized : type;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
function normalizeValue(value, key) {
    if (key === 'domain' && value && typeof value === 'object' && value._events) {
        return '[Domain]';
    }
    if (key === 'domainEmitter') {
        return '[DomainEmitter]';
    }
    if (typeof __webpack_require__.g !== 'undefined' && value === __webpack_require__.g) {
        return '[Global]';
    }
    // It's safe to use `window` and `document` here in this manner, as we are asserting using `typeof` first
    // which won't throw if they are not present.
    // eslint-disable-next-line no-restricted-globals
    if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
    }
    // eslint-disable-next-line no-restricted-globals
    if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
    }
    // React's SyntheticEvent thingy
    if (isSyntheticEvent(value)) {
        return '[SyntheticEvent]';
    }
    if (typeof value === 'number' && value !== value) {
        return '[NaN]';
    }
    if (value === void 0) {
        return '[undefined]';
    }
    if (typeof value === 'function') {
        return "[Function: " + getFunctionName(value) + "]";
    }
    // symbols and bigints are considered primitives by TS, but aren't natively JSON-serilaizable
    if (typeof value === 'symbol') {
        return "[" + String(value) + "]";
    }
    if (typeof value === 'bigint') {
        return "[BigInt: " + String(value) + "]";
    }
    return value;
}
/**
 * Walks an object to perform a normalization on it
 *
 * @param key of object that's walked in current iteration
 * @param value object to be walked
 * @param depth Optional number indicating how deep should walking be performed
 * @param memo Optional Memo class handling decycling
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function walk(key, value, depth, memo) {
    if (depth === void 0) { depth = +Infinity; }
    if (memo === void 0) { memo = memoBuilder(); }
    // If we reach the maximum depth, serialize whatever is left
    if (depth === 0) {
        return serializeValue(value);
    }
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // If value implements `toJSON` method, call it and return early
    if (value !== null && value !== undefined && typeof value.toJSON === 'function') {
        return value.toJSON();
    }
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    // If normalized value is a primitive, there are no branches left to walk, so bail out
    var normalized = normalizeValue(value, key);
    if (is_isPrimitive(normalized)) {
        return normalized;
    }
    // Create source that we will use for the next iteration. It will either be an objectified error object (`Error` type
    // with extracted key:value pairs) or the input itself.
    var source = getWalkSource(value);
    // Create an accumulator that will act as a parent for all future itterations of that branch
    var acc = Array.isArray(value) ? [] : {};
    // If we already walked that branch, bail out, as it's circular reference
    if (memo[0](value)) {
        return '[Circular ~]';
    }
    // Walk all keys of the source
    for (var innerKey in source) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(source, innerKey)) {
            continue;
        }
        // Recursively walk through all the child nodes
        acc[innerKey] = walk(innerKey, source[innerKey], depth - 1, memo);
    }
    // Once walked through all the branches, remove the parent from memo storage
    memo[1](value);
    // Return accumulated values
    return acc;
}
/**
 * normalize()
 *
 * - Creates a copy to prevent original input mutation
 * - Skip non-enumerablers
 * - Calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializeable values (undefined/NaN/Functions) to serializable format
 * - Translates known global objects/Classes to a string representations
 * - Takes care of Error objects serialization
 * - Optionally limit depth of final output
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function normalize(input, depth) {
    try {
        return JSON.parse(JSON.stringify(input, function (key, value) { return walk(key, value, depth); }));
    }
    catch (_oO) {
        return '**non-serializable**';
    }
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function extractExceptionKeysForMessage(exception, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    var keys = Object.keys(getWalkSource(exception));
    keys.sort();
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return truncate(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return truncate(serialized, maxLength);
    }
    return '';
}
/**
 * Given any object, return the new object with removed keys that value was `undefined`.
 * Works recursively on objects and arrays.
 */
function dropUndefinedKeys(val) {
    var e_1, _a;
    if (isPlainObject(val)) {
        var obj = val;
        var rv = {};
        try {
            for (var _b = node_modules_tslib_tslib_es6_values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (typeof obj[key] !== 'undefined') {
                    rv[key] = dropUndefinedKeys(obj[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rv;
    }
    if (Array.isArray(val)) {
        return val.map(dropUndefinedKeys);
    }
    return val;
}
/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */
function objectify(wat) {
    var objectified;
    switch (true) {
        case wat === undefined || wat === null:
            objectified = new String(wat);
            break;
        // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
        // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
        // an object in order to wrap it.
        case typeof wat === 'symbol' || typeof wat === 'bigint':
            objectified = Object(wat);
            break;
        // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
        case isPrimitive(wat):
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            objectified = new wat.constructor(wat);
            break;
        // by process of elimination, at this point we know that `wat` must already be an object
        default:
            objectified = wat;
            break;
    }
    return objectified;
}
//# sourceMappingURL=object.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/misc.js




/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = (0,esm_global/* getGlobalObject */.V)();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // eslint-disable-next-line no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // eslint-disable-next-line no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
function getFirstException(event) {
    return event.exception && event.exception.values ? event.exception.values[0] : undefined;
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    var message = event.message, eventId = event.event_id;
    if (message) {
        return message;
    }
    var firstException = getFirstException(event);
    if (firstException) {
        if (firstException.type && firstException.value) {
            return firstException.type + ": " + firstException.value;
        }
        return firstException.type || firstException.value || eventId || '<unknown>';
    }
    return eventId || '<unknown>';
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
    var exception = (event.exception = event.exception || {});
    var values = (exception.values = exception.values || []);
    var firstException = (values[0] = values[0] || {});
    if (!firstException.value) {
        firstException.value = value || '';
    }
    if (!firstException.type) {
        firstException.type = type || 'Error';
    }
}
/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
function addExceptionMechanism(event, newMechanism) {
    var firstException = getFirstException(event);
    if (!firstException) {
        return;
    }
    var defaultMechanism = { type: 'generic', handled: true };
    var currentMechanism = firstException.mechanism;
    firstException.mechanism = utils_node_modules_tslib_tslib_es6_assign(utils_node_modules_tslib_tslib_es6_assign(utils_node_modules_tslib_tslib_es6_assign({}, defaultMechanism), currentMechanism), newMechanism);
    if (newMechanism && 'data' in newMechanism) {
        var mergedData = utils_node_modules_tslib_tslib_es6_assign(utils_node_modules_tslib_tslib_es6_assign({}, (currentMechanism && currentMechanism.data)), newMechanism.data);
        firstException.mechanism.data = mergedData;
    }
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
var SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
    var match = input.match(SEMVER_REGEXP) || [];
    var major = parseInt(match[1], 10);
    var minor = parseInt(match[2], 10);
    var patch = parseInt(match[3], 10);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4],
    };
}
var defaultRetryAfter = 60 * 1000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param now current unix timestamp
 * @param header string representation of 'Retry-After' header
 */
function parseRetryAfterHeader(now, header) {
    if (!header) {
        return defaultRetryAfter;
    }
    var headerDelay = parseInt("" + header, 10);
    if (!isNaN(headerDelay)) {
        return headerDelay * 1000;
    }
    var headerDate = Date.parse("" + header);
    if (!isNaN(headerDate)) {
        return headerDate - now;
    }
    return defaultRetryAfter;
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext) {
    if (linesOfContext === void 0) { linesOfContext = 5; }
    var lineno = frame.lineno || 0;
    var maxLines = lines.length;
    var sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
    frame.pre_context = lines
        .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
        .map(function (line) { return snipLine(line, 0); });
    frame.context_line = snipLine(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
    frame.post_context = lines
        .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
        .map(function (line) { return snipLine(line, 0); });
}
/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
function stripUrlQueryAndFragment(urlPath) {
    // eslint-disable-next-line no-useless-escape
    return urlPath.split(/[\?#]/, 1)[0];
}
/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
function checkOrSetAlreadyCaught(exception) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (exception && exception.__sentry_captured__) {
        return true;
    }
    try {
        // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
        // `ExtraErrorData` integration
        addNonEnumerableProperty(exception, '__sentry_captured__', true);
    }
    catch (err) {
        // `exception` is a primitive, so we can't mark it seen
    }
    return false;
}
//# sourceMappingURL=misc.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/logger.js

// TODO: Implement different loggers for different environments
var global = (0,esm_global/* getGlobalObject */.V)();
/** Prefix for logging strings */
var PREFIX = 'Sentry Logger ';
/**
 * Temporarily unwrap `console.log` and friends in order to perform the given callback using the original methods.
 * Restores wrapping after the callback completes.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
    var global = (0,esm_global/* getGlobalObject */.V)();
    var levels = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
    if (!('console' in global)) {
        return callback();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (level in global.console && originalConsole[level].__sentry_original__) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this._enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this._enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this._enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global.console.log(PREFIX + "[Log]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global.console.warn(PREFIX + "[Warn]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        consoleSandbox(function () {
            global.console.error(PREFIX + "[Error]: " + args.join(' '));
        });
    };
    return Logger;
}());
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
global.__SENTRY__ = global.__SENTRY__ || {};
var logger_logger = global.__SENTRY__.logger || (global.__SENTRY__.logger = new Logger());

//# sourceMappingURL=logger.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/node.js
var node = __webpack_require__(6284);
;// CONCATENATED MODULE: ./node_modules/@sentry/hub/esm/session.js

/**
 * @inheritdoc
 */
var Session = /** @class */ (function () {
    function Session(context) {
        this.errors = 0;
        this.sid = uuid4();
        this.duration = 0;
        this.status = 'ok';
        this.init = true;
        this.ignoreDuration = false;
        // Both timestamp and started are in seconds since the UNIX epoch.
        var startingTime = (0,time/* timestampInSeconds */.zf)();
        this.timestamp = startingTime;
        this.started = startingTime;
        if (context) {
            this.update(context);
        }
    }
    /** JSDoc */
    // eslint-disable-next-line complexity
    Session.prototype.update = function (context) {
        if (context === void 0) { context = {}; }
        if (context.user) {
            if (!this.ipAddress && context.user.ip_address) {
                this.ipAddress = context.user.ip_address;
            }
            if (!this.did && !context.did) {
                this.did = context.user.id || context.user.email || context.user.username;
            }
        }
        this.timestamp = context.timestamp || (0,time/* timestampInSeconds */.zf)();
        if (context.ignoreDuration) {
            this.ignoreDuration = context.ignoreDuration;
        }
        if (context.sid) {
            // Good enough uuid validation. — Kamil
            this.sid = context.sid.length === 32 ? context.sid : uuid4();
        }
        if (context.init !== undefined) {
            this.init = context.init;
        }
        if (!this.did && context.did) {
            this.did = "" + context.did;
        }
        if (typeof context.started === 'number') {
            this.started = context.started;
        }
        if (this.ignoreDuration) {
            this.duration = undefined;
        }
        else if (typeof context.duration === 'number') {
            this.duration = context.duration;
        }
        else {
            var duration = this.timestamp - this.started;
            this.duration = duration >= 0 ? duration : 0;
        }
        if (context.release) {
            this.release = context.release;
        }
        if (context.environment) {
            this.environment = context.environment;
        }
        if (!this.ipAddress && context.ipAddress) {
            this.ipAddress = context.ipAddress;
        }
        if (!this.userAgent && context.userAgent) {
            this.userAgent = context.userAgent;
        }
        if (typeof context.errors === 'number') {
            this.errors = context.errors;
        }
        if (context.status) {
            this.status = context.status;
        }
    };
    /** JSDoc */
    Session.prototype.close = function (status) {
        if (status) {
            this.update({ status: status });
        }
        else if (this.status === 'ok') {
            this.update({ status: 'exited' });
        }
        else {
            this.update();
        }
    };
    /** JSDoc */
    Session.prototype.toJSON = function () {
        return dropUndefinedKeys({
            sid: "" + this.sid,
            init: this.init,
            // Make sure that sec is converted to ms for date constructor
            started: new Date(this.started * 1000).toISOString(),
            timestamp: new Date(this.timestamp * 1000).toISOString(),
            status: this.status,
            errors: this.errors,
            did: typeof this.did === 'number' || typeof this.did === 'string' ? "" + this.did : undefined,
            duration: this.duration,
            attrs: {
                release: this.release,
                environment: this.environment,
                ip_address: this.ipAddress,
                user_agent: this.userAgent,
            },
        });
    };
    return Session;
}());

//# sourceMappingURL=session.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/hub/esm/hub.js




/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
var API_VERSION = 4;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
var DEFAULT_BREADCRUMBS = 100;
/**
 * @inheritDoc
 */
var Hub = /** @class */ (function () {
    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
    function Hub(client, scope, _version) {
        if (scope === void 0) { scope = new Scope(); }
        if (_version === void 0) { _version = API_VERSION; }
        this._version = _version;
        /** Is a {@link Layer}[] containing the client and scope */
        this._stack = [{}];
        this.getStackTop().scope = scope;
        if (client) {
            this.bindClient(client);
        }
    }
    /**
     * @inheritDoc
     */
    Hub.prototype.isOlderThan = function (version) {
        return this._version < version;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.bindClient = function (client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) {
            client.setupIntegrations();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.pushScope = function () {
        // We want to clone the content of prev scope
        var scope = Scope.clone(this.getScope());
        this.getStack().push({
            client: this.getClient(),
            scope: scope,
        });
        return scope;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.popScope = function () {
        if (this.getStack().length <= 1)
            return false;
        return !!this.getStack().pop();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.withScope = function (callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        }
        finally {
            this.popScope();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getClient = function () {
        return this.getStackTop().client;
    };
    /** Returns the scope of the top stack. */
    Hub.prototype.getScope = function () {
        return this.getStackTop().scope;
    };
    /** Returns the scope stack for domains or the process. */
    Hub.prototype.getStack = function () {
        return this._stack;
    };
    /** Returns the topmost scope layer in the order domain > local > process. */
    Hub.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Hub.prototype.captureException = function (exception, hint) {
        var eventId = (this._lastEventId = uuid4());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error('Sentry syntheticException');
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: exception,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureException', exception, node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureMessage = function (message, level, hint) {
        var eventId = (this._lastEventId = uuid4());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error(message);
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: message,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureMessage', message, level, node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureEvent = function (event, hint) {
        var eventId = uuid4();
        if (event.type !== 'transaction') {
            this._lastEventId = eventId;
        }
        this._invokeClient('captureEvent', event, node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({}, hint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.lastEventId = function () {
        return this._lastEventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope || !client)
            return;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _b = (client.getOptions && client.getOptions()) || {}, _c = _b.beforeBreadcrumb, beforeBreadcrumb = _c === void 0 ? null : _c, _d = _b.maxBreadcrumbs, maxBreadcrumbs = _d === void 0 ? DEFAULT_BREADCRUMBS : _d;
        if (maxBreadcrumbs <= 0)
            return;
        var timestamp = (0,time/* dateTimestampInSeconds */.lu)();
        var mergedBreadcrumb = node_modules_tslib_tslib_es6_assign({ timestamp: timestamp }, breadcrumb);
        var finalBreadcrumb = beforeBreadcrumb
            ? consoleSandbox(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
            : mergedBreadcrumb;
        if (finalBreadcrumb === null)
            return;
        scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setUser = function (user) {
        var scope = this.getScope();
        if (scope)
            scope.setUser(user);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTags = function (tags) {
        var scope = this.getScope();
        if (scope)
            scope.setTags(tags);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtras = function (extras) {
        var scope = this.getScope();
        if (scope)
            scope.setExtras(extras);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTag = function (key, value) {
        var scope = this.getScope();
        if (scope)
            scope.setTag(key, value);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtra = function (key, extra) {
        var scope = this.getScope();
        if (scope)
            scope.setExtra(key, extra);
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype.setContext = function (name, context) {
        var scope = this.getScope();
        if (scope)
            scope.setContext(name, context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.configureScope = function (callback) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (scope && client) {
            callback(scope);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.run = function (callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        }
        finally {
            makeMain(oldHub);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getIntegration = function (integration) {
        var client = this.getClient();
        if (!client)
            return null;
        try {
            return client.getIntegration(integration);
        }
        catch (_oO) {
            logger_logger.warn("Cannot retrieve integration " + integration.id + " from the current Hub");
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSpan = function (context) {
        return this._callExtensionMethod('startSpan', context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startTransaction = function (context, customSamplingContext) {
        return this._callExtensionMethod('startTransaction', context, customSamplingContext);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.traceHeaders = function () {
        return this._callExtensionMethod('traceHeaders');
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureSession = function (endSession) {
        if (endSession === void 0) { endSession = false; }
        // both send the update and pull the session from the scope
        if (endSession) {
            return this.endSession();
        }
        // only send the update
        this._sendSessionUpdate();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.endSession = function () {
        var layer = this.getStackTop();
        var scope = layer && layer.scope;
        var session = scope && scope.getSession();
        if (session) {
            session.close();
        }
        this._sendSessionUpdate();
        // the session is over; take it off of the scope
        if (scope) {
            scope.setSession();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSession = function (context) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        var _b = (client && client.getOptions()) || {}, release = _b.release, environment = _b.environment;
        // Will fetch userAgent if called from browser sdk
        var global = (0,esm_global/* getGlobalObject */.V)();
        var userAgent = (global.navigator || {}).userAgent;
        var session = new Session(node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign(node_modules_tslib_tslib_es6_assign({ release: release,
            environment: environment }, (scope && { user: scope.getUser() })), (userAgent && { userAgent: userAgent })), context));
        if (scope) {
            // End existing session if there's one
            var currentSession = scope.getSession && scope.getSession();
            if (currentSession && currentSession.status === 'ok') {
                currentSession.update({ status: 'exited' });
            }
            this.endSession();
            // Afterwards we set the new session on the scope
            scope.setSession(session);
        }
        return session;
    };
    /**
     * Sends the current Session on the scope
     */
    Hub.prototype._sendSessionUpdate = function () {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope)
            return;
        var session = scope.getSession && scope.getSession();
        if (session) {
            if (client && client.captureSession) {
                client.captureSession(session);
            }
        }
    };
    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._invokeClient = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _b = this.getStackTop(), scope = _b.scope, client = _b.client;
        if (client && client[method]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            (_a = client)[method].apply(_a, node_modules_tslib_tslib_es6_spread(args, [scope]));
        }
    };
    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._callExtensionMethod = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
            return sentry.extensions[method].apply(this, args);
        }
        logger_logger.warn("Extension method " + method + " couldn't be found, doing nothing.");
    };
    return Hub;
}());

/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
    var carrier = (0,esm_global/* getGlobalObject */.V)();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined,
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
        setHubOnCarrier(registry, new Hub());
    }
    // Prefer domains over global if they are there (applicable only to Node environment)
    if ((0,node/* isNodeEnv */.wD)()) {
        return getHubFromActiveDomain(registry);
    }
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Returns the active domain, if one exists
 * @deprecated No longer used; remove in v7
 * @returns The domain, or undefined if there is no active domain
 */
// eslint-disable-next-line deprecation/deprecation
function getActiveDomain() {
    logger.warn('Function `getActiveDomain` is deprecated and will be removed in a future version.');
    var sentry = getMainCarrier().__SENTRY__;
    return sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
}
/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */
function getHubFromActiveDomain(registry) {
    try {
        var sentry = getMainCarrier().__SENTRY__;
        var activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
        // If there's no active domain, just return global hub
        if (!activeDomain) {
            return getHubFromCarrier(registry);
        }
        // If there's no hub on current domain, or it's an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, Scope.clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    }
    catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub)
        return carrier.__SENTRY__.hub;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = new Hub();
    return carrier.__SENTRY__.hub;
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */
function setHubOnCarrier(carrier, hub) {
    if (!carrier)
        return false;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = hub;
    return true;
}
//# sourceMappingURL=hub.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integration.js



var installedIntegrations = [];
/**
 * @private
 */
function filterDuplicates(integrations) {
    return integrations.reduce(function (acc, integrations) {
        if (acc.every(function (accIntegration) { return integrations.name !== accIntegration.name; })) {
            acc.push(integrations);
        }
        return acc;
    }, []);
}
/** Gets integration to install */
function getIntegrationsToSetup(options) {
    var defaultIntegrations = (options.defaultIntegrations && tslib_tslib_es6_spread(options.defaultIntegrations)) || [];
    var userIntegrations = options.integrations;
    var integrations = tslib_tslib_es6_spread(filterDuplicates(defaultIntegrations));
    if (Array.isArray(userIntegrations)) {
        // Filter out integrations that are also included in user options
        integrations = tslib_tslib_es6_spread(integrations.filter(function (integrations) {
            return userIntegrations.every(function (userIntegration) { return userIntegration.name !== integrations.name; });
        }), filterDuplicates(userIntegrations));
    }
    else if (typeof userIntegrations === 'function') {
        integrations = userIntegrations(integrations);
        integrations = Array.isArray(integrations) ? integrations : [integrations];
    }
    // Make sure that if present, `Debug` integration will always run last
    var integrationsNames = integrations.map(function (i) { return i.name; });
    var alwaysLastToRun = 'Debug';
    if (integrationsNames.indexOf(alwaysLastToRun) !== -1) {
        integrations.push.apply(integrations, tslib_tslib_es6_spread(integrations.splice(integrationsNames.indexOf(alwaysLastToRun), 1)));
    }
    return integrations;
}
/** Setup given integration */
function setupIntegration(integration) {
    if (installedIntegrations.indexOf(integration.name) !== -1) {
        return;
    }
    integration.setupOnce(addGlobalEventProcessor, getCurrentHub);
    installedIntegrations.push(integration.name);
    logger_logger.log("Integration installed: " + integration.name);
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(options) {
    var integrations = {};
    getIntegrationsToSetup(options).forEach(function (integration) {
        integrations[integration.name] = integration;
        setupIntegration(integration);
    });
    // set the `initialized` flag so we don't run through the process again unecessarily; use `Object.defineProperty`
    // because by default it creates a property which is nonenumerable, which we want since `initialized` shouldn't be
    // considered a member of the index the way the actual integrations are
    addNonEnumerableProperty(integrations, 'initialized', true);
    return integrations;
}
//# sourceMappingURL=integration.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/baseclient.js

/* eslint-disable max-lines */



var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
var BaseClient = /** @class */ (function () {
    /**
     * Initializes this client instance.
     *
     * @param backendClass A constructor function to create the backend.
     * @param options Options for the client.
     */
    function BaseClient(backendClass, options) {
        /** Array of used integrations. */
        this._integrations = {};
        /** Number of calls being processed */
        this._numProcessing = 0;
        this._backend = new backendClass(options);
        this._options = options;
        if (options.dsn) {
            this._dsn = makeDsn(options.dsn);
        }
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseClient.prototype.captureException = function (exception, hint, scope) {
        var _this = this;
        // ensure we haven't captured this very object before
        if (checkOrSetAlreadyCaught(exception)) {
            logger_logger.log(ALREADY_SEEN_ERROR);
            return;
        }
        var eventId = hint && hint.event_id;
        this._process(this._getBackend()
            .eventFromException(exception, hint)
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        var promisedEvent = is_isPrimitive(message)
            ? this._getBackend().eventFromMessage(String(message), level, hint)
            : this._getBackend().eventFromException(message, hint);
        this._process(promisedEvent
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureEvent = function (event, hint, scope) {
        // ensure we haven't captured this very object before
        if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
            logger_logger.log(ALREADY_SEEN_ERROR);
            return;
        }
        var eventId = hint && hint.event_id;
        this._process(this._captureEvent(event, hint, scope).then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureSession = function (session) {
        if (!this._isEnabled()) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.warn('SDK not enabled, will not capture session.');
            }
            return;
        }
        if (!(typeof session.release === 'string')) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.warn('Discarded session because of missing or non-string release');
            }
        }
        else {
            this._sendSession(session);
            // After sending, we set init false to indicate it's not the first occurrence
            session.update({ init: false });
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getDsn = function () {
        return this._dsn;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getOptions = function () {
        return this._options;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getTransport = function () {
        return this._getBackend().getTransport();
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.flush = function (timeout) {
        var _this = this;
        return this._isClientDoneProcessing(timeout).then(function (clientFinished) {
            return _this.getTransport()
                .close(timeout)
                .then(function (transportFlushed) { return clientFinished && transportFlushed; });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.close = function (timeout) {
        var _this = this;
        return this.flush(timeout).then(function (result) {
            _this.getOptions().enabled = false;
            return result;
        });
    };
    /**
     * Sets up the integrations
     */
    BaseClient.prototype.setupIntegrations = function () {
        if (this._isEnabled() && !this._integrations.initialized) {
            this._integrations = setupIntegrations(this._options);
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getIntegration = function (integration) {
        try {
            return this._integrations[integration.id] || null;
        }
        catch (_oO) {
            logger_logger.warn("Cannot retrieve integration " + integration.id + " from the current Client");
            return null;
        }
    };
    /** Updates existing session based on the provided event */
    BaseClient.prototype._updateSessionFromEvent = function (session, event) {
        var e_1, _a;
        var crashed = false;
        var errored = false;
        var exceptions = event.exception && event.exception.values;
        if (exceptions) {
            errored = true;
            try {
                for (var exceptions_1 = tslib_es6_values(exceptions), exceptions_1_1 = exceptions_1.next(); !exceptions_1_1.done; exceptions_1_1 = exceptions_1.next()) {
                    var ex = exceptions_1_1.value;
                    var mechanism = ex.mechanism;
                    if (mechanism && mechanism.handled === false) {
                        crashed = true;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (exceptions_1_1 && !exceptions_1_1.done && (_a = exceptions_1.return)) _a.call(exceptions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // A session is updated and that session update is sent in only one of the two following scenarios:
        // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
        // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
        var sessionNonTerminal = session.status === 'ok';
        var shouldUpdateAndSend = (sessionNonTerminal && session.errors === 0) || (sessionNonTerminal && crashed);
        if (shouldUpdateAndSend) {
            session.update(tslib_tslib_es6_assign(tslib_tslib_es6_assign({}, (crashed && { status: 'crashed' })), { errors: session.errors || Number(errored || crashed) }));
            this.captureSession(session);
        }
    };
    /** Deliver captured session to Sentry */
    BaseClient.prototype._sendSession = function (session) {
        this._getBackend().sendSession(session);
    };
    /**
     * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
     * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
     * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
     * `false` otherwise
     */
    BaseClient.prototype._isClientDoneProcessing = function (timeout) {
        var _this = this;
        return new SyncPromise(function (resolve) {
            var ticked = 0;
            var tick = 1;
            var interval = setInterval(function () {
                if (_this._numProcessing == 0) {
                    clearInterval(interval);
                    resolve(true);
                }
                else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        clearInterval(interval);
                        resolve(false);
                    }
                }
            }, tick);
        });
    };
    /** Returns the current backend. */
    BaseClient.prototype._getBackend = function () {
        return this._backend;
    };
    /** Determines whether this SDK is enabled and a valid Dsn is present. */
    BaseClient.prototype._isEnabled = function () {
        return this.getOptions().enabled !== false && this._dsn !== undefined;
    };
    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
    BaseClient.prototype._prepareEvent = function (event, scope, hint) {
        var _this = this;
        var _a = this.getOptions().normalizeDepth, normalizeDepth = _a === void 0 ? 3 : _a;
        var prepared = tslib_tslib_es6_assign(tslib_tslib_es6_assign({}, event), { event_id: event.event_id || (hint && hint.event_id ? hint.event_id : uuid4()), timestamp: event.timestamp || (0,time/* dateTimestampInSeconds */.lu)() });
        this._applyClientOptions(prepared);
        this._applyIntegrationsMetadata(prepared);
        // If we have scope given to us, use it as the base for further modifications.
        // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
        var finalScope = scope;
        if (hint && hint.captureContext) {
            finalScope = Scope.clone(finalScope).update(hint.captureContext);
        }
        // We prepare the result here with a resolved Event.
        var result = resolvedSyncPromise(prepared);
        // This should be the last thing called, since we want that
        // {@link Hub.addEventProcessor} gets the finished prepared event.
        if (finalScope) {
            // In case we have a hub we reassign it.
            result = finalScope.applyToEvent(prepared, hint);
        }
        return result.then(function (evt) {
            if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
                return _this._normalizeEvent(evt, normalizeDepth);
            }
            return evt;
        });
    };
    /**
     * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
     * Normalized keys:
     * - `breadcrumbs.data`
     * - `user`
     * - `contexts`
     * - `extra`
     * @param event Event
     * @returns Normalized event
     */
    BaseClient.prototype._normalizeEvent = function (event, depth) {
        if (!event) {
            return null;
        }
        var normalized = tslib_tslib_es6_assign(tslib_tslib_es6_assign(tslib_tslib_es6_assign(tslib_tslib_es6_assign(tslib_tslib_es6_assign({}, event), (event.breadcrumbs && {
            breadcrumbs: event.breadcrumbs.map(function (b) { return (tslib_tslib_es6_assign(tslib_tslib_es6_assign({}, b), (b.data && {
                data: normalize(b.data, depth),
            }))); }),
        })), (event.user && {
            user: normalize(event.user, depth),
        })), (event.contexts && {
            contexts: normalize(event.contexts, depth),
        })), (event.extra && {
            extra: normalize(event.extra, depth),
        }));
        // event.contexts.trace stores information about a Transaction. Similarly,
        // event.spans[] stores information about child Spans. Given that a
        // Transaction is conceptually a Span, normalization should apply to both
        // Transactions and Spans consistently.
        // For now the decision is to skip normalization of Transactions and Spans,
        // so this block overwrites the normalized event to add back the original
        // Transaction information prior to normalization.
        if (event.contexts && event.contexts.trace) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            normalized.contexts.trace = event.contexts.trace;
        }
        event.sdkProcessingMetadata = tslib_tslib_es6_assign(tslib_tslib_es6_assign({}, event.sdkProcessingMetadata), { baseClientNormalized: true });
        return normalized;
    };
    /**
     *  Enhances event using the client configuration.
     *  It takes care of all "static" values like environment, release and `dist`,
     *  as well as truncating overly long values.
     * @param event event instance to be enhanced
     */
    BaseClient.prototype._applyClientOptions = function (event) {
        var options = this.getOptions();
        var environment = options.environment, release = options.release, dist = options.dist, _a = options.maxValueLength, maxValueLength = _a === void 0 ? 250 : _a;
        if (!('environment' in event)) {
            event.environment = 'environment' in options ? environment : 'production';
        }
        if (event.release === undefined && release !== undefined) {
            event.release = release;
        }
        if (event.dist === undefined && dist !== undefined) {
            event.dist = dist;
        }
        if (event.message) {
            event.message = truncate(event.message, maxValueLength);
        }
        var exception = event.exception && event.exception.values && event.exception.values[0];
        if (exception && exception.value) {
            exception.value = truncate(exception.value, maxValueLength);
        }
        var request = event.request;
        if (request && request.url) {
            request.url = truncate(request.url, maxValueLength);
        }
    };
    /**
     * This function adds all used integrations to the SDK info in the event.
     * @param event The event that will be filled with all integrations.
     */
    BaseClient.prototype._applyIntegrationsMetadata = function (event) {
        var integrationsArray = Object.keys(this._integrations);
        if (integrationsArray.length > 0) {
            event.sdk = event.sdk || {};
            event.sdk.integrations = tslib_tslib_es6_spread((event.sdk.integrations || []), integrationsArray);
        }
    };
    /**
     * Tells the backend to send this event
     * @param event The Sentry event to send
     */
    BaseClient.prototype._sendEvent = function (event) {
        this._getBackend().sendEvent(event);
    };
    /**
     * Processes the event and logs an error in case of rejection
     * @param event
     * @param hint
     * @param scope
     */
    BaseClient.prototype._captureEvent = function (event, hint, scope) {
        return this._processEvent(event, hint, scope).then(function (finalEvent) {
            return finalEvent.event_id;
        }, function (reason) {
            logger_logger.error(reason);
            return undefined;
        });
    };
    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
    BaseClient.prototype._processEvent = function (event, hint, scope) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate;
        var transport = this.getTransport();
        function recordLostEvent(outcome, category) {
            if (transport.recordLostEvent) {
                transport.recordLostEvent(outcome, category);
            }
        }
        if (!this._isEnabled()) {
            return rejectedSyncPromise(new SentryError('SDK not enabled, will not capture event.'));
        }
        var isTransaction = event.type === 'transaction';
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        // Sampling for transaction happens somewhere else
        if (!isTransaction && typeof sampleRate === 'number' && Math.random() > sampleRate) {
            recordLostEvent('sample_rate', 'event');
            return rejectedSyncPromise(new SentryError("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")"));
        }
        return this._prepareEvent(event, scope, hint)
            .then(function (prepared) {
            if (prepared === null) {
                recordLostEvent('event_processor', event.type || 'event');
                throw new SentryError('An event processor returned null, will not send event.');
            }
            var isInternalException = hint && hint.data && hint.data.__sentry__ === true;
            if (isInternalException || isTransaction || !beforeSend) {
                return prepared;
            }
            var beforeSendResult = beforeSend(prepared, hint);
            return _ensureBeforeSendRv(beforeSendResult);
        })
            .then(function (processedEvent) {
            if (processedEvent === null) {
                recordLostEvent('before_send', event.type || 'event');
                throw new SentryError('`beforeSend` returned `null`, will not send event.');
            }
            var session = scope && scope.getSession && scope.getSession();
            if (!isTransaction && session) {
                _this._updateSessionFromEvent(session, processedEvent);
            }
            _this._sendEvent(processedEvent);
            return processedEvent;
        })
            .then(null, function (reason) {
            if (reason instanceof SentryError) {
                throw reason;
            }
            _this.captureException(reason, {
                data: {
                    __sentry__: true,
                },
                originalException: reason,
            });
            throw new SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + reason);
        });
    };
    /**
     * Occupies the client with processing and event
     */
    BaseClient.prototype._process = function (promise) {
        var _this = this;
        this._numProcessing += 1;
        void promise.then(function (value) {
            _this._numProcessing -= 1;
            return value;
        }, function (reason) {
            _this._numProcessing -= 1;
            return reason;
        });
    };
    return BaseClient;
}());

/**
 * Verifies that return value of configured `beforeSend` is of expected type.
 */
function _ensureBeforeSendRv(rv) {
    var nullErr = '`beforeSend` method has to return `null` or a valid event.';
    if (isThenable(rv)) {
        return rv.then(function (event) {
            if (!(isPlainObject(event) || event === null)) {
                throw new SentryError(nullErr);
            }
            return event;
        }, function (e) {
            throw new SentryError("beforeSend rejected with " + e);
        });
    }
    else if (!(isPlainObject(rv) || rv === null)) {
        throw new SentryError(nullErr);
    }
    return rv;
}
//# sourceMappingURL=baseclient.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/transports/noop.js

/** Noop transport */
var NoopTransport = /** @class */ (function () {
    function NoopTransport() {
    }
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.sendEvent = function (_) {
        return resolvedSyncPromise({
            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: 'skipped',
        });
    };
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.close = function (_) {
        return resolvedSyncPromise(true);
    };
    return NoopTransport;
}());

//# sourceMappingURL=noop.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/basebackend.js


/**
 * This is the base implemention of a Backend.
 * @hidden
 */
var BaseBackend = /** @class */ (function () {
    /** Creates a new backend instance. */
    function BaseBackend(options) {
        this._options = options;
        if (!this._options.dsn) {
            logger_logger.warn('No DSN provided, backend will not do anything.');
        }
        this._transport = this._setupTransport();
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
        throw new SentryError('Backend has to implement `eventFromException` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
        throw new SentryError('Backend has to implement `eventFromMessage` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendEvent = function (event) {
        void this._transport.sendEvent(event).then(null, function (reason) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.error("Error while sending event: " + reason);
            }
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendSession = function (session) {
        if (!this._transport.sendSession) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.warn("Dropping session because custom transport doesn't implement sendSession");
            }
            return;
        }
        void this._transport.sendSession(session).then(null, function (reason) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.error("Error while sending session: " + reason);
            }
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.getTransport = function () {
        return this._transport;
    };
    /**
     * Sets up the transport so it can be used later to send requests.
     */
    BaseBackend.prototype._setupTransport = function () {
        return new NoopTransport();
    };
    return BaseBackend;
}());

//# sourceMappingURL=basebackend.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/types/esm/severity.js
/**
 * TODO(v7): Remove this enum and replace with SeverityLevel
 */
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
var SeverityLevels = ['fatal', 'error', 'warning', 'log', 'info', 'debug', 'critical'];
//# sourceMappingURL=severity.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/supports.js



/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
    try {
        new ErrorEvent('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
    try {
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore It really needs 1 argument, not 0.
        new DOMError('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
    try {
        new DOMException('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
    if (!('fetch' in (0,esm_global/* getGlobalObject */.V)())) {
        return false;
    }
    try {
        new Headers();
        new Request('');
        new Response();
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
    if (!supportsFetch()) {
        return false;
    }
    var global = (0,esm_global/* getGlobalObject */.V)();
    // Fast path to avoid DOM I/O
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (isNativeFetch(global.fetch)) {
        return true;
    }
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    var result = false;
    var doc = global.document;
    // eslint-disable-next-line deprecation/deprecation
    if (doc && typeof doc.createElement === "function") {
        try {
            var sandbox = doc.createElement('iframe');
            sandbox.hidden = true;
            doc.head.appendChild(sandbox);
            if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                result = isNativeFetch(sandbox.contentWindow.fetch);
            }
            doc.head.removeChild(sandbox);
        }
        catch (err) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
            }
        }
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
    return 'ReportingObserver' in getGlobalObject();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
    // (see https://caniuse.com/#feat=referrer-policy),
    // it doesn't. And it throws an exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) {
        return false;
    }
    try {
        new Request('_', {
            referrerPolicy: 'origin',
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = (0,esm_global/* getGlobalObject */.V)();
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var chrome = global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}
//# sourceMappingURL=supports.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/tracekit.js
/**
 * This was originally forked from https://github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 */

// global reference to slice
var UNKNOWN_FUNCTION = '?';
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
var reactMinifiedRegexp = /Minified React error #\d+;/i;
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function computeStackTrace(ex) {
    var stack = null;
    var popSize = 0;
    if (ex) {
        if (typeof ex.framesToPop === 'number') {
            popSize = ex.framesToPop;
        }
        else if (reactMinifiedRegexp.test(ex.message)) {
            popSize = 1;
        }
    }
    try {
        // This must be tried first because Opera 10 *destroys*
        // its stacktrace property if you try to access the stack
        // property first!!
        stack = computeStackTraceFromStacktraceProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    try {
        stack = computeStackTraceFromStackProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    return {
        message: extractMessage(ex),
        name: ex && ex.name,
        stack: [],
        failed: true,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, complexity
function computeStackTraceFromStackProp(ex) {
    var _a, _b;
    if (!ex || !ex.stack) {
        return null;
    }
    var stack = [];
    var lines = ex.stack.split('\n');
    var isEval;
    var submatch;
    var parts;
    var element;
    for (var i = 0; i < lines.length; ++i) {
        if ((parts = chrome.exec(lines[i]))) {
            var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
            isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
            if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = submatch[1]; // url
                parts[3] = submatch[2]; // line
                parts[4] = submatch[3]; // column
            }
            // Arpad: Working with the regexp above is super painful. it is quite a hack, but just stripping the `address at `
            // prefix here seems like the quickest solution for now.
            var url = parts[2] && parts[2].indexOf('address at ') === 0 ? parts[2].substr('address at '.length) : parts[2];
            // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
            // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
            var func = parts[1] || UNKNOWN_FUNCTION;
            _a = __read(extractSafariExtensionDetails(func, url), 2), func = _a[0], url = _a[1];
            element = {
                url: url,
                func: func,
                args: isNative ? [parts[2]] : [],
                line: parts[3] ? +parts[3] : null,
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = winjs.exec(lines[i]))) {
            element = {
                url: parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: [],
                line: +parts[3],
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = gecko.exec(lines[i]))) {
            isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
            if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || "eval";
                parts[3] = submatch[1];
                parts[4] = submatch[2];
                parts[5] = ''; // no column when eval
            }
            else if (i === 0 && !parts[5] && ex.columnNumber !== void 0) {
                // FireFox uses this awesome columnNumber property for its top frame
                // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                // so adding 1
                // NOTE: this hack doesn't work if top-most frame is eval
                stack[0].column = ex.columnNumber + 1;
            }
            var url = parts[3];
            var func = parts[1] || UNKNOWN_FUNCTION;
            _b = __read(extractSafariExtensionDetails(func, url), 2), func = _b[0], url = _b[1];
            element = {
                url: url,
                func: func,
                args: parts[2] ? parts[2].split(',') : [],
                line: parts[4] ? +parts[4] : null,
                column: parts[5] ? +parts[5] : null,
            };
        }
        else {
            continue;
        }
        if (!element.func && element.line) {
            element.func = UNKNOWN_FUNCTION;
        }
        stack.push(element);
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function computeStackTraceFromStacktraceProp(ex) {
    if (!ex || !ex.stacktrace) {
        return null;
    }
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace;
    var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
    var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i;
    var lines = stacktrace.split('\n');
    var stack = [];
    var parts;
    for (var line = 0; line < lines.length; line += 2) {
        var element = null;
        if ((parts = opera10Regex.exec(lines[line]))) {
            element = {
                url: parts[2],
                func: parts[3],
                args: [],
                line: +parts[1],
                column: null,
            };
        }
        else if ((parts = opera11Regex.exec(lines[line]))) {
            element = {
                url: parts[6],
                func: parts[3] || parts[4],
                args: parts[5] ? parts[5].split(',') : [],
                line: +parts[1],
                column: +parts[2],
            };
        }
        if (element) {
            if (!element.func && element.line) {
                element.func = UNKNOWN_FUNCTION;
            }
            stack.push(element);
        }
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunatelly "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */
var extractSafariExtensionDetails = function (func, url) {
    var isSafariExtension = func.indexOf('safari-extension') !== -1;
    var isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;
    return isSafariExtension || isSafariWebExtension
        ? [
            func.indexOf('@') !== -1 ? func.split('@')[0] : UNKNOWN_FUNCTION,
            isSafariExtension ? "safari-extension:" + url : "safari-web-extension:" + url,
        ]
        : [func, url];
};
/** Remove N number of frames from the stack */
function popFrames(stacktrace, popSize) {
    try {
        return tslib_es6_assign(tslib_es6_assign({}, stacktrace), { stack: stacktrace.stack.slice(popSize) });
    }
    catch (e) {
        return stacktrace;
    }
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    return message;
}
//# sourceMappingURL=tracekit.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/parsers.js


var STACKTRACE_LIMIT = 50;
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */
function exceptionFromStacktrace(stacktrace) {
    var frames = prepareFramesForEvent(stacktrace.stack);
    var exception = {
        type: stacktrace.name,
        value: stacktrace.message,
    };
    if (frames && frames.length) {
        exception.stacktrace = { frames: frames };
    }
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
/**
 * @hidden
 */
function eventFromPlainObject(exception, syntheticException, rejection) {
    var event = {
        exception: {
            values: [
                {
                    type: isEvent(exception) ? exception.constructor.name : rejection ? 'UnhandledRejection' : 'Error',
                    value: "Non-Error " + (rejection ? 'promise rejection' : 'exception') + " captured with keys: " + extractExceptionKeysForMessage(exception),
                },
            ],
        },
        extra: {
            __serialized__: normalizeToSize(exception),
        },
    };
    if (syntheticException) {
        var stacktrace = computeStackTrace(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
/**
 * @hidden
 */
function eventFromStacktrace(stacktrace) {
    var exception = exceptionFromStacktrace(stacktrace);
    return {
        exception: {
            values: [exception],
        },
    };
}
/**
 * @hidden
 */
function prepareFramesForEvent(stack) {
    if (!stack || !stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].func || '';
    var lastFrameFunction = localStack[localStack.length - 1].func || '';
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
        localStack = localStack.slice(1);
    }
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
        localStack = localStack.slice(0, -1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack
        .slice(0, STACKTRACE_LIMIT)
        .map(function (frame) { return ({
        colno: frame.column === null ? undefined : frame.column,
        filename: frame.url || localStack[0].url,
        function: frame.func || '?',
        in_app: true,
        lineno: frame.line === null ? undefined : frame.line,
    }); })
        .reverse();
}
//# sourceMappingURL=parsers.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/eventbuilder.js





/**
 * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
 * @hidden
 */
function eventFromException(options, exception, hint) {
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromUnknownInput(exception, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    addExceptionMechanism(event); // defaults to { type: 'generic', handled: true }
    event.level = Severity.Error;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(options, message, level, hint) {
    if (level === void 0) { level = Severity.Info; }
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromString(message, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    event.level = level;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
}
/**
 * @hidden
 */
function eventFromUnknownInput(exception, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event;
    if (isErrorEvent(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        var errorEvent = exception;
        // eslint-disable-next-line no-param-reassign
        exception = errorEvent.error;
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
    // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
    // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    // https://webidl.spec.whatwg.org/#es-DOMException-specialness
    if (isDOMError(exception) || isDOMException(exception)) {
        var domException = exception;
        if ('stack' in exception) {
            event = eventFromStacktrace(computeStackTrace(exception));
        }
        else {
            var name_1 = domException.name || (isDOMError(domException) ? 'DOMError' : 'DOMException');
            var message = domException.message ? name_1 + ": " + domException.message : name_1;
            event = eventFromString(message, syntheticException, options);
            addExceptionTypeValue(event, message);
        }
        if ('code' in domException) {
            event.tags = tslib_es6_assign(tslib_es6_assign({}, event.tags), { 'DOMException.code': "" + domException.code });
        }
        return event;
    }
    if (isError(exception)) {
        // we have a real Error object, do nothing
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    if (isPlainObject(exception) || isEvent(exception)) {
        // If it's a plain object or an instance of `Event` (the built-in JS kind, not this SDK's `Event` type), serialize
        // it manually. This will allow us to group events based on top-level keys which is much better than creating a new
        // group on any key/value change.
        var objectException = exception;
        event = eventFromPlainObject(objectException, syntheticException, options.isRejection);
        addExceptionMechanism(event, {
            synthetic: true,
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(exception, syntheticException, options);
    addExceptionTypeValue(event, "" + exception, undefined);
    addExceptionMechanism(event, {
        synthetic: true,
    });
    return event;
}
/**
 * @hidden
 */
function eventFromString(input, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event = {
        message: input,
    };
    if (options.attachStacktrace && syntheticException) {
        var stacktrace = computeStackTrace(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
//# sourceMappingURL=eventbuilder.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/api.js

var SENTRY_API_VERSION = '7';
/**
 * Helper class to provide urls, headers and metadata that can be used to form
 * different types of requests to Sentry endpoints.
 * Supports both envelopes and regular event requests.
 *
 * @deprecated Please use APIDetails
 **/
var API = /** @class */ (function () {
    /** Create a new instance of API */
    function API(dsn, metadata, tunnel) {
        if (metadata === void 0) { metadata = {}; }
        this.dsn = dsn;
        this._dsnObject = makeDsn(dsn);
        this.metadata = metadata;
        this._tunnel = tunnel;
    }
    /** Returns the Dsn object. */
    API.prototype.getDsn = function () {
        return this._dsnObject;
    };
    /** Does this transport force envelopes? */
    API.prototype.forceEnvelope = function () {
        return !!this._tunnel;
    };
    /** Returns the prefix to construct Sentry ingestion API endpoints. */
    API.prototype.getBaseApiEndpoint = function () {
        return getBaseApiEndpoint(this._dsnObject);
    };
    /** Returns the store endpoint URL. */
    API.prototype.getStoreEndpoint = function () {
        return getStoreEndpoint(this._dsnObject);
    };
    /**
     * Returns the store endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        return getStoreEndpointWithUrlEncodedAuth(this._dsnObject);
    };
    /**
     * Returns the envelope endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
        return getEnvelopeEndpointWithUrlEncodedAuth(this._dsnObject, this._tunnel);
    };
    return API;
}());

/** Initializes API Details */
function initAPIDetails(dsn, metadata, tunnel) {
    return {
        initDsn: dsn,
        metadata: metadata || {},
        dsn: makeDsn(dsn),
        tunnel: tunnel,
    };
}
/** Returns the prefix to construct Sentry ingestion API endpoints. */
function getBaseApiEndpoint(dsn) {
    var protocol = dsn.protocol ? dsn.protocol + ":" : '';
    var port = dsn.port ? ":" + dsn.port : '';
    return protocol + "//" + dsn.host + port + (dsn.path ? "/" + dsn.path : '') + "/api/";
}
/** Returns the ingest API endpoint for target. */
function _getIngestEndpoint(dsn, target) {
    return "" + getBaseApiEndpoint(dsn) + dsn.projectId + "/" + target + "/";
}
/** Returns a URL-encoded string with auth config suitable for a query string. */
function _encodedAuth(dsn) {
    return urlEncode({
        // We send only the minimum set of required information. See
        // https://github.com/getsentry/sentry-javascript/issues/2572.
        sentry_key: dsn.publicKey,
        sentry_version: SENTRY_API_VERSION,
    });
}
/** Returns the store endpoint URL. */
function getStoreEndpoint(dsn) {
    return _getIngestEndpoint(dsn, 'store');
}
/**
 * Returns the store endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */
function getStoreEndpointWithUrlEncodedAuth(dsn) {
    return getStoreEndpoint(dsn) + "?" + _encodedAuth(dsn);
}
/** Returns the envelope endpoint URL. */
function _getEnvelopeEndpoint(dsn) {
    return _getIngestEndpoint(dsn, 'envelope');
}
/**
 * Returns the envelope endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel) {
    return tunnel ? tunnel : _getEnvelopeEndpoint(dsn) + "?" + _encodedAuth(dsn);
}
/**
 * Returns an object that can be used in request headers.
 * This is needed for node and the old /store endpoint in sentry
 */
function getRequestHeaders(dsn, clientName, clientVersion) {
    // CHANGE THIS to use metadata but keep clientName and clientVersion compatible
    var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
    header.push("sentry_client=" + clientName + "/" + clientVersion);
    header.push("sentry_key=" + dsn.publicKey);
    if (dsn.pass) {
        header.push("sentry_secret=" + dsn.pass);
    }
    return {
        'Content-Type': 'application/json',
        'X-Sentry-Auth': header.join(', '),
    };
}
/** Returns the url to the report dialog endpoint. */
function getReportDialogEndpoint(dsnLike, dialogOptions) {
    var dsn = makeDsn(dsnLike);
    var endpoint = getBaseApiEndpoint(dsn) + "embed/error-page/";
    var encodedOptions = "dsn=" + dsnToString(dsn);
    for (var key in dialogOptions) {
        if (key === 'dsn') {
            continue;
        }
        if (key === 'user') {
            if (!dialogOptions.user) {
                continue;
            }
            if (dialogOptions.user.name) {
                encodedOptions += "&name=" + encodeURIComponent(dialogOptions.user.name);
            }
            if (dialogOptions.user.email) {
                encodedOptions += "&email=" + encodeURIComponent(dialogOptions.user.email);
            }
        }
        else {
            encodedOptions += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]);
        }
    }
    return endpoint + "?" + encodedOptions;
}
//# sourceMappingURL=api.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/request.js



/** Extract sdk info from from the API metadata */
function getSdkMetadataForEnvelopeHeader(api) {
    if (!api.metadata || !api.metadata.sdk) {
        return;
    }
    var _a = api.metadata.sdk, name = _a.name, version = _a.version;
    return { name: name, version: version };
}
/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
        return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = tslib_tslib_es6_spread((event.sdk.integrations || []), (sdkInfo.integrations || []));
    event.sdk.packages = tslib_tslib_es6_spread((event.sdk.packages || []), (sdkInfo.packages || []));
    return event;
}
/** Creates a SentryRequest from a Session. */
function sessionToSentryRequest(session, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var envelopeHeaders = JSON.stringify(tslib_tslib_es6_assign(tslib_tslib_es6_assign({ sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (!!api.tunnel && { dsn: dsnToString(api.dsn) })));
    // I know this is hacky but we don't want to add `session` to request type since it's never rate limited
    var type = 'aggregates' in session ? 'sessions' : 'session';
    var itemHeaders = JSON.stringify({
        type: type,
    });
    return {
        body: envelopeHeaders + "\n" + itemHeaders + "\n" + JSON.stringify(session),
        type: type,
        url: getEnvelopeEndpointWithUrlEncodedAuth(api.dsn, api.tunnel),
    };
}
/** Creates a SentryRequest from an event. */
function eventToSentryRequest(event, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var eventType = event.type || 'event';
    var useEnvelope = eventType === 'transaction' || !!api.tunnel;
    var transactionSampling = (event.sdkProcessingMetadata || {}).transactionSampling;
    var _a = transactionSampling || {}, samplingMethod = _a.method, sampleRate = _a.rate;
    // TODO: Below is a temporary hack in order to debug a serialization error - see
    // https://github.com/getsentry/sentry-javascript/issues/2809 and
    // https://github.com/getsentry/sentry-javascript/pull/4425. TL;DR: even though we normalize all events (which should
    // prevent this), something is causing `JSON.stringify` to throw a circular reference error.
    //
    // When it's time to remove it:
    // 1. Delete everything between here and where the request object `req` is created, EXCEPT the line deleting
    //    `sdkProcessingMetadata`
    // 2. Restore the original version of the request body, which is commented out
    // 3. Search for `skippedNormalization` and pull out the companion hack in the browser playwright tests
    enhanceEventWithSdkInfo(event, api.metadata.sdk);
    event.tags = event.tags || {};
    event.extra = event.extra || {};
    // In theory, all events should be marked as having gone through normalization and so
    // we should never set this tag
    if (!(event.sdkProcessingMetadata && event.sdkProcessingMetadata.baseClientNormalized)) {
        event.tags.skippedNormalization = true;
    }
    // prevent this data from being sent to sentry
    // TODO: This is NOT part of the hack - DO NOT DELETE
    delete event.sdkProcessingMetadata;
    var body;
    try {
        // 99.9% of events should get through just fine - no change in behavior for them
        body = JSON.stringify(event);
    }
    catch (err) {
        // Record data about the error without replacing original event data, then force renormalization
        event.tags.JSONStringifyError = true;
        event.extra.JSONStringifyError = err;
        try {
            body = JSON.stringify(normalize(event));
        }
        catch (newErr) {
            // At this point even renormalization hasn't worked, meaning something about the event data has gone very wrong.
            // Time to cut our losses and record only the new error. With luck, even in the problematic cases we're trying to
            // debug with this hack, we won't ever land here.
            var innerErr = newErr;
            body = JSON.stringify({
                message: 'JSON.stringify error after renormalization',
                // setting `extra: { innerErr }` here for some reason results in an empty object, so unpack manually
                extra: { message: innerErr.message, stack: innerErr.stack },
            });
        }
    }
    var req = {
        // this is the relevant line of code before the hack was added, to make it easy to undo said hack once we've solved
        // the mystery
        // body: JSON.stringify(sdkInfo ? enhanceEventWithSdkInfo(event, api.metadata.sdk) : event),
        body: body,
        type: eventType,
        url: useEnvelope
            ? getEnvelopeEndpointWithUrlEncodedAuth(api.dsn, api.tunnel)
            : getStoreEndpointWithUrlEncodedAuth(api.dsn),
    };
    // https://develop.sentry.dev/sdk/envelopes/
    // Since we don't need to manipulate envelopes nor store them, there is no
    // exported concept of an Envelope with operations including serialization and
    // deserialization. Instead, we only implement a minimal subset of the spec to
    // serialize events inline here.
    if (useEnvelope) {
        var envelopeHeaders = JSON.stringify(tslib_tslib_es6_assign(tslib_tslib_es6_assign({ event_id: event.event_id, sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (!!api.tunnel && { dsn: dsnToString(api.dsn) })));
        var itemHeaders = JSON.stringify({
            type: eventType,
            // TODO: Right now, sampleRate may or may not be defined (it won't be in the cases of inheritance and
            // explicitly-set sampling decisions). Are we good with that?
            sample_rates: [{ id: samplingMethod, rate: sampleRate }],
        });
        // The trailing newline is optional. We intentionally don't send it to avoid
        // sending unnecessary bytes.
        //
        // const envelope = `${envelopeHeaders}\n${itemHeaders}\n${req.body}\n`;
        var envelope = envelopeHeaders + "\n" + itemHeaders + "\n" + req.body;
        req.body = envelope;
    }
    return req;
}
//# sourceMappingURL=request.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/promisebuffer.js


/**
 * Creates an new PromiseBuffer object with the specified limit
 * @param limit max number of promises that can be stored in the buffer
 */
function makePromiseBuffer(limit) {
    var buffer = [];
    function isReady() {
        return limit === undefined || buffer.length < limit;
    }
    /**
     * Remove a promise from the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns Removed promise.
     */
    function remove(task) {
        return buffer.splice(buffer.indexOf(task), 1)[0];
    }
    /**
     * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
     *
     * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
     *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
     *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
     *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
     *        limit check.
     * @returns The original promise.
     */
    function add(taskProducer) {
        if (!isReady()) {
            return rejectedSyncPromise(new SentryError('Not adding Promise due to buffer limit reached.'));
        }
        // start the task and add its promise to the queue
        var task = taskProducer();
        if (buffer.indexOf(task) === -1) {
            buffer.push(task);
        }
        void task
            .then(function () { return remove(task); })
            // Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
            // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
            // have promises, so TS has to polyfill when down-compiling.)
            .then(null, function () {
            return remove(task).then(null, function () {
                // We have to add another catch here because `remove()` starts a new promise chain.
            });
        });
        return task;
    }
    /**
     * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
     * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
     * `false` otherwise
     */
    function drain(timeout) {
        return new SyncPromise(function (resolve, reject) {
            var counter = buffer.length;
            if (!counter) {
                return resolve(true);
            }
            // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
            var capturedSetTimeout = setTimeout(function () {
                if (timeout && timeout > 0) {
                    resolve(false);
                }
            }, timeout);
            // if all promises resolve in time, cancel the timer and resolve to `true`
            buffer.forEach(function (item) {
                void resolvedSyncPromise(item).then(function () {
                    // eslint-disable-next-line no-plusplus
                    if (!--counter) {
                        clearTimeout(capturedSetTimeout);
                        resolve(true);
                    }
                }, reject);
            });
        });
    }
    return {
        $: buffer,
        add: add,
        drain: drain,
    };
}
//# sourceMappingURL=promisebuffer.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/status.js
/**
 * Converts an HTTP status code to sentry status {@link EventStatus}.
 *
 * @param code number HTTP status code
 * @returns EventStatus
 */
function eventStatusFromHttpCode(code) {
    if (code >= 200 && code < 300) {
        return 'success';
    }
    if (code === 429) {
        return 'rate_limit';
    }
    if (code >= 400 && code < 500) {
        return 'invalid';
    }
    if (code >= 500) {
        return 'failed';
    }
    return 'unknown';
}
//# sourceMappingURL=status.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/async.js
/**
 * Consumes the promise and logs the error when it rejects.
 * @param promise A promise to forget.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forget(promise) {
    void promise.then(null, function (e) {
        // TODO: Use a better logging mechanism
        // eslint-disable-next-line no-console
        console.error(e);
    });
}
//# sourceMappingURL=async.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/transports/utils.js

var utils_global = (0,esm_global/* getGlobalObject */.V)();
var cachedFetchImpl;
/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * const f = window.fetch;
 * window.fetch = function () {
 *   const p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */
function getNativeFetchImplementation() {
    if (cachedFetchImpl) {
        return cachedFetchImpl;
    }
    /* eslint-disable @typescript-eslint/unbound-method */
    // Fast path to avoid DOM I/O
    if (isNativeFetch(utils_global.fetch)) {
        return (cachedFetchImpl = utils_global.fetch.bind(utils_global));
    }
    var document = utils_global.document;
    var fetchImpl = utils_global.fetch;
    // eslint-disable-next-line deprecation/deprecation
    if (document && typeof document.createElement === "function") {
        try {
            var sandbox = document.createElement('iframe');
            sandbox.hidden = true;
            document.head.appendChild(sandbox);
            var contentWindow = sandbox.contentWindow;
            if (contentWindow && contentWindow.fetch) {
                fetchImpl = contentWindow.fetch;
            }
            document.head.removeChild(sandbox);
        }
        catch (e) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', e);
            }
        }
    }
    return (cachedFetchImpl = fetchImpl.bind(utils_global));
    /* eslint-enable @typescript-eslint/unbound-method */
}
/**
 * Sends sdk client report using sendBeacon or fetch as a fallback if available
 *
 * @param url report endpoint
 * @param body report payload
 */
function sendReport(url, body) {
    var isRealNavigator = Object.prototype.toString.call(utils_global && utils_global.navigator) === '[object Navigator]';
    var hasSendBeacon = isRealNavigator && typeof utils_global.navigator.sendBeacon === 'function';
    if (hasSendBeacon) {
        // Prevent illegal invocations - https://xgwang.me/posts/you-may-not-know-beacon/#it-may-throw-error%2C-be-sure-to-catch
        var sendBeacon = utils_global.navigator.sendBeacon.bind(utils_global.navigator);
        return sendBeacon(url, body);
    }
    if (supportsFetch()) {
        var fetch_1 = getNativeFetchImplementation();
        return forget(fetch_1(url, {
            body: body,
            method: 'POST',
            credentials: 'omit',
            keepalive: true,
        }));
    }
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/transports/base.js




function requestTypeToCategory(ty) {
    var tyStr = ty;
    return tyStr === 'event' ? 'error' : tyStr;
}
var base_global = (0,esm_global/* getGlobalObject */.V)();
/** Base Transport class implementation */
var BaseTransport = /** @class */ (function () {
    function BaseTransport(options) {
        var _this = this;
        this.options = options;
        /** A simple buffer holding all requests. */
        this._buffer = makePromiseBuffer(30);
        /** Locks transport after receiving rate limits in a response */
        this._rateLimits = {};
        this._outcomes = {};
        this._api = initAPIDetails(options.dsn, options._metadata, options.tunnel);
        // eslint-disable-next-line deprecation/deprecation
        this.url = getStoreEndpointWithUrlEncodedAuth(this._api.dsn);
        if (this.options.sendClientReports && base_global.document) {
            base_global.document.addEventListener('visibilitychange', function () {
                if (base_global.document.visibilityState === 'hidden') {
                    _this._flushOutcomes();
                }
            });
        }
    }
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendEvent = function (event) {
        return this._sendRequest(eventToSentryRequest(event, this._api), event);
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendSession = function (session) {
        return this._sendRequest(sessionToSentryRequest(session, this._api), session);
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.close = function (timeout) {
        return this._buffer.drain(timeout);
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.recordLostEvent = function (reason, category) {
        var _a;
        if (!this.options.sendClientReports) {
            return;
        }
        // We want to track each category (event, transaction, session) separately
        // but still keep the distinction between different type of outcomes.
        // We could use nested maps, but it's much easier to read and type this way.
        // A correct type for map-based implementation if we want to go that route
        // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
        var key = requestTypeToCategory(category) + ":" + reason;
        logger_logger.log("Adding outcome: " + key);
        this._outcomes[key] = (_a = this._outcomes[key], (_a !== null && _a !== void 0 ? _a : 0)) + 1;
    };
    /**
     * Send outcomes as an envelope
     */
    BaseTransport.prototype._flushOutcomes = function () {
        if (!this.options.sendClientReports) {
            return;
        }
        var outcomes = this._outcomes;
        this._outcomes = {};
        // Nothing to send
        if (!Object.keys(outcomes).length) {
            logger_logger.log('No outcomes to flush');
            return;
        }
        logger_logger.log("Flushing outcomes:\n" + JSON.stringify(outcomes, null, 2));
        var url = getEnvelopeEndpointWithUrlEncodedAuth(this._api.dsn, this._api.tunnel);
        // Envelope header is required to be at least an empty object
        var envelopeHeader = JSON.stringify(tslib_es6_assign({}, (this._api.tunnel && { dsn: dsnToString(this._api.dsn) })));
        var itemHeaders = JSON.stringify({
            type: 'client_report',
        });
        var item = JSON.stringify({
            timestamp: (0,time/* dateTimestampInSeconds */.lu)(),
            discarded_events: Object.keys(outcomes).map(function (key) {
                var _a = __read(key.split(':'), 2), category = _a[0], reason = _a[1];
                return {
                    reason: reason,
                    category: category,
                    quantity: outcomes[key],
                };
            }),
        });
        var envelope = envelopeHeader + "\n" + itemHeaders + "\n" + item;
        try {
            sendReport(url, envelope);
        }
        catch (e) {
            logger_logger.error(e);
        }
    };
    /**
     * Handle Sentry repsonse for promise-based transports.
     */
    BaseTransport.prototype._handleResponse = function (_a) {
        var requestType = _a.requestType, response = _a.response, headers = _a.headers, resolve = _a.resolve, reject = _a.reject;
        var status = eventStatusFromHttpCode(response.status);
        /**
         * "The name is case-insensitive."
         * https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
         */
        var limited = this._handleRateLimit(headers);
        if (limited && (0,env/* isDebugBuild */.a)()) {
            logger_logger.warn("Too many " + requestType + " requests, backing off until: " + this._disabledUntil(requestType));
        }
        if (status === 'success') {
            resolve({ status: status });
            return;
        }
        reject(response);
    };
    /**
     * Gets the time that given category is disabled until for rate limiting
     */
    BaseTransport.prototype._disabledUntil = function (requestType) {
        var category = requestTypeToCategory(requestType);
        return this._rateLimits[category] || this._rateLimits.all;
    };
    /**
     * Checks if a category is rate limited
     */
    BaseTransport.prototype._isRateLimited = function (requestType) {
        return this._disabledUntil(requestType) > new Date(Date.now());
    };
    /**
     * Sets internal _rateLimits from incoming headers. Returns true if headers contains a non-empty rate limiting header.
     */
    BaseTransport.prototype._handleRateLimit = function (headers) {
        var e_1, _a, e_2, _b;
        var now = Date.now();
        var rlHeader = headers['x-sentry-rate-limits'];
        var raHeader = headers['retry-after'];
        if (rlHeader) {
            try {
                // rate limit headers are of the form
                //     <header>,<header>,..
                // where each <header> is of the form
                //     <retry_after>: <categories>: <scope>: <reason_code>
                // where
                //     <retry_after> is a delay in ms
                //     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
                //         <category>;<category>;...
                //     <scope> is what's being limited (org, project, or key) - ignored by SDK
                //     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
                for (var _c = __values(rlHeader.trim().split(',')), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var limit = _d.value;
                    var parameters = limit.split(':', 2);
                    var headerDelay = parseInt(parameters[0], 10);
                    var delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
                    try {
                        for (var _e = (e_2 = void 0, __values(parameters[1].split(';'))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var category = _f.value;
                            this._rateLimits[category || 'all'] = new Date(now + delay);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        }
        else if (raHeader) {
            this._rateLimits.all = new Date(now + parseRetryAfterHeader(now, raHeader));
            return true;
        }
        return false;
    };
    return BaseTransport;
}());

//# sourceMappingURL=base.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/transports/fetch.js




/** `fetch` based transport */
var FetchTransport = /** @class */ (function (_super) {
    __extends(FetchTransport, _super);
    function FetchTransport(options, fetchImpl) {
        if (fetchImpl === void 0) { fetchImpl = getNativeFetchImplementation(); }
        var _this = _super.call(this, options) || this;
        _this._fetch = fetchImpl;
        return _this;
    }
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    FetchTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        if (this._isRateLimited(sentryRequest.type)) {
            this.recordLostEvent('ratelimit_backoff', sentryRequest.type);
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        var options = {
            body: sentryRequest.body,
            method: 'POST',
            // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
            // (see https://caniuse.com/#feat=referrer-policy),
            // it doesn't. And it throws an exception instead of ignoring this parameter...
            // REF: https://github.com/getsentry/raven-js/issues/1233
            referrerPolicy: (supportsReferrerPolicy() ? 'origin' : ''),
        };
        if (this.options.fetchParameters !== undefined) {
            Object.assign(options, this.options.fetchParameters);
        }
        if (this.options.headers !== undefined) {
            options.headers = this.options.headers;
        }
        return this._buffer
            .add(function () {
            return new SyncPromise(function (resolve, reject) {
                void _this._fetch(sentryRequest.url, options)
                    .then(function (response) {
                    var headers = {
                        'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
                        'retry-after': response.headers.get('Retry-After'),
                    };
                    _this._handleResponse({
                        requestType: sentryRequest.type,
                        response: response,
                        headers: headers,
                        resolve: resolve,
                        reject: reject,
                    });
                })
                    .catch(reject);
            });
        })
            .then(undefined, function (reason) {
            // It's either buffer rejection or any other xhr/fetch error, which are treated as NetworkError.
            if (reason instanceof SentryError) {
                _this.recordLostEvent('queue_overflow', sentryRequest.type);
            }
            else {
                _this.recordLostEvent('network_error', sentryRequest.type);
            }
            throw reason;
        });
    };
    return FetchTransport;
}(BaseTransport));

//# sourceMappingURL=fetch.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/transports/xhr.js



/** `XHR` based transport */
var XHRTransport = /** @class */ (function (_super) {
    __extends(XHRTransport, _super);
    function XHRTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    XHRTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        if (this._isRateLimited(sentryRequest.type)) {
            this.recordLostEvent('ratelimit_backoff', sentryRequest.type);
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        return this._buffer
            .add(function () {
            return new SyncPromise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        var headers = {
                            'x-sentry-rate-limits': request.getResponseHeader('X-Sentry-Rate-Limits'),
                            'retry-after': request.getResponseHeader('Retry-After'),
                        };
                        _this._handleResponse({ requestType: sentryRequest.type, response: request, headers: headers, resolve: resolve, reject: reject });
                    }
                };
                request.open('POST', sentryRequest.url);
                for (var header in _this.options.headers) {
                    if (Object.prototype.hasOwnProperty.call(_this.options.headers, header)) {
                        request.setRequestHeader(header, _this.options.headers[header]);
                    }
                }
                request.send(sentryRequest.body);
            });
        })
            .then(undefined, function (reason) {
            // It's either buffer rejection or any other xhr/fetch error, which are treated as NetworkError.
            if (reason instanceof SentryError) {
                _this.recordLostEvent('queue_overflow', sentryRequest.type);
            }
            else {
                _this.recordLostEvent('network_error', sentryRequest.type);
            }
            throw reason;
        });
    };
    return XHRTransport;
}(BaseTransport));

//# sourceMappingURL=xhr.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/backend.js






/**
 * The Sentry Browser SDK Backend.
 * @hidden
 */
var BrowserBackend = /** @class */ (function (_super) {
    __extends(BrowserBackend, _super);
    function BrowserBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromException = function (exception, hint) {
        return eventFromException(this._options, exception, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromMessage = function (message, level, hint) {
        if (level === void 0) { level = Severity.Info; }
        return eventFromMessage(this._options, message, level, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype._setupTransport = function () {
        if (!this._options.dsn) {
            // We return the noop transport here in case there is no Dsn.
            return _super.prototype._setupTransport.call(this);
        }
        var transportOptions = tslib_es6_assign(tslib_es6_assign({}, this._options.transportOptions), { dsn: this._options.dsn, tunnel: this._options.tunnel, sendClientReports: this._options.sendClientReports, _metadata: this._options._metadata });
        if (this._options.transport) {
            return new this._options.transport(transportOptions);
        }
        if (supportsFetch()) {
            return new FetchTransport(transportOptions);
        }
        return new XHRTransport(transportOptions);
    };
    return BrowserBackend;
}(BaseBackend));

//# sourceMappingURL=backend.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/minimal/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var minimal_node_modules_tslib_tslib_es6_extendStatics = function(d, b) {
    minimal_node_modules_tslib_tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return minimal_node_modules_tslib_tslib_es6_extendStatics(d, b);
};

function minimal_node_modules_tslib_tslib_es6_extends(d, b) {
    minimal_node_modules_tslib_tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var minimal_node_modules_tslib_tslib_es6_assign = function() {
    minimal_node_modules_tslib_tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return minimal_node_modules_tslib_tslib_es6_assign.apply(this, arguments);
}

function minimal_node_modules_tslib_tslib_es6_rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function minimal_node_modules_tslib_tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function minimal_node_modules_tslib_tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function minimal_node_modules_tslib_tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function minimal_node_modules_tslib_tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function minimal_node_modules_tslib_tslib_es6_generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function minimal_node_modules_tslib_tslib_es6_exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function minimal_node_modules_tslib_tslib_es6_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function minimal_node_modules_tslib_tslib_es6_read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function minimal_node_modules_tslib_tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(minimal_node_modules_tslib_tslib_es6_read(arguments[i]));
    return ar;
}

function minimal_node_modules_tslib_tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function minimal_node_modules_tslib_tslib_es6_await(v) {
    return this instanceof minimal_node_modules_tslib_tslib_es6_await ? (this.v = v, this) : new minimal_node_modules_tslib_tslib_es6_await(v);
}

function minimal_node_modules_tslib_tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof minimal_node_modules_tslib_tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function minimal_node_modules_tslib_tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: minimal_node_modules_tslib_tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function minimal_node_modules_tslib_tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof minimal_node_modules_tslib_tslib_es6_values === "function" ? minimal_node_modules_tslib_tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function minimal_node_modules_tslib_tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function minimal_node_modules_tslib_tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function minimal_node_modules_tslib_tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function minimal_node_modules_tslib_tslib_es6_classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function minimal_node_modules_tslib_tslib_es6_classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/@sentry/minimal/esm/index.js


/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = getCurrentHub();
    if (hub && hub[method]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return hub[method].apply(hub, minimal_node_modules_tslib_tslib_es6_spread(args));
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
    var syntheticException;
    try {
        throw new Error('Sentry syntheticException');
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureException', exception, {
        captureContext: captureContext,
        originalException: exception,
        syntheticException: syntheticException,
    });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param Severity Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, captureContext) {
    var syntheticException;
    try {
        throw new Error(message);
    }
    catch (exception) {
        syntheticException = exception;
    }
    // This is necessary to provide explicit scopes upgrade, without changing the original
    // arity of the `captureMessage(message, level)` method.
    var level = typeof captureContext === 'string' ? captureContext : undefined;
    var context = typeof captureContext !== 'string' ? { captureContext: captureContext } : undefined;
    return callOnHub('captureMessage', message, level, __assign({ originalException: message, syntheticException: syntheticException }, context));
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event) {
    return callOnHub('captureEvent', event);
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
    callOnHub('configureScope', callback);
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
    callOnHub('addBreadcrumb', breadcrumb);
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setContext(name, context) {
    callOnHub('setContext', name, context);
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
    callOnHub('setExtras', extras);
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
    callOnHub('setTags', tags);
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
    callOnHub('setExtra', key, extra);
}
/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
function setTag(key, value) {
    callOnHub('setTag', key, value);
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
    callOnHub('setUser', user);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
    callOnHub('withScope', callback);
}
/**
 * Calls a function on the latest client. Use this with caution, it's meant as
 * in "internal" helper so we don't need to expose every possible function in
 * the shim. It is not guaranteed that the client actually implements the
 * function.
 *
 * @param method The method to call on the client/client.
 * @param args Arguments to pass to the client/fontend.
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _callOnClient(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    callOnHub.apply(void 0, __spread(['_invokeClient', method], args));
}
/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
 * new child span within the transaction or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at which point the transaction with all its
 * finished child spans will be sent to Sentry.
 *
 * @param context Properties of the new `Transaction`.
 * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
 * default values). See {@link Options.tracesSampler}.
 *
 * @returns The transaction which was just started
 */
function startTransaction(context, customSamplingContext) {
    return callOnHub('startTransaction', __assign({}, context), customSamplingContext);
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/helpers.js



var helpers_global = (0,esm_global/* getGlobalObject */.V)();
var ignoreOnError = 0;
/**
 * @hidden
 */
function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */
function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(function () {
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 * @hidden
 */
function wrap(fn, options, before) {
    // for future readers what this does is wrap a function and then create
    // a bi-directional wrapping between them.
    //
    // example: wrapped = wrap(original);
    //  original.__sentry_wrapped__ -> wrapped
    //  wrapped.__sentry_original__ -> original
    if (options === void 0) { options = {}; }
    if (typeof fn !== 'function') {
        return fn;
    }
    try {
        // if we're dealing with a function that was previously wrapped, return
        // the original wrapper.
        var wrapper = fn.__sentry_wrapped__;
        if (wrapper) {
            return wrapper;
        }
        // We don't wanna wrap it twice
        if (getOriginalFunction(fn)) {
            return fn;
        }
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    /* eslint-disable prefer-rest-params */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var sentryWrapped = function () {
        var args = Array.prototype.slice.call(arguments);
        try {
            if (before && typeof before === 'function') {
                before.apply(this, arguments);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            var wrappedArguments = args.map(function (arg) { return wrap(arg, options); });
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        }
        catch (ex) {
            ignoreNextOnError();
            withScope(function (scope) {
                scope.addEventProcessor(function (event) {
                    if (options.mechanism) {
                        addExceptionTypeValue(event, undefined, undefined);
                        addExceptionMechanism(event, options.mechanism);
                    }
                    event.extra = tslib_es6_assign(tslib_es6_assign({}, event.extra), { arguments: args });
                    return event;
                });
                captureException(ex);
            });
            throw ex;
        }
    };
    /* eslint-enable prefer-rest-params */
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for (var property in fn) {
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    }
    catch (_oO) { } // eslint-disable-line no-empty
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    markFunctionWrapped(sentryWrapped, fn);
    addNonEnumerableProperty(fn, '__sentry_wrapped__', sentryWrapped);
    // Restore original function name (not all browsers allow that)
    try {
        var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
        if (descriptor.configurable) {
            Object.defineProperty(sentryWrapped, 'name', {
                get: function () {
                    return fn.name;
                },
            });
        }
        // eslint-disable-next-line no-empty
    }
    catch (_oO) { }
    return sentryWrapped;
}
/**
 * Injects the Report Dialog script
 * @hidden
 */
function injectReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!helpers_global.document) {
        return;
    }
    if (!options.eventId) {
        if ((0,env/* isDebugBuild */.a)()) {
            logger_logger.error("Missing eventId option in showReportDialog call");
        }
        return;
    }
    if (!options.dsn) {
        if ((0,env/* isDebugBuild */.a)()) {
            logger_logger.error("Missing dsn option in showReportDialog call");
        }
        return;
    }
    var script = helpers_global.document.createElement('script');
    script.async = true;
    script.src = getReportDialogEndpoint(options.dsn, options);
    if (options.onLoad) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        script.onload = options.onLoad;
    }
    var injectionPoint = helpers_global.document.head || helpers_global.document.body;
    if (injectionPoint) {
        injectionPoint.appendChild(script);
    }
}
//# sourceMappingURL=helpers.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/instrument.js








var instrument_global = (0,esm_global/* getGlobalObject */.V)();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */
var handlers = {};
var instrumented = {};
/** Instruments given API */
function instrument(type) {
    if (instrumented[type]) {
        return;
    }
    instrumented[type] = true;
    switch (type) {
        case 'console':
            instrumentConsole();
            break;
        case 'dom':
            instrumentDOM();
            break;
        case 'xhr':
            instrumentXHR();
            break;
        case 'fetch':
            instrumentFetch();
            break;
        case 'history':
            instrumentHistory();
            break;
        case 'error':
            instrumentError();
            break;
        case 'unhandledrejection':
            instrumentUnhandledRejection();
            break;
        default:
            logger_logger.warn('unknown instrumentation type:', type);
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(callback);
    instrument(type);
}
/** JSDoc */
function triggerHandlers(type, data) {
    var e_1, _a;
    if (!type || !handlers[type]) {
        return;
    }
    try {
        for (var _b = node_modules_tslib_tslib_es6_values(handlers[type] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            try {
                handler(data);
            }
            catch (e) {
                if ((0,env/* isDebugBuild */.a)()) {
                    logger_logger.error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + getFunctionName(handler) + "\nError: " + e);
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/** JSDoc */
function instrumentConsole() {
    if (!('console' in instrument_global)) {
        return;
    }
    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level) {
        if (!(level in instrument_global.console)) {
            return;
        }
        fill(instrument_global.console, level, function (originalConsoleLevel) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                triggerHandlers('console', { args: args, level: level });
                // this fails for some browsers. :(
                if (originalConsoleLevel) {
                    Function.prototype.apply.call(originalConsoleLevel, instrument_global.console, args);
                }
            };
        });
    });
}
/** JSDoc */
function instrumentFetch() {
    if (!supportsNativeFetch()) {
        return;
    }
    fill(instrument_global, 'fetch', function (originalFetch) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var handlerData = {
                args: args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args),
                },
                startTimestamp: Date.now(),
            };
            triggerHandlers('fetch', utils_node_modules_tslib_tslib_es6_assign({}, handlerData));
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return originalFetch.apply(instrument_global, args).then(function (response) {
                triggerHandlers('fetch', utils_node_modules_tslib_tslib_es6_assign(utils_node_modules_tslib_tslib_es6_assign({}, handlerData), { endTimestamp: Date.now(), response: response }));
                return response;
            }, function (error) {
                triggerHandlers('fetch', utils_node_modules_tslib_tslib_es6_assign(utils_node_modules_tslib_tslib_es6_assign({}, handlerData), { endTimestamp: Date.now(), error: error }));
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** Extract `method` from fetch call arguments */
function getFetchMethod(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if ('Request' in instrument_global && isInstanceOf(fetchArgs[0], Request) && fetchArgs[0].method) {
        return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
        return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
}
/** Extract `url` from fetch call arguments */
function getFetchUrl(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if (typeof fetchArgs[0] === 'string') {
        return fetchArgs[0];
    }
    if ('Request' in instrument_global && isInstanceOf(fetchArgs[0], Request)) {
        return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/** JSDoc */
function instrumentXHR() {
    if (!('XMLHttpRequest' in instrument_global)) {
        return;
    }
    var xhrproto = XMLHttpRequest.prototype;
    fill(xhrproto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var url = args[1];
            var xhrInfo = (xhr.__sentry_xhr__ = {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                method: isString(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
            });
            // if Sentry key appears in URL, don't capture it as a request
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (isString(url) && xhrInfo.method === 'POST' && url.match(/sentry_key/)) {
                xhr.__sentry_own_request__ = true;
            }
            var onreadystatechangeHandler = function () {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        xhrInfo.status_code = xhr.status;
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    triggerHandlers('xhr', {
                        args: args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: xhr,
                    });
                }
            };
            if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
                fill(xhr, 'onreadystatechange', function (original) {
                    return function () {
                        var readyStateArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            readyStateArgs[_i] = arguments[_i];
                        }
                        onreadystatechangeHandler();
                        return original.apply(xhr, readyStateArgs);
                    };
                });
            }
            else {
                xhr.addEventListener('readystatechange', onreadystatechangeHandler);
            }
            return originalOpen.apply(xhr, args);
        };
    });
    fill(xhrproto, 'send', function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.__sentry_xhr__ && args[0] !== undefined) {
                this.__sentry_xhr__.body = args[0];
            }
            triggerHandlers('xhr', {
                args: args,
                startTimestamp: Date.now(),
                xhr: this,
            });
            return originalSend.apply(this, args);
        };
    });
}
var lastHref;
/** JSDoc */
function instrumentHistory() {
    if (!supportsHistory()) {
        return;
    }
    var oldOnPopState = instrument_global.onpopstate;
    instrument_global.onpopstate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = instrument_global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers('history', {
            from: from,
            to: to,
        });
        if (oldOnPopState) {
            // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
            // https://github.com/getsentry/sentry-javascript/issues/3344
            // https://github.com/bugsnag/bugsnag-js/issues/469
            try {
                return oldOnPopState.apply(this, args);
            }
            catch (_oO) {
                // no-empty
            }
        }
    };
    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers('history', {
                    from: from,
                    to: to,
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    fill(instrument_global.history, 'pushState', historyReplacementFunction);
    fill(instrument_global.history, 'replaceState', historyReplacementFunction);
}
var debounceDuration = 1000;
var debounceTimerID;
var lastCapturedEvent;
/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */
function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) {
        return true;
    }
    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) {
        return true;
    }
    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (previous.target !== current.target) {
            return true;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
}
/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== 'keypress') {
        return false;
    }
    try {
        var target = event.target;
        if (!target || !target.tagName) {
            return true;
        }
        // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
        // e.g.tabbing through elements, hotkeys, etc.
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
            return false;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    return true;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler, globalListener) {
    if (globalListener === void 0) { globalListener = false; }
    return function (event) {
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || lastCapturedEvent === event) {
            return;
        }
        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event)) {
            return;
        }
        var name = event.type === 'keypress' ? 'input' : event.type;
        // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
        if (debounceTimerID === undefined) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
        // If that's the case, emit the previous event and store locally the newly-captured DOM event.
        else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = instrument_global.setTimeout(function () {
            debounceTimerID = undefined;
        }, debounceDuration);
    };
}
/** JSDoc */
function instrumentDOM() {
    if (!('document' in instrument_global)) {
        return;
    }
    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    var triggerDOMHandler = triggerHandlers.bind(null, 'dom');
    var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    instrument_global.document.addEventListener('click', globalDOMEventHandler, false);
    instrument_global.document.addEventListener('keypress', globalDOMEventHandler, false);
    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    ['EventTarget', 'Node'].forEach(function (target) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = instrument_global[target] && instrument_global[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        fill(proto, 'addEventListener', function (originalAddEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_1 = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
                        var handlerForType = (handlers_1[type] = handlers_1[type] || { refCount: 0 });
                        if (!handlerForType.handler) {
                            var handler = makeDOMEventHandler(triggerDOMHandler);
                            handlerForType.handler = handler;
                            originalAddEventListener.call(this, type, handler, options);
                        }
                        handlerForType.refCount += 1;
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        fill(proto, 'removeEventListener', function (originalRemoveEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_2 = el.__sentry_instrumentation_handlers__ || {};
                        var handlerForType = handlers_2[type];
                        if (handlerForType) {
                            handlerForType.refCount -= 1;
                            // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                            if (handlerForType.refCount <= 0) {
                                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                handlerForType.handler = undefined;
                                delete handlers_2[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                            }
                            // If there are no longer any custom handlers of any type on this element, cleanup everything.
                            if (Object.keys(handlers_2).length === 0) {
                                delete el.__sentry_instrumentation_handlers__;
                            }
                        }
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
var _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
    _oldOnErrorHandler = instrument_global.onerror;
    instrument_global.onerror = function (msg, url, line, column, error) {
        triggerHandlers('error', {
            column: column,
            error: error,
            line: line,
            msg: msg,
            url: url,
        });
        if (_oldOnErrorHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
    };
}
var _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = instrument_global.onunhandledrejection;
    instrument_global.onunhandledrejection = function (e) {
        triggerHandlers('unhandledrejection', e);
        if (_oldOnUnhandledRejectionHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
    };
}
//# sourceMappingURL=instrument.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/severity.js

function isSupportedSeverity(level) {
    return SeverityLevels.indexOf(level) !== -1;
}
/**
 * Converts a string-based level into a {@link Severity}.
 *
 * @param level string representation of Severity
 * @returns Severity
 */
function severityFromString(level) {
    if (level === 'warn')
        return Severity.Warning;
    if (isSupportedSeverity(level)) {
        return level;
    }
    return Severity.Log;
}
//# sourceMappingURL=severity.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable max-lines */



/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */
var Breadcrumbs = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Breadcrumbs(options) {
        /**
         * @inheritDoc
         */
        this.name = Breadcrumbs.id;
        this._options = tslib_es6_assign({ console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true }, options);
    }
    /**
     * Create a breadcrumb of `sentry` from the events themselves
     */
    Breadcrumbs.prototype.addSentryBreadcrumb = function (event) {
        if (!this._options.sentry) {
            return;
        }
        getCurrentHub().addBreadcrumb({
            category: "sentry." + (event.type === 'transaction' ? 'transaction' : 'event'),
            event_id: event.event_id,
            level: event.level,
            message: getEventDescription(event),
        }, {
            event: event,
        });
    };
    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - Console API
     *  - DOM API (click/typing)
     *  - XMLHttpRequest API
     *  - Fetch API
     *  - History API
     */
    Breadcrumbs.prototype.setupOnce = function () {
        if (this._options.console) {
            addInstrumentationHandler('console', _consoleBreadcrumb);
        }
        if (this._options.dom) {
            addInstrumentationHandler('dom', _domBreadcrumb(this._options.dom));
        }
        if (this._options.xhr) {
            addInstrumentationHandler('xhr', _xhrBreadcrumb);
        }
        if (this._options.fetch) {
            addInstrumentationHandler('fetch', _fetchBreadcrumb);
        }
        if (this._options.history) {
            addInstrumentationHandler('history', _historyBreadcrumb);
        }
    };
    /**
     * @inheritDoc
     */
    Breadcrumbs.id = 'Breadcrumbs';
    return Breadcrumbs;
}());

/**
 * A HOC that creaes a function that creates breadcrumbs from DOM API calls.
 * This is a HOC so that we get access to dom options in the closure.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _domBreadcrumb(dom) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function _innerDomBreadcrumb(handlerData) {
        var target;
        var keyAttrs = typeof dom === 'object' ? dom.serializeAttribute : undefined;
        if (typeof keyAttrs === 'string') {
            keyAttrs = [keyAttrs];
        }
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            target = handlerData.event.target
                ? htmlTreeAsString(handlerData.event.target, keyAttrs)
                : htmlTreeAsString(handlerData.event, keyAttrs);
        }
        catch (e) {
            target = '<unknown>';
        }
        if (target.length === 0) {
            return;
        }
        getCurrentHub().addBreadcrumb({
            category: "ui." + handlerData.name,
            message: target,
        }, {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global,
        });
    }
    return _innerDomBreadcrumb;
}
/**
 * Creates breadcrumbs from console API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _consoleBreadcrumb(handlerData) {
    var breadcrumb = {
        category: 'console',
        data: {
            arguments: handlerData.args,
            logger: 'console',
        },
        level: severityFromString(handlerData.level),
        message: safeJoin(handlerData.args, ' '),
    };
    if (handlerData.level === 'assert') {
        if (handlerData.args[0] === false) {
            breadcrumb.message = "Assertion failed: " + (safeJoin(handlerData.args.slice(1), ' ') || 'console.assert');
            breadcrumb.data.arguments = handlerData.args.slice(1);
        }
        else {
            // Don't capture a breadcrumb for passed assertions
            return;
        }
    }
    getCurrentHub().addBreadcrumb(breadcrumb, {
        input: handlerData.args,
        level: handlerData.level,
    });
}
/**
 * Creates breadcrumbs from XHR API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _xhrBreadcrumb(handlerData) {
    if (handlerData.endTimestamp) {
        // We only capture complete, non-sentry requests
        if (handlerData.xhr.__sentry_own_request__) {
            return;
        }
        var _a = handlerData.xhr.__sentry_xhr__ || {}, method = _a.method, url = _a.url, status_code = _a.status_code, body = _a.body;
        getCurrentHub().addBreadcrumb({
            category: 'xhr',
            data: {
                method: method,
                url: url,
                status_code: status_code,
            },
            type: 'http',
        }, {
            xhr: handlerData.xhr,
            input: body,
        });
        return;
    }
}
/**
 * Creates breadcrumbs from fetch API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _fetchBreadcrumb(handlerData) {
    // We only capture complete fetch requests
    if (!handlerData.endTimestamp) {
        return;
    }
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
        // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
        return;
    }
    if (handlerData.error) {
        getCurrentHub().addBreadcrumb({
            category: 'fetch',
            data: handlerData.fetchData,
            level: Severity.Error,
            type: 'http',
        }, {
            data: handlerData.error,
            input: handlerData.args,
        });
    }
    else {
        getCurrentHub().addBreadcrumb({
            category: 'fetch',
            data: tslib_es6_assign(tslib_es6_assign({}, handlerData.fetchData), { status_code: handlerData.response.status }),
            type: 'http',
        }, {
            input: handlerData.args,
            response: handlerData.response,
        });
    }
}
/**
 * Creates breadcrumbs from history API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _historyBreadcrumb(handlerData) {
    var global = (0,esm_global/* getGlobalObject */.V)();
    var from = handlerData.from;
    var to = handlerData.to;
    var parsedLoc = parseUrl(global.location.href);
    var parsedFrom = parseUrl(from);
    var parsedTo = parseUrl(to);
    // Initial pushState doesn't provide `from` information
    if (!parsedFrom.path) {
        parsedFrom = parsedLoc;
    }
    // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
        to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
        from = parsedFrom.relative;
    }
    getCurrentHub().addBreadcrumb({
        category: 'navigation',
        data: {
            from: from,
            to: to,
        },
    });
}
//# sourceMappingURL=breadcrumbs.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/client.js






/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
var BrowserClient = /** @class */ (function (_super) {
    __extends(BrowserClient, _super);
    /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
    function BrowserClient(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        options._metadata = options._metadata || {};
        options._metadata.sdk = options._metadata.sdk || {
            name: 'sentry.javascript.browser',
            packages: [
                {
                    name: 'npm:@sentry/browser',
                    version: SDK_VERSION,
                },
            ],
            version: SDK_VERSION,
        };
        _this = _super.call(this, BrowserBackend, options) || this;
        return _this;
    }
    /**
     * Show a report dialog to the user to send feedback to a specific event.
     *
     * @param options Set individual options for the dialog
     */
    BrowserClient.prototype.showReportDialog = function (options) {
        if (options === void 0) { options = {}; }
        // doesn't work without a document (React Native)
        var document = (0,esm_global/* getGlobalObject */.V)().document;
        if (!document) {
            return;
        }
        if (!this._isEnabled()) {
            logger_logger.error('Trying to call showReportDialog with Sentry Client disabled');
            return;
        }
        injectReportDialog(tslib_es6_assign(tslib_es6_assign({}, options), { dsn: options.dsn || this.getDsn() }));
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._prepareEvent = function (event, scope, hint) {
        event.platform = event.platform || 'javascript';
        return _super.prototype._prepareEvent.call(this, event, scope, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._sendEvent = function (event) {
        var integration = this.getIntegration(Breadcrumbs);
        if (integration) {
            integration.addSentryBreadcrumb(event);
        }
        _super.prototype._sendEvent.call(this, event);
    };
    return BrowserClient;
}(BaseClient));

//# sourceMappingURL=client.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/exports.js







//# sourceMappingURL=exports.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integrations/functiontostring.js

var originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */
var FunctionToString = /** @class */ (function () {
    function FunctionToString() {
        /**
         * @inheritDoc
         */
        this.name = FunctionToString.id;
    }
    /**
     * @inheritDoc
     */
    FunctionToString.prototype.setupOnce = function () {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        originalFunctionToString = Function.prototype.toString;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Function.prototype.toString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = getOriginalFunction(this) || this;
            return originalFunctionToString.apply(context, args);
        };
    };
    /**
     * @inheritDoc
     */
    FunctionToString.id = 'FunctionToString';
    return FunctionToString;
}());

//# sourceMappingURL=functiontostring.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integrations/inboundfilters.js



// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
/** Inbound filters configurable by the user */
var InboundFilters = /** @class */ (function () {
    function InboundFilters(_options) {
        if (_options === void 0) { _options = {}; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = InboundFilters.id;
    }
    /**
     * @inheritDoc
     */
    InboundFilters.prototype.setupOnce = function () {
        addGlobalEventProcessor(function (event) {
            var hub = getCurrentHub();
            if (!hub) {
                return event;
            }
            var self = hub.getIntegration(InboundFilters);
            if (self) {
                var client = hub.getClient();
                var clientOptions = client ? client.getOptions() : {};
                // This checks prevents most of the occurrences of the bug linked below:
                // https://github.com/getsentry/sentry-javascript/issues/2622
                // The bug is caused by multiple SDK instances, where one is minified and one is using non-mangled code.
                // Unfortunatelly we cannot fix it reliably (thus reserved property in rollup's terser config),
                // as we cannot force people using multiple instances in their apps to sync SDK versions.
                var options = typeof self._mergeOptions === 'function' ? self._mergeOptions(clientOptions) : {};
                if (typeof self._shouldDropEvent !== 'function') {
                    return event;
                }
                return self._shouldDropEvent(event, options) ? null : event;
            }
            return event;
        });
    };
    /** JSDoc */
    InboundFilters.prototype._shouldDropEvent = function (event, options) {
        if (this._isSentryError(event, options)) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + getEventDescription(event));
            }
            return true;
        }
        if (this._isIgnoredError(event, options)) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + getEventDescription(event));
            }
            return true;
        }
        if (this._isDeniedUrl(event, options)) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + getEventDescription(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            }
            return true;
        }
        if (!this._isAllowedUrl(event, options)) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + getEventDescription(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            }
            return true;
        }
        return false;
    };
    /** JSDoc */
    InboundFilters.prototype._isSentryError = function (event, options) {
        if (!options.ignoreInternal) {
            return false;
        }
        try {
            // @ts-ignore can't be a sentry error if undefined
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return event.exception.values[0].type === 'SentryError';
        }
        catch (e) {
            // ignore
        }
        return false;
    };
    /** JSDoc */
    InboundFilters.prototype._isIgnoredError = function (event, options) {
        if (!options.ignoreErrors || !options.ignoreErrors.length) {
            return false;
        }
        return this._getPossibleEventMessages(event).some(function (message) {
            // Not sure why TypeScript complains here...
            return options.ignoreErrors.some(function (pattern) { return isMatchingPattern(message, pattern); });
        });
    };
    /** JSDoc */
    InboundFilters.prototype._isDeniedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.denyUrls || !options.denyUrls.length) {
            return false;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? false : options.denyUrls.some(function (pattern) { return isMatchingPattern(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._isAllowedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.allowUrls || !options.allowUrls.length) {
            return true;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? true : options.allowUrls.some(function (pattern) { return isMatchingPattern(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._mergeOptions = function (clientOptions) {
        if (clientOptions === void 0) { clientOptions = {}; }
        return {
            allowUrls: tslib_tslib_es6_spread((this._options.whitelistUrls || []), (this._options.allowUrls || []), (clientOptions.whitelistUrls || []), (clientOptions.allowUrls || [])),
            denyUrls: tslib_tslib_es6_spread((this._options.blacklistUrls || []), (this._options.denyUrls || []), (clientOptions.blacklistUrls || []), (clientOptions.denyUrls || [])),
            ignoreErrors: tslib_tslib_es6_spread((this._options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
            ignoreInternal: typeof this._options.ignoreInternal !== 'undefined' ? this._options.ignoreInternal : true,
        };
    };
    /** JSDoc */
    InboundFilters.prototype._getPossibleEventMessages = function (event) {
        if (event.message) {
            return [event.message];
        }
        if (event.exception) {
            try {
                var _a = (event.exception.values && event.exception.values[0]) || {}, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c;
                return ["" + value, type + ": " + value];
            }
            catch (oO) {
                if ((0,env/* isDebugBuild */.a)()) {
                    logger_logger.error("Cannot extract message for event " + getEventDescription(event));
                }
                return [];
            }
        }
        return [];
    };
    /** JSDoc */
    InboundFilters.prototype._getLastValidUrl = function (frames) {
        if (frames === void 0) { frames = []; }
        for (var i = frames.length - 1; i >= 0; i--) {
            var frame = frames[i];
            if (frame && frame.filename !== '<anonymous>' && frame.filename !== '[native code]') {
                return frame.filename || null;
            }
        }
        return null;
    };
    /** JSDoc */
    InboundFilters.prototype._getEventFilterUrl = function (event) {
        try {
            if (event.stacktrace) {
                return this._getLastValidUrl(event.stacktrace.frames);
            }
            var frames_1;
            try {
                // @ts-ignore we only care about frames if the whole thing here is defined
                frames_1 = event.exception.values[0].stacktrace.frames;
            }
            catch (e) {
                // ignore
            }
            return frames_1 ? this._getLastValidUrl(frames_1) : null;
        }
        catch (oO) {
            if ((0,env/* isDebugBuild */.a)()) {
                logger_logger.error("Cannot extract url for event " + getEventDescription(event));
            }
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    InboundFilters.id = 'InboundFilters';
    return InboundFilters;
}());

//# sourceMappingURL=inboundfilters.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integrations/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/globalhandlers.js

/* eslint-disable @typescript-eslint/no-unsafe-member-access */





/** Global handlers */
var GlobalHandlers = /** @class */ (function () {
    /** JSDoc */
    function GlobalHandlers(options) {
        /**
         * @inheritDoc
         */
        this.name = GlobalHandlers.id;
        /**
         * Stores references functions to installing handlers. Will set to undefined
         * after they have been run so that they are not used twice.
         */
        this._installFunc = {
            onerror: _installGlobalOnErrorHandler,
            onunhandledrejection: _installGlobalOnUnhandledRejectionHandler,
        };
        this._options = tslib_es6_assign({ onerror: true, onunhandledrejection: true }, options);
    }
    /**
     * @inheritDoc
     */
    GlobalHandlers.prototype.setupOnce = function () {
        Error.stackTraceLimit = 50;
        var options = this._options;
        // We can disable guard-for-in as we construct the options object above + do checks against
        // `this._installFunc` for the property.
        // eslint-disable-next-line guard-for-in
        for (var key in options) {
            var installFunc = this._installFunc[key];
            if (installFunc && options[key]) {
                globalHandlerLog(key);
                installFunc();
                this._installFunc[key] = undefined;
            }
        }
    };
    /**
     * @inheritDoc
     */
    GlobalHandlers.id = 'GlobalHandlers';
    return GlobalHandlers;
}());

/** JSDoc */
function _installGlobalOnErrorHandler() {
    addInstrumentationHandler('error', 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (data) {
        var _a = __read(getHubAndAttachStacktrace(), 2), hub = _a[0], attachStacktrace = _a[1];
        if (!hub.getIntegration(GlobalHandlers)) {
            return;
        }
        var msg = data.msg, url = data.url, line = data.line, column = data.column, error = data.error;
        if (shouldIgnoreOnError() || (error && error.__sentry_own_request__)) {
            return;
        }
        var event = error === undefined && isString(msg)
            ? _eventFromIncompleteOnError(msg, url, line, column)
            : _enhanceEventWithInitialFrame(eventFromUnknownInput(error || msg, undefined, {
                attachStacktrace: attachStacktrace,
                isRejection: false,
            }), url, line, column);
        addMechanismAndCapture(hub, error, event, 'onerror');
    });
}
/** JSDoc */
function _installGlobalOnUnhandledRejectionHandler() {
    addInstrumentationHandler('unhandledrejection', 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (e) {
        var _a = __read(getHubAndAttachStacktrace(), 2), hub = _a[0], attachStacktrace = _a[1];
        if (!hub.getIntegration(GlobalHandlers)) {
            return;
        }
        var error = e;
        // dig the object of the rejection out of known event types
        try {
            // PromiseRejectionEvents store the object of the rejection under 'reason'
            // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
            if ('reason' in e) {
                error = e.reason;
            }
            // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
            // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
            // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
            // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
            // https://github.com/getsentry/sentry-javascript/issues/2380
            else if ('detail' in e && 'reason' in e.detail) {
                error = e.detail.reason;
            }
        }
        catch (_oO) {
            // no-empty
        }
        if (shouldIgnoreOnError() || (error && error.__sentry_own_request__)) {
            return true;
        }
        var event = is_isPrimitive(error)
            ? _eventFromRejectionWithPrimitive(error)
            : eventFromUnknownInput(error, undefined, {
                attachStacktrace: attachStacktrace,
                isRejection: true,
            });
        event.level = Severity.Error;
        addMechanismAndCapture(hub, error, event, 'onunhandledrejection');
        return;
    });
}
/**
 * Create an event from a promise rejection where the `reason` is a primitive.
 *
 * @param reason: The `reason` property of the promise rejection
 * @returns An Event object with an appropriate `exception` value
 */
function _eventFromRejectionWithPrimitive(reason) {
    return {
        exception: {
            values: [
                {
                    type: 'UnhandledRejection',
                    // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
                    value: "Non-Error promise rejection captured with value: " + String(reason),
                },
            ],
        },
    };
}
/**
 * This function creates a stack from an old, error-less onerror handler.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _eventFromIncompleteOnError(msg, url, line, column) {
    var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    // If 'message' is ErrorEvent, get real message from inside
    var message = isErrorEvent(msg) ? msg.message : msg;
    var name = 'Error';
    var groups = message.match(ERROR_TYPES_RE);
    if (groups) {
        name = groups[1];
        message = groups[2];
    }
    var event = {
        exception: {
            values: [
                {
                    type: name,
                    value: message,
                },
            ],
        },
    };
    return _enhanceEventWithInitialFrame(event, url, line, column);
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _enhanceEventWithInitialFrame(event, url, line, column) {
    // event.exception
    var e = (event.exception = event.exception || {});
    // event.exception.values
    var ev = (e.values = e.values || []);
    // event.exception.values[0]
    var ev0 = (ev[0] = ev[0] || {});
    // event.exception.values[0].stacktrace
    var ev0s = (ev0.stacktrace = ev0.stacktrace || {});
    // event.exception.values[0].stacktrace.frames
    var ev0sf = (ev0s.frames = ev0s.frames || []);
    var colno = isNaN(parseInt(column, 10)) ? undefined : column;
    var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
    var filename = isString(url) && url.length > 0 ? url : getLocationHref();
    // event.exception.values[0].stacktrace.frames
    if (ev0sf.length === 0) {
        ev0sf.push({
            colno: colno,
            filename: filename,
            function: '?',
            in_app: true,
            lineno: lineno,
        });
    }
    return event;
}
function globalHandlerLog(type) {
    if ((0,env/* isDebugBuild */.a)()) {
        logger_logger.log("Global Handler attached: " + type);
    }
}
function addMechanismAndCapture(hub, error, event, type) {
    addExceptionMechanism(event, {
        handled: false,
        type: type,
    });
    hub.captureEvent(event, {
        originalException: error,
    });
}
function getHubAndAttachStacktrace() {
    var hub = getCurrentHub();
    var client = hub.getClient();
    var attachStacktrace = client && client.getOptions().attachStacktrace;
    return [hub, attachStacktrace];
}
//# sourceMappingURL=globalhandlers.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/trycatch.js



var DEFAULT_EVENT_TARGET = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload',
];
/** Wrap timer functions and event targets to catch errors and provide better meta data */
var TryCatch = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function TryCatch(options) {
        /**
         * @inheritDoc
         */
        this.name = TryCatch.id;
        this._options = tslib_es6_assign({ XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true }, options);
    }
    /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
    TryCatch.prototype.setupOnce = function () {
        var global = (0,esm_global/* getGlobalObject */.V)();
        if (this._options.setTimeout) {
            fill(global, 'setTimeout', _wrapTimeFunction);
        }
        if (this._options.setInterval) {
            fill(global, 'setInterval', _wrapTimeFunction);
        }
        if (this._options.requestAnimationFrame) {
            fill(global, 'requestAnimationFrame', _wrapRAF);
        }
        if (this._options.XMLHttpRequest && 'XMLHttpRequest' in global) {
            fill(XMLHttpRequest.prototype, 'send', _wrapXHR);
        }
        var eventTargetOption = this._options.eventTarget;
        if (eventTargetOption) {
            var eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
            eventTarget.forEach(_wrapEventTarget);
        }
    };
    /**
     * @inheritDoc
     */
    TryCatch.id = 'TryCatch';
    return TryCatch;
}());

/** JSDoc */
function _wrapTimeFunction(original) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var originalCallback = args[0];
        args[0] = wrap(originalCallback, {
            mechanism: {
                data: { function: getFunctionName(original) },
                handled: true,
                type: 'instrument',
            },
        });
        return original.apply(this, args);
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _wrapRAF(original) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (callback) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return original.call(this, wrap(callback, {
            mechanism: {
                data: {
                    function: 'requestAnimationFrame',
                    handler: getFunctionName(original),
                },
                handled: true,
                type: 'instrument',
            },
        }));
    };
}
/** JSDoc */
function _wrapXHR(originalSend) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var xhr = this;
        var xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
        xmlHttpRequestProps.forEach(function (prop) {
            if (prop in xhr && typeof xhr[prop] === 'function') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                fill(xhr, prop, function (original) {
                    var wrapOptions = {
                        mechanism: {
                            data: {
                                function: prop,
                                handler: getFunctionName(original),
                            },
                            handled: true,
                            type: 'instrument',
                        },
                    };
                    // If Instrument integration has been called before TryCatch, get the name of original function
                    var originalFunction = getOriginalFunction(original);
                    if (originalFunction) {
                        wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
                    }
                    // Otherwise wrap directly
                    return wrap(original, wrapOptions);
                });
            }
        });
        return originalSend.apply(this, args);
    };
}
/** JSDoc */
function _wrapEventTarget(target) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var global = (0,esm_global/* getGlobalObject */.V)();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    var proto = global[target] && global[target].prototype;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
        return;
    }
    fill(proto, 'addEventListener', function (original) {
        return function (eventName, fn, options) {
            try {
                if (typeof fn.handleEvent === 'function') {
                    fn.handleEvent = wrap(fn.handleEvent.bind(fn), {
                        mechanism: {
                            data: {
                                function: 'handleEvent',
                                handler: getFunctionName(fn),
                                target: target,
                            },
                            handled: true,
                            type: 'instrument',
                        },
                    });
                }
            }
            catch (err) {
                // can sometimes get 'Permission denied to access property "handle Event'
            }
            return original.call(this, eventName, 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            wrap(fn, {
                mechanism: {
                    data: {
                        function: 'addEventListener',
                        handler: getFunctionName(fn),
                        target: target,
                    },
                    handled: true,
                    type: 'instrument',
                },
            }), options);
        };
    });
    fill(proto, 'removeEventListener', function (originalRemoveEventListener) {
        return function (eventName, fn, options) {
            /**
             * There are 2 possible scenarios here:
             *
             * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
             * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
             * as a pass-through, and call original `removeEventListener` with it.
             *
             * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
             * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
             * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
             * in order for us to make a distinction between wrapped/non-wrapped functions possible.
             * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
             *
             * When someone adds a handler prior to initialization, and then do it again, but after,
             * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
             * to get rid of the initial handler and it'd stick there forever.
             */
            var wrappedEventHandler = fn;
            try {
                var originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
                if (originalEventHandler) {
                    originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
                }
            }
            catch (e) {
                // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
            }
            return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
        };
    });
}
//# sourceMappingURL=trycatch.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/linkederrors.js





var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */
var LinkedErrors = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function LinkedErrors(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = LinkedErrors.id;
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
    }
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.setupOnce = function () {
        addGlobalEventProcessor(function (event, hint) {
            var self = getCurrentHub().getIntegration(LinkedErrors);
            return self ? _handler(self._key, self._limit, event, hint) : event;
        });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.id = 'LinkedErrors';
    return LinkedErrors;
}());

/**
 * @inheritDoc
 */
function _handler(key, limit, event, hint) {
    if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
        return event;
    }
    var linkedErrors = _walkErrorTree(limit, hint.originalException, key);
    event.exception.values = tslib_es6_spread(linkedErrors, event.exception.values);
    return event;
}
/**
 * JSDOC
 */
function _walkErrorTree(limit, error, key, stack) {
    if (stack === void 0) { stack = []; }
    if (!isInstanceOf(error[key], Error) || stack.length + 1 >= limit) {
        return stack;
    }
    var stacktrace = computeStackTrace(error[key]);
    var exception = exceptionFromStacktrace(stacktrace);
    return _walkErrorTree(limit, error[key], key, tslib_es6_spread([exception], stack));
}
//# sourceMappingURL=linkederrors.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/useragent.js



var useragent_global = (0,esm_global/* getGlobalObject */.V)();
/** UserAgent */
var UserAgent = /** @class */ (function () {
    function UserAgent() {
        /**
         * @inheritDoc
         */
        this.name = UserAgent.id;
    }
    /**
     * @inheritDoc
     */
    UserAgent.prototype.setupOnce = function () {
        addGlobalEventProcessor(function (event) {
            if (getCurrentHub().getIntegration(UserAgent)) {
                // if none of the information we want exists, don't bother
                if (!useragent_global.navigator && !useragent_global.location && !useragent_global.document) {
                    return event;
                }
                // grab as much info as exists and add it to the event
                var url = (event.request && event.request.url) || (useragent_global.location && useragent_global.location.href);
                var referrer = (useragent_global.document || {}).referrer;
                var userAgent = (useragent_global.navigator || {}).userAgent;
                var headers = tslib_es6_assign(tslib_es6_assign(tslib_es6_assign({}, (event.request && event.request.headers)), (referrer && { Referer: referrer })), (userAgent && { 'User-Agent': userAgent }));
                var request = tslib_es6_assign(tslib_es6_assign({}, (url && { url: url })), { headers: headers });
                return tslib_es6_assign(tslib_es6_assign({}, event), { request: request });
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    UserAgent.id = 'UserAgent';
    return UserAgent;
}());

//# sourceMappingURL=useragent.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/dedupe.js

/** Deduplication filter */
var Dedupe = /** @class */ (function () {
    function Dedupe() {
        /**
         * @inheritDoc
         */
        this.name = Dedupe.id;
    }
    /**
     * @inheritDoc
     */
    Dedupe.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (currentEvent) {
            var self = getCurrentHub().getIntegration(Dedupe);
            if (self) {
                // Juuust in case something goes wrong
                try {
                    if (_shouldDropEvent(currentEvent, self._previousEvent)) {
                        logger_logger.warn("Event dropped due to being a duplicate of previously captured event.");
                        return null;
                    }
                }
                catch (_oO) {
                    return (self._previousEvent = currentEvent);
                }
                return (self._previousEvent = currentEvent);
            }
            return currentEvent;
        });
    };
    /**
     * @inheritDoc
     */
    Dedupe.id = 'Dedupe';
    return Dedupe;
}());

/** JSDoc */
function _shouldDropEvent(currentEvent, previousEvent) {
    if (!previousEvent) {
        return false;
    }
    if (_isSameMessageEvent(currentEvent, previousEvent)) {
        return true;
    }
    if (_isSameExceptionEvent(currentEvent, previousEvent)) {
        return true;
    }
    return false;
}
/** JSDoc */
function _isSameMessageEvent(currentEvent, previousEvent) {
    var currentMessage = currentEvent.message;
    var previousMessage = previousEvent.message;
    // If neither event has a message property, they were both exceptions, so bail out
    if (!currentMessage && !previousMessage) {
        return false;
    }
    // If only one event has a stacktrace, but not the other one, they are not the same
    if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
        return false;
    }
    if (currentMessage !== previousMessage) {
        return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
        return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
        return false;
    }
    return true;
}
/** JSDoc */
function _isSameExceptionEvent(currentEvent, previousEvent) {
    var previousException = _getExceptionFromEvent(previousEvent);
    var currentException = _getExceptionFromEvent(currentEvent);
    if (!previousException || !currentException) {
        return false;
    }
    if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
        return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
        return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
        return false;
    }
    return true;
}
/** JSDoc */
function _isSameStacktrace(currentEvent, previousEvent) {
    var currentFrames = _getFramesFromEvent(currentEvent);
    var previousFrames = _getFramesFromEvent(previousEvent);
    // If neither event has a stacktrace, they are assumed to be the same
    if (!currentFrames && !previousFrames) {
        return true;
    }
    // If only one event has a stacktrace, but not the other one, they are not the same
    if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
        return false;
    }
    currentFrames = currentFrames;
    previousFrames = previousFrames;
    // If number of frames differ, they are not the same
    if (previousFrames.length !== currentFrames.length) {
        return false;
    }
    // Otherwise, compare the two
    for (var i = 0; i < previousFrames.length; i++) {
        var frameA = previousFrames[i];
        var frameB = currentFrames[i];
        if (frameA.filename !== frameB.filename ||
            frameA.lineno !== frameB.lineno ||
            frameA.colno !== frameB.colno ||
            frameA.function !== frameB.function) {
            return false;
        }
    }
    return true;
}
/** JSDoc */
function _isSameFingerprint(currentEvent, previousEvent) {
    var currentFingerprint = currentEvent.fingerprint;
    var previousFingerprint = previousEvent.fingerprint;
    // If neither event has a fingerprint, they are assumed to be the same
    if (!currentFingerprint && !previousFingerprint) {
        return true;
    }
    // If only one event has a fingerprint, but not the other one, they are not the same
    if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
        return false;
    }
    currentFingerprint = currentFingerprint;
    previousFingerprint = previousFingerprint;
    // Otherwise, compare the two
    try {
        return !!(currentFingerprint.join('') === previousFingerprint.join(''));
    }
    catch (_oO) {
        return false;
    }
}
/** JSDoc */
function _getExceptionFromEvent(event) {
    return event.exception && event.exception.values && event.exception.values[0];
}
/** JSDoc */
function _getFramesFromEvent(event) {
    var exception = event.exception;
    if (exception) {
        try {
            // @ts-ignore Object could be undefined
            return exception.values[0].stacktrace.frames;
        }
        catch (_oO) {
            return undefined;
        }
    }
    else if (event.stacktrace) {
        return event.stacktrace.frames;
    }
    return undefined;
}
//# sourceMappingURL=dedupe.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/index.js






var windowIntegrations = {};
// This block is needed to add compatibility with the integrations packages when used with a CDN
var _window = (0,esm_global/* getGlobalObject */.V)();
if (_window.Sentry && _window.Sentry.Integrations) {
    windowIntegrations = _window.Sentry.Integrations;
}
var INTEGRATIONS = tslib_es6_assign(tslib_es6_assign(tslib_es6_assign({}, windowIntegrations), integrations_namespaceObject), esm_integrations_namespaceObject);

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./src/client/lib/error-tracker.ts


const {
  /* BrowserClient */ "yu": error_tracker_BrowserClient
} = browser_esm_namespaceObject;
const sentryTags = {};

// List of error messages we do not want to track in sentry
const filteredErrorEvents = ["XHR Error: "];

// Sentry adds a numbers of integrations by default that we do not want to be
// used in the client. For example, the GlobalHandlers integration
// (https://docs.sentry.io/platforms/javascript/#globalhandlers) will capture
// any errors on the page, including errors coming from the host. Therefore we
// want to only enable integrations that will not cause contamination of errors
// with the host.
const client = new error_tracker_BrowserClient({
  dsn: null,
  beforeSend(event) {
    if (event.message === "Could not connect frame channel.") {
      // Don't send event

      return null;
    }
    return event;
  },
  environment: "production",
  release: "1.7.22-69d2a1d",
  sampleRate: 0.25,
  autoSessionTracking: false,
  // Integrations don't seem to work with Sentry: https://github.com/getsentry/sentry-javascript/issues/2541
  // The exception will still be logged, however.
  integrations: [new INTEGRATIONS.InboundFilters(), new INTEGRATIONS.UserAgent(), new INTEGRATIONS.Breadcrumbs()]
});
const errorTracker = {
  setTag(tag, value) {
    sentryTags[tag] = value;
  },
  async trackException(error) {
    warn(error.message);
    if (filteredErrorEvents.includes(error.message)) {
      return;
    }
    const event = await eventFromException({}, error);
    event.tags = sentryTags;

    /**
     * The Sentry Hub, needed for breadcrumbs, tags, etc is global. As such, we
     * cannot use it in the client because it may conflict with the host page if
     * they also have Sentry configured. Instead we just track exceptions
     * directly from the client instance.
     */
    client.captureEvent(event);
  }
};
errorTracker.setTag("url", window.location.href);
/* harmony default export */ var error_tracker = (errorTracker);
;// CONCATENATED MODULE: ./src/common/constants/events.ts
/**
 * Embed Method Events
 */
const DELETE_HISTORY_EVENT = "DELETE_HISTORY";

/**
 * Chat Events
 */
const GET_WINDOW_ORIGIN = "GET_WINDOW_ORIGIN";
const CHAT_STARTED = "CHAT_STARTED";
const CHAT_WEBSOCKET_CONNECTED = "CHAT_WEBSOCKET_CONNECTED";
const ANALYTICS_EVENT = "ANALYTICS";
const CHATTER_EVENT = "CHATTER";
const CHATTER_LIVECHAT_EVENT = "LIVE_CHAT_UPDATE";
const CUSTOM_JAVASCRIPT_EVENT = "CUSTOM_JAVASCRIPT";
const RESET_FROM_CHAT_EVENT = "RESET_FROM_CHAT";
const ZD_JWT_AUTH_EVENT = "JWT_AUTH";
const ZD_JWT_AUTH_RESPONSE_EVENT = "JWT_AUTH_RESPONSE";
const CREATE_NOTIFICATION_EVENT = "CREATE_NOTIFICATION";
const BROWSER_HAS_NOTIFICATIONS_EVENT = "BROWSER_HAS_NOTIFICATIONS";
const BROWSER_HAS_NOTIFICATIONS_RESPONSE_EVENT = "BROWSER_HAS_NOTIFICATIONS_RESPONSE";
const REQUEST_NOTIFICATIONS_EVENT = "REQUEST_NOTIFICATIONS";
const END_CONVERSATION_EVENT = "END_CONVERSATION";
const PUBLISH_EVENT = "PUBLISH_EVENT";
const ZD_MESSAGING_HANDOFF = "ZD_MESSAGING_HANDOFF";

/**
 * Store Events
 */
const DISPATCH_EVENT = "DISPATCH";
const DISPATCH_RESPONSE_EVENT = "DISPATCH_RESPONSE";
const STATE_CHANGE_EVENT = "STATE_CHANGE";
const GET_EVENT = "GET";
const GET_RESPONSE_EVENT = "GET_RESPONSE";
const GET_STATE_EVENT = "GET_STATE";
const GET_STATE_RESPONSE_EVENT = "GET_STATE_RESPONSE";

/**
 * Event Timeouts
 */
// Make this one really long - on very bad internet connections this can take a while
const DEFAULT_CONNECTION_TIMEOUT = 60000;

/**
 * Internal Events
 */
const ALL_FRAMES_LOADED = "ALL_FRAMES_LOADED";

/**
 * Indicates state of FC (Frame Connection)
 */
let ConnectionState = /*#__PURE__*/function (ConnectionState) {
  ConnectionState["Done"] = "DONE";
  ConnectionState["Loading"] = "LOADING";
  ConnectionState["Failure"] = "FAILURE";
  ConnectionState["Uninitiated"] = "UNINITIATED";
  return ConnectionState;
}({});

/**
 * Embed Custom Events
 */
const GET_INFO = "GET_INFO";
const GET_INFO_RESPONSE = "GET_INFO_RESPONSE";
const SET_META_FIELDS = "SET_META_FIELDS";
const SET_META_FIELDS_RESPONSE = "SET_META_FIELDS_RESPONSE";
const STOP = "STOP";
const STOP_RESPONSE = "STOP_RESPONSE";
const DELETE_HISTORY = "DELETE_HISTORY";
const DELETE_HISTORY_RESPONSE = "DELETE_HISTORY_RESPONSE";
const RESET = "RESET";
const RESET_RESPONSE = "RESET_RESPONSE";
const CREATE_PROACTIVE = "CREATE_PROACTIVE";
const CREATE_PROACTIVE_RESPONSE = "CREATE_PROACTIVE_RESPONSE";
const TRACK_EVENT = "TRACK_EVENT";
const TRACK_EVENT_RESPONSE = "TRACK_EVENT_RESPONSE";
const TRIGGER_CAMPAIGN = "TRIGGER_CAMPAIGN";
const TRIGGER_CAMPAIGN_RESPONSE = "TRIGGER_CAMPAIGN_RESPONSE";
const EVAL_CAMPAIGN_CONDITIONS = "EVAL_CAMPAIGN_CONDITIONS";
const EVAL_CAMPAIGN_CONDITIONS_RESPONSE = "EVAL_CAMPAIGN_CONDITIONS_RESPONSE";
const CLOSE_CAMPAIGN = "CLOSE_CAMPAIGN";
const CLOSE_CAMPAIGN_RESPONSE = "CLOSE_CAMPAIGN_RESPONSE";
const SET_DEVICE_TOKEN = "SET_DEVICE_TOKEN";
const SET_DEVICE_TOKEN_RESPONSE = "SET_DEVICE_TOKEN_RESPONSE";

// Tells chat to send a greeting
const SEND_GREETING = "SEND_GREETING";

/**
 * Fetch Event Status
 */
let FetchEventStatus = /*#__PURE__*/function (FetchEventStatus) {
  FetchEventStatus["Success"] = "SUCCESS";
  FetchEventStatus["Failure"] = "FAILURE";
  return FetchEventStatus;
}({});
;// CONCATENATED MODULE: ./src/common/lib/channel.ts





class Channel {
  constructor() {
    _defineProperty(this, "trackedListeners", void 0);
    _defineProperty(this, "trackedTimeouts", void 0);
    _defineProperty(this, "eventType", void 0);
    _defineProperty(this, "isConnected", void 0);
  }
  removeEventListener(ref) {
    window.removeEventListener(this.eventType, ref);
    this.trackedListeners.delete(ref);
  }
  clearTrackedTimeout(ref) {
    clearTimeout(ref);
    this.trackedTimeouts.delete(ref);
  }
  clearTimeoutsAndListeners() {
    this.removeAllEventListeners();
    this.clearAllTrackedTimeouts();
  }
  fetch(requestEvent, responseEvent, payload) {
    var _this = this;
    let timeoutOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_CONNECTION_TIMEOUT;
    const id = uniqid_default()();
    return new Promise((resolve, reject) => {
      let timeout;
      let handlerRef;
      const initMessageHandler = function (type, responsePayload, responseId) {
        let status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : FetchEventStatus.Success;
        if (type === responseEvent && id === responseId) {
          _this.removeEventListener(handlerRef);
          clearTimeout(timeout);
          if (status === FetchEventStatus.Success) {
            resolve(responsePayload);
          } else {
            reject(new AdaEmbedError(`Fetch event error: ${responsePayload}`));
          }
        }
      };
      timeout = window.setTimeout(() => {
        this.removeEventListener(handlerRef);
        reject(new AdaEmbedError("Could not connect frame channel."));
      }, timeoutOverride);
      this.addTrackedTimeout(timeout);
      handlerRef = this.addEventListener(initMessageHandler);

      // Create the "request"
      this.postMessage(requestEvent, payload, id);
    }).catch(e => {
      // We should NOT silently catch errors for "GET_STATE" request event - it is critical for application to work.
      if (requestEvent === "GET_STATE") {
        throw new AdaEmbedError(`Failed to respond to "GET_STATE" request. Reason: "${e.message}".`);
      }

      // handling promise
      if (e.message !== "Could not connect frame channel.") {
        error_tracker.trackException(e);
      }
    });
  }
  addTrackedListener(ref) {
    window.addEventListener(this.eventType, ref);
    this.trackedListeners.add(ref);
  }
  addTrackedTimeout(ref) {
    this.trackedTimeouts.add(ref);
  }
  removeAllEventListeners() {
    this.trackedListeners.forEach(ref => {
      this.removeEventListener(ref);
    });
  }
  clearAllTrackedTimeouts() {
    this.trackedTimeouts.forEach(ref => {
      this.clearTrackedTimeout(ref);
    });
  }
}
;// CONCATENATED MODULE: ./src/common/lib/fc/index.ts



/**
 * Frame Channel: Used for postMessage communication between iFrames.
 * NOTE: iFrames must have the same domain - when postMessages are sent between
 * iframes they use the eventListener below to check if the target domain matches
 * the domain from where the postMessage originated from.
 */
class FrameChannel extends Channel {
  constructor(name, targetWindow, targetOrigin) {
    super();
    _defineProperty(this, "trackedListeners", new Set());
    _defineProperty(this, "trackedTimeouts", new Set());
    _defineProperty(this, "eventType", "message");
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "targetWindow", void 0);
    _defineProperty(this, "targetOrigin", void 0);
    _defineProperty(this, "isConnected", false);
    this.name = name;
    this.targetWindow = targetWindow;
    this.targetOrigin = targetOrigin || "*";
  }
  static isMessageEvent(event) {
    return "data" in event && event.data !== undefined;
  }
  postMessage(eventName, data, id, status) {
    this.targetWindow.postMessage(this.constructObjectToSend(eventName, data, id, status), this.targetOrigin);
  }
  isValidMessageEvent(event) {
    if (false) {}
    if (this.targetOrigin === "*") {
      return true;
    }
    if (!("origin" in event)) {
      return false;
    }
    return event.origin === this.targetOrigin;
  }
  addEventListener(handler) {
    const handleRef = event => {
      let parsedData;
      if (!this.isValidMessageEvent(event)) {
        return;
      }
      try {
        if (FrameChannel.isMessageEvent(event)) {
          parsedData = JSON.parse(event.data);
        }
      } catch {
        return;
      }
      const {
        name,
        type,
        payload,
        id,
        status
      } = parsedData;
      if (name !== this.name) {
        return;
      }
      handler(type, payload, id, status);
    };
    this.addTrackedListener(handleRef);
    return handleRef;
  }
  constructObjectToSend() {
    let eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let payload = arguments.length > 1 ? arguments[1] : undefined;
    let id = arguments.length > 2 ? arguments[2] : undefined;
    let status = arguments.length > 3 ? arguments[3] : undefined;
    // IE passes event message data as a string, so we normalize to string for all objects
    // (for all browsers)
    try {
      return JSON.stringify({
        name: this.name,
        type: eventName,
        payload,
        id,
        status
      });
    } catch (e) {
      const reason = e instanceof Error ? e.message : "unknown";
      const payloadRootKeys = payload && typeof payload === "object" ? Object.keys(payload) : [];
      if (eventName === "DISPATCH" && payload && typeof payload === "object") {
        const p = payload;
        const dispatchPayloadKeys = p.payload && typeof p.payload === "object" ? Object.keys(p.payload) : [];
        throw new AdaEmbedError(`Failed to stringify payload for "DISPATCH" event. Reason: "${reason}". Action: "${p.actionKey}". Payload keys: ${dispatchPayloadKeys.join(", ")}.`);
      }
      throw new AdaEmbedError(`Failed to stringify object. Reason: "${reason}". Event: "${eventName}". Payload keys: ${payloadRootKeys.join(", ")}.`);
    }
  }
}
;// CONCATENATED MODULE: ./src/client/helpers/events/index.ts
/**
 * Older browsers like IE11 cannot use Event and CustomEvent constructors. These
 * functions use the "old-school" approach if Event and CustomEvent are not
 * available on the window object.
 */

function createNewCustomEvent(eventName, payload) {
  let bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let customEvent;
  if (typeof CustomEvent === "function") {
    customEvent = new CustomEvent(eventName, {
      bubbles,
      cancelable,
      detail: payload
    });
  } else {
    customEvent = document.createEvent("CustomEvent");
    customEvent.initCustomEvent(eventName, bubbles, cancelable, payload);
  }
  return customEvent;
}
function createNewEvent(eventName) {
  let bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let event;
  if (typeof Event === "function") {
    event = new Event(eventName, {
      bubbles,
      cancelable
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent(eventName, bubbles, cancelable);
  }
  return event;
}
;// CONCATENATED MODULE: ./src/client/lib/ce.ts



const ADA_CUSTOM_EVENT = "ada-custom-message";

/**
 * Custom Event Channel
 */
class CustomEventChannel extends Channel {
  constructor() {
    super(...arguments);
    _defineProperty(this, "trackedListeners", new Set());
    _defineProperty(this, "trackedTimeouts", new Set());
    _defineProperty(this, "eventType", ADA_CUSTOM_EVENT);
    _defineProperty(this, "isConnected", true);
  } // isConnected will always be true for CustomEventChannel (it needs to implement the same properties as FrameChannel)
  // We want CustomEventChannel to have the same interface as FrameChannel
  postMessage(eventName, data, id, status) {
    const customEvent = createNewCustomEvent(this.eventType, this.constructObjectToSend(eventName, data, id, status));
    window.dispatchEvent(customEvent);
  }
  addEventListener(handler) {
    const handleRef = handleEvent => {
      if (!handleEvent.detail) {
        throw new Error("handleEvent.detail is undefined");
      }
      const {
        detail: {
          type,
          payload,
          id,
          status
        }
      } = handleEvent;
      return handler(type, payload, id, status);
    };
    this.addTrackedListener(handleRef);
    return handleRef;
  }

  // eslint-disable-next-line class-methods-use-this
  constructObjectToSend(type, payload, id, status) {
    return {
      type,
      payload,
      id,
      status
    };
  }
}
;// CONCATENATED MODULE: ./src/client/lib/message-service.ts




class MessageService {
  constructor() {
    _defineProperty(this, "channels", {
      local: new CustomEventChannel()
    });
  }
  registerFrameChannel(name, targetWindow, targetOrigin) {
    const frameChannel = new FrameChannel(name, targetWindow, targetOrigin);
    this.channels[name] = frameChannel;
    return frameChannel;
  }
  unregisterChannel(name) {
    const channel = this.channels[name];
    if (!channel) {
      throw new AdaEmbedError(`Channel "${name} not registered."`);
    }
    channel.clearTimeoutsAndListeners();
    delete this.channels[name];
  }
  getChannel(name) {
    return this.channels[name];
  }
  getAllChannels() {
    return Object.values(this.channels);
  }
}
// EXTERNAL MODULE: ./node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(5473);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
;// CONCATENATED MODULE: ./src/common/constants/actions.ts
let ActionCreators = /*#__PURE__*/function (ActionCreators) {
  ActionCreators["SET_STATE_ACTION"] = "setState";
  ActionCreators["TOGGLE_CHAT_ACTION"] = "toggleChat";
  ActionCreators["SET_CONNECTION_STATE"] = "setConnectionState";
  ActionCreators["SEND_UNREAD_MESSAGES_ACTION"] = "sendUnreadMessages";
  return ActionCreators;
}({});
let ActionTypes = /*#__PURE__*/function (ActionTypes) {
  ActionTypes["SET_STATE_TYPE"] = "SET_STATE";
  ActionTypes["TOGGLE_CHAT_TYPE"] = "TOGGLE_CHAT";
  ActionTypes["SET_META_FIELDS_TYPE"] = "SET_META_FIELDS";
  ActionTypes["SET_CONNECTION_STATE_TYPE"] = "SET_CONNECTION_STATE";
  ActionTypes["INCREMENT_MESSAGE_COUNT_TYPE"] = "INCREMENT_MESSAGE_COUNT";
  return ActionTypes;
}({});
;// CONCATENATED MODULE: ./src/client/helpers/event-subscriptions/index.ts
let subscriptions = [];
const getNextUniqueId = (() => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
})();
function unsubscribeEvent(id) {
  subscriptions = subscriptions.filter(s => s.id !== id);
}
function subscribeEvent(eventKey, callback) {
  const id = getNextUniqueId();
  subscriptions.push({
    eventKey,
    callback,
    id
  });
  return id;
}
function publishEvent(eventKey, data) {
  subscriptions.forEach(subscription => {
    // Using startsWith instead of === allows subscribing to a specific event OR a namespace,
    // e.g. ada:campaigns subscribes to ada:campaigns:opened, ada:campaigns:engaged, and
    // ada:campaigns:shown. Broadcasting this way simultaneously reaches subscriptions
    // that have subscribed to a specific event, and those that have subscribed to a namespace
    if (eventKey.startsWith(subscription.eventKey)) {
      // try/catch to guard against missing or bad callbacks
      try {
        subscription.callback(data, {
          eventKey
        });
      } catch {
        // silently fail and proceed with remaining callbacks
      }
    }
  });
}
;// CONCATENATED MODULE: ./src/common/helpers/http.ts
/**
 * Vanilla HTTP request. Returns a Promise.
 */
function httpRequest(obj) {
  return new Promise((resolve, reject) => {
    const method = obj.method || "GET";
    const {
      headers
    } = obj;
    const xhr = new XMLHttpRequest();

    // include the ada_request_origin query parameter since adding a header causes CORS issues.
    // this parameter would be used to tag the request's trace in Datadog.
    const requestURL = new URL(obj.url);
    requestURL.searchParams.set("ada_request_origin", "embed");
    if ("withCredentials" in xhr) {
      // XMLHttpRequest for Chrome/Firefox/Opera/Safari.
      xhr.open(method, requestURL.href, true);
    } else {
      return;
    }
    if (headers) {
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let jsonResponse;
        try {
          jsonResponse = JSON.parse(xhr.response);
          resolve(jsonResponse);
        } catch (error) {
          reject(new Error(`JSON Parse Error in XHR Request: ${error}`));
        }
      } else {
        reject(new Error(`XHR Error: ${xhr.statusText}`));
      }
    };
    xhr.onerror = () => reject(new Error(`XHR Error: ${xhr.statusText}`));
    xhr.send(obj.body);
  });
}
;// CONCATENATED MODULE: ./src/common/helpers/config-info.ts
const isProduction = "production" === "production";
;// CONCATENATED MODULE: ./src/common/helpers/url/constants.ts
const ports = {
  localhost: {
    api: 8000,
    chat: 8002,
    default: 9001
  },
  e2ereference: {
    api: 8000,
    chat: 8002,
    default: 9001
  }
};
;// CONCATENATED MODULE: ./src/common/helpers/url/index.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


const DEFAULT_ADA_DOMAIN = "ada";
function getClientCacheUrl(handle, cluster, domain) {
  if (false) {}
  const clientCacheHandle = "rollout";
  const envString = domain || DEFAULT_ADA_DOMAIN;
  const clusterString = cluster ? `.${cluster}` : "";
  const baseRolloutUrl = `https://${clientCacheHandle}${clusterString}.${envString}.support`;
  return `${baseRolloutUrl}/${handle}/client.json`;
}
function getEmbedURL(_ref) {
  let {
    frameName,
    handle,
    cluster,
    domain
  } = _ref;
  const clusterString = cluster ? `.${cluster}` : "";
  const domainString = domain || DEFAULT_ADA_DOMAIN;
  let host;
  if (isProduction) {
    host = `https://${handle}${clusterString}.${domainString}.support`;
  } else {
    host = `http://${handle}.localhost:9001`;
  }
  return `${host}/embed/${frameName}/${"69d2a1d"}/index.html`;
}
function constructQueryString(query) {
  return Object.keys(query).map(key => {
    const value = query[key];
    if (value === undefined || value === null) {
      return null;
    }
    return `${key}=${window.encodeURIComponent(value)}`;
  }).filter(v => v !== null).join("&");
}

/**
 * Generate the Chat / API URL
 */
function getURL(_ref2) {
  let {
    name,
    handle,
    cluster,
    domain,
    route,
    qp = {}
  } = _ref2;
  const queryString = constructQueryString(qp);
  const questionSym = queryString.length ? "?" : "";
  const routeString = route ? `${route}/` : "";
  const clusterString = cluster ? `.${cluster}` : "";
  const domainString = domain || DEFAULT_ADA_DOMAIN;
  const prodUrl = `https://${handle}${clusterString}.${domainString}.support/${name}/${routeString}${questionSym}${queryString}`;
  if (isProduction || false || domain) {
    return prodUrl;
  }
  if (window.location.hostname.includes("localhost") || handle === "e2ereference") {
    const domainName = window.location.hostname.includes("localhost") ? "localhost" : "e2ereference";
    const host = `${handle}.${domainName}:${ports[domainName].api}`;
    return `http://${host}/${routeString}${questionSym}${queryString}`;
  }
  return prodUrl;
}
function getChatURL(_ref3) {
  let {
    handle,
    version,
    cluster,
    domain,
    qp
  } = _ref3;
  const queryParams = _objectSpread(_objectSpread({}, qp), {}, {
    version
  });
  const queryString = constructQueryString(queryParams);
  const questionSym = queryString.length ? "?" : "";
  const clusterString = cluster ? `.${cluster}` : "";
  const domainString = domain || DEFAULT_ADA_DOMAIN;
  const prodUrl = `https://${handle}${clusterString}.${domainString}.support/chat/${questionSym}${queryString}`;
  if (isProduction || false || domain) {
    return prodUrl;
  }
  if (window.location.hostname.includes("localhost") || handle === "e2ereference") {
    const domainName = window.location.hostname.includes("localhost") ? "localhost" : "e2ereference";
    if (domainName === "localhost") {
      // Chat should be on a different domain (even though the port is different).
      // We need this to test Embed+Chat behaviour when third-party cookies are disabled (incognito mode).
      return `${window.location.protocol}//${handle}.chat:8002/${questionSym}${queryString}`;
    }
    const host = `${window.location.hostname}:${ports[domainName].chat}`;
    return `http://${host}/${questionSym}${queryString}`;
  }
  return prodUrl;
}
function escapeUrlParam(param) {
  /**
   * Escapes a URL parameter to prevent XSS attacks.
   *
   * The following characters are escaped:
   *  &  is replaced with &amp;, but only if it is not already part of an existing HTML entity (&amp;, &lt;, &gt;, &quot;, &apos;)
   *  <  is replaced with &lt;
   *  >  is replaced with &gt;
   *  "  is replaced with &quot;
   *  '  is replaced with &apos;
   *  /  is replaced with &#47;
   *  ?  is replaced with &#63;
   *  =  is replaced with &#61;
   *  .  is replaced with &#46;
   */
  return param.replace(/&(?!amp)(?!lt;)(?!gt;)(?!quot)(?!apos;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#47;").replace(/\?/g, "&#63;").replace(/=/g, "&#61;").replace(/\./g, "&#46;");
}
;// CONCATENATED MODULE: ./src/client/store/actions/index.ts





const actions = {
  setState: _ref => {
    let {
      payload = {}
    } = _ref;
    return {
      type: ActionTypes.SET_STATE_TYPE,
      payload
    };
  },
  toggleChat: _ref2 => {
    let {
      currentState
    } = _ref2;
    /**
     * Clear the persisted unread message count
     */
    if (currentState.chatterToken) {
      if (!currentState.handle) {
        throw new AdaEmbedError("`currentState.handle` is undefined");
      }
      const url = getURL({
        name: "api",
        handle: currentState.handle,
        cluster: currentState.cluster,
        domain: currentState.domain,
        route: `chatters/${currentState.chatterToken}/live_chat_unread_amount`
      });
      httpRequest({
        url,
        method: "DELETE"
      }).catch(e => {
        console.error(e);
      });
    }
    const {
      hasChatOpenedAfterProactiveMessagesShown,
      wasCampaignShownButNowClosed,
      proactiveCampaignHadMessages
    } = currentState;
    if (!currentState.isDrawerOpen && !hasChatOpenedAfterProactiveMessagesShown && !wasCampaignShownButNowClosed && proactiveCampaignHadMessages && currentState.latestCampaignKey) {
      if (!currentState.handle) {
        throw new AdaEmbedError("`currentState.handle` is undefined");
      }
      const url = getURL({
        name: "api",
        handle: currentState.handle,
        cluster: currentState.cluster,
        domain: currentState.domain
      });
      httpRequest({
        url: `${url}business_events/track`,
        method: "POST",
        headers: {
          "Session-Auth": currentState.sessionToken || "",
          "Chatter-Token": currentState.chatterToken || ""
        },
        body: JSON.stringify({
          event_key: `ada:message_opened:${currentState.latestCampaignKey}`,
          value: 0,
          meta: {
            campaign_key: currentState.latestCampaignKey
          },
          customer_query: {
            token: currentState.chatterToken
          }
        })
      });
      publishEvent("ada:campaigns:opened", {
        campaignKey: currentState.latestCampaignKey
      });
    }
    return {
      type: ActionTypes.TOGGLE_CHAT_TYPE
    };
  },
  sendUnreadMessages: _ref3 => {
    let {
      payload
    } = _ref3;
    return {
      type: ActionTypes.INCREMENT_MESSAGE_COUNT_TYPE,
      payload: payload
    };
  },
  setConnectionState: _ref4 => {
    let {
      payload
    } = _ref4;
    return {
      type: ActionTypes.SET_CONNECTION_STATE_TYPE,
      payload: payload
    };
  }
};
// EXTERNAL MODULE: ./node_modules/@ada-support/web-storage/dist/index.js
var dist = __webpack_require__(6183);
;// CONCATENATED MODULE: ./src/client/store/mutations/index.ts

function mutations_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function mutations_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? mutations_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : mutations_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



const mutations = (state, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CHAT_TYPE:
      {
        let {
          hasChatOpenedAfterProactiveMessagesShown
        } = state;
        const {
          wasCampaignShownButNowClosed
        } = state;
        if (!state.isDrawerOpen && state.latestCampaignKey && !hasChatOpenedAfterProactiveMessagesShown && !wasCampaignShownButNowClosed) {
          hasChatOpenedAfterProactiveMessagesShown = true;
        }
        dist/* adaLocalStorage */.BB.setItem("ada-embed_is-drawer-open", !state.isDrawerOpen);
        return mutations_objectSpread(mutations_objectSpread({}, state), {}, {
          isDrawerOpen: !state.isDrawerOpen,
          isIntroShown: false,
          drawerHasBeenOpened: true,
          unreadMessageCount: 0,
          hasChatOpenedAfterProactiveMessagesShown
        });
      }
    case ActionTypes.SET_STATE_TYPE:
      return mutations_objectSpread(mutations_objectSpread({}, state), action.payload);
    case ActionTypes.INCREMENT_MESSAGE_COUNT_TYPE:
      {
        const {
          messages
        } = action.payload;
        // Filter out Proactive Messages
        const nonProactive = messages.filter(message => !message.campaign_key);
        return mutations_objectSpread(mutations_objectSpread({}, state), {}, {
          unreadMessageCount: nonProactive.length
        });
      }
    case ActionTypes.SET_CONNECTION_STATE_TYPE:
      {
        const newConnections = mutations_objectSpread(mutations_objectSpread({}, state.connections), action.payload);
        const connectionValues = Object.values(newConnections);
        let appConnectionState;
        const done = connectionValues.every(connectionState => connectionState === ConnectionState.Done);
        const loading = connectionValues.some(connectionState => connectionState === ConnectionState.Done);
        const failure = connectionValues.some(connectionState => connectionState === ConnectionState.Failure);
        if (done) {
          appConnectionState = ConnectionState.Done;
        } else if (failure) {
          appConnectionState = ConnectionState.Failure;
        } else if (loading) {
          appConnectionState = ConnectionState.Loading;
        } else {
          appConnectionState = ConnectionState.Uninitiated;
        }
        return mutations_objectSpread(mutations_objectSpread({}, state), {}, {
          connections: newConnections,
          appConnectionState
        });
      }
    default:
      return state;
  }
};
/* harmony default export */ var store_mutations = (mutations);
;// CONCATENATED MODULE: ./src/client/store/index.ts

function store_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function store_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? store_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : store_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






class Store {
  constructor(initialState, messageService) {
    _defineProperty(this, "state", void 0);
    _defineProperty(this, "defaultState", void 0);
    _defineProperty(this, "messageService", void 0);
    this.defaultState = initialState;
    this.state = initialState;
    this.messageService = messageService;
  }
  addChannelListener(name) {
    const channel = this.messageService.channels[name];
    if (!channel) {
      warn(`The ${name} channel should be registered first.`);
      return;
    }
    channel.addEventListener((type, payload, id) => {
      this.handleEvents(channel, type, payload, id);
    });
  }
  handleEvents(channel, type, payload, id) {
    if (type === GET_EVENT) {
      const {
        key
      } = payload;
      this.getEventHandler(channel, key, id);
    }
    if (type === GET_STATE_EVENT) {
      this.getStateEventHandler(channel, id);
    }
    if (type === DISPATCH_EVENT) {
      this.dispatchEventHandler(channel, payload, id);
    }
  }
  getEventHandler(channel, key, id) {
    const val = this.state[key];
    channel.postMessage(GET_RESPONSE_EVENT, val, id);
  }
  getStateEventHandler(channel, id) {
    channel.postMessage(GET_STATE_RESPONSE_EVENT, this.state, id);
  }
  dispatchEventHandler(channel, data, id) {
    const {
      actionKey,
      payload
    } = data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const actionKeyExists = ak => Object.values(ActionCreators).includes(ak);
    if (!actionKeyExists(actionKey)) {
      console.error(`Action "${actionKey} doesn't exist.`);
      return;
    }
    const actionVal = actions[actionKey]({
      currentState: this.state,
      payload,
      // eslint-disable-next-line @typescript-eslint/ban-types
      dispatch: (ak, p) => {
        this.dispatchEventHandler(channel, {
          actionKey: ak,
          payload: p
        });
      }
    });
    // TODO: Apply middleware here
    const newState = store_mutations(this.state, actionVal);
    this.commitStateChanges(channel, newState, id);
  }
  commitStateChanges(channelToUpdate, newState, id) {
    /**
     * To help debug state issues. We do not want this in production.
     */
    if (false) {}
    const channels = this.messageService.getAllChannels();

    /**
     * Dispatch should always receive newState whether a state change occurred or not
     */
    channelToUpdate.postMessage(DISPATCH_RESPONSE_EVENT, newState, id);

    /**
     * Publish state changes
     */
    if (json_stable_stringify_default()(this.state) !== json_stable_stringify_default()(newState)) {
      // Assign new state
      this.state = store_objectSpread(store_objectSpread({}, this.state), newState);
      channels.forEach(channel => {
        /**
         * If a channel is not connected, the postMessage event will trigger an error:
         * "Failed to execute 'postMessage' on 'DOMWindow':
         * The target origin provided ('...') does not match the recipient window's origin ('...')."
         *
         * This happens when a postMessage is sent to a window that hasn't loaded yet.
         * The error is innocuous, but we check for connection to suppress this error.
         */
        if (channel.isConnected) {
          channel.postMessage(STATE_CHANGE_EVENT, this.state);
        }
      });
    }
  }
}
;// CONCATENATED MODULE: ./src/client/lib/store-proxy.ts



class StoreProxy {
  constructor(initialState, messageService) {
    _defineProperty(this, "localChannel", void 0);
    _defineProperty(this, "store", void 0);
    _defineProperty(this, "registeredCallbacks", []);
    _defineProperty(this, "get", key => this.localChannel.fetch(GET_EVENT, GET_RESPONSE_EVENT, {
      key
    }));
    _defineProperty(this, "getState", () => this.localChannel.fetch(GET_STATE_EVENT, GET_STATE_RESPONSE_EVENT));
    _defineProperty(this, "dispatch", (actionKey, payload) => this.localChannel.fetch(DISPATCH_EVENT, DISPATCH_RESPONSE_EVENT, {
      actionKey,
      payload
    }));
    _defineProperty(this, "subscribe", callback => {
      this.registeredCallbacks.push(callback);
    });
    _defineProperty(this, "addChannelListener", name => this.store.addChannelListener(name));
    this.localChannel = messageService.channels.local;
    this.store = new Store(initialState, messageService);
    this.store.addChannelListener("local");
    this.localChannel.addEventListener((type, payload) => {
      if (type === STATE_CHANGE_EVENT) {
        this.registeredCallbacks.forEach(registeredCallback => {
          registeredCallback(payload);
        });
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/client/helpers/local-notifications/index.ts
const browserHasNotificationSupport = ("Notification" in window);
function checkIfUserHasGivenPermission() {
  if (!browserHasNotificationSupport) {
    return false;
  }
  return Notification.permission === "granted";
}
function requestNotificationPermission() {
  if (!browserHasNotificationSupport) {
    return null;
  }
  return Notification.requestPermission();
}
function createNotification(title, isChatOpen, onClickHandler, options) {
  if (!checkIfUserHasGivenPermission() || !document.hidden && isChatOpen) {
    return null;
  }
  const notification = new Notification(title, options);
  notification.onclick = () => {
    if (onClickHandler) {
      onClickHandler();
    }
    notification.close();
  };
  return notification;
}
function notificationPermissionGuard(state) {
  if (state === "granted" || state === "denied") {
    return state;
  }
  return "default";
}

/**
 * Used to listen for changes in Notification permission state
 */
function notificationPermissionsListener(notificationPermissionsChangeHandler) {
  if (!("permissions" in navigator)) {
    return;
  }
  navigator.permissions.query({
    name: "notifications"
  }).then(notificationPerm => {
    // eslint-disable-next-line no-param-reassign
    notificationPerm.onchange = () => {
      notificationPermissionsChangeHandler(notificationPermissionGuard(notificationPerm.state));
    };
  }).catch(() => {
    // We have to catch an exception to avoid errors being thrown in console
  });
}
;// CONCATENATED MODULE: ./src/common/constants/storage-keys.ts
const CHATTER_TOKEN_STORAGE_KEY = "chatter";
const CHATTER_CREATED_STORAGE_KEY = "ada-embed_chatter-created";
const SESSION_AUTH_TOKEN_STORAGE_KEY = "ada-embed_session-token";
const IN_LIVE_CHAT_STORAGE_KEY = "inLiveChat";
const ZD_SESSION_STORAGE_KEY = "ada-embed_zd-session-id";
const ZD_PREVIOUS_TAGS_STORAGE_KEY = "ada-embed_zd-previous-tags";
const IS_DRAWER_OPEN_STORAGE_KEY = "ada-embed_is-drawer-open";
const ZD_MESSAGING_EXTERNAL_USER_ID_STORAGE_KEY = "ada-embed_zd-messaging-external-user-id";
const ZD_MESSAGING_CHATTER_CREATED_STORAGE_KEY = "ada-embed_zd-messaging-chatter-created";

/** @deprecated - Use CHATTER_TOKEN_STORAGE_KEY */
const CHATTER_STORAGE_KEY = (/* unused pure expression or super */ null && (CHATTER_TOKEN_STORAGE_KEY));
;// CONCATENATED MODULE: ./src/client/store/state.ts




function getValueFromStorage(key) {
  return dist/* adaLocalStorage */.BB.getItem(key) || dist/* adaSessionStorage */.ad.getItem(key);
}
const getInitialState = adaSettings => ({
  adaSettings,
  handle: adaSettings.handle,
  styles: undefined,
  domain: undefined,
  cluster: undefined,
  language: undefined,
  greeting: undefined,
  crossWindowPersistence: true,
  hideMask: true,
  metaFields: {},
  sensitiveMetaFields: {},
  parentElement: undefined,
  isDrawerOpen: false,
  drawerHasBeenOpened: false,
  enabledLanguages: ["en"],
  client: undefined,
  isIntroShown: false,
  wasIntroShown: false,
  isButtonShown: false,
  introDimensions: {},
  unreadMessageCount: 0,
  initialURL: undefined,
  privateMode: false,
  rolloutOverride: undefined,
  chatterToken: getValueFromStorage(CHATTER_TOKEN_STORAGE_KEY) || undefined,
  chatterCreated: getValueFromStorage(CHATTER_CREATED_STORAGE_KEY) || undefined,
  sessionToken: getValueFromStorage(SESSION_AUTH_TOKEN_STORAGE_KEY) || undefined,
  zdSessionId: getValueFromStorage(ZD_SESSION_STORAGE_KEY) || undefined,
  zdPreviousTags: getValueFromStorage(ZD_PREVIOUS_TAGS_STORAGE_KEY) || undefined,
  zdMessagingExternalUserId: getValueFromStorage(ZD_MESSAGING_EXTERNAL_USER_ID_STORAGE_KEY) || null,
  zdMessagingChatterCreated: getValueFromStorage(ZD_MESSAGING_CHATTER_CREATED_STORAGE_KEY) || null,
  connections: {},
  appConnectionState: ConnectionState.Uninitiated,
  testMode: false,
  embedStyles: undefined,
  notificationsPermission: browserHasNotificationSupport ? Notification.permission : undefined,
  browserHasNotificationSupport: browserHasNotificationSupport,
  preload: false,
  chatDimensions: undefined,
  isChatWebsocketConnected: false,
  latestCampaignKey: undefined,
  hasChatOpenedAfterProactiveMessagesShown: false,
  chatterInLiveChat: false,
  wasCampaignShownButNowClosed: false,
  proactiveCampaignHadMessages: false,
  deviceToken: null
});
;// CONCATENATED MODULE: ./src/common/helpers/get-intro-for-url.ts
function getProcessedPath(path) {
  const regex = /^http(s)?:\/\/(www.)?/;
  return path.trim().replace(regex, "");
}
function getPathSearchRegex(path) {
  const params = path.split("?");
  if (params.length > 1) {
    const escapedParams = encodeURI(params[1]);
    return new RegExp(`^${params[0]}\\?${escapedParams}$`);
  }
  const newPath = path.replace("*", ".*");
  return new RegExp(`^${newPath}$`);
}
function doesUrlMatchPath(url, path) {
  const processedUrl = getProcessedPath(url);
  const processedPath = getProcessedPath(path);
  const pathRegex = getPathSearchRegex(processedPath);
  const matches = pathRegex.exec(processedUrl);
  return matches !== null;
}
;// CONCATENATED MODULE: ./src/common/helpers/TriggerConditionEvaluator.ts

const stripTrailingSlash = url => url.endsWith("/") ? url.slice(0, -1) : url;
const evalUrlMatchTriggerCondition = (triggerCondition, url) => {
  /**
   * Behaviour
   * regex       Regex match (as per javascript string .match) over the whole string including
   *             query params
   * ends-with   Match only the URL without query params. Match including trailing slashes
   * contains    Match substring including query params
   * equals      Matches the exact URL, without query params
   */
  const urlWithoutQueryParams = url.split("?")[0];
  return triggerCondition.conditions_any.some(condition => {
    switch (condition.type) {
      case "ends-with":
        {
          return urlWithoutQueryParams.endsWith(condition.value) || stripTrailingSlash(urlWithoutQueryParams).endsWith(condition.value);
        }
      case "contains":
        return url.includes(condition.value);
      case "equals":
        {
          return doesUrlMatchPath(urlWithoutQueryParams, condition.value);
        }
      case "regex":
        {
          const rx = new RegExp(condition.value);
          return Boolean(rx.exec(url));
        }

      // If an unknown URL match type is found, ignore it - one of the others will have to match
      default:
        return false;
    }
  });
};
const evalDatetimeTriggerCondition = (triggerCondition, currentDateTime) => {
  const conditionDatetime = new Date(triggerCondition.condition.datetime);
  switch (triggerCondition.condition.operator) {
    case "before-exclusive":
      return currentDateTime < conditionDatetime;
    case "after-inclusive":
      return currentDateTime >= conditionDatetime;
    // If an unknown comparator is found, ignore the trigger condition - do not block campaign
    default:
      return true;
  }
};
const evalTriggerCondition = triggerCondition => {
  switch (triggerCondition.type) {
    case "url-match":
      return evalUrlMatchTriggerCondition(triggerCondition, window.location.href);
    case "datetime":
      return evalDatetimeTriggerCondition(triggerCondition, new Date());
    // If an unknown trigger type is found, ignore the trigger condition - do not block campaign
    default:
      return true;
  }
};
;// CONCATENATED MODULE: ./src/businessEvents/businessEvent.ts

function businessEvent_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function businessEvent_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? businessEvent_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : businessEvent_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



function trackEventImpl(adaSettings, chatterToken, sessionToken, params) {
  const {
    handle,
    cluster,
    domain
  } = adaSettings;
  const baseApiUrl = getURL({
    name: "api",
    handle,
    cluster: cluster,
    domain
  });
  if (!chatterToken || !sessionToken) {
    return;
  }
  const {
    eventKey,
    value,
    meta
  } = params;

  // eslint-disable-next-line @typescript-eslint/ban-types
  httpRequest({
    url: `${baseApiUrl}business_events/track`,
    method: "POST",
    headers: {
      "Session-Auth": sessionToken,
      "Chatter-Token": chatterToken
    },
    body: JSON.stringify({
      event_key: eventKey,
      value,
      meta: businessEvent_objectSpread(businessEvent_objectSpread({}, meta), {}, {
        _ada_url: window.location.href.split("?")[0]
      }),
      customer_query: {
        token: chatterToken
      }
    })
  });
}
const getEventsToTrigger = businessEvents =>
/**
 * return all events that have ANY of their conditions met
 * we may change this in the future
 */
businessEvents.filter(businessEvent => businessEvent.trigger_conditions.some(triggerCondition => evalTriggerCondition(triggerCondition)));
;// CONCATENATED MODULE: ./src/common/types/languages.ts
const Languages = {
  en: "en",
  // English
  be: "be",
  // Belarusian
  da: "da",
  // Danish
  de: "de",
  // German
  es: "es",
  // Spanish
  fi: "fi",
  // Finnish
  fr: "fr",
  // French
  hi: "hi",
  // Hindi
  ht: "ht",
  // Haitian Creole
  id: "id",
  // Indonesian
  it: "it",
  // Italian
  ja: "ja",
  // Japanese
  km: "km",
  // Khmer
  ko: "ko",
  // Korean
  ms: "ms",
  // Malay
  my: "my",
  // Burmese
  no: "no",
  // Norwegian
  nl: "nl",
  // Dutch
  pa: "pa",
  // Punjabi
  pt: "pt",
  // Portuguese
  ru: "ru",
  // Russian
  sv: "sv",
  // Swedish
  ta: "ta",
  // Tamil
  th: "th",
  // Thai
  tl: "tl",
  // Tagalog
  tr: "tr",
  // Turkish
  uk: "uk",
  // Ukrainian
  vi: "vi",
  // Vietnamese
  zh: "zh",
  // Chinese simplified
  "zh-tw": "zh-tw",
  // Chinese traditional
  bg: "bg",
  // Bulgarian
  ro: "ro",
  // Romanian
  el: "el",
  // Greek
  hu: "hu",
  // Hungarian
  pl: "pl",
  // Polish
  cs: "cs",
  // Czech
  et: "et",
  // Estonian
  hr: "hr",
  // Croatian
  lt: "lt",
  // Lithuanian
  lv: "lv",
  // Latvian
  sl: "sl",
  // Slovenian
  sk: "sk",
  // Slovak
  is: "is",
  // Icelandic
  ar: "ar",
  // Arabic
  he: "he" // Hebrew
};
;// CONCATENATED MODULE: ./src/common/helpers/get-browser-language.ts

const DEFAULT_LANGUAGE_CODE = "en";
const SUPPORTED_LANGUAGES = [...Object.values(Languages)];
/**
 * Gets a language code from the browser. Stolen from `chat` repo
 *
 * NOTE: THIS SHOULD NOT EXIST. IF YOU FIND YOURSELF IN A POSITION WHERE YOU NEED TO SUPPORT THIS
 * CODE, PLEASE DO EVERYTHING IN YOUR POWER TO AVOID IT. THIS CODE SHOULD DIE. EMBED SHOULD NOT BE
 * IN CHARGE OF PICKING LANGUAGES AND ANY CODE MAKING USE OF THIS FUNCTION SHOULD BE KEPT TO AN
 * ABSOLUTE MINIMUM.
 *
 * THIS WAS A NECESSARY HACK BECAUSE INTROS WERE IMPLEMENTED IN EMBED, BEFORE TRANSLATIONS
 * WERE A THING, AND GOT LEFT BEHIND DURING THE IMPLEMENTATION THEREOF.
 *
 * I'M SO SORRY.
 */

function isSupportedLanguageCode(languageCode) {
  return SUPPORTED_LANGUAGES.includes(languageCode);
}
const get_browser_language_getBrowserLanguage = () => {
  const browserLanguageString = (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || DEFAULT_LANGUAGE_CODE).toLowerCase();
  if (isSupportedLanguageCode(browserLanguageString)) {
    return browserLanguageString;
  }
  if (browserLanguageString.includes("-")) {
    // an unsupported, hyphenated language code was received so return the main locale
    // if it is supported
    const mainLocale = browserLanguageString.split("-")[0];
    if (isSupportedLanguageCode(mainLocale)) {
      return mainLocale;
    }
  }
  return browserLanguageString;
};
/* harmony default export */ var get_browser_language = (get_browser_language_getBrowserLanguage);
;// CONCATENATED MODULE: ./src/services/helpers.ts
const NO_OP_FUNCTION = () => {
  // Do nothing
};
function isStartOptions(input) {
  if (!(typeof input === "object")) {
    return false;
  }
  if (input === null) {
    return false;
  }
  return typeof input.handle === "string";
}
;// CONCATENATED MODULE: ./src/campaigns/campaign.ts

function campaign_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function campaign_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? campaign_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : campaign_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }








/**
 * To enforce frequency restrictions, when a campaign is shown we add its id to a list of shown
 * campaigns, and any campaigns in this list will not be shown again until removed from the list.
 *
 * For once-per-session we use sessionStorage which clears every (page) session.
 * For once-per-user we use localStorage which does not clear.
 *
 * We only check the list matching the current frequency of the campaign - this ensures that, for
 * example, if a campaign is shown to a user with frequency once-per-user and then has its
 * frequency changed to every-time, it will still be shown properly.
 */
function campaignShownWithinFrequency(campaign, handle) {
  switch (campaign.message_frequency) {
    case "every-time":
      return false;
    case "once-per-session":
      {
        const storageValue = dist/* adaSessionStorage */.ad.getFnItem("marketing_campaigns_shown");
        const perSessionCampaigns = storageValue ? (storageValue[handle] || "").split(",") : [];
        return perSessionCampaigns.includes(campaign.campaign_key);
      }
    case "once-per-user":
      {
        const storageValue = dist/* adaLocalStorage */.BB.getFnItem("marketing_campaigns_shown");
        const perSessionCampaigns = storageValue ? (storageValue[handle] || "").split(",") : [];
        return perSessionCampaigns.includes(campaign.campaign_key);
      }
    default:
      return false;
  }
}
function addCampaignToStorageString(oldStorageValue, campaignId) {
  return oldStorageValue ? `${oldStorageValue},${campaignId}` : campaignId;
}

// Record the campaign as being shown to prevent showing again based on frequency if applicable
function recordCampaignTrigger(campaignKey, frequency, handle) {
  switch (frequency) {
    case "every-time":
      break;
    case "once-per-session":
      {
        const currentStorageValue = dist/* adaSessionStorage */.ad.getFnItem("marketing_campaigns_shown");
        const newStorageValue = addCampaignToStorageString(currentStorageValue ? currentStorageValue[handle] || "" : "", campaignKey);
        dist/* adaSessionStorage */.ad.setFnItem("marketing_campaigns_shown", campaign_objectSpread(campaign_objectSpread({}, currentStorageValue), {}, {
          [handle]: newStorageValue
        }));
        break;
      }
    case "once-per-user":
      {
        const currentStorageValue = dist/* adaLocalStorage */.BB.getFnItem("marketing_campaigns_shown");
        const newStorageValue = addCampaignToStorageString(currentStorageValue ? currentStorageValue[handle] || "" : "", campaignKey);
        dist/* adaLocalStorage */.BB.setFnItem("marketing_campaigns_shown", campaign_objectSpread(campaign_objectSpread({}, currentStorageValue), {}, {
          [handle]: newStorageValue
        }));
        break;
      }

    // If an unknown frequency type is found, do nothing
    default:
      break;
  }
}
function triggerCampaignImpl(_ref) {
  let {
    adaSettings,
    chatterToken,
    campaign,
    ignoreStatus,
    ignoreFrequency,
    clearCampaignToTrigger,
    messageService
  } = _ref;
  const {
    handle,
    cluster,
    domain
  } = adaSettings;
  clearCampaignToTrigger();

  /**
   * getCampaignToTrigger already checks this - it needs to because if the frequency check fails,
   * we don't want it to block other campaigns. However, we still need to check here for the manual
   * triggering case.
   */
  const doesPassFrequencyCheck = ignoreFrequency || !campaignShownWithinFrequency(campaign, handle);
  if (!doesPassFrequencyCheck) {
    return;
  }
  if (!(campaign.status === "active") && !ignoreStatus) {
    warn(`Campaign with key ${campaign.campaign_key} is not active. If you still want to trigger it, use the ignoreStatus option.`);
    return;
  }
  recordCampaignTrigger(campaign.campaign_key, campaign.message_frequency, handle);
  if (campaign.message_text) {
    const localChannel = messageService.getChannel("local");
    const language = adaSettings.language || get_browser_language();
    const body = campaign.message_text[language];
    const duration = campaign.message_duration;
    const responseId = campaign.follow_up_response_id;
    if (body) {
      localChannel.postMessage(CREATE_PROACTIVE, {
        body,
        duration,
        responseId
      });
    } else {
      warn(`No translation for this campaign (campaign_key: ${campaign.campaign_key}) is defined for the language: ${language}`);
    }
  } else {
    const url = getURL({
      name: "api",
      route: `campaigns/trigger/${campaign.campaign_key}`,
      handle,
      cluster: cluster,
      domain
    });
    httpRequest({
      url,
      method: "POST",
      body: JSON.stringify({
        customer_query: {
          token: chatterToken
        },
        ignore_status: ignoreStatus
      })
    }).catch(NO_OP_FUNCTION); // we don't want to log errors here, it may fail because of rate limiting
  }
}

const getCampaignToTrigger = (adaSettings, marketingCampaigns, options, onlyBasic) => {
  const {
    ignoreStatus = false,
    ignoreFrequency = false
  } = options;
  const {
    handle
  } = adaSettings;
  return marketingCampaigns === null || marketingCampaigns === void 0 ? void 0 : marketingCampaigns.find(campaign => {
    if (campaign.status !== "active" && !ignoreStatus) {
      return false;
    }
    if (onlyBasic && !campaign.message_text) {
      return false;
    }

    // Campaigns with no trigger conditions can only be triggered manually
    if (!campaign.trigger_conditions || campaign.trigger_conditions.length === 0) {
      return false;
    }
    const conditionsMet = campaign.trigger_conditions.every(tc => evalTriggerCondition(tc));
    const doesPassFrequencyCheck = ignoreFrequency || !campaignShownWithinFrequency(campaign, handle);
    return conditionsMet && doesPassFrequencyCheck;
  });
};
;// CONCATENATED MODULE: ./src/common/helpers/fetch-client.ts




function isClientObject(client) {
  // We require the following properties defined
  return ["handle", "rollout", "chat", "features"].every(key => client[key] !== undefined);
}

/**
 * Tries fetching the client from cache. If this fails, tries fetching it from API.
 * If this also fails, returns null.
 */
async function fetchClient(handle, cluster, domain, language) {
  try {
    const cachedClient = await httpRequest({
      url: getClientCacheUrl(handle, cluster, domain)
    });

    // We may not have "rollout" data cached for all clients
    // In this case, don't return here and instead try to get it from API below
    // Also fall back to API if the cached client does not match the expected format
    if (isClientObject(cachedClient)) {
      return {
        client: cachedClient
      };
    }
  } catch (e) {
    if (e instanceof Error) {
      error_tracker.trackException(e);
    }
  }

  // If we failed to get the client from cache, try getting it directly from API
  try {
    return await httpRequest({
      url: getURL({
        name: "api",
        handle,
        cluster,
        domain,
        qp: {
          url: window.location.href,
          language
        }
      })
    });
  } catch (e) {
    // Do not trackException here because this can fail a lot due to poor network connections
    warn("Failed to fetch client from API.");
  }
  return null;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__(8233);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js
var index_of = __webpack_require__(9186);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/keys.js
var keys = __webpack_require__(20);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose.js


function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (index_of(excluded).call(excluded, key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutProperties.js



function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols) {
    var sourceSymbolKeys = get_own_property_symbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (index_of(excluded).call(excluded, key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
;// CONCATENATED MODULE: ./src/common/models/client/index.ts


const _excluded = ["chat", "chat_button", "features", "handle", "language", "persistence", "privacy", "rollout", "alternative_bot", "tint", "translated_languages"];

class Client {
  constructor(clientResponse) {
    _defineProperty(this, "tint", void 0);
    _defineProperty(this, "chat", void 0);
    _defineProperty(this, "intro", void 0);
    _defineProperty(this, "handle", void 0);
    _defineProperty(this, "rollout", void 0);
    _defineProperty(this, "alternative_bot", void 0);
    _defineProperty(this, "language", void 0);
    _defineProperty(this, "privacy", void 0);
    _defineProperty(this, "features", void 0);
    _defineProperty(this, "persistence", void 0);
    _defineProperty(this, "chat_button", void 0);
    _defineProperty(this, "business_events", void 0);
    _defineProperty(this, "marketing_campaigns_order", void 0);
    _defineProperty(this, "marketing_campaigns", void 0);
    _defineProperty(this, "ui_settings", void 0);
    _defineProperty(this, "translated_languages", void 0);
    const {
        chat,
        chat_button: chatButton,
        features,
        handle,
        language,
        persistence,
        privacy,
        rollout,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        alternative_bot,
        tint,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        translated_languages
      } = clientResponse,
      rest = _objectWithoutProperties(clientResponse, _excluded);
    this.chat = chat;
    this.chat_button = chatButton;
    this.features = features;
    this.handle = handle;
    this.language = language;
    this.persistence = persistence;
    this.privacy = privacy;
    this.rollout = rollout;
    this.tint = tint;
    this.translated_languages = translated_languages;
    this.alternative_bot = alternative_bot;

    /**
     * Even if some properties are not used by Embed2, they may be used by Chat.
     * Chat can "pull" the client object from Embed2 in order to reduce an API
     * request. Embed2 should thus not modify keys.
     */
    Object.assign(this, rest);
  }
}
function getButtonText(client) {
  var _client$ui_settings, _client$ui_settings$e;
  const buttonTextMap = client === null || client === void 0 ? void 0 : (_client$ui_settings = client.ui_settings) === null || _client$ui_settings === void 0 ? void 0 : (_client$ui_settings$e = _client$ui_settings.embed) === null || _client$ui_settings$e === void 0 ? void 0 : _client$ui_settings$e.button_text;
  const languageKey = get_browser_language();
  if (!buttonTextMap || !buttonTextMap[languageKey]) {
    return "Chat";
  }
  return buttonTextMap[languageKey];
}
// EXTERNAL MODULE: ./node_modules/lodash.memoize/index.js
var lodash_memoize = __webpack_require__(7654);
var lodash_memoize_default = /*#__PURE__*/__webpack_require__.n(lodash_memoize);
;// CONCATENATED MODULE: ./src/services/logger/index.ts

function logger_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function logger_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? logger_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : logger_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


const DEFAULT_LOG_SAMPLE_RATE = 0.01; // 1% of logs will go through

const DD_BASE_URL = "https://browser-http-intake.logs.datadoghq.com/v1/input/";
const DD_TOKEN = "pubfe23baedd2ea322bebb5ed2020fa2fa1";

// We need memoization to ensure consistency of logs
const shouldLog = lodash_memoize_default()(sampleRate => {
  if (!DD_TOKEN || sampleRate === 0) {
    return false;
  }
  return Math.random() < (sampleRate || DEFAULT_LOG_SAMPLE_RATE);
});

/**
 * Sends log to Datadog
 */
async function log(message, extra, options) {
  if (!shouldLog(options === null || options === void 0 ? void 0 : options.sampleRate)) {
    return;
  }
  await httpRequest({
    url: `${DD_BASE_URL}${DD_TOKEN}?ddsource=browser&ddtags=version:1.5.0,env:${"production"}`,
    method: "POST",
    body: JSON.stringify(logger_objectSpread(logger_objectSpread({
      message
    }, extra), {}, {
      sampleRate: (options === null || options === void 0 ? void 0 : options.sampleRate) || DEFAULT_LOG_SAMPLE_RATE,
      service: "embed",
      env: "production",
      embedVersion: 2,
      version: "1.7.22",
      isNpm: true,
      commitHash: "69d2a1d"
    }))
  });
}
;// CONCATENATED MODULE: ./src/client/helpers/alternative-bot-rollout/index.ts

function alternative_bot_rollout_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function alternative_bot_rollout_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? alternative_bot_rollout_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : alternative_bot_rollout_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






const PRIMARY_BOT_ASSIGNMENT_LABEL = "primary";
const ALTERNATIVE_BOT_ASSIGNMENT_LABEL = "alternative";
const BOT_ASSIGNMENT_STORAGE_KEY = "botAssignment";
/**
 * Using the alternative bot rollout value from the client object, determines whether
 * the primary or alternative bot should be assigned to the chatter
 * using a random value.
 *
 * @param alternativeRolloutValue
 */
function getAssignmentUsingAlternativeBotRolloutValue(alternativeRolloutValue) {
  // rollout values use a maximum of 2 decimal digits
  const randomValue = parseFloat(Math.random().toFixed(2));
  if (randomValue <= alternativeRolloutValue) {
    return ALTERNATIVE_BOT_ASSIGNMENT_LABEL;
  }
  return PRIMARY_BOT_ASSIGNMENT_LABEL;
}

/**
 * Using the primary client handle (the default bot that is set on the page),
 * retrieves the bot assignment (primary or alternative) from the browser storage.
 *
 * @param primaryClientHandle
 */
function getBotAssignmentFromBrowserStorage(primaryClientHandle) {
  const botAssignment = dist/* adaLocalStorage */.BB.getFnItem(BOT_ASSIGNMENT_STORAGE_KEY);

  // the chatter has never been assigned a bot
  if (!botAssignment) {
    return null;
  }

  // the chatter has been assigned an alternative bot
  if (botAssignment[primaryClientHandle] === ALTERNATIVE_BOT_ASSIGNMENT_LABEL) {
    return ALTERNATIVE_BOT_ASSIGNMENT_LABEL;
  }

  // the chatter has been assigned a primary bot
  if (botAssignment[primaryClientHandle] === PRIMARY_BOT_ASSIGNMENT_LABEL) {
    return PRIMARY_BOT_ASSIGNMENT_LABEL;
  }

  // the value in browser storage for bot assignment is not one we recognize
  return null;
}

/**
 * Returns the primaryBotClientObject if botAssignment is primary.
 *
 * Else fetches the alternative bot's client object when botAssignment is alternative.
 *
 * Returns null if the request for the alternative bot's client fails.
 *
 * @param botAssignment
 * @param primaryBotClientObject
 * @param alternativeBotHandle
 * @param adaSettings
 */
async function getClientObjectUsingBotAssignment(botAssignment, primaryBotClientObject, alternativeBotHandle, adaSettings) {
  const {
    cluster,
    domain,
    language
  } = adaSettings;
  if (botAssignment === PRIMARY_BOT_ASSIGNMENT_LABEL) {
    return primaryBotClientObject;
  }
  if (botAssignment === ALTERNATIVE_BOT_ASSIGNMENT_LABEL) {
    const alternativeBotClientResponse = await fetchClient(alternativeBotHandle, cluster, domain, language || get_browser_language());
    if (alternativeBotClientResponse) {
      return new Client(alternativeBotClientResponse.client);
    }

    // if a chatter was assigned the alternative bot, but we couldn't load it
    // then we won't show any bot
    return null;
  }
  return null;
}

/**
 * Stores the bot assigned in browser storage for retrieval later
 * when the chatter navigates to a new page.
 *
 * @param botAssignment
 * @param primaryBotHandle
 */
function setBotAssignmentInBrowserStorage(botAssignment, primaryBotHandle) {
  const storedBotAssignments = dist/* adaLocalStorage */.BB.getFnItem(BOT_ASSIGNMENT_STORAGE_KEY) || {};
  dist/* adaLocalStorage */.BB.setFnItem(BOT_ASSIGNMENT_STORAGE_KEY, alternative_bot_rollout_objectSpread(alternative_bot_rollout_objectSpread({}, storedBotAssignments), {}, {
    [primaryBotHandle]: botAssignment
  }));
}

/**
 * Returns the client object that should be used for initialization.
 *
 * If there is a bot assignment in browser storage, then this should be used.
 *
 * Otherwise, assign a bot and use it.
 *
 * @param primaryBotClientObject
 * @param alternativeBotHandle
 * @param alternativeBotRolloutValue
 * @param adaSettings
 */
async function getClientObjectForEmbedInitialization(primaryBotClientObject, alternativeBotHandle, alternativeBotRolloutValue, adaSettings) {
  const botAssignmentFromStorage = getBotAssignmentFromBrowserStorage(primaryBotClientObject.handle);
  if (botAssignmentFromStorage) {
    return getClientObjectUsingBotAssignment(botAssignmentFromStorage, primaryBotClientObject, alternativeBotHandle, adaSettings);
  }
  const newBotAssignment = getAssignmentUsingAlternativeBotRolloutValue(alternativeBotRolloutValue);
  setBotAssignmentInBrowserStorage(newBotAssignment, primaryBotClientObject.handle);
  const botAssignmentLogAttributes = {
    primaryBot: primaryBotClientObject.handle,
    alternativeBotRollout: alternativeBotRolloutValue,
    alternativeBot: alternativeBotHandle
  };
  if (newBotAssignment === ALTERNATIVE_BOT_ASSIGNMENT_LABEL) {
    log("Launch Controls Bot Assignment", alternative_bot_rollout_objectSpread(alternative_bot_rollout_objectSpread({}, botAssignmentLogAttributes), {}, {
      assignedBot: ALTERNATIVE_BOT_ASSIGNMENT_LABEL
    }), {
      sampleRate: 1
    });
  } else {
    log("Launch Controls Bot Assignment", alternative_bot_rollout_objectSpread(alternative_bot_rollout_objectSpread({}, botAssignmentLogAttributes), {}, {
      assignedBot: PRIMARY_BOT_ASSIGNMENT_LABEL
    }), {
      sampleRate: 1
    });
  }
  return getClientObjectUsingBotAssignment(newBotAssignment, primaryBotClientObject, alternativeBotHandle, adaSettings);
}
function getBotOverrideHandleFromWebpageURL() {
  const webpageURL = new URL(window.location.href);
  return webpageURL.searchParams.get("adaBotHandleOverride");
}

/**
 * Uses the alternative rollout value to determine whether a primary or alternative bot should be assigned to a chatter.
 *
 * If an override is provided in the URL, then it should be used but without impact to the bot assignment in storage.
 *
 * If a value of 0 is used for the alternative rollout value, then the primary bot should be used without impact to the bot assignment in storage.
 *
 * If a value of 1 is used for the alternative rollout value, then the alternative bot should be used without impact to the bot assignment in storage.
 *
 * @param primaryBotClientObject
 * @param alternativeBot
 * @param adaSettings
 */
async function fetchClientUsingAlternativeBotRollout(primaryBotClientObject, alternativeBot, adaSettings) {
  const adaBotHandleOverride = getBotOverrideHandleFromWebpageURL();
  const {
    domain,
    cluster,
    language
  } = adaSettings;
  if (adaBotHandleOverride) {
    const sanitizedAdaBotHandleOverride = escapeUrlParam(adaBotHandleOverride);
    if (sanitizedAdaBotHandleOverride !== adaBotHandleOverride) {
      return primaryBotClientObject;
    }
    const overrideBotClientObject = await fetchClient(sanitizedAdaBotHandleOverride, cluster, domain, language || get_browser_language());
    if (!overrideBotClientObject) {
      return null;
    }
    return new Client(overrideBotClientObject.client);
  }
  if (alternativeBot) {
    const {
      handle: alternativeBotHandle,
      rollout: alternativeBotRolloutValue
    } = alternativeBot;
    if (alternativeBotRolloutValue === 0) {
      return getClientObjectUsingBotAssignment(PRIMARY_BOT_ASSIGNMENT_LABEL, primaryBotClientObject, alternativeBotHandle, adaSettings);
    }
    if (alternativeBotRolloutValue === 1) {
      return getClientObjectUsingBotAssignment(ALTERNATIVE_BOT_ASSIGNMENT_LABEL, primaryBotClientObject, alternativeBotHandle, adaSettings);
    }
    return getClientObjectForEmbedInitialization(primaryBotClientObject, alternativeBotHandle, alternativeBotRolloutValue, adaSettings);
  }
  return primaryBotClientObject;
}
;// CONCATENATED MODULE: ./src/client/helpers/location-change/index.ts

function dispatchEvent(eventName) {
  const event = createNewEvent(eventName);
  window.dispatchEvent(event);
}
const popStateListener = dispatchEvent.bind(undefined, "locationchange");

/**
 * We need to redefine history "pushState" and "replaceState". By default, these
 * will not trigger an event listener when called.
 */
function bindLocationChangeOverrides() {
  window.history.pushState = (f => function pushState() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const ret = f.apply(window.history, args);
    dispatchEvent("pushstate");
    dispatchEvent("locationchange");
    return ret;
  })(window.history.pushState);
  window.history.replaceState = (f => function replaceState() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    const ret = f.apply(window.history, args);
    dispatchEvent("replacestate");
    dispatchEvent("locationchange");
    return ret;
  })(window.history.replaceState);
  window.addEventListener("popstate", popStateListener);
}
function unbindLocationChangeOverrides() {
  window.removeEventListener("popstate", popStateListener);
}
;// CONCATENATED MODULE: ./src/client/helpers/rollout.ts

function rollout_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function rollout_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? rollout_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : rollout_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


function storeRollout(handle, group, lastProb) {
  dist/* adaLocalStorage */.BB.setFnItem("rolloutGroup", rollout_objectSpread(rollout_objectSpread({}, dist/* adaLocalStorage */.BB.getFnItem("rolloutGroup")), {}, {
    [handle]: group
  }));
  dist/* adaLocalStorage */.BB.setFnItem("rolloutLastValue", rollout_objectSpread(rollout_objectSpread({}, dist/* adaLocalStorage */.BB.getFnItem("rolloutLastValue")), {}, {
    [handle]: lastProb
  }));
}

/**
 * Reads the stored rollout group and probability
 */
function readRollout(handle) {
  const rollout = {
    group: null,
    lastProb: null
  };
  rollout.group =
  // I don't know what ESLint is complaining about here

  (dist/* adaLocalStorage */.BB.getFnItem("rolloutGroup") || {})[handle] || null;
  rollout.lastProb = (dist/* adaLocalStorage */.BB.getFnItem("rolloutLastValue") || {})[handle] || null;
  return rollout;
}

/** The logic below determines whether or not the chat button is visible if the rollout is not 100%
 * GROUP A - DOES NOT SEE CHAT BUTTON
 * GROUP B - SEE'S CHAT BUTTON
 *
 * First we check if the rollout is either 100% or 0%. In either of these cases we do not need to check the probability score to determine their grouping.
 * - If the rollout is 100% we put the user in group B and they see the button.
 * - If the rollout is 0% we put the user in group A and they do not see the button.
 * - If the rollout is between 0% and 100% we need to check the probability score to determine their grouping and store the result.
 *
 * - If the user has not been put in a group yet we need to put them in a group and store the result.
 * - If the user has already been put in a group and the rollout has not changed we do not need to move them.
 * - If the user has already been put in a group and the rollout has changed we need to check if they should be moved to the other group and store the result.
 */
function checkRollout(rollout, handle) {
  // Get current rollout percentage in browser storage
  const userRolloutGroup = readRollout(handle);

  // If somehow the rollout doesn't fall within the 0% to 100% range - just show the button
  if (rollout < 0 || rollout > 1) {
    warn("Rollout value must be between 0 and 1 - defaulting to 1");
    return true;
  }

  // If rollout is 1 or 0 - just check if we should show the button or not and store the result
  // This also acts as a reset if someone accidentally gets put in group A but the rollout changed to
  // 100% - they will now be put in group B
  if (rollout === 1 || rollout === 0) {
    const group = rollout ? "B" : "A";
    storeRollout(handle, group, rollout);
    return group === "B";
  }

  // If the user has already been put in a group and it hasn't changed - don't move them
  if (rollout === userRolloutGroup.lastProb) {
    return userRolloutGroup.group === "B";
  }

  // Generate a random number to test against the probability score
  const rand = Math.random();

  // If the user has not been put in a group yet - test against the probability score to determine their group and assign it to them
  if (userRolloutGroup.group === null || userRolloutGroup.lastProb === 0) {
    const roll = rand <= rollout;
    const group = roll ? "B" : "A";
    storeRollout(handle, group, rollout);
    return roll;
  }

  // If we got here the rollout value has changed and is either higher or lower than the previous value
  if (userRolloutGroup.lastProb !== null && rollout > 0) {
    // If the rollout is higher than previous we want to test against the probability score to see if they get upgraded to group B
    // If the rollout is lower than previous we want to test against the probability score to see if they get downgraded to group A
    const adjustedProb = rollout > userRolloutGroup.lastProb ? 1 - userRolloutGroup.lastProb / rollout // This is the math to see if the user gets upgraded to group B
    : 1 - rollout / userRolloutGroup.lastProb; // This is the math to see if the user gets downgraded to group A

    // If the random number is less than or equal to the adjusted probability score - we will upgrade the user to group B, otherwise they will go to group A
    const shouldBeVisible = rand <= adjustedProb;
    const group = shouldBeVisible ? "B" : "A";
    storeRollout(handle, group, rollout);
    return shouldBeVisible;
  }

  // If all else fails show the button
  warn("Unable to detemrine rollout group - defaulting to showing chat button");
  return true;
}
;// CONCATENATED MODULE: ./src/client/helpers/web-notifications/web-notification-events.ts
let WebNotificationEvents = /*#__PURE__*/function (WebNotificationEvents) {
  WebNotificationEvents["NOTIFICATION_CLICK"] = "ada:web_notification:click";
  return WebNotificationEvents;
}({});
;// CONCATENATED MODULE: ./src/client/helpers/web-notifications/index.ts

function handleWebNotificationClick(data) {
  if (data.type === WebNotificationEvents.NOTIFICATION_CLICK) {
    setTimeout(() => {
      var _window$adaEmbed;
      return (_window$adaEmbed = window.adaEmbed) === null || _window$adaEmbed === void 0 ? void 0 : _window$adaEmbed.handleNotification();
    }, 0);
  }
}

// the Firebase client will post messages to the host page running the bot.
// the messages will contain event data that embed would need to take action on
// such as handling what happens when the notification is clicked
function addServiceWorkerListeners() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", event => {
      const {
        data
      } = event;
      handleWebNotificationClick(data);
    });
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/assign.js
var object_assign = __webpack_require__(977);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js

function _extends() {
  _extends = object_assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/common/lib/ConnectContainer/index.tsx


function ConnectContainer_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ConnectContainer_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ConnectContainer_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ConnectContainer_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

class ConnectContainer extends d {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      initialized: false,
      propsFromState: {},
      propsFromDispatch: {}
    });
  }
  componentDidMount() {
    const {
      store
    } = this.props;
    store.subscribe(state => {
      this.setState(this.mapStateAndDispatch(state));
    });
    store.getState().then(state => {
      this.setState(ConnectContainer_objectSpread({
        initialized: true
      }, this.mapStateAndDispatch(state)));
    });
  }
  mapStateAndDispatch(state) {
    const {
      mapStateToProps,
      mapDispatchToProps,
      store
    } = this.props;
    return {
      propsFromState: mapStateToProps ? mapStateToProps(state) : {},
      propsFromDispatch: mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
    };
  }
  render() {
    const {
      WrappedComponent
    } = this.props;
    const {
      propsFromState,
      propsFromDispatch,
      initialized
    } = this.state;
    if (!initialized) {
      return null;
    }
    return v(WrappedComponent, _extends({}, this.props, propsFromState, propsFromDispatch));
  }
}
;// CONCATENATED MODULE: ./src/client/lib/connect.tsx




function connect(mapStateToProps, mapDispatchToProps) {
  return function connector(WrappedComponent) {
    return ownProps => v(StoreContext.Consumer, null, store => v(ConnectContainer, _extends({
      store: store
    }, ownProps, {
      WrappedComponent: WrappedComponent,
      mapStateToProps: mapStateToProps,
      mapDispatchToProps: mapDispatchToProps
    })));
  };
}
function bindActionCreators(action, dispatch) {
  return payload => dispatch(action, payload);
}
;// CONCATENATED MODULE: ./src/common/helpers/isRTL.ts

const RTLLanguages = ["ar", "he"];
const isRTLLanguage = language => Boolean(language && RTLLanguages.includes(language)) || false;
const isRTL = (client, language) => {
  const rtlLanguageBool = isRTLLanguage(language) || isRTLLanguage(getBrowserLanguage());
  return rtlLanguageBool || false;
};
;// CONCATENATED MODULE: ./src/common/helpers/getAlignment.ts

function getAlignment(adaSettings) {
  const {
    language,
    align
  } = adaSettings;
  if (align === "auto") {
    return isRTLLanguage(language) ? "left" : "right";
  }
  return align || "right";
}
;// CONCATENATED MODULE: ./src/common/helpers/wait.ts
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
;// CONCATENATED MODULE: ./src/common/types/modules.ts
const CHAT_IFRAME = "chat";
const ENTRY_SCRIPT = "entry";
const EMBED_SCRIPT = "client";
const INTRO_IFRAME = "intro";
const BUTTON_IFRAME = "button";
const MASK_IFRAME = "drawer-mask";
const XSTORAGE_IFRAME = "x-storage";
;// CONCATENATED MODULE: ./src/frames/helpers/storage/index.ts

const PERSISTENCE_NORMAL = "normal";
const PERSISTENCE_SESSION = "session";

/**
 * Retrieves items from local or session storage, depending on the client's
 * persistence setting. If privateMode is set, it returns null.
 */
function retrieveStorage(key, client, privateMode) {
  const {
    persistence
  } = client;
  if (privateMode) {
    return null;
  }
  if (persistence === PERSISTENCE_NORMAL) {
    return dist/* adaLocalStorage */.BB.getItem(key);
  }
  if (persistence === PERSISTENCE_SESSION) {
    return dist/* adaSessionStorage */.ad.getItem(key);
  }
  return null;
}
function setBrowserStorageItem(key, value, persistenceSetting) {
  if (persistenceSetting === PERSISTENCE_NORMAL) {
    dist/* adaLocalStorage */.BB.setItem(key, value);
  }
  if (persistenceSetting === PERSISTENCE_SESSION) {
    dist/* adaSessionStorage */.ad.setItem(key, value);
  }
}
;// CONCATENATED MODULE: ./src/services/chat-versioning/manifest.ts


const CHAT_MANIFEST_PATH = "https://static.ada.support/chat-manifest.json";
const loadChatManifest = async () => {
  try {
    const r = await fetch(CHAT_MANIFEST_PATH);
    return r.json();
  } catch (e) {
    // handling cases where r is undefined / other fetch errors
    // by returning undefined, we tell the server to load the unversioned index.html file for chat
    log("Failed to load chat manifest", {
      hostPage: window.location.href
    });
    return undefined;
  }
};

// Use one message for different errors to reduce the bundle size
const MANIFEST_VALIDATION_ERROR_MESSAGE = "The format of manifest file is incorrect";
const isManifest = input => {
  if (!(typeof input === "object")) {
    throw new AdaEmbedError(MANIFEST_VALIDATION_ERROR_MESSAGE);
  }
  if (input === null) {
    throw new AdaEmbedError(MANIFEST_VALIDATION_ERROR_MESSAGE);
  }
  const objectInput = input;
  if (!Array.isArray(objectInput.versions)) {
    throw new AdaEmbedError(MANIFEST_VALIDATION_ERROR_MESSAGE);
  }
  if (!objectInput.versions.length) {
    throw new AdaEmbedError(MANIFEST_VALIDATION_ERROR_MESSAGE);
  }
  if (!(typeof objectInput.versions[0].hash === "string")) {
    throw new AdaEmbedError(MANIFEST_VALIDATION_ERROR_MESSAGE);
  }
  if (!objectInput.versions[0].hash) {
    throw new AdaEmbedError(MANIFEST_VALIDATION_ERROR_MESSAGE);
  }
  if (!(typeof objectInput.versions[0].weight === "number")) {
    throw new AdaEmbedError(MANIFEST_VALIDATION_ERROR_MESSAGE);
  }
  if (objectInput.versions.reduce((s, v) => s + v.weight, 0) !== 1) {
    throw new AdaEmbedError(`The sum of version weights must be "1"`);
  }
  return true;
};
;// CONCATENATED MODULE: ./src/services/chat-versioning/index.ts




// Somewhat inefficient, but more than adequate shuffle algorithm for small arrays
const arrayShuffle = array => array.map(value => ({
  value,
  sort: Math.random()
})).sort((a, b) => a.sort - b.sort).map(_ref => {
  let {
    value
  } = _ref;
  return value;
});
const getChatVersionFromManifest = manifest => {
  /* istanbul ignore next */
  if (!isManifest(manifest)) {
    // This should never happen since isManifest throws an error for invalid input
    throw new AdaEmbedError(MANIFEST_VALIDATION_ERROR_MESSAGE);
  }
  const manifestString = JSON.stringify(manifest);
  const manifestCache = dist/* adaLocalStorage */.BB.getItem("ada-embed_chat-manifest-cache");
  if (manifestString === manifestCache) {
    const assignedVersion = dist/* adaLocalStorage */.BB.getItem("ada-embed_chat-assigned-version");

    /* istanbul ignore else */
    if (assignedVersion) {
      return assignedVersion;
    }
  }
  const random = Math.random();
  const {
    versions
  } = manifest;
  const shuffledVersions = arrayShuffle(versions);

  // Use hash from last version in array by default
  let {
    hash
  } = shuffledVersions[shuffledVersions.length - 1];

  // Loop through shuffledVersions
  for (let i = 0; i < shuffledVersions.length; i += 1) {
    const v = shuffledVersions[i];

    // If random falls into version weight
    if (random <= v.weight) {
      hash = v.hash;
      break;
    }
  }
  dist/* adaLocalStorage */.BB.setItem("ada-embed_chat-assigned-version", hash);
  dist/* adaLocalStorage */.BB.setItem("ada-embed_chat-manifest-cache", manifestString);
  return hash;
};
const getChatVersion = async adaSettings => {
  // allow versioning using global variable
  if (window.__AdaChatVersion) {
    return window.__AdaChatVersion;
  }
  const {
    cluster,
    domain
  } = adaSettings;

  // Skip automatic versioning for ATT and dev/stage clusters but allow override through __AdaChatVersion
  if (cluster === "att" || domain !== null && domain !== void 0 && domain.match(/ada-(dev|dev2|stage)/)) {
    return undefined;
  }
  const manifest = await loadChatManifest();
  if (!manifest) {
    return undefined;
  }
  return getChatVersionFromManifest(manifest);
};
;// CONCATENATED MODULE: ./src/client/components/IFrame/index.tsx






class IFrame extends d {
  constructor() {
    super(...arguments);
    _defineProperty(this, "iframeRef", y());
    _defineProperty(this, "channel", void 0);
  }
  getChannel() {
    const {
      name,
      store,
      messageService
    } = this.props;
    if (this.channel) {
      return this.channel;
    }
    const targetOrigin = new URL(this.iframeRef.current.src).origin;
    const channel = messageService.registerFrameChannel(name, this.iframeRef.current.contentWindow, targetOrigin);
    store.addChannelListener(name);
    return channel;
  }
  componentDidMount() {
    this.connectFrame();
  }
  componentDidUpdate() {
    const {
      appConnectionState
    } = this.props;
    if (appConnectionState === ConnectionState.Done) {
      this.getChannel().postMessage(ALL_FRAMES_LOADED);
    }
  }
  componentWillUnmount() {
    const {
      messageService,
      name
    } = this.props;
    messageService.unregisterChannel(name);
  }
  get url() {
    const {
      name,
      handle,
      domain,
      cluster
    } = this.props;
    return getEmbedURL({
      frameName: name,
      handle,
      domain,
      cluster
    });
  }
  async connectFrame() {
    const {
      name,
      setGlobalState,
      setConnectionState
    } = this.props;
    this.channel = this.getChannel();
    await setConnectionState({
      [name]: ConnectionState.Loading
    });
    let timeout;
    let handlerRef;
    const initMessageHandler = (type, payload) => {
      (async () => {
        if (type === `${name}_INIT`) {
          this.getChannel().removeEventListener(handlerRef);
          this.getChannel().clearTrackedTimeout(timeout);
          this.getChannel().isConnected = true;

          /**
           * Set initial state (if any).
           * This is mostly useful for XStorage to set state based on storage values
           */
          if (payload) {
            await setGlobalState(payload);
          }
          await setConnectionState({
            [name]: ConnectionState.Done
          });
        }
      })();
    };
    timeout = window.setTimeout(() => {
      this.getChannel().removeEventListener(handlerRef);
      setConnectionState({
        [name]: ConnectionState.Failure
      });
    }, DEFAULT_CONNECTION_TIMEOUT);
    handlerRef = this.channel.addEventListener(initMessageHandler);
  }
  render() {
    const {
      name,
      roleDescription,
      onTransitionEnd,
      styles,
      title
    } = this.props;
    const iFrameName = `ada-${name}-frame`;
    return v("iframe", {
      src: this.url,
      scrolling: "no",
      style: styles,
      frameBorder: "0",
      ref: this.iframeRef,
      id: iFrameName,
      name: iFrameName,
      title: title || iFrameName,
      className: iFrameName,
      onTransitionEnd: onTransitionEnd,
      "aria-roledescription": roleDescription,
      role: "application"
    });
  }
}
function mapStateToProps(storeState) {
  const {
    handle,
    domain,
    cluster,
    appConnectionState
  } = storeState;
  return {
    handle,
    domain,
    cluster,
    appConnectionState
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setGlobalState: bindActionCreators(ActionCreators.SET_STATE_ACTION, dispatch),
    setConnectionState: bindActionCreators(ActionCreators.SET_CONNECTION_STATE, dispatch)
  };
}
/* harmony default export */ var components_IFrame = (connect(mapStateToProps, mapDispatchToProps)(IFrame));
;// CONCATENATED MODULE: ./src/client/components/ButtonFrame/index.tsx







class ButtonFrame extends d {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      delayedIsShown: this.isShown
    });
    _defineProperty(this, "handleOnTransitionEndBound", this.handleOnTransitionEnd.bind(this));
  }
  get isShown() {
    const {
      isDrawerOpen
    } = this.props;
    return !isDrawerOpen;
  }
  get styles() {
    var _client$ui_settings, _client$ui_settings$e;
    const {
      client,
      frameWidth,
      adaSettings
    } = this.props;
    if (!client) {
      return "";
    }
    const buttonSize = client.chat_button.size;
    const buttonStyle = (_client$ui_settings = client.ui_settings) === null || _client$ui_settings === void 0 ? void 0 : (_client$ui_settings$e = _client$ui_settings.embed) === null || _client$ui_settings$e === void 0 ? void 0 : _client$ui_settings$e.style;
    const {
      delayedIsShown
    } = this.state;
    // 48 = (SHADOW BLUR=40) +  (2 * SPREAD=8)
    const BOX_SHADOW_BUFFER = 48;
    const POSITION_FROM_SCREEN_EDGE = 24;
    const buttonSizeWithBuffer = buttonSize + BOX_SHADOW_BUFFER;
    const buttonPosition = POSITION_FROM_SCREEN_EDGE - BOX_SHADOW_BUFFER / 2;
    const roundFrameHeight = buttonSize + BOX_SHADOW_BUFFER;
    // text button has a fixed height of 44px
    const textFrameHeight = 44 + BOX_SHADOW_BUFFER;
    const stylesForHiding = `
      top: -9999px !important;
      left: -9999px !important;
    `;
    let styles = `
      position: fixed;
      bottom: ${buttonPosition}px;
      ${getAlignment(adaSettings)}: ${buttonPosition}px;
      z-index: 10000;
      height: ${buttonSizeWithBuffer}px;
      width: ${buttonSizeWithBuffer}px;
      overflow: hidden;
      visibility: ${this.isShown ? "visible" : "hidden"};
      opacity: ${this.isShown ? "1" : "0"};
      transition: visibility 200ms ease, opacity 200ms ease;
      transform: translate(0, 10%);
      transition: visibility 250ms ease, opacity 250ms ease, transform 250ms ease;
      ${getAlignment(adaSettings)}: 0;
      bottom: 0;

      ${this.isShown ? "transform: translate(0, 0);" : ""}
    `;
    if (buttonStyle === "text") {
      styles += `
        width: ${frameWidth}px;
        height: ${textFrameHeight}px;
    `;
    } else {
      styles += `
        width: ${roundFrameHeight}px;
        height: ${roundFrameHeight}px;
      `;
    }
    if (!this.isShown && !delayedIsShown) {
      return styles + stylesForHiding;
    }
    return styles;
  }
  handleOnTransitionEnd() {
    this.setState({
      delayedIsShown: this.isShown
    });
  }
  render() {
    const {
      client
    } = this.props;
    const getTitle = () => {
      if (!(client !== null && client !== void 0 && client.handle)) {
        return "Chat Button Frame";
      }
      return `${client.handle.charAt(0).toUpperCase() + client.handle.slice(1)} Chat Button Frame`;
    };
    return v(StoreContext.Consumer, null, store => v(MessageServiceContext.Consumer, null, messageService => v(components_IFrame, {
      title: getTitle(),
      styles: this.styles,
      name: BUTTON_IFRAME,
      store: store,
      messageService: messageService,
      onTransitionEnd: this.handleOnTransitionEndBound
    })));
  }
}
function ButtonFrame_mapStateToProps(storeState) {
  const {
    client,
    isDrawerOpen
  } = storeState;
  return {
    client,
    isDrawerOpen
  };
}
/* harmony default export */ var components_ButtonFrame = (connect(ButtonFrame_mapStateToProps)(ButtonFrame));
;// CONCATENATED MODULE: ./src/common/constants/timeouts.ts
const ANIMATION_DELAY = 50;
;// CONCATENATED MODULE: ./src/common/helpers/is-mobile.ts
const isMobile = /(iPhone)|(iPod)|(android)|(webOS)/i.exec(navigator.userAgent) !== null;
;// CONCATENATED MODULE: ./src/client/components/ChatFrame/chatFrameEvents/chatterEvent/index.ts


function storeChatterEventDataInBrowser(client, payload) {
  const {
    persistence
  } = client;
  const {
    chatter,
    created,
    sessionToken
  } = payload;
  setBrowserStorageItem(CHATTER_TOKEN_STORAGE_KEY, chatter, persistence);
  setBrowserStorageItem(CHATTER_CREATED_STORAGE_KEY, created, persistence);
  if (sessionToken) {
    setBrowserStorageItem(SESSION_AUTH_TOKEN_STORAGE_KEY, sessionToken, persistence);
  }
}
;// CONCATENATED MODULE: ./src/client/components/ChatFrame/chatFrameEvents/index.ts

;// CONCATENATED MODULE: ./src/client/components/ChatFrame/index.tsx

















class ChatFrame extends d {
  constructor() {
    super(...arguments);
    _defineProperty(this, "iframeRef", y());
    _defineProperty(this, "pageScrollLocked", false);
    _defineProperty(this, "documentBodyOverflow", "");
    _defineProperty(this, "channel", void 0);
    _defineProperty(this, "chatRenderTimeout", void 0);
    _defineProperty(this, "url", this.getIframeSrc());
    _defineProperty(this, "state", {
      isMounted: false,
      closeTransitionTime: 200
    });
  } // This url must be a static property - if getIframeSrc is called repeatedly, the resulting URL may change improperly
  // For example, the skipGreeting query parameter was being changed from true to false, causing the AFM-384 bug
  // TODO: revisit this to make it less error-prone
  componentDidMount() {
    const {
      adaSettings,
      handle,
      setChatHasBeenRendered,
      messageService,
      store
    } = this.props;
    this.rememberInitialPageStyle();
    setChatHasBeenRendered();
    const targetOrigin = new URL(this.iframeRef.current.src).origin;
    this.channel = messageService.registerFrameChannel("chat", this.iframeRef.current.contentWindow, targetOrigin);
    store.addChannelListener("chat");
    this.bindChatEventHandlers();
    this.handleScrollLock();

    // We use this log to track number of chat impressions (times when users see chat iFrame render first time).
    log("Chat frame mount", {
      handle,
      embedSettings: adaSettings
    });

    // Delay to allow inline css animation to work.
    setTimeout(() => {
      this.setState({
        isMounted: true
      });
    }, ANIMATION_DELAY);
  }
  componentDidUpdate(prevProps) {
    const {
      isDrawerOpen
    } = this.props;
    if (isDrawerOpen !== prevProps.isDrawerOpen) {
      this.handleScrollLock();
    }
  }
  componentWillUnmount() {
    const {
      messageService
    } = this.props;
    messageService.unregisterChannel("chat");
  }
  get darkMode() {
    var _client$ui_settings, _client$ui_settings$c;
    const {
      client
    } = this.props;
    if (!(client !== null && client !== void 0 && (_client$ui_settings = client.ui_settings) !== null && _client$ui_settings !== void 0 && (_client$ui_settings$c = _client$ui_settings.chat) !== null && _client$ui_settings$c !== void 0 && _client$ui_settings$c.theme)) {
      return false;
    }
    const {
      theme
    } = client.ui_settings.chat;
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return theme === "dark" || theme === "auto" && systemDarkMode;
  }
  getIframeSrc() {
    const {
      handle,
      domain,
      cluster,
      greeting,
      language,
      skipGreeting,
      wasIntroShown,
      privateMode,
      testMode,
      adaSettings,
      chatVersion
    } = this.props;

    // check the host page URL for an adaSMSToken and add it as a chatterToken query param for chat's iframe URL
    const hostPageUrlParams = new URL(window.location.href).searchParams;
    const smsToken = hostPageUrlParams.get("adaSMSToken");
    const queryParams = {
      embedVersion: "69d2a1d".slice(0, 7),
      greeting,
      language,
      skipGreeting,
      introShown: wasIntroShown,
      embed2: 1,
      private: privateMode ? 1 : null,
      test_user: testMode ? 1 : null,
      align: getAlignment(adaSettings)
    };
    if (smsToken) {
      queryParams.adaSMSToken = smsToken;
    }
    return getChatURL({
      version: chatVersion,
      handle,
      cluster,
      domain,
      qp: queryParams
    });
  }
  get styles() {
    var _client$ui_settings2, _client$ui_settings2$;
    const {
      isDrawerOpen,
      client,
      testMode,
      adaSettings
    } = this.props;
    if (!client) {
      return "";
    }
    const {
      isMounted,
      closeTransitionTime
    } = this.state;
    const isShown = isDrawerOpen && isMounted;
    const backgroundColor = this.darkMode ? "#121212" : "#fff";
    const borderRadius = ((_client$ui_settings2 = client.ui_settings) === null || _client$ui_settings2 === void 0 ? void 0 : (_client$ui_settings2$ = _client$ui_settings2.chat) === null || _client$ui_settings2$ === void 0 ? void 0 : _client$ui_settings2$.style) === "rectangular" ? "8px" : "16px";
    const WINDOW_HEIGHT = 725;
    const TEST_BOT_NAV_HEIGHT = 48;
    const totalWindowHeight = testMode ? `${WINDOW_HEIGHT + TEST_BOT_NAV_HEIGHT}px` : `${WINDOW_HEIGHT}px`;
    return `
        position: fixed;

        ${isMobile ? `
          ${getAlignment(adaSettings)}: 0;
          bottom: 0;
          height: 100%;
        ` : `
          height: 90%;
          ${getAlignment(adaSettings)}: 24px;
          bottom: 24px;
          max-width: 375px;
          max-height: ${totalWindowHeight};
          border-radius: ${borderRadius};
        `}

        width: 100%;
        ${this.hasVisibleProactiveMessages || isShown ? "pointer-events: auto" : "pointer-events: none"};
        opacity: 0;
        transform: translate(0, 100px);
        transition: transform ${closeTransitionTime}ms ease, opacity ${closeTransitionTime}ms ease, visibility 0ms linear ${closeTransitionTime}ms;
        box-shadow: 0px 12px 48px 4px rgba(0, 0, 0, 0.12);
        background-color: ${backgroundColor};
        visibility: hidden;
        z-index: 10010;

        ${isShown && `
          opacity: 1;
          transform: translate(0, 0);
          transition: transform 300ms ease, opacity 300ms ease;
          visibility: visible;
        `}
      `;
  }
  get hasVisibleProactiveMessages() {
    const {
      chatDimensions
    } = this.props;

    // chatDimensions.height is greater than 0 when proactive messages are present
    return Boolean(chatDimensions === null || chatDimensions === void 0 ? void 0 : chatDimensions.height);
  }
  get visibleProactiveStyles() {
    var _client$ui_settings3, _client$ui_settings3$;
    const {
      chatDimensions,
      client,
      adaSettings
    } = this.props;
    if (!client) {
      return "";
    }

    // delta is used to determine how much of the button's height should be ignored
    // when spacing the proactive message
    const delta = 3;
    const TEXT_BUTTON_HEIGHT = 44;
    const bottomOffset = ((_client$ui_settings3 = client.ui_settings) === null || _client$ui_settings3 === void 0 ? void 0 : (_client$ui_settings3$ = _client$ui_settings3.embed) === null || _client$ui_settings3$ === void 0 ? void 0 : _client$ui_settings3$.style) === "text" ? TEXT_BUTTON_HEIGHT - delta : client.chat_button.size - delta;
    return `
      box-shadow: none;
      background: none;
      height: ${chatDimensions === null || chatDimensions === void 0 ? void 0 : chatDimensions.height}px !important;
      width: ${chatDimensions === null || chatDimensions === void 0 ? void 0 : chatDimensions.width}px !important;
      ${getAlignment(adaSettings)}: 0;
      bottom: ${bottomOffset}px;
      z-index: 9999;
    `;
  }
  static get parentElementStyles() {
    return `
      height: 100%;
      width: 100%;
    `;
  }
  get chooseStyles() {
    const {
      parentElement,
      client,
      isDrawerOpen,
      drawerHasBeenOpened
    } = this.props;
    if (parentElement) {
      return ChatFrame.parentElementStyles;
    }
    if (!client) {
      throw new AdaEmbedError("`client` is not defined");
    }
    if (client.features.afm_proactive_messaging && !isDrawerOpen) {
      if (!this.hasVisibleProactiveMessages) {
        return `
          ${this.styles};
          opacity: 0;
          transform: translate(375px, 0);
          visibility: hidden;
          transform: translate(0, 100px);

          ${isMobile ? `
            height: 0;
          ` : `
            height: 90%;
          `}
          ${!drawerHasBeenOpened && `
            transition: none;
          `}
        `;
      }
      return `
        ${this.styles};
        opacity: 1;
        transform: translate(0, 0);
        visibility: visible;
        height: 0 !important;
        transition: none;
        ${this.visibleProactiveStyles};
      `;
    }
    return this.styles;
  }
  handleScrollLock() {
    const {
      isDrawerOpen,
      parentElement
    } = this.props;
    const {
      closeTransitionTime
    } = this.state;

    // Lock scroll only on mobile
    if (!isMobile) {
      return;
    }

    // And if parentElement is not used
    if (parentElement) {
      return;
    }
    if (isDrawerOpen) {
      this.lockDocumentBodyFromScrolling();
    } else {
      if (this.pageScrollLocked) {
        this.unlockDocumentBodyFromScrolling();
      }
      this.iframeRef.current.ontransitionend = () => {
        // Ensure we don't fire the callback anywhere else
        this.iframeRef.current.ontransitionend = null;
        /**
         * After the frame is done animating to close - hide the frame, so it doesn't
         * overlap the parent sites content (especially important for iOS as it breaks)
         * scrolling
         */
        setTimeout(() => {
          this.collapseIframe();
        }, closeTransitionTime);
      };
    }
  }
  collapseIframe() {
    const {
      isDrawerOpen
    } = this.props;

    // Don't try to collapse iFrame if at this point isDrawerOpen is true
    if (isDrawerOpen) {
      return;
    }
    this.iframeRef.current.style.width = 0;
    this.iframeRef.current.style.height = 0;
  }

  /**
   * Initial body "overflow" style may be set to something other than "auto"
   * We should remember it, to put back the initial value when we unlock the scrolling
   */
  rememberInitialPageStyle() {
    this.documentBodyOverflow = window.document.body.style.overflow;
  }

  /**
   * Lock the document body from scrolling. If we don't do this,
   * there are SERIOUS issues on iOS.
   */
  lockDocumentBodyFromScrolling() {
    this.pageScrollLocked = true;

    // Save current page position so we can scroll back there
    this.documentBodyOverflow = window.document.body.style.overflow;

    // Lock scrolling
    window.document.body.style.overflow = "hidden";
  }

  /**
   * Set back initial values from client document body
   */
  unlockDocumentBodyFromScrolling() {
    window.document.body.style.overflow = this.documentBodyOverflow;
    this.pageScrollLocked = false;
  }
  notificationOnClickHandler(isChatOpen) {
    const {
      toggleChat
    } = this.props;
    window.focus();
    if (!isChatOpen) {
      toggleChat();
    }
  }
  handleNotifications(payload) {
    const {
      title,
      body,
      icon
    } = payload;
    const {
      isDrawerOpen,
      parentElement
    } = this.props;
    const isChatOpen = isDrawerOpen || Boolean(parentElement);
    const onClickHandler = this.notificationOnClickHandler.bind(this, isChatOpen);
    createNotification(title, isChatOpen, onClickHandler, {
      body,
      icon
    });
  }
  async handleChatEvent(type, payload, id) {
    const {
      adaSettings,
      setGlobalState,
      setConnectionState
    } = this.props;
    switch (type) {
      case GET_WINDOW_ORIGIN:
        {
          if (!this.channel) {
            throw new AdaEmbedError("`this.channel` is not defined");
          }
          this.channel.postMessage("SET_WINDOW_ORIGIN", window.location, id);
          break;
        }
      case CHAT_STARTED:
        {
          if (!this.channel) {
            throw new AdaEmbedError("`this.channel` is not defined");
          }
          clearTimeout(this.chatRenderTimeout);
          this.channel.isConnected = true;
          setConnectionState({
            chat: ConnectionState.Done
          });
          break;
        }
      case CHAT_WEBSOCKET_CONNECTED:
        {
          setGlobalState({
            isChatWebsocketConnected: true
          });
          break;
        }
      case PUBLISH_EVENT:
        {
          const {
            eventKey,
            data
          } = payload;
          publishEvent(eventKey, data);
          break;
        }
      case ANALYTICS_EVENT:
        {
          const {
            analytics
          } = payload;
          const {
            analyticsCallback
          } = adaSettings;
          if (analyticsCallback) {
            analyticsCallback(analytics);
          }
          break;
        }
      case CHATTER_EVENT:
        {
          const {
            client
          } = this.props;
          const {
            chatter,
            created,
            sessionToken
          } = payload;
          const {
            chatterTokenCallback
          } = adaSettings;
          if (!client) {
            throw new AdaEmbedError("`client` is undefined");
          }
          storeChatterEventDataInBrowser(client, payload);
          if (chatterTokenCallback) {
            chatterTokenCallback(chatter);
          }
          await setGlobalState({
            chatterToken: chatter,
            chatterCreated: created,
            sessionToken
          });
          break;
        }
      case "ZD_SESSION":
        {
          const {
            client
          } = this.props;
          const {
            zdSessionId,
            zdPreviousTags
          } = payload;
          if (!client) {
            throw new AdaEmbedError("`client` is undefined");
          }
          await setGlobalState({
            zdSessionId
          });
          const storage = (() => {
            if (client.persistence === PERSISTENCE_NORMAL) {
              return dist/* adaLocalStorage */.BB;
            }
            if (client.persistence === PERSISTENCE_SESSION) {
              return dist/* adaSessionStorage */.ad;
            }
            return null;
          })();
          if (storage) {
            if (zdSessionId === null) {
              storage.removeItem(ZD_SESSION_STORAGE_KEY);
            } else {
              storage.setItem(ZD_SESSION_STORAGE_KEY, zdSessionId);
            }
            if (zdPreviousTags === null) {
              storage.removeItem(ZD_PREVIOUS_TAGS_STORAGE_KEY);
            } else {
              storage.setItem(ZD_PREVIOUS_TAGS_STORAGE_KEY, zdPreviousTags);
            }
          }
          break;
        }
      case ZD_MESSAGING_HANDOFF:
        {
          const {
            client
          } = this.props;
          const {
            zdMessagingExternalUserId,
            zdMessagingChatterCreated
          } = payload;
          if (!client) {
            throw new AdaEmbedError("`client` is undefined");
          }
          await setGlobalState({
            zdMessagingExternalUserId,
            zdMessagingChatterCreated
          });
          if (zdMessagingExternalUserId === null) {
            dist/* adaLocalStorage */.BB.removeItem(ZD_MESSAGING_EXTERNAL_USER_ID_STORAGE_KEY);
          } else {
            dist/* adaLocalStorage */.BB.setItem(ZD_MESSAGING_EXTERNAL_USER_ID_STORAGE_KEY, zdMessagingExternalUserId);
          }
          if (zdMessagingChatterCreated === null) {
            dist/* adaLocalStorage */.BB.removeItem(ZD_MESSAGING_CHATTER_CREATED_STORAGE_KEY);
          } else {
            dist/* adaLocalStorage */.BB.setItem(ZD_MESSAGING_CHATTER_CREATED_STORAGE_KEY, zdMessagingChatterCreated);
          }
          break;
        }
      case CHATTER_LIVECHAT_EVENT:
        {
          const {
            client
          } = this.props;
          const {
            inLiveChat
          } = payload;
          await setGlobalState({
            chatterInLiveChat: inLiveChat
          });
          if (!client) {
            throw new AdaEmbedError("`client` is not defined");
          }

          /**
           * Store the token so when embed loads in the future, it doesn't have to wait for it to
           * come from chat. This is important for campaign and business event triggers.
           */
          if (client.persistence === PERSISTENCE_NORMAL) {
            dist/* adaLocalStorage */.BB.setItem(IN_LIVE_CHAT_STORAGE_KEY, inLiveChat);
          } else if (client.persistence === PERSISTENCE_SESSION) {
            dist/* adaSessionStorage */.ad.setItem(IN_LIVE_CHAT_STORAGE_KEY, inLiveChat);
          }
          break;
        }
      case CUSTOM_JAVASCRIPT_EVENT:
        {
          const {
            eventCallbacks
          } = adaSettings;
          if (!eventCallbacks) {
            break;
          }
          const customJavascriptEvent = payload.event_data;
          const specificCallback = eventCallbacks[customJavascriptEvent.event_name];
          const genericCallback = eventCallbacks["*"];
          if (specificCallback) {
            specificCallback(customJavascriptEvent);
          }
          if (genericCallback) {
            genericCallback(customJavascriptEvent);
          }
          break;
        }
      case RESET_FROM_CHAT_EVENT:
        {
          const {
            resetChat
          } = this.props;
          resetChat();
          break;
        }
      case ZD_JWT_AUTH_EVENT:
        {
          const {
            zdChatterAuthCallback
          } = adaSettings;
          if (zdChatterAuthCallback) {
            try {
              zdChatterAuthCallback(token => {
                if (!this.channel) {
                  throw new AdaEmbedError("`this.channel` is not defined");
                }
                this.channel.postMessage(ZD_JWT_AUTH_RESPONSE_EVENT, {
                  token
                }, id);
              });
            } catch (e) {
              console.warn("Function for zdChatterAuthCallback produced an error - please ensure the callback is functioning normally");
              if (!this.channel) {
                throw new AdaEmbedError("`this.channel` is not defined");
              }
              this.channel.postMessage(ZD_JWT_AUTH_RESPONSE_EVENT, {}, id);
            }
          } else {
            if (!this.channel) {
              throw new AdaEmbedError("`this.channel` is not defined");
            }
            this.channel.postMessage(ZD_JWT_AUTH_RESPONSE_EVENT, {}, id);
          }
          break;
        }
      case CREATE_NOTIFICATION_EVENT:
        {
          this.handleNotifications(payload);
          break;
        }
      case BROWSER_HAS_NOTIFICATIONS_EVENT:
        {
          if (!this.channel) {
            throw new AdaEmbedError("`this.channel` is not defined");
          }
          this.channel.postMessage(BROWSER_HAS_NOTIFICATIONS_RESPONSE_EVENT, {
            browserHasNotificationSupport: browserHasNotificationSupport
          });
          break;
        }
      case REQUEST_NOTIFICATIONS_EVENT:
        {
          requestNotificationPermission();
          break;
        }

      // TODO: Chatx-594 This case method needs to be deprecated as Publish Event is will be used instead
      case END_CONVERSATION_EVENT:
        {
          const {
            conversationEndCallback
          } = adaSettings;
          if (conversationEndCallback) {
            conversationEndCallback(payload);
          }
          break;
        }
      default:
        break;
    }
  }
  bindChatEventHandlers() {
    const {
      messageService
    } = this.props;
    const channel = messageService.getChannel("chat");
    if (!channel) {
      throw new AdaEmbedError("`channel` is not defined");
    }
    channel.addEventListener((type, payload, id) => {
      this.handleChatEvent(type, payload, id);
    });
  }
  frameLoaded() {
    const {
      handle,
      adaSettings
    } = this.props;
    // SUP-1141- TODO: Remove chatFrameTimeoutCallback
    const {
      chatFrameTimeoutCallback
    } = adaSettings;
    this.chatRenderTimeout = window.setTimeout(() => {
      var _this$channel;
      log("Chat frame took over 5 seconds to respond", {
        handle,
        embedSettings: adaSettings
      });
      if (!((_this$channel = this.channel) !== null && _this$channel !== void 0 && _this$channel.isConnected)) {
        // SUP-1141- TODO: Remove chatFrameTimeoutCallback
        if (chatFrameTimeoutCallback) {
          chatFrameTimeoutCallback();
        }
        publishEvent("ada:chat_frame_timeout", undefined);
      }
    }, 5000);
  }
  render() {
    const {
      client,
      isDrawerOpen
    } = this.props;
    const iFrameName = `ada-chat-frame`;
    const roleDescription = () => {
      if (!(client !== null && client !== void 0 && client.handle)) {
        return "Chat Window";
      }
      return `${client.handle.charAt(0).toUpperCase() + client.handle.slice(1)} Chat Window`;
    };
    return v("iframe", {
      src: this.url,
      scrolling: "no",
      style: this.chooseStyles,
      frameBorder: "0",
      ref: this.iframeRef,
      id: iFrameName,
      name: iFrameName,
      title: iFrameName,
      className: iFrameName,
      "aria-expanded": isDrawerOpen,
      "aria-roledescription": roleDescription(),
      "aria-modal": true,
      allowTransparency: true,
      allowFullScreen: true,
      onLoad: this.frameLoaded.bind(this)
    });
  }
}
function ChatFrame_mapStateToProps(storeState) {
  const {
    handle,
    domain,
    cluster,
    greeting,
    language,
    wasIntroShown,
    isDrawerOpen,
    parentElement,
    privateMode,
    testMode,
    client,
    chatDimensions,
    drawerHasBeenOpened
  } = storeState;
  return {
    handle,
    domain,
    cluster,
    greeting,
    language,
    wasIntroShown,
    isDrawerOpen,
    parentElement,
    privateMode,
    testMode,
    client,
    chatDimensions,
    drawerHasBeenOpened
  };
}
function ChatFrame_mapDispatchToProps(dispatch) {
  return {
    setConnectionState: bindActionCreators(ActionCreators.SET_CONNECTION_STATE, dispatch),
    setGlobalState: bindActionCreators(ActionCreators.SET_STATE_ACTION, dispatch),
    toggleChat: bindActionCreators(ActionCreators.TOGGLE_CHAT_ACTION, dispatch)
  };
}
/* harmony default export */ var components_ChatFrame = (connect(ChatFrame_mapStateToProps, ChatFrame_mapDispatchToProps)(ChatFrame));
;// CONCATENATED MODULE: ./src/client/components/IntroFrame/index.tsx






class IntroFrame extends d {
  get isShown() {
    const {
      isIntroShown,
      isDrawerOpen
    } = this.props;
    return isIntroShown && !isDrawerOpen;
  }
  get styles() {
    const {
      client,
      introDimensions,
      adaSettings
    } = this.props;
    if (!client) {
      return `display: none`;
    }
    const buttonSize = client.chat_button.size;
    const INTRO_BUTTON_PADDING = 16;
    const introPositionRight = INTRO_BUTTON_PADDING + buttonSize;
    const stylesForHiding = `
      visibility: "hidden";
      top: -9999px !important;
      left: -9999px !important;
    `;
    const styles = `
      position: fixed;
      ${getAlignment(adaSettings)}: ${introPositionRight}px;
      bottom: 8px;
      z-index: 10000;
      max-height: 300px;
      max-width: 250px;
      opacity: ${this.isShown ? "1" : "0"};
      height: ${introDimensions.height}px;
      width: ${introDimensions.width}px;
      max-height: auto;
      max-width: 350px;
      z-index: 9999;
      ${getAlignment(adaSettings)}: 0;
      bottom: ${buttonSize - 20}px;
    `;
    if (!this.isShown) {
      return styles + stylesForHiding;
    }
    return styles;
  }
  render() {
    return v(StoreContext.Consumer, null, store => v(MessageServiceContext.Consumer, null, messageService => v(components_IFrame, {
      styles: this.styles,
      name: INTRO_IFRAME,
      store: store,
      messageService: messageService
    })));
  }
}
function IntroFrame_mapStateToProps(storeState) {
  const {
    client,
    introDimensions,
    isIntroShown,
    isDrawerOpen,
    adaSettings
  } = storeState;
  return {
    client,
    introDimensions,
    isIntroShown,
    isDrawerOpen,
    adaSettings
  };
}

// eslint-disable-next-line @typescript-eslint/ban-types
/* harmony default export */ var components_IntroFrame = (connect(IntroFrame_mapStateToProps)(IntroFrame));
;// CONCATENATED MODULE: ./src/client/components/MaskFrame/index.tsx






class MaskFrame extends d {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      delayedIsShown: this.isShown
    });
    _defineProperty(this, "handleOnTransitionEndBound", this.handleOnTransitionEnd.bind(this));
  }
  get isShown() {
    const {
      isDrawerOpen
    } = this.props;
    return isDrawerOpen;
  }
  get styles() {
    const {
      delayedIsShown
    } = this.state;
    const stylesForHiding = `
      top: -9999px !important;
      left: -9999px !important;
    `;
    const styles = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9998;
      visibility: ${this.isShown ? "visible" : "hidden"};
      opacity: ${this.isShown ? "1" : "0"};
      transition: visibility 200ms ease, opacity 200ms ease;
    `;
    if (!this.isShown && !delayedIsShown) {
      return styles + stylesForHiding;
    }
    return styles;
  }
  handleOnTransitionEnd() {
    this.setState({
      delayedIsShown: this.isShown
    });
  }
  render() {
    return v(StoreContext.Consumer, null, store => v(MessageServiceContext.Consumer, null, messageService => v(components_IFrame, {
      styles: this.styles,
      name: MASK_IFRAME,
      store: store,
      messageService: messageService,
      onTransitionEnd: this.handleOnTransitionEndBound
    })));
  }
}
function MaskFrame_mapStateToProps(storeState) {
  const {
    isDrawerOpen
  } = storeState;
  return {
    isDrawerOpen
  };
}

// eslint-disable-next-line @typescript-eslint/ban-types
/* harmony default export */ var components_MaskFrame = (connect(MaskFrame_mapStateToProps)(MaskFrame));
;// CONCATENATED MODULE: ./src/client/components/XStorageFrame/index.tsx





class XStorageFrame extends d {
  static get styles() {
    return `
      position: absolute;
      top: -9999px;
      left: -9999px;
      visibility: hidden;
      height: 0;
      width: 0;
    `;
  }
  render() {
    return v(StoreContext.Consumer, null, store => v(MessageServiceContext.Consumer, null, messageService => v(components_IFrame, {
      styles: XStorageFrame.styles,
      name: XSTORAGE_IFRAME,
      store: store,
      messageService: messageService
    })));
  }
}
/* harmony default export */ var components_XStorageFrame = (connect()(XStorageFrame));
;// CONCATENATED MODULE: ./src/client/components/Container/index.tsx

function Container_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Container_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Container_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Container_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
































class Container extends d {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      campaignToTrigger: null,
      campaignTriggerOptions: {
        ignoreFrequency: false,
        ignoreStatus: false
      },
      chatHasBeenRendered: false,
      hideChatOverride: false,
      hideIntroOverride: false,
      followUpResponseId: null,
      chatVersion: undefined,
      readyToRenderChatFrame: false
    });
    _defineProperty(this, "resetChatBound", this.resetChat.bind(this));
    _defineProperty(this, "locationChangeHandlerBound", this.locationChangeHandler.bind(this));
    _defineProperty(this, "setChatHasBeenRenderedBound", this.setChatHasBeenRendered.bind(this));
    _defineProperty(this, "frameWidth", 0);
    _defineProperty(this, "bindEmbedActionEventHandlerOnce", (() => {
      let didBind = false;
      return () => {
        if (!didBind) {
          this.bindEmbedActionEventHandler();
          didBind = true;
        }
      };
    })());
  }
  async componentDidMount() {
    const {
      adaSettings,
      setGlobalState
    } = this.props;
    const {
      onAdaEmbedLoaded
    } = adaSettings;
    setGlobalState({
      adaSettings
    });

    // We want to make sure this happens before any publishEvent calls
    // This is why it happens even before calling initialize
    if (onAdaEmbedLoaded) {
      onAdaEmbedLoaded();
    }
    this.initialize();
    this.notificationPermHandler();
    bindLocationChangeOverrides();
    addServiceWorkerListeners();
    window.addEventListener("locationchange", this.locationChangeHandlerBound);
    const chatVersion = await getChatVersion(adaSettings);
    this.setState({
      chatVersion,
      // We shouldn't try to render chat frame until version is attempted to be retrieved.
      readyToRenderChatFrame: true
    });
  }

  /** To be called when `props.appConnectionState` value changes */
  onAppConnectionStateChange() {
    const {
      appConnectionState,
      initializationReject,
      initializationResolve,
      adaSettings
    } = this.props;
    switch (appConnectionState) {
      case ConnectionState.Done:
        {
          if (!initializationResolve) {
            throw new AdaEmbedError("`initializationResolve` is undefined");
          }
          initializationResolve();
          this.bindEmbedActionEventHandlerOnce();
          if (adaSettings.adaReadyCallback) {
            adaSettings.adaReadyCallback({
              isRolledOut: true
            });
          }
          break;
        }
      case ConnectionState.Failure:
        {
          if (!initializationReject) {
            throw new AdaEmbedError("`initializationReject` is undefined");
          }
          const error = new AdaEmbedError("Embed startup failed. This is likely because one or all frame components failed to connect. Please check your internet connection.");
          initializationReject(error);
          this.unmount();
          break;
        }
      default:
        {
          // Do nothing
        }
    }
  }
  componentDidUpdate(prevProps) {
    var _client$ui_settings, _client$ui_settings$e;
    const {
      isDrawerOpen,
      appConnectionState,
      chatterToken,
      client,
      isChatWebsocketConnected,
      adaSettings,
      chatterInLiveChat,
      messageService,
      wasCampaignShownButNowClosed
    } = this.props;
    const {
      toggleCallback
    } = adaSettings;
    if ((client === null || client === void 0 ? void 0 : (_client$ui_settings = client.ui_settings) === null || _client$ui_settings === void 0 ? void 0 : (_client$ui_settings$e = _client$ui_settings.embed) === null || _client$ui_settings$e === void 0 ? void 0 : _client$ui_settings$e.style) === "text") {
      this.computeButtonFrameWidth();
    }

    /**
     * Side effect: Handle initialization success / failure
     */
    if (prevProps.appConnectionState !== appConnectionState) {
      this.onAppConnectionStateChange();
    }
    const {
      campaignToTrigger,
      campaignTriggerOptions,
      followUpResponseId
    } = this.state;

    /* We wait for all necessary preconditions (e.g. necessary connections established) to be true,
     * then trigger the campaign. campaignToTrigger is cleared after triggering, so we do not need
     * to worry about duplicate triggers.
     */
    if (campaignToTrigger && (
    // We need to wait for the chat frame, but only for engage campaigns, not for free tier
    // (message_text) campaigns
    campaignToTrigger.message_text || chatterToken) && (campaignToTrigger.message_text || isChatWebsocketConnected) && (
    // We need to wait for bindEmbedActionEventHandlerOnce to be called, but only for free tier
    // campaigns, we don't need this for engage (response_id) campaigns
    campaignToTrigger.response_id || appConnectionState === ConnectionState.Done) && !isDrawerOpen && !chatterInLiveChat) {
      triggerCampaignImpl({
        adaSettings,
        chatterToken,
        campaign: campaignToTrigger,
        ignoreStatus: Boolean(campaignTriggerOptions.ignoreStatus),
        ignoreFrequency: Boolean(campaignTriggerOptions.ignoreFrequency),
        clearCampaignToTrigger: () => this.setState({
          campaignToTrigger: null
        }),
        messageService
      });
    }

    // If a follow-up response has been queued by a triggered Campaign, tell chat to show it
    if (isChatWebsocketConnected && isDrawerOpen && followUpResponseId) {
      const chatChannel = messageService.getChannel(CHAT_IFRAME);
      if (chatChannel) {
        if (!wasCampaignShownButNowClosed) {
          // If the campaign has not been closed (i.e. is still visible), send the follow up response
          chatChannel.postMessage(SEND_GREETING, {
            responseId: followUpResponseId
          });
        } else {
          // otherwise, send the bot's default greeting answer (if the conversation has messages already, `chat` will ignore this message)
          chatChannel.postMessage(SEND_GREETING, undefined);
        }
        this.setState({
          followUpResponseId: null
        });
      }
    }
    if (prevProps.isDrawerOpen !== isDrawerOpen && toggleCallback) {
      toggleCallback(isDrawerOpen);
    }

    // Wait for client to be available, then set campaign to trigger
    if (client && !prevProps.client) {
      this.evaluateCampaignConditions({}, true);
    }

    /**
     * we only want to evaluate the business event conditions once when the chatterToken is
     * retrieved
     */
    if (chatterToken && prevProps.chatterToken !== chatterToken && client !== null && client !== void 0 && client.business_events && client.features.afm_business_events) {
      this.evaluateBusinessEventConditions();
    }
  }
  get shouldRenderChatFrame() {
    const {
      isDrawerOpen,
      adaSettings,
      chatterInLiveChat
    } = this.props;
    const {
      parentElement,
      preload
    } = adaSettings;
    const {
      chatHasBeenRendered,
      hideChatOverride,
      readyToRenderChatFrame
    } = this.state;
    if (!readyToRenderChatFrame) {
      return false;
    }
    if (hideChatOverride) {
      return false;
    }
    if (preload) {
      return true;
    }
    if (chatterInLiveChat) {
      return true;
    }
    if (parentElement) {
      return true;
    }
    if (isDrawerOpen) {
      return true;
    }
    if (chatHasBeenRendered) {
      return true;
    }
    return false;
  }
  setChatHasBeenRendered() {
    this.setState({
      chatHasBeenRendered: true
    });
  }

  // function is needed to dynamically determine with of button iframe
  computeButtonFrameWidth() {
    const {
      entryContainer,
      client
    } = this.props;
    const buttonPadding = 26;
    const iconWithSpace = 30;
    const margins = 48;
    const shadowOffset = 24;
    const buttonText = getButtonText(client);

    // create an element with the button text
    const dummyTextElement = document.createElement("span");
    dummyTextElement.innerText = buttonText || "";
    entryContainer.appendChild(dummyTextElement);
    const textButtonWidth = dummyTextElement.getBoundingClientRect().width;

    // compute width
    this.frameWidth = Math.ceil(textButtonWidth + buttonPadding + iconWithSpace + margins + shadowOffset);

    // remove the content
    entryContainer.removeChild(dummyTextElement);
  }
  unmount() {
    var _entryContainer$paren;
    const {
      entryContainer,
      messageService
    } = this.props;
    (_entryContainer$paren = entryContainer.parentNode) === null || _entryContainer$paren === void 0 ? void 0 : _entryContainer$paren.removeChild(entryContainer);
    messageService.getAllChannels().forEach(channel => {
      channel.clearTimeoutsAndListeners();
    });
    unbindLocationChangeOverrides();
    window.removeEventListener("locationchange", this.locationChangeHandlerBound);
  }
  trackEvent(trackEventParams) {
    const {
      adaSettings,
      chatterToken,
      sessionToken
    } = this.props;
    trackEventImpl(adaSettings, chatterToken, sessionToken, trackEventParams);
  }
  evaluateBusinessEventConditions() {
    const {
      client
    } = this.props;
    if (!(client !== null && client !== void 0 && client.features.afm_business_events)) {
      return;
    }
    if (!client.business_events) {
      return;
    }
    const eventsToTrigger = getEventsToTrigger(client.business_events);
    eventsToTrigger.forEach(businessEvent => {
      this.trackEvent({
        eventKey: businessEvent.event_key,
        value: businessEvent.value
      });
    });
  }
  triggerCampaign(params) {
    var _client$marketing_cam;
    const {
      client,
      isDrawerOpen,
      setGlobalState
    } = this.props;
    const {
      chatHasBeenRendered
    } = this.state;
    const {
      campaignKey,
      ignoreStatus,
      ignoreFrequency
    } = params;

    // Don't allow sending campaigns when chat is open, it would interrupt the conversation
    if (isDrawerOpen) {
      return;
    }
    const campaign = client === null || client === void 0 ? void 0 : (_client$marketing_cam = client.marketing_campaigns) === null || _client$marketing_cam === void 0 ? void 0 : _client$marketing_cam.find(c => c.campaign_key === campaignKey);
    if (!campaign) {
      throw new AdaEmbedError(`Could not find campaign with key: ${campaignKey}`);
    }

    // we were using the null coalescing (??) operator but it yielded incorrect behaviour.
    // we are not sure why, but switching to using a ternary fixes the behaviour
    const followUpResponseId = campaign.follow_up_response_id ? campaign.follow_up_response_id : campaign.response_id;
    setGlobalState({
      latestCampaignKey: campaignKey,
      hasChatOpenedAfterProactiveMessagesShown: false,
      wasCampaignShownButNowClosed: false,
      proactiveCampaignHadMessages: false
    });
    this.setState({
      // Only need to load chat for engage campaigns, not free tier (message_text) campaigns
      chatHasBeenRendered: chatHasBeenRendered || !campaign.message_text,
      campaignToTrigger: campaign,
      followUpResponseId,
      campaignTriggerOptions: {
        ignoreFrequency,
        ignoreStatus
      }
    });
  }
  evaluateCampaignConditions(params) {
    let useDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const {
      adaSettings,
      client
    } = this.props;
    if (!client) {
      throw new AdaEmbedError("`client` is not defined");
    }
    const campaignToTrigger = getCampaignToTrigger(adaSettings, client.marketing_campaigns, params, !client.features.afm_proactive_messaging);
    if (campaignToTrigger) {
      if (useDelay) {
        setTimeout(() => {
          const {
            trigger_conditions: triggerConditions = []
          } = campaignToTrigger;

          // Make sure trigger conditions are still met after delay
          for (let i = 0; i < triggerConditions.length; i += 1) {
            if (!evalTriggerCondition(triggerConditions[i])) {
              return;
            }
          }
          this.triggerCampaign({
            campaignKey: campaignToTrigger.campaign_key
          });
        }, campaignToTrigger.message_delay * 1000);
      } else {
        this.triggerCampaign({
          campaignKey: campaignToTrigger.campaign_key
        });
      }
    }
  }
  async handleSettingDeviceToken(localChannel, payload, id) {
    const {
      setGlobalState,
      sensitiveMetaFields,
      metaFields
    } = this.props;
    const sdkType = (metaFields === null || metaFields === void 0 ? void 0 : metaFields.sdkType) || "WEB";
    // If using react native then send os type as android since react native uses Firebase Cloud Messaging
    const deviceOS = sdkType === "REACTNATIVE" ? "ANDROID" : sdkType;
    const {
      token
    } = payload;
    await setGlobalState({
      deviceToken: token,
      sensitiveMetaFields: Container_objectSpread(Container_objectSpread({}, sensitiveMetaFields), {}, {
        device_token: token,
        device_os: deviceOS
      })
    });
    localChannel.postMessage(SET_DEVICE_TOKEN_RESPONSE, null, id);
  }
  async handleEmbedAction(type, payload, id) {
    const {
      client,
      messageService,
      adaSettings
    } = this.props;
    const {
      parentElement
    } = adaSettings;
    const localChannel = messageService.getChannel("local");
    const xStorageChannel = messageService.getChannel(XSTORAGE_IFRAME);
    switch (type) {
      case TRACK_EVENT:
        {
          if (!client) {
            throw new AdaEmbedError("`client` is not defined");
          }
          if (!client.features.afm_business_events) {
            console.error("Ada Embed - business events not available in your feature set.");
          } else {
            this.trackEvent(payload);
          }
          localChannel.postMessage(TRACK_EVENT_RESPONSE, null, id);
          break;
        }
      case TRIGGER_CAMPAIGN:
        {
          if (!client) {
            throw new AdaEmbedError("`client` is not defined");
          }
          if (!client.features.afm_proactive_messaging) {
            console.error("Ada Embed - proactive campaigns not available in your feature set.");
          } else {
            this.triggerCampaign(payload);
          }
          localChannel.postMessage(TRIGGER_CAMPAIGN_RESPONSE, null, id);
          break;
        }
      case EVAL_CAMPAIGN_CONDITIONS:
        {
          if (!client) {
            throw new AdaEmbedError("`client` is not defined");
          }
          if (!client.features.afm_proactive_messaging) {
            console.error("Ada Embed - proactive campaigns not available in your feature set.");
          } else {
            this.evaluateCampaignConditions(payload);
          }
          localChannel.postMessage(EVAL_CAMPAIGN_CONDITIONS_RESPONSE, null, id);
          break;
        }
      case GET_INFO:
        {
          const {
            isDrawerOpen,
            drawerHasBeenOpened,
            chatterToken
          } = this.props;
          const contentToReturn = {
            isDrawerOpen,
            isChatOpen: isDrawerOpen || Boolean(parentElement),
            hasActiveChatter: Boolean(chatterToken),
            hasClosedChat: drawerHasBeenOpened && !isDrawerOpen
          };
          localChannel.postMessage(GET_INFO_RESPONSE, contentToReturn, id);
          break;
        }
      case SET_META_FIELDS:
        {
          const {
            metaFields,
            setGlobalState
          } = this.props;
          const metaData = payload;
          const newMetaFields = Container_objectSpread(Container_objectSpread({}, metaFields), metaData);
          await setGlobalState({
            metaFields: newMetaFields
          });
          localChannel.postMessage(SET_META_FIELDS_RESPONSE, null, id);
          break;
        }
      case "SET_SENSITIVE_META_FIELDS":
        {
          const {
            sensitiveMetaFields,
            setGlobalState
          } = this.props;
          await setGlobalState({
            sensitiveMetaFields: Container_objectSpread(Container_objectSpread({}, sensitiveMetaFields), payload)
          });
          localChannel.postMessage("SET_SENSITIVE_META_FIELDS_RESPONSE", null, id);
          break;
        }
      case STOP:
        {
          localChannel.postMessage(STOP_RESPONSE, null, id);
          this.unmount();
          break;
        }
      case RESET:
        {
          const {
            greeting,
            language,
            metaFields: newMetaFields,
            sensitiveMetaFields,
            resetChatHistory = true,
            activeModality
          } = payload;
          const {
            setGlobalState
          } = this.props;
          const {
            handle
          } = adaSettings;
          log("Reset method triggered", {
            handle,
            greeting,
            resetChatHistory,
            language,
            metaFields: newMetaFields,
            sensitiveMetaFields
          });
          const {
            chatHasBeenRendered
          } = this.state;
          let newState = {
            greeting,
            language,
            metaFields: newMetaFields,
            sensitiveMetaFields,
            chatDimensions: undefined,
            activeModality
          };
          if (resetChatHistory) {
            if (!xStorageChannel) {
              throw new AdaEmbedError("`xStorageChannel` is null");
            }
            xStorageChannel.postMessage(DELETE_HISTORY_EVENT, undefined);

            // Clear chatter data from local storage
            dist/* adaLocalStorage */.BB.removeItem(CHATTER_TOKEN_STORAGE_KEY);
            dist/* adaSessionStorage */.ad.removeItem(CHATTER_TOKEN_STORAGE_KEY);
            dist/* adaLocalStorage */.BB.removeItem(CHATTER_CREATED_STORAGE_KEY);
            dist/* adaSessionStorage */.ad.removeItem(CHATTER_CREATED_STORAGE_KEY);

            // And from state
            newState = Container_objectSpread(Container_objectSpread({}, newState), {}, {
              chatterToken: undefined,
              chatterCreated: undefined
            });
          }
          await setGlobalState(newState);
          if (chatHasBeenRendered) {
            this.setState({
              hideChatOverride: true
            }, () => {
              this.setState({
                hideChatOverride: false
              });
            });
          }
          localChannel.postMessage(RESET_RESPONSE, null, id);
          break;
        }
      case DELETE_HISTORY:
        {
          const {
            setGlobalState
          } = this.props;
          if (!xStorageChannel) {
            throw new AdaEmbedError("`xStorageChannel` is null");
          }

          // Clear chatter data from local storage
          dist/* adaLocalStorage */.BB.removeItem(CHATTER_TOKEN_STORAGE_KEY);
          dist/* adaSessionStorage */.ad.removeItem(CHATTER_TOKEN_STORAGE_KEY);
          dist/* adaLocalStorage */.BB.removeItem(CHATTER_CREATED_STORAGE_KEY);
          dist/* adaSessionStorage */.ad.removeItem(CHATTER_CREATED_STORAGE_KEY);

          // And from state
          await setGlobalState({
            chatterToken: undefined,
            chatterCreated: undefined
          });
          xStorageChannel.postMessage(DELETE_HISTORY_EVENT, undefined);
          localChannel.postMessage(DELETE_HISTORY_RESPONSE, null, id);
          break;
        }
      case CREATE_PROACTIVE:
        {
          if (!client) {
            throw new AdaEmbedError("`client` is not defined");
          }
          const {
            body,
            duration
          } = payload;
          const EXTRA_PROACTIVE_DELAY = 1000;
          this.setState({
            hideIntroOverride: true
          }, async () => {
            const {
              setGlobalState
            } = this.props;
            const newClient = new Client(Container_objectSpread(Container_objectSpread({}, client), {}, {
              intro: {
                body,
                delay: 0,
                // Not just duration || null because we want to preserve 0 duration
                duration: duration || duration === 0 ? duration : null,
                style: "Text",
                response_id: ""
              }
            }));
            await setGlobalState({
              client: newClient,
              isIntroShown: false
            });
            this.setState({
              hideIntroOverride: false
            });
          });
          await wait((duration || 0) * 1000 + EXTRA_PROACTIVE_DELAY);
          localChannel.postMessage(CREATE_PROACTIVE_RESPONSE, null, id);
          break;
        }
      case CLOSE_CAMPAIGN:
        {
          const chatChannel = messageService.getChannel(CHAT_IFRAME);
          if (chatChannel) {
            chatChannel.postMessage(CLOSE_CAMPAIGN, undefined);
          }
          localChannel.postMessage(CLOSE_CAMPAIGN_RESPONSE, null, id);
          break;
        }
      case SET_DEVICE_TOKEN:
        {
          this.handleSettingDeviceToken(localChannel, payload, id);
          break;
        }
      default:
        {
          // Do nothing
        }
    }
  }
  bindEmbedActionEventHandler() {
    const {
      messageService
    } = this.props;
    const localChannel = messageService.getChannel("local");
    return localChannel.addEventListener((type, payload, id) => {
      this.handleEmbedAction(type, payload, id);
    });
  }
  locationChangeHandler() {
    this.setState({
      hideIntroOverride: true
    }, () => {
      /**
       * Re-fetch client (this is especially important for intros)
       */
      this.initialize().then(() => {
        this.setState({
          hideIntroOverride: false
        });
        this.evaluateCampaignConditions({}, true);
        this.evaluateBusinessEventConditions();
      });
    });
  }

  /**
   * Setup Ada Embed
   */
  async initialize() {
    const {
      adaSettings,
      setGlobalState
    } = this.props;
    const {
      handle,
      cluster,
      domain,
      rolloutOverride,
      adaReadyCallback,
      privateMode
    } = adaSettings;
    const language = adaSettings.language || get_browser_language();

    // We do not want to store functions in our store. The rest of the values are useful however.
    const adaSettingsWithoutFunctions = Object.keys(adaSettings).reduce((newSettings, currentVal) => {
      if (typeof adaSettings[currentVal] !== "function") {
        return Container_objectSpread(Container_objectSpread({}, newSettings), {}, {
          [currentVal]: adaSettings[currentVal]
        });
      }
      return newSettings;
    }, {});
    const clientResponse = await fetchClient(handle, cluster, domain, language);
    if (!clientResponse) {
      this.unmount();
      return;
    }
    const primaryBotClient = new Client(clientResponse.client);
    const rolloutPercentage = rolloutOverride !== undefined ? rolloutOverride : primaryBotClient.rollout;
    const shouldHideEmbedButton = !checkRollout(rolloutPercentage, primaryBotClient.handle);

    // if there is a bot override handle in the URL, we should ignore the primary rollout which determines whether any embed button is shown
    if (shouldHideEmbedButton && !getBotOverrideHandleFromWebpageURL()) {
      warn("User is in the wrong rollout group.");
      if (adaReadyCallback) {
        adaReadyCallback({
          isRolledOut: false
        });
      }
      this.unmount();
      return;
    }
    const alternativeBot = primaryBotClient.alternative_bot;
    const assignedClient = await fetchClientUsingAlternativeBotRollout(primaryBotClient, alternativeBot, adaSettings);
    if (!assignedClient) {
      this.unmount();
      return;
    }
    const baseApiUrl = getURL({
      name: "api",
      handle: assignedClient.handle,
      cluster: cluster,
      domain
    });

    // fetch business events if they're not part of the cached client
    if (assignedClient.features.afm_business_events && !assignedClient.business_events) {
      try {
        const businessEvents = await httpRequest({
          url: `${baseApiUrl}business_events/`
        });
        assignedClient.business_events = businessEvents.business_events;
      } catch (e) {
        assignedClient.business_events = [];
        warn("Failed to fetch events from API.");
      }
    }

    // Fetch marketing campaigns if they're not part of the cached client
    if (!assignedClient.marketing_campaigns) {
      try {
        const marketingCampaigns = await httpRequest({
          url: `${baseApiUrl}campaigns/`
        });
        assignedClient.marketing_campaigns = marketingCampaigns.campaigns;
      } catch (e) {
        assignedClient.marketing_campaigns = [];
        assignedClient.marketing_campaigns_order = [];
        warn("Failed to fetch campaigns from API.");
      }
    }

    // Sort the campaigns by marketing_campaigns_order
    if (assignedClient.marketing_campaigns_order) {
      assignedClient.marketing_campaigns = assignedClient.marketing_campaigns_order.map(campaignId => {
        var _assignedClient$marke;
        return (_assignedClient$marke = assignedClient.marketing_campaigns) === null || _assignedClient$marke === void 0 ? void 0 : _assignedClient$marke.find(c => c._id === campaignId);
      })
      // remove undefined campaigns, shouldn't happen but just in case
      // for example this happened once when we manually deleted a malformed campaign from the db
      .filter(campaign => Boolean(campaign));
    }
    const {
      chat: chatIsOn
    } = assignedClient;
    if (!chatIsOn) {
      warn("Sorry, please turn on the web chat integration in your bot's settings.");
      this.unmount();
      return;
    }
    const chatterInLiveChat = retrieveStorage(IN_LIVE_CHAT_STORAGE_KEY, assignedClient, privateMode);
    try {
      await setGlobalState(Container_objectSpread(Container_objectSpread({
        client: assignedClient,
        enabledLanguages: ["en"].concat(assignedClient.translated_languages),
        initialURL: window.location.href,
        isIntroShown: false
      }, adaSettingsWithoutFunctions), {}, {
        handle: assignedClient.handle,
        adaSettings: Container_objectSpread(Container_objectSpread({}, adaSettings), {}, {
          handle: assignedClient.handle
        }),
        chatterInLiveChat
      }));
    } catch (e) {
      if (e instanceof Error) {
        error_tracker.trackException(e);
      }
      this.unmount();
    }
  }
  resetChat() {
    const {
      messageService
    } = this.props;
    const {
      chatHasBeenRendered
    } = this.state;
    const xStorageChannel = messageService.getChannel(XSTORAGE_IFRAME);

    /* istanbul ignore next */
    if (!xStorageChannel) {
      // This should never happen (ideally).
      throw new AdaEmbedError("`xStorageChannel` is null");
    }
    xStorageChannel.postMessage(DELETE_HISTORY_EVENT, undefined);
    if (chatHasBeenRendered) {
      this.setState({
        hideChatOverride: true
      }, () => {
        this.setState({
          hideChatOverride: false
        });
      });
    }
  }
  notificationPermHandler() {
    const {
      setGlobalState
    } = this.props;
    notificationPermissionsListener(notificationStatus => {
      setGlobalState({
        notificationsPermission: notificationStatus
      });
    });
  }
  renderChatFrame() {
    const {
      messageService,
      store,
      adaSettings
    } = this.props;
    const {
      campaignToTrigger,
      followUpResponseId,
      chatVersion
    } = this.state;
    if (!this.shouldRenderChatFrame) {
      return null;
    }
    return v(components_ChatFrame, {
      chatVersion: chatVersion,
      setChatHasBeenRendered: this.setChatHasBeenRenderedBound,
      adaSettings: adaSettings,
      store: store,
      messageService: messageService,
      resetChat: this.resetChatBound,
      skipGreeting: Boolean(campaignToTrigger || followUpResponseId)
    });
  }
  renderIntroFrame() {
    var _client$intro;
    const {
      adaSettings,
      client
    } = this.props;
    const {
      parentElement
    } = adaSettings;
    const {
      hideIntroOverride
    } = this.state;
    if (parentElement || (client === null || client === void 0 ? void 0 : (_client$intro = client.intro) === null || _client$intro === void 0 ? void 0 : _client$intro.style.toLocaleLowerCase()) !== "text" || hideIntroOverride ||
    // This avoids intros and campaigns being shown at the same time
    this.shouldRenderChatFrame) {
      return null;
    }
    return v(components_IntroFrame, null);
  }
  renderMaskFrame() {
    const {
      adaSettings,
      hideMask
    } = this.props;
    const {
      parentElement
    } = adaSettings;
    if (parentElement || hideMask) {
      return null;
    }
    return v(components_MaskFrame, null);
  }
  renderBackdrop() {
    const {
      adaSettings,
      chatDimensions,
      isDrawerOpen,
      isIntroShown
    } = this.props;
    const {
      parentElement
    } = adaSettings;

    // checking for a non-empty parentElement here to
    // hide the backdrop in the SDKs
    if (parentElement) {
      return null;
    }
    const hasProactiveMessagesShown = Boolean(chatDimensions === null || chatDimensions === void 0 ? void 0 : chatDimensions.height);
    const shouldShowShadow = isDrawerOpen || hasProactiveMessagesShown || isIntroShown;
    return v("div", {
      style: Container_objectSpread(Container_objectSpread({
        position: "fixed",
        width: "635px",
        height: "785px",
        [getAlignment(adaSettings)]: 0
      }, getAlignment(adaSettings) === "left" ? {
        background: "linear-gradient(45deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 40.92%)"
      } : {
        background: "linear-gradient(315.92deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 40.92%)"
      }), {}, {
        bottom: 0,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "500ms linear",
        opacity: shouldShowShadow ? 1 : 0
      })
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderXStorageFrame() {
    return v(components_XStorageFrame, null);
  }
  renderButtonFrame() {
    const {
      adaSettings
    } = this.props;
    const {
      parentElement
    } = adaSettings;
    if (parentElement) {
      return null;
    }
    const {
      frameWidth
    } = this;

    // when using text button style, the frame shouldn't be wider than the button
    return v(components_ButtonFrame, {
      frameWidth: frameWidth,
      adaSettings: adaSettings
    });
  }
  render() {
    const {
      client
    } = this.props;

    /**
     * We need to wait for the client to be loaded before rendering iFrames
     */
    if (!client) {
      return null;
    }
    return v(p, null, this.renderBackdrop(), this.renderXStorageFrame(), this.renderButtonFrame(), this.renderChatFrame(), this.renderIntroFrame(), this.renderMaskFrame());
  }
}
function Container_mapStateToProps(storeState) {
  const {
    client,
    hideMask,
    metaFields,
    sensitiveMetaFields,
    isChatWebsocketConnected,
    isDrawerOpen,
    chatterToken,
    sessionToken,
    appConnectionState,
    drawerHasBeenOpened,
    chatterInLiveChat,
    chatDimensions,
    isIntroShown,
    language,
    wasCampaignShownButNowClosed
  } = storeState;
  return {
    client,
    hideMask,
    metaFields,
    sensitiveMetaFields,
    isChatWebsocketConnected,
    isDrawerOpen,
    chatterToken,
    sessionToken,
    appConnectionState,
    drawerHasBeenOpened,
    chatterInLiveChat,
    chatDimensions,
    isIntroShown,
    language,
    wasCampaignShownButNowClosed
  };
}
function Container_mapDispatchToProps(dispatch) {
  return {
    setGlobalState: bindActionCreators(ActionCreators.SET_STATE_ACTION, dispatch)
  };
}
const ConnectedContainer = connect(Container_mapStateToProps, Container_mapDispatchToProps)(Container);
;// CONCATENATED MODULE: ./src/client/embed.tsx

function embed_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function embed_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? embed_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : embed_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }










function renderApp(_ref) {
  let {
    adaSettings,
    initializationResolve,
    initializationReject,
    messageService,
    store
  } = _ref;
  let parentContainer;
  const entryContainer = document.createElement("div");
  entryContainer.id = "ada-entry";
  if (adaSettings.parentElement) {
    // Just to reduce the diff size in PR (can be removed)
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    parentContainer = getParentContainer({
      adaSettings
    });
    entryContainer.style.height = "100%";
  } else {
    parentContainer = document.body;
  }
  if (!parentContainer) {
    throw new AdaEmbedError("`parentContainer` is null");
  }
  parentContainer.appendChild(entryContainer);
  M(v(StoreContext.Provider, {
    value: store
  }, v(MessageServiceContext.Provider, {
    value: messageService
  }, v(ConnectedContainer, {
    store: store,
    messageService: messageService,
    adaSettings: adaSettings,
    entryContainer: entryContainer,
    initializationReject: initializationReject,
    initializationResolve: initializationResolve
  }))), entryContainer);
}
function getParentContainer(_ref2) {
  let {
    adaSettings
  } = _ref2;
  const {
    parentElement
  } = adaSettings;
  let targetElement = null;
  if (!parentElement) {
    return null;
  }
  if (typeof parentElement === "string") {
    targetElement = document.getElementById(parentElement);
  } else if (parentElement instanceof HTMLElement) {
    targetElement = parentElement;
  }
  if (!targetElement) {
    throw new AdaEmbedError("parentElement requires a string or HTMLElement.");
  }
  return targetElement;
}
function createEmbed(adaSettings) {
  const messageService = new MessageService();
  const localChannel = messageService.channels.local;
  const initialState = getInitialState(adaSettings);
  const store = new StoreProxy(initialState, messageService);
  const initialized = new Promise((resolve, reject) => {
    renderApp({
      adaSettings,
      messageService,
      store,
      initializationResolve: resolve,
      initializationReject: reject
    });
  });
  const debounceCampaignTrigger = lodash_debounce_default()(async function (campaignKey) {
    let triggerCampaignParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    await initialized;
    await localChannel.fetch(TRIGGER_CAMPAIGN, TRIGGER_CAMPAIGN_RESPONSE, embed_objectSpread({
      campaignKey
    }, triggerCampaignParams));
  }, 1000, {
    leading: true
  });
  return {
    initialized,
    messageService,
    store,
    adaSettings,
    async getInfo() {
      await initialized;
      return await localChannel.fetch(GET_INFO, GET_INFO_RESPONSE);
    },
    async setMetaFields(options) {
      await initialized;
      await localChannel.fetch(SET_META_FIELDS, SET_META_FIELDS_RESPONSE, options);
    },
    async setSensitiveMetaFields(options) {
      await initialized;
      await localChannel.fetch("SET_SENSITIVE_META_FIELDS", "SET_SENSITIVE_META_FIELDS_RESPONSE", options);
    },
    async stop() {
      await initialized;
      await localChannel.fetch(STOP, STOP_RESPONSE);
    },
    async deleteHistory() {
      await initialized;
      await localChannel.fetch(DELETE_HISTORY, DELETE_HISTORY_RESPONSE);
    },
    async reset() {
      let resetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      await initialized;
      await localChannel.fetch(RESET, RESET_RESPONSE, resetParams);
    },
    async trackEvent(eventKey, value) {
      let meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      await initialized;
      await localChannel.fetch(TRACK_EVENT, TRACK_EVENT_RESPONSE, {
        eventKey,
        value,
        meta
      });
    },
    async triggerCampaign(campaignKey) {
      let triggerCampaignParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      debounceCampaignTrigger(campaignKey, triggerCampaignParams);
    },
    async evaluateCampaignConditions(options) {
      await initialized;
      await localChannel.fetch(EVAL_CAMPAIGN_CONDITIONS, EVAL_CAMPAIGN_CONDITIONS_RESPONSE, options);
    },
    async createProactive(body, duration, responseId) {
      if (adaSettings.parentElement) {
        throw new AdaEmbedError("Cannot call createProactive when using parentElement.");
      }
      await initialized;
      try {
        await localChannel.fetch(CREATE_PROACTIVE, CREATE_PROACTIVE_RESPONSE, {
          body,
          duration,
          responseId
        },
        // The timeoutOverride is the duration the proactive is open for, plus a
        // 2s buffer. Without this, a very long duration could exceed the
        // default timeout.
        duration * 1000 + 2000);
      } catch (e) {
        throw new AdaEmbedError(`${e}`);
      }
    },
    async closeCampaign() {
      await initialized;
      await localChannel.fetch(CLOSE_CAMPAIGN, CLOSE_CAMPAIGN_RESPONSE);
    },
    async setDeviceToken(token) {
      await initialized;
      await localChannel.fetch(SET_DEVICE_TOKEN, SET_DEVICE_TOKEN_RESPONSE, {
        token
      });
    }
  };
}
;// CONCATENATED MODULE: ./src/interface.ts






const EMBED_NOT_INITIALIZED_ERROR = new AdaEmbedError("Actions cannot be called until Embed has been instantiated. Try running `adaEmbed.start({...})`.");

/**
 * Returns the public Embed methods to be bound to the window object.
 */
function createEmbedInterface() {
  let embed = null;
  const toggle = async () => {
    if (!embed) {
      throw EMBED_NOT_INITIALIZED_ERROR;
    }
    if (embed.adaSettings.parentElement) {
      throw new AdaEmbedError("Cannot toggle when using parentElement.");
    }
    await embed.initialized;
    await embed.store.dispatch(ActionCreators.TOGGLE_CHAT_ACTION);
  };
  return Object.freeze({
    start: async adaSettings => {
      if (!isStartOptions(adaSettings)) {
        throw new AdaEmbedError("`start` method requires `StartOptions` argument");
      }
      if (embed) {
        throw new AdaEmbedError("Ada Embed has already been started.");
      }
      embed = createEmbed(adaSettings);
      if (window.adaEmbedLoadedCallback) {
        window.adaEmbedLoadedCallback();
      }
      log("Embed start", {
        handle: adaSettings.handle,
        embedSettings: adaSettings,
        hostPage: window.location.href,
        adaScriptURL: (scriptElement => scriptElement ? scriptElement.src : null)(document.getElementById("__ada"))
      });
      return embed.initialized;
    },
    stop: async () => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      const stopPromise = embed.stop();
      embed = null;
      return stopPromise;
    },
    toggle,
    deleteHistory: async () => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.deleteHistory();
    },
    setMetaFields: async options => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.setMetaFields(options);
    },
    setSensitiveMetaFields: async options => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.setSensitiveMetaFields(options);
    },
    getInfo: async () => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.getInfo();
    },
    reset: async resetParams => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      log("Embed reset", {
        initialURL: window.location.href,
        // not sure if the handle will be present so adding the URL to help out with identifying the client
        resetChatHistory: resetParams === null || resetParams === void 0 ? void 0 : resetParams.resetChatHistory,
        greeting: resetParams === null || resetParams === void 0 ? void 0 : resetParams.greeting
      });
      return embed.reset(resetParams);
    },
    trackEvent: async (eventKey, value, meta) => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.trackEvent(eventKey, value, meta);
    },
    createProactive: async function (body) {
      let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
      let responseId = arguments.length > 2 ? arguments[2] : undefined;
      if (!body) {
        throw new AdaEmbedError("Cannot call createProactive without body set.");
      }
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.createProactive(body, duration, responseId);
    },
    triggerCampaign: async (campaignKey, options) => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.triggerCampaign(campaignKey, options);
    },
    evaluateCampaignConditions: async options => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.evaluateCampaignConditions(options);
    },
    subscribeEvent: async (eventKey, callback) => subscribeEvent(eventKey, callback),
    unsubscribeEvent: async id => unsubscribeEvent(id),
    closeCampaign: async () => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.closeCampaign();
    },
    setDeviceToken: async token => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      return embed.setDeviceToken(token);
    },
    setLanguage: language => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      const channel = embed.messageService.getChannel("chat");
      if (!channel) {
        throw new AdaEmbedError("Chat is not ready yet to have language changed.");
      }
      channel.postMessage("SET_LANGUAGE", {
        language
      });
    },
    handleNotification: async () => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      const windowInfo = await embed.getInfo();
      if (!windowInfo.isChatOpen) {
        await toggle();
      }
    },
    triggerAnswer: answerId => {
      if (!embed) {
        throw EMBED_NOT_INITIALIZED_ERROR;
      }
      const channel = embed.messageService.getChannel("chat");
      if (!channel) {
        throw new AdaEmbedError("Chat is not ready yet to have answer triggered.");
      }
      channel.postMessage("TRIGGER_ANSWER", {
        answerId
      });
    }
  });
}
;// CONCATENATED MODULE: ./src/index-npm.ts


// We need "export default" for NPM module to be used as `import adaEmbed from "@ada-support/embed2";`
// eslint-disable-next-line import/no-default-export
/* harmony default export */ var index_npm = (createEmbedInterface());
}();
module.exports = __webpack_exports__;
/******/ })()
;