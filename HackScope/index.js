function s0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: ()=>r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o=>{
        for (const i of o)
            if (i.type === "childList")
                for (const l of i.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function u0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var jm = {
    exports: {}
}
  , Sa = {}
  , Rm = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hi = Symbol.for("react.element")
  , c0 = Symbol.for("react.portal")
  , f0 = Symbol.for("react.fragment")
  , d0 = Symbol.for("react.strict_mode")
  , p0 = Symbol.for("react.profiler")
  , m0 = Symbol.for("react.provider")
  , h0 = Symbol.for("react.context")
  , g0 = Symbol.for("react.forward_ref")
  , v0 = Symbol.for("react.suspense")
  , y0 = Symbol.for("react.memo")
  , w0 = Symbol.for("react.lazy")
  , bf = Symbol.iterator;
function x0(e) {
    return e === null || typeof e != "object" ? null : (e = bf && e[bf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var $m = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Tm = Object.assign
  , Im = {};
function Xr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Im,
    this.updater = n || $m
}
Xr.prototype.isReactComponent = {};
Xr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Xr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Dm() {}
Dm.prototype = Xr.prototype;
function nc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Im,
    this.updater = n || $m
}
var rc = nc.prototype = new Dm;
rc.constructor = nc;
Tm(rc, Xr.prototype);
rc.isPureReactComponent = !0;
var Ef = Array.isArray
  , Lm = Object.prototype.hasOwnProperty
  , oc = {
    current: null
}
  , zm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Mm(e, t, n) {
    var r, o = {}, i = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Lm.call(t, r) && !zm.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        o.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: hi,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: oc.current
    }
}
function S0(e, t) {
    return {
        $$typeof: hi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ic(e) {
    return typeof e == "object" && e !== null && e.$$typeof === hi
}
function _0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var kf = /\/+/g;
function fs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? _0("" + e.key) : t.toString(36)
}
function ol(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (i) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case hi:
            case c0:
                l = !0
            }
        }
    if (l)
        return l = e,
        o = o(l),
        e = r === "" ? "." + fs(l, 0) : r,
        Ef(o) ? (n = "",
        e != null && (n = e.replace(kf, "$&/") + "/"),
        ol(o, t, n, "", function(u) {
            return u
        })) : o != null && (ic(o) && (o = S0(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(kf, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    Ef(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var s = r + fs(i, a);
            l += ol(i, t, n, s, o)
        }
    else if (s = x0(e),
    typeof s == "function")
        for (e = s.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            s = r + fs(i, a++),
            l += ol(i, t, n, s, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function Ri(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return ol(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function O0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ye = {
    current: null
}
  , il = {
    transition: null
}
  , P0 = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: il,
    ReactCurrentOwner: oc
};
Y.Children = {
    map: Ri,
    forEach: function(e, t, n) {
        Ri(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ri(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ri(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ic(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = Xr;
Y.Fragment = f0;
Y.Profiler = p0;
Y.PureComponent = nc;
Y.StrictMode = d0;
Y.Suspense = v0;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P0;
Y.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Tm({}, e.props)
      , o = e.key
      , i = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        l = oc.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (s in t)
            Lm.call(t, s) && !zm.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: hi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: l
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: h0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: m0,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = Mm;
Y.createFactory = function(e) {
    var t = Mm.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: g0,
        render: e
    }
}
;
Y.isValidElement = ic;
Y.lazy = function(e) {
    return {
        $$typeof: w0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: O0
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: y0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = il.transition;
    il.transition = {};
    try {
        e()
    } finally {
        il.transition = t
    }
}
;
Y.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
Y.useCallback = function(e, t) {
    return Ye.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return Ye.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return Ye.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return Ye.current.useEffect(e, t)
}
;
Y.useId = function() {
    return Ye.current.useId()
}
;
Y.useImperativeHandle = function(e, t, n) {
    return Ye.current.useImperativeHandle(e, t, n)
}
;
Y.useInsertionEffect = function(e, t) {
    return Ye.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return Ye.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return Ye.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, n) {
    return Ye.current.useReducer(e, t, n)
}
;
Y.useRef = function(e) {
    return Ye.current.useRef(e)
}
;
Y.useState = function(e) {
    return Ye.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, n) {
    return Ye.current.useSyncExternalStore(e, t, n)
}
;
Y.useTransition = function() {
    return Ye.current.useTransition()
}
;
Y.version = "18.2.0";
Rm.exports = Y;
var _ = Rm.exports;
const R = u0(_)
  , Sl = s0({
    __proto__: null,
    default: R
}, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b0 = _
  , E0 = Symbol.for("react.element")
  , k0 = Symbol.for("react.fragment")
  , C0 = Object.prototype.hasOwnProperty
  , N0 = b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , j0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Am(e, t, n) {
    var r, o = {}, i = null, l = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        C0.call(t, r) && !j0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: E0,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: N0.current
    }
}
Sa.Fragment = k0;
Sa.jsx = Am;
Sa.jsxs = Am;
jm.exports = Sa;
var c = jm.exports
  , Ks = {}
  , Fm = {
    exports: {}
}
  , ct = {}
  , Hm = {
    exports: {}
}
  , Um = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t($, M) {
        var U = $.length;
        $.push(M);
        e: for (; 0 < U; ) {
            var te = U - 1 >>> 1
              , se = $[te];
            if (0 < o(se, M))
                $[te] = M,
                $[U] = se,
                U = te;
            else
                break e
        }
    }
    function n($) {
        return $.length === 0 ? null : $[0]
    }
    function r($) {
        if ($.length === 0)
            return null;
        var M = $[0]
          , U = $.pop();
        if (U !== M) {
            $[0] = U;
            e: for (var te = 0, se = $.length, pt = se >>> 1; te < pt; ) {
                var ie = 2 * (te + 1) - 1
                  , ot = $[ie]
                  , Xe = ie + 1
                  , Lt = $[Xe];
                if (0 > o(ot, U))
                    Xe < se && 0 > o(Lt, ot) ? ($[te] = Lt,
                    $[Xe] = U,
                    te = Xe) : ($[te] = ot,
                    $[ie] = U,
                    te = ie);
                else if (Xe < se && 0 > o(Lt, U))
                    $[te] = Lt,
                    $[Xe] = U,
                    te = Xe;
                else
                    break e
            }
        }
        return M
    }
    function o($, M) {
        var U = $.sortIndex - M.sortIndex;
        return U !== 0 ? U : $.id - M.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var l = Date
          , a = l.now();
        e.unstable_now = function() {
            return l.now() - a
        }
    }
    var s = []
      , u = []
      , d = 1
      , f = null
      , g = 3
      , x = !1
      , w = !1
      , y = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v($) {
        for (var M = n(u); M !== null; ) {
            if (M.callback === null)
                r(u);
            else if (M.startTime <= $)
                r(u),
                M.sortIndex = M.expirationTime,
                t(s, M);
            else
                break;
            M = n(u)
        }
    }
    function h($) {
        if (y = !1,
        v($),
        !w)
            if (n(s) !== null)
                w = !0,
                ne(O);
            else {
                var M = n(u);
                M !== null && ye(h, M.startTime - $)
            }
    }
    function O($, M) {
        w = !1,
        y && (y = !1,
        m(N),
        N = -1),
        x = !0;
        var U = g;
        try {
            for (v(M),
            f = n(s); f !== null && (!(f.expirationTime > M) || $ && !H()); ) {
                var te = f.callback;
                if (typeof te == "function") {
                    f.callback = null,
                    g = f.priorityLevel;
                    var se = te(f.expirationTime <= M);
                    M = e.unstable_now(),
                    typeof se == "function" ? f.callback = se : f === n(s) && r(s),
                    v(M)
                } else
                    r(s);
                f = n(s)
            }
            if (f !== null)
                var pt = !0;
            else {
                var ie = n(u);
                ie !== null && ye(h, ie.startTime - M),
                pt = !1
            }
            return pt
        } finally {
            f = null,
            g = U,
            x = !1
        }
    }
    var E = !1
      , P = null
      , N = -1
      , z = 5
      , T = -1;
    function H() {
        return !(e.unstable_now() - T < z)
    }
    function F() {
        if (P !== null) {
            var $ = e.unstable_now();
            T = $;
            var M = !0;
            try {
                M = P(!0, $)
            } finally {
                M ? ee() : (E = !1,
                P = null)
            }
        } else
            E = !1
    }
    var ee;
    if (typeof p == "function")
        ee = function() {
            p(F)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ce = new MessageChannel
          , ae = ce.port2;
        ce.port1.onmessage = F,
        ee = function() {
            ae.postMessage(null)
        }
    } else
        ee = function() {
            S(F, 0)
        }
        ;
    function ne($) {
        P = $,
        E || (E = !0,
        ee())
    }
    function ye($, M) {
        N = S(function() {
            $(e.unstable_now())
        }, M)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function($) {
        $.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        ne(O))
    }
    ,
    e.unstable_forceFrameRate = function($) {
        0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < $ ? Math.floor(1e3 / $) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return g
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function($) {
        switch (g) {
        case 1:
        case 2:
        case 3:
            var M = 3;
            break;
        default:
            M = g
        }
        var U = g;
        g = M;
        try {
            return $()
        } finally {
            g = U
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function($, M) {
        switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            $ = 3
        }
        var U = g;
        g = $;
        try {
            return M()
        } finally {
            g = U
        }
    }
    ,
    e.unstable_scheduleCallback = function($, M, U) {
        var te = e.unstable_now();
        switch (typeof U == "object" && U !== null ? (U = U.delay,
        U = typeof U == "number" && 0 < U ? te + U : te) : U = te,
        $) {
        case 1:
            var se = -1;
            break;
        case 2:
            se = 250;
            break;
        case 5:
            se = 1073741823;
            break;
        case 4:
            se = 1e4;
            break;
        default:
            se = 5e3
        }
        return se = U + se,
        $ = {
            id: d++,
            callback: M,
            priorityLevel: $,
            startTime: U,
            expirationTime: se,
            sortIndex: -1
        },
        U > te ? ($.sortIndex = U,
        t(u, $),
        n(s) === null && $ === n(u) && (y ? (m(N),
        N = -1) : y = !0,
        ye(h, U - te))) : ($.sortIndex = se,
        t(s, $),
        w || x || (w = !0,
        ne(O))),
        $
    }
    ,
    e.unstable_shouldYield = H,
    e.unstable_wrapCallback = function($) {
        var M = g;
        return function() {
            var U = g;
            g = M;
            try {
                return $.apply(this, arguments)
            } finally {
                g = U
            }
        }
    }
}
)(Um);
Hm.exports = Um;
var R0 = Hm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bm = _
  , ut = R0;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Wm = new Set
  , Qo = {};
function ar(e, t) {
    Ar(e, t),
    Ar(e + "Capture", t)
}
function Ar(e, t) {
    for (Qo[e] = t,
    e = 0; e < t.length; e++)
        Wm.add(t[e])
}
var ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ys = Object.prototype.hasOwnProperty
  , $0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Cf = {}
  , Nf = {};
function T0(e) {
    return Ys.call(Nf, e) ? !0 : Ys.call(Cf, e) ? !1 : $0.test(e) ? Nf[e] = !0 : (Cf[e] = !0,
    !1)
}
function I0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function D0(e, t, n, r) {
    if (t === null || typeof t > "u" || I0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ge(e, t, n, r, o, i, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = l
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ae[e] = new Ge(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ae[t] = new Ge(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ae[e] = new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ae[e] = new Ge(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ae[e] = new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ae[e] = new Ge(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ae[e] = new Ge(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ae[e] = new Ge(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ae[e] = new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var lc = /[\-:]([a-z])/g;
function ac(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(lc, ac);
    Ae[t] = new Ge(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(lc, ac);
    Ae[t] = new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(lc, ac);
    Ae[t] = new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ae[e] = new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ae.xlinkHref = new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ae[e] = new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function sc(e, t, n, r) {
    var o = Ae.hasOwnProperty(t) ? Ae[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D0(t, n, o, r) && (n = null),
    r || o === null ? T0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var pn = Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , $i = Symbol.for("react.element")
  , hr = Symbol.for("react.portal")
  , gr = Symbol.for("react.fragment")
  , uc = Symbol.for("react.strict_mode")
  , Gs = Symbol.for("react.profiler")
  , Vm = Symbol.for("react.provider")
  , Qm = Symbol.for("react.context")
  , cc = Symbol.for("react.forward_ref")
  , Xs = Symbol.for("react.suspense")
  , qs = Symbol.for("react.suspense_list")
  , fc = Symbol.for("react.memo")
  , yn = Symbol.for("react.lazy")
  , Km = Symbol.for("react.offscreen")
  , jf = Symbol.iterator;
function fo(e) {
    return e === null || typeof e != "object" ? null : (e = jf && e[jf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ve = Object.assign, ds;
function Co(e) {
    if (ds === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ds = t && t[1] || ""
        }
    return `
` + ds + e
}
var ps = !1;
function ms(e, t) {
    if (!e || ps)
        return "";
    ps = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, a = i.length - 1; 1 <= l && 0 <= a && o[l] !== i[a]; )
                a--;
            for (; 1 <= l && 0 <= a; l--,
            a--)
                if (o[l] !== i[a]) {
                    if (l !== 1 || a !== 1)
                        do
                            if (l--,
                            a--,
                            0 > a || o[l] !== i[a]) {
                                var s = `
` + o[l].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= l && 0 <= a);
                    break
                }
        }
    } finally {
        ps = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Co(e) : ""
}
function L0(e) {
    switch (e.tag) {
    case 5:
        return Co(e.type);
    case 16:
        return Co("Lazy");
    case 13:
        return Co("Suspense");
    case 19:
        return Co("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ms(e.type, !1),
        e;
    case 11:
        return e = ms(e.type.render, !1),
        e;
    case 1:
        return e = ms(e.type, !0),
        e;
    default:
        return ""
    }
}
function Js(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case gr:
        return "Fragment";
    case hr:
        return "Portal";
    case Gs:
        return "Profiler";
    case uc:
        return "StrictMode";
    case Xs:
        return "Suspense";
    case qs:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Qm:
            return (e.displayName || "Context") + ".Consumer";
        case Vm:
            return (e._context.displayName || "Context") + ".Provider";
        case cc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case fc:
            return t = e.displayName || null,
            t !== null ? t : Js(e.type) || "Memo";
        case yn:
            t = e._payload,
            e = e._init;
            try {
                return Js(e(t))
            } catch {}
        }
    return null
}
function z0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Js(t);
    case 8:
        return t === uc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Tn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ym(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function M0(e) {
    var t = Ym(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(l) {
                r = "" + l,
                i.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ti(e) {
    e._valueTracker || (e._valueTracker = M0(e))
}
function Gm(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ym(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function _l(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Zs(e, t) {
    var n = t.checked;
    return ve({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Rf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Tn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Xm(e, t) {
    t = t.checked,
    t != null && sc(e, "checked", t, !1)
}
function eu(e, t) {
    Xm(e, t);
    var n = Tn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? tu(e, t.type, n) : t.hasOwnProperty("defaultValue") && tu(e, t.type, Tn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function $f(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function tu(e, t, n) {
    (t !== "number" || _l(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var No = Array.isArray;
function Nr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Tn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function nu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return ve({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Tf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (No(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Tn(n)
    }
}
function qm(e, t) {
    var n = Tn(t.value)
      , r = Tn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function If(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Jm(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ru(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Jm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ii, Zm = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ii = Ii || document.createElement("div"),
        Ii.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ii.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ko(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var To = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , A0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(To).forEach(function(e) {
    A0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        To[t] = To[e]
    })
});
function eh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || To.hasOwnProperty(e) && To[e] ? ("" + t).trim() : t + "px"
}
function th(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = eh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var F0 = ve({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ou(e, t) {
    if (t) {
        if (F0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function iu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var lu = null;
function dc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var au = null
  , jr = null
  , Rr = null;
function Df(e) {
    if (e = yi(e)) {
        if (typeof au != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Ea(t),
        au(e.stateNode, e.type, t))
    }
}
function nh(e) {
    jr ? Rr ? Rr.push(e) : Rr = [e] : jr = e
}
function rh() {
    if (jr) {
        var e = jr
          , t = Rr;
        if (Rr = jr = null,
        Df(e),
        t)
            for (e = 0; e < t.length; e++)
                Df(t[e])
    }
}
function oh(e, t) {
    return e(t)
}
function ih() {}
var hs = !1;
function lh(e, t, n) {
    if (hs)
        return e(t, n);
    hs = !0;
    try {
        return oh(e, t, n)
    } finally {
        hs = !1,
        (jr !== null || Rr !== null) && (ih(),
        rh())
    }
}
function Yo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ea(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var su = !1;
if (ln)
    try {
        var po = {};
        Object.defineProperty(po, "passive", {
            get: function() {
                su = !0
            }
        }),
        window.addEventListener("test", po, po),
        window.removeEventListener("test", po, po)
    } catch {
        su = !1
    }
function H0(e, t, n, r, o, i, l, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Io = !1
  , Ol = null
  , Pl = !1
  , uu = null
  , U0 = {
    onError: function(e) {
        Io = !0,
        Ol = e
    }
};
function B0(e, t, n, r, o, i, l, a, s) {
    Io = !1,
    Ol = null,
    H0.apply(U0, arguments)
}
function W0(e, t, n, r, o, i, l, a, s) {
    if (B0.apply(this, arguments),
    Io) {
        if (Io) {
            var u = Ol;
            Io = !1,
            Ol = null
        } else
            throw Error(j(198));
        Pl || (Pl = !0,
        uu = u)
    }
}
function sr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ah(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Lf(e) {
    if (sr(e) !== e)
        throw Error(j(188))
}
function V0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = sr(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Lf(o),
                    e;
                if (i === r)
                    return Lf(o),
                    t;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var l = !1, a = o.child; a; ) {
                if (a === n) {
                    l = !0,
                    n = o,
                    r = i;
                    break
                }
                if (a === r) {
                    l = !0,
                    r = o,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!l) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        l = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (a === r) {
                        l = !0,
                        r = i,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!l)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function sh(e) {
    return e = V0(e),
    e !== null ? uh(e) : null
}
function uh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = uh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ch = ut.unstable_scheduleCallback
  , zf = ut.unstable_cancelCallback
  , Q0 = ut.unstable_shouldYield
  , K0 = ut.unstable_requestPaint
  , xe = ut.unstable_now
  , Y0 = ut.unstable_getCurrentPriorityLevel
  , pc = ut.unstable_ImmediatePriority
  , fh = ut.unstable_UserBlockingPriority
  , bl = ut.unstable_NormalPriority
  , G0 = ut.unstable_LowPriority
  , dh = ut.unstable_IdlePriority
  , _a = null
  , Vt = null;
function X0(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function")
        try {
            Vt.onCommitFiberRoot(_a, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Nt = Math.clz32 ? Math.clz32 : Z0
  , q0 = Math.log
  , J0 = Math.LN2;
function Z0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (q0(e) / J0 | 0) | 0
}
var Di = 64
  , Li = 4194304;
function jo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function El(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var a = l & ~o;
        a !== 0 ? r = jo(a) : (i &= l,
        i !== 0 && (r = jo(i)))
    } else
        l = n & ~o,
        l !== 0 ? r = jo(l) : i !== 0 && (r = jo(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Nt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function e1(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function t1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var l = 31 - Nt(i)
          , a = 1 << l
          , s = o[l];
        s === -1 ? (!(a & n) || a & r) && (o[l] = e1(a, t)) : s <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function cu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ph() {
    var e = Di;
    return Di <<= 1,
    !(Di & 4194240) && (Di = 64),
    e
}
function gs(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function gi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Nt(t),
    e[t] = n
}
function n1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Nt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function mc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Nt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var re = 0;
function mh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var hh, hc, gh, vh, yh, fu = !1, zi = [], bn = null, En = null, kn = null, Go = new Map, Xo = new Map, xn = [], r1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Mf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        bn = null;
        break;
    case "dragenter":
    case "dragleave":
        En = null;
        break;
    case "mouseover":
    case "mouseout":
        kn = null;
        break;
    case "pointerover":
    case "pointerout":
        Go.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Xo.delete(t.pointerId)
    }
}
function mo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = yi(t),
    t !== null && hc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function o1(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return bn = mo(bn, e, t, n, r, o),
        !0;
    case "dragenter":
        return En = mo(En, e, t, n, r, o),
        !0;
    case "mouseover":
        return kn = mo(kn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Go.set(i, mo(Go.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Xo.set(i, mo(Xo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function wh(e) {
    var t = Wn(e.target);
    if (t !== null) {
        var n = sr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ah(n),
                t !== null) {
                    e.blockedOn = t,
                    yh(e.priority, function() {
                        gh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ll(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = du(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            lu = r,
            n.target.dispatchEvent(r),
            lu = null
        } else
            return t = yi(n),
            t !== null && hc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Af(e, t, n) {
    ll(e) && n.delete(t)
}
function i1() {
    fu = !1,
    bn !== null && ll(bn) && (bn = null),
    En !== null && ll(En) && (En = null),
    kn !== null && ll(kn) && (kn = null),
    Go.forEach(Af),
    Xo.forEach(Af)
}
function ho(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    fu || (fu = !0,
    ut.unstable_scheduleCallback(ut.unstable_NormalPriority, i1)))
}
function qo(e) {
    function t(o) {
        return ho(o, e)
    }
    if (0 < zi.length) {
        ho(zi[0], e);
        for (var n = 1; n < zi.length; n++) {
            var r = zi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (bn !== null && ho(bn, e),
    En !== null && ho(En, e),
    kn !== null && ho(kn, e),
    Go.forEach(t),
    Xo.forEach(t),
    n = 0; n < xn.length; n++)
        r = xn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < xn.length && (n = xn[0],
    n.blockedOn === null); )
        wh(n),
        n.blockedOn === null && xn.shift()
}
var $r = pn.ReactCurrentBatchConfig
  , kl = !0;
function l1(e, t, n, r) {
    var o = re
      , i = $r.transition;
    $r.transition = null;
    try {
        re = 1,
        gc(e, t, n, r)
    } finally {
        re = o,
        $r.transition = i
    }
}
function a1(e, t, n, r) {
    var o = re
      , i = $r.transition;
    $r.transition = null;
    try {
        re = 4,
        gc(e, t, n, r)
    } finally {
        re = o,
        $r.transition = i
    }
}
function gc(e, t, n, r) {
    if (kl) {
        var o = du(e, t, n, r);
        if (o === null)
            Es(e, t, r, Cl, n),
            Mf(e, r);
        else if (o1(o, e, t, n, r))
            r.stopPropagation();
        else if (Mf(e, r),
        t & 4 && -1 < r1.indexOf(e)) {
            for (; o !== null; ) {
                var i = yi(o);
                if (i !== null && hh(i),
                i = du(e, t, n, r),
                i === null && Es(e, t, r, Cl, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Es(e, t, r, null, n)
    }
}
var Cl = null;
function du(e, t, n, r) {
    if (Cl = null,
    e = dc(r),
    e = Wn(e),
    e !== null)
        if (t = sr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ah(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Cl = e,
    null
}
function xh(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Y0()) {
        case pc:
            return 1;
        case fh:
            return 4;
        case bl:
        case G0:
            return 16;
        case dh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var _n = null
  , vc = null
  , al = null;
function Sh() {
    if (al)
        return al;
    var e, t = vc, n = t.length, r, o = "value"in _n ? _n.value : _n.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
        ;
    return al = o.slice(e, 1 < r ? 1 - r : void 0)
}
function sl(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Mi() {
    return !0
}
function Ff() {
    return !1
}
function ft(e) {
    function t(n, r, o, i, l) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = l,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Mi : Ff,
        this.isPropagationStopped = Ff,
        this
    }
    return ve(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Mi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Mi)
        },
        persist: function() {},
        isPersistent: Mi
    }),
    t
}
var qr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, yc = ft(qr), vi = ve({}, qr, {
    view: 0,
    detail: 0
}), s1 = ft(vi), vs, ys, go, Oa = ve({}, vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== go && (go && e.type === "mousemove" ? (vs = e.screenX - go.screenX,
        ys = e.screenY - go.screenY) : ys = vs = 0,
        go = e),
        vs)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ys
    }
}), Hf = ft(Oa), u1 = ve({}, Oa, {
    dataTransfer: 0
}), c1 = ft(u1), f1 = ve({}, vi, {
    relatedTarget: 0
}), ws = ft(f1), d1 = ve({}, qr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), p1 = ft(d1), m1 = ve({}, qr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), h1 = ft(m1), g1 = ve({}, qr, {
    data: 0
}), Uf = ft(g1), v1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, y1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, w1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function x1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = w1[e]) ? !!t[e] : !1
}
function wc() {
    return x1
}
var S1 = ve({}, vi, {
    key: function(e) {
        if (e.key) {
            var t = v1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = sl(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? y1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wc,
    charCode: function(e) {
        return e.type === "keypress" ? sl(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , _1 = ft(S1)
  , O1 = ve({}, Oa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Bf = ft(O1)
  , P1 = ve({}, vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wc
})
  , b1 = ft(P1)
  , E1 = ve({}, qr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , k1 = ft(E1)
  , C1 = ve({}, Oa, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , N1 = ft(C1)
  , j1 = [9, 13, 27, 32]
  , xc = ln && "CompositionEvent"in window
  , Do = null;
ln && "documentMode"in document && (Do = document.documentMode);
var R1 = ln && "TextEvent"in window && !Do
  , _h = ln && (!xc || Do && 8 < Do && 11 >= Do)
  , Wf = String.fromCharCode(32)
  , Vf = !1;
function Oh(e, t) {
    switch (e) {
    case "keyup":
        return j1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Ph(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var vr = !1;
function $1(e, t) {
    switch (e) {
    case "compositionend":
        return Ph(t);
    case "keypress":
        return t.which !== 32 ? null : (Vf = !0,
        Wf);
    case "textInput":
        return e = t.data,
        e === Wf && Vf ? null : e;
    default:
        return null
    }
}
function T1(e, t) {
    if (vr)
        return e === "compositionend" || !xc && Oh(e, t) ? (e = Sh(),
        al = vc = _n = null,
        vr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return _h && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var I1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Qf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!I1[e.type] : t === "textarea"
}
function bh(e, t, n, r) {
    nh(r),
    t = Nl(t, "onChange"),
    0 < t.length && (n = new yc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Lo = null
  , Jo = null;
function D1(e) {
    Lh(e, 0)
}
function Pa(e) {
    var t = xr(e);
    if (Gm(t))
        return e
}
function L1(e, t) {
    if (e === "change")
        return t
}
var Eh = !1;
if (ln) {
    var xs;
    if (ln) {
        var Ss = "oninput"in document;
        if (!Ss) {
            var Kf = document.createElement("div");
            Kf.setAttribute("oninput", "return;"),
            Ss = typeof Kf.oninput == "function"
        }
        xs = Ss
    } else
        xs = !1;
    Eh = xs && (!document.documentMode || 9 < document.documentMode)
}
function Yf() {
    Lo && (Lo.detachEvent("onpropertychange", kh),
    Jo = Lo = null)
}
function kh(e) {
    if (e.propertyName === "value" && Pa(Jo)) {
        var t = [];
        bh(t, Jo, e, dc(e)),
        lh(D1, t)
    }
}
function z1(e, t, n) {
    e === "focusin" ? (Yf(),
    Lo = t,
    Jo = n,
    Lo.attachEvent("onpropertychange", kh)) : e === "focusout" && Yf()
}
function M1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Pa(Jo)
}
function A1(e, t) {
    if (e === "click")
        return Pa(t)
}
function F1(e, t) {
    if (e === "input" || e === "change")
        return Pa(t)
}
function H1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Tt = typeof Object.is == "function" ? Object.is : H1;
function Zo(e, t) {
    if (Tt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ys.call(t, o) || !Tt(e[o], t[o]))
            return !1
    }
    return !0
}
function Gf(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Xf(e, t) {
    var n = Gf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Gf(n)
    }
}
function Ch(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ch(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Nh() {
    for (var e = window, t = _l(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = _l(e.document)
    }
    return t
}
function Sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function U1(e) {
    var t = Nh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ch(n.ownerDocument.documentElement, n)) {
        if (r !== null && Sc(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Xf(n, i);
                var l = Xf(n, r);
                o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var B1 = ln && "documentMode"in document && 11 >= document.documentMode
  , yr = null
  , pu = null
  , zo = null
  , mu = !1;
function qf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mu || yr == null || yr !== _l(r) || (r = yr,
    "selectionStart"in r && Sc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    zo && Zo(zo, r) || (zo = r,
    r = Nl(pu, "onSelect"),
    0 < r.length && (t = new yc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = yr)))
}
function Ai(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var wr = {
    animationend: Ai("Animation", "AnimationEnd"),
    animationiteration: Ai("Animation", "AnimationIteration"),
    animationstart: Ai("Animation", "AnimationStart"),
    transitionend: Ai("Transition", "TransitionEnd")
}
  , _s = {}
  , jh = {};
ln && (jh = document.createElement("div").style,
"AnimationEvent"in window || (delete wr.animationend.animation,
delete wr.animationiteration.animation,
delete wr.animationstart.animation),
"TransitionEvent"in window || delete wr.transitionend.transition);
function ba(e) {
    if (_s[e])
        return _s[e];
    if (!wr[e])
        return e;
    var t = wr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in jh)
            return _s[e] = t[n];
    return e
}
var Rh = ba("animationend")
  , $h = ba("animationiteration")
  , Th = ba("animationstart")
  , Ih = ba("transitionend")
  , Dh = new Map
  , Jf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zn(e, t) {
    Dh.set(e, t),
    ar(t, [e])
}
for (var Os = 0; Os < Jf.length; Os++) {
    var Ps = Jf[Os]
      , W1 = Ps.toLowerCase()
      , V1 = Ps[0].toUpperCase() + Ps.slice(1);
    zn(W1, "on" + V1)
}
zn(Rh, "onAnimationEnd");
zn($h, "onAnimationIteration");
zn(Th, "onAnimationStart");
zn("dblclick", "onDoubleClick");
zn("focusin", "onFocus");
zn("focusout", "onBlur");
zn(Ih, "onTransitionEnd");
Ar("onMouseEnter", ["mouseout", "mouseover"]);
Ar("onMouseLeave", ["mouseout", "mouseover"]);
Ar("onPointerEnter", ["pointerout", "pointerover"]);
Ar("onPointerLeave", ["pointerout", "pointerover"]);
ar("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ar("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ar("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ar("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ar("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Q1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));
function Zf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    W0(r, t, void 0, e),
    e.currentTarget = null
}
function Lh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var a = r[l]
                      , s = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    s !== i && o.isPropagationStopped())
                        break e;
                    Zf(o, a, u),
                    i = s
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (a = r[l],
                    s = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    s !== i && o.isPropagationStopped())
                        break e;
                    Zf(o, a, u),
                    i = s
                }
        }
    }
    if (Pl)
        throw e = uu,
        Pl = !1,
        uu = null,
        e
}
function fe(e, t) {
    var n = t[wu];
    n === void 0 && (n = t[wu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (zh(t, e, 2, !1),
    n.add(r))
}
function bs(e, t, n) {
    var r = 0;
    t && (r |= 4),
    zh(n, e, r, t)
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);
function ei(e) {
    if (!e[Fi]) {
        e[Fi] = !0,
        Wm.forEach(function(n) {
            n !== "selectionchange" && (Q1.has(n) || bs(n, !1, e),
            bs(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Fi] || (t[Fi] = !0,
        bs("selectionchange", !1, t))
    }
}
function zh(e, t, n, r) {
    switch (xh(t)) {
    case 1:
        var o = l1;
        break;
    case 4:
        o = a1;
        break;
    default:
        o = gc
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !su || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Es(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var s = l.tag;
                        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo,
                        s === o || s.nodeType === 8 && s.parentNode === o))
                            return;
                        l = l.return
                    }
                for (; a !== null; ) {
                    if (l = Wn(a),
                    l === null)
                        return;
                    if (s = l.tag,
                    s === 5 || s === 6) {
                        r = i = l;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    lh(function() {
        var u = i
          , d = dc(n)
          , f = [];
        e: {
            var g = Dh.get(e);
            if (g !== void 0) {
                var x = yc
                  , w = e;
                switch (e) {
                case "keypress":
                    if (sl(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = _1;
                    break;
                case "focusin":
                    w = "focus",
                    x = ws;
                    break;
                case "focusout":
                    w = "blur",
                    x = ws;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = ws;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = Hf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = c1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = b1;
                    break;
                case Rh:
                case $h:
                case Th:
                    x = p1;
                    break;
                case Ih:
                    x = k1;
                    break;
                case "scroll":
                    x = s1;
                    break;
                case "wheel":
                    x = N1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = h1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = Bf
                }
                var y = (t & 4) !== 0
                  , S = !y && e === "scroll"
                  , m = y ? g !== null ? g + "Capture" : null : g;
                y = [];
                for (var p = u, v; p !== null; ) {
                    v = p;
                    var h = v.stateNode;
                    if (v.tag === 5 && h !== null && (v = h,
                    m !== null && (h = Yo(p, m),
                    h != null && y.push(ti(p, h, v)))),
                    S)
                        break;
                    p = p.return
                }
                0 < y.length && (g = new x(g,w,null,n,d),
                f.push({
                    event: g,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                g && n !== lu && (w = n.relatedTarget || n.fromElement) && (Wn(w) || w[an]))
                    break e;
                if ((x || g) && (g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = u,
                w = w ? Wn(w) : null,
                w !== null && (S = sr(w),
                w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = u),
                x !== w)) {
                    if (y = Hf,
                    h = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = Bf,
                    h = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    S = x == null ? g : xr(x),
                    v = w == null ? g : xr(w),
                    g = new y(h,p + "leave",x,n,d),
                    g.target = S,
                    g.relatedTarget = v,
                    h = null,
                    Wn(d) === u && (y = new y(m,p + "enter",w,n,d),
                    y.target = v,
                    y.relatedTarget = S,
                    h = y),
                    S = h,
                    x && w)
                        t: {
                            for (y = x,
                            m = w,
                            p = 0,
                            v = y; v; v = fr(v))
                                p++;
                            for (v = 0,
                            h = m; h; h = fr(h))
                                v++;
                            for (; 0 < p - v; )
                                y = fr(y),
                                p--;
                            for (; 0 < v - p; )
                                m = fr(m),
                                v--;
                            for (; p--; ) {
                                if (y === m || m !== null && y === m.alternate)
                                    break t;
                                y = fr(y),
                                m = fr(m)
                            }
                            y = null
                        }
                    else
                        y = null;
                    x !== null && ed(f, g, x, y, !1),
                    w !== null && S !== null && ed(f, S, w, y, !0)
                }
            }
            e: {
                if (g = u ? xr(u) : window,
                x = g.nodeName && g.nodeName.toLowerCase(),
                x === "select" || x === "input" && g.type === "file")
                    var O = L1;
                else if (Qf(g))
                    if (Eh)
                        O = F1;
                    else {
                        O = M1;
                        var E = z1
                    }
                else
                    (x = g.nodeName) && x.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (O = A1);
                if (O && (O = O(e, u))) {
                    bh(f, O, n, d);
                    break e
                }
                E && E(e, g, u),
                e === "focusout" && (E = g._wrapperState) && E.controlled && g.type === "number" && tu(g, "number", g.value)
            }
            switch (E = u ? xr(u) : window,
            e) {
            case "focusin":
                (Qf(E) || E.contentEditable === "true") && (yr = E,
                pu = u,
                zo = null);
                break;
            case "focusout":
                zo = pu = yr = null;
                break;
            case "mousedown":
                mu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                mu = !1,
                qf(f, n, d);
                break;
            case "selectionchange":
                if (B1)
                    break;
            case "keydown":
            case "keyup":
                qf(f, n, d)
            }
            var P;
            if (xc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                    }
                    N = void 0
                }
            else
                vr ? Oh(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (_h && n.locale !== "ko" && (vr || N !== "onCompositionStart" ? N === "onCompositionEnd" && vr && (P = Sh()) : (_n = d,
            vc = "value"in _n ? _n.value : _n.textContent,
            vr = !0)),
            E = Nl(u, N),
            0 < E.length && (N = new Uf(N,e,null,n,d),
            f.push({
                event: N,
                listeners: E
            }),
            P ? N.data = P : (P = Ph(n),
            P !== null && (N.data = P)))),
            (P = R1 ? $1(e, n) : T1(e, n)) && (u = Nl(u, "onBeforeInput"),
            0 < u.length && (d = new Uf("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = P))
        }
        Lh(f, t)
    })
}
function ti(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Nl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Yo(e, n),
        i != null && r.unshift(ti(e, i, o)),
        i = Yo(e, t),
        i != null && r.push(ti(e, i, o))),
        e = e.return
    }
    return r
}
function fr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ed(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r; ) {
        var a = n
          , s = a.alternate
          , u = a.stateNode;
        if (s !== null && s === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (s = Yo(n, i),
        s != null && l.unshift(ti(n, s, a))) : o || (s = Yo(n, i),
        s != null && l.push(ti(n, s, a)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var K1 = /\r\n?/g
  , Y1 = /\u0000|\uFFFD/g;
function td(e) {
    return (typeof e == "string" ? e : "" + e).replace(K1, `
`).replace(Y1, "")
}
function Hi(e, t, n) {
    if (t = td(t),
    td(e) !== t && n)
        throw Error(j(425))
}
function jl() {}
var hu = null
  , gu = null;
function vu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var yu = typeof setTimeout == "function" ? setTimeout : void 0
  , G1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , nd = typeof Promise == "function" ? Promise : void 0
  , X1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof nd < "u" ? function(e) {
    return nd.resolve(null).then(e).catch(q1)
}
: yu;
function q1(e) {
    setTimeout(function() {
        throw e
    })
}
function ks(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    qo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    qo(t)
}
function Cn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function rd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Jr = Math.random().toString(36).slice(2)
  , Wt = "__reactFiber$" + Jr
  , ni = "__reactProps$" + Jr
  , an = "__reactContainer$" + Jr
  , wu = "__reactEvents$" + Jr
  , J1 = "__reactListeners$" + Jr
  , Z1 = "__reactHandles$" + Jr;
function Wn(e) {
    var t = e[Wt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[an] || n[Wt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = rd(e); e !== null; ) {
                    if (n = e[Wt])
                        return n;
                    e = rd(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function yi(e) {
    return e = e[Wt] || e[an],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function xr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Ea(e) {
    return e[ni] || null
}
var xu = []
  , Sr = -1;
function Mn(e) {
    return {
        current: e
    }
}
function de(e) {
    0 > Sr || (e.current = xu[Sr],
    xu[Sr] = null,
    Sr--)
}
function ue(e, t) {
    Sr++,
    xu[Sr] = e.current,
    e.current = t
}
var In = {}
  , Ve = Mn(In)
  , Ze = Mn(!1)
  , Xn = In;
function Fr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return In;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function et(e) {
    return e = e.childContextTypes,
    e != null
}
function Rl() {
    de(Ze),
    de(Ve)
}
function od(e, t, n) {
    if (Ve.current !== In)
        throw Error(j(168));
    ue(Ve, t),
    ue(Ze, n)
}
function Mh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(j(108, z0(e) || "Unknown", o));
    return ve({}, n, r)
}
function $l(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || In,
    Xn = Ve.current,
    ue(Ve, e),
    ue(Ze, Ze.current),
    !0
}
function id(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Mh(e, t, Xn),
    r.__reactInternalMemoizedMergedChildContext = e,
    de(Ze),
    de(Ve),
    ue(Ve, e)) : de(Ze),
    ue(Ze, n)
}
var qt = null
  , ka = !1
  , Cs = !1;
function Ah(e) {
    qt === null ? qt = [e] : qt.push(e)
}
function ew(e) {
    ka = !0,
    Ah(e)
}
function An() {
    if (!Cs && qt !== null) {
        Cs = !0;
        var e = 0
          , t = re;
        try {
            var n = qt;
            for (re = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            qt = null,
            ka = !1
        } catch (o) {
            throw qt !== null && (qt = qt.slice(e + 1)),
            ch(pc, An),
            o
        } finally {
            re = t,
            Cs = !1
        }
    }
    return null
}
var _r = []
  , Or = 0
  , Tl = null
  , Il = 0
  , vt = []
  , yt = 0
  , qn = null
  , Zt = 1
  , en = "";
function Un(e, t) {
    _r[Or++] = Il,
    _r[Or++] = Tl,
    Tl = e,
    Il = t
}
function Fh(e, t, n) {
    vt[yt++] = Zt,
    vt[yt++] = en,
    vt[yt++] = qn,
    qn = e;
    var r = Zt;
    e = en;
    var o = 32 - Nt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - Nt(t) + o;
    if (30 < i) {
        var l = o - o % 5;
        i = (r & (1 << l) - 1).toString(32),
        r >>= l,
        o -= l,
        Zt = 1 << 32 - Nt(t) + o | n << o | r,
        en = i + e
    } else
        Zt = 1 << i | n << o | r,
        en = e
}
function _c(e) {
    e.return !== null && (Un(e, 1),
    Fh(e, 1, 0))
}
function Oc(e) {
    for (; e === Tl; )
        Tl = _r[--Or],
        _r[Or] = null,
        Il = _r[--Or],
        _r[Or] = null;
    for (; e === qn; )
        qn = vt[--yt],
        vt[yt] = null,
        en = vt[--yt],
        vt[yt] = null,
        Zt = vt[--yt],
        vt[yt] = null
}
var at = null
  , lt = null
  , pe = !1
  , Ct = null;
function Hh(e, t) {
    var n = wt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ld(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        lt = Cn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        lt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = qn !== null ? {
            id: Zt,
            overflow: en
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = wt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        at = e,
        lt = null,
        !0) : !1;
    default:
        return !1
    }
}
function Su(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function _u(e) {
    if (pe) {
        var t = lt;
        if (t) {
            var n = t;
            if (!ld(e, t)) {
                if (Su(e))
                    throw Error(j(418));
                t = Cn(n.nextSibling);
                var r = at;
                t && ld(e, t) ? Hh(r, n) : (e.flags = e.flags & -4097 | 2,
                pe = !1,
                at = e)
            }
        } else {
            if (Su(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            pe = !1,
            at = e
        }
    }
}
function ad(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    at = e
}
function Ui(e) {
    if (e !== at)
        return !1;
    if (!pe)
        return ad(e),
        pe = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !vu(e.type, e.memoizedProps)),
    t && (t = lt)) {
        if (Su(e))
            throw Uh(),
            Error(j(418));
        for (; t; )
            Hh(e, t),
            t = Cn(t.nextSibling)
    }
    if (ad(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            lt = Cn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            lt = null
        }
    } else
        lt = at ? Cn(e.stateNode.nextSibling) : null;
    return !0
}
function Uh() {
    for (var e = lt; e; )
        e = Cn(e.nextSibling)
}
function Hr() {
    lt = at = null,
    pe = !1
}
function Pc(e) {
    Ct === null ? Ct = [e] : Ct.push(e)
}
var tw = pn.ReactCurrentBatchConfig;
function bt(e, t) {
    if (e && e.defaultProps) {
        t = ve({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Dl = Mn(null)
  , Ll = null
  , Pr = null
  , bc = null;
function Ec() {
    bc = Pr = Ll = null
}
function kc(e) {
    var t = Dl.current;
    de(Dl),
    e._currentValue = t
}
function Ou(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Tr(e, t) {
    Ll = e,
    bc = Pr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Je = !0),
    e.firstContext = null)
}
function _t(e) {
    var t = e._currentValue;
    if (bc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Pr === null) {
            if (Ll === null)
                throw Error(j(308));
            Pr = e,
            Ll.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Pr = Pr.next = e;
    return t
}
var Vn = null;
function Cc(e) {
    Vn === null ? Vn = [e] : Vn.push(e)
}
function Bh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Cc(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    sn(e, r)
}
function sn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var wn = !1;
function Nc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Wh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function tn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Nn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    G & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        sn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Cc(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    sn(e, n)
}
function ul(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        mc(e, n)
    }
}
function sd(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = l : i = i.next = l,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function zl(e, t, n, r) {
    var o = e.updateQueue;
    wn = !1;
    var i = o.firstBaseUpdate
      , l = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var s = a
          , u = s.next;
        s.next = null,
        l === null ? i = u : l.next = u,
        l = s;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== l && (a === null ? d.firstBaseUpdate = u : a.next = u,
        d.lastBaseUpdate = s))
    }
    if (i !== null) {
        var f = o.baseState;
        l = 0,
        d = u = s = null,
        a = i;
        do {
            var g = a.lane
              , x = a.eventTime;
            if ((r & g) === g) {
                d !== null && (d = d.next = {
                    eventTime: x,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = e
                      , y = a;
                    switch (g = t,
                    x = n,
                    y.tag) {
                    case 1:
                        if (w = y.payload,
                        typeof w == "function") {
                            f = w.call(x, f, g);
                            break e
                        }
                        f = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = y.payload,
                        g = typeof w == "function" ? w.call(x, f, g) : w,
                        g == null)
                            break e;
                        f = ve({}, f, g);
                        break e;
                    case 2:
                        wn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                g = o.effects,
                g === null ? o.effects = [a] : g.push(a))
            } else
                x = {
                    eventTime: x,
                    lane: g,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (u = d = x,
                s = f) : d = d.next = x,
                l |= g;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                g = a,
                a = g.next,
                g.next = null,
                o.lastBaseUpdate = g,
                o.shared.pending = null
            }
        } while (1);
        if (d === null && (s = f),
        o.baseState = s,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                l |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Zn |= l,
        e.lanes = l,
        e.memoizedState = f
    }
}
function ud(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(r)
            }
        }
}
var Vh = new Bm.Component().refs;
function Pu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ve({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ca = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? sr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke()
          , o = Rn(e)
          , i = tn(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = Nn(e, i, o),
        t !== null && (jt(t, e, o, r),
        ul(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke()
          , o = Rn(e)
          , i = tn(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Nn(e, i, o),
        t !== null && (jt(t, e, o, r),
        ul(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ke()
          , r = Rn(e)
          , o = tn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Nn(e, o, r),
        t !== null && (jt(t, e, r, n),
        ul(t, e, r))
    }
};
function cd(e, t, n, r, o, i, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Zo(n, r) || !Zo(o, i) : !0
}
function Qh(e, t, n) {
    var r = !1
      , o = In
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = _t(i) : (o = et(t) ? Xn : Ve.current,
    r = t.contextTypes,
    i = (r = r != null) ? Fr(e, o) : In),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ca,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function fd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ca.enqueueReplaceState(t, t.state, null)
}
function bu(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = Vh,
    Nc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = _t(i) : (i = et(t) ? Xn : Ve.current,
    o.context = Fr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Pu(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Ca.enqueueReplaceState(o, o.state, null),
    zl(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function vo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
                var a = o.refs;
                a === Vh && (a = o.refs = {}),
                l === null ? delete a[i] : a[i] = l
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function Bi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function dd(e) {
    var t = e._init;
    return t(e._payload)
}
function Kh(e) {
    function t(m, p) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [p],
            m.flags |= 16) : v.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function o(m, p) {
        return m = $n(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, p, v) {
        return m.index = v,
        e ? (v = m.alternate,
        v !== null ? (v = v.index,
        v < p ? (m.flags |= 2,
        p) : v) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function l(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, p, v, h) {
        return p === null || p.tag !== 6 ? (p = Ds(v, m.mode, h),
        p.return = m,
        p) : (p = o(p, v),
        p.return = m,
        p)
    }
    function s(m, p, v, h) {
        var O = v.type;
        return O === gr ? d(m, p, v.props.children, h, v.key) : p !== null && (p.elementType === O || typeof O == "object" && O !== null && O.$$typeof === yn && dd(O) === p.type) ? (h = o(p, v.props),
        h.ref = vo(m, p, v),
        h.return = m,
        h) : (h = hl(v.type, v.key, v.props, null, m.mode, h),
        h.ref = vo(m, p, v),
        h.return = m,
        h)
    }
    function u(m, p, v, h) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = Ls(v, m.mode, h),
        p.return = m,
        p) : (p = o(p, v.children || []),
        p.return = m,
        p)
    }
    function d(m, p, v, h, O) {
        return p === null || p.tag !== 7 ? (p = Gn(v, m.mode, h, O),
        p.return = m,
        p) : (p = o(p, v),
        p.return = m,
        p)
    }
    function f(m, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Ds("" + p, m.mode, v),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case $i:
                return v = hl(p.type, p.key, p.props, null, m.mode, v),
                v.ref = vo(m, null, p),
                v.return = m,
                v;
            case hr:
                return p = Ls(p, m.mode, v),
                p.return = m,
                p;
            case yn:
                var h = p._init;
                return f(m, h(p._payload), v)
            }
            if (No(p) || fo(p))
                return p = Gn(p, m.mode, v, null),
                p.return = m,
                p;
            Bi(m, p)
        }
        return null
    }
    function g(m, p, v, h) {
        var O = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return O !== null ? null : a(m, p, "" + v, h);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case $i:
                return v.key === O ? s(m, p, v, h) : null;
            case hr:
                return v.key === O ? u(m, p, v, h) : null;
            case yn:
                return O = v._init,
                g(m, p, O(v._payload), h)
            }
            if (No(v) || fo(v))
                return O !== null ? null : d(m, p, v, h, null);
            Bi(m, v)
        }
        return null
    }
    function x(m, p, v, h, O) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return m = m.get(v) || null,
            a(p, m, "" + h, O);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case $i:
                return m = m.get(h.key === null ? v : h.key) || null,
                s(p, m, h, O);
            case hr:
                return m = m.get(h.key === null ? v : h.key) || null,
                u(p, m, h, O);
            case yn:
                var E = h._init;
                return x(m, p, v, E(h._payload), O)
            }
            if (No(h) || fo(h))
                return m = m.get(v) || null,
                d(p, m, h, O, null);
            Bi(p, h)
        }
        return null
    }
    function w(m, p, v, h) {
        for (var O = null, E = null, P = p, N = p = 0, z = null; P !== null && N < v.length; N++) {
            P.index > N ? (z = P,
            P = null) : z = P.sibling;
            var T = g(m, P, v[N], h);
            if (T === null) {
                P === null && (P = z);
                break
            }
            e && P && T.alternate === null && t(m, P),
            p = i(T, p, N),
            E === null ? O = T : E.sibling = T,
            E = T,
            P = z
        }
        if (N === v.length)
            return n(m, P),
            pe && Un(m, N),
            O;
        if (P === null) {
            for (; N < v.length; N++)
                P = f(m, v[N], h),
                P !== null && (p = i(P, p, N),
                E === null ? O = P : E.sibling = P,
                E = P);
            return pe && Un(m, N),
            O
        }
        for (P = r(m, P); N < v.length; N++)
            z = x(P, m, N, v[N], h),
            z !== null && (e && z.alternate !== null && P.delete(z.key === null ? N : z.key),
            p = i(z, p, N),
            E === null ? O = z : E.sibling = z,
            E = z);
        return e && P.forEach(function(H) {
            return t(m, H)
        }),
        pe && Un(m, N),
        O
    }
    function y(m, p, v, h) {
        var O = fo(v);
        if (typeof O != "function")
            throw Error(j(150));
        if (v = O.call(v),
        v == null)
            throw Error(j(151));
        for (var E = O = null, P = p, N = p = 0, z = null, T = v.next(); P !== null && !T.done; N++,
        T = v.next()) {
            P.index > N ? (z = P,
            P = null) : z = P.sibling;
            var H = g(m, P, T.value, h);
            if (H === null) {
                P === null && (P = z);
                break
            }
            e && P && H.alternate === null && t(m, P),
            p = i(H, p, N),
            E === null ? O = H : E.sibling = H,
            E = H,
            P = z
        }
        if (T.done)
            return n(m, P),
            pe && Un(m, N),
            O;
        if (P === null) {
            for (; !T.done; N++,
            T = v.next())
                T = f(m, T.value, h),
                T !== null && (p = i(T, p, N),
                E === null ? O = T : E.sibling = T,
                E = T);
            return pe && Un(m, N),
            O
        }
        for (P = r(m, P); !T.done; N++,
        T = v.next())
            T = x(P, m, N, T.value, h),
            T !== null && (e && T.alternate !== null && P.delete(T.key === null ? N : T.key),
            p = i(T, p, N),
            E === null ? O = T : E.sibling = T,
            E = T);
        return e && P.forEach(function(F) {
            return t(m, F)
        }),
        pe && Un(m, N),
        O
    }
    function S(m, p, v, h) {
        if (typeof v == "object" && v !== null && v.type === gr && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case $i:
                e: {
                    for (var O = v.key, E = p; E !== null; ) {
                        if (E.key === O) {
                            if (O = v.type,
                            O === gr) {
                                if (E.tag === 7) {
                                    n(m, E.sibling),
                                    p = o(E, v.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (E.elementType === O || typeof O == "object" && O !== null && O.$$typeof === yn && dd(O) === E.type) {
                                n(m, E.sibling),
                                p = o(E, v.props),
                                p.ref = vo(m, E, v),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, E);
                            break
                        } else
                            t(m, E);
                        E = E.sibling
                    }
                    v.type === gr ? (p = Gn(v.props.children, m.mode, h, v.key),
                    p.return = m,
                    m = p) : (h = hl(v.type, v.key, v.props, null, m.mode, h),
                    h.ref = vo(m, p, v),
                    h.return = m,
                    m = h)
                }
                return l(m);
            case hr:
                e: {
                    for (E = v.key; p !== null; ) {
                        if (p.key === E)
                            if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                n(m, p.sibling),
                                p = o(p, v.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = Ls(v, m.mode, h),
                    p.return = m,
                    m = p
                }
                return l(m);
            case yn:
                return E = v._init,
                S(m, p, E(v._payload), h)
            }
            if (No(v))
                return w(m, p, v, h);
            if (fo(v))
                return y(m, p, v, h);
            Bi(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = o(p, v),
        p.return = m,
        m = p) : (n(m, p),
        p = Ds(v, m.mode, h),
        p.return = m,
        m = p),
        l(m)) : n(m, p)
    }
    return S
}
var Ur = Kh(!0)
  , Yh = Kh(!1)
  , wi = {}
  , Qt = Mn(wi)
  , ri = Mn(wi)
  , oi = Mn(wi);
function Qn(e) {
    if (e === wi)
        throw Error(j(174));
    return e
}
function jc(e, t) {
    switch (ue(oi, t),
    ue(ri, e),
    ue(Qt, wi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ru(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ru(t, e)
    }
    de(Qt),
    ue(Qt, t)
}
function Br() {
    de(Qt),
    de(ri),
    de(oi)
}
function Gh(e) {
    Qn(oi.current);
    var t = Qn(Qt.current)
      , n = ru(t, e.type);
    t !== n && (ue(ri, e),
    ue(Qt, n))
}
function Rc(e) {
    ri.current === e && (de(Qt),
    de(ri))
}
var he = Mn(0);
function Ml(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ns = [];
function $c() {
    for (var e = 0; e < Ns.length; e++)
        Ns[e]._workInProgressVersionPrimary = null;
    Ns.length = 0
}
var cl = pn.ReactCurrentDispatcher
  , js = pn.ReactCurrentBatchConfig
  , Jn = 0
  , ge = null
  , ke = null
  , je = null
  , Al = !1
  , Mo = !1
  , ii = 0
  , nw = 0;
function He() {
    throw Error(j(321))
}
function Tc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Tt(e[n], t[n]))
            return !1;
    return !0
}
function Ic(e, t, n, r, o, i) {
    if (Jn = i,
    ge = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    cl.current = e === null || e.memoizedState === null ? lw : aw,
    e = n(r, o),
    Mo) {
        i = 0;
        do {
            if (Mo = !1,
            ii = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            je = ke = null,
            t.updateQueue = null,
            cl.current = sw,
            e = n(r, o)
        } while (Mo)
    }
    if (cl.current = Fl,
    t = ke !== null && ke.next !== null,
    Jn = 0,
    je = ke = ge = null,
    Al = !1,
    t)
        throw Error(j(300));
    return e
}
function Dc() {
    var e = ii !== 0;
    return ii = 0,
    e
}
function Ft() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return je === null ? ge.memoizedState = je = e : je = je.next = e,
    je
}
function Ot() {
    if (ke === null) {
        var e = ge.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ke.next;
    var t = je === null ? ge.memoizedState : je.next;
    if (t !== null)
        je = t,
        ke = e;
    else {
        if (e === null)
            throw Error(j(310));
        ke = e,
        e = {
            memoizedState: ke.memoizedState,
            baseState: ke.baseState,
            baseQueue: ke.baseQueue,
            queue: ke.queue,
            next: null
        },
        je === null ? ge.memoizedState = je = e : je = je.next = e
    }
    return je
}
function li(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Rs(e) {
    var t = Ot()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = ke
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = i.next,
            i.next = l
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var a = l = null
          , s = null
          , u = i;
        do {
            var d = u.lane;
            if ((Jn & d) === d)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (a = s = f,
                l = r) : s = s.next = f,
                ge.lanes |= d,
                Zn |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        s === null ? l = r : s.next = a,
        Tt(r, t.memoizedState) || (Je = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ge.lanes |= i,
            Zn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function $s(e) {
    var t = Ot()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = o = o.next;
        do
            i = e(i, l.action),
            l = l.next;
        while (l !== o);
        Tt(i, t.memoizedState) || (Je = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Xh() {}
function qh(e, t) {
    var n = ge
      , r = Ot()
      , o = t()
      , i = !Tt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Je = !0),
    r = r.queue,
    Lc(eg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || je !== null && je.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ai(9, Zh.bind(null, n, r, o, t), void 0, null),
        $e === null)
            throw Error(j(349));
        Jn & 30 || Jh(n, t, o)
    }
    return o
}
function Jh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ge.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ge.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Zh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    tg(t) && ng(e)
}
function eg(e, t, n) {
    return n(function() {
        tg(t) && ng(e)
    })
}
function tg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Tt(e, n)
    } catch {
        return !0
    }
}
function ng(e) {
    var t = sn(e, 1);
    t !== null && jt(t, e, 1, -1)
}
function pd(e) {
    var t = Ft();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: li,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = iw.bind(null, ge, e),
    [t.memoizedState, e]
}
function ai(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ge.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ge.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function rg() {
    return Ot().memoizedState
}
function fl(e, t, n, r) {
    var o = Ft();
    ge.flags |= e,
    o.memoizedState = ai(1 | t, n, void 0, r === void 0 ? null : r)
}
function Na(e, t, n, r) {
    var o = Ot();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ke !== null) {
        var l = ke.memoizedState;
        if (i = l.destroy,
        r !== null && Tc(r, l.deps)) {
            o.memoizedState = ai(t, n, i, r);
            return
        }
    }
    ge.flags |= e,
    o.memoizedState = ai(1 | t, n, i, r)
}
function md(e, t) {
    return fl(8390656, 8, e, t)
}
function Lc(e, t) {
    return Na(2048, 8, e, t)
}
function og(e, t) {
    return Na(4, 2, e, t)
}
function ig(e, t) {
    return Na(4, 4, e, t)
}
function lg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function ag(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Na(4, 4, lg.bind(null, t, e), n)
}
function zc() {}
function sg(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ug(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tc(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function cg(e, t, n) {
    return Jn & 21 ? (Tt(n, t) || (n = ph(),
    ge.lanes |= n,
    Zn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Je = !0),
    e.memoizedState = n)
}
function rw(e, t) {
    var n = re;
    re = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = js.transition;
    js.transition = {};
    try {
        e(!1),
        t()
    } finally {
        re = n,
        js.transition = r
    }
}
function fg() {
    return Ot().memoizedState
}
function ow(e, t, n) {
    var r = Rn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    dg(e))
        pg(t, n);
    else if (n = Bh(e, t, n, r),
    n !== null) {
        var o = Ke();
        jt(n, e, r, o),
        mg(n, t, r)
    }
}
function iw(e, t, n) {
    var r = Rn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (dg(e))
        pg(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var l = t.lastRenderedState
                  , a = i(l, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                Tt(a, l)) {
                    var s = t.interleaved;
                    s === null ? (o.next = o,
                    Cc(t)) : (o.next = s.next,
                    s.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Bh(e, t, o, r),
        n !== null && (o = Ke(),
        jt(n, e, r, o),
        mg(n, t, r))
    }
}
function dg(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge
}
function pg(e, t) {
    Mo = Al = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function mg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        mc(e, n)
    }
}
var Fl = {
    readContext: _t,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useInsertionEffect: He,
    useLayoutEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useMutableSource: He,
    useSyncExternalStore: He,
    useId: He,
    unstable_isNewReconciler: !1
}
  , lw = {
    readContext: _t,
    useCallback: function(e, t) {
        return Ft().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: _t,
    useEffect: md,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        fl(4194308, 4, lg.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return fl(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return fl(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ft();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ft();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = ow.bind(null, ge, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ft();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: pd,
    useDebugValue: zc,
    useDeferredValue: function(e) {
        return Ft().memoizedState = e
    },
    useTransition: function() {
        var e = pd(!1)
          , t = e[0];
        return e = rw.bind(null, e[1]),
        Ft().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ge
          , o = Ft();
        if (pe) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            $e === null)
                throw Error(j(349));
            Jn & 30 || Jh(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        md(eg.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        ai(9, Zh.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ft()
          , t = $e.identifierPrefix;
        if (pe) {
            var n = en
              , r = Zt;
            n = (r & ~(1 << 32 - Nt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ii++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = nw++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , aw = {
    readContext: _t,
    useCallback: sg,
    useContext: _t,
    useEffect: Lc,
    useImperativeHandle: ag,
    useInsertionEffect: og,
    useLayoutEffect: ig,
    useMemo: ug,
    useReducer: Rs,
    useRef: rg,
    useState: function() {
        return Rs(li)
    },
    useDebugValue: zc,
    useDeferredValue: function(e) {
        var t = Ot();
        return cg(t, ke.memoizedState, e)
    },
    useTransition: function() {
        var e = Rs(li)[0]
          , t = Ot().memoizedState;
        return [e, t]
    },
    useMutableSource: Xh,
    useSyncExternalStore: qh,
    useId: fg,
    unstable_isNewReconciler: !1
}
  , sw = {
    readContext: _t,
    useCallback: sg,
    useContext: _t,
    useEffect: Lc,
    useImperativeHandle: ag,
    useInsertionEffect: og,
    useLayoutEffect: ig,
    useMemo: ug,
    useReducer: $s,
    useRef: rg,
    useState: function() {
        return $s(li)
    },
    useDebugValue: zc,
    useDeferredValue: function(e) {
        var t = Ot();
        return ke === null ? t.memoizedState = e : cg(t, ke.memoizedState, e)
    },
    useTransition: function() {
        var e = $s(li)[0]
          , t = Ot().memoizedState;
        return [e, t]
    },
    useMutableSource: Xh,
    useSyncExternalStore: qh,
    useId: fg,
    unstable_isNewReconciler: !1
};
function Wr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += L0(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Ts(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Eu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var uw = typeof WeakMap == "function" ? WeakMap : Map;
function hg(e, t, n) {
    n = tn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ul || (Ul = !0,
        Lu = r),
        Eu(e, t)
    }
    ,
    n
}
function gg(e, t, n) {
    n = tn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Eu(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Eu(e, t),
        typeof r != "function" && (jn === null ? jn = new Set([this]) : jn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function hd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new uw;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Ow.bind(null, e, t, n),
    t.then(e, e))
}
function gd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function vd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tn(-1, 1),
    t.tag = 2,
    Nn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var cw = pn.ReactCurrentOwner
  , Je = !1;
function Qe(e, t, n, r) {
    t.child = e === null ? Yh(t, null, n, r) : Ur(t, e.child, n, r)
}
function yd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Tr(t, o),
    r = Ic(e, t, n, r, i, o),
    n = Dc(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    un(e, t, o)) : (pe && n && _c(t),
    t.flags |= 1,
    Qe(e, t, r, o),
    t.child)
}
function wd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Vc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        vg(e, t, i, r, o)) : (e = hl(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var l = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Zo,
        n(l, r) && e.ref === t.ref)
            return un(e, t, o)
    }
    return t.flags |= 1,
    e = $n(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function vg(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Zo(i, r) && e.ref === t.ref)
            if (Je = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Je = !0);
            else
                return t.lanes = e.lanes,
                un(e, t, o)
    }
    return ku(e, t, n, r, o)
}
function yg(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ue(Er, it),
            it |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ue(Er, it),
                it |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ue(Er, it),
            it |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ue(Er, it),
        it |= r;
    return Qe(e, t, o, n),
    t.child
}
function wg(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ku(e, t, n, r, o) {
    var i = et(n) ? Xn : Ve.current;
    return i = Fr(t, i),
    Tr(t, o),
    n = Ic(e, t, n, r, i, o),
    r = Dc(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    un(e, t, o)) : (pe && r && _c(t),
    t.flags |= 1,
    Qe(e, t, n, o),
    t.child)
}
function xd(e, t, n, r, o) {
    if (et(n)) {
        var i = !0;
        $l(t)
    } else
        i = !1;
    if (Tr(t, o),
    t.stateNode === null)
        dl(e, t),
        Qh(t, n, r),
        bu(t, n, r, o),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , a = t.memoizedProps;
        l.props = a;
        var s = l.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = _t(u) : (u = et(n) ? Xn : Ve.current,
        u = Fr(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== u) && fd(t, l, r, u),
        wn = !1;
        var g = t.memoizedState;
        l.state = g,
        zl(t, r, l, o),
        s = t.memoizedState,
        a !== r || g !== s || Ze.current || wn ? (typeof d == "function" && (Pu(t, n, d, r),
        s = t.memoizedState),
        (a = wn || cd(t, n, a, r, g, s, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        l.props = r,
        l.state = s,
        l.context = u,
        r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        Wh(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : bt(t.type, a),
        l.props = u,
        f = t.pendingProps,
        g = l.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = _t(s) : (s = et(n) ? Xn : Ve.current,
        s = Fr(t, s));
        var x = n.getDerivedStateFromProps;
        (d = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== f || g !== s) && fd(t, l, r, s),
        wn = !1,
        g = t.memoizedState,
        l.state = g,
        zl(t, r, l, o);
        var w = t.memoizedState;
        a !== f || g !== w || Ze.current || wn ? (typeof x == "function" && (Pu(t, n, x, r),
        w = t.memoizedState),
        (u = wn || cd(t, n, u, r, g, w, s) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, s),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, s)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        l.props = r,
        l.state = w,
        l.context = s,
        r = u) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Cu(e, t, n, r, i, o)
}
function Cu(e, t, n, r, o, i) {
    wg(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return o && id(t, n, !1),
        un(e, t, i);
    r = t.stateNode,
    cw.current = t;
    var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = Ur(t, e.child, null, i),
    t.child = Ur(t, null, a, i)) : Qe(e, t, a, i),
    t.memoizedState = r.state,
    o && id(t, n, !0),
    t.child
}
function xg(e) {
    var t = e.stateNode;
    t.pendingContext ? od(e, t.pendingContext, t.pendingContext !== t.context) : t.context && od(e, t.context, !1),
    jc(e, t.containerInfo)
}
function Sd(e, t, n, r, o) {
    return Hr(),
    Pc(o),
    t.flags |= 256,
    Qe(e, t, n, r),
    t.child
}
var Nu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ju(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Sg(e, t, n) {
    var r = t.pendingProps, o = he.current, i = !1, l = (t.flags & 128) !== 0, a;
    if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(he, o & 1),
    e === null)
        return _u(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = l) : i = $a(l, r, 0, null),
        e = Gn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = ju(n),
        t.memoizedState = Nu,
        e) : Mc(t, l));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return fw(e, t, l, r, a, o, n);
    if (i) {
        i = r.fallback,
        l = t.mode,
        o = e.child,
        a = o.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = $n(o, s),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? i = $n(a, i) : (i = Gn(i, l, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        l = e.child.memoizedState,
        l = l === null ? ju(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        i.memoizedState = l,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Nu,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = $n(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Mc(e, t) {
    return t = $a({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Wi(e, t, n, r) {
    return r !== null && Pc(r),
    Ur(t, e.child, null, n),
    e = Mc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function fw(e, t, n, r, o, i, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ts(Error(j(422))),
        Wi(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = $a({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Gn(i, o, l, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Ur(t, e.child, null, l),
        t.child.memoizedState = ju(l),
        t.memoizedState = Nu,
        i);
    if (!(t.mode & 1))
        return Wi(e, t, l, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(j(419)),
        r = Ts(i, r, void 0),
        Wi(e, t, l, r)
    }
    if (a = (l & e.childLanes) !== 0,
    Je || a) {
        if (r = $e,
        r !== null) {
            switch (l & -l) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | l) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            sn(e, o),
            jt(r, e, o, -1))
        }
        return Wc(),
        r = Ts(Error(j(421))),
        Wi(e, t, l, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Pw.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    lt = Cn(o.nextSibling),
    at = t,
    pe = !0,
    Ct = null,
    e !== null && (vt[yt++] = Zt,
    vt[yt++] = en,
    vt[yt++] = qn,
    Zt = e.id,
    en = e.overflow,
    qn = t),
    t = Mc(t, r.children),
    t.flags |= 4096,
    t)
}
function _d(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ou(e.return, t, n)
}
function Is(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function _g(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Qe(e, t, r.children, n),
    r = he.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && _d(e, n, t);
                else if (e.tag === 19)
                    _d(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ue(he, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ml(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Is(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ml(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Is(t, !0, n, null, i);
            break;
        case "together":
            Is(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function dl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function un(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Zn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = $n(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = $n(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function dw(e, t, n) {
    switch (t.tag) {
    case 3:
        xg(t),
        Hr();
        break;
    case 5:
        Gh(t);
        break;
    case 1:
        et(t.type) && $l(t);
        break;
    case 4:
        jc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ue(Dl, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ue(he, he.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Sg(e, t, n) : (ue(he, he.current & 1),
            e = un(e, t, n),
            e !== null ? e.sibling : null);
        ue(he, he.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return _g(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ue(he, he.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        yg(e, t, n)
    }
    return un(e, t, n)
}
var Og, Ru, Pg, bg;
Og = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ru = function() {}
;
Pg = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Qn(Qt.current);
        var i = null;
        switch (n) {
        case "input":
            o = Zs(e, o),
            r = Zs(e, r),
            i = [];
            break;
        case "select":
            o = ve({}, o, {
                value: void 0
            }),
            r = ve({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = nu(e, o),
            r = nu(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = jl)
        }
        ou(n, r);
        var l;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (l in a)
                        a.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Qo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && s !== a && (s != null || a != null))
                if (u === "style")
                    if (a) {
                        for (l in a)
                            !a.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in s)
                            s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}),
                            n[l] = s[l])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = s;
                else
                    u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    a = a ? a.__html : void 0,
                    s != null && a !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Qo.hasOwnProperty(u) ? (s != null && u === "onScroll" && fe("scroll", e),
                    i || a === s || (i = [])) : (i = i || []).push(u, s))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
bg = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function yo(e, t) {
    if (!pe)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function pw(e, t, n) {
    var r = t.pendingProps;
    switch (Oc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ue(t),
        null;
    case 1:
        return et(t.type) && Rl(),
        Ue(t),
        null;
    case 3:
        return r = t.stateNode,
        Br(),
        de(Ze),
        de(Ve),
        $c(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ui(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ct !== null && (Au(Ct),
        Ct = null))),
        Ru(e, t),
        Ue(t),
        null;
    case 5:
        Rc(t);
        var o = Qn(oi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Pg(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Ue(t),
                null
            }
            if (e = Qn(Qt.current),
            Ui(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Wt] = t,
                r[ni] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    fe("cancel", r),
                    fe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    fe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Ro.length; o++)
                        fe(Ro[o], r);
                    break;
                case "source":
                    fe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    fe("error", r),
                    fe("load", r);
                    break;
                case "details":
                    fe("toggle", r);
                    break;
                case "input":
                    Rf(r, i),
                    fe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    fe("invalid", r);
                    break;
                case "textarea":
                    Tf(r, i),
                    fe("invalid", r)
                }
                ou(n, i),
                o = null;
                for (var l in i)
                    if (i.hasOwnProperty(l)) {
                        var a = i[l];
                        l === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Hi(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Hi(r.textContent, a, e),
                        o = ["children", "" + a]) : Qo.hasOwnProperty(l) && a != null && l === "onScroll" && fe("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ti(r),
                    $f(r, i, !0);
                    break;
                case "textarea":
                    Ti(r),
                    If(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = jl)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Jm(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[Wt] = t,
                e[ni] = r,
                Og(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = iu(n, r),
                    n) {
                    case "dialog":
                        fe("cancel", e),
                        fe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        fe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Ro.length; o++)
                            fe(Ro[o], e);
                        o = r;
                        break;
                    case "source":
                        fe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        fe("error", e),
                        fe("load", e),
                        o = r;
                        break;
                    case "details":
                        fe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Rf(e, r),
                        o = Zs(e, r),
                        fe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ve({}, r, {
                            value: void 0
                        }),
                        fe("invalid", e);
                        break;
                    case "textarea":
                        Tf(e, r),
                        o = nu(e, r),
                        fe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    ou(n, o),
                    a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var s = a[i];
                            i === "style" ? th(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Zm(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Ko(e, s) : typeof s == "number" && Ko(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Qo.hasOwnProperty(i) ? s != null && i === "onScroll" && fe("scroll", e) : s != null && sc(e, i, s, l))
                        }
                    switch (n) {
                    case "input":
                        Ti(e),
                        $f(e, r, !1);
                        break;
                    case "textarea":
                        Ti(e),
                        If(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Tn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Nr(e, !!r.multiple, i, !1) : r.defaultValue != null && Nr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = jl)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ue(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            bg(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Qn(oi.current),
            Qn(Qt.current),
            Ui(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Wt] = t,
                (i = r.nodeValue !== n) && (e = at,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Hi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Hi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Wt] = t,
                t.stateNode = r
        }
        return Ue(t),
        null;
    case 13:
        if (de(he),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (pe && lt !== null && t.mode & 1 && !(t.flags & 128))
                Uh(),
                Hr(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ui(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[Wt] = t
                } else
                    Hr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ue(t),
                i = !1
            } else
                Ct !== null && (Au(Ct),
                Ct = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || he.current & 1 ? Ce === 0 && (Ce = 3) : Wc())),
        t.updateQueue !== null && (t.flags |= 4),
        Ue(t),
        null);
    case 4:
        return Br(),
        Ru(e, t),
        e === null && ei(t.stateNode.containerInfo),
        Ue(t),
        null;
    case 10:
        return kc(t.type._context),
        Ue(t),
        null;
    case 17:
        return et(t.type) && Rl(),
        Ue(t),
        null;
    case 19:
        if (de(he),
        i = t.memoizedState,
        i === null)
            return Ue(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = i.rendering,
        l === null)
            if (r)
                yo(i, !1);
            else {
                if (Ce !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = Ml(e),
                        l !== null) {
                            for (t.flags |= 128,
                            yo(i, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                l = i.alternate,
                                l === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = l.childLanes,
                                i.lanes = l.lanes,
                                i.child = l.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = l.memoizedProps,
                                i.memoizedState = l.memoizedState,
                                i.updateQueue = l.updateQueue,
                                i.type = l.type,
                                e = l.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ue(he, he.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && xe() > Vr && (t.flags |= 128,
                r = !0,
                yo(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ml(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    yo(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !l.alternate && !pe)
                        return Ue(t),
                        null
                } else
                    2 * xe() - i.renderingStartTime > Vr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    yo(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = i.last,
            n !== null ? n.sibling = l : t.child = l,
            i.last = l)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = xe(),
        t.sibling = null,
        n = he.current,
        ue(he, r ? n & 1 | 2 : n & 1),
        t) : (Ue(t),
        null);
    case 22:
    case 23:
        return Bc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? it & 1073741824 && (Ue(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function mw(e, t) {
    switch (Oc(t),
    t.tag) {
    case 1:
        return et(t.type) && Rl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Br(),
        de(Ze),
        de(Ve),
        $c(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Rc(t),
        null;
    case 13:
        if (de(he),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Hr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return de(he),
        null;
    case 4:
        return Br(),
        null;
    case 10:
        return kc(t.type._context),
        null;
    case 22:
    case 23:
        return Bc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Vi = !1
  , We = !1
  , hw = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function br(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                we(e, t, r)
            }
        else
            n.current = null
}
function $u(e, t, n) {
    try {
        n()
    } catch (r) {
        we(e, t, r)
    }
}
var Od = !1;
function gw(e, t) {
    if (hu = kl,
    e = Nh(),
    Sc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , a = -1
                      , s = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , g = null;
                    t: for (; ; ) {
                        for (var x; f !== n || o !== 0 && f.nodeType !== 3 || (a = l + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (s = l + r),
                        f.nodeType === 3 && (l += f.nodeValue.length),
                        (x = f.firstChild) !== null; )
                            g = f,
                            f = x;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (g === n && ++u === o && (a = l),
                            g === i && ++d === r && (s = l),
                            (x = f.nextSibling) !== null)
                                break;
                            f = g,
                            g = f.parentNode
                        }
                        f = x
                    }
                    n = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (gu = {
        focusedElem: e,
        selectionRange: n
    },
    kl = !1,
    L = t; L !== null; )
        if (t = L,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            L = e;
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var y = w.memoizedProps
                                  , S = w.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : bt(t.type, y), S);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (h) {
                    we(t, t.return, h)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    L = e;
                    break
                }
                L = t.return
            }
    return w = Od,
    Od = !1,
    w
}
function Ao(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && $u(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function ja(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Tu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Eg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Eg(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Wt],
    delete t[ni],
    delete t[wu],
    delete t[J1],
    delete t[Z1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function kg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Pd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || kg(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Iu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = jl));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Iu(e, t, n),
        e = e.sibling; e !== null; )
            Iu(e, t, n),
            e = e.sibling
}
function Du(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Du(e, t, n),
        e = e.sibling; e !== null; )
            Du(e, t, n),
            e = e.sibling
}
var Le = null
  , kt = !1;
function gn(e, t, n) {
    for (n = n.child; n !== null; )
        Cg(e, t, n),
        n = n.sibling
}
function Cg(e, t, n) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function")
        try {
            Vt.onCommitFiberUnmount(_a, n)
        } catch {}
    switch (n.tag) {
    case 5:
        We || br(n, t);
    case 6:
        var r = Le
          , o = kt;
        Le = null,
        gn(e, t, n),
        Le = r,
        kt = o,
        Le !== null && (kt ? (e = Le,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
        break;
    case 18:
        Le !== null && (kt ? (e = Le,
        n = n.stateNode,
        e.nodeType === 8 ? ks(e.parentNode, n) : e.nodeType === 1 && ks(e, n),
        qo(e)) : ks(Le, n.stateNode));
        break;
    case 4:
        r = Le,
        o = kt,
        Le = n.stateNode.containerInfo,
        kt = !0,
        gn(e, t, n),
        Le = r,
        kt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!We && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , l = i.destroy;
                i = i.tag,
                l !== void 0 && (i & 2 || i & 4) && $u(n, t, l),
                o = o.next
            } while (o !== r)
        }
        gn(e, t, n);
        break;
    case 1:
        if (!We && (br(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                we(n, t, a)
            }
        gn(e, t, n);
        break;
    case 21:
        gn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (We = (r = We) || n.memoizedState !== null,
        gn(e, t, n),
        We = r) : gn(e, t, n);
        break;
    default:
        gn(e, t, n)
    }
}
function bd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new hw),
        t.forEach(function(r) {
            var o = bw.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function Pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , l = t
                  , a = l;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Le = a.stateNode,
                        kt = !1;
                        break e;
                    case 3:
                        Le = a.stateNode.containerInfo,
                        kt = !0;
                        break e;
                    case 4:
                        Le = a.stateNode.containerInfo,
                        kt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Le === null)
                    throw Error(j(160));
                Cg(i, l, o),
                Le = null,
                kt = !1;
                var s = o.alternate;
                s !== null && (s.return = null),
                o.return = null
            } catch (u) {
                we(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ng(t, e),
            t = t.sibling
}
function Ng(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Pt(t, e),
        Mt(e),
        r & 4) {
            try {
                Ao(3, e, e.return),
                ja(3, e)
            } catch (y) {
                we(e, e.return, y)
            }
            try {
                Ao(5, e, e.return)
            } catch (y) {
                we(e, e.return, y)
            }
        }
        break;
    case 1:
        Pt(t, e),
        Mt(e),
        r & 512 && n !== null && br(n, n.return);
        break;
    case 5:
        if (Pt(t, e),
        Mt(e),
        r & 512 && n !== null && br(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Ko(o, "")
            } catch (y) {
                we(e, e.return, y)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , l = n !== null ? n.memoizedProps : i
              , a = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Xm(o, i),
                    iu(a, l);
                    var u = iu(a, i);
                    for (l = 0; l < s.length; l += 2) {
                        var d = s[l]
                          , f = s[l + 1];
                        d === "style" ? th(o, f) : d === "dangerouslySetInnerHTML" ? Zm(o, f) : d === "children" ? Ko(o, f) : sc(o, d, f, u)
                    }
                    switch (a) {
                    case "input":
                        eu(o, i);
                        break;
                    case "textarea":
                        qm(o, i);
                        break;
                    case "select":
                        var g = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var x = i.value;
                        x != null ? Nr(o, !!i.multiple, x, !1) : g !== !!i.multiple && (i.defaultValue != null ? Nr(o, !!i.multiple, i.defaultValue, !0) : Nr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[ni] = i
                } catch (y) {
                    we(e, e.return, y)
                }
        }
        break;
    case 6:
        if (Pt(t, e),
        Mt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (y) {
                we(e, e.return, y)
            }
        }
        break;
    case 3:
        if (Pt(t, e),
        Mt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                qo(t.containerInfo)
            } catch (y) {
                we(e, e.return, y)
            }
        break;
    case 4:
        Pt(t, e),
        Mt(e);
        break;
    case 13:
        Pt(t, e),
        Mt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Hc = xe())),
        r & 4 && bd(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (We = (u = We) || d,
        Pt(t, e),
        We = u) : Pt(t, e),
        Mt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (L = e,
                d = e.child; d !== null; ) {
                    for (f = L = d; L !== null; ) {
                        switch (g = L,
                        x = g.child,
                        g.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ao(4, g, g.return);
                            break;
                        case 1:
                            br(g, g.return);
                            var w = g.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = g,
                                n = g.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (y) {
                                    we(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            br(g, g.return);
                            break;
                        case 22:
                            if (g.memoizedState !== null) {
                                kd(f);
                                continue
                            }
                        }
                        x !== null ? (x.return = g,
                        L = x) : kd(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode,
                            s = f.memoizedProps.style,
                            l = s != null && s.hasOwnProperty("display") ? s.display : null,
                            a.style.display = eh("display", l))
                        } catch (y) {
                            we(e, e.return, y)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (y) {
                            we(e, e.return, y)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        Pt(t, e),
        Mt(e),
        r & 4 && bd(e);
        break;
    case 21:
        break;
    default:
        Pt(t, e),
        Mt(e)
    }
}
function Mt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (kg(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Ko(o, ""),
                r.flags &= -33);
                var i = Pd(e);
                Du(e, i, o);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , a = Pd(e);
                Iu(e, a, l);
                break;
            default:
                throw Error(j(161))
            }
        } catch (s) {
            we(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function vw(e, t, n) {
    L = e,
    jg(e)
}
function jg(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var o = L
          , i = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || Vi;
            if (!l) {
                var a = o.alternate
                  , s = a !== null && a.memoizedState !== null || We;
                a = Vi;
                var u = We;
                if (Vi = l,
                (We = s) && !u)
                    for (L = o; L !== null; )
                        l = L,
                        s = l.child,
                        l.tag === 22 && l.memoizedState !== null ? Cd(o) : s !== null ? (s.return = l,
                        L = s) : Cd(o);
                for (; i !== null; )
                    L = i,
                    jg(i),
                    i = i.sibling;
                L = o,
                Vi = a,
                We = u
            }
            Ed(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            L = i) : Ed(e)
    }
}
function Ed(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        We || ja(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !We)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : bt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && ud(t, i, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ud(t, l, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && qo(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                We || t.flags & 512 && Tu(t)
            } catch (g) {
                we(t, t.return, g)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function kd(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function Cd(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ja(4, t)
                } catch (s) {
                    we(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        we(t, o, s)
                    }
                }
                var i = t.return;
                try {
                    Tu(t)
                } catch (s) {
                    we(t, i, s)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    Tu(t)
                } catch (s) {
                    we(t, l, s)
                }
            }
        } catch (s) {
            we(t, t.return, s)
        }
        if (t === e) {
            L = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            L = a;
            break
        }
        L = t.return
    }
}
var yw = Math.ceil
  , Hl = pn.ReactCurrentDispatcher
  , Ac = pn.ReactCurrentOwner
  , xt = pn.ReactCurrentBatchConfig
  , G = 0
  , $e = null
  , Oe = null
  , Me = 0
  , it = 0
  , Er = Mn(0)
  , Ce = 0
  , si = null
  , Zn = 0
  , Ra = 0
  , Fc = 0
  , Fo = null
  , qe = null
  , Hc = 0
  , Vr = 1 / 0
  , Gt = null
  , Ul = !1
  , Lu = null
  , jn = null
  , Qi = !1
  , On = null
  , Bl = 0
  , Ho = 0
  , zu = null
  , pl = -1
  , ml = 0;
function Ke() {
    return G & 6 ? xe() : pl !== -1 ? pl : pl = xe()
}
function Rn(e) {
    return e.mode & 1 ? G & 2 && Me !== 0 ? Me & -Me : tw.transition !== null ? (ml === 0 && (ml = ph()),
    ml) : (e = re,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : xh(e.type)),
    e) : 1
}
function jt(e, t, n, r) {
    if (50 < Ho)
        throw Ho = 0,
        zu = null,
        Error(j(185));
    gi(e, n, r),
    (!(G & 2) || e !== $e) && (e === $e && (!(G & 2) && (Ra |= n),
    Ce === 4 && Sn(e, Me)),
    tt(e, r),
    n === 1 && G === 0 && !(t.mode & 1) && (Vr = xe() + 500,
    ka && An()))
}
function tt(e, t) {
    var n = e.callbackNode;
    t1(e, t);
    var r = El(e, e === $e ? Me : 0);
    if (r === 0)
        n !== null && zf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && zf(n),
        t === 1)
            e.tag === 0 ? ew(Nd.bind(null, e)) : Ah(Nd.bind(null, e)),
            X1(function() {
                !(G & 6) && An()
            }),
            n = null;
        else {
            switch (mh(r)) {
            case 1:
                n = pc;
                break;
            case 4:
                n = fh;
                break;
            case 16:
                n = bl;
                break;
            case 536870912:
                n = dh;
                break;
            default:
                n = bl
            }
            n = Mg(n, Rg.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Rg(e, t) {
    if (pl = -1,
    ml = 0,
    G & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (Ir() && e.callbackNode !== n)
        return null;
    var r = El(e, e === $e ? Me : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Wl(e, r);
    else {
        t = r;
        var o = G;
        G |= 2;
        var i = Tg();
        ($e !== e || Me !== t) && (Gt = null,
        Vr = xe() + 500,
        Yn(e, t));
        do
            try {
                Sw();
                break
            } catch (a) {
                $g(e, a)
            }
        while (1);
        Ec(),
        Hl.current = i,
        G = o,
        Oe !== null ? t = 0 : ($e = null,
        Me = 0,
        t = Ce)
    }
    if (t !== 0) {
        if (t === 2 && (o = cu(e),
        o !== 0 && (r = o,
        t = Mu(e, o))),
        t === 1)
            throw n = si,
            Yn(e, 0),
            Sn(e, r),
            tt(e, xe()),
            n;
        if (t === 6)
            Sn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !ww(o) && (t = Wl(e, r),
            t === 2 && (i = cu(e),
            i !== 0 && (r = i,
            t = Mu(e, i))),
            t === 1))
                throw n = si,
                Yn(e, 0),
                Sn(e, r),
                tt(e, xe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Bn(e, qe, Gt);
                break;
            case 3:
                if (Sn(e, r),
                (r & 130023424) === r && (t = Hc + 500 - xe(),
                10 < t)) {
                    if (El(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ke(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = yu(Bn.bind(null, e, qe, Gt), t);
                    break
                }
                Bn(e, qe, Gt);
                break;
            case 4:
                if (Sn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var l = 31 - Nt(r);
                    i = 1 << l,
                    l = t[l],
                    l > o && (o = l),
                    r &= ~i
                }
                if (r = o,
                r = xe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yw(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = yu(Bn.bind(null, e, qe, Gt), r);
                    break
                }
                Bn(e, qe, Gt);
                break;
            case 5:
                Bn(e, qe, Gt);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return tt(e, xe()),
    e.callbackNode === n ? Rg.bind(null, e) : null
}
function Mu(e, t) {
    var n = Fo;
    return e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256),
    e = Wl(e, t),
    e !== 2 && (t = qe,
    qe = n,
    t !== null && Au(t)),
    e
}
function Au(e) {
    qe === null ? qe = e : qe.push.apply(qe, e)
}
function ww(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Tt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Sn(e, t) {
    for (t &= ~Fc,
    t &= ~Ra,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Nt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Nd(e) {
    if (G & 6)
        throw Error(j(327));
    Ir();
    var t = El(e, 0);
    if (!(t & 1))
        return tt(e, xe()),
        null;
    var n = Wl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = cu(e);
        r !== 0 && (t = r,
        n = Mu(e, r))
    }
    if (n === 1)
        throw n = si,
        Yn(e, 0),
        Sn(e, t),
        tt(e, xe()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Bn(e, qe, Gt),
    tt(e, xe()),
    null
}
function Uc(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = n,
        G === 0 && (Vr = xe() + 500,
        ka && An())
    }
}
function er(e) {
    On !== null && On.tag === 0 && !(G & 6) && Ir();
    var t = G;
    G |= 1;
    var n = xt.transition
      , r = re;
    try {
        if (xt.transition = null,
        re = 1,
        e)
            return e()
    } finally {
        re = r,
        xt.transition = n,
        G = t,
        !(G & 6) && An()
    }
}
function Bc() {
    it = Er.current,
    de(Er)
}
function Yn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    G1(n)),
    Oe !== null)
        for (n = Oe.return; n !== null; ) {
            var r = n;
            switch (Oc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Rl();
                break;
            case 3:
                Br(),
                de(Ze),
                de(Ve),
                $c();
                break;
            case 5:
                Rc(r);
                break;
            case 4:
                Br();
                break;
            case 13:
                de(he);
                break;
            case 19:
                de(he);
                break;
            case 10:
                kc(r.type._context);
                break;
            case 22:
            case 23:
                Bc()
            }
            n = n.return
        }
    if ($e = e,
    Oe = e = $n(e.current, null),
    Me = it = t,
    Ce = 0,
    si = null,
    Fc = Ra = Zn = 0,
    qe = Fo = null,
    Vn !== null) {
        for (t = 0; t < Vn.length; t++)
            if (n = Vn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var l = i.next;
                    i.next = o,
                    r.next = l
                }
                n.pending = r
            }
        Vn = null
    }
    return e
}
function $g(e, t) {
    do {
        var n = Oe;
        try {
            if (Ec(),
            cl.current = Fl,
            Al) {
                for (var r = ge.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Al = !1
            }
            if (Jn = 0,
            je = ke = ge = null,
            Mo = !1,
            ii = 0,
            Ac.current = null,
            n === null || n.return === null) {
                Ce = 1,
                si = t,
                Oe = null;
                break
            }
            e: {
                var i = e
                  , l = n.return
                  , a = n
                  , s = t;
                if (t = Me,
                a.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s
                      , d = a
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var g = d.alternate;
                        g ? (d.updateQueue = g.updateQueue,
                        d.memoizedState = g.memoizedState,
                        d.lanes = g.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var x = gd(l);
                    if (x !== null) {
                        x.flags &= -257,
                        vd(x, l, a, i, t),
                        x.mode & 1 && hd(i, u, t),
                        t = x,
                        s = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var y = new Set;
                            y.add(s),
                            t.updateQueue = y
                        } else
                            w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            hd(i, u, t),
                            Wc();
                            break e
                        }
                        s = Error(j(426))
                    }
                } else if (pe && a.mode & 1) {
                    var S = gd(l);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        vd(S, l, a, i, t),
                        Pc(Wr(s, a));
                        break e
                    }
                }
                i = s = Wr(s, a),
                Ce !== 4 && (Ce = 2),
                Fo === null ? Fo = [i] : Fo.push(i),
                i = l;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = hg(i, s, t);
                        sd(i, m);
                        break e;
                    case 1:
                        a = s;
                        var p = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (jn === null || !jn.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var h = gg(i, a, t);
                            sd(i, h);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Dg(n)
        } catch (O) {
            t = O,
            Oe === n && n !== null && (Oe = n = n.return);
            continue
        }
        break
    } while (1)
}
function Tg() {
    var e = Hl.current;
    return Hl.current = Fl,
    e === null ? Fl : e
}
function Wc() {
    (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    $e === null || !(Zn & 268435455) && !(Ra & 268435455) || Sn($e, Me)
}
function Wl(e, t) {
    var n = G;
    G |= 2;
    var r = Tg();
    ($e !== e || Me !== t) && (Gt = null,
    Yn(e, t));
    do
        try {
            xw();
            break
        } catch (o) {
            $g(e, o)
        }
    while (1);
    if (Ec(),
    G = n,
    Hl.current = r,
    Oe !== null)
        throw Error(j(261));
    return $e = null,
    Me = 0,
    Ce
}
function xw() {
    for (; Oe !== null; )
        Ig(Oe)
}
function Sw() {
    for (; Oe !== null && !Q0(); )
        Ig(Oe)
}
function Ig(e) {
    var t = zg(e.alternate, e, it);
    e.memoizedProps = e.pendingProps,
    t === null ? Dg(e) : Oe = t,
    Ac.current = null
}
function Dg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = mw(n, t),
            n !== null) {
                n.flags &= 32767,
                Oe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ce = 6,
                Oe = null;
                return
            }
        } else if (n = pw(n, t, it),
        n !== null) {
            Oe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Oe = t;
            return
        }
        Oe = t = e
    } while (t !== null);
    Ce === 0 && (Ce = 5)
}
function Bn(e, t, n) {
    var r = re
      , o = xt.transition;
    try {
        xt.transition = null,
        re = 1,
        _w(e, t, n, r)
    } finally {
        xt.transition = o,
        re = r
    }
    return null
}
function _w(e, t, n, r) {
    do
        Ir();
    while (On !== null);
    if (G & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (n1(e, i),
    e === $e && (Oe = $e = null,
    Me = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qi || (Qi = !0,
    Mg(bl, function() {
        return Ir(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = xt.transition,
        xt.transition = null;
        var l = re;
        re = 1;
        var a = G;
        G |= 4,
        Ac.current = null,
        gw(e, n),
        Ng(n, e),
        U1(gu),
        kl = !!hu,
        gu = hu = null,
        e.current = n,
        vw(n),
        K0(),
        G = a,
        re = l,
        xt.transition = i
    } else
        e.current = n;
    if (Qi && (Qi = !1,
    On = e,
    Bl = o),
    i = e.pendingLanes,
    i === 0 && (jn = null),
    X0(n.stateNode),
    tt(e, xe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Ul)
        throw Ul = !1,
        e = Lu,
        Lu = null,
        e;
    return Bl & 1 && e.tag !== 0 && Ir(),
    i = e.pendingLanes,
    i & 1 ? e === zu ? Ho++ : (Ho = 0,
    zu = e) : Ho = 0,
    An(),
    null
}
function Ir() {
    if (On !== null) {
        var e = mh(Bl)
          , t = xt.transition
          , n = re;
        try {
            if (xt.transition = null,
            re = 16 > e ? 16 : e,
            On === null)
                var r = !1;
            else {
                if (e = On,
                On = null,
                Bl = 0,
                G & 6)
                    throw Error(j(331));
                var o = G;
                for (G |= 4,
                L = e.current; L !== null; ) {
                    var i = L
                      , l = i.child;
                    if (L.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (L = u; L !== null; ) {
                                    var d = L;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ao(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            d = L;
                                            var g = d.sibling
                                              , x = d.return;
                                            if (Eg(d),
                                            d === u) {
                                                L = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = x,
                                                L = g;
                                                break
                                            }
                                            L = x
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var y = w.child;
                                if (y !== null) {
                                    w.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null,
                                        y = S
                                    } while (y !== null)
                                }
                            }
                            L = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && l !== null)
                        l.return = i,
                        L = l;
                    else
                        e: for (; L !== null; ) {
                            if (i = L,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ao(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                L = m;
                                break e
                            }
                            L = i.return
                        }
                }
                var p = e.current;
                for (L = p; L !== null; ) {
                    l = L;
                    var v = l.child;
                    if (l.subtreeFlags & 2064 && v !== null)
                        v.return = l,
                        L = v;
                    else
                        e: for (l = p; L !== null; ) {
                            if (a = L,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ja(9, a)
                                    }
                                } catch (O) {
                                    we(a, a.return, O)
                                }
                            if (a === l) {
                                L = null;
                                break e
                            }
                            var h = a.sibling;
                            if (h !== null) {
                                h.return = a.return,
                                L = h;
                                break e
                            }
                            L = a.return
                        }
                }
                if (G = o,
                An(),
                Vt && typeof Vt.onPostCommitFiberRoot == "function")
                    try {
                        Vt.onPostCommitFiberRoot(_a, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            re = n,
            xt.transition = t
        }
    }
    return !1
}
function jd(e, t, n) {
    t = Wr(n, t),
    t = hg(e, t, 1),
    e = Nn(e, t, 1),
    t = Ke(),
    e !== null && (gi(e, 1, t),
    tt(e, t))
}
function we(e, t, n) {
    if (e.tag === 3)
        jd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                jd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jn === null || !jn.has(r))) {
                    e = Wr(n, e),
                    e = gg(t, e, 1),
                    t = Nn(t, e, 1),
                    e = Ke(),
                    t !== null && (gi(t, 1, e),
                    tt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Ow(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ke(),
    e.pingedLanes |= e.suspendedLanes & n,
    $e === e && (Me & n) === n && (Ce === 4 || Ce === 3 && (Me & 130023424) === Me && 500 > xe() - Hc ? Yn(e, 0) : Fc |= n),
    tt(e, t)
}
function Lg(e, t) {
    t === 0 && (e.mode & 1 ? (t = Li,
    Li <<= 1,
    !(Li & 130023424) && (Li = 4194304)) : t = 1);
    var n = Ke();
    e = sn(e, t),
    e !== null && (gi(e, t, n),
    tt(e, n))
}
function Pw(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Lg(e, n)
}
function bw(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    Lg(e, n)
}
var zg;
zg = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current)
            Je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Je = !1,
                dw(e, t, n);
            Je = !!(e.flags & 131072)
        }
    else
        Je = !1,
        pe && t.flags & 1048576 && Fh(t, Il, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        dl(e, t),
        e = t.pendingProps;
        var o = Fr(t, Ve.current);
        Tr(t, n),
        o = Ic(null, t, r, e, o, n);
        var i = Dc();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        et(r) ? (i = !0,
        $l(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Nc(t),
        o.updater = Ca,
        t.stateNode = o,
        o._reactInternals = t,
        bu(t, r, e, n),
        t = Cu(null, t, r, !0, i, n)) : (t.tag = 0,
        pe && i && _c(t),
        Qe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (dl(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = kw(r),
            e = bt(r, e),
            o) {
            case 0:
                t = ku(null, t, r, e, n);
                break e;
            case 1:
                t = xd(null, t, r, e, n);
                break e;
            case 11:
                t = yd(null, t, r, e, n);
                break e;
            case 14:
                t = wd(null, t, r, bt(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : bt(r, o),
        ku(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : bt(r, o),
        xd(e, t, r, o, n);
    case 3:
        e: {
            if (xg(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Wh(e, t),
            zl(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Wr(Error(j(423)), t),
                    t = Sd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Wr(Error(j(424)), t),
                    t = Sd(e, t, r, n, o);
                    break e
                } else
                    for (lt = Cn(t.stateNode.containerInfo.firstChild),
                    at = t,
                    pe = !0,
                    Ct = null,
                    n = Yh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Hr(),
                r === o) {
                    t = un(e, t, n);
                    break e
                }
                Qe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Gh(t),
        e === null && _u(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        l = o.children,
        vu(r, o) ? l = null : i !== null && vu(r, i) && (t.flags |= 32),
        wg(e, t),
        Qe(e, t, l, n),
        t.child;
    case 6:
        return e === null && _u(t),
        null;
    case 13:
        return Sg(e, t, n);
    case 4:
        return jc(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Ur(t, null, r, n) : Qe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : bt(r, o),
        yd(e, t, r, o, n);
    case 7:
        return Qe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Qe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Qe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            l = o.value,
            ue(Dl, r._currentValue),
            r._currentValue = l,
            i !== null)
                if (Tt(i.value, l)) {
                    if (i.children === o.children && !Ze.current) {
                        t = un(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            l = i.child;
                            for (var s = a.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = tn(-1, n & -n),
                                        s.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? s.next = s : (s.next = d.next,
                                            d.next = s),
                                            u.pending = s
                                        }
                                    }
                                    i.lanes |= n,
                                    s = i.alternate,
                                    s !== null && (s.lanes |= n),
                                    Ou(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (i.tag === 10)
                            l = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (l = i.return,
                            l === null)
                                throw Error(j(341));
                            l.lanes |= n,
                            a = l.alternate,
                            a !== null && (a.lanes |= n),
                            Ou(l, n, t),
                            l = i.sibling
                        } else
                            l = i.child;
                        if (l !== null)
                            l.return = i;
                        else
                            for (l = i; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (i = l.sibling,
                                i !== null) {
                                    i.return = l.return,
                                    l = i;
                                    break
                                }
                                l = l.return
                            }
                        i = l
                    }
            Qe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Tr(t, n),
        o = _t(o),
        r = r(o),
        t.flags |= 1,
        Qe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = bt(r, t.pendingProps),
        o = bt(r.type, o),
        wd(e, t, r, o, n);
    case 15:
        return vg(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : bt(r, o),
        dl(e, t),
        t.tag = 1,
        et(r) ? (e = !0,
        $l(t)) : e = !1,
        Tr(t, n),
        Qh(t, r, o),
        bu(t, r, o, n),
        Cu(null, t, r, !0, e, n);
    case 19:
        return _g(e, t, n);
    case 22:
        return yg(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function Mg(e, t) {
    return ch(e, t)
}
function Ew(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function wt(e, t, n, r) {
    return new Ew(e,t,n,r)
}
function Vc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function kw(e) {
    if (typeof e == "function")
        return Vc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === cc)
            return 11;
        if (e === fc)
            return 14
    }
    return 2
}
function $n(e, t) {
    var n = e.alternate;
    return n === null ? (n = wt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function hl(e, t, n, r, o, i) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        Vc(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case gr:
            return Gn(n.children, o, i, t);
        case uc:
            l = 8,
            o |= 8;
            break;
        case Gs:
            return e = wt(12, n, t, o | 2),
            e.elementType = Gs,
            e.lanes = i,
            e;
        case Xs:
            return e = wt(13, n, t, o),
            e.elementType = Xs,
            e.lanes = i,
            e;
        case qs:
            return e = wt(19, n, t, o),
            e.elementType = qs,
            e.lanes = i,
            e;
        case Km:
            return $a(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Vm:
                    l = 10;
                    break e;
                case Qm:
                    l = 9;
                    break e;
                case cc:
                    l = 11;
                    break e;
                case fc:
                    l = 14;
                    break e;
                case yn:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = wt(l, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Gn(e, t, n, r) {
    return e = wt(7, e, r, t),
    e.lanes = n,
    e
}
function $a(e, t, n, r) {
    return e = wt(22, e, r, t),
    e.elementType = Km,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ds(e, t, n) {
    return e = wt(6, e, null, t),
    e.lanes = n,
    e
}
function Ls(e, t, n) {
    return t = wt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Cw(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = gs(0),
    this.expirationTimes = gs(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = gs(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Qc(e, t, n, r, o, i, l, a, s) {
    return e = new Cw(e,t,n,a,s),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = wt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Nc(i),
    e
}
function Nw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: hr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Ag(e) {
    if (!e)
        return In;
    e = e._reactInternals;
    e: {
        if (sr(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (et(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (et(n))
            return Mh(e, n, t)
    }
    return t
}
function Fg(e, t, n, r, o, i, l, a, s) {
    return e = Qc(n, r, !0, e, o, i, l, a, s),
    e.context = Ag(null),
    n = e.current,
    r = Ke(),
    o = Rn(n),
    i = tn(r, o),
    i.callback = t ?? null,
    Nn(n, i, o),
    e.current.lanes = o,
    gi(e, o, r),
    tt(e, r),
    e
}
function Ta(e, t, n, r) {
    var o = t.current
      , i = Ke()
      , l = Rn(o);
    return n = Ag(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = tn(i, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Nn(o, t, l),
    e !== null && (jt(e, o, l, i),
    ul(e, o, l)),
    l
}
function Vl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Rd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Kc(e, t) {
    Rd(e, t),
    (e = e.alternate) && Rd(e, t)
}
function jw() {
    return null
}
var Hg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Yc(e) {
    this._internalRoot = e
}
Ia.prototype.render = Yc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Ta(e, t, null, null)
}
;
Ia.prototype.unmount = Yc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        er(function() {
            Ta(null, e, null, null)
        }),
        t[an] = null
    }
}
;
function Ia(e) {
    this._internalRoot = e
}
Ia.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = vh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < xn.length && t !== 0 && t < xn[n].priority; n++)
            ;
        xn.splice(n, 0, e),
        n === 0 && wh(e)
    }
}
;
function Gc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Da(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function $d() {}
function Rw(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Vl(l);
                i.call(u)
            }
        }
        var l = Fg(t, r, e, 0, null, !1, !1, "", $d);
        return e._reactRootContainer = l,
        e[an] = l.current,
        ei(e.nodeType === 8 ? e.parentNode : e),
        er(),
        l
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Vl(s);
            a.call(u)
        }
    }
    var s = Qc(e, 0, !1, null, null, !1, !1, "", $d);
    return e._reactRootContainer = s,
    e[an] = s.current,
    ei(e.nodeType === 8 ? e.parentNode : e),
    er(function() {
        Ta(t, s, n, r)
    }),
    s
}
function La(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var l = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var s = Vl(l);
                a.call(s)
            }
        }
        Ta(t, l, e, o)
    } else
        l = Rw(n, t, e, o, r);
    return Vl(l)
}
hh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = jo(t.pendingLanes);
            n !== 0 && (mc(t, n | 1),
            tt(t, xe()),
            !(G & 6) && (Vr = xe() + 500,
            An()))
        }
        break;
    case 13:
        er(function() {
            var r = sn(e, 1);
            if (r !== null) {
                var o = Ke();
                jt(r, e, 1, o)
            }
        }),
        Kc(e, 1)
    }
}
;
hc = function(e) {
    if (e.tag === 13) {
        var t = sn(e, 134217728);
        if (t !== null) {
            var n = Ke();
            jt(t, e, 134217728, n)
        }
        Kc(e, 134217728)
    }
}
;
gh = function(e) {
    if (e.tag === 13) {
        var t = Rn(e)
          , n = sn(e, t);
        if (n !== null) {
            var r = Ke();
            jt(n, e, t, r)
        }
        Kc(e, t)
    }
}
;
vh = function() {
    return re
}
;
yh = function(e, t) {
    var n = re;
    try {
        return re = e,
        t()
    } finally {
        re = n
    }
}
;
au = function(e, t, n) {
    switch (t) {
    case "input":
        if (eu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Ea(r);
                    if (!o)
                        throw Error(j(90));
                    Gm(r),
                    eu(r, o)
                }
            }
        }
        break;
    case "textarea":
        qm(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Nr(e, !!n.multiple, t, !1)
    }
}
;
oh = Uc;
ih = er;
var $w = {
    usingClientEntryPoint: !1,
    Events: [yi, xr, Ea, nh, rh, Uc]
}
  , wo = {
    findFiberByHostInstance: Wn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , Tw = {
    bundleType: wo.bundleType,
    version: wo.version,
    rendererPackageName: wo.rendererPackageName,
    rendererConfig: wo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = sh(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: wo.findFiberByHostInstance || jw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ki.isDisabled && Ki.supportsFiber)
        try {
            _a = Ki.inject(Tw),
            Vt = Ki
        } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $w;
ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gc(t))
        throw Error(j(200));
    return Nw(e, t, null, n)
}
;
ct.createRoot = function(e, t) {
    if (!Gc(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , o = Hg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Qc(e, 1, !1, null, null, n, !1, r, o),
    e[an] = t.current,
    ei(e.nodeType === 8 ? e.parentNode : e),
    new Yc(t)
}
;
ct.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = sh(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ct.flushSync = function(e) {
    return er(e)
}
;
ct.hydrate = function(e, t, n) {
    if (!Da(t))
        throw Error(j(200));
    return La(null, e, t, !0, n)
}
;
ct.hydrateRoot = function(e, t, n) {
    if (!Gc(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , l = Hg;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = Fg(t, null, e, 1, n ?? null, o, !1, i, l),
    e[an] = t.current,
    ei(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ia(t)
}
;
ct.render = function(e, t, n) {
    if (!Da(t))
        throw Error(j(200));
    return La(null, e, t, !1, n)
}
;
ct.unmountComponentAtNode = function(e) {
    if (!Da(e))
        throw Error(j(40));
    return e._reactRootContainer ? (er(function() {
        La(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[an] = null
        })
    }),
    !0) : !1
}
;
ct.unstable_batchedUpdates = Uc;
ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Da(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return La(e, t, n, !1, r)
}
;
ct.version = "18.2.0-next-9e3b772b8-20220608";
function Ug() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)
        } catch (e) {
            console.error(e)
        }
}
Ug(),
Fm.exports = ct;
var za = Fm.exports
  , Td = za;
Ks.createRoot = Td.createRoot,
Ks.hydrateRoot = Td.hydrateRoot;
function Bg(e) {
    const t = _.createContext(null);
    return [({children: o, value: i})=>R.createElement(t.Provider, {
        value: i
    }, o), ()=>{
        const o = _.useContext(t);
        if (o === null)
            throw new Error(e);
        return o
    }
    ]
}
function Iw(e) {
    return Array.isArray(e) ? e : [e]
}
const Dw = ()=>{}
;
function Lw(e, t={
    active: !0
}) {
    return typeof e != "function" || !t.active ? t.onKeyDown || Dw : n=>{
        var r;
        n.key === "Escape" && (e(n),
        (r = t.onTrigger) == null || r.call(t))
    }
}
function Ql(e, t) {
    return n=>{
        e == null || e(n),
        t == null || t(n)
    }
}
function Xc(e) {
    return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== R.Fragment : !1
}
function Wg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = Wg(e[t])) && (r && (r += " "),
                r += n);
        else
            for (t in e)
                e[t] && (r && (r += " "),
                r += t);
    return r
}
function Vg() {
    for (var e = 0, t, n, r = ""; e < arguments.length; )
        (t = arguments[e++]) && (n = Wg(t)) && (r && (r += " "),
        r += n);
    return r
}
const zw = {
    dark: ["#C1C2C5", "#A6A7AB", "#909296", "#5c5f66", "#373A40", "#2C2E33", "#25262b", "#1A1B1E", "#141517", "#101113"],
    gray: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"],
    red: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"],
    pink: ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"],
    grape: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"],
    violet: ["#f3f0ff", "#e5dbff", "#d0bfff", "#b197fc", "#9775fa", "#845ef7", "#7950f2", "#7048e8", "#6741d9", "#5f3dc4"],
    indigo: ["#edf2ff", "#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc", "#5c7cfa", "#4c6ef5", "#4263eb", "#3b5bdb", "#364fc7"],
    blue: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"],
    cyan: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"],
    teal: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"],
    green: ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"],
    lime: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"],
    yellow: ["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"],
    orange: ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"]
};
function Mw(e) {
    return ()=>({
        fontFamily: e.fontFamily || "sans-serif"
    })
}
var Aw = Object.defineProperty
  , Id = Object.getOwnPropertySymbols
  , Fw = Object.prototype.hasOwnProperty
  , Hw = Object.prototype.propertyIsEnumerable
  , Dd = (e,t,n)=>t in e ? Aw(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Ld = (e,t)=>{
    for (var n in t || (t = {}))
        Fw.call(t, n) && Dd(e, n, t[n]);
    if (Id)
        for (var n of Id(t))
            Hw.call(t, n) && Dd(e, n, t[n]);
    return e
}
;
function Uw(e) {
    return t=>({
        WebkitTapHighlightColor: "transparent",
        [t || "&:focus"]: Ld({}, e.focusRing === "always" || e.focusRing === "auto" ? e.focusRingStyles.styles(e) : e.focusRingStyles.resetStyles(e)),
        [t ? t.replace(":focus", ":focus:not(:focus-visible)") : "&:focus:not(:focus-visible)"]: Ld({}, e.focusRing === "auto" || e.focusRing === "never" ? e.focusRingStyles.resetStyles(e) : null)
    })
}
function xi(e) {
    return t=>typeof e.primaryShade == "number" ? e.primaryShade : e.primaryShade[t || e.colorScheme]
}
function qc(e) {
    const t = xi(e);
    return (n,r,o=!0,i=!0)=>{
        if (typeof n == "string" && n.includes(".")) {
            const [a,s] = n.split(".")
              , u = parseInt(s, 10);
            if (a in e.colors && u >= 0 && u < 10)
                return e.colors[a][typeof r == "number" && !i ? r : u]
        }
        const l = typeof r == "number" ? r : t();
        return n in e.colors ? e.colors[n][l] : o ? e.colors[e.primaryColor][l] : n
    }
}
function Qg(e) {
    let t = "";
    for (let n = 1; n < e.length - 1; n += 1)
        t += `${e[n]} ${n / (e.length - 1) * 100}%, `;
    return `${e[0]} 0%, ${t}${e[e.length - 1]} 100%`
}
function Bw(e, ...t) {
    return `linear-gradient(${e}deg, ${Qg(t)})`
}
function Ww(...e) {
    return `radial-gradient(circle, ${Qg(e)})`
}
function Kg(e) {
    const t = qc(e)
      , n = xi(e);
    return r=>{
        const o = {
            from: (r == null ? void 0 : r.from) || e.defaultGradient.from,
            to: (r == null ? void 0 : r.to) || e.defaultGradient.to,
            deg: (r == null ? void 0 : r.deg) || e.defaultGradient.deg
        };
        return `linear-gradient(${o.deg}deg, ${t(o.from, n(), !1)} 0%, ${t(o.to, n(), !1)} 100%)`
    }
}
function Yg(e) {
    return t=>{
        if (typeof t == "number")
            return `${t / 16}${e}`;
        if (typeof t == "string") {
            const n = t.replace("px", "");
            if (!Number.isNaN(Number(n)))
                return `${Number(n) / 16}${e}`
        }
        return t
    }
}
const D = Yg("rem")
  , tr = Yg("em");
function Re({size: e, sizes: t, units: n}) {
    return e in t ? t[e] : typeof e == "number" ? n === "em" ? tr(e) : D(e) : e || t.md
}
function cn(e) {
    return typeof e == "number" ? e : typeof e == "string" && e.includes("rem") ? Number(e.replace("rem", "")) * 16 : typeof e == "string" && e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e)
}
function Vw(e) {
    return t=>`@media (min-width: ${tr(cn(Re({
        size: t,
        sizes: e.breakpoints
    })))})`
}
function Qw(e) {
    return t=>`@media (max-width: ${tr(cn(Re({
        size: t,
        sizes: e.breakpoints
    })) - 1)})`
}
function Kw(e) {
    return /^#?([0-9A-F]{3}){1,2}$/i.test(e)
}
function Yw(e) {
    let t = e.replace("#", "");
    if (t.length === 3) {
        const l = t.split("");
        t = [l[0], l[0], l[1], l[1], l[2], l[2]].join("")
    }
    const n = parseInt(t, 16)
      , r = n >> 16 & 255
      , o = n >> 8 & 255
      , i = n & 255;
    return {
        r,
        g: o,
        b: i,
        a: 1
    }
}
function Gw(e) {
    const [t,n,r,o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
    return {
        r: t,
        g: n,
        b: r,
        a: o || 1
    }
}
function Jc(e) {
    return Kw(e) ? Yw(e) : e.startsWith("rgb") ? Gw(e) : {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    }
}
function mr(e, t) {
    if (typeof e != "string" || t > 1 || t < 0)
        return "rgba(0, 0, 0, 1)";
    if (e.startsWith("var(--"))
        return e;
    const {r: n, g: r, b: o} = Jc(e);
    return `rgba(${n}, ${r}, ${o}, ${t})`
}
function Xw(e=0) {
    return {
        position: "absolute",
        top: D(e),
        right: D(e),
        left: D(e),
        bottom: D(e)
    }
}
function qw(e, t) {
    if (typeof e == "string" && e.startsWith("var(--"))
        return e;
    const {r: n, g: r, b: o, a: i} = Jc(e)
      , l = 1 - t
      , a = s=>Math.round(s * l);
    return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`
}
function Jw(e, t) {
    if (typeof e == "string" && e.startsWith("var(--"))
        return e;
    const {r: n, g: r, b: o, a: i} = Jc(e)
      , l = a=>Math.round(a + (255 - a) * t);
    return `rgba(${l(n)}, ${l(r)}, ${l(o)}, ${i})`
}
function Zw(e) {
    return t=>{
        if (typeof t == "number")
            return D(t);
        const n = typeof e.defaultRadius == "number" ? e.defaultRadius : e.radius[e.defaultRadius] || e.defaultRadius;
        return e.radius[t] || t || n
    }
}
function ex(e, t) {
    if (typeof e == "string" && e.includes(".")) {
        const [n,r] = e.split(".")
          , o = parseInt(r, 10);
        if (n in t.colors && o >= 0 && o < 10)
            return {
                isSplittedColor: !0,
                key: n,
                shade: o
            }
    }
    return {
        isSplittedColor: !1
    }
}
function tx(e) {
    const t = qc(e)
      , n = xi(e)
      , r = Kg(e);
    return ({variant: o, color: i, gradient: l, primaryFallback: a})=>{
        const s = ex(i, e);
        switch (o) {
        case "light":
            return {
                border: "transparent",
                background: mr(t(i, e.colorScheme === "dark" ? 8 : 0, a, !1), e.colorScheme === "dark" ? .2 : 1),
                color: i === "dark" ? e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9] : t(i, e.colorScheme === "dark" ? 2 : n("light")),
                hover: mr(t(i, e.colorScheme === "dark" ? 7 : 1, a, !1), e.colorScheme === "dark" ? .25 : .65)
            };
        case "subtle":
            return {
                border: "transparent",
                background: "transparent",
                color: i === "dark" ? e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9] : t(i, e.colorScheme === "dark" ? 2 : n("light")),
                hover: mr(t(i, e.colorScheme === "dark" ? 8 : 0, a, !1), e.colorScheme === "dark" ? .2 : 1)
            };
        case "outline":
            return {
                border: t(i, e.colorScheme === "dark" ? 5 : n("light")),
                background: "transparent",
                color: t(i, e.colorScheme === "dark" ? 5 : n("light")),
                hover: e.colorScheme === "dark" ? mr(t(i, 5, a, !1), .05) : mr(t(i, 0, a, !1), .35)
            };
        case "default":
            return {
                border: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4],
                background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
                color: e.colorScheme === "dark" ? e.white : e.black,
                hover: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[0]
            };
        case "white":
            return {
                border: "transparent",
                background: e.white,
                color: t(i, n()),
                hover: null
            };
        case "transparent":
            return {
                border: "transparent",
                color: i === "dark" ? e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9] : t(i, e.colorScheme === "dark" ? 2 : n("light")),
                background: "transparent",
                hover: null
            };
        case "gradient":
            return {
                background: r(l),
                color: e.white,
                border: "transparent",
                hover: null
            };
        default:
            {
                const u = n()
                  , d = s.isSplittedColor ? s.shade : u
                  , f = s.isSplittedColor ? s.key : i;
                return {
                    border: "transparent",
                    background: t(f, d, a),
                    color: e.white,
                    hover: t(f, d === 9 ? 8 : d + 1)
                }
            }
        }
    }
}
function nx(e) {
    return t=>{
        const n = xi(e)(t);
        return e.colors[e.primaryColor][n]
    }
}
function rx(e) {
    return {
        "@media (hover: hover)": {
            "&:hover": e
        },
        "@media (hover: none)": {
            "&:active": e
        }
    }
}
function ox(e) {
    return ()=>({
        userSelect: "none",
        color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5]
    })
}
function ix(e) {
    return ()=>e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6]
}
const be = {
    fontStyles: Mw,
    themeColor: qc,
    focusStyles: Uw,
    linearGradient: Bw,
    radialGradient: Ww,
    smallerThan: Qw,
    largerThan: Vw,
    rgba: mr,
    cover: Xw,
    darken: qw,
    lighten: Jw,
    radius: Zw,
    variant: tx,
    primaryShade: xi,
    hover: rx,
    gradient: Kg,
    primaryColor: nx,
    placeholderStyles: ox,
    dimmed: ix
};
var lx = Object.defineProperty
  , ax = Object.defineProperties
  , sx = Object.getOwnPropertyDescriptors
  , zd = Object.getOwnPropertySymbols
  , ux = Object.prototype.hasOwnProperty
  , cx = Object.prototype.propertyIsEnumerable
  , Md = (e,t,n)=>t in e ? lx(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , fx = (e,t)=>{
    for (var n in t || (t = {}))
        ux.call(t, n) && Md(e, n, t[n]);
    if (zd)
        for (var n of zd(t))
            cx.call(t, n) && Md(e, n, t[n]);
    return e
}
  , dx = (e,t)=>ax(e, sx(t));
function Gg(e) {
    return dx(fx({}, e), {
        fn: {
            fontStyles: be.fontStyles(e),
            themeColor: be.themeColor(e),
            focusStyles: be.focusStyles(e),
            largerThan: be.largerThan(e),
            smallerThan: be.smallerThan(e),
            radialGradient: be.radialGradient,
            linearGradient: be.linearGradient,
            gradient: be.gradient(e),
            rgba: be.rgba,
            cover: be.cover,
            lighten: be.lighten,
            darken: be.darken,
            primaryShade: be.primaryShade(e),
            radius: be.radius(e),
            variant: be.variant(e),
            hover: be.hover,
            primaryColor: be.primaryColor(e),
            placeholderStyles: be.placeholderStyles(e),
            dimmed: be.dimmed(e)
        }
    })
}
const px = {
    dir: "ltr",
    primaryShade: {
        light: 6,
        dark: 8
    },
    focusRing: "auto",
    loader: "oval",
    colorScheme: "light",
    white: "#fff",
    black: "#000",
    defaultRadius: "sm",
    transitionTimingFunction: "ease",
    colors: zw,
    lineHeight: 1.55,
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    primaryColor: "blue",
    respectReducedMotion: !0,
    cursorType: "default",
    defaultGradient: {
        from: "indigo",
        to: "cyan",
        deg: 45
    },
    shadows: {
        xs: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",
        sm: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",
        md: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",
        lg: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",
        xl: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem"
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem"
    },
    radius: {
        xs: "0.125rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "2rem"
    },
    spacing: {
        xs: "0.625rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem"
    },
    breakpoints: {
        xs: "36em",
        sm: "48em",
        md: "62em",
        lg: "75em",
        xl: "88em"
    },
    headings: {
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
        fontWeight: 700,
        sizes: {
            h1: {
                fontSize: "2.125rem",
                lineHeight: 1.3,
                fontWeight: void 0
            },
            h2: {
                fontSize: "1.625rem",
                lineHeight: 1.35,
                fontWeight: void 0
            },
            h3: {
                fontSize: "1.375rem",
                lineHeight: 1.4,
                fontWeight: void 0
            },
            h4: {
                fontSize: "1.125rem",
                lineHeight: 1.45,
                fontWeight: void 0
            },
            h5: {
                fontSize: "1rem",
                lineHeight: 1.5,
                fontWeight: void 0
            },
            h6: {
                fontSize: "0.875rem",
                lineHeight: 1.5,
                fontWeight: void 0
            }
        }
    },
    other: {},
    components: {},
    activeStyles: {
        transform: "translateY(0.0625rem)"
    },
    datesLocale: "en",
    globalStyles: void 0,
    focusRingStyles: {
        styles: e=>({
            outlineOffset: "0.125rem",
            outline: `0.125rem solid ${e.colors[e.primaryColor][e.colorScheme === "dark" ? 7 : 5]}`
        }),
        resetStyles: ()=>({
            outline: "none"
        }),
        inputStyles: e=>({
            outline: "none",
            borderColor: e.colors[e.primaryColor][typeof e.primaryShade == "object" ? e.primaryShade[e.colorScheme] : e.primaryShade]
        })
    }
}
  , Zc = Gg(px);
function mx(e) {
    if (e.sheet)
        return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t]
}
function hx(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
}
var gx = function() {
    function e(n) {
        var r = this;
        this._insertTag = function(o) {
            var i;
            r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling,
            r.container.insertBefore(o, i),
            r.tags.push(o)
        }
        ,
        this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy,
        this.tags = [],
        this.ctr = 0,
        this.nonce = n.nonce,
        this.key = n.key,
        this.container = n.container,
        this.prepend = n.prepend,
        this.insertionPoint = n.insertionPoint,
        this.before = null
    }
    var t = e.prototype;
    return t.hydrate = function(r) {
        r.forEach(this._insertTag)
    }
    ,
    t.insert = function(r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(hx(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var i = mx(o);
            try {
                i.insertRule(r, i.cssRules.length)
            } catch {}
        } else
            o.appendChild(document.createTextNode(r));
        this.ctr++
    }
    ,
    t.flush = function() {
        this.tags.forEach(function(r) {
            return r.parentNode && r.parentNode.removeChild(r)
        }),
        this.tags = [],
        this.ctr = 0
    }
    ,
    e
}()
  , Be = "-ms-"
  , Kl = "-moz-"
  , q = "-webkit-"
  , Xg = "comm"
  , ef = "rule"
  , tf = "decl"
  , vx = "@import"
  , qg = "@keyframes"
  , yx = "@layer"
  , wx = Math.abs
  , Ma = String.fromCharCode
  , xx = Object.assign;
function Sx(e, t) {
    return ze(e, 0) ^ 45 ? (((t << 2 ^ ze(e, 0)) << 2 ^ ze(e, 1)) << 2 ^ ze(e, 2)) << 2 ^ ze(e, 3) : 0
}
function Jg(e) {
    return e.trim()
}
function _x(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function J(e, t, n) {
    return e.replace(t, n)
}
function Fu(e, t) {
    return e.indexOf(t)
}
function ze(e, t) {
    return e.charCodeAt(t) | 0
}
function ui(e, t, n) {
    return e.slice(t, n)
}
function Ht(e) {
    return e.length
}
function nf(e) {
    return e.length
}
function Yi(e, t) {
    return t.push(e),
    e
}
function Ox(e, t) {
    return e.map(t).join("")
}
var Aa = 1
  , Qr = 1
  , Zg = 0
  , nt = 0
  , _e = 0
  , Zr = "";
function Fa(e, t, n, r, o, i, l) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: Aa,
        column: Qr,
        length: l,
        return: ""
    }
}
function xo(e, t) {
    return xx(Fa("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}
function Px() {
    return _e
}
function bx() {
    return _e = nt > 0 ? ze(Zr, --nt) : 0,
    Qr--,
    _e === 10 && (Qr = 1,
    Aa--),
    _e
}
function st() {
    return _e = nt < Zg ? ze(Zr, nt++) : 0,
    Qr++,
    _e === 10 && (Qr = 1,
    Aa++),
    _e
}
function Kt() {
    return ze(Zr, nt)
}
function gl() {
    return nt
}
function Si(e, t) {
    return ui(Zr, e, t)
}
function ci(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function ev(e) {
    return Aa = Qr = 1,
    Zg = Ht(Zr = e),
    nt = 0,
    []
}
function tv(e) {
    return Zr = "",
    e
}
function vl(e) {
    return Jg(Si(nt - 1, Hu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Ex(e) {
    for (; (_e = Kt()) && _e < 33; )
        st();
    return ci(e) > 2 || ci(_e) > 3 ? "" : " "
}
function kx(e, t) {
    for (; --t && st() && !(_e < 48 || _e > 102 || _e > 57 && _e < 65 || _e > 70 && _e < 97); )
        ;
    return Si(e, gl() + (t < 6 && Kt() == 32 && st() == 32))
}
function Hu(e) {
    for (; st(); )
        switch (_e) {
        case e:
            return nt;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Hu(_e);
            break;
        case 40:
            e === 41 && Hu(e);
            break;
        case 92:
            st();
            break
        }
    return nt
}
function Cx(e, t) {
    for (; st() && e + _e !== 47 + 10; )
        if (e + _e === 42 + 42 && Kt() === 47)
            break;
    return "/*" + Si(t, nt - 1) + "*" + Ma(e === 47 ? e : st())
}
function Nx(e) {
    for (; !ci(Kt()); )
        st();
    return Si(e, nt)
}
function jx(e) {
    return tv(yl("", null, null, null, [""], e = ev(e), 0, [0], e))
}
function yl(e, t, n, r, o, i, l, a, s) {
    for (var u = 0, d = 0, f = l, g = 0, x = 0, w = 0, y = 1, S = 1, m = 1, p = 0, v = "", h = o, O = i, E = r, P = v; S; )
        switch (w = p,
        p = st()) {
        case 40:
            if (w != 108 && ze(P, f - 1) == 58) {
                Fu(P += J(vl(p), "&", "&\f"), "&\f") != -1 && (m = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            P += vl(p);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            P += Ex(w);
            break;
        case 92:
            P += kx(gl() - 1, 7);
            continue;
        case 47:
            switch (Kt()) {
            case 42:
            case 47:
                Yi(Rx(Cx(st(), gl()), t, n), s);
                break;
            default:
                P += "/"
            }
            break;
        case 123 * y:
            a[u++] = Ht(P) * m;
        case 125 * y:
        case 59:
        case 0:
            switch (p) {
            case 0:
            case 125:
                S = 0;
            case 59 + d:
                m == -1 && (P = J(P, /\f/g, "")),
                x > 0 && Ht(P) - f && Yi(x > 32 ? Fd(P + ";", r, n, f - 1) : Fd(J(P, " ", "") + ";", r, n, f - 2), s);
                break;
            case 59:
                P += ";";
            default:
                if (Yi(E = Ad(P, t, n, u, d, o, a, v, h = [], O = [], f), i),
                p === 123)
                    if (d === 0)
                        yl(P, t, E, E, h, i, f, a, O);
                    else
                        switch (g === 99 && ze(P, 3) === 110 ? 100 : g) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            yl(e, E, E, r && Yi(Ad(e, E, E, 0, 0, o, a, v, o, h = [], f), O), o, O, f, a, r ? h : O);
                            break;
                        default:
                            yl(P, E, E, E, [""], O, 0, a, O)
                        }
            }
            u = d = x = 0,
            y = m = 1,
            v = P = "",
            f = l;
            break;
        case 58:
            f = 1 + Ht(P),
            x = w;
        default:
            if (y < 1) {
                if (p == 123)
                    --y;
                else if (p == 125 && y++ == 0 && bx() == 125)
                    continue
            }
            switch (P += Ma(p),
            p * y) {
            case 38:
                m = d > 0 ? 1 : (P += "\f",
                -1);
                break;
            case 44:
                a[u++] = (Ht(P) - 1) * m,
                m = 1;
                break;
            case 64:
                Kt() === 45 && (P += vl(st())),
                g = Kt(),
                d = f = Ht(v = P += Nx(gl())),
                p++;
                break;
            case 45:
                w === 45 && Ht(P) == 2 && (y = 0)
            }
        }
    return i
}
function Ad(e, t, n, r, o, i, l, a, s, u, d) {
    for (var f = o - 1, g = o === 0 ? i : [""], x = nf(g), w = 0, y = 0, S = 0; w < r; ++w)
        for (var m = 0, p = ui(e, f + 1, f = wx(y = l[w])), v = e; m < x; ++m)
            (v = Jg(y > 0 ? g[m] + " " + p : J(p, /&\f/g, g[m]))) && (s[S++] = v);
    return Fa(e, t, n, o === 0 ? ef : a, s, u, d)
}
function Rx(e, t, n) {
    return Fa(e, t, n, Xg, Ma(Px()), ui(e, 2, -2), 0)
}
function Fd(e, t, n, r) {
    return Fa(e, t, n, tf, ui(e, 0, r), ui(e, r + 1, -1), r)
}
function Dr(e, t) {
    for (var n = "", r = nf(e), o = 0; o < r; o++)
        n += t(e[o], o, e, t) || "";
    return n
}
function $x(e, t, n, r) {
    switch (e.type) {
    case yx:
        if (e.children.length)
            break;
    case vx:
    case tf:
        return e.return = e.return || e.value;
    case Xg:
        return "";
    case qg:
        return e.return = e.value + "{" + Dr(e.children, r) + "}";
    case ef:
        e.value = e.props.join(",")
    }
    return Ht(n = Dr(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}
function Tx(e) {
    var t = nf(e);
    return function(n, r, o, i) {
        for (var l = "", a = 0; a < t; a++)
            l += e[a](n, r, o, i) || "";
        return l
    }
}
function Ix(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
var Hd = function(t) {
    var n = new WeakMap;
    return function(r) {
        if (n.has(r))
            return n.get(r);
        var o = t(r);
        return n.set(r, o),
        o
    }
};
function Dx(e) {
    var t = Object.create(null);
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)),
        t[n]
    }
}
var Lx = function(t, n, r) {
    for (var o = 0, i = 0; o = i,
    i = Kt(),
    o === 38 && i === 12 && (n[r] = 1),
    !ci(i); )
        st();
    return Si(t, nt)
}
  , zx = function(t, n) {
    var r = -1
      , o = 44;
    do
        switch (ci(o)) {
        case 0:
            o === 38 && Kt() === 12 && (n[r] = 1),
            t[r] += Lx(nt - 1, n, r);
            break;
        case 2:
            t[r] += vl(o);
            break;
        case 4:
            if (o === 44) {
                t[++r] = Kt() === 58 ? "&\f" : "",
                n[r] = t[r].length;
                break
            }
        default:
            t[r] += Ma(o)
        }
    while (o = st());
    return t
}
  , Mx = function(t, n) {
    return tv(zx(ev(t), n))
}
  , Ud = new WeakMap
  , Ax = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
            if (r = r.parent,
            !r)
                return;
        if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ud.get(r)) && !o) {
            Ud.set(t, !0);
            for (var i = [], l = Mx(n, i), a = r.props, s = 0, u = 0; s < l.length; s++)
                for (var d = 0; d < a.length; d++,
                u++)
                    t.props[u] = i[s] ? l[s].replace(/&\f/g, a[d]) : a[d] + " " + l[s]
        }
    }
}
  , Fx = function(t) {
    if (t.type === "decl") {
        var n = t.value;
        n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "",
        t.value = "")
    }
};
function nv(e, t) {
    switch (Sx(e, t)) {
    case 5103:
        return q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
        return q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return q + e + Kl + e + Be + e + e;
    case 6828:
    case 4268:
        return q + e + Be + e + e;
    case 6165:
        return q + e + Be + "flex-" + e + e;
    case 5187:
        return q + e + J(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + Be + "flex-$1$2") + e;
    case 5443:
        return q + e + Be + "flex-item-" + J(e, /flex-|-self/, "") + e;
    case 4675:
        return q + e + Be + "flex-line-pack" + J(e, /align-content|flex-|-self/, "") + e;
    case 5548:
        return q + e + Be + J(e, "shrink", "negative") + e;
    case 5292:
        return q + e + Be + J(e, "basis", "preferred-size") + e;
    case 6060:
        return q + "box-" + J(e, "-grow", "") + q + e + Be + J(e, "grow", "positive") + e;
    case 4554:
        return q + J(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    case 6187:
        return J(J(J(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), e, "") + e;
    case 5495:
    case 3959:
        return J(e, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
        return J(J(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + Be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + q + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return J(e, /(.+)-inline(.+)/, q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (Ht(e) - 1 - t > 6)
            switch (ze(e, t + 1)) {
            case 109:
                if (ze(e, t + 4) !== 45)
                    break;
            case 102:
                return J(e, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + Kl + (ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
            case 115:
                return ~Fu(e, "stretch") ? nv(J(e, "stretch", "fill-available"), t) + e : e
            }
        break;
    case 4949:
        if (ze(e, t + 1) !== 115)
            break;
    case 6444:
        switch (ze(e, Ht(e) - 3 - (~Fu(e, "!important") && 10))) {
        case 107:
            return J(e, ":", ":" + q) + e;
        case 101:
            return J(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + q + (ze(e, 14) === 45 ? "inline-" : "") + "box$3$1" + q + "$2$3$1" + Be + "$2box$3") + e
        }
        break;
    case 5936:
        switch (ze(e, t + 11)) {
        case 114:
            return q + e + Be + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
            return q + e + Be + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
            return q + e + Be + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e
        }
        return q + e + Be + e + e
    }
    return e
}
var Hx = function(t, n, r, o) {
    if (t.length > -1 && !t.return)
        switch (t.type) {
        case tf:
            t.return = nv(t.value, t.length);
            break;
        case qg:
            return Dr([xo(t, {
                value: J(t.value, "@", "@" + q)
            })], o);
        case ef:
            if (t.length)
                return Ox(t.props, function(i) {
                    switch (_x(i, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return Dr([xo(t, {
                            props: [J(i, /:(read-\w+)/, ":" + Kl + "$1")]
                        })], o);
                    case "::placeholder":
                        return Dr([xo(t, {
                            props: [J(i, /:(plac\w+)/, ":" + q + "input-$1")]
                        }), xo(t, {
                            props: [J(i, /:(plac\w+)/, ":" + Kl + "$1")]
                        }), xo(t, {
                            props: [J(i, /:(plac\w+)/, Be + "input-$1")]
                        })], o)
                    }
                    return ""
                })
        }
}
  , Ux = [Hx]
  , rv = function(t) {
    var n = t.key;
    if (n === "css") {
        var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(r, function(y) {
            var S = y.getAttribute("data-emotion");
            S.indexOf(" ") !== -1 && (document.head.appendChild(y),
            y.setAttribute("data-s", ""))
        })
    }
    var o = t.stylisPlugins || Ux, i = {}, l, a = [];
    l = t.container || document.head,
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(y) {
        for (var S = y.getAttribute("data-emotion").split(" "), m = 1; m < S.length; m++)
            i[S[m]] = !0;
        a.push(y)
    });
    var s, u = [Ax, Fx];
    {
        var d, f = [$x, Ix(function(y) {
            d.insert(y)
        })], g = Tx(u.concat(o, f)), x = function(S) {
            return Dr(jx(S), g)
        };
        s = function(S, m, p, v) {
            d = p,
            x(S ? S + "{" + m.styles + "}" : m.styles),
            v && (w.inserted[m.name] = !0)
        }
    }
    var w = {
        key: n,
        sheet: new gx({
            key: n,
            container: l,
            nonce: t.nonce,
            speedy: t.speedy,
            prepend: t.prepend,
            insertionPoint: t.insertionPoint
        }),
        nonce: t.nonce,
        inserted: i,
        registered: {},
        insert: s
    };
    return w.sheet.hydrate(a),
    w
};
function Uu() {
    return Uu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Uu.apply(this, arguments)
}
var ov = {
    exports: {}
}
  , oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te = typeof Symbol == "function" && Symbol.for
  , rf = Te ? Symbol.for("react.element") : 60103
  , of = Te ? Symbol.for("react.portal") : 60106
  , Ha = Te ? Symbol.for("react.fragment") : 60107
  , Ua = Te ? Symbol.for("react.strict_mode") : 60108
  , Ba = Te ? Symbol.for("react.profiler") : 60114
  , Wa = Te ? Symbol.for("react.provider") : 60109
  , Va = Te ? Symbol.for("react.context") : 60110
  , lf = Te ? Symbol.for("react.async_mode") : 60111
  , Qa = Te ? Symbol.for("react.concurrent_mode") : 60111
  , Ka = Te ? Symbol.for("react.forward_ref") : 60112
  , Ya = Te ? Symbol.for("react.suspense") : 60113
  , Bx = Te ? Symbol.for("react.suspense_list") : 60120
  , Ga = Te ? Symbol.for("react.memo") : 60115
  , Xa = Te ? Symbol.for("react.lazy") : 60116
  , Wx = Te ? Symbol.for("react.block") : 60121
  , Vx = Te ? Symbol.for("react.fundamental") : 60117
  , Qx = Te ? Symbol.for("react.responder") : 60118
  , Kx = Te ? Symbol.for("react.scope") : 60119;
function dt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case rf:
            switch (e = e.type,
            e) {
            case lf:
            case Qa:
            case Ha:
            case Ba:
            case Ua:
            case Ya:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case Va:
                case Ka:
                case Xa:
                case Ga:
                case Wa:
                    return e;
                default:
                    return t
                }
            }
        case of:
            return t
        }
    }
}
function iv(e) {
    return dt(e) === Qa
}
oe.AsyncMode = lf;
oe.ConcurrentMode = Qa;
oe.ContextConsumer = Va;
oe.ContextProvider = Wa;
oe.Element = rf;
oe.ForwardRef = Ka;
oe.Fragment = Ha;
oe.Lazy = Xa;
oe.Memo = Ga;
oe.Portal = of;
oe.Profiler = Ba;
oe.StrictMode = Ua;
oe.Suspense = Ya;
oe.isAsyncMode = function(e) {
    return iv(e) || dt(e) === lf
}
;
oe.isConcurrentMode = iv;
oe.isContextConsumer = function(e) {
    return dt(e) === Va
}
;
oe.isContextProvider = function(e) {
    return dt(e) === Wa
}
;
oe.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === rf
}
;
oe.isForwardRef = function(e) {
    return dt(e) === Ka
}
;
oe.isFragment = function(e) {
    return dt(e) === Ha
}
;
oe.isLazy = function(e) {
    return dt(e) === Xa
}
;
oe.isMemo = function(e) {
    return dt(e) === Ga
}
;
oe.isPortal = function(e) {
    return dt(e) === of
}
;
oe.isProfiler = function(e) {
    return dt(e) === Ba
}
;
oe.isStrictMode = function(e) {
    return dt(e) === Ua
}
;
oe.isSuspense = function(e) {
    return dt(e) === Ya
}
;
oe.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Ha || e === Qa || e === Ba || e === Ua || e === Ya || e === Bx || typeof e == "object" && e !== null && (e.$$typeof === Xa || e.$$typeof === Ga || e.$$typeof === Wa || e.$$typeof === Va || e.$$typeof === Ka || e.$$typeof === Vx || e.$$typeof === Qx || e.$$typeof === Kx || e.$$typeof === Wx)
}
;
oe.typeOf = dt;
ov.exports = oe;
var Yx = ov.exports
  , lv = Yx
  , Gx = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , Xx = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , av = {};
av[lv.ForwardRef] = Gx;
av[lv.Memo] = Xx;
var qx = !0;
function Jx(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function(o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " "
    }),
    r
}
var Zx = function(t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || qx === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
}
  , sv = function(t, n, r) {
    Zx(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
        var i = n;
        do
            t.insert(n === i ? "." + o : "", i, t.sheet, !0),
            i = i.next;
        while (i !== void 0)
    }
};
function eS(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r,
    o -= 4)
        n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24,
        n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16),
        n ^= n >>> 24,
        t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
    case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
        t ^= e.charCodeAt(r) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36)
}
var tS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}
  , nS = /[A-Z]|^ms/g
  , rS = /_EMO_([^_]+?)_([^]*?)_EMO_/g
  , uv = function(t) {
    return t.charCodeAt(1) === 45
}
  , Bd = function(t) {
    return t != null && typeof t != "boolean"
}
  , zs = Dx(function(e) {
    return uv(e) ? e : e.replace(nS, "-$&").toLowerCase()
})
  , Wd = function(t, n) {
    switch (t) {
    case "animation":
    case "animationName":
        if (typeof n == "string")
            return n.replace(rS, function(r, o, i) {
                return Ut = {
                    name: o,
                    styles: i,
                    next: Ut
                },
                o
            })
    }
    return tS[t] !== 1 && !uv(t) && typeof n == "number" && n !== 0 ? n + "px" : n
};
function fi(e, t, n) {
    if (n == null)
        return "";
    if (n.__emotion_styles !== void 0)
        return n;
    switch (typeof n) {
    case "boolean":
        return "";
    case "object":
        {
            if (n.anim === 1)
                return Ut = {
                    name: n.name,
                    styles: n.styles,
                    next: Ut
                },
                n.name;
            if (n.styles !== void 0) {
                var r = n.next;
                if (r !== void 0)
                    for (; r !== void 0; )
                        Ut = {
                            name: r.name,
                            styles: r.styles,
                            next: Ut
                        },
                        r = r.next;
                var o = n.styles + ";";
                return o
            }
            return oS(e, t, n)
        }
    case "function":
        {
            if (e !== void 0) {
                var i = Ut
                  , l = n(e);
                return Ut = i,
                fi(e, t, l)
            }
            break
        }
    }
    if (t == null)
        return n;
    var a = t[n];
    return a !== void 0 ? a : n
}
function oS(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var o = 0; o < n.length; o++)
            r += fi(e, t, n[o]) + ";";
    else
        for (var i in n) {
            var l = n[i];
            if (typeof l != "object")
                t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : Bd(l) && (r += zs(i) + ":" + Wd(i, l) + ";");
            else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
                for (var a = 0; a < l.length; a++)
                    Bd(l[a]) && (r += zs(i) + ":" + Wd(i, l[a]) + ";");
            else {
                var s = fi(e, t, l);
                switch (i) {
                case "animation":
                case "animationName":
                    {
                        r += zs(i) + ":" + s + ";";
                        break
                    }
                default:
                    r += i + "{" + s + "}"
                }
            }
        }
    return r
}
var Vd = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ut, af = function(t, n, r) {
    if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
        return t[0];
    var o = !0
      , i = "";
    Ut = void 0;
    var l = t[0];
    l == null || l.raw === void 0 ? (o = !1,
    i += fi(r, n, l)) : i += l[0];
    for (var a = 1; a < t.length; a++)
        i += fi(r, n, t[a]),
        o && (i += l[a]);
    Vd.lastIndex = 0;
    for (var s = "", u; (u = Vd.exec(i)) !== null; )
        s += "-" + u[1];
    var d = eS(i) + s;
    return {
        name: d,
        styles: i,
        next: Ut
    }
}, iS = Sl["useInsertionEffect"] ? Sl["useInsertionEffect"] : !1, Qd = iS || _.useLayoutEffect, cv = _.createContext(typeof HTMLElement < "u" ? rv({
    key: "css"
}) : null);
cv.Provider;
var lS = function(t) {
    return _.forwardRef(function(n, r) {
        var o = _.useContext(cv);
        return t(n, o, r)
    })
}
  , Bu = _.createContext({})
  , aS = function(t, n) {
    if (typeof n == "function") {
        var r = n(t);
        return r
    }
    return Uu({}, t, n)
}
  , sS = Hd(function(e) {
    return Hd(function(t) {
        return aS(e, t)
    })
})
  , uS = function(t) {
    var n = _.useContext(Bu);
    return t.theme !== n && (n = sS(n)(t.theme)),
    _.createElement(Bu.Provider, {
        value: n
    }, t.children)
}
  , _i = lS(function(e, t) {
    var n = e.styles
      , r = af([n], void 0, _.useContext(Bu))
      , o = _.useRef();
    return Qd(function() {
        var i = t.key + "-global"
          , l = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy
        })
          , a = !1
          , s = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
        return t.sheet.tags.length && (l.before = t.sheet.tags[0]),
        s !== null && (a = !0,
        s.setAttribute("data-emotion", i),
        l.hydrate([s])),
        o.current = [l, a],
        function() {
            l.flush()
        }
    }, [t]),
    Qd(function() {
        var i = o.current
          , l = i[0]
          , a = i[1];
        if (a) {
            i[1] = !1;
            return
        }
        if (r.next !== void 0 && sv(t, r.next, !0),
        l.tags.length) {
            var s = l.tags[l.tags.length - 1].nextElementSibling;
            l.before = s,
            l.flush()
        }
        t.insert("", r, l, !1)
    }, [t, r.name]),
    null
});
function cS() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return af(t)
}
var fS = Object.defineProperty
  , dS = Object.defineProperties
  , pS = Object.getOwnPropertyDescriptors
  , Kd = Object.getOwnPropertySymbols
  , mS = Object.prototype.hasOwnProperty
  , hS = Object.prototype.propertyIsEnumerable
  , Yd = (e,t,n)=>t in e ? fS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , gS = (e,t)=>{
    for (var n in t || (t = {}))
        mS.call(t, n) && Yd(e, n, t[n]);
    if (Kd)
        for (var n of Kd(t))
            hS.call(t, n) && Yd(e, n, t[n]);
    return e
}
  , vS = (e,t)=>dS(e, pS(t));
function yS({theme: e}) {
    return R.createElement(_i, {
        styles: {
            "*, *::before, *::after": {
                boxSizing: "border-box"
            },
            html: {
                colorScheme: e.colorScheme === "dark" ? "dark" : "light"
            },
            body: vS(gS({}, e.fn.fontStyles()), {
                backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
                color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
                lineHeight: e.lineHeight,
                fontSize: e.fontSizes.md,
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
            })
        }
    })
}
function So(e, t, n, r=D) {
    Object.keys(t).forEach(o=>{
        e[`--mantine-${n}-${o}`] = r(t[o])
    }
    )
}
function wS({theme: e}) {
    const t = {
        "--mantine-color-white": e.white,
        "--mantine-color-black": e.black,
        "--mantine-transition-timing-function": e.transitionTimingFunction,
        "--mantine-line-height": `${e.lineHeight}`,
        "--mantine-font-family": e.fontFamily,
        "--mantine-font-family-monospace": e.fontFamilyMonospace,
        "--mantine-font-family-headings": e.headings.fontFamily,
        "--mantine-heading-font-weight": `${e.headings.fontWeight}`
    };
    So(t, e.shadows, "shadow"),
    So(t, e.fontSizes, "font-size"),
    So(t, e.radius, "radius"),
    So(t, e.spacing, "spacing"),
    So(t, e.breakpoints, "breakpoints", tr),
    Object.keys(e.colors).forEach(r=>{
        e.colors[r].forEach((o,i)=>{
            t[`--mantine-color-${r}-${i}`] = o
        }
        )
    }
    );
    const n = e.headings.sizes;
    return Object.keys(n).forEach(r=>{
        t[`--mantine-${r}-font-size`] = n[r].fontSize,
        t[`--mantine-${r}-line-height`] = `${n[r].lineHeight}`
    }
    ),
    R.createElement(_i, {
        styles: {
            ":root": t
        }
    })
}
var xS = Object.defineProperty
  , SS = Object.defineProperties
  , _S = Object.getOwnPropertyDescriptors
  , Gd = Object.getOwnPropertySymbols
  , OS = Object.prototype.hasOwnProperty
  , PS = Object.prototype.propertyIsEnumerable
  , Xd = (e,t,n)=>t in e ? xS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , At = (e,t)=>{
    for (var n in t || (t = {}))
        OS.call(t, n) && Xd(e, n, t[n]);
    if (Gd)
        for (var n of Gd(t))
            PS.call(t, n) && Xd(e, n, t[n]);
    return e
}
  , Ms = (e,t)=>SS(e, _S(t));
function bS(e, t) {
    var n;
    if (!t)
        return e;
    const r = Object.keys(e).reduce((o,i)=>{
        if (i === "headings" && t.headings) {
            const l = t.headings.sizes ? Object.keys(e.headings.sizes).reduce((a,s)=>(a[s] = At(At({}, e.headings.sizes[s]), t.headings.sizes[s]),
            a), {}) : e.headings.sizes;
            return Ms(At({}, o), {
                headings: Ms(At(At({}, e.headings), t.headings), {
                    sizes: l
                })
            })
        }
        if (i === "breakpoints" && t.breakpoints) {
            const l = At(At({}, e.breakpoints), t.breakpoints);
            return Ms(At({}, o), {
                breakpoints: Object.fromEntries(Object.entries(l).sort((a,s)=>cn(a[1]) - cn(s[1])))
            })
        }
        return o[i] = typeof t[i] == "object" ? At(At({}, e[i]), t[i]) : typeof t[i] == "number" || typeof t[i] == "boolean" || typeof t[i] == "function" ? t[i] : t[i] || e[i],
        o
    }
    , {});
    if (t != null && t.fontFamily && !((n = t == null ? void 0 : t.headings) != null && n.fontFamily) && (r.headings.fontFamily = t.fontFamily),
    !(r.primaryColor in r.colors))
        throw new Error("MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");
    return r
}
function ES(e, t) {
    return Gg(bS(e, t))
}
function fv(e) {
    return Object.keys(e).reduce((t,n)=>(e[n] !== void 0 && (t[n] = e[n]),
    t), {})
}
const kS = {
    html: {
        fontFamily: "sans-serif",
        lineHeight: "1.15",
        textSizeAdjust: "100%"
    },
    body: {
        margin: 0
    },
    "article, aside, footer, header, nav, section, figcaption, figure, main": {
        display: "block"
    },
    h1: {
        fontSize: "2em"
    },
    hr: {
        boxSizing: "content-box",
        height: 0,
        overflow: "visible"
    },
    pre: {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
    },
    a: {
        background: "transparent",
        textDecorationSkip: "objects"
    },
    "a:active, a:hover": {
        outlineWidth: 0
    },
    "abbr[title]": {
        borderBottom: "none",
        textDecoration: "underline"
    },
    "b, strong": {
        fontWeight: "bolder"
    },
    "code, kbp, samp": {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
    },
    dfn: {
        fontStyle: "italic"
    },
    mark: {
        backgroundColor: "#ff0",
        color: "#000"
    },
    small: {
        fontSize: "80%"
    },
    "sub, sup": {
        fontSize: "75%",
        lineHeight: 0,
        position: "relative",
        verticalAlign: "baseline"
    },
    sup: {
        top: "-0.5em"
    },
    sub: {
        bottom: "-0.25em"
    },
    "audio, video": {
        display: "inline-block"
    },
    "audio:not([controls])": {
        display: "none",
        height: 0
    },
    img: {
        borderStyle: "none",
        verticalAlign: "middle"
    },
    "svg:not(:root)": {
        overflow: "hidden"
    },
    "button, input, optgroup, select, textarea": {
        fontFamily: "sans-serif",
        fontSize: "100%",
        lineHeight: "1.15",
        margin: 0
    },
    "button, input": {
        overflow: "visible"
    },
    "button, select": {
        textTransform: "none"
    },
    "button, [type=reset], [type=submit]": {
        WebkitAppearance: "button"
    },
    "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner": {
        borderStyle: "none",
        padding: 0
    },
    "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring": {
        outline: `${D(1)} dotted ButtonText`
    },
    legend: {
        boxSizing: "border-box",
        color: "inherit",
        display: "table",
        maxWidth: "100%",
        padding: 0,
        whiteSpace: "normal"
    },
    progress: {
        display: "inline-block",
        verticalAlign: "baseline"
    },
    textarea: {
        overflow: "auto"
    },
    "[type=checkbox], [type=radio]": {
        boxSizing: "border-box",
        padding: 0
    },
    "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button": {
        height: "auto"
    },
    "[type=search]": {
        appearance: "none"
    },
    "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration": {
        appearance: "none"
    },
    "::-webkit-file-upload-button": {
        appearance: "button",
        font: "inherit"
    },
    "details, menu": {
        display: "block"
    },
    summary: {
        display: "list-item"
    },
    canvas: {
        display: "inline-block"
    },
    template: {
        display: "none"
    }
};
function CS() {
    return R.createElement(_i, {
        styles: kS
    })
}
var NS = Object.defineProperty
  , qd = Object.getOwnPropertySymbols
  , jS = Object.prototype.hasOwnProperty
  , RS = Object.prototype.propertyIsEnumerable
  , Jd = (e,t,n)=>t in e ? NS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Uo = (e,t)=>{
    for (var n in t || (t = {}))
        jS.call(t, n) && Jd(e, n, t[n]);
    if (qd)
        for (var n of qd(t))
            RS.call(t, n) && Jd(e, n, t[n]);
    return e
}
;
const Yl = _.createContext({
    theme: Zc
});
function Dt() {
    var e;
    return ((e = _.useContext(Yl)) == null ? void 0 : e.theme) || Zc
}
function $S(e) {
    const t = Dt()
      , n = r=>{
        var o, i, l, a;
        return {
            styles: ((o = t.components[r]) == null ? void 0 : o.styles) || {},
            classNames: ((i = t.components[r]) == null ? void 0 : i.classNames) || {},
            variants: (l = t.components[r]) == null ? void 0 : l.variants,
            sizes: (a = t.components[r]) == null ? void 0 : a.sizes
        }
    }
    ;
    return Array.isArray(e) ? e.map(n) : [n(e)]
}
function dv() {
    var e;
    return (e = _.useContext(Yl)) == null ? void 0 : e.emotionCache
}
function rt(e, t, n) {
    var r;
    const o = Dt()
      , i = (r = o.components[e]) == null ? void 0 : r.defaultProps
      , l = typeof i == "function" ? i(o) : i;
    return Uo(Uo(Uo({}, t), l), fv(n))
}
function pv({theme: e, emotionCache: t, withNormalizeCSS: n=!1, withGlobalStyles: r=!1, withCSSVariables: o=!1, inherit: i=!1, children: l}) {
    const a = _.useContext(Yl)
      , s = ES(Zc, i ? Uo(Uo({}, a.theme), e) : e);
    return R.createElement(uS, {
        theme: s
    }, R.createElement(Yl.Provider, {
        value: {
            theme: s,
            emotionCache: t
        }
    }, n && R.createElement(CS, null), r && R.createElement(yS, {
        theme: s
    }), o && R.createElement(wS, {
        theme: s
    }), typeof s.globalStyles == "function" && R.createElement(_i, {
        styles: s.globalStyles(s)
    }), l))
}
pv.displayName = "@mantine/core/MantineProvider";
const TS = {
    app: 100,
    modal: 200,
    popover: 300,
    overlay: 400,
    max: 9999
};
function mv(e) {
    return TS[e]
}
function IS(e, t) {
    const n = _.useRef();
    return (!n.current || t.length !== n.current.prevDeps.length || n.current.prevDeps.map((r,o)=>r === t[o]).indexOf(!1) >= 0) && (n.current = {
        v: e(),
        prevDeps: [...t]
    }),
    n.current.v
}
const DS = rv({
    key: "mantine",
    prepend: !0
});
function LS() {
    return dv() || DS
}
var zS = Object.defineProperty
  , Zd = Object.getOwnPropertySymbols
  , MS = Object.prototype.hasOwnProperty
  , AS = Object.prototype.propertyIsEnumerable
  , ep = (e,t,n)=>t in e ? zS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , FS = (e,t)=>{
    for (var n in t || (t = {}))
        MS.call(t, n) && ep(e, n, t[n]);
    if (Zd)
        for (var n of Zd(t))
            AS.call(t, n) && ep(e, n, t[n]);
    return e
}
;
const As = "ref";
function HS(e) {
    let t;
    if (e.length !== 1)
        return {
            args: e,
            ref: t
        };
    const [n] = e;
    if (!(n instanceof Object))
        return {
            args: e,
            ref: t
        };
    if (!(As in n))
        return {
            args: e,
            ref: t
        };
    t = n[As];
    const r = FS({}, n);
    return delete r[As],
    {
        args: [r],
        ref: t
    }
}
const {cssFactory: US} = (()=>{
    function e(n, r, o) {
        const i = []
          , l = Jx(n, i, o);
        return i.length < 2 ? o : l + r(i)
    }
    function t(n) {
        const {cache: r} = n
          , o = (...l)=>{
            const {ref: a, args: s} = HS(l)
              , u = af(s, r.registered);
            return sv(r, u, !1),
            `${r.key}-${u.name}${a === void 0 ? "" : ` ${a}`}`
        }
        ;
        return {
            css: o,
            cx: (...l)=>e(r.registered, o, Vg(l))
        }
    }
    return {
        cssFactory: t
    }
}
)();
function hv() {
    const e = LS();
    return IS(()=>US({
        cache: e
    }), [e])
}
function BS({cx: e, classes: t, context: n, classNames: r, name: o, cache: i}) {
    const l = n.reduce((a,s)=>(Object.keys(s.classNames).forEach(u=>{
        typeof a[u] != "string" ? a[u] = `${s.classNames[u]}` : a[u] = `${a[u]} ${s.classNames[u]}`
    }
    ),
    a), {});
    return Object.keys(t).reduce((a,s)=>(a[s] = e(t[s], l[s], r != null && r[s], Array.isArray(o) ? o.filter(Boolean).map(u=>`${(i == null ? void 0 : i.key) || "mantine"}-${u}-${s}`).join(" ") : o ? `${(i == null ? void 0 : i.key) || "mantine"}-${o}-${s}` : null),
    a), {})
}
var WS = Object.defineProperty
  , tp = Object.getOwnPropertySymbols
  , VS = Object.prototype.hasOwnProperty
  , QS = Object.prototype.propertyIsEnumerable
  , np = (e,t,n)=>t in e ? WS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Fs = (e,t)=>{
    for (var n in t || (t = {}))
        VS.call(t, n) && np(e, n, t[n]);
    if (tp)
        for (var n of tp(t))
            QS.call(t, n) && np(e, n, t[n]);
    return e
}
;
function Wu(e, t) {
    return t && Object.keys(t).forEach(n=>{
        e[n] ? e[n] = Fs(Fs({}, e[n]), t[n]) : e[n] = Fs({}, t[n])
    }
    ),
    e
}
function rp(e, t, n, r) {
    const o = i=>typeof i == "function" ? i(t, n || {}, r) : i || {};
    return Array.isArray(e) ? e.map(i=>o(i.styles)).reduce((i,l)=>Wu(i, l), {}) : o(e)
}
function KS({ctx: e, theme: t, params: n, variant: r, size: o}) {
    return e.reduce((i,l)=>(l.variants && r in l.variants && Wu(i, l.variants[r](t, n, {
        variant: r,
        size: o
    })),
    l.sizes && o in l.sizes && Wu(i, l.sizes[o](t, n, {
        variant: r,
        size: o
    })),
    i), {})
}
function eo(e) {
    const t = typeof e == "function" ? e : ()=>e;
    function n(r, o) {
        const i = Dt()
          , l = $S(o == null ? void 0 : o.name)
          , a = dv()
          , s = {
            variant: o == null ? void 0 : o.variant,
            size: o == null ? void 0 : o.size
        }
          , {css: u, cx: d} = hv()
          , f = t(i, r, s)
          , g = rp(o == null ? void 0 : o.styles, i, r, s)
          , x = rp(l, i, r, s)
          , w = KS({
            ctx: l,
            theme: i,
            params: r,
            variant: o == null ? void 0 : o.variant,
            size: o == null ? void 0 : o.size
        })
          , y = Object.fromEntries(Object.keys(f).map(S=>{
            const m = d({
                [u(f[S])]: !(o != null && o.unstyled)
            }, u(w[S]), u(x[S]), u(g[S]));
            return [S, m]
        }
        ));
        return {
            classes: BS({
                cx: d,
                classes: y,
                context: l,
                classNames: o == null ? void 0 : o.classNames,
                name: o == null ? void 0 : o.name,
                cache: a
            }),
            cx: d,
            theme: i
        }
    }
    return n
}
function YS({styles: e}) {
    const t = Dt();
    return R.createElement(_i, {
        styles: cS(typeof e == "function" ? e(t) : e)
    })
}
var GS = Object.defineProperty
  , XS = Object.defineProperties
  , qS = Object.getOwnPropertyDescriptors
  , op = Object.getOwnPropertySymbols
  , JS = Object.prototype.hasOwnProperty
  , ZS = Object.prototype.propertyIsEnumerable
  , ip = (e,t,n)=>t in e ? GS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , _o = (e,t)=>{
    for (var n in t || (t = {}))
        JS.call(t, n) && ip(e, n, t[n]);
    if (op)
        for (var n of op(t))
            ZS.call(t, n) && ip(e, n, t[n]);
    return e
}
  , Oo = (e,t)=>XS(e, qS(t));
const Po = {
    in: {
        opacity: 1,
        transform: "scale(1)"
    },
    out: {
        opacity: 0,
        transform: `scale(.9) translateY(${D(10)})`
    },
    transitionProperty: "transform, opacity"
}
  , Gi = {
    fade: {
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        },
        transitionProperty: "opacity"
    },
    scale: {
        in: {
            opacity: 1,
            transform: "scale(1)"
        },
        out: {
            opacity: 0,
            transform: "scale(0)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "scale-y": {
        in: {
            opacity: 1,
            transform: "scaleY(1)"
        },
        out: {
            opacity: 0,
            transform: "scaleY(0)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "scale-x": {
        in: {
            opacity: 1,
            transform: "scaleX(1)"
        },
        out: {
            opacity: 0,
            transform: "scaleX(0)"
        },
        common: {
            transformOrigin: "left"
        },
        transitionProperty: "transform, opacity"
    },
    "skew-up": {
        in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
        },
        out: {
            opacity: 0,
            transform: `translateY(-${D(20)}) skew(-10deg, -5deg)`
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "skew-down": {
        in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
        },
        out: {
            opacity: 0,
            transform: `translateY(${D(20)}) skew(-10deg, -5deg)`
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "rotate-left": {
        in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
        },
        out: {
            opacity: 0,
            transform: `translateY(${D(20)}) rotate(-5deg)`
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "rotate-right": {
        in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
        },
        out: {
            opacity: 0,
            transform: `translateY(${D(20)}) rotate(5deg)`
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-down": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(-100%)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-up": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(100%)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-left": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(100%)"
        },
        common: {
            transformOrigin: "left"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-right": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(-100%)"
        },
        common: {
            transformOrigin: "right"
        },
        transitionProperty: "transform, opacity"
    },
    pop: Oo(_o({}, Po), {
        common: {
            transformOrigin: "center center"
        }
    }),
    "pop-bottom-left": Oo(_o({}, Po), {
        common: {
            transformOrigin: "bottom left"
        }
    }),
    "pop-bottom-right": Oo(_o({}, Po), {
        common: {
            transformOrigin: "bottom right"
        }
    }),
    "pop-top-left": Oo(_o({}, Po), {
        common: {
            transformOrigin: "top left"
        }
    }),
    "pop-top-right": Oo(_o({}, Po), {
        common: {
            transformOrigin: "top right"
        }
    })
}
  , lp = ["mousedown", "touchstart"];
function e_(e, t, n) {
    const r = _.useRef();
    return _.useEffect(()=>{
        const o = i=>{
            const {target: l} = i ?? {};
            if (Array.isArray(n)) {
                const a = (l == null ? void 0 : l.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(l) && l.tagName !== "HTML";
                n.every(u=>!!u && !i.composedPath().includes(u)) && !a && e()
            } else
                r.current && !r.current.contains(l) && e()
        }
        ;
        return (t || lp).forEach(i=>document.addEventListener(i, o)),
        ()=>{
            (t || lp).forEach(i=>document.removeEventListener(i, o))
        }
    }
    , [r, e, n]),
    r
}
function t_(e, t) {
    try {
        return e.addEventListener("change", t),
        ()=>e.removeEventListener("change", t)
    } catch {
        return e.addListener(t),
        ()=>e.removeListener(t)
    }
}
function n_(e, t) {
    return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia"in window ? window.matchMedia(e).matches : !1
}
function r_(e, t, {getInitialValueInEffect: n}={
    getInitialValueInEffect: !0
}) {
    const [r,o] = _.useState(n ? t : n_(e, t))
      , i = _.useRef();
    return _.useEffect(()=>{
        if ("matchMedia"in window)
            return i.current = window.matchMedia(e),
            o(i.current.matches),
            t_(i.current, l=>o(l.matches))
    }
    , [e]),
    r
}
const gv = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
function nr(e, t) {
    const n = _.useRef(!1);
    _.useEffect(()=>()=>{
        n.current = !1
    }
    , []),
    _.useEffect(()=>{
        if (n.current)
            return e();
        n.current = !0
    }
    , t)
}
function o_({opened: e, shouldReturnFocus: t=!0}) {
    const n = _.useRef()
      , r = ()=>{
        var o;
        n.current && "focus"in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({
            preventScroll: !0
        }))
    }
    ;
    return nr(()=>{
        let o = -1;
        const i = l=>{
            l.key === "Tab" && window.clearTimeout(o)
        }
        ;
        return document.addEventListener("keydown", i),
        e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)),
        ()=>{
            window.clearTimeout(o),
            document.removeEventListener("keydown", i)
        }
    }
    , [e, t]),
    r
}
const i_ = /input|select|textarea|button|object/
  , vv = "a, input, select, textarea, button, object, [tabindex]";
function l_(e) {
    return e.style.display === "none"
}
function a_(e) {
    if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
        return !1;
    let n = e;
    for (; n && !(n === document.body || n.nodeType === 11); ) {
        if (l_(n))
            return !1;
        n = n.parentNode
    }
    return !0
}
function yv(e) {
    let t = e.getAttribute("tabindex");
    return t === null && (t = void 0),
    parseInt(t, 10)
}
function Vu(e) {
    const t = e.nodeName.toLowerCase()
      , n = !Number.isNaN(yv(e));
    return (i_.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && a_(e)
}
function wv(e) {
    const t = yv(e);
    return (Number.isNaN(t) || t >= 0) && Vu(e)
}
function s_(e) {
    return Array.from(e.querySelectorAll(vv)).filter(wv)
}
function u_(e, t) {
    const n = s_(e);
    if (!n.length) {
        t.preventDefault();
        return
    }
    const r = n[t.shiftKey ? 0 : n.length - 1]
      , o = e.getRootNode();
    if (!(r === o.activeElement || e === o.activeElement))
        return;
    t.preventDefault();
    const l = n[t.shiftKey ? n.length - 1 : 0];
    l && l.focus()
}
function xv() {
    return `mantine-${Math.random().toString(36).slice(2, 11)}`
}
function c_(e, t="body > :not(script)") {
    const n = xv()
      , r = Array.from(document.querySelectorAll(t)).map(o=>{
        var i;
        if ((i = o == null ? void 0 : o.shadowRoot) != null && i.contains(e) || o.contains(e))
            return;
        const l = o.getAttribute("aria-hidden")
          , a = o.getAttribute("data-hidden")
          , s = o.getAttribute("data-focus-id");
        return o.setAttribute("data-focus-id", n),
        l === null || l === "false" ? o.setAttribute("aria-hidden", "true") : !a && !s && o.setAttribute("data-hidden", l),
        {
            node: o,
            ariaHidden: a || null
        }
    }
    );
    return ()=>{
        r.forEach(o=>{
            !o || n !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden),
            o.node.removeAttribute("data-focus-id"),
            o.node.removeAttribute("data-hidden"))
        }
        )
    }
}
function f_(e=!0) {
    const t = _.useRef()
      , n = _.useRef(null)
      , r = i=>{
        let l = i.querySelector("[data-autofocus]");
        if (!l) {
            const a = Array.from(i.querySelectorAll(vv));
            l = a.find(wv) || a.find(Vu) || null,
            !l && Vu(i) && (l = i)
        }
        l && l.focus({
            preventScroll: !0
        })
    }
      , o = _.useCallback(i=>{
        if (e) {
            if (i === null) {
                n.current && (n.current(),
                n.current = null);
                return
            }
            n.current = c_(i),
            t.current !== i && (i ? (setTimeout(()=>{
                i.getRootNode() && r(i)
            }
            ),
            t.current = i) : t.current = null)
        }
    }
    , [e]);
    return _.useEffect(()=>{
        if (!e)
            return;
        t.current && setTimeout(()=>r(t.current));
        const i = l=>{
            l.key === "Tab" && t.current && u_(t.current, l)
        }
        ;
        return document.addEventListener("keydown", i),
        ()=>{
            document.removeEventListener("keydown", i),
            n.current && n.current()
        }
    }
    , [e]),
    o
}
const d_ = R["useId".toString()] || (()=>{}
);
function p_() {
    const e = d_();
    return e ? `mantine-${e.replace(/:/g, "")}` : ""
}
function m_(e) {
    const t = p_()
      , [n,r] = _.useState(t);
    return gv(()=>{
        r(xv())
    }
    , []),
    typeof e == "string" ? e : typeof window > "u" ? t : n
}
function h_(e, t) {
    typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current"in e && (e.current = t)
}
function Sv(...e) {
    return t=>{
        e.forEach(n=>h_(n, t))
    }
}
function _v(...e) {
    return _.useCallback(Sv(...e), e)
}
function g_({value: e, defaultValue: t, finalValue: n, onChange: r=()=>{}
}) {
    const [o,i] = _.useState(t !== void 0 ? t : n)
      , l = a=>{
        i(a),
        r == null || r(a)
    }
    ;
    return e !== void 0 ? [e, r, !0] : [o, l, !1]
}
function Ov(e, t) {
    return r_("(prefers-reduced-motion: reduce)", e, t)
}
function v_(e=!1, t) {
    const {onOpen: n, onClose: r} = t || {}
      , [o,i] = _.useState(e)
      , l = _.useCallback(()=>{
        i(u=>u || (n == null || n(),
        !0))
    }
    , [n])
      , a = _.useCallback(()=>{
        i(u=>u && (r == null || r(),
        !1))
    }
    , [r])
      , s = _.useCallback(()=>{
        o ? a() : l()
    }
    , [a, l, o]);
    return [o, {
        open: l,
        close: a,
        toggle: s
    }]
}
var ap = Object.getOwnPropertySymbols
  , y_ = Object.prototype.hasOwnProperty
  , w_ = Object.prototype.propertyIsEnumerable
  , x_ = (e,t)=>{
    var n = {};
    for (var r in e)
        y_.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ap)
        for (var r of ap(e))
            t.indexOf(r) < 0 && w_.call(e, r) && (n[r] = e[r]);
    return n
}
;
function Pv(e) {
    const t = e
      , {m: n, mx: r, my: o, mt: i, mb: l, ml: a, mr: s, p: u, px: d, py: f, pt: g, pb: x, pl: w, pr: y, bg: S, c: m, opacity: p, ff: v, fz: h, fw: O, lts: E, ta: P, lh: N, fs: z, tt: T, td: H, w: F, miw: ee, maw: ce, h: ae, mih: ne, mah: ye, bgsz: $, bgp: M, bgr: U, bga: te, pos: se, top: pt, left: ie, bottom: ot, right: Xe, inset: Lt, display: mt} = t
      , lo = x_(t, ["m", "mx", "my", "mt", "mb", "ml", "mr", "p", "px", "py", "pt", "pb", "pl", "pr", "bg", "c", "opacity", "ff", "fz", "fw", "lts", "ta", "lh", "fs", "tt", "td", "w", "miw", "maw", "h", "mih", "mah", "bgsz", "bgp", "bgr", "bga", "pos", "top", "left", "bottom", "right", "inset", "display"]);
    return {
        systemStyles: fv({
            m: n,
            mx: r,
            my: o,
            mt: i,
            mb: l,
            ml: a,
            mr: s,
            p: u,
            px: d,
            py: f,
            pt: g,
            pb: x,
            pl: w,
            pr: y,
            bg: S,
            c: m,
            opacity: p,
            ff: v,
            fz: h,
            fw: O,
            lts: E,
            ta: P,
            lh: N,
            fs: z,
            tt: T,
            td: H,
            w: F,
            miw: ee,
            maw: ce,
            h: ae,
            mih: ne,
            mah: ye,
            bgsz: $,
            bgp: M,
            bgr: U,
            bga: te,
            pos: se,
            top: pt,
            left: ie,
            bottom: ot,
            right: Xe,
            inset: Lt,
            display: mt
        }),
        rest: lo
    }
}
function S_(e, t) {
    const n = Object.keys(e).filter(r=>r !== "base").sort((r,o)=>cn(Re({
        size: r,
        sizes: t.breakpoints
    })) - cn(Re({
        size: o,
        sizes: t.breakpoints
    })));
    return "base"in e ? ["base", ...n] : n
}
function __({value: e, theme: t, getValue: n, property: r}) {
    if (e == null)
        return;
    if (typeof e == "object")
        return S_(e, t).reduce((l,a)=>{
            if (a === "base" && e.base !== void 0) {
                const u = n(e.base, t);
                return Array.isArray(r) ? (r.forEach(d=>{
                    l[d] = u
                }
                ),
                l) : (l[r] = u,
                l)
            }
            const s = n(e[a], t);
            return Array.isArray(r) ? (l[t.fn.largerThan(a)] = {},
            r.forEach(u=>{
                l[t.fn.largerThan(a)][u] = s
            }
            ),
            l) : (l[t.fn.largerThan(a)] = {
                [r]: s
            },
            l)
        }
        , {});
    const o = n(e, t);
    return Array.isArray(r) ? r.reduce((i,l)=>(i[l] = o,
    i), {}) : {
        [r]: o
    }
}
function O_(e, t) {
    return e === "dimmed" ? t.colorScheme === "dark" ? t.colors.dark[2] : t.colors.gray[6] : t.fn.variant({
        variant: "filled",
        color: e,
        primaryFallback: !1
    }).background
}
function P_(e) {
    return D(e)
}
function b_(e) {
    return e
}
function E_(e, t) {
    return Re({
        size: e,
        sizes: t.fontSizes
    })
}
const k_ = ["-xs", "-sm", "-md", "-lg", "-xl"];
function C_(e, t) {
    return k_.includes(e) ? `calc(${Re({
        size: e.replace("-", ""),
        sizes: t.spacing
    })} * -1)` : Re({
        size: e,
        sizes: t.spacing
    })
}
const N_ = {
    identity: b_,
    color: O_,
    size: P_,
    fontSize: E_,
    spacing: C_
}
  , j_ = {
    m: {
        type: "spacing",
        property: "margin"
    },
    mt: {
        type: "spacing",
        property: "marginTop"
    },
    mb: {
        type: "spacing",
        property: "marginBottom"
    },
    ml: {
        type: "spacing",
        property: "marginLeft"
    },
    mr: {
        type: "spacing",
        property: "marginRight"
    },
    mx: {
        type: "spacing",
        property: ["marginRight", "marginLeft"]
    },
    my: {
        type: "spacing",
        property: ["marginTop", "marginBottom"]
    },
    p: {
        type: "spacing",
        property: "padding"
    },
    pt: {
        type: "spacing",
        property: "paddingTop"
    },
    pb: {
        type: "spacing",
        property: "paddingBottom"
    },
    pl: {
        type: "spacing",
        property: "paddingLeft"
    },
    pr: {
        type: "spacing",
        property: "paddingRight"
    },
    px: {
        type: "spacing",
        property: ["paddingRight", "paddingLeft"]
    },
    py: {
        type: "spacing",
        property: ["paddingTop", "paddingBottom"]
    },
    bg: {
        type: "color",
        property: "background"
    },
    c: {
        type: "color",
        property: "color"
    },
    opacity: {
        type: "identity",
        property: "opacity"
    },
    ff: {
        type: "identity",
        property: "fontFamily"
    },
    fz: {
        type: "fontSize",
        property: "fontSize"
    },
    fw: {
        type: "identity",
        property: "fontWeight"
    },
    lts: {
        type: "size",
        property: "letterSpacing"
    },
    ta: {
        type: "identity",
        property: "textAlign"
    },
    lh: {
        type: "identity",
        property: "lineHeight"
    },
    fs: {
        type: "identity",
        property: "fontStyle"
    },
    tt: {
        type: "identity",
        property: "textTransform"
    },
    td: {
        type: "identity",
        property: "textDecoration"
    },
    w: {
        type: "spacing",
        property: "width"
    },
    miw: {
        type: "spacing",
        property: "minWidth"
    },
    maw: {
        type: "spacing",
        property: "maxWidth"
    },
    h: {
        type: "spacing",
        property: "height"
    },
    mih: {
        type: "spacing",
        property: "minHeight"
    },
    mah: {
        type: "spacing",
        property: "maxHeight"
    },
    bgsz: {
        type: "size",
        property: "backgroundSize"
    },
    bgp: {
        type: "identity",
        property: "backgroundPosition"
    },
    bgr: {
        type: "identity",
        property: "backgroundRepeat"
    },
    bga: {
        type: "identity",
        property: "backgroundAttachment"
    },
    pos: {
        type: "identity",
        property: "position"
    },
    top: {
        type: "identity",
        property: "top"
    },
    left: {
        type: "size",
        property: "left"
    },
    bottom: {
        type: "size",
        property: "bottom"
    },
    right: {
        type: "size",
        property: "right"
    },
    inset: {
        type: "size",
        property: "inset"
    },
    display: {
        type: "identity",
        property: "display"
    }
};
var R_ = Object.defineProperty
  , sp = Object.getOwnPropertySymbols
  , $_ = Object.prototype.hasOwnProperty
  , T_ = Object.prototype.propertyIsEnumerable
  , up = (e,t,n)=>t in e ? R_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , cp = (e,t)=>{
    for (var n in t || (t = {}))
        $_.call(t, n) && up(e, n, t[n]);
    if (sp)
        for (var n of sp(t))
            T_.call(t, n) && up(e, n, t[n]);
    return e
}
;
function fp(e, t, n=j_) {
    return Object.keys(n).reduce((o,i)=>(i in e && e[i] !== void 0 && o.push(__({
        value: e[i],
        getValue: N_[n[i].type],
        property: n[i].property,
        theme: t
    })),
    o), []).reduce((o,i)=>(Object.keys(i).forEach(l=>{
        typeof i[l] == "object" && i[l] !== null && l in o ? o[l] = cp(cp({}, o[l]), i[l]) : o[l] = i[l]
    }
    ),
    o), {})
}
function dp(e, t) {
    return typeof e == "function" ? e(t) : e
}
function I_(e, t, n) {
    const r = Dt()
      , {css: o, cx: i} = hv();
    return Array.isArray(e) ? i(n, o(fp(t, r)), e.map(l=>o(dp(l, r)))) : i(n, o(dp(e, r)), o(fp(t, r)))
}
var D_ = Object.defineProperty
  , Gl = Object.getOwnPropertySymbols
  , bv = Object.prototype.hasOwnProperty
  , Ev = Object.prototype.propertyIsEnumerable
  , pp = (e,t,n)=>t in e ? D_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , L_ = (e,t)=>{
    for (var n in t || (t = {}))
        bv.call(t, n) && pp(e, n, t[n]);
    if (Gl)
        for (var n of Gl(t))
            Ev.call(t, n) && pp(e, n, t[n]);
    return e
}
  , z_ = (e,t)=>{
    var n = {};
    for (var r in e)
        bv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Gl)
        for (var r of Gl(e))
            t.indexOf(r) < 0 && Ev.call(e, r) && (n[r] = e[r]);
    return n
}
;
const kv = _.forwardRef((e,t)=>{
    var n = e
      , {className: r, component: o, style: i, sx: l} = n
      , a = z_(n, ["className", "component", "style", "sx"]);
    const {systemStyles: s, rest: u} = Pv(a)
      , d = o || "div";
    return R.createElement(d, L_({
        ref: t,
        className: I_(l, s, r),
        style: i
    }, u))
}
);
kv.displayName = "@mantine/core/Box";
const fn = kv;
var M_ = Object.defineProperty
  , A_ = Object.defineProperties
  , F_ = Object.getOwnPropertyDescriptors
  , mp = Object.getOwnPropertySymbols
  , H_ = Object.prototype.hasOwnProperty
  , U_ = Object.prototype.propertyIsEnumerable
  , hp = (e,t,n)=>t in e ? M_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , gp = (e,t)=>{
    for (var n in t || (t = {}))
        H_.call(t, n) && hp(e, n, t[n]);
    if (mp)
        for (var n of mp(t))
            U_.call(t, n) && hp(e, n, t[n]);
    return e
}
  , B_ = (e,t)=>A_(e, F_(t))
  , W_ = eo(e=>({
    root: B_(gp(gp({}, e.fn.focusStyles()), e.fn.fontStyles()), {
        cursor: "pointer",
        border: 0,
        padding: 0,
        appearance: "none",
        fontSize: e.fontSizes.md,
        backgroundColor: "transparent",
        textAlign: "left",
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        textDecoration: "none",
        boxSizing: "border-box"
    })
}));
const V_ = W_;
var Q_ = Object.defineProperty
  , Xl = Object.getOwnPropertySymbols
  , Cv = Object.prototype.hasOwnProperty
  , Nv = Object.prototype.propertyIsEnumerable
  , vp = (e,t,n)=>t in e ? Q_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , K_ = (e,t)=>{
    for (var n in t || (t = {}))
        Cv.call(t, n) && vp(e, n, t[n]);
    if (Xl)
        for (var n of Xl(t))
            Nv.call(t, n) && vp(e, n, t[n]);
    return e
}
  , Y_ = (e,t)=>{
    var n = {};
    for (var r in e)
        Cv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Xl)
        for (var r of Xl(e))
            t.indexOf(r) < 0 && Nv.call(e, r) && (n[r] = e[r]);
    return n
}
;
const jv = _.forwardRef((e,t)=>{
    const n = rt("UnstyledButton", {}, e)
      , {className: r, component: o="button", unstyled: i, variant: l} = n
      , a = Y_(n, ["className", "component", "unstyled", "variant"])
      , {classes: s, cx: u} = V_(null, {
        name: "UnstyledButton",
        unstyled: i,
        variant: l
    });
    return R.createElement(fn, K_({
        component: o,
        ref: t,
        className: u(s.root, r),
        type: o === "button" ? "button" : void 0
    }, a))
}
);
jv.displayName = "@mantine/core/UnstyledButton";
const G_ = jv;
var X_ = Object.defineProperty
  , q_ = Object.defineProperties
  , J_ = Object.getOwnPropertyDescriptors
  , ql = Object.getOwnPropertySymbols
  , Rv = Object.prototype.hasOwnProperty
  , $v = Object.prototype.propertyIsEnumerable
  , yp = (e,t,n)=>t in e ? X_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Hn = (e,t)=>{
    for (var n in t || (t = {}))
        Rv.call(t, n) && yp(e, n, t[n]);
    if (ql)
        for (var n of ql(t))
            $v.call(t, n) && yp(e, n, t[n]);
    return e
}
  , Hs = (e,t)=>q_(e, J_(t))
  , Z_ = (e,t)=>{
    var n = {};
    for (var r in e)
        Rv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ql)
        for (var r of ql(e))
            t.indexOf(r) < 0 && $v.call(e, r) && (n[r] = e[r]);
    return n
}
;
function eO(e) {
    if (!e || typeof e == "string")
        return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** .25 + t / 5) * 10)
}
function Us(e) {
    return e != null && e.current ? e.current.scrollHeight : "auto"
}
const Xi = typeof window < "u" && window.requestAnimationFrame;
function tO({transitionDuration: e, transitionTimingFunction: t="ease", onTransitionEnd: n=()=>{}
, opened: r}) {
    const o = _.useRef(null)
      , i = 0
      , l = {
        display: "none",
        height: 0,
        overflow: "hidden"
    }
      , [a,s] = _.useState(r ? {} : l)
      , u = w=>{
        za.flushSync(()=>s(w))
    }
      , d = w=>{
        u(y=>Hn(Hn({}, y), w))
    }
    ;
    function f(w) {
        return {
            transition: `height ${e || eO(w)}ms ${t}`
        }
    }
    nr(()=>{
        Xi(r ? ()=>{
            d({
                willChange: "height",
                display: "block",
                overflow: "hidden"
            }),
            Xi(()=>{
                const w = Us(o);
                d(Hs(Hn({}, f(w)), {
                    height: w
                }))
            }
            )
        }
        : ()=>{
            const w = Us(o);
            d(Hs(Hn({}, f(w)), {
                willChange: "height",
                height: w
            })),
            Xi(()=>d({
                height: i,
                overflow: "hidden"
            }))
        }
        )
    }
    , [r]);
    const g = w=>{
        if (!(w.target !== o.current || w.propertyName !== "height"))
            if (r) {
                const y = Us(o);
                y === a.height ? u({}) : d({
                    height: y
                }),
                n()
            } else
                a.height === i && (u(l),
                n())
    }
    ;
    function x(w={}) {
        var y = w
          , {style: S={}, refKey: m="ref"} = y
          , p = Z_(y, ["style", "refKey"]);
        const v = p[m];
        return Hs(Hn({
            "aria-hidden": !r
        }, p), {
            [m]: Sv(o, v),
            onTransitionEnd: g,
            style: Hn(Hn({
                boxSizing: "border-box"
            }, S), a)
        })
    }
    return x
}
var nO = Object.defineProperty
  , Jl = Object.getOwnPropertySymbols
  , Tv = Object.prototype.hasOwnProperty
  , Iv = Object.prototype.propertyIsEnumerable
  , wp = (e,t,n)=>t in e ? nO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , qi = (e,t)=>{
    for (var n in t || (t = {}))
        Tv.call(t, n) && wp(e, n, t[n]);
    if (Jl)
        for (var n of Jl(t))
            Iv.call(t, n) && wp(e, n, t[n]);
    return e
}
  , rO = (e,t)=>{
    var n = {};
    for (var r in e)
        Tv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Jl)
        for (var r of Jl(e))
            t.indexOf(r) < 0 && Iv.call(e, r) && (n[r] = e[r]);
    return n
}
;
const oO = {
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    animateOpacity: !0
}
  , Qu = _.forwardRef((e,t)=>{
    const n = rt("Collapse", oO, e)
      , {children: r, in: o, transitionDuration: i, transitionTimingFunction: l, style: a, onTransitionEnd: s, animateOpacity: u} = n
      , d = rO(n, ["children", "in", "transitionDuration", "transitionTimingFunction", "style", "onTransitionEnd", "animateOpacity"])
      , f = Dt()
      , g = Ov()
      , w = (f.respectReducedMotion ? g : !1) ? 0 : i
      , {systemStyles: y, rest: S} = Pv(d)
      , m = tO({
        opened: o,
        transitionDuration: w,
        transitionTimingFunction: l,
        onTransitionEnd: s
    });
    return w === 0 ? o ? R.createElement(fn, qi({}, S), r) : null : R.createElement(fn, qi({}, m(qi(qi({
        style: a,
        ref: t
    }, S), y))), R.createElement("div", {
        style: {
            opacity: o || !u ? 1 : 0,
            transition: u ? `opacity ${w}ms ${l}` : "none"
        }
    }, r))
}
);
Qu.displayName = "@mantine/core/Collapse";
var iO = Object.defineProperty
  , Zl = Object.getOwnPropertySymbols
  , Dv = Object.prototype.hasOwnProperty
  , Lv = Object.prototype.propertyIsEnumerable
  , xp = (e,t,n)=>t in e ? iO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , lO = (e,t)=>{
    for (var n in t || (t = {}))
        Dv.call(t, n) && xp(e, n, t[n]);
    if (Zl)
        for (var n of Zl(t))
            Lv.call(t, n) && xp(e, n, t[n]);
    return e
}
  , aO = (e,t)=>{
    var n = {};
    for (var r in e)
        Dv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Zl)
        for (var r of Zl(e))
            t.indexOf(r) < 0 && Lv.call(e, r) && (n[r] = e[r]);
    return n
}
;
function sO(e) {
    var t = e
      , {size: n, color: r} = t
      , o = aO(t, ["size", "color"]);
    return R.createElement("svg", lO({
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        fill: r,
        width: n
    }, o), R.createElement("rect", {
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, R.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), R.createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), R.createElement("rect", {
        x: "30",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, R.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), R.createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), R.createElement("rect", {
        x: "60",
        width: "15",
        height: "140",
        rx: "6"
    }, R.createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), R.createElement("animate", {
        attributeName: "y",
        begin: "0s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), R.createElement("rect", {
        x: "90",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, R.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), R.createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), R.createElement("rect", {
        x: "120",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, R.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), R.createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })))
}
var uO = Object.defineProperty
  , ea = Object.getOwnPropertySymbols
  , zv = Object.prototype.hasOwnProperty
  , Mv = Object.prototype.propertyIsEnumerable
  , Sp = (e,t,n)=>t in e ? uO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , cO = (e,t)=>{
    for (var n in t || (t = {}))
        zv.call(t, n) && Sp(e, n, t[n]);
    if (ea)
        for (var n of ea(t))
            Mv.call(t, n) && Sp(e, n, t[n]);
    return e
}
  , fO = (e,t)=>{
    var n = {};
    for (var r in e)
        zv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ea)
        for (var r of ea(e))
            t.indexOf(r) < 0 && Mv.call(e, r) && (n[r] = e[r]);
    return n
}
;
function dO(e) {
    var t = e
      , {size: n, color: r} = t
      , o = fO(t, ["size", "color"]);
    return R.createElement("svg", cO({
        width: n,
        height: n,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: r
    }, o), R.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, R.createElement("g", {
        transform: "translate(2.5 2.5)",
        strokeWidth: "5"
    }, R.createElement("circle", {
        strokeOpacity: ".5",
        cx: "16",
        cy: "16",
        r: "16"
    }), R.createElement("path", {
        d: "M32 16c0-9.94-8.06-16-16-16"
    }, R.createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 16 16",
        to: "360 16 16",
        dur: "1s",
        repeatCount: "indefinite"
    })))))
}
var pO = Object.defineProperty
  , ta = Object.getOwnPropertySymbols
  , Av = Object.prototype.hasOwnProperty
  , Fv = Object.prototype.propertyIsEnumerable
  , _p = (e,t,n)=>t in e ? pO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , mO = (e,t)=>{
    for (var n in t || (t = {}))
        Av.call(t, n) && _p(e, n, t[n]);
    if (ta)
        for (var n of ta(t))
            Fv.call(t, n) && _p(e, n, t[n]);
    return e
}
  , hO = (e,t)=>{
    var n = {};
    for (var r in e)
        Av.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ta)
        for (var r of ta(e))
            t.indexOf(r) < 0 && Fv.call(e, r) && (n[r] = e[r]);
    return n
}
;
function gO(e) {
    var t = e
      , {size: n, color: r} = t
      , o = hO(t, ["size", "color"]);
    return R.createElement("svg", mO({
        width: n,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: r
    }, o), R.createElement("circle", {
        cx: "15",
        cy: "15",
        r: "15"
    }, R.createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), R.createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), R.createElement("circle", {
        cx: "60",
        cy: "15",
        r: "9",
        fillOpacity: "0.3"
    }, R.createElement("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), R.createElement("animate", {
        attributeName: "fill-opacity",
        from: "0.5",
        to: "0.5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), R.createElement("circle", {
        cx: "105",
        cy: "15",
        r: "15"
    }, R.createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), R.createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })))
}
var vO = Object.defineProperty
  , na = Object.getOwnPropertySymbols
  , Hv = Object.prototype.hasOwnProperty
  , Uv = Object.prototype.propertyIsEnumerable
  , Op = (e,t,n)=>t in e ? vO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , yO = (e,t)=>{
    for (var n in t || (t = {}))
        Hv.call(t, n) && Op(e, n, t[n]);
    if (na)
        for (var n of na(t))
            Uv.call(t, n) && Op(e, n, t[n]);
    return e
}
  , wO = (e,t)=>{
    var n = {};
    for (var r in e)
        Hv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && na)
        for (var r of na(e))
            t.indexOf(r) < 0 && Uv.call(e, r) && (n[r] = e[r]);
    return n
}
;
const Bs = {
    bars: sO,
    oval: dO,
    dots: gO
}
  , xO = {
    xs: D(18),
    sm: D(22),
    md: D(36),
    lg: D(44),
    xl: D(58)
}
  , SO = {
    size: "md"
};
function Bv(e) {
    const t = rt("Loader", SO, e)
      , {size: n, color: r, variant: o} = t
      , i = wO(t, ["size", "color", "variant"])
      , l = Dt()
      , a = o in Bs ? o : l.loader;
    return R.createElement(fn, yO({
        role: "presentation",
        component: Bs[a] || Bs.bars,
        size: Re({
            size: n,
            sizes: xO
        }),
        color: l.fn.variant({
            variant: "filled",
            primaryFallback: !1,
            color: r || l.primaryColor
        }).background
    }, i))
}
Bv.displayName = "@mantine/core/Loader";
var _O = Object.defineProperty
  , OO = Object.defineProperties
  , PO = Object.getOwnPropertyDescriptors
  , ra = Object.getOwnPropertySymbols
  , Wv = Object.prototype.hasOwnProperty
  , Vv = Object.prototype.propertyIsEnumerable
  , Pp = (e,t,n)=>t in e ? _O(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , bO = (e,t)=>{
    for (var n in t || (t = {}))
        Wv.call(t, n) && Pp(e, n, t[n]);
    if (ra)
        for (var n of ra(t))
            Vv.call(t, n) && Pp(e, n, t[n]);
    return e
}
  , EO = (e,t)=>OO(e, PO(t))
  , kO = (e,t)=>{
    var n = {};
    for (var r in e)
        Wv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ra)
        for (var r of ra(e))
            t.indexOf(r) < 0 && Vv.call(e, r) && (n[r] = e[r]);
    return n
}
;
function Qv(e) {
    const t = rt("Portal", {}, e)
      , {children: n, target: r, className: o, innerRef: i} = t
      , l = kO(t, ["children", "target", "className", "innerRef"])
      , a = Dt()
      , [s,u] = _.useState(!1)
      , d = _.useRef();
    return gv(()=>(u(!0),
    d.current = r ? typeof r == "string" ? document.querySelector(r) : r : document.createElement("div"),
    r || document.body.appendChild(d.current),
    ()=>{
        !r && document.body.removeChild(d.current)
    }
    ), [r]),
    s ? za.createPortal(R.createElement("div", EO(bO({
        className: o,
        dir: a.dir
    }, l), {
        ref: i
    }), n), d.current) : null
}
Qv.displayName = "@mantine/core/Portal";
var CO = Object.defineProperty
  , oa = Object.getOwnPropertySymbols
  , Kv = Object.prototype.hasOwnProperty
  , Yv = Object.prototype.propertyIsEnumerable
  , bp = (e,t,n)=>t in e ? CO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , NO = (e,t)=>{
    for (var n in t || (t = {}))
        Kv.call(t, n) && bp(e, n, t[n]);
    if (oa)
        for (var n of oa(t))
            Yv.call(t, n) && bp(e, n, t[n]);
    return e
}
  , jO = (e,t)=>{
    var n = {};
    for (var r in e)
        Kv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && oa)
        for (var r of oa(e))
            t.indexOf(r) < 0 && Yv.call(e, r) && (n[r] = e[r]);
    return n
}
;
function Gv(e) {
    var t = e
      , {withinPortal: n=!0, children: r} = t
      , o = jO(t, ["withinPortal", "children"]);
    return n ? R.createElement(Qv, NO({}, o), r) : R.createElement(R.Fragment, null, r)
}
Gv.displayName = "@mantine/core/OptionalPortal";
const Xv = _.createContext({
    zIndex: 1e3,
    fixed: !1,
    layout: "default"
});
Xv.Provider;
function RO() {
    return _.useContext(Xv)
}
function qv(e, t) {
    if (!e)
        return [];
    const n = Object.keys(e).filter(r=>r !== "base").map(r=>[Re({
        size: r,
        sizes: t.breakpoints,
        units: "em"
    }), e[r]]);
    return n.sort((r,o)=>cn(r[0]) - cn(o[0])),
    n
}
var $O = Object.defineProperty
  , TO = Object.defineProperties
  , IO = Object.getOwnPropertyDescriptors
  , Ep = Object.getOwnPropertySymbols
  , DO = Object.prototype.hasOwnProperty
  , LO = Object.prototype.propertyIsEnumerable
  , kp = (e,t,n)=>t in e ? $O(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Ji = (e,t)=>{
    for (var n in t || (t = {}))
        DO.call(t, n) && kp(e, n, t[n]);
    if (Ep)
        for (var n of Ep(t))
            LO.call(t, n) && kp(e, n, t[n]);
    return e
}
  , Cp = (e,t)=>TO(e, IO(t))
  , zO = eo((e,{height: t, width: n, fixed: r, position: o, hiddenBreakpoint: i, zIndex: l, section: a, withBorder: s, layout: u})=>{
    const d = typeof n == "object" && n !== null ? qv(n, e).reduce((g,[x,w])=>(g[`@media (min-width: ${tr(x)})`] = {
        width: D(w),
        minWidth: D(w)
    },
    g), {}) : null
      , f = s ? {
        [a === "navbar" ? "borderRight" : "borderLeft"]: `${D(1)} solid ${e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[2]}`
    } : {};
    return {
        root: Cp(Ji(Ji(Cp(Ji(Ji({}, e.fn.fontStyles()), o), {
            top: u === "alt" ? 0 : (o == null ? void 0 : o.top) || "var(--mantine-header-height)",
            bottom: 0,
            zIndex: l,
            height: t ? D(t) : u === "alt" ? "auto" : "calc(100vh - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem))",
            width: n != null && n.base ? D(n == null ? void 0 : n.base) : "100%",
            position: r ? "fixed" : "static",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white
        }), f), d), {
            "&[data-hidden]": {
                [`@media (max-width: ${tr(cn(Re({
                    size: i,
                    sizes: e.breakpoints
                })) - 1)})`]: {
                    display: "none"
                }
            }
        })
    }
}
);
const MO = zO;
var AO = Object.defineProperty
  , ia = Object.getOwnPropertySymbols
  , Jv = Object.prototype.hasOwnProperty
  , Zv = Object.prototype.propertyIsEnumerable
  , Np = (e,t,n)=>t in e ? AO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , jp = (e,t)=>{
    for (var n in t || (t = {}))
        Jv.call(t, n) && Np(e, n, t[n]);
    if (ia)
        for (var n of ia(t))
            Zv.call(t, n) && Np(e, n, t[n]);
    return e
}
  , FO = (e,t)=>{
    var n = {};
    for (var r in e)
        Jv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ia)
        for (var r of ia(e))
            t.indexOf(r) < 0 && Zv.call(e, r) && (n[r] = e[r]);
    return n
}
;
const ey = _.forwardRef((e,t)=>{
    var n = e
      , {width: r, height: o, fixed: i=!1, position: l, zIndex: a, hiddenBreakpoint: s="md", hidden: u=!1, withBorder: d=!0, className: f, classNames: g, styles: x, children: w, section: y, __staticSelector: S, unstyled: m, variant: p} = n
      , v = FO(n, ["width", "height", "fixed", "position", "zIndex", "hiddenBreakpoint", "hidden", "withBorder", "className", "classNames", "styles", "children", "section", "__staticSelector", "unstyled", "variant"]);
    const h = RO()
      , {classes: O, cx: E, theme: P} = MO({
        width: r,
        height: o,
        fixed: h.fixed || i,
        position: l,
        hiddenBreakpoint: s,
        zIndex: a || h.zIndex || mv("app"),
        section: y,
        withBorder: d,
        layout: h.layout
    }, {
        classNames: g,
        styles: x,
        name: S,
        unstyled: m,
        variant: p
    })
      , N = qv(r, P).reduce((z,[T,H])=>(z[`@media (min-width: ${tr(T)})`] = {
        [`--mantine-${y}-width`]: D(H)
    },
    z), {});
    return R.createElement(fn, jp({
        component: y === "navbar" ? "nav" : "aside",
        ref: t,
        "data-hidden": u || void 0,
        className: E(O.root, f)
    }, v), w, R.createElement(YS, {
        styles: ()=>({
            ":root": jp({
                [`--mantine-${y}-width`]: r != null && r.base ? D(r.base) : "0rem"
            }, N)
        })
    }))
}
);
ey.displayName = "@mantine/core/HorizontalSection";
var HO = Object.defineProperty
  , la = Object.getOwnPropertySymbols
  , ty = Object.prototype.hasOwnProperty
  , ny = Object.prototype.propertyIsEnumerable
  , Rp = (e,t,n)=>t in e ? HO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , UO = (e,t)=>{
    for (var n in t || (t = {}))
        ty.call(t, n) && Rp(e, n, t[n]);
    if (la)
        for (var n of la(t))
            ny.call(t, n) && Rp(e, n, t[n]);
    return e
}
  , BO = (e,t)=>{
    var n = {};
    for (var r in e)
        ty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && la)
        for (var r of la(e))
            t.indexOf(r) < 0 && ny.call(e, r) && (n[r] = e[r]);
    return n
}
;
const ry = _.forwardRef((e,t)=>{
    var n = e
      , {children: r, grow: o=!1, sx: i} = n
      , l = BO(n, ["children", "grow", "sx"]);
    return R.createElement(fn, UO({
        ref: t,
        sx: [{
            flex: o ? 1 : 0,
            boxSizing: "border-box"
        }, ...Iw(i)]
    }, l), r)
}
);
ry.displayName = "@mantine/core/Section";
const WO = ry;
var VO = Object.defineProperty
  , $p = Object.getOwnPropertySymbols
  , QO = Object.prototype.hasOwnProperty
  , KO = Object.prototype.propertyIsEnumerable
  , Tp = (e,t,n)=>t in e ? VO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , YO = (e,t)=>{
    for (var n in t || (t = {}))
        QO.call(t, n) && Tp(e, n, t[n]);
    if ($p)
        for (var n of $p(t))
            KO.call(t, n) && Tp(e, n, t[n]);
    return e
}
;
const GO = {
    fixed: !1,
    position: {
        top: 0,
        left: 0
    },
    hiddenBreakpoint: "md",
    hidden: !1
}
  , Bo = _.forwardRef((e,t)=>{
    const n = rt("Navbar", GO, e);
    return R.createElement(ey, YO({
        section: "navbar",
        __staticSelector: "Navbar",
        ref: t
    }, n))
}
);
Bo.Section = WO;
Bo.displayName = "@mantine/core/Navbar";
function to(e) {
    return e.split("-")[1]
}
function sf(e) {
    return e === "y" ? "height" : "width"
}
function Rt(e) {
    return e.split("-")[0]
}
function Fn(e) {
    return ["top", "bottom"].includes(Rt(e)) ? "x" : "y"
}
function Ip(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = r.x + r.width / 2 - o.width / 2
      , l = r.y + r.height / 2 - o.height / 2
      , a = Fn(t)
      , s = sf(a)
      , u = r[s] / 2 - o[s] / 2
      , d = a === "x";
    let f;
    switch (Rt(t)) {
    case "top":
        f = {
            x: i,
            y: r.y - o.height
        };
        break;
    case "bottom":
        f = {
            x: i,
            y: r.y + r.height
        };
        break;
    case "right":
        f = {
            x: r.x + r.width,
            y: l
        };
        break;
    case "left":
        f = {
            x: r.x - o.width,
            y: l
        };
        break;
    default:
        f = {
            x: r.x,
            y: r.y
        }
    }
    switch (to(t)) {
    case "start":
        f[a] -= u * (n && d ? -1 : 1);
        break;
    case "end":
        f[a] += u * (n && d ? -1 : 1)
    }
    return f
}
const XO = async(e,t,n)=>{
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: l} = n
      , a = i.filter(Boolean)
      , s = await (l.isRTL == null ? void 0 : l.isRTL(t));
    let u = await l.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: f} = Ip(u, r, s)
      , g = r
      , x = {}
      , w = 0;
    for (let y = 0; y < a.length; y++) {
        const {name: S, fn: m} = a[y]
          , {x: p, y: v, data: h, reset: O} = await m({
            x: d,
            y: f,
            initialPlacement: r,
            placement: g,
            strategy: o,
            middlewareData: x,
            rects: u,
            platform: l,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = p ?? d,
        f = v ?? f,
        x = {
            ...x,
            [S]: {
                ...x[S],
                ...h
            }
        },
        O && w <= 50 && (w++,
        typeof O == "object" && (O.placement && (g = O.placement),
        O.rects && (u = O.rects === !0 ? await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : O.rects),
        {x: d, y: f} = Ip(u, g, s)),
        y = -1)
    }
    return {
        x: d,
        y: f,
        placement: g,
        strategy: o,
        middlewareData: x
    }
}
;
function dn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function uf(e) {
    return typeof e != "number" ? function(t) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...t
        }
    }(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Kr(e) {
    return {
        ...e,
        top: e.y,
        left: e.x,
        right: e.x + e.width,
        bottom: e.y + e.height
    }
}
async function cf(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: l, elements: a, strategy: s} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: f="floating", altBoundary: g=!1, padding: x=0} = dn(t, e)
      , w = uf(x)
      , y = a[g ? f === "floating" ? "reference" : "floating" : f]
      , S = Kr(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: s
    }))
      , m = f === "floating" ? {
        ...l.floating,
        x: r,
        y: o
    } : l.reference
      , p = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , v = await (i.isElement == null ? void 0 : i.isElement(p)) && await (i.getScale == null ? void 0 : i.getScale(p)) || {
        x: 1,
        y: 1
    }
      , h = Kr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: m,
        offsetParent: p,
        strategy: s
    }) : m);
    return {
        top: (S.top - h.top + w.top) / v.y,
        bottom: (h.bottom - S.bottom + w.bottom) / v.y,
        left: (S.left - h.left + w.left) / v.x,
        right: (h.right - S.right + w.right) / v.x
    }
}
const Dn = Math.min
  , Bt = Math.max;
function Ku(e, t, n) {
    return Bt(e, Dn(t, n))
}
const Dp = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: l, elements: a} = t
          , {element: s, padding: u=0} = dn(e, t) || {};
        if (s == null)
            return {};
        const d = uf(u)
          , f = {
            x: n,
            y: r
        }
          , g = Fn(o)
          , x = sf(g)
          , w = await l.getDimensions(s)
          , y = g === "y"
          , S = y ? "top" : "left"
          , m = y ? "bottom" : "right"
          , p = y ? "clientHeight" : "clientWidth"
          , v = i.reference[x] + i.reference[g] - f[g] - i.floating[x]
          , h = f[g] - i.reference[g]
          , O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s));
        let E = O ? O[p] : 0;
        E && await (l.isElement == null ? void 0 : l.isElement(O)) || (E = a.floating[p] || i.floating[x]);
        const P = v / 2 - h / 2
          , N = E / 2 - w[x] / 2 - 1
          , z = Dn(d[S], N)
          , T = Dn(d[m], N)
          , H = z
          , F = E - w[x] - T
          , ee = E / 2 - w[x] / 2 + P
          , ce = Ku(H, ee, F)
          , ae = to(o) != null && ee != ce && i.reference[x] / 2 - (ee < H ? z : T) - w[x] / 2 < 0 ? ee < H ? H - ee : F - ee : 0;
        return {
            [g]: f[g] - ae,
            data: {
                [g]: ce,
                centerOffset: ee - ce + ae
            }
        }
    }
})
  , qO = ["top", "right", "bottom", "left"];
qO.reduce((e,t)=>e.concat(t, t + "-start", t + "-end"), []);
const JO = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function aa(e) {
    return e.replace(/left|right|bottom|top/g, t=>JO[t])
}
function ZO(e, t, n) {
    n === void 0 && (n = !1);
    const r = to(e)
      , o = Fn(e)
      , i = sf(o);
    let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (l = aa(l)),
    {
        main: l,
        cross: aa(l)
    }
}
const eP = {
    start: "end",
    end: "start"
};
function Ws(e) {
    return e.replace(/start|end/g, t=>eP[t])
}
const tP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n;
            const {placement: r, middlewareData: o, rects: i, initialPlacement: l, platform: a, elements: s} = t
              , {mainAxis: u=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: g="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: w=!0, ...y} = dn(e, t)
              , S = Rt(r)
              , m = Rt(l) === l
              , p = await (a.isRTL == null ? void 0 : a.isRTL(s.floating))
              , v = f || (m || !w ? [aa(l)] : function(H) {
                const F = aa(H);
                return [Ws(H), F, Ws(F)]
            }(l));
            f || x === "none" || v.push(...function(H, F, ee, ce) {
                const ae = to(H);
                let ne = function(ye, $, M) {
                    const U = ["left", "right"]
                      , te = ["right", "left"]
                      , se = ["top", "bottom"]
                      , pt = ["bottom", "top"];
                    switch (ye) {
                    case "top":
                    case "bottom":
                        return M ? $ ? te : U : $ ? U : te;
                    case "left":
                    case "right":
                        return $ ? se : pt;
                    default:
                        return []
                    }
                }(Rt(H), ee === "start", ce);
                return ae && (ne = ne.map(ye=>ye + "-" + ae),
                F && (ne = ne.concat(ne.map(Ws)))),
                ne
            }(l, w, x, p));
            const h = [l, ...v]
              , O = await cf(t, y)
              , E = [];
            let P = ((n = o.flip) == null ? void 0 : n.overflows) || [];
            if (u && E.push(O[S]),
            d) {
                const {main: H, cross: F} = ZO(r, i, p);
                E.push(O[H], O[F])
            }
            if (P = [...P, {
                placement: r,
                overflows: E
            }],
            !E.every(H=>H <= 0)) {
                var N, z;
                const H = (((N = o.flip) == null ? void 0 : N.index) || 0) + 1
                  , F = h[H];
                if (F)
                    return {
                        data: {
                            index: H,
                            overflows: P
                        },
                        reset: {
                            placement: F
                        }
                    };
                let ee = (z = P.filter(ce=>ce.overflows[0] <= 0).sort((ce,ae)=>ce.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : z.placement;
                if (!ee)
                    switch (g) {
                    case "bestFit":
                        {
                            var T;
                            const ce = (T = P.map(ae=>[ae.placement, ae.overflows.filter(ne=>ne > 0).reduce((ne,ye)=>ne + ye, 0)]).sort((ae,ne)=>ae[1] - ne[1])[0]) == null ? void 0 : T[0];
                            ce && (ee = ce);
                            break
                        }
                    case "initialPlacement":
                        ee = l
                    }
                if (r !== ee)
                    return {
                        reset: {
                            placement: ee
                        }
                    }
            }
            return {}
        }
    }
};
function Lp(e) {
    const t = Dn(...e.map(r=>r.left))
      , n = Dn(...e.map(r=>r.top));
    return {
        x: t,
        y: n,
        width: Bt(...e.map(r=>r.right)) - t,
        height: Bt(...e.map(r=>r.bottom)) - n
    }
}
const nP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "inline",
        options: e,
        async fn(t) {
            const {placement: n, elements: r, rects: o, platform: i, strategy: l} = t
              , {padding: a=2, x: s, y: u} = dn(e, t)
              , d = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || [])
              , f = function(y) {
                const S = y.slice().sort((v,h)=>v.y - h.y)
                  , m = [];
                let p = null;
                for (let v = 0; v < S.length; v++) {
                    const h = S[v];
                    !p || h.y - p.y > p.height / 2 ? m.push([h]) : m[m.length - 1].push(h),
                    p = h
                }
                return m.map(v=>Kr(Lp(v)))
            }(d)
              , g = Kr(Lp(d))
              , x = uf(a)
              , w = await i.getElementRects({
                reference: {
                    getBoundingClientRect: function() {
                        if (f.length === 2 && f[0].left > f[1].right && s != null && u != null)
                            return f.find(y=>s > y.left - x.left && s < y.right + x.right && u > y.top - x.top && u < y.bottom + x.bottom) || g;
                        if (f.length >= 2) {
                            if (Fn(n) === "x") {
                                const O = f[0]
                                  , E = f[f.length - 1]
                                  , P = Rt(n) === "top"
                                  , N = O.top
                                  , z = E.bottom
                                  , T = P ? O.left : E.left
                                  , H = P ? O.right : E.right;
                                return {
                                    top: N,
                                    bottom: z,
                                    left: T,
                                    right: H,
                                    width: H - T,
                                    height: z - N,
                                    x: T,
                                    y: N
                                }
                            }
                            const y = Rt(n) === "left"
                              , S = Bt(...f.map(O=>O.right))
                              , m = Dn(...f.map(O=>O.left))
                              , p = f.filter(O=>y ? O.left === m : O.right === S)
                              , v = p[0].top
                              , h = p[p.length - 1].bottom;
                            return {
                                top: v,
                                bottom: h,
                                left: m,
                                right: S,
                                width: S - m,
                                height: h - v,
                                x: m,
                                y: v
                            }
                        }
                        return g
                    }
                },
                floating: r.floating,
                strategy: l
            });
            return o.reference.x !== w.reference.x || o.reference.y !== w.reference.y || o.reference.width !== w.reference.width || o.reference.height !== w.reference.height ? {
                reset: {
                    rects: w
                }
            } : {}
        }
    }
}
  , rP = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            const {x: n, y: r} = t
              , o = await async function(i, l) {
                const {placement: a, platform: s, elements: u} = i
                  , d = await (s.isRTL == null ? void 0 : s.isRTL(u.floating))
                  , f = Rt(a)
                  , g = to(a)
                  , x = Fn(a) === "x"
                  , w = ["left", "top"].includes(f) ? -1 : 1
                  , y = d && x ? -1 : 1
                  , S = dn(l, i);
                let {mainAxis: m, crossAxis: p, alignmentAxis: v} = typeof S == "number" ? {
                    mainAxis: S,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...S
                };
                return g && typeof v == "number" && (p = g === "end" ? -1 * v : v),
                x ? {
                    x: p * y,
                    y: m * w
                } : {
                    x: m * w,
                    y: p * y
                }
            }(t, e);
            return {
                x: n + o.x,
                y: r + o.y,
                data: o
            }
        }
    }
};
function oy(e) {
    return e === "x" ? "y" : "x"
}
const oP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: l=!1, limiter: a={
                fn: S=>{
                    let {x: m, y: p} = S;
                    return {
                        x: m,
                        y: p
                    }
                }
            }, ...s} = dn(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await cf(t, s)
              , f = Fn(Rt(o))
              , g = oy(f);
            let x = u[f]
              , w = u[g];
            if (i) {
                const S = f === "y" ? "bottom" : "right";
                x = Ku(x + d[f === "y" ? "top" : "left"], x, x - d[S])
            }
            if (l) {
                const S = g === "y" ? "bottom" : "right";
                w = Ku(w + d[g === "y" ? "top" : "left"], w, w - d[S])
            }
            const y = a.fn({
                ...t,
                [f]: x,
                [g]: w
            });
            return {
                ...y,
                data: {
                    x: y.x - n,
                    y: y.y - r
                }
            }
        }
    }
}
  , iP = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: l} = t
              , {offset: a=0, mainAxis: s=!0, crossAxis: u=!0} = dn(e, t)
              , d = {
                x: n,
                y: r
            }
              , f = Fn(o)
              , g = oy(f);
            let x = d[f]
              , w = d[g];
            const y = dn(a, t)
              , S = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...y
            };
            if (s) {
                const v = f === "y" ? "height" : "width"
                  , h = i.reference[f] - i.floating[v] + S.mainAxis
                  , O = i.reference[f] + i.reference[v] - S.mainAxis;
                x < h ? x = h : x > O && (x = O)
            }
            if (u) {
                var m, p;
                const v = f === "y" ? "width" : "height"
                  , h = ["top", "left"].includes(Rt(o))
                  , O = i.reference[g] - i.floating[v] + (h && ((m = l.offset) == null ? void 0 : m[g]) || 0) + (h ? 0 : S.crossAxis)
                  , E = i.reference[g] + i.reference[v] + (h ? 0 : ((p = l.offset) == null ? void 0 : p[g]) || 0) - (h ? S.crossAxis : 0);
                w < O ? w = O : w > E && (w = E)
            }
            return {
                [f]: x,
                [g]: w
            }
        }
    }
}
  , lP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: n, rects: r, platform: o, elements: i} = t
              , {apply: l=()=>{}
            , ...a} = dn(e, t)
              , s = await cf(t, a)
              , u = Rt(n)
              , d = to(n)
              , f = Fn(n) === "x"
              , {width: g, height: x} = r.floating;
            let w, y;
            u === "top" || u === "bottom" ? (w = u,
            y = d === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = u,
            w = d === "end" ? "top" : "bottom");
            const S = x - s[w]
              , m = g - s[y]
              , p = !t.middlewareData.shift;
            let v = S
              , h = m;
            if (f) {
                const E = g - s.left - s.right;
                h = d || p ? Dn(m, E) : E
            } else {
                const E = x - s.top - s.bottom;
                v = d || p ? Dn(S, E) : E
            }
            if (p && !d) {
                const E = Bt(s.left, 0)
                  , P = Bt(s.right, 0)
                  , N = Bt(s.top, 0)
                  , z = Bt(s.bottom, 0);
                f ? h = g - 2 * (E !== 0 || P !== 0 ? E + P : Bt(s.left, s.right)) : v = x - 2 * (N !== 0 || z !== 0 ? N + z : Bt(s.top, s.bottom))
            }
            await l({
                ...t,
                availableWidth: h,
                availableHeight: v
            });
            const O = await o.getDimensions(i.floating);
            return g !== O.width || x !== O.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function St(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function $t(e) {
    return St(e).getComputedStyle(e)
}
function iy(e) {
    return e instanceof St(e).Node
}
function Ln(e) {
    return iy(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function It(e) {
    return e instanceof St(e).HTMLElement
}
function nn(e) {
    return e instanceof St(e).Element
}
function zp(e) {
    return typeof ShadowRoot < "u" && (e instanceof St(e).ShadowRoot || e instanceof ShadowRoot)
}
function di(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = $t(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function aP(e) {
    return ["table", "td", "th"].includes(Ln(e))
}
function Yu(e) {
    const t = ff()
      , n = $t(e);
    return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some(r=>(n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r=>(n.contain || "").includes(r))
}
function ff() {
    return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
}
function qa(e) {
    return ["html", "body", "#document"].includes(Ln(e))
}
const Mp = Math.min
  , Wo = Math.max
  , sa = Math.round
  , Zi = Math.floor
  , rr = e=>({
    x: e,
    y: e
});
function ly(e) {
    const t = $t(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = It(e)
      , i = o ? e.offsetWidth : n
      , l = o ? e.offsetHeight : r
      , a = sa(n) !== i || sa(r) !== l;
    return a && (n = i,
    r = l),
    {
        width: n,
        height: r,
        $: a
    }
}
function df(e) {
    return nn(e) ? e : e.contextElement
}
function Lr(e) {
    const t = df(e);
    if (!It(t))
        return rr(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = ly(t);
    let l = (i ? sa(n.width) : n.width) / r
      , a = (i ? sa(n.height) : n.height) / o;
    return l && Number.isFinite(l) || (l = 1),
    a && Number.isFinite(a) || (a = 1),
    {
        x: l,
        y: a
    }
}
const Ap = rr(0);
function ay(e, t, n) {
    var r, o;
    if (t === void 0 && (t = !0),
    !ff())
        return Ap;
    const i = e ? St(e) : window;
    return !n || t && n !== i ? Ap : {
        x: ((r = i.visualViewport) == null ? void 0 : r.offsetLeft) || 0,
        y: ((o = i.visualViewport) == null ? void 0 : o.offsetTop) || 0
    }
}
function or(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = df(e);
    let l = rr(1);
    t && (r ? nn(r) && (l = Lr(r)) : l = Lr(e));
    const a = ay(i, n, r);
    let s = (o.left + a.x) / l.x
      , u = (o.top + a.y) / l.y
      , d = o.width / l.x
      , f = o.height / l.y;
    if (i) {
        const g = St(i)
          , x = r && nn(r) ? St(r) : r;
        let w = g.frameElement;
        for (; w && r && x !== g; ) {
            const y = Lr(w)
              , S = w.getBoundingClientRect()
              , m = getComputedStyle(w)
              , p = S.left + (w.clientLeft + parseFloat(m.paddingLeft)) * y.x
              , v = S.top + (w.clientTop + parseFloat(m.paddingTop)) * y.y;
            s *= y.x,
            u *= y.y,
            d *= y.x,
            f *= y.y,
            s += p,
            u += v,
            w = St(w).frameElement
        }
    }
    return Kr({
        width: d,
        height: f,
        x: s,
        y: u
    })
}
function rn(e) {
    return ((iy(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Ja(e) {
    return nn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function sy(e) {
    return or(rn(e)).left + Ja(e).scrollLeft
}
function Yr(e) {
    if (Ln(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || zp(e) && e.host || rn(e);
    return zp(t) ? t.host : t
}
function uy(e) {
    const t = Yr(e);
    return qa(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : It(t) && di(t) ? t : uy(t)
}
function ua(e, t) {
    var n;
    t === void 0 && (t = []);
    const r = uy(e)
      , o = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , i = St(r);
    return o ? t.concat(i, i.visualViewport || [], di(r) ? r : []) : t.concat(r, ua(r))
}
function Fp(e, t, n) {
    let r;
    if (t === "viewport")
        r = function(o, i) {
            const l = St(o)
              , a = rn(o)
              , s = l.visualViewport;
            let u = a.clientWidth
              , d = a.clientHeight
              , f = 0
              , g = 0;
            if (s) {
                u = s.width,
                d = s.height;
                const x = ff();
                (!x || x && i === "fixed") && (f = s.offsetLeft,
                g = s.offsetTop)
            }
            return {
                width: u,
                height: d,
                x: f,
                y: g
            }
        }(e, n);
    else if (t === "document")
        r = function(o) {
            const i = rn(o)
              , l = Ja(o)
              , a = o.ownerDocument.body
              , s = Wo(i.scrollWidth, i.clientWidth, a.scrollWidth, a.clientWidth)
              , u = Wo(i.scrollHeight, i.clientHeight, a.scrollHeight, a.clientHeight);
            let d = -l.scrollLeft + sy(o);
            const f = -l.scrollTop;
            return $t(a).direction === "rtl" && (d += Wo(i.clientWidth, a.clientWidth) - s),
            {
                width: s,
                height: u,
                x: d,
                y: f
            }
        }(rn(e));
    else if (nn(t))
        r = function(o, i) {
            const l = or(o, !0, i === "fixed")
              , a = l.top + o.clientTop
              , s = l.left + o.clientLeft
              , u = It(o) ? Lr(o) : rr(1);
            return {
                width: o.clientWidth * u.x,
                height: o.clientHeight * u.y,
                x: s * u.x,
                y: a * u.y
            }
        }(t, n);
    else {
        const o = ay(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return Kr(r)
}
function cy(e, t) {
    const n = Yr(e);
    return !(n === t || !nn(n) || qa(n)) && ($t(n).position === "fixed" || cy(n, t))
}
function Hp(e, t) {
    return It(e) && $t(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null
}
function Up(e, t) {
    const n = St(e);
    if (!It(e))
        return n;
    let r = Hp(e, t);
    for (; r && aP(r) && $t(r).position === "static"; )
        r = Hp(r, t);
    return r && (Ln(r) === "html" || Ln(r) === "body" && $t(r).position === "static" && !Yu(r)) ? n : r || function(o) {
        let i = Yr(o);
        for (; It(i) && !qa(i); ) {
            if (Yu(i))
                return i;
            i = Yr(i)
        }
        return null
    }(e) || n
}
function sP(e, t, n) {
    const r = It(t)
      , o = rn(t)
      , i = n === "fixed"
      , l = or(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const s = rr(0);
    if (r || !r && !i)
        if ((Ln(t) !== "body" || di(o)) && (a = Ja(t)),
        It(t)) {
            const u = or(t, !0, i, t);
            s.x = u.x + t.clientLeft,
            s.y = u.y + t.clientTop
        } else
            o && (s.x = sy(o));
    return {
        x: l.left + a.scrollLeft - s.x,
        y: l.top + a.scrollTop - s.y,
        width: l.width,
        height: l.height
    }
}
const uP = {
    getClippingRect: function(e) {
        let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
        const i = n === "clippingAncestors" ? function(u, d) {
            const f = d.get(u);
            if (f)
                return f;
            let g = ua(u).filter(S=>nn(S) && Ln(S) !== "body")
              , x = null;
            const w = $t(u).position === "fixed";
            let y = w ? Yr(u) : u;
            for (; nn(y) && !qa(y); ) {
                const S = $t(y)
                  , m = Yu(y);
                m || S.position !== "fixed" || (x = null),
                (w ? !m && !x : !m && S.position === "static" && x && ["absolute", "fixed"].includes(x.position) || di(y) && !m && cy(u, y)) ? g = g.filter(p=>p !== y) : x = S,
                y = Yr(y)
            }
            return d.set(u, g),
            g
        }(t, this._c) : [].concat(n)
          , l = [...i, r]
          , a = l[0]
          , s = l.reduce((u,d)=>{
            const f = Fp(t, d, o);
            return u.top = Wo(f.top, u.top),
            u.right = Mp(f.right, u.right),
            u.bottom = Mp(f.bottom, u.bottom),
            u.left = Wo(f.left, u.left),
            u
        }
        , Fp(t, a, o));
        return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {rect: t, offsetParent: n, strategy: r} = e;
        const o = It(n)
          , i = rn(n);
        if (n === i)
            return t;
        let l = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , a = rr(1);
        const s = rr(0);
        if ((o || !o && r !== "fixed") && ((Ln(n) !== "body" || di(i)) && (l = Ja(n)),
        It(n))) {
            const u = or(n);
            a = Lr(n),
            s.x = u.x + n.clientLeft,
            s.y = u.y + n.clientTop
        }
        return {
            width: t.width * a.x,
            height: t.height * a.y,
            x: t.x * a.x - l.scrollLeft * a.x + s.x,
            y: t.y * a.y - l.scrollTop * a.y + s.y
        }
    },
    isElement: nn,
    getDimensions: function(e) {
        return ly(e)
    },
    getOffsetParent: Up,
    getDocumentElement: rn,
    getScale: Lr,
    async getElementRects(e) {
        let {reference: t, floating: n, strategy: r} = e;
        const o = this.getOffsetParent || Up
          , i = this.getDimensions;
        return {
            reference: sP(t, await o(n), r),
            floating: {
                x: 0,
                y: 0,
                ...await i(n)
            }
        }
    },
    getClientRects: e=>Array.from(e.getClientRects()),
    isRTL: e=>$t(e).direction === "rtl"
};
function cP(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: l=!0, layoutShift: a=typeof IntersectionObserver == "function", animationFrame: s=!1} = r
      , u = df(e)
      , d = o || i ? [...u ? ua(u) : [], ...ua(t)] : [];
    d.forEach(y=>{
        o && y.addEventListener("scroll", n, {
            passive: !0
        }),
        i && y.addEventListener("resize", n)
    }
    );
    const f = u && a ? function(y, S) {
        let m, p = null;
        const v = rn(y);
        function h() {
            clearTimeout(m),
            p && p.disconnect(),
            p = null
        }
        return function O(E, P) {
            E === void 0 && (E = !1),
            P === void 0 && (P = 1),
            h();
            const {left: N, top: z, width: T, height: H} = y.getBoundingClientRect();
            if (E || S(),
            !T || !H)
                return;
            const F = Zi(z)
              , ee = Zi(v.clientWidth - (N + T))
              , ce = Zi(v.clientHeight - (z + H))
              , ae = Zi(N);
            let ne = !0;
            p = new IntersectionObserver(ye=>{
                const $ = ye[0].intersectionRatio;
                if ($ !== P) {
                    if (!ne)
                        return O();
                    $ === 0 ? m = setTimeout(()=>{
                        O(!1, 1e-7)
                    }
                    , 100) : O(!1, $)
                }
                ne = !1
            }
            ,{
                rootMargin: -F + "px " + -ee + "px " + -ce + "px " + -ae + "px",
                threshold: P
            }),
            p.observe(y)
        }(!0),
        h
    }(u, n) : null;
    let g, x = null;
    l && (x = new ResizeObserver(n),
    u && !s && x.observe(u),
    x.observe(t));
    let w = s ? or(e) : null;
    return s && function y() {
        const S = or(e);
        !w || S.x === w.x && S.y === w.y && S.width === w.width && S.height === w.height || n(),
        w = S,
        g = requestAnimationFrame(y)
    }(),
    n(),
    ()=>{
        d.forEach(y=>{
            o && y.removeEventListener("scroll", n),
            i && y.removeEventListener("resize", n)
        }
        ),
        f && f(),
        x && x.disconnect(),
        x = null,
        s && cancelAnimationFrame(g)
    }
}
const fP = (e,t,n)=>{
    const r = new Map
      , o = {
        platform: uP,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return XO(e, t, {
        ...o,
        platform: i
    })
}
  , dP = e=>{
    const {element: t, padding: n} = e;
    function r(o) {
        return Object.prototype.hasOwnProperty.call(o, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(o) {
            return r(t) ? t.current != null ? Dp({
                element: t.current,
                padding: n
            }).fn(o) : {} : t ? Dp({
                element: t,
                padding: n
            }).fn(o) : {}
        }
    }
}
;
var wl = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
function ca(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n != t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!ca(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !ca(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Bp(e) {
    const t = _.useRef(e);
    return wl(()=>{
        t.current = e
    }
    ),
    t
}
function pP(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, whileElementsMounted: i, open: l} = e
      , [a,s] = _.useState({
        x: null,
        y: null,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [u,d] = _.useState(r);
    ca(u, r) || d(r);
    const f = _.useRef(null)
      , g = _.useRef(null)
      , x = _.useRef(a)
      , w = Bp(i)
      , y = Bp(o)
      , [S,m] = _.useState(null)
      , [p,v] = _.useState(null)
      , h = _.useCallback(T=>{
        f.current !== T && (f.current = T,
        m(T))
    }
    , [])
      , O = _.useCallback(T=>{
        g.current !== T && (g.current = T,
        v(T))
    }
    , [])
      , E = _.useCallback(()=>{
        if (!f.current || !g.current)
            return;
        const T = {
            placement: t,
            strategy: n,
            middleware: u
        };
        y.current && (T.platform = y.current),
        fP(f.current, g.current, T).then(H=>{
            const F = {
                ...H,
                isPositioned: !0
            };
            P.current && !ca(x.current, F) && (x.current = F,
            za.flushSync(()=>{
                s(F)
            }
            ))
        }
        )
    }
    , [u, t, n, y]);
    wl(()=>{
        l === !1 && x.current.isPositioned && (x.current.isPositioned = !1,
        s(T=>({
            ...T,
            isPositioned: !1
        })))
    }
    , [l]);
    const P = _.useRef(!1);
    wl(()=>(P.current = !0,
    ()=>{
        P.current = !1
    }
    ), []),
    wl(()=>{
        if (S && p) {
            if (w.current)
                return w.current(S, p, E);
            E()
        }
    }
    , [S, p, E, w]);
    const N = _.useMemo(()=>({
        reference: f,
        floating: g,
        setReference: h,
        setFloating: O
    }), [h, O])
      , z = _.useMemo(()=>({
        reference: S,
        floating: p
    }), [S, p]);
    return _.useMemo(()=>({
        ...a,
        update: E,
        refs: N,
        elements: z,
        reference: h,
        floating: O
    }), [a, E, N, z, h, O])
}
var mP = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
function hP() {
    const e = new Map;
    return {
        emit(t, n) {
            var r;
            (r = e.get(t)) == null || r.forEach(o=>o(n))
        },
        on(t, n) {
            e.set(t, [...e.get(t) || [], n])
        },
        off(t, n) {
            e.set(t, (e.get(t) || []).filter(r=>r !== n))
        }
    }
}
const gP = _.createContext(null)
  , vP = ()=>_.useContext(gP);
function yP(e) {
    return (e == null ? void 0 : e.ownerDocument) || document
}
function wP(e) {
    return yP(e).defaultView || window
}
function el(e) {
    return e ? e instanceof wP(e).Element : !1
}
const xP = Sl["useInsertionEffect".toString()]
  , SP = xP || (e=>e());
function _P(e) {
    const t = _.useRef(()=>{}
    );
    return SP(()=>{
        t.current = e
    }
    ),
    _.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
        return t.current == null ? void 0 : t.current(...r)
    }, [])
}
function OP(e) {
    e === void 0 && (e = {});
    const {open: t=!1, onOpenChange: n, nodeId: r} = e
      , o = pP(e)
      , i = vP()
      , l = _.useRef(null)
      , a = _.useRef({})
      , s = _.useState(()=>hP())[0]
      , [u,d] = _.useState(null)
      , f = _.useCallback(m=>{
        const p = el(m) ? {
            getBoundingClientRect: ()=>m.getBoundingClientRect(),
            contextElement: m
        } : m;
        o.refs.setReference(p)
    }
    , [o.refs])
      , g = _.useCallback(m=>{
        (el(m) || m === null) && (l.current = m,
        d(m)),
        (el(o.refs.reference.current) || o.refs.reference.current === null || m !== null && !el(m)) && o.refs.setReference(m)
    }
    , [o.refs])
      , x = _.useMemo(()=>({
        ...o.refs,
        setReference: g,
        setPositionReference: f,
        domReference: l
    }), [o.refs, g, f])
      , w = _.useMemo(()=>({
        ...o.elements,
        domReference: u
    }), [o.elements, u])
      , y = _P(n)
      , S = _.useMemo(()=>({
        ...o,
        refs: x,
        elements: w,
        dataRef: a,
        nodeId: r,
        events: s,
        open: t,
        onOpenChange: y
    }), [o, r, s, t, y, x, w]);
    return mP(()=>{
        const m = i == null ? void 0 : i.nodesRef.current.find(p=>p.id === r);
        m && (m.context = S)
    }
    ),
    _.useMemo(()=>({
        ...o,
        context: S,
        refs: x,
        reference: g,
        positionReference: f
    }), [o, x, S, g, f])
}
function PP({opened: e, floating: t, position: n, positionDependencies: r}) {
    const [o,i] = _.useState(0);
    _.useEffect(()=>{
        if (t.refs.reference.current && t.refs.floating.current)
            return cP(t.refs.reference.current, t.refs.floating.current, t.update)
    }
    , [t.refs.reference.current, t.refs.floating.current, e, o, n]),
    nr(()=>{
        t.update()
    }
    , r),
    nr(()=>{
        i(l=>l + 1)
    }
    , [e])
}
function bP(e) {
    const t = [rP(e.offset)];
    return e.middlewares.shift && t.push(oP({
        limiter: iP()
    })),
    e.middlewares.flip && t.push(tP()),
    e.middlewares.inline && t.push(nP()),
    t.push(dP({
        element: e.arrowRef,
        padding: e.arrowOffset
    })),
    t
}
function EP(e) {
    const [t,n] = g_({
        value: e.opened,
        defaultValue: e.defaultOpened,
        finalValue: !1,
        onChange: e.onChange
    })
      , r = ()=>{
        var l;
        (l = e.onClose) == null || l.call(e),
        n(!1)
    }
      , o = ()=>{
        var l, a;
        t ? ((l = e.onClose) == null || l.call(e),
        n(!1)) : ((a = e.onOpen) == null || a.call(e),
        n(!0))
    }
      , i = OP({
        placement: e.position,
        middleware: [...bP(e), ...e.width === "target" ? [lP({
            apply({rects: l}) {
                var a, s;
                Object.assign((s = (a = i.refs.floating.current) == null ? void 0 : a.style) != null ? s : {}, {
                    width: `${l.reference.width}px`
                })
            }
        })] : []]
    });
    return PP({
        opened: e.opened,
        position: e.position,
        positionDependencies: e.positionDependencies,
        floating: i
    }),
    nr(()=>{
        var l;
        (l = e.onPositionChange) == null || l.call(e, i.placement)
    }
    , [i.placement]),
    nr(()=>{
        var l, a;
        e.opened ? (a = e.onOpen) == null || a.call(e) : (l = e.onClose) == null || l.call(e)
    }
    , [e.opened]),
    {
        floating: i,
        controlled: typeof e.opened == "boolean",
        opened: t,
        onClose: r,
        onToggle: o
    }
}
const fy = {
    context: "Popover component was not found in the tree",
    children: "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
}
  , [kP,dy] = Bg(fy.context);
var CP = Object.defineProperty
  , NP = Object.defineProperties
  , jP = Object.getOwnPropertyDescriptors
  , fa = Object.getOwnPropertySymbols
  , py = Object.prototype.hasOwnProperty
  , my = Object.prototype.propertyIsEnumerable
  , Wp = (e,t,n)=>t in e ? CP(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , tl = (e,t)=>{
    for (var n in t || (t = {}))
        py.call(t, n) && Wp(e, n, t[n]);
    if (fa)
        for (var n of fa(t))
            my.call(t, n) && Wp(e, n, t[n]);
    return e
}
  , RP = (e,t)=>NP(e, jP(t))
  , $P = (e,t)=>{
    var n = {};
    for (var r in e)
        py.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && fa)
        for (var r of fa(e))
            t.indexOf(r) < 0 && my.call(e, r) && (n[r] = e[r]);
    return n
}
;
const TP = {
    refProp: "ref",
    popupType: "dialog"
}
  , hy = _.forwardRef((e,t)=>{
    const n = rt("PopoverTarget", TP, e)
      , {children: r, refProp: o, popupType: i} = n
      , l = $P(n, ["children", "refProp", "popupType"]);
    if (!Xc(r))
        throw new Error(fy.children);
    const a = l
      , s = dy()
      , u = _v(s.reference, r.ref, t)
      , d = s.withRoles ? {
        "aria-haspopup": i,
        "aria-expanded": s.opened,
        "aria-controls": s.getDropdownId(),
        id: s.getTargetId()
    } : {};
    return _.cloneElement(r, tl(RP(tl(tl(tl({}, a), d), s.targetProps), {
        className: Vg(s.targetProps.className, a.className, r.props.className),
        [o]: u
    }), s.controlled ? null : {
        onClick: s.onToggle
    }))
}
);
hy.displayName = "@mantine/core/PopoverTarget";
var IP = eo((e,{radius: t, shadow: n})=>({
    dropdown: {
        position: "absolute",
        backgroundColor: e.white,
        background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
        border: `${D(1)} solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]}`,
        padding: `${e.spacing.sm} ${e.spacing.md}`,
        boxShadow: e.shadows[n] || n || "none",
        borderRadius: e.fn.radius(t),
        "&:focus": {
            outline: 0
        }
    },
    arrow: {
        backgroundColor: "inherit",
        border: `${D(1)} solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]}`,
        zIndex: 1
    }
}));
const DP = IP;
var LP = Object.defineProperty
  , Vp = Object.getOwnPropertySymbols
  , zP = Object.prototype.hasOwnProperty
  , MP = Object.prototype.propertyIsEnumerable
  , Qp = (e,t,n)=>t in e ? LP(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , dr = (e,t)=>{
    for (var n in t || (t = {}))
        zP.call(t, n) && Qp(e, n, t[n]);
    if (Vp)
        for (var n of Vp(t))
            MP.call(t, n) && Qp(e, n, t[n]);
    return e
}
;
const Kp = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out"
};
function AP({transition: e, state: t, duration: n, timingFunction: r}) {
    const o = {
        transitionDuration: `${n}ms`,
        transitionTimingFunction: r
    };
    return typeof e == "string" ? e in Gi ? dr(dr(dr({
        transitionProperty: Gi[e].transitionProperty
    }, o), Gi[e].common), Gi[e][Kp[t]]) : null : dr(dr(dr({
        transitionProperty: e.transitionProperty
    }, o), e.common), e[Kp[t]])
}
function FP({duration: e, exitDuration: t, timingFunction: n, mounted: r, onEnter: o, onExit: i, onEntered: l, onExited: a}) {
    const s = Dt()
      , u = Ov()
      , d = s.respectReducedMotion ? u : !1
      , [f,g] = _.useState(d ? 0 : e)
      , [x,w] = _.useState(r ? "entered" : "exited")
      , y = _.useRef(-1)
      , S = m=>{
        const p = m ? o : i
          , v = m ? l : a;
        w(m ? "pre-entering" : "pre-exiting"),
        window.clearTimeout(y.current);
        const h = d ? 0 : m ? e : t;
        if (g(h),
        h === 0)
            typeof p == "function" && p(),
            typeof v == "function" && v(),
            w(m ? "entered" : "exited");
        else {
            const O = window.setTimeout(()=>{
                typeof p == "function" && p(),
                w(m ? "entering" : "exiting")
            }
            , 10);
            y.current = window.setTimeout(()=>{
                window.clearTimeout(O),
                typeof v == "function" && v(),
                w(m ? "entered" : "exited")
            }
            , h)
        }
    }
    ;
    return nr(()=>{
        S(r)
    }
    , [r]),
    _.useEffect(()=>()=>window.clearTimeout(y.current), []),
    {
        transitionDuration: f,
        transitionStatus: x,
        transitionTimingFunction: n || s.transitionTimingFunction
    }
}
function gy({keepMounted: e, transition: t, duration: n=250, exitDuration: r=n, mounted: o, children: i, timingFunction: l, onExit: a, onEntered: s, onEnter: u, onExited: d}) {
    const {transitionDuration: f, transitionStatus: g, transitionTimingFunction: x} = FP({
        mounted: o,
        exitDuration: r,
        duration: n,
        timingFunction: l,
        onExit: a,
        onEntered: s,
        onEnter: u,
        onExited: d
    });
    return f === 0 ? o ? R.createElement(R.Fragment, null, i({})) : e ? i({
        display: "none"
    }) : null : g === "exited" ? e ? i({
        display: "none"
    }) : null : R.createElement(R.Fragment, null, i(AP({
        transition: t,
        duration: f,
        state: g,
        timingFunction: x
    })))
}
gy.displayName = "@mantine/core/Transition";
function vy({children: e, active: t=!0, refProp: n="ref"}) {
    const r = f_(t)
      , o = _v(r, e == null ? void 0 : e.ref);
    return Xc(e) ? _.cloneElement(e, {
        [n]: o
    }) : e
}
vy.displayName = "@mantine/core/FocusTrap";
var HP = Object.defineProperty
  , UP = Object.defineProperties
  , BP = Object.getOwnPropertyDescriptors
  , Yp = Object.getOwnPropertySymbols
  , WP = Object.prototype.hasOwnProperty
  , VP = Object.prototype.propertyIsEnumerable
  , Gp = (e,t,n)=>t in e ? HP(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , vn = (e,t)=>{
    for (var n in t || (t = {}))
        WP.call(t, n) && Gp(e, n, t[n]);
    if (Yp)
        for (var n of Yp(t))
            VP.call(t, n) && Gp(e, n, t[n]);
    return e
}
  , nl = (e,t)=>UP(e, BP(t));
function Xp(e, t, n, r) {
    return e === "center" || r === "center" ? {
        top: t
    } : e === "end" ? {
        bottom: n
    } : e === "start" ? {
        top: n
    } : {}
}
function qp(e, t, n, r, o) {
    return e === "center" || r === "center" ? {
        left: t
    } : e === "end" ? {
        [o === "ltr" ? "right" : "left"]: n
    } : e === "start" ? {
        [o === "ltr" ? "left" : "right"]: n
    } : {}
}
const QP = {
    bottom: "borderTopLeftRadius",
    left: "borderTopRightRadius",
    right: "borderBottomLeftRadius",
    top: "borderBottomRightRadius"
};
function KP({position: e, arrowSize: t, arrowOffset: n, arrowRadius: r, arrowPosition: o, arrowX: i, arrowY: l, dir: a}) {
    const [s,u="center"] = e.split("-")
      , d = {
        width: D(t),
        height: D(t),
        transform: "rotate(45deg)",
        position: "absolute",
        [QP[s]]: D(r)
    }
      , f = D(-t / 2);
    return s === "left" ? nl(vn(vn({}, d), Xp(u, l, n, o)), {
        right: f,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent"
    }) : s === "right" ? nl(vn(vn({}, d), Xp(u, l, n, o)), {
        left: f,
        borderRightColor: "transparent",
        borderTopColor: "transparent"
    }) : s === "top" ? nl(vn(vn({}, d), qp(u, i, n, o, a)), {
        bottom: f,
        borderTopColor: "transparent",
        borderLeftColor: "transparent"
    }) : s === "bottom" ? nl(vn(vn({}, d), qp(u, i, n, o, a)), {
        top: f,
        borderBottomColor: "transparent",
        borderRightColor: "transparent"
    }) : {}
}
var YP = Object.defineProperty
  , GP = Object.defineProperties
  , XP = Object.getOwnPropertyDescriptors
  , da = Object.getOwnPropertySymbols
  , yy = Object.prototype.hasOwnProperty
  , wy = Object.prototype.propertyIsEnumerable
  , Jp = (e,t,n)=>t in e ? YP(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , qP = (e,t)=>{
    for (var n in t || (t = {}))
        yy.call(t, n) && Jp(e, n, t[n]);
    if (da)
        for (var n of da(t))
            wy.call(t, n) && Jp(e, n, t[n]);
    return e
}
  , JP = (e,t)=>GP(e, XP(t))
  , ZP = (e,t)=>{
    var n = {};
    for (var r in e)
        yy.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && da)
        for (var r of da(e))
            t.indexOf(r) < 0 && wy.call(e, r) && (n[r] = e[r]);
    return n
}
;
const xy = _.forwardRef((e,t)=>{
    var n = e
      , {position: r, arrowSize: o, arrowOffset: i, arrowRadius: l, arrowPosition: a, visible: s, arrowX: u, arrowY: d} = n
      , f = ZP(n, ["position", "arrowSize", "arrowOffset", "arrowRadius", "arrowPosition", "visible", "arrowX", "arrowY"]);
    const g = Dt();
    return s ? R.createElement("div", JP(qP({}, f), {
        ref: t,
        style: KP({
            position: r,
            arrowSize: o,
            arrowOffset: i,
            arrowRadius: l,
            arrowPosition: a,
            dir: g.dir,
            arrowX: u,
            arrowY: d
        })
    })) : null
}
);
xy.displayName = "@mantine/core/FloatingArrow";
var eb = Object.defineProperty
  , tb = Object.defineProperties
  , nb = Object.getOwnPropertyDescriptors
  , pa = Object.getOwnPropertySymbols
  , Sy = Object.prototype.hasOwnProperty
  , _y = Object.prototype.propertyIsEnumerable
  , Zp = (e,t,n)=>t in e ? eb(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , pr = (e,t)=>{
    for (var n in t || (t = {}))
        Sy.call(t, n) && Zp(e, n, t[n]);
    if (pa)
        for (var n of pa(t))
            _y.call(t, n) && Zp(e, n, t[n]);
    return e
}
  , rl = (e,t)=>tb(e, nb(t))
  , rb = (e,t)=>{
    var n = {};
    for (var r in e)
        Sy.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && pa)
        for (var r of pa(e))
            t.indexOf(r) < 0 && _y.call(e, r) && (n[r] = e[r]);
    return n
}
;
const ob = {};
function Oy(e) {
    var t;
    const n = rt("PopoverDropdown", ob, e)
      , {style: r, className: o, children: i, onKeyDownCapture: l} = n
      , a = rb(n, ["style", "className", "children", "onKeyDownCapture"])
      , s = dy()
      , {classes: u, cx: d} = DP({
        radius: s.radius,
        shadow: s.shadow
    }, {
        name: s.__staticSelector,
        classNames: s.classNames,
        styles: s.styles,
        unstyled: s.unstyled,
        variant: s.variant
    })
      , f = o_({
        opened: s.opened,
        shouldReturnFocus: s.returnFocus
    })
      , g = s.withRoles ? {
        "aria-labelledby": s.getTargetId(),
        id: s.getDropdownId(),
        role: "dialog"
    } : {};
    return s.disabled ? null : R.createElement(Gv, rl(pr({}, s.portalProps), {
        withinPortal: s.withinPortal
    }), R.createElement(gy, rl(pr({
        mounted: s.opened
    }, s.transitionProps), {
        transition: s.transitionProps.transition || "fade",
        duration: (t = s.transitionProps.duration) != null ? t : 150,
        keepMounted: s.keepMounted,
        exitDuration: typeof s.transitionProps.exitDuration == "number" ? s.transitionProps.exitDuration : s.transitionProps.duration
    }), x=>{
        var w, y;
        return R.createElement(vy, {
            active: s.trapFocus
        }, R.createElement(fn, pr(rl(pr({}, g), {
            tabIndex: -1,
            ref: s.floating,
            style: rl(pr(pr({}, r), x), {
                zIndex: s.zIndex,
                top: (w = s.y) != null ? w : 0,
                left: (y = s.x) != null ? y : 0,
                width: s.width === "target" ? void 0 : D(s.width)
            }),
            className: d(u.dropdown, o),
            onKeyDownCapture: Lw(s.onClose, {
                active: s.closeOnEscape,
                onTrigger: f,
                onKeyDown: l
            }),
            "data-position": s.placement
        }), a), i, R.createElement(xy, {
            ref: s.arrowRef,
            arrowX: s.arrowX,
            arrowY: s.arrowY,
            visible: s.withArrow,
            position: s.placement,
            arrowSize: s.arrowSize,
            arrowRadius: s.arrowRadius,
            arrowOffset: s.arrowOffset,
            arrowPosition: s.arrowPosition,
            className: u.arrow
        })))
    }
    ))
}
Oy.displayName = "@mantine/core/PopoverDropdown";
function ib(e, t) {
    if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
        const [n,r] = t.split("-")
          , o = n === "right" ? "left" : "right";
        return r === void 0 ? o : `${o}-${r}`
    }
    return t
}
var em = Object.getOwnPropertySymbols
  , lb = Object.prototype.hasOwnProperty
  , ab = Object.prototype.propertyIsEnumerable
  , sb = (e,t)=>{
    var n = {};
    for (var r in e)
        lb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && em)
        for (var r of em(e))
            t.indexOf(r) < 0 && ab.call(e, r) && (n[r] = e[r]);
    return n
}
;
const ub = {
    position: "bottom",
    offset: 8,
    positionDependencies: [],
    transitionProps: {
        transition: "fade",
        duration: 150
    },
    middlewares: {
        flip: !0,
        shift: !0,
        inline: !1
    },
    arrowSize: 7,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    closeOnClickOutside: !0,
    withinPortal: !1,
    closeOnEscape: !0,
    trapFocus: !1,
    withRoles: !0,
    returnFocus: !1,
    clickOutsideEvents: ["mousedown", "touchstart"],
    zIndex: mv("popover"),
    __staticSelector: "Popover",
    width: "max-content"
};
function no(e) {
    var t, n, r, o, i, l;
    const a = _.useRef(null)
      , s = rt("Popover", ub, e)
      , {children: u, position: d, offset: f, onPositionChange: g, positionDependencies: x, opened: w, transitionProps: y, width: S, middlewares: m, withArrow: p, arrowSize: v, arrowOffset: h, arrowRadius: O, arrowPosition: E, unstyled: P, classNames: N, styles: z, closeOnClickOutside: T, withinPortal: H, portalProps: F, closeOnEscape: ee, clickOutsideEvents: ce, trapFocus: ae, onClose: ne, onOpen: ye, onChange: $, zIndex: M, radius: U, shadow: te, id: se, defaultOpened: pt, __staticSelector: ie, withRoles: ot, disabled: Xe, returnFocus: Lt, variant: mt, keepMounted: lo} = s
      , Pi = sb(s, ["children", "position", "offset", "onPositionChange", "positionDependencies", "opened", "transitionProps", "width", "middlewares", "withArrow", "arrowSize", "arrowOffset", "arrowRadius", "arrowPosition", "unstyled", "classNames", "styles", "closeOnClickOutside", "withinPortal", "portalProps", "closeOnEscape", "clickOutsideEvents", "trapFocus", "onClose", "onOpen", "onChange", "zIndex", "radius", "shadow", "id", "defaultOpened", "__staticSelector", "withRoles", "disabled", "returnFocus", "variant", "keepMounted"])
      , [bi,ns] = _.useState(null)
      , [rs,os] = _.useState(null)
      , hn = m_(se)
      , Ei = Dt()
      , Pe = EP({
        middlewares: m,
        width: S,
        position: ib(Ei.dir, d),
        offset: typeof f == "number" ? f + (p ? v / 2 : 0) : f,
        arrowRef: a,
        arrowOffset: h,
        onPositionChange: g,
        positionDependencies: x,
        opened: w,
        defaultOpened: pt,
        onChange: $,
        onOpen: ye,
        onClose: ne
    });
    e_(()=>Pe.opened && T && Pe.onClose(), ce, [bi, rs]);
    const ao = _.useCallback(ht=>{
        ns(ht),
        Pe.floating.reference(ht)
    }
    , [Pe.floating.reference])
      , so = _.useCallback(ht=>{
        os(ht),
        Pe.floating.floating(ht)
    }
    , [Pe.floating.floating]);
    return R.createElement(kP, {
        value: {
            returnFocus: Lt,
            disabled: Xe,
            controlled: Pe.controlled,
            reference: ao,
            floating: so,
            x: Pe.floating.x,
            y: Pe.floating.y,
            arrowX: (r = (n = (t = Pe.floating) == null ? void 0 : t.middlewareData) == null ? void 0 : n.arrow) == null ? void 0 : r.x,
            arrowY: (l = (i = (o = Pe.floating) == null ? void 0 : o.middlewareData) == null ? void 0 : i.arrow) == null ? void 0 : l.y,
            opened: Pe.opened,
            arrowRef: a,
            transitionProps: y,
            width: S,
            withArrow: p,
            arrowSize: v,
            arrowOffset: h,
            arrowRadius: O,
            arrowPosition: E,
            placement: Pe.floating.placement,
            trapFocus: ae,
            withinPortal: H,
            portalProps: F,
            zIndex: M,
            radius: U,
            shadow: te,
            closeOnEscape: ee,
            onClose: Pe.onClose,
            onToggle: Pe.onToggle,
            getTargetId: ()=>`${hn}-target`,
            getDropdownId: ()=>`${hn}-dropdown`,
            withRoles: ot,
            targetProps: Pi,
            __staticSelector: ie,
            classNames: N,
            styles: z,
            unstyled: P,
            variant: mt,
            keepMounted: lo
        }
    }, u)
}
no.Target = hy;
no.Dropdown = Oy;
no.displayName = "@mantine/core/Popover";
const bo = {
    xs: D(30),
    sm: D(36),
    md: D(42),
    lg: D(50),
    xl: D(60)
};
var cb = eo((e,{orientation: t, buttonBorderWidth: n})=>({
    root: {
        display: "flex",
        flexDirection: t === "vertical" ? "column" : "row",
        "& [data-button]": {
            "&:first-of-type:not(:last-of-type)": {
                borderBottomRightRadius: 0,
                [t === "vertical" ? "borderBottomLeftRadius" : "borderTopRightRadius"]: 0,
                [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: `calc(${D(n)} / 2)`
            },
            "&:last-of-type:not(:first-of-type)": {
                borderTopLeftRadius: 0,
                [t === "vertical" ? "borderTopRightRadius" : "borderBottomLeftRadius"]: 0,
                [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${D(n)} / 2)`
            },
            "&:not(:first-of-type):not(:last-of-type)": {
                borderRadius: 0,
                [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${D(n)} / 2)`,
                [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: `calc(${D(n)} / 2)`
            },
            "& + [data-button]": {
                [t === "vertical" ? "marginTop" : "marginLeft"]: `calc(${n} * -1)`,
                "@media (min-resolution: 192dpi)": {
                    [t === "vertical" ? "marginTop" : "marginLeft"]: 0
                }
            }
        }
    }
}));
const fb = cb;
var db = Object.defineProperty
  , ma = Object.getOwnPropertySymbols
  , Py = Object.prototype.hasOwnProperty
  , by = Object.prototype.propertyIsEnumerable
  , tm = (e,t,n)=>t in e ? db(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , pb = (e,t)=>{
    for (var n in t || (t = {}))
        Py.call(t, n) && tm(e, n, t[n]);
    if (ma)
        for (var n of ma(t))
            by.call(t, n) && tm(e, n, t[n]);
    return e
}
  , mb = (e,t)=>{
    var n = {};
    for (var r in e)
        Py.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ma)
        for (var r of ma(e))
            t.indexOf(r) < 0 && by.call(e, r) && (n[r] = e[r]);
    return n
}
;
const hb = {
    orientation: "horizontal",
    buttonBorderWidth: 1
}
  , Ey = _.forwardRef((e,t)=>{
    const n = rt("ButtonGroup", hb, e)
      , {className: r, orientation: o, buttonBorderWidth: i, unstyled: l} = n
      , a = mb(n, ["className", "orientation", "buttonBorderWidth", "unstyled"])
      , {classes: s, cx: u} = fb({
        orientation: o,
        buttonBorderWidth: i
    }, {
        name: "ButtonGroup",
        unstyled: l
    });
    return R.createElement(fn, pb({
        className: u(s.root, r),
        ref: t
    }, a))
}
);
Ey.displayName = "@mantine/core/ButtonGroup";
var gb = Object.defineProperty
  , vb = Object.defineProperties
  , yb = Object.getOwnPropertyDescriptors
  , nm = Object.getOwnPropertySymbols
  , wb = Object.prototype.hasOwnProperty
  , xb = Object.prototype.propertyIsEnumerable
  , rm = (e,t,n)=>t in e ? gb(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Jt = (e,t)=>{
    for (var n in t || (t = {}))
        wb.call(t, n) && rm(e, n, t[n]);
    if (nm)
        for (var n of nm(t))
            xb.call(t, n) && rm(e, n, t[n]);
    return e
}
  , xl = (e,t)=>vb(e, yb(t));
const Sb = ["filled", "outline", "light", "white", "default", "subtle", "gradient"]
  , Gu = {
    xs: {
        height: bo.xs,
        paddingLeft: D(14),
        paddingRight: D(14)
    },
    sm: {
        height: bo.sm,
        paddingLeft: D(18),
        paddingRight: D(18)
    },
    md: {
        height: bo.md,
        paddingLeft: D(22),
        paddingRight: D(22)
    },
    lg: {
        height: bo.lg,
        paddingLeft: D(26),
        paddingRight: D(26)
    },
    xl: {
        height: bo.xl,
        paddingLeft: D(32),
        paddingRight: D(32)
    },
    "compact-xs": {
        height: D(22),
        paddingLeft: D(7),
        paddingRight: D(7)
    },
    "compact-sm": {
        height: D(26),
        paddingLeft: D(8),
        paddingRight: D(8)
    },
    "compact-md": {
        height: D(30),
        paddingLeft: D(10),
        paddingRight: D(10)
    },
    "compact-lg": {
        height: D(34),
        paddingLeft: D(12),
        paddingRight: D(12)
    },
    "compact-xl": {
        height: D(40),
        paddingLeft: D(14),
        paddingRight: D(14)
    }
};
function _b({compact: e, size: t, withLeftIcon: n, withRightIcon: r}) {
    if (e)
        return Gu[`compact-${t}`];
    const o = Gu[t];
    return o ? xl(Jt({}, o), {
        paddingLeft: n ? `calc(${o.paddingLeft}  / 1.5)` : o.paddingLeft,
        paddingRight: r ? `calc(${o.paddingRight}  / 1.5)` : o.paddingRight
    }) : {}
}
const Ob = e=>({
    display: e ? "block" : "inline-block",
    width: e ? "100%" : "auto"
});
function Pb({variant: e, theme: t, color: n, gradient: r}) {
    if (!Sb.includes(e))
        return null;
    const o = t.fn.variant({
        color: n,
        variant: e,
        gradient: r
    });
    return e === "gradient" ? Jt({
        border: 0,
        backgroundImage: o.background,
        color: o.color
    }, t.fn.hover({
        backgroundSize: "200%"
    })) : Jt({
        border: `${D(1)} solid ${o.border}`,
        backgroundColor: o.background,
        color: o.color
    }, t.fn.hover({
        backgroundColor: o.hover
    }))
}
var bb = eo((e,{radius: t, fullWidth: n, compact: r, withLeftIcon: o, withRightIcon: i, color: l, gradient: a},{variant: s, size: u})=>({
    root: xl(Jt(xl(Jt(Jt(Jt(Jt({}, _b({
        compact: r,
        size: u,
        withLeftIcon: o,
        withRightIcon: i
    })), e.fn.fontStyles()), e.fn.focusStyles()), Ob(n)), {
        borderRadius: e.fn.radius(t),
        fontWeight: 600,
        position: "relative",
        lineHeight: 1,
        fontSize: Re({
            size: u,
            sizes: e.fontSizes
        }),
        userSelect: "none",
        cursor: "pointer"
    }), Pb({
        variant: s,
        theme: e,
        color: l,
        gradient: a
    })), {
        "&:active": e.activeStyles,
        "&:disabled, &[data-disabled]": {
            borderColor: "transparent",
            backgroundColor: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
            color: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[5],
            cursor: "not-allowed",
            backgroundImage: "none",
            pointerEvents: "none",
            "&:active": {
                transform: "none"
            }
        },
        "&[data-loading]": {
            pointerEvents: "none",
            "&::before": xl(Jt({
                content: '""'
            }, e.fn.cover(D(-1))), {
                backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.colors.dark[7], .5) : "rgba(255, 255, 255, .5)",
                borderRadius: e.fn.radius(t),
                cursor: "not-allowed"
            })
        }
    }),
    icon: {
        display: "flex",
        alignItems: "center"
    },
    leftIcon: {
        marginRight: e.spacing.xs
    },
    rightIcon: {
        marginLeft: e.spacing.xs
    },
    centerLoader: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        opacity: .5
    },
    inner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflow: "visible"
    },
    label: {
        whiteSpace: "nowrap",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
    }
}));
const Eb = bb;
var kb = Object.defineProperty
  , ha = Object.getOwnPropertySymbols
  , ky = Object.prototype.hasOwnProperty
  , Cy = Object.prototype.propertyIsEnumerable
  , om = (e,t,n)=>t in e ? kb(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , im = (e,t)=>{
    for (var n in t || (t = {}))
        ky.call(t, n) && om(e, n, t[n]);
    if (ha)
        for (var n of ha(t))
            Cy.call(t, n) && om(e, n, t[n]);
    return e
}
  , Cb = (e,t)=>{
    var n = {};
    for (var r in e)
        ky.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ha)
        for (var r of ha(e))
            t.indexOf(r) < 0 && Cy.call(e, r) && (n[r] = e[r]);
    return n
}
;
const Nb = {
    size: "sm",
    type: "button",
    variant: "filled",
    loaderPosition: "left"
}
  , pf = _.forwardRef((e,t)=>{
    const n = rt("Button", Nb, e)
      , {className: r, size: o, color: i, type: l, disabled: a, children: s, leftIcon: u, rightIcon: d, fullWidth: f, variant: g, radius: x, uppercase: w, compact: y, loading: S, loaderPosition: m, loaderProps: p, gradient: v, classNames: h, styles: O, unstyled: E} = n
      , P = Cb(n, ["className", "size", "color", "type", "disabled", "children", "leftIcon", "rightIcon", "fullWidth", "variant", "radius", "uppercase", "compact", "loading", "loaderPosition", "loaderProps", "gradient", "classNames", "styles", "unstyled"])
      , {classes: N, cx: z, theme: T} = Eb({
        radius: x,
        color: i,
        fullWidth: f,
        compact: y,
        gradient: v,
        withLeftIcon: !!u,
        withRightIcon: !!d
    }, {
        name: "Button",
        unstyled: E,
        classNames: h,
        styles: O,
        variant: g,
        size: o
    })
      , H = T.fn.variant({
        color: i,
        variant: g
    })
      , F = R.createElement(Bv, im({
        color: H.color,
        size: `calc(${Re({
            size: o,
            sizes: Gu
        }).height} / 2)`
    }, p));
    return R.createElement(G_, im({
        className: z(N.root, r),
        type: l,
        disabled: a,
        "data-button": !0,
        "data-disabled": a || void 0,
        "data-loading": S || void 0,
        ref: t,
        unstyled: E
    }, P), R.createElement("div", {
        className: N.inner
    }, (u || S && m === "left") && R.createElement("span", {
        className: z(N.icon, N.leftIcon)
    }, S && m === "left" ? F : u), S && m === "center" && R.createElement("span", {
        className: N.centerLoader
    }, F), R.createElement("span", {
        className: N.label,
        style: {
            textTransform: w ? "uppercase" : void 0
        }
    }, s), (d || S && m === "right") && R.createElement("span", {
        className: z(N.icon, N.rightIcon)
    }, S && m === "right" ? F : d)))
}
);
pf.displayName = "@mantine/core/Button";
pf.Group = Ey;
const jb = pf
  , Ny = {
    context: "HoverCard component was not found in the tree",
    children: "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
}
  , [Rb,jy] = Bg(Ny.context);
var $b = Object.defineProperty
  , ga = Object.getOwnPropertySymbols
  , Ry = Object.prototype.hasOwnProperty
  , $y = Object.prototype.propertyIsEnumerable
  , lm = (e,t,n)=>t in e ? $b(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Tb = (e,t)=>{
    for (var n in t || (t = {}))
        Ry.call(t, n) && lm(e, n, t[n]);
    if (ga)
        for (var n of ga(t))
            $y.call(t, n) && lm(e, n, t[n]);
    return e
}
  , Ib = (e,t)=>{
    var n = {};
    for (var r in e)
        Ry.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ga)
        for (var r of ga(e))
            t.indexOf(r) < 0 && $y.call(e, r) && (n[r] = e[r]);
    return n
}
;
const Db = {};
function Ty(e) {
    const t = rt("HoverCardDropdown", Db, e)
      , {children: n, onMouseEnter: r, onMouseLeave: o} = t
      , i = Ib(t, ["children", "onMouseEnter", "onMouseLeave"])
      , l = jy()
      , a = Ql(r, l.openDropdown)
      , s = Ql(o, l.closeDropdown);
    return R.createElement(no.Dropdown, Tb({
        onMouseEnter: a,
        onMouseLeave: s
    }, i), n)
}
Ty.displayName = "@mantine/core/HoverCardDropdown";
var Lb = Object.defineProperty
  , va = Object.getOwnPropertySymbols
  , Iy = Object.prototype.hasOwnProperty
  , Dy = Object.prototype.propertyIsEnumerable
  , am = (e,t,n)=>t in e ? Lb(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , zb = (e,t)=>{
    for (var n in t || (t = {}))
        Iy.call(t, n) && am(e, n, t[n]);
    if (va)
        for (var n of va(t))
            Dy.call(t, n) && am(e, n, t[n]);
    return e
}
  , Mb = (e,t)=>{
    var n = {};
    for (var r in e)
        Iy.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && va)
        for (var r of va(e))
            t.indexOf(r) < 0 && Dy.call(e, r) && (n[r] = e[r]);
    return n
}
;
const Ab = {
    refProp: "ref"
}
  , Ly = _.forwardRef((e,t)=>{
    const n = rt("HoverCardTarget", Ab, e)
      , {children: r, refProp: o} = n
      , i = Mb(n, ["children", "refProp"]);
    if (!Xc(r))
        throw new Error(Ny.children);
    const l = jy()
      , a = Ql(r.props.onMouseEnter, l.openDropdown)
      , s = Ql(r.props.onMouseLeave, l.closeDropdown);
    return R.createElement(no.Target, zb({
        refProp: o,
        ref: t
    }, i), _.cloneElement(r, {
        onMouseEnter: a,
        onMouseLeave: s
    }))
}
);
Ly.displayName = "@mantine/core/HoverCardTarget";
function Fb({open: e, close: t, openDelay: n, closeDelay: r}) {
    const o = _.useRef(-1)
      , i = _.useRef(-1)
      , l = ()=>{
        window.clearTimeout(o.current),
        window.clearTimeout(i.current)
    }
      , a = ()=>{
        l(),
        n === 0 ? e() : o.current = window.setTimeout(e, n)
    }
      , s = ()=>{
        l(),
        r === 0 ? t() : i.current = window.setTimeout(t, r)
    }
    ;
    return _.useEffect(()=>l, []),
    {
        openDropdown: a,
        closeDropdown: s
    }
}
var Hb = Object.defineProperty
  , ya = Object.getOwnPropertySymbols
  , zy = Object.prototype.hasOwnProperty
  , My = Object.prototype.propertyIsEnumerable
  , sm = (e,t,n)=>t in e ? Hb(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Ub = (e,t)=>{
    for (var n in t || (t = {}))
        zy.call(t, n) && sm(e, n, t[n]);
    if (ya)
        for (var n of ya(t))
            My.call(t, n) && sm(e, n, t[n]);
    return e
}
  , Bb = (e,t)=>{
    var n = {};
    for (var r in e)
        zy.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ya)
        for (var r of ya(e))
            t.indexOf(r) < 0 && My.call(e, r) && (n[r] = e[r]);
    return n
}
;
const Wb = {
    openDelay: 0,
    closeDelay: 150,
    initiallyOpened: !1
};
function zr(e) {
    const t = rt("HoverCard", Wb, e)
      , {children: n, onOpen: r, onClose: o, openDelay: i, closeDelay: l, initiallyOpened: a} = t
      , s = Bb(t, ["children", "onOpen", "onClose", "openDelay", "closeDelay", "initiallyOpened"])
      , [u,{open: d, close: f}] = v_(a, {
        onClose: o,
        onOpen: r
    })
      , {openDropdown: g, closeDropdown: x} = Fb({
        open: d,
        close: f,
        openDelay: i,
        closeDelay: l
    });
    return R.createElement(Rb, {
        value: {
            openDropdown: g,
            closeDropdown: x
        }
    }, R.createElement(no, Ub({
        opened: u,
        __staticSelector: "HoverCard"
    }, s), n))
}
zr.displayName = "@mantine/core/HoverCard";
zr.Target = Ly;
zr.Dropdown = Ty;
var Vb = Object.defineProperty
  , Qb = Object.defineProperties
  , Kb = Object.getOwnPropertyDescriptors
  , um = Object.getOwnPropertySymbols
  , Yb = Object.prototype.hasOwnProperty
  , Gb = Object.prototype.propertyIsEnumerable
  , cm = (e,t,n)=>t in e ? Vb(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Xb = (e,t)=>{
    for (var n in t || (t = {}))
        Yb.call(t, n) && cm(e, n, t[n]);
    if (um)
        for (var n of um(t))
            Gb.call(t, n) && cm(e, n, t[n]);
    return e
}
  , qb = (e,t)=>Qb(e, Kb(t))
  , Jb = eo((e,{captionSide: t, horizontalSpacing: n, verticalSpacing: r, fontSize: o, withBorder: i, withColumnBorders: l})=>{
    const a = `${D(1)} solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]}`;
    return {
        root: qb(Xb({}, e.fn.fontStyles()), {
            width: "100%",
            borderCollapse: "collapse",
            captionSide: t,
            color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
            lineHeight: e.lineHeight,
            border: i ? a : void 0,
            "& caption": {
                marginTop: t === "top" ? 0 : e.spacing.xs,
                marginBottom: t === "bottom" ? 0 : e.spacing.xs,
                fontSize: e.fontSizes.sm,
                color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6]
            },
            "& thead tr th, & tfoot tr th, & tbody tr th": {
                textAlign: "left",
                fontWeight: "bold",
                color: e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[7],
                fontSize: Re({
                    size: o,
                    sizes: e.fontSizes
                }),
                padding: `${Re({
                    size: r,
                    sizes: e.spacing
                })} ${Re({
                    size: n,
                    sizes: e.spacing
                })}`
            },
            "& thead tr th": {
                borderBottom: a
            },
            "& tfoot tr th, & tbody tr th": {
                borderTop: a
            },
            "& tbody tr td": {
                padding: `${Re({
                    size: r,
                    sizes: e.spacing
                })} ${Re({
                    size: n,
                    sizes: e.spacing
                })}`,
                borderTop: a,
                fontSize: Re({
                    size: o,
                    sizes: e.fontSizes
                })
            },
            "& tbody tr:first-of-type td, & tbody tr:first-of-type th": {
                borderTop: "none"
            },
            "& thead th, & tbody td": {
                borderRight: l ? a : "none",
                "&:last-of-type": {
                    borderRight: "none",
                    borderLeft: l ? a : "none"
                }
            },
            "& tbody tr th": {
                borderRight: l ? a : "none"
            },
            "&[data-striped] tbody tr:nth-of-type(odd)": {
                backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[0]
            },
            "&[data-hover] tbody tr": e.fn.hover({
                backgroundColor: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[1]
            })
        })
    }
}
);
const Zb = Jb;
var eE = Object.defineProperty
  , tE = Object.defineProperties
  , nE = Object.getOwnPropertyDescriptors
  , wa = Object.getOwnPropertySymbols
  , Ay = Object.prototype.hasOwnProperty
  , Fy = Object.prototype.propertyIsEnumerable
  , fm = (e,t,n)=>t in e ? eE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , rE = (e,t)=>{
    for (var n in t || (t = {}))
        Ay.call(t, n) && fm(e, n, t[n]);
    if (wa)
        for (var n of wa(t))
            Fy.call(t, n) && fm(e, n, t[n]);
    return e
}
  , oE = (e,t)=>tE(e, nE(t))
  , iE = (e,t)=>{
    var n = {};
    for (var r in e)
        Ay.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && wa)
        for (var r of wa(e))
            t.indexOf(r) < 0 && Fy.call(e, r) && (n[r] = e[r]);
    return n
}
;
const lE = {
    striped: !1,
    highlightOnHover: !1,
    captionSide: "top",
    horizontalSpacing: "xs",
    fontSize: "sm",
    verticalSpacing: 7,
    withBorder: !1,
    withColumnBorders: !1
}
  , Hy = _.forwardRef((e,t)=>{
    const n = rt("Table", lE, e)
      , {className: r, children: o, striped: i, highlightOnHover: l, captionSide: a, horizontalSpacing: s, verticalSpacing: u, fontSize: d, unstyled: f, withBorder: g, withColumnBorders: x, variant: w} = n
      , y = iE(n, ["className", "children", "striped", "highlightOnHover", "captionSide", "horizontalSpacing", "verticalSpacing", "fontSize", "unstyled", "withBorder", "withColumnBorders", "variant"])
      , {classes: S, cx: m} = Zb({
        captionSide: a,
        verticalSpacing: u,
        horizontalSpacing: s,
        fontSize: d,
        withBorder: g,
        withColumnBorders: x
    }, {
        unstyled: f,
        name: "Table",
        variant: w
    });
    return R.createElement(fn, oE(rE({}, y), {
        component: "table",
        ref: t,
        className: m(S.root, r),
        "data-striped": i || void 0,
        "data-hover": l || void 0
    }), o)
}
);
Hy.displayName = "@mantine/core/Table";
/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Z() {
    return Z = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Z.apply(this, arguments)
}
var Se;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Se || (Se = {}));
const dm = "popstate";
function aE(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: l, hash: a} = r.location;
        return pi("", {
            pathname: i,
            search: l,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : ir(o)
    }
    return uE(t, n, null, e)
}
function K(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Gr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function sE() {
    return Math.random().toString(36).substr(2, 8)
}
function pm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function pi(e, t, n, r) {
    return n === void 0 && (n = null),
    Z({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? mn(t) : t, {
        state: n,
        key: t && t.key || r || sE()
    })
}
function ir(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function mn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function uE(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , l = o.history
      , a = Se.Pop
      , s = null
      , u = d();
    u == null && (u = 0,
    l.replaceState(Z({}, l.state, {
        idx: u
    }), ""));
    function d() {
        return (l.state || {
            idx: null
        }).idx
    }
    function f() {
        a = Se.Pop;
        let S = d()
          , m = S == null ? null : S - u;
        u = S,
        s && s({
            action: a,
            location: y.location,
            delta: m
        })
    }
    function g(S, m) {
        a = Se.Push;
        let p = pi(y.location, S, m);
        n && n(p, S),
        u = d() + 1;
        let v = pm(p, u)
          , h = y.createHref(p);
        try {
            l.pushState(v, "", h)
        } catch (O) {
            if (O instanceof DOMException && O.name === "DataCloneError")
                throw O;
            o.location.assign(h)
        }
        i && s && s({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function x(S, m) {
        a = Se.Replace;
        let p = pi(y.location, S, m);
        n && n(p, S),
        u = d();
        let v = pm(p, u)
          , h = y.createHref(p);
        l.replaceState(v, "", h),
        i && s && s({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function w(S) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href
          , p = typeof S == "string" ? S : ir(S);
        return K(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(o, l)
        },
        listen(S) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(dm, f),
            s = S,
            ()=>{
                o.removeEventListener(dm, f),
                s = null
            }
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: w,
        encodeLocation(S) {
            let m = w(S);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: g,
        replace: x,
        go(S) {
            return l.go(S)
        }
    };
    return y
}
var Ee;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Ee || (Ee = {}));
const cE = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function fE(e) {
    return e.index === !0
}
function Xu(e, t, n, r) {
    return n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o,i)=>{
        let l = [...n, i]
          , a = typeof o.id == "string" ? o.id : l.join("-");
        if (K(o.index !== !0 || !o.children, "Cannot specify children on an index route"),
        K(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`),
        fE(o)) {
            let s = Z({}, o, t(o), {
                id: a
            });
            return r[a] = s,
            s
        } else {
            let s = Z({}, o, t(o), {
                id: a,
                children: void 0
            });
            return r[a] = s,
            o.children && (s.children = Xu(o.children, t, l, r)),
            s
        }
    }
    )
}
function kr(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? mn(t) : t
      , o = ro(r.pathname || "/", n);
    if (o == null)
        return null;
    let i = Uy(e);
    dE(i);
    let l = null;
    for (let a = 0; l == null && a < i.length; ++a)
        l = SE(i[a], PE(o));
    return l
}
function Uy(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i,l,a)=>{
        let s = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: l,
            route: i
        };
        s.relativePath.startsWith("/") && (K(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(r.length));
        let u = on([r, s.relativePath])
          , d = n.concat(s);
        i.children && i.children.length > 0 && (K(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Uy(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: wE(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach((i,l)=>{
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            o(i, l);
        else
            for (let s of By(i.path))
                o(i, l, s)
    }
    ),
    t
}
function By(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let l = By(r.join("/"))
      , a = [];
    return a.push(...l.map(s=>s === "" ? i : [i, s].join("/"))),
    o && a.push(...l),
    a.map(s=>e.startsWith("/") && s === "" ? "/" : s)
}
function dE(e) {
    e.sort((t,n)=>t.score !== n.score ? n.score - t.score : xE(t.routesMeta.map(r=>r.childrenIndex), n.routesMeta.map(r=>r.childrenIndex)))
}
const pE = /^:\w+$/
  , mE = 3
  , hE = 2
  , gE = 1
  , vE = 10
  , yE = -2
  , mm = e=>e === "*";
function wE(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(mm) && (r += yE),
    t && (r += hE),
    n.filter(o=>!mm(o)).reduce((o,i)=>o + (pE.test(i) ? mE : i === "" ? gE : vE), r)
}
function xE(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r,o)=>r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function SE(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , o = "/"
      , i = [];
    for (let l = 0; l < n.length; ++l) {
        let a = n[l]
          , s = l === n.length - 1
          , u = o === "/" ? t : t.slice(o.length) || "/"
          , d = _E({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: s
        }, u);
        if (!d)
            return null;
        Object.assign(r, d.params);
        let f = a.route;
        i.push({
            params: r,
            pathname: on([o, d.pathname]),
            pathnameBase: CE(on([o, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (o = on([o, d.pathnameBase]))
    }
    return i
}
function _E(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = OE(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , l = i.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce((u,d,f)=>{
            if (d === "*") {
                let g = a[f] || "";
                l = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            return u[d] = bE(a[f] || "", d),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: l,
        pattern: e
    }
}
function OE(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Gr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l,a)=>(r.push(a),
    "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function PE(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return Gr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function bE(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return Gr(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
        e
    }
}
function ro(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function EE(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? mn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : kE(n, t) : t,
        search: NE(r),
        hash: jE(o)
    }
}
function kE(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o=>{
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Vs(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Za(e) {
    return e.filter((t,n)=>n === 0 || t.route.path && t.route.path.length > 0)
}
function mf(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = mn(e) : (o = Z({}, e),
    K(!o.pathname || !o.pathname.includes("?"), Vs("?", "pathname", "search", o)),
    K(!o.pathname || !o.pathname.includes("#"), Vs("#", "pathname", "hash", o)),
    K(!o.search || !o.search.includes("#"), Vs("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", l = i ? "/" : o.pathname, a;
    if (r || l == null)
        a = n;
    else {
        let f = t.length - 1;
        if (l.startsWith("..")) {
            let g = l.split("/");
            for (; g[0] === ".."; )
                g.shift(),
                f -= 1;
            o.pathname = g.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let s = EE(o, a)
      , u = l && l !== "/" && l.endsWith("/")
      , d = (i || l === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (u || d) && (s.pathname += "/"),
    s
}
const on = e=>e.join("/").replace(/\/\/+/g, "/")
  , CE = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , NE = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , jE = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class hf {
    constructor(t, n, r, o) {
        o === void 0 && (o = !1),
        this.status = t,
        this.statusText = n || "",
        this.internal = o,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
function Wy(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Vy = ["post", "put", "patch", "delete"]
  , RE = new Set(Vy)
  , $E = ["get", ...Vy]
  , TE = new Set($E)
  , IE = new Set([301, 302, 303, 307, 308])
  , DE = new Set([307, 308])
  , Qs = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0
}
  , LE = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0
}
  , hm = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , Qy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , zE = e=>({
    hasErrorBoundary: !!e.hasErrorBoundary
});
function ME(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0
      , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
      , r = !n;
    K(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let o;
    if (e.mapRouteProperties)
        o = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let b = e.detectErrorBoundary;
        o = k=>({
            hasErrorBoundary: b(k)
        })
    } else
        o = zE;
    let i = {}, l = Xu(e.routes, o, void 0, i), a, s = e.basename || "/", u = Z({
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1
    }, e.future), d = null, f = new Set, g = null, x = null, w = null, y = e.hydrationData != null, S = kr(l, e.history.location, s), m = null;
    if (S == null) {
        let b = Et(404, {
            pathname: e.history.location.pathname
        })
          , {matches: k, route: C} = _m(l);
        S = k,
        m = {
            [C.id]: b
        }
    }
    let p = !S.some(b=>b.route.lazy) && (!S.some(b=>b.route.loader) || e.hydrationData != null), v, h = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: S,
        initialized: p,
        navigation: Qs,
        restoreScrollPosition: e.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || m,
        fetchers: new Map,
        blockers: new Map
    }, O = Se.Pop, E = !1, P, N = !1, z = !1, T = [], H = [], F = new Map, ee = 0, ce = -1, ae = new Map, ne = new Set, ye = new Map, $ = new Map, M = new Map, U = !1;
    function te() {
        return d = e.history.listen(b=>{
            let {action: k, location: C, delta: I} = b;
            if (U) {
                U = !1;
                return
            }
            Gr(M.size === 0 || I != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let B = _f({
                currentLocation: h.location,
                nextLocation: C,
                historyAction: k
            });
            if (B && I != null) {
                U = !0,
                e.history.go(I * -1),
                ki(B, {
                    state: "blocked",
                    location: C,
                    proceed() {
                        ki(B, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: C
                        }),
                        e.history.go(I)
                    },
                    reset() {
                        uo(B),
                        ie({
                            blockers: new Map(v.state.blockers)
                        })
                    }
                });
                return
            }
            return mt(k, C)
        }
        ),
        h.initialized || mt(Se.Pop, h.location),
        v
    }
    function se() {
        d && d(),
        f.clear(),
        P && P.abort(),
        h.fetchers.forEach((b,k)=>so(k)),
        h.blockers.forEach((b,k)=>uo(k))
    }
    function pt(b) {
        return f.add(b),
        ()=>f.delete(b)
    }
    function ie(b) {
        h = Z({}, h, b),
        f.forEach(k=>k(h))
    }
    function ot(b, k) {
        var C, I;
        let B = h.actionData != null && h.navigation.formMethod != null && Xt(h.navigation.formMethod) && h.navigation.state === "loading" && ((C = b.state) == null ? void 0 : C._isRedirect) !== !0, W;
        k.actionData ? Object.keys(k.actionData).length > 0 ? W = k.actionData : W = null : B ? W = h.actionData : W = null;
        let V = k.loaderData ? Sm(h.loaderData, k.loaderData, k.matches || [], k.errors) : h.loaderData;
        for (let[A] of M)
            uo(A);
        let Q = E === !0 || h.navigation.formMethod != null && Xt(h.navigation.formMethod) && ((I = b.state) == null ? void 0 : I._isRedirect) !== !0;
        a && (l = a,
        a = void 0),
        ie(Z({}, k, {
            actionData: W,
            loaderData: V,
            historyAction: O,
            location: b,
            initialized: !0,
            navigation: Qs,
            revalidation: "idle",
            restoreScrollPosition: Of(b, k.matches || h.matches),
            preventScrollReset: Q,
            blockers: new Map(h.blockers)
        })),
        N || O === Se.Pop || (O === Se.Push ? e.history.push(b, b.state) : O === Se.Replace && e.history.replace(b, b.state)),
        O = Se.Pop,
        E = !1,
        N = !1,
        z = !1,
        T = [],
        H = []
    }
    async function Xe(b, k) {
        if (typeof b == "number") {
            e.history.go(b);
            return
        }
        let C = qu(h.location, h.matches, s, u.v7_prependBasename, b, k == null ? void 0 : k.fromRouteId, k == null ? void 0 : k.relative)
          , {path: I, submission: B, error: W} = gm(u.v7_normalizeFormMethod, !1, C, k)
          , V = h.location
          , Q = pi(h.location, I, k && k.state);
        Q = Z({}, Q, e.history.encodeLocation(Q));
        let A = k && k.replace != null ? k.replace : void 0
          , X = Se.Push;
        A === !0 ? X = Se.Replace : A === !1 || B != null && Xt(B.formMethod) && B.formAction === h.location.pathname + h.location.search && (X = Se.Replace);
        let le = k && "preventScrollReset"in k ? k.preventScrollReset === !0 : void 0
          , Fe = _f({
            currentLocation: V,
            nextLocation: Q,
            historyAction: X
        });
        if (Fe) {
            ki(Fe, {
                state: "blocked",
                location: Q,
                proceed() {
                    ki(Fe, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: Q
                    }),
                    Xe(b, k)
                },
                reset() {
                    uo(Fe),
                    ie({
                        blockers: new Map(h.blockers)
                    })
                }
            });
            return
        }
        return await mt(X, Q, {
            submission: B,
            pendingError: W,
            preventScrollReset: le,
            replace: k && k.replace
        })
    }
    function Lt() {
        if (Pe(),
        ie({
            revalidation: "loading"
        }),
        h.navigation.state !== "submitting") {
            if (h.navigation.state === "idle") {
                mt(h.historyAction, h.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            mt(O || h.historyAction, h.navigation.location, {
                overrideNavigation: h.navigation
            })
        }
    }
    async function mt(b, k, C) {
        P && P.abort(),
        P = null,
        O = b,
        N = (C && C.startUninterruptedRevalidation) === !0,
        i0(h.location, h.matches),
        E = (C && C.preventScrollReset) === !0;
        let I = a || l
          , B = C && C.overrideNavigation
          , W = kr(I, k, s);
        if (!W) {
            let Ne = Et(404, {
                pathname: k.pathname
            })
              , {matches: Ie, route: zt} = _m(I);
            is(),
            ot(k, {
                matches: Ie,
                loaderData: {},
                errors: {
                    [zt.id]: Ne
                }
            });
            return
        }
        if (h.initialized && !z && BE(h.location, k) && !(C && C.submission && Xt(C.submission.formMethod))) {
            ot(k, {
                matches: W
            });
            return
        }
        P = new AbortController;
        let V = ko(e.history, k, P.signal, C && C.submission), Q, A;
        if (C && C.pendingError)
            A = {
                [Cr(W).route.id]: C.pendingError
            };
        else if (C && C.submission && Xt(C.submission.formMethod)) {
            let Ne = await lo(V, k, C.submission, W, {
                replace: C.replace
            });
            if (Ne.shortCircuited)
                return;
            Q = Ne.pendingActionData,
            A = Ne.pendingActionError,
            B = Z({
                state: "loading",
                location: k
            }, C.submission),
            V = new Request(V.url,{
                signal: V.signal
            })
        }
        let {shortCircuited: X, loaderData: le, errors: Fe} = await Pi(V, k, W, B, C && C.submission, C && C.fetcherSubmission, C && C.replace, Q, A);
        X || (P = null,
        ot(k, Z({
            matches: W
        }, Q ? {
            actionData: Q
        } : {}, {
            loaderData: le,
            errors: Fe
        })))
    }
    async function lo(b, k, C, I, B) {
        Pe();
        let W = Z({
            state: "submitting",
            location: k
        }, C);
        ie({
            navigation: W
        });
        let V, Q = Ju(I, k);
        if (!Q.route.action && !Q.route.lazy)
            V = {
                type: Ee.error,
                error: Et(405, {
                    method: b.method,
                    pathname: k.pathname,
                    routeId: Q.route.id
                })
            };
        else if (V = await Eo("action", b, Q, I, i, o, s),
        b.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (Mr(V)) {
            let A;
            return B && B.replace != null ? A = B.replace : A = V.location === h.location.pathname + h.location.search,
            await hn(h, V, {
                submission: C,
                replace: A
            }),
            {
                shortCircuited: !0
            }
        }
        if (Vo(V)) {
            let A = Cr(I, Q.route.id);
            return (B && B.replace) !== !0 && (O = Se.Push),
            {
                pendingActionData: {},
                pendingActionError: {
                    [A.route.id]: V.error
                }
            }
        }
        if (Kn(V))
            throw Et(400, {
                type: "defer-action"
            });
        return {
            pendingActionData: {
                [Q.route.id]: V.data
            }
        }
    }
    async function Pi(b, k, C, I, B, W, V, Q, A) {
        let X = I;
        X || (X = Z({
            state: "loading",
            location: k,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0
        }, B));
        let le = B || W ? B || W : X.formMethod && X.formAction && X.formData && X.formEncType ? {
            formMethod: X.formMethod,
            formAction: X.formAction,
            formData: X.formData,
            formEncType: X.formEncType
        } : void 0
          , Fe = a || l
          , [Ne,Ie] = vm(e.history, h, C, le, k, z, T, H, ye, Fe, s, Q, A);
        if (is(me=>!(C && C.some(gt=>gt.route.id === me)) || Ne && Ne.some(gt=>gt.route.id === me)),
        Ne.length === 0 && Ie.length === 0) {
            let me = xf();
            return ot(k, Z({
                matches: C,
                loaderData: {},
                errors: A || null
            }, Q ? {
                actionData: Q
            } : {}, me ? {
                fetchers: new Map(h.fetchers)
            } : {})),
            {
                shortCircuited: !0
            }
        }
        if (!N) {
            Ie.forEach(gt=>{
                let cr = h.fetchers.get(gt.key)
                  , De = {
                    state: "loading",
                    data: cr && cr.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                };
                h.fetchers.set(gt.key, De)
            }
            );
            let me = Q || h.actionData;
            ie(Z({
                navigation: X
            }, me ? Object.keys(me).length === 0 ? {
                actionData: null
            } : {
                actionData: me
            } : {}, Ie.length > 0 ? {
                fetchers: new Map(h.fetchers)
            } : {}))
        }
        ce = ++ee,
        Ie.forEach(me=>{
            me.controller && F.set(me.key, me.controller)
        }
        );
        let zt = ()=>Ie.forEach(me=>ht(me.key));
        P && P.signal.addEventListener("abort", zt);
        let {results: co, loaderResults: ls, fetcherResults: Ci} = await Ei(h.matches, C, Ne, Ie, b);
        if (b.signal.aborted)
            return {
                shortCircuited: !0
            };
        P && P.signal.removeEventListener("abort", zt),
        Ie.forEach(me=>F.delete(me.key));
        let Yt = Om(co);
        if (Yt)
            return await hn(h, Yt, {
                replace: V
            }),
            {
                shortCircuited: !0
            };
        let {loaderData: Ni, errors: as} = xm(h, C, Ne, ls, A, Ie, Ci, $);
        $.forEach((me,gt)=>{
            me.subscribe(cr=>{
                (cr || me.done) && $.delete(gt)
            }
            )
        }
        );
        let ss = xf()
          , us = Sf(ce)
          , ji = ss || us || Ie.length > 0;
        return Z({
            loaderData: Ni,
            errors: as
        }, ji ? {
            fetchers: new Map(h.fetchers)
        } : {})
    }
    function bi(b) {
        return h.fetchers.get(b) || LE
    }
    function ns(b, k, C, I) {
        if (r)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        F.has(b) && ht(b);
        let B = a || l
          , W = qu(h.location, h.matches, s, u.v7_prependBasename, C, k, I == null ? void 0 : I.relative)
          , V = kr(B, W, s);
        if (!V) {
            ao(b, k, Et(404, {
                pathname: W
            }));
            return
        }
        let {path: Q, submission: A} = gm(u.v7_normalizeFormMethod, !0, W, I)
          , X = Ju(V, Q);
        if (E = (I && I.preventScrollReset) === !0,
        A && Xt(A.formMethod)) {
            rs(b, k, Q, X, V, A);
            return
        }
        ye.set(b, {
            routeId: k,
            path: Q
        }),
        os(b, k, Q, X, V, A)
    }
    async function rs(b, k, C, I, B, W) {
        if (Pe(),
        ye.delete(b),
        !I.route.action && !I.route.lazy) {
            let De = Et(405, {
                method: W.formMethod,
                pathname: C,
                routeId: k
            });
            ao(b, k, De);
            return
        }
        let V = h.fetchers.get(b)
          , Q = Z({
            state: "submitting"
        }, W, {
            data: V && V.data,
            " _hasFetcherDoneAnything ": !0
        });
        h.fetchers.set(b, Q),
        ie({
            fetchers: new Map(h.fetchers)
        });
        let A = new AbortController
          , X = ko(e.history, C, A.signal, W);
        F.set(b, A);
        let le = await Eo("action", X, I, B, i, o, s);
        if (X.signal.aborted) {
            F.get(b) === A && F.delete(b);
            return
        }
        if (Mr(le)) {
            F.delete(b),
            ne.add(b);
            let De = Z({
                state: "loading"
            }, W, {
                data: void 0,
                " _hasFetcherDoneAnything ": !0
            });
            return h.fetchers.set(b, De),
            ie({
                fetchers: new Map(h.fetchers)
            }),
            hn(h, le, {
                submission: W,
                isFetchActionRedirect: !0
            })
        }
        if (Vo(le)) {
            ao(b, k, le.error);
            return
        }
        if (Kn(le))
            throw Et(400, {
                type: "defer-action"
            });
        let Fe = h.navigation.location || h.location
          , Ne = ko(e.history, Fe, A.signal)
          , Ie = a || l
          , zt = h.navigation.state !== "idle" ? kr(Ie, h.navigation.location, s) : h.matches;
        K(zt, "Didn't find any matches after fetcher action");
        let co = ++ee;
        ae.set(b, co);
        let ls = Z({
            state: "loading",
            data: le.data
        }, W, {
            " _hasFetcherDoneAnything ": !0
        });
        h.fetchers.set(b, ls);
        let[Ci,Yt] = vm(e.history, h, zt, W, Fe, z, T, H, ye, Ie, s, {
            [I.route.id]: le.data
        }, void 0);
        Yt.filter(De=>De.key !== b).forEach(De=>{
            let cs = De.key
              , Pf = h.fetchers.get(cs)
              , a0 = {
                state: "loading",
                data: Pf && Pf.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
            };
            h.fetchers.set(cs, a0),
            De.controller && F.set(cs, De.controller)
        }
        ),
        ie({
            fetchers: new Map(h.fetchers)
        });
        let Ni = ()=>Yt.forEach(De=>ht(De.key));
        A.signal.addEventListener("abort", Ni);
        let {results: as, loaderResults: ss, fetcherResults: us} = await Ei(h.matches, zt, Ci, Yt, Ne);
        if (A.signal.aborted)
            return;
        A.signal.removeEventListener("abort", Ni),
        ae.delete(b),
        F.delete(b),
        Yt.forEach(De=>F.delete(De.key));
        let ji = Om(as);
        if (ji)
            return hn(h, ji);
        let {loaderData: me, errors: gt} = xm(h, h.matches, Ci, ss, void 0, Yt, us, $);
        if (h.fetchers.has(b)) {
            let De = {
                state: "idle",
                data: le.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
            };
            h.fetchers.set(b, De)
        }
        let cr = Sf(co);
        h.navigation.state === "loading" && co > ce ? (K(O, "Expected pending action"),
        P && P.abort(),
        ot(h.navigation.location, {
            matches: zt,
            loaderData: me,
            errors: gt,
            fetchers: new Map(h.fetchers)
        })) : (ie(Z({
            errors: gt,
            loaderData: Sm(h.loaderData, me, zt, gt)
        }, cr || Yt.length > 0 ? {
            fetchers: new Map(h.fetchers)
        } : {})),
        z = !1)
    }
    async function os(b, k, C, I, B, W) {
        let V = h.fetchers.get(b)
          , Q = Z({
            state: "loading",
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0
        }, W, {
            data: V && V.data,
            " _hasFetcherDoneAnything ": !0
        });
        h.fetchers.set(b, Q),
        ie({
            fetchers: new Map(h.fetchers)
        });
        let A = new AbortController
          , X = ko(e.history, C, A.signal);
        F.set(b, A);
        let le = await Eo("loader", X, I, B, i, o, s);
        if (Kn(le) && (le = await Xy(le, X.signal, !0) || le),
        F.get(b) === A && F.delete(b),
        X.signal.aborted)
            return;
        if (Mr(le)) {
            ne.add(b),
            await hn(h, le);
            return
        }
        if (Vo(le)) {
            let Ne = Cr(h.matches, k);
            h.fetchers.delete(b),
            ie({
                fetchers: new Map(h.fetchers),
                errors: {
                    [Ne.route.id]: le.error
                }
            });
            return
        }
        K(!Kn(le), "Unhandled fetcher deferred data");
        let Fe = {
            state: "idle",
            data: le.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0
        };
        h.fetchers.set(b, Fe),
        ie({
            fetchers: new Map(h.fetchers)
        })
    }
    async function hn(b, k, C) {
        let {submission: I, replace: B, isFetchActionRedirect: W} = C === void 0 ? {} : C;
        k.revalidate && (z = !0);
        let V = pi(b.location, k.location, Z({
            _isRedirect: !0
        }, W ? {
            _isFetchActionRedirect: !0
        } : {}));
        if (K(V, "Expected a location on the redirect navigation"),
        Qy.test(k.location) && n) {
            let Ne = e.history.createURL(k.location)
              , Ie = ro(Ne.pathname, s) == null;
            if (t.location.origin !== Ne.origin || Ie) {
                B ? t.location.replace(k.location) : t.location.assign(k.location);
                return
            }
        }
        P = null;
        let Q = B === !0 ? Se.Replace : Se.Push
          , {formMethod: A, formAction: X, formEncType: le, formData: Fe} = b.navigation;
        !I && A && X && Fe && le && (I = {
            formMethod: A,
            formAction: X,
            formEncType: le,
            formData: Fe
        }),
        DE.has(k.status) && I && Xt(I.formMethod) ? await mt(Q, V, {
            submission: Z({}, I, {
                formAction: k.location
            }),
            preventScrollReset: E
        }) : W ? await mt(Q, V, {
            overrideNavigation: {
                state: "loading",
                location: V,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
            },
            fetcherSubmission: I,
            preventScrollReset: E
        }) : await mt(Q, V, {
            overrideNavigation: {
                state: "loading",
                location: V,
                formMethod: I ? I.formMethod : void 0,
                formAction: I ? I.formAction : void 0,
                formEncType: I ? I.formEncType : void 0,
                formData: I ? I.formData : void 0
            },
            preventScrollReset: E
        })
    }
    async function Ei(b, k, C, I, B) {
        let W = await Promise.all([...C.map(A=>Eo("loader", B, A, k, i, o, s)), ...I.map(A=>A.matches && A.match && A.controller ? Eo("loader", ko(e.history, A.path, A.controller.signal), A.match, A.matches, i, o, s) : {
            type: Ee.error,
            error: Et(404, {
                pathname: A.path
            })
        })])
          , V = W.slice(0, C.length)
          , Q = W.slice(C.length);
        return await Promise.all([Pm(b, C, V, V.map(()=>B.signal), !1, h.loaderData), Pm(b, I.map(A=>A.match), Q, I.map(A=>A.controller ? A.controller.signal : null), !0)]),
        {
            results: W,
            loaderResults: V,
            fetcherResults: Q
        }
    }
    function Pe() {
        z = !0,
        T.push(...is()),
        ye.forEach((b,k)=>{
            F.has(k) && (H.push(k),
            ht(k))
        }
        )
    }
    function ao(b, k, C) {
        let I = Cr(h.matches, k);
        so(b),
        ie({
            errors: {
                [I.route.id]: C
            },
            fetchers: new Map(h.fetchers)
        })
    }
    function so(b) {
        let k = h.fetchers.get(b);
        F.has(b) && !(k && k.state === "loading" && ae.has(b)) && ht(b),
        ye.delete(b),
        ae.delete(b),
        ne.delete(b),
        h.fetchers.delete(b)
    }
    function ht(b) {
        let k = F.get(b);
        K(k, "Expected fetch controller: " + b),
        k.abort(),
        F.delete(b)
    }
    function wf(b) {
        for (let k of b) {
            let I = {
                state: "idle",
                data: bi(k).data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
            };
            h.fetchers.set(k, I)
        }
    }
    function xf() {
        let b = []
          , k = !1;
        for (let C of ne) {
            let I = h.fetchers.get(C);
            K(I, "Expected fetcher: " + C),
            I.state === "loading" && (ne.delete(C),
            b.push(C),
            k = !0)
        }
        return wf(b),
        k
    }
    function Sf(b) {
        let k = [];
        for (let[C,I] of ae)
            if (I < b) {
                let B = h.fetchers.get(C);
                K(B, "Expected fetcher: " + C),
                B.state === "loading" && (ht(C),
                ae.delete(C),
                k.push(C))
            }
        return wf(k),
        k.length > 0
    }
    function r0(b, k) {
        let C = h.blockers.get(b) || hm;
        return M.get(b) !== k && M.set(b, k),
        C
    }
    function uo(b) {
        h.blockers.delete(b),
        M.delete(b)
    }
    function ki(b, k) {
        let C = h.blockers.get(b) || hm;
        K(C.state === "unblocked" && k.state === "blocked" || C.state === "blocked" && k.state === "blocked" || C.state === "blocked" && k.state === "proceeding" || C.state === "blocked" && k.state === "unblocked" || C.state === "proceeding" && k.state === "unblocked", "Invalid blocker state transition: " + C.state + " -> " + k.state),
        h.blockers.set(b, k),
        ie({
            blockers: new Map(h.blockers)
        })
    }
    function _f(b) {
        let {currentLocation: k, nextLocation: C, historyAction: I} = b;
        if (M.size === 0)
            return;
        M.size > 1 && Gr(!1, "A router only supports one blocker at a time");
        let B = Array.from(M.entries())
          , [W,V] = B[B.length - 1]
          , Q = h.blockers.get(W);
        if (!(Q && Q.state === "proceeding") && V({
            currentLocation: k,
            nextLocation: C,
            historyAction: I
        }))
            return W
    }
    function is(b) {
        let k = [];
        return $.forEach((C,I)=>{
            (!b || b(I)) && (C.cancel(),
            k.push(I),
            $.delete(I))
        }
        ),
        k
    }
    function o0(b, k, C) {
        if (g = b,
        w = k,
        x = C || (I=>I.key),
        !y && h.navigation === Qs) {
            y = !0;
            let I = Of(h.location, h.matches);
            I != null && ie({
                restoreScrollPosition: I
            })
        }
        return ()=>{
            g = null,
            w = null,
            x = null
        }
    }
    function i0(b, k) {
        if (g && x && w) {
            let C = k.map(B=>bm(B, h.loaderData))
              , I = x(b, C) || b.key;
            g[I] = w()
        }
    }
    function Of(b, k) {
        if (g && x && w) {
            let C = k.map(W=>bm(W, h.loaderData))
              , I = x(b, C) || b.key
              , B = g[I];
            if (typeof B == "number")
                return B
        }
        return null
    }
    function l0(b) {
        i = {},
        a = Xu(b, o, void 0, i)
    }
    return v = {
        get basename() {
            return s
        },
        get state() {
            return h
        },
        get routes() {
            return l
        },
        initialize: te,
        subscribe: pt,
        enableScrollRestoration: o0,
        navigate: Xe,
        fetch: ns,
        revalidate: Lt,
        createHref: b=>e.history.createHref(b),
        encodeLocation: b=>e.history.encodeLocation(b),
        getFetcher: bi,
        deleteFetcher: so,
        dispose: se,
        getBlocker: r0,
        deleteBlocker: uo,
        _internalFetchControllers: F,
        _internalActiveDeferreds: $,
        _internalSetRoutes: l0
    },
    v
}
function AE(e) {
    return e != null && "formData"in e
}
function qu(e, t, n, r, o, i, l) {
    let a, s;
    if (i != null && l !== "path") {
        a = [];
        for (let d of t)
            if (a.push(d),
            d.route.id === i) {
                s = d;
                break
            }
    } else
        a = t,
        s = t[t.length - 1];
    let u = mf(o || ".", Za(a).map(d=>d.pathnameBase), ro(e.pathname, n) || e.pathname, l === "path");
    return o == null && (u.search = e.search,
    u.hash = e.hash),
    (o == null || o === "" || o === ".") && s && s.route.index && !gf(u.search) && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r && n !== "/" && (u.pathname = u.pathname === "/" ? n : on([n, u.pathname])),
    ir(u)
}
function gm(e, t, n, r) {
    if (!r || !AE(r))
        return {
            path: n
        };
    if (r.formMethod && !QE(r.formMethod))
        return {
            path: n,
            error: Et(405, {
                method: r.formMethod
            })
        };
    let o;
    if (r.formData) {
        let a = r.formMethod || "get";
        if (o = {
            formMethod: e ? a.toUpperCase() : a.toLowerCase(),
            formAction: Gy(n),
            formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
            formData: r.formData
        },
        Xt(o.formMethod))
            return {
                path: n,
                submission: o
            }
    }
    let i = mn(n)
      , l = Yy(r.formData);
    return t && i.search && gf(i.search) && l.append("index", ""),
    i.search = "?" + l,
    {
        path: ir(i),
        submission: o
    }
}
function FE(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(o=>o.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}
function vm(e, t, n, r, o, i, l, a, s, u, d, f, g) {
    let x = g ? Object.values(g)[0] : f ? Object.values(f)[0] : void 0
      , w = e.createURL(t.location)
      , y = e.createURL(o)
      , S = g ? Object.keys(g)[0] : void 0
      , p = FE(n, S).filter((h,O)=>{
        if (h.route.lazy)
            return !0;
        if (h.route.loader == null)
            return !1;
        if (HE(t.loaderData, t.matches[O], h) || l.some(N=>N === h.route.id))
            return !0;
        let E = t.matches[O]
          , P = h;
        return ym(h, Z({
            currentUrl: w,
            currentParams: E.params,
            nextUrl: y,
            nextParams: P.params
        }, r, {
            actionResult: x,
            defaultShouldRevalidate: i || w.pathname + w.search === y.pathname + y.search || w.search !== y.search || Ky(E, P)
        }))
    }
    )
      , v = [];
    return s.forEach((h,O)=>{
        if (!n.some(z=>z.route.id === h.routeId))
            return;
        let E = kr(u, h.path, d);
        if (!E) {
            v.push({
                key: O,
                routeId: h.routeId,
                path: h.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let P = Ju(E, h.path);
        if (a.includes(O)) {
            v.push({
                key: O,
                routeId: h.routeId,
                path: h.path,
                matches: E,
                match: P,
                controller: new AbortController
            });
            return
        }
        ym(P, Z({
            currentUrl: w,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: y,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: x,
            defaultShouldRevalidate: i
        })) && v.push({
            key: O,
            routeId: h.routeId,
            path: h.path,
            matches: E,
            match: P,
            controller: new AbortController
        })
    }
    ),
    [p, v]
}
function HE(e, t, n) {
    let r = !t || n.route.id !== t.route.id
      , o = e[n.route.id] === void 0;
    return r || o
}
function Ky(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function ym(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n
    }
    return t.defaultShouldRevalidate
}
async function wm(e, t, n) {
    if (!e.lazy)
        return;
    let r = await e.lazy();
    if (!e.lazy)
        return;
    let o = n[e.id];
    K(o, "No route found in manifest");
    let i = {};
    for (let l in r) {
        let s = o[l] !== void 0 && l !== "hasErrorBoundary";
        Gr(!s, 'Route "' + o.id + '" has a static property "' + l + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + l + '" will be ignored.')),
        !s && !cE.has(l) && (i[l] = r[l])
    }
    Object.assign(o, i),
    Object.assign(o, Z({}, t(o), {
        lazy: void 0
    }))
}
async function Eo(e, t, n, r, o, i, l, a, s, u) {
    a === void 0 && (a = !1),
    s === void 0 && (s = !1);
    let d, f, g, x = S=>{
        let m, p = new Promise((v,h)=>m = h);
        return g = ()=>m(),
        t.signal.addEventListener("abort", g),
        Promise.race([S({
            request: t,
            params: n.params,
            context: u
        }), p])
    }
    ;
    try {
        let S = n.route[e];
        if (n.route.lazy)
            if (S)
                f = (await Promise.all([x(S), wm(n.route, i, o)]))[0];
            else if (await wm(n.route, i, o),
            S = n.route[e],
            S)
                f = await x(S);
            else if (e === "action") {
                let m = new URL(t.url)
                  , p = m.pathname + m.search;
                throw Et(405, {
                    method: t.method,
                    pathname: p,
                    routeId: n.route.id
                })
            } else
                return {
                    type: Ee.data,
                    data: void 0
                };
        else if (S)
            f = await x(S);
        else {
            let m = new URL(t.url)
              , p = m.pathname + m.search;
            throw Et(404, {
                pathname: p
            })
        }
        K(f !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (S) {
        d = Ee.error,
        f = S
    } finally {
        g && t.signal.removeEventListener("abort", g)
    }
    if (VE(f)) {
        let S = f.status;
        if (IE.has(S)) {
            let v = f.headers.get("Location");
            if (K(v, "Redirects returned/thrown from loaders/actions must have a Location header"),
            !Qy.test(v))
                v = qu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, v);
            else if (!a) {
                let h = new URL(t.url)
                  , O = v.startsWith("//") ? new URL(h.protocol + v) : new URL(v)
                  , E = ro(O.pathname, l) != null;
                O.origin === h.origin && E && (v = O.pathname + O.search + O.hash)
            }
            if (a)
                throw f.headers.set("Location", v),
                f;
            return {
                type: Ee.redirect,
                status: S,
                location: v,
                revalidate: f.headers.get("X-Remix-Revalidate") !== null
            }
        }
        if (s)
            throw {
                type: d || Ee.data,
                response: f
            };
        let m, p = f.headers.get("Content-Type");
        return p && /\bapplication\/json\b/.test(p) ? m = await f.json() : m = await f.text(),
        d === Ee.error ? {
            type: d,
            error: new hf(S,f.statusText,m),
            headers: f.headers
        } : {
            type: Ee.data,
            data: m,
            statusCode: f.status,
            headers: f.headers
        }
    }
    if (d === Ee.error)
        return {
            type: d,
            error: f
        };
    if (WE(f)) {
        var w, y;
        return {
            type: Ee.deferred,
            deferredData: f,
            statusCode: (w = f.init) == null ? void 0 : w.status,
            headers: ((y = f.init) == null ? void 0 : y.headers) && new Headers(f.init.headers)
        }
    }
    return {
        type: Ee.data,
        data: f
    }
}
function ko(e, t, n, r) {
    let o = e.createURL(Gy(t)).toString()
      , i = {
        signal: n
    };
    if (r && Xt(r.formMethod)) {
        let {formMethod: l, formEncType: a, formData: s} = r;
        i.method = l.toUpperCase(),
        i.body = a === "application/x-www-form-urlencoded" ? Yy(s) : s
    }
    return new Request(o,i)
}
function Yy(e) {
    let t = new URLSearchParams;
    for (let[n,r] of e.entries())
        t.append(n, r instanceof File ? r.name : r);
    return t
}
function UE(e, t, n, r, o) {
    let i = {}, l = null, a, s = !1, u = {};
    return n.forEach((d,f)=>{
        let g = t[f].route.id;
        if (K(!Mr(d), "Cannot handle redirect results in processLoaderData"),
        Vo(d)) {
            let x = Cr(e, g)
              , w = d.error;
            r && (w = Object.values(r)[0],
            r = void 0),
            l = l || {},
            l[x.route.id] == null && (l[x.route.id] = w),
            i[g] = void 0,
            s || (s = !0,
            a = Wy(d.error) ? d.error.status : 500),
            d.headers && (u[g] = d.headers)
        } else
            Kn(d) ? (o.set(g, d.deferredData),
            i[g] = d.deferredData.data) : i[g] = d.data,
            d.statusCode != null && d.statusCode !== 200 && !s && (a = d.statusCode),
            d.headers && (u[g] = d.headers)
    }
    ),
    r && (l = r,
    i[Object.keys(r)[0]] = void 0),
    {
        loaderData: i,
        errors: l,
        statusCode: a || 200,
        loaderHeaders: u
    }
}
function xm(e, t, n, r, o, i, l, a) {
    let {loaderData: s, errors: u} = UE(t, n, r, o, a);
    for (let d = 0; d < i.length; d++) {
        let {key: f, match: g, controller: x} = i[d];
        K(l !== void 0 && l[d] !== void 0, "Did not find corresponding fetcher result");
        let w = l[d];
        if (!(x && x.signal.aborted))
            if (Vo(w)) {
                let y = Cr(e.matches, g == null ? void 0 : g.route.id);
                u && u[y.route.id] || (u = Z({}, u, {
                    [y.route.id]: w.error
                })),
                e.fetchers.delete(f)
            } else if (Mr(w))
                K(!1, "Unhandled fetcher revalidation redirect");
            else if (Kn(w))
                K(!1, "Unhandled fetcher deferred data");
            else {
                let y = {
                    state: "idle",
                    data: w.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                };
                e.fetchers.set(f, y)
            }
    }
    return {
        loaderData: s,
        errors: u
    }
}
function Sm(e, t, n, r) {
    let o = Z({}, t);
    for (let i of n) {
        let l = i.route.id;
        if (t.hasOwnProperty(l) ? t[l] !== void 0 && (o[l] = t[l]) : e[l] !== void 0 && i.route.loader && (o[l] = e[l]),
        r && r.hasOwnProperty(l))
            break
    }
    return o
}
function Cr(e, t) {
    return (t ? e.slice(0, e.findIndex(r=>r.route.id === t) + 1) : [...e]).reverse().find(r=>r.route.hasErrorBoundary === !0) || e[0]
}
function _m(e) {
    let t = e.find(n=>n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}
function Et(e, t) {
    let {pathname: n, routeId: r, method: o, type: i} = t === void 0 ? {} : t
      , l = "Unknown Server Error"
      , a = "Unknown @remix-run/router error";
    return e === 400 ? (l = "Bad Request",
    o && n && r ? a = "You made a " + o + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : i === "defer-action" && (a = "defer() is not supported in actions")) : e === 403 ? (l = "Forbidden",
    a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (l = "Not Found",
    a = 'No route matches URL "' + n + '"') : e === 405 && (l = "Method Not Allowed",
    o && n && r ? a = "You made a " + o.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new hf(e || 500,l,new Error(a),!0)
}
function Om(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Mr(n))
            return n
    }
}
function Gy(e) {
    let t = typeof e == "string" ? mn(e) : e;
    return ir(Z({}, t, {
        hash: ""
    }))
}
function BE(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function Kn(e) {
    return e.type === Ee.deferred
}
function Vo(e) {
    return e.type === Ee.error
}
function Mr(e) {
    return (e && e.type) === Ee.redirect
}
function WE(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function VE(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function QE(e) {
    return TE.has(e.toLowerCase())
}
function Xt(e) {
    return RE.has(e.toLowerCase())
}
async function Pm(e, t, n, r, o, i) {
    for (let l = 0; l < n.length; l++) {
        let a = n[l]
          , s = t[l];
        if (!s)
            continue;
        let u = e.find(f=>f.route.id === s.route.id)
          , d = u != null && !Ky(u, s) && (i && i[s.route.id]) !== void 0;
        if (Kn(a) && (o || d)) {
            let f = r[l];
            K(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
            await Xy(a, f, o).then(g=>{
                g && (n[l] = g || n[l])
            }
            )
        }
    }
}
async function Xy(e, t, n) {
    if (n === void 0 && (n = !1),
    !await e.deferredData.resolveData(t)) {
        if (n)
            try {
                return {
                    type: Ee.data,
                    data: e.deferredData.unwrappedData
                }
            } catch (o) {
                return {
                    type: Ee.error,
                    error: o
                }
            }
        return {
            type: Ee.data,
            data: e.deferredData.data
        }
    }
}
function gf(e) {
    return new URLSearchParams(e).getAll("index").some(t=>t === "")
}
function bm(e, t) {
    let {route: n, pathname: r, params: o} = e;
    return {
        id: n.id,
        pathname: r,
        params: o,
        data: t[n.id],
        handle: n.handle
    }
}
function Ju(e, t) {
    let n = typeof t == "string" ? mn(t).search : t.search;
    if (e[e.length - 1].route.index && gf(n || ""))
        return e[e.length - 1];
    let r = Za(e);
    return r[r.length - 1]
}
/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xa() {
    return xa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    xa.apply(this, arguments)
}
const KE = "startTransition";
var Em = Sl[KE];
const es = _.createContext(null)
  , qy = _.createContext(null)
  , oo = _.createContext(null)
  , ts = _.createContext(null)
  , ur = _.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Jy = _.createContext(null);
function YE(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Oi() || K(!1);
    let {basename: r, navigator: o} = _.useContext(oo)
      , {hash: i, pathname: l, search: a} = e0(e, {
        relative: n
    })
      , s = l;
    return r !== "/" && (s = l === "/" ? r : on([r, l])),
    o.createHref({
        pathname: s,
        search: a,
        hash: i
    })
}
function Oi() {
    return _.useContext(ts) != null
}
function io() {
    return Oi() || K(!1),
    _.useContext(ts).location
}
function Zy(e) {
    _.useContext(oo).static || _.useLayoutEffect(e)
}
function GE() {
    let {isDataRoute: e} = _.useContext(ur);
    return e ? a2() : XE()
}
function XE() {
    Oi() || K(!1);
    let e = _.useContext(es)
      , {basename: t, navigator: n} = _.useContext(oo)
      , {matches: r} = _.useContext(ur)
      , {pathname: o} = io()
      , i = JSON.stringify(Za(r).map(s=>s.pathnameBase))
      , l = _.useRef(!1);
    return Zy(()=>{
        l.current = !0
    }
    ),
    _.useCallback(function(s, u) {
        if (u === void 0 && (u = {}),
        !l.current)
            return;
        if (typeof s == "number") {
            n.go(s);
            return
        }
        let d = mf(s, JSON.parse(i), o, u.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : on([t, d.pathname])),
        (u.replace ? n.replace : n.push)(d, u.state, u)
    }, [t, n, i, o, e])
}
function e0(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {matches: r} = _.useContext(ur)
      , {pathname: o} = io()
      , i = JSON.stringify(Za(r).map(l=>l.pathnameBase));
    return _.useMemo(()=>mf(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}
function qE(e, t, n) {
    Oi() || K(!1);
    let {navigator: r} = _.useContext(oo)
      , {matches: o} = _.useContext(ur)
      , i = o[o.length - 1]
      , l = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let s = io(), u;
    if (t) {
        var d;
        let y = typeof t == "string" ? mn(t) : t;
        a === "/" || (d = y.pathname) != null && d.startsWith(a) || K(!1),
        u = y
    } else
        u = s;
    let f = u.pathname || "/"
      , g = a === "/" ? f : f.slice(a.length) || "/"
      , x = kr(e, {
        pathname: g
    })
      , w = n2(x && x.map(y=>Object.assign({}, y, {
        params: Object.assign({}, l, y.params),
        pathname: on([a, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? a : on([a, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), o, n);
    return t && w ? _.createElement(ts.Provider, {
        value: {
            location: xa({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: Se.Pop
        }
    }, w) : w
}
function JE() {
    let e = l2()
      , t = Wy(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    }
      , i = null;
    return _.createElement(_.Fragment, null, _.createElement("h2", null, "Unexpected Application Error!"), _.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? _.createElement("pre", {
        style: o
    }, n) : null, i)
}
const ZE = _.createElement(JE, null);
class e2 extends _.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? _.createElement(ur.Provider, {
            value: this.props.routeContext
        }, _.createElement(Jy.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function t2(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = _.useContext(es);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(ur.Provider, {
        value: t
    }, r)
}
function n2(e, t, n) {
    var r;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    e == null) {
        var o;
        if ((o = n) != null && o.errors)
            e = n.matches;
        else
            return null
    }
    let i = e
      , l = (r = n) == null ? void 0 : r.errors;
    if (l != null) {
        let a = i.findIndex(s=>s.route.id && (l == null ? void 0 : l[s.route.id]));
        a >= 0 || K(!1),
        i = i.slice(0, Math.min(i.length, a + 1))
    }
    return i.reduceRight((a,s,u)=>{
        let d = s.route.id ? l == null ? void 0 : l[s.route.id] : null
          , f = null;
        n && (f = s.route.errorElement || ZE);
        let g = t.concat(i.slice(0, u + 1))
          , x = ()=>{
            let w;
            return d ? w = f : s.route.Component ? w = _.createElement(s.route.Component, null) : s.route.element ? w = s.route.element : w = a,
            _.createElement(t2, {
                match: s,
                routeContext: {
                    outlet: a,
                    matches: g,
                    isDataRoute: n != null
                },
                children: w
            })
        }
        ;
        return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0) ? _.createElement(e2, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: d,
            children: x(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : x()
    }
    , null)
}
var Zu;
(function(e) {
    e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate"
}
)(Zu || (Zu = {}));
var lr;
(function(e) {
    e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId"
}
)(lr || (lr = {}));
function r2(e) {
    let t = _.useContext(es);
    return t || K(!1),
    t
}
function t0(e) {
    let t = _.useContext(qy);
    return t || K(!1),
    t
}
function o2(e) {
    let t = _.useContext(ur);
    return t || K(!1),
    t
}
function vf(e) {
    let t = o2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || K(!1),
    n.route.id
}
function i2() {
    let e = t0(lr.UseLoaderData)
      , t = vf(lr.UseLoaderData);
    if (e.errors && e.errors[t] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")");
        return
    }
    return e.loaderData[t]
}
function l2() {
    var e;
    let t = _.useContext(Jy)
      , n = t0(lr.UseRouteError)
      , r = vf(lr.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}
function a2() {
    let {router: e} = r2(Zu.UseNavigateStable)
      , t = vf(lr.UseNavigateStable)
      , n = _.useRef(!1);
    return Zy(()=>{
        n.current = !0
    }
    ),
    _.useCallback(function(o, i) {
        i === void 0 && (i = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, xa({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function s2(e) {
    let {fallbackElement: t, router: n, future: r} = e
      , [o,i] = _.useState(n.state)
      , {v7_startTransition: l} = r || {}
      , a = _.useCallback(f=>{
        l && Em ? Em(()=>i(f)) : i(f)
    }
    , [i, l]);
    _.useLayoutEffect(()=>n.subscribe(a), [n, a]);
    let s = _.useMemo(()=>({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: f=>n.navigate(f),
        push: (f,g,x)=>n.navigate(f, {
            state: g,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset
        }),
        replace: (f,g,x)=>n.navigate(f, {
            replace: !0,
            state: g,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset
        })
    }), [n])
      , u = n.basename || "/"
      , d = _.useMemo(()=>({
        router: n,
        navigator: s,
        static: !1,
        basename: u
    }), [n, s, u]);
    return _.createElement(_.Fragment, null, _.createElement(es.Provider, {
        value: d
    }, _.createElement(qy.Provider, {
        value: o
    }, _.createElement(c2, {
        basename: u,
        location: o.location,
        navigationType: o.historyAction,
        navigator: s
    }, o.initialized ? _.createElement(u2, {
        routes: n.routes,
        state: o
    }) : t))), null)
}
function u2(e) {
    let {routes: t, state: n} = e;
    return qE(t, void 0, n)
}
function $o(e) {
    K(!1)
}
function c2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Se.Pop, navigator: i, static: l=!1} = e;
    Oi() && K(!1);
    let a = t.replace(/^\/*/, "/")
      , s = _.useMemo(()=>({
        basename: a,
        navigator: i,
        static: l
    }), [a, i, l]);
    typeof r == "string" && (r = mn(r));
    let {pathname: u="/", search: d="", hash: f="", state: g=null, key: x="default"} = r
      , w = _.useMemo(()=>{
        let y = ro(u, a);
        return y == null ? null : {
            location: {
                pathname: y,
                search: d,
                hash: f,
                state: g,
                key: x
            },
            navigationType: o
        }
    }
    , [a, u, d, f, g, x, o]);
    return w == null ? null : _.createElement(oo.Provider, {
        value: s
    }, _.createElement(ts.Provider, {
        children: n,
        value: w
    }))
}
var km;
(function(e) {
    e[e.pending = 0] = "pending",
    e[e.success = 1] = "success",
    e[e.error = 2] = "error"
}
)(km || (km = {}));
new Promise(()=>{}
);
function ec(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return _.Children.forEach(e, (r,o)=>{
        if (!_.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === _.Fragment) {
            n.push.apply(n, ec(r.props.children, i));
            return
        }
        r.type !== $o && K(!1),
        !r.props.index || !r.props.children || K(!1);
        let l = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (l.children = ec(r.props.children, i)),
        n.push(l)
    }
    ),
    n
}
function f2(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function mi() {
    return mi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    mi.apply(this, arguments)
}
function d2(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++)
        o = r[i],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function p2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function m2(e, t) {
    return e.button === 0 && (!t || t === "_self") && !p2(e)
}
const h2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function g2(e, t) {
    return ME({
        basename: t == null ? void 0 : t.basename,
        future: mi({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: aE({
            window: t == null ? void 0 : t.window
        }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || v2(),
        routes: e,
        mapRouteProperties: f2
    }).initialize()
}
function v2() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = mi({}, t, {
        errors: y2(t.errors)
    })),
    t
}
function y2(e) {
    if (!e)
        return null;
    let t = Object.entries(e)
      , n = {};
    for (let[r,o] of t)
        if (o && o.__type === "RouteErrorResponse")
            n[r] = new hf(o.status,o.statusText,o.data,o.internal === !0);
        else if (o && o.__type === "Error") {
            let i = new Error(o.message);
            i.stack = "",
            n[r] = i
        } else
            n[r] = o;
    return n
}
const w2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , x2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Pn = _.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: i, replace: l, state: a, target: s, to: u, preventScrollReset: d} = t, f = d2(t, h2), {basename: g} = _.useContext(oo), x, w = !1;
    if (typeof u == "string" && x2.test(u) && (x = u,
    w2))
        try {
            let p = new URL(window.location.href)
              , v = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u)
              , h = ro(v.pathname, g);
            v.origin === p.origin && h != null ? u = h + v.search + v.hash : w = !0
        } catch {}
    let y = YE(u, {
        relative: o
    })
      , S = S2(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: d,
        relative: o
    });
    function m(p) {
        r && r(p),
        p.defaultPrevented || S(p)
    }
    return _.createElement("a", mi({}, f, {
        href: x || y,
        onClick: w || i ? r : m,
        ref: n,
        target: s
    }))
});
var Cm;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmitImpl = "useSubmitImpl",
    e.UseFetcher = "useFetcher"
}
)(Cm || (Cm = {}));
var Nm;
(function(e) {
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Nm || (Nm = {}));
function S2(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: i, relative: l} = t === void 0 ? {} : t
      , a = GE()
      , s = io()
      , u = e0(e, {
        relative: l
    });
    return _.useCallback(d=>{
        if (m2(d, n)) {
            d.preventDefault();
            let f = r !== void 0 ? r : ir(s) === ir(u);
            a(e, {
                replace: f,
                state: o,
                preventScrollReset: i,
                relative: l
            })
        }
    }
    , [s, a, u, r, o, n, e, i, l])
}
function _2() {
    return c.jsxs("section", {
        className: "l-inlineDialog",
        children: [c.jsx("h1", {
            className: "inlineDialogHeading mediumHeading-splash u-centeredText",
            children: "Log in with your Hackscope account"
        }), c.jsx(Pn, {
            to: "/dashboard",
            state: {
                isOpen: !0
            },
            children: c.jsx(jb, {
                type: "submit",
                className: "tiiBtn tiiBtn-primarySplash tiiBtn-full",
                children: " Log In "
            })
        })]
    })
}
function yf({active: e, classTitle: t, classIdentifier: n, admin: r, open: o, setOpen: i}) {
    const l = ["Jason Webber", "HackMIT Admin"]
      , a = ()=>{
        localStorage.clear()
    }
    ;
    function s() {
        i(!o)
    }
    return c.jsx("div", {
        style: {
            width: o ? "240px" : "60px"
        },
        children: c.jsxs(Bo, {
            className: "l-sidebar",
            style: {
                width: o ? "240px" : "60px"
            },
            children: [c.jsxs(Bo.Section, {
                grow: !0,
                className: "sidebar--content",
                children: [c.jsx(Qu, {
                    in: !o,
                    style: {
                        left: "-10px",
                        top: "-5px",
                        position: "relative"
                    },
                    children: c.jsx(Pn, {
                        "aria-label": "Hackscope: Back to Home",
                        to: "/dashboard",
                        state: {
                            isOpen: o
                        },
                        children: c.jsx("img", {
                            alt: "Hackscope",
                            src: "/static/assets/hackscope.svg",
                            style: {
                                width: "30px"
                            }
                        })
                    })
                }), c.jsxs("div", {
                    className: "sidebar--logoHeader",
                    style: {
                        left: o ? "-15px" : "-3px"
                    },
                    children: [c.jsx("div", {
                        className: "svgLogo",
                        children: c.jsx(Pn, {
                            "aria-label": "Hackscope: Back to Home",
                            to: "/dashboard",
                            state: {
                                isOpen: o
                            },
                            children: c.jsx("img", {
                                alt: "Hackscope",
                                src: "/static/assets/hackscope-long.svg",
                                style: {
                                    width: o ? "150px" : "0px"
                                }
                            })
                        })
                    }), c.jsxs("div", {
                        "aria-label": "Show Menu",
                        className: "collapseIcon js-toggleSidebar js-interactiveElement",
                        role: "button",
                        onClick: s,
                        children: [c.jsx("i", {
                            "aria-hidden": "true",
                            className: "fa fa-chevron-left collapseIcon--leftArrow",
                            id: "left",
                            style: {
                                opacity: o ? 1 : 0
                            }
                        }), c.jsx("i", {
                            "aria-hidden": "true",
                            className: "fa fa-bars collapseIcon--hamburger"
                        }), c.jsx("i", {
                            "aria-hidden": "true",
                            className: "fa fa-chevron-right collapseIcon--rightArrow",
                            id: "right",
                            style: {
                                opacity: o ? 0 : 1
                            }
                        })]
                    })]
                }), c.jsxs(Qu, {
                    in: o,
                    transitionDuration: 100,
                    children: [c.jsx("h2", {
                        className: "sidebar--title sidebar--title-course",
                        children: c.jsx(Pn, {
                            to: "/dashboard",
                            state: {
                                isOpen: o
                            },
                            children: n
                        })
                    }), c.jsx("div", {
                        className: "sidebar--subtitle",
                        children: t
                    }), c.jsxs("ul", {
                        className: "sidebar--menu",
                        children: [c.jsx("li", {
                            className: "sidebar--menuItem",
                            children: c.jsxs(Pn, {
                                className: "sidebar--menuLink" + (e === "Dashboard" ? " active" : ""),
                                to: "/dashboard",
                                state: {
                                    isOpen: o
                                },
                                children: [c.jsx("div", {
                                    className: "sidebar--menuItemIcon",
                                    children: c.jsx("i", {
                                        aria_hidden: "true",
                                        className: "fa fa-tasks"
                                    })
                                }), c.jsx("div", {
                                    className: "sidebar--menuItemLabel",
                                    children: "Dashboard"
                                })]
                            })
                        }, "Dashboard"), c.jsx("li", {
                            className: "sidebar--menuItem",
                            children: c.jsxs("a", {
                                className: "sidebar--menuLink",
                                children: [c.jsx("div", {
                                    className: "sidebar--menuItemIcon",
                                    children: c.jsx("i", {
                                        aria_hidden: "true",
                                        className: "fa fa-repeat"
                                    })
                                }), c.jsx("div", {
                                    className: "sidebar--menuItemLabel",
                                    children: "Regrade Requests"
                                })]
                            })
                        }, "Regrade Requests")]
                    }), c.jsx("h2", {
                        className: "sidebar--menuHeader",
                        children: "Instructors"
                    }), c.jsx("ul", {
                        className: "sidebar--menu sidebar--menu-hiddenWhenCollapsed js-sidebarRoster",
                        children: l.map((u,d)=>c.jsxs("li", {
                            "aria-label": `Instructor: ${u}`,
                            className: "sidebar--menuItem",
                            children: [c.jsx("div", {
                                "aria-hidden": "true",
                                className: "sidebar--menuItemIcon",
                                children: c.jsx("div", {
                                    className: "fa-stack-container",
                                    children: c.jsxs("span", {
                                        className: "fa-stack fa-lg",
                                        children: [c.jsx("i", {
                                            className: "fa fa-circle-thin fa-stack-2x sidebar--userProfileIconOutline"
                                        }), c.jsx("i", {
                                            className: "fa fa-user fa-stack-1x"
                                        })]
                                    })
                                })
                            }), c.jsx("div", {
                                className: "sidebar--menuItemLabel",
                                children: u
                            })]
                        }, `sidebar-instructor-${d}`))
                    })]
                })]
            }), c.jsx(Bo.Section, {
                "aria-label": "Account: toggle more options",
                className: "sidebar--userProfile",
                tabIndex: "0",
                "aria-haspopup": "true",
                "aria-expanded": "false",
                role: "button",
                children: c.jsxs(zr, {
                    width: o ? 240 : 60,
                    styles: {
                        dropdown: {
                            left: "-10px",
                            padding: "0.75rem 0.5rem"
                        }
                    },
                    children: [c.jsx(zr.Target, {
                        children: c.jsxs("div", {
                            children: [c.jsx("div", {
                                "aria-hidden": "true",
                                className: "sidebar--userProfileIcon",
                                role: "presentation",
                                children: c.jsx("div", {
                                    className: "fa-stack-container",
                                    children: c.jsxs("span", {
                                        className: "fa-stack fa-lg",
                                        children: [c.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fa fa-circle-thin fa-stack-2x sidebar--userProfileIconOutline"
                                        }), c.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fa fa-user fa-stack-1x"
                                        })]
                                    })
                                })
                            }), c.jsxs("div", {
                                className: "sidebar--userProfileName",
                                style: {
                                    opacity: o ? 1 : 0
                                },
                                children: [r ? "Instructor" : "Student", " Account"]
                            }), c.jsx("div", {
                                className: "sidebar--userProfileMenuToggle",
                                children: c.jsx("i", {
                                    "aria-label": "toggle account menu",
                                    role: "img",
                                    className: "fa fa-angle-up"
                                })
                            })]
                        })
                    }), c.jsx(zr.Dropdown, {
                        style: {
                            border: "1px solid var(--tdl-color-outline)"
                        },
                        children: c.jsxs("div", {
                            className: "jBox-container",
                            children: [c.jsxs("a", {
                                className: "popover--listItem popover--listItem-actionMenu",
                                href: "https://hackxgpt.slack.com/archives/C05EQFR6GCX",
                                children: [c.jsx("i", {
                                    "aria-hidden": "true",
                                    className: "fa fa-question-circle"
                                }), " Help"]
                            }), c.jsxs("a", {
                                className: "popover--listItem popover--listItem-actionMenu",
                                href: "/",
                                onClick: a,
                                children: [c.jsx("i", {
                                    "aria-hidden": "true",
                                    className: "fa fa-power-off"
                                }), " Log Out"]
                            })]
                        })
                    })]
                })
            })]
        })
    })
}
function O2() {
    const e = io()
      , t = e.state === null ? !0 : e.state.isOpen
      , [n,r] = _.useState(t)
      , o = "Computer Systems Insecurities"
      , i = "6.5670"
      , l = "Summer 2023"
      , a = [{
        key: 1,
        name: "Final Exam",
        score: localStorage.getItem("score") ?? void 0,
        maxScore: 100,
        releaseDate: new Date("2023/07/01 00:00:00 -0400"),
        dueDate: new Date("2023/07/28 23:59:59 -0400")
    }];
    return c.jsxs(c.Fragment, {
        children: [c.jsx(yf, {
            active: "Dashboard",
            classIdentifier: i,
            classTitle: o,
            open: n,
            setOpen: r
        }), c.jsx("div", {
            className: "l-mainWrapper",
            style: {
                paddingLeft: n ? "240px" : "60px"
            },
            children: c.jsx("main", {
                className: "l-main",
                id: "main-content",
                tabIndex: "-1",
                children: c.jsx("div", {
                    className: "l-contentWrapper",
                    children: c.jsxs("div", {
                        className: "l-content",
                        children: [c.jsx("header", {
                            className: "courseHeader",
                            children: c.jsxs("div", {
                                className: "courseHeader--top",
                                children: [c.jsx("h1", {
                                    className: "courseHeader--title",
                                    children: i
                                }), c.jsx("h2", {
                                    className: "courseHeader--term",
                                    children: l
                                })]
                            })
                        }), c.jsxs(Hy, {
                            className: "table dataTable no-footer",
                            id: "assignments-student-table",
                            width: "785px",
                            children: [c.jsx("caption", {
                                className: "sr-only",
                                children: "Assignments List"
                            }), c.jsx("thead", {
                                children: c.jsxs("tr", {
                                    role: "row",
                                    children: [c.jsx("th", {
                                        role: "columnheader",
                                        scope: "col",
                                        className: "sorting",
                                        tabIndex: "0",
                                        "aria-controls": "assignments-student-table",
                                        rowSpan: "1",
                                        colSpan: "1",
                                        "aria-label": "Name: activate to sort column ascending",
                                        width: "158px",
                                        children: "Name"
                                    }), c.jsx("th", {
                                        role: "columnheader",
                                        scope: "col",
                                        className: "sorting",
                                        tabIndex: "0",
                                        "aria-controls": "assignments-student-table",
                                        rowSpan: "1",
                                        colSpan: "1",
                                        "aria-label": "Status: activate to sort column ascending",
                                        width: "197px",
                                        children: "Status"
                                    }), c.jsx("th", {
                                        className: "table--complexHeader sorting-right sorting sorting_desc",
                                        role: "columnheader",
                                        scope: "col",
                                        tabIndex: "0",
                                        "aria-controls": "assignments-student-table",
                                        rowSpan: "1",
                                        colSpan: "1",
                                        "aria-label": "Release and due date in Eastern Time (US & Canada): activate to sort column ascending",
                                        width: "414px",
                                        children: c.jsxs("div", {
                                            "aria-label": "Due Date",
                                            children: [c.jsx("span", {
                                                "aria-hidden": "true",
                                                children: "Released"
                                            }), c.jsxs("span", {
                                                children: ["Due (", c.jsx("abbr", {
                                                    title: "Eastern Time (US & Canada)",
                                                    children: "EDT"
                                                }), ")"]
                                            })]
                                        })
                                    })]
                                })
                            }), c.jsx("tbody", {
                                children: a.map(s=>c.jsxs("tr", {
                                    role: "row",
                                    className: "odd",
                                    children: [c.jsx("th", {
                                        className: "table--primaryLink",
                                        role: "rowheader",
                                        scope: "row",
                                        children: c.jsx(Pn, {
                                            to: "/submission",
                                            state: {
                                                isOpen: n
                                            },
                                            children: s.name
                                        })
                                    }), c.jsx("td", {
                                        className: "submissionStatus",
                                        children: c.jsx("div", {
                                            className: "submissionStatus--score",
                                            children: s.score && localStorage.getItem("lastSaved") ? `${s.score}/${s.maxScore}` : "No Submission"
                                        })
                                    }), c.jsx("td", {
                                        className: "sorting_1 sorting_2",
                                        children: c.jsx("div", {
                                            className: "submissionTimeChart",
                                            children: c.jsxs("div", {
                                                className: "progressBar--caption",
                                                children: [c.jsx("time", {
                                                    className: "submissionTimeChart--releaseDate",
                                                    dateTime: s.releaseDate.toString(),
                                                    children: s.releaseDate.toLocaleString()
                                                }), c.jsx("time", {
                                                    className: "submissionTimeChart--dueDate",
                                                    dateTime: s.dueDate.toString(),
                                                    children: s.dueDate.toLocaleString()
                                                })]
                                            })
                                        })
                                    })]
                                }, ""))
                            })]
                        })]
                    })
                })
            })
        })]
    })
}
function P2() {
    return c.jsxs("div", {
        className: "l-errorPage",
        children: [c.jsx("div", {
            className: "l-errorTopNav",
            children: c.jsx("div", {
                className: "svgLogo",
                children: c.jsx(Pn, {
                    "aria-label": "Hackscope: Back to Home",
                    to: "/dashboard",
                    state: {
                        isOpen: !0
                    },
                    children: c.jsx("img", {
                        alt: "Hackscope",
                        src: "/static/assets/hackscope-long.svg"
                    })
                })
            })
        }), c.jsxs("div", {
            className: "errorPageDialog",
            children: [c.jsxs("div", {
                children: [c.jsx("div", {
                    className: "errorPageDialog--responseCode",
                    children: "404"
                }), c.jsx("h1", {
                    className: "errorPageDialog--headline",
                    children: "We couldn't find anything at this address 😭."
                }), c.jsx("p", {
                    className: "errorPageDialog--content",
                    children: "You probably mistyped something in the address."
                })]
            }), c.jsx("div", {
                className: "errorPageDialog--links",
                children: c.jsx("p", {
                    className: "errorPageDialog--content",
                    children: c.jsx(Pn, {
                        to: "/dashboard",
                        className: "link link-splash",
                        state: {
                            isOpen: !0
                        },
                        children: " Go Home"
                    })
                })
            })]
        })]
    })
}
function tc(e) {
    for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
        for (var o = n[r]; o.charAt(0) == " "; )
            o = o.substring(1, o.length);
        if (o.indexOf(t) == 0)
            return o.substring(t.length, o.length)
    }
    return null
}
async function b2(e) {
    const t = await fetch("/answers", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + e
        }
    });
    return JSON.parse(await t.text())
}
async function E2(e) {
    const t = await fetch("/auth", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + e
        }
    });
    return JSON.parse(await t.text())
}
async function k2(e, t) {
    const n = await fetch("/scores", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + e
        },
        body: JSON.stringify({
            Q1: t[0],
            Q2: t[1],
            Q3: t[2]
        })
    });
    return JSON.parse(await n.text())
}
function n0({admin: e}) {
    async function t(n) {
        n.preventDefault(),
        localStorage.setItem("Q1", n.target.Q1.value),
        localStorage.setItem("Q2", n.target.Q2.value),
        localStorage.setItem("Q3", n.target.Q3.value),
        localStorage.setItem("lastSaved", new Date),
        location.reload()
    }
    return c.jsxs("form", {
        className: "onlineAssignment onlineAssignment-view",
        onSubmit: t,
        children: [c.jsx("div", {
            className: "onlineAssignment--question onlineAssignment--question-child onlineAssignment--question-parent",
            children: c.jsxs("div", {
                id: "question_20990769",
                tabIndex: "-1",
                children: [c.jsxs("div", {
                    className: "pageSubheading",
                    children: [c.jsx("h2", {
                        className: "questionHeading--title",
                        id: "Question_2_heading",
                        children: "Final Exam"
                    }), c.jsx("span", {
                        className: "questionHeading--points",
                        children: "100 Points"
                    })]
                }), c.jsx("div", {
                    children: c.jsx("div", {
                        className: "form--group",
                        children: c.jsx("div", {})
                    })
                })]
            })
        }), c.jsx("div", {
            className: "onlineAssignment--question onlineAssignment--question-child",
            children: c.jsxs("div", {
                id: "question_20990770",
                tabIndex: "-1",
                children: [c.jsxs("div", {
                    className: "pageSubheading",
                    children: [c.jsx("h3", {
                        className: "questionHeading--title questionHeading--title-child",
                        id: "Question_2.1_heading",
                        children: "Q1 "
                    }), c.jsx("span", {
                        className: "questionHeading--points",
                        children: "1 Point"
                    })]
                }), c.jsxs("div", {
                    children: [c.jsx("div", {
                        id: "question_20990770_text_0",
                        children: c.jsxs("div", {
                            children: [c.jsx("span", {
                                className: "sr-only",
                                children: "Grading comment:"
                            }), c.jsx("div", {
                                className: "markdownText u-preserveWhitespace",
                                children: c.jsx("p", {
                                    children: "What year was Hack founded?"
                                })
                            })]
                        })
                    }), c.jsxs("div", {
                        className: "form--group",
                        children: [e && c.jsx("div", {
                            className: "form--textArea form--textArea-prominent form--textArea-readOnly u-preserveWhitespace u-forceWordWrap",
                            children: localStorage.getItem("Q1")
                        }), !e && c.jsx("textarea", {
                            name: "Q1",
                            className: "form--textArea form--textArea-prominent form--textArea-readOnly u-preserveWhitespace u-forceWordWrap",
                            defaultValue: localStorage.getItem("Q1")
                        })]
                    })]
                })]
            })
        }), c.jsx("div", {
            className: "onlineAssignment--question onlineAssignment--question-child",
            children: c.jsxs("div", {
                id: "question_20990771",
                tabIndex: "-1",
                children: [c.jsxs("div", {
                    className: "pageSubheading",
                    children: [c.jsx("h3", {
                        className: "questionHeading--title questionHeading--title-child",
                        id: "Question_2.2_heading",
                        children: "Q2"
                    }), c.jsx("span", {
                        className: "questionHeading--points",
                        children: "1 Point"
                    })]
                }), c.jsxs("div", {
                    children: [c.jsx("div", {
                        id: "question_20990771_text_0",
                        children: c.jsx("div", {
                            children: c.jsx("div", {
                                className: "markdownText u-preserveWhitespace",
                                children: c.jsxs("p", {
                                    children: ["It’s 7 am. You're asleep when there's a sudden knock on the door (who dares interrupt your peaceful slumber?!?!). ", c.jsx("br", {}), "Behind the door are your friends who dropped by to have your world-famous breakfast platter. In your fridge is bread, milk, juice, bacon, ketchup, and a jar of jam. What do you open first?"]
                                })
                            })
                        })
                    }), c.jsxs("div", {
                        className: "form--group",
                        children: [e && c.jsx("div", {
                            className: "form--textArea form--textArea-prominent form--textArea-readOnly u-preserveWhitespace u-forceWordWrap",
                            children: localStorage.getItem("Q2")
                        }), !e && c.jsx("textarea", {
                            name: "Q2",
                            className: "form--textArea form--textArea-prominent form--textArea-readOnly u-preserveWhitespace u-forceWordWrap",
                            defaultValue: localStorage.getItem("Q2")
                        })]
                    })]
                })]
            })
        }), c.jsx("div", {
            className: "onlineAssignment--question onlineAssignment--question-child",
            children: c.jsxs("div", {
                id: "question_20990771",
                tabIndex: "-1",
                children: [c.jsxs("div", {
                    className: "pageSubheading",
                    children: [c.jsx("h3", {
                        className: "questionHeading--title questionHeading--title-child",
                        id: "Question_2.2_heading",
                        children: "Q3"
                    }), c.jsx("span", {
                        className: "questionHeading--points",
                        children: "98 Points"
                    })]
                }), c.jsxs("div", {
                    children: [c.jsx("div", {
                        id: "question_20990771_text_0",
                        children: c.jsx("div", {
                            children: c.jsx("div", {
                                className: "markdownText u-preserveWhitespace",
                                children: c.jsx("p", {
                                    children: "What's my favorite string?"
                                })
                            })
                        })
                    }), c.jsxs("div", {
                        className: "form--group",
                        children: [e && c.jsx("div", {
                            className: "form--textArea form--textArea-prominent form--textArea-readOnly u-preserveWhitespace u-forceWordWrap",
                            children: localStorage.getItem("Q3")
                        }), !e && c.jsx("textarea", {
                            name: "Q3",
                            className: "form--textArea form--textArea-prominent form--textArea-readOnly u-preserveWhitespace u-forceWordWrap",
                            defaultValue: localStorage.getItem("Q3")
                        })]
                    })]
                })]
            })
        }), c.jsx("div", {
            children: !e && c.jsxs(c.Fragment, {
                children: [c.jsx("button", {
                    type: "submit",
                    className: "tiiBtn tiiBtn-primary actionBar--action tiiBtn--textWithIconRight",
                    "aria-disabled": "false",
                    children: "Submit"
                }), c.jsx("span", {
                    className: "tii-font-label",
                    children: localStorage.getItem("lastSaved") ? `Last saved: 
                        ${new Date(localStorage.getItem("lastSaved")).toLocaleString()}` : ""
                })]
            })
        })]
    })
}
function C2({scores: e, isOpen: t, username: n}) {
    const [r,o] = _.useState(t)
      , i = "Computer System Insecurities"
      , l = "6.5670";
    return c.jsxs(c.Fragment, {
        children: [c.jsx(yf, {
            active: "Submission Page",
            classIdentifier: l,
            classTitle: i,
            admin: !1,
            open: r,
            setOpen: o
        }), c.jsx("div", {
            className: "l-mainWrapper",
            style: {
                paddingLeft: r ? "240px" : "60px"
            },
            children: c.jsx("div", {
                className: "l-reactWrapper notranslate",
                id: "main-content",
                tabIndex: "-1",
                children: c.jsxs("main", {
                    className: "l-main",
                    children: [c.jsxs("div", {
                        className: "l-contentWrapper",
                        children: [c.jsx("section", {
                            className: "l-content",
                            "aria-label": "view submission",
                            children: c.jsx(n0, {})
                        }), c.jsx("section", {
                            className: "l-rightSidebar l-rightSidebar-full l-rightSidebar-outline",
                            "aria-label": "submission rubric and results",
                            children: c.jsxs("div", {
                                className: "submissionOutline",
                                children: [c.jsxs("div", {
                                    className: "submissionOutlineHeader",
                                    children: [c.jsx("div", {
                                        className: "submissionOutlineHeader--statusContainer",
                                        children: c.jsx("div", {
                                            className: "statusIndicatorHeading statusIndicatorHeading-small statusIndicatorHeading-active" + (localStorage.getItem("lastSaved") ? "" : "-red"),
                                            children: localStorage.getItem("lastSaved") ? "Graded" : "Ungraded"
                                        })
                                    }), c.jsx("h1", {
                                        className: "submissionOutlineHeader--assignmentTitle",
                                        children: "Final Exam"
                                    })]
                                }), c.jsx("div", {
                                    className: "submissionOutline--section",
                                    children: c.jsx("h2", {
                                        className: "submissionOutline--sectionHeading",
                                        children: n
                                    })
                                }), c.jsxs("div", {
                                    className: "submissionOutline--section",
                                    children: [c.jsx("h2", {
                                        className: "submissionOutline--sectionHeading",
                                        children: "Total Points"
                                    }), c.jsxs("p", {
                                        className: "submissionOutlineHeader--totalPoints",
                                        children: [e[0] !== void 0 ? e.reduce((a,s)=>a + s) : "-", "/100"]
                                    })]
                                }), c.jsx("ol", {
                                    children: c.jsxs("li", {
                                        className: "submissionOutline--section",
                                        children: [c.jsxs("div", {
                                            className: "question-group",
                                            children: [c.jsx("h2", {
                                                className: "submissionOutline--sectionHeading",
                                                children: "Question 1"
                                            }), c.jsxs("div", {
                                                className: "submissionOutlineQuestion--header",
                                                children: [c.jsxs("div", {
                                                    className: "submissionOutlineQuestion--titleContainer",
                                                    children: [c.jsx("h3", {
                                                        className: "submissionOutlineQuestion--title",
                                                        children: "Hack Founding Year"
                                                    }), c.jsx("br", {})]
                                                }), c.jsx("span", {
                                                    className: "submissionOutlineQuestion--weightAndScore",
                                                    children: c.jsx("div", {
                                                        "aria-label": "0 out of 0 points",
                                                        children: c.jsxs("span", {
                                                            "aria-hidden": "false",
                                                            children: [c.jsx("span", {
                                                                className: "submissionOutlineQuestion--score",
                                                                children: e[0] !== void 0 ? e[0] : "-"
                                                            }), " / 1 pts"]
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), c.jsxs("div", {
                                            className: "question-group",
                                            children: [c.jsx("h2", {
                                                className: "submissionOutline--sectionHeading",
                                                children: "Question 2"
                                            }), c.jsxs("div", {
                                                className: "submissionOutlineQuestion--header",
                                                children: [c.jsxs("div", {
                                                    className: "submissionOutlineQuestion--titleContainer",
                                                    children: [c.jsx("h3", {
                                                        className: "submissionOutlineQuestion--title",
                                                        children: "Breakfast at (not) Tiffany's"
                                                    }), c.jsx("br", {})]
                                                }), c.jsx("span", {
                                                    className: "submissionOutlineQuestion--weightAndScore",
                                                    children: c.jsx("div", {
                                                        "aria-label": "0 out of 0 points",
                                                        children: c.jsxs("span", {
                                                            "aria-hidden": "false",
                                                            children: [c.jsx("span", {
                                                                className: "submissionOutlineQuestion--score",
                                                                children: e[1] !== void 0 ? e[1] : "-"
                                                            }), " / 1 pts"]
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), c.jsxs("div", {
                                            className: "question-group",
                                            children: [c.jsx("h2", {
                                                className: "submissionOutline--sectionHeading",
                                                children: "Question 3"
                                            }), c.jsxs("div", {
                                                className: "submissionOutlineQuestion--header",
                                                children: [c.jsxs("div", {
                                                    className: "submissionOutlineQuestion--titleContainer",
                                                    children: [c.jsx("h3", {
                                                        className: "submissionOutlineQuestion--title",
                                                        children: "What's my favorite string?"
                                                    }), c.jsx("br", {})]
                                                }), c.jsx("span", {
                                                    className: "submissionOutlineQuestion--weightAndScore",
                                                    children: c.jsx("div", {
                                                        "aria-label": "0 out of 0 points",
                                                        children: c.jsxs("span", {
                                                            "aria-hidden": "false",
                                                            children: [c.jsx("span", {
                                                                className: "submissionOutlineQuestion--score",
                                                                children: e[2] !== void 0 ? e[2] : "-"
                                                            }), " / 98 pts"]
                                                        })
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    }), c.jsx("section", {
                        id: "actionBar",
                        className: "l-actionBar"
                    })]
                })
            })
        })]
    })
}
function N2({scores: e, isOpen: t, username: n}) {
    const [r,o] = _.useState(t)
      , i = "Computer Systems Insecurities"
      , l = "6.5670"
      , a = tc("access_token")
      , [s,u] = _.useState("Oops you messed something up");
    return _.useEffect(()=>{
        async function d() {
            const f = await b2(a);
            f.admin && u(f.flag)
        }
        s === "Oops you messed something up" && d()
    }
    , []),
    c.jsxs(c.Fragment, {
        children: [c.jsx(yf, {
            active: "Answer Key",
            classIdentifier: l,
            classTitle: i,
            admin: !0,
            open: r,
            setOpen: o
        }), c.jsx("div", {
            className: "l-mainWrapper",
            style: {
                paddingLeft: r ? "240px" : "60px"
            },
            children: c.jsx("div", {
                className: "l-reactWrapper notranslate",
                id: "main-content",
                tabIndex: "-1",
                children: c.jsxs("main", {
                    className: "l-main",
                    children: [c.jsxs("div", {
                        className: "l-contentWrapper",
                        children: [c.jsx("section", {
                            className: "l-content",
                            "aria-label": "view submission",
                            children: c.jsx(n0, {
                                admin: !0
                            })
                        }), c.jsx("section", {
                            className: "l-rightSidebar l-rightSidebar-full l-rightSidebar-outline",
                            "aria-label": "submission rubric and results",
                            children: c.jsxs("div", {
                                className: "submissionOutline",
                                children: [c.jsxs("div", {
                                    className: "submissionOutlineHeader",
                                    children: [c.jsx("div", {
                                        className: "submissionOutlineHeader--statusContainer",
                                        children: c.jsx("div", {
                                            className: "statusIndicatorHeading statusIndicatorHeading-small statusIndicatorHeading-active",
                                            children: "Answer Key"
                                        })
                                    }), c.jsx("h1", {
                                        className: "submissionOutlineHeader--assignmentTitle",
                                        children: "Final Exam"
                                    })]
                                }), c.jsx("div", {
                                    className: "submissionOutline--section",
                                    children: c.jsx("h2", {
                                        className: "submissionOutline--sectionHeading",
                                        children: n
                                    })
                                }), c.jsxs("div", {
                                    className: "submissionOutline--section",
                                    children: [c.jsx("h2", {
                                        className: "submissionOutline--sectionHeading",
                                        children: "Total Points"
                                    }), c.jsxs("p", {
                                        className: "submissionOutlineHeader--totalPoints",
                                        children: [" ", e[0] !== void 0 ? e.reduce((d,f)=>d + f) : "-", "/100"]
                                    })]
                                }), c.jsx("ol", {
                                    children: c.jsxs("li", {
                                        className: "submissionOutline--section",
                                        children: [c.jsxs("div", {
                                            className: "submissionOutlineQuestion--header",
                                            children: [c.jsxs("div", {
                                                className: "submissionOutlineQuestion--titleContainer",
                                                children: [c.jsx("h2", {
                                                    className: "submissionOutline--sectionHeading",
                                                    children: " Question 1 "
                                                }), c.jsx("h3", {
                                                    className: "submissionOutlineQuestion--title",
                                                    children: " Hack Founding Year "
                                                })]
                                            }), c.jsx("span", {
                                                className: "submissionOutlineQuestion--weightAndScore",
                                                children: c.jsx("div", {
                                                    "aria-label": "1 out of 1 points",
                                                    children: c.jsxs("span", {
                                                        "aria-hidden": "true",
                                                        children: [c.jsx("span", {
                                                            className: "submissionOutlineQuestion--score",
                                                            children: e[0] !== void 0 ? e[0] : "-"
                                                        }), " ", "/ 1 pts"]
                                                    })
                                                })
                                            })]
                                        }), c.jsx("ol", {
                                            children: c.jsx("li", {
                                                className: "submissionOutlineQuestion submissionOutlineQuestion-childQuestion",
                                                children: c.jsx("div", {
                                                    className: "submissionOutlineQuestion--contents",
                                                    children: c.jsxs("div", {
                                                        id: "Question_1",
                                                        role: "region",
                                                        tabIndex: "-1",
                                                        children: [c.jsxs("div", {
                                                            className: "1C submissionOutlineRubricItem " + (e[0] === 1 ? "submissionOutlineRubricItem-present" : ""),
                                                            children: [c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--applied-icon",
                                                                children: c.jsx("i", {
                                                                    className: "fa fa-check",
                                                                    role: "img",
                                                                    "aria-hidden": "true",
                                                                    style: {
                                                                        display: e[0] === 1 ? "block" : "none"
                                                                    }
                                                                })
                                                            }), c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--points submissionOutlineRubricItem--points-happy",
                                                                "aria-label": "+ 1 point",
                                                                children: "+ 1 pt"
                                                            }), c.jsx("div", {
                                                                className: "submissionOutlineRubricItem--descriptionWrapper",
                                                                children: c.jsx("div", {
                                                                    className: "submissionOutlineRubricItem--description",
                                                                    children: c.jsx("div", {
                                                                        children: c.jsx("div", {
                                                                            className: "markdownText u-preserveWhitespace markdownText-xs",
                                                                            children: c.jsx("p", {
                                                                                children: "Correct: 2013"
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        }), c.jsxs("div", {
                                                            className: "1I submissionOutlineRubricItem " + (e[0] === 0 ? "submissionOutlineRubricItem-present" : ""),
                                                            children: [c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--applied-icon",
                                                                children: c.jsx("i", {
                                                                    className: "fa fa-check",
                                                                    role: "img",
                                                                    "aria-hidden": "true",
                                                                    style: {
                                                                        display: e[0] === 0 ? "block" : "none"
                                                                    }
                                                                })
                                                            }), c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--points submissionOutlineRubricItem--points-happy",
                                                                "aria-label": "+ 0 points",
                                                                children: "+ 0 pts"
                                                            }), c.jsx("div", {
                                                                className: "submissionOutlineRubricItem--descriptionWrapper",
                                                                children: c.jsx("div", {
                                                                    className: "submissionOutlineRubricItem--description",
                                                                    children: c.jsx("div", {
                                                                        children: c.jsx("div", {
                                                                            className: "markdownText u-preserveWhitespace markdownText-xs",
                                                                            children: c.jsx("p", {
                                                                                children: "Incorrect"
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        }), c.jsxs("div", {
                                            className: "submissionOutlineQuestion--header",
                                            children: [c.jsxs("div", {
                                                className: "submissionOutlineQuestion--titleContainer",
                                                children: [c.jsx("h2", {
                                                    className: "submissionOutline--sectionHeading",
                                                    children: " Question 2 "
                                                }), c.jsx("h3", {
                                                    className: "submissionOutlineQuestion--title",
                                                    children: " Breakfast at (not) Tiffany's "
                                                })]
                                            }), c.jsx("span", {
                                                className: "submissionOutlineQuestion--weightAndScore",
                                                children: c.jsx("div", {
                                                    "aria-label": "1 out of 1 points",
                                                    children: c.jsxs("span", {
                                                        "aria-hidden": "true",
                                                        children: [c.jsx("span", {
                                                            className: "submissionOutlineQuestion--score",
                                                            children: e[1] !== void 0 ? e[1] : "-"
                                                        }), " ", "/ 1 pts"]
                                                    })
                                                })
                                            })]
                                        }), c.jsx("ol", {
                                            children: c.jsxs("li", {
                                                className: "submissionOutlineQuestion submissionOutlineQuestion-childQuestion",
                                                children: [c.jsx("div", {
                                                    className: "submissionOutlineQuestion--header",
                                                    children: c.jsx("span", {
                                                        className: "submissionOutlineQuestion--weightAndScore submissionOutlineQuestion--weightAndScore-child"
                                                    })
                                                }), c.jsx("div", {
                                                    className: "submissionOutlineQuestion--contents",
                                                    children: c.jsxs("div", {
                                                        id: "Question_2",
                                                        role: "region",
                                                        tabIndex: "-1",
                                                        children: [c.jsxs("div", {
                                                            className: "2C submissionOutlineRubricItem " + (e[1] === 1 ? "submissionOutlineRubricItem-present" : ""),
                                                            children: [c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--applied-icon",
                                                                children: c.jsx("i", {
                                                                    className: "fa fa-check",
                                                                    role: "img",
                                                                    "aria-hidden": "true",
                                                                    style: {
                                                                        display: e[1] === 1 ? "block" : "none"
                                                                    }
                                                                })
                                                            }), c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--points submissionOutlineRubricItem--points-happy",
                                                                "aria-label": "+ 1 point",
                                                                children: "+ 1 pt"
                                                            }), c.jsx("div", {
                                                                className: "submissionOutlineRubricItem--descriptionWrapper",
                                                                children: c.jsx("div", {
                                                                    className: "submissionOutlineRubricItem--description",
                                                                    children: c.jsx("div", {
                                                                        children: c.jsx("div", {
                                                                            className: "markdownText u-preserveWhitespace markdownText-xs",
                                                                            children: c.jsx("p", {
                                                                                children: "Correct: Your eyes"
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        }), c.jsxs("div", {
                                                            className: "2I submissionOutlineRubricItem " + (e[1] === 0 ? "submissionOutlineRubricItem-present" : ""),
                                                            children: [c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--applied-icon",
                                                                children: c.jsx("i", {
                                                                    className: "fa fa-check",
                                                                    role: "img",
                                                                    "aria-hidden": "true",
                                                                    style: {
                                                                        display: e[1] === 0 ? "block" : "none"
                                                                    }
                                                                })
                                                            }), c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--points submissionOutlineRubricItem--points-happy",
                                                                "aria-label": "+ 0 points",
                                                                children: "+ 0 pts"
                                                            }), c.jsx("div", {
                                                                className: "submissionOutlineRubricItem--descriptionWrapper",
                                                                children: c.jsx("div", {
                                                                    className: "submissionOutlineRubricItem--description",
                                                                    children: c.jsx("div", {
                                                                        children: c.jsx("div", {
                                                                            className: "markdownText u-preserveWhitespace markdownText-xs",
                                                                            children: c.jsx("p", {
                                                                                children: "Incorrect"
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), c.jsxs("div", {
                                            className: "submissionOutlineQuestion--header",
                                            children: [c.jsxs("div", {
                                                className: "submissionOutlineQuestion--titleContainer",
                                                children: [c.jsx("h2", {
                                                    className: "submissionOutline--sectionHeading",
                                                    children: "Question 3"
                                                }), c.jsx("h3", {
                                                    className: "submissionOutlineQuestion--title",
                                                    children: "What's my favorite string?"
                                                })]
                                            }), c.jsx("span", {
                                                className: "submissionOutlineQuestion--weightAndScore",
                                                children: c.jsx("div", {
                                                    "aria-label": "1 out of 1 points",
                                                    children: c.jsxs("span", {
                                                        "aria-hidden": "true",
                                                        children: [c.jsx("span", {
                                                            className: "submissionOutlineQuestion--score",
                                                            children: e[2] !== void 0 ? e[2] : "-"
                                                        }), " ", "/ 98 pts"]
                                                    })
                                                })
                                            })]
                                        }), c.jsx("ol", {
                                            children: c.jsxs("li", {
                                                className: "submissionOutlineQuestion submissionOutlineQuestion-childQuestion",
                                                children: [c.jsx("div", {
                                                    className: "submissionOutlineQuestion--header",
                                                    children: c.jsx("span", {
                                                        className: "submissionOutlineQuestion--weightAndScore submissionOutlineQuestion--weightAndScore-child"
                                                    })
                                                }), c.jsx("div", {
                                                    className: "submissionOutlineQuestion--contents",
                                                    children: c.jsxs("div", {
                                                        id: "Question_3",
                                                        role: "region",
                                                        tabIndex: "-1",
                                                        children: [c.jsxs("div", {
                                                            className: "3C submissionOutlineRubricItem " + (e[2] === 98 ? "submissionOutlineRubricItem-present" : ""),
                                                            children: [c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--applied-icon",
                                                                children: c.jsx("i", {
                                                                    className: "fa fa-check",
                                                                    role: "img",
                                                                    "aria-hidden": "true",
                                                                    style: {
                                                                        display: e[2] === 98 ? "block" : "none"
                                                                    }
                                                                })
                                                            }), c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--points submissionOutlineRubricItem--points-happy",
                                                                "aria-label": "+ 1 point",
                                                                children: "+ 98 pts"
                                                            }), c.jsx("div", {
                                                                className: "submissionOutlineRubricItem--descriptionWrapper",
                                                                children: c.jsx("div", {
                                                                    className: "submissionOutlineRubricItem--description",
                                                                    children: c.jsx("div", {
                                                                        className: "markdownText u-preserveWhitespace markdownText-xs",
                                                                        children: c.jsxs("p", {
                                                                            children: ["Correct: My favorite string is ", s, "."]
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        }), c.jsxs("div", {
                                                            className: "3I submissionOutlineRubricItem " + (e[2] === 0 ? "submissionOutlineRubricItem-present" : ""),
                                                            children: [c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--applied-icon",
                                                                children: c.jsx("i", {
                                                                    className: "fa fa-check",
                                                                    role: "img",
                                                                    "aria-hidden": "true",
                                                                    style: {
                                                                        display: e[2] === 0 ? "block" : "none"
                                                                    }
                                                                })
                                                            }), c.jsx("span", {
                                                                className: "submissionOutlineRubricItem--points submissionOutlineRubricItem--points-happy",
                                                                "aria-label": "+ 0 points",
                                                                children: "+ 0 pts"
                                                            }), c.jsx("div", {
                                                                className: "submissionOutlineRubricItem--descriptionWrapper",
                                                                children: c.jsx("div", {
                                                                    className: "submissionOutlineRubricItem--description",
                                                                    children: c.jsx("div", {
                                                                        className: "markdownText u-preserveWhitespace markdownText-xs",
                                                                        children: c.jsx("p", {
                                                                            children: "Incorrect"
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    }), c.jsx("section", {
                        id: "actionBar",
                        className: "l-actionBar"
                    })]
                })
            })
        })]
    })
}
function j2() {
    const e = io()
      , t = e.state === null ? !0 : e.state.isOpen
      , n = i2();
    return n.admin ? c.jsx(N2, {
        scores: n.scores,
        isOpen: t,
        username: n.username
    }) : c.jsx(C2, {
        scores: n.scores,
        isOpen: t,
        username: n.username
    })
}
async function R2() {
    const e = await E2(tc("access_token"))
      , t = localStorage.getItem("lastSaved") ? await k2(tc("access_token"), [localStorage.getItem("Q1"), localStorage.getItem("Q2"), localStorage.getItem("Q3")]) : [void 0, void 0, void 0];
    return t[0] !== void 0 && localStorage.setItem("score", t.reduce((n,r)=>n + r)),
    {
        admin: e && e.admin === !0,
        scores: t,
        username: e.username ? e.username : "Prospective Hacker"
    }
}
const $2 = g2(ec(c.jsxs($o, {
    errorElement: c.jsx(P2, {}),
    children: [c.jsx($o, {
        index: !0,
        path: "/",
        element: c.jsx(_2, {})
    }), c.jsx($o, {
        index: !0,
        path: "/dashboard",
        element: c.jsx(O2, {})
    }), c.jsx($o, {
        index: !0,
        loader: R2,
        path: "/submission",
        element: c.jsx(j2, {})
    })]
})));
Ks.createRoot(document.getElementById("root")).render(c.jsx(R.StrictMode, {
    children: c.jsx(pv, {
        withGlobalStyles: !0,
        withNormalizeCSS: !0,
        theme: {
            defaultRadius: 0,
            globalStyles: e=>({
                body: {
                    backgroundColor: e.colors.white
                }
            })
        },
        children: c.jsx(s2, {
            router: $2
        })
    })
}));
