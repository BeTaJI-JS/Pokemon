var zp = Object.defineProperty;
var jp = (e, t, n) =>
  t in e
    ? zp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Do = (e, t, n) => (jp(e, typeof t != "symbol" ? t + "" : t, n), n);
function Ip(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Lp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Oc = { exports: {} },
  ho = {},
  Tc = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hr = Symbol.for("react.element"),
  Dp = Symbol.for("react.portal"),
  Ap = Symbol.for("react.fragment"),
  Fp = Symbol.for("react.strict_mode"),
  Up = Symbol.for("react.profiler"),
  $p = Symbol.for("react.provider"),
  Qp = Symbol.for("react.context"),
  Bp = Symbol.for("react.forward_ref"),
  Wp = Symbol.for("react.suspense"),
  Vp = Symbol.for("react.memo"),
  Hp = Symbol.for("react.lazy"),
  Ls = Symbol.iterator;
function qp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ls && e[Ls]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Nc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mc = Object.assign,
  zc = {};
function Wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zc),
    (this.updater = n || Nc);
}
Wn.prototype.isReactComponent = {};
Wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jc() {}
jc.prototype = Wn.prototype;
function Pu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zc),
    (this.updater = n || Nc);
}
var Ou = (Pu.prototype = new jc());
Ou.constructor = Pu;
Mc(Ou, Wn.prototype);
Ou.isPureReactComponent = !0;
var Ds = Array.isArray,
  Ic = Object.prototype.hasOwnProperty,
  Tu = { current: null },
  Lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ic.call(t, r) && !Lc.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
  return {
    $$typeof: Hr,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Tu.current,
  };
}
function Kp(e, t) {
  return {
    $$typeof: Hr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Nu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hr;
}
function Yp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var As = /\/+/g;
function Ao(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Yp("" + e.key)
    : t.toString(36);
}
function Ci(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Hr:
          case Dp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Ao(l, 0) : r),
      Ds(i)
        ? ((n = ""),
          e != null && (n = e.replace(As, "$&/") + "/"),
          Ci(i, t, n, "", function (f) {
            return f;
          }))
        : i != null &&
          (Nu(i) &&
            (i = Kp(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(As, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Ds(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ao(o, u);
      l += Ci(o, t, n, s, i);
    }
  else if (((s = qp(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ao(o, u++)), (l += Ci(o, t, n, s, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return l;
}
function ri(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ci(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Xp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ee = { current: null },
  xi = { transition: null },
  Gp = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: xi,
    ReactCurrentOwner: Tu,
  };
$.Children = {
  map: ri,
  forEach: function (e, t, n) {
    ri(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ri(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ri(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Nu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
$.Component = Wn;
$.Fragment = Ap;
$.Profiler = Up;
$.PureComponent = Pu;
$.StrictMode = Fp;
$.Suspense = Wp;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gp;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Mc({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Tu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ic.call(t, s) &&
        !Lc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Hr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $p, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = Dc;
$.createFactory = function (e) {
  var t = Dc.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: Bp, render: e };
};
$.isValidElement = Nu;
$.lazy = function (e) {
  return { $$typeof: Hp, _payload: { _status: -1, _result: e }, _init: Xp };
};
$.memo = function (e, t) {
  return { $$typeof: Vp, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = xi.transition;
  xi.transition = {};
  try {
    e();
  } finally {
    xi.transition = t;
  }
};
$.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
$.useCallback = function (e, t) {
  return Ee.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Ee.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Ee.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Ee.current.useEffect(e, t);
};
$.useId = function () {
  return Ee.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Ee.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Ee.current.useRef(e);
};
$.useState = function (e) {
  return Ee.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Ee.current.useTransition();
};
$.version = "18.2.0";
Tc.exports = $;
var R = Tc.exports;
const Mu = Lp(R),
  wl = Ip({ __proto__: null, default: Mu }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jp = R,
  Zp = Symbol.for("react.element"),
  bp = Symbol.for("react.fragment"),
  eh = Object.prototype.hasOwnProperty,
  th = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  nh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ac(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) eh.call(t, r) && !nh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Zp,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: th.current,
  };
}
ho.Fragment = bp;
ho.jsx = Ac;
ho.jsxs = Ac;
Oc.exports = ho;
var U = Oc.exports,
  El = {},
  Fc = { exports: {} },
  Le = {},
  Uc = { exports: {} },
  $c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var M = T.length;
    T.push(I);
    e: for (; 0 < M; ) {
      var F = (M - 1) >>> 1,
        A = T[F];
      if (0 < i(A, I)) (T[F] = I), (T[M] = A), (M = F);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0],
      M = T.pop();
    if (M !== I) {
      T[0] = M;
      e: for (var F = 0, A = T.length, H = A >>> 1; F < H; ) {
        var Qt = 2 * (F + 1) - 1,
          Lo = T[Qt],
          Bt = Qt + 1,
          ni = T[Bt];
        if (0 > i(Lo, M))
          Bt < A && 0 > i(ni, Lo)
            ? ((T[F] = ni), (T[Bt] = M), (F = Bt))
            : ((T[F] = Lo), (T[Qt] = M), (F = Qt));
        else if (Bt < A && 0 > i(ni, M)) (T[F] = ni), (T[Bt] = M), (F = Bt);
        else break e;
      }
    }
    return I;
  }
  function i(T, I) {
    var M = T.sortIndex - I.sortIndex;
    return M !== 0 ? M : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var s = [],
    f = [],
    m = 1,
    y = null,
    d = 3,
    v = !1,
    g = !1,
    S = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function a(T) {
    for (var I = n(f); I !== null; ) {
      if (I.callback === null) r(f);
      else if (I.startTime <= T)
        r(f), (I.sortIndex = I.expirationTime), t(s, I);
      else break;
      I = n(f);
    }
  }
  function p(T) {
    if (((S = !1), a(T), !g))
      if (n(s) !== null) (g = !0), W(E);
      else {
        var I = n(f);
        I !== null && re(p, I.startTime - T);
      }
  }
  function E(T, I) {
    (g = !1), S && ((S = !1), h(C), (C = -1)), (v = !0);
    var M = d;
    try {
      for (
        a(I), y = n(s);
        y !== null && (!(y.expirationTime > I) || (T && !N()));

      ) {
        var F = y.callback;
        if (typeof F == "function") {
          (y.callback = null), (d = y.priorityLevel);
          var A = F(y.expirationTime <= I);
          (I = e.unstable_now()),
            typeof A == "function" ? (y.callback = A) : y === n(s) && r(s),
            a(I);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var H = !0;
      else {
        var Qt = n(f);
        Qt !== null && re(p, Qt.startTime - I), (H = !1);
      }
      return H;
    } finally {
      (y = null), (d = M), (v = !1);
    }
  }
  var _ = !1,
    k = null,
    C = -1,
    P = 5,
    x = -1;
  function N() {
    return !(e.unstable_now() - x < P);
  }
  function z() {
    if (k !== null) {
      var T = e.unstable_now();
      x = T;
      var I = !0;
      try {
        I = k(!0, T);
      } finally {
        I ? L() : ((_ = !1), (k = null));
      }
    } else _ = !1;
  }
  var L;
  if (typeof c == "function")
    L = function () {
      c(z);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      Q = D.port2;
    (D.port1.onmessage = z),
      (L = function () {
        Q.postMessage(null);
      });
  } else
    L = function () {
      w(z, 0);
    };
  function W(T) {
    (k = T), _ || ((_ = !0), L());
  }
  function re(T, I) {
    C = w(function () {
      T(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), W(E));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (P = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (T) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var M = d;
      d = I;
      try {
        return T();
      } finally {
        d = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = d;
      d = T;
      try {
        return I();
      } finally {
        d = M;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, M) {
      var F = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? F + M : F))
          : (M = F),
        T)
      ) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return (
        (A = M + A),
        (T = {
          id: m++,
          callback: I,
          priorityLevel: T,
          startTime: M,
          expirationTime: A,
          sortIndex: -1,
        }),
        M > F
          ? ((T.sortIndex = M),
            t(f, T),
            n(s) === null &&
              T === n(f) &&
              (S ? (h(C), (C = -1)) : (S = !0), re(p, M - F)))
          : ((T.sortIndex = A), t(s, T), g || v || ((g = !0), W(E))),
        T
      );
    }),
    (e.unstable_shouldYield = N),
    (e.unstable_wrapCallback = function (T) {
      var I = d;
      return function () {
        var M = d;
        d = I;
        try {
          return T.apply(this, arguments);
        } finally {
          d = M;
        }
      };
    });
})($c);
Uc.exports = $c;
var rh = Uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qc = R,
  je = rh;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Bc = new Set(),
  wr = {};
function un(e, t) {
  In(e, t), In(e + "Capture", t);
}
function In(e, t) {
  for (wr[e] = t, e = 0; e < t.length; e++) Bc.add(t[e]);
}
var at = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  kl = Object.prototype.hasOwnProperty,
  ih =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fs = {},
  Us = {};
function oh(e) {
  return kl.call(Us, e)
    ? !0
    : kl.call(Fs, e)
      ? !1
      : ih.test(e)
        ? (Us[e] = !0)
        : ((Fs[e] = !0), !1);
}
function lh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function uh(e, t, n, r) {
  if (t === null || typeof t > "u" || lh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ke(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zu = /[\-:]([a-z])/g;
function ju(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zu, ju);
    de[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zu, ju);
    de[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zu, ju);
  de[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Iu(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (uh(t, n, i, r) && (n = null),
    r || i === null
      ? oh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ii = Symbol.for("react.element"),
  hn = Symbol.for("react.portal"),
  mn = Symbol.for("react.fragment"),
  Lu = Symbol.for("react.strict_mode"),
  _l = Symbol.for("react.profiler"),
  Wc = Symbol.for("react.provider"),
  Vc = Symbol.for("react.context"),
  Du = Symbol.for("react.forward_ref"),
  Cl = Symbol.for("react.suspense"),
  xl = Symbol.for("react.suspense_list"),
  Au = Symbol.for("react.memo"),
  yt = Symbol.for("react.lazy"),
  Hc = Symbol.for("react.offscreen"),
  $s = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($s && e[$s]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  Fo;
function rr(e) {
  if (Fo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fo = (t && t[1]) || "";
    }
  return (
    `
` +
    Fo +
    e
  );
}
var Uo = !1;
function $o(e, t) {
  if (!e || Uo) return "";
  Uo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var i = f.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          u = o.length - 1;
        1 <= l && 0 <= u && i[l] !== o[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (i[l] !== o[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || i[l] !== o[u])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (Uo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? rr(e) : "";
}
function sh(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr("Lazy");
    case 13:
      return rr("Suspense");
    case 19:
      return rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $o(e.type, !1)), e;
    case 11:
      return (e = $o(e.type.render, !1)), e;
    case 1:
      return (e = $o(e.type, !0)), e;
    default:
      return "";
  }
}
function Rl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mn:
      return "Fragment";
    case hn:
      return "Portal";
    case _l:
      return "Profiler";
    case Lu:
      return "StrictMode";
    case Cl:
      return "Suspense";
    case xl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vc:
        return (e.displayName || "Context") + ".Consumer";
      case Wc:
        return (e._context.displayName || "Context") + ".Provider";
      case Du:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Au:
        return (
          (t = e.displayName || null), t !== null ? t : Rl(e.type) || "Memo"
        );
      case yt:
        (t = e._payload), (e = e._init);
        try {
          return Rl(e(t));
        } catch {}
    }
  return null;
}
function ah(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Rl(t);
    case 8:
      return t === Lu ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ch(e) {
  var t = qc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function oi(e) {
  e._valueTracker || (e._valueTracker = ch(e));
}
function Kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ai(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pl(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yc(e, t) {
  (t = t.checked), t != null && Iu(e, "checked", t, !1);
}
function Ol(e, t) {
  Yc(e, t);
  var n = zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Tl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Tl(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Tl(e, t, n) {
  (t !== "number" || Ai(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ir = Array.isArray;
function Pn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ws(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (ir(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function Xc(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ml(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var li,
  Jc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        li = li || document.createElement("div"),
          li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = li.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var sr = {
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
    strokeWidth: !0,
  },
  fh = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function (e) {
  fh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sr[t] = sr[e]);
  });
});
function Zc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (sr.hasOwnProperty(e) && sr[e])
      ? ("" + t).trim()
      : t + "px";
}
function bc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Zc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var dh = Z(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function zl(e, t) {
  if (t) {
    if (dh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function jl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var Il = null;
function Fu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ll = null,
  On = null,
  Tn = null;
function Hs(e) {
  if ((e = Yr(e))) {
    if (typeof Ll != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = So(t)), Ll(e.stateNode, e.type, t));
  }
}
function ef(e) {
  On ? (Tn ? Tn.push(e) : (Tn = [e])) : (On = e);
}
function tf() {
  if (On) {
    var e = On,
      t = Tn;
    if (((Tn = On = null), Hs(e), t)) for (e = 0; e < t.length; e++) Hs(t[e]);
  }
}
function nf(e, t) {
  return e(t);
}
function rf() {}
var Qo = !1;
function of(e, t, n) {
  if (Qo) return e(t, n);
  Qo = !0;
  try {
    return nf(e, t, n);
  } finally {
    (Qo = !1), (On !== null || Tn !== null) && (rf(), tf());
  }
}
function kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = So(n);
  if (r === null) return null;
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Dl = !1;
if (at)
  try {
    var Yn = {};
    Object.defineProperty(Yn, "passive", {
      get: function () {
        Dl = !0;
      },
    }),
      window.addEventListener("test", Yn, Yn),
      window.removeEventListener("test", Yn, Yn);
  } catch {
    Dl = !1;
  }
function ph(e, t, n, r, i, o, l, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (m) {
    this.onError(m);
  }
}
var ar = !1,
  Fi = null,
  Ui = !1,
  Al = null,
  hh = {
    onError: function (e) {
      (ar = !0), (Fi = e);
    },
  };
function mh(e, t, n, r, i, o, l, u, s) {
  (ar = !1), (Fi = null), ph.apply(hh, arguments);
}
function yh(e, t, n, r, i, o, l, u, s) {
  if ((mh.apply(this, arguments), ar)) {
    if (ar) {
      var f = Fi;
      (ar = !1), (Fi = null);
    } else throw Error(O(198));
    Ui || ((Ui = !0), (Al = f));
  }
}
function sn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qs(e) {
  if (sn(e) !== e) throw Error(O(188));
}
function vh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = sn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return qs(i), e;
        if (o === r) return qs(i), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, u = i.child; u; ) {
        if (u === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (u === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = o.child; u; ) {
          if (u === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (u === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function uf(e) {
  return (e = vh(e)), e !== null ? sf(e) : null;
}
function sf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var af = je.unstable_scheduleCallback,
  Ks = je.unstable_cancelCallback,
  gh = je.unstable_shouldYield,
  Sh = je.unstable_requestPaint,
  ee = je.unstable_now,
  wh = je.unstable_getCurrentPriorityLevel,
  Uu = je.unstable_ImmediatePriority,
  cf = je.unstable_UserBlockingPriority,
  $i = je.unstable_NormalPriority,
  Eh = je.unstable_LowPriority,
  ff = je.unstable_IdlePriority,
  mo = null,
  tt = null;
function kh(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
    try {
      tt.onCommitFiberRoot(mo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : xh,
  _h = Math.log,
  Ch = Math.LN2;
function xh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_h(e) / Ch) | 0)) | 0;
}
var ui = 64,
  si = 4194304;
function or(e) {
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
      return e;
  }
}
function Qi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? (r = or(u)) : ((o &= l), o !== 0 && (r = or(o)));
  } else (l = n & ~i), l !== 0 ? (r = or(l)) : o !== 0 && (r = or(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Rh(e, t) {
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
      return -1;
  }
}
function Ph(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Ke(o),
      u = 1 << l,
      s = i[l];
    s === -1
      ? (!(u & n) || u & r) && (i[l] = Rh(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Fl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function df() {
  var e = ui;
  return (ui <<= 1), !(ui & 4194240) && (ui = 64), e;
}
function Bo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n);
}
function Oh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ke(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function $u(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var V = 0;
function pf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hf,
  Qu,
  mf,
  yf,
  vf,
  Ul = !1,
  ai = [],
  _t = null,
  Ct = null,
  xt = null,
  _r = new Map(),
  Cr = new Map(),
  gt = [],
  Th =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ys(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      xt = null;
      break;
    case "pointerover":
    case "pointerout":
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Cr.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Yr(t)), t !== null && Qu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Nh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (_t = Xn(_t, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ct = Xn(Ct, e, t, n, r, i)), !0;
    case "mouseover":
      return (xt = Xn(xt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return _r.set(o, Xn(_r.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Cr.set(o, Xn(Cr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function gf(e) {
  var t = qt(e.target);
  if (t !== null) {
    var n = sn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lf(n)), t !== null)) {
          (e.blockedOn = t),
            vf(e.priority, function () {
              mf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ri(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Il = r), n.target.dispatchEvent(r), (Il = null);
    } else return (t = Yr(n)), t !== null && Qu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xs(e, t, n) {
  Ri(e) && n.delete(t);
}
function Mh() {
  (Ul = !1),
    _t !== null && Ri(_t) && (_t = null),
    Ct !== null && Ri(Ct) && (Ct = null),
    xt !== null && Ri(xt) && (xt = null),
    _r.forEach(Xs),
    Cr.forEach(Xs);
}
function Gn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ul ||
      ((Ul = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, Mh)));
}
function xr(e) {
  function t(i) {
    return Gn(i, e);
  }
  if (0 < ai.length) {
    Gn(ai[0], e);
    for (var n = 1; n < ai.length; n++) {
      var r = ai[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    _t !== null && Gn(_t, e),
      Ct !== null && Gn(Ct, e),
      xt !== null && Gn(xt, e),
      _r.forEach(t),
      Cr.forEach(t),
      n = 0;
    n < gt.length;
    n++
  )
    (r = gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && ((n = gt[0]), n.blockedOn === null); )
    gf(n), n.blockedOn === null && gt.shift();
}
var Nn = pt.ReactCurrentBatchConfig,
  Bi = !0;
function zh(e, t, n, r) {
  var i = V,
    o = Nn.transition;
  Nn.transition = null;
  try {
    (V = 1), Bu(e, t, n, r);
  } finally {
    (V = i), (Nn.transition = o);
  }
}
function jh(e, t, n, r) {
  var i = V,
    o = Nn.transition;
  Nn.transition = null;
  try {
    (V = 4), Bu(e, t, n, r);
  } finally {
    (V = i), (Nn.transition = o);
  }
}
function Bu(e, t, n, r) {
  if (Bi) {
    var i = $l(e, t, n, r);
    if (i === null) Zo(e, t, r, Wi, n), Ys(e, r);
    else if (Nh(i, e, t, n, r)) r.stopPropagation();
    else if ((Ys(e, r), t & 4 && -1 < Th.indexOf(e))) {
      for (; i !== null; ) {
        var o = Yr(i);
        if (
          (o !== null && hf(o),
          (o = $l(e, t, n, r)),
          o === null && Zo(e, t, r, Wi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Zo(e, t, r, null, n);
  }
}
var Wi = null;
function $l(e, t, n, r) {
  if (((Wi = null), (e = Fu(r)), (e = qt(e)), e !== null))
    if (((t = sn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Wi = e), null;
}
function Sf(e) {
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
      switch (wh()) {
        case Uu:
          return 1;
        case cf:
          return 4;
        case $i:
        case Eh:
          return 16;
        case ff:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  Wu = null,
  Pi = null;
function wf() {
  if (Pi) return Pi;
  var e,
    t = Wu,
    n = t.length,
    r,
    i = "value" in wt ? wt.value : wt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Pi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Oi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ci() {
  return !0;
}
function Gs() {
  return !1;
}
function De(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ci
        : Gs),
      (this.isPropagationStopped = Gs),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ci));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ci));
      },
      persist: function () {},
      isPersistent: ci,
    }),
    t
  );
}
var Vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vu = De(Vn),
  Kr = Z({}, Vn, { view: 0, detail: 0 }),
  Ih = De(Kr),
  Wo,
  Vo,
  Jn,
  yo = Z({}, Kr, {
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
    getModifierState: Hu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Jn &&
            (Jn && e.type === "mousemove"
              ? ((Wo = e.screenX - Jn.screenX), (Vo = e.screenY - Jn.screenY))
              : (Vo = Wo = 0),
            (Jn = e)),
          Wo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vo;
    },
  }),
  Js = De(yo),
  Lh = Z({}, yo, { dataTransfer: 0 }),
  Dh = De(Lh),
  Ah = Z({}, Kr, { relatedTarget: 0 }),
  Ho = De(Ah),
  Fh = Z({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uh = De(Fh),
  $h = Z({}, Vn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qh = De($h),
  Bh = Z({}, Vn, { data: 0 }),
  Zs = De(Bh),
  Wh = {
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
    MozPrintableKey: "Unidentified",
  },
  Vh = {
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
    224: "Meta",
  },
  Hh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function qh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hh[e]) ? !!t[e] : !1;
}
function Hu() {
  return qh;
}
var Kh = Z({}, Kr, {
    key: function (e) {
      if (e.key) {
        var t = Wh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Vh[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hu,
    charCode: function (e) {
      return e.type === "keypress" ? Oi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Oi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Yh = De(Kh),
  Xh = Z({}, yo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bs = De(Xh),
  Gh = Z({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hu,
  }),
  Jh = De(Gh),
  Zh = Z({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bh = De(Zh),
  em = Z({}, yo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tm = De(em),
  nm = [9, 13, 27, 32],
  qu = at && "CompositionEvent" in window,
  cr = null;
at && "documentMode" in document && (cr = document.documentMode);
var rm = at && "TextEvent" in window && !cr,
  Ef = at && (!qu || (cr && 8 < cr && 11 >= cr)),
  ea = " ",
  ta = !1;
function kf(e, t) {
  switch (e) {
    case "keyup":
      return nm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _f(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var yn = !1;
function im(e, t) {
  switch (e) {
    case "compositionend":
      return _f(t);
    case "keypress":
      return t.which !== 32 ? null : ((ta = !0), ea);
    case "textInput":
      return (e = t.data), e === ea && ta ? null : e;
    default:
      return null;
  }
}
function om(e, t) {
  if (yn)
    return e === "compositionend" || (!qu && kf(e, t))
      ? ((e = wf()), (Pi = Wu = wt = null), (yn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ef && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lm = {
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
  week: !0,
};
function na(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lm[e.type] : t === "textarea";
}
function Cf(e, t, n, r) {
  ef(r),
    (t = Vi(t, "onChange")),
    0 < t.length &&
      ((n = new Vu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var fr = null,
  Rr = null;
function um(e) {
  Lf(e, 0);
}
function vo(e) {
  var t = Sn(e);
  if (Kc(t)) return e;
}
function sm(e, t) {
  if (e === "change") return t;
}
var xf = !1;
if (at) {
  var qo;
  if (at) {
    var Ko = "oninput" in document;
    if (!Ko) {
      var ra = document.createElement("div");
      ra.setAttribute("oninput", "return;"),
        (Ko = typeof ra.oninput == "function");
    }
    qo = Ko;
  } else qo = !1;
  xf = qo && (!document.documentMode || 9 < document.documentMode);
}
function ia() {
  fr && (fr.detachEvent("onpropertychange", Rf), (Rr = fr = null));
}
function Rf(e) {
  if (e.propertyName === "value" && vo(Rr)) {
    var t = [];
    Cf(t, Rr, e, Fu(e)), of(um, t);
  }
}
function am(e, t, n) {
  e === "focusin"
    ? (ia(), (fr = t), (Rr = n), fr.attachEvent("onpropertychange", Rf))
    : e === "focusout" && ia();
}
function cm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vo(Rr);
}
function fm(e, t) {
  if (e === "click") return vo(t);
}
function dm(e, t) {
  if (e === "input" || e === "change") return vo(t);
}
function pm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : pm;
function Pr(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!kl.call(t, i) || !Xe(e[i], t[i])) return !1;
  }
  return !0;
}
function oa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function la(e, t) {
  var n = oa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = oa(n);
  }
}
function Pf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Pf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Of() {
  for (var e = window, t = Ai(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ai(e.document);
  }
  return t;
}
function Ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function hm(e) {
  var t = Of(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ku(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = la(n, o));
        var l = la(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var mm = at && "documentMode" in document && 11 >= document.documentMode,
  vn = null,
  Ql = null,
  dr = null,
  Bl = !1;
function ua(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bl ||
    vn == null ||
    vn !== Ai(r) ||
    ((r = vn),
    "selectionStart" in r && Ku(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (dr && Pr(dr, r)) ||
      ((dr = r),
      (r = Vi(Ql, "onSelect")),
      0 < r.length &&
        ((t = new Vu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = vn))));
}
function fi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var gn = {
    animationend: fi("Animation", "AnimationEnd"),
    animationiteration: fi("Animation", "AnimationIteration"),
    animationstart: fi("Animation", "AnimationStart"),
    transitionend: fi("Transition", "TransitionEnd"),
  },
  Yo = {},
  Tf = {};
at &&
  ((Tf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gn.animationend.animation,
    delete gn.animationiteration.animation,
    delete gn.animationstart.animation),
  "TransitionEvent" in window || delete gn.transitionend.transition);
function go(e) {
  if (Yo[e]) return Yo[e];
  if (!gn[e]) return e;
  var t = gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tf) return (Yo[e] = t[n]);
  return e;
}
var Nf = go("animationend"),
  Mf = go("animationiteration"),
  zf = go("animationstart"),
  jf = go("transitionend"),
  If = new Map(),
  sa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function At(e, t) {
  If.set(e, t), un(t, [e]);
}
for (var Xo = 0; Xo < sa.length; Xo++) {
  var Go = sa[Xo],
    ym = Go.toLowerCase(),
    vm = Go[0].toUpperCase() + Go.slice(1);
  At(ym, "on" + vm);
}
At(Nf, "onAnimationEnd");
At(Mf, "onAnimationIteration");
At(zf, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(jf, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var lr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  gm = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function aa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), yh(r, t, void 0, e), (e.currentTarget = null);
}
function Lf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== o && i.isPropagationStopped())) break e;
          aa(i, u, f), (o = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          aa(i, u, f), (o = s);
        }
    }
  }
  if (Ui) throw ((e = Al), (Ui = !1), (Al = null), e);
}
function K(e, t) {
  var n = t[Kl];
  n === void 0 && (n = t[Kl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Df(t, e, 2, !1), n.add(r));
}
function Jo(e, t, n) {
  var r = 0;
  t && (r |= 4), Df(n, e, r, t);
}
var di = "_reactListening" + Math.random().toString(36).slice(2);
function Or(e) {
  if (!e[di]) {
    (e[di] = !0),
      Bc.forEach(function (n) {
        n !== "selectionchange" && (gm.has(n) || Jo(n, !1, e), Jo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[di] || ((t[di] = !0), Jo("selectionchange", !1, t));
  }
}
function Df(e, t, n, r) {
  switch (Sf(t)) {
    case 1:
      var i = zh;
      break;
    case 4:
      i = jh;
      break;
    default:
      i = Bu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Dl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function Zo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = qt(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  of(function () {
    var f = o,
      m = Fu(n),
      y = [];
    e: {
      var d = If.get(e);
      if (d !== void 0) {
        var v = Vu,
          g = e;
        switch (e) {
          case "keypress":
            if (Oi(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Yh;
            break;
          case "focusin":
            (g = "focus"), (v = Ho);
            break;
          case "focusout":
            (g = "blur"), (v = Ho);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ho;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Js;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Dh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Jh;
            break;
          case Nf:
          case Mf:
          case zf:
            v = Uh;
            break;
          case jf:
            v = bh;
            break;
          case "scroll":
            v = Ih;
            break;
          case "wheel":
            v = tm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Qh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = bs;
        }
        var S = (t & 4) !== 0,
          w = !S && e === "scroll",
          h = S ? (d !== null ? d + "Capture" : null) : d;
        S = [];
        for (var c = f, a; c !== null; ) {
          a = c;
          var p = a.stateNode;
          if (
            (a.tag === 5 &&
              p !== null &&
              ((a = p),
              h !== null && ((p = kr(c, h)), p != null && S.push(Tr(c, p, a)))),
            w)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((d = new v(d, g, null, n, m)), y.push({ event: d, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Il &&
            (g = n.relatedTarget || n.fromElement) &&
            (qt(g) || g[ct]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            m.window === m
              ? m
              : (d = m.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = f),
              (g = g ? qt(g) : null),
              g !== null &&
                ((w = sn(g)), g !== w || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = f)),
          v !== g)
        ) {
          if (
            ((S = Js),
            (p = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = bs),
              (p = "onPointerLeave"),
              (h = "onPointerEnter"),
              (c = "pointer")),
            (w = v == null ? d : Sn(v)),
            (a = g == null ? d : Sn(g)),
            (d = new S(p, c + "leave", v, n, m)),
            (d.target = w),
            (d.relatedTarget = a),
            (p = null),
            qt(m) === f &&
              ((S = new S(h, c + "enter", g, n, m)),
              (S.target = a),
              (S.relatedTarget = w),
              (p = S)),
            (w = p),
            v && g)
          )
            t: {
              for (S = v, h = g, c = 0, a = S; a; a = cn(a)) c++;
              for (a = 0, p = h; p; p = cn(p)) a++;
              for (; 0 < c - a; ) (S = cn(S)), c--;
              for (; 0 < a - c; ) (h = cn(h)), a--;
              for (; c--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t;
                (S = cn(S)), (h = cn(h));
              }
              S = null;
            }
          else S = null;
          v !== null && ca(y, d, v, S, !1),
            g !== null && w !== null && ca(y, w, g, S, !0);
        }
      }
      e: {
        if (
          ((d = f ? Sn(f) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === "select" || (v === "input" && d.type === "file"))
        )
          var E = sm;
        else if (na(d))
          if (xf) E = dm;
          else {
            E = cm;
            var _ = am;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = fm);
        if (E && (E = E(e, f))) {
          Cf(y, E, n, m);
          break e;
        }
        _ && _(e, d, f),
          e === "focusout" &&
            (_ = d._wrapperState) &&
            _.controlled &&
            d.type === "number" &&
            Tl(d, "number", d.value);
      }
      switch (((_ = f ? Sn(f) : window), e)) {
        case "focusin":
          (na(_) || _.contentEditable === "true") &&
            ((vn = _), (Ql = f), (dr = null));
          break;
        case "focusout":
          dr = Ql = vn = null;
          break;
        case "mousedown":
          Bl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bl = !1), ua(y, n, m);
          break;
        case "selectionchange":
          if (mm) break;
        case "keydown":
        case "keyup":
          ua(y, n, m);
      }
      var k;
      if (qu)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        yn
          ? kf(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Ef &&
          n.locale !== "ko" &&
          (yn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && yn && (k = wf())
            : ((wt = m),
              (Wu = "value" in wt ? wt.value : wt.textContent),
              (yn = !0))),
        (_ = Vi(f, C)),
        0 < _.length &&
          ((C = new Zs(C, e, null, n, m)),
          y.push({ event: C, listeners: _ }),
          k ? (C.data = k) : ((k = _f(n)), k !== null && (C.data = k)))),
        (k = rm ? im(e, n) : om(e, n)) &&
          ((f = Vi(f, "onBeforeInput")),
          0 < f.length &&
            ((m = new Zs("onBeforeInput", "beforeinput", null, n, m)),
            y.push({ event: m, listeners: f }),
            (m.data = k)));
    }
    Lf(y, t);
  });
}
function Tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = kr(e, n)),
      o != null && r.unshift(Tr(e, o, i)),
      (o = kr(e, t)),
      o != null && r.push(Tr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function cn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ca(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      i
        ? ((s = kr(n, o)), s != null && l.unshift(Tr(n, s, u)))
        : i || ((s = kr(n, o)), s != null && l.push(Tr(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Sm = /\r\n?/g,
  wm = /\u0000|\uFFFD/g;
function fa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Sm,
      `
`,
    )
    .replace(wm, "");
}
function pi(e, t, n) {
  if (((t = fa(t)), fa(e) !== t && n)) throw Error(O(425));
}
function Hi() {}
var Wl = null,
  Vl = null;
function Hl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ql = typeof setTimeout == "function" ? setTimeout : void 0,
  Em = typeof clearTimeout == "function" ? clearTimeout : void 0,
  da = typeof Promise == "function" ? Promise : void 0,
  km =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof da < "u"
        ? function (e) {
            return da.resolve(null).then(e).catch(_m);
          }
        : ql;
function _m(e) {
  setTimeout(function () {
    throw e;
  });
}
function bo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), xr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  xr(t);
}
function Rt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function pa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hn = Math.random().toString(36).slice(2),
  et = "__reactFiber$" + Hn,
  Nr = "__reactProps$" + Hn,
  ct = "__reactContainer$" + Hn,
  Kl = "__reactEvents$" + Hn,
  Cm = "__reactListeners$" + Hn,
  xm = "__reactHandles$" + Hn;
function qt(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ct] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pa(e); e !== null; ) {
          if ((n = e[et])) return n;
          e = pa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Yr(e) {
  return (
    (e = e[et] || e[ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function So(e) {
  return e[Nr] || null;
}
var Yl = [],
  wn = -1;
function Ft(e) {
  return { current: e };
}
function Y(e) {
  0 > wn || ((e.current = Yl[wn]), (Yl[wn] = null), wn--);
}
function q(e, t) {
  wn++, (Yl[wn] = e.current), (e.current = t);
}
var jt = {},
  ve = Ft(jt),
  xe = Ft(!1),
  Zt = jt;
function Ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Re(e) {
  return (e = e.childContextTypes), e != null;
}
function qi() {
  Y(xe), Y(ve);
}
function ha(e, t, n) {
  if (ve.current !== jt) throw Error(O(168));
  q(ve, t), q(xe, n);
}
function Af(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, ah(e) || "Unknown", i));
  return Z({}, n, r);
}
function Ki(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jt),
    (Zt = ve.current),
    q(ve, e),
    q(xe, xe.current),
    !0
  );
}
function ma(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Af(e, t, Zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(xe),
      Y(ve),
      q(ve, e))
    : Y(xe),
    q(xe, n);
}
var ot = null,
  wo = !1,
  el = !1;
function Ff(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
function Rm(e) {
  (wo = !0), Ff(e);
}
function Ut() {
  if (!el && ot !== null) {
    el = !0;
    var e = 0,
      t = V;
    try {
      var n = ot;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ot = null), (wo = !1);
    } catch (i) {
      throw (ot !== null && (ot = ot.slice(e + 1)), af(Uu, Ut), i);
    } finally {
      (V = t), (el = !1);
    }
  }
  return null;
}
var En = [],
  kn = 0,
  Yi = null,
  Xi = 0,
  Ae = [],
  Fe = 0,
  bt = null,
  lt = 1,
  ut = "";
function Wt(e, t) {
  (En[kn++] = Xi), (En[kn++] = Yi), (Yi = e), (Xi = t);
}
function Uf(e, t, n) {
  (Ae[Fe++] = lt), (Ae[Fe++] = ut), (Ae[Fe++] = bt), (bt = e);
  var r = lt;
  e = ut;
  var i = 32 - Ke(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ke(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (lt = (1 << (32 - Ke(t) + i)) | (n << i) | r),
      (ut = o + e);
  } else (lt = (1 << o) | (n << i) | r), (ut = e);
}
function Yu(e) {
  e.return !== null && (Wt(e, 1), Uf(e, 1, 0));
}
function Xu(e) {
  for (; e === Yi; )
    (Yi = En[--kn]), (En[kn] = null), (Xi = En[--kn]), (En[kn] = null);
  for (; e === bt; )
    (bt = Ae[--Fe]),
      (Ae[Fe] = null),
      (ut = Ae[--Fe]),
      (Ae[Fe] = null),
      (lt = Ae[--Fe]),
      (Ae[Fe] = null);
}
var ze = null,
  Ne = null,
  X = !1,
  qe = null;
function $f(e, t) {
  var n = Ue(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ya(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Ne = Rt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bt !== null ? { id: lt, overflow: ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gl(e) {
  if (X) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!ya(e, t)) {
        if (Xl(e)) throw Error(O(418));
        t = Rt(n.nextSibling);
        var r = ze;
        t && ya(e, t)
          ? $f(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (ze = e));
      }
    } else {
      if (Xl(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (ze = e);
    }
  }
}
function va(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function hi(e) {
  if (e !== ze) return !1;
  if (!X) return va(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hl(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (Xl(e)) throw (Qf(), Error(O(418)));
    for (; t; ) $f(e, t), (t = Rt(t.nextSibling));
  }
  if ((va(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = ze ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function Qf() {
  for (var e = Ne; e; ) e = Rt(e.nextSibling);
}
function Dn() {
  (Ne = ze = null), (X = !1);
}
function Gu(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var Pm = pt.ReactCurrentBatchConfig;
function Ve(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Gi = Ft(null),
  Ji = null,
  _n = null,
  Ju = null;
function Zu() {
  Ju = _n = Ji = null;
}
function bu(e) {
  var t = Gi.current;
  Y(Gi), (e._currentValue = t);
}
function Jl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Mn(e, t) {
  (Ji = e),
    (Ju = _n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function Qe(e) {
  var t = e._currentValue;
  if (Ju !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
      if (Ji === null) throw Error(O(308));
      (_n = e), (Ji.dependencies = { lanes: 0, firstContext: e });
    } else _n = _n.next = e;
  return t;
}
var Kt = null;
function es(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function Bf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), es(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ft(e, r)
  );
}
function ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function ts(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function st(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ft(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), es(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ft(e, n)
  );
}
function Ti(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $u(e, n);
  }
}
function ga(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zi(e, t, n, r) {
  var i = e.updateQueue;
  vt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), l === null ? (o = f) : (l.next = f), (l = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== l &&
        (u === null ? (m.firstBaseUpdate = f) : (u.next = f),
        (m.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var y = i.baseState;
    (l = 0), (m = f = s = null), (u = o);
    do {
      var d = u.lane,
        v = u.eventTime;
      if ((r & d) === d) {
        m !== null &&
          (m = m.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            S = u;
          switch (((d = t), (v = n), S.tag)) {
            case 1:
              if (((g = S.payload), typeof g == "function")) {
                y = g.call(v, y, d);
                break e;
              }
              y = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = S.payload),
                (d = typeof g == "function" ? g.call(v, y, d) : g),
                d == null)
              )
                break e;
              y = Z({}, y, d);
              break e;
            case 2:
              vt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [u]) : d.push(u));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((f = m = v), (s = y)) : (m = m.next = v),
          (l |= d);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (d = u),
          (u = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (s = y),
      (i.baseState = s),
      (i.firstBaseUpdate = f),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (tn |= l), (e.lanes = l), (e.memoizedState = y);
  }
}
function Sa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var Vf = new Qc.Component().refs;
function Zl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Eo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? sn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = Tt(e),
      o = st(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, i)),
      t !== null && (Ye(t, e, i, r), Ti(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = Tt(e),
      o = st(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, i)),
      t !== null && (Ye(t, e, i, r), Ti(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = Tt(e),
      i = st(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Pt(e, i, r)),
      t !== null && (Ye(t, e, r, n), Ti(t, e, r));
  },
};
function wa(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Pr(n, r) || !Pr(i, o)
        : !0
  );
}
function Hf(e, t, n) {
  var r = !1,
    i = jt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Qe(o))
      : ((i = Re(t) ? Zt : ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ln(e, i) : jt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Eo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ea(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Eo.enqueueReplaceState(t, t.state, null);
}
function bl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Vf), ts(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Qe(o))
    : ((o = Re(t) ? Zt : ve.current), (i.context = Ln(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Zl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Eo.enqueueReplaceState(i, i.state, null),
      Zi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var u = i.refs;
            u === Vf && (u = i.refs = {}),
              l === null ? delete u[o] : (u[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function mi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function ka(e) {
  var t = e._init;
  return t(e._payload);
}
function qf(e) {
  function t(h, c) {
    if (e) {
      var a = h.deletions;
      a === null ? ((h.deletions = [c]), (h.flags |= 16)) : a.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; )
      c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
    return h;
  }
  function i(h, c) {
    return (h = Nt(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, c, a) {
    return (
      (h.index = a),
      e
        ? ((a = h.alternate),
          a !== null
            ? ((a = a.index), a < c ? ((h.flags |= 2), c) : a)
            : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, c, a, p) {
    return c === null || c.tag !== 6
      ? ((c = ul(a, h.mode, p)), (c.return = h), c)
      : ((c = i(c, a)), (c.return = h), c);
  }
  function s(h, c, a, p) {
    var E = a.type;
    return E === mn
      ? m(h, c, a.props.children, p, a.key)
      : c !== null &&
          (c.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === yt &&
              ka(E) === c.type))
        ? ((p = i(c, a.props)), (p.ref = Zn(h, c, a)), (p.return = h), p)
        : ((p = Li(a.type, a.key, a.props, null, h.mode, p)),
          (p.ref = Zn(h, c, a)),
          (p.return = h),
          p);
  }
  function f(h, c, a, p) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== a.containerInfo ||
      c.stateNode.implementation !== a.implementation
      ? ((c = sl(a, h.mode, p)), (c.return = h), c)
      : ((c = i(c, a.children || [])), (c.return = h), c);
  }
  function m(h, c, a, p, E) {
    return c === null || c.tag !== 7
      ? ((c = Jt(a, h.mode, p, E)), (c.return = h), c)
      : ((c = i(c, a)), (c.return = h), c);
  }
  function y(h, c, a) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ul("" + c, h.mode, a)), (c.return = h), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ii:
          return (
            (a = Li(c.type, c.key, c.props, null, h.mode, a)),
            (a.ref = Zn(h, null, c)),
            (a.return = h),
            a
          );
        case hn:
          return (c = sl(c, h.mode, a)), (c.return = h), c;
        case yt:
          var p = c._init;
          return y(h, p(c._payload), a);
      }
      if (ir(c) || Kn(c))
        return (c = Jt(c, h.mode, a, null)), (c.return = h), c;
      mi(h, c);
    }
    return null;
  }
  function d(h, c, a, p) {
    var E = c !== null ? c.key : null;
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return E !== null ? null : u(h, c, "" + a, p);
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ii:
          return a.key === E ? s(h, c, a, p) : null;
        case hn:
          return a.key === E ? f(h, c, a, p) : null;
        case yt:
          return (E = a._init), d(h, c, E(a._payload), p);
      }
      if (ir(a) || Kn(a)) return E !== null ? null : m(h, c, a, p, null);
      mi(h, a);
    }
    return null;
  }
  function v(h, c, a, p, E) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (h = h.get(a) || null), u(c, h, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ii:
          return (h = h.get(p.key === null ? a : p.key) || null), s(c, h, p, E);
        case hn:
          return (h = h.get(p.key === null ? a : p.key) || null), f(c, h, p, E);
        case yt:
          var _ = p._init;
          return v(h, c, a, _(p._payload), E);
      }
      if (ir(p) || Kn(p)) return (h = h.get(a) || null), m(c, h, p, E, null);
      mi(c, p);
    }
    return null;
  }
  function g(h, c, a, p) {
    for (
      var E = null, _ = null, k = c, C = (c = 0), P = null;
      k !== null && C < a.length;
      C++
    ) {
      k.index > C ? ((P = k), (k = null)) : (P = k.sibling);
      var x = d(h, k, a[C], p);
      if (x === null) {
        k === null && (k = P);
        break;
      }
      e && k && x.alternate === null && t(h, k),
        (c = o(x, c, C)),
        _ === null ? (E = x) : (_.sibling = x),
        (_ = x),
        (k = P);
    }
    if (C === a.length) return n(h, k), X && Wt(h, C), E;
    if (k === null) {
      for (; C < a.length; C++)
        (k = y(h, a[C], p)),
          k !== null &&
            ((c = o(k, c, C)), _ === null ? (E = k) : (_.sibling = k), (_ = k));
      return X && Wt(h, C), E;
    }
    for (k = r(h, k); C < a.length; C++)
      (P = v(k, h, C, a[C], p)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? C : P.key),
          (c = o(P, c, C)),
          _ === null ? (E = P) : (_.sibling = P),
          (_ = P));
    return (
      e &&
        k.forEach(function (N) {
          return t(h, N);
        }),
      X && Wt(h, C),
      E
    );
  }
  function S(h, c, a, p) {
    var E = Kn(a);
    if (typeof E != "function") throw Error(O(150));
    if (((a = E.call(a)), a == null)) throw Error(O(151));
    for (
      var _ = (E = null), k = c, C = (c = 0), P = null, x = a.next();
      k !== null && !x.done;
      C++, x = a.next()
    ) {
      k.index > C ? ((P = k), (k = null)) : (P = k.sibling);
      var N = d(h, k, x.value, p);
      if (N === null) {
        k === null && (k = P);
        break;
      }
      e && k && N.alternate === null && t(h, k),
        (c = o(N, c, C)),
        _ === null ? (E = N) : (_.sibling = N),
        (_ = N),
        (k = P);
    }
    if (x.done) return n(h, k), X && Wt(h, C), E;
    if (k === null) {
      for (; !x.done; C++, x = a.next())
        (x = y(h, x.value, p)),
          x !== null &&
            ((c = o(x, c, C)), _ === null ? (E = x) : (_.sibling = x), (_ = x));
      return X && Wt(h, C), E;
    }
    for (k = r(h, k); !x.done; C++, x = a.next())
      (x = v(k, h, C, x.value, p)),
        x !== null &&
          (e && x.alternate !== null && k.delete(x.key === null ? C : x.key),
          (c = o(x, c, C)),
          _ === null ? (E = x) : (_.sibling = x),
          (_ = x));
    return (
      e &&
        k.forEach(function (z) {
          return t(h, z);
        }),
      X && Wt(h, C),
      E
    );
  }
  function w(h, c, a, p) {
    if (
      (typeof a == "object" &&
        a !== null &&
        a.type === mn &&
        a.key === null &&
        (a = a.props.children),
      typeof a == "object" && a !== null)
    ) {
      switch (a.$$typeof) {
        case ii:
          e: {
            for (var E = a.key, _ = c; _ !== null; ) {
              if (_.key === E) {
                if (((E = a.type), E === mn)) {
                  if (_.tag === 7) {
                    n(h, _.sibling),
                      (c = i(_, a.props.children)),
                      (c.return = h),
                      (h = c);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === yt &&
                    ka(E) === _.type)
                ) {
                  n(h, _.sibling),
                    (c = i(_, a.props)),
                    (c.ref = Zn(h, _, a)),
                    (c.return = h),
                    (h = c);
                  break e;
                }
                n(h, _);
                break;
              } else t(h, _);
              _ = _.sibling;
            }
            a.type === mn
              ? ((c = Jt(a.props.children, h.mode, p, a.key)),
                (c.return = h),
                (h = c))
              : ((p = Li(a.type, a.key, a.props, null, h.mode, p)),
                (p.ref = Zn(h, c, a)),
                (p.return = h),
                (h = p));
          }
          return l(h);
        case hn:
          e: {
            for (_ = a.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === a.containerInfo &&
                  c.stateNode.implementation === a.implementation
                ) {
                  n(h, c.sibling),
                    (c = i(c, a.children || [])),
                    (c.return = h),
                    (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = sl(a, h.mode, p)), (c.return = h), (h = c);
          }
          return l(h);
        case yt:
          return (_ = a._init), w(h, c, _(a._payload), p);
      }
      if (ir(a)) return g(h, c, a, p);
      if (Kn(a)) return S(h, c, a, p);
      mi(h, a);
    }
    return (typeof a == "string" && a !== "") || typeof a == "number"
      ? ((a = "" + a),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = i(c, a)), (c.return = h), (h = c))
          : (n(h, c), (c = ul(a, h.mode, p)), (c.return = h), (h = c)),
        l(h))
      : n(h, c);
  }
  return w;
}
var An = qf(!0),
  Kf = qf(!1),
  Xr = {},
  nt = Ft(Xr),
  Mr = Ft(Xr),
  zr = Ft(Xr);
function Yt(e) {
  if (e === Xr) throw Error(O(174));
  return e;
}
function ns(e, t) {
  switch ((q(zr, t), q(Mr, e), q(nt, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ml(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ml(t, e));
  }
  Y(nt), q(nt, t);
}
function Fn() {
  Y(nt), Y(Mr), Y(zr);
}
function Yf(e) {
  Yt(zr.current);
  var t = Yt(nt.current),
    n = Ml(t, e.type);
  t !== n && (q(Mr, e), q(nt, n));
}
function rs(e) {
  Mr.current === e && (Y(nt), Y(Mr));
}
var G = Ft(0);
function bi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var tl = [];
function is() {
  for (var e = 0; e < tl.length; e++)
    tl[e]._workInProgressVersionPrimary = null;
  tl.length = 0;
}
var Ni = pt.ReactCurrentDispatcher,
  nl = pt.ReactCurrentBatchConfig,
  en = 0,
  J = null,
  ie = null,
  le = null,
  eo = !1,
  pr = !1,
  jr = 0,
  Om = 0;
function pe() {
  throw Error(O(321));
}
function os(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function ls(e, t, n, r, i, o) {
  if (
    ((en = o),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ni.current = e === null || e.memoizedState === null ? zm : jm),
    (e = n(r, i)),
    pr)
  ) {
    o = 0;
    do {
      if (((pr = !1), (jr = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (le = ie = null),
        (t.updateQueue = null),
        (Ni.current = Im),
        (e = n(r, i));
    } while (pr);
  }
  if (
    ((Ni.current = to),
    (t = ie !== null && ie.next !== null),
    (en = 0),
    (le = ie = J = null),
    (eo = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function us() {
  var e = jr !== 0;
  return (jr = 0), e;
}
function be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (J.memoizedState = le = e) : (le = le.next = e), le;
}
function Be() {
  if (ie === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = le === null ? J.memoizedState : le.next;
  if (t !== null) (le = t), (ie = e);
  else {
    if (e === null) throw Error(O(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      le === null ? (J.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function rl(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var u = (l = null),
      s = null,
      f = o;
    do {
      var m = f.lane;
      if ((en & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var y = {
          lane: m,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((u = s = y), (l = r)) : (s = s.next = y),
          (J.lanes |= m),
          (tn |= m);
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? (l = r) : (s.next = u),
      Xe(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (J.lanes |= o), (tn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function il(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Xe(o, t.memoizedState) || (Ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Xf() {}
function Gf(e, t) {
  var n = J,
    r = Be(),
    i = t(),
    o = !Xe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    ss(bf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Lr(9, Zf.bind(null, n, r, i, t), void 0, null),
      ue === null)
    )
      throw Error(O(349));
    en & 30 || Jf(n, t, i);
  }
  return i;
}
function Jf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ed(t) && td(e);
}
function bf(e, t, n) {
  return n(function () {
    ed(t) && td(e);
  });
}
function ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function td(e) {
  var t = ft(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function _a(e) {
  var t = be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Mm.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function Lr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nd() {
  return Be().memoizedState;
}
function Mi(e, t, n, r) {
  var i = be();
  (J.flags |= e),
    (i.memoizedState = Lr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ko(e, t, n, r) {
  var i = Be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var l = ie.memoizedState;
    if (((o = l.destroy), r !== null && os(r, l.deps))) {
      i.memoizedState = Lr(t, n, o, r);
      return;
    }
  }
  (J.flags |= e), (i.memoizedState = Lr(1 | t, n, o, r));
}
function Ca(e, t) {
  return Mi(8390656, 8, e, t);
}
function ss(e, t) {
  return ko(2048, 8, e, t);
}
function rd(e, t) {
  return ko(4, 2, e, t);
}
function id(e, t) {
  return ko(4, 4, e, t);
}
function od(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ld(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ko(4, 4, od.bind(null, t, e), n)
  );
}
function as() {}
function ud(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && os(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function sd(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && os(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ad(e, t, n) {
  return en & 21
    ? (Xe(n, t) || ((n = df()), (J.lanes |= n), (tn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function Tm(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = nl.transition;
  nl.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (nl.transition = r);
  }
}
function cd() {
  return Be().memoizedState;
}
function Nm(e, t, n) {
  var r = Tt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fd(e))
  )
    dd(t, n);
  else if (((n = Bf(e, t, n, r)), n !== null)) {
    var i = Se();
    Ye(n, e, r, i), pd(n, t, r);
  }
}
function Mm(e, t, n) {
  var r = Tt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fd(e)) dd(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = u), Xe(u, l))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), es(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bf(e, t, i, r)),
      n !== null && ((i = Se()), Ye(n, e, r, i), pd(n, t, r));
  }
}
function fd(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function dd(e, t) {
  pr = eo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $u(e, n);
  }
}
var to = {
    readContext: Qe,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  zm = {
    readContext: Qe,
    useCallback: function (e, t) {
      return (be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qe,
    useEffect: Ca,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mi(4194308, 4, od.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Nm.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: _a,
    useDebugValue: as,
    useDeferredValue: function (e) {
      return (be().memoizedState = e);
    },
    useTransition: function () {
      var e = _a(!1),
        t = e[0];
      return (e = Tm.bind(null, e[1])), (be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        i = be();
      if (X) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(O(349));
        en & 30 || Jf(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Ca(bf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Lr(9, Zf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = be(),
        t = ue.identifierPrefix;
      if (X) {
        var n = ut,
          r = lt;
        (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = jr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Om++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jm = {
    readContext: Qe,
    useCallback: ud,
    useContext: Qe,
    useEffect: ss,
    useImperativeHandle: ld,
    useInsertionEffect: rd,
    useLayoutEffect: id,
    useMemo: sd,
    useReducer: rl,
    useRef: nd,
    useState: function () {
      return rl(Ir);
    },
    useDebugValue: as,
    useDeferredValue: function (e) {
      var t = Be();
      return ad(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = rl(Ir)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Xf,
    useSyncExternalStore: Gf,
    useId: cd,
    unstable_isNewReconciler: !1,
  },
  Im = {
    readContext: Qe,
    useCallback: ud,
    useContext: Qe,
    useEffect: ss,
    useImperativeHandle: ld,
    useInsertionEffect: rd,
    useLayoutEffect: id,
    useMemo: sd,
    useReducer: il,
    useRef: nd,
    useState: function () {
      return il(Ir);
    },
    useDebugValue: as,
    useDeferredValue: function (e) {
      var t = Be();
      return ie === null ? (t.memoizedState = e) : ad(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = il(Ir)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Xf,
    useSyncExternalStore: Gf,
    useId: cd,
    unstable_isNewReconciler: !1,
  };
function Un(e, t) {
  try {
    var n = "",
      r = t;
    do (n += sh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function eu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Lm = typeof WeakMap == "function" ? WeakMap : Map;
function hd(e, t, n) {
  (n = st(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ro || ((ro = !0), (cu = r)), eu(e, t);
    }),
    n
  );
}
function md(e, t, n) {
  (n = st(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        eu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        eu(e, t),
          typeof r != "function" &&
            (Ot === null ? (Ot = new Set([this])) : Ot.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function xa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lm();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Xm.bind(null, e, t, n)), t.then(e, e));
}
function Ra(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pa(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = st(-1, 1)), (t.tag = 2), Pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Dm = pt.ReactCurrentOwner,
  Ce = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Kf(t, null, n, r) : An(t, e.child, n, r);
}
function Oa(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Mn(t, i),
    (r = ls(e, t, n, r, o, i)),
    (n = us()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dt(e, t, i))
      : (X && n && Yu(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function Ta(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !vs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), yd(e, t, o, r, i))
      : ((e = Li(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Pr), n(l, r) && e.ref === t.ref)
    )
      return dt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Nt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), dt(e, t, i);
  }
  return tu(e, t, n, r, i);
}
function vd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(xn, Te),
        (Te |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(xn, Te),
          (Te |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        q(xn, Te),
        (Te |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(xn, Te),
      (Te |= r);
  return ge(e, t, i, n), t.child;
}
function gd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function tu(e, t, n, r, i) {
  var o = Re(n) ? Zt : ve.current;
  return (
    (o = Ln(t, o)),
    Mn(t, i),
    (n = ls(e, t, n, r, o, i)),
    (r = us()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dt(e, t, i))
      : (X && r && Yu(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function Na(e, t, n, r, i) {
  if (Re(n)) {
    var o = !0;
    Ki(t);
  } else o = !1;
  if ((Mn(t, i), t.stateNode === null))
    zi(e, t), Hf(t, n, r), bl(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Qe(f))
      : ((f = Re(n) ? Zt : ve.current), (f = Ln(t, f)));
    var m = n.getDerivedStateFromProps,
      y =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    y ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== r || s !== f) && Ea(t, l, r, f)),
      (vt = !1);
    var d = t.memoizedState;
    (l.state = d),
      Zi(t, r, l, i),
      (s = t.memoizedState),
      u !== r || d !== s || xe.current || vt
        ? (typeof m == "function" && (Zl(t, n, m, r), (s = t.memoizedState)),
          (u = vt || wa(t, n, u, r, d, s, f))
            ? (y ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = f),
          (r = u))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Wf(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Ve(t.type, u)),
      (l.props = f),
      (y = t.pendingProps),
      (d = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Qe(s))
        : ((s = Re(n) ? Zt : ve.current), (s = Ln(t, s)));
    var v = n.getDerivedStateFromProps;
    (m =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== y || d !== s) && Ea(t, l, r, s)),
      (vt = !1),
      (d = t.memoizedState),
      (l.state = d),
      Zi(t, r, l, i);
    var g = t.memoizedState;
    u !== y || d !== g || xe.current || vt
      ? (typeof v == "function" && (Zl(t, n, v, r), (g = t.memoizedState)),
        (f = vt || wa(t, n, f, r, d, g, s) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, g, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, g, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = s),
        (r = f))
      : (typeof l.componentDidUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return nu(e, t, n, r, o, i);
}
function nu(e, t, n, r, i, o) {
  gd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && ma(t, n, !1), dt(e, t, o);
  (r = t.stateNode), (Dm.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = An(t, e.child, null, o)), (t.child = An(t, null, u, o)))
      : ge(e, t, u, o),
    (t.memoizedState = r.state),
    i && ma(t, n, !0),
    t.child
  );
}
function Sd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ha(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ha(e, t.context, !1),
    ns(e, t.containerInfo);
}
function Ma(e, t, n, r, i) {
  return Dn(), Gu(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var ru = { dehydrated: null, treeContext: null, retryLane: 0 };
function iu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wd(e, t, n) {
  var r = t.pendingProps,
    i = G.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    q(G, i & 1),
    e === null)
  )
    return (
      Gl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = xo(l, r, 0, null)),
              (e = Jt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = iu(n)),
              (t.memoizedState = ru),
              e)
            : cs(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
    return Am(e, t, l, r, u, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (u = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Nt(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (o = Nt(u, o)) : ((o = Jt(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? iu(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ru),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Nt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function cs(e, t) {
  return (
    (t = xo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yi(e, t, n, r) {
  return (
    r !== null && Gu(r),
    An(t, e.child, null, n),
    (e = cs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Am(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ol(Error(O(422)))), yi(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = xo({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Jt(o, i, l, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && An(t, e.child, null, l),
          (t.child.memoizedState = iu(l)),
          (t.memoizedState = ru),
          o);
  if (!(t.mode & 1)) return yi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(O(419))), (r = ol(o, r, void 0)), yi(e, t, l, r);
  }
  if (((u = (l & e.childLanes) !== 0), Ce || u)) {
    if (((r = ue), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), ft(e, i), Ye(r, e, i, -1));
    }
    return ys(), (r = ol(Error(O(421)))), yi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Gm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ne = Rt(i.nextSibling)),
      (ze = t),
      (X = !0),
      (qe = null),
      e !== null &&
        ((Ae[Fe++] = lt),
        (Ae[Fe++] = ut),
        (Ae[Fe++] = bt),
        (lt = e.id),
        (ut = e.overflow),
        (bt = t)),
      (t = cs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function za(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Jl(e.return, t, n);
}
function ll(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Ed(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && za(e, n, t);
        else if (e.tag === 19) za(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && bi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ll(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && bi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ll(t, !0, n, null, o);
        break;
      case "together":
        ll(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Nt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Fm(e, t, n) {
  switch (t.tag) {
    case 3:
      Sd(t), Dn();
      break;
    case 5:
      Yf(t);
      break;
    case 1:
      Re(t.type) && Ki(t);
      break;
    case 4:
      ns(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      q(Gi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? wd(e, t, n)
            : (q(G, G.current & 1),
              (e = dt(e, t, n)),
              e !== null ? e.sibling : null);
      q(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ed(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        q(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vd(e, t, n);
  }
  return dt(e, t, n);
}
var kd, ou, _d, Cd;
kd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ou = function () {};
_d = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Yt(nt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Pl(e, i)), (r = Pl(e, r)), (o = []);
        break;
      case "select":
        (i = Z({}, i, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Nl(e, i)), (r = Nl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hi);
    }
    zl(n, r);
    var l;
    n = null;
    for (f in i)
      if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null)
        if (f === "style") {
          var u = i[f];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (wr.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((u = i != null ? i[f] : void 0),
        r.hasOwnProperty(f) && s !== u && (s != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                u[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (o || (o = []), o.push(f, n)), (n = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(f, s))
            : f === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (o = o || []).push(f, "" + s)
              : f !== "suppressContentEditableWarning" &&
                f !== "suppressHydrationWarning" &&
                (wr.hasOwnProperty(f)
                  ? (s != null && f === "onScroll" && K("scroll", e),
                    o || u === s || (o = []))
                  : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Cd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function bn(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Um(e, t, n) {
  var r = t.pendingProps;
  switch ((Xu(t), t.tag)) {
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
      return he(t), null;
    case 1:
      return Re(t.type) && qi(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Fn(),
        Y(xe),
        Y(ve),
        is(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (pu(qe), (qe = null)))),
        ou(e, t),
        he(t),
        null
      );
    case 5:
      rs(t);
      var i = Yt(zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        _d(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return he(t), null;
        }
        if (((e = Yt(nt.current)), hi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[et] = t), (r[Nr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < lr.length; i++) K(lr[i], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K("error", r), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Qs(r, o), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              Ws(r, o), K("invalid", r);
          }
          zl(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var u = o[l];
              l === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, u, e),
                    (i = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, u, e),
                    (i = ["children", "" + u]))
                : wr.hasOwnProperty(l) &&
                  u != null &&
                  l === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              oi(r), Bs(r, o, !0);
              break;
            case "textarea":
              oi(r), Vs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[et] = t),
            (e[Nr] = r),
            kd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = jl(n, r)), n)) {
              case "dialog":
                K("cancel", e), K("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < lr.length; i++) K(lr[i], e);
                i = r;
                break;
              case "source":
                K("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                K("error", e), K("load", e), (i = r);
                break;
              case "details":
                K("toggle", e), (i = r);
                break;
              case "input":
                Qs(e, r), (i = Pl(e, r)), K("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Z({}, r, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                Ws(e, r), (i = Nl(e, r)), K("invalid", e);
                break;
              default:
                i = r;
            }
            zl(n, i), (u = i);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? bc(e, s)
                  : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Jc(e, s))
                    : o === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && Er(e, s)
                        : typeof s == "number" && Er(e, "" + s)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (wr.hasOwnProperty(o)
                          ? s != null && o === "onScroll" && K("scroll", e)
                          : s != null && Iu(e, o, s, l));
              }
            switch (n) {
              case "input":
                oi(e), Bs(e, r, !1);
                break;
              case "textarea":
                oi(e), Vs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Pn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Pn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Hi);
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
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) Cd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = Yt(zr.current)), Yt(nt.current), hi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (o = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                pi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (Y(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && Ne !== null && t.mode & 1 && !(t.flags & 128))
          Qf(), Dn(), (t.flags |= 98560), (o = !1);
        else if (((o = hi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[et] = t;
          } else
            Dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (o = !1);
        } else qe !== null && (pu(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? oe === 0 && (oe = 3) : ys())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Fn(), ou(e, t), e === null && Or(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return bu(t.type._context), he(t), null;
    case 17:
      return Re(t.type) && qi(), he(t), null;
    case 19:
      if ((Y(G), (o = t.memoizedState), o === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) bn(o, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = bi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    bn(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > $n &&
            ((t.flags |= 128), (r = !0), bn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              bn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !X)
            )
              return he(t), null;
          } else
            2 * ee() - o.renderingStartTime > $n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), bn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = G.current),
          q(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        ms(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Te & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function $m(e, t) {
  switch ((Xu(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && qi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fn(),
        Y(xe),
        Y(ve),
        is(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return rs(t), null;
    case 13:
      if ((Y(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(O(340));
        Dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(G), null;
    case 4:
      return Fn(), null;
    case 10:
      return bu(t.type._context), null;
    case 22:
    case 23:
      return ms(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vi = !1,
  me = !1,
  Qm = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Cn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function lu(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var ja = !1;
function Bm(e, t) {
  if (((Wl = Bi), (e = Of()), Ku(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            u = -1,
            s = -1,
            f = 0,
            m = 0,
            y = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              y !== n || (i !== 0 && y.nodeType !== 3) || (u = l + i),
                y !== o || (r !== 0 && y.nodeType !== 3) || (s = l + r),
                y.nodeType === 3 && (l += y.nodeValue.length),
                (v = y.firstChild) !== null;

            )
              (d = y), (y = v);
            for (;;) {
              if (y === e) break t;
              if (
                (d === n && ++f === i && (u = l),
                d === o && ++m === r && (s = l),
                (v = y.nextSibling) !== null)
              )
                break;
              (y = d), (d = y.parentNode);
            }
            y = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vl = { focusedElem: e, selectionRange: n }, Bi = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var S = g.memoizedProps,
                    w = g.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Ve(t.type, S),
                      w,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var a = t.stateNode.containerInfo;
                a.nodeType === 1
                  ? (a.textContent = "")
                  : a.nodeType === 9 &&
                    a.documentElement &&
                    a.removeChild(a.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (p) {
          b(t, t.return, p);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (g = ja), (ja = !1), g;
}
function hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && lu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function _o(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function xd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[Nr], delete t[Kl], delete t[Cm], delete t[xm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ia(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (su(e, t, n), e = e.sibling; e !== null; ) su(e, t, n), (e = e.sibling);
}
function au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (au(e, t, n), e = e.sibling; e !== null; ) au(e, t, n), (e = e.sibling);
}
var ae = null,
  He = !1;
function ht(e, t, n) {
  for (n = n.child; n !== null; ) Pd(e, t, n), (n = n.sibling);
}
function Pd(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
    try {
      tt.onCommitFiberUnmount(mo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Cn(n, t);
    case 6:
      var r = ae,
        i = He;
      (ae = null),
        ht(e, t, n),
        (ae = r),
        (He = i),
        ae !== null &&
          (He
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (He
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? bo(e.parentNode, n)
              : e.nodeType === 1 && bo(e, n),
            xr(e))
          : bo(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = He),
        (ae = n.stateNode.containerInfo),
        (He = !0),
        ht(e, t, n),
        (ae = r),
        (He = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && lu(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      ht(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Cn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          b(n, t, u);
        }
      ht(e, t, n);
      break;
    case 21:
      ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), ht(e, t, n), (me = r))
        : ht(e, t, n);
      break;
    default:
      ht(e, t, n);
  }
}
function La(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qm()),
      t.forEach(function (r) {
        var i = Jm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ae = u.stateNode), (He = !1);
              break e;
            case 3:
              (ae = u.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (ae = u.stateNode.containerInfo), (He = !0);
              break e;
          }
          u = u.return;
        }
        if (ae === null) throw Error(O(160));
        Pd(o, l, i), (ae = null), (He = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (f) {
        b(i, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Od(t, e), (t = t.sibling);
}
function Od(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), Ze(e), r & 4)) {
        try {
          hr(3, e, e.return), _o(3, e);
        } catch (S) {
          b(e, e.return, S);
        }
        try {
          hr(5, e, e.return);
        } catch (S) {
          b(e, e.return, S);
        }
      }
      break;
    case 1:
      We(t, e), Ze(e), r & 512 && n !== null && Cn(n, n.return);
      break;
    case 5:
      if (
        (We(t, e),
        Ze(e),
        r & 512 && n !== null && Cn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Er(i, "");
        } catch (S) {
          b(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Yc(i, o),
              jl(u, l);
            var f = jl(u, o);
            for (l = 0; l < s.length; l += 2) {
              var m = s[l],
                y = s[l + 1];
              m === "style"
                ? bc(i, y)
                : m === "dangerouslySetInnerHTML"
                  ? Jc(i, y)
                  : m === "children"
                    ? Er(i, y)
                    : Iu(i, m, y, f);
            }
            switch (u) {
              case "input":
                Ol(i, o);
                break;
              case "textarea":
                Xc(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Pn(i, !!o.multiple, v, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Pn(i, !!o.multiple, o.defaultValue, !0)
                      : Pn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Nr] = o;
          } catch (S) {
            b(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((We(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (S) {
          b(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (We(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          xr(t.containerInfo);
        } catch (S) {
          b(e, e.return, S);
        }
      break;
    case 4:
      We(t, e), Ze(e);
      break;
    case 13:
      We(t, e),
        Ze(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ps = ee())),
        r & 4 && La(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (f = me) || m), We(t, e), (me = f)) : We(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !m && e.mode & 1)
        )
          for (j = e, m = e.child; m !== null; ) {
            for (y = j = m; j !== null; ) {
              switch (((d = j), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hr(4, d, d.return);
                  break;
                case 1:
                  Cn(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (S) {
                      b(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Cn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Aa(y);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (j = v)) : Aa(y);
            }
            m = m.sibling;
          }
        e: for (m = null, y = e; ; ) {
          if (y.tag === 5) {
            if (m === null) {
              m = y;
              try {
                (i = y.stateNode),
                  f
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = y.stateNode),
                      (s = y.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Zc("display", l)));
              } catch (S) {
                b(e, e.return, S);
              }
            }
          } else if (y.tag === 6) {
            if (m === null)
              try {
                y.stateNode.nodeValue = f ? "" : y.memoizedProps;
              } catch (S) {
                b(e, e.return, S);
              }
          } else if (
            ((y.tag !== 22 && y.tag !== 23) ||
              y.memoizedState === null ||
              y === e) &&
            y.child !== null
          ) {
            (y.child.return = y), (y = y.child);
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            m === y && (m = null), (y = y.return);
          }
          m === y && (m = null), (y.sibling.return = y.return), (y = y.sibling);
        }
      }
      break;
    case 19:
      We(t, e), Ze(e), r & 4 && La(e);
      break;
    case 21:
      break;
    default:
      We(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Er(i, ""), (r.flags &= -33));
          var o = Ia(e);
          au(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = Ia(e);
          su(e, u, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (s) {
      b(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wm(e, t, n) {
  (j = e), Td(e);
}
function Td(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || vi;
      if (!l) {
        var u = i.alternate,
          s = (u !== null && u.memoizedState !== null) || me;
        u = vi;
        var f = me;
        if (((vi = l), (me = s) && !f))
          for (j = i; j !== null; )
            (l = j),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Fa(i)
                : s !== null
                  ? ((s.return = l), (j = s))
                  : Fa(i);
        for (; o !== null; ) (j = o), Td(o), (o = o.sibling);
        (j = i), (vi = u), (me = f);
      }
      Da(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (j = o)) : Da(e);
  }
}
function Da(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || _o(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Sa(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sa(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var f = t.alternate;
                if (f !== null) {
                  var m = f.memoizedState;
                  if (m !== null) {
                    var y = m.dehydrated;
                    y !== null && xr(y);
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
              throw Error(O(163));
          }
        me || (t.flags & 512 && uu(t));
      } catch (d) {
        b(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Aa(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Fa(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _o(4, t);
          } catch (s) {
            b(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              b(t, i, s);
            }
          }
          var o = t.return;
          try {
            uu(t);
          } catch (s) {
            b(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            uu(t);
          } catch (s) {
            b(t, l, s);
          }
      }
    } catch (s) {
      b(t, t.return, s);
    }
    if (t === e) {
      j = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (j = u);
      break;
    }
    j = t.return;
  }
}
var Vm = Math.ceil,
  no = pt.ReactCurrentDispatcher,
  fs = pt.ReactCurrentOwner,
  $e = pt.ReactCurrentBatchConfig,
  B = 0,
  ue = null,
  te = null,
  fe = 0,
  Te = 0,
  xn = Ft(0),
  oe = 0,
  Dr = null,
  tn = 0,
  Co = 0,
  ds = 0,
  mr = null,
  _e = null,
  ps = 0,
  $n = 1 / 0,
  it = null,
  ro = !1,
  cu = null,
  Ot = null,
  gi = !1,
  Et = null,
  io = 0,
  yr = 0,
  fu = null,
  ji = -1,
  Ii = 0;
function Se() {
  return B & 6 ? ee() : ji !== -1 ? ji : (ji = ee());
}
function Tt(e) {
  return e.mode & 1
    ? B & 2 && fe !== 0
      ? fe & -fe
      : Pm.transition !== null
        ? (Ii === 0 && (Ii = df()), Ii)
        : ((e = V),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sf(e.type))),
          e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < yr) throw ((yr = 0), (fu = null), Error(O(185)));
  qr(e, n, r),
    (!(B & 2) || e !== ue) &&
      (e === ue && (!(B & 2) && (Co |= n), oe === 4 && St(e, fe)),
      Pe(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && (($n = ee() + 500), wo && Ut()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Ph(e, t);
  var r = Qi(e, e === ue ? fe : 0);
  if (r === 0)
    n !== null && Ks(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ks(n), t === 1))
      e.tag === 0 ? Rm(Ua.bind(null, e)) : Ff(Ua.bind(null, e)),
        km(function () {
          !(B & 6) && Ut();
        }),
        (n = null);
    else {
      switch (pf(r)) {
        case 1:
          n = Uu;
          break;
        case 4:
          n = cf;
          break;
        case 16:
          n = $i;
          break;
        case 536870912:
          n = ff;
          break;
        default:
          n = $i;
      }
      n = Ad(n, Nd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nd(e, t) {
  if (((ji = -1), (Ii = 0), B & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n) return null;
  var r = Qi(e, e === ue ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = oo(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var o = zd();
    (ue !== e || fe !== t) && ((it = null), ($n = ee() + 500), Gt(e, t));
    do
      try {
        Km();
        break;
      } catch (u) {
        Md(e, u);
      }
    while (!0);
    Zu(),
      (no.current = o),
      (B = i),
      te !== null ? (t = 0) : ((ue = null), (fe = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Fl(e)), i !== 0 && ((r = i), (t = du(e, i)))), t === 1)
    )
      throw ((n = Dr), Gt(e, 0), St(e, r), Pe(e, ee()), n);
    if (t === 6) St(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Hm(i) &&
          ((t = oo(e, r)),
          t === 2 && ((o = Fl(e)), o !== 0 && ((r = o), (t = du(e, o)))),
          t === 1))
      )
        throw ((n = Dr), Gt(e, 0), St(e, r), Pe(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Vt(e, _e, it);
          break;
        case 3:
          if (
            (St(e, r), (r & 130023424) === r && ((t = ps + 500 - ee()), 10 < t))
          ) {
            if (Qi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ql(Vt.bind(null, e, _e, it), t);
            break;
          }
          Vt(e, _e, it);
          break;
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ke(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Vm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ql(Vt.bind(null, e, _e, it), r);
            break;
          }
          Vt(e, _e, it);
          break;
        case 5:
          Vt(e, _e, it);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Pe(e, ee()), e.callbackNode === n ? Nd.bind(null, e) : null;
}
function du(e, t) {
  var n = mr;
  return (
    e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256),
    (e = oo(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && pu(t)),
    e
  );
}
function pu(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function Hm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Xe(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function St(e, t) {
  for (
    t &= ~ds,
      t &= ~Co,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ua(e) {
  if (B & 6) throw Error(O(327));
  zn();
  var t = Qi(e, 0);
  if (!(t & 1)) return Pe(e, ee()), null;
  var n = oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fl(e);
    r !== 0 && ((t = r), (n = du(e, r)));
  }
  if (n === 1) throw ((n = Dr), Gt(e, 0), St(e, t), Pe(e, ee()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vt(e, _e, it),
    Pe(e, ee()),
    null
  );
}
function hs(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && (($n = ee() + 500), wo && Ut());
  }
}
function nn(e) {
  Et !== null && Et.tag === 0 && !(B & 6) && zn();
  var t = B;
  B |= 1;
  var n = $e.transition,
    r = V;
  try {
    if ((($e.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), ($e.transition = n), (B = t), !(B & 6) && Ut();
  }
}
function ms() {
  (Te = xn.current), Y(xn);
}
function Gt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Em(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Xu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qi();
          break;
        case 3:
          Fn(), Y(xe), Y(ve), is();
          break;
        case 5:
          rs(r);
          break;
        case 4:
          Fn();
          break;
        case 13:
          Y(G);
          break;
        case 19:
          Y(G);
          break;
        case 10:
          bu(r.type._context);
          break;
        case 22:
        case 23:
          ms();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (te = e = Nt(e.current, null)),
    (fe = Te = t),
    (oe = 0),
    (Dr = null),
    (ds = Co = tn = 0),
    (_e = mr = null),
    Kt !== null)
  ) {
    for (t = 0; t < Kt.length; t++)
      if (((n = Kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Kt = null;
  }
  return e;
}
function Md(e, t) {
  do {
    var n = te;
    try {
      if ((Zu(), (Ni.current = to), eo)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        eo = !1;
      }
      if (
        ((en = 0),
        (le = ie = J = null),
        (pr = !1),
        (jr = 0),
        (fs.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (Dr = t), (te = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          u = n,
          s = t;
        if (
          ((t = fe),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            m = u,
            y = m.tag;
          if (!(m.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var d = m.alternate;
            d
              ? ((m.updateQueue = d.updateQueue),
                (m.memoizedState = d.memoizedState),
                (m.lanes = d.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var v = Ra(l);
          if (v !== null) {
            (v.flags &= -257),
              Pa(v, l, u, o, t),
              v.mode & 1 && xa(o, f, t),
              (t = v),
              (s = f);
            var g = t.updateQueue;
            if (g === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              xa(o, f, t), ys();
              break e;
            }
            s = Error(O(426));
          }
        } else if (X && u.mode & 1) {
          var w = Ra(l);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Pa(w, l, u, o, t),
              Gu(Un(s, u));
            break e;
          }
        }
        (o = s = Un(s, u)),
          oe !== 4 && (oe = 2),
          mr === null ? (mr = [o]) : mr.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = hd(o, s, t);
              ga(o, h);
              break e;
            case 1:
              u = s;
              var c = o.type,
                a = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (a !== null &&
                    typeof a.componentDidCatch == "function" &&
                    (Ot === null || !Ot.has(a))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var p = md(o, u, t);
                ga(o, p);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Id(n);
    } catch (E) {
      (t = E), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zd() {
  var e = no.current;
  return (no.current = to), e === null ? to : e;
}
function ys() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ue === null || (!(tn & 268435455) && !(Co & 268435455)) || St(ue, fe);
}
function oo(e, t) {
  var n = B;
  B |= 2;
  var r = zd();
  (ue !== e || fe !== t) && ((it = null), Gt(e, t));
  do
    try {
      qm();
      break;
    } catch (i) {
      Md(e, i);
    }
  while (!0);
  if ((Zu(), (B = n), (no.current = r), te !== null)) throw Error(O(261));
  return (ue = null), (fe = 0), oe;
}
function qm() {
  for (; te !== null; ) jd(te);
}
function Km() {
  for (; te !== null && !gh(); ) jd(te);
}
function jd(e) {
  var t = Dd(e.alternate, e, Te);
  (e.memoizedProps = e.pendingProps),
    t === null ? Id(e) : (te = t),
    (fs.current = null);
}
function Id(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $m(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (te = null);
        return;
      }
    } else if (((n = Um(n, t, Te)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Vt(e, t, n) {
  var r = V,
    i = $e.transition;
  try {
    ($e.transition = null), (V = 1), Ym(e, t, n, r);
  } finally {
    ($e.transition = i), (V = r);
  }
  return null;
}
function Ym(e, t, n, r) {
  do zn();
  while (Et !== null);
  if (B & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Oh(e, o),
    e === ue && ((te = ue = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gi ||
      ((gi = !0),
      Ad($i, function () {
        return zn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = $e.transition), ($e.transition = null);
    var l = V;
    V = 1;
    var u = B;
    (B |= 4),
      (fs.current = null),
      Bm(e, n),
      Od(n, e),
      hm(Vl),
      (Bi = !!Wl),
      (Vl = Wl = null),
      (e.current = n),
      Wm(n),
      Sh(),
      (B = u),
      (V = l),
      ($e.transition = o);
  } else e.current = n;
  if (
    (gi && ((gi = !1), (Et = e), (io = i)),
    (o = e.pendingLanes),
    o === 0 && (Ot = null),
    kh(n.stateNode),
    Pe(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ro) throw ((ro = !1), (e = cu), (cu = null), e);
  return (
    io & 1 && e.tag !== 0 && zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === fu ? yr++ : ((yr = 0), (fu = e))) : (yr = 0),
    Ut(),
    null
  );
}
function zn() {
  if (Et !== null) {
    var e = pf(io),
      t = $e.transition,
      n = V;
    try {
      if ((($e.transition = null), (V = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (io = 0), B & 6)) throw Error(O(331));
        var i = B;
        for (B |= 4, j = e.current; j !== null; ) {
          var o = j,
            l = o.child;
          if (j.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (j = f; j !== null; ) {
                  var m = j;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(8, m, o);
                  }
                  var y = m.child;
                  if (y !== null) (y.return = m), (j = y);
                  else
                    for (; j !== null; ) {
                      m = j;
                      var d = m.sibling,
                        v = m.return;
                      if ((xd(m), m === f)) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (j = d);
                        break;
                      }
                      j = v;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var w = S.sibling;
                    (S.sibling = null), (S = w);
                  } while (S !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (j = l);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hr(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (j = h);
                break e;
              }
              j = o.return;
            }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          l = j;
          var a = l.child;
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (j = a);
          else
            e: for (l = c; j !== null; ) {
              if (((u = j), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(9, u);
                  }
                } catch (E) {
                  b(u, u.return, E);
                }
              if (u === l) {
                j = null;
                break e;
              }
              var p = u.sibling;
              if (p !== null) {
                (p.return = u.return), (j = p);
                break e;
              }
              j = u.return;
            }
        }
        if (
          ((B = i), Ut(), tt && typeof tt.onPostCommitFiberRoot == "function")
        )
          try {
            tt.onPostCommitFiberRoot(mo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), ($e.transition = t);
    }
  }
  return !1;
}
function $a(e, t, n) {
  (t = Un(n, t)),
    (t = hd(e, t, 1)),
    (e = Pt(e, t, 1)),
    (t = Se()),
    e !== null && (qr(e, 1, t), Pe(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) $a(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $a(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ot === null || !Ot.has(r)))
        ) {
          (e = Un(n, e)),
            (e = md(t, e, 1)),
            (t = Pt(t, e, 1)),
            (e = Se()),
            t !== null && (qr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Xm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (fe & n) === n &&
      (oe === 4 || (oe === 3 && (fe & 130023424) === fe && 500 > ee() - ps)
        ? Gt(e, 0)
        : (ds |= n)),
    Pe(e, t);
}
function Ld(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = si), (si <<= 1), !(si & 130023424) && (si = 4194304))
      : (t = 1));
  var n = Se();
  (e = ft(e, t)), e !== null && (qr(e, t, n), Pe(e, n));
}
function Gm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ld(e, n);
}
function Jm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Ld(e, n);
}
var Dd;
Dd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), Fm(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), X && t.flags & 1048576 && Uf(t, Xi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zi(e, t), (e = t.pendingProps);
      var i = Ln(t, ve.current);
      Mn(t, n), (i = ls(null, t, r, e, i, n));
      var o = us();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((o = !0), Ki(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ts(t),
            (i.updater = Eo),
            (t.stateNode = i),
            (i._reactInternals = t),
            bl(t, r, e, n),
            (t = nu(null, t, r, !0, o, n)))
          : ((t.tag = 0), X && o && Yu(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = bm(r)),
          (e = Ve(r, e)),
          i)
        ) {
          case 0:
            t = tu(null, t, r, e, n);
            break e;
          case 1:
            t = Na(null, t, r, e, n);
            break e;
          case 11:
            t = Oa(null, t, r, e, n);
            break e;
          case 14:
            t = Ta(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        tu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        Na(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Sd(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Wf(e, t),
          Zi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Un(Error(O(423)), t)), (t = Ma(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Un(Error(O(424)), t)), (t = Ma(e, t, r, n, i));
            break e;
          } else
            for (
              Ne = Rt(t.stateNode.containerInfo.firstChild),
                ze = t,
                X = !0,
                qe = null,
                n = Kf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Dn(), r === i)) {
            t = dt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yf(t),
        e === null && Gl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Hl(r, i) ? (l = null) : o !== null && Hl(r, o) && (t.flags |= 32),
        gd(e, t),
        ge(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Gl(t), null;
    case 13:
      return wd(e, t, n);
    case 4:
      return (
        ns(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = An(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        Oa(e, t, r, i, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          q(Gi, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Xe(o.value, l)) {
            if (o.children === i.children && !xe.current) {
              t = dt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                l = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = st(-1, n & -n)), (s.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var m = f.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (f.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Jl(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(O(341));
                (l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  Jl(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Mn(t, n),
        (i = Qe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ve(r, t.pendingProps)),
        (i = Ve(r.type, i)),
        Ta(e, t, r, i, n)
      );
    case 15:
      return yd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        zi(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), Ki(t)) : (e = !1),
        Mn(t, n),
        Hf(t, r, i),
        bl(t, r, i, n),
        nu(null, t, r, !0, e, n)
      );
    case 19:
      return Ed(e, t, n);
    case 22:
      return vd(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Ad(e, t) {
  return af(e, t);
}
function Zm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ue(e, t, n, r) {
  return new Zm(e, t, n, r);
}
function vs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bm(e) {
  if (typeof e == "function") return vs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Du)) return 11;
    if (e === Au) return 14;
  }
  return 2;
}
function Nt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Li(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) vs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case mn:
        return Jt(n.children, i, o, t);
      case Lu:
        (l = 8), (i |= 8);
        break;
      case _l:
        return (
          (e = Ue(12, n, t, i | 2)), (e.elementType = _l), (e.lanes = o), e
        );
      case Cl:
        return (e = Ue(13, n, t, i)), (e.elementType = Cl), (e.lanes = o), e;
      case xl:
        return (e = Ue(19, n, t, i)), (e.elementType = xl), (e.lanes = o), e;
      case Hc:
        return xo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wc:
              l = 10;
              break e;
            case Vc:
              l = 9;
              break e;
            case Du:
              l = 11;
              break e;
            case Au:
              l = 14;
              break e;
            case yt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Jt(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function xo(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = Hc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ul(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function sl(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ey(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bo(0)),
    (this.expirationTimes = Bo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function gs(e, t, n, r, i, o, l, u, s) {
  return (
    (e = new ey(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ue(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ts(o),
    e
  );
}
function ty(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fd(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (sn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return Af(e, n, t);
  }
  return t;
}
function Ud(e, t, n, r, i, o, l, u, s) {
  return (
    (e = gs(n, r, !0, e, i, o, l, u, s)),
    (e.context = Fd(null)),
    (n = e.current),
    (r = Se()),
    (i = Tt(n)),
    (o = st(r, i)),
    (o.callback = t ?? null),
    Pt(n, o, i),
    (e.current.lanes = i),
    qr(e, i, r),
    Pe(e, r),
    e
  );
}
function Ro(e, t, n, r) {
  var i = t.current,
    o = Se(),
    l = Tt(i);
  return (
    (n = Fd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = st(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pt(i, t, l)),
    e !== null && (Ye(e, i, l, o), Ti(e, i, l)),
    l
  );
}
function lo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ss(e, t) {
  Qa(e, t), (e = e.alternate) && Qa(e, t);
}
function ny() {
  return null;
}
var $d =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ws(e) {
  this._internalRoot = e;
}
Po.prototype.render = ws.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Ro(e, t, null, null);
};
Po.prototype.unmount = ws.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nn(function () {
      Ro(null, e, null, null);
    }),
      (t[ct] = null);
  }
};
function Po(e) {
  this._internalRoot = e;
}
Po.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
    gt.splice(n, 0, e), n === 0 && gf(e);
  }
};
function Es(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Oo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ba() {}
function ry(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var f = lo(l);
        o.call(f);
      };
    }
    var l = Ud(t, r, e, 0, null, !1, !1, "", Ba);
    return (
      (e._reactRootContainer = l),
      (e[ct] = l.current),
      Or(e.nodeType === 8 ? e.parentNode : e),
      nn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = lo(s);
      u.call(f);
    };
  }
  var s = gs(e, 0, !1, null, null, !1, !1, "", Ba);
  return (
    (e._reactRootContainer = s),
    (e[ct] = s.current),
    Or(e.nodeType === 8 ? e.parentNode : e),
    nn(function () {
      Ro(t, s, n, r);
    }),
    s
  );
}
function To(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var s = lo(l);
        u.call(s);
      };
    }
    Ro(t, l, e, i);
  } else l = ry(n, t, e, i, r);
  return lo(l);
}
hf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = or(t.pendingLanes);
        n !== 0 &&
          ($u(t, n | 1), Pe(t, ee()), !(B & 6) && (($n = ee() + 500), Ut()));
      }
      break;
    case 13:
      nn(function () {
        var r = ft(e, 1);
        if (r !== null) {
          var i = Se();
          Ye(r, e, 1, i);
        }
      }),
        Ss(e, 1);
  }
};
Qu = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var n = Se();
      Ye(t, e, 134217728, n);
    }
    Ss(e, 134217728);
  }
};
mf = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      n = ft(e, t);
    if (n !== null) {
      var r = Se();
      Ye(n, e, t, r);
    }
    Ss(e, t);
  }
};
yf = function () {
  return V;
};
vf = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
Ll = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = So(r);
            if (!i) throw Error(O(90));
            Kc(r), Ol(r, i);
          }
        }
      }
      break;
    case "textarea":
      Xc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Pn(e, !!n.multiple, t, !1);
  }
};
nf = hs;
rf = nn;
var iy = { usingClientEntryPoint: !1, Events: [Yr, Sn, So, ef, tf, hs] },
  er = {
    findFiberByHostInstance: qt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  oy = {
    bundleType: er.bundleType,
    version: er.version,
    rendererPackageName: er.rendererPackageName,
    rendererConfig: er.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = uf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: er.findFiberByHostInstance || ny,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Si.isDisabled && Si.supportsFiber)
    try {
      (mo = Si.inject(oy)), (tt = Si);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iy;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Es(t)) throw Error(O(200));
  return ty(e, t, null, n);
};
Le.createRoot = function (e, t) {
  if (!Es(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = $d;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = gs(e, 1, !1, null, null, n, !1, r, i)),
    (e[ct] = t.current),
    Or(e.nodeType === 8 ? e.parentNode : e),
    new ws(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = uf(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return nn(e);
};
Le.hydrate = function (e, t, n) {
  if (!Oo(t)) throw Error(O(200));
  return To(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
  if (!Es(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = $d;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Ud(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[ct] = t.current),
    Or(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Po(t);
};
Le.render = function (e, t, n) {
  if (!Oo(t)) throw Error(O(200));
  return To(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
  if (!Oo(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (nn(function () {
        To(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ct] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = hs;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Oo(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return To(e, t, n, !1, r);
};
Le.version = "18.2.0-next-9e3b772b8-20220608";
function Qd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qd);
    } catch (e) {
      console.error(e);
    }
}
Qd(), (Fc.exports = Le);
var ly = Fc.exports,
  Wa = ly;
(El.createRoot = Wa.createRoot), (El.hydrateRoot = Wa.hydrateRoot);
var Bd = { exports: {} },
  Wd = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = R;
function uy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sy = typeof Object.is == "function" ? Object.is : uy,
  ay = Gr.useSyncExternalStore,
  cy = Gr.useRef,
  fy = Gr.useEffect,
  dy = Gr.useMemo,
  py = Gr.useDebugValue;
Wd.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = cy(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = dy(
    function () {
      function s(v) {
        if (!f) {
          if (((f = !0), (m = v), (v = r(v)), i !== void 0 && l.hasValue)) {
            var g = l.value;
            if (i(g, v)) return (y = g);
          }
          return (y = v);
        }
        if (((g = y), sy(m, v))) return g;
        var S = r(v);
        return i !== void 0 && i(g, S) ? g : ((m = v), (y = S));
      }
      var f = !1,
        m,
        y,
        d = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        d === null
          ? void 0
          : function () {
              return s(d());
            },
      ];
    },
    [t, n, r, i],
  );
  var u = ay(e, o[0], o[1]);
  return (
    fy(
      function () {
        (l.hasValue = !0), (l.value = u);
      },
      [u],
    ),
    py(u),
    u
  );
};
Bd.exports = Wd;
var hy = Bd.exports,
  Me = "default" in wl ? Mu : wl,
  Va = Symbol.for("react-redux-context"),
  Ha = typeof globalThis < "u" ? globalThis : {};
function my() {
  if (!Me.createContext) return {};
  const e = Ha[Va] ?? (Ha[Va] = new Map());
  let t = e.get(Me.createContext);
  return t || ((t = Me.createContext(null)), e.set(Me.createContext, t)), t;
}
var It = my(),
  yy = () => {
    throw new Error("uSES not initialized!");
  };
function ks(e = It) {
  return function () {
    return Me.useContext(e);
  };
}
var Vd = ks(),
  Hd = yy,
  vy = (e) => {
    Hd = e;
  },
  gy = (e, t) => e === t;
function Sy(e = It) {
  const t = e === It ? Vd : ks(e),
    n = (r, i = {}) => {
      const { equalityFn: o = gy, devModeChecks: l = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: u,
          subscription: s,
          getServerState: f,
          stabilityCheck: m,
          identityFunctionCheck: y,
        } = t();
      Me.useRef(!0);
      const d = Me.useCallback(
          {
            [r.name](g) {
              return r(g);
            },
          }[r.name],
          [r, m, l.stabilityCheck],
        ),
        v = Hd(s.addNestedSub, u.getState, f || u.getState, d, o);
      return Me.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var wy = Sy();
function qd(e) {
  e();
}
function Ey() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      qd(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var qa = { notify() {}, get: () => [] };
function ky(e, t) {
  let n,
    r = qa,
    i = 0,
    o = !1;
  function l(S) {
    m();
    const w = r.subscribe(S);
    let h = !1;
    return () => {
      h || ((h = !0), w(), y());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    g.onStateChange && g.onStateChange();
  }
  function f() {
    return o;
  }
  function m() {
    i++, n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = Ey()));
  }
  function y() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = qa));
  }
  function d() {
    o || ((o = !0), m());
  }
  function v() {
    o && ((o = !1), y());
  }
  const g = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: f,
    trySubscribe: d,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return g;
}
var _y =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Cy = _y ? Me.useLayoutEffect : Me.useEffect;
function Ka(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function vr(e, t) {
  if (Ka(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !Ka(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function xy({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once",
}) {
  const l = Me.useMemo(() => {
      const f = ky(e);
      return {
        store: e,
        subscription: f,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o,
      };
    }, [e, r, i, o]),
    u = Me.useMemo(() => e.getState(), [e]);
  Cy(() => {
    const { subscription: f } = l;
    return (
      (f.onStateChange = f.notifyNestedSubs),
      f.trySubscribe(),
      u !== e.getState() && f.notifyNestedSubs(),
      () => {
        f.tryUnsubscribe(), (f.onStateChange = void 0);
      }
    );
  }, [l, u]);
  const s = t || It;
  return Me.createElement(s.Provider, { value: l }, n);
}
var Ry = xy;
function Kd(e = It) {
  const t = e === It ? Vd : ks(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Yd = Kd();
function Py(e = It) {
  const t = e === It ? Yd : Kd(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Oy = Py(),
  Ty = qd;
vy(hy.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ar() {
  return (
    (Ar = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ar.apply(this, arguments)
  );
}
var kt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(kt || (kt = {}));
const Ya = "popstate";
function Ny(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: u } = r.location;
    return hu(
      "",
      { pathname: o, search: l, hash: u },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : uo(i);
  }
  return zy(t, n, null, e);
}
function ne(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Xd(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function My() {
  return Math.random().toString(36).substr(2, 8);
}
function Xa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function hu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ar(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? qn(t) : t,
      { state: n, key: (t && t.key) || r || My() },
    )
  );
}
function uo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function qn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function zy(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    u = kt.Pop,
    s = null,
    f = m();
  f == null && ((f = 0), l.replaceState(Ar({}, l.state, { idx: f }), ""));
  function m() {
    return (l.state || { idx: null }).idx;
  }
  function y() {
    u = kt.Pop;
    let w = m(),
      h = w == null ? null : w - f;
    (f = w), s && s({ action: u, location: S.location, delta: h });
  }
  function d(w, h) {
    u = kt.Push;
    let c = hu(S.location, w, h);
    n && n(c, w), (f = m() + 1);
    let a = Xa(c, f),
      p = S.createHref(c);
    try {
      l.pushState(a, "", p);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      i.location.assign(p);
    }
    o && s && s({ action: u, location: S.location, delta: 1 });
  }
  function v(w, h) {
    u = kt.Replace;
    let c = hu(S.location, w, h);
    n && n(c, w), (f = m());
    let a = Xa(c, f),
      p = S.createHref(c);
    l.replaceState(a, "", p),
      o && s && s({ action: u, location: S.location, delta: 0 });
  }
  function g(w) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      c = typeof w == "string" ? w : uo(w);
    return (
      (c = c.replace(/ $/, "%20")),
      ne(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          c,
      ),
      new URL(c, h)
    );
  }
  let S = {
    get action() {
      return u;
    },
    get location() {
      return e(i, l);
    },
    listen(w) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Ya, y),
        (s = w),
        () => {
          i.removeEventListener(Ya, y), (s = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: g,
    encodeLocation(w) {
      let h = g(w);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: d,
    replace: v,
    go(w) {
      return l.go(w);
    },
  };
  return S;
}
var Ga;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ga || (Ga = {}));
function jy(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? qn(t) : t,
    i = _s(r.pathname || "/", n);
  if (i == null) return null;
  let o = Gd(e);
  Iy(o);
  let l = null;
  for (let u = 0; l == null && u < o.length; ++u) {
    let s = qy(i);
    l = Wy(o[u], s);
  }
  return l;
}
function Gd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (ne(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let f = Mt([r, s.relativePath]),
      m = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (ne(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + f + '".'),
      ),
      Gd(o.children, t, m, f)),
      !(o.path == null && !o.index) &&
        t.push({ path: f, score: Qy(f, o.index), routesMeta: m });
  };
  return (
    e.forEach((o, l) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) i(o, l);
      else for (let s of Jd(o.path)) i(o, l, s);
    }),
    t
  );
}
function Jd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Jd(r.join("/")),
    u = [];
  return (
    u.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && u.push(...l),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Iy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : By(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Ly = /^:[\w-]+$/,
  Dy = 3,
  Ay = 2,
  Fy = 1,
  Uy = 10,
  $y = -2,
  Ja = (e) => e === "*";
function Qy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ja) && (r += $y),
    t && (r += Ay),
    n
      .filter((i) => !Ja(i))
      .reduce((i, o) => i + (Ly.test(o) ? Dy : o === "" ? Fy : Uy), r)
  );
}
function By(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Wy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      s = l === n.length - 1,
      f = i === "/" ? t : t.slice(i.length) || "/",
      m = Vy(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        f,
      );
    if (!m) return null;
    Object.assign(r, m.params);
    let y = u.route;
    o.push({
      params: r,
      pathname: Mt([i, m.pathname]),
      pathnameBase: Gy(Mt([i, m.pathnameBase])),
      route: y,
    }),
      m.pathnameBase !== "/" && (i = Mt([i, m.pathnameBase]));
  }
  return o;
}
function Vy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Hy(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    u = i.slice(1);
  return {
    params: r.reduce((f, m, y) => {
      let { paramName: d, isOptional: v } = m;
      if (d === "*") {
        let S = u[y] || "";
        l = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const g = u[y];
      return (
        v && !g ? (f[d] = void 0) : (f[d] = (g || "").replace(/%2F/g, "/")), f
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function Hy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Xd(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function qy(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Xd(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function _s(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ky(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? qn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Yy(n, t)) : t,
    search: Jy(r),
    hash: Zy(i),
  };
}
function Yy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function al(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Xy(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Zd(e, t) {
  let n = Xy(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function bd(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = qn(e))
    : ((i = Ar({}, e)),
      ne(
        !i.pathname || !i.pathname.includes("?"),
        al("?", "pathname", "search", i),
      ),
      ne(
        !i.pathname || !i.pathname.includes("#"),
        al("#", "pathname", "hash", i),
      ),
      ne(!i.search || !i.search.includes("#"), al("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    u;
  if (l == null) u = n;
  else {
    let y = t.length - 1;
    if (!r && l.startsWith("..")) {
      let d = l.split("/");
      for (; d[0] === ".."; ) d.shift(), (y -= 1);
      i.pathname = d.join("/");
    }
    u = y >= 0 ? t[y] : "/";
  }
  let s = Ky(i, u),
    f = l && l !== "/" && l.endsWith("/"),
    m = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (f || m) && (s.pathname += "/"), s;
}
const Mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Gy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Jy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Zy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function by(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ep = ["post", "put", "patch", "delete"];
new Set(ep);
const ev = ["get", ...ep];
new Set(ev);
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fr() {
  return (
    (Fr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fr.apply(this, arguments)
  );
}
const Cs = R.createContext(null),
  tv = R.createContext(null),
  an = R.createContext(null),
  No = R.createContext(null),
  $t = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  tp = R.createContext(null);
function nv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Jr() || ne(!1);
  let { basename: r, navigator: i } = R.useContext(an),
    { hash: o, pathname: l, search: u } = ip(e, { relative: n }),
    s = l;
  return (
    r !== "/" && (s = l === "/" ? r : Mt([r, l])),
    i.createHref({ pathname: s, search: u, hash: o })
  );
}
function Jr() {
  return R.useContext(No) != null;
}
function Mo() {
  return Jr() || ne(!1), R.useContext(No).location;
}
function np(e) {
  R.useContext(an).static || R.useLayoutEffect(e);
}
function rp() {
  let { isDataRoute: e } = R.useContext($t);
  return e ? yv() : rv();
}
function rv() {
  Jr() || ne(!1);
  let e = R.useContext(Cs),
    { basename: t, future: n, navigator: r } = R.useContext(an),
    { matches: i } = R.useContext($t),
    { pathname: o } = Mo(),
    l = JSON.stringify(Zd(i, n.v7_relativeSplatPath)),
    u = R.useRef(!1);
  return (
    np(() => {
      u.current = !0;
    }),
    R.useCallback(
      function (f, m) {
        if ((m === void 0 && (m = {}), !u.current)) return;
        if (typeof f == "number") {
          r.go(f);
          return;
        }
        let y = bd(f, JSON.parse(l), o, m.relative === "path");
        e == null &&
          t !== "/" &&
          (y.pathname = y.pathname === "/" ? t : Mt([t, y.pathname])),
          (m.replace ? r.replace : r.push)(y, m.state, m);
      },
      [t, r, l, o, e],
    )
  );
}
function iv() {
  let { matches: e } = R.useContext($t),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ip(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = R.useContext(an),
    { matches: i } = R.useContext($t),
    { pathname: o } = Mo(),
    l = JSON.stringify(Zd(i, r.v7_relativeSplatPath));
  return R.useMemo(() => bd(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function ov(e, t) {
  return lv(e, t);
}
function lv(e, t, n, r) {
  Jr() || ne(!1);
  let { navigator: i } = R.useContext(an),
    { matches: o } = R.useContext($t),
    l = o[o.length - 1],
    u = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let f = Mo(),
    m;
  if (t) {
    var y;
    let w = typeof t == "string" ? qn(t) : t;
    s === "/" || ((y = w.pathname) != null && y.startsWith(s)) || ne(!1),
      (m = w);
  } else m = f;
  let d = m.pathname || "/",
    v = d;
  if (s !== "/") {
    let w = s.replace(/^\//, "").split("/");
    v = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let g = jy(e, { pathname: v }),
    S = fv(
      g &&
        g.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, u, w.params),
            pathname: Mt([
              s,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? s
                : Mt([
                    s,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && S
    ? R.createElement(
        No.Provider,
        {
          value: {
            location: Fr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m,
            ),
            navigationType: kt.Pop,
          },
        },
        S,
      )
    : S;
}
function uv() {
  let e = mv(),
    t = by(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? R.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const sv = R.createElement(uv, null);
class av extends R.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? R.createElement(
          $t.Provider,
          { value: this.props.routeContext },
          R.createElement(tp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function cv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = R.useContext(Cs);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement($t.Provider, { value: t }, r)
  );
}
function fv(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    u = (i = n) == null ? void 0 : i.errors;
  if (u != null) {
    let m = l.findIndex(
      (y) => y.route.id && (u == null ? void 0 : u[y.route.id]),
    );
    m >= 0 || ne(!1), (l = l.slice(0, Math.min(l.length, m + 1)));
  }
  let s = !1,
    f = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < l.length; m++) {
      let y = l[m];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (f = m),
        y.route.id)
      ) {
        let { loaderData: d, errors: v } = n,
          g =
            y.route.loader &&
            d[y.route.id] === void 0 &&
            (!v || v[y.route.id] === void 0);
        if (y.route.lazy || g) {
          (s = !0), f >= 0 ? (l = l.slice(0, f + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((m, y, d) => {
    let v,
      g = !1,
      S = null,
      w = null;
    n &&
      ((v = u && y.route.id ? u[y.route.id] : void 0),
      (S = y.route.errorElement || sv),
      s &&
        (f < 0 && d === 0
          ? (vv("route-fallback", !1), (g = !0), (w = null))
          : f === d &&
            ((g = !0), (w = y.route.hydrateFallbackElement || null))));
    let h = t.concat(l.slice(0, d + 1)),
      c = () => {
        let a;
        return (
          v
            ? (a = S)
            : g
              ? (a = w)
              : y.route.Component
                ? (a = R.createElement(y.route.Component, null))
                : y.route.element
                  ? (a = y.route.element)
                  : (a = m),
          R.createElement(cv, {
            match: y,
            routeContext: { outlet: m, matches: h, isDataRoute: n != null },
            children: a,
          })
        );
      };
    return n && (y.route.ErrorBoundary || y.route.errorElement || d === 0)
      ? R.createElement(av, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: v,
          children: c(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var op = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(op || {}),
  so = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(so || {});
function dv(e) {
  let t = R.useContext(Cs);
  return t || ne(!1), t;
}
function pv(e) {
  let t = R.useContext(tv);
  return t || ne(!1), t;
}
function hv(e) {
  let t = R.useContext($t);
  return t || ne(!1), t;
}
function lp(e) {
  let t = hv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ne(!1), n.route.id;
}
function mv() {
  var e;
  let t = R.useContext(tp),
    n = pv(so.UseRouteError),
    r = lp(so.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function yv() {
  let { router: e } = dv(op.UseNavigateStable),
    t = lp(so.UseNavigateStable),
    n = R.useRef(!1);
  return (
    np(() => {
      n.current = !0;
    }),
    R.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Fr({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
const Za = {};
function vv(e, t, n) {
  !t && !Za[e] && (Za[e] = !0);
}
function mu(e) {
  ne(!1);
}
function gv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = kt.Pop,
    navigator: o,
    static: l = !1,
    future: u,
  } = e;
  Jr() && ne(!1);
  let s = t.replace(/^\/*/, "/"),
    f = R.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: l,
        future: Fr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, o, l],
    );
  typeof r == "string" && (r = qn(r));
  let {
      pathname: m = "/",
      search: y = "",
      hash: d = "",
      state: v = null,
      key: g = "default",
    } = r,
    S = R.useMemo(() => {
      let w = _s(m, s);
      return w == null
        ? null
        : {
            location: { pathname: w, search: y, hash: d, state: v, key: g },
            navigationType: i,
          };
    }, [s, m, y, d, v, g, i]);
  return S == null
    ? null
    : R.createElement(
        an.Provider,
        { value: f },
        R.createElement(No.Provider, { children: n, value: S }),
      );
}
function Sv(e) {
  let { children: t, location: n } = e;
  return ov(yu(t), n);
}
new Promise(() => {});
function yu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    R.Children.forEach(e, (r, i) => {
      if (!R.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === R.Fragment) {
        n.push.apply(n, yu(r.props.children, o));
        return;
      }
      r.type !== mu && ne(!1), !r.props.index || !r.props.children || ne(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = yu(r.props.children, o)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vu() {
  return (
    (vu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vu.apply(this, arguments)
  );
}
function wv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ev(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function kv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ev(e);
}
const _v = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Cv = "6";
try {
  window.__reactRouterVersion = Cv;
} catch {}
const xv = "startTransition",
  ba = wl[xv];
function Rv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = R.useRef();
  o.current == null && (o.current = Ny({ window: i, v5Compat: !0 }));
  let l = o.current,
    [u, s] = R.useState({ action: l.action, location: l.location }),
    { v7_startTransition: f } = r || {},
    m = R.useCallback(
      (y) => {
        f && ba ? ba(() => s(y)) : s(y);
      },
      [s, f],
    );
  return (
    R.useLayoutEffect(() => l.listen(m), [l, m]),
    R.createElement(gv, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: l,
      future: r,
    })
  );
}
const Pv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ov = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  up = R.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: u,
        target: s,
        to: f,
        preventScrollReset: m,
        unstable_viewTransition: y,
      } = t,
      d = wv(t, _v),
      { basename: v } = R.useContext(an),
      g,
      S = !1;
    if (typeof f == "string" && Ov.test(f) && ((g = f), Pv))
      try {
        let a = new URL(window.location.href),
          p = f.startsWith("//") ? new URL(a.protocol + f) : new URL(f),
          E = _s(p.pathname, v);
        p.origin === a.origin && E != null
          ? (f = E + p.search + p.hash)
          : (S = !0);
      } catch {}
    let w = nv(f, { relative: i }),
      h = Tv(f, {
        replace: l,
        state: u,
        target: s,
        preventScrollReset: m,
        relative: i,
        unstable_viewTransition: y,
      });
    function c(a) {
      r && r(a), a.defaultPrevented || h(a);
    }
    return R.createElement(
      "a",
      vu({}, d, { href: g || w, onClick: S || o ? r : c, ref: n, target: s }),
    );
  });
var ec;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ec || (ec = {}));
var tc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(tc || (tc = {}));
function Tv(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = rp(),
    f = Mo(),
    m = ip(e, { relative: l });
  return R.useCallback(
    (y) => {
      if (kv(y, n)) {
        y.preventDefault();
        let d = r !== void 0 ? r : uo(f) === uo(m);
        s(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: u,
        });
      }
    },
    [f, s, m, r, i, n, e, o, l, u],
  );
}
const sp = "/pokemon/assets/pokedex_logo-BUhrJkXO.png";
function se(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Nv = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  nc = Nv,
  cl = () => Math.random().toString(36).substring(7).split("").join("."),
  Mv = {
    INIT: `@@redux/INIT${cl()}`,
    REPLACE: `@@redux/REPLACE${cl()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${cl()}`,
  },
  ao = Mv;
function rt(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ap(e, t, n) {
  if (typeof e != "function") throw new Error(se(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(se(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(se(1));
    return n(ap)(e, t);
  }
  let r = e,
    i = t,
    o = new Map(),
    l = o,
    u = 0,
    s = !1;
  function f() {
    l === o &&
      ((l = new Map()),
      o.forEach((w, h) => {
        l.set(h, w);
      }));
  }
  function m() {
    if (s) throw new Error(se(3));
    return i;
  }
  function y(w) {
    if (typeof w != "function") throw new Error(se(4));
    if (s) throw new Error(se(5));
    let h = !0;
    f();
    const c = u++;
    return (
      l.set(c, w),
      function () {
        if (h) {
          if (s) throw new Error(se(6));
          (h = !1), f(), l.delete(c), (o = null);
        }
      }
    );
  }
  function d(w) {
    if (!rt(w)) throw new Error(se(7));
    if (typeof w.type > "u") throw new Error(se(8));
    if (typeof w.type != "string") throw new Error(se(17));
    if (s) throw new Error(se(9));
    try {
      (s = !0), (i = r(i, w));
    } finally {
      s = !1;
    }
    return (
      (o = l).forEach((c) => {
        c();
      }),
      w
    );
  }
  function v(w) {
    if (typeof w != "function") throw new Error(se(10));
    (r = w), d({ type: ao.REPLACE });
  }
  function g() {
    const w = y;
    return {
      subscribe(h) {
        if (typeof h != "object" || h === null) throw new Error(se(11));
        function c() {
          const p = h;
          p.next && p.next(m());
        }
        return c(), { unsubscribe: w(c) };
      },
      [nc]() {
        return this;
      },
    };
  }
  return (
    d({ type: ao.INIT }),
    { dispatch: d, subscribe: y, getState: m, replaceReducer: v, [nc]: g }
  );
}
function zv(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: ao.INIT }) > "u") throw new Error(se(12));
    if (typeof n(void 0, { type: ao.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(se(13));
  });
}
function cp(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let i;
  try {
    zv(n);
  } catch (o) {
    i = o;
  }
  return function (l = {}, u) {
    if (i) throw i;
    let s = !1;
    const f = {};
    for (let m = 0; m < r.length; m++) {
      const y = r[m],
        d = n[y],
        v = l[y],
        g = d(v, u);
      if (typeof g > "u") throw (u && u.type, new Error(se(14)));
      (f[y] = g), (s = s || g !== v);
    }
    return (s = s || r.length !== Object.keys(l).length), s ? f : l;
  };
}
function co(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r)),
        );
}
function jv(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(se(15));
    };
    const l = { getState: i.getState, dispatch: (s, ...f) => o(s, ...f) },
      u = e.map((s) => s(l));
    return (o = co(...u)(i.dispatch)), { ...i, dispatch: o };
  };
}
function fp(e) {
  return rt(e) && "type" in e && typeof e.type == "string";
}
var xs = Symbol.for("immer-nothing"),
  gr = Symbol.for("immer-draftable"),
  Oe = Symbol.for("immer-state");
function ce(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var rn = Object.getPrototypeOf;
function Ge(e) {
  return !!e && !!e[Oe];
}
function Je(e) {
  var t;
  return e
    ? dp(e) ||
        Array.isArray(e) ||
        !!e[gr] ||
        !!((t = e.constructor) != null && t[gr]) ||
        Zr(e) ||
        br(e)
    : !1;
}
var Iv = Object.prototype.constructor.toString();
function dp(e) {
  if (!e || typeof e != "object") return !1;
  const t = rn(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === Iv;
}
function Lv(e) {
  return Ge(e) || ce(15, e), e[Oe].base_;
}
function Qn(e, t) {
  on(e) === 0
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function on(e) {
  const t = e[Oe];
  return t ? t.type_ : Array.isArray(e) ? 1 : Zr(e) ? 2 : br(e) ? 3 : 0;
}
function Ur(e, t) {
  return on(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function fl(e, t) {
  return on(e) === 2 ? e.get(t) : e[t];
}
function pp(e, t, n) {
  const r = on(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Dv(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Zr(e) {
  return e instanceof Map;
}
function br(e) {
  return e instanceof Set;
}
function Ht(e) {
  return e.copy_ || e.base_;
}
function gu(e, t) {
  if (Zr(e)) return new Map(e);
  if (br(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && dp(e))
    return rn(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Oe];
  let r = Reflect.ownKeys(n);
  for (let i = 0; i < r.length; i++) {
    const o = r[i],
      l = n[o];
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) &&
        (n[o] = {
          configurable: !0,
          writable: !0,
          enumerable: l.enumerable,
          value: e[o],
        });
  }
  return Object.create(rn(e), n);
}
function Rs(e, t = !1) {
  return (
    zo(e) ||
      Ge(e) ||
      !Je(e) ||
      (on(e) > 1 && (e.set = e.add = e.clear = e.delete = Av),
      Object.freeze(e),
      t && Qn(e, (n, r) => Rs(r, !0))),
    e
  );
}
function Av() {
  ce(2);
}
function zo(e) {
  return Object.isFrozen(e);
}
var Su = {};
function ln(e) {
  const t = Su[e];
  return t || ce(0, e), t;
}
function Fv(e, t) {
  Su[e] || (Su[e] = t);
}
var $r;
function hp() {
  return $r;
}
function Uv(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function rc(e, t) {
  t &&
    (ln("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function wu(e) {
  Eu(e), e.drafts_.forEach($v), (e.drafts_ = null);
}
function Eu(e) {
  e === $r && ($r = e.parent_);
}
function ic(e) {
  return ($r = Uv($r, e));
}
function $v(e) {
  const t = e[Oe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function oc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Oe].modified_ && (wu(t), ce(4)),
        Je(e) && ((e = fo(t, e)), t.parent_ || po(t, e)),
        t.patches_ &&
          ln("Patches").generateReplacementPatches_(
            n[Oe].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = fo(t, n, [])),
    wu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== xs ? e : void 0
  );
}
function fo(e, t, n) {
  if (zo(t)) return t;
  const r = t[Oe];
  if (!r) return Qn(t, (i, o) => lc(e, r, t, i, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return po(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i,
      l = !1;
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (l = !0)),
      Qn(o, (u, s) => lc(e, r, i, u, s, n, l)),
      po(e, i, !1),
      n &&
        e.patches_ &&
        ln("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function lc(e, t, n, r, i, o, l) {
  if (Ge(i)) {
    const u =
        o && t && t.type_ !== 3 && !Ur(t.assigned_, r) ? o.concat(r) : void 0,
      s = fo(e, i, u);
    if ((pp(n, r, s), Ge(s))) e.canAutoFreeze_ = !1;
    else return;
  } else l && n.add(i);
  if (Je(i) && !zo(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    fo(e, i), (!t || !t.scope_.parent_) && po(e, i);
  }
}
function po(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Rs(t, n);
}
function Qv(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : hp(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    o = Ps;
  n && ((i = [r]), (o = Qr));
  const { revoke: l, proxy: u } = Proxy.revocable(i, o);
  return (r.draft_ = u), (r.revoke_ = l), u;
}
var Ps = {
    get(e, t) {
      if (t === Oe) return e;
      const n = Ht(e);
      if (!Ur(n, t)) return Bv(e, n, t);
      const r = n[t];
      return e.finalized_ || !Je(r)
        ? r
        : r === dl(e.base_, t)
          ? (pl(e), (e.copy_[t] = _u(r, e)))
          : r;
    },
    has(e, t) {
      return t in Ht(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Ht(e));
    },
    set(e, t, n) {
      const r = mp(Ht(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = dl(Ht(e), t),
          o = i == null ? void 0 : i[Oe];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Dv(n, i) && (n !== void 0 || Ur(e.base_, t))) return !0;
        pl(e), ku(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        dl(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), pl(e), ku(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Ht(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      ce(11);
    },
    getPrototypeOf(e) {
      return rn(e.base_);
    },
    setPrototypeOf() {
      ce(12);
    },
  },
  Qr = {};
Qn(Ps, (e, t) => {
  Qr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Qr.deleteProperty = function (e, t) {
  return Qr.set.call(this, e, t, void 0);
};
Qr.set = function (e, t, n) {
  return Ps.set.call(this, e[0], t, n, e[0]);
};
function dl(e, t) {
  const n = e[Oe];
  return (n ? Ht(n) : e)[t];
}
function Bv(e, t, n) {
  var i;
  const r = mp(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
        ? void 0
        : i.call(e.draft_)
    : void 0;
}
function mp(e, t) {
  if (!(t in e)) return;
  let n = rn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = rn(n);
  }
}
function ku(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ku(e.parent_));
}
function pl(e) {
  e.copy_ || (e.copy_ = gu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Wv = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const l = this;
          return function (s = o, ...f) {
            return l.produce(s, (m) => n.call(this, m, ...f));
          };
        }
        typeof n != "function" && ce(6),
          r !== void 0 && typeof r != "function" && ce(7);
        let i;
        if (Je(t)) {
          const o = ic(this),
            l = _u(t, void 0);
          let u = !0;
          try {
            (i = n(l)), (u = !1);
          } finally {
            u ? wu(o) : Eu(o);
          }
          return rc(o, r), oc(i, o);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === xs && (i = void 0),
            this.autoFreeze_ && Rs(i, !0),
            r)
          ) {
            const o = [],
              l = [];
            ln("Patches").generateReplacementPatches_(t, i, o, l), r(o, l);
          }
          return i;
        } else ce(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (l, ...u) => this.produceWithPatches(l, (s) => t(s, ...u));
        let r, i;
        return [
          this.produce(t, n, (l, u) => {
            (r = l), (i = u);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Je(e) || ce(8), Ge(e) && (e = yp(e));
    const t = ic(this),
      n = _u(e, void 0);
    return (n[Oe].isManual_ = !0), Eu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Oe];
    (!n || !n.isManual_) && ce(9);
    const { scope_: r } = n;
    return rc(r, t), oc(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = ln("Patches").applyPatches_;
    return Ge(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function _u(e, t) {
  const n = Zr(e)
    ? ln("MapSet").proxyMap_(e, t)
    : br(e)
      ? ln("MapSet").proxySet_(e, t)
      : Qv(e, t);
  return (t ? t.scope_ : hp()).drafts_.push(n), n;
}
function yp(e) {
  return Ge(e) || ce(10, e), vp(e);
}
function vp(e) {
  if (!Je(e) || zo(e)) return e;
  const t = e[Oe];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = gu(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = gu(e, !0);
  return (
    Qn(n, (r, i) => {
      pp(n, r, vp(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
function Vv() {
  const t = "replace",
    n = "add",
    r = "remove";
  function i(d, v, g, S) {
    switch (d.type_) {
      case 0:
      case 2:
        return l(d, v, g, S);
      case 1:
        return o(d, v, g, S);
      case 3:
        return u(d, v, g, S);
    }
  }
  function o(d, v, g, S) {
    let { base_: w, assigned_: h } = d,
      c = d.copy_;
    c.length < w.length && (([w, c] = [c, w]), ([g, S] = [S, g]));
    for (let a = 0; a < w.length; a++)
      if (h[a] && c[a] !== w[a]) {
        const p = v.concat([a]);
        g.push({ op: t, path: p, value: y(c[a]) }),
          S.push({ op: t, path: p, value: y(w[a]) });
      }
    for (let a = w.length; a < c.length; a++) {
      const p = v.concat([a]);
      g.push({ op: n, path: p, value: y(c[a]) });
    }
    for (let a = c.length - 1; w.length <= a; --a) {
      const p = v.concat([a]);
      S.push({ op: r, path: p });
    }
  }
  function l(d, v, g, S) {
    const { base_: w, copy_: h } = d;
    Qn(d.assigned_, (c, a) => {
      const p = fl(w, c),
        E = fl(h, c),
        _ = a ? (Ur(w, c) ? t : n) : r;
      if (p === E && _ === t) return;
      const k = v.concat(c);
      g.push(_ === r ? { op: _, path: k } : { op: _, path: k, value: E }),
        S.push(
          _ === n
            ? { op: r, path: k }
            : _ === r
              ? { op: n, path: k, value: y(p) }
              : { op: t, path: k, value: y(p) },
        );
    });
  }
  function u(d, v, g, S) {
    let { base_: w, copy_: h } = d,
      c = 0;
    w.forEach((a) => {
      if (!h.has(a)) {
        const p = v.concat([c]);
        g.push({ op: r, path: p, value: a }),
          S.unshift({ op: n, path: p, value: a });
      }
      c++;
    }),
      (c = 0),
      h.forEach((a) => {
        if (!w.has(a)) {
          const p = v.concat([c]);
          g.push({ op: n, path: p, value: a }),
            S.unshift({ op: r, path: p, value: a });
        }
        c++;
      });
  }
  function s(d, v, g, S) {
    g.push({ op: t, path: [], value: v === xs ? void 0 : v }),
      S.push({ op: t, path: [], value: d });
  }
  function f(d, v) {
    return (
      v.forEach((g) => {
        const { path: S, op: w } = g;
        let h = d;
        for (let E = 0; E < S.length - 1; E++) {
          const _ = on(h);
          let k = S[E];
          typeof k != "string" && typeof k != "number" && (k = "" + k),
            (_ === 0 || _ === 1) &&
              (k === "__proto__" || k === "constructor") &&
              ce(19),
            typeof h == "function" && k === "prototype" && ce(19),
            (h = fl(h, k)),
            typeof h != "object" && ce(18, S.join("/"));
        }
        const c = on(h),
          a = m(g.value),
          p = S[S.length - 1];
        switch (w) {
          case t:
            switch (c) {
              case 2:
                return h.set(p, a);
              case 3:
                ce(16);
              default:
                return (h[p] = a);
            }
          case n:
            switch (c) {
              case 1:
                return p === "-" ? h.push(a) : h.splice(p, 0, a);
              case 2:
                return h.set(p, a);
              case 3:
                return h.add(a);
              default:
                return (h[p] = a);
            }
          case r:
            switch (c) {
              case 1:
                return h.splice(p, 1);
              case 2:
                return h.delete(p);
              case 3:
                return h.delete(g.value);
              default:
                return delete h[p];
            }
          default:
            ce(17, w);
        }
      }),
      d
    );
  }
  function m(d) {
    if (!Je(d)) return d;
    if (Array.isArray(d)) return d.map(m);
    if (Zr(d))
      return new Map(Array.from(d.entries()).map(([g, S]) => [g, m(S)]));
    if (br(d)) return new Set(Array.from(d).map(m));
    const v = Object.create(rn(d));
    for (const g in d) v[g] = m(d[g]);
    return Ur(d, gr) && (v[gr] = d[gr]), v;
  }
  function y(d) {
    return Ge(d) ? m(d) : d;
  }
  Fv("Patches", {
    applyPatches_: f,
    generatePatches_: i,
    generateReplacementPatches_: s,
  });
}
var Ie = new Wv(),
  ei = Ie.produce,
  gp = Ie.produceWithPatches.bind(Ie);
Ie.setAutoFreeze.bind(Ie);
Ie.setUseStrictShallowCopy.bind(Ie);
var uc = Ie.applyPatches.bind(Ie);
Ie.createDraft.bind(Ie);
Ie.finishDraft.bind(Ie);
function Hv(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function qv(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function Kv(
  e,
  t = "expected all items to be functions, instead received the following types: ",
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r,
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var sc = (e) => (Array.isArray(e) ? e : [e]);
function Yv(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Kv(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    t
  );
}
function Xv(e, t) {
  const n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Gv = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Jv = typeof WeakRef < "u" ? WeakRef : Gv,
  Zv = 0,
  ac = 1;
function wi() {
  return { s: Zv, v: void 0, o: null, p: null };
}
function Br(e, t = {}) {
  let n = wi();
  const { resultEqualityCheck: r } = t;
  let i,
    o = 0;
  function l() {
    var y;
    let u = n;
    const { length: s } = arguments;
    for (let d = 0, v = s; d < v; d++) {
      const g = arguments[d];
      if (typeof g == "function" || (typeof g == "object" && g !== null)) {
        let S = u.o;
        S === null && (u.o = S = new WeakMap());
        const w = S.get(g);
        w === void 0 ? ((u = wi()), S.set(g, u)) : (u = w);
      } else {
        let S = u.p;
        S === null && (u.p = S = new Map());
        const w = S.get(g);
        w === void 0 ? ((u = wi()), S.set(g, u)) : (u = w);
      }
    }
    const f = u;
    let m;
    if (
      (u.s === ac ? (m = u.v) : ((m = e.apply(null, arguments)), o++),
      (f.s = ac),
      r)
    ) {
      const d =
        ((y = i == null ? void 0 : i.deref) == null ? void 0 : y.call(i)) ?? i;
      d != null && r(d, m) && ((m = d), o !== 0 && o--),
        (i =
          (typeof m == "object" && m !== null) || typeof m == "function"
            ? new Jv(m)
            : m);
    }
    return (f.v = m), m;
  }
  return (
    (l.clearCache = () => {
      (n = wi()), l.resetResultsCount();
    }),
    (l.resultsCount = () => o),
    (l.resetResultsCount = () => {
      o = 0;
    }),
    l
  );
}
function Sp(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        l = 0,
        u,
        s = {},
        f = i.pop();
      typeof f == "object" && ((s = f), (f = i.pop())),
        Hv(
          f,
          `createSelector expects an output function after the inputs, but received: [${typeof f}]`,
        );
      const m = { ...n, ...s },
        {
          memoize: y,
          memoizeOptions: d = [],
          argsMemoize: v = Br,
          argsMemoizeOptions: g = [],
          devModeChecks: S = {},
        } = m,
        w = sc(d),
        h = sc(g),
        c = Yv(i),
        a = y(
          function () {
            return o++, f.apply(null, arguments);
          },
          ...w,
        ),
        p = v(
          function () {
            l++;
            const _ = Xv(c, arguments);
            return (u = a.apply(null, _)), u;
          },
          ...h,
        );
      return Object.assign(p, {
        resultFunc: f,
        memoizedResultFunc: a,
        dependencies: c,
        dependencyRecomputations: () => l,
        resetDependencyRecomputations: () => {
          l = 0;
        },
        lastResult: () => u,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0;
        },
        memoize: y,
        argsMemoize: v,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var Os = Sp(Br),
  bv = Object.assign(
    (e, t = Os) => {
      qv(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const n = Object.keys(e),
        r = n.map((o) => e[o]);
      return t(r, (...o) => o.reduce((l, u, s) => ((l[n[s]] = u), l), {}));
    },
    { withTypes: () => bv },
  );
function wp(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : i(o);
}
var eg = wp(),
  tg = wp,
  ng = (...e) => {
    const t = Sp(...e),
      n = Object.assign(
        (...r) => {
          const i = t(...r),
            o = (l, ...u) => i(Ge(l) ? yp(l) : l, ...u);
          return Object.assign(o, i), o;
        },
        { withTypes: () => n },
      );
    return n;
  };
ng(Br);
var rg =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? co
              : co.apply(null, arguments);
        },
  ig = (e) => e && typeof e.match == "function";
function we(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(ye(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => fp(r) && r.type === e),
    n
  );
}
var Ep = class ur extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ur.prototype);
  }
  static get [Symbol.species]() {
    return ur;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new ur(...t[0].concat(this))
      : new ur(...t.concat(this));
  }
};
function cc(e) {
  return Je(e) ? ei(e, () => {}) : e;
}
function fc(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(ye(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function og(e) {
  return typeof e == "boolean";
}
var lg = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let l = new Ep();
      return n && (og(n) ? l.push(eg) : l.push(tg(n.extraArgument))), l;
    },
  Rn = "RTK_autoBatch",
  tr = () => (e) => ({ payload: e, meta: { [Rn]: !0 } }),
  kp = (e) => (t) => {
    setTimeout(t, e);
  },
  ug =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : kp(10),
  sg =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        o = !1,
        l = !1;
      const u = new Set(),
        s =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? ug
              : e.type === "callback"
                ? e.queueNotification
                : kp(e.timeout),
        f = () => {
          (l = !1), o && ((o = !1), u.forEach((m) => m()));
        };
      return Object.assign({}, r, {
        subscribe(m) {
          const y = () => i && m(),
            d = r.subscribe(y);
          return (
            u.add(m),
            () => {
              d(), u.delete(m);
            }
          );
        },
        dispatch(m) {
          var y;
          try {
            return (
              (i = !((y = m == null ? void 0 : m.meta) != null && y[Rn])),
              (o = !i),
              o && (l || ((l = !0), s(f))),
              r.dispatch(m)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  ag = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new Ep(e);
      return r && i.push(sg(typeof r == "object" ? r : void 0)), i;
    },
  cg = !0;
function fg(e) {
  const t = lg(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: l = void 0,
    } = e || {};
  let u;
  if (typeof n == "function") u = n;
  else if (rt(n)) u = cp(n);
  else throw new Error(ye(1));
  let s;
  typeof r == "function" ? (s = r(t)) : (s = t());
  let f = co;
  i && (f = rg({ trace: !cg, ...(typeof i == "object" && i) }));
  const m = jv(...s),
    y = ag(m);
  let d = typeof l == "function" ? l(y) : y();
  const v = f(...d);
  return ap(u, o, v);
}
function _p(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(o, l) {
      const u = typeof o == "string" ? o : o.type;
      if (!u) throw new Error(ye(28));
      if (u in t) throw new Error(ye(29));
      return (t[u] = l), i;
    },
    addMatcher(o, l) {
      return n.push({ matcher: o, reducer: l }), i;
    },
    addDefaultCase(o) {
      return (r = o), i;
    },
  };
  return e(i), [t, n, r];
}
function dg(e) {
  return typeof e == "function";
}
function pg(e, t) {
  let [n, r, i] = _p(t),
    o;
  if (dg(e)) o = () => cc(e());
  else {
    const u = cc(e);
    o = () => u;
  }
  function l(u = o(), s) {
    let f = [
      n[s.type],
      ...r.filter(({ matcher: m }) => m(s)).map(({ reducer: m }) => m),
    ];
    return (
      f.filter((m) => !!m).length === 0 && (f = [i]),
      f.reduce((m, y) => {
        if (y)
          if (Ge(m)) {
            const v = y(m, s);
            return v === void 0 ? m : v;
          } else {
            if (Je(m)) return ei(m, (d) => y(d, s));
            {
              const d = y(m, s);
              if (d === void 0) {
                if (m === null) return m;
                throw new Error(ye(9));
              }
              return d;
            }
          }
        return m;
      }, u)
    );
  }
  return (l.getInitialState = o), l;
}
var hg = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Ts = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += hg[(Math.random() * 64) | 0];
    return t;
  },
  Cp = (e, t) => (ig(e) ? e.match(t) : e(t));
function Lt(...e) {
  return (t) => e.some((n) => Cp(n, t));
}
function Sr(...e) {
  return (t) => e.every((n) => Cp(n, t));
}
function jo(e, t) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string",
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function ti(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function Ns(...e) {
  return e.length === 0
    ? (t) => jo(t, ["pending"])
    : ti(e)
      ? (t) => {
          const n = e.map((i) => i.pending);
          return Lt(...n)(t);
        }
      : Ns()(e[0]);
}
function Bn(...e) {
  return e.length === 0
    ? (t) => jo(t, ["rejected"])
    : ti(e)
      ? (t) => {
          const n = e.map((i) => i.rejected);
          return Lt(...n)(t);
        }
      : Bn()(e[0]);
}
function Io(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0
    ? (n) => Sr(Bn(...e), t)(n)
    : ti(e)
      ? (n) => Sr(Bn(...e), t)(n)
      : Io()(e[0]);
}
function Dt(...e) {
  return e.length === 0
    ? (t) => jo(t, ["fulfilled"])
    : ti(e)
      ? (t) => {
          const n = e.map((i) => i.fulfilled);
          return Lt(...n)(t);
        }
      : Dt()(e[0]);
}
function Cu(...e) {
  return e.length === 0
    ? (t) => jo(t, ["pending", "fulfilled", "rejected"])
    : ti(e)
      ? (t) => {
          const n = [];
          for (const i of e) n.push(i.pending, i.rejected, i.fulfilled);
          return Lt(...n)(t);
        }
      : Cu()(e[0]);
}
var mg = ["name", "message", "stack", "code"],
  hl = class {
    constructor(e, t) {
      Do(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  dc = class {
    constructor(e, t) {
      Do(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  yg = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of mg) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  pc = (() => {
    function e(t, n, r) {
      const i = we(t + "/fulfilled", (s, f, m, y) => ({
          payload: s,
          meta: {
            ...(y || {}),
            arg: m,
            requestId: f,
            requestStatus: "fulfilled",
          },
        })),
        o = we(t + "/pending", (s, f, m) => ({
          payload: void 0,
          meta: {
            ...(m || {}),
            arg: f,
            requestId: s,
            requestStatus: "pending",
          },
        })),
        l = we(t + "/rejected", (s, f, m, y, d) => ({
          payload: y,
          error: ((r && r.serializeError) || yg)(s || "Rejected"),
          meta: {
            ...(d || {}),
            arg: m,
            requestId: f,
            rejectedWithValue: !!y,
            requestStatus: "rejected",
            aborted: (s == null ? void 0 : s.name) === "AbortError",
            condition: (s == null ? void 0 : s.name) === "ConditionError",
          },
        }));
      function u(s) {
        return (f, m, y) => {
          const d = r != null && r.idGenerator ? r.idGenerator(s) : Ts(),
            v = new AbortController();
          let g, S;
          function w(c) {
            (S = c), v.abort();
          }
          const h = (async function () {
            var p, E;
            let c;
            try {
              let _ =
                (p = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : p.call(r, s, { getState: m, extra: y });
              if ((gg(_) && (_ = await _), _ === !1 || v.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const k = new Promise((C, P) => {
                (g = () => {
                  P({ name: "AbortError", message: S || "Aborted" });
                }),
                  v.signal.addEventListener("abort", g);
              });
              f(
                o(
                  d,
                  s,
                  (E = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : E.call(
                        r,
                        { requestId: d, arg: s },
                        { getState: m, extra: y },
                      ),
                ),
              ),
                (c = await Promise.race([
                  k,
                  Promise.resolve(
                    n(s, {
                      dispatch: f,
                      getState: m,
                      extra: y,
                      requestId: d,
                      signal: v.signal,
                      abort: w,
                      rejectWithValue: (C, P) => new hl(C, P),
                      fulfillWithValue: (C, P) => new dc(C, P),
                    }),
                  ).then((C) => {
                    if (C instanceof hl) throw C;
                    return C instanceof dc
                      ? i(C.payload, d, s, C.meta)
                      : i(C, d, s);
                  }),
                ]));
            } catch (_) {
              c =
                _ instanceof hl ? l(null, d, s, _.payload, _.meta) : l(_, d, s);
            } finally {
              g && v.signal.removeEventListener("abort", g);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                l.match(c) &&
                c.meta.condition) ||
                f(c),
              c
            );
          })();
          return Object.assign(h, {
            abort: w,
            requestId: d,
            arg: s,
            unwrap() {
              return h.then(vg);
            },
          });
        };
      }
      return Object.assign(u, {
        pending: o,
        rejected: l,
        fulfilled: i,
        settled: Lt(l, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function vg(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function gg(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Sg = Symbol.for("rtk-slice-createasyncthunk");
function wg(e, t) {
  return `${e}/${t}`;
}
function Eg({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Sg];
  return function (i) {
    const { name: o, reducerPath: l = o } = i;
    if (!o) throw new Error(ye(11));
    typeof process < "u";
    const u =
        (typeof i.reducers == "function" ? i.reducers(_g()) : i.reducers) || {},
      s = Object.keys(u),
      f = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      m = {
        addCase(a, p) {
          const E = typeof a == "string" ? a : a.type;
          if (!E) throw new Error(ye(12));
          if (E in f.sliceCaseReducersByType) throw new Error(ye(13));
          return (f.sliceCaseReducersByType[E] = p), m;
        },
        addMatcher(a, p) {
          return f.sliceMatchers.push({ matcher: a, reducer: p }), m;
        },
        exposeAction(a, p) {
          return (f.actionCreators[a] = p), m;
        },
        exposeCaseReducer(a, p) {
          return (f.sliceCaseReducersByName[a] = p), m;
        },
      };
    s.forEach((a) => {
      const p = u[a],
        E = {
          reducerName: a,
          type: wg(o, a),
          createNotation: typeof i.reducers == "function",
        };
      xg(p) ? Pg(E, p, m, t) : Cg(E, p, m);
    });
    function y() {
      const [a = {}, p = [], E = void 0] =
          typeof i.extraReducers == "function"
            ? _p(i.extraReducers)
            : [i.extraReducers],
        _ = { ...a, ...f.sliceCaseReducersByType };
      return pg(i.initialState, (k) => {
        for (let C in _) k.addCase(C, _[C]);
        for (let C of f.sliceMatchers) k.addMatcher(C.matcher, C.reducer);
        for (let C of p) k.addMatcher(C.matcher, C.reducer);
        E && k.addDefaultCase(E);
      });
    }
    const d = (a) => a,
      v = new Map();
    let g;
    function S(a, p) {
      return g || (g = y()), g(a, p);
    }
    function w() {
      return g || (g = y()), g.getInitialState();
    }
    function h(a, p = !1) {
      function E(k) {
        let C = k[a];
        return typeof C > "u" && p && (C = w()), C;
      }
      function _(k = d) {
        const C = fc(v, p, { insert: () => new WeakMap() });
        return fc(C, k, {
          insert: () => {
            const P = {};
            for (const [x, N] of Object.entries(i.selectors ?? {}))
              P[x] = kg(N, k, w, p);
            return P;
          },
        });
      }
      return {
        reducerPath: a,
        getSelectors: _,
        get selectors() {
          return _(E);
        },
        selectSlice: E,
      };
    }
    const c = {
      name: o,
      reducer: S,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: w,
      ...h(l),
      injectInto(a, { reducerPath: p, ...E } = {}) {
        const _ = p ?? l;
        return (
          a.inject({ reducerPath: _, reducer: S }, E), { ...c, ...h(_, !0) }
        );
      },
    };
    return c;
  };
}
function kg(e, t, n, r) {
  function i(o, ...l) {
    let u = t(o);
    return typeof u > "u" && r && (u = n()), e(u, ...l);
  }
  return (i.unwrapped = e), i;
}
var fn = Eg();
function _g() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function Cg({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, l;
  if ("reducer" in r) {
    if (n && !Rg(r)) throw new Error(ye(17));
    (o = r.reducer), (l = r.prepare);
  } else o = r;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, l ? we(e, l) : we(e));
}
function xg(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Rg(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Pg({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(ye(18));
  const {
      payloadCreator: o,
      fulfilled: l,
      pending: u,
      rejected: s,
      settled: f,
      options: m,
    } = n,
    y = i(e, o, m);
  r.exposeAction(t, y),
    l && r.addCase(y.fulfilled, l),
    u && r.addCase(y.pending, u),
    s && r.addCase(y.rejected, s),
    f && r.addMatcher(y.settled, f),
    r.exposeCaseReducer(t, {
      fulfilled: l || Ei,
      pending: u || Ei,
      rejected: s || Ei,
      settled: f || Ei,
    });
}
function Ei() {}
var Og = (e, t) => {
    if (typeof e != "function") throw new Error(ye(32));
  },
  Ms = "listenerMiddleware",
  Tg = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: o } = e;
    if (t) i = we(t).match;
    else if (n) (t = n.type), (i = n.match);
    else if (r) i = r;
    else if (!i) throw new Error(ye(21));
    return Og(o), { predicate: i, type: t, effect: o };
  },
  Ng = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = Tg(e);
      return {
        id: Ts(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(ye(22));
        },
      };
    },
    { withTypes: () => Ng },
  ),
  Mg = Object.assign(we(`${Ms}/add`), { withTypes: () => Mg });
we(`${Ms}/removeAll`);
var zg = Object.assign(we(`${Ms}/remove`), { withTypes: () => zg });
function ye(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var xp = ((e) => (
  (e.uninitialized = "uninitialized"),
  (e.pending = "pending"),
  (e.fulfilled = "fulfilled"),
  (e.rejected = "rejected"),
  e
))(xp || {});
function jg(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected",
  };
}
function Ig(e) {
  return new RegExp("(^|:)//").test(e);
}
var Lg = (e) => e.replace(/\/$/, ""),
  Dg = (e) => e.replace(/^\//, "");
function Ag(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (Ig(t)) return t;
  const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = Lg(e)), (t = Dg(t)), `${e}${n}${t}`;
}
var hc = (e) => [].concat(...e);
function Fg() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function Ug() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var mc = rt;
function Rp(e, t) {
  if (e === t || !((mc(e) && mc(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  const n = Object.keys(t),
    r = Object.keys(e);
  let i = n.length === r.length;
  const o = Array.isArray(t) ? [] : {};
  for (const l of n) (o[l] = Rp(e[l], t[l])), i && (i = e[l] === o[l]);
  return i ? e : o;
}
var yc = (...e) => fetch(...e),
  $g = (e) => e.status >= 200 && e.status <= 299,
  Qg = (e) => /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
function vc(e) {
  if (!rt(e)) return e;
  const t = { ...e };
  for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n];
  return t;
}
function Bg({
  baseUrl: e,
  prepareHeaders: t = (y) => y,
  fetchFn: n = yc,
  paramsSerializer: r,
  isJsonContentType: i = Qg,
  jsonContentType: o = "application/json",
  jsonReplacer: l,
  timeout: u,
  responseHandler: s,
  validateStatus: f,
  ...m
} = {}) {
  return (
    typeof fetch > "u" &&
      n === yc &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.",
      ),
    async (d, v) => {
      const {
        signal: g,
        getState: S,
        extra: w,
        endpoint: h,
        forced: c,
        type: a,
      } = v;
      let p,
        {
          url: E,
          headers: _ = new Headers(m.headers),
          params: k = void 0,
          responseHandler: C = s ?? "json",
          validateStatus: P = f ?? $g,
          timeout: x = u,
          ...N
        } = typeof d == "string" ? { url: d } : d,
        z = { ...m, signal: g, ...N };
      (_ = new Headers(vc(_))),
        (z.headers =
          (await t(_, {
            getState: S,
            extra: w,
            endpoint: h,
            forced: c,
            type: a,
          })) || _);
      const L = (A) =>
        typeof A == "object" &&
        (rt(A) || Array.isArray(A) || typeof A.toJSON == "function");
      if (
        (!z.headers.has("content-type") &&
          L(z.body) &&
          z.headers.set("content-type", o),
        L(z.body) && i(z.headers) && (z.body = JSON.stringify(z.body, l)),
        k)
      ) {
        const A = ~E.indexOf("?") ? "&" : "?",
          H = r ? r(k) : new URLSearchParams(vc(k));
        E += A + H;
      }
      E = Ag(e, E);
      const D = new Request(E, z);
      p = { request: new Request(E, z) };
      let W,
        re = !1,
        T =
          x &&
          setTimeout(() => {
            (re = !0), v.abort();
          }, x);
      try {
        W = await n(D);
      } catch (A) {
        return {
          error: {
            status: re ? "TIMEOUT_ERROR" : "FETCH_ERROR",
            error: String(A),
          },
          meta: p,
        };
      } finally {
        T && clearTimeout(T);
      }
      const I = W.clone();
      p.response = I;
      let M,
        F = "";
      try {
        let A;
        if (
          (await Promise.all([
            y(W, C).then(
              (H) => (M = H),
              (H) => (A = H),
            ),
            I.text().then(
              (H) => (F = H),
              () => {},
            ),
          ]),
          A)
        )
          throw A;
      } catch (A) {
        return {
          error: {
            status: "PARSING_ERROR",
            originalStatus: W.status,
            data: F,
            error: String(A),
          },
          meta: p,
        };
      }
      return P(W, M)
        ? { data: M, meta: p }
        : { error: { status: W.status, data: M }, meta: p };
    }
  );
  async function y(d, v) {
    if (typeof v == "function") return v(d);
    if (
      (v === "content-type" && (v = i(d.headers) ? "json" : "text"),
      v === "json")
    ) {
      const g = await d.text();
      return g.length ? JSON.parse(g) : null;
    }
    return d.text();
  }
}
var gc = class {
    constructor(e, t = void 0) {
      (this.value = e), (this.meta = t);
    }
  },
  zs = we("__rtkq/focused"),
  Pp = we("__rtkq/unfocused"),
  js = we("__rtkq/online"),
  Op = we("__rtkq/offline");
function Tp(e) {
  return e.type === "query";
}
function Wg(e) {
  return e.type === "mutation";
}
function Is(e, t, n, r, i, o) {
  return Vg(e)
    ? e(t, n, r, i).map(xu).map(o)
    : Array.isArray(e)
      ? e.map(xu).map(o)
      : [];
}
function Vg(e) {
  return typeof e == "function";
}
function xu(e) {
  return typeof e == "string" ? { type: e } : e;
}
function Sc(e) {
  return e != null;
}
function jn(e) {
  let t = 0;
  for (const n in e) t++;
  return t;
}
function Hg(e, t) {
  return e.catch(t);
}
var Wr = Symbol("forceQueryFn"),
  Ru = (e) => typeof e[Wr] == "function";
function qg({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: r,
  context: i,
}) {
  const o = new Map(),
    l = new Map(),
    {
      unsubscribeQueryResult: u,
      removeMutationResult: s,
      updateSubscriptionOptions: f,
    } = r.internalActions;
  return {
    buildInitiateQuery: g,
    buildInitiateMutation: S,
    getRunningQueryThunk: m,
    getRunningMutationThunk: y,
    getRunningQueriesThunk: d,
    getRunningMutationsThunk: v,
  };
  function m(w, h) {
    return (c) => {
      var E;
      const a = i.endpointDefinitions[w],
        p = e({ queryArgs: h, endpointDefinition: a, endpointName: w });
      return (E = o.get(c)) == null ? void 0 : E[p];
    };
  }
  function y(w, h) {
    return (c) => {
      var a;
      return (a = l.get(c)) == null ? void 0 : a[h];
    };
  }
  function d() {
    return (w) => Object.values(o.get(w) || {}).filter(Sc);
  }
  function v() {
    return (w) => Object.values(l.get(w) || {}).filter(Sc);
  }
  function g(w, h) {
    const c =
      (
        a,
        {
          subscribe: p = !0,
          forceRefetch: E,
          subscriptionOptions: _,
          [Wr]: k,
          ...C
        } = {},
      ) =>
      (P, x) => {
        var A;
        const N = e({ queryArgs: a, endpointDefinition: h, endpointName: w }),
          z = t({
            ...C,
            type: "query",
            subscribe: p,
            forceRefetch: E,
            subscriptionOptions: _,
            endpointName: w,
            originalArgs: a,
            queryCacheKey: N,
            [Wr]: k,
          }),
          L = r.endpoints[w].select(a),
          D = P(z),
          Q = L(x()),
          { requestId: W, abort: re } = D,
          T = Q.requestId !== W,
          I = (A = o.get(P)) == null ? void 0 : A[N],
          M = () => L(x()),
          F = Object.assign(
            k
              ? D.then(M)
              : T && !I
                ? Promise.resolve(Q)
                : Promise.all([I, D]).then(M),
            {
              arg: a,
              requestId: W,
              subscriptionOptions: _,
              queryCacheKey: N,
              abort: re,
              async unwrap() {
                const H = await F;
                if (H.isError) throw H.error;
                return H.data;
              },
              refetch: () => P(c(a, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                p && P(u({ queryCacheKey: N, requestId: W }));
              },
              updateSubscriptionOptions(H) {
                (F.subscriptionOptions = H),
                  P(
                    f({
                      endpointName: w,
                      requestId: W,
                      queryCacheKey: N,
                      options: H,
                    }),
                  );
              },
            },
          );
        if (!I && !T && !k) {
          const H = o.get(P) || {};
          (H[N] = F),
            o.set(P, H),
            F.then(() => {
              delete H[N], jn(H) || o.delete(P);
            });
        }
        return F;
      };
    return c;
  }
  function S(w) {
    return (h, { track: c = !0, fixedCacheKey: a } = {}) =>
      (p, E) => {
        const _ = n({
            type: "mutation",
            endpointName: w,
            originalArgs: h,
            track: c,
            fixedCacheKey: a,
          }),
          k = p(_),
          { requestId: C, abort: P, unwrap: x } = k,
          N = Hg(
            k.unwrap().then((Q) => ({ data: Q })),
            (Q) => ({ error: Q }),
          ),
          z = () => {
            p(s({ requestId: C, fixedCacheKey: a }));
          },
          L = Object.assign(N, {
            arg: k.arg,
            requestId: C,
            abort: P,
            unwrap: x,
            reset: z,
          }),
          D = l.get(p) || {};
        return (
          l.set(p, D),
          (D[C] = L),
          L.then(() => {
            delete D[C], jn(D) || l.delete(p);
          }),
          a &&
            ((D[a] = L),
            L.then(() => {
              D[a] === L && (delete D[a], jn(D) || l.delete(p));
            })),
          L
        );
      };
  }
}
function wc(e) {
  return e;
}
function Kg({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: n },
  serializeQueryArgs: r,
  api: i,
  assertTagType: o,
}) {
  const l = (c, a, p, E) => (_, k) => {
      const C = n[c],
        P = r({ queryArgs: a, endpointDefinition: C, endpointName: c });
      if (
        (_(
          i.internalActions.queryResultPatched({
            queryCacheKey: P,
            patches: p,
          }),
        ),
        !E)
      )
        return;
      const x = i.endpoints[c].select(a)(k()),
        N = Is(C.providesTags, x.data, void 0, a, {}, o);
      _(
        i.internalActions.updateProvidedBy({
          queryCacheKey: P,
          providedTags: N,
        }),
      );
    },
    u =
      (c, a, p, E = !0) =>
      (_, k) => {
        const P = i.endpoints[c].select(a)(k());
        let x = {
          patches: [],
          inversePatches: [],
          undo: () => _(i.util.patchQueryData(c, a, x.inversePatches, E)),
        };
        if (P.status === "uninitialized") return x;
        let N;
        if ("data" in P)
          if (Je(P.data)) {
            const [z, L, D] = gp(P.data, p);
            x.patches.push(...L), x.inversePatches.push(...D), (N = z);
          } else
            (N = p(P.data)),
              x.patches.push({ op: "replace", path: [], value: N }),
              x.inversePatches.push({ op: "replace", path: [], value: P.data });
        return _(i.util.patchQueryData(c, a, x.patches, E)), x;
      },
    s = (c, a, p) => (E) =>
      E(
        i.endpoints[c].initiate(a, {
          subscribe: !1,
          forceRefetch: !0,
          [Wr]: () => ({ data: p }),
        }),
      ),
    f = async (
      c,
      {
        signal: a,
        abort: p,
        rejectWithValue: E,
        fulfillWithValue: _,
        dispatch: k,
        getState: C,
        extra: P,
      },
    ) => {
      const x = n[c.endpointName];
      try {
        let N = wc,
          z;
        const L = {
            signal: a,
            abort: p,
            dispatch: k,
            getState: C,
            extra: P,
            endpoint: c.endpointName,
            type: c.type,
            forced: c.type === "query" ? m(c, C()) : void 0,
          },
          D = c.type === "query" ? c[Wr] : void 0;
        if (
          (D
            ? (z = D())
            : x.query
              ? ((z = await t(x.query(c.originalArgs), L, x.extraOptions)),
                x.transformResponse && (N = x.transformResponse))
              : (z = await x.queryFn(c.originalArgs, L, x.extraOptions, (Q) =>
                  t(Q, L, x.extraOptions),
                )),
          typeof process < "u",
          z.error)
        )
          throw new gc(z.error, z.meta);
        return _(await N(z.data, z.meta, c.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: z.meta,
          [Rn]: !0,
        });
      } catch (N) {
        let z = N;
        if (z instanceof gc) {
          let L = wc;
          x.query && x.transformErrorResponse && (L = x.transformErrorResponse);
          try {
            return E(await L(z.value, z.meta, c.originalArgs), {
              baseQueryMeta: z.meta,
              [Rn]: !0,
            });
          } catch (D) {
            z = D;
          }
        }
        throw (typeof process < "u", console.error(z), z);
      }
    };
  function m(c, a) {
    var C, P, x;
    const p =
        (P = (C = a[e]) == null ? void 0 : C.queries) == null
          ? void 0
          : P[c.queryCacheKey],
      E = (x = a[e]) == null ? void 0 : x.config.refetchOnMountOrArgChange,
      _ = p == null ? void 0 : p.fulfilledTimeStamp,
      k = c.forceRefetch ?? (c.subscribe && E);
    return k ? k === !0 || (Number(new Date()) - Number(_)) / 1e3 >= k : !1;
  }
  const y = pc(`${e}/executeQuery`, f, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [Rn]: !0 };
      },
      condition(c, { getState: a }) {
        var x, N, z;
        const p = a(),
          E =
            (N = (x = p[e]) == null ? void 0 : x.queries) == null
              ? void 0
              : N[c.queryCacheKey],
          _ = E == null ? void 0 : E.fulfilledTimeStamp,
          k = c.originalArgs,
          C = E == null ? void 0 : E.originalArgs,
          P = n[c.endpointName];
        return Ru(c)
          ? !0
          : (E == null ? void 0 : E.status) === "pending"
            ? !1
            : m(c, p) ||
                (Tp(P) &&
                  (z = P == null ? void 0 : P.forceRefetch) != null &&
                  z.call(P, {
                    currentArg: k,
                    previousArg: C,
                    endpointState: E,
                    state: p,
                  }))
              ? !0
              : !_;
      },
      dispatchConditionRejection: !0,
    }),
    d = pc(`${e}/executeMutation`, f, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [Rn]: !0 };
      },
    }),
    v = (c) => "force" in c,
    g = (c) => "ifOlderThan" in c,
    S = (c, a, p) => (E, _) => {
      const k = v(p) && p.force,
        C = g(p) && p.ifOlderThan,
        P = (N = !0) => {
          const z = { forceRefetch: N, isPrefetch: !0 };
          return i.endpoints[c].initiate(a, z);
        },
        x = i.endpoints[c].select(a)(_());
      if (k) E(P());
      else if (C) {
        const N = x == null ? void 0 : x.fulfilledTimeStamp;
        if (!N) {
          E(P());
          return;
        }
        (Number(new Date()) - Number(new Date(N))) / 1e3 >= C && E(P());
      } else E(P(!1));
    };
  function w(c) {
    return (a) => {
      var p, E;
      return (
        ((E = (p = a == null ? void 0 : a.meta) == null ? void 0 : p.arg) ==
        null
          ? void 0
          : E.endpointName) === c
      );
    };
  }
  function h(c, a) {
    return {
      matchPending: Sr(Ns(c), w(a)),
      matchFulfilled: Sr(Dt(c), w(a)),
      matchRejected: Sr(Bn(c), w(a)),
    };
  }
  return {
    queryThunk: y,
    mutationThunk: d,
    prefetch: S,
    updateQueryData: u,
    upsertQueryData: s,
    patchQueryData: l,
    buildMatchThunkActions: h,
  };
}
function Np(e, t, n, r) {
  return Is(
    n[e.meta.arg.endpointName][t],
    Dt(e) ? e.payload : void 0,
    Io(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    r,
  );
}
function ki(e, t, n) {
  const r = e[t];
  r && n(r);
}
function Vr(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Ec(e, t, n) {
  const r = e[Vr(t)];
  r && n(r);
}
var nr = {};
function Yg({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  context: {
    endpointDefinitions: r,
    apiUid: i,
    extractRehydrationInfo: o,
    hasRehydrationInfo: l,
  },
  assertTagType: u,
  config: s,
}) {
  const f = we(`${e}/resetApiState`),
    m = fn({
      name: `${e}/queries`,
      initialState: nr,
      reducers: {
        removeQueryResult: {
          reducer(a, { payload: { queryCacheKey: p } }) {
            delete a[p];
          },
          prepare: tr(),
        },
        queryResultPatched: {
          reducer(a, { payload: { queryCacheKey: p, patches: E } }) {
            ki(a, p, (_) => {
              _.data = uc(_.data, E.concat());
            });
          },
          prepare: tr(),
        },
      },
      extraReducers(a) {
        a.addCase(t.pending, (p, { meta: E, meta: { arg: _ } }) => {
          var C;
          const k = Ru(_);
          p[(C = _.queryCacheKey)] ??
            (p[C] = { status: "uninitialized", endpointName: _.endpointName }),
            ki(p, _.queryCacheKey, (P) => {
              (P.status = "pending"),
                (P.requestId = k && P.requestId ? P.requestId : E.requestId),
                _.originalArgs !== void 0 && (P.originalArgs = _.originalArgs),
                (P.startedTimeStamp = E.startedTimeStamp);
            });
        })
          .addCase(t.fulfilled, (p, { meta: E, payload: _ }) => {
            ki(p, E.arg.queryCacheKey, (k) => {
              if (k.requestId !== E.requestId && !Ru(E.arg)) return;
              const { merge: C } = r[E.arg.endpointName];
              if (((k.status = "fulfilled"), C))
                if (k.data !== void 0) {
                  const {
                    fulfilledTimeStamp: P,
                    arg: x,
                    baseQueryMeta: N,
                    requestId: z,
                  } = E;
                  let L = ei(k.data, (D) =>
                    C(D, _, {
                      arg: x.originalArgs,
                      baseQueryMeta: N,
                      fulfilledTimeStamp: P,
                      requestId: z,
                    }),
                  );
                  k.data = L;
                } else k.data = _;
              else
                k.data =
                  r[E.arg.endpointName].structuralSharing ?? !0
                    ? Rp(Ge(k.data) ? Lv(k.data) : k.data, _)
                    : _;
              delete k.error, (k.fulfilledTimeStamp = E.fulfilledTimeStamp);
            });
          })
          .addCase(
            t.rejected,
            (
              p,
              {
                meta: { condition: E, arg: _, requestId: k },
                error: C,
                payload: P,
              },
            ) => {
              ki(p, _.queryCacheKey, (x) => {
                if (!E) {
                  if (x.requestId !== k) return;
                  (x.status = "rejected"), (x.error = P ?? C);
                }
              });
            },
          )
          .addMatcher(l, (p, E) => {
            const { queries: _ } = o(E);
            for (const [k, C] of Object.entries(_))
              ((C == null ? void 0 : C.status) === "fulfilled" ||
                (C == null ? void 0 : C.status) === "rejected") &&
                (p[k] = C);
          });
      },
    }),
    y = fn({
      name: `${e}/mutations`,
      initialState: nr,
      reducers: {
        removeMutationResult: {
          reducer(a, { payload: p }) {
            const E = Vr(p);
            E in a && delete a[E];
          },
          prepare: tr(),
        },
      },
      extraReducers(a) {
        a.addCase(
          n.pending,
          (
            p,
            { meta: E, meta: { requestId: _, arg: k, startedTimeStamp: C } },
          ) => {
            k.track &&
              (p[Vr(E)] = {
                requestId: _,
                status: "pending",
                endpointName: k.endpointName,
                startedTimeStamp: C,
              });
          },
        )
          .addCase(n.fulfilled, (p, { payload: E, meta: _ }) => {
            _.arg.track &&
              Ec(p, _, (k) => {
                k.requestId === _.requestId &&
                  ((k.status = "fulfilled"),
                  (k.data = E),
                  (k.fulfilledTimeStamp = _.fulfilledTimeStamp));
              });
          })
          .addCase(n.rejected, (p, { payload: E, error: _, meta: k }) => {
            k.arg.track &&
              Ec(p, k, (C) => {
                C.requestId === k.requestId &&
                  ((C.status = "rejected"), (C.error = E ?? _));
              });
          })
          .addMatcher(l, (p, E) => {
            const { mutations: _ } = o(E);
            for (const [k, C] of Object.entries(_))
              ((C == null ? void 0 : C.status) === "fulfilled" ||
                (C == null ? void 0 : C.status) === "rejected") &&
                k !== (C == null ? void 0 : C.requestId) &&
                (p[k] = C);
          });
      },
    }),
    d = fn({
      name: `${e}/invalidation`,
      initialState: nr,
      reducers: {
        updateProvidedBy: {
          reducer(a, p) {
            var k, C;
            const { queryCacheKey: E, providedTags: _ } = p.payload;
            for (const P of Object.values(a))
              for (const x of Object.values(P)) {
                const N = x.indexOf(E);
                N !== -1 && x.splice(N, 1);
              }
            for (const { type: P, id: x } of _) {
              const N =
                (k = a[P] ?? (a[P] = {}))[(C = x || "__internal_without_id")] ??
                (k[C] = []);
              N.includes(E) || N.push(E);
            }
          },
          prepare: tr(),
        },
      },
      extraReducers(a) {
        a.addCase(
          m.actions.removeQueryResult,
          (p, { payload: { queryCacheKey: E } }) => {
            for (const _ of Object.values(p))
              for (const k of Object.values(_)) {
                const C = k.indexOf(E);
                C !== -1 && k.splice(C, 1);
              }
          },
        )
          .addMatcher(l, (p, E) => {
            var k, C;
            const { provided: _ } = o(E);
            for (const [P, x] of Object.entries(_))
              for (const [N, z] of Object.entries(x)) {
                const L =
                  (k = p[P] ?? (p[P] = {}))[
                    (C = N || "__internal_without_id")
                  ] ?? (k[C] = []);
                for (const D of z) L.includes(D) || L.push(D);
              }
          })
          .addMatcher(Lt(Dt(t), Io(t)), (p, E) => {
            const _ = Np(E, "providesTags", r, u),
              { queryCacheKey: k } = E.meta.arg;
            d.caseReducers.updateProvidedBy(
              p,
              d.actions.updateProvidedBy({ queryCacheKey: k, providedTags: _ }),
            );
          });
      },
    }),
    v = fn({
      name: `${e}/subscriptions`,
      initialState: nr,
      reducers: {
        updateSubscriptionOptions(a, p) {},
        unsubscribeQueryResult(a, p) {},
        internal_getRTKQSubscriptions() {},
      },
    }),
    g = fn({
      name: `${e}/internalSubscriptions`,
      initialState: nr,
      reducers: {
        subscriptionsUpdated: {
          reducer(a, p) {
            return uc(a, p.payload);
          },
          prepare: tr(),
        },
      },
    }),
    S = fn({
      name: `${e}/config`,
      initialState: {
        online: Fg(),
        focused: Ug(),
        middlewareRegistered: !1,
        ...s,
      },
      reducers: {
        middlewareRegistered(a, { payload: p }) {
          a.middlewareRegistered =
            a.middlewareRegistered === "conflict" || i !== p ? "conflict" : !0;
        },
      },
      extraReducers: (a) => {
        a.addCase(js, (p) => {
          p.online = !0;
        })
          .addCase(Op, (p) => {
            p.online = !1;
          })
          .addCase(zs, (p) => {
            p.focused = !0;
          })
          .addCase(Pp, (p) => {
            p.focused = !1;
          })
          .addMatcher(l, (p) => ({ ...p }));
      },
    }),
    w = cp({
      queries: m.reducer,
      mutations: y.reducer,
      provided: d.reducer,
      subscriptions: g.reducer,
      config: S.reducer,
    }),
    h = (a, p) => w(f.match(p) ? void 0 : a, p),
    c = {
      ...S.actions,
      ...m.actions,
      ...v.actions,
      ...g.actions,
      ...y.actions,
      ...d.actions,
      resetApiState: f,
    };
  return { reducer: h, actions: c };
}
var Xt = Symbol.for("RTKQ/skipToken"),
  Mp = { status: "uninitialized" },
  kc = ei(Mp, () => {}),
  _c = ei(Mp, () => {});
function Xg({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
  const r = (y) => kc,
    i = (y) => _c;
  return {
    buildQuerySelector: u,
    buildMutationSelector: s,
    selectInvalidatedBy: f,
    selectCachedArgsForQuery: m,
  };
  function o(y) {
    return { ...y, ...jg(y.status) };
  }
  function l(y) {
    return y[t];
  }
  function u(y, d) {
    return (v) => {
      const g = e({ queryArgs: v, endpointDefinition: d, endpointName: y });
      return n(
        v === Xt
          ? r
          : (h) => {
              var c, a;
              return (
                ((a = (c = l(h)) == null ? void 0 : c.queries) == null
                  ? void 0
                  : a[g]) ?? kc
              );
            },
        o,
      );
    };
  }
  function s() {
    return (y) => {
      let d;
      return (
        typeof y == "object" ? (d = Vr(y) ?? Xt) : (d = y),
        n(
          d === Xt
            ? i
            : (S) => {
                var w, h;
                return (
                  ((h = (w = l(S)) == null ? void 0 : w.mutations) == null
                    ? void 0
                    : h[d]) ?? _c
                );
              },
          o,
        )
      );
    };
  }
  function f(y, d) {
    const v = y[t],
      g = new Set();
    for (const S of d.map(xu)) {
      const w = v.provided[S.type];
      if (!w) continue;
      let h = (S.id !== void 0 ? w[S.id] : hc(Object.values(w))) ?? [];
      for (const c of h) g.add(c);
    }
    return hc(
      Array.from(g.values()).map((S) => {
        const w = v.queries[S];
        return w
          ? [
              {
                queryCacheKey: S,
                endpointName: w.endpointName,
                originalArgs: w.originalArgs,
              },
            ]
          : [];
      }),
    );
  }
  function m(y, d) {
    return Object.values(y[t].queries)
      .filter(
        (v) =>
          (v == null ? void 0 : v.endpointName) === d &&
          v.status !== "uninitialized",
      )
      .map((v) => v.originalArgs);
  }
}
var dn = WeakMap ? new WeakMap() : void 0,
  Cc = ({ endpointName: e, queryArgs: t }) => {
    let n = "";
    const r = dn == null ? void 0 : dn.get(t);
    if (typeof r == "string") n = r;
    else {
      const i = JSON.stringify(t, (o, l) =>
        rt(l)
          ? Object.keys(l)
              .sort()
              .reduce((u, s) => ((u[s] = l[s]), u), {})
          : l,
      );
      rt(t) && (dn == null || dn.set(t, i)), (n = i);
    }
    return `${e}(${n})`;
  };
function Gg(...e) {
  return function (n) {
    const r = Br((f) => {
        var m;
        return (m = n.extractRehydrationInfo) == null
          ? void 0
          : m.call(n, f, { reducerPath: n.reducerPath ?? "api" });
      }),
      i = {
        reducerPath: "api",
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: "delayed",
        ...n,
        extractRehydrationInfo: r,
        serializeQueryArgs(f) {
          let m = Cc;
          if ("serializeQueryArgs" in f.endpointDefinition) {
            const y = f.endpointDefinition.serializeQueryArgs;
            m = (d) => {
              const v = y(d);
              return typeof v == "string" ? v : Cc({ ...d, queryArgs: v });
            };
          } else n.serializeQueryArgs && (m = n.serializeQueryArgs);
          return m(f);
        },
        tagTypes: [...(n.tagTypes || [])],
      },
      o = {
        endpointDefinitions: {},
        batch(f) {
          f();
        },
        apiUid: Ts(),
        extractRehydrationInfo: r,
        hasRehydrationInfo: Br((f) => r(f) != null),
      },
      l = {
        injectEndpoints: s,
        enhanceEndpoints({ addTagTypes: f, endpoints: m }) {
          if (f)
            for (const y of f) i.tagTypes.includes(y) || i.tagTypes.push(y);
          if (m)
            for (const [y, d] of Object.entries(m))
              typeof d == "function"
                ? d(o.endpointDefinitions[y])
                : Object.assign(o.endpointDefinitions[y] || {}, d);
          return l;
        },
      },
      u = e.map((f) => f.init(l, i, o));
    function s(f) {
      const m = f.endpoints({
        query: (y) => ({ ...y, type: "query" }),
        mutation: (y) => ({ ...y, type: "mutation" }),
      });
      for (const [y, d] of Object.entries(m)) {
        if (f.overrideExisting !== !0 && y in o.endpointDefinitions) {
          if (f.overrideExisting === "throw") throw new Error(ye(39));
          typeof process < "u";
          continue;
        }
        o.endpointDefinitions[y] = d;
        for (const v of u) v.injectEndpoint(y, d);
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: n.endpoints });
  };
}
function Jg(e) {
  for (let t in e) return !1;
  return !0;
}
var Zg = 2147483647 / 1e3 - 1,
  bg = ({ reducerPath: e, api: t, context: n, internalState: r }) => {
    const { removeQueryResult: i, unsubscribeQueryResult: o } =
      t.internalActions;
    function l(m) {
      const y = r.currentSubscriptions[m];
      return !!y && !Jg(y);
    }
    const u = {},
      s = (m, y, d) => {
        var v;
        if (o.match(m)) {
          const g = y.getState()[e],
            { queryCacheKey: S } = m.payload;
          f(
            S,
            (v = g.queries[S]) == null ? void 0 : v.endpointName,
            y,
            g.config,
          );
        }
        if (t.util.resetApiState.match(m))
          for (const [g, S] of Object.entries(u))
            S && clearTimeout(S), delete u[g];
        if (n.hasRehydrationInfo(m)) {
          const g = y.getState()[e],
            { queries: S } = n.extractRehydrationInfo(m);
          for (const [w, h] of Object.entries(S))
            f(w, h == null ? void 0 : h.endpointName, y, g.config);
        }
      };
    function f(m, y, d, v) {
      const g = n.endpointDefinitions[y],
        S = (g == null ? void 0 : g.keepUnusedDataFor) ?? v.keepUnusedDataFor;
      if (S === 1 / 0) return;
      const w = Math.max(0, Math.min(S, Zg));
      if (!l(m)) {
        const h = u[m];
        h && clearTimeout(h),
          (u[m] = setTimeout(() => {
            l(m) || d.dispatch(i({ queryCacheKey: m })), delete u[m];
          }, w * 1e3));
      }
    }
    return s;
  },
  e0 = ({
    reducerPath: e,
    context: t,
    context: { endpointDefinitions: n },
    mutationThunk: r,
    queryThunk: i,
    api: o,
    assertTagType: l,
    refetchQuery: u,
    internalState: s,
  }) => {
    const { removeQueryResult: f } = o.internalActions,
      m = Lt(Dt(r), Io(r)),
      y = Lt(Dt(r, i), Bn(r, i));
    let d = [];
    const v = (w, h) => {
      m(w)
        ? S(Np(w, "invalidatesTags", n, l), h)
        : y(w)
          ? S([], h)
          : o.util.invalidateTags.match(w) &&
            S(Is(w.payload, void 0, void 0, void 0, void 0, l), h);
    };
    function g(w) {
      var h, c;
      for (const a in w.queries)
        if (((h = w.queries[a]) == null ? void 0 : h.status) === "pending")
          return !0;
      for (const a in w.mutations)
        if (((c = w.mutations[a]) == null ? void 0 : c.status) === "pending")
          return !0;
      return !1;
    }
    function S(w, h) {
      const c = h.getState(),
        a = c[e];
      if ((d.push(...w), a.config.invalidationBehavior === "delayed" && g(a)))
        return;
      const p = d;
      if (((d = []), p.length === 0)) return;
      const E = o.util.selectInvalidatedBy(c, p);
      t.batch(() => {
        const _ = Array.from(E.values());
        for (const { queryCacheKey: k } of _) {
          const C = a.queries[k],
            P = s.currentSubscriptions[k] ?? {};
          C &&
            (jn(P) === 0
              ? h.dispatch(f({ queryCacheKey: k }))
              : C.status !== "uninitialized" && h.dispatch(u(C, k)));
        }
      });
    }
    return v;
  },
  t0 = ({
    reducerPath: e,
    queryThunk: t,
    api: n,
    refetchQuery: r,
    internalState: i,
  }) => {
    const o = {},
      l = (d, v) => {
        (n.internalActions.updateSubscriptionOptions.match(d) ||
          n.internalActions.unsubscribeQueryResult.match(d)) &&
          s(d.payload, v),
          (t.pending.match(d) || (t.rejected.match(d) && d.meta.condition)) &&
            s(d.meta.arg, v),
          (t.fulfilled.match(d) ||
            (t.rejected.match(d) && !d.meta.condition)) &&
            u(d.meta.arg, v),
          n.util.resetApiState.match(d) && m();
      };
    function u({ queryCacheKey: d }, v) {
      const g = v.getState()[e],
        S = g.queries[d],
        w = i.currentSubscriptions[d];
      if (!S || S.status === "uninitialized") return;
      const { lowestPollingInterval: h, skipPollingIfUnfocused: c } = y(w);
      if (!Number.isFinite(h)) return;
      const a = o[d];
      a != null && a.timeout && (clearTimeout(a.timeout), (a.timeout = void 0));
      const p = Date.now() + h;
      o[d] = {
        nextPollTimestamp: p,
        pollingInterval: h,
        timeout: setTimeout(() => {
          (g.config.focused || !c) && v.dispatch(r(S, d)),
            u({ queryCacheKey: d }, v);
        }, h),
      };
    }
    function s({ queryCacheKey: d }, v) {
      const S = v.getState()[e].queries[d],
        w = i.currentSubscriptions[d];
      if (!S || S.status === "uninitialized") return;
      const { lowestPollingInterval: h } = y(w);
      if (!Number.isFinite(h)) {
        f(d);
        return;
      }
      const c = o[d],
        a = Date.now() + h;
      (!c || a < c.nextPollTimestamp) && u({ queryCacheKey: d }, v);
    }
    function f(d) {
      const v = o[d];
      v != null && v.timeout && clearTimeout(v.timeout), delete o[d];
    }
    function m() {
      for (const d of Object.keys(o)) f(d);
    }
    function y(d = {}) {
      let v = !1,
        g = Number.POSITIVE_INFINITY;
      for (let S in d)
        d[S].pollingInterval &&
          ((g = Math.min(d[S].pollingInterval, g)),
          (v = d[S].skipPollingIfUnfocused || v));
      return { lowestPollingInterval: g, skipPollingIfUnfocused: v };
    }
    return l;
  },
  n0 = ({
    reducerPath: e,
    context: t,
    api: n,
    refetchQuery: r,
    internalState: i,
  }) => {
    const { removeQueryResult: o } = n.internalActions,
      l = (s, f) => {
        zs.match(s) && u(f, "refetchOnFocus"),
          js.match(s) && u(f, "refetchOnReconnect");
      };
    function u(s, f) {
      const m = s.getState()[e],
        y = m.queries,
        d = i.currentSubscriptions;
      t.batch(() => {
        for (const v of Object.keys(d)) {
          const g = y[v],
            S = d[v];
          if (!S || !g) continue;
          (Object.values(S).some((h) => h[f] === !0) ||
            (Object.values(S).every((h) => h[f] === void 0) && m.config[f])) &&
            (jn(S) === 0
              ? s.dispatch(o({ queryCacheKey: v }))
              : g.status !== "uninitialized" && s.dispatch(r(g, v)));
        }
      });
    }
    return l;
  },
  xc = new Error("Promise never resolved before cacheEntryRemoved."),
  r0 = ({
    api: e,
    reducerPath: t,
    context: n,
    queryThunk: r,
    mutationThunk: i,
    internalState: o,
  }) => {
    const l = Cu(r),
      u = Cu(i),
      s = Dt(r, i),
      f = {},
      m = (v, g, S) => {
        const w = y(v);
        if (r.pending.match(v)) {
          const h = S[t].queries[w],
            c = g.getState()[t].queries[w];
          !h &&
            c &&
            d(
              v.meta.arg.endpointName,
              v.meta.arg.originalArgs,
              w,
              g,
              v.meta.requestId,
            );
        } else if (i.pending.match(v))
          g.getState()[t].mutations[w] &&
            d(
              v.meta.arg.endpointName,
              v.meta.arg.originalArgs,
              w,
              g,
              v.meta.requestId,
            );
        else if (s(v)) {
          const h = f[w];
          h != null &&
            h.valueResolved &&
            (h.valueResolved({ data: v.payload, meta: v.meta.baseQueryMeta }),
            delete h.valueResolved);
        } else if (
          e.internalActions.removeQueryResult.match(v) ||
          e.internalActions.removeMutationResult.match(v)
        ) {
          const h = f[w];
          h && (delete f[w], h.cacheEntryRemoved());
        } else if (e.util.resetApiState.match(v))
          for (const [h, c] of Object.entries(f))
            delete f[h], c.cacheEntryRemoved();
      };
    function y(v) {
      return l(v)
        ? v.meta.arg.queryCacheKey
        : u(v)
          ? v.meta.arg.fixedCacheKey ?? v.meta.requestId
          : e.internalActions.removeQueryResult.match(v)
            ? v.payload.queryCacheKey
            : e.internalActions.removeMutationResult.match(v)
              ? Vr(v.payload)
              : "";
    }
    function d(v, g, S, w, h) {
      const c = n.endpointDefinitions[v],
        a = c == null ? void 0 : c.onCacheEntryAdded;
      if (!a) return;
      let p = {};
      const E = new Promise((N) => {
          p.cacheEntryRemoved = N;
        }),
        _ = Promise.race([
          new Promise((N) => {
            p.valueResolved = N;
          }),
          E.then(() => {
            throw xc;
          }),
        ]);
      _.catch(() => {}), (f[S] = p);
      const k = e.endpoints[v].select(c.type === "query" ? g : S),
        C = w.dispatch((N, z, L) => L),
        P = {
          ...w,
          getCacheEntry: () => k(w.getState()),
          requestId: h,
          extra: C,
          updateCachedData:
            c.type === "query"
              ? (N) => w.dispatch(e.util.updateQueryData(v, g, N))
              : void 0,
          cacheDataLoaded: _,
          cacheEntryRemoved: E,
        },
        x = a(g, P);
      Promise.resolve(x).catch((N) => {
        if (N !== xc) throw N;
      });
    }
    return m;
  },
  i0 = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
    const i = Ns(n, r),
      o = Bn(n, r),
      l = Dt(n, r),
      u = {};
    return (f, m) => {
      var y, d;
      if (i(f)) {
        const {
            requestId: v,
            arg: { endpointName: g, originalArgs: S },
          } = f.meta,
          w = t.endpointDefinitions[g],
          h = w == null ? void 0 : w.onQueryStarted;
        if (h) {
          const c = {},
            a = new Promise((k, C) => {
              (c.resolve = k), (c.reject = C);
            });
          a.catch(() => {}), (u[v] = c);
          const p = e.endpoints[g].select(w.type === "query" ? S : v),
            E = m.dispatch((k, C, P) => P),
            _ = {
              ...m,
              getCacheEntry: () => p(m.getState()),
              requestId: v,
              extra: E,
              updateCachedData:
                w.type === "query"
                  ? (k) => m.dispatch(e.util.updateQueryData(g, S, k))
                  : void 0,
              queryFulfilled: a,
            };
          h(S, _);
        }
      } else if (l(f)) {
        const { requestId: v, baseQueryMeta: g } = f.meta;
        (y = u[v]) == null || y.resolve({ data: f.payload, meta: g }),
          delete u[v];
      } else if (o(f)) {
        const { requestId: v, rejectedWithValue: g, baseQueryMeta: S } = f.meta;
        (d = u[v]) == null ||
          d.reject({
            error: f.payload ?? f.error,
            isUnhandledError: !g,
            meta: S,
          }),
          delete u[v];
      }
    };
  },
  o0 =
    ({ api: e, context: { apiUid: t }, reducerPath: n }) =>
    (r, i) => {
      e.util.resetApiState.match(r) &&
        i.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < "u";
    },
  l0 = ({ api: e, queryThunk: t, internalState: n }) => {
    const r = `${e.reducerPath}/subscriptions`;
    let i = null,
      o = null;
    const { updateSubscriptionOptions: l, unsubscribeQueryResult: u } =
        e.internalActions,
      s = (v, g) => {
        var w, h, c;
        if (l.match(g)) {
          const { queryCacheKey: a, requestId: p, options: E } = g.payload;
          return (
            (w = v == null ? void 0 : v[a]) != null && w[p] && (v[a][p] = E), !0
          );
        }
        if (u.match(g)) {
          const { queryCacheKey: a, requestId: p } = g.payload;
          return v[a] && delete v[a][p], !0;
        }
        if (e.internalActions.removeQueryResult.match(g))
          return delete v[g.payload.queryCacheKey], !0;
        if (t.pending.match(g)) {
          const {
              meta: { arg: a, requestId: p },
            } = g,
            E = v[(h = a.queryCacheKey)] ?? (v[h] = {});
          return (
            (E[`${p}_running`] = {}),
            a.subscribe && (E[p] = a.subscriptionOptions ?? E[p] ?? {}),
            !0
          );
        }
        let S = !1;
        if (t.fulfilled.match(g) || t.rejected.match(g)) {
          const a = v[g.meta.arg.queryCacheKey] || {},
            p = `${g.meta.requestId}_running`;
          S || (S = !!a[p]), delete a[p];
        }
        if (t.rejected.match(g)) {
          const {
            meta: { condition: a, arg: p, requestId: E },
          } = g;
          if (a && p.subscribe) {
            const _ = v[(c = p.queryCacheKey)] ?? (v[c] = {});
            (_[E] = p.subscriptionOptions ?? _[E] ?? {}), (S = !0);
          }
        }
        return S;
      },
      f = () => n.currentSubscriptions,
      d = {
        getSubscriptions: f,
        getSubscriptionCount: (v) => {
          const S = f()[v] ?? {};
          return jn(S);
        },
        isRequestSubscribed: (v, g) => {
          var w;
          const S = f();
          return !!((w = S == null ? void 0 : S[v]) != null && w[g]);
        },
      };
    return (v, g) => {
      if (
        (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))),
        e.util.resetApiState.match(v))
      )
        return (i = n.currentSubscriptions = {}), (o = null), [!0, !1];
      if (e.internalActions.internal_getRTKQSubscriptions.match(v))
        return [!1, d];
      const S = s(n.currentSubscriptions, v);
      let w = !0;
      if (S) {
        o ||
          (o = setTimeout(() => {
            const a = JSON.parse(JSON.stringify(n.currentSubscriptions)),
              [, p] = gp(i, () => a);
            g.next(e.internalActions.subscriptionsUpdated(p)),
              (i = a),
              (o = null);
          }, 500));
        const h = typeof v.type == "string" && !!v.type.startsWith(r),
          c = t.rejected.match(v) && v.meta.condition && !!v.meta.arg.subscribe;
        w = !h && !c;
      }
      return [w, !1];
    };
  };
function u0(e) {
  const { reducerPath: t, queryThunk: n, api: r, context: i } = e,
    { apiUid: o } = i,
    l = { invalidateTags: we(`${t}/invalidateTags`) },
    u = (y) => y.type.startsWith(`${t}/`),
    s = [o0, bg, e0, t0, r0, i0];
  return {
    middleware: (y) => {
      let d = !1;
      const g = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: m,
          isThisApiSliceAction: u,
        },
        S = s.map((c) => c(g)),
        w = l0(g),
        h = n0(g);
      return (c) => (a) => {
        if (!fp(a)) return c(a);
        d || ((d = !0), y.dispatch(r.internalActions.middlewareRegistered(o)));
        const p = { ...y, next: c },
          E = y.getState(),
          [_, k] = w(a, p, E);
        let C;
        if (
          (_ ? (C = c(a)) : (C = k),
          y.getState()[t] && (h(a, p, E), u(a) || i.hasRehydrationInfo(a)))
        )
          for (let P of S) P(a, p, E);
        return C;
      };
    },
    actions: l,
  };
  function m(y, d, v = {}) {
    return n({
      type: "query",
      endpointName: y.endpointName,
      originalArgs: y.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: d,
      ...v,
    });
  }
}
function mt(e, ...t) {
  return Object.assign(e, ...t);
}
var Rc = Symbol(),
  s0 = ({ createSelector: e = Os } = {}) => ({
    name: Rc,
    init(
      t,
      {
        baseQuery: n,
        tagTypes: r,
        reducerPath: i,
        serializeQueryArgs: o,
        keepUnusedDataFor: l,
        refetchOnMountOrArgChange: u,
        refetchOnFocus: s,
        refetchOnReconnect: f,
        invalidationBehavior: m,
      },
      y,
    ) {
      Vv();
      const d = (T) => (typeof process < "u", T);
      Object.assign(t, {
        reducerPath: i,
        endpoints: {},
        internalActions: {
          onOnline: js,
          onOffline: Op,
          onFocus: zs,
          onFocusLost: Pp,
        },
        util: {},
      });
      const {
          queryThunk: v,
          mutationThunk: g,
          patchQueryData: S,
          updateQueryData: w,
          upsertQueryData: h,
          prefetch: c,
          buildMatchThunkActions: a,
        } = Kg({
          baseQuery: n,
          reducerPath: i,
          context: y,
          api: t,
          serializeQueryArgs: o,
          assertTagType: d,
        }),
        { reducer: p, actions: E } = Yg({
          context: y,
          queryThunk: v,
          mutationThunk: g,
          reducerPath: i,
          assertTagType: d,
          config: {
            refetchOnFocus: s,
            refetchOnReconnect: f,
            refetchOnMountOrArgChange: u,
            keepUnusedDataFor: l,
            reducerPath: i,
            invalidationBehavior: m,
          },
        });
      mt(t.util, {
        patchQueryData: S,
        updateQueryData: w,
        upsertQueryData: h,
        prefetch: c,
        resetApiState: E.resetApiState,
      }),
        mt(t.internalActions, E);
      const { middleware: _, actions: k } = u0({
        reducerPath: i,
        context: y,
        queryThunk: v,
        mutationThunk: g,
        api: t,
        assertTagType: d,
      });
      mt(t.util, k), mt(t, { reducer: p, middleware: _ });
      const {
        buildQuerySelector: C,
        buildMutationSelector: P,
        selectInvalidatedBy: x,
        selectCachedArgsForQuery: N,
      } = Xg({ serializeQueryArgs: o, reducerPath: i, createSelector: e });
      mt(t.util, { selectInvalidatedBy: x, selectCachedArgsForQuery: N });
      const {
        buildInitiateQuery: z,
        buildInitiateMutation: L,
        getRunningMutationThunk: D,
        getRunningMutationsThunk: Q,
        getRunningQueriesThunk: W,
        getRunningQueryThunk: re,
      } = qg({
        queryThunk: v,
        mutationThunk: g,
        api: t,
        serializeQueryArgs: o,
        context: y,
      });
      return (
        mt(t.util, {
          getRunningMutationThunk: D,
          getRunningMutationsThunk: Q,
          getRunningQueryThunk: re,
          getRunningQueriesThunk: W,
        }),
        {
          name: Rc,
          injectEndpoint(T, I) {
            var F;
            const M = t;
            (F = M.endpoints)[T] ?? (F[T] = {}),
              Tp(I)
                ? mt(
                    M.endpoints[T],
                    { name: T, select: C(T, I), initiate: z(T, I) },
                    a(v, T),
                  )
                : Wg(I) &&
                  mt(
                    M.endpoints[T],
                    { name: T, select: P(), initiate: L(T) },
                    a(g, T),
                  );
          },
        }
      );
    },
  });
function a0(e) {
  return e.type === "query";
}
function c0(e) {
  return e.type === "mutation";
}
function _i(e, ...t) {
  return Object.assign(e, ...t);
}
function ml(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var pn = WeakMap ? new WeakMap() : void 0,
  f0 = ({ endpointName: e, queryArgs: t }) => {
    let n = "";
    const r = pn == null ? void 0 : pn.get(t);
    if (typeof r == "string") n = r;
    else {
      const i = JSON.stringify(t, (o, l) =>
        rt(l)
          ? Object.keys(l)
              .sort()
              .reduce((u, s) => ((u[s] = l[s]), u), {})
          : l,
      );
      rt(t) && (pn == null || pn.set(t, i)), (n = i);
    }
    return `${e}(${n})`;
  },
  yl = Symbol();
function Pc(e, t, n, r) {
  const i = R.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == "object"
            ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
            : e,
      }),
      [e, t, n, r],
    ),
    o = R.useRef(i);
  return (
    R.useEffect(() => {
      o.current.serialized !== i.serialized && (o.current = i);
    }, [i]),
    o.current.serialized === i.serialized ? o.current.queryArgs : e
  );
}
function vl(e) {
  const t = R.useRef(e);
  return (
    R.useEffect(() => {
      vr(t.current, e) || (t.current = e);
    }, [e]),
    vr(t.current, e) ? t.current : e
  );
}
var d0 =
    typeof window < "u" && window.document && window.document.createElement
      ? R.useLayoutEffect
      : R.useEffect,
  p0 = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: xp.pending,
        }
      : e;
function h0({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: { useDispatch: n, useSelector: r, useStore: i },
    unstable__sideEffectsInRender: o,
    createSelector: l,
  },
  serializeQueryArgs: u,
  context: s,
}) {
  const f = o ? (g) => g() : R.useEffect;
  return { buildQueryHooks: d, buildMutationHook: v, usePrefetch: y };
  function m(g, S, w) {
    if (S != null && S.endpointName && g.isUninitialized) {
      const { endpointName: _ } = S,
        k = s.endpointDefinitions[_];
      u({
        queryArgs: S.originalArgs,
        endpointDefinition: k,
        endpointName: _,
      }) === u({ queryArgs: w, endpointDefinition: k, endpointName: _ }) &&
        (S = void 0);
    }
    let h = g.isSuccess ? g.data : S == null ? void 0 : S.data;
    h === void 0 && (h = g.data);
    const c = h !== void 0,
      a = g.isLoading,
      p = !c && a,
      E = g.isSuccess || (a && c);
    return {
      ...g,
      data: h,
      currentData: g.data,
      isFetching: a,
      isLoading: p,
      isSuccess: E,
    };
  }
  function y(g, S) {
    const w = n(),
      h = vl(S);
    return R.useCallback(
      (c, a) => w(e.util.prefetch(g, c, { ...h, ...a })),
      [g, w, h],
    );
  }
  function d(g) {
    const S = (
        c,
        {
          refetchOnReconnect: a,
          refetchOnFocus: p,
          refetchOnMountOrArgChange: E,
          skip: _ = !1,
          pollingInterval: k = 0,
          skipPollingIfUnfocused: C = !1,
        } = {},
      ) => {
        const { initiate: P } = e.endpoints[g],
          x = n(),
          N = R.useRef();
        if (!N.current) {
          const M = x(e.internalActions.internal_getRTKQSubscriptions());
          N.current = M;
        }
        const z = Pc(_ ? Xt : c, f0, s.endpointDefinitions[g], g),
          L = vl({
            refetchOnReconnect: a,
            refetchOnFocus: p,
            pollingInterval: k,
            skipPollingIfUnfocused: C,
          }),
          D = R.useRef(!1),
          Q = R.useRef();
        let { queryCacheKey: W, requestId: re } = Q.current || {},
          T = !1;
        W && re && (T = N.current.isRequestSubscribed(W, re));
        const I = !T && D.current;
        return (
          f(() => {
            D.current = T;
          }),
          f(() => {
            I && (Q.current = void 0);
          }, [I]),
          f(() => {
            var A;
            const M = Q.current;
            if ((typeof process < "u", z === Xt)) {
              M == null || M.unsubscribe(), (Q.current = void 0);
              return;
            }
            const F = (A = Q.current) == null ? void 0 : A.subscriptionOptions;
            if (!M || M.arg !== z) {
              M == null || M.unsubscribe();
              const H = x(P(z, { subscriptionOptions: L, forceRefetch: E }));
              Q.current = H;
            } else L !== F && M.updateSubscriptionOptions(L);
          }, [x, P, E, z, L, I]),
          R.useEffect(
            () => () => {
              var M;
              (M = Q.current) == null || M.unsubscribe(), (Q.current = void 0);
            },
            [],
          ),
          R.useMemo(
            () => ({
              refetch: () => {
                var M;
                if (!Q.current) throw new Error(ye(38));
                return (M = Q.current) == null ? void 0 : M.refetch();
              },
            }),
            [],
          )
        );
      },
      w = ({
        refetchOnReconnect: c,
        refetchOnFocus: a,
        pollingInterval: p = 0,
        skipPollingIfUnfocused: E = !1,
      } = {}) => {
        const { initiate: _ } = e.endpoints[g],
          k = n(),
          [C, P] = R.useState(yl),
          x = R.useRef(),
          N = vl({
            refetchOnReconnect: c,
            refetchOnFocus: a,
            pollingInterval: p,
            skipPollingIfUnfocused: E,
          });
        f(() => {
          var Q, W;
          const D = (Q = x.current) == null ? void 0 : Q.subscriptionOptions;
          N !== D &&
            ((W = x.current) == null || W.updateSubscriptionOptions(N));
        }, [N]);
        const z = R.useRef(N);
        f(() => {
          z.current = N;
        }, [N]);
        const L = R.useCallback(
          function (D, Q = !1) {
            let W;
            return (
              t(() => {
                var re;
                (re = x.current) == null || re.unsubscribe(),
                  (x.current = W =
                    k(
                      _(D, {
                        subscriptionOptions: z.current,
                        forceRefetch: !Q,
                      }),
                    )),
                  P(D);
              }),
              W
            );
          },
          [k, _],
        );
        return (
          R.useEffect(
            () => () => {
              var D;
              (D = x == null ? void 0 : x.current) == null || D.unsubscribe();
            },
            [],
          ),
          R.useEffect(() => {
            C !== yl && !x.current && L(C, !0);
          }, [C, L]),
          R.useMemo(() => [L, C], [L, C])
        );
      },
      h = (c, { skip: a = !1, selectFromResult: p } = {}) => {
        const { select: E } = e.endpoints[g],
          _ = Pc(a ? Xt : c, u, s.endpointDefinitions[g], g),
          k = R.useRef(),
          C = R.useMemo(
            () =>
              l([E(_), (L, D) => D, (L) => _], m, {
                memoizeOptions: { resultEqualityCheck: vr },
              }),
            [E, _],
          ),
          P = R.useMemo(
            () =>
              p
                ? l([C], p, {
                    devModeChecks: { identityFunctionCheck: "never" },
                  })
                : C,
            [C, p],
          ),
          x = r((L) => P(L, k.current), vr),
          N = i(),
          z = C(N.getState(), k.current);
        return (
          d0(() => {
            k.current = z;
          }, [z]),
          x
        );
      };
    return {
      useQueryState: h,
      useQuerySubscription: S,
      useLazyQuerySubscription: w,
      useLazyQuery(c) {
        const [a, p] = w(c),
          E = h(p, { ...c, skip: p === yl }),
          _ = R.useMemo(() => ({ lastArg: p }), [p]);
        return R.useMemo(() => [a, E, _], [a, E, _]);
      },
      useQuery(c, a) {
        const p = S(c, a),
          E = h(c, {
            selectFromResult: c === Xt || (a != null && a.skip) ? void 0 : p0,
            ...a,
          }),
          {
            data: _,
            status: k,
            isLoading: C,
            isSuccess: P,
            isError: x,
            error: N,
          } = E;
        return (
          R.useDebugValue({
            data: _,
            status: k,
            isLoading: C,
            isSuccess: P,
            isError: x,
            error: N,
          }),
          R.useMemo(() => ({ ...E, ...p }), [E, p])
        );
      },
    };
  }
  function v(g) {
    return ({ selectFromResult: S, fixedCacheKey: w } = {}) => {
      const { select: h, initiate: c } = e.endpoints[g],
        a = n(),
        [p, E] = R.useState();
      R.useEffect(
        () => () => {
          (p != null && p.arg.fixedCacheKey) || p == null || p.reset();
        },
        [p],
      );
      const _ = R.useCallback(
          function (F) {
            const A = a(c(F, { fixedCacheKey: w }));
            return E(A), A;
          },
          [a, c, w],
        ),
        { requestId: k } = p || {},
        C = R.useMemo(
          () =>
            h({
              fixedCacheKey: w,
              requestId: p == null ? void 0 : p.requestId,
            }),
          [w, p, h],
        ),
        P = R.useMemo(() => (S ? l([C], S) : C), [S, C]),
        x = r(P, vr),
        N = w == null ? (p == null ? void 0 : p.arg.originalArgs) : void 0,
        z = R.useCallback(() => {
          t(() => {
            p && E(void 0),
              w &&
                a(
                  e.internalActions.removeMutationResult({
                    requestId: k,
                    fixedCacheKey: w,
                  }),
                );
          });
        }, [a, w, p, k]),
        {
          endpointName: L,
          data: D,
          status: Q,
          isLoading: W,
          isSuccess: re,
          isError: T,
          error: I,
        } = x;
      R.useDebugValue({
        endpointName: L,
        data: D,
        status: Q,
        isLoading: W,
        isSuccess: re,
        isError: T,
        error: I,
      });
      const M = R.useMemo(
        () => ({ ...x, originalArgs: N, reset: z }),
        [x, N, z],
      );
      return R.useMemo(() => [_, M], [_, M]);
    };
  }
}
var m0 = Symbol(),
  y0 = ({
    batch: e = Ty,
    hooks: t = { useDispatch: Oy, useSelector: wy, useStore: Yd },
    createSelector: n = Os,
    unstable__sideEffectsInRender: r = !1,
    ...i
  } = {}) => ({
    name: m0,
    init(o, { serializeQueryArgs: l }, u) {
      const s = o,
        {
          buildQueryHooks: f,
          buildMutationHook: m,
          usePrefetch: y,
        } = h0({
          api: o,
          moduleOptions: {
            batch: e,
            hooks: t,
            unstable__sideEffectsInRender: r,
            createSelector: n,
          },
          serializeQueryArgs: l,
          context: u,
        });
      return (
        _i(s, { usePrefetch: y }),
        _i(u, { batch: e }),
        {
          injectEndpoint(d, v) {
            if (a0(v)) {
              const {
                useQuery: g,
                useLazyQuery: S,
                useLazyQuerySubscription: w,
                useQueryState: h,
                useQuerySubscription: c,
              } = f(d);
              _i(s.endpoints[d], {
                useQuery: g,
                useLazyQuery: S,
                useLazyQuerySubscription: w,
                useQueryState: h,
                useQuerySubscription: c,
              }),
                (o[`use${ml(d)}Query`] = g),
                (o[`useLazy${ml(d)}Query`] = S);
            } else if (c0(v)) {
              const g = m(d);
              _i(s.endpoints[d], { useMutation: g }),
                (o[`use${ml(d)}Mutation`] = g);
            }
          },
        }
      );
    },
  }),
  v0 = Gg(s0(), y0());
const gl = "https://pokeapi.co/api/v2/pokemon",
  Di = v0({
    baseQuery: Bg({ baseUrl: gl }),
    endpoints: (e) => ({
      getItem: e.query({
        query: ({ id: t }) => ({ method: "get", url: `${gl}/${t}` }),
      }),
      getItems: e.query({
        query: ({ limit: t, offset: n }) => (
          console.log("{ limit, offset }--->>>>>>", { limit: t, offset: n }),
          { method: "get", url: `${gl}?limit=${t}&offset=${n}` }
        ),
      }),
    }),
    reducerPath: "pokemonsApi",
  }),
  { useGetItemsQuery: g0, useGetItemQuery: S0 } = Di,
  Sl = 40,
  w0 = 700,
  E0 = 700,
  k0 = () => {
    const [e, t] = R.useState(0),
      [, n] = R.useState(!1),
      [r, i] = R.useState([]),
      [o, l] = R.useState(0),
      [u, s] = R.useState(20);
    console.log("fullData--->>>", r);
    const f = R.useMemo(() => 20, []),
      [m, y] = R.useState(0),
      d = R.useRef(null),
      v = rp(),
      { data: g = null, isFetching: S } = g0({ limit: f, offset: m });
    R.useEffect(() => {
      const c = Math.ceil(d.current.clientHeight / Sl);
      console.log("visibleRowCount-->>", c);
      const a = Math.max(0, Math.floor(e / Sl)),
        p = Math.min(a + c, r.length - 1);
      l(a), s(p);
    }, [e, r]),
      R.useEffect(() => {
        var c;
        ((c = g == null ? void 0 : g.results) == null ? void 0 : c.length) >
          0 && i((a) => [...a, ...g.results]);
      }, [g == null ? void 0 : g.results]),
      R.useLayoutEffect(() => {
        const c = d.current;
        if ((console.log("scrollElement===>>>", c), !c)) return;
        const a = () => {
          const p = c.scrollTop;
          t(p); //! обьединить юз эфекты нижний в верхний
        };
        return (
          a(),
          c.addEventListener("scroll", a),
          () => c.removeEventListener("scroll", a)
        );
      }, []),
      R.useEffect(() => {
        const c = d.current;
        if (!c) return;
        const a = () => {
          n(!0),
            c.clientHeight + c.scrollTop >= c.scrollHeight - E0 &&
              (n(!1), y((p) => p + f));
        };
        return (
          c.addEventListener("scroll", a),
          () => {
            c.removeEventListener("scroll", a);
          }
        );
      }, [f, m]);
    const w = R.useCallback(
      (c) => {
        v(`/pokemon/${c}`);
      },
      [v],
    );
    console.log("startIndex==>>>>", o), console.log("endIndex==>>>>", u);
    const h = R.useMemo(() => r.slice(o, u), [r, o, u]);
    return (
      console.log("pokemonsToRender==>>>", h),
      U.jsxs(U.Fragment, {
        children: [
          U.jsx("div", {
            children: U.jsx(up, {
              to: "/",
              children: U.jsx("img", { alt: "home", src: sp, title: "home" }),
            }),
          }),
          U.jsxs("div", {
            ref: d,
            style: {
              border: "3px solid red",
              height: w0,
              overflowY: "scroll",
              position: "relative",
            },
            children: [
              h == null
                ? void 0
                : h.map((c) =>
                    U.jsx(
                      "div",
                      {
                        style: {
                          backgroundColor: "white",
                          border: "1px solid blue",
                          boxSizing: "border-box",
                          color: "red",
                          height: Sl,
                          top: 0,
                          transform: `translateY(${c.offsetTop})px`,
                        },
                        onClick: () => {
                          w(c.name);
                        },
                        children: U.jsx("div", { children: c.name }),
                      },
                      c.name,
                    ),
                  ),
              S && U.jsx("div", { children: "Loading..." }),
            ],
          }),
        ],
      })
    );
  },
  _0 = () => {
    var n, r, i;
    const { id: e } = iv(),
      { data: t } = S0({ id: e });
    return U.jsxs(U.Fragment, {
      children: [
        U.jsx("div", {
          children: U.jsx(up, {
            to: "/pokemon",
            children: U.jsx("img", { alt: "home", src: sp, title: "home" }),
          }),
        }),
        U.jsx("div", {
          children: U.jsx("img", {
            alt: t == null ? void 0 : t.name,
            src:
              (n = t == null ? void 0 : t.sprites) == null
                ? void 0
                : n.front_default,
            style: { height: 400, width: 500 },
          }),
        }),
        U.jsxs("div", {
          children: [
            U.jsx("div", { children: "Сharacteristics" }),
            U.jsxs("div", {
              children: ["Name: ", t == null ? void 0 : t.name],
            }),
            U.jsxs("div", {
              children: ["Weight: ", t == null ? void 0 : t.weight],
            }),
            U.jsxs("div", {
              children: [
                "Types: ",
                (r = t == null ? void 0 : t.types) == null
                  ? void 0
                  : r.map((o) => o.type.name).join(", "),
              ],
            }),
            U.jsxs("div", {
              children: [
                "Abilities:",
                " ",
                (i = t == null ? void 0 : t.abilities) == null
                  ? void 0
                  : i.map((o) => o.ability.name).join(", "),
              ],
            }),
          ],
        }),
        U.jsxs("div", {
          children: [
            U.jsx("div", { children: "Stats" }),
            t == null
              ? void 0
              : t.stats.map((o) => {
                  var l, u;
                  return U.jsxs(
                    "div",
                    {
                      children: [
                        U.jsxs("div", {
                          children: [
                            (l = o == null ? void 0 : o.stat) == null
                              ? void 0
                              : l.name,
                            " ",
                          ],
                        }),
                        U.jsxs("div", {
                          children: [o == null ? void 0 : o.base_stat, " "],
                        }),
                      ],
                    },
                    (u = o == null ? void 0 : o.stat) == null ? void 0 : u.name,
                  );
                }),
          ],
        }),
      ],
    });
  },
  C0 = fg({
    middleware: (e) => e().concat(Di.middleware),
    reducer: { [Di.reducerPath]: Di.reducer },
  }),
  x0 = () =>
    U.jsx(Ry, {
      store: C0,
      children: U.jsx(Rv, {
        children: U.jsxs(Sv, {
          children: [
            U.jsx(mu, { element: U.jsx(k0, {}), path: "/pokemon" }),
            U.jsx(mu, { element: U.jsx(_0, {}), path: "/pokemon/:id" }),
          ],
        }),
      }),
    });
El.createRoot(document.getElementById("root")).render(
  U.jsx(Mu.StrictMode, { children: U.jsx(x0, {}) }),
);
