function $T(t, i) {
  for (var a = 0; a < i.length; a++) {
    const r = i[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in t)) {
          const u = Object.getOwnPropertyDescriptor(r, l);
          u && Object.defineProperty(t, l, u.get ? u : {
            enumerable: !0,
            get: () => r[l]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
    value: "Module"
  }))
}(function() {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver(l => {
    for (const u of l)
      if (u.type === "childList")
        for (const f of u.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function a(l) {
    const u = {};
    return l.integrity && (u.integrity = l.integrity), l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy), l
      .crossOrigin === "use-credentials" ? u.credentials = "include" : l.crossOrigin === "anonymous" ? u.credentials =
      "omit" : u.credentials = "same-origin", u
  }

  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = a(l);
    fetch(l.href, u)
  }
})();

function X0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var tf = {
    exports: {}
  },
  Ia = {};
var vy;

function IT() {
  if (vy) return Ia;
  vy = 1;
  var t = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");

  function a(r, l, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      u = {};
      for (var h in l) h !== "key" && (u[h] = l[h])
    } else u = l;
    return l = u.ref, {
      $$typeof: t,
      type: r,
      key: f,
      ref: l !== void 0 ? l : null,
      props: u
    }
  }
  return Ia.Fragment = i, Ia.jsx = a, Ia.jsxs = a, Ia
}
var xy;

function JT() {
  return xy || (xy = 1, tf.exports = IT()), tf.exports
}
var y = JT(),
  nf = {
    exports: {}
  },
  Ja = {},
  sf = {
    exports: {}
  },
  af = {};
var by;

function eA() {
  return by || (by = 1, (function(t) {
    function i(z, K) {
      var X = z.length;
      z.push(K);
      e: for (; 0 < X;) {
        var ee = X - 1 >>> 1,
          A = z[ee];
        if (0 < l(A, K)) z[ee] = K, z[X] = A, X = ee;
        else break e
      }
    }

    function a(z) {
      return z.length === 0 ? null : z[0]
    }

    function r(z) {
      if (z.length === 0) return null;
      var K = z[0],
        X = z.pop();
      if (X !== K) {
        z[0] = X;
        e: for (var ee = 0, A = z.length, Y = A >>> 1; ee < Y;) {
          var I = 2 * (ee + 1) - 1,
            $ = z[I],
            re = I + 1,
            de = z[re];
          if (0 > l($, X)) re < A && 0 > l(de, $) ? (z[ee] = de, z[re] = X, ee = re) : (z[ee] = $, z[I] = X,
            ee = I);
          else if (re < A && 0 > l(de, X)) z[ee] = de, z[re] = X, ee = re;
          else break e
        }
      }
      return K
    }

    function l(z, K) {
      var X = z.sortIndex - K.sortIndex;
      return X !== 0 ? X : z.id - K.id
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now()
      }
    } else {
      var f = Date,
        h = f.now();
      t.unstable_now = function() {
        return f.now() - h
      }
    }
    var p = [],
      m = [],
      g = 1,
      x = null,
      b = 3,
      T = !1,
      E = !1,
      C = !1,
      M = !1,
      j = typeof setTimeout == "function" ? setTimeout : null,
      _ = typeof clearTimeout == "function" ? clearTimeout : null,
      D = typeof setImmediate < "u" ? setImmediate : null;

    function k(z) {
      for (var K = a(m); K !== null;) {
        if (K.callback === null) r(m);
        else if (K.startTime <= z) r(m), K.sortIndex = K.expirationTime, i(p, K);
        else break;
        K = a(m)
      }
    }

    function P(z) {
      if (C = !1, k(z), !E)
        if (a(p) !== null) E = !0, F || (F = !0, ce());
        else {
          var K = a(m);
          K !== null && fe(P, K.startTime - z)
        }
    }
    var F = !1,
      Z = -1,
      H = 5,
      W = -1;

    function oe() {
      return M ? !0 : !(t.unstable_now() - W < H)
    }

    function pe() {
      if (M = !1, F) {
        var z = t.unstable_now();
        W = z;
        var K = !0;
        try {
          e: {
            E = !1,
            C && (C = !1, _(Z), Z = -1),
            T = !0;
            var X = b;
            try {
              t: {
                for (k(z), x = a(p); x !== null && !(x.expirationTime > z && oe());) {
                  var ee = x.callback;
                  if (typeof ee == "function") {
                    x.callback = null, b = x.priorityLevel;
                    var A = ee(x.expirationTime <= z);
                    if (z = t.unstable_now(), typeof A == "function") {
                      x.callback = A, k(z), K = !0;
                      break t
                    }
                    x === a(p) && r(p), k(z)
                  } else r(p);
                  x = a(p)
                }
                if (x !== null) K = !0;
                else {
                  var Y = a(m);
                  Y !== null && fe(P, Y.startTime - z), K = !1
                }
              }
              break e
            }
            finally {
              x = null, b = X, T = !1
            }
            K = void 0
          }
        }
        finally {
          K ? ce() : F = !1
        }
      }
    }
    var ce;
    if (typeof D == "function") ce = function() {
      D(pe)
    };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel,
        J = xe.port2;
      xe.port1.onmessage = pe, ce = function() {
        J.postMessage(null)
      }
    } else ce = function() {
      j(pe, 0)
    };

    function fe(z, K) {
      Z = j(function() {
        z(t.unstable_now())
      }, K)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t
      .unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t
      .unstable_cancelCallback = function(z) {
        z.callback = null
      }, t.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : H = 0 < z ? Math.floor(1e3 / z) : 5
      }, t.unstable_getCurrentPriorityLevel = function() {
        return b
      }, t.unstable_next = function(z) {
        switch (b) {
          case 1:
          case 2:
          case 3:
            var K = 3;
            break;
          default:
            K = b
        }
        var X = b;
        b = K;
        try {
          return z()
        } finally {
          b = X
        }
      }, t.unstable_requestPaint = function() {
        M = !0
      }, t.unstable_runWithPriority = function(z, K) {
        switch (z) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            z = 3
        }
        var X = b;
        b = z;
        try {
          return K()
        } finally {
          b = X
        }
      }, t.unstable_scheduleCallback = function(z, K, X) {
        var ee = t.unstable_now();
        switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? ee + X :
            ee) : X = ee, z) {
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
            A = 5e3
        }
        return A = X + A, z = {
          id: g++,
          callback: K,
          priorityLevel: z,
          startTime: X,
          expirationTime: A,
          sortIndex: -1
        }, X > ee ? (z.sortIndex = X, i(m, z), a(p) === null && z === a(m) && (C ? (_(Z), Z = -1) : C = !0, fe(
          P, X - ee))) : (z.sortIndex = A, i(p, z), E || T || (E = !0, F || (F = !0, ce()))), z
      }, t.unstable_shouldYield = oe, t.unstable_wrapCallback = function(z) {
        var K = b;
        return function() {
          var X = b;
          b = K;
          try {
            return z.apply(this, arguments)
          } finally {
            b = X
          }
        }
      }
  })(af)), af
}
var wy;

function tA() {
  return wy || (wy = 1, sf.exports = eA()), sf.exports
}
var rf = {
    exports: {}
  },
  ge = {};
var Sy;

function nA() {
  if (Sy) return ge;
  Sy = 1;
  var t = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    x = Symbol.iterator;

  function b(A) {
    return A === null || typeof A != "object" ? null : (A = x && A[x] || A["@@iterator"], typeof A == "function" ? A :
      null)
  }
  var T = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    E = Object.assign,
    C = {};

  function M(A, Y, I) {
    this.props = A, this.context = Y, this.refs = C, this.updater = I || T
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(A, Y) {
    if (typeof A != "object" && typeof A != "function" && A != null) throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, Y, "setState")
  }, M.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate")
  };

  function j() {}
  j.prototype = M.prototype;

  function _(A, Y, I) {
    this.props = A, this.context = Y, this.refs = C, this.updater = I || T
  }
  var D = _.prototype = new j;
  D.constructor = _, E(D, M.prototype), D.isPureReactComponent = !0;
  var k = Array.isArray,
    P = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null
    },
    F = Object.prototype.hasOwnProperty;

  function Z(A, Y, I, $, re, de) {
    return I = de.ref, {
      $$typeof: t,
      type: A,
      key: Y,
      ref: I !== void 0 ? I : null,
      props: de
    }
  }

  function H(A, Y) {
    return Z(A.type, Y, void 0, void 0, void 0, A.props)
  }

  function W(A) {
    return typeof A == "object" && A !== null && A.$$typeof === t
  }

  function oe(A) {
    var Y = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + A.replace(/[=:]/g, function(I) {
      return Y[I]
    })
  }
  var pe = /\/+/g;

  function ce(A, Y) {
    return typeof A == "object" && A !== null && A.key != null ? oe("" + A.key) : Y.toString(36)
  }

  function xe() {}

  function J(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(xe, xe) : (A.status = "pending", A.then(function(Y) {
            A.status === "pending" && (A.status = "fulfilled", A.value = Y)
          }, function(Y) {
            A.status === "pending" && (A.status = "rejected", A.reason = Y)
          })), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason
        }
    }
    throw A
  }

  function fe(A, Y, I, $, re) {
    var de = typeof A;
    (de === "undefined" || de === "boolean") && (A = null);
    var ae = !1;
    if (A === null) ae = !0;
    else switch (de) {
      case "bigint":
      case "string":
      case "number":
        ae = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case t:
          case i:
            ae = !0;
            break;
          case g:
            return ae = A._init, fe(ae(A._payload), Y, I, $, re)
        }
    }
    if (ae) return re = re(A), ae = $ === "" ? "." + ce(A, 0) : $, k(re) ? (I = "", ae != null && (I = ae.replace(pe,
      "$&/") + "/"), fe(re, Y, I, "", function(Me) {
      return Me
    })) : re != null && (W(re) && (re = H(re, I + (re.key == null || A && A.key === re.key ? "" : ("" + re.key)
      .replace(pe, "$&/") + "/") + ae)), Y.push(re)), 1;
    ae = 0;
    var Le = $ === "" ? "." : $ + ":";
    if (k(A))
      for (var Re = 0; Re < A.length; Re++) $ = A[Re], de = Le + ce($, Re), ae += fe($, Y, I, de, re);
    else if (Re = b(A), typeof Re == "function")
      for (A = Re.call(A), Re = 0; !($ = A.next()).done;) $ = $.value, de = Le + ce($, Re++), ae += fe($, Y, I, de, re);
    else if (de === "object") {
      if (typeof A.then == "function") return fe(J(A), Y, I, $, re);
      throw Y = String(A), Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ?
          "object with keys {" + Object.keys(A).join(", ") + "}" : Y) +
        "). If you meant to render a collection of children, use an array instead.")
    }
    return ae
  }

  function z(A, Y, I) {
    if (A == null) return A;
    var $ = [],
      re = 0;
    return fe(A, $, "", "", function(de) {
      return Y.call(I, de, re++)
    }), $
  }

  function K(A) {
    if (A._status === -1) {
      var Y = A._result;
      Y = Y(), Y.then(function(I) {
        (A._status === 0 || A._status === -1) && (A._status = 1, A._result = I)
      }, function(I) {
        (A._status === 0 || A._status === -1) && (A._status = 2, A._result = I)
      }), A._status === -1 && (A._status = 0, A._result = Y)
    }
    if (A._status === 1) return A._result.default;
    throw A._result
  }
  var X = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(
          A),
        error: A
      });
      if (!window.dispatchEvent(Y)) return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return
    }
    console.error(A)
  };

  function ee() {}
  return ge.Children = {
      map: z,
      forEach: function(A, Y, I) {
        z(A, function() {
          Y.apply(this, arguments)
        }, I)
      },
      count: function(A) {
        var Y = 0;
        return z(A, function() {
          Y++
        }), Y
      },
      toArray: function(A) {
        return z(A, function(Y) {
          return Y
        }) || []
      },
      only: function(A) {
        if (!W(A)) throw Error("React.Children.only expected to receive a single React element child.");
        return A
      }
    }, ge.Component = M, ge.Fragment = a, ge.Profiler = l, ge.PureComponent = _, ge.StrictMode = r, ge.Suspense = p, ge
    .__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ge.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(A) {
        return P.H.useMemoCache(A)
      }
    }, ge.cache = function(A) {
      return function() {
        return A.apply(null, arguments)
      }
    }, ge.cloneElement = function(A, Y, I) {
      if (A == null) throw Error("The argument must be a React element, but you passed " + A + ".");
      var $ = E({}, A.props),
        re = A.key,
        de = void 0;
      if (Y != null)
        for (ae in Y.ref !== void 0 && (de = void 0), Y.key !== void 0 && (re = "" + Y.key), Y) !F.call(Y, ae) || ae ===
          "key" || ae === "__self" || ae === "__source" || ae === "ref" && Y.ref === void 0 || ($[ae] = Y[ae]);
      var ae = arguments.length - 2;
      if (ae === 1) $.children = I;
      else if (1 < ae) {
        for (var Le = Array(ae), Re = 0; Re < ae; Re++) Le[Re] = arguments[Re + 2];
        $.children = Le
      }
      return Z(A.type, re, void 0, void 0, de, $)
    }, ge.createContext = function(A) {
      return A = {
        $$typeof: f,
        _currentValue: A,
        _currentValue2: A,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, A.Provider = A, A.Consumer = {
        $$typeof: u,
        _context: A
      }, A
    }, ge.createElement = function(A, Y, I) {
      var $, re = {},
        de = null;
      if (Y != null)
        for ($ in Y.key !== void 0 && (de = "" + Y.key), Y) F.call(Y, $) && $ !== "key" && $ !== "__self" && $ !==
          "__source" && (re[$] = Y[$]);
      var ae = arguments.length - 2;
      if (ae === 1) re.children = I;
      else if (1 < ae) {
        for (var Le = Array(ae), Re = 0; Re < ae; Re++) Le[Re] = arguments[Re + 2];
        re.children = Le
      }
      if (A && A.defaultProps)
        for ($ in ae = A.defaultProps, ae) re[$] === void 0 && (re[$] = ae[$]);
      return Z(A, de, void 0, void 0, null, re)
    }, ge.createRef = function() {
      return {
        current: null
      }
    }, ge.forwardRef = function(A) {
      return {
        $$typeof: h,
        render: A
      }
    }, ge.isValidElement = W, ge.lazy = function(A) {
      return {
        $$typeof: g,
        _payload: {
          _status: -1,
          _result: A
        },
        _init: K
      }
    }, ge.memo = function(A, Y) {
      return {
        $$typeof: m,
        type: A,
        compare: Y === void 0 ? null : Y
      }
    }, ge.startTransition = function(A) {
      var Y = P.T,
        I = {};
      P.T = I;
      try {
        var $ = A(),
          re = P.S;
        re !== null && re(I, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ee, X)
      } catch (de) {
        X(de)
      } finally {
        P.T = Y
      }
    }, ge.unstable_useCacheRefresh = function() {
      return P.H.useCacheRefresh()
    }, ge.use = function(A) {
      return P.H.use(A)
    }, ge.useActionState = function(A, Y, I) {
      return P.H.useActionState(A, Y, I)
    }, ge.useCallback = function(A, Y) {
      return P.H.useCallback(A, Y)
    }, ge.useContext = function(A) {
      return P.H.useContext(A)
    }, ge.useDebugValue = function() {}, ge.useDeferredValue = function(A, Y) {
      return P.H.useDeferredValue(A, Y)
    }, ge.useEffect = function(A, Y, I) {
      var $ = P.H;
      if (typeof I == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return $.useEffect(A, Y)
    }, ge.useId = function() {
      return P.H.useId()
    }, ge.useImperativeHandle = function(A, Y, I) {
      return P.H.useImperativeHandle(A, Y, I)
    }, ge.useInsertionEffect = function(A, Y) {
      return P.H.useInsertionEffect(A, Y)
    }, ge.useLayoutEffect = function(A, Y) {
      return P.H.useLayoutEffect(A, Y)
    }, ge.useMemo = function(A, Y) {
      return P.H.useMemo(A, Y)
    }, ge.useOptimistic = function(A, Y) {
      return P.H.useOptimistic(A, Y)
    }, ge.useReducer = function(A, Y, I) {
      return P.H.useReducer(A, Y, I)
    }, ge.useRef = function(A) {
      return P.H.useRef(A)
    }, ge.useState = function(A) {
      return P.H.useState(A)
    }, ge.useSyncExternalStore = function(A, Y, I) {
      return P.H.useSyncExternalStore(A, Y, I)
    }, ge.useTransition = function() {
      return P.H.useTransition()
    }, ge.version = "19.1.0", ge
}
var Ty;

function El() {
  return Ty || (Ty = 1, rf.exports = nA()), rf.exports
}
var of = {
  exports: {}
}, ft = {};
var Ay;

function iA() {
  if (Ay) return ft;
  Ay = 1;
  var t = El();

  function i(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++) m += "&args[]=" + encodeURIComponent(arguments[g])
    }
    return "Minified React error #" + p + "; visit " + m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function a() {}
  var r = {
      d: {
        f: a,
        r: function() {
          throw Error(i(522))
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a
      },
      p: 0,
      findDOMNode: null
    },
    l = Symbol.for("react.portal");

  function u(p, m, g) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: x == null ? null : "" + x,
      children: p,
      containerInfo: m,
      implementation: g
    }
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function h(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : ""
  }
  return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ft.createPortal = function(p, m) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(i(299));
    return u(p, m, null, g)
  }, ft.flushSync = function(p) {
    var m = f.T,
      g = r.p;
    try {
      if (f.T = null, r.p = 2, p) return p()
    } finally {
      f.T = m, r.p = g, r.d.f()
    }
  }, ft.preconnect = function(p, m) {
    typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" :
      void 0) : m = null, r.d.C(p, m))
  }, ft.prefetchDNS = function(p) {
    typeof p == "string" && r.d.D(p)
  }, ft.preinit = function(p, m) {
    if (typeof p == "string" && m && typeof m.as == "string") {
      var g = m.as,
        x = h(g, m.crossOrigin),
        b = typeof m.integrity == "string" ? m.integrity : void 0,
        T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      g === "style" ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
        crossOrigin: x,
        integrity: b,
        fetchPriority: T
      }) : g === "script" && r.d.X(p, {
        crossOrigin: x,
        integrity: b,
        fetchPriority: T,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      })
    }
  }, ft.preinitModule = function(p, m) {
    if (typeof p == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var g = h(m.as, m.crossOrigin);
          r.d.M(p, {
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          })
        }
      } else m == null && r.d.M(p)
  }, ft.preload = function(p, m) {
    if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var g = m.as,
        x = h(g, m.crossOrigin);
      r.d.L(p, g, {
        crossOrigin: x,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      })
    }
  }, ft.preloadModule = function(p, m) {
    if (typeof p == "string")
      if (m) {
        var g = h(m.as, m.crossOrigin);
        r.d.m(p, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: g,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        })
      } else r.d.m(p)
  }, ft.requestFormReset = function(p) {
    r.d.r(p)
  }, ft.unstable_batchedUpdates = function(p, m) {
    return p(m)
  }, ft.useFormState = function(p, m, g) {
    return f.H.useFormState(p, m, g)
  }, ft.useFormStatus = function() {
    return f.H.useHostTransitionStatus()
  }, ft.version = "19.1.0", ft
}
var Ey;

function Q0() {
  if (Ey) return of.exports;
  Ey = 1;

  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (i) {
        console.error(i)
      }
  }
  return t(), of.exports = iA(), of.exports
}
var Cy;

function sA() {
  if (Cy) return Ja;
  Cy = 1;
  var t = tA(),
    i = El(),
    a = Q0();

  function r(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++) n += "&args[]=" + encodeURIComponent(arguments[s])
    }
    return "Minified React error #" + e + "; visit " + n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function l(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
  }

  function u(e) {
    var n = e,
      s = e;
    if (e.alternate)
      for (; n.return;) n = n.return;
    else {
      e = n;
      do n = e, (n.flags & 4098) !== 0 && (s = n.return), e = n.return; while (e)
    }
    return n.tag === 3 ? s : null
  }

  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
    }
    return null
  }

  function h(e) {
    if (u(e) !== e) throw Error(r(188))
  }

  function p(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(r(188));
      return n !== e ? null : e
    }
    for (var s = e, o = n;;) {
      var c = s.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          s = o;
          continue
        }
        break
      }
      if (c.child === d.child) {
        for (d = c.child; d;) {
          if (d === s) return h(c), e;
          if (d === o) return h(c), n;
          d = d.sibling
        }
        throw Error(r(188))
      }
      if (s.return !== o.return) s = c, o = d;
      else {
        for (var v = !1, w = c.child; w;) {
          if (w === s) {
            v = !0, s = c, o = d;
            break
          }
          if (w === o) {
            v = !0, o = c, s = d;
            break
          }
          w = w.sibling
        }
        if (!v) {
          for (w = d.child; w;) {
            if (w === s) {
              v = !0, s = d, o = c;
              break
            }
            if (w === o) {
              v = !0, o = d, s = c;
              break
            }
            w = w.sibling
          }
          if (!v) throw Error(r(189))
        }
      }
      if (s.alternate !== o) throw Error(r(190))
    }
    if (s.tag !== 3) throw Error(r(188));
    return s.stateNode.current === s ? e : n
  }

  function m(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null;) {
      if (n = m(e), n !== null) return n;
      e = e.sibling
    }
    return null
  }
  var g = Object.assign,
    x = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    C = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    j = Symbol.for("react.provider"),
    _ = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    k = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    Z = Symbol.for("react.memo"),
    H = Symbol.for("react.lazy"),
    W = Symbol.for("react.activity"),
    oe = Symbol.for("react.memo_cache_sentinel"),
    pe = Symbol.iterator;

  function ce(e) {
    return e === null || typeof e != "object" ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e :
      null)
  }
  var xe = Symbol.for("react.client.reference");

  function J(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === xe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case E:
        return "Fragment";
      case M:
        return "Profiler";
      case C:
        return "StrictMode";
      case P:
        return "Suspense";
      case F:
        return "SuspenseList";
      case W:
        return "Activity"
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case T:
        return "Portal";
      case D:
        return (e.displayName || "Context") + ".Provider";
      case _:
        return (e._context.displayName || "Context") + ".Consumer";
      case k:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" :
          "ForwardRef"), e;
      case Z:
        return n = e.displayName || null, n !== null ? n : J(e.type) || "Memo";
      case H:
        n = e._payload, e = e._init;
        try {
          return J(e(n))
        } catch {}
    }
    return null
  }
  var fe = Array.isArray,
    z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    ee = [],
    A = -1;

  function Y(e) {
    return {
      current: e
    }
  }

  function I(e) {
    0 > A || (e.current = ee[A], ee[A] = null, A--)
  }

  function $(e, n) {
    A++, ee[A] = e.current, e.current = n
  }
  var re = Y(null),
    de = Y(null),
    ae = Y(null),
    Le = Y(null);

  function Re(e, n) {
    switch ($(ae, n), $(de, e), $(re, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Qg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI) n = Qg(n), e = Fg(n, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0
        }
    }
    I(re), $(re, e)
  }

  function Me() {
    I(re), I(de), I(ae)
  }

  function qn(e) {
    e.memoizedState !== null && $(Le, e);
    var n = re.current,
      s = Fg(n, e.type);
    n !== s && ($(de, e), $(re, s))
  }

  function Ft(e) {
    de.current === e && (I(re), I(de)), Le.current === e && (I(Le), Fa._currentValue = X)
  }
  var ln = Object.prototype.hasOwnProperty,
    Lt = t.unstable_scheduleCallback,
    Yn = t.unstable_cancelCallback,
    Nw = t.unstable_shouldYield,
    jw = t.unstable_requestPaint,
    cn = t.unstable_now,
    Ow = t.unstable_getCurrentPriorityLevel,
    Ch = t.unstable_ImmediatePriority,
    Rh = t.unstable_UserBlockingPriority,
    Ar = t.unstable_NormalPriority,
    Dw = t.unstable_LowPriority,
    Mh = t.unstable_IdlePriority,
    _w = t.log,
    zw = t.unstable_setDisableYieldValue,
    ta = null,
    Et = null;

  function Gn(e) {
    if (typeof _w == "function" && zw(e), Et && typeof Et.setStrictMode == "function") try {
      Et.setStrictMode(ta, e)
    } catch {}
  }
  var Ct = Math.clz32 ? Math.clz32 : kw,
    Vw = Math.log,
    Lw = Math.LN2;

  function kw(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Vw(e) / Lw | 0) | 0
  }
  var Er = 256,
    Cr = 4194304;

  function Ei(e) {
    var n = e & 42;
    if (n !== 0) return n;
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
        return 64;
      case 128:
        return 128;
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
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e
    }
  }

  function Rr(e, n, s) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0,
      d = e.suspendedLanes,
      v = e.pingedLanes;
    e = e.warmLanes;
    var w = o & 134217727;
    return w !== 0 ? (o = w & ~d, o !== 0 ? c = Ei(o) : (v &= w, v !== 0 ? c = Ei(v) : s || (s = w & ~e, s !== 0 && (c =
        Ei(s))))) : (w = o & ~d, w !== 0 ? c = Ei(w) : v !== 0 ? c = Ei(v) : s || (s = o & ~e, s !== 0 && (c = Ei(s)))),
      c === 0 ? 0 : n !== 0 && n !== c && (n & d) === 0 && (d = c & -c, s = n & -n, d >= s || d === 32 && (s &
        4194048) !== 0) ? n : c
  }

  function na(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0
  }

  function Pw(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }

  function Nh() {
    var e = Er;
    return Er <<= 1, (Er & 4194048) === 0 && (Er = 256), e
  }

  function jh() {
    var e = Cr;
    return Cr <<= 1, (Cr & 62914560) === 0 && (Cr = 4194304), e
  }

  function Gl(e) {
    for (var n = [], s = 0; 31 > s; s++) n.push(e);
    return n
  }

  function ia(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
  }

  function Uw(e, n, s, o, c, d) {
    var v = e.pendingLanes;
    e.pendingLanes = s, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= s, e
      .entangledLanes &= s, e.errorRecoveryDisabledLanes &= s, e.shellSuspendCounter = 0;
    var w = e.entanglements,
      R = e.expirationTimes,
      L = e.hiddenUpdates;
    for (s = v & ~s; 0 < s;) {
      var q = 31 - Ct(s),
        Q = 1 << q;
      w[q] = 0, R[q] = -1;
      var U = L[q];
      if (U !== null)
        for (L[q] = null, q = 0; q < U.length; q++) {
          var B = U[q];
          B !== null && (B.lane &= -536870913)
        }
      s &= ~Q
    }
    o !== 0 && Oh(e, o, 0), d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(v & ~n))
  }

  function Oh(e, n, s) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Ct(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | s & 4194090
  }

  function Dh(e, n) {
    var s = e.entangledLanes |= n;
    for (e = e.entanglements; s;) {
      var o = 31 - Ct(s),
        c = 1 << o;
      c & n | e[o] & n && (e[o] |= n), s &= ~c
    }
  }

  function Xl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0
    }
    return e
  }

  function Ql(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }

  function _h() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : dy(e.type))
  }

  function Bw(e, n) {
    var s = K.p;
    try {
      return K.p = e, n()
    } finally {
      K.p = s
    }
  }
  var Xn = Math.random().toString(36).slice(2),
    ct = "__reactFiber$" + Xn,
    yt = "__reactProps$" + Xn,
    Ii = "__reactContainer$" + Xn,
    Fl = "__reactEvents$" + Xn,
    Hw = "__reactListeners$" + Xn,
    qw = "__reactHandles$" + Xn,
    zh = "__reactResources$" + Xn,
    sa = "__reactMarker$" + Xn;

  function Kl(e) {
    delete e[ct], delete e[yt], delete e[Fl], delete e[Hw], delete e[qw]
  }

  function Ji(e) {
    var n = e[ct];
    if (n) return n;
    for (var s = e.parentNode; s;) {
      if (n = s[Ii] || s[ct]) {
        if (s = n.alternate, n.child !== null || s !== null && s.child !== null)
          for (e = $g(e); e !== null;) {
            if (s = e[ct]) return s;
            e = $g(e)
          }
        return n
      }
      e = s, s = e.parentNode
    }
    return null
  }

  function es(e) {
    if (e = e[ct] || e[Ii]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3) return e
    }
    return null
  }

  function aa(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(r(33))
  }

  function ts(e) {
    var n = e[zh];
    return n || (n = e[zh] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }), n
  }

  function tt(e) {
    e[sa] = !0
  }
  var Vh = new Set,
    Lh = {};

  function Ci(e, n) {
    ns(e, n), ns(e + "Capture", n)
  }

  function ns(e, n) {
    for (Lh[e] = n, e = 0; e < n.length; e++) Vh.add(n[e])
  }
  var Yw = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    kh = {},
    Ph = {};

  function Gw(e) {
    return ln.call(Ph, e) ? !0 : ln.call(kh, e) ? !1 : Yw.test(e) ? Ph[e] = !0 : (kh[e] = !0, !1)
  }

  function Mr(e, n, s) {
    if (Gw(n))
      if (s === null) e.removeAttribute(n);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return
            }
        }
        e.setAttribute(n, "" + s)
      }
  }

  function Nr(e, n, s) {
    if (s === null) e.removeAttribute(n);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return
      }
      e.setAttribute(n, "" + s)
    }
  }

  function wn(e, n, s, o) {
    if (o === null) e.removeAttribute(s);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(s);
          return
      }
      e.setAttributeNS(n, s, "" + o)
    }
  }
  var Zl, Uh;

  function is(e) {
    if (Zl === void 0) try {
      throw Error()
    } catch (s) {
      var n = s.stack.trim().match(/\n( *(at )?)/);
      Zl = n && n[1] || "", Uh = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return `
` + Zl + e + Uh
  }
  var Wl = !1;

  function $l(e, n) {
    if (!e || Wl) return "";
    Wl = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var Q = function() {
                throw Error()
              };
              if (Object.defineProperty(Q.prototype, "props", {
                  set: function() {
                    throw Error()
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, [])
                } catch (B) {
                  var U = B
                }
                Reflect.construct(e, [], Q)
              } else {
                try {
                  Q.call()
                } catch (B) {
                  U = B
                }
                e.call(Q.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (B) {
                U = B
              }(Q = e()) && typeof Q.catch == "function" && Q.catch(function() {})
            }
          } catch (B) {
            if (B && U && typeof B.stack == "string") return [B.stack, U.stack]
          }
          return [null, null]
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
      c && c.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var d = o.DetermineComponentFrameRoot(),
        v = d[0],
        w = d[1];
      if (v && w) {
        var R = v.split(`
`),
          L = w.split(`
`);
        for (c = o = 0; o < R.length && !R[o].includes("DetermineComponentFrameRoot");) o++;
        for (; c < L.length && !L[c].includes("DetermineComponentFrameRoot");) c++;
        if (o === R.length || c === L.length)
          for (o = R.length - 1, c = L.length - 1; 1 <= o && 0 <= c && R[o] !== L[c];) c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (R[o] !== L[c]) {
            if (o !== 1 || c !== 1)
              do
                if (o--, c--, 0 > c || R[o] !== L[c]) {
                  var q = `
` + R[o].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q
                } while (1 <= o && 0 <= c);
            break
          }
      }
    } finally {
      Wl = !1, Error.prepareStackTrace = s
    }
    return (s = e ? e.displayName || e.name : "") ? is(s) : ""
  }

  function Xw(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return is(e.type);
      case 16:
        return is("Lazy");
      case 13:
        return is("Suspense");
      case 19:
        return is("SuspenseList");
      case 0:
      case 15:
        return $l(e.type, !1);
      case 11:
        return $l(e.type.render, !1);
      case 1:
        return $l(e.type, !0);
      case 31:
        return is("Activity");
      default:
        return ""
    }
  }

  function Bh(e) {
    try {
      var n = "";
      do n += Xw(e), e = e.return; while (e);
      return n
    } catch (s) {
      return `
Error generating stack: ` + s.message + `
` + s.stack
    }
  }

  function kt(e) {
    switch (typeof e) {
      case "bigint":
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

  function Hh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
  }

  function Qw(e) {
    var n = Hh(e) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var c = s.get,
        d = s.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this)
        },
        set: function(v) {
          o = "" + v, d.call(this, v)
        }
      }), Object.defineProperty(e, n, {
        enumerable: s.enumerable
      }), {
        getValue: function() {
          return o
        },
        setValue: function(v) {
          o = "" + v
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n]
        }
      }
    }
  }

  function jr(e) {
    e._valueTracker || (e._valueTracker = Qw(e))
  }

  function qh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var s = n.getValue(),
      o = "";
    return e && (o = Hh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== s ? (n.setValue(e), !0) : !1
  }

  function Or(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var Fw = /[\n"\\]/g;

  function Pt(e) {
    return e.replace(Fw, function(n) {
      return "\\" + n.charCodeAt(0).toString(16) + " "
    })
  }

  function Il(e, n, s, o, c, d, v, w) {
    e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e
      .removeAttribute("type"), n != null ? v === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value =
        "" + kt(n)) : e.value !== "" + kt(n) && (e.value = "" + kt(n)) : v !== "submit" && v !== "reset" || e
      .removeAttribute("value"), n != null ? Jl(e, v, kt(n)) : s != null ? Jl(e, v, kt(s)) : o != null && e
      .removeAttribute("value"), c == null && d != null && (e.defaultChecked = !!d), c != null && (e.checked = c &&
        typeof c != "function" && typeof c != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" &&
      typeof w != "boolean" ? e.name = "" + kt(w) : e.removeAttribute("name")
  }

  function Yh(e, n, s, o, c, d, v, w) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), n !=
      null || s != null) {
      if (!(d !== "submit" && d !== "reset" || n != null)) return;
      s = s != null ? "" + kt(s) : "", n = n != null ? "" + kt(n) : s, w || n === e.value || (e.value = n), e
        .defaultValue = n
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = w ? e.checked : !!o, e
      .defaultChecked = !!o, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e
        .name = v)
  }

  function Jl(e, n, s) {
    n === "number" && Or(e.ownerDocument) === e || e.defaultValue === "" + s || (e.defaultValue = "" + s)
  }

  function ss(e, n, s, o) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < s.length; c++) n["$" + s[c]] = !0;
      for (s = 0; s < e.length; s++) c = n.hasOwnProperty("$" + e[s].value), e[s].selected !== c && (e[s].selected = c),
        c && o && (e[s].defaultSelected = !0)
    } else {
      for (s = "" + kt(s), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === s) {
          e[c].selected = !0, o && (e[c].defaultSelected = !0);
          return
        }
        n !== null || e[c].disabled || (n = e[c])
      }
      n !== null && (n.selected = !0)
    }
  }

  function Gh(e, n, s) {
    if (n != null && (n = "" + kt(n), n !== e.value && (e.value = n), s == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return
    }
    e.defaultValue = s != null ? "" + kt(s) : ""
  }

  function Xh(e, n, s, o) {
    if (n == null) {
      if (o != null) {
        if (s != null) throw Error(r(92));
        if (fe(o)) {
          if (1 < o.length) throw Error(r(93));
          o = o[0]
        }
        s = o
      }
      s == null && (s = ""), n = s
    }
    s = kt(n), e.defaultValue = s, o = e.textContent, o === s && o !== "" && o !== null && (e.value = o)
  }

  function as(e, n) {
    if (n) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = n;
        return
      }
    }
    e.textContent = n
  }
  var Kw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp"
    .split(" "));

  function Qh(e, n, s) {
    var o = n.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] =
      "" : o ? e.setProperty(n, s) : typeof s != "number" || s === 0 || Kw.has(n) ? n === "float" ? e.cssFloat = s : e[
        n] = ("" + s).trim() : e[n] = s + "px"
  }

  function Fh(e, n, s) {
    if (n != null && typeof n != "object") throw Error(r(62));
    if (e = e.style, s != null) {
      for (var o in s) !s.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e
        .setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n) o = n[c], n.hasOwnProperty(c) && s[c] !== o && Qh(e, c, o)
    } else
      for (var d in n) n.hasOwnProperty(d) && Qh(e, d, n[d])
  }

  function ec(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var Zw = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]),
    Ww =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function Dr(e) {
    return Ww.test("" + e) ?
      "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
  }
  var tc = null;

  function nc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e
      .nodeType === 3 ? e.parentNode : e
  }
  var rs = null,
    os = null;

  function Kh(e) {
    var n = es(e);
    if (n && (e = n.stateNode)) {
      var s = e[yt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Il(e, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name), n = s.name,
            s.type === "radio" && n != null) {
            for (s = e; s.parentNode;) s = s.parentNode;
            for (s = s.querySelectorAll('input[name="' + Pt("" + n) + '"][type="radio"]'), n = 0; n < s.length; n++) {
              var o = s[n];
              if (o !== e && o.form === e.form) {
                var c = o[yt] || null;
                if (!c) throw Error(r(90));
                Il(o, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name)
              }
            }
            for (n = 0; n < s.length; n++) o = s[n], o.form === e.form && qh(o)
          }
          break e;
        case "textarea":
          Gh(e, s.value, s.defaultValue);
          break e;
        case "select":
          n = s.value, n != null && ss(e, !!s.multiple, n, !1)
      }
    }
  }
  var ic = !1;

  function Zh(e, n, s) {
    if (ic) return e(n, s);
    ic = !0;
    try {
      var o = e(n);
      return o
    } finally {
      if (ic = !1, (rs !== null || os !== null) && (vo(), rs && (n = rs, e = os, os = rs = null, Kh(n), e)))
        for (n = 0; n < e.length; n++) Kh(e[n])
    }
  }

  function ra(e, n) {
    var s = e.stateNode;
    if (s === null) return null;
    var o = s[yt] || null;
    if (o === null) return null;
    s = o[n];
    e: switch (n) {
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e ===
          "textarea")), e = !o;
        break e;
      default:
        e = !1
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(r(231, n, typeof s));
    return s
  }
  var Sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    sc = !1;
  if (Sn) try {
    var oa = {};
    Object.defineProperty(oa, "passive", {
      get: function() {
        sc = !0
      }
    }), window.addEventListener("test", oa, oa), window.removeEventListener("test", oa, oa)
  } catch {
    sc = !1
  }
  var Qn = null,
    ac = null,
    _r = null;

  function Wh() {
    if (_r) return _r;
    var e, n = ac,
      s = n.length,
      o, c = "value" in Qn ? Qn.value : Qn.textContent,
      d = c.length;
    for (e = 0; e < s && n[e] === c[e]; e++);
    var v = s - e;
    for (o = 1; o <= v && n[s - o] === c[d - o]; o++);
    return _r = c.slice(e, 1 < o ? 1 - o : void 0)
  }

  function zr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e ||
      e === 13 ? e : 0
  }

  function Vr() {
    return !0
  }

  function $h() {
    return !1
  }

  function vt(e) {
    function n(s, o, c, d, v) {
      this._reactName = s, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = v, this
        .currentTarget = null;
      for (var w in e) e.hasOwnProperty(w) && (s = e[w], this[w] = s ? s(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Vr :
        $h, this.isPropagationStopped = $h, this
    }
    return g(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var s = this.nativeEvent;
        s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1),
          this.isDefaultPrevented = Vr)
      },
      stopPropagation: function() {
        var s = this.nativeEvent;
        s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !
          0), this.isPropagationStopped = Vr)
      },
      persist: function() {},
      isPersistent: Vr
    }), n
  }
  var Ri = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Lr = vt(Ri),
    la = g({}, Ri, {
      view: 0,
      detail: 0
    }),
    $w = vt(la),
    rc, oc, ca, kr = g({}, la, {
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
      getModifierState: cc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e
          .relatedTarget
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== ca && (ca && e.type === "mousemove" ? (rc = e.screenX - ca
          .screenX, oc = e.screenY - ca.screenY) : oc = rc = 0, ca = e), rc)
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : oc
      }
    }),
    Ih = vt(kr),
    Iw = g({}, kr, {
      dataTransfer: 0
    }),
    Jw = vt(Iw),
    eS = g({}, la, {
      relatedTarget: 0
    }),
    lc = vt(eS),
    tS = g({}, Ri, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    nS = vt(tS),
    iS = g({}, Ri, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
    }),
    sS = vt(iS),
    aS = g({}, Ri, {
      data: 0
    }),
    Jh = vt(aS),
    rS = {
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
    },
    oS = {
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
    },
    lS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function cS(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = lS[e]) ? !!n[e] : !1
  }

  function cc() {
    return cS
  }
  var uS = g({}, la, {
      key: function(e) {
        if (e.key) {
          var n = rS[e.key] || e.key;
          if (n !== "Unidentified") return n
        }
        return e.type === "keypress" ? (e = zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type ===
          "keydown" || e.type === "keyup" ? oS[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cc,
      charCode: function(e) {
        return e.type === "keypress" ? zr(e) : 0
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function(e) {
        return e.type === "keypress" ? zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
    }),
    fS = vt(uS),
    dS = g({}, kr, {
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
    }),
    em = vt(dS),
    hS = g({}, la, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cc
    }),
    mS = vt(hS),
    pS = g({}, Ri, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    gS = vt(pS),
    yS = g({}, kr, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta :
          0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    vS = vt(yS),
    xS = g({}, Ri, {
      newState: 0,
      oldState: 0
    }),
    bS = vt(xS),
    wS = [9, 13, 27, 32],
    uc = Sn && "CompositionEvent" in window,
    ua = null;
  Sn && "documentMode" in document && (ua = document.documentMode);
  var SS = Sn && "TextEvent" in window && !ua,
    tm = Sn && (!uc || ua && 8 < ua && 11 >= ua),
    nm = " ",
    im = !1;

  function sm(e, n) {
    switch (e) {
      case "keyup":
        return wS.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1
    }
  }

  function am(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
  }
  var ls = !1;

  function TS(e, n) {
    switch (e) {
      case "compositionend":
        return am(n);
      case "keypress":
        return n.which !== 32 ? null : (im = !0, nm);
      case "textInput":
        return e = n.data, e === nm && im ? null : e;
      default:
        return null
    }
  }

  function AS(e, n) {
    if (ls) return e === "compositionend" || !uc && sm(e, n) ? (e = Wh(), _r = ac = Qn = null, ls = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which)
        }
        return null;
      case "compositionend":
        return tm && n.locale !== "ko" ? null : n.data;
      default:
        return null
    }
  }
  var ES = {
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

  function rm(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!ES[e.type] : n === "textarea"
  }

  function om(e, n, s, o) {
    rs ? os ? os.push(o) : os = [o] : rs = o, n = Ao(n, "onChange"), 0 < n.length && (s = new Lr("onChange", "change",
      null, s, o), e.push({
      event: s,
      listeners: n
    }))
  }
  var fa = null,
    da = null;

  function CS(e) {
    Hg(e, 0)
  }

  function Pr(e) {
    var n = aa(e);
    if (qh(n)) return e
  }

  function lm(e, n) {
    if (e === "change") return n
  }
  var cm = !1;
  if (Sn) {
    var fc;
    if (Sn) {
      var dc = "oninput" in document;
      if (!dc) {
        var um = document.createElement("div");
        um.setAttribute("oninput", "return;"), dc = typeof um.oninput == "function"
      }
      fc = dc
    } else fc = !1;
    cm = fc && (!document.documentMode || 9 < document.documentMode)
  }

  function fm() {
    fa && (fa.detachEvent("onpropertychange", dm), da = fa = null)
  }

  function dm(e) {
    if (e.propertyName === "value" && Pr(da)) {
      var n = [];
      om(n, da, e, nc(e)), Zh(CS, n)
    }
  }

  function RS(e, n, s) {
    e === "focusin" ? (fm(), fa = n, da = s, fa.attachEvent("onpropertychange", dm)) : e === "focusout" && fm()
  }

  function MS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Pr(da)
  }

  function NS(e, n) {
    if (e === "click") return Pr(n)
  }

  function jS(e, n) {
    if (e === "input" || e === "change") return Pr(n)
  }

  function OS(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
  }
  var Rt = typeof Object.is == "function" ? Object.is : OS;

  function ha(e, n) {
    if (Rt(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var s = Object.keys(e),
      o = Object.keys(n);
    if (s.length !== o.length) return !1;
    for (o = 0; o < s.length; o++) {
      var c = s[o];
      if (!ln.call(n, c) || !Rt(e[c], n[c])) return !1
    }
    return !0
  }

  function hm(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
  }

  function mm(e, n) {
    var s = hm(e);
    e = 0;
    for (var o; s;) {
      if (s.nodeType === 3) {
        if (o = e + s.textContent.length, e <= n && o >= n) return {
          node: s,
          offset: n - e
        };
        e = o
      }
      e: {
        for (; s;) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e
          }
          s = s.parentNode
        }
        s = void 0
      }
      s = hm(s)
    }
  }

  function pm(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? pm(e, n.parentNode) :
      "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
  }

  function gm(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView :
      window;
    for (var n = Or(e.document); n instanceof e.HTMLIFrameElement;) {
      try {
        var s = typeof n.contentWindow.location.href == "string"
      } catch {
        s = !1
      }
      if (s) e = n.contentWindow;
      else break;
      n = Or(e.document)
    }
    return n
  }

  function hc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e
      .type === "password") || n === "textarea" || e.contentEditable === "true")
  }
  var DS = Sn && "documentMode" in document && 11 >= document.documentMode,
    cs = null,
    mc = null,
    ma = null,
    pc = !1;

  function ym(e, n, s) {
    var o = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    pc || cs == null || cs !== Or(o) || (o = cs, "selectionStart" in o && hc(o) ? o = {
      start: o.selectionStart,
      end: o.selectionEnd
    } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), ma && ha(ma, o) || (ma = o, o = Ao(mc, "onSelect"), 0 < o.length && (n = new Lr("onSelect", "select", null,
      n, s), e.push({
      event: n,
      listeners: o
    }), n.target = cs)))
  }

  function Mi(e, n) {
    var s = {};
    return s[e.toLowerCase()] = n.toLowerCase(), s["Webkit" + e] = "webkit" + n, s["Moz" + e] = "moz" + n, s
  }
  var us = {
      animationend: Mi("Animation", "AnimationEnd"),
      animationiteration: Mi("Animation", "AnimationIteration"),
      animationstart: Mi("Animation", "AnimationStart"),
      transitionrun: Mi("Transition", "TransitionRun"),
      transitionstart: Mi("Transition", "TransitionStart"),
      transitioncancel: Mi("Transition", "TransitionCancel"),
      transitionend: Mi("Transition", "TransitionEnd")
    },
    gc = {},
    vm = {};
  Sn && (vm = document.createElement("div").style, "AnimationEvent" in window || (delete us.animationend.animation,
      delete us.animationiteration.animation, delete us.animationstart.animation), "TransitionEvent" in window ||
    delete us.transitionend.transition);

  function Ni(e) {
    if (gc[e]) return gc[e];
    if (!us[e]) return e;
    var n = us[e],
      s;
    for (s in n)
      if (n.hasOwnProperty(s) && s in vm) return gc[e] = n[s];
    return e
  }
  var xm = Ni("animationend"),
    bm = Ni("animationiteration"),
    wm = Ni("animationstart"),
    _S = Ni("transitionrun"),
    zS = Ni("transitionstart"),
    VS = Ni("transitioncancel"),
    Sm = Ni("transitionend"),
    Tm = new Map,
    yc =
    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel"
    .split(" ");
  yc.push("scrollEnd");

  function Kt(e, n) {
    Tm.set(e, n), Ci(n, [e])
  }
  var Am = new WeakMap;

  function Ut(e, n) {
    if (typeof e == "object" && e !== null) {
      var s = Am.get(e);
      return s !== void 0 ? s : (n = {
        value: e,
        source: n,
        stack: Bh(n)
      }, Am.set(e, n), n)
    }
    return {
      value: e,
      source: n,
      stack: Bh(n)
    }
  }
  var Bt = [],
    fs = 0,
    vc = 0;

  function Ur() {
    for (var e = fs, n = vc = fs = 0; n < e;) {
      var s = Bt[n];
      Bt[n++] = null;
      var o = Bt[n];
      Bt[n++] = null;
      var c = Bt[n];
      Bt[n++] = null;
      var d = Bt[n];
      if (Bt[n++] = null, o !== null && c !== null) {
        var v = o.pending;
        v === null ? c.next = c : (c.next = v.next, v.next = c), o.pending = c
      }
      d !== 0 && Em(s, c, d)
    }
  }

  function Br(e, n, s, o) {
    Bt[fs++] = e, Bt[fs++] = n, Bt[fs++] = s, Bt[fs++] = o, vc |= o, e.lanes |= o, e = e.alternate, e !== null && (e
      .lanes |= o)
  }

  function xc(e, n, s, o) {
    return Br(e, n, s, o), Hr(e)
  }

  function ds(e, n) {
    return Br(e, null, null, n), Hr(e)
  }

  function Em(e, n, s) {
    e.lanes |= s;
    var o = e.alternate;
    o !== null && (o.lanes |= s);
    for (var c = !1, d = e.return; d !== null;) d.childLanes |= s, o = d.alternate, o !== null && (o.childLanes |= s), d
      .tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (c = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, c && n !== null && (c = 31 - Ct(s), e = d.hiddenUpdates, o = e[c], o ===
      null ? e[c] = [n] : o.push(n), n.lane = s | 536870912), d) : null
  }

  function Hr(e) {
    if (50 < Ua) throw Ua = 0, Eu = null, Error(r(185));
    for (var n = e.return; n !== null;) e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null
  }
  var hs = {};

  function LS(e, n, s, o) {
    this.tag = e, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this
      .elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies =
      this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags =
      0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function Mt(e, n, s, o) {
    return new LS(e, n, s, o)
  }

  function bc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
  }

  function Tn(e, n) {
    var s = e.alternate;
    return s === null ? (s = Mt(e.tag, n, e.key, e.mode), s.elementType = e.elementType, s.type = e.type, s.stateNode =
        e.stateNode, s.alternate = e, e.alternate = s) : (s.pendingProps = n, s.type = e.type, s.flags = 0, s
        .subtreeFlags = 0, s.deletions = null), s.flags = e.flags & 65011712, s.childLanes = e.childLanes, s.lanes = e
      .lanes, s.child = e.child, s.memoizedProps = e.memoizedProps, s.memoizedState = e.memoizedState, s.updateQueue = e
      .updateQueue, n = e.dependencies, s.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }, s.sibling = e.sibling, s.index = e.index, s.ref = e.ref, s.refCleanup = e.refCleanup, s
  }

  function Cm(e, n) {
    e.flags &= 65011714;
    var s = e.alternate;
    return s === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e
      .memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = s
      .childLanes, e.lanes = s.lanes, e.child = s.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = s
      .memoizedProps, e.memoizedState = s.memoizedState, e.updateQueue = s.updateQueue, e.type = s.type, n = s
      .dependencies, e.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }), e
  }

  function qr(e, n, s, o, c, d) {
    var v = 0;
    if (o = e, typeof e == "function") bc(e) && (v = 1);
    else if (typeof e == "string") v = PT(e, s, re.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 :
      5;
    else e: switch (e) {
      case W:
        return e = Mt(31, s, n, c), e.elementType = W, e.lanes = d, e;
      case E:
        return ji(s.children, c, d, n);
      case C:
        v = 8, c |= 24;
        break;
      case M:
        return e = Mt(12, s, n, c | 2), e.elementType = M, e.lanes = d, e;
      case P:
        return e = Mt(13, s, n, c), e.elementType = P, e.lanes = d, e;
      case F:
        return e = Mt(19, s, n, c), e.elementType = F, e.lanes = d, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case j:
          case D:
            v = 10;
            break e;
          case _:
            v = 9;
            break e;
          case k:
            v = 11;
            break e;
          case Z:
            v = 14;
            break e;
          case H:
            v = 16, o = null;
            break e
        }
        v = 29, s = Error(r(130, e === null ? "null" : typeof e, "")), o = null
    }
    return n = Mt(v, s, n, c), n.elementType = e, n.type = o, n.lanes = d, n
  }

  function ji(e, n, s, o) {
    return e = Mt(7, e, o, n), e.lanes = s, e
  }

  function wc(e, n, s) {
    return e = Mt(6, e, null, n), e.lanes = s, e
  }

  function Sc(e, n, s) {
    return n = Mt(4, e.children !== null ? e.children : [], e.key, n), n.lanes = s, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n
  }
  var ms = [],
    ps = 0,
    Yr = null,
    Gr = 0,
    Ht = [],
    qt = 0,
    Oi = null,
    An = 1,
    En = "";

  function Di(e, n) {
    ms[ps++] = Gr, ms[ps++] = Yr, Yr = e, Gr = n
  }

  function Rm(e, n, s) {
    Ht[qt++] = An, Ht[qt++] = En, Ht[qt++] = Oi, Oi = e;
    var o = An;
    e = En;
    var c = 32 - Ct(o) - 1;
    o &= ~(1 << c), s += 1;
    var d = 32 - Ct(n) + c;
    if (30 < d) {
      var v = c - c % 5;
      d = (o & (1 << v) - 1).toString(32), o >>= v, c -= v, An = 1 << 32 - Ct(n) + c | s << c | o, En = d + e
    } else An = 1 << d | s << c | o, En = e
  }

  function Tc(e) {
    e.return !== null && (Di(e, 1), Rm(e, 1, 0))
  }

  function Ac(e) {
    for (; e === Yr;) Yr = ms[--ps], ms[ps] = null, Gr = ms[--ps], ms[ps] = null;
    for (; e === Oi;) Oi = Ht[--qt], Ht[qt] = null, En = Ht[--qt], Ht[qt] = null, An = Ht[--qt], Ht[qt] = null
  }
  var ht = null,
    He = null,
    Ee = !1,
    _i = null,
    un = !1,
    Ec = Error(r(519));

  function zi(e) {
    var n = Error(r(418, ""));
    throw ya(Ut(n, e)), Ec
  }

  function Mm(e) {
    var n = e.stateNode,
      s = e.type,
      o = e.memoizedProps;
    switch (n[ct] = e, n[yt] = o, s) {
      case "dialog":
        Se("cancel", n), Se("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Se("load", n);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Ha.length; s++) Se(Ha[s], n);
        break;
      case "source":
        Se("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Se("error", n), Se("load", n);
        break;
      case "details":
        Se("toggle", n);
        break;
      case "input":
        Se("invalid", n), Yh(n, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0), jr(n);
        break;
      case "select":
        Se("invalid", n);
        break;
      case "textarea":
        Se("invalid", n), Xh(n, o.value, o.defaultValue, o.children), jr(n)
    }
    s = o.children, typeof s != "string" && typeof s != "number" && typeof s != "bigint" || n.textContent === "" + s ||
      o.suppressHydrationWarning === !0 || Xg(n.textContent, s) ? (o.popover != null && (Se("beforetoggle", n), Se(
          "toggle", n)), o.onScroll != null && Se("scroll", n), o.onScrollEnd != null && Se("scrollend", n), o
        .onClick != null && (n.onclick = Eo), n = !0) : n = !1, n || zi(e)
  }

  function Nm(e) {
    for (ht = e.return; ht;) switch (ht.tag) {
      case 5:
      case 13:
        un = !1;
        return;
      case 27:
      case 3:
        un = !0;
        return;
      default:
        ht = ht.return
    }
  }

  function pa(e) {
    if (e !== ht) return !1;
    if (!Ee) return Nm(e), Ee = !0, !1;
    var n = e.tag,
      s;
    if ((s = n !== 3 && n !== 27) && ((s = n === 5) && (s = e.type, s = !(s !== "form" && s !== "button") || Hu(e.type,
        e.memoizedProps)), s = !s), s && He && zi(e), Nm(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      e: {
        for (e = e.nextSibling, n = 0; e;) {
          if (e.nodeType === 8)
            if (s = e.data, s === "/$") {
              if (n === 0) {
                He = Wt(e.nextSibling);
                break e
              }
              n--
            } else s !== "$" && s !== "$!" && s !== "$?" || n++;
          e = e.nextSibling
        }
        He = null
      }
    } else n === 27 ? (n = He, li(e.type) ? (e = Xu, Xu = null, He = e) : He = n) : He = ht ? Wt(e.stateNode
      .nextSibling) : null;
    return !0
  }

  function ga() {
    He = ht = null, Ee = !1
  }

  function jm() {
    var e = _i;
    return e !== null && (wt === null ? wt = e : wt.push.apply(wt, e), _i = null), e
  }

  function ya(e) {
    _i === null ? _i = [e] : _i.push(e)
  }
  var Cc = Y(null),
    Vi = null,
    Cn = null;

  function Fn(e, n, s) {
    $(Cc, n._currentValue), n._currentValue = s
  }

  function Rn(e) {
    e._currentValue = Cc.current, I(Cc)
  }

  function Rc(e, n, s) {
    for (; e !== null;) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o
          .childLanes & n) !== n && (o.childLanes |= n), e === s) break;
      e = e.return
    }
  }

  function Mc(e, n, s, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null;) {
      var d = c.dependencies;
      if (d !== null) {
        var v = c.child;
        d = d.firstContext;
        e: for (; d !== null;) {
          var w = d;
          d = c;
          for (var R = 0; R < n.length; R++)
            if (w.context === n[R]) {
              d.lanes |= s, w = d.alternate, w !== null && (w.lanes |= s), Rc(d.return, s, e), o || (v = null);
              break e
            } d = w.next
        }
      } else if (c.tag === 18) {
        if (v = c.return, v === null) throw Error(r(341));
        v.lanes |= s, d = v.alternate, d !== null && (d.lanes |= s), Rc(v, s, e), v = null
      } else v = c.child;
      if (v !== null) v.return = c;
      else
        for (v = c; v !== null;) {
          if (v === e) {
            v = null;
            break
          }
          if (c = v.sibling, c !== null) {
            c.return = v.return, v = c;
            break
          }
          v = v.return
        }
      c = v
    }
  }

  function va(e, n, s, o) {
    e = null;
    for (var c = n, d = !1; c !== null;) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break
      }
      if (c.tag === 10) {
        var v = c.alternate;
        if (v === null) throw Error(r(387));
        if (v = v.memoizedProps, v !== null) {
          var w = c.type;
          Rt(c.pendingProps.value, v.value) || (e !== null ? e.push(w) : e = [w])
        }
      } else if (c === Le.current) {
        if (v = c.alternate, v === null) throw Error(r(387));
        v.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Fa) : e = [Fa])
      }
      c = c.return
    }
    e !== null && Mc(n, e, s, o), n.flags |= 262144
  }

  function Xr(e) {
    for (e = e.firstContext; e !== null;) {
      if (!Rt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next
    }
    return !1
  }

  function Li(e) {
    Vi = e, Cn = null, e = e.dependencies, e !== null && (e.firstContext = null)
  }

  function ut(e) {
    return Om(Vi, e)
  }

  function Qr(e, n) {
    return Vi === null && Li(e), Om(e, n)
  }

  function Om(e, n) {
    var s = n._currentValue;
    if (n = {
        context: n,
        memoizedValue: s,
        next: null
      }, Cn === null) {
      if (e === null) throw Error(r(308));
      Cn = n, e.dependencies = {
        lanes: 0,
        firstContext: n
      }, e.flags |= 524288
    } else Cn = Cn.next = n;
    return s
  }
  var kS = typeof AbortController < "u" ? AbortController : function() {
      var e = [],
        n = this.signal = {
          aborted: !1,
          addEventListener: function(s, o) {
            e.push(o)
          }
        };
      this.abort = function() {
        n.aborted = !0, e.forEach(function(s) {
          return s()
        })
      }
    },
    PS = t.unstable_scheduleCallback,
    US = t.unstable_NormalPriority,
    We = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };

  function Nc() {
    return {
      controller: new kS,
      data: new Map,
      refCount: 0
    }
  }

  function xa(e) {
    e.refCount--, e.refCount === 0 && PS(US, function() {
      e.controller.abort()
    })
  }
  var ba = null,
    jc = 0,
    gs = 0,
    ys = null;

  function BS(e, n) {
    if (ba === null) {
      var s = ba = [];
      jc = 0, gs = Du(), ys = {
        status: "pending",
        value: void 0,
        then: function(o) {
          s.push(o)
        }
      }
    }
    return jc++, n.then(Dm, Dm), n
  }

  function Dm() {
    if (--jc === 0 && ba !== null) {
      ys !== null && (ys.status = "fulfilled");
      var e = ba;
      ba = null, gs = 0, ys = null;
      for (var n = 0; n < e.length; n++)(0, e[n])()
    }
  }

  function HS(e, n) {
    var s = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function(c) {
          s.push(c)
        }
      };
    return e.then(function() {
      o.status = "fulfilled", o.value = n;
      for (var c = 0; c < s.length; c++)(0, s[c])(n)
    }, function(c) {
      for (o.status = "rejected", o.reason = c, c = 0; c < s.length; c++)(0, s[c])(void 0)
    }), o
  }
  var _m = z.S;
  z.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && BS(e, n), _m !== null && _m(e, n)
  };
  var ki = Y(null);

  function Oc() {
    var e = ki.current;
    return e !== null ? e : Ve.pooledCache
  }

  function Fr(e, n) {
    n === null ? $(ki, ki.current) : $(ki, n.pool)
  }

  function zm() {
    var e = Oc();
    return e === null ? null : {
      parent: We._currentValue,
      pool: e
    }
  }
  var wa = Error(r(460)),
    Vm = Error(r(474)),
    Kr = Error(r(542)),
    Dc = {
      then: function() {}
    };

  function Lm(e) {
    return e = e.status, e === "fulfilled" || e === "rejected"
  }

  function Zr() {}

  function km(e, n, s) {
    switch (s = e[s], s === void 0 ? e.push(n) : s !== n && (n.then(Zr, Zr), n = s), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Um(e), e;
      default:
        if (typeof n.status == "string") n.then(Zr, Zr);
        else {
          if (e = Ve, e !== null && 100 < e.shellSuspendCounter) throw Error(r(482));
          e = n, e.status = "pending", e.then(function(o) {
            if (n.status === "pending") {
              var c = n;
              c.status = "fulfilled", c.value = o
            }
          }, function(o) {
            if (n.status === "pending") {
              var c = n;
              c.status = "rejected", c.reason = o
            }
          })
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, Um(e), e
        }
        throw Sa = n, wa
    }
  }
  var Sa = null;

  function Pm() {
    if (Sa === null) throw Error(r(459));
    var e = Sa;
    return Sa = null, e
  }

  function Um(e) {
    if (e === wa || e === Kr) throw Error(r(483))
  }
  var Kn = !1;

  function _c(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }

  function zc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    })
  }

  function Zn(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function Wn(e, n, s) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Ne & 2) !== 0) {
      var c = o.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = Hr(e), Em(e, null, s), n
    }
    return Br(e, o, n, s), Hr(e)
  }

  function Ta(e, n, s) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (s & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, s |= o, n.lanes = s, Dh(e, s)
    }
  }

  function Vc(e, n) {
    var s = e.updateQueue,
      o = e.alternate;
    if (o !== null && (o = o.updateQueue, s === o)) {
      var c = null,
        d = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var v = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          };
          d === null ? c = d = v : d = d.next = v, s = s.next
        } while (s !== null);
        d === null ? c = d = n : d = d.next = n
      } else c = d = n;
      s = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = s;
      return
    }
    e = s.lastBaseUpdate, e === null ? s.firstBaseUpdate = n : e.next = n, s.lastBaseUpdate = n
  }
  var Lc = !1;

  function Aa() {
    if (Lc) {
      var e = ys;
      if (e !== null) throw e
    }
  }

  function Ea(e, n, s, o) {
    Lc = !1;
    var c = e.updateQueue;
    Kn = !1;
    var d = c.firstBaseUpdate,
      v = c.lastBaseUpdate,
      w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var R = w,
        L = R.next;
      R.next = null, v === null ? d = L : v.next = L, v = R;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, w = q.lastBaseUpdate, w !== v && (w === null ? q.firstBaseUpdate = L : w.next =
        L, q.lastBaseUpdate = R))
    }
    if (d !== null) {
      var Q = c.baseState;
      v = 0, q = L = R = null, w = d;
      do {
        var U = w.lane & -536870913,
          B = U !== w.lane;
        if (B ? (Te & U) === U : (o & U) === U) {
          U !== 0 && U === gs && (Lc = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: null,
            next: null
          });
          e: {
            var me = e,
              ue = w;U = n;
            var _e = s;
            switch (ue.tag) {
              case 1:
                if (me = ue.payload, typeof me == "function") {
                  Q = me.call(_e, Q, U);
                  break e
                }
                Q = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = ue.payload, U = typeof me == "function" ? me.call(_e, Q, U) : me, U == null) break e;
                Q = g({}, Q, U);
                break e;
              case 2:
                Kn = !0
            }
          }
          U = w.callback, U !== null && (e.flags |= 64, B && (e.flags |= 8192), B = c.callbacks, B === null ? c
            .callbacks = [U] : B.push(U))
        } else B = {
          lane: U,
          tag: w.tag,
          payload: w.payload,
          callback: w.callback,
          next: null
        }, q === null ? (L = q = B, R = Q) : q = q.next = B, v |= U;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null) break;
          B = w, w = B.next, B.next = null, c.lastBaseUpdate = B, c.shared.pending = null
        }
      } while (!0);
      q === null && (R = Q), c.baseState = R, c.firstBaseUpdate = L, c.lastBaseUpdate = q, d === null && (c.shared
        .lanes = 0), si |= v, e.lanes = v, e.memoizedState = Q
    }
  }

  function Bm(e, n) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(n)
  }

  function Hm(e, n) {
    var s = e.callbacks;
    if (s !== null)
      for (e.callbacks = null, e = 0; e < s.length; e++) Bm(s[e], n)
  }
  var vs = Y(null),
    Wr = Y(0);

  function qm(e, n) {
    e = zn, $(Wr, e), $(vs, n), zn = e | n.baseLanes
  }

  function kc() {
    $(Wr, zn), $(vs, vs.current)
  }

  function Pc() {
    zn = Wr.current, I(vs), I(Wr)
  }
  var $n = 0,
    ye = null,
    Oe = null,
    Fe = null,
    $r = !1,
    xs = !1,
    Pi = !1,
    Ir = 0,
    Ca = 0,
    bs = null,
    qS = 0;

  function Ge() {
    throw Error(r(321))
  }

  function Uc(e, n) {
    if (n === null) return !1;
    for (var s = 0; s < n.length && s < e.length; s++)
      if (!Rt(e[s], n[s])) return !1;
    return !0
  }

  function Bc(e, n, s, o, c, d) {
    return $n = d, ye = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, z.H = e === null || e
      .memoizedState === null ? Ep : Cp, Pi = !1, d = s(o, c), Pi = !1, xs && (d = Gm(n, s, o, c)), Ym(e), d
  }

  function Ym(e) {
    z.H = so;
    var n = Oe !== null && Oe.next !== null;
    if ($n = 0, Fe = Oe = ye = null, $r = !1, Ca = 0, bs = null, n) throw Error(r(300));
    e === null || nt || (e = e.dependencies, e !== null && Xr(e) && (nt = !0))
  }

  function Gm(e, n, s, o) {
    ye = e;
    var c = 0;
    do {
      if (xs && (bs = null), Ca = 0, xs = !1, 25 <= c) throw Error(r(301));
      if (c += 1, Fe = Oe = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0)
      }
      z.H = ZS, d = n(s, o)
    } while (xs);
    return d
  }

  function YS() {
    var e = z.H,
      n = e.useState()[0];
    return n = typeof n.then == "function" ? Ra(n) : n, e = e.useState()[0], (Oe !== null ? Oe.memoizedState : null) !==
      e && (ye.flags |= 1024), n
  }

  function Hc() {
    var e = Ir !== 0;
    return Ir = 0, e
  }

  function qc(e, n, s) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~s
  }

  function Yc(e) {
    if ($r) {
      for (e = e.memoizedState; e !== null;) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next
      }
      $r = !1
    }
    $n = 0, Fe = Oe = ye = null, xs = !1, Ca = Ir = 0, bs = null
  }

  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Fe === null ? ye.memoizedState = Fe = e : Fe = Fe.next = e, Fe
  }

  function Ke() {
    if (Oe === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null
    } else e = Oe.next;
    var n = Fe === null ? ye.memoizedState : Fe.next;
    if (n !== null) Fe = n, Oe = e;
    else {
      if (e === null) throw ye.alternate === null ? Error(r(467)) : Error(r(310));
      Oe = e, e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null
      }, Fe === null ? ye.memoizedState = Fe = e : Fe = Fe.next = e
    }
    return Fe
  }

  function Gc() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }

  function Ra(e) {
    var n = Ca;
    return Ca += 1, bs === null && (bs = []), e = km(bs, e, n), n = ye, (Fe === null ? n.memoizedState : Fe.next) ===
      null && (n = n.alternate, z.H = n === null || n.memoizedState === null ? Ep : Cp), e
  }

  function Jr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ra(e);
      if (e.$$typeof === D) return ut(e)
    }
    throw Error(r(438, String(e)))
  }

  function Xc(e) {
    var n = null,
      s = ye.updateQueue;
    if (s !== null && (n = s.memoCache), n == null) {
      var o = ye.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(c) {
          return c.slice()
        }),
        index: 0
      })))
    }
    if (n == null && (n = {
        data: [],
        index: 0
      }), s === null && (s = Gc(), ye.updateQueue = s), s.memoCache = n, s = n.data[n.index], s === void 0)
      for (s = n.data[n.index] = Array(e), o = 0; o < e; o++) s[o] = oe;
    return n.index++, s
  }

  function Mn(e, n) {
    return typeof n == "function" ? n(e) : n
  }

  function eo(e) {
    var n = Ke();
    return Qc(n, Oe, e)
  }

  function Qc(e, n, s) {
    var o = e.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = s;
    var c = e.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var v = c.next;
        c.next = d.next, d.next = v
      }
      n.baseQueue = c = d, o.pending = null
    }
    if (d = e.baseState, c === null) e.memoizedState = d;
    else {
      n = c.next;
      var w = v = null,
        R = null,
        L = n,
        q = !1;
      do {
        var Q = L.lane & -536870913;
        if (Q !== L.lane ? (Te & Q) === Q : ($n & Q) === Q) {
          var U = L.revertLane;
          if (U === 0) R !== null && (R = R.next = {
            lane: 0,
            revertLane: 0,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          }), Q === gs && (q = !0);
          else if (($n & U) === U) {
            L = L.next, U === gs && (q = !0);
            continue
          } else Q = {
            lane: 0,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          }, R === null ? (w = R = Q, v = d) : R = R.next = Q, ye.lanes |= U, si |= U;
          Q = L.action, Pi && s(d, Q), d = L.hasEagerState ? L.eagerState : s(d, Q)
        } else U = {
          lane: Q,
          revertLane: L.revertLane,
          action: L.action,
          hasEagerState: L.hasEagerState,
          eagerState: L.eagerState,
          next: null
        }, R === null ? (w = R = U, v = d) : R = R.next = U, ye.lanes |= Q, si |= Q;
        L = L.next
      } while (L !== null && L !== n);
      if (R === null ? v = d : R.next = w, !Rt(d, e.memoizedState) && (nt = !0, q && (s = ys, s !== null))) throw s;
      e.memoizedState = d, e.baseState = v, e.baseQueue = R, o.lastRenderedState = d
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch]
  }

  function Fc(e) {
    var n = Ke(),
      s = n.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = e;
    var o = s.dispatch,
      c = s.pending,
      d = n.memoizedState;
    if (c !== null) {
      s.pending = null;
      var v = c = c.next;
      do d = e(d, v.action), v = v.next; while (v !== c);
      Rt(d, n.memoizedState) || (nt = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), s
        .lastRenderedState = d
    }
    return [d, o]
  }

  function Xm(e, n, s) {
    var o = ye,
      c = Ke(),
      d = Ee;
    if (d) {
      if (s === void 0) throw Error(r(407));
      s = s()
    } else s = n();
    var v = !Rt((Oe || c).memoizedState, s);
    v && (c.memoizedState = s, nt = !0), c = c.queue;
    var w = Km.bind(null, o, c, e);
    if (Ma(2048, 8, w, [e]), c.getSnapshot !== n || v || Fe !== null && Fe.memoizedState.tag & 1) {
      if (o.flags |= 2048, ws(9, to(), Fm.bind(null, o, c, s, n), null), Ve === null) throw Error(r(349));
      d || ($n & 124) !== 0 || Qm(o, n, s)
    }
    return s
  }

  function Qm(e, n, s) {
    e.flags |= 16384, e = {
      getSnapshot: n,
      value: s
    }, n = ye.updateQueue, n === null ? (n = Gc(), ye.updateQueue = n, n.stores = [e]) : (s = n.stores, s === null ? n
      .stores = [e] : s.push(e))
  }

  function Fm(e, n, s, o) {
    n.value = s, n.getSnapshot = o, Zm(n) && Wm(e)
  }

  function Km(e, n, s) {
    return s(function() {
      Zm(n) && Wm(e)
    })
  }

  function Zm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var s = n();
      return !Rt(e, s)
    } catch {
      return !0
    }
  }

  function Wm(e) {
    var n = ds(e, 2);
    n !== null && _t(n, e, 2)
  }

  function Kc(e) {
    var n = xt();
    if (typeof e == "function") {
      var s = e;
      if (e = s(), Pi) {
        Gn(!0);
        try {
          s()
        } finally {
          Gn(!1)
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mn,
      lastRenderedState: e
    }, n
  }

  function $m(e, n, s, o) {
    return e.baseState = s, Qc(e, Oe, typeof o == "function" ? o : Mn)
  }

  function GS(e, n, s, o, c) {
    if (io(e)) throw Error(r(485));
    if (e = n.action, e !== null) {
      var d = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          d.listeners.push(v)
        }
      };
      z.T !== null ? s(!0) : d.isTransition = !1, o(d), s = n.pending, s === null ? (d.next = n.pending = d, Im(n, d)) :
        (d.next = s.next, n.pending = s.next = d)
    }
  }

  function Im(e, n) {
    var s = n.action,
      o = n.payload,
      c = e.state;
    if (n.isTransition) {
      var d = z.T,
        v = {};
      z.T = v;
      try {
        var w = s(c, o),
          R = z.S;
        R !== null && R(v, w), Jm(e, n, w)
      } catch (L) {
        Zc(e, n, L)
      } finally {
        z.T = d
      }
    } else try {
      d = s(c, o), Jm(e, n, d)
    } catch (L) {
      Zc(e, n, L)
    }
  }

  function Jm(e, n, s) {
    s !== null && typeof s == "object" && typeof s.then == "function" ? s.then(function(o) {
      ep(e, n, o)
    }, function(o) {
      return Zc(e, n, o)
    }) : ep(e, n, s)
  }

  function ep(e, n, s) {
    n.status = "fulfilled", n.value = s, tp(n), e.state = s, n = e.pending, n !== null && (s = n.next, s === n ? e
      .pending = null : (s = s.next, n.next = s, Im(e, s)))
  }

  function Zc(e, n, s) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do n.status = "rejected", n.reason = s, tp(n), n = n.next; while (n !== o)
    }
    e.action = null
  }

  function tp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++)(0, e[n])()
  }

  function np(e, n) {
    return n
  }

  function ip(e, n) {
    if (Ee) {
      var s = Ve.formState;
      if (s !== null) {
        e: {
          var o = ye;
          if (Ee) {
            if (He) {
              t: {
                for (var c = He, d = un; c.nodeType !== 8;) {
                  if (!d) {
                    c = null;
                    break t
                  }
                  if (c = Wt(c.nextSibling), c === null) {
                    c = null;
                    break t
                  }
                }
                d = c.data,
                c = d === "F!" || d === "F" ? c : null
              }
              if (c) {
                He = Wt(c.nextSibling), o = c.data === "F!";
                break e
              }
            }
            zi(o)
          }
          o = !1
        }
        o && (n = s[0])
      }
    }
    return s = xt(), s.memoizedState = s.baseState = n, o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: np,
        lastRenderedState: n
      }, s.queue = o, s = Sp.bind(null, ye, o), o.dispatch = s, o = Kc(!1), d = eu.bind(null, ye, !1, o.queue), o =
      xt(), c = {
        state: n,
        dispatch: null,
        action: e,
        pending: null
      }, o.queue = c, s = GS.bind(null, ye, c, d, s), c.dispatch = s, o.memoizedState = e, [n, s, !1]
  }

  function sp(e) {
    var n = Ke();
    return ap(n, Oe, e)
  }

  function ap(e, n, s) {
    if (n = Qc(e, n, np)[0], e = eo(Mn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
      var o = Ra(n)
    } catch (v) {
      throw v === wa ? Kr : v
    } else o = n;
    n = Ke();
    var c = n.queue,
      d = c.dispatch;
    return s !== n.memoizedState && (ye.flags |= 2048, ws(9, to(), XS.bind(null, c, s), null)), [o, d, e]
  }

  function XS(e, n) {
    e.action = n
  }

  function rp(e) {
    var n = Ke(),
      s = Oe;
    if (s !== null) return ap(n, s, e);
    Ke(), n = n.memoizedState, s = Ke();
    var o = s.queue.dispatch;
    return s.memoizedState = e, [n, o, !1]
  }

  function ws(e, n, s, o) {
    return e = {
        tag: e,
        create: s,
        deps: o,
        inst: n,
        next: null
      }, n = ye.updateQueue, n === null && (n = Gc(), ye.updateQueue = n), s = n.lastEffect, s === null ? n.lastEffect =
      e.next = e : (o = s.next, s.next = e, e.next = o, n.lastEffect = e), e
  }

  function to() {
    return {
      destroy: void 0,
      resource: void 0
    }
  }

  function op() {
    return Ke().memoizedState
  }

  function no(e, n, s, o) {
    var c = xt();
    o = o === void 0 ? null : o, ye.flags |= e, c.memoizedState = ws(1 | n, to(), s, o)
  }

  function Ma(e, n, s, o) {
    var c = Ke();
    o = o === void 0 ? null : o;
    var d = c.memoizedState.inst;
    Oe !== null && o !== null && Uc(o, Oe.memoizedState.deps) ? c.memoizedState = ws(n, d, s, o) : (ye.flags |= e, c
      .memoizedState = ws(1 | n, d, s, o))
  }

  function lp(e, n) {
    no(8390656, 8, e, n)
  }

  function cp(e, n) {
    Ma(2048, 8, e, n)
  }

  function up(e, n) {
    return Ma(4, 2, e, n)
  }

  function fp(e, n) {
    return Ma(4, 4, e, n)
  }

  function dp(e, n) {
    if (typeof n == "function") {
      e = e();
      var s = n(e);
      return function() {
        typeof s == "function" ? s() : n(null)
      }
    }
    if (n != null) return e = e(), n.current = e,
      function() {
        n.current = null
      }
  }

  function hp(e, n, s) {
    s = s != null ? s.concat([e]) : null, Ma(4, 4, dp.bind(null, n, e), s)
  }

  function Wc() {}

  function mp(e, n) {
    var s = Ke();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    return n !== null && Uc(n, o[1]) ? o[0] : (s.memoizedState = [e, n], e)
  }

  function pp(e, n) {
    var s = Ke();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    if (n !== null && Uc(n, o[1])) return o[0];
    if (o = e(), Pi) {
      Gn(!0);
      try {
        e()
      } finally {
        Gn(!1)
      }
    }
    return s.memoizedState = [o, n], o
  }

  function $c(e, n, s) {
    return s === void 0 || ($n & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = s, e = vg(), ye.lanes |=
      e, si |= e, s)
  }

  function gp(e, n, s, o) {
    return Rt(s, n) ? s : vs.current !== null ? (e = $c(e, s, o), Rt(e, n) || (nt = !0), e) : ($n & 42) === 0 ? (nt = !
      0, e.memoizedState = s) : (e = vg(), ye.lanes |= e, si |= e, n)
  }

  function yp(e, n, s, o, c) {
    var d = K.p;
    K.p = d !== 0 && 8 > d ? d : 8;
    var v = z.T,
      w = {};
    z.T = w, eu(e, !1, n, s);
    try {
      var R = c(),
        L = z.S;
      if (L !== null && L(w, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var q = HS(R, o);
        Na(e, n, q, Dt(e))
      } else Na(e, n, o, Dt(e))
    } catch (Q) {
      Na(e, n, {
        then: function() {},
        status: "rejected",
        reason: Q
      }, Dt())
    } finally {
      K.p = d, z.T = v
    }
  }

  function QS() {}

  function Ic(e, n, s, o) {
    if (e.tag !== 5) throw Error(r(476));
    var c = vp(e).queue;
    yp(e, c, n, X, s === null ? QS : function() {
      return xp(e), s(o)
    })
  }

  function vp(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mn,
        lastRenderedState: X
      },
      next: null
    };
    var s = {};
    return n.next = {
      memoizedState: s,
      baseState: s,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mn,
        lastRenderedState: s
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n
  }

  function xp(e) {
    var n = vp(e).next.queue;
    Na(e, n, {}, Dt())
  }

  function Jc() {
    return ut(Fa)
  }

  function bp() {
    return Ke().memoizedState
  }

  function wp() {
    return Ke().memoizedState
  }

  function FS(e) {
    for (var n = e.return; n !== null;) {
      switch (n.tag) {
        case 24:
        case 3:
          var s = Dt();
          e = Zn(s);
          var o = Wn(n, e, s);
          o !== null && (_t(o, n, s), Ta(o, n, s)), n = {
            cache: Nc()
          }, e.payload = n;
          return
      }
      n = n.return
    }
  }

  function KS(e, n, s) {
    var o = Dt();
    s = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, io(e) ? Tp(n, s) : (s = xc(e, n, s, o), s !== null && (_t(s, e, o), Ap(s, n, o)))
  }

  function Sp(e, n, s) {
    var o = Dt();
    Na(e, n, s, o)
  }

  function Na(e, n, s, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (io(e)) Tp(n, c);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer, d !== null)) try {
        var v = n.lastRenderedState,
          w = d(v, s);
        if (c.hasEagerState = !0, c.eagerState = w, Rt(w, v)) return Br(e, n, c, 0), Ve === null && Ur(), !1
      } catch {}
      if (s = xc(e, n, c, o), s !== null) return _t(s, e, o), Ap(s, n, o), !0
    }
    return !1
  }

  function eu(e, n, s, o) {
    if (o = {
        lane: 2,
        revertLane: Du(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, io(e)) {
      if (n) throw Error(r(479))
    } else n = xc(e, s, o, 2), n !== null && _t(n, e, 2)
  }

  function io(e) {
    var n = e.alternate;
    return e === ye || n !== null && n === ye
  }

  function Tp(e, n) {
    xs = $r = !0;
    var s = e.pending;
    s === null ? n.next = n : (n.next = s.next, s.next = n), e.pending = n
  }

  function Ap(e, n, s) {
    if ((s & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, s |= o, n.lanes = s, Dh(e, s)
    }
  }
  var so = {
      readContext: ut,
      use: Jr,
      useCallback: Ge,
      useContext: Ge,
      useEffect: Ge,
      useImperativeHandle: Ge,
      useLayoutEffect: Ge,
      useInsertionEffect: Ge,
      useMemo: Ge,
      useReducer: Ge,
      useRef: Ge,
      useState: Ge,
      useDebugValue: Ge,
      useDeferredValue: Ge,
      useTransition: Ge,
      useSyncExternalStore: Ge,
      useId: Ge,
      useHostTransitionStatus: Ge,
      useFormState: Ge,
      useActionState: Ge,
      useOptimistic: Ge,
      useMemoCache: Ge,
      useCacheRefresh: Ge
    },
    Ep = {
      readContext: ut,
      use: Jr,
      useCallback: function(e, n) {
        return xt().memoizedState = [e, n === void 0 ? null : n], e
      },
      useContext: ut,
      useEffect: lp,
      useImperativeHandle: function(e, n, s) {
        s = s != null ? s.concat([e]) : null, no(4194308, 4, dp.bind(null, n, e), s)
      },
      useLayoutEffect: function(e, n) {
        return no(4194308, 4, e, n)
      },
      useInsertionEffect: function(e, n) {
        no(4, 2, e, n)
      },
      useMemo: function(e, n) {
        var s = xt();
        n = n === void 0 ? null : n;
        var o = e();
        if (Pi) {
          Gn(!0);
          try {
            e()
          } finally {
            Gn(!1)
          }
        }
        return s.memoizedState = [o, n], o
      },
      useReducer: function(e, n, s) {
        var o = xt();
        if (s !== void 0) {
          var c = s(n);
          if (Pi) {
            Gn(!0);
            try {
              s(n)
            } finally {
              Gn(!1)
            }
          }
        } else c = n;
        return o.memoizedState = o.baseState = c, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: c
        }, o.queue = e, e = e.dispatch = KS.bind(null, ye, e), [o.memoizedState, e]
      },
      useRef: function(e) {
        var n = xt();
        return e = {
          current: e
        }, n.memoizedState = e
      },
      useState: function(e) {
        e = Kc(e);
        var n = e.queue,
          s = Sp.bind(null, ye, n);
        return n.dispatch = s, [e.memoizedState, s]
      },
      useDebugValue: Wc,
      useDeferredValue: function(e, n) {
        var s = xt();
        return $c(s, e, n)
      },
      useTransition: function() {
        var e = Kc(!1);
        return e = yp.bind(null, ye, e.queue, !0, !1), xt().memoizedState = e, [!1, e]
      },
      useSyncExternalStore: function(e, n, s) {
        var o = ye,
          c = xt();
        if (Ee) {
          if (s === void 0) throw Error(r(407));
          s = s()
        } else {
          if (s = n(), Ve === null) throw Error(r(349));
          (Te & 124) !== 0 || Qm(o, n, s)
        }
        c.memoizedState = s;
        var d = {
          value: s,
          getSnapshot: n
        };
        return c.queue = d, lp(Km.bind(null, o, d, e), [e]), o.flags |= 2048, ws(9, to(), Fm.bind(null, o, d, s, n),
          null), s
      },
      useId: function() {
        var e = xt(),
          n = Ve.identifierPrefix;
        if (Ee) {
          var s = En,
            o = An;
          s = (o & ~(1 << 32 - Ct(o) - 1)).toString(32) + s, n = "«" + n + "R" + s, s = Ir++, 0 < s && (n += "H" + s
            .toString(32)), n += "»"
        } else s = qS++, n = "«" + n + "r" + s.toString(32) + "»";
        return e.memoizedState = n
      },
      useHostTransitionStatus: Jc,
      useFormState: ip,
      useActionState: ip,
      useOptimistic: function(e) {
        var n = xt();
        n.memoizedState = n.baseState = e;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return n.queue = s, n = eu.bind(null, ye, !0, s), s.dispatch = n, [e, n]
      },
      useMemoCache: Xc,
      useCacheRefresh: function() {
        return xt().memoizedState = FS.bind(null, ye)
      }
    },
    Cp = {
      readContext: ut,
      use: Jr,
      useCallback: mp,
      useContext: ut,
      useEffect: cp,
      useImperativeHandle: hp,
      useInsertionEffect: up,
      useLayoutEffect: fp,
      useMemo: pp,
      useReducer: eo,
      useRef: op,
      useState: function() {
        return eo(Mn)
      },
      useDebugValue: Wc,
      useDeferredValue: function(e, n) {
        var s = Ke();
        return gp(s, Oe.memoizedState, e, n)
      },
      useTransition: function() {
        var e = eo(Mn)[0],
          n = Ke().memoizedState;
        return [typeof e == "boolean" ? e : Ra(e), n]
      },
      useSyncExternalStore: Xm,
      useId: bp,
      useHostTransitionStatus: Jc,
      useFormState: sp,
      useActionState: sp,
      useOptimistic: function(e, n) {
        var s = Ke();
        return $m(s, Oe, e, n)
      },
      useMemoCache: Xc,
      useCacheRefresh: wp
    },
    ZS = {
      readContext: ut,
      use: Jr,
      useCallback: mp,
      useContext: ut,
      useEffect: cp,
      useImperativeHandle: hp,
      useInsertionEffect: up,
      useLayoutEffect: fp,
      useMemo: pp,
      useReducer: Fc,
      useRef: op,
      useState: function() {
        return Fc(Mn)
      },
      useDebugValue: Wc,
      useDeferredValue: function(e, n) {
        var s = Ke();
        return Oe === null ? $c(s, e, n) : gp(s, Oe.memoizedState, e, n)
      },
      useTransition: function() {
        var e = Fc(Mn)[0],
          n = Ke().memoizedState;
        return [typeof e == "boolean" ? e : Ra(e), n]
      },
      useSyncExternalStore: Xm,
      useId: bp,
      useHostTransitionStatus: Jc,
      useFormState: rp,
      useActionState: rp,
      useOptimistic: function(e, n) {
        var s = Ke();
        return Oe !== null ? $m(s, Oe, e, n) : (s.baseState = e, [e, s.queue.dispatch])
      },
      useMemoCache: Xc,
      useCacheRefresh: wp
    },
    Ss = null,
    ja = 0;

  function ao(e) {
    var n = ja;
    return ja += 1, Ss === null && (Ss = []), km(Ss, e, n)
  }

  function Oa(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null
  }

  function ro(e, n) {
    throw n.$$typeof === x ? Error(r(525)) : (e = Object.prototype.toString.call(n), Error(r(31, e ===
      "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)))
  }

  function Rp(e) {
    var n = e._init;
    return n(e._payload)
  }

  function Mp(e) {
    function n(O, N) {
      if (e) {
        var V = O.deletions;
        V === null ? (O.deletions = [N], O.flags |= 16) : V.push(N)
      }
    }

    function s(O, N) {
      if (!e) return null;
      for (; N !== null;) n(O, N), N = N.sibling;
      return null
    }

    function o(O) {
      for (var N = new Map; O !== null;) O.key !== null ? N.set(O.key, O) : N.set(O.index, O), O = O.sibling;
      return N
    }

    function c(O, N) {
      return O = Tn(O, N), O.index = 0, O.sibling = null, O
    }

    function d(O, N, V) {
      return O.index = V, e ? (V = O.alternate, V !== null ? (V = V.index, V < N ? (O.flags |= 67108866, N) : V) : (O
        .flags |= 67108866, N)) : (O.flags |= 1048576, N)
    }

    function v(O) {
      return e && O.alternate === null && (O.flags |= 67108866), O
    }

    function w(O, N, V, G) {
      return N === null || N.tag !== 6 ? (N = wc(V, O.mode, G), N.return = O, N) : (N = c(N, V), N.return = O, N)
    }

    function R(O, N, V, G) {
      var te = V.type;
      return te === E ? q(O, N, V.props.children, G, V.key) : N !== null && (N.elementType === te || typeof te ==
        "object" && te !== null && te.$$typeof === H && Rp(te) === N.type) ? (N = c(N, V.props), Oa(N, V), N.return =
        O, N) : (N = qr(V.type, V.key, V.props, null, O.mode, G), Oa(N, V), N.return = O, N)
    }

    function L(O, N, V, G) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== V.containerInfo || N.stateNode
        .implementation !== V.implementation ? (N = Sc(V, O.mode, G), N.return = O, N) : (N = c(N, V.children || []), N
          .return = O, N)
    }

    function q(O, N, V, G, te) {
      return N === null || N.tag !== 7 ? (N = ji(V, O.mode, G, te), N.return = O, N) : (N = c(N, V), N.return = O, N)
    }

    function Q(O, N, V) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return N = wc("" + N, O
        .mode, V), N.return = O, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case b:
            return V = qr(N.type, N.key, N.props, null, O.mode, V), Oa(V, N), V.return = O, V;
          case T:
            return N = Sc(N, O.mode, V), N.return = O, N;
          case H:
            var G = N._init;
            return N = G(N._payload), Q(O, N, V)
        }
        if (fe(N) || ce(N)) return N = ji(N, O.mode, V, null), N.return = O, N;
        if (typeof N.then == "function") return Q(O, ao(N), V);
        if (N.$$typeof === D) return Q(O, Qr(O, N), V);
        ro(O, N)
      }
      return null
    }

    function U(O, N, V, G) {
      var te = N !== null ? N.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint") return te !== null ? null :
        w(O, N, "" + V, G);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case b:
            return V.key === te ? R(O, N, V, G) : null;
          case T:
            return V.key === te ? L(O, N, V, G) : null;
          case H:
            return te = V._init, V = te(V._payload), U(O, N, V, G)
        }
        if (fe(V) || ce(V)) return te !== null ? null : q(O, N, V, G, null);
        if (typeof V.then == "function") return U(O, N, ao(V), G);
        if (V.$$typeof === D) return U(O, N, Qr(O, V), G);
        ro(O, V)
      }
      return null
    }

    function B(O, N, V, G, te) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint") return O = O.get(V) || null,
        w(N, O, "" + G, te);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case b:
            return O = O.get(G.key === null ? V : G.key) || null, R(N, O, G, te);
          case T:
            return O = O.get(G.key === null ? V : G.key) || null, L(N, O, G, te);
          case H:
            var be = G._init;
            return G = be(G._payload), B(O, N, V, G, te)
        }
        if (fe(G) || ce(G)) return O = O.get(V) || null, q(N, O, G, te, null);
        if (typeof G.then == "function") return B(O, N, V, ao(G), te);
        if (G.$$typeof === D) return B(O, N, V, Qr(N, G), te);
        ro(N, G)
      }
      return null
    }

    function me(O, N, V, G) {
      for (var te = null, be = null, le = N, he = N = 0, st = null; le !== null && he < V.length; he++) {
        le.index > he ? (st = le, le = null) : st = le.sibling;
        var Ae = U(O, le, V[he], G);
        if (Ae === null) {
          le === null && (le = st);
          break
        }
        e && le && Ae.alternate === null && n(O, le), N = d(Ae, N, he), be === null ? te = Ae : be.sibling = Ae, be =
          Ae, le = st
      }
      if (he === V.length) return s(O, le), Ee && Di(O, he), te;
      if (le === null) {
        for (; he < V.length; he++) le = Q(O, V[he], G), le !== null && (N = d(le, N, he), be === null ? te = le : be
          .sibling = le, be = le);
        return Ee && Di(O, he), te
      }
      for (le = o(le); he < V.length; he++) st = B(le, O, he, V[he], G), st !== null && (e && st.alternate !== null &&
        le.delete(st.key === null ? he : st.key), N = d(st, N, he), be === null ? te = st : be.sibling = st, be = st);
      return e && le.forEach(function(hi) {
        return n(O, hi)
      }), Ee && Di(O, he), te
    }

    function ue(O, N, V, G) {
      if (V == null) throw Error(r(151));
      for (var te = null, be = null, le = N, he = N = 0, st = null, Ae = V.next(); le !== null && !Ae.done; he++, Ae = V
        .next()) {
        le.index > he ? (st = le, le = null) : st = le.sibling;
        var hi = U(O, le, Ae.value, G);
        if (hi === null) {
          le === null && (le = st);
          break
        }
        e && le && hi.alternate === null && n(O, le), N = d(hi, N, he), be === null ? te = hi : be.sibling = hi, be =
          hi, le = st
      }
      if (Ae.done) return s(O, le), Ee && Di(O, he), te;
      if (le === null) {
        for (; !Ae.done; he++, Ae = V.next()) Ae = Q(O, Ae.value, G), Ae !== null && (N = d(Ae, N, he), be === null ?
          te = Ae : be.sibling = Ae, be = Ae);
        return Ee && Di(O, he), te
      }
      for (le = o(le); !Ae.done; he++, Ae = V.next()) Ae = B(le, O, he, Ae.value, G), Ae !== null && (e && Ae
        .alternate !== null && le.delete(Ae.key === null ? he : Ae.key), N = d(Ae, N, he), be === null ? te = Ae : be
        .sibling = Ae, be = Ae);
      return e && le.forEach(function(WT) {
        return n(O, WT)
      }), Ee && Di(O, he), te
    }

    function _e(O, N, V, G) {
      if (typeof V == "object" && V !== null && V.type === E && V.key === null && (V = V.props.children), typeof V ==
        "object" && V !== null) {
        switch (V.$$typeof) {
          case b:
            e: {
              for (var te = V.key; N !== null;) {
                if (N.key === te) {
                  if (te = V.type, te === E) {
                    if (N.tag === 7) {
                      s(O, N.sibling), G = c(N, V.props.children), G.return = O, O = G;
                      break e
                    }
                  } else if (N.elementType === te || typeof te == "object" && te !== null && te.$$typeof === H && Rp(
                      te) === N.type) {
                    s(O, N.sibling), G = c(N, V.props), Oa(G, V), G.return = O, O = G;
                    break e
                  }
                  s(O, N);
                  break
                } else n(O, N);
                N = N.sibling
              }
              V.type === E ? (G = ji(V.props.children, O.mode, G, V.key), G.return = O, O = G) : (G = qr(V.type, V
                .key, V.props, null, O.mode, G), Oa(G, V), G.return = O, O = G)
            }
            return v(O);
          case T:
            e: {
              for (te = V.key; N !== null;) {
                if (N.key === te)
                  if (N.tag === 4 && N.stateNode.containerInfo === V.containerInfo && N.stateNode.implementation === V
                    .implementation) {
                    s(O, N.sibling), G = c(N, V.children || []), G.return = O, O = G;
                    break e
                  } else {
                    s(O, N);
                    break
                  }
                else n(O, N);
                N = N.sibling
              }
              G = Sc(V, O.mode, G),
              G.return = O,
              O = G
            }
            return v(O);
          case H:
            return te = V._init, V = te(V._payload), _e(O, N, V, G)
        }
        if (fe(V)) return me(O, N, V, G);
        if (ce(V)) {
          if (te = ce(V), typeof te != "function") throw Error(r(150));
          return V = te.call(V), ue(O, N, V, G)
        }
        if (typeof V.then == "function") return _e(O, N, ao(V), G);
        if (V.$$typeof === D) return _e(O, N, Qr(O, V), G);
        ro(O, V)
      }
      return typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint" ? (V = "" + V, N !==
        null && N.tag === 6 ? (s(O, N.sibling), G = c(N, V), G.return = O, O = G) : (s(O, N), G = wc(V, O.mode, G), G
          .return = O, O = G), v(O)) : s(O, N)
    }
    return function(O, N, V, G) {
      try {
        ja = 0;
        var te = _e(O, N, V, G);
        return Ss = null, te
      } catch (le) {
        if (le === wa || le === Kr) throw le;
        var be = Mt(29, le, null, O.mode);
        return be.lanes = G, be.return = O, be
      }
    }
  }
  var Ts = Mp(!0),
    Np = Mp(!1),
    Yt = Y(null),
    fn = null;

  function In(e) {
    var n = e.alternate;
    $($e, $e.current & 1), $(Yt, e), fn === null && (n === null || vs.current !== null || n.memoizedState !== null) && (
      fn = e)
  }

  function jp(e) {
    if (e.tag === 22) {
      if ($($e, $e.current), $(Yt, e), fn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (fn = e)
      }
    } else Jn()
  }

  function Jn() {
    $($e, $e.current), $(Yt, Yt.current)
  }

  function Nn(e) {
    I(Yt), fn === e && (fn = null), I($e)
  }
  var $e = Y(0);

  function oo(e) {
    for (var n = e; n !== null;) {
      if (n.tag === 13) {
        var s = n.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || Gu(s))) return n
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue
      }
      if (n === e) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === e) return null;
        n = n.return
      }
      n.sibling.return = n.return, n = n.sibling
    }
    return null
  }

  function tu(e, n, s, o) {
    n = e.memoizedState, s = s(o, n), s = s == null ? n : g({}, n, s), e.memoizedState = s, e.lanes === 0 && (e
      .updateQueue.baseState = s)
  }
  var nu = {
    enqueueSetState: function(e, n, s) {
      e = e._reactInternals;
      var o = Dt(),
        c = Zn(o);
      c.payload = n, s != null && (c.callback = s), n = Wn(e, c, o), n !== null && (_t(n, e, o), Ta(n, e, o))
    },
    enqueueReplaceState: function(e, n, s) {
      e = e._reactInternals;
      var o = Dt(),
        c = Zn(o);
      c.tag = 1, c.payload = n, s != null && (c.callback = s), n = Wn(e, c, o), n !== null && (_t(n, e, o), Ta(n, e,
        o))
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var s = Dt(),
        o = Zn(s);
      o.tag = 2, n != null && (o.callback = n), n = Wn(e, o, s), n !== null && (_t(n, e, s), Ta(n, e, s))
    }
  };

  function Op(e, n, s, o, c, d, v) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, d, v) : n
      .prototype && n.prototype.isPureReactComponent ? !ha(s, o) || !ha(c, d) : !0
  }

  function Dp(e, n, s, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, o), typeof n
      .UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, o), n.state !== e && nu
      .enqueueReplaceState(n, n.state, null)
  }

  function Ui(e, n) {
    var s = n;
    if ("ref" in n) {
      s = {};
      for (var o in n) o !== "ref" && (s[o] = n[o])
    }
    if (e = e.defaultProps) {
      s === n && (s = g({}, s));
      for (var c in e) s[c] === void 0 && (s[c] = e[c])
    }
    return s
  }
  var lo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(
          e),
        error: e
      });
      if (!window.dispatchEvent(n)) return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return
    }
    console.error(e)
  };

  function _p(e) {
    lo(e)
  }

  function zp(e) {
    console.error(e)
  }

  function Vp(e) {
    lo(e)
  }

  function co(e, n) {
    try {
      var s = e.onUncaughtError;
      s(n.value, {
        componentStack: n.stack
      })
    } catch (o) {
      setTimeout(function() {
        throw o
      })
    }
  }

  function Lp(e, n, s) {
    try {
      var o = e.onCaughtError;
      o(s.value, {
        componentStack: s.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      })
    } catch (c) {
      setTimeout(function() {
        throw c
      })
    }
  }

  function iu(e, n, s) {
    return s = Zn(s), s.tag = 3, s.payload = {
      element: null
    }, s.callback = function() {
      co(e, n)
    }, s
  }

  function kp(e) {
    return e = Zn(e), e.tag = 3, e
  }

  function Pp(e, n, s, o) {
    var c = s.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = o.value;
      e.payload = function() {
        return c(d)
      }, e.callback = function() {
        Lp(n, s, o)
      }
    }
    var v = s.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
      Lp(n, s, o), typeof c != "function" && (ai === null ? ai = new Set([this]) : ai.add(this));
      var w = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: w !== null ? w : ""
      })
    })
  }

  function WS(e, n, s, o, c) {
    if (s.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = s.alternate, n !== null && va(n, s, c, !0), s = Yt.current, s !== null) {
        switch (s.tag) {
          case 13:
            return fn === null ? Ru() : s.alternate === null && qe === 0 && (qe = 3), s.flags &= -257, s.flags |= 65536,
              s.lanes = c, o === Dc ? s.flags |= 16384 : (n = s.updateQueue, n === null ? s.updateQueue = new Set([o]) :
                n.add(o), Nu(e, o, c)), !1;
          case 22:
            return s.flags |= 65536, o === Dc ? s.flags |= 16384 : (n = s.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([o])
            }, s.updateQueue = n) : (s = n.retryQueue, s === null ? n.retryQueue = new Set([o]) : s.add(o)), Nu(e,
              o, c)), !1
        }
        throw Error(r(435, s.tag))
      }
      return Nu(e, o, c), Ru(), !1
    }
    if (Ee) return n = Yt.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n
      .lanes = c, o !== Ec && (e = Error(r(422), {
        cause: o
      }), ya(Ut(e, s)))) : (o !== Ec && (n = Error(r(423), {
      cause: o
    }), ya(Ut(n, s))), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = Ut(o, s), c = iu(e
      .stateNode, o, c), Vc(e, c), qe !== 4 && (qe = 2)), !1;
    var d = Error(r(520), {
      cause: o
    });
    if (d = Ut(d, s), Pa === null ? Pa = [d] : Pa.push(d), qe !== 4 && (qe = 2), n === null) return !0;
    o = Ut(o, s), s = n;
    do {
      switch (s.tag) {
        case 3:
          return s.flags |= 65536, e = c & -c, s.lanes |= e, e = iu(s.stateNode, o, e), Vc(s, e), !1;
        case 1:
          if (n = s.type, d = s.stateNode, (s.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" ||
              d !== null && typeof d.componentDidCatch == "function" && (ai === null || !ai.has(d)))) return s.flags |=
            65536, c &= -c, s.lanes |= c, c = kp(c), Pp(c, e, s, o), Vc(s, c), !1
      }
      s = s.return
    } while (s !== null);
    return !1
  }
  var Up = Error(r(461)),
    nt = !1;

  function rt(e, n, s, o) {
    n.child = e === null ? Np(n, null, s, o) : Ts(n, e.child, s, o)
  }

  function Bp(e, n, s, o, c) {
    s = s.render;
    var d = n.ref;
    if ("ref" in o) {
      var v = {};
      for (var w in o) w !== "ref" && (v[w] = o[w])
    } else v = o;
    return Li(n), o = Bc(e, n, s, v, d, c), w = Hc(), e !== null && !nt ? (qc(e, n, c), jn(e, n, c)) : (Ee && w && Tc(
      n), n.flags |= 1, rt(e, n, o, c), n.child)
  }

  function Hp(e, n, s, o, c) {
    if (e === null) {
      var d = s.type;
      return typeof d == "function" && !bc(d) && d.defaultProps === void 0 && s.compare === null ? (n.tag = 15, n.type =
        d, qp(e, n, d, o, c)) : (e = qr(s.type, null, o, n, n.mode, c), e.ref = n.ref, e.return = n, n.child = e)
    }
    if (d = e.child, !fu(e, c)) {
      var v = d.memoizedProps;
      if (s = s.compare, s = s !== null ? s : ha, s(v, o) && e.ref === n.ref) return jn(e, n, c)
    }
    return n.flags |= 1, e = Tn(d, o), e.ref = n.ref, e.return = n, n.child = e
  }

  function qp(e, n, s, o, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (ha(d, o) && e.ref === n.ref)
        if (nt = !1, n.pendingProps = o = d, fu(e, c))(e.flags & 131072) !== 0 && (nt = !0);
        else return n.lanes = e.lanes, jn(e, n, c)
    }
    return su(e, n, s, o, c)
  }

  function Yp(e, n, s) {
    var o = n.pendingProps,
      c = o.children,
      d = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = d !== null ? d.baseLanes | s : s, e !== null) {
          for (c = n.child = e.child, d = 0; c !== null;) d = d | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = d & ~o
        } else n.childLanes = 0, n.child = null;
        return Gp(e, n, o, s)
      }
      if ((s & 536870912) !== 0) n.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && Fr(n, d !== null ? d.cachePool : null), d !== null ? qm(n, d) : kc(), jp(n);
      else return n.lanes = n.childLanes = 536870912, Gp(e, n, d !== null ? d.baseLanes | s : s, s)
    } else d !== null ? (Fr(n, d.cachePool), qm(n, d), Jn(), n.memoizedState = null) : (e !== null && Fr(n, null), kc(),
      Jn());
    return rt(e, n, c, s), n.child
  }

  function Gp(e, n, s, o) {
    var c = Oc();
    return c = c === null ? null : {
      parent: We._currentValue,
      pool: c
    }, n.memoizedState = {
      baseLanes: s,
      cachePool: c
    }, e !== null && Fr(n, null), kc(), jp(n), e !== null && va(e, n, o, !0), null
  }

  function uo(e, n) {
    var s = n.ref;
    if (s === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(r(284));
      (e === null || e.ref !== s) && (n.flags |= 4194816)
    }
  }

  function su(e, n, s, o, c) {
    return Li(n), s = Bc(e, n, s, o, void 0, c), o = Hc(), e !== null && !nt ? (qc(e, n, c), jn(e, n, c)) : (Ee && o &&
      Tc(n), n.flags |= 1, rt(e, n, s, c), n.child)
  }

  function Xp(e, n, s, o, c, d) {
    return Li(n), n.updateQueue = null, s = Gm(n, o, s, c), Ym(e), o = Hc(), e !== null && !nt ? (qc(e, n, d), jn(e, n,
      d)) : (Ee && o && Tc(n), n.flags |= 1, rt(e, n, s, d), n.child)
  }

  function Qp(e, n, s, o, c) {
    if (Li(n), n.stateNode === null) {
      var d = hs,
        v = s.contextType;
      typeof v == "object" && v !== null && (d = ut(v)), d = new s(o, d), n.memoizedState = d.state !== null && d
        .state !== void 0 ? d.state : null, d.updater = nu, n.stateNode = d, d._reactInternals = n, d = n.stateNode, d
        .props = o, d.state = n.memoizedState, d.refs = {}, _c(n), v = s.contextType, d.context = typeof v ==
        "object" && v !== null ? ut(v) : hs, d.state = n.memoizedState, v = s.getDerivedStateFromProps, typeof v ==
        "function" && (tu(n, s, v, o), d.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d
        .componentWillMount != "function" || (v = d.state, typeof d.componentWillMount == "function" && d
          .componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(),
          v !== d.state && nu.enqueueReplaceState(d, d.state, null), Ea(n, o, d, c), Aa(), d.state = n.memoizedState),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308), o = !0
    } else if (e === null) {
      d = n.stateNode;
      var w = n.memoizedProps,
        R = Ui(s, w);
      d.props = R;
      var L = d.context,
        q = s.contextType;
      v = hs, typeof q == "object" && q !== null && (v = ut(q));
      var Q = s.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof d.getSnapshotBeforeUpdate == "function", w = n.pendingProps !== w, q ||
        typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (
          w || L !== v) && Dp(n, d, o, v), Kn = !1;
      var U = n.memoizedState;
      d.state = U, Ea(n, o, d, c), Aa(), L = n.memoizedState, w || U !== L || Kn ? (typeof Q == "function" && (tu(n, s,
        Q, o), L = n.memoizedState), (R = Kn || Op(n, s, R, o, U, L, v)) ? (q || typeof d
        .UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d
          .componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount ==
          "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |=
          4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n
        .memoizedState = L), d.props = o, d.state = L, d.context = v, o = R) : (typeof d.componentDidMount ==
        "function" && (n.flags |= 4194308), o = !1)
    } else {
      d = n.stateNode, zc(e, n), v = n.memoizedProps, q = Ui(s, v), d.props = q, Q = n.pendingProps, U = d.context, L =
        s.contextType, R = hs, typeof L == "object" && L !== null && (R = ut(L)), w = s.getDerivedStateFromProps, (L =
          typeof w == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d
        .UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !==
          Q || U !== R) && Dp(n, d, o, R), Kn = !1, U = n.memoizedState, d.state = U, Ea(n, o, d, c), Aa();
      var B = n.memoizedState;
      v !== Q || U !== B || Kn || e !== null && e.dependencies !== null && Xr(e.dependencies) ? (typeof w ==
        "function" && (tu(n, s, w, o), B = n.memoizedState), (q = Kn || Op(n, s, q, o, U, B, R) || e !== null && e
          .dependencies !== null && Xr(e.dependencies)) ? (L || typeof d.UNSAFE_componentWillUpdate != "function" &&
          typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d
            .componentWillUpdate(o, B, R), typeof d.UNSAFE_componentWillUpdate == "function" && d
            .UNSAFE_componentWillUpdate(o, B, R)), typeof d.componentDidUpdate == "function" && (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate !=
          "function" || v === e.memoizedProps && U === e.memoizedState || (n.flags |= 4), typeof d
          .getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (n.flags |=
            1024), n.memoizedProps = o, n.memoizedState = B), d.props = o, d.state = B, d.context = R, o = q) : (
        typeof d.componentDidUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (n.flags |= 4),
        typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (n
          .flags |= 1024), o = !1)
    }
    return d = o, uo(e, n), o = (n.flags & 128) !== 0, d || o ? (d = n.stateNode, s = o && typeof s
        .getDerivedStateFromError != "function" ? null : d.render(), n.flags |= 1, e !== null && o ? (n.child = Ts(n, e
          .child, null, c), n.child = Ts(n, null, s, c)) : rt(e, n, s, c), n.memoizedState = d.state, e = n.child) : e =
      jn(e, n, c), e
  }

  function Fp(e, n, s, o) {
    return ga(), n.flags |= 256, rt(e, n, s, o), n.child
  }
  var au = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };

  function ru(e) {
    return {
      baseLanes: e,
      cachePool: zm()
    }
  }

  function ou(e, n, s) {
    return e = e !== null ? e.childLanes & ~s : 0, n && (e |= Gt), e
  }

  function Kp(e, n, s) {
    var o = n.pendingProps,
      c = !1,
      d = (n.flags & 128) !== 0,
      v;
    if ((v = d) || (v = e !== null && e.memoizedState === null ? !1 : ($e.current & 2) !== 0), v && (c = !0, n.flags &=
        -129), v = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ee) {
        if (c ? In(n) : Jn(), Ee) {
          var w = He,
            R;
          if (R = w) {
            e: {
              for (R = w, w = un; R.nodeType !== 8;) {
                if (!w) {
                  w = null;
                  break e
                }
                if (R = Wt(R.nextSibling), R === null) {
                  w = null;
                  break e
                }
              }
              w = R
            }
            w !== null ? (n.memoizedState = {
              dehydrated: w,
              treeContext: Oi !== null ? {
                id: An,
                overflow: En
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = Mt(18, null, null, 0), R.stateNode = w, R.return = n, n.child = R, ht = n, He = null, R = !0) : R = !
              1
          }
          R || zi(n)
        }
        if (w = n.memoizedState, w !== null && (w = w.dehydrated, w !== null)) return Gu(w) ? n.lanes = 32 : n.lanes =
          536870912, null;
        Nn(n)
      }
      return w = o.children, o = o.fallback, c ? (Jn(), c = n.mode, w = fo({
          mode: "hidden",
          children: w
        }, c), o = ji(o, c, s, null), w.return = n, o.return = n, w.sibling = o, n.child = w, c = n.child, c
        .memoizedState = ru(s), c.childLanes = ou(e, v, s), n.memoizedState = au, o) : (In(n), lu(n, w))
    }
    if (R = e.memoizedState, R !== null && (w = R.dehydrated, w !== null)) {
      if (d) n.flags & 256 ? (In(n), n.flags &= -257, n = cu(e, n, s)) : n.memoizedState !== null ? (Jn(), n.child = e
        .child, n.flags |= 128, n = null) : (Jn(), c = o.fallback, w = n.mode, o = fo({
          mode: "visible",
          children: o.children
        }, w), c = ji(c, w, s, null), c.flags |= 2, o.return = n, c.return = n, o.sibling = c, n.child = o, Ts(n, e
          .child, null, s), o = n.child, o.memoizedState = ru(s), o.childLanes = ou(e, v, s), n.memoizedState = au,
        n = c);
      else if (In(n), Gu(w)) {
        if (v = w.nextSibling && w.nextSibling.dataset, v) var L = v.dgst;
        v = L, o = Error(r(419)), o.stack = "", o.digest = v, ya({
          value: o,
          source: null,
          stack: null
        }), n = cu(e, n, s)
      } else if (nt || va(e, n, s, !1), v = (s & e.childLanes) !== 0, nt || v) {
        if (v = Ve, v !== null && (o = s & -s, o = (o & 42) !== 0 ? 1 : Xl(o), o = (o & (v.suspendedLanes | s)) !== 0 ?
            0 : o, o !== 0 && o !== R.retryLane)) throw R.retryLane = o, ds(e, o), _t(v, e, o), Up;
        w.data === "$?" || Ru(), n = cu(e, n, s)
      } else w.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = R.treeContext, He = Wt(w
        .nextSibling), ht = n, Ee = !0, _i = null, un = !1, e !== null && (Ht[qt++] = An, Ht[qt++] = En, Ht[qt++] =
        Oi, An = e.id, En = e.overflow, Oi = n), n = lu(n, o.children), n.flags |= 4096);
      return n
    }
    return c ? (Jn(), c = o.fallback, w = n.mode, R = e.child, L = R.sibling, o = Tn(R, {
        mode: "hidden",
        children: o.children
      }), o.subtreeFlags = R.subtreeFlags & 65011712, L !== null ? c = Tn(L, c) : (c = ji(c, w, s, null), c.flags |=
        2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, w = e.child.memoizedState,
      w === null ? w = ru(s) : (R = w.cachePool, R !== null ? (L = We._currentValue, R = R.parent !== L ? {
        parent: L,
        pool: L
      } : R) : R = zm(), w = {
        baseLanes: w.baseLanes | s,
        cachePool: R
      }), c.memoizedState = w, c.childLanes = ou(e, v, s), n.memoizedState = au, o) : (In(n), s = e.child, e = s
      .sibling, s = Tn(s, {
        mode: "visible",
        children: o.children
      }), s.return = n, s.sibling = null, e !== null && (v = n.deletions, v === null ? (n.deletions = [e], n.flags |=
        16) : v.push(e)), n.child = s, n.memoizedState = null, s)
  }

  function lu(e, n) {
    return n = fo({
      mode: "visible",
      children: n
    }, e.mode), n.return = e, e.child = n
  }

  function fo(e, n) {
    return e = Mt(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e
  }

  function cu(e, n, s) {
    return Ts(n, e.child, null, s), e = lu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e
  }

  function Zp(e, n, s) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), Rc(e.return, n, s)
  }

  function uu(e, n, s, o, c) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: s,
      tailMode: c
    } : (d.isBackwards = n, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = s, d.tailMode = c)
  }

  function Wp(e, n, s) {
    var o = n.pendingProps,
      c = o.revealOrder,
      d = o.tail;
    if (rt(e, n, o.children, s), o = $e.current, (o & 2) !== 0) o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && Zp(e, s, n);
        else if (e.tag === 19) Zp(e, s, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue
        }
        if (e === n) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === n) break e;
          e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
      }
      o &= 1
    }
    switch ($($e, o), c) {
      case "forwards":
        for (s = n.child, c = null; s !== null;) e = s.alternate, e !== null && oo(e) === null && (c = s), s = s
          .sibling;
        s = c, s === null ? (c = n.child, n.child = null) : (c = s.sibling, s.sibling = null), uu(n, !1, c, s, d);
        break;
      case "backwards":
        for (s = null, c = n.child, n.child = null; c !== null;) {
          if (e = c.alternate, e !== null && oo(e) === null) {
            n.child = c;
            break
          }
          e = c.sibling, c.sibling = s, s = c, c = e
        }
        uu(n, !0, s, null, d);
        break;
      case "together":
        uu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null
    }
    return n.child
  }

  function jn(e, n, s) {
    if (e !== null && (n.dependencies = e.dependencies), si |= n.lanes, (s & n.childLanes) === 0)
      if (e !== null) {
        if (va(e, n, s, !1), (s & n.childLanes) === 0) return null
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(r(153));
    if (n.child !== null) {
      for (e = n.child, s = Tn(e, e.pendingProps), n.child = s, s.return = n; e.sibling !== null;) e = e.sibling, s = s
        .sibling = Tn(e, e.pendingProps), s.return = n;
      s.sibling = null
    }
    return n.child
  }

  function fu(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xr(e)))
  }

  function $S(e, n, s) {
    switch (n.tag) {
      case 3:
        Re(n, n.stateNode.containerInfo), Fn(n, We, e.memoizedState.cache), ga();
        break;
      case 27:
      case 5:
        qn(n);
        break;
      case 4:
        Re(n, n.stateNode.containerInfo);
        break;
      case 10:
        Fn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null) return o.dehydrated !== null ? (In(n), n.flags |= 128, null) : (s & n.child.childLanes) !== 0 ?
          Kp(e, n, s) : (In(n), e = jn(e, n, s), e !== null ? e.sibling : null);
        In(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (o = (s & n.childLanes) !== 0, o || (va(e, n, s, !1), o = (s & n.childLanes) !== 0), c) {
          if (o) return Wp(e, n, s);
          n.flags |= 128
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), $($e, $e
            .current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Yp(e, n, s);
      case 24:
        Fn(n, We, e.memoizedState.cache)
    }
    return jn(e, n, s)
  }

  function $p(e, n, s) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) nt = !0;
      else {
        if (!fu(e, s) && (n.flags & 128) === 0) return nt = !1, $S(e, n, s);
        nt = (e.flags & 131072) !== 0
      }
    else nt = !1, Ee && (n.flags & 1048576) !== 0 && Rm(n, Gr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType,
            c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function") bc(o) ? (e = Ui(o, e), n.tag = 1, n = Qp(null, n,
            o, e, s)) : (n.tag = 0, n = su(null, n, o, e, s));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === k) {
                n.tag = 11, n = Bp(null, n, o, e, s);
                break e
              } else if (c === Z) {
                n.tag = 14, n = Hp(null, n, o, e, s);
                break e
              }
            }
            throw n = J(o) || o, Error(r(306, n, ""))
          }
        }
        return n;
      case 0:
        return su(e, n, n.type, n.pendingProps, s);
      case 1:
        return o = n.type, c = Ui(o, n.pendingProps), Qp(e, n, o, c, s);
      case 3:
        e: {
          if (Re(n, n.stateNode.containerInfo), e === null) throw Error(r(387));o = n.pendingProps;
          var d = n.memoizedState;c = d.element,
          zc(e, n),
          Ea(n, o, null, s);
          var v = n.memoizedState;
          if (o = v.cache, Fn(n, We, o), o !== d.cache && Mc(n, [We], s, !0), Aa(), o = v.element, d.isDehydrated)
            if (d = {
                element: o,
                isDehydrated: !1,
                cache: v.cache
              }, n.updateQueue.baseState = d, n.memoizedState = d, n.flags & 256) {
              n = Fp(e, n, o, s);
              break e
            } else if (o !== c) {
            c = Ut(Error(r(424)), n), ya(c), n = Fp(e, n, o, s);
            break e
          } else
            for (e = n.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e
              .ownerDocument.body : e, He = Wt(e.firstChild), ht = n, Ee = !0, _i = null, un = !0, s = Np(n, null, o,
                s), n.child = s; s;) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (ga(), o === c) {
              n = jn(e, n, s);
              break e
            }
            rt(e, n, o, s)
          }
          n = n.child
        }
        return n;
      case 26:
        return uo(e, n), e === null ? (s = ty(n.type, null, n.pendingProps, null)) ? n.memoizedState = s : Ee || (s = n
          .type, e = n.pendingProps, o = Co(ae.current).createElement(s), o[ct] = n, o[yt] = e, lt(o, s, e), tt(o), n
          .stateNode = o) : n.memoizedState = ty(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
      case 27:
        return qn(n), e === null && Ee && (o = n.stateNode = Ig(n.type, n.pendingProps, ae.current), ht = n, un = !0,
          c = He, li(n.type) ? (Xu = c, He = Wt(o.firstChild)) : He = c), rt(e, n, n.pendingProps.children, s), uo(e,
          n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ee && ((c = o = He) && (o = ET(o, n.type, n.pendingProps, un), o !== null ? (n.stateNode =
            o, ht = n, He = Wt(o.firstChild), un = !1, c = !0) : c = !1), c || zi(n)), qn(n), c = n.type, d = n
          .pendingProps, v = e !== null ? e.memoizedProps : null, o = d.children, Hu(c, d) ? o = null : v !== null &&
          Hu(c, v) && (n.flags |= 32), n.memoizedState !== null && (c = Bc(e, n, YS, null, null, s), Fa._currentValue =
            c), uo(e, n), rt(e, n, o, s), n.child;
      case 6:
        return e === null && Ee && ((e = s = He) && (s = CT(s, n.pendingProps, un), s !== null ? (n.stateNode = s, ht =
          n, He = null, e = !0) : e = !1), e || zi(n)), null;
      case 13:
        return Kp(e, n, s);
      case 4:
        return Re(n, n.stateNode.containerInfo), o = n.pendingProps, e === null ? n.child = Ts(n, null, o, s) : rt(e, n,
          o, s), n.child;
      case 11:
        return Bp(e, n, n.type, n.pendingProps, s);
      case 7:
        return rt(e, n, n.pendingProps, s), n.child;
      case 8:
        return rt(e, n, n.pendingProps.children, s), n.child;
      case 12:
        return rt(e, n, n.pendingProps.children, s), n.child;
      case 10:
        return o = n.pendingProps, Fn(n, n.type, o.value), rt(e, n, o.children, s), n.child;
      case 9:
        return c = n.type._context, o = n.pendingProps.children, Li(n), c = ut(c), o = o(c), n.flags |= 1, rt(e, n, o,
          s), n.child;
      case 14:
        return Hp(e, n, n.type, n.pendingProps, s);
      case 15:
        return qp(e, n, n.type, n.pendingProps, s);
      case 19:
        return Wp(e, n, s);
      case 31:
        return o = n.pendingProps, s = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (s = fo(o, s), s.ref = n.ref, n.child = s, s.return = n, n = s) : (s = Tn(e.child, o), s.ref =
          n.ref, n.child = s, s.return = n, n = s), n;
      case 22:
        return Yp(e, n, s);
      case 24:
        return Li(n), o = ut(We), e === null ? (c = Oc(), c === null && (c = Ve, d = Nc(), c.pooledCache = d, d
            .refCount++, d !== null && (c.pooledCacheLanes |= s), c = d), n.memoizedState = {
            parent: o,
            cache: c
          }, _c(n), Fn(n, We, c)) : ((e.lanes & s) !== 0 && (zc(e, n), Ea(n, null, null, s), Aa()), c = e.memoizedState,
            d = n.memoizedState, c.parent !== o ? (c = {
              parent: o,
              cache: o
            }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Fn(n, We, o)) : (
              o = d.cache, Fn(n, We, o), o !== c.cache && Mc(n, [We], s, !0))), rt(e, n, n.pendingProps.children, s), n
          .child;
      case 29:
        throw n.pendingProps
    }
    throw Error(r(156, n.tag))
  }

  function On(e) {
    e.flags |= 4
  }

  function Ip(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !ry(n)) {
      if (n = Yt.current, n !== null && ((Te & 4194048) === Te ? fn !== null : (Te & 62914560) !== Te && (Te &
          536870912) === 0 || n !== fn)) throw Sa = Dc, Vm;
      e.flags |= 8192
    }
  }

  function ho(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? jh() : 536870912, e.lanes |= n, Rs |= n)
  }

  function Da(e, n) {
    if (!Ee) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var s = null; n !== null;) n.alternate !== null && (s = n), n = n.sibling;
        s === null ? e.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = e.tail;
        for (var o = null; s !== null;) s.alternate !== null && (o = s), s = s.sibling;
        o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
    }
  }

  function Ue(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      o = 0;
    if (n)
      for (var c = e.child; c !== null;) s |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags &
        65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null;) s |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c
        .sibling;
    return e.subtreeFlags |= o, e.childLanes = s, n
  }

  function IS(e, n, s) {
    var o = n.pendingProps;
    switch (Ac(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(n), null;
      case 1:
        return Ue(n), null;
      case 3:
        return s = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n
            .flags |= 2048), Rn(We), Me(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null),
          (e === null || e.child === null) && (pa(n) ? On(n) : e === null || e.memoizedState.isDehydrated && (n.flags &
            256) === 0 || (n.flags |= 1024, jm())), Ue(n), null;
      case 26:
        return s = n.memoizedState, e === null ? (On(n), s !== null ? (Ue(n), Ip(n, s)) : (Ue(n), n.flags &= -
          16777217)) : s ? s !== e.memoizedState ? (On(n), Ue(n), Ip(n, s)) : (Ue(n), n.flags &= -16777217) : (e
          .memoizedProps !== o && On(n), Ue(n), n.flags &= -16777217), null;
      case 27:
        Ft(n), s = ae.current;
        var c = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== o && On(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(r(166));
            return Ue(n), null
          }
          e = re.current, pa(n) ? Mm(n) : (e = Ig(c, o, s), n.stateNode = e, On(n))
        }
        return Ue(n), null;
      case 5:
        if (Ft(n), s = n.type, e !== null && n.stateNode != null) e.memoizedProps !== o && On(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(r(166));
            return Ue(n), null
          }
          if (e = re.current, pa(n)) Mm(n);
          else {
            switch (c = Co(ae.current), e) {
              case 1:
                e = c.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                e = c.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    e = c.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    e = c.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? c.createElement("select", {
                      is: o.is
                    }) : c.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? c.createElement(s, {
                      is: o.is
                    }) : c.createElement(s)
                }
            }
            e[ct] = n, e[yt] = o;
            e: for (c = n.child; c !== null;) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue
              }
              if (c === n) break e;
              for (; c.sibling === null;) {
                if (c.return === null || c.return === n) break e;
                c = c.return
              }
              c.sibling.return = c.return, c = c.sibling
            }
            n.stateNode = e;
            e: switch (lt(e, s, o), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1
            }
            e && On(n)
          }
        }
        return Ue(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== o && On(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(r(166));
          if (e = ae.current, pa(n)) {
            if (e = n.stateNode, s = n.memoizedProps, o = null, c = ht, c !== null) switch (c.tag) {
              case 27:
              case 5:
                o = c.memoizedProps
            }
            e[ct] = n, e = !!(e.nodeValue === s || o !== null && o.suppressHydrationWarning === !0 || Xg(e.nodeValue,
              s)), e || zi(n)
          } else e = Co(e).createTextNode(o), e[ct] = n, n.stateNode = e
        }
        return Ue(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = pa(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(r(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(r(317));
              c[ct] = n
            } else ga(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ue(n), c = !1
          } else c = jm(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c) return n.flags & 256 ? (Nn(n), n) : (Nn(n), null)
        }
        if (Nn(n), (n.flags & 128) !== 0) return n.lanes = s, n;
        if (s = o !== null, e = e !== null && e.memoizedState !== null, s) {
          o = n.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState
            .cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool);
          var d = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (d = o.memoizedState.cachePool.pool), d !==
            c && (o.flags |= 2048)
        }
        return s !== e && s && (n.child.flags |= 8192), ho(n, n.updateQueue), Ue(n), null;
      case 4:
        return Me(), e === null && Lu(n.stateNode.containerInfo), Ue(n), null;
      case 10:
        return Rn(n.type), Ue(n), null;
      case 19:
        if (I($e), c = n.memoizedState, c === null) return Ue(n), null;
        if (o = (n.flags & 128) !== 0, d = c.rendering, d === null)
          if (o) Da(c, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null;) {
                if (d = oo(e), d !== null) {
                  for (n.flags |= 128, Da(c, !1), e = d.updateQueue, n.updateQueue = e, ho(n, e), n.subtreeFlags = 0,
                    e = s, s = n.child; s !== null;) Cm(s, e), s = s.sibling;
                  return $($e, $e.current & 1 | 2), n.child
                }
                e = e.sibling
              }
            c.tail !== null && cn() > go && (n.flags |= 128, o = !0, Da(c, !1), n.lanes = 4194304)
          }
        else {
          if (!o)
            if (e = oo(d), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, ho(n, e), Da(c, !0), c.tail === null &&
                c.tailMode === "hidden" && !d.alternate && !Ee) return Ue(n), null
            } else 2 * cn() - c.renderingStartTime > go && s !== 536870912 && (n.flags |= 128, o = !0, Da(c, !1), n
              .lanes = 4194304);
          c.isBackwards ? (d.sibling = n.child, n.child = d) : (e = c.last, e !== null ? e.sibling = d : n.child = d, c
            .last = d)
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = cn(), n
          .sibling = null, e = $e.current, $($e, o ? e & 1 | 2 : e & 1), n) : (Ue(n), null);
      case 22:
      case 23:
        return Nn(n), Pc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |=
            8192) : o && (n.flags |= 8192), o ? (s & 536870912) !== 0 && (n.flags & 128) === 0 && (Ue(n), n
            .subtreeFlags & 6 && (n.flags |= 8192)) : Ue(n), s = n.updateQueue, s !== null && ho(n, s.retryQueue), s =
          null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (s = e.memoizedState
            .cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n
            .memoizedState.cachePool.pool), o !== s && (n.flags |= 2048), e !== null && I(ki), null;
      case 24:
        return s = null, e !== null && (s = e.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048),
          Rn(We), Ue(n), null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(r(156, n.tag))
  }

  function JS(e, n) {
    switch (Ac(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Rn(We), Me(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Ft(n), null;
      case 13:
        if (Nn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(r(340));
          ga()
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return I($e), null;
      case 4:
        return Me(), null;
      case 10:
        return Rn(n.type), null;
      case 22:
      case 23:
        return Nn(n), Pc(), e !== null && I(ki), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Rn(We), null;
      case 25:
        return null;
      default:
        return null
    }
  }

  function Jp(e, n) {
    switch (Ac(n), n.tag) {
      case 3:
        Rn(We), Me();
        break;
      case 26:
      case 27:
      case 5:
        Ft(n);
        break;
      case 4:
        Me();
        break;
      case 13:
        Nn(n);
        break;
      case 19:
        I($e);
        break;
      case 10:
        Rn(n.type);
        break;
      case 22:
      case 23:
        Nn(n), Pc(), e !== null && I(ki);
        break;
      case 24:
        Rn(We)
    }
  }

  function _a(e, n) {
    try {
      var s = n.updateQueue,
        o = s !== null ? s.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        s = c;
        do {
          if ((s.tag & e) === e) {
            o = void 0;
            var d = s.create,
              v = s.inst;
            o = d(), v.destroy = o
          }
          s = s.next
        } while (s !== c)
      }
    } catch (w) {
      ze(n, n.return, w)
    }
  }

  function ei(e, n, s) {
    try {
      var o = n.updateQueue,
        c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        o = d;
        do {
          if ((o.tag & e) === e) {
            var v = o.inst,
              w = v.destroy;
            if (w !== void 0) {
              v.destroy = void 0, c = n;
              var R = s,
                L = w;
              try {
                L()
              } catch (q) {
                ze(c, R, q)
              }
            }
          }
          o = o.next
        } while (o !== d)
      }
    } catch (q) {
      ze(n, n.return, q)
    }
  }

  function eg(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var s = e.stateNode;
      try {
        Hm(n, s)
      } catch (o) {
        ze(e, e.return, o)
      }
    }
  }

  function tg(e, n, s) {
    s.props = Ui(e.type, e.memoizedProps), s.state = e.memoizedState;
    try {
      s.componentWillUnmount()
    } catch (o) {
      ze(e, n, o)
    }
  }

  function za(e, n) {
    try {
      var s = e.ref;
      if (s !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode
        }
        typeof s == "function" ? e.refCleanup = s(o) : s.current = o
      }
    } catch (c) {
      ze(e, n, c)
    }
  }

  function dn(e, n) {
    var s = e.ref,
      o = e.refCleanup;
    if (s !== null)
      if (typeof o == "function") try {
        o()
      } catch (c) {
        ze(e, n, c)
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
      } else if (typeof s == "function") try {
        s(null)
      } catch (c) {
        ze(e, n, c)
      } else s.current = null
  }

  function ng(e) {
    var n = e.type,
      s = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && o.focus();
          break e;
        case "img":
          s.src ? o.src = s.src : s.srcSet && (o.srcset = s.srcSet)
      }
    }
    catch (c) {
      ze(e, e.return, c)
    }
  }

  function du(e, n, s) {
    try {
      var o = e.stateNode;
      bT(o, e.type, s, n), o[yt] = n
    } catch (c) {
      ze(e, e.return, c)
    }
  }

  function ig(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && li(e.type) || e.tag === 4
  }

  function hu(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ig(e.return)) return null;
        e = e.return
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.tag === 27 && li(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }

  function mu(e, n, s) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, n ? (s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument
      .body : s).insertBefore(e, n) : (n = s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body :
      s, n.appendChild(e), s = s._reactRootContainer, s != null || n.onclick !== null || (n.onclick = Eo));
    else if (o !== 4 && (o === 27 && li(e.type) && (s = e.stateNode, n = null), e = e.child, e !== null))
      for (mu(e, n, s), e = e.sibling; e !== null;) mu(e, n, s), e = e.sibling
  }

  function mo(e, n, s) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, n ? s.insertBefore(e, n) : s.appendChild(e);
    else if (o !== 4 && (o === 27 && li(e.type) && (s = e.stateNode), e = e.child, e !== null))
      for (mo(e, n, s), e = e.sibling; e !== null;) mo(e, n, s), e = e.sibling
  }

  function sg(e) {
    var n = e.stateNode,
      s = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length;) n.removeAttributeNode(c[0]);
      lt(n, o, s), n[ct] = e, n[yt] = s
    } catch (d) {
      ze(e, e.return, d)
    }
  }
  var Dn = !1,
    Xe = !1,
    pu = !1,
    ag = typeof WeakSet == "function" ? WeakSet : Set,
    it = null;

  function eT(e, n) {
    if (e = e.containerInfo, Uu = Do, e = gm(e), hc(e)) {
      if ("selectionStart" in e) var s = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        s = (s = e.ownerDocument) && s.defaultView || window;
        var o = s.getSelection && s.getSelection();
        if (o && o.rangeCount !== 0) {
          s = o.anchorNode;
          var c = o.anchorOffset,
            d = o.focusNode;
          o = o.focusOffset;
          try {
            s.nodeType, d.nodeType
          } catch {
            s = null;
            break e
          }
          var v = 0,
            w = -1,
            R = -1,
            L = 0,
            q = 0,
            Q = e,
            U = null;
          t: for (;;) {
            for (var B; Q !== s || c !== 0 && Q.nodeType !== 3 || (w = v + c), Q !== d || o !== 0 && Q.nodeType !==
              3 || (R = v + o), Q.nodeType === 3 && (v += Q.nodeValue.length), (B = Q.firstChild) !== null;) U = Q,
              Q = B;
            for (;;) {
              if (Q === e) break t;
              if (U === s && ++L === c && (w = v), U === d && ++q === o && (R = v), (B = Q.nextSibling) !== null)
                break;
              Q = U, U = Q.parentNode
            }
            Q = B
          }
          s = w === -1 || R === -1 ? null : {
            start: w,
            end: R
          }
        } else s = null
      }
      s = s || {
        start: 0,
        end: 0
      }
    } else s = null;
    for (Bu = {
        focusedElem: e,
        selectionRange: s
      }, Do = !1, it = n; it !== null;)
      if (n = it, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null) e.return = n, it = e;
      else
        for (; it !== null;) {
          switch (n = it, d = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                e = void 0, s = n, c = d.memoizedProps, d = d.memoizedState, o = s.stateNode;
                try {
                  var me = Ui(s.type, c, s.elementType === s.type);
                  e = o.getSnapshotBeforeUpdate(me, d), o.__reactInternalSnapshotBeforeUpdate = e
                } catch (ue) {
                  ze(s, s.return, ue)
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, s = e.nodeType, s === 9) Yu(e);
                else if (s === 1) switch (e.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    Yu(e);
                    break;
                  default:
                    e.textContent = ""
                }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163))
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, it = e;
            break
          }
          it = n.return
        }
  }

  function rg(e, n, s) {
    var o = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        ti(e, s), o & 4 && _a(5, s);
        break;
      case 1:
        if (ti(e, s), o & 4)
          if (e = s.stateNode, n === null) try {
            e.componentDidMount()
          } catch (v) {
            ze(s, s.return, v)
          } else {
            var c = Ui(s.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(c, n, e.__reactInternalSnapshotBeforeUpdate)
            } catch (v) {
              ze(s, s.return, v)
            }
          }
        o & 64 && eg(s), o & 512 && za(s, s.return);
        break;
      case 3:
        if (ti(e, s), o & 64 && (e = s.updateQueue, e !== null)) {
          if (n = null, s.child !== null) switch (s.child.tag) {
            case 27:
            case 5:
              n = s.child.stateNode;
              break;
            case 1:
              n = s.child.stateNode
          }
          try {
            Hm(e, n)
          } catch (v) {
            ze(s, s.return, v)
          }
        }
        break;
      case 27:
        n === null && o & 4 && sg(s);
      case 26:
      case 5:
        ti(e, s), n === null && o & 4 && ng(s), o & 512 && za(s, s.return);
        break;
      case 12:
        ti(e, s);
        break;
      case 13:
        ti(e, s), o & 4 && cg(e, s), o & 64 && (e = s.memoizedState, e !== null && (e = e.dehydrated, e !== null && (s =
          cT.bind(null, s), RT(e, s))));
        break;
      case 22:
        if (o = s.memoizedState !== null || Dn, !o) {
          n = n !== null && n.memoizedState !== null || Xe, c = Dn;
          var d = Xe;
          Dn = o, (Xe = n) && !d ? ni(e, s, (s.subtreeFlags & 8772) !== 0) : ti(e, s), Dn = c, Xe = d
        }
        break;
      case 30:
        break;
      default:
        ti(e, s)
    }
  }

  function og(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, og(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n =
        e.stateNode, n !== null && Kl(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps =
      null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
  }
  var ke = null,
    bt = !1;

  function _n(e, n, s) {
    for (s = s.child; s !== null;) lg(e, n, s), s = s.sibling
  }

  function lg(e, n, s) {
    if (Et && typeof Et.onCommitFiberUnmount == "function") try {
      Et.onCommitFiberUnmount(ta, s)
    } catch {}
    switch (s.tag) {
      case 26:
        Xe || dn(s, n), _n(e, n, s), s.memoizedState ? s.memoizedState.count-- : s.stateNode && (s = s.stateNode, s
          .parentNode.removeChild(s));
        break;
      case 27:
        Xe || dn(s, n);
        var o = ke,
          c = bt;
        li(s.type) && (ke = s.stateNode, bt = !1), _n(e, n, s), Ya(s.stateNode), ke = o, bt = c;
        break;
      case 5:
        Xe || dn(s, n);
      case 6:
        if (o = ke, c = bt, ke = null, _n(e, n, s), ke = o, bt = c, ke !== null)
          if (bt) try {
            (ke.nodeType === 9 ? ke.body : ke.nodeName === "HTML" ? ke.ownerDocument.body : ke).removeChild(s
              .stateNode)
          } catch (d) {
            ze(s, n, d)
          } else try {
            ke.removeChild(s.stateNode)
          } catch (d) {
            ze(s, n, d)
          }
        break;
      case 18:
        ke !== null && (bt ? (e = ke, Wg(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, s
          .stateNode), $a(e)) : Wg(ke, s.stateNode));
        break;
      case 4:
        o = ke, c = bt, ke = s.stateNode.containerInfo, bt = !0, _n(e, n, s), ke = o, bt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xe || ei(2, s, n), Xe || ei(4, s, n), _n(e, n, s);
        break;
      case 1:
        Xe || (dn(s, n), o = s.stateNode, typeof o.componentWillUnmount == "function" && tg(s, n, o)), _n(e, n, s);
        break;
      case 21:
        _n(e, n, s);
        break;
      case 22:
        Xe = (o = Xe) || s.memoizedState !== null, _n(e, n, s), Xe = o;
        break;
      default:
        _n(e, n, s)
    }
  }

  function cg(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e
        .dehydrated, e !== null)))) try {
      $a(e)
    } catch (s) {
      ze(n, n.return, s)
    }
  }

  function tT(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new ag), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new ag), n;
      default:
        throw Error(r(435, e.tag))
    }
  }

  function gu(e, n) {
    var s = tT(e);
    n.forEach(function(o) {
      var c = uT.bind(null, e, o);
      s.has(o) || (s.add(o), o.then(c, c))
    })
  }

  function Nt(e, n) {
    var s = n.deletions;
    if (s !== null)
      for (var o = 0; o < s.length; o++) {
        var c = s[o],
          d = e,
          v = n,
          w = v;
        e: for (; w !== null;) {
          switch (w.tag) {
            case 27:
              if (li(w.type)) {
                ke = w.stateNode, bt = !1;
                break e
              }
              break;
            case 5:
              ke = w.stateNode, bt = !1;
              break e;
            case 3:
            case 4:
              ke = w.stateNode.containerInfo, bt = !0;
              break e
          }
          w = w.return
        }
        if (ke === null) throw Error(r(160));
        lg(d, v, c), ke = null, bt = !1, d = c.alternate, d !== null && (d.return = null), c.return = null
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null;) ug(n, e), n = n.sibling
  }
  var Zt = null;

  function ug(e, n) {
    var s = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nt(n, e), jt(e), o & 4 && (ei(3, e, e.return), _a(3, e), ei(5, e, e.return));
        break;
      case 1:
        Nt(n, e), jt(e), o & 512 && (Xe || s === null || dn(s, s.return)), o & 64 && Dn && (e = e.updateQueue, e !==
          null && (o = e.callbacks, o !== null && (s = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = s ===
            null ? o : s.concat(o))));
        break;
      case 26:
        var c = Zt;
        if (Nt(n, e), jt(e), o & 512 && (Xe || s === null || dn(s, s.return)), o & 4) {
          var d = s !== null ? s.memoizedState : null;
          if (o = e.memoizedState, s === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type,
                  s = e.memoizedProps,
                  c = c.ownerDocument || c;t: switch (o) {
                    case "title":
                      d = c.getElementsByTagName("title")[0], (!d || d[sa] || d[ct] || d.namespaceURI ===
                          "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = c.createElement(o), c
                          .head.insertBefore(d, c.querySelector("head > title"))), lt(d, o, s), d[ct] = e, tt(d), o =
                        d;
                      break e;
                    case "link":
                      var v = sy("link", "href", c).get(o + (s.href || ""));
                      if (v) {
                        for (var w = 0; w < v.length; w++)
                          if (d = v[w], d.getAttribute("href") === (s.href == null || s.href === "" ? null : s
                              .href) && d.getAttribute("rel") === (s.rel == null ? null : s.rel) && d.getAttribute(
                              "title") === (s.title == null ? null : s.title) && d.getAttribute("crossorigin") === (s
                              .crossOrigin == null ? null : s.crossOrigin)) {
                            v.splice(w, 1);
                            break t
                          }
                      }
                      d = c.createElement(o), lt(d, o, s), c.head.appendChild(d);
                      break;
                    case "meta":
                      if (v = sy("meta", "content", c).get(o + (s.content || ""))) {
                        for (w = 0; w < v.length; w++)
                          if (d = v[w], d.getAttribute("content") === (s.content == null ? null : "" + s.content) && d
                            .getAttribute("name") === (s.name == null ? null : s.name) && d.getAttribute(
                              "property") === (s.property == null ? null : s.property) && d.getAttribute(
                              "http-equiv") === (s.httpEquiv == null ? null : s.httpEquiv) && d.getAttribute(
                              "charset") === (s.charSet == null ? null : s.charSet)) {
                            v.splice(w, 1);
                            break t
                          }
                      }
                      d = c.createElement(o), lt(d, o, s), c.head.appendChild(d);
                      break;
                    default:
                      throw Error(r(468, o))
                  }
                  d[ct] = e,
                  tt(d),
                  o = d
                }
                e.stateNode = o
              }
          else ay(c, e.type, e.stateNode);
          else e.stateNode = iy(c, o, e.memoizedProps);
          else d !== o ? (d === null ? s.stateNode !== null && (s = s.stateNode, s.parentNode.removeChild(s)) : d
              .count--, o === null ? ay(c, e.type, e.stateNode) : iy(c, o, e.memoizedProps)) : o === null && e
            .stateNode !== null && du(e, e.memoizedProps, s.memoizedProps)
        }
        break;
      case 27:
        Nt(n, e), jt(e), o & 512 && (Xe || s === null || dn(s, s.return)), s !== null && o & 4 && du(e, e.memoizedProps,
          s.memoizedProps);
        break;
      case 5:
        if (Nt(n, e), jt(e), o & 512 && (Xe || s === null || dn(s, s.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            as(c, "")
          } catch (B) {
            ze(e, e.return, B)
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, du(e, c, s !== null ? s.memoizedProps : c)), o & 1024 && (
          pu = !0);
        break;
      case 6:
        if (Nt(n, e), jt(e), o & 4) {
          if (e.stateNode === null) throw Error(r(162));
          o = e.memoizedProps, s = e.stateNode;
          try {
            s.nodeValue = o
          } catch (B) {
            ze(e, e.return, B)
          }
        }
        break;
      case 3:
        if (No = null, c = Zt, Zt = Ro(n.containerInfo), Nt(n, e), Zt = c, jt(e), o & 4 && s !== null && s.memoizedState
          .isDehydrated) try {
          $a(n.containerInfo)
        } catch (B) {
          ze(e, e.return, B)
        }
        pu && (pu = !1, fg(e));
        break;
      case 4:
        o = Zt, Zt = Ro(e.stateNode.containerInfo), Nt(n, e), jt(e), Zt = o;
        break;
      case 12:
        Nt(n, e), jt(e);
        break;
      case 13:
        Nt(n, e), jt(e), e.child.flags & 8192 && e.memoizedState !== null != (s !== null && s.memoizedState !== null) &&
          (Su = cn()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, gu(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var R = s !== null && s.memoizedState !== null,
          L = Dn,
          q = Xe;
        if (Dn = L || c, Xe = q || R, Nt(n, e), Xe = q, Dn = L, jt(e), o & 8192) e: for (n = e.stateNode, n
          ._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (s === null || R || Dn || Xe || Bi(e)), s =
          null, n = e;;) {
          if (n.tag === 5 || n.tag === 26) {
            if (s === null) {
              R = s = n;
              try {
                if (d = R.stateNode, c) v = d.style, typeof v.setProperty == "function" ? v.setProperty("display",
                  "none", "important") : v.display = "none";
                else {
                  w = R.stateNode;
                  var Q = R.memoizedProps.style,
                    U = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                  w.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim()
                }
              } catch (B) {
                ze(R, R.return, B)
              }
            }
          } else if (n.tag === 6) {
            if (s === null) {
              R = n;
              try {
                R.stateNode.nodeValue = c ? "" : R.memoizedProps
              } catch (B) {
                ze(R, R.return, B)
              }
            }
          } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
          }
          if (n === e) break e;
          for (; n.sibling === null;) {
            if (n.return === null || n.return === e) break e;
            s === n && (s = null), n = n.return
          }
          s === n && (s = null), n.sibling.return = n.return, n = n.sibling
        }
        o & 4 && (o = e.updateQueue, o !== null && (s = o.retryQueue, s !== null && (o.retryQueue = null, gu(e, s))));
        break;
      case 19:
        Nt(n, e), jt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, gu(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Nt(n, e), jt(e)
    }
  }

  function jt(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var s, o = e.return; o !== null;) {
          if (ig(o)) {
            s = o;
            break
          }
          o = o.return
        }
        if (s == null) throw Error(r(160));
        switch (s.tag) {
          case 27:
            var c = s.stateNode,
              d = hu(e);
            mo(e, d, c);
            break;
          case 5:
            var v = s.stateNode;
            s.flags & 32 && (as(v, ""), s.flags &= -33);
            var w = hu(e);
            mo(e, w, v);
            break;
          case 3:
          case 4:
            var R = s.stateNode.containerInfo,
              L = hu(e);
            mu(e, L, R);
            break;
          default:
            throw Error(r(161))
        }
      } catch (q) {
        ze(e, e.return, q)
      }
      e.flags &= -3
    }
    n & 4096 && (e.flags &= -4097)
  }

  function fg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var n = e;
        fg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling
      }
  }

  function ti(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null;) rg(e, n.alternate, n), n = n.sibling
  }

  function Bi(e) {
    for (e = e.child; e !== null;) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ei(4, n, n.return), Bi(n);
          break;
        case 1:
          dn(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && tg(n, n.return, s), Bi(n);
          break;
        case 27:
          Ya(n.stateNode);
        case 26:
        case 5:
          dn(n, n.return), Bi(n);
          break;
        case 22:
          n.memoizedState === null && Bi(n);
          break;
        case 30:
          Bi(n);
          break;
        default:
          Bi(n)
      }
      e = e.sibling
    }
  }

  function ni(e, n, s) {
    for (s = s && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
      var o = n.alternate,
        c = e,
        d = n,
        v = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ni(c, d, s), _a(4, d);
          break;
        case 1:
          if (ni(c, d, s), o = d, c = o.stateNode, typeof c.componentDidMount == "function") try {
            c.componentDidMount()
          } catch (L) {
            ze(o, o.return, L)
          }
          if (o = d, c = o.updateQueue, c !== null) {
            var w = o.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++) Bm(R[c], w)
            } catch (L) {
              ze(o, o.return, L)
            }
          }
          s && v & 64 && eg(d), za(d, d.return);
          break;
        case 27:
          sg(d);
        case 26:
        case 5:
          ni(c, d, s), s && o === null && v & 4 && ng(d), za(d, d.return);
          break;
        case 12:
          ni(c, d, s);
          break;
        case 13:
          ni(c, d, s), s && v & 4 && cg(c, d);
          break;
        case 22:
          d.memoizedState === null && ni(c, d, s), za(d, d.return);
          break;
        case 30:
          break;
        default:
          ni(c, d, s)
      }
      n = n.sibling
    }
  }

  function yu(e, n) {
    var s = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (s = e.memoizedState.cachePool
      .pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState
      .cachePool
      .pool), e !== s && (e != null && e.refCount++, s != null && xa(s))
  }

  function vu(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n
      .refCount++, e != null && xa(e))
  }

  function hn(e, n, s, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null;) dg(e, n, s, o), n = n.sibling
  }

  function dg(e, n, s, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        hn(e, n, s, o), c & 2048 && _a(9, n);
        break;
      case 1:
        hn(e, n, s, o);
        break;
      case 3:
        hn(e, n, s, o), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n
          .memoizedState.cache, n !== e && (n.refCount++, e != null && xa(e)));
        break;
      case 12:
        if (c & 2048) {
          hn(e, n, s, o), e = n.stateNode;
          try {
            var d = n.memoizedProps,
              v = d.id,
              w = d.onPostCommit;
            typeof w == "function" && w(v, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
          } catch (R) {
            ze(n, n.return, R)
          }
        } else hn(e, n, s, o);
        break;
      case 13:
        hn(e, n, s, o);
        break;
      case 23:
        break;
      case 22:
        d = n.stateNode, v = n.alternate, n.memoizedState !== null ? d._visibility & 2 ? hn(e, n, s, o) : Va(e, n) : d
          ._visibility & 2 ? hn(e, n, s, o) : (d._visibility |= 2, As(e, n, s, o, (n.subtreeFlags & 10256) !== 0)), c &
          2048 && yu(v, n);
        break;
      case 24:
        hn(e, n, s, o), c & 2048 && vu(n.alternate, n);
        break;
      default:
        hn(e, n, s, o)
    }
  }

  function As(e, n, s, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null;) {
      var d = e,
        v = n,
        w = s,
        R = o,
        L = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          As(d, v, w, R, c), _a(8, v);
          break;
        case 23:
          break;
        case 22:
          var q = v.stateNode;
          v.memoizedState !== null ? q._visibility & 2 ? As(d, v, w, R, c) : Va(d, v) : (q._visibility |= 2, As(d, v, w,
            R, c)), c && L & 2048 && yu(v.alternate, v);
          break;
        case 24:
          As(d, v, w, R, c), c && L & 2048 && vu(v.alternate, v);
          break;
        default:
          As(d, v, w, R, c)
      }
      n = n.sibling
    }
  }

  function Va(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null;) {
        var s = e,
          o = n,
          c = o.flags;
        switch (o.tag) {
          case 22:
            Va(s, o), c & 2048 && yu(o.alternate, o);
            break;
          case 24:
            Va(s, o), c & 2048 && vu(o.alternate, o);
            break;
          default:
            Va(s, o)
        }
        n = n.sibling
      }
  }
  var La = 8192;

  function Es(e) {
    if (e.subtreeFlags & La)
      for (e = e.child; e !== null;) hg(e), e = e.sibling
  }

  function hg(e) {
    switch (e.tag) {
      case 26:
        Es(e), e.flags & La && e.memoizedState !== null && BT(Zt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Es(e);
        break;
      case 3:
      case 4:
        var n = Zt;
        Zt = Ro(e.stateNode.containerInfo), Es(e), Zt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = La, La = 16777216,
          Es(e), La = n) : Es(e));
        break;
      default:
        Es(e)
    }
  }

  function mg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do n = e.sibling, e.sibling = null, e = n; while (e !== null)
    }
  }

  function ka(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          it = o, gg(o, e)
        }
      mg(e)
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) pg(e), e = e.sibling
  }

  function pg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ka(e), e.flags & 2048 && ei(9, e, e.return);
        break;
      case 3:
        ka(e);
        break;
      case 12:
        ka(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &=
          -3, po(e)) : ka(e);
        break;
      default:
        ka(e)
    }
  }

  function po(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          it = o, gg(o, e)
        }
      mg(e)
    }
    for (e = e.child; e !== null;) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          ei(8, n, n.return), po(n);
          break;
        case 22:
          s = n.stateNode, s._visibility & 2 && (s._visibility &= -3, po(n));
          break;
        default:
          po(n)
      }
      e = e.sibling
    }
  }

  function gg(e, n) {
    for (; it !== null;) {
      var s = it;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          ei(8, s, n);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var o = s.memoizedState.cachePool.pool;
            o != null && o.refCount++
          }
          break;
        case 24:
          xa(s.memoizedState.cache)
      }
      if (o = s.child, o !== null) o.return = s, it = o;
      else e: for (s = e; it !== null;) {
        o = it;
        var c = o.sibling,
          d = o.return;
        if (og(o), o === s) {
          it = null;
          break e
        }
        if (c !== null) {
          c.return = d, it = c;
          break e
        }
        it = d
      }
    }
  }
  var nT = {
      getCacheForType: function(e) {
        var n = ut(We),
          s = n.data.get(e);
        return s === void 0 && (s = e(), n.data.set(e, s)), s
      }
    },
    iT = typeof WeakMap == "function" ? WeakMap : Map,
    Ne = 0,
    Ve = null,
    we = null,
    Te = 0,
    je = 0,
    Ot = null,
    ii = !1,
    Cs = !1,
    xu = !1,
    zn = 0,
    qe = 0,
    si = 0,
    Hi = 0,
    bu = 0,
    Gt = 0,
    Rs = 0,
    Pa = null,
    wt = null,
    wu = !1,
    Su = 0,
    go = 1 / 0,
    yo = null,
    ai = null,
    ot = 0,
    ri = null,
    Ms = null,
    Ns = 0,
    Tu = 0,
    Au = null,
    yg = null,
    Ua = 0,
    Eu = null;

  function Dt() {
    if ((Ne & 2) !== 0 && Te !== 0) return Te & -Te;
    if (z.T !== null) {
      var e = gs;
      return e !== 0 ? e : Du()
    }
    return _h()
  }

  function vg() {
    Gt === 0 && (Gt = (Te & 536870912) === 0 || Ee ? Nh() : 536870912);
    var e = Yt.current;
    return e !== null && (e.flags |= 32), Gt
  }

  function _t(e, n, s) {
    (e === Ve && (je === 2 || je === 9) || e.cancelPendingCommit !== null) && (js(e, 0), oi(e, Te, Gt, !1)), ia(e, s), (
      (Ne & 2) === 0 || e !== Ve) && (e === Ve && ((Ne & 2) === 0 && (Hi |= s), qe === 4 && oi(e, Te, Gt, !1)), mn(e))
  }

  function xg(e, n, s) {
    if ((Ne & 6) !== 0) throw Error(r(327));
    var o = !s && (n & 124) === 0 && (n & e.expiredLanes) === 0 || na(e, n),
      c = o ? rT(e, n) : Mu(e, n, !0),
      d = o;
    do {
      if (c === 0) {
        Cs && !o && oi(e, n, 0, !1);
        break
      } else {
        if (s = e.current.alternate, d && !sT(s)) {
          c = Mu(e, n, !1), d = !1;
          continue
        }
        if (c === 2) {
          if (d = n, e.errorRecoveryDisabledLanes & d) var v = 0;
          else v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            n = v;
            e: {
              var w = e;c = Pa;
              var R = w.current.memoizedState.isDehydrated;
              if (R && (js(w, v).flags |= 256), v = Mu(w, v, !1), v !== 2) {
                if (xu && !R) {
                  w.errorRecoveryDisabledLanes |= d, Hi |= d, c = 4;
                  break e
                }
                d = wt, wt = c, d !== null && (wt === null ? wt = d : wt.push.apply(wt, d))
              }
              c = v
            }
            if (d = !1, c !== 2) continue
          }
        }
        if (c === 1) {
          js(e, 0), oi(e, n, 0, !0);
          break
        }
        e: {
          switch (o = e, d = c, d) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              oi(o, n, Gt, !ii);
              break e;
            case 2:
              wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329))
          }
          if ((n & 62914560) === n && (c = Su + 300 - cn(), 10 < c)) {
            if (oi(o, n, Gt, !ii), Rr(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Kg(bg.bind(null, o, s, wt, yo, wu, n, Gt, Hi, Rs, ii, d, 2, -0, 0), c);
            break e
          }
          bg(o, s, wt, yo, wu, n, Gt, Hi, Rs, ii, d, 0, -0, 0)
        }
      }
      break
    } while (!0);
    mn(e)
  }

  function bg(e, n, s, o, c, d, v, w, R, L, q, Q, U, B) {
    if (e.timeoutHandle = -1, Q = n.subtreeFlags, (Q & 8192 || (Q & 16785408) === 16785408) && (Qa = {
        stylesheets: null,
        count: 0,
        unsuspend: UT
      }, hg(n), Q = HT(), Q !== null)) {
      e.cancelPendingCommit = Q(Rg.bind(null, e, n, d, s, o, c, v, w, R, q, 1, U, B)), oi(e, d, v, !L);
      return
    }
    Rg(e, n, d, s, o, c, v, w, R)
  }

  function sT(e) {
    for (var n = e;;) {
      var s = n.tag;
      if ((s === 0 || s === 11 || s === 15) && n.flags & 16384 && (s = n.updateQueue, s !== null && (s = s.stores, s !==
          null)))
        for (var o = 0; o < s.length; o++) {
          var c = s[o],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!Rt(d(), c)) return !1
          } catch {
            return !1
          }
        }
      if (s = n.child, n.subtreeFlags & 16384 && s !== null) s.return = n, n = s;
      else {
        if (n === e) break;
        for (; n.sibling === null;) {
          if (n.return === null || n.return === e) return !0;
          n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
      }
    }
    return !0
  }

  function oi(e, n, s, o) {
    n &= ~bu, n &= ~Hi, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c;) {
      var d = 31 - Ct(c),
        v = 1 << d;
      o[d] = -1, c &= ~v
    }
    s !== 0 && Oh(e, s, n)
  }

  function vo() {
    return (Ne & 6) === 0 ? (Ba(0), !1) : !0
  }

  function Cu() {
    if (we !== null) {
      if (je === 0) var e = we.return;
      else e = we, Cn = Vi = null, Yc(e), Ss = null, ja = 0, e = we;
      for (; e !== null;) Jp(e.alternate, e), e = e.return;
      we = null
    }
  }

  function js(e, n) {
    var s = e.timeoutHandle;
    s !== -1 && (e.timeoutHandle = -1, ST(s)), s = e.cancelPendingCommit, s !== null && (e.cancelPendingCommit = null,
        s()), Cu(), Ve = e, we = s = Tn(e.current, null), Te = n, je = 0, Ot = null, ii = !1, Cs = na(e, n), xu = !1,
      Rs = Gt = bu = Hi = si = qe = 0, wt = Pa = null, wu = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o;) {
        var c = 31 - Ct(o),
          d = 1 << c;
        n |= e[c], o &= ~d
      }
    return zn = n, Ur(), s
  }

  function wg(e, n) {
    ye = null, z.H = so, n === wa || n === Kr ? (n = Pm(), je = 3) : n === Vm ? (n = Pm(), je = 4) : je = n === Up ? 8 :
      n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ot = n, we === null && (qe = 1, co(e,
        Ut(n, e.current)))
  }

  function Sg() {
    var e = z.H;
    return z.H = so, e === null ? so : e
  }

  function Tg() {
    var e = z.A;
    return z.A = nT, e
  }

  function Ru() {
    qe = 4, ii || (Te & 4194048) !== Te && Yt.current !== null || (Cs = !0), (si & 134217727) === 0 && (Hi &
      134217727) === 0 || Ve === null || oi(Ve, Te, Gt, !1)
  }

  function Mu(e, n, s) {
    var o = Ne;
    Ne |= 2;
    var c = Sg(),
      d = Tg();
    (Ve !== e || Te !== n) && (yo = null, js(e, n)), n = !1;
    var v = qe;
    e: do try {
        if (je !== 0 && we !== null) {
          var w = we,
            R = Ot;
          switch (je) {
            case 8:
              Cu(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Yt.current === null && (n = !0);
              var L = je;
              if (je = 0, Ot = null, Os(e, w, R, L), s && Cs) {
                v = 0;
                break e
              }
              break;
            default:
              L = je, je = 0, Ot = null, Os(e, w, R, L)
          }
        }
        aT(), v = qe;
        break
      } catch (q) {
        wg(e, q)
      }
      while (!0);
    return n && e.shellSuspendCounter++, Cn = Vi = null, Ne = o, z.H = c, z.A = d, we === null && (Ve = null, Te = 0,
      Ur()), v
  }

  function aT() {
    for (; we !== null;) Ag(we)
  }

  function rT(e, n) {
    var s = Ne;
    Ne |= 2;
    var o = Sg(),
      c = Tg();
    Ve !== e || Te !== n ? (yo = null, go = cn() + 500, js(e, n)) : Cs = na(e, n);
    e: do try {
        if (je !== 0 && we !== null) {
          n = we;
          var d = Ot;
          t: switch (je) {
            case 1:
              je = 0, Ot = null, Os(e, n, d, 1);
              break;
            case 2:
            case 9:
              if (Lm(d)) {
                je = 0, Ot = null, Eg(n);
                break
              }
              n = function() {
                je !== 2 && je !== 9 || Ve !== e || (je = 7), mn(e)
              }, d.then(n, n);
              break e;
            case 3:
              je = 7;
              break e;
            case 4:
              je = 5;
              break e;
            case 7:
              Lm(d) ? (je = 0, Ot = null, Eg(n)) : (je = 0, Ot = null, Os(e, n, d, 7));
              break;
            case 5:
              var v = null;
              switch (we.tag) {
                case 26:
                  v = we.memoizedState;
                case 5:
                case 27:
                  var w = we;
                  if (!v || ry(v)) {
                    je = 0, Ot = null;
                    var R = w.sibling;
                    if (R !== null) we = R;
                    else {
                      var L = w.return;
                      L !== null ? (we = L, xo(L)) : we = null
                    }
                    break t
                  }
              }
              je = 0, Ot = null, Os(e, n, d, 5);
              break;
            case 6:
              je = 0, Ot = null, Os(e, n, d, 6);
              break;
            case 8:
              Cu(), qe = 6;
              break e;
            default:
              throw Error(r(462))
          }
        }
        oT();
        break
      } catch (q) {
        wg(e, q)
      }
      while (!0);
    return Cn = Vi = null, z.H = o, z.A = c, Ne = s, we !== null ? 0 : (Ve = null, Te = 0, Ur(), qe)
  }

  function oT() {
    for (; we !== null && !Nw();) Ag(we)
  }

  function Ag(e) {
    var n = $p(e.alternate, e, zn);
    e.memoizedProps = e.pendingProps, n === null ? xo(e) : we = n
  }

  function Eg(e) {
    var n = e,
      s = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Xp(s, n, n.pendingProps, n.type, void 0, Te);
        break;
      case 11:
        n = Xp(s, n, n.pendingProps, n.type.render, n.ref, Te);
        break;
      case 5:
        Yc(n);
      default:
        Jp(s, n), n = we = Cm(n, zn), n = $p(s, n, zn)
    }
    e.memoizedProps = e.pendingProps, n === null ? xo(e) : we = n
  }

  function Os(e, n, s, o) {
    Cn = Vi = null, Yc(n), Ss = null, ja = 0;
    var c = n.return;
    try {
      if (WS(e, c, n, s, Te)) {
        qe = 1, co(e, Ut(s, e.current)), we = null;
        return
      }
    } catch (d) {
      if (c !== null) throw we = c, d;
      qe = 1, co(e, Ut(s, e.current)), we = null;
      return
    }
    n.flags & 32768 ? (Ee || o === 1 ? e = !0 : Cs || (Te & 536870912) !== 0 ? e = !1 : (ii = e = !0, (o === 2 || o ===
      9 || o === 3 || o === 6) && (o = Yt.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Cg(n, e)) : xo(
      n)
  }

  function xo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        Cg(n, ii);
        return
      }
      e = n.return;
      var s = IS(n.alternate, n, zn);
      if (s !== null) {
        we = s;
        return
      }
      if (n = n.sibling, n !== null) {
        we = n;
        return
      }
      we = n = e
    } while (n !== null);
    qe === 0 && (qe = 5)
  }

  function Cg(e, n) {
    do {
      var s = JS(e.alternate, e);
      if (s !== null) {
        s.flags &= 32767, we = s;
        return
      }
      if (s = e.return, s !== null && (s.flags |= 32768, s.subtreeFlags = 0, s.deletions = null), !n && (e = e.sibling,
          e !== null)) {
        we = e;
        return
      }
      we = e = s
    } while (e !== null);
    qe = 6, we = null
  }

  function Rg(e, n, s, o, c, d, v, w, R) {
    e.cancelPendingCommit = null;
    do bo(); while (ot !== 0);
    if ((Ne & 6) !== 0) throw Error(r(327));
    if (n !== null) {
      if (n === e.current) throw Error(r(177));
      if (d = n.lanes | n.childLanes, d |= vc, Uw(e, s, d, v, w, R), e === Ve && (we = Ve = null, Te = 0), Ms = n, ri =
        e, Ns = s, Tu = d, Au = c, yg = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode =
          null, e.callbackPriority = 0, fT(Ar, function() {
            return Dg(), null
          })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags &
          13878) !== 0 || o) {
        o = z.T, z.T = null, c = K.p, K.p = 2, v = Ne, Ne |= 4;
        try {
          eT(e, n, s)
        } finally {
          Ne = v, K.p = c, z.T = o
        }
      }
      ot = 1, Mg(), Ng(), jg()
    }
  }

  function Mg() {
    if (ot === 1) {
      ot = 0;
      var e = ri,
        n = Ms,
        s = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || s) {
        s = z.T, z.T = null;
        var o = K.p;
        K.p = 2;
        var c = Ne;
        Ne |= 4;
        try {
          ug(n, e);
          var d = Bu,
            v = gm(e.containerInfo),
            w = d.focusedElem,
            R = d.selectionRange;
          if (v !== w && w && w.ownerDocument && pm(w.ownerDocument.documentElement, w)) {
            if (R !== null && hc(w)) {
              var L = R.start,
                q = R.end;
              if (q === void 0 && (q = L), "selectionStart" in w) w.selectionStart = L, w.selectionEnd = Math.min(q, w
                .value.length);
              else {
                var Q = w.ownerDocument || document,
                  U = Q && Q.defaultView || window;
                if (U.getSelection) {
                  var B = U.getSelection(),
                    me = w.textContent.length,
                    ue = Math.min(R.start, me),
                    _e = R.end === void 0 ? ue : Math.min(R.end, me);
                  !B.extend && ue > _e && (v = _e, _e = ue, ue = v);
                  var O = mm(w, ue),
                    N = mm(w, _e);
                  if (O && N && (B.rangeCount !== 1 || B.anchorNode !== O.node || B.anchorOffset !== O.offset || B
                      .focusNode !== N.node || B.focusOffset !== N.offset)) {
                    var V = Q.createRange();
                    V.setStart(O.node, O.offset), B.removeAllRanges(), ue > _e ? (B.addRange(V), B.extend(N.node, N
                      .offset)) : (V.setEnd(N.node, N.offset), B.addRange(V))
                  }
                }
              }
            }
            for (Q = [], B = w; B = B.parentNode;) B.nodeType === 1 && Q.push({
              element: B,
              left: B.scrollLeft,
              top: B.scrollTop
            });
            for (typeof w.focus == "function" && w.focus(), w = 0; w < Q.length; w++) {
              var G = Q[w];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top
            }
          }
          Do = !!Uu, Bu = Uu = null
        } finally {
          Ne = c, K.p = o, z.T = s
        }
      }
      e.current = n, ot = 2
    }
  }

  function Ng() {
    if (ot === 2) {
      ot = 0;
      var e = ri,
        n = Ms,
        s = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || s) {
        s = z.T, z.T = null;
        var o = K.p;
        K.p = 2;
        var c = Ne;
        Ne |= 4;
        try {
          rg(e, n.alternate, n)
        } finally {
          Ne = c, K.p = o, z.T = s
        }
      }
      ot = 3
    }
  }

  function jg() {
    if (ot === 4 || ot === 3) {
      ot = 0, jw();
      var e = ri,
        n = Ms,
        s = Ns,
        o = yg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ot = 5 : (ot = 0, Ms = ri = null, Og(e, e
        .pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (ai = null), Ql(s), n = n.stateNode, Et && typeof Et.onCommitFiberRoot == "function") try {
        Et.onCommitFiberRoot(ta, n, void 0, (n.current.flags & 128) === 128)
      } catch {}
      if (o !== null) {
        n = z.T, c = K.p, K.p = 2, z.T = null;
        try {
          for (var d = e.onRecoverableError, v = 0; v < o.length; v++) {
            var w = o[v];
            d(w.value, {
              componentStack: w.stack
            })
          }
        } finally {
          z.T = n, K.p = c
        }
      }(Ns & 3) !== 0 && bo(), mn(e), c = e.pendingLanes, (s & 4194090) !== 0 && (c & 42) !== 0 ? e === Eu ? Ua++ : (
        Ua = 0, Eu = e) : Ua = 0, Ba(0)
    }
  }

  function Og(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, xa(n)))
  }

  function bo(e) {
    return Mg(), Ng(), jg(), Dg()
  }

  function Dg() {
    if (ot !== 5) return !1;
    var e = ri,
      n = Tu;
    Tu = 0;
    var s = Ql(Ns),
      o = z.T,
      c = K.p;
    try {
      K.p = 32 > s ? 32 : s, z.T = null, s = Au, Au = null;
      var d = ri,
        v = Ns;
      if (ot = 0, Ms = ri = null, Ns = 0, (Ne & 6) !== 0) throw Error(r(331));
      var w = Ne;
      if (Ne |= 4, pg(d.current), dg(d, d.current, v, s), Ne = w, Ba(0, !1), Et && typeof Et.onPostCommitFiberRoot ==
        "function") try {
        Et.onPostCommitFiberRoot(ta, d)
      } catch {}
      return !0
    } finally {
      K.p = c, z.T = o, Og(e, n)
    }
  }

  function _g(e, n, s) {
    n = Ut(s, n), n = iu(e.stateNode, n, 2), e = Wn(e, n, 2), e !== null && (ia(e, 2), mn(e))
  }

  function ze(e, n, s) {
    if (e.tag === 3) _g(e, e, s);
    else
      for (; n !== null;) {
        if (n.tag === 3) {
          _g(n, e, s);
          break
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (
              ai === null || !ai.has(o))) {
            e = Ut(s, e), s = kp(2), o = Wn(n, s, 2), o !== null && (Pp(s, o, n, e), ia(o, 2), mn(o));
            break
          }
        }
        n = n.return
      }
  }

  function Nu(e, n, s) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new iT;
      var c = new Set;
      o.set(n, c)
    } else c = o.get(n), c === void 0 && (c = new Set, o.set(n, c));
    c.has(s) || (xu = !0, c.add(s), e = lT.bind(null, e, n, s), n.then(e, e))
  }

  function lT(e, n, s) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & s, e.warmLanes &= ~s, Ve === e && (Te & s) === s && (
      qe === 4 || qe === 3 && (Te & 62914560) === Te && 300 > cn() - Su ? (Ne & 2) === 0 && js(e, 0) : bu |= s, Rs ===
      Te && (Rs = 0)), mn(e)
  }

  function zg(e, n) {
    n === 0 && (n = jh()), e = ds(e, n), e !== null && (ia(e, n), mn(e))
  }

  function cT(e) {
    var n = e.memoizedState,
      s = 0;
    n !== null && (s = n.retryLane), zg(e, s)
  }

  function uT(e, n) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          c = e.memoizedState;
        c !== null && (s = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314))
    }
    o !== null && o.delete(n), zg(e, s)
  }

  function fT(e, n) {
    return Lt(e, n)
  }
  var wo = null,
    Ds = null,
    ju = !1,
    So = !1,
    Ou = !1,
    qi = 0;

  function mn(e) {
    e !== Ds && e.next === null && (Ds === null ? wo = Ds = e : Ds = Ds.next = e), So = !0, ju || (ju = !0, hT())
  }

  function Ba(e, n) {
    if (!Ou && So) {
      Ou = !0;
      do
        for (var s = !1, o = wo; o !== null;) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var v = o.suspendedLanes,
                w = o.pingedLanes;
              d = (1 << 31 - Ct(42 | e) + 1) - 1, d &= c & ~(v & ~w), d = d & 201326741 ? d & 201326741 | 1 : d ? d |
                2 : 0
            }
            d !== 0 && (s = !0, Pg(o, d))
          } else d = Te, d = Rr(o, o === Ve ? d : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1), (d &
            3) === 0 || na(o, d) || (s = !0, Pg(o, d));
          o = o.next
        }
      while (s);
      Ou = !1
    }
  }

  function dT() {
    Vg()
  }

  function Vg() {
    So = ju = !1;
    var e = 0;
    qi !== 0 && (wT() && (e = qi), qi = 0);
    for (var n = cn(), s = null, o = wo; o !== null;) {
      var c = o.next,
        d = Lg(o, n);
      d === 0 ? (o.next = null, s === null ? wo = c : s.next = c, c === null && (Ds = s)) : (s = o, (e !== 0 || (d &
        3) !== 0) && (So = !0)), o = c
    }
    Ba(e)
  }

  function Lg(e, n) {
    for (var s = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d;) {
      var v = 31 - Ct(d),
        w = 1 << v,
        R = c[v];
      R === -1 ? ((w & s) === 0 || (w & o) !== 0) && (c[v] = Pw(w, n)) : R <= n && (e.expiredLanes |= w), d &= ~w
    }
    if (n = Ve, s = Te, s = Rr(e, e === n ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), o = e
      .callbackNode, s === 0 || e === n && (je === 2 || je === 9) || e.cancelPendingCommit !== null) return o !==
      null && o !== null && Yn(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((s & 3) === 0 || na(e, s)) {
      if (n = s & -s, n === e.callbackPriority) return n;
      switch (o !== null && Yn(o), Ql(s)) {
        case 2:
        case 8:
          s = Rh;
          break;
        case 32:
          s = Ar;
          break;
        case 268435456:
          s = Mh;
          break;
        default:
          s = Ar
      }
      return o = kg.bind(null, e), s = Lt(s, o), e.callbackPriority = n, e.callbackNode = s, n
    }
    return o !== null && o !== null && Yn(o), e.callbackPriority = 2, e.callbackNode = null, 2
  }

  function kg(e, n) {
    if (ot !== 0 && ot !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var s = e.callbackNode;
    if (bo() && e.callbackNode !== s) return null;
    var o = Te;
    return o = Rr(e, e === Ve ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), o === 0 ? null : (xg(
      e, o, n), Lg(e, cn()), e.callbackNode != null && e.callbackNode === s ? kg.bind(null, e) : null)
  }

  function Pg(e, n) {
    if (bo()) return null;
    xg(e, n, !0)
  }

  function hT() {
    TT(function() {
      (Ne & 6) !== 0 ? Lt(Ch, dT) : Vg()
    })
  }

  function Du() {
    return qi === 0 && (qi = Nh()), qi
  }

  function Ug(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Dr("" + e)
  }

  function Bg(e, n) {
    var s = n.ownerDocument.createElement("input");
    return s.name = n.name, s.value = n.value, e.id && s.setAttribute("form", e.id), n.parentNode.insertBefore(s, n),
      e = new FormData(e), s.parentNode.removeChild(s), e
  }

  function mT(e, n, s, o, c) {
    if (n === "submit" && s && s.stateNode === c) {
      var d = Ug((c[yt] || null).action),
        v = o.submitter;
      v && (n = (n = v[yt] || null) ? Ug(n.formAction) : v.getAttribute("formAction"), n !== null && (d = n, v = null));
      var w = new Lr("action", "action", null, o, c);
      e.push({
        event: w,
        listeners: [{
          instance: null,
          listener: function() {
            if (o.defaultPrevented) {
              if (qi !== 0) {
                var R = v ? Bg(c, v) : new FormData(c);
                Ic(s, {
                  pending: !0,
                  data: R,
                  method: c.method,
                  action: d
                }, null, R)
              }
            } else typeof d == "function" && (w.preventDefault(), R = v ? Bg(c, v) : new FormData(c), Ic(s, {
              pending: !0,
              data: R,
              method: c.method,
              action: d
            }, d, R))
          },
          currentTarget: c
        }]
      })
    }
  }
  for (var _u = 0; _u < yc.length; _u++) {
    var zu = yc[_u],
      pT = zu.toLowerCase(),
      gT = zu[0].toUpperCase() + zu.slice(1);
    Kt(pT, "on" + gT)
  }
  Kt(xm, "onAnimationEnd"), Kt(bm, "onAnimationIteration"), Kt(wm, "onAnimationStart"), Kt("dblclick", "onDoubleClick"),
    Kt("focusin", "onFocus"), Kt("focusout", "onBlur"), Kt(_S, "onTransitionRun"), Kt(zS, "onTransitionStart"), Kt(VS,
      "onTransitionCancel"), Kt(Sm, "onTransitionEnd"), ns("onMouseEnter", ["mouseout", "mouseover"]), ns(
      "onMouseLeave", ["mouseout", "mouseover"]), ns("onPointerEnter", ["pointerout", "pointerover"]), ns(
      "onPointerLeave", ["pointerout", "pointerover"]), Ci("onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ci("onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ci(
      "onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ci("onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ci("onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ci("onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ha =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting"
    .split(" "),
    yT = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ha));

  function Hg(e, n) {
    n = (n & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var o = e[s],
        c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var v = o.length - 1; 0 <= v; v--) {
            var w = o[v],
              R = w.instance,
              L = w.currentTarget;
            if (w = w.listener, R !== d && c.isPropagationStopped()) break e;
            d = w, c.currentTarget = L;
            try {
              d(c)
            } catch (q) {
              lo(q)
            }
            c.currentTarget = null, d = R
          } else
            for (v = 0; v < o.length; v++) {
              if (w = o[v], R = w.instance, L = w.currentTarget, w = w.listener, R !== d && c.isPropagationStopped())
                break e;
              d = w, c.currentTarget = L;
              try {
                d(c)
              } catch (q) {
                lo(q)
              }
              c.currentTarget = null, d = R
            }
      }
    }
  }

  function Se(e, n) {
    var s = n[Fl];
    s === void 0 && (s = n[Fl] = new Set);
    var o = e + "__bubble";
    s.has(o) || (qg(n, e, 2, !1), s.add(o))
  }

  function Vu(e, n, s) {
    var o = 0;
    n && (o |= 4), qg(s, e, o, n)
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);

  function Lu(e) {
    if (!e[To]) {
      e[To] = !0, Vh.forEach(function(s) {
        s !== "selectionchange" && (yT.has(s) || Vu(s, !1, e), Vu(s, !0, e))
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[To] || (n[To] = !0, Vu("selectionchange", !1, n))
    }
  }

  function qg(e, n, s, o) {
    switch (dy(n)) {
      case 2:
        var c = GT;
        break;
      case 8:
        c = XT;
        break;
      default:
        c = Wu
    }
    s = c.bind(null, n, s, e), c = void 0, !sc || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0),
      o ? c !== void 0 ? e.addEventListener(n, s, {
        capture: !0,
        passive: c
      }) : e.addEventListener(n, s, !0) : c !== void 0 ? e.addEventListener(n, s, {
        passive: c
      }) : e.addEventListener(n, s, !1)
  }

  function ku(e, n, s, o, c) {
    var d = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null) e: for (;;) {
      if (o === null) return;
      var v = o.tag;
      if (v === 3 || v === 4) {
        var w = o.stateNode.containerInfo;
        if (w === c) break;
        if (v === 4)
          for (v = o.return; v !== null;) {
            var R = v.tag;
            if ((R === 3 || R === 4) && v.stateNode.containerInfo === c) return;
            v = v.return
          }
        for (; w !== null;) {
          if (v = Ji(w), v === null) return;
          if (R = v.tag, R === 5 || R === 6 || R === 26 || R === 27) {
            o = d = v;
            continue e
          }
          w = w.parentNode
        }
      }
      o = o.return
    }
    Zh(function() {
      var L = d,
        q = nc(s),
        Q = [];
      e: {
        var U = Tm.get(e);
        if (U !== void 0) {
          var B = Lr,
            me = e;
          switch (e) {
            case "keypress":
              if (zr(s) === 0) break e;
            case "keydown":
            case "keyup":
              B = fS;
              break;
            case "focusin":
              me = "focus", B = lc;
              break;
            case "focusout":
              me = "blur", B = lc;
              break;
            case "beforeblur":
            case "afterblur":
              B = lc;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Ih;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Jw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = mS;
              break;
            case xm:
            case bm:
            case wm:
              B = nS;
              break;
            case Sm:
              B = gS;
              break;
            case "scroll":
            case "scrollend":
              B = $w;
              break;
            case "wheel":
              B = vS;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = sS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = em;
              break;
            case "toggle":
            case "beforetoggle":
              B = bS
          }
          var ue = (n & 4) !== 0,
            _e = !ue && (e === "scroll" || e === "scrollend"),
            O = ue ? U !== null ? U + "Capture" : null : U;
          ue = [];
          for (var N = L, V; N !== null;) {
            var G = N;
            if (V = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || V === null || O === null || (G =
                ra(N, O), G != null && ue.push(qa(N, G, V))), _e) break;
            N = N.return
          }
          0 < ue.length && (U = new B(U, me, null, s, q), Q.push({
            event: U,
            listeners: ue
          }))
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", U && s !==
            tc && (me = s.relatedTarget || s.fromElement) && (Ji(me) || me[Ii])) break e;
          if ((B || U) && (U = q.window === q ? q : (U = q.ownerDocument) ? U.defaultView || U.parentWindow :
              window, B ? (me = s.relatedTarget || s.toElement, B = L, me = me ? Ji(me) : null, me !== null && (_e =
                u(me), ue = me.tag, me !== _e || ue !== 5 && ue !== 27 && ue !== 6) && (me = null)) : (B = null,
                me = L), B !== me)) {
            if (ue = Ih, G = "onMouseLeave", O = "onMouseEnter", N = "mouse", (e === "pointerout" || e ===
                "pointerover") && (ue = em, G = "onPointerLeave", O = "onPointerEnter", N = "pointer"), _e = B ==
              null ? U : aa(B), V = me == null ? U : aa(me), U = new ue(G, N + "leave", B, s, q), U.target = _e, U
              .relatedTarget = V, G = null, Ji(q) === L && (ue = new ue(O, N + "enter", me, s, q), ue.target = V, ue
                .relatedTarget = _e, G = ue), _e = G, B && me) t: {
              for (ue = B, O = me, N = 0, V = ue; V; V = _s(V)) N++;
              for (V = 0, G = O; G; G = _s(G)) V++;
              for (; 0 < N - V;) ue = _s(ue),
              N--;
              for (; 0 < V - N;) O = _s(O),
              V--;
              for (; N--;) {
                if (ue === O || O !== null && ue === O.alternate) break t;
                ue = _s(ue), O = _s(O)
              }
              ue = null
            }
            else ue = null;
            B !== null && Yg(Q, U, B, ue, !1), me !== null && _e !== null && Yg(Q, _e, me, ue, !0)
          }
        }
        e: {
          if (U = L ? aa(L) : window, B = U.nodeName && U.nodeName.toLowerCase(), B === "select" || B === "input" &&
            U.type === "file") var te = lm;
          else if (rm(U))
            if (cm) te = jS;
            else {
              te = MS;
              var be = RS
            }
          else B = U.nodeName,
          !B || B.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? L && ec(L
            .elementType) && (te = lm) : te = NS;
          if (te && (te = te(e, L))) {
            om(Q, te, s, q);
            break e
          }
          be && be(e, U, L),
          e === "focusout" && L && U.type === "number" && L.memoizedProps.value != null && Jl(U, "number", U.value)
        }
        switch (be = L ? aa(L) : window, e) {
          case "focusin":
            (rm(be) || be.contentEditable === "true") && (cs = be, mc = L, ma = null);
            break;
          case "focusout":
            ma = mc = cs = null;
            break;
          case "mousedown":
            pc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pc = !1, ym(Q, s, q);
            break;
          case "selectionchange":
            if (DS) break;
          case "keydown":
          case "keyup":
            ym(Q, s, q)
        }
        var le;
        if (uc) e: {
          switch (e) {
            case "compositionstart":
              var he = "onCompositionStart";
              break e;
            case "compositionend":
              he = "onCompositionEnd";
              break e;
            case "compositionupdate":
              he = "onCompositionUpdate";
              break e
          }
          he = void 0
        }
        else ls ? sm(e, s) && (he = "onCompositionEnd") : e === "keydown" && s.keyCode === 229 && (he =
          "onCompositionStart");he && (tm && s.locale !== "ko" && (ls || he !== "onCompositionStart" ? he ===
          "onCompositionEnd" && ls && (le = Wh()) : (Qn = q, ac = "value" in Qn ? Qn.value : Qn.textContent,
            ls = !0)), be = Ao(L, he), 0 < be.length && (he = new Jh(he, e, null, s, q), Q.push({
          event: he,
          listeners: be
        }), le ? he.data = le : (le = am(s), le !== null && (he.data = le)))),
        (le = SS ? TS(e, s) : AS(e, s)) && (he = Ao(L, "onBeforeInput"), 0 < he.length && (be = new Jh(
          "onBeforeInput", "beforeinput", null, s, q), Q.push({
          event: be,
          listeners: he
        }), be.data = le)),
        mT(Q, e, L, s, q)
      }
      Hg(Q, n)
    })
  }

  function qa(e, n, s) {
    return {
      instance: e,
      listener: n,
      currentTarget: s
    }
  }

  function Ao(e, n) {
    for (var s = n + "Capture", o = []; e !== null;) {
      var c = e,
        d = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || d === null || (c = ra(e, s), c != null && o.unshift(qa(e, c,
          d)), c = ra(e, n), c != null && o.push(qa(e, c, d))), e.tag === 3) return o;
      e = e.return
    }
    return []
  }

  function _s(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
    return e || null
  }

  function Yg(e, n, s, o, c) {
    for (var d = n._reactName, v = []; s !== null && s !== o;) {
      var w = s,
        R = w.alternate,
        L = w.stateNode;
      if (w = w.tag, R !== null && R === o) break;
      w !== 5 && w !== 26 && w !== 27 || L === null || (R = L, c ? (L = ra(s, d), L != null && v.unshift(qa(s, L, R))) :
        c || (L = ra(s, d), L != null && v.push(qa(s, L, R)))), s = s.return
    }
    v.length !== 0 && e.push({
      event: n,
      listeners: v
    })
  }
  var vT = /\r\n?/g,
    xT = /\u0000|\uFFFD/g;

  function Gg(e) {
    return (typeof e == "string" ? e : "" + e).replace(vT, `
`).replace(xT, "")
  }

  function Xg(e, n) {
    return n = Gg(n), Gg(e) === n
  }

  function Eo() {}

  function De(e, n, s, o, c, d) {
    switch (s) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || as(e, o) : (typeof o == "number" ||
          typeof o == "bigint") && n !== "body" && as(e, "" + o);
        break;
      case "className":
        Nr(e, "class", o);
        break;
      case "tabIndex":
        Nr(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Nr(e, s, o);
        break;
      case "style":
        Fh(e, o, d);
        break;
      case "data":
        if (n !== "object") {
          Nr(e, "data", o);
          break
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || s !== "href")) {
          e.removeAttribute(s);
          break
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(s);
          break
        }
        o = Dr("" + o), e.setAttribute(s, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break
        } else typeof d == "function" && (s === "formAction" ? (n !== "input" && De(e, n, "name", c.name, c, null), De(
          e, n, "formEncType", c.formEncType, c, null), De(e, n, "formMethod", c.formMethod, c, null), De(e, n,
          "formTarget", c.formTarget, c, null)) : (De(e, n, "encType", c.encType, c, null), De(e, n, "method", c
          .method, c, null), De(e, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(s);
          break
        }
        o = Dr("" + o), e.setAttribute(s, o);
        break;
      case "onClick":
        o != null && (e.onclick = Eo);
        break;
      case "onScroll":
        o != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (s = o.__html, s != null) {
            if (c.children != null) throw Error(r(60));
            e.innerHTML = s
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break
        }
        s = Dr("" + o), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(s, "" + o) : e.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(s, "") : e.removeAttribute(s);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(s, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e
          .setAttribute(s, o) : e.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(s, o) : e
          .removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(s) : e.setAttribute(
          s, o);
        break;
      case "popover":
        Se("beforetoggle", e), Se("toggle", e), Mr(e, "popover", o);
        break;
      case "xlinkActuate":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        wn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        wn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        wn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Mr(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (s = Zw.get(s) || s, Mr(e,
          s, o))
    }
  }

  function Pu(e, n, s, o, c, d) {
    switch (s) {
      case "style":
        Fh(e, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (s = o.__html, s != null) {
            if (c.children != null) throw Error(r(60));
            e.innerHTML = s
          }
        }
        break;
      case "children":
        typeof o == "string" ? as(e, o) : (typeof o == "number" || typeof o == "bigint") && as(e, "" + o);
        break;
      case "onScroll":
        o != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Se("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = Eo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Lh.hasOwnProperty(s)) e: {
          if (s[0] === "o" && s[1] === "n" && (c = s.endsWith("Capture"), n = s.slice(2, c ? s.length - 7 : void 0),
              d = e[yt] || null, d = d != null ? d[s] : null, typeof d == "function" && e.removeEventListener(n, d,
                c), typeof o == "function")) {
            typeof d != "function" && d !== null && (s in e ? e[s] = null : e.hasAttribute(s) && e.removeAttribute(
              s)), e.addEventListener(n, o, c);
            break e
          }
          s in e ? e[s] = o : o === !0 ? e.setAttribute(s, "") : Mr(e, s, o)
        }
    }
  }

  function lt(e, n, s) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Se("error", e), Se("load", e);
        var o = !1,
          c = !1,
          d;
        for (d in s)
          if (s.hasOwnProperty(d)) {
            var v = s[d];
            if (v != null) switch (d) {
              case "src":
                o = !0;
                break;
              case "srcSet":
                c = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, n));
              default:
                De(e, n, d, v, s, null)
            }
          } c && De(e, n, "srcSet", s.srcSet, s, null), o && De(e, n, "src", s.src, s, null);
        return;
      case "input":
        Se("invalid", e);
        var w = d = v = c = null,
          R = null,
          L = null;
        for (o in s)
          if (s.hasOwnProperty(o)) {
            var q = s[o];
            if (q != null) switch (o) {
              case "name":
                c = q;
                break;
              case "type":
                v = q;
                break;
              case "checked":
                R = q;
                break;
              case "defaultChecked":
                L = q;
                break;
              case "value":
                d = q;
                break;
              case "defaultValue":
                w = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(r(137, n));
                break;
              default:
                De(e, n, o, q, s, null)
            }
          } Yh(e, d, w, R, L, v, c, !1), jr(e);
        return;
      case "select":
        Se("invalid", e), o = v = d = null;
        for (c in s)
          if (s.hasOwnProperty(c) && (w = s[c], w != null)) switch (c) {
            case "value":
              d = w;
              break;
            case "defaultValue":
              v = w;
              break;
            case "multiple":
              o = w;
            default:
              De(e, n, c, w, s, null)
          }
        n = d, s = v, e.multiple = !!o, n != null ? ss(e, !!o, n, !1) : s != null && ss(e, !!o, s, !0);
        return;
      case "textarea":
        Se("invalid", e), d = c = o = null;
        for (v in s)
          if (s.hasOwnProperty(v) && (w = s[v], w != null)) switch (v) {
            case "value":
              o = w;
              break;
            case "defaultValue":
              c = w;
              break;
            case "children":
              d = w;
              break;
            case "dangerouslySetInnerHTML":
              if (w != null) throw Error(r(91));
              break;
            default:
              De(e, n, v, w, s, null)
          }
        Xh(e, o, c, d), jr(e);
        return;
      case "option":
        for (R in s) s.hasOwnProperty(R) && (o = s[R], o != null) && (R === "selected" ? e.selected = o && typeof o !=
          "function" && typeof o != "symbol" : De(e, n, R, o, s, null));
        return;
      case "dialog":
        Se("beforetoggle", e), Se("toggle", e), Se("cancel", e), Se("close", e);
        break;
      case "iframe":
      case "object":
        Se("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ha.length; o++) Se(Ha[o], e);
        break;
      case "image":
        Se("error", e), Se("load", e);
        break;
      case "details":
        Se("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Se("error", e), Se("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (L in s)
          if (s.hasOwnProperty(L) && (o = s[L], o != null)) switch (L) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, n));
            default:
              De(e, n, L, o, s, null)
          }
        return;
      default:
        if (ec(n)) {
          for (q in s) s.hasOwnProperty(q) && (o = s[q], o !== void 0 && Pu(e, n, q, o, s, void 0));
          return
        }
    }
    for (w in s) s.hasOwnProperty(w) && (o = s[w], o != null && De(e, n, w, o, s, null))
  }

  function bT(e, n, s, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          d = null,
          v = null,
          w = null,
          R = null,
          L = null,
          q = null;
        for (B in s) {
          var Q = s[B];
          if (s.hasOwnProperty(B) && Q != null) switch (B) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              R = Q;
            default:
              o.hasOwnProperty(B) || De(e, n, B, null, o, Q)
          }
        }
        for (var U in o) {
          var B = o[U];
          if (Q = s[U], o.hasOwnProperty(U) && (B != null || Q != null)) switch (U) {
            case "type":
              d = B;
              break;
            case "name":
              c = B;
              break;
            case "checked":
              L = B;
              break;
            case "defaultChecked":
              q = B;
              break;
            case "value":
              v = B;
              break;
            case "defaultValue":
              w = B;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (B != null) throw Error(r(137, n));
              break;
            default:
              B !== Q && De(e, n, U, B, o, Q)
          }
        }
        Il(e, v, w, R, L, q, d, c);
        return;
      case "select":
        B = v = w = U = null;
        for (d in s)
          if (R = s[d], s.hasOwnProperty(d) && R != null) switch (d) {
            case "value":
              break;
            case "multiple":
              B = R;
            default:
              o.hasOwnProperty(d) || De(e, n, d, null, o, R)
          }
        for (c in o)
          if (d = o[c], R = s[c], o.hasOwnProperty(c) && (d != null || R != null)) switch (c) {
            case "value":
              U = d;
              break;
            case "defaultValue":
              w = d;
              break;
            case "multiple":
              v = d;
            default:
              d !== R && De(e, n, c, d, o, R)
          }
        n = w, s = v, o = B, U != null ? ss(e, !!s, U, !1) : !!o != !!s && (n != null ? ss(e, !!s, n, !0) : ss(e, !!s,
          s ? [] : "", !1));
        return;
      case "textarea":
        B = U = null;
        for (w in s)
          if (c = s[w], s.hasOwnProperty(w) && c != null && !o.hasOwnProperty(w)) switch (w) {
            case "value":
              break;
            case "children":
              break;
            default:
              De(e, n, w, null, o, c)
          }
        for (v in o)
          if (c = o[v], d = s[v], o.hasOwnProperty(v) && (c != null || d != null)) switch (v) {
            case "value":
              U = c;
              break;
            case "defaultValue":
              B = c;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(r(91));
              break;
            default:
              c !== d && De(e, n, v, c, o, d)
          }
        Gh(e, U, B);
        return;
      case "option":
        for (var me in s) U = s[me], s.hasOwnProperty(me) && U != null && !o.hasOwnProperty(me) && (me === "selected" ?
          e.selected = !1 : De(e, n, me, null, o, U));
        for (R in o) U = o[R], B = s[R], o.hasOwnProperty(R) && U !== B && (U != null || B != null) && (R ===
          "selected" ? e.selected = U && typeof U != "function" && typeof U != "symbol" : De(e, n, R, U, o, B));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ue in s) U = s[ue], s.hasOwnProperty(ue) && U != null && !o.hasOwnProperty(ue) && De(e, n, ue, null, o,
          U);
        for (L in o)
          if (U = o[L], B = s[L], o.hasOwnProperty(L) && U !== B && (U != null || B != null)) switch (L) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (U != null) throw Error(r(137, n));
              break;
            default:
              De(e, n, L, U, o, B)
          }
        return;
      default:
        if (ec(n)) {
          for (var _e in s) U = s[_e], s.hasOwnProperty(_e) && U !== void 0 && !o.hasOwnProperty(_e) && Pu(e, n, _e,
            void 0, o, U);
          for (q in o) U = o[q], B = s[q], !o.hasOwnProperty(q) || U === B || U === void 0 && B === void 0 || Pu(e, n,
            q, U, o, B);
          return
        }
    }
    for (var O in s) U = s[O], s.hasOwnProperty(O) && U != null && !o.hasOwnProperty(O) && De(e, n, O, null, o, U);
    for (Q in o) U = o[Q], B = s[Q], !o.hasOwnProperty(Q) || U === B || U == null && B == null || De(e, n, Q, U, o, B)
  }
  var Uu = null,
    Bu = null;

  function Co(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }

  function Qg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }

  function Fg(e, n) {
    if (e === 0) switch (n) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0
    }
    return e === 1 && n === "foreignObject" ? 0 : e
  }

  function Hu(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" ||
      typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !==
      null && n.dangerouslySetInnerHTML.__html != null
  }
  var qu = null;

  function wT() {
    var e = window.event;
    return e && e.type === "popstate" ? e === qu ? !1 : (qu = e, !0) : (qu = null, !1)
  }
  var Kg = typeof setTimeout == "function" ? setTimeout : void 0,
    ST = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zg = typeof Promise == "function" ? Promise : void 0,
    TT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zg < "u" ? function(e) {
      return Zg.resolve(null).then(e).catch(AT)
    } : Kg;

  function AT(e) {
    setTimeout(function() {
      throw e
    })
  }

  function li(e) {
    return e === "head"
  }

  function Wg(e, n) {
    var s = n,
      o = 0,
      c = 0;
    do {
      var d = s.nextSibling;
      if (e.removeChild(s), d && d.nodeType === 8)
        if (s = d.data, s === "/$") {
          if (0 < o && 8 > o) {
            s = o;
            var v = e.ownerDocument;
            if (s & 1 && Ya(v.documentElement), s & 2 && Ya(v.body), s & 4)
              for (s = v.head, Ya(s), v = s.firstChild; v;) {
                var w = v.nextSibling,
                  R = v.nodeName;
                v[sa] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && v.rel.toLowerCase() === "stylesheet" || s
                  .removeChild(v), v = w
              }
          }
          if (c === 0) {
            e.removeChild(d), $a(n);
            return
          }
          c--
        } else s === "$" || s === "$?" || s === "$!" ? c++ : o = s.charCodeAt(0) - 48;
      else o = 0;
      s = d
    } while (s);
    $a(n)
  }

  function Yu(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
      var s = n;
      switch (n = n.nextSibling, s.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Yu(s), Kl(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue
      }
      e.removeChild(s)
    }
  }

  function ET(e, n, s, o) {
    for (; e.nodeType === 1;) {
      var c = s;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
      } else if (o) {
        if (!e[sa]) switch (n) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (d = e.getAttribute("rel"), d === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (d !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e
              .getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute(
                "title") !== (c.title == null ? null : c.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (d = e.getAttribute("src"), (d !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c
                .type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null :
                c.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e
        }
      } else if (n === "input" && e.type === "hidden") {
        var d = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === d) return e
      } else return e;
      if (e = Wt(e.nextSibling), e === null) break
    }
    return null
  }

  function CT(e, n, s) {
    if (n === "") return null;
    for (; e.nodeType !== 3;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !s || (e = Wt(e.nextSibling), e ===
          null)) return null;
    return e
  }

  function Gu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
  }

  function RT(e, n) {
    var s = e.ownerDocument;
    if (e.data !== "$?" || s.readyState === "complete") n();
    else {
      var o = function() {
        n(), s.removeEventListener("DOMContentLoaded", o)
      };
      s.addEventListener("DOMContentLoaded", o), e._reactRetry = o
    }
  }

  function Wt(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F") break;
        if (n === "/$") return null
      }
    }
    return e
  }
  var Xu = null;

  function $g(e) {
    e = e.previousSibling;
    for (var n = 0; e;) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (n === 0) return e;
          n--
        } else s === "/$" && n++
      }
      e = e.previousSibling
    }
    return null
  }

  function Ig(e, n, s) {
    switch (n = Co(s), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451))
    }
  }

  function Ya(e) {
    for (var n = e.attributes; n.length;) e.removeAttributeNode(n[0]);
    Kl(e)
  }
  var Xt = new Map,
    Jg = new Set;

  function Ro(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
  }
  var Vn = K.d;
  K.d = {
    f: MT,
    r: NT,
    D: jT,
    C: OT,
    L: DT,
    m: _T,
    X: VT,
    S: zT,
    M: LT
  };

  function MT() {
    var e = Vn.f(),
      n = vo();
    return e || n
  }

  function NT(e) {
    var n = es(e);
    n !== null && n.tag === 5 && n.type === "form" ? xp(n) : Vn.r(e)
  }
  var zs = typeof document > "u" ? null : document;

  function ey(e, n, s) {
    var o = zs;
    if (o && typeof n == "string" && n) {
      var c = Pt(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof s == "string" && (c += '[crossorigin="' + s + '"]'), Jg.has(
        c) || (Jg.add(c), e = {
        rel: e,
        crossOrigin: s,
        href: n
      }, o.querySelector(c) === null && (n = o.createElement("link"), lt(n, "link", e), tt(n), o.head.appendChild(
        n)))
    }
  }

  function jT(e) {
    Vn.D(e), ey("dns-prefetch", e, null)
  }

  function OT(e, n) {
    Vn.C(e, n), ey("preconnect", e, n)
  }

  function DT(e, n, s) {
    Vn.L(e, n, s);
    var o = zs;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + Pt(n) + '"]';
      n === "image" && s && s.imageSrcSet ? (c += '[imagesrcset="' + Pt(s.imageSrcSet) + '"]', typeof s.imageSizes ==
        "string" && (c += '[imagesizes="' + Pt(s.imageSizes) + '"]')) : c += '[href="' + Pt(e) + '"]';
      var d = c;
      switch (n) {
        case "style":
          d = Vs(e);
          break;
        case "script":
          d = Ls(e)
      }
      Xt.has(d) || (e = g({
          rel: "preload",
          href: n === "image" && s && s.imageSrcSet ? void 0 : e,
          as: n
        }, s), Xt.set(d, e), o.querySelector(c) !== null || n === "style" && o.querySelector(Ga(d)) || n ===
        "script" && o.querySelector(Xa(d)) || (n = o.createElement("link"), lt(n, "link", e), tt(n), o.head
          .appendChild(n)))
    }
  }

  function _T(e, n) {
    Vn.m(e, n);
    var s = zs;
    if (s && e) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        c = 'link[rel="modulepreload"][as="' + Pt(o) + '"][href="' + Pt(e) + '"]',
        d = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Ls(e)
      }
      if (!Xt.has(d) && (e = g({
          rel: "modulepreload",
          href: e
        }, n), Xt.set(d, e), s.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(Xa(d))) return
        }
        o = s.createElement("link"), lt(o, "link", e), tt(o), s.head.appendChild(o)
      }
    }
  }

  function zT(e, n, s) {
    Vn.S(e, n, s);
    var o = zs;
    if (o && e) {
      var c = ts(o).hoistableStyles,
        d = Vs(e);
      n = n || "default";
      var v = c.get(d);
      if (!v) {
        var w = {
          loading: 0,
          preload: null
        };
        if (v = o.querySelector(Ga(d))) w.loading = 5;
        else {
          e = g({
            rel: "stylesheet",
            href: e,
            "data-precedence": n
          }, s), (s = Xt.get(d)) && Qu(e, s);
          var R = v = o.createElement("link");
          tt(R), lt(R, "link", e), R._p = new Promise(function(L, q) {
            R.onload = L, R.onerror = q
          }), R.addEventListener("load", function() {
            w.loading |= 1
          }), R.addEventListener("error", function() {
            w.loading |= 2
          }), w.loading |= 4, Mo(v, n, o)
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: w
        }, c.set(d, v)
      }
    }
  }

  function VT(e, n) {
    Vn.X(e, n);
    var s = zs;
    if (s && e) {
      var o = ts(s).hoistableScripts,
        c = Ls(e),
        d = o.get(c);
      d || (d = s.querySelector(Xa(c)), d || (e = g({
          src: e,
          async: !0
        }, n), (n = Xt.get(c)) && Fu(e, n), d = s.createElement("script"), tt(d), lt(d, "link", e), s.head
        .appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, o.set(c, d))
    }
  }

  function LT(e, n) {
    Vn.M(e, n);
    var s = zs;
    if (s && e) {
      var o = ts(s).hoistableScripts,
        c = Ls(e),
        d = o.get(c);
      d || (d = s.querySelector(Xa(c)), d || (e = g({
          src: e,
          async: !0,
          type: "module"
        }, n), (n = Xt.get(c)) && Fu(e, n), d = s.createElement("script"), tt(d), lt(d, "link", e), s.head
        .appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, o.set(c, d))
    }
  }

  function ty(e, n, s, o) {
    var c = (c = ae.current) ? Ro(c) : null;
    if (!c) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string" ? (n = Vs(s.href), s = ts(c)
          .hoistableStyles, o = s.get(n), o || (o = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, s.set(n, o)), o) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (s.rel === "stylesheet" && typeof s.href == "string" && typeof s.precedence == "string") {
          e = Vs(s.href);
          var d = ts(c).hoistableStyles,
            v = d.get(e);
          if (v || (c = c.ownerDocument || c, v = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, d.set(e, v), (d = c.querySelector(Ga(e))) && !d._p && (v.instance = d, v.state.loading = 5), Xt.has(
              e) || (s = {
              rel: "preload",
              as: "style",
              href: s.href,
              crossOrigin: s.crossOrigin,
              integrity: s.integrity,
              media: s.media,
              hrefLang: s.hrefLang,
              referrerPolicy: s.referrerPolicy
            }, Xt.set(e, s), d || kT(c, e, s, v.state))), n && o === null) throw Error(r(528, ""));
          return v
        }
        if (n && o !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return n = s.async, s = s.src, typeof s == "string" && n && typeof n != "function" && typeof n != "symbol" ? (
          n = Ls(s), s = ts(c).hoistableScripts, o = s.get(n), o || (o = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, s.set(n, o)), o) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(r(444, e))
    }
  }

  function Vs(e) {
    return 'href="' + Pt(e) + '"'
  }

  function Ga(e) {
    return 'link[rel="stylesheet"][' + e + "]"
  }

  function ny(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    })
  }

  function kT(e, n, s, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o
      .preload = n, n.addEventListener("load", function() {
        return o.loading |= 1
      }), n.addEventListener("error", function() {
        return o.loading |= 2
      }), lt(n, "link", s), tt(n), e.head.appendChild(n))
  }

  function Ls(e) {
    return '[src="' + Pt(e) + '"]'
  }

  function Xa(e) {
    return "script[async]" + e
  }

  function iy(e, n, s) {
    if (n.count++, n.instance === null) switch (n.type) {
      case "style":
        var o = e.querySelector('style[data-href~="' + Pt(s.href) + '"]');
        if (o) return n.instance = o, tt(o), o;
        var c = g({}, s, {
          "data-href": s.href,
          "data-precedence": s.precedence,
          href: null,
          precedence: null
        });
        return o = (e.ownerDocument || e).createElement("style"), tt(o), lt(o, "style", c), Mo(o, s.precedence, e), n
          .instance = o;
      case "stylesheet":
        c = Vs(s.href);
        var d = e.querySelector(Ga(c));
        if (d) return n.state.loading |= 4, n.instance = d, tt(d), d;
        o = ny(s), (c = Xt.get(c)) && Qu(o, c), d = (e.ownerDocument || e).createElement("link"), tt(d);
        var v = d;
        return v._p = new Promise(function(w, R) {
          v.onload = w, v.onerror = R
        }), lt(d, "link", o), n.state.loading |= 4, Mo(d, s.precedence, e), n.instance = d;
      case "script":
        return d = Ls(s.src), (c = e.querySelector(Xa(d))) ? (n.instance = c, tt(c), c) : (o = s, (c = Xt.get(d)) && (
          o = g({}, s), Fu(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), tt(c), lt(c, "link",
          o), e.head.appendChild(c), n.instance = c);
      case "void":
        return null;
      default:
        throw Error(r(443, n.type))
    } else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, Mo(o, s
      .precedence, e));
    return n.instance
  }

  function Mo(e, n, s) {
    for (var o = s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = o.length ? o[
        o.length - 1] : null, d = c, v = 0; v < o.length; v++) {
      var w = o[v];
      if (w.dataset.precedence === n) d = w;
      else if (d !== c) break
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (n = s.nodeType === 9 ? s.head : s, n.insertBefore(e, n
      .firstChild))
  }

  function Qu(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n
      .referrerPolicy), e.title == null && (e.title = n.title)
  }

  function Fu(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n
      .referrerPolicy), e.integrity == null && (e.integrity = n.integrity)
  }
  var No = null;

  function sy(e, n, s) {
    if (No === null) {
      var o = new Map,
        c = No = new Map;
      c.set(s, o)
    } else c = No, o = c.get(s), o || (o = new Map, c.set(s, o));
    if (o.has(e)) return o;
    for (o.set(e, null), s = s.getElementsByTagName(e), c = 0; c < s.length; c++) {
      var d = s[c];
      if (!(d[sa] || d[ct] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !==
        "http://www.w3.org/2000/svg") {
        var v = d.getAttribute(n) || "";
        v = e + v;
        var w = o.get(v);
        w ? w.push(d) : o.set(v, [d])
      }
    }
    return o
  }

  function ay(e, n, s) {
    e = e.ownerDocument || e, e.head.insertBefore(s, n === "title" ? e.querySelector("head > title") : null)
  }

  function PT(e, n, s) {
    if (s === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
        return n.rel === "stylesheet" ? (e = n.disabled, typeof n.precedence == "string" && e == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src &&
          typeof n.src == "string") return !0
    }
    return !1
  }

  function ry(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
  }
  var Qa = null;

  function UT() {}

  function BT(e, n, s) {
    if (Qa === null) throw Error(r(475));
    var o = Qa;
    if (n.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (n.state
        .loading & 4) === 0) {
      if (n.instance === null) {
        var c = Vs(s.href),
          d = e.querySelector(Ga(c));
        if (d) {
          e = d._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = jo.bind(o), e
            .then(o, o)), n.state.loading |= 4, n.instance = d, tt(d);
          return
        }
        d = e.ownerDocument || e, s = ny(s), (c = Xt.get(c)) && Qu(s, c), d = d.createElement("link"), tt(d);
        var v = d;
        v._p = new Promise(function(w, R) {
          v.onload = w, v.onerror = R
        }), lt(d, "link", s), n.instance = d
      }
      o.stylesheets === null && (o.stylesheets = new Map), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state
        .loading & 3) === 0 && (o.count++, n = jo.bind(o), e.addEventListener("load", n), e.addEventListener("error",
        n))
    }
  }

  function HT() {
    if (Qa === null) throw Error(r(475));
    var e = Qa;
    return e.stylesheets && e.count === 0 && Ku(e, e.stylesheets), 0 < e.count ? function(n) {
      var s = setTimeout(function() {
        if (e.stylesheets && Ku(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o()
        }
      }, 6e4);
      return e.unsuspend = n,
        function() {
          e.unsuspend = null, clearTimeout(s)
        }
    } : null
  }

  function jo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ku(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e()
      }
    }
  }
  var Oo = null;

  function Ku(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Oo = new Map, n.forEach(qT, e), Oo = null, jo.call(e))
  }

  function qT(e, n) {
    if (!(n.state.loading & 4)) {
      var s = Oo.get(e);
      if (s) var o = s.get(null);
      else {
        s = new Map, Oo.set(e, s);
        for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < c.length; d++) {
          var v = c[d];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (s.set(v.dataset.precedence, v), o = v)
        }
        o && s.set(null, o)
      }
      c = n.instance, v = c.getAttribute("data-precedence"), d = s.get(v) || o, d === o && s.set(null, c), s.set(v, c),
        this.count++, o = jo.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), d ? d.parentNode
        .insertBefore(c, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state
        .loading |= 4
    }
  }
  var Fa = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };

  function YT(e, n, s, o, c, d, v, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this
      .timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this
      .cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gl(-1), this.entangledLanes = this
      .shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes =
      this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.hiddenUpdates = Gl(null), this
      .identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = d, this.onRecoverableError = v, this
      .pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = new Map
  }

  function oy(e, n, s, o, c, d, v, w, R, L, q, Q) {
    return e = new YT(e, n, s, v, w, R, L, Q), n = 1, d === !0 && (n |= 24), d = Mt(3, null, null, n), e.current = d, d
      .stateNode = e, n = Nc(), n.refCount++, e.pooledCache = n, n.refCount++, d.memoizedState = {
        element: o,
        isDehydrated: s,
        cache: n
      }, _c(d), e
  }

  function ly(e) {
    return e ? (e = hs, e) : hs
  }

  function cy(e, n, s, o, c, d) {
    c = ly(c), o.context === null ? o.context = c : o.pendingContext = c, o = Zn(n), o.payload = {
      element: s
    }, d = d === void 0 ? null : d, d !== null && (o.callback = d), s = Wn(e, o, n), s !== null && (_t(s, e, n), Ta(s,
      e, n))
  }

  function uy(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < n ? s : n
    }
  }

  function Zu(e, n) {
    uy(e, n), (e = e.alternate) && uy(e, n)
  }

  function fy(e) {
    if (e.tag === 13) {
      var n = ds(e, 67108864);
      n !== null && _t(n, e, 67108864), Zu(e, 67108864)
    }
  }
  var Do = !0;

  function GT(e, n, s, o) {
    var c = z.T;
    z.T = null;
    var d = K.p;
    try {
      K.p = 2, Wu(e, n, s, o)
    } finally {
      K.p = d, z.T = c
    }
  }

  function XT(e, n, s, o) {
    var c = z.T;
    z.T = null;
    var d = K.p;
    try {
      K.p = 8, Wu(e, n, s, o)
    } finally {
      K.p = d, z.T = c
    }
  }

  function Wu(e, n, s, o) {
    if (Do) {
      var c = $u(o);
      if (c === null) ku(e, n, o, _o, s), hy(e, o);
      else if (FT(c, e, n, s, o)) o.stopPropagation();
      else if (hy(e, o), n & 4 && -1 < QT.indexOf(e)) {
        for (; c !== null;) {
          var d = es(c);
          if (d !== null) switch (d.tag) {
            case 3:
              if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                var v = Ei(d.pendingLanes);
                if (v !== 0) {
                  var w = d;
                  for (w.pendingLanes |= 2, w.entangledLanes |= 2; v;) {
                    var R = 1 << 31 - Ct(v);
                    w.entanglements[1] |= R, v &= ~R
                  }
                  mn(d), (Ne & 6) === 0 && (go = cn() + 500, Ba(0))
                }
              }
              break;
            case 13:
              w = ds(d, 2), w !== null && _t(w, d, 2), vo(), Zu(d, 2)
          }
          if (d = $u(o), d === null && ku(e, n, o, _o, s), d === c) break;
          c = d
        }
        c !== null && o.stopPropagation()
      } else ku(e, n, o, null, s)
    }
  }

  function $u(e) {
    return e = nc(e), Iu(e)
  }
  var _o = null;

  function Iu(e) {
    if (_o = null, e = Ji(e), e !== null) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var s = n.tag;
        if (s === 13) {
          if (e = f(n), e !== null) return e;
          e = null
        } else if (s === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null
        } else n !== e && (e = null)
      }
    }
    return _o = e, null
  }

  function dy(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ow()) {
          case Ch:
            return 2;
          case Rh:
            return 8;
          case Ar:
          case Dw:
            return 32;
          case Mh:
            return 268435456;
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Ju = !1,
    ci = null,
    ui = null,
    fi = null,
    Ka = new Map,
    Za = new Map,
    di = [],
    QT =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset"
    .split(" ");

  function hy(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        ci = null;
        break;
      case "dragenter":
      case "dragleave":
        ui = null;
        break;
      case "mouseover":
      case "mouseout":
        fi = null;
        break;
      case "pointerover":
      case "pointerout":
        Ka.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Za.delete(n.pointerId)
    }
  }

  function Wa(e, n, s, o, c, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: n,
      domEventName: s,
      eventSystemFlags: o,
      nativeEvent: d,
      targetContainers: [c]
    }, n !== null && (n = es(n), n !== null && fy(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !==
      null && n.indexOf(c) === -1 && n.push(c), e)
  }

  function FT(e, n, s, o, c) {
    switch (n) {
      case "focusin":
        return ci = Wa(ci, e, n, s, o, c), !0;
      case "dragenter":
        return ui = Wa(ui, e, n, s, o, c), !0;
      case "mouseover":
        return fi = Wa(fi, e, n, s, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Ka.set(d, Wa(Ka.get(d) || null, e, n, s, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Za.set(d, Wa(Za.get(d) || null, e, n, s, o, c)), !0
    }
    return !1
  }

  function my(e) {
    var n = Ji(e.target);
    if (n !== null) {
      var s = u(n);
      if (s !== null) {
        if (n = s.tag, n === 13) {
          if (n = f(s), n !== null) {
            e.blockedOn = n, Bw(e.priority, function() {
              if (s.tag === 13) {
                var o = Dt();
                o = Xl(o);
                var c = ds(s, o);
                c !== null && _t(c, s, o), Zu(s, o)
              }
            });
            return
          }
        } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return
        }
      }
    }
    e.blockedOn = null
  }

  function zo(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length;) {
      var s = $u(e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var o = new s.constructor(s.type, s);
        tc = o, s.target.dispatchEvent(o), tc = null
      } else return n = es(s), n !== null && fy(n), e.blockedOn = s, !1;
      n.shift()
    }
    return !0
  }

  function py(e, n, s) {
    zo(e) && s.delete(n)
  }

  function KT() {
    Ju = !1, ci !== null && zo(ci) && (ci = null), ui !== null && zo(ui) && (ui = null), fi !== null && zo(fi) && (fi =
      null), Ka.forEach(py), Za.forEach(py)
  }

  function Vo(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Ju || (Ju = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority,
      KT)))
  }
  var Lo = null;

  function gy(e) {
    Lo !== e && (Lo = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
      Lo === e && (Lo = null);
      for (var n = 0; n < e.length; n += 3) {
        var s = e[n],
          o = e[n + 1],
          c = e[n + 2];
        if (typeof o != "function") {
          if (Iu(o || s) === null) continue;
          break
        }
        var d = es(s);
        d !== null && (e.splice(n, 3), n -= 3, Ic(d, {
          pending: !0,
          data: c,
          method: s.method,
          action: o
        }, o, c))
      }
    }))
  }

  function $a(e) {
    function n(R) {
      return Vo(R, e)
    }
    ci !== null && Vo(ci, e), ui !== null && Vo(ui, e), fi !== null && Vo(fi, e), Ka.forEach(n), Za.forEach(n);
    for (var s = 0; s < di.length; s++) {
      var o = di[s];
      o.blockedOn === e && (o.blockedOn = null)
    }
    for (; 0 < di.length && (s = di[0], s.blockedOn === null);) my(s), s.blockedOn === null && di.shift();
    if (s = (e.ownerDocument || e).$$reactFormReplay, s != null)
      for (o = 0; o < s.length; o += 3) {
        var c = s[o],
          d = s[o + 1],
          v = c[yt] || null;
        if (typeof d == "function") v || gy(s);
        else if (v) {
          var w = null;
          if (d && d.hasAttribute("formAction")) {
            if (c = d, v = d[yt] || null) w = v.formAction;
            else if (Iu(c) !== null) continue
          } else w = v.action;
          typeof w == "function" ? s[o + 1] = w : (s.splice(o, 3), o -= 3), gy(s)
        }
      }
  }

  function ef(e) {
    this._internalRoot = e
  }
  ko.prototype.render = ef.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(r(409));
    var s = n.current,
      o = Dt();
    cy(s, o, e, n, null, null)
  }, ko.prototype.unmount = ef.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      cy(e.current, 2, null, e, null, null), vo(), n[Ii] = null
    }
  };

  function ko(e) {
    this._internalRoot = e
  }
  ko.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = _h();
      e = {
        blockedOn: null,
        target: e,
        priority: n
      };
      for (var s = 0; s < di.length && n !== 0 && n < di[s].priority; s++);
      di.splice(s, 0, e), s === 0 && my(e)
    }
  };
  var yy = i.version;
  if (yy !== "19.1.0") throw Error(r(527, yy, "19.1.0"));
  K.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(
      268, e)));
    return e = p(n), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e
  };
  var ZT = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Po.isDisabled && Po.supportsFiber) try {
      ta = Po.inject(ZT), Et = Po
    } catch {}
  }
  return Ja.createRoot = function(e, n) {
    if (!l(e)) throw Error(r(299));
    var s = !1,
      o = "",
      c = _p,
      d = zp,
      v = Vp,
      w = null;
    return n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n
        .identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (
        d = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n
      .unstable_transitionCallbacks !== void 0 && (w = n.unstable_transitionCallbacks)), n = oy(e, 1, !1, null,
      null, s, o, c, d, v, w, null), e[Ii] = n.current, Lu(e), new ef(n)
  }, Ja.hydrateRoot = function(e, n, s) {
    if (!l(e)) throw Error(r(299));
    var o = !1,
      c = "",
      d = _p,
      v = zp,
      w = Vp,
      R = null,
      L = null;
    return s != null && (s.unstable_strictMode === !0 && (o = !0), s.identifierPrefix !== void 0 && (c = s
          .identifierPrefix), s.onUncaughtError !== void 0 && (d = s.onUncaughtError), s.onCaughtError !== void 0 && (
          v = s.onCaughtError), s.onRecoverableError !== void 0 && (w = s.onRecoverableError), s
        .unstable_transitionCallbacks !== void 0 && (R = s.unstable_transitionCallbacks), s.formState !== void 0 && (
          L = s.formState)), n = oy(e, 1, !0, n, s ?? null, o, c, d, v, w, R, L), n.context = ly(null), s = n.current,
      o = Dt(), o = Xl(o), c = Zn(o), c.callback = null, Wn(s, c, o), s = o, n.current.lanes = s, ia(n, s), mn(n), e[
        Ii] = n.current, Lu(e), new ko(n)
  }, Ja.version = "19.1.0", Ja
}
var Ry;

function aA() {
  if (Ry) return nf.exports;
  Ry = 1;

  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (i) {
        console.error(i)
      }
  }
  return t(), nf.exports = sA(), nf.exports
}
var rA = aA();

function oA(t, i) {
  if (t instanceof RegExp) return {
    keys: !1,
    pattern: t
  };
  var a, r, l, u, f = [],
    h = "",
    p = t.split("/");
  for (p[0] || p.shift(); l = p.shift();) a = l[0], a === "*" ? (f.push(a), h += l[1] === "?" ? "(?:/(.*))?" :
    "/(.*)") : a === ":" ? (r = l.indexOf("?", 1), u = l.indexOf(".", 1), f.push(l.substring(1, ~r ? r : ~u ? u : l
    .length)), h += ~r && !~u ? "(?:/([^/]+?))?" : "/([^/]+?)", ~u && (h += (~r ? "?" : "") + "\\" + l.substring(
    u))) : h += "/" + l;
  return {
    keys: f,
    pattern: new RegExp("^" + h + (i ? "(?=$|/)" : "/?$"), "i")
  }
}
var S = El();
const gi = X0(S),
  wd = $T({
    __proto__: null,
    default: gi
  }, [S]);
var lf = {
    exports: {}
  },
  cf = {};
var My;

function lA() {
  if (My) return cf;
  My = 1;
  var t = El();

  function i(x, b) {
    return x === b && (x !== 0 || 1 / x === 1 / b) || x !== x && b !== b
  }
  var a = typeof Object.is == "function" ? Object.is : i,
    r = t.useState,
    l = t.useEffect,
    u = t.useLayoutEffect,
    f = t.useDebugValue;

  function h(x, b) {
    var T = b(),
      E = r({
        inst: {
          value: T,
          getSnapshot: b
        }
      }),
      C = E[0].inst,
      M = E[1];
    return u(function() {
      C.value = T, C.getSnapshot = b, p(C) && M({
        inst: C
      })
    }, [x, T, b]), l(function() {
      return p(C) && M({
        inst: C
      }), x(function() {
        p(C) && M({
          inst: C
        })
      })
    }, [x]), f(T), T
  }

  function p(x) {
    var b = x.getSnapshot;
    x = x.value;
    try {
      var T = b();
      return !a(x, T)
    } catch {
      return !0
    }
  }

  function m(x, b) {
    return b()
  }
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : h;
  return cf.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : g, cf
}
var Ny;

function cA() {
  return Ny || (Ny = 1, lf.exports = lA()), lf.exports
}
var uA = cA();
const fA = wd.useInsertionEffect,
  dA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  hA = dA ? S.useLayoutEffect : S.useEffect,
  mA = fA || hA,
  F0 = t => {
    const i = S.useRef([t, (...a) => i[0](...a)]).current;
    return mA(() => {
      i[0] = t
    }), i[1]
  },
  pA = "popstate",
  Sd = "pushState",
  Td = "replaceState",
  gA = "hashchange",
  jy = [pA, Sd, Td, gA],
  yA = t => {
    for (const i of jy) addEventListener(i, t);
    return () => {
      for (const i of jy) removeEventListener(i, t)
    }
  },
  K0 = (t, i) => uA.useSyncExternalStore(yA, t, i),
  Oy = () => location.search,
  vA = ({
    ssrSearch: t
  } = {}) => K0(Oy, t != null ? () => t : Oy),
  Dy = () => location.pathname,
  xA = ({
    ssrPath: t
  } = {}) => K0(Dy, t != null ? () => t : Dy),
  bA = (t, {
    replace: i = !1,
    state: a = null
  } = {}) => history[i ? Td : Sd](a, "", t),
  wA = (t = {}) => [xA(t), bA],
  _y = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[_y] > "u") {
  for (const t of [Sd, Td]) {
    const i = history[t];
    history[t] = function() {
      const a = i.apply(this, arguments),
        r = new Event(t);
      return r.arguments = arguments, dispatchEvent(r), a
    }
  }
  Object.defineProperty(window, _y, {
    value: !0
  })
}
const SA = (t, i) => i.toLowerCase().indexOf(t.toLowerCase()) ? "~" + i : i.slice(t.length) || "/",
  Z0 = (t = "") => t === "/" ? "" : t,
  TA = (t, i) => t[0] === "~" ? t.slice(1) : Z0(i) + t,
  AA = (t = "", i) => SA(zy(Z0(t)), zy(i)),
  zy = t => {
    try {
      return decodeURI(t)
    } catch {
      return t
    }
  },
  W0 = {
    hook: wA,
    searchHook: vA,
    parser: oA,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: t => t,
    aroundNav: (t, i, a) => t(i, a)
  },
  $0 = S.createContext(W0),
  Cl = () => S.useContext($0),
  I0 = {},
  J0 = S.createContext(I0),
  EA = () => S.useContext(J0),
  Ad = t => {
    const [i, a] = t.hook(t);
    return [AA(t.base, i), F0((r, l) => t.aroundNav(a, TA(r, t.base), l))]
  },
  ex = (t, i, a, r) => {
    const {
      pattern: l,
      keys: u
    } = i instanceof RegExp ? {
      keys: !1,
      pattern: i
    } : t(i || "*", r), f = l.exec(a) || [], [h, ...p] = f;
    return h !== void 0 ? [!0, (() => {
      const m = u !== !1 ? Object.fromEntries(u.map((x, b) => [x, p[b]])) : f.groups;
      let g = {
        ...p
      };
      return m && Object.assign(g, m), g
    })(), ...r ? [h] : []] : [!1, null]
  },
  tx = ({
    children: t,
    ...i
  }) => {
    const a = Cl(),
      r = i.hook ? W0 : a;
    let l = r;
    const [u, f = i.ssrSearch ?? ""] = i.ssrPath?.split("?") ?? [];
    u && (i.ssrSearch = f, i.ssrPath = u), i.hrefs = i.hrefs ?? i.hook?.hrefs, i.searchHook = i.searchHook ?? i.hook
      ?.searchHook;
    let h = S.useRef({}),
      p = h.current,
      m = p;
    for (let g in r) {
      const x = g === "base" ? r[g] + (i[g] ?? "") : i[g] ?? r[g];
      p === m && x !== m[g] && (h.current = m = {
        ...m
      }), m[g] = x, (x !== r[g] || x !== l[g]) && (l = m)
    }
    return S.createElement($0.Provider, {
      value: l,
      children: t
    })
  },
  Vy = ({
    children: t,
    component: i
  }, a) => i ? S.createElement(i, {
    params: a
  }) : typeof t == "function" ? t(a) : t,
  CA = t => {
    let i = S.useRef(I0);
    const a = i.current;
    return i.current = Object.keys(t).length !== Object.keys(a).length || Object.entries(t).some(([r, l]) => l !== a[
      r]) ? t : a
  },
  Ly = ({
    path: t,
    nest: i,
    match: a,
    ...r
  }) => {
    const l = Cl(),
      [u] = Ad(l),
      [f, h, p] = a ?? ex(l.parser, t, u, i),
      m = CA({
        ...EA(),
        ...h
      });
    if (!f) return null;
    const g = p ? S.createElement(tx, {
      base: p
    }, Vy(r, m)) : Vy(r, m);
    return S.createElement(J0.Provider, {
      value: m,
      children: g
    })
  },
  RA = S.forwardRef((t, i) => {
    const a = Cl(),
      [r, l] = Ad(a),
      {
        to: u = "",
        href: f = u,
        onClick: h,
        asChild: p,
        children: m,
        className: g,
        replace: x,
        state: b,
        transition: T,
        ...E
      } = t,
      C = F0(j => {
        j.ctrlKey || j.metaKey || j.altKey || j.shiftKey || j.button !== 0 || (h?.(j), j.defaultPrevented || (j
          .preventDefault(), l(f, t)))
      }),
      M = a.hrefs(f[0] === "~" ? f.slice(1) : a.base + f, a);
    return p && S.isValidElement(m) ? S.cloneElement(m, {
      onClick: C,
      href: M
    }) : S.createElement("a", {
      ...E,
      onClick: C,
      href: M,
      className: g?.call ? g(r === f) : g,
      children: m,
      ref: i
    })
  }),
  nx = t => Array.isArray(t) ? t.flatMap(i => nx(i && i.type === S.Fragment ? i.props.children : i)) : [t],
  MA = ({
    children: t,
    location: i
  }) => {
    const a = Cl(),
      [r] = Ad(a);
    for (const l of nx(t)) {
      let u = 0;
      if (S.isValidElement(l) && (u = ex(a.parser, l.props.path, i || r, l.props.nest))[0]) return S.cloneElement(l, {
        match: u
      })
    }
    return null
  };
var Rl = class {
    constructor() {
      this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
      return this.listeners.add(t), this.onSubscribe(), () => {
        this.listeners.delete(t), this.onUnsubscribe()
      }
    }
    hasListeners() {
      return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  NA = {
    setTimeout: (t, i) => setTimeout(t, i),
    clearTimeout: t => clearTimeout(t),
    setInterval: (t, i) => setInterval(t, i),
    clearInterval: t => clearInterval(t)
  },
  jA = class {
    #e = NA;
    #n = !1;
    setTimeoutProvider(t) {
      this.#e = t
    }
    setTimeout(t, i) {
      return this.#e.setTimeout(t, i)
    }
    clearTimeout(t) {
      this.#e.clearTimeout(t)
    }
    setInterval(t, i) {
      return this.#e.setInterval(t, i)
    }
    clearInterval(t) {
      this.#e.clearInterval(t)
    }
  },
  Vf = new jA;

function OA(t) {
  setTimeout(t, 0)
}
var Ml = typeof window > "u" || "Deno" in globalThis;

function Jt() {}

function DA(t, i) {
  return typeof t == "function" ? t(i) : t
}

function _A(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0
}

function zA(t, i) {
  return Math.max(t + (i || 0) - Date.now(), 0)
}

function Lf(t, i) {
  return typeof t == "function" ? t(i) : t
}

function VA(t, i) {
  return typeof t == "function" ? t(i) : t
}

function ky(t, i) {
  const {
    type: a = "all",
    exact: r,
    fetchStatus: l,
    predicate: u,
    queryKey: f,
    stale: h
  } = t;
  if (f) {
    if (r) {
      if (i.queryHash !== Ed(f, i.options)) return !1
    } else if (!ur(i.queryKey, f)) return !1
  }
  if (a !== "all") {
    const p = i.isActive();
    if (a === "active" && !p || a === "inactive" && p) return !1
  }
  return !(typeof h == "boolean" && i.isStale() !== h || l && l !== i.state.fetchStatus || u && !u(i))
}

function Py(t, i) {
  const {
    exact: a,
    status: r,
    predicate: l,
    mutationKey: u
  } = t;
  if (u) {
    if (!i.options.mutationKey) return !1;
    if (a) {
      if (cr(i.options.mutationKey) !== cr(u)) return !1
    } else if (!ur(i.options.mutationKey, u)) return !1
  }
  return !(r && i.state.status !== r || l && !l(i))
}

function Ed(t, i) {
  return (i?.queryKeyHashFn || cr)(t)
}

function cr(t) {
  return JSON.stringify(t, (i, a) => kf(a) ? Object.keys(a).sort().reduce((r, l) => (r[l] = a[l], r), {}) : a)
}

function ur(t, i) {
  return t === i ? !0 : typeof t != typeof i ? !1 : t && i && typeof t == "object" && typeof i == "object" ? Object
    .keys(i).every(a => ur(t[a], i[a])) : !1
}
var LA = Object.prototype.hasOwnProperty;

function ix(t, i, a = 0) {
  if (t === i) return t;
  if (a > 500) return i;
  const r = Uy(t) && Uy(i);
  if (!r && !(kf(t) && kf(i))) return i;
  const u = (r ? t : Object.keys(t)).length,
    f = r ? i : Object.keys(i),
    h = f.length,
    p = r ? new Array(h) : {};
  let m = 0;
  for (let g = 0; g < h; g++) {
    const x = r ? g : f[g],
      b = t[x],
      T = i[x];
    if (b === T) {
      p[x] = b, (r ? g < u : LA.call(t, x)) && m++;
      continue
    }
    if (b === null || T === null || typeof b != "object" || typeof T != "object") {
      p[x] = T;
      continue
    }
    const E = ix(b, T, a + 1);
    p[x] = E, E === b && m++
  }
  return u === h && m === u ? t : p
}

function Uy(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length
}

function kf(t) {
  if (!By(t)) return !1;
  const i = t.constructor;
  if (i === void 0) return !0;
  const a = i.prototype;
  return !(!By(a) || !a.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}

function By(t) {
  return Object.prototype.toString.call(t) === "[object Object]"
}

function kA(t) {
  return new Promise(i => {
    Vf.setTimeout(i, t)
  })
}

function PA(t, i, a) {
  return typeof a.structuralSharing == "function" ? a.structuralSharing(t, i) : a.structuralSharing !== !1 ? ix(t, i) :
    i
}

function UA(t, i, a = 0) {
  const r = [...t, i];
  return a && r.length > a ? r.slice(1) : r
}

function BA(t, i, a = 0) {
  const r = [i, ...t];
  return a && r.length > a ? r.slice(0, -1) : r
}
var Cd = Symbol();

function sx(t, i) {
  return !t.queryFn && i?.initialPromise ? () => i.initialPromise : !t.queryFn || t.queryFn === Cd ? () => Promise
    .reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}

function HA(t, i, a) {
  let r = !1,
    l;
  return Object.defineProperty(t, "signal", {
    enumerable: !0,
    get: () => (l ??= i(), r || (r = !0, l.aborted ? a() : l.addEventListener("abort", a, {
      once: !0
    })), l)
  }), t
}
var qA = class extends Rl {
    #e;
    #n;
    #t;
    constructor() {
      super(), this.#t = t => {
        if (!Ml && window.addEventListener) {
          const i = () => t();
          return window.addEventListener("visibilitychange", i, !1), () => {
            window.removeEventListener("visibilitychange", i)
          }
        }
      }
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#t)
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), this.#n = void 0)
    }
    setEventListener(t) {
      this.#t = t, this.#n?.(), this.#n = t(i => {
        typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
      })
    }
    setFocused(t) {
      this.#e !== t && (this.#e = t, this.onFocus())
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach(i => {
        i(t)
      })
    }
    isFocused() {
      return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
  },
  ax = new qA;

function YA() {
  let t, i;
  const a = new Promise((l, u) => {
    t = l, i = u
  });
  a.status = "pending", a.catch(() => {});

  function r(l) {
    Object.assign(a, l), delete a.resolve, delete a.reject
  }
  return a.resolve = l => {
    r({
      status: "fulfilled",
      value: l
    }), t(l)
  }, a.reject = l => {
    r({
      status: "rejected",
      reason: l
    }), i(l)
  }, a
}
var GA = OA;

function XA() {
  let t = [],
    i = 0,
    a = h => {
      h()
    },
    r = h => {
      h()
    },
    l = GA;
  const u = h => {
      i ? t.push(h) : l(() => {
        a(h)
      })
    },
    f = () => {
      const h = t;
      t = [], h.length && l(() => {
        r(() => {
          h.forEach(p => {
            a(p)
          })
        })
      })
    };
  return {
    batch: h => {
      let p;
      i++;
      try {
        p = h()
      } finally {
        i--, i || f()
      }
      return p
    },
    batchCalls: h => (...p) => {
      u(() => {
        h(...p)
      })
    },
    schedule: u,
    setNotifyFunction: h => {
      a = h
    },
    setBatchNotifyFunction: h => {
      r = h
    },
    setScheduler: h => {
      l = h
    }
  }
}
var mt = XA(),
  QA = class extends Rl {
    #e = !0;
    #n;
    #t;
    constructor() {
      super(), this.#t = t => {
        if (!Ml && window.addEventListener) {
          const i = () => t(!0),
            a = () => t(!1);
          return window.addEventListener("online", i, !1), window.addEventListener("offline", a, !1), () => {
            window.removeEventListener("online", i), window.removeEventListener("offline", a)
          }
        }
      }
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#t)
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), this.#n = void 0)
    }
    setEventListener(t) {
      this.#t = t, this.#n?.(), this.#n = t(this.setOnline.bind(this))
    }
    setOnline(t) {
      this.#e !== t && (this.#e = t, this.listeners.forEach(a => {
        a(t)
      }))
    }
    isOnline() {
      return this.#e
    }
  },
  ol = new QA;

function FA(t) {
  return Math.min(1e3 * 2 ** t, 3e4)
}

function rx(t) {
  return (t ?? "online") === "online" ? ol.isOnline() : !0
}
var Pf = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t?.revert, this.silent = t?.silent
  }
};

function ox(t) {
  let i = !1,
    a = 0,
    r;
  const l = YA(),
    u = () => l.status !== "pending",
    f = C => {
      if (!u()) {
        const M = new Pf(C);
        b(M), t.onCancel?.(M)
      }
    },
    h = () => {
      i = !0
    },
    p = () => {
      i = !1
    },
    m = () => ax.isFocused() && (t.networkMode === "always" || ol.isOnline()) && t.canRun(),
    g = () => rx(t.networkMode) && t.canRun(),
    x = C => {
      u() || (r?.(), l.resolve(C))
    },
    b = C => {
      u() || (r?.(), l.reject(C))
    },
    T = () => new Promise(C => {
      r = M => {
        (u() || m()) && C(M)
      }, t.onPause?.()
    }).then(() => {
      r = void 0, u() || t.onContinue?.()
    }),
    E = () => {
      if (u()) return;
      let C;
      const M = a === 0 ? t.initialPromise : void 0;
      try {
        C = M ?? t.fn()
      } catch (j) {
        C = Promise.reject(j)
      }
      Promise.resolve(C).then(x).catch(j => {
        if (u()) return;
        const _ = t.retry ?? (Ml ? 0 : 3),
          D = t.retryDelay ?? FA,
          k = typeof D == "function" ? D(a, j) : D,
          P = _ === !0 || typeof _ == "number" && a < _ || typeof _ == "function" && _(a, j);
        if (i || !P) {
          b(j);
          return
        }
        a++, t.onFail?.(a, j), kA(k).then(() => m() ? void 0 : T()).then(() => {
          i ? b(j) : E()
        })
      })
    };
  return {
    promise: l,
    status: () => l.status,
    cancel: f,
    continue: () => (r?.(), l),
    cancelRetry: h,
    continueRetry: p,
    canStart: g,
    start: () => (g() ? E() : T().then(E), l)
  }
}
var lx = class {
    #e;
    destroy() {
      this.clearGcTimeout()
    }
    scheduleGc() {
      this.clearGcTimeout(), _A(this.gcTime) && (this.#e = Vf.setTimeout(() => {
        this.optionalRemove()
      }, this.gcTime))
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (Ml ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
      this.#e && (Vf.clearTimeout(this.#e), this.#e = void 0)
    }
  },
  KA = class extends lx {
    #e;
    #n;
    #t;
    #s;
    #i;
    #r;
    #o;
    constructor(t) {
      super(), this.#o = !1, this.#r = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.#s = t
        .client, this.#t = this.#s.getQueryCache(), this.queryKey = t.queryKey, this.queryHash = t.queryHash, this
        .#e = qy(this.options), this.state = t.state ?? this.#e, this.scheduleGc()
    }
    get meta() {
      return this.options.meta
    }
    get promise() {
      return this.#i?.promise
    }
    setOptions(t) {
      if (this.options = {
          ...this.#r,
          ...t
        }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
        const i = qy(this.options);
        i.data !== void 0 && (this.setState(Hy(i.data, i.dataUpdatedAt)), this.#e = i)
      }
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && this.#t.remove(this)
    }
    setData(t, i) {
      const a = PA(this.state.data, t, this.options);
      return this.#a({
        data: a,
        type: "success",
        dataUpdatedAt: i?.updatedAt,
        manual: i?.manual
      }), a
    }
    setState(t, i) {
      this.#a({
        type: "setState",
        state: t,
        setStateOptions: i
      })
    }
    cancel(t) {
      const i = this.#i?.promise;
      return this.#i?.cancel(t), i ? i.then(Jt).catch(Jt) : Promise.resolve()
    }
    destroy() {
      super.destroy(), this.cancel({
        silent: !0
      })
    }
    reset() {
      this.destroy(), this.setState(this.#e)
    }
    isActive() {
      return this.observers.some(t => VA(t.options.enabled, this) !== !1)
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Cd || this.state
        .dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
      return this.getObserversCount() > 0 ? this.observers.some(t => Lf(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
      return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state
        .data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !zA(this.state
        .dataUpdatedAt, t)
    }
    onFocus() {
      this.observers.find(i => i.shouldFetchOnWindowFocus())?.refetch({
        cancelRefetch: !1
      }), this.#i?.continue()
    }
    onOnline() {
      this.observers.find(i => i.shouldFetchOnReconnect())?.refetch({
        cancelRefetch: !1
      }), this.#i?.continue()
    }
    addObserver(t) {
      this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.#t.notify({
        type: "observerAdded",
        query: this,
        observer: t
      }))
    }
    removeObserver(t) {
      this.observers.includes(t) && (this.observers = this.observers.filter(i => i !== t), this.observers.length || (
        this.#i && (this.#o ? this.#i.cancel({
          revert: !0
        }) : this.#i.cancelRetry()), this.scheduleGc()), this.#t.notify({
        type: "observerRemoved",
        query: this,
        observer: t
      }))
    }
    getObserversCount() {
      return this.observers.length
    }
    invalidate() {
      this.state.isInvalidated || this.#a({
        type: "invalidate"
      })
    }
    async fetch(t, i) {
      if (this.state.fetchStatus !== "idle" && this.#i?.status() !== "rejected") {
        if (this.state.data !== void 0 && i?.cancelRefetch) this.cancel({
          silent: !0
        });
        else if (this.#i) return this.#i.continueRetry(), this.#i.promise
      }
      if (t && this.setOptions(t), !this.options.queryFn) {
        const h = this.observers.find(p => p.options.queryFn);
        h && this.setOptions(h.options)
      }
      const a = new AbortController,
        r = h => {
          Object.defineProperty(h, "signal", {
            enumerable: !0,
            get: () => (this.#o = !0, a.signal)
          })
        },
        l = () => {
          const h = sx(this.options, i),
            m = (() => {
              const g = {
                client: this.#s,
                queryKey: this.queryKey,
                meta: this.meta
              };
              return r(g), g
            })();
          return this.#o = !1, this.options.persister ? this.options.persister(h, m, this) : h(m)
        },
        f = (() => {
          const h = {
            fetchOptions: i,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#s,
            state: this.state,
            fetchFn: l
          };
          return r(h), h
        })();
      this.options.behavior?.onFetch(f, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state
        .fetchMeta !== f.fetchOptions?.meta) && this.#a({
        type: "fetch",
        meta: f.fetchOptions?.meta
      }), this.#i = ox({
        initialPromise: i?.initialPromise,
        fn: f.fetchFn,
        onCancel: h => {
          h instanceof Pf && h.revert && this.setState({
            ...this.#n,
            fetchStatus: "idle"
          }), a.abort()
        },
        onFail: (h, p) => {
          this.#a({
            type: "failed",
            failureCount: h,
            error: p
          })
        },
        onPause: () => {
          this.#a({
            type: "pause"
          })
        },
        onContinue: () => {
          this.#a({
            type: "continue"
          })
        },
        retry: f.options.retry,
        retryDelay: f.options.retryDelay,
        networkMode: f.options.networkMode,
        canRun: () => !0
      });
      try {
        const h = await this.#i.start();
        if (h === void 0) throw new Error(`${this.queryHash} data is undefined`);
        return this.setData(h), this.#t.config.onSuccess?.(h, this), this.#t.config.onSettled?.(h, this.state.error,
          this), h
      } catch (h) {
        if (h instanceof Pf) {
          if (h.silent) return this.#i.promise;
          if (h.revert) {
            if (this.state.data === void 0) throw h;
            return this.state.data
          }
        }
        throw this.#a({
          type: "error",
          error: h
        }), this.#t.config.onError?.(h, this), this.#t.config.onSettled?.(this.state.data, h, this), h
      } finally {
        this.scheduleGc()
      }
    }
    #a(t) {
      const i = a => {
        switch (t.type) {
          case "failed":
            return {
              ...a, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
            };
          case "pause":
            return {
              ...a, fetchStatus: "paused"
            };
          case "continue":
            return {
              ...a, fetchStatus: "fetching"
            };
          case "fetch":
            return {
              ...a, ...ZA(a.data, this.options), fetchMeta: t.meta ?? null
            };
          case "success":
            const r = {
              ...a,
              ...Hy(t.data, t.dataUpdatedAt),
              dataUpdateCount: a.dataUpdateCount + 1,
              ...!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null
              }
            };
            return this.#n = t.manual ? r : void 0, r;
          case "error":
            const l = t.error;
            return {
              ...a, error: l, errorUpdateCount: a.errorUpdateCount + 1, errorUpdatedAt: Date.now(),
                fetchFailureCount: a.fetchFailureCount + 1, fetchFailureReason: l, fetchStatus: "idle", status:
                "error", isInvalidated: !0
            };
          case "invalidate":
            return {
              ...a, isInvalidated: !0
            };
          case "setState":
            return {
              ...a, ...t.state
            }
        }
      };
      this.state = i(this.state), mt.batch(() => {
        this.observers.forEach(a => {
          a.onQueryUpdate()
        }), this.#t.notify({
          query: this,
          type: "updated",
          action: t
        })
      })
    }
  };

function ZA(t, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: rx(i.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  }
}

function Hy(t, i) {
  return {
    data: t,
    dataUpdatedAt: i ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success"
  }
}

function qy(t) {
  const i = typeof t.initialData == "function" ? t.initialData() : t.initialData,
    a = i !== void 0,
    r = a ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: a ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: a ? "success" : "pending",
    fetchStatus: "idle"
  }
}

function Yy(t) {
  return {
    onFetch: (i, a) => {
      const r = i.options,
        l = i.fetchOptions?.meta?.fetchMore?.direction,
        u = i.state.data?.pages || [],
        f = i.state.data?.pageParams || [];
      let h = {
          pages: [],
          pageParams: []
        },
        p = 0;
      const m = async () => {
        let g = !1;
        const x = E => {
            HA(E, () => i.signal, () => g = !0)
          },
          b = sx(i.options, i.fetchOptions),
          T = async (E, C, M) => {
            if (g) return Promise.reject();
            if (C == null && E.pages.length) return Promise.resolve(E);
            const _ = (() => {
                const F = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: C,
                  direction: M ? "backward" : "forward",
                  meta: i.options.meta
                };
                return x(F), F
              })(),
              D = await b(_),
              {
                maxPages: k
              } = i.options,
              P = M ? BA : UA;
            return {
              pages: P(E.pages, D, k),
              pageParams: P(E.pageParams, C, k)
            }
          };
        if (l && u.length) {
          const E = l === "backward",
            C = E ? WA : Gy,
            M = {
              pages: u,
              pageParams: f
            },
            j = C(r, M);
          h = await T(M, j, E)
        } else {
          const E = t ?? u.length;
          do {
            const C = p === 0 ? f[0] ?? r.initialPageParam : Gy(r, h);
            if (p > 0 && C == null) break;
            h = await T(h, C), p++
          } while (p < E)
        }
        return h
      };
      i.options.persister ? i.fetchFn = () => i.options.persister?.(m, {
        client: i.client,
        queryKey: i.queryKey,
        meta: i.options.meta,
        signal: i.signal
      }, a) : i.fetchFn = m
    }
  }
}

function Gy(t, {
  pages: i,
  pageParams: a
}) {
  const r = i.length - 1;
  return i.length > 0 ? t.getNextPageParam(i[r], i, a[r], a) : void 0
}

function WA(t, {
  pages: i,
  pageParams: a
}) {
  return i.length > 0 ? t.getPreviousPageParam?.(i[0], i, a[0], a) : void 0
}
var $A = class extends lx {
  #e;
  #n;
  #t;
  #s;
  constructor(t) {
    super(), this.#e = t.client, this.mutationId = t.mutationId, this.#t = t.mutationCache, this.#n = [], this
      .state = t.state || IA(), this.setOptions(t.options), this.scheduleGc()
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime)
  }
  get meta() {
    return this.options.meta
  }
  addObserver(t) {
    this.#n.includes(t) || (this.#n.push(t), this.clearGcTimeout(), this.#t.notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }))
  }
  removeObserver(t) {
    this.#n = this.#n.filter(i => i !== t), this.scheduleGc(), this.#t.notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    })
  }
  optionalRemove() {
    this.#n.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
  }
  continue () {
    return this.#s?.continue() ?? this.execute(this.state.variables)
  }
  async execute(t) {
    const i = () => {
        this.#i({
          type: "continue"
        })
      },
      a = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
    this.#s = ox({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t, a) : Promise.reject(new Error(
        "No mutationFn found")),
      onFail: (u, f) => {
        this.#i({
          type: "failed",
          failureCount: u,
          error: f
        })
      },
      onPause: () => {
        this.#i({
          type: "pause"
        })
      },
      onContinue: i,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#t.canRun(this)
    });
    const r = this.state.status === "pending",
      l = !this.#s.canStart();
    try {
      if (r) i();
      else {
        this.#i({
          type: "pending",
          variables: t,
          isPaused: l
        }), this.#t.config.onMutate && await this.#t.config.onMutate(t, this, a);
        const f = await this.options.onMutate?.(t, a);
        f !== this.state.context && this.#i({
          type: "pending",
          context: f,
          variables: t,
          isPaused: l
        })
      }
      const u = await this.#s.start();
      return await this.#t.config.onSuccess?.(u, t, this.state.context, this, a), await this.options.onSuccess?.(u,
        t, this.state.context, a), await this.#t.config.onSettled?.(u, null, this.state.variables, this.state
        .context, this, a), await this.options.onSettled?.(u, null, t, this.state.context, a), this.#i({
        type: "success",
        data: u
      }), u
    } catch (u) {
      try {
        await this.#t.config.onError?.(u, t, this.state.context, this, a)
      } catch (f) {
        Promise.reject(f)
      }
      try {
        await this.options.onError?.(u, t, this.state.context, a)
      } catch (f) {
        Promise.reject(f)
      }
      try {
        await this.#t.config.onSettled?.(void 0, u, this.state.variables, this.state.context, this, a)
      } catch (f) {
        Promise.reject(f)
      }
      try {
        await this.options.onSettled?.(void 0, u, t, this.state.context, a)
      } catch (f) {
        Promise.reject(f)
      }
      throw this.#i({
        type: "error",
        error: u
      }), u
    } finally {
      this.#t.runNext(this)
    }
  }
  #i(t) {
    const i = a => {
      switch (t.type) {
        case "failed":
          return {
            ...a, failureCount: t.failureCount, failureReason: t.error
          };
        case "pause":
          return {
            ...a, isPaused: !0
          };
        case "continue":
          return {
            ...a, isPaused: !1
          };
        case "pending":
          return {
            ...a, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t
              .isPaused, status: "pending", variables: t.variables, submittedAt: Date.now()
          };
        case "success":
          return {
            ...a, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
          };
        case "error":
          return {
            ...a, data: void 0, error: t.error, failureCount: a.failureCount + 1, failureReason: t.error,
              isPaused: !1, status: "error"
          }
      }
    };
    this.state = i(this.state), mt.batch(() => {
      this.#n.forEach(a => {
        a.onMutationUpdate(t)
      }), this.#t.notify({
        mutation: this,
        type: "updated",
        action: t
      })
    })
  }
};

function IA() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  }
}
var JA = class extends Rl {
  constructor(t = {}) {
    super(), this.config = t, this.#e = new Set, this.#n = new Map, this.#t = 0
  }
  #e;
  #n;
  #t;
  build(t, i, a) {
    const r = new $A({
      client: t,
      mutationCache: this,
      mutationId: ++this.#t,
      options: t.defaultMutationOptions(i),
      state: a
    });
    return this.add(r), r
  }
  add(t) {
    this.#e.add(t);
    const i = Uo(t);
    if (typeof i == "string") {
      const a = this.#n.get(i);
      a ? a.push(t) : this.#n.set(i, [t])
    }
    this.notify({
      type: "added",
      mutation: t
    })
  }
  remove(t) {
    if (this.#e.delete(t)) {
      const i = Uo(t);
      if (typeof i == "string") {
        const a = this.#n.get(i);
        if (a)
          if (a.length > 1) {
            const r = a.indexOf(t);
            r !== -1 && a.splice(r, 1)
          } else a[0] === t && this.#n.delete(i)
      }
    }
    this.notify({
      type: "removed",
      mutation: t
    })
  }
  canRun(t) {
    const i = Uo(t);
    if (typeof i == "string") {
      const r = this.#n.get(i)?.find(l => l.state.status === "pending");
      return !r || r === t
    } else return !0
  }
  runNext(t) {
    const i = Uo(t);
    return typeof i == "string" ? this.#n.get(i)?.find(r => r !== t && r.state.isPaused)?.continue() ?? Promise
      .resolve() : Promise.resolve()
  }
  clear() {
    mt.batch(() => {
      this.#e.forEach(t => {
        this.notify({
          type: "removed",
          mutation: t
        })
      }), this.#e.clear(), this.#n.clear()
    })
  }
  getAll() {
    return Array.from(this.#e)
  }
  find(t) {
    const i = {
      exact: !0,
      ...t
    };
    return this.getAll().find(a => Py(i, a))
  }
  findAll(t = {}) {
    return this.getAll().filter(i => Py(t, i))
  }
  notify(t) {
    mt.batch(() => {
      this.listeners.forEach(i => {
        i(t)
      })
    })
  }
  resumePausedMutations() {
    const t = this.getAll().filter(i => i.state.isPaused);
    return mt.batch(() => Promise.all(t.map(i => i.continue().catch(Jt))))
  }
};

function Uo(t) {
  return t.options.scope?.id
}
var e2 = class extends Rl {
    constructor(t = {}) {
      super(), this.config = t, this.#e = new Map
    }
    #e;
    build(t, i, a) {
      const r = i.queryKey,
        l = i.queryHash ?? Ed(r, i);
      let u = this.get(l);
      return u || (u = new KA({
        client: t,
        queryKey: r,
        queryHash: l,
        options: t.defaultQueryOptions(i),
        state: a,
        defaultOptions: t.getQueryDefaults(r)
      }), this.add(u)), u
    }
    add(t) {
      this.#e.has(t.queryHash) || (this.#e.set(t.queryHash, t), this.notify({
        type: "added",
        query: t
      }))
    }
    remove(t) {
      const i = this.#e.get(t.queryHash);
      i && (t.destroy(), i === t && this.#e.delete(t.queryHash), this.notify({
        type: "removed",
        query: t
      }))
    }
    clear() {
      mt.batch(() => {
        this.getAll().forEach(t => {
          this.remove(t)
        })
      })
    }
    get(t) {
      return this.#e.get(t)
    }
    getAll() {
      return [...this.#e.values()]
    }
    find(t) {
      const i = {
        exact: !0,
        ...t
      };
      return this.getAll().find(a => ky(i, a))
    }
    findAll(t = {}) {
      const i = this.getAll();
      return Object.keys(t).length > 0 ? i.filter(a => ky(t, a)) : i
    }
    notify(t) {
      mt.batch(() => {
        this.listeners.forEach(i => {
          i(t)
        })
      })
    }
    onFocus() {
      mt.batch(() => {
        this.getAll().forEach(t => {
          t.onFocus()
        })
      })
    }
    onOnline() {
      mt.batch(() => {
        this.getAll().forEach(t => {
          t.onOnline()
        })
      })
    }
  },
  t2 = class {
    #e;
    #n;
    #t;
    #s;
    #i;
    #r;
    #o;
    #a;
    constructor(t = {}) {
      this.#e = t.queryCache || new e2, this.#n = t.mutationCache || new JA, this.#t = t.defaultOptions || {}, this
        .#s = new Map, this.#i = new Map, this.#r = 0
    }
    mount() {
      this.#r++, this.#r === 1 && (this.#o = ax.subscribe(async t => {
        t && (await this.resumePausedMutations(), this.#e.onFocus())
      }), this.#a = ol.subscribe(async t => {
        t && (await this.resumePausedMutations(), this.#e.onOnline())
      }))
    }
    unmount() {
      this.#r--, this.#r === 0 && (this.#o?.(), this.#o = void 0, this.#a?.(), this.#a = void 0)
    }
    isFetching(t) {
      return this.#e.findAll({
        ...t,
        fetchStatus: "fetching"
      }).length
    }
    isMutating(t) {
      return this.#n.findAll({
        ...t,
        status: "pending"
      }).length
    }
    getQueryData(t) {
      const i = this.defaultQueryOptions({
        queryKey: t
      });
      return this.#e.get(i.queryHash)?.state.data
    }
    ensureQueryData(t) {
      const i = this.defaultQueryOptions(t),
        a = this.#e.build(this, i),
        r = a.state.data;
      return r === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && a.isStaleByTime(Lf(i.staleTime, a)) && this
        .prefetchQuery(i), Promise.resolve(r))
    }
    getQueriesData(t) {
      return this.#e.findAll(t).map(({
        queryKey: i,
        state: a
      }) => {
        const r = a.data;
        return [i, r]
      })
    }
    setQueryData(t, i, a) {
      const r = this.defaultQueryOptions({
          queryKey: t
        }),
        u = this.#e.get(r.queryHash)?.state.data,
        f = DA(i, u);
      if (f !== void 0) return this.#e.build(this, r).setData(f, {
        ...a,
        manual: !0
      })
    }
    setQueriesData(t, i, a) {
      return mt.batch(() => this.#e.findAll(t).map(({
        queryKey: r
      }) => [r, this.setQueryData(r, i, a)]))
    }
    getQueryState(t) {
      const i = this.defaultQueryOptions({
        queryKey: t
      });
      return this.#e.get(i.queryHash)?.state
    }
    removeQueries(t) {
      const i = this.#e;
      mt.batch(() => {
        i.findAll(t).forEach(a => {
          i.remove(a)
        })
      })
    }
    resetQueries(t, i) {
      const a = this.#e;
      return mt.batch(() => (a.findAll(t).forEach(r => {
        r.reset()
      }), this.refetchQueries({
        type: "active",
        ...t
      }, i)))
    }
    cancelQueries(t, i = {}) {
      const a = {
          revert: !0,
          ...i
        },
        r = mt.batch(() => this.#e.findAll(t).map(l => l.cancel(a)));
      return Promise.all(r).then(Jt).catch(Jt)
    }
    invalidateQueries(t, i = {}) {
      return mt.batch(() => (this.#e.findAll(t).forEach(a => {
        a.invalidate()
      }), t?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
        ...t,
        type: t?.refetchType ?? t?.type ?? "active"
      }, i)))
    }
    refetchQueries(t, i = {}) {
      const a = {
          ...i,
          cancelRefetch: i.cancelRefetch ?? !0
        },
        r = mt.batch(() => this.#e.findAll(t).filter(l => !l.isDisabled() && !l.isStatic()).map(l => {
          let u = l.fetch(void 0, a);
          return a.throwOnError || (u = u.catch(Jt)), l.state.fetchStatus === "paused" ? Promise.resolve() : u
        }));
      return Promise.all(r).then(Jt)
    }
    fetchQuery(t) {
      const i = this.defaultQueryOptions(t);
      i.retry === void 0 && (i.retry = !1);
      const a = this.#e.build(this, i);
      return a.isStaleByTime(Lf(i.staleTime, a)) ? a.fetch(i) : Promise.resolve(a.state.data)
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(Jt).catch(Jt)
    }
    fetchInfiniteQuery(t) {
      return t.behavior = Yy(t.pages), this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(Jt).catch(Jt)
    }
    ensureInfiniteQueryData(t) {
      return t.behavior = Yy(t.pages), this.ensureQueryData(t)
    }
    resumePausedMutations() {
      return ol.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
      return this.#e
    }
    getMutationCache() {
      return this.#n
    }
    getDefaultOptions() {
      return this.#t
    }
    setDefaultOptions(t) {
      this.#t = t
    }
    setQueryDefaults(t, i) {
      this.#s.set(cr(t), {
        queryKey: t,
        defaultOptions: i
      })
    }
    getQueryDefaults(t) {
      const i = [...this.#s.values()],
        a = {};
      return i.forEach(r => {
        ur(t, r.queryKey) && Object.assign(a, r.defaultOptions)
      }), a
    }
    setMutationDefaults(t, i) {
      this.#i.set(cr(t), {
        mutationKey: t,
        defaultOptions: i
      })
    }
    getMutationDefaults(t) {
      const i = [...this.#i.values()],
        a = {};
      return i.forEach(r => {
        ur(t, r.mutationKey) && Object.assign(a, r.defaultOptions)
      }), a
    }
    defaultQueryOptions(t) {
      if (t._defaulted) return t;
      const i = {
        ...this.#t.queries,
        ...this.getQueryDefaults(t.queryKey),
        ...t,
        _defaulted: !0
      };
      return i.queryHash || (i.queryHash = Ed(i.queryKey, i)), i.refetchOnReconnect === void 0 && (i
        .refetchOnReconnect = i.networkMode !== "always"), i.throwOnError === void 0 && (i.throwOnError = !!i
        .suspense), !i.networkMode && i.persister && (i.networkMode = "offlineFirst"), i.queryFn === Cd && (i
        .enabled = !1), i
    }
    defaultMutationOptions(t) {
      return t?._defaulted ? t : {
        ...this.#t.mutations,
        ...t?.mutationKey && this.getMutationDefaults(t.mutationKey),
        ...t,
        _defaulted: !0
      }
    }
    clear() {
      this.#e.clear(), this.#n.clear()
    }
  },
  n2 = S.createContext(void 0),
  i2 = ({
    client: t,
    children: i
  }) => (S.useEffect(() => (t.mount(), () => {
    t.unmount()
  }), [t]), y.jsx(n2.Provider, {
    value: t,
    children: i
  }));
const s2 = 1,
  a2 = 1e6;
let uf = 0;

function r2() {
  return uf = (uf + 1) % Number.MAX_SAFE_INTEGER, uf.toString()
}
const ff = new Map,
  Xy = t => {
    if (ff.has(t)) return;
    const i = setTimeout(() => {
      ff.delete(t), sr({
        type: "REMOVE_TOAST",
        toastId: t
      })
    }, a2);
    ff.set(t, i)
  },
  o2 = (t, i) => {
    switch (i.type) {
      case "ADD_TOAST":
        return {
          ...t, toasts: [i.toast, ...t.toasts].slice(0, s2)
        };
      case "UPDATE_TOAST":
        return {
          ...t, toasts: t.toasts.map(a => a.id === i.toast.id ? {
            ...a,
            ...i.toast
          } : a)
        };
      case "DISMISS_TOAST": {
        const {
          toastId: a
        } = i;
        return a ? Xy(a) : t.toasts.forEach(r => {
          Xy(r.id)
        }), {
          ...t,
          toasts: t.toasts.map(r => r.id === a || a === void 0 ? {
            ...r,
            open: !1
          } : r)
        }
      }
      case "REMOVE_TOAST":
        return i.toastId === void 0 ? {
          ...t,
          toasts: []
        } : {
          ...t,
          toasts: t.toasts.filter(a => a.id !== i.toastId)
        }
    }
  },
  $o = [];
let Io = {
  toasts: []
};

function sr(t) {
  Io = o2(Io, t), $o.forEach(i => {
    i(Io)
  })
}

function l2({
  ...t
}) {
  const i = r2(),
    a = l => sr({
      type: "UPDATE_TOAST",
      toast: {
        ...l,
        id: i
      }
    }),
    r = () => sr({
      type: "DISMISS_TOAST",
      toastId: i
    });
  return sr({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: i,
      open: !0,
      onOpenChange: l => {
        l || r()
      }
    }
  }), {
    id: i,
    dismiss: r,
    update: a
  }
}

function c2() {
  const [t, i] = S.useState(Io);
  return S.useEffect(() => ($o.push(i), () => {
    const a = $o.indexOf(i);
    a > -1 && $o.splice(a, 1)
  }), [t]), {
    ...t,
    toast: l2,
    dismiss: a => sr({
      type: "DISMISS_TOAST",
      toastId: a
    })
  }
}
var Nl = Q0();
const u2 = X0(Nl);

function et(t, i, {
  checkForDefaultPrevented: a = !0
} = {}) {
  return function(l) {
    if (t?.(l), a === !1 || !l.defaultPrevented) return i?.(l)
  }
}

function Qy(t, i) {
  if (typeof t == "function") return t(i);
  t != null && (t.current = i)
}

function Rd(...t) {
  return i => {
    let a = !1;
    const r = t.map(l => {
      const u = Qy(l, i);
      return !a && typeof u == "function" && (a = !0), u
    });
    if (a) return () => {
      for (let l = 0; l < r.length; l++) {
        const u = r[l];
        typeof u == "function" ? u() : Qy(t[l], null)
      }
    }
  }
}

function nn(...t) {
  return S.useCallback(Rd(...t), t)
}

function jl(t, i = []) {
  let a = [];

  function r(u, f) {
    const h = S.createContext(f),
      p = a.length;
    a = [...a, f];
    const m = x => {
      const {
        scope: b,
        children: T,
        ...E
      } = x, C = b?.[t]?.[p] || h, M = S.useMemo(() => E, Object.values(E));
      return y.jsx(C.Provider, {
        value: M,
        children: T
      })
    };
    m.displayName = u + "Provider";

    function g(x, b) {
      const T = b?.[t]?.[p] || h,
        E = S.useContext(T);
      if (E) return E;
      if (f !== void 0) return f;
      throw new Error(`\`${x}\` must be used within \`${u}\``)
    }
    return [m, g]
  }
  const l = () => {
    const u = a.map(f => S.createContext(f));
    return function(h) {
      const p = h?.[t] || u;
      return S.useMemo(() => ({
        [`__scope${t}`]: {
          ...h,
          [t]: p
        }
      }), [h, p])
    }
  };
  return l.scopeName = t, [r, f2(l, ...i)]
}

function f2(...t) {
  const i = t[0];
  if (t.length === 1) return i;
  const a = () => {
    const r = t.map(l => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(u) {
      const f = r.reduce((h, {
        useScope: p,
        scopeName: m
      }) => {
        const x = p(u)[`__scope${m}`];
        return {
          ...h,
          ...x
        }
      }, {});
      return S.useMemo(() => ({
        [`__scope${i.scopeName}`]: f
      }), [f])
    }
  };
  return a.scopeName = i.scopeName, a
}

function Uf(t) {
  const i = d2(t),
    a = S.forwardRef((r, l) => {
      const {
        children: u,
        ...f
      } = r, h = S.Children.toArray(u), p = h.find(m2);
      if (p) {
        const m = p.props.children,
          g = h.map(x => x === p ? S.Children.count(m) > 1 ? S.Children.only(null) : S.isValidElement(m) ? m.props
            .children : null : x);
        return y.jsx(i, {
          ...f,
          ref: l,
          children: S.isValidElement(m) ? S.cloneElement(m, void 0, g) : null
        })
      }
      return y.jsx(i, {
        ...f,
        ref: l,
        children: u
      })
    });
  return a.displayName = `${t}.Slot`, a
}

function d2(t) {
  const i = S.forwardRef((a, r) => {
    const {
      children: l,
      ...u
    } = a;
    if (S.isValidElement(l)) {
      const f = g2(l),
        h = p2(u, l.props);
      return l.type !== S.Fragment && (h.ref = r ? Rd(r, f) : f), S.cloneElement(l, h)
    }
    return S.Children.count(l) > 1 ? S.Children.only(null) : null
  });
  return i.displayName = `${t}.SlotClone`, i
}
var cx = Symbol("radix.slottable");

function h2(t) {
  const i = ({
    children: a
  }) => y.jsx(y.Fragment, {
    children: a
  });
  return i.displayName = `${t}.Slottable`, i.__radixId = cx, i
}

function m2(t) {
  return S.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === cx
}

function p2(t, i) {
  const a = {
    ...i
  };
  for (const r in i) {
    const l = t[r],
      u = i[r];
    /^on[A-Z]/.test(r) ? l && u ? a[r] = (...h) => {
      const p = u(...h);
      return l(...h), p
    } : l && (a[r] = l) : r === "style" ? a[r] = {
      ...l,
      ...u
    } : r === "className" && (a[r] = [l, u].filter(Boolean).join(" "))
  }
  return {
    ...t,
    ...a
  }
}

function g2(t) {
  let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    a = i && "isReactWarning" in i && i.isReactWarning;
  return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i
    .isReactWarning, a ? t.props.ref : t.props.ref || t.ref)
}

function y2(t) {
  const i = t + "CollectionProvider",
    [a, r] = jl(i),
    [l, u] = a(i, {
      collectionRef: {
        current: null
      },
      itemMap: new Map
    }),
    f = C => {
      const {
        scope: M,
        children: j
      } = C, _ = gi.useRef(null), D = gi.useRef(new Map).current;
      return y.jsx(l, {
        scope: M,
        itemMap: D,
        collectionRef: _,
        children: j
      })
    };
  f.displayName = i;
  const h = t + "CollectionSlot",
    p = Uf(h),
    m = gi.forwardRef((C, M) => {
      const {
        scope: j,
        children: _
      } = C, D = u(h, j), k = nn(M, D.collectionRef);
      return y.jsx(p, {
        ref: k,
        children: _
      })
    });
  m.displayName = h;
  const g = t + "CollectionItemSlot",
    x = "data-radix-collection-item",
    b = Uf(g),
    T = gi.forwardRef((C, M) => {
      const {
        scope: j,
        children: _,
        ...D
      } = C, k = gi.useRef(null), P = nn(M, k), F = u(g, j);
      return gi.useEffect(() => (F.itemMap.set(k, {
        ref: k,
        ...D
      }), () => {
        F.itemMap.delete(k)
      })), y.jsx(b, {
        [x]: "",
        ref: P,
        children: _
      })
    });
  T.displayName = g;

  function E(C) {
    const M = u(t + "CollectionConsumer", C);
    return gi.useCallback(() => {
      const _ = M.collectionRef.current;
      if (!_) return [];
      const D = Array.from(_.querySelectorAll(`[${x}]`));
      return Array.from(M.itemMap.values()).sort((F, Z) => D.indexOf(F.ref.current) - D.indexOf(Z.ref.current))
    }, [M.collectionRef, M.itemMap])
  }
  return [{
    Provider: f,
    Slot: m,
    ItemSlot: T
  }, E, r]
}
var v2 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span",
    "svg", "ul"
  ],
  Tt = v2.reduce((t, i) => {
    const a = Uf(`Primitive.${i}`),
      r = S.forwardRef((l, u) => {
        const {
          asChild: f,
          ...h
        } = l, p = f ? a : i;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(p, {
          ...h,
          ref: u
        })
      });
    return r.displayName = `Primitive.${i}`, {
      ...t,
      [i]: r
    }
  }, {});

function ux(t, i) {
  t && Nl.flushSync(() => t.dispatchEvent(i))
}

function xi(t) {
  const i = S.useRef(t);
  return S.useEffect(() => {
    i.current = t
  }), S.useMemo(() => (...a) => i.current?.(...a), [])
}

function x2(t, i = globalThis?.document) {
  const a = xi(t);
  S.useEffect(() => {
    const r = l => {
      l.key === "Escape" && a(l)
    };
    return i.addEventListener("keydown", r, {
      capture: !0
    }), () => i.removeEventListener("keydown", r, {
      capture: !0
    })
  }, [a, i])
}
var b2 = "DismissableLayer",
  Bf = "dismissableLayer.update",
  w2 = "dismissableLayer.pointerDownOutside",
  S2 = "dismissableLayer.focusOutside",
  Fy, fx = S.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  Md = S.forwardRef((t, i) => {
    const {
      disableOutsidePointerEvents: a = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: h,
      ...p
    } = t, m = S.useContext(fx), [g, x] = S.useState(null), b = g?.ownerDocument ?? globalThis?.document, [, T] = S
      .useState({}), E = nn(i, Z => x(Z)), C = Array.from(m.layers), [M] = [...m
        .layersWithOutsidePointerEventsDisabled
      ].slice(-1), j = C.indexOf(M), _ = g ? C.indexOf(g) : -1, D = m.layersWithOutsidePointerEventsDisabled.size > 0,
      k = _ >= j, P = A2(Z => {
        const H = Z.target,
          W = [...m.branches].some(oe => oe.contains(H));
        !k || W || (l?.(Z), f?.(Z), Z.defaultPrevented || h?.())
      }, b), F = E2(Z => {
        const H = Z.target;
        [...m.branches].some(oe => oe.contains(H)) || (u?.(Z), f?.(Z), Z.defaultPrevented || h?.())
      }, b);
    return x2(Z => {
      _ === m.layers.size - 1 && (r?.(Z), !Z.defaultPrevented && h && (Z.preventDefault(), h()))
    }, b), S.useEffect(() => {
      if (g) return a && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Fy = b.body.style.pointerEvents,
        b.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(g)), m.layers.add(
        g), Ky(), () => {
        a && m.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = Fy)
      }
    }, [g, b, a, m]), S.useEffect(() => () => {
      g && (m.layers.delete(g), m.layersWithOutsidePointerEventsDisabled.delete(g), Ky())
    }, [g, m]), S.useEffect(() => {
      const Z = () => T({});
      return document.addEventListener(Bf, Z), () => document.removeEventListener(Bf, Z)
    }, []), y.jsx(Tt.div, {
      ...p,
      ref: E,
      style: {
        pointerEvents: D ? k ? "auto" : "none" : void 0,
        ...t.style
      },
      onFocusCapture: et(t.onFocusCapture, F.onFocusCapture),
      onBlurCapture: et(t.onBlurCapture, F.onBlurCapture),
      onPointerDownCapture: et(t.onPointerDownCapture, P.onPointerDownCapture)
    })
  });
Md.displayName = b2;
var T2 = "DismissableLayerBranch",
  dx = S.forwardRef((t, i) => {
    const a = S.useContext(fx),
      r = S.useRef(null),
      l = nn(i, r);
    return S.useEffect(() => {
      const u = r.current;
      if (u) return a.branches.add(u), () => {
        a.branches.delete(u)
      }
    }, [a.branches]), y.jsx(Tt.div, {
      ...t,
      ref: l
    })
  });
dx.displayName = T2;

function A2(t, i = globalThis?.document) {
  const a = xi(t),
    r = S.useRef(!1),
    l = S.useRef(() => {});
  return S.useEffect(() => {
    const u = h => {
        if (h.target && !r.current) {
          let p = function() {
            hx(w2, a, m, {
              discrete: !0
            })
          };
          const m = {
            originalEvent: h
          };
          h.pointerType === "touch" ? (i.removeEventListener("click", l.current), l.current = p, i.addEventListener(
            "click", l.current, {
              once: !0
            })) : p()
        } else i.removeEventListener("click", l.current);
        r.current = !1
      },
      f = window.setTimeout(() => {
        i.addEventListener("pointerdown", u)
      }, 0);
    return () => {
      window.clearTimeout(f), i.removeEventListener("pointerdown", u), i.removeEventListener("click", l.current)
    }
  }, [i, a]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function E2(t, i = globalThis?.document) {
  const a = xi(t),
    r = S.useRef(!1);
  return S.useEffect(() => {
    const l = u => {
      u.target && !r.current && hx(S2, a, {
        originalEvent: u
      }, {
        discrete: !1
      })
    };
    return i.addEventListener("focusin", l), () => i.removeEventListener("focusin", l)
  }, [i, a]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function Ky() {
  const t = new CustomEvent(Bf);
  document.dispatchEvent(t)
}

function hx(t, i, a, {
  discrete: r
}) {
  const l = a.originalEvent.target,
    u = new CustomEvent(t, {
      bubbles: !1,
      cancelable: !0,
      detail: a
    });
  i && l.addEventListener(t, i, {
    once: !0
  }), r ? ux(l, u) : l.dispatchEvent(u)
}
var C2 = Md,
  R2 = dx,
  bi = globalThis?.document ? S.useLayoutEffect : () => {},
  M2 = "Portal",
  Nd = S.forwardRef((t, i) => {
    const {
      container: a,
      ...r
    } = t, [l, u] = S.useState(!1);
    bi(() => u(!0), []);
    const f = a || l && globalThis?.document?.body;
    return f ? u2.createPortal(y.jsx(Tt.div, {
      ...r,
      ref: i
    }), f) : null
  });
Nd.displayName = M2;

function N2(t, i) {
  return S.useReducer((a, r) => i[a][r] ?? a, t)
}
var Ol = t => {
  const {
    present: i,
    children: a
  } = t, r = j2(i), l = typeof a == "function" ? a({
    present: r.isPresent
  }) : S.Children.only(a), u = nn(r.ref, O2(l));
  return typeof a == "function" || r.isPresent ? S.cloneElement(l, {
    ref: u
  }) : null
};
Ol.displayName = "Presence";

function j2(t) {
  const [i, a] = S.useState(), r = S.useRef(null), l = S.useRef(t), u = S.useRef("none"), f = t ? "mounted" :
    "unmounted", [h, p] = N2(f, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
  return S.useEffect(() => {
    const m = Bo(r.current);
    u.current = h === "mounted" ? m : "none"
  }, [h]), bi(() => {
    const m = r.current,
      g = l.current;
    if (g !== t) {
      const b = u.current,
        T = Bo(m);
      t ? p("MOUNT") : T === "none" || m?.display === "none" ? p("UNMOUNT") : p(g && b !== T ? "ANIMATION_OUT" :
        "UNMOUNT"), l.current = t
    }
  }, [t, p]), bi(() => {
    if (i) {
      let m;
      const g = i.ownerDocument.defaultView ?? window,
        x = T => {
          const C = Bo(r.current).includes(CSS.escape(T.animationName));
          if (T.target === i && C && (p("ANIMATION_END"), !l.current)) {
            const M = i.style.animationFillMode;
            i.style.animationFillMode = "forwards", m = g.setTimeout(() => {
              i.style.animationFillMode === "forwards" && (i.style.animationFillMode = M)
            })
          }
        },
        b = T => {
          T.target === i && (u.current = Bo(r.current))
        };
      return i.addEventListener("animationstart", b), i.addEventListener("animationcancel", x), i.addEventListener(
        "animationend", x), () => {
        g.clearTimeout(m), i.removeEventListener("animationstart", b), i.removeEventListener("animationcancel",
          x), i.removeEventListener("animationend", x)
      }
    } else p("ANIMATION_END")
  }, [i, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(h),
    ref: S.useCallback(m => {
      r.current = m ? getComputedStyle(m) : null, a(m)
    }, [])
  }
}

function Bo(t) {
  return t?.animationName || "none"
}

function O2(t) {
  let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    a = i && "isReactWarning" in i && i.isReactWarning;
  return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i
    .isReactWarning, a ? t.props.ref : t.props.ref || t.ref)
}
var D2 = wd[" useInsertionEffect ".trim().toString()] || bi;

function _2({
  prop: t,
  defaultProp: i,
  onChange: a = () => {},
  caller: r
}) {
  const [l, u, f] = z2({
    defaultProp: i,
    onChange: a
  }), h = t !== void 0, p = h ? t : l;
  {
    const g = S.useRef(t !== void 0);
    S.useEffect(() => {
      const x = g.current;
      x !== h && console.warn(
        `${r} is changing from ${x?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), g.current = h
    }, [h, r])
  }
  const m = S.useCallback(g => {
    if (h) {
      const x = V2(g) ? g(t) : g;
      x !== t && f.current?.(x)
    } else u(g)
  }, [h, t, u, f]);
  return [p, m]
}

function z2({
  defaultProp: t,
  onChange: i
}) {
  const [a, r] = S.useState(t), l = S.useRef(a), u = S.useRef(i);
  return D2(() => {
    u.current = i
  }, [i]), S.useEffect(() => {
    l.current !== a && (u.current?.(a), l.current = a)
  }, [a, l]), [a, r, u]
}

function V2(t) {
  return typeof t == "function"
}
var L2 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }),
  k2 = "VisuallyHidden",
  Dl = S.forwardRef((t, i) => y.jsx(Tt.span, {
    ...t,
    ref: i,
    style: {
      ...L2,
      ...t.style
    }
  }));
Dl.displayName = k2;
var P2 = Dl,
  jd = "ToastProvider",
  [Od, U2, B2] = y2("Toast"),
  [mx] = jl("Toast", [B2]),
  [H2, _l] = mx(jd),
  px = t => {
    const {
      __scopeToast: i,
      label: a = "Notification",
      duration: r = 5e3,
      swipeDirection: l = "right",
      swipeThreshold: u = 50,
      children: f
    } = t, [h, p] = S.useState(null), [m, g] = S.useState(0), x = S.useRef(!1), b = S.useRef(!1);
    return a.trim() || console.error(`Invalid prop \`label\` supplied to \`${jd}\`. Expected non-empty \`string\`.`), y
      .jsx(Od.Provider, {
        scope: i,
        children: y.jsx(H2, {
          scope: i,
          label: a,
          duration: r,
          swipeDirection: l,
          swipeThreshold: u,
          toastCount: m,
          viewport: h,
          onViewportChange: p,
          onToastAdd: S.useCallback(() => g(T => T + 1), []),
          onToastRemove: S.useCallback(() => g(T => T - 1), []),
          isFocusedToastEscapeKeyDownRef: x,
          isClosePausedRef: b,
          children: f
        })
      })
  };
px.displayName = jd;
var gx = "ToastViewport",
  q2 = ["F8"],
  Hf = "toast.viewportPause",
  qf = "toast.viewportResume",
  yx = S.forwardRef((t, i) => {
    const {
      __scopeToast: a,
      hotkey: r = q2,
      label: l = "Notifications ({hotkey})",
      ...u
    } = t, f = _l(gx, a), h = U2(a), p = S.useRef(null), m = S.useRef(null), g = S.useRef(null), x = S.useRef(null),
      b = nn(i, x, f.onViewportChange), T = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), E = f.toastCount >
      0;
    S.useEffect(() => {
      const M = j => {
        r.length !== 0 && r.every(D => j[D] || j.code === D) && x.current?.focus()
      };
      return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M)
    }, [r]), S.useEffect(() => {
      const M = p.current,
        j = x.current;
      if (E && M && j) {
        const _ = () => {
            if (!f.isClosePausedRef.current) {
              const F = new CustomEvent(Hf);
              j.dispatchEvent(F), f.isClosePausedRef.current = !0
            }
          },
          D = () => {
            if (f.isClosePausedRef.current) {
              const F = new CustomEvent(qf);
              j.dispatchEvent(F), f.isClosePausedRef.current = !1
            }
          },
          k = F => {
            !M.contains(F.relatedTarget) && D()
          },
          P = () => {
            M.contains(document.activeElement) || D()
          };
        return M.addEventListener("focusin", _), M.addEventListener("focusout", k), M.addEventListener(
            "pointermove", _), M.addEventListener("pointerleave", P), window.addEventListener("blur", _), window
          .addEventListener("focus", D), () => {
            M.removeEventListener("focusin", _), M.removeEventListener("focusout", k), M.removeEventListener(
              "pointermove", _), M.removeEventListener("pointerleave", P), window.removeEventListener("blur",
              _), window.removeEventListener("focus", D)
          }
      }
    }, [E, f.isClosePausedRef]);
    const C = S.useCallback(({
      tabbingDirection: M
    }) => {
      const _ = h().map(D => {
        const k = D.ref.current,
          P = [k, ...tE(k)];
        return M === "forwards" ? P : P.reverse()
      });
      return (M === "forwards" ? _.reverse() : _).flat()
    }, [h]);
    return S.useEffect(() => {
      const M = x.current;
      if (M) {
        const j = _ => {
          const D = _.altKey || _.ctrlKey || _.metaKey;
          if (_.key === "Tab" && !D) {
            const P = document.activeElement,
              F = _.shiftKey;
            if (_.target === M && F) {
              m.current?.focus();
              return
            }
            const W = C({
                tabbingDirection: F ? "backwards" : "forwards"
              }),
              oe = W.findIndex(pe => pe === P);
            df(W.slice(oe + 1)) ? _.preventDefault() : F ? m.current?.focus() : g.current?.focus()
          }
        };
        return M.addEventListener("keydown", j), () => M.removeEventListener("keydown", j)
      }
    }, [h, C]), y.jsxs(R2, {
      ref: p,
      role: "region",
      "aria-label": l.replace("{hotkey}", T),
      tabIndex: -1,
      style: {
        pointerEvents: E ? void 0 : "none"
      },
      children: [E && y.jsx(Yf, {
        ref: m,
        onFocusFromOutsideViewport: () => {
          const M = C({
            tabbingDirection: "forwards"
          });
          df(M)
        }
      }), y.jsx(Od.Slot, {
        scope: a,
        children: y.jsx(Tt.ol, {
          tabIndex: -1,
          ...u,
          ref: b
        })
      }), E && y.jsx(Yf, {
        ref: g,
        onFocusFromOutsideViewport: () => {
          const M = C({
            tabbingDirection: "backwards"
          });
          df(M)
        }
      })]
    })
  });
yx.displayName = gx;
var vx = "ToastFocusProxy",
  Yf = S.forwardRef((t, i) => {
    const {
      __scopeToast: a,
      onFocusFromOutsideViewport: r,
      ...l
    } = t, u = _l(vx, a);
    return y.jsx(Dl, {
      tabIndex: 0,
      ...l,
      ref: i,
      style: {
        position: "fixed"
      },
      onFocus: f => {
        const h = f.relatedTarget;
        !u.viewport?.contains(h) && r()
      }
    })
  });
Yf.displayName = vx;
var yr = "Toast",
  Y2 = "toast.swipeStart",
  G2 = "toast.swipeMove",
  X2 = "toast.swipeCancel",
  Q2 = "toast.swipeEnd",
  xx = S.forwardRef((t, i) => {
    const {
      forceMount: a,
      open: r,
      defaultOpen: l,
      onOpenChange: u,
      ...f
    } = t, [h, p] = _2({
      prop: r,
      defaultProp: l ?? !0,
      onChange: u,
      caller: yr
    });
    return y.jsx(Ol, {
      present: a || h,
      children: y.jsx(Z2, {
        open: h,
        ...f,
        ref: i,
        onClose: () => p(!1),
        onPause: xi(t.onPause),
        onResume: xi(t.onResume),
        onSwipeStart: et(t.onSwipeStart, m => {
          m.currentTarget.setAttribute("data-swipe", "start")
        }),
        onSwipeMove: et(t.onSwipeMove, m => {
          const {
            x: g,
            y: x
          } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "move"), m.currentTarget.style.setProperty(
            "--radix-toast-swipe-move-x", `${g}px`), m.currentTarget.style.setProperty(
            "--radix-toast-swipe-move-y", `${x}px`)
        }),
        onSwipeCancel: et(t.onSwipeCancel, m => {
          m.currentTarget.setAttribute("data-swipe", "cancel"), m.currentTarget.style.removeProperty(
            "--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty(
            "--radix-toast-swipe-move-y"), m.currentTarget.style.removeProperty(
            "--radix-toast-swipe-end-x"), m.currentTarget.style.removeProperty(
            "--radix-toast-swipe-end-y")
        }),
        onSwipeEnd: et(t.onSwipeEnd, m => {
          const {
            x: g,
            y: x
          } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "end"), m.currentTarget.style.removeProperty(
            "--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty(
            "--radix-toast-swipe-move-y"), m.currentTarget.style.setProperty(
            "--radix-toast-swipe-end-x", `${g}px`), m.currentTarget.style.setProperty(
            "--radix-toast-swipe-end-y", `${x}px`), p(!1)
        })
      })
    })
  });
xx.displayName = yr;
var [F2, K2] = mx(yr, {
  onClose() {}
}), Z2 = S.forwardRef((t, i) => {
  const {
    __scopeToast: a,
    type: r = "foreground",
    duration: l,
    open: u,
    onClose: f,
    onEscapeKeyDown: h,
    onPause: p,
    onResume: m,
    onSwipeStart: g,
    onSwipeMove: x,
    onSwipeCancel: b,
    onSwipeEnd: T,
    ...E
  } = t, C = _l(yr, a), [M, j] = S.useState(null), _ = nn(i, J => j(J)), D = S.useRef(null), k = S.useRef(null), P =
    l || C.duration, F = S.useRef(0), Z = S.useRef(P), H = S.useRef(0), {
      onToastAdd: W,
      onToastRemove: oe
    } = C, pe = xi(() => {
      M?.contains(document.activeElement) && C.viewport?.focus(), f()
    }), ce = S.useCallback(J => {
      !J || J === 1 / 0 || (window.clearTimeout(H.current), F.current = new Date().getTime(), H.current = window
        .setTimeout(pe, J))
    }, [pe]);
  S.useEffect(() => {
    const J = C.viewport;
    if (J) {
      const fe = () => {
          ce(Z.current), m?.()
        },
        z = () => {
          const K = new Date().getTime() - F.current;
          Z.current = Z.current - K, window.clearTimeout(H.current), p?.()
        };
      return J.addEventListener(Hf, z), J.addEventListener(qf, fe), () => {
        J.removeEventListener(Hf, z), J.removeEventListener(qf, fe)
      }
    }
  }, [C.viewport, P, p, m, ce]), S.useEffect(() => {
    u && !C.isClosePausedRef.current && ce(P)
  }, [u, P, C.isClosePausedRef, ce]), S.useEffect(() => (W(), () => oe()), [W, oe]);
  const xe = S.useMemo(() => M ? Cx(M) : null, [M]);
  return C.viewport ? y.jsxs(y.Fragment, {
    children: [xe && y.jsx(W2, {
      __scopeToast: a,
      role: "status",
      "aria-live": r === "foreground" ? "assertive" : "polite",
      children: xe
    }), y.jsx(F2, {
      scope: a,
      onClose: pe,
      children: Nl.createPortal(y.jsx(Od.ItemSlot, {
        scope: a,
        children: y.jsx(C2, {
          asChild: !0,
          onEscapeKeyDown: et(h, () => {
            C.isFocusedToastEscapeKeyDownRef.current || pe(), C
              .isFocusedToastEscapeKeyDownRef.current = !1
          }),
          children: y.jsx(Tt.li, {
            tabIndex: 0,
            "data-state": u ? "open" : "closed",
            "data-swipe-direction": C.swipeDirection,
            ...E,
            ref: _,
            style: {
              userSelect: "none",
              touchAction: "none",
              ...t.style
            },
            onKeyDown: et(t.onKeyDown, J => {
              J.key === "Escape" && (h?.(J.nativeEvent), J.nativeEvent
                .defaultPrevented || (C.isFocusedToastEscapeKeyDownRef.current = !0,
                  pe()))
            }),
            onPointerDown: et(t.onPointerDown, J => {
              J.button === 0 && (D.current = {
                x: J.clientX,
                y: J.clientY
              })
            }),
            onPointerMove: et(t.onPointerMove, J => {
              if (!D.current) return;
              const fe = J.clientX - D.current.x,
                z = J.clientY - D.current.y,
                K = !!k.current,
                X = ["left", "right"].includes(C.swipeDirection),
                ee = ["left", "up"].includes(C.swipeDirection) ? Math.min : Math.max,
                A = X ? ee(0, fe) : 0,
                Y = X ? 0 : ee(0, z),
                I = J.pointerType === "touch" ? 10 : 2,
                $ = {
                  x: A,
                  y: Y
                },
                re = {
                  originalEvent: J,
                  delta: $
                };
              K ? (k.current = $, Ho(G2, x, re, {
                discrete: !1
              })) : Zy($, C.swipeDirection, I) ? (k.current = $, Ho(Y2, g, re, {
                discrete: !1
              }), J.target.setPointerCapture(J.pointerId)) : (Math.abs(fe) > I || Math
                .abs(z) > I) && (D.current = null)
            }),
            onPointerUp: et(t.onPointerUp, J => {
              const fe = k.current,
                z = J.target;
              if (z.hasPointerCapture(J.pointerId) && z.releasePointerCapture(J
                  .pointerId), k.current = null, D.current = null, fe) {
                const K = J.currentTarget,
                  X = {
                    originalEvent: J,
                    delta: fe
                  };
                Zy(fe, C.swipeDirection, C.swipeThreshold) ? Ho(Q2, T, X, {
                  discrete: !0
                }) : Ho(X2, b, X, {
                  discrete: !0
                }), K.addEventListener("click", ee => ee.preventDefault(), {
                  once: !0
                })
              }
            })
          })
        })
      }), C.viewport)
    })]
  }) : null
}), W2 = t => {
  const {
    __scopeToast: i,
    children: a,
    ...r
  } = t, l = _l(yr, i), [u, f] = S.useState(!1), [h, p] = S.useState(!1);
  return J2(() => f(!0)), S.useEffect(() => {
    const m = window.setTimeout(() => p(!0), 1e3);
    return () => window.clearTimeout(m)
  }, []), h ? null : y.jsx(Nd, {
    asChild: !0,
    children: y.jsx(Dl, {
      ...r,
      children: u && y.jsxs(y.Fragment, {
        children: [l.label, " ", a]
      })
    })
  })
}, $2 = "ToastTitle", bx = S.forwardRef((t, i) => {
  const {
    __scopeToast: a,
    ...r
  } = t;
  return y.jsx(Tt.div, {
    ...r,
    ref: i
  })
});
bx.displayName = $2;
var I2 = "ToastDescription",
  wx = S.forwardRef((t, i) => {
    const {
      __scopeToast: a,
      ...r
    } = t;
    return y.jsx(Tt.div, {
      ...r,
      ref: i
    })
  });
wx.displayName = I2;
var Sx = "ToastAction",
  Tx = S.forwardRef((t, i) => {
    const {
      altText: a,
      ...r
    } = t;
    return a.trim() ? y.jsx(Ex, {
      altText: a,
      asChild: !0,
      children: y.jsx(Dd, {
        ...r,
        ref: i
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Sx}\`. Expected non-empty \`string\`.`), null)
  });
Tx.displayName = Sx;
var Ax = "ToastClose",
  Dd = S.forwardRef((t, i) => {
    const {
      __scopeToast: a,
      ...r
    } = t, l = K2(Ax, a);
    return y.jsx(Ex, {
      asChild: !0,
      children: y.jsx(Tt.button, {
        type: "button",
        ...r,
        ref: i,
        onClick: et(t.onClick, l.onClose)
      })
    })
  });
Dd.displayName = Ax;
var Ex = S.forwardRef((t, i) => {
  const {
    __scopeToast: a,
    altText: r,
    ...l
  } = t;
  return y.jsx(Tt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...l,
    ref: i
  })
});

function Cx(t) {
  const i = [];
  return Array.from(t.childNodes).forEach(r => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && i.push(r.textContent), eE(r)) {
      const l = r.ariaHidden || r.hidden || r.style.display === "none",
        u = r.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (u) {
          const f = r.dataset.radixToastAnnounceAlt;
          f && i.push(f)
        } else i.push(...Cx(r))
    }
  }), i
}

function Ho(t, i, a, {
  discrete: r
}) {
  const l = a.originalEvent.currentTarget,
    u = new CustomEvent(t, {
      bubbles: !0,
      cancelable: !0,
      detail: a
    });
  i && l.addEventListener(t, i, {
    once: !0
  }), r ? ux(l, u) : l.dispatchEvent(u)
}
var Zy = (t, i, a = 0) => {
  const r = Math.abs(t.x),
    l = Math.abs(t.y),
    u = r > l;
  return i === "left" || i === "right" ? u && r > a : !u && l > a
};

function J2(t = () => {}) {
  const i = xi(t);
  bi(() => {
    let a = 0,
      r = 0;
    return a = window.requestAnimationFrame(() => r = window.requestAnimationFrame(i)), () => {
      window.cancelAnimationFrame(a), window.cancelAnimationFrame(r)
    }
  }, [i])
}

function eE(t) {
  return t.nodeType === t.ELEMENT_NODE
}

function tE(t) {
  const i = [],
    a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const l = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || l ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT :
          NodeFilter.FILTER_SKIP
      }
    });
  for (; a.nextNode();) i.push(a.currentNode);
  return i
}

function df(t) {
  const i = document.activeElement;
  return t.some(a => a === i ? !0 : (a.focus(), document.activeElement !== i))
}
var nE = px,
  Rx = yx,
  Mx = xx,
  Nx = bx,
  jx = wx,
  Ox = Tx,
  Dx = Dd;

function _x(t) {
  var i, a, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var l = t.length;
      for (i = 0; i < l; i++) t[i] && (a = _x(t[i])) && (r && (r += " "), r += a)
    } else
      for (a in t) t[a] && (r && (r += " "), r += a);
  return r
}

function zx() {
  for (var t, i, a = 0, r = "", l = arguments.length; a < l; a++)(t = arguments[a]) && (i = _x(t)) && (r && (r += " "),
    r += i);
  return r
}
const Wy = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t,
  $y = zx,
  Vx = (t, i) => a => {
    var r;
    if (i?.variants == null) return $y(t, a?.class, a?.className);
    const {
      variants: l,
      defaultVariants: u
    } = i, f = Object.keys(l).map(m => {
      const g = a?.[m],
        x = u?.[m];
      if (g === null) return null;
      const b = Wy(g) || Wy(x);
      return l[m][b]
    }), h = a && Object.entries(a).reduce((m, g) => {
      let [x, b] = g;
      return b === void 0 || (m[x] = b), m
    }, {}), p = i == null || (r = i.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((m, g) => {
      let {
        class: x,
        className: b,
        ...T
      } = g;
      return Object.entries(T).every(E => {
        let [C, M] = E;
        return Array.isArray(M) ? M.includes({
          ...u,
          ...h
        } [C]) : {
          ...u,
          ...h
        } [C] === M
      }) ? [...m, x, b] : m
    }, []);
    return $y(t, f, p, a?.class, a?.className)
  };
const iE = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  sE = t => t.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, a, r) => r ? r.toUpperCase() : a.toLowerCase()),
  Iy = t => {
    const i = sE(t);
    return i.charAt(0).toUpperCase() + i.slice(1)
  },
  Lx = (...t) => t.filter((i, a, r) => !!i && i.trim() !== "" && r.indexOf(i) === a).join(" ").trim(),
  aE = t => {
    for (const i in t)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0
  };
var rE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const oE = S.forwardRef(({
  color: t = "currentColor",
  size: i = 24,
  strokeWidth: a = 2,
  absoluteStrokeWidth: r,
  className: l = "",
  children: u,
  iconNode: f,
  ...h
}, p) => S.createElement("svg", {
  ref: p,
  ...rE,
  width: i,
  height: i,
  stroke: t,
  strokeWidth: r ? Number(a) * 24 / Number(i) : a,
  className: Lx("lucide", l),
  ...!u && !aE(h) && {
    "aria-hidden": "true"
  },
  ...h
}, [...f.map(([m, g]) => S.createElement(m, g)), ...Array.isArray(u) ? u : [u]]));
const Qe = (t, i) => {
  const a = S.forwardRef(({
    className: r,
    ...l
  }, u) => S.createElement(oE, {
    ref: u,
    iconNode: i,
    className: Lx(`lucide-${iE(Iy(t))}`, `lucide-${t}`, r),
    ...l
  }));
  return a.displayName = Iy(t), a
};
const lE = [
    ["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }],
    ["path", {
      d: "m12 5 7 7-7 7",
      key: "xquz4c"
    }]
  ],
  _d = Qe("arrow-right", lE);
const cE = [
    ["path", {
      d: "M7 7h10v10",
      key: "1tivn9"
    }],
    ["path", {
      d: "M7 17 17 7",
      key: "1vkiza"
    }]
  ],
  kx = Qe("arrow-up-right", cE);
const uE = [
    ["path", {
      d: "m5 12 7-7 7 7",
      key: "hav0vg"
    }],
    ["path", {
      d: "M12 19V5",
      key: "x0mq9r"
    }]
  ],
  fE = Qe("arrow-up", uE);
const dE = [
    ["path", {
      d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
      key: "jecpp"
    }],
    ["rect", {
      width: "20",
      height: "14",
      x: "2",
      y: "6",
      rx: "2",
      key: "i6l2r4"
    }]
  ],
  Jy = Qe("briefcase", dE);
const hE = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["line", {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12",
      key: "1pkeuh"
    }],
    ["line", {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16",
      key: "4dfq90"
    }]
  ],
  mE = Qe("circle-alert", hE);
const pE = [
    ["path", {
      d: "M21.801 10A10 10 0 1 1 17 3.335",
      key: "yps3ct"
    }],
    ["path", {
      d: "m9 11 3 3L22 4",
      key: "1pflzl"
    }]
  ],
  gE = Qe("circle-check-big", pE);
const yE = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
      key: "13o1zl"
    }],
    ["path", {
      d: "M2 12h20",
      key: "9i4pu4"
    }]
  ],
  Us = Qe("globe", yE);
const vE = [
    ["path", {
      d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",
      key: "17lmqv"
    }]
  ],
  xE = Qe("heart-handshake", vE);
const bE = [
    ["path", {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }],
    ["path", {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }],
    ["path", {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }]
  ],
  wE = Qe("layers", bE);
const SE = [
    ["path", {
      d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
      key: "132q7q"
    }],
    ["rect", {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2",
      key: "izxlao"
    }]
  ],
  Gf = Qe("mail", SE);
const TE = [
    ["path", {
      d: "M4 5h16",
      key: "1tepv9"
    }],
    ["path", {
      d: "M4 12h16",
      key: "1lakjw"
    }],
    ["path", {
      d: "M4 19h16",
      key: "1djgab"
    }]
  ],
  AE = Qe("menu", TE);
const EE = [
    ["path", {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }]
  ],
  ev = Qe("message-square", EE);
const CE = [
    ["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }]
  ],
  RE = Qe("minus", CE);
const ME = [
    ["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }],
    ["path", {
      d: "M12 5v14",
      key: "s699le"
    }]
  ],
  NE = Qe("plus", ME);
const jE = [
    ["path", {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }],
    ["path", {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }]
  ],
  OE = Qe("quote", jE);
const DE = [
    ["path", {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }],
    ["path", {
      d: "m21.854 2.147-10.94 10.939",
      key: "12cjpa"
    }]
  ],
  _E = Qe("send", DE);
const zE = [
    ["rect", {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3"
    }],
    ["path", {
      d: "M12 18h.01",
      key: "mhygvu"
    }]
  ],
  ll = Qe("smartphone", zE);
const VE = [
    ["path", {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }]
  ],
  Px = Qe("star", VE);
const LE = [
    ["path", {
      d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
      key: "975kel"
    }],
    ["circle", {
      cx: "12",
      cy: "7",
      r: "4",
      key: "17ys0d"
    }]
  ],
  kE = Qe("user", LE);
const PE = [
    ["path", {
      d: "M18 6 6 18",
      key: "1bl5f8"
    }],
    ["path", {
      d: "m6 6 12 12",
      key: "d8bk6v"
    }]
  ],
  Ux = Qe("x", PE);
const UE = [
    ["path", {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }]
  ],
  BE = Qe("zap", UE),
  HE = (t, i) => {
    const a = new Array(t.length + i.length);
    for (let r = 0; r < t.length; r++) a[r] = t[r];
    for (let r = 0; r < i.length; r++) a[t.length + r] = i[r];
    return a
  },
  qE = (t, i) => ({
    classGroupId: t,
    validator: i
  }),
  Bx = (t = new Map, i = null, a) => ({
    nextPart: t,
    validators: i,
    classGroupId: a
  }),
  cl = "-",
  tv = [],
  YE = "arbitrary..",
  GE = t => {
    const i = QE(t),
      {
        conflictingClassGroups: a,
        conflictingClassGroupModifiers: r
      } = t;
    return {
      getClassGroupId: f => {
        if (f.startsWith("[") && f.endsWith("]")) return XE(f);
        const h = f.split(cl),
          p = h[0] === "" && h.length > 1 ? 1 : 0;
        return Hx(h, p, i)
      },
      getConflictingClassGroupIds: (f, h) => {
        if (h) {
          const p = r[f],
            m = a[f];
          return p ? m ? HE(m, p) : p : m || tv
        }
        return a[f] || tv
      }
    }
  },
  Hx = (t, i, a) => {
    if (t.length - i === 0) return a.classGroupId;
    const l = t[i],
      u = a.nextPart.get(l);
    if (u) {
      const m = Hx(t, i + 1, u);
      if (m) return m
    }
    const f = a.validators;
    if (f === null) return;
    const h = i === 0 ? t.join(cl) : t.slice(i).join(cl),
      p = f.length;
    for (let m = 0; m < p; m++) {
      const g = f[m];
      if (g.validator(h)) return g.classGroupId
    }
  },
  XE = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const i = t.slice(1, -1),
      a = i.indexOf(":"),
      r = i.slice(0, a);
    return r ? YE + r : void 0
  })(),
  QE = t => {
    const {
      theme: i,
      classGroups: a
    } = t;
    return FE(a, i)
  },
  FE = (t, i) => {
    const a = Bx();
    for (const r in t) {
      const l = t[r];
      zd(l, a, r, i)
    }
    return a
  },
  zd = (t, i, a, r) => {
    const l = t.length;
    for (let u = 0; u < l; u++) {
      const f = t[u];
      KE(f, i, a, r)
    }
  },
  KE = (t, i, a, r) => {
    if (typeof t == "string") {
      ZE(t, i, a);
      return
    }
    if (typeof t == "function") {
      WE(t, i, a, r);
      return
    }
    $E(t, i, a, r)
  },
  ZE = (t, i, a) => {
    const r = t === "" ? i : qx(i, t);
    r.classGroupId = a
  },
  WE = (t, i, a, r) => {
    if (IE(t)) {
      zd(t(r), i, a, r);
      return
    }
    i.validators === null && (i.validators = []), i.validators.push(qE(a, t))
  },
  $E = (t, i, a, r) => {
    const l = Object.entries(t),
      u = l.length;
    for (let f = 0; f < u; f++) {
      const [h, p] = l[f];
      zd(p, qx(i, h), a, r)
    }
  },
  qx = (t, i) => {
    let a = t;
    const r = i.split(cl),
      l = r.length;
    for (let u = 0; u < l; u++) {
      const f = r[u];
      let h = a.nextPart.get(f);
      h || (h = Bx(), a.nextPart.set(f, h)), a = h
    }
    return a
  },
  IE = t => "isThemeGetter" in t && t.isThemeGetter === !0,
  JE = t => {
    if (t < 1) return {
      get: () => {},
      set: () => {}
    };
    let i = 0,
      a = Object.create(null),
      r = Object.create(null);
    const l = (u, f) => {
      a[u] = f, i++, i > t && (i = 0, r = a, a = Object.create(null))
    };
    return {
      get(u) {
        let f = a[u];
        if (f !== void 0) return f;
        if ((f = r[u]) !== void 0) return l(u, f), f
      },
      set(u, f) {
        u in a ? a[u] = f : l(u, f)
      }
    }
  },
  Xf = "!",
  nv = ":",
  eC = [],
  iv = (t, i, a, r, l) => ({
    modifiers: t,
    hasImportantModifier: i,
    baseClassName: a,
    maybePostfixModifierPosition: r,
    isExternal: l
  }),
  tC = t => {
    const {
      prefix: i,
      experimentalParseClassName: a
    } = t;
    let r = l => {
      const u = [];
      let f = 0,
        h = 0,
        p = 0,
        m;
      const g = l.length;
      for (let C = 0; C < g; C++) {
        const M = l[C];
        if (f === 0 && h === 0) {
          if (M === nv) {
            u.push(l.slice(p, C)), p = C + 1;
            continue
          }
          if (M === "/") {
            m = C;
            continue
          }
        }
        M === "[" ? f++ : M === "]" ? f-- : M === "(" ? h++ : M === ")" && h--
      }
      const x = u.length === 0 ? l : l.slice(p);
      let b = x,
        T = !1;
      x.endsWith(Xf) ? (b = x.slice(0, -1), T = !0) : x.startsWith(Xf) && (b = x.slice(1), T = !0);
      const E = m && m > p ? m - p : void 0;
      return iv(u, T, b, E)
    };
    if (i) {
      const l = i + nv,
        u = r;
      r = f => f.startsWith(l) ? u(f.slice(l.length)) : iv(eC, !1, f, void 0, !0)
    }
    if (a) {
      const l = r;
      r = u => a({
        className: u,
        parseClassName: l
      })
    }
    return r
  },
  nC = t => {
    const i = new Map;
    return t.orderSensitiveModifiers.forEach((a, r) => {
      i.set(a, 1e6 + r)
    }), a => {
      const r = [];
      let l = [];
      for (let u = 0; u < a.length; u++) {
        const f = a[u],
          h = f[0] === "[",
          p = i.has(f);
        h || p ? (l.length > 0 && (l.sort(), r.push(...l), l = []), r.push(f)) : l.push(f)
      }
      return l.length > 0 && (l.sort(), r.push(...l)), r
    }
  },
  iC = t => ({
    cache: JE(t.cacheSize),
    parseClassName: tC(t),
    sortModifiers: nC(t),
    ...GE(t)
  }),
  sC = /\s+/,
  aC = (t, i) => {
    const {
      parseClassName: a,
      getClassGroupId: r,
      getConflictingClassGroupIds: l,
      sortModifiers: u
    } = i, f = [], h = t.trim().split(sC);
    let p = "";
    for (let m = h.length - 1; m >= 0; m -= 1) {
      const g = h[m],
        {
          isExternal: x,
          modifiers: b,
          hasImportantModifier: T,
          baseClassName: E,
          maybePostfixModifierPosition: C
        } = a(g);
      if (x) {
        p = g + (p.length > 0 ? " " + p : p);
        continue
      }
      let M = !!C,
        j = r(M ? E.substring(0, C) : E);
      if (!j) {
        if (!M) {
          p = g + (p.length > 0 ? " " + p : p);
          continue
        }
        if (j = r(E), !j) {
          p = g + (p.length > 0 ? " " + p : p);
          continue
        }
        M = !1
      }
      const _ = b.length === 0 ? "" : b.length === 1 ? b[0] : u(b).join(":"),
        D = T ? _ + Xf : _,
        k = D + j;
      if (f.indexOf(k) > -1) continue;
      f.push(k);
      const P = l(j, M);
      for (let F = 0; F < P.length; ++F) {
        const Z = P[F];
        f.push(D + Z)
      }
      p = g + (p.length > 0 ? " " + p : p)
    }
    return p
  },
  rC = (...t) => {
    let i = 0,
      a, r, l = "";
    for (; i < t.length;)(a = t[i++]) && (r = Yx(a)) && (l && (l += " "), l += r);
    return l
  },
  Yx = t => {
    if (typeof t == "string") return t;
    let i, a = "";
    for (let r = 0; r < t.length; r++) t[r] && (i = Yx(t[r])) && (a && (a += " "), a += i);
    return a
  },
  oC = (t, ...i) => {
    let a, r, l, u;
    const f = p => {
        const m = i.reduce((g, x) => x(g), t());
        return a = iC(m), r = a.cache.get, l = a.cache.set, u = h, h(p)
      },
      h = p => {
        const m = r(p);
        if (m) return m;
        const g = aC(p, a);
        return l(p, g), g
      };
    return u = f, (...p) => u(rC(...p))
  },
  lC = [],
  Ie = t => {
    const i = a => a[t] || lC;
    return i.isThemeGetter = !0, i
  },
  Gx = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Xx = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  cC = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  uC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  fC =
  /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  dC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  hC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  mC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  mi = t => cC.test(t),
  ve = t => !!t && !Number.isNaN(Number(t)),
  pi = t => !!t && Number.isInteger(Number(t)),
  hf = t => t.endsWith("%") && ve(t.slice(0, -1)),
  Ln = t => uC.test(t),
  Qx = () => !0,
  pC = t => fC.test(t) && !dC.test(t),
  Vd = () => !1,
  gC = t => hC.test(t),
  yC = t => mC.test(t),
  vC = t => !ne(t) && !se(t),
  xC = t => Ti(t, Zx, Vd),
  ne = t => Gx.test(t),
  Yi = t => Ti(t, Wx, pC),
  sv = t => Ti(t, RC, ve),
  bC = t => Ti(t, Ix, Qx),
  wC = t => Ti(t, $x, Vd),
  av = t => Ti(t, Fx, Vd),
  SC = t => Ti(t, Kx, yC),
  qo = t => Ti(t, Jx, gC),
  se = t => Xx.test(t),
  er = t => $i(t, Wx),
  TC = t => $i(t, $x),
  rv = t => $i(t, Fx),
  AC = t => $i(t, Zx),
  EC = t => $i(t, Kx),
  Yo = t => $i(t, Jx, !0),
  CC = t => $i(t, Ix, !0),
  Ti = (t, i, a) => {
    const r = Gx.exec(t);
    return r ? r[1] ? i(r[1]) : a(r[2]) : !1
  },
  $i = (t, i, a = !1) => {
    const r = Xx.exec(t);
    return r ? r[1] ? i(r[1]) : a : !1
  },
  Fx = t => t === "position" || t === "percentage",
  Kx = t => t === "image" || t === "url",
  Zx = t => t === "length" || t === "size" || t === "bg-size",
  Wx = t => t === "length",
  RC = t => t === "number",
  $x = t => t === "family-name",
  Ix = t => t === "number" || t === "weight",
  Jx = t => t === "shadow",
  MC = () => {
    const t = Ie("color"),
      i = Ie("font"),
      a = Ie("text"),
      r = Ie("font-weight"),
      l = Ie("tracking"),
      u = Ie("leading"),
      f = Ie("breakpoint"),
      h = Ie("container"),
      p = Ie("spacing"),
      m = Ie("radius"),
      g = Ie("shadow"),
      x = Ie("inset-shadow"),
      b = Ie("text-shadow"),
      T = Ie("drop-shadow"),
      E = Ie("blur"),
      C = Ie("perspective"),
      M = Ie("aspect"),
      j = Ie("ease"),
      _ = Ie("animate"),
      D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      k = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top",
        "bottom-right", "right-bottom", "bottom-left", "left-bottom"
      ],
      P = () => [...k(), se, ne],
      F = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Z = () => ["auto", "contain", "none"],
      H = () => [se, ne, p],
      W = () => [mi, "full", "auto", ...H()],
      oe = () => [pi, "none", "subgrid", se, ne],
      pe = () => ["auto", {
        span: ["full", pi, se, ne]
      }, pi, se, ne],
      ce = () => [pi, "auto", se, ne],
      xe = () => ["auto", "min", "max", "fr", se, ne],
      J = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe",
        "end-safe"
      ],
      fe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      z = () => ["auto", ...H()],
      K = () => [mi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()],
      X = () => [mi, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...H()],
      ee = () => [mi, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...H()],
      A = () => [t, se, ne],
      Y = () => [...k(), rv, av, {
        position: [se, ne]
      }],
      I = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      $ = () => ["auto", "cover", "contain", AC, xC, {
        size: [se, ne]
      }],
      re = () => [hf, er, Yi],
      de = () => ["", "none", "full", m, se, ne],
      ae = () => ["", ve, er, Yi],
      Le = () => ["solid", "dashed", "dotted", "double"],
      Re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn",
        "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"
      ],
      Me = () => [ve, hf, rv, av],
      qn = () => ["", "none", E, se, ne],
      Ft = () => ["none", ve, se, ne],
      ln = () => ["none", ve, se, ne],
      Lt = () => [ve, se, ne],
      Yn = () => [mi, "full", ...H()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ln],
        breakpoint: [Ln],
        color: [Qx],
        container: [Ln],
        "drop-shadow": [Ln],
        ease: ["in", "out", "in-out"],
        font: [vC],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [Ln],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [Ln],
        shadow: [Ln],
        spacing: ["px", ve],
        text: [Ln],
        "text-shadow": [Ln],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", mi, ne, se, M]
        }],
        container: ["container"],
        columns: [{
          columns: [ve, ne, se, h]
        }],
        "break-after": [{
          "break-after": D()
        }],
        "break-before": [{
          "break-before": D()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption",
          "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group",
          "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: P()
        }],
        overflow: [{
          overflow: F()
        }],
        "overflow-x": [{
          "overflow-x": F()
        }],
        "overflow-y": [{
          "overflow-y": F()
        }],
        overscroll: [{
          overscroll: Z()
        }],
        "overscroll-x": [{
          "overscroll-x": Z()
        }],
        "overscroll-y": [{
          "overscroll-y": Z()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: W()
        }],
        "inset-x": [{
          "inset-x": W()
        }],
        "inset-y": [{
          "inset-y": W()
        }],
        start: [{
          "inset-s": W(),
          start: W()
        }],
        end: [{
          "inset-e": W(),
          end: W()
        }],
        "inset-bs": [{
          "inset-bs": W()
        }],
        "inset-be": [{
          "inset-be": W()
        }],
        top: [{
          top: W()
        }],
        right: [{
          right: W()
        }],
        bottom: [{
          bottom: W()
        }],
        left: [{
          left: W()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [pi, "auto", se, ne]
        }],
        basis: [{
          basis: [mi, "full", "auto", h, ...H()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [ve, mi, "auto", "initial", "none", ne]
        }],
        grow: [{
          grow: ["", ve, se, ne]
        }],
        shrink: [{
          shrink: ["", ve, se, ne]
        }],
        order: [{
          order: [pi, "first", "last", "none", se, ne]
        }],
        "grid-cols": [{
          "grid-cols": oe()
        }],
        "col-start-end": [{
          col: pe()
        }],
        "col-start": [{
          "col-start": ce()
        }],
        "col-end": [{
          "col-end": ce()
        }],
        "grid-rows": [{
          "grid-rows": oe()
        }],
        "row-start-end": [{
          row: pe()
        }],
        "row-start": [{
          "row-start": ce()
        }],
        "row-end": [{
          "row-end": ce()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": xe()
        }],
        "auto-rows": [{
          "auto-rows": xe()
        }],
        gap: [{
          gap: H()
        }],
        "gap-x": [{
          "gap-x": H()
        }],
        "gap-y": [{
          "gap-y": H()
        }],
        "justify-content": [{
          justify: [...J(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...fe(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...fe()]
        }],
        "align-content": [{
          content: ["normal", ...J()]
        }],
        "align-items": [{
          items: [...fe(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...fe(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": J()
        }],
        "place-items": [{
          "place-items": [...fe(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...fe()]
        }],
        p: [{
          p: H()
        }],
        px: [{
          px: H()
        }],
        py: [{
          py: H()
        }],
        ps: [{
          ps: H()
        }],
        pe: [{
          pe: H()
        }],
        pbs: [{
          pbs: H()
        }],
        pbe: [{
          pbe: H()
        }],
        pt: [{
          pt: H()
        }],
        pr: [{
          pr: H()
        }],
        pb: [{
          pb: H()
        }],
        pl: [{
          pl: H()
        }],
        m: [{
          m: z()
        }],
        mx: [{
          mx: z()
        }],
        my: [{
          my: z()
        }],
        ms: [{
          ms: z()
        }],
        me: [{
          me: z()
        }],
        mbs: [{
          mbs: z()
        }],
        mbe: [{
          mbe: z()
        }],
        mt: [{
          mt: z()
        }],
        mr: [{
          mr: z()
        }],
        mb: [{
          mb: z()
        }],
        ml: [{
          ml: z()
        }],
        "space-x": [{
          "space-x": H()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": H()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: K()
        }],
        "inline-size": [{
          inline: ["auto", ...X()]
        }],
        "min-inline-size": [{
          "min-inline": ["auto", ...X()]
        }],
        "max-inline-size": [{
          "max-inline": ["none", ...X()]
        }],
        "block-size": [{
          block: ["auto", ...ee()]
        }],
        "min-block-size": [{
          "min-block": ["auto", ...ee()]
        }],
        "max-block-size": [{
          "max-block": ["none", ...ee()]
        }],
        w: [{
          w: [h, "screen", ...K()]
        }],
        "min-w": [{
          "min-w": [h, "screen", "none", ...K()]
        }],
        "max-w": [{
          "max-w": [h, "screen", "none", "prose", {
            screen: [f]
          }, ...K()]
        }],
        h: [{
          h: ["screen", "lh", ...K()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...K()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...K()]
        }],
        "font-size": [{
          text: ["base", a, er, Yi]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [r, CC, bC]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal",
            "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", hf, ne
          ]
        }],
        "font-family": [{
          font: [TC, wC, i]
        }],
        "font-features": [{
          "font-features": [ne]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [l, se, ne]
        }],
        "line-clamp": [{
          "line-clamp": [ve, "none", se, sv]
        }],
        leading: [{
          leading: [u, ...H()]
        }],
        "list-image": [{
          "list-image": ["none", se, ne]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "list-style-type": [{
          list: ["disc", "decimal", "none", se, ne]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "placeholder-color": [{
          placeholder: A()
        }],
        "text-color": [{
          text: A()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...Le(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [ve, "from-font", "auto", se, Yi]
        }],
        "text-decoration-color": [{
          decoration: A()
        }],
        "underline-offset": [{
          "underline-offset": [ve, "auto", se, ne]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: H()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se, ne]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", se, ne]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: Y()
        }],
        "bg-repeat": [{
          bg: I()
        }],
        "bg-size": [{
          bg: $()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, pi, se, ne],
            radial: ["", se, ne],
            conic: [pi, se, ne]
          }, EC, SC]
        }],
        "bg-color": [{
          bg: A()
        }],
        "gradient-from-pos": [{
          from: re()
        }],
        "gradient-via-pos": [{
          via: re()
        }],
        "gradient-to-pos": [{
          to: re()
        }],
        "gradient-from": [{
          from: A()
        }],
        "gradient-via": [{
          via: A()
        }],
        "gradient-to": [{
          to: A()
        }],
        rounded: [{
          rounded: de()
        }],
        "rounded-s": [{
          "rounded-s": de()
        }],
        "rounded-e": [{
          "rounded-e": de()
        }],
        "rounded-t": [{
          "rounded-t": de()
        }],
        "rounded-r": [{
          "rounded-r": de()
        }],
        "rounded-b": [{
          "rounded-b": de()
        }],
        "rounded-l": [{
          "rounded-l": de()
        }],
        "rounded-ss": [{
          "rounded-ss": de()
        }],
        "rounded-se": [{
          "rounded-se": de()
        }],
        "rounded-ee": [{
          "rounded-ee": de()
        }],
        "rounded-es": [{
          "rounded-es": de()
        }],
        "rounded-tl": [{
          "rounded-tl": de()
        }],
        "rounded-tr": [{
          "rounded-tr": de()
        }],
        "rounded-br": [{
          "rounded-br": de()
        }],
        "rounded-bl": [{
          "rounded-bl": de()
        }],
        "border-w": [{
          border: ae()
        }],
        "border-w-x": [{
          "border-x": ae()
        }],
        "border-w-y": [{
          "border-y": ae()
        }],
        "border-w-s": [{
          "border-s": ae()
        }],
        "border-w-e": [{
          "border-e": ae()
        }],
        "border-w-bs": [{
          "border-bs": ae()
        }],
        "border-w-be": [{
          "border-be": ae()
        }],
        "border-w-t": [{
          "border-t": ae()
        }],
        "border-w-r": [{
          "border-r": ae()
        }],
        "border-w-b": [{
          "border-b": ae()
        }],
        "border-w-l": [{
          "border-l": ae()
        }],
        "divide-x": [{
          "divide-x": ae()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": ae()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...Le(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...Le(), "hidden", "none"]
        }],
        "border-color": [{
          border: A()
        }],
        "border-color-x": [{
          "border-x": A()
        }],
        "border-color-y": [{
          "border-y": A()
        }],
        "border-color-s": [{
          "border-s": A()
        }],
        "border-color-e": [{
          "border-e": A()
        }],
        "border-color-bs": [{
          "border-bs": A()
        }],
        "border-color-be": [{
          "border-be": A()
        }],
        "border-color-t": [{
          "border-t": A()
        }],
        "border-color-r": [{
          "border-r": A()
        }],
        "border-color-b": [{
          "border-b": A()
        }],
        "border-color-l": [{
          "border-l": A()
        }],
        "divide-color": [{
          divide: A()
        }],
        "outline-style": [{
          outline: [...Le(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [ve, se, ne]
        }],
        "outline-w": [{
          outline: ["", ve, er, Yi]
        }],
        "outline-color": [{
          outline: A()
        }],
        shadow: [{
          shadow: ["", "none", g, Yo, qo]
        }],
        "shadow-color": [{
          shadow: A()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", x, Yo, qo]
        }],
        "inset-shadow-color": [{
          "inset-shadow": A()
        }],
        "ring-w": [{
          ring: ae()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: A()
        }],
        "ring-offset-w": [{
          "ring-offset": [ve, Yi]
        }],
        "ring-offset-color": [{
          "ring-offset": A()
        }],
        "inset-ring-w": [{
          "inset-ring": ae()
        }],
        "inset-ring-color": [{
          "inset-ring": A()
        }],
        "text-shadow": [{
          "text-shadow": ["none", b, Yo, qo]
        }],
        "text-shadow-color": [{
          "text-shadow": A()
        }],
        opacity: [{
          opacity: [ve, se, ne]
        }],
        "mix-blend": [{
          "mix-blend": [...Re(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": Re()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [ve]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": Me()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": Me()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": A()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": A()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": Me()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": Me()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": A()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": A()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": Me()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": Me()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": A()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": A()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": Me()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": Me()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": A()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": A()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": Me()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": Me()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": A()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": A()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": Me()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": Me()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": A()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": A()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": Me()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": Me()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": A()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": A()
        }],
        "mask-image-radial": [{
          "mask-radial": [se, ne]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": Me()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": Me()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": A()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": A()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": k()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [ve]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": Me()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": Me()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": A()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": A()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: Y()
        }],
        "mask-repeat": [{
          mask: I()
        }],
        "mask-size": [{
          mask: $()
        }],
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        "mask-image": [{
          mask: ["none", se, ne]
        }],
        filter: [{
          filter: ["", "none", se, ne]
        }],
        blur: [{
          blur: qn()
        }],
        brightness: [{
          brightness: [ve, se, ne]
        }],
        contrast: [{
          contrast: [ve, se, ne]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", T, Yo, qo]
        }],
        "drop-shadow-color": [{
          "drop-shadow": A()
        }],
        grayscale: [{
          grayscale: ["", ve, se, ne]
        }],
        "hue-rotate": [{
          "hue-rotate": [ve, se, ne]
        }],
        invert: [{
          invert: ["", ve, se, ne]
        }],
        saturate: [{
          saturate: [ve, se, ne]
        }],
        sepia: [{
          sepia: ["", ve, se, ne]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", se, ne]
        }],
        "backdrop-blur": [{
          "backdrop-blur": qn()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [ve, se, ne]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [ve, se, ne]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", ve, se, ne]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [ve, se, ne]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", ve, se, ne]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [ve, se, ne]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [ve, se, ne]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", ve, se, ne]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": H()
        }],
        "border-spacing-x": [{
          "border-spacing-x": H()
        }],
        "border-spacing-y": [{
          "border-spacing-y": H()
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", se, ne]
        }],
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        duration: [{
          duration: [ve, "initial", se, ne]
        }],
        ease: [{
          ease: ["linear", "initial", j, se, ne]
        }],
        delay: [{
          delay: [ve, se, ne]
        }],
        animate: [{
          animate: ["none", _, se, ne]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [C, se, ne]
        }],
        "perspective-origin": [{
          "perspective-origin": P()
        }],
        rotate: [{
          rotate: Ft()
        }],
        "rotate-x": [{
          "rotate-x": Ft()
        }],
        "rotate-y": [{
          "rotate-y": Ft()
        }],
        "rotate-z": [{
          "rotate-z": Ft()
        }],
        scale: [{
          scale: ln()
        }],
        "scale-x": [{
          "scale-x": ln()
        }],
        "scale-y": [{
          "scale-y": ln()
        }],
        "scale-z": [{
          "scale-z": ln()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: Lt()
        }],
        "skew-x": [{
          "skew-x": Lt()
        }],
        "skew-y": [{
          "skew-y": Lt()
        }],
        transform: [{
          transform: [se, ne, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: P()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: Yn()
        }],
        "translate-x": [{
          "translate-x": Yn()
        }],
        "translate-y": [{
          "translate-y": Yn()
        }],
        "translate-z": [{
          "translate-z": Yn()
        }],
        "translate-none": ["translate-none"],
        accent: [{
          accent: A()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: A()
        }],
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none",
            "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab",
            "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize",
            "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize",
            "nwse-resize", "zoom-in", "zoom-out", se, ne
          ]
        }],
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": H()
        }],
        "scroll-mx": [{
          "scroll-mx": H()
        }],
        "scroll-my": [{
          "scroll-my": H()
        }],
        "scroll-ms": [{
          "scroll-ms": H()
        }],
        "scroll-me": [{
          "scroll-me": H()
        }],
        "scroll-mbs": [{
          "scroll-mbs": H()
        }],
        "scroll-mbe": [{
          "scroll-mbe": H()
        }],
        "scroll-mt": [{
          "scroll-mt": H()
        }],
        "scroll-mr": [{
          "scroll-mr": H()
        }],
        "scroll-mb": [{
          "scroll-mb": H()
        }],
        "scroll-ml": [{
          "scroll-ml": H()
        }],
        "scroll-p": [{
          "scroll-p": H()
        }],
        "scroll-px": [{
          "scroll-px": H()
        }],
        "scroll-py": [{
          "scroll-py": H()
        }],
        "scroll-ps": [{
          "scroll-ps": H()
        }],
        "scroll-pe": [{
          "scroll-pe": H()
        }],
        "scroll-pbs": [{
          "scroll-pbs": H()
        }],
        "scroll-pbe": [{
          "scroll-pbe": H()
        }],
        "scroll-pt": [{
          "scroll-pt": H()
        }],
        "scroll-pr": [{
          "scroll-pr": H()
        }],
        "scroll-pb": [{
          "scroll-pb": H()
        }],
        "scroll-pl": [{
          "scroll-pl": H()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", se, ne]
        }],
        fill: [{
          fill: ["none", ...A()]
        }],
        "stroke-w": [{
          stroke: [ve, er, Yi, sv]
        }],
        stroke: [{
          stroke: ["none", ...A()]
        }],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss",
          "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t",
          "border-w-r", "border-w-b", "border-w-l"
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs",
          "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt",
          "scroll-mr", "scroll-mb", "scroll-ml"
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt",
          "scroll-pr", "scroll-pb", "scroll-pl"
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter",
        "first-line", "marker", "placeholder", "selection"
      ]
    }
  },
  NC = oC(MC);

function At(...t) {
  return NC(zx(t))
}
const jC = nE,
  eb = S.forwardRef(({
    className: t,
    ...i
  }, a) => y.jsx(Rx, {
    ref: a,
    className: At(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      t),
    ...i
  }));
eb.displayName = Rx.displayName;
const OC = Vx(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }),
  tb = S.forwardRef(({
    className: t,
    variant: i,
    ...a
  }, r) => y.jsx(Mx, {
    ref: r,
    className: At(OC({
      variant: i
    }), t),
    ...a
  }));
tb.displayName = Mx.displayName;
const DC = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx(Ox, {
  ref: a,
  className: At(
    "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
    t),
  ...i
}));
DC.displayName = Ox.displayName;
const nb = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx(Dx, {
  ref: a,
  className: At(
    "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
    t),
  "toast-close": "",
  ...i,
  children: y.jsx(Ux, {
    className: "h-4 w-4"
  })
}));
nb.displayName = Dx.displayName;
const ib = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx(Nx, {
  ref: a,
  className: At("text-sm font-semibold", t),
  ...i
}));
ib.displayName = Nx.displayName;
const sb = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx(jx, {
  ref: a,
  className: At("text-sm opacity-90", t),
  ...i
}));
sb.displayName = jx.displayName;

function _C() {
  const {
    toasts: t
  } = c2();
  return y.jsxs(jC, {
    children: [t.map(function({
      id: i,
      title: a,
      description: r,
      action: l,
      ...u
    }) {
      return y.jsxs(tb, {
        ...u,
        children: [y.jsxs("div", {
          className: "grid gap-1",
          children: [a && y.jsx(ib, {
            children: a
          }), r && y.jsx(sb, {
            children: r
          })]
        }), l, y.jsx(nb, {})]
      }, i)
    }), y.jsx(eb, {})]
  })
}
const zC = ["top", "right", "bottom", "left"],
  wi = Math.min,
  zt = Math.max,
  ul = Math.round,
  Go = Math.floor,
  vn = t => ({
    x: t,
    y: t
  }),
  VC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

function Qf(t, i, a) {
  return zt(t, wi(i, a))
}

function kn(t, i) {
  return typeof t == "function" ? t(i) : t
}

function Pn(t) {
  return t.split("-")[0]
}

function Ws(t) {
  return t.split("-")[1]
}

function Ld(t) {
  return t === "x" ? "y" : "x"
}

function kd(t) {
  return t === "y" ? "height" : "width"
}

function gn(t) {
  const i = t[0];
  return i === "t" || i === "b" ? "y" : "x"
}

function Pd(t) {
  return Ld(gn(t))
}

function LC(t, i, a) {
  a === void 0 && (a = !1);
  const r = Ws(t),
    l = Pd(t),
    u = kd(l);
  let f = l === "x" ? r === (a ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return i.reference[u] > i.floating[u] && (f = fl(f)), [f, fl(f)]
}

function kC(t) {
  const i = fl(t);
  return [Ff(t), i, Ff(i)]
}

function Ff(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start")
}
const ov = ["left", "right"],
  lv = ["right", "left"],
  PC = ["top", "bottom"],
  UC = ["bottom", "top"];

function BC(t, i, a) {
  switch (t) {
    case "top":
    case "bottom":
      return a ? i ? lv : ov : i ? ov : lv;
    case "left":
    case "right":
      return i ? PC : UC;
    default:
      return []
  }
}

function HC(t, i, a, r) {
  const l = Ws(t);
  let u = BC(Pn(t), a === "start", r);
  return l && (u = u.map(f => f + "-" + l), i && (u = u.concat(u.map(Ff)))), u
}

function fl(t) {
  const i = Pn(t);
  return VC[i] + t.slice(i.length)
}

function qC(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  }
}

function ab(t) {
  return typeof t != "number" ? qC(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  }
}

function dl(t) {
  const {
    x: i,
    y: a,
    width: r,
    height: l
  } = t;
  return {
    width: r,
    height: l,
    top: a,
    left: i,
    right: i + r,
    bottom: a + l,
    x: i,
    y: a
  }
}

function cv(t, i, a) {
  let {
    reference: r,
    floating: l
  } = t;
  const u = gn(i),
    f = Pd(i),
    h = kd(f),
    p = Pn(i),
    m = u === "y",
    g = r.x + r.width / 2 - l.width / 2,
    x = r.y + r.height / 2 - l.height / 2,
    b = r[h] / 2 - l[h] / 2;
  let T;
  switch (p) {
    case "top":
      T = {
        x: g,
        y: r.y - l.height
      };
      break;
    case "bottom":
      T = {
        x: g,
        y: r.y + r.height
      };
      break;
    case "right":
      T = {
        x: r.x + r.width,
        y: x
      };
      break;
    case "left":
      T = {
        x: r.x - l.width,
        y: x
      };
      break;
    default:
      T = {
        x: r.x,
        y: r.y
      }
  }
  switch (Ws(i)) {
    case "start":
      T[f] -= b * (a && m ? -1 : 1);
      break;
    case "end":
      T[f] += b * (a && m ? -1 : 1);
      break
  }
  return T
}
async function YC(t, i) {
  var a;
  i === void 0 && (i = {});
  const {
    x: r,
    y: l,
    platform: u,
    rects: f,
    elements: h,
    strategy: p
  } = t, {
    boundary: m = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: x = "floating",
    altBoundary: b = !1,
    padding: T = 0
  } = kn(i, t), E = ab(T), M = h[b ? x === "floating" ? "reference" : "floating" : x], j = dl(await u
    .getClippingRect({
      element: (a = await (u.isElement == null ? void 0 : u.isElement(M))) == null || a ? M : M.contextElement ||
        await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(h.floating)),
      boundary: m,
      rootBoundary: g,
      strategy: p
    })), _ = x === "floating" ? {
    x: r,
    y: l,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, D = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h.floating)), k = await (u
    .isElement == null ? void 0 : u.isElement(D)) ? await (u.getScale == null ? void 0 : u.getScale(D)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = dl(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u
    .convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: h,
      rect: _,
      offsetParent: D,
      strategy: p
    }) : _);
  return {
    top: (j.top - P.top + E.top) / k.y,
    bottom: (P.bottom - j.bottom + E.bottom) / k.y,
    left: (j.left - P.left + E.left) / k.x,
    right: (P.right - j.right + E.right) / k.x
  }
}
const GC = 50,
  XC = async (t, i, a) => {
    const {
      placement: r = "bottom",
      strategy: l = "absolute",
      middleware: u = [],
      platform: f
    } = a, h = f.detectOverflow ? f : {
      ...f,
      detectOverflow: YC
    }, p = await (f.isRTL == null ? void 0 : f.isRTL(i));
    let m = await f.getElementRects({
        reference: t,
        floating: i,
        strategy: l
      }),
      {
        x: g,
        y: x
      } = cv(m, r, p),
      b = r,
      T = 0;
    const E = {};
    for (let C = 0; C < u.length; C++) {
      const M = u[C];
      if (!M) continue;
      const {
        name: j,
        fn: _
      } = M, {
        x: D,
        y: k,
        data: P,
        reset: F
      } = await _({
        x: g,
        y: x,
        initialPlacement: r,
        placement: b,
        strategy: l,
        middlewareData: E,
        rects: m,
        platform: h,
        elements: {
          reference: t,
          floating: i
        }
      });
      g = D ?? g, x = k ?? x, E[j] = {
        ...E[j],
        ...P
      }, F && T < GC && (T++, typeof F == "object" && (F.placement && (b = F.placement), F.rects && (m = F.rects ===
        !0 ? await f.getElementRects({
          reference: t,
          floating: i,
          strategy: l
        }) : F.rects), {
        x: g,
        y: x
      } = cv(m, b, p)), C = -1)
    }
    return {
      x: g,
      y: x,
      placement: b,
      strategy: l,
      middlewareData: E
    }
  }, QC = t => ({
    name: "arrow",
    options: t,
    async fn(i) {
      const {
        x: a,
        y: r,
        placement: l,
        rects: u,
        platform: f,
        elements: h,
        middlewareData: p
      } = i, {
        element: m,
        padding: g = 0
      } = kn(t, i) || {};
      if (m == null) return {};
      const x = ab(g),
        b = {
          x: a,
          y: r
        },
        T = Pd(l),
        E = kd(T),
        C = await f.getDimensions(m),
        M = T === "y",
        j = M ? "top" : "left",
        _ = M ? "bottom" : "right",
        D = M ? "clientHeight" : "clientWidth",
        k = u.reference[E] + u.reference[T] - b[T] - u.floating[E],
        P = b[T] - u.reference[T],
        F = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m));
      let Z = F ? F[D] : 0;
      (!Z || !await (f.isElement == null ? void 0 : f.isElement(F))) && (Z = h.floating[D] || u.floating[E]);
      const H = k / 2 - P / 2,
        W = Z / 2 - C[E] / 2 - 1,
        oe = wi(x[j], W),
        pe = wi(x[_], W),
        ce = oe,
        xe = Z - C[E] - pe,
        J = Z / 2 - C[E] / 2 + H,
        fe = Qf(ce, J, xe),
        z = !p.arrow && Ws(l) != null && J !== fe && u.reference[E] / 2 - (J < ce ? oe : pe) - C[E] / 2 < 0,
        K = z ? J < ce ? J - ce : J - xe : 0;
      return {
        [T]: b[T] + K,
        data: {
          [T]: fe,
          centerOffset: J - fe - K,
          ...z && {
            alignmentOffset: K
          }
        },
        reset: z
      }
    }
  }), FC = function(t) {
    return t === void 0 && (t = {}), {
      name: "flip",
      options: t,
      async fn(i) {
        var a, r;
        const {
          placement: l,
          middlewareData: u,
          rects: f,
          initialPlacement: h,
          platform: p,
          elements: m
        } = i, {
          mainAxis: g = !0,
          crossAxis: x = !0,
          fallbackPlacements: b,
          fallbackStrategy: T = "bestFit",
          fallbackAxisSideDirection: E = "none",
          flipAlignment: C = !0,
          ...M
        } = kn(t, i);
        if ((a = u.arrow) != null && a.alignmentOffset) return {};
        const j = Pn(l),
          _ = gn(h),
          D = Pn(h) === h,
          k = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
          P = b || (D || !C ? [fl(h)] : kC(h)),
          F = E !== "none";
        !b && F && P.push(...HC(h, C, E, k));
        const Z = [h, ...P],
          H = await p.detectOverflow(i, M),
          W = [];
        let oe = ((r = u.flip) == null ? void 0 : r.overflows) || [];
        if (g && W.push(H[j]), x) {
          const J = LC(l, f, k);
          W.push(H[J[0]], H[J[1]])
        }
        if (oe = [...oe, {
            placement: l,
            overflows: W
          }], !W.every(J => J <= 0)) {
          var pe, ce;
          const J = (((pe = u.flip) == null ? void 0 : pe.index) || 0) + 1,
            fe = Z[J];
          if (fe && (!(x === "alignment" ? _ !== gn(fe) : !1) || oe.every(X => gn(X.placement) === _ ? X
              .overflows[0] > 0 : !0))) return {
            data: {
              index: J,
              overflows: oe
            },
            reset: {
              placement: fe
            }
          };
          let z = (ce = oe.filter(K => K.overflows[0] <= 0).sort((K, X) => K.overflows[1] - X.overflows[1])[0]) ==
            null ? void 0 : ce.placement;
          if (!z) switch (T) {
            case "bestFit": {
              var xe;
              const K = (xe = oe.filter(X => {
                  if (F) {
                    const ee = gn(X.placement);
                    return ee === _ || ee === "y"
                  }
                  return !0
                }).map(X => [X.placement, X.overflows.filter(ee => ee > 0).reduce((ee, A) => ee + A, 0)])
                .sort((X, ee) => X[1] - ee[1])[0]) == null ? void 0 : xe[0];
              K && (z = K);
              break
            }
            case "initialPlacement":
              z = h;
              break
          }
          if (l !== z) return {
            reset: {
              placement: z
            }
          }
        }
        return {}
      }
    }
  };

function uv(t, i) {
  return {
    top: t.top - i.height,
    right: t.right - i.width,
    bottom: t.bottom - i.height,
    left: t.left - i.width
  }
}

function fv(t) {
  return zC.some(i => t[i] >= 0)
}
const KC = function(t) {
    return t === void 0 && (t = {}), {
      name: "hide",
      options: t,
      async fn(i) {
        const {
          rects: a,
          platform: r
        } = i, {
          strategy: l = "referenceHidden",
          ...u
        } = kn(t, i);
        switch (l) {
          case "referenceHidden": {
            const f = await r.detectOverflow(i, {
                ...u,
                elementContext: "reference"
              }),
              h = uv(f, a.reference);
            return {
              data: {
                referenceHiddenOffsets: h,
                referenceHidden: fv(h)
              }
            }
          }
          case "escaped": {
            const f = await r.detectOverflow(i, {
                ...u,
                altBoundary: !0
              }),
              h = uv(f, a.floating);
            return {
              data: {
                escapedOffsets: h,
                escaped: fv(h)
              }
            }
          }
          default:
            return {}
        }
      }
    }
  },
  rb = new Set(["left", "top"]);
async function ZC(t, i) {
  const {
    placement: a,
    platform: r,
    elements: l
  } = t, u = await (r.isRTL == null ? void 0 : r.isRTL(l.floating)), f = Pn(a), h = Ws(a), p = gn(a) === "y", m = rb
    .has(f) ? -1 : 1, g = u && p ? -1 : 1, x = kn(i, t);
  let {
    mainAxis: b,
    crossAxis: T,
    alignmentAxis: E
  } = typeof x == "number" ? {
    mainAxis: x,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: x.mainAxis || 0,
    crossAxis: x.crossAxis || 0,
    alignmentAxis: x.alignmentAxis
  };
  return h && typeof E == "number" && (T = h === "end" ? E * -1 : E), p ? {
    x: T * g,
    y: b * m
  } : {
    x: b * m,
    y: T * g
  }
}
const WC = function(t) {
    return t === void 0 && (t = 0), {
      name: "offset",
      options: t,
      async fn(i) {
        var a, r;
        const {
          x: l,
          y: u,
          placement: f,
          middlewareData: h
        } = i, p = await ZC(i, t);
        return f === ((a = h.offset) == null ? void 0 : a.placement) && (r = h.arrow) != null && r.alignmentOffset ?
        {} : {
          x: l + p.x,
          y: u + p.y,
          data: {
            ...p,
            placement: f
          }
        }
      }
    }
  },
  $C = function(t) {
    return t === void 0 && (t = {}), {
      name: "shift",
      options: t,
      async fn(i) {
        const {
          x: a,
          y: r,
          placement: l,
          platform: u
        } = i, {
          mainAxis: f = !0,
          crossAxis: h = !1,
          limiter: p = {
            fn: j => {
              let {
                x: _,
                y: D
              } = j;
              return {
                x: _,
                y: D
              }
            }
          },
          ...m
        } = kn(t, i), g = {
          x: a,
          y: r
        }, x = await u.detectOverflow(i, m), b = gn(Pn(l)), T = Ld(b);
        let E = g[T],
          C = g[b];
        if (f) {
          const j = T === "y" ? "top" : "left",
            _ = T === "y" ? "bottom" : "right",
            D = E + x[j],
            k = E - x[_];
          E = Qf(D, E, k)
        }
        if (h) {
          const j = b === "y" ? "top" : "left",
            _ = b === "y" ? "bottom" : "right",
            D = C + x[j],
            k = C - x[_];
          C = Qf(D, C, k)
        }
        const M = p.fn({
          ...i,
          [T]: E,
          [b]: C
        });
        return {
          ...M,
          data: {
            x: M.x - a,
            y: M.y - r,
            enabled: {
              [T]: f,
              [b]: h
            }
          }
        }
      }
    }
  },
  IC = function(t) {
    return t === void 0 && (t = {}), {
      options: t,
      fn(i) {
        const {
          x: a,
          y: r,
          placement: l,
          rects: u,
          middlewareData: f
        } = i, {
          offset: h = 0,
          mainAxis: p = !0,
          crossAxis: m = !0
        } = kn(t, i), g = {
          x: a,
          y: r
        }, x = gn(l), b = Ld(x);
        let T = g[b],
          E = g[x];
        const C = kn(h, i),
          M = typeof C == "number" ? {
            mainAxis: C,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...C
          };
        if (p) {
          const D = b === "y" ? "height" : "width",
            k = u.reference[b] - u.floating[D] + M.mainAxis,
            P = u.reference[b] + u.reference[D] - M.mainAxis;
          T < k ? T = k : T > P && (T = P)
        }
        if (m) {
          var j, _;
          const D = b === "y" ? "width" : "height",
            k = rb.has(Pn(l)),
            P = u.reference[x] - u.floating[D] + (k && ((j = f.offset) == null ? void 0 : j[x]) || 0) + (k ? 0 : M
              .crossAxis),
            F = u.reference[x] + u.reference[D] + (k ? 0 : ((_ = f.offset) == null ? void 0 : _[x]) || 0) - (k ? M
              .crossAxis : 0);
          E < P ? E = P : E > F && (E = F)
        }
        return {
          [b]: T,
          [x]: E
        }
      }
    }
  },
  JC = function(t) {
    return t === void 0 && (t = {}), {
      name: "size",
      options: t,
      async fn(i) {
        var a, r;
        const {
          placement: l,
          rects: u,
          platform: f,
          elements: h
        } = i, {
          apply: p = () => {},
          ...m
        } = kn(t, i), g = await f.detectOverflow(i, m), x = Pn(l), b = Ws(l), T = gn(l) === "y", {
          width: E,
          height: C
        } = u.floating;
        let M, j;
        x === "top" || x === "bottom" ? (M = x, j = b === (await (f.isRTL == null ? void 0 : f.isRTL(h.floating)) ?
          "start" : "end") ? "left" : "right") : (j = x, M = b === "end" ? "top" : "bottom");
        const _ = C - g.top - g.bottom,
          D = E - g.left - g.right,
          k = wi(C - g[M], _),
          P = wi(E - g[j], D),
          F = !i.middlewareData.shift;
        let Z = k,
          H = P;
        if ((a = i.middlewareData.shift) != null && a.enabled.x && (H = D), (r = i.middlewareData.shift) != null &&
          r.enabled.y && (Z = _), F && !b) {
          const oe = zt(g.left, 0),
            pe = zt(g.right, 0),
            ce = zt(g.top, 0),
            xe = zt(g.bottom, 0);
          T ? H = E - 2 * (oe !== 0 || pe !== 0 ? oe + pe : zt(g.left, g.right)) : Z = C - 2 * (ce !== 0 || xe !==
            0 ? ce + xe : zt(g.top, g.bottom))
        }
        await p({
          ...i,
          availableWidth: H,
          availableHeight: Z
        });
        const W = await f.getDimensions(h.floating);
        return E !== W.width || C !== W.height ? {
          reset: {
            rects: !0
          }
        } : {}
      }
    }
  };

function zl() {
  return typeof window < "u"
}

function $s(t) {
  return ob(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function Vt(t) {
  var i;
  return (t == null || (i = t.ownerDocument) == null ? void 0 : i.defaultView) || window
}

function bn(t) {
  var i;
  return (i = (ob(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : i.documentElement
}

function ob(t) {
  return zl() ? t instanceof Node || t instanceof Vt(t).Node : !1
}

function sn(t) {
  return zl() ? t instanceof Element || t instanceof Vt(t).Element : !1
}

function Hn(t) {
  return zl() ? t instanceof HTMLElement || t instanceof Vt(t).HTMLElement : !1
}

function dv(t) {
  return !zl() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Vt(t).ShadowRoot
}

function vr(t) {
  const {
    overflow: i,
    overflowX: a,
    overflowY: r,
    display: l
  } = an(t);
  return /auto|scroll|overlay|hidden|clip/.test(i + r + a) && l !== "inline" && l !== "contents"
}

function eR(t) {
  return /^(table|td|th)$/.test($s(t))
}

function Vl(t) {
  try {
    if (t.matches(":popover-open")) return !0
  } catch {}
  try {
    return t.matches(":modal")
  } catch {
    return !1
  }
}
const tR = /transform|translate|scale|rotate|perspective|filter/,
  nR = /paint|layout|strict|content/,
  Gi = t => !!t && t !== "none";
let mf;

function Ud(t) {
  const i = sn(t) ? an(t) : t;
  return Gi(i.transform) || Gi(i.translate) || Gi(i.scale) || Gi(i.rotate) || Gi(i.perspective) || !Bd() && (Gi(i
    .backdropFilter) || Gi(i.filter)) || tR.test(i.willChange || "") || nR.test(i.contain || "")
}

function iR(t) {
  let i = Si(t);
  for (; Hn(i) && !Fs(i);) {
    if (Ud(i)) return i;
    if (Vl(i)) return null;
    i = Si(i)
  }
  return null
}

function Bd() {
  return mf == null && (mf = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), mf
}

function Fs(t) {
  return /^(html|body|#document)$/.test($s(t))
}

function an(t) {
  return Vt(t).getComputedStyle(t)
}

function Ll(t) {
  return sn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  }
}

function Si(t) {
  if ($s(t) === "html") return t;
  const i = t.assignedSlot || t.parentNode || dv(t) && t.host || bn(t);
  return dv(i) ? i.host : i
}

function lb(t) {
  const i = Si(t);
  return Fs(i) ? t.ownerDocument ? t.ownerDocument.body : t.body : Hn(i) && vr(i) ? i : lb(i)
}

function fr(t, i, a) {
  var r;
  i === void 0 && (i = []), a === void 0 && (a = !0);
  const l = lb(t),
    u = l === ((r = t.ownerDocument) == null ? void 0 : r.body),
    f = Vt(l);
  if (u) {
    const h = Kf(f);
    return i.concat(f, f.visualViewport || [], vr(l) ? l : [], h && a ? fr(h) : [])
  } else return i.concat(l, fr(l, [], a))
}

function Kf(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}

function cb(t) {
  const i = an(t);
  let a = parseFloat(i.width) || 0,
    r = parseFloat(i.height) || 0;
  const l = Hn(t),
    u = l ? t.offsetWidth : a,
    f = l ? t.offsetHeight : r,
    h = ul(a) !== u || ul(r) !== f;
  return h && (a = u, r = f), {
    width: a,
    height: r,
    $: h
  }
}

function Hd(t) {
  return sn(t) ? t : t.contextElement
}

function Xs(t) {
  const i = Hd(t);
  if (!Hn(i)) return vn(1);
  const a = i.getBoundingClientRect(),
    {
      width: r,
      height: l,
      $: u
    } = cb(i);
  let f = (u ? ul(a.width) : a.width) / r,
    h = (u ? ul(a.height) : a.height) / l;
  return (!f || !Number.isFinite(f)) && (f = 1), (!h || !Number.isFinite(h)) && (h = 1), {
    x: f,
    y: h
  }
}
const sR = vn(0);

function ub(t) {
  const i = Vt(t);
  return !Bd() || !i.visualViewport ? sR : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  }
}

function aR(t, i, a) {
  return i === void 0 && (i = !1), !a || i && a !== Vt(t) ? !1 : i
}

function Wi(t, i, a, r) {
  i === void 0 && (i = !1), a === void 0 && (a = !1);
  const l = t.getBoundingClientRect(),
    u = Hd(t);
  let f = vn(1);
  i && (r ? sn(r) && (f = Xs(r)) : f = Xs(t));
  const h = aR(u, a, r) ? ub(u) : vn(0);
  let p = (l.left + h.x) / f.x,
    m = (l.top + h.y) / f.y,
    g = l.width / f.x,
    x = l.height / f.y;
  if (u) {
    const b = Vt(u),
      T = r && sn(r) ? Vt(r) : r;
    let E = b,
      C = Kf(E);
    for (; C && r && T !== E;) {
      const M = Xs(C),
        j = C.getBoundingClientRect(),
        _ = an(C),
        D = j.left + (C.clientLeft + parseFloat(_.paddingLeft)) * M.x,
        k = j.top + (C.clientTop + parseFloat(_.paddingTop)) * M.y;
      p *= M.x, m *= M.y, g *= M.x, x *= M.y, p += D, m += k, E = Vt(C), C = Kf(E)
    }
  }
  return dl({
    width: g,
    height: x,
    x: p,
    y: m
  })
}

function kl(t, i) {
  const a = Ll(t).scrollLeft;
  return i ? i.left + a : Wi(bn(t)).left + a
}

function fb(t, i) {
  const a = t.getBoundingClientRect(),
    r = a.left + i.scrollLeft - kl(t, a),
    l = a.top + i.scrollTop;
  return {
    x: r,
    y: l
  }
}

function rR(t) {
  let {
    elements: i,
    rect: a,
    offsetParent: r,
    strategy: l
  } = t;
  const u = l === "fixed",
    f = bn(r),
    h = i ? Vl(i.floating) : !1;
  if (r === f || h && u) return a;
  let p = {
      scrollLeft: 0,
      scrollTop: 0
    },
    m = vn(1);
  const g = vn(0),
    x = Hn(r);
  if ((x || !x && !u) && (($s(r) !== "body" || vr(f)) && (p = Ll(r)), x)) {
    const T = Wi(r);
    m = Xs(r), g.x = T.x + r.clientLeft, g.y = T.y + r.clientTop
  }
  const b = f && !x && !u ? fb(f, p) : vn(0);
  return {
    width: a.width * m.x,
    height: a.height * m.y,
    x: a.x * m.x - p.scrollLeft * m.x + g.x + b.x,
    y: a.y * m.y - p.scrollTop * m.y + g.y + b.y
  }
}

function oR(t) {
  return Array.from(t.getClientRects())
}

function lR(t) {
  const i = bn(t),
    a = Ll(t),
    r = t.ownerDocument.body,
    l = zt(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth),
    u = zt(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
  let f = -a.scrollLeft + kl(t);
  const h = -a.scrollTop;
  return an(r).direction === "rtl" && (f += zt(i.clientWidth, r.clientWidth) - l), {
    width: l,
    height: u,
    x: f,
    y: h
  }
}
const hv = 25;

function cR(t, i) {
  const a = Vt(t),
    r = bn(t),
    l = a.visualViewport;
  let u = r.clientWidth,
    f = r.clientHeight,
    h = 0,
    p = 0;
  if (l) {
    u = l.width, f = l.height;
    const g = Bd();
    (!g || g && i === "fixed") && (h = l.offsetLeft, p = l.offsetTop)
  }
  const m = kl(r);
  if (m <= 0) {
    const g = r.ownerDocument,
      x = g.body,
      b = getComputedStyle(x),
      T = g.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0,
      E = Math.abs(r.clientWidth - x.clientWidth - T);
    E <= hv && (u -= E)
  } else m <= hv && (u += m);
  return {
    width: u,
    height: f,
    x: h,
    y: p
  }
}

function uR(t, i) {
  const a = Wi(t, !0, i === "fixed"),
    r = a.top + t.clientTop,
    l = a.left + t.clientLeft,
    u = Hn(t) ? Xs(t) : vn(1),
    f = t.clientWidth * u.x,
    h = t.clientHeight * u.y,
    p = l * u.x,
    m = r * u.y;
  return {
    width: f,
    height: h,
    x: p,
    y: m
  }
}

function mv(t, i, a) {
  let r;
  if (i === "viewport") r = cR(t, a);
  else if (i === "document") r = lR(bn(t));
  else if (sn(i)) r = uR(i, a);
  else {
    const l = ub(t);
    r = {
      x: i.x - l.x,
      y: i.y - l.y,
      width: i.width,
      height: i.height
    }
  }
  return dl(r)
}

function db(t, i) {
  const a = Si(t);
  return a === i || !sn(a) || Fs(a) ? !1 : an(a).position === "fixed" || db(a, i)
}

function fR(t, i) {
  const a = i.get(t);
  if (a) return a;
  let r = fr(t, [], !1).filter(h => sn(h) && $s(h) !== "body"),
    l = null;
  const u = an(t).position === "fixed";
  let f = u ? Si(t) : t;
  for (; sn(f) && !Fs(f);) {
    const h = an(f),
      p = Ud(f);
    !p && h.position === "fixed" && (l = null), (u ? !p && !l : !p && h.position === "static" && !!l && (l.position ===
      "absolute" || l.position === "fixed") || vr(f) && !p && db(t, f)) ? r = r.filter(g => g !== f) : l = h, f = Si(
      f)
  }
  return i.set(t, r), r
}

function dR(t) {
  let {
    element: i,
    boundary: a,
    rootBoundary: r,
    strategy: l
  } = t;
  const f = [...a === "clippingAncestors" ? Vl(i) ? [] : fR(i, this._c) : [].concat(a), r],
    h = mv(i, f[0], l);
  let p = h.top,
    m = h.right,
    g = h.bottom,
    x = h.left;
  for (let b = 1; b < f.length; b++) {
    const T = mv(i, f[b], l);
    p = zt(T.top, p), m = wi(T.right, m), g = wi(T.bottom, g), x = zt(T.left, x)
  }
  return {
    width: m - x,
    height: g - p,
    x,
    y: p
  }
}

function hR(t) {
  const {
    width: i,
    height: a
  } = cb(t);
  return {
    width: i,
    height: a
  }
}

function mR(t, i, a) {
  const r = Hn(i),
    l = bn(i),
    u = a === "fixed",
    f = Wi(t, !0, u, i);
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const p = vn(0);

  function m() {
    p.x = kl(l)
  }
  if (r || !r && !u)
    if (($s(i) !== "body" || vr(l)) && (h = Ll(i)), r) {
      const T = Wi(i, !0, u, i);
      p.x = T.x + i.clientLeft, p.y = T.y + i.clientTop
    } else l && m();
  u && !r && l && m();
  const g = l && !r && !u ? fb(l, h) : vn(0),
    x = f.left + h.scrollLeft - p.x - g.x,
    b = f.top + h.scrollTop - p.y - g.y;
  return {
    x,
    y: b,
    width: f.width,
    height: f.height
  }
}

function pf(t) {
  return an(t).position === "static"
}

function pv(t, i) {
  if (!Hn(t) || an(t).position === "fixed") return null;
  if (i) return i(t);
  let a = t.offsetParent;
  return bn(t) === a && (a = a.ownerDocument.body), a
}

function hb(t, i) {
  const a = Vt(t);
  if (Vl(t)) return a;
  if (!Hn(t)) {
    let l = Si(t);
    for (; l && !Fs(l);) {
      if (sn(l) && !pf(l)) return l;
      l = Si(l)
    }
    return a
  }
  let r = pv(t, i);
  for (; r && eR(r) && pf(r);) r = pv(r, i);
  return r && Fs(r) && pf(r) && !Ud(r) ? a : r || iR(t) || a
}
const pR = async function(t) {
  const i = this.getOffsetParent || hb,
    a = this.getDimensions,
    r = await a(t.floating);
  return {
    reference: mR(t.reference, await i(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  }
};

function gR(t) {
  return an(t).direction === "rtl"
}
const yR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rR,
  getDocumentElement: bn,
  getClippingRect: dR,
  getOffsetParent: hb,
  getElementRects: pR,
  getClientRects: oR,
  getDimensions: hR,
  getScale: Xs,
  isElement: sn,
  isRTL: gR
};

function mb(t, i) {
  return t.x === i.x && t.y === i.y && t.width === i.width && t.height === i.height
}

function vR(t, i) {
  let a = null,
    r;
  const l = bn(t);

  function u() {
    var h;
    clearTimeout(r), (h = a) == null || h.disconnect(), a = null
  }

  function f(h, p) {
    h === void 0 && (h = !1), p === void 0 && (p = 1), u();
    const m = t.getBoundingClientRect(),
      {
        left: g,
        top: x,
        width: b,
        height: T
      } = m;
    if (h || i(), !b || !T) return;
    const E = Go(x),
      C = Go(l.clientWidth - (g + b)),
      M = Go(l.clientHeight - (x + T)),
      j = Go(g),
      D = {
        rootMargin: -E + "px " + -C + "px " + -M + "px " + -j + "px",
        threshold: zt(0, wi(1, p)) || 1
      };
    let k = !0;

    function P(F) {
      const Z = F[0].intersectionRatio;
      if (Z !== p) {
        if (!k) return f();
        Z ? f(!1, Z) : r = setTimeout(() => {
          f(!1, 1e-7)
        }, 1e3)
      }
      Z === 1 && !mb(m, t.getBoundingClientRect()) && f(), k = !1
    }
    try {
      a = new IntersectionObserver(P, {
        ...D,
        root: l.ownerDocument
      })
    } catch {
      a = new IntersectionObserver(P, D)
    }
    a.observe(t)
  }
  return f(!0), u
}

function xR(t, i, a, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: u = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: h = typeof IntersectionObserver == "function",
    animationFrame: p = !1
  } = r, m = Hd(t), g = l || u ? [...m ? fr(m) : [], ...i ? fr(i) : []] : [];
  g.forEach(j => {
    l && j.addEventListener("scroll", a, {
      passive: !0
    }), u && j.addEventListener("resize", a)
  });
  const x = m && h ? vR(m, a) : null;
  let b = -1,
    T = null;
  f && (T = new ResizeObserver(j => {
    let [_] = j;
    _ && _.target === m && T && i && (T.unobserve(i), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var D;
      (D = T) == null || D.observe(i)
    })), a()
  }), m && !p && T.observe(m), i && T.observe(i));
  let E, C = p ? Wi(t) : null;
  p && M();

  function M() {
    const j = Wi(t);
    C && !mb(C, j) && a(), C = j, E = requestAnimationFrame(M)
  }
  return a(), () => {
    var j;
    g.forEach(_ => {
      l && _.removeEventListener("scroll", a), u && _.removeEventListener("resize", a)
    }), x?.(), (j = T) == null || j.disconnect(), T = null, p && cancelAnimationFrame(E)
  }
}
const bR = WC,
  wR = $C,
  SR = FC,
  TR = JC,
  AR = KC,
  gv = QC,
  ER = IC,
  CR = (t, i, a) => {
    const r = new Map,
      l = {
        platform: yR,
        ...a
      },
      u = {
        ...l.platform,
        _c: r
      };
    return XC(t, i, {
      ...l,
      platform: u
    })
  };
var RR = typeof document < "u",
  MR = function() {},
  Jo = RR ? S.useLayoutEffect : MR;

function hl(t, i) {
  if (t === i) return !0;
  if (typeof t != typeof i) return !1;
  if (typeof t == "function" && t.toString() === i.toString()) return !0;
  let a, r, l;
  if (t && i && typeof t == "object") {
    if (Array.isArray(t)) {
      if (a = t.length, a !== i.length) return !1;
      for (r = a; r-- !== 0;)
        if (!hl(t[r], i[r])) return !1;
      return !0
    }
    if (l = Object.keys(t), a = l.length, a !== Object.keys(i).length) return !1;
    for (r = a; r-- !== 0;)
      if (!{}.hasOwnProperty.call(i, l[r])) return !1;
    for (r = a; r-- !== 0;) {
      const u = l[r];
      if (!(u === "_owner" && t.$$typeof) && !hl(t[u], i[u])) return !1
    }
    return !0
  }
  return t !== t && i !== i
}

function pb(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function yv(t, i) {
  const a = pb(t);
  return Math.round(i * a) / a
}

function gf(t) {
  const i = S.useRef(t);
  return Jo(() => {
    i.current = t
  }), i
}

function NR(t) {
  t === void 0 && (t = {});
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: l,
    elements: {
      reference: u,
      floating: f
    } = {},
    transform: h = !0,
    whileElementsMounted: p,
    open: m
  } = t, [g, x] = S.useState({
    x: 0,
    y: 0,
    strategy: a,
    placement: i,
    middlewareData: {},
    isPositioned: !1
  }), [b, T] = S.useState(r);
  hl(b, r) || T(r);
  const [E, C] = S.useState(null), [M, j] = S.useState(null), _ = S.useCallback(X => {
      X !== F.current && (F.current = X, C(X))
    }, []), D = S.useCallback(X => {
      X !== Z.current && (Z.current = X, j(X))
    }, []), k = u || E, P = f || M, F = S.useRef(null), Z = S.useRef(null), H = S.useRef(g), W = p != null, oe = gf(p),
    pe = gf(l), ce = gf(m), xe = S.useCallback(() => {
      if (!F.current || !Z.current) return;
      const X = {
        placement: i,
        strategy: a,
        middleware: b
      };
      pe.current && (X.platform = pe.current), CR(F.current, Z.current, X).then(ee => {
        const A = {
          ...ee,
          isPositioned: ce.current !== !1
        };
        J.current && !hl(H.current, A) && (H.current = A, Nl.flushSync(() => {
          x(A)
        }))
      })
    }, [b, i, a, pe, ce]);
  Jo(() => {
    m === !1 && H.current.isPositioned && (H.current.isPositioned = !1, x(X => ({
      ...X,
      isPositioned: !1
    })))
  }, [m]);
  const J = S.useRef(!1);
  Jo(() => (J.current = !0, () => {
    J.current = !1
  }), []), Jo(() => {
    if (k && (F.current = k), P && (Z.current = P), k && P) {
      if (oe.current) return oe.current(k, P, xe);
      xe()
    }
  }, [k, P, xe, oe, W]);
  const fe = S.useMemo(() => ({
      reference: F,
      floating: Z,
      setReference: _,
      setFloating: D
    }), [_, D]),
    z = S.useMemo(() => ({
      reference: k,
      floating: P
    }), [k, P]),
    K = S.useMemo(() => {
      const X = {
        position: a,
        left: 0,
        top: 0
      };
      if (!z.floating) return X;
      const ee = yv(z.floating, g.x),
        A = yv(z.floating, g.y);
      return h ? {
        ...X,
        transform: "translate(" + ee + "px, " + A + "px)",
        ...pb(z.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: a,
        left: ee,
        top: A
      }
    }, [a, h, z.floating, g.x, g.y]);
  return S.useMemo(() => ({
    ...g,
    update: xe,
    refs: fe,
    elements: z,
    floatingStyles: K
  }), [g, xe, fe, z, K])
}
const jR = t => {
    function i(a) {
      return {}.hasOwnProperty.call(a, "current")
    }
    return {
      name: "arrow",
      options: t,
      fn(a) {
        const {
          element: r,
          padding: l
        } = typeof t == "function" ? t(a) : t;
        return r && i(r) ? r.current != null ? gv({
          element: r.current,
          padding: l
        }).fn(a) : {} : r ? gv({
          element: r,
          padding: l
        }).fn(a) : {}
      }
    }
  },
  OR = (t, i) => {
    const a = bR(t);
    return {
      name: a.name,
      fn: a.fn,
      options: [t, i]
    }
  },
  DR = (t, i) => {
    const a = wR(t);
    return {
      name: a.name,
      fn: a.fn,
      options: [t, i]
    }
  },
  _R = (t, i) => ({
    fn: ER(t).fn,
    options: [t, i]
  }),
  zR = (t, i) => {
    const a = SR(t);
    return {
      name: a.name,
      fn: a.fn,
      options: [t, i]
    }
  },
  VR = (t, i) => {
    const a = TR(t);
    return {
      name: a.name,
      fn: a.fn,
      options: [t, i]
    }
  },
  LR = (t, i) => {
    const a = AR(t);
    return {
      name: a.name,
      fn: a.fn,
      options: [t, i]
    }
  },
  kR = (t, i) => {
    const a = jR(t);
    return {
      name: a.name,
      fn: a.fn,
      options: [t, i]
    }
  };
var PR = "Arrow",
  gb = S.forwardRef((t, i) => {
    const {
      children: a,
      width: r = 10,
      height: l = 5,
      ...u
    } = t;
    return y.jsx(Tt.svg, {
      ...u,
      ref: i,
      width: r,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? a : y.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    })
  });
gb.displayName = PR;
var UR = gb;

function BR(t) {
  const [i, a] = S.useState(void 0);
  return bi(() => {
    if (t) {
      a({
        width: t.offsetWidth,
        height: t.offsetHeight
      });
      const r = new ResizeObserver(l => {
        if (!Array.isArray(l) || !l.length) return;
        const u = l[0];
        let f, h;
        if ("borderBoxSize" in u) {
          const p = u.borderBoxSize,
            m = Array.isArray(p) ? p[0] : p;
          f = m.inlineSize, h = m.blockSize
        } else f = t.offsetWidth, h = t.offsetHeight;
        a({
          width: f,
          height: h
        })
      });
      return r.observe(t, {
        box: "border-box"
      }), () => r.unobserve(t)
    } else a(void 0)
  }, [t]), i
}
var yb = "Popper",
  [vb, xb] = jl(yb),
  [g4, bb] = vb(yb),
  wb = "PopperAnchor",
  Sb = S.forwardRef((t, i) => {
    const {
      __scopePopper: a,
      virtualRef: r,
      ...l
    } = t, u = bb(wb, a), f = S.useRef(null), h = nn(i, f), p = S.useRef(null);
    return S.useEffect(() => {
      const m = p.current;
      p.current = r?.current || f.current, m !== p.current && u.onAnchorChange(p.current)
    }), r ? null : y.jsx(Tt.div, {
      ...l,
      ref: h
    })
  });
Sb.displayName = wb;
var qd = "PopperContent",
  [HR, qR] = vb(qd),
  Tb = S.forwardRef((t, i) => {
    const {
      __scopePopper: a,
      side: r = "bottom",
      sideOffset: l = 0,
      align: u = "center",
      alignOffset: f = 0,
      arrowPadding: h = 0,
      avoidCollisions: p = !0,
      collisionBoundary: m = [],
      collisionPadding: g = 0,
      sticky: x = "partial",
      hideWhenDetached: b = !1,
      updatePositionStrategy: T = "optimized",
      onPlaced: E,
      ...C
    } = t, M = bb(qd, a), [j, _] = S.useState(null), D = nn(i, Le => _(Le)), [k, P] = S.useState(null), F = BR(k), Z =
      F?.width ?? 0, H = F?.height ?? 0, W = r + (u !== "center" ? "-" + u : ""), oe = typeof g == "number" ? g : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...g
      }, pe = Array.isArray(m) ? m : [m], ce = pe.length > 0, xe = {
        padding: oe,
        boundary: pe.filter(GR),
        altBoundary: ce
      }, {
        refs: J,
        floatingStyles: fe,
        placement: z,
        isPositioned: K,
        middlewareData: X
      } = NR({
        strategy: "fixed",
        placement: W,
        whileElementsMounted: (...Le) => xR(...Le, {
          animationFrame: T === "always"
        }),
        elements: {
          reference: M.anchor
        },
        middleware: [OR({
          mainAxis: l + H,
          alignmentAxis: f
        }), p && DR({
          mainAxis: !0,
          crossAxis: !1,
          limiter: x === "partial" ? _R() : void 0,
          ...xe
        }), p && zR({
          ...xe
        }), VR({
          ...xe,
          apply: ({
            elements: Le,
            rects: Re,
            availableWidth: Me,
            availableHeight: qn
          }) => {
            const {
              width: Ft,
              height: ln
            } = Re.reference, Lt = Le.floating.style;
            Lt.setProperty("--radix-popper-available-width", `${Me}px`), Lt.setProperty(
              "--radix-popper-available-height", `${qn}px`), Lt.setProperty("--radix-popper-anchor-width",
              `${Ft}px`), Lt.setProperty("--radix-popper-anchor-height", `${ln}px`)
          }
        }), k && kR({
          element: k,
          padding: h
        }), XR({
          arrowWidth: Z,
          arrowHeight: H
        }), b && LR({
          strategy: "referenceHidden",
          ...xe
        })]
      }), [ee, A] = Cb(z), Y = xi(E);
    bi(() => {
      K && Y?.()
    }, [K, Y]);
    const I = X.arrow?.x,
      $ = X.arrow?.y,
      re = X.arrow?.centerOffset !== 0,
      [de, ae] = S.useState();
    return bi(() => {
      j && ae(window.getComputedStyle(j).zIndex)
    }, [j]), y.jsx("div", {
      ref: J.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...fe,
        transform: K ? fe.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: de,
        "--radix-popper-transform-origin": [X.transformOrigin?.x, X.transformOrigin?.y].join(" "),
        ...X.hide?.referenceHidden && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: t.dir,
      children: y.jsx(HR, {
        scope: a,
        placedSide: ee,
        onArrowChange: P,
        arrowX: I,
        arrowY: $,
        shouldHideArrow: re,
        children: y.jsx(Tt.div, {
          "data-side": ee,
          "data-align": A,
          ...C,
          ref: D,
          style: {
            ...C.style,
            animation: K ? void 0 : "none"
          }
        })
      })
    })
  });
Tb.displayName = qd;
var Ab = "PopperArrow",
  YR = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  },
  Eb = S.forwardRef(function(i, a) {
    const {
      __scopePopper: r,
      ...l
    } = i, u = qR(Ab, r), f = YR[u.placedSide];
    return y.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        } [u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        } [u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0
      },
      children: y.jsx(UR, {
        ...l,
        ref: a,
        style: {
          ...l.style,
          display: "block"
        }
      })
    })
  });
Eb.displayName = Ab;

function GR(t) {
  return t !== null
}
var XR = t => ({
  name: "transformOrigin",
  options: t,
  fn(i) {
    const {
      placement: a,
      rects: r,
      middlewareData: l
    } = i, f = l.arrow?.centerOffset !== 0, h = f ? 0 : t.arrowWidth, p = f ? 0 : t.arrowHeight, [m, g] = Cb(a),
      x = {
        start: "0%",
        center: "50%",
        end: "100%"
      } [g], b = (l.arrow?.x ?? 0) + h / 2, T = (l.arrow?.y ?? 0) + p / 2;
    let E = "",
      C = "";
    return m === "bottom" ? (E = f ? x : `${b}px`, C = `${-p}px`) : m === "top" ? (E = f ? x : `${b}px`, C =
      `${r.floating.height+p}px`) : m === "right" ? (E = `${-p}px`, C = f ? x : `${T}px`) : m === "left" && (E =
      `${r.floating.width+p}px`, C = f ? x : `${T}px`), {
      data: {
        x: E,
        y: C
      }
    }
  }
});

function Cb(t) {
  const [i, a = "center"] = t.split("-");
  return [i, a]
}
var QR = Sb,
  FR = Tb,
  KR = Eb,
  [Pl] = jl("Tooltip", [xb]),
  Yd = xb(),
  Rb = "TooltipProvider",
  ZR = 700,
  vv = "tooltip.open",
  [WR, Mb] = Pl(Rb),
  Nb = t => {
    const {
      __scopeTooltip: i,
      delayDuration: a = ZR,
      skipDelayDuration: r = 300,
      disableHoverableContent: l = !1,
      children: u
    } = t, f = S.useRef(!0), h = S.useRef(!1), p = S.useRef(0);
    return S.useEffect(() => {
      const m = p.current;
      return () => window.clearTimeout(m)
    }, []), y.jsx(WR, {
      scope: i,
      isOpenDelayedRef: f,
      delayDuration: a,
      onOpen: S.useCallback(() => {
        window.clearTimeout(p.current), f.current = !1
      }, []),
      onClose: S.useCallback(() => {
        window.clearTimeout(p.current), p.current = window.setTimeout(() => f.current = !0, r)
      }, [r]),
      isPointerInTransitRef: h,
      onPointerInTransitChange: S.useCallback(m => {
        h.current = m
      }, []),
      disableHoverableContent: l,
      children: u
    })
  };
Nb.displayName = Rb;
var jb = "Tooltip",
  [y4, xr] = Pl(jb),
  Zf = "TooltipTrigger",
  $R = S.forwardRef((t, i) => {
    const {
      __scopeTooltip: a,
      ...r
    } = t, l = xr(Zf, a), u = Mb(Zf, a), f = Yd(a), h = S.useRef(null), p = nn(i, h, l.onTriggerChange), m = S.useRef(
      !1), g = S.useRef(!1), x = S.useCallback(() => m.current = !1, []);
    return S.useEffect(() => () => document.removeEventListener("pointerup", x), [x]), y.jsx(QR, {
      asChild: !0,
      ...f,
      children: y.jsx(Tt.button, {
        "aria-describedby": l.open ? l.contentId : void 0,
        "data-state": l.stateAttribute,
        ...r,
        ref: p,
        onPointerMove: et(t.onPointerMove, b => {
          b.pointerType !== "touch" && !g.current && !u.isPointerInTransitRef.current && (l
            .onTriggerEnter(), g.current = !0)
        }),
        onPointerLeave: et(t.onPointerLeave, () => {
          l.onTriggerLeave(), g.current = !1
        }),
        onPointerDown: et(t.onPointerDown, () => {
          l.open && l.onClose(), m.current = !0, document.addEventListener("pointerup", x, {
            once: !0
          })
        }),
        onFocus: et(t.onFocus, () => {
          m.current || l.onOpen()
        }),
        onBlur: et(t.onBlur, l.onClose),
        onClick: et(t.onClick, l.onClose)
      })
    })
  });
$R.displayName = Zf;
var Gd = "TooltipPortal",
  [IR, JR] = Pl(Gd, {
    forceMount: void 0
  }),
  Ob = t => {
    const {
      __scopeTooltip: i,
      forceMount: a,
      children: r,
      container: l
    } = t, u = xr(Gd, i);
    return y.jsx(IR, {
      scope: i,
      forceMount: a,
      children: y.jsx(Ol, {
        present: a || u.open,
        children: y.jsx(Nd, {
          asChild: !0,
          container: l,
          children: r
        })
      })
    })
  };
Ob.displayName = Gd;
var Ks = "TooltipContent",
  Db = S.forwardRef((t, i) => {
    const a = JR(Ks, t.__scopeTooltip),
      {
        forceMount: r = a.forceMount,
        side: l = "top",
        ...u
      } = t,
      f = xr(Ks, t.__scopeTooltip);
    return y.jsx(Ol, {
      present: r || f.open,
      children: f.disableHoverableContent ? y.jsx(_b, {
        side: l,
        ...u,
        ref: i
      }) : y.jsx(eM, {
        side: l,
        ...u,
        ref: i
      })
    })
  }),
  eM = S.forwardRef((t, i) => {
    const a = xr(Ks, t.__scopeTooltip),
      r = Mb(Ks, t.__scopeTooltip),
      l = S.useRef(null),
      u = nn(i, l),
      [f, h] = S.useState(null),
      {
        trigger: p,
        onClose: m
      } = a,
      g = l.current,
      {
        onPointerInTransitChange: x
      } = r,
      b = S.useCallback(() => {
        h(null), x(!1)
      }, [x]),
      T = S.useCallback((E, C) => {
        const M = E.currentTarget,
          j = {
            x: E.clientX,
            y: E.clientY
          },
          _ = aM(j, M.getBoundingClientRect()),
          D = rM(j, _),
          k = oM(C.getBoundingClientRect()),
          P = cM([...D, ...k]);
        h(P), x(!0)
      }, [x]);
    return S.useEffect(() => () => b(), [b]), S.useEffect(() => {
      if (p && g) {
        const E = M => T(M, g),
          C = M => T(M, p);
        return p.addEventListener("pointerleave", E), g.addEventListener("pointerleave", C), () => {
          p.removeEventListener("pointerleave", E), g.removeEventListener("pointerleave", C)
        }
      }
    }, [p, g, T, b]), S.useEffect(() => {
      if (f) {
        const E = C => {
          const M = C.target,
            j = {
              x: C.clientX,
              y: C.clientY
            },
            _ = p?.contains(M) || g?.contains(M),
            D = !lM(j, f);
          _ ? b() : D && (b(), m())
        };
        return document.addEventListener("pointermove", E), () => document.removeEventListener("pointermove", E)
      }
    }, [p, g, f, m, b]), y.jsx(_b, {
      ...t,
      ref: u
    })
  }),
  [tM, nM] = Pl(jb, {
    isInside: !1
  }),
  iM = h2("TooltipContent"),
  _b = S.forwardRef((t, i) => {
    const {
      __scopeTooltip: a,
      children: r,
      "aria-label": l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      ...h
    } = t, p = xr(Ks, a), m = Yd(a), {
      onClose: g
    } = p;
    return S.useEffect(() => (document.addEventListener(vv, g), () => document.removeEventListener(vv, g)), [g]), S
      .useEffect(() => {
        if (p.trigger) {
          const x = b => {
            b.target?.contains(p.trigger) && g()
          };
          return window.addEventListener("scroll", x, {
            capture: !0
          }), () => window.removeEventListener("scroll", x, {
            capture: !0
          })
        }
      }, [p.trigger, g]), y.jsx(Md, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: x => x.preventDefault(),
        onDismiss: g,
        children: y.jsxs(FR, {
          "data-state": p.stateAttribute,
          ...m,
          ...h,
          ref: i,
          style: {
            ...h.style,
            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
          },
          children: [y.jsx(iM, {
            children: r
          }), y.jsx(tM, {
            scope: a,
            isInside: !0,
            children: y.jsx(P2, {
              id: p.contentId,
              role: "tooltip",
              children: l || r
            })
          })]
        })
      })
  });
Db.displayName = Ks;
var zb = "TooltipArrow",
  sM = S.forwardRef((t, i) => {
    const {
      __scopeTooltip: a,
      ...r
    } = t, l = Yd(a);
    return nM(zb, a).isInside ? null : y.jsx(KR, {
      ...l,
      ...r,
      ref: i
    })
  });
sM.displayName = zb;

function aM(t, i) {
  const a = Math.abs(i.top - t.y),
    r = Math.abs(i.bottom - t.y),
    l = Math.abs(i.right - t.x),
    u = Math.abs(i.left - t.x);
  switch (Math.min(a, r, l, u)) {
    case u:
      return "left";
    case l:
      return "right";
    case a:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable")
  }
}

function rM(t, i, a = 5) {
  const r = [];
  switch (i) {
    case "top":
      r.push({
        x: t.x - a,
        y: t.y + a
      }, {
        x: t.x + a,
        y: t.y + a
      });
      break;
    case "bottom":
      r.push({
        x: t.x - a,
        y: t.y - a
      }, {
        x: t.x + a,
        y: t.y - a
      });
      break;
    case "left":
      r.push({
        x: t.x + a,
        y: t.y - a
      }, {
        x: t.x + a,
        y: t.y + a
      });
      break;
    case "right":
      r.push({
        x: t.x - a,
        y: t.y - a
      }, {
        x: t.x - a,
        y: t.y + a
      });
      break
  }
  return r
}

function oM(t) {
  const {
    top: i,
    right: a,
    bottom: r,
    left: l
  } = t;
  return [{
    x: l,
    y: i
  }, {
    x: a,
    y: i
  }, {
    x: a,
    y: r
  }, {
    x: l,
    y: r
  }]
}

function lM(t, i) {
  const {
    x: a,
    y: r
  } = t;
  let l = !1;
  for (let u = 0, f = i.length - 1; u < i.length; f = u++) {
    const h = i[u],
      p = i[f],
      m = h.x,
      g = h.y,
      x = p.x,
      b = p.y;
    g > r != b > r && a < (x - m) * (r - g) / (b - g) + m && (l = !l)
  }
  return l
}

function cM(t) {
  const i = t.slice();
  return i.sort((a, r) => a.x < r.x ? -1 : a.x > r.x ? 1 : a.y < r.y ? -1 : a.y > r.y ? 1 : 0), uM(i)
}

function uM(t) {
  if (t.length <= 1) return t.slice();
  const i = [];
  for (let r = 0; r < t.length; r++) {
    const l = t[r];
    for (; i.length >= 2;) {
      const u = i[i.length - 1],
        f = i[i.length - 2];
      if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x)) i.pop();
      else break
    }
    i.push(l)
  }
  i.pop();
  const a = [];
  for (let r = t.length - 1; r >= 0; r--) {
    const l = t[r];
    for (; a.length >= 2;) {
      const u = a[a.length - 1],
        f = a[a.length - 2];
      if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x)) a.pop();
      else break
    }
    a.push(l)
  }
  return a.pop(), i.length === 1 && a.length === 1 && i[0].x === a[0].x && i[0].y === a[0].y ? i : i.concat(a)
}
var fM = Nb,
  dM = Ob,
  Vb = Db;
const hM = fM,
  mM = S.forwardRef(({
    className: t,
    sideOffset: i = 4,
    ...a
  }, r) => y.jsx(dM, {
    children: y.jsx(Vb, {
      ref: r,
      sideOffset: i,
      className: At(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        t),
      ...a
    })
  }));
mM.displayName = Vb.displayName;
const Lb = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx("div", {
  ref: a,
  className: At("rounded-xl border bg-card text-card-foreground shadow", t),
  ...i
}));
Lb.displayName = "Card";
const pM = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx("div", {
  ref: a,
  className: At("flex flex-col space-y-1.5 p-6", t),
  ...i
}));
pM.displayName = "CardHeader";
const gM = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx("div", {
  ref: a,
  className: At("font-semibold leading-none tracking-tight", t),
  ...i
}));
gM.displayName = "CardTitle";
const yM = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx("div", {
  ref: a,
  className: At("text-sm text-muted-foreground", t),
  ...i
}));
yM.displayName = "CardDescription";
const kb = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx("div", {
  ref: a,
  className: At("p-6 pt-0", t),
  ...i
}));
kb.displayName = "CardContent";
const vM = S.forwardRef(({
  className: t,
  ...i
}, a) => y.jsx("div", {
  ref: a,
  className: At("flex items-center p-6 pt-0", t),
  ...i
}));
vM.displayName = "CardFooter";

function xM() {
  return y.jsx("div", {
    className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: y.jsx(Lb, {
      className: "w-full max-w-md mx-4",
      children: y.jsxs(kb, {
        className: "pt-6",
        children: [y.jsxs("div", {
          className: "flex mb-4 gap-2",
          children: [y.jsx(mE, {
            className: "h-8 w-8 text-red-500"
          }), y.jsx("h1", {
            className: "text-2xl font-bold text-gray-900",
            children: "404 Page Not Found"
          })]
        }), y.jsx("p", {
          className: "mt-4 text-sm text-gray-600",
          children: "Did you forget to add the page to the router?"
        })]
      })
    })
  })
}
const Xd = S.createContext({});

function Ul(t) {
  const i = S.useRef(null);
  return i.current === null && (i.current = t()), i.current
}
const bM = typeof window < "u",
  Qd = bM ? S.useLayoutEffect : S.useEffect,
  Bl = S.createContext(null);

function Fd(t, i) {
  t.indexOf(i) === -1 && t.push(i)
}

function ml(t, i) {
  const a = t.indexOf(i);
  a > -1 && t.splice(a, 1)
}
const rn = (t, i, a) => a > i ? i : a < t ? t : a;
let dr = () => {};
const Un = {},
  Pb = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);

function Ub(t) {
  return typeof t == "object" && t !== null
}
const Bb = t => /^0[^.\s]+$/u.test(t);

function Hb(t) {
  let i;
  return () => (i === void 0 && (i = t()), i)
}
const St = t => t,
  wM = (t, i) => a => i(t(a)),
  br = (...t) => t.reduce(wM),
  Zs = (t, i, a) => {
    const r = i - t;
    return r === 0 ? 1 : (a - t) / r
  };
class Kd {
  constructor() {
    this.subscriptions = []
  }
  add(i) {
    return Fd(this.subscriptions, i), () => ml(this.subscriptions, i)
  }
  notify(i, a, r) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1) this.subscriptions[0](i, a, r);
      else
        for (let u = 0; u < l; u++) {
          const f = this.subscriptions[u];
          f && f(i, a, r)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const en = t => t * 1e3,
  Qt = t => t / 1e3;

function Zd(t, i) {
  return i ? t * (1e3 / i) : 0
}
const qb = (t, i, a) => (((1 - 3 * a + 3 * i) * t + (3 * a - 6 * i)) * t + 3 * i) * t,
  SM = 1e-7,
  TM = 12;

function AM(t, i, a, r, l) {
  let u, f, h = 0;
  do f = i + (a - i) / 2, u = qb(f, r, l) - t, u > 0 ? a = f : i = f; while (Math.abs(u) > SM && ++h < TM);
  return f
}

function wr(t, i, a, r) {
  if (t === i && a === r) return St;
  const l = u => AM(u, 0, 1, t, a);
  return u => u === 0 || u === 1 ? u : qb(l(u), i, r)
}
const Yb = t => i => i <= .5 ? t(2 * i) / 2 : (2 - t(2 * (1 - i))) / 2,
  Gb = t => i => 1 - t(1 - i),
  Xb = wr(.33, 1.53, .69, .99),
  Wd = Gb(Xb),
  Qb = Yb(Wd),
  Fb = t => (t *= 2) < 1 ? .5 * Wd(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
  $d = t => 1 - Math.sin(Math.acos(t)),
  Kb = Gb($d),
  Zb = Yb($d),
  EM = wr(.42, 0, 1, 1),
  CM = wr(0, 0, .58, 1),
  Wb = wr(.42, 0, .58, 1),
  RM = t => Array.isArray(t) && typeof t[0] != "number",
  $b = t => Array.isArray(t) && typeof t[0] == "number",
  MM = {
    linear: St,
    easeIn: EM,
    easeInOut: Wb,
    easeOut: CM,
    circIn: $d,
    circInOut: Zb,
    circOut: Kb,
    backIn: Wd,
    backInOut: Qb,
    backOut: Xb,
    anticipate: Fb
  },
  NM = t => typeof t == "string",
  xv = t => {
    if ($b(t)) {
      dr(t.length === 4);
      const [i, a, r, l] = t;
      return wr(i, a, r, l)
    } else if (NM(t)) return MM[t];
    return t
  },
  Xo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function jM(t, i) {
  let a = new Set,
    r = new Set,
    l = !1,
    u = !1;
  const f = new WeakSet;
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };

  function p(g) {
    f.has(g) && (m.schedule(g), t()), g(h)
  }
  const m = {
    schedule: (g, x = !1, b = !1) => {
      const E = b && l ? a : r;
      return x && f.add(g), E.has(g) || E.add(g), g
    },
    cancel: g => {
      r.delete(g), f.delete(g)
    },
    process: g => {
      if (h = g, l) {
        u = !0;
        return
      }
      l = !0, [a, r] = [r, a], a.forEach(p), a.clear(), l = !1, u && (u = !1, m.process(g))
    }
  };
  return m
}
const OM = 40;

function Ib(t, i) {
  let a = !1,
    r = !0;
  const l = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    },
    u = () => a = !0,
    f = Xo.reduce((D, k) => (D[k] = jM(u), D), {}),
    {
      setup: h,
      read: p,
      resolveKeyframes: m,
      preUpdate: g,
      update: x,
      preRender: b,
      render: T,
      postRender: E
    } = f,
    C = () => {
      const D = Un.useManualTiming ? l.timestamp : performance.now();
      a = !1, Un.useManualTiming || (l.delta = r ? 1e3 / 60 : Math.max(Math.min(D - l.timestamp, OM), 1)), l.timestamp =
        D, l.isProcessing = !0, h.process(l), p.process(l), m.process(l), g.process(l), x.process(l), b.process(l), T
        .process(l), E.process(l), l.isProcessing = !1, a && i && (r = !1, t(C))
    },
    M = () => {
      a = !0, r = !0, l.isProcessing || t(C)
    };
  return {
    schedule: Xo.reduce((D, k) => {
      const P = f[k];
      return D[k] = (F, Z = !1, H = !1) => (a || M(), P.schedule(F, Z, H)), D
    }, {}),
    cancel: D => {
      for (let k = 0; k < Xo.length; k++) f[Xo[k]].cancel(D)
    },
    state: l,
    steps: f
  }
}
const {
  schedule: Ce,
  cancel: on,
  state: at,
  steps: yf
} = Ib(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0);
let el;

function DM() {
  el = void 0
}
const pt = {
    now: () => (el === void 0 && pt.set(at.isProcessing || Un.useManualTiming ? at.timestamp : performance.now()), el),
    set: t => {
      el = t, queueMicrotask(DM)
    }
  },
  Jb = t => i => typeof i == "string" && i.startsWith(t),
  e1 = Jb("--"),
  _M = Jb("var(--"),
  Id = t => _M(t) ? zM.test(t.split("/*")[0].trim()) : !1,
  zM = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function bv(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--")
}
const Is = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
  },
  hr = {
    ...Is,
    transform: t => rn(0, 1, t)
  },
  Qo = {
    ...Is,
    default: 1
  },
  ar = t => Math.round(t * 1e5) / 1e5,
  Jd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function VM(t) {
  return t == null
}
const LM =
  /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  eh = (t, i) => a => !!(typeof a == "string" && LM.test(a) && a.startsWith(t) || i && !VM(a) && Object.prototype
    .hasOwnProperty.call(a, i)),
  t1 = (t, i, a) => r => {
    if (typeof r != "string") return r;
    const [l, u, f, h] = r.match(Jd);
    return {
      [t]: parseFloat(l),
      [i]: parseFloat(u),
      [a]: parseFloat(f),
      alpha: h !== void 0 ? parseFloat(h) : 1
    }
  },
  kM = t => rn(0, 255, t),
  vf = {
    ...Is,
    transform: t => Math.round(kM(t))
  },
  Fi = {
    test: eh("rgb", "red"),
    parse: t1("red", "green", "blue"),
    transform: ({
        red: t,
        green: i,
        blue: a,
        alpha: r = 1
      }) => "rgba(" + vf.transform(t) + ", " + vf.transform(i) + ", " + vf.transform(a) + ", " + ar(hr.transform(r)) +
      ")"
  };

function PM(t) {
  let i = "",
    a = "",
    r = "",
    l = "";
  return t.length > 5 ? (i = t.substring(1, 3), a = t.substring(3, 5), r = t.substring(5, 7), l = t.substring(7, 9)) : (
    i = t.substring(1, 2), a = t.substring(2, 3), r = t.substring(3, 4), l = t.substring(4, 5), i += i, a += a, r +=
    r, l += l), {
    red: parseInt(i, 16),
    green: parseInt(a, 16),
    blue: parseInt(r, 16),
    alpha: l ? parseInt(l, 16) / 255 : 1
  }
}
const Wf = {
    test: eh("#"),
    parse: PM,
    transform: Fi.transform
  },
  Sr = t => ({
    test: i => typeof i == "string" && i.endsWith(t) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: i => `${i}${t}`
  }),
  yi = Sr("deg"),
  xn = Sr("%"),
  ie = Sr("px"),
  UM = Sr("vh"),
  BM = Sr("vw"),
  wv = {
    ...xn,
    parse: t => xn.parse(t) / 100,
    transform: t => xn.transform(t * 100)
  },
  Bs = {
    test: eh("hsl", "hue"),
    parse: t1("hue", "saturation", "lightness"),
    transform: ({
      hue: t,
      saturation: i,
      lightness: a,
      alpha: r = 1
    }) => "hsla(" + Math.round(t) + ", " + xn.transform(ar(i)) + ", " + xn.transform(ar(a)) + ", " + ar(hr.transform(
      r)) + ")"
  },
  Ze = {
    test: t => Fi.test(t) || Wf.test(t) || Bs.test(t),
    parse: t => Fi.test(t) ? Fi.parse(t) : Bs.test(t) ? Bs.parse(t) : Wf.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Fi.transform(t) : Bs.transform(t),
    getAnimatableNone: t => {
      const i = Ze.parse(t);
      return i.alpha = 0, Ze.transform(i)
    }
  },
  HM =
  /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function qM(t) {
  return isNaN(t) && typeof t == "string" && (t.match(Jd)?.length || 0) + (t.match(HM)?.length || 0) > 0
}
const n1 = "number",
  i1 = "color",
  YM = "var",
  GM = "var(",
  Sv = "${}",
  XM =
  /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function mr(t) {
  const i = t.toString(),
    a = [],
    r = {
      color: [],
      number: [],
      var: []
    },
    l = [];
  let u = 0;
  const h = i.replace(XM, p => (Ze.test(p) ? (r.color.push(u), l.push(i1), a.push(Ze.parse(p))) : p.startsWith(GM) ? (r
    .var.push(u), l.push(YM), a.push(p)) : (r.number.push(u), l.push(n1), a.push(parseFloat(p))), ++u, Sv)).split(Sv);
  return {
    values: a,
    split: h,
    indexes: r,
    types: l
  }
}

function s1(t) {
  return mr(t).values
}

function a1(t) {
  const {
    split: i,
    types: a
  } = mr(t), r = i.length;
  return l => {
    let u = "";
    for (let f = 0; f < r; f++)
      if (u += i[f], l[f] !== void 0) {
        const h = a[f];
        h === n1 ? u += ar(l[f]) : h === i1 ? u += Ze.transform(l[f]) : u += l[f]
      } return u
  }
}
const QM = t => typeof t == "number" ? 0 : Ze.test(t) ? Ze.getAnimatableNone(t) : t;

function FM(t) {
  const i = s1(t);
  return a1(t)(i.map(QM))
}
const tn = {
  test: qM,
  parse: s1,
  createTransformer: a1,
  getAnimatableNone: FM
};

function xf(t, i, a) {
  return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? t + (i - t) * 6 * a : a < 1 / 2 ? i : a < 2 / 3 ? t + (i -
    t) * (2 / 3 - a) * 6 : t
}

function KM({
  hue: t,
  saturation: i,
  lightness: a,
  alpha: r
}) {
  t /= 360, i /= 100, a /= 100;
  let l = 0,
    u = 0,
    f = 0;
  if (!i) l = u = f = a;
  else {
    const h = a < .5 ? a * (1 + i) : a + i - a * i,
      p = 2 * a - h;
    l = xf(p, h, t + 1 / 3), u = xf(p, h, t), f = xf(p, h, t - 1 / 3)
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(u * 255),
    blue: Math.round(f * 255),
    alpha: r
  }
}

function pl(t, i) {
  return a => a > 0 ? i : t
}
const Be = (t, i, a) => t + (i - t) * a,
  bf = (t, i, a) => {
    const r = t * t,
      l = a * (i * i - r) + r;
    return l < 0 ? 0 : Math.sqrt(l)
  },
  ZM = [Wf, Fi, Bs],
  WM = t => ZM.find(i => i.test(t));

function Tv(t) {
  const i = WM(t);
  if (!i) return !1;
  let a = i.parse(t);
  return i === Bs && (a = KM(a)), a
}
const Av = (t, i) => {
    const a = Tv(t),
      r = Tv(i);
    if (!a || !r) return pl(t, i);
    const l = {
      ...a
    };
    return u => (l.red = bf(a.red, r.red, u), l.green = bf(a.green, r.green, u), l.blue = bf(a.blue, r.blue, u), l
      .alpha = Be(a.alpha, r.alpha, u), Fi.transform(l))
  },
  $f = new Set(["none", "hidden"]);

function $M(t, i) {
  return $f.has(t) ? a => a <= 0 ? t : i : a => a >= 1 ? i : t
}

function IM(t, i) {
  return a => Be(t, i, a)
}

function th(t) {
  return typeof t == "number" ? IM : typeof t == "string" ? Id(t) ? pl : Ze.test(t) ? Av : tN : Array.isArray(t) ? r1 :
    typeof t == "object" ? Ze.test(t) ? Av : JM : pl
}

function r1(t, i) {
  const a = [...t],
    r = a.length,
    l = t.map((u, f) => th(u)(u, i[f]));
  return u => {
    for (let f = 0; f < r; f++) a[f] = l[f](u);
    return a
  }
}

function JM(t, i) {
  const a = {
      ...t,
      ...i
    },
    r = {};
  for (const l in a) t[l] !== void 0 && i[l] !== void 0 && (r[l] = th(t[l])(t[l], i[l]));
  return l => {
    for (const u in r) a[u] = r[u](l);
    return a
  }
}

function eN(t, i) {
  const a = [],
    r = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let l = 0; l < i.values.length; l++) {
    const u = i.types[l],
      f = t.indexes[u][r[u]],
      h = t.values[f] ?? 0;
    a[l] = h, r[u]++
  }
  return a
}
const tN = (t, i) => {
  const a = tn.createTransformer(i),
    r = mr(t),
    l = mr(i);
  return r.indexes.var.length === l.indexes.var.length && r.indexes.color.length === l.indexes.color.length && r
    .indexes.number.length >= l.indexes.number.length ? $f.has(t) && !l.values.length || $f.has(i) && !r.values
    .length ? $M(t, i) : br(r1(eN(r, l), l.values), a) : pl(t, i)
};

function o1(t, i, a) {
  return typeof t == "number" && typeof i == "number" && typeof a == "number" ? Be(t, i, a) : th(t)(t, i)
}
const nN = t => {
    const i = ({
      timestamp: a
    }) => t(a);
    return {
      start: (a = !0) => Ce.update(i, a),
      stop: () => on(i),
      now: () => at.isProcessing ? at.timestamp : pt.now()
    }
  },
  l1 = (t, i, a = 10) => {
    let r = "";
    const l = Math.max(Math.round(i / a), 2);
    for (let u = 0; u < l; u++) r += Math.round(t(u / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0,r.length-2)})`
  },
  gl = 2e4;

function nh(t) {
  let i = 0;
  const a = 50;
  let r = t.next(i);
  for (; !r.done && i < gl;) i += a, r = t.next(i);
  return i >= gl ? 1 / 0 : i
}

function iN(t, i = 100, a) {
  const r = a({
      ...t,
      keyframes: [0, i]
    }),
    l = Math.min(nh(r), gl);
  return {
    type: "keyframes",
    ease: u => r.next(l * u).value / i,
    duration: Qt(l)
  }
}
const sN = 5;

function c1(t, i, a) {
  const r = Math.max(i - sN, 0);
  return Zd(a - t(r), i - r)
}
const Ye = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
      granular: .01,
      default: 2
    },
    restDelta: {
      granular: .005,
      default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
  },
  wf = .001;

function aN({
  duration: t = Ye.duration,
  bounce: i = Ye.bounce,
  velocity: a = Ye.velocity,
  mass: r = Ye.mass
}) {
  let l, u, f = 1 - i;
  f = rn(Ye.minDamping, Ye.maxDamping, f), t = rn(Ye.minDuration, Ye.maxDuration, Qt(t)), f < 1 ? (l = m => {
    const g = m * f,
      x = g * t,
      b = g - a,
      T = If(m, f),
      E = Math.exp(-x);
    return wf - b / T * E
  }, u = m => {
    const x = m * f * t,
      b = x * a + a,
      T = Math.pow(f, 2) * Math.pow(m, 2) * t,
      E = Math.exp(-x),
      C = If(Math.pow(m, 2), f);
    return (-l(m) + wf > 0 ? -1 : 1) * ((b - T) * E) / C
  }) : (l = m => {
    const g = Math.exp(-m * t),
      x = (m - a) * t + 1;
    return -wf + g * x
  }, u = m => {
    const g = Math.exp(-m * t),
      x = (a - m) * (t * t);
    return g * x
  });
  const h = 5 / t,
    p = oN(l, u, h);
  if (t = en(t), isNaN(p)) return {
    stiffness: Ye.stiffness,
    damping: Ye.damping,
    duration: t
  };
  {
    const m = Math.pow(p, 2) * r;
    return {
      stiffness: m,
      damping: f * 2 * Math.sqrt(r * m),
      duration: t
    }
  }
}
const rN = 12;

function oN(t, i, a) {
  let r = a;
  for (let l = 1; l < rN; l++) r = r - t(r) / i(r);
  return r
}

function If(t, i) {
  return t * Math.sqrt(1 - i * i)
}
const lN = ["duration", "bounce"],
  cN = ["stiffness", "damping", "mass"];

function Ev(t, i) {
  return i.some(a => t[a] !== void 0)
}

function uN(t) {
  let i = {
    velocity: Ye.velocity,
    stiffness: Ye.stiffness,
    damping: Ye.damping,
    mass: Ye.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Ev(t, cN) && Ev(t, lN))
    if (i.velocity = 0, t.visualDuration) {
      const a = t.visualDuration,
        r = 2 * Math.PI / (a * 1.2),
        l = r * r,
        u = 2 * rn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(l);
      i = {
        ...i,
        mass: Ye.mass,
        stiffness: l,
        damping: u
      }
    } else {
      const a = aN({
        ...t,
        velocity: 0
      });
      i = {
        ...i,
        ...a,
        mass: Ye.mass
      }, i.isResolvedFromDuration = !0
    } return i
}

function yl(t = Ye.visualDuration, i = Ye.bounce) {
  const a = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: i
  } : t;
  let {
    restSpeed: r,
    restDelta: l
  } = a;
  const u = a.keyframes[0],
    f = a.keyframes[a.keyframes.length - 1],
    h = {
      done: !1,
      value: u
    },
    {
      stiffness: p,
      damping: m,
      mass: g,
      duration: x,
      velocity: b,
      isResolvedFromDuration: T
    } = uN({
      ...a,
      velocity: -Qt(a.velocity || 0)
    }),
    E = b || 0,
    C = m / (2 * Math.sqrt(p * g)),
    M = f - u,
    j = Qt(Math.sqrt(p / g)),
    _ = Math.abs(M) < 5;
  r || (r = _ ? Ye.restSpeed.granular : Ye.restSpeed.default), l || (l = _ ? Ye.restDelta.granular : Ye.restDelta
    .default);
  let D;
  if (C < 1) {
    const P = If(j, C);
    D = F => {
      const Z = Math.exp(-C * j * F);
      return f - Z * ((E + C * j * M) / P * Math.sin(P * F) + M * Math.cos(P * F))
    }
  } else if (C === 1) D = P => f - Math.exp(-j * P) * (M + (E + j * M) * P);
  else {
    const P = j * Math.sqrt(C * C - 1);
    D = F => {
      const Z = Math.exp(-C * j * F),
        H = Math.min(P * F, 300);
      return f - Z * ((E + C * j * M) * Math.sinh(H) + P * M * Math.cosh(H)) / P
    }
  }
  const k = {
    calculatedDuration: T && x || null,
    next: P => {
      const F = D(P);
      if (T) h.done = P >= x;
      else {
        let Z = P === 0 ? E : 0;
        C < 1 && (Z = P === 0 ? en(E) : c1(D, P, F));
        const H = Math.abs(Z) <= r,
          W = Math.abs(f - F) <= l;
        h.done = H && W
      }
      return h.value = h.done ? f : F, h
    },
    toString: () => {
      const P = Math.min(nh(k), gl),
        F = l1(Z => k.next(P * Z).value, P, 30);
      return P + "ms " + F
    },
    toTransition: () => {}
  };
  return k
}
yl.applyToOptions = t => {
  const i = iN(t, 100, yl);
  return t.ease = i.ease, t.duration = en(i.duration), t.type = "keyframes", t
};

function Jf({
  keyframes: t,
  velocity: i = 0,
  power: a = .8,
  timeConstant: r = 325,
  bounceDamping: l = 10,
  bounceStiffness: u = 500,
  modifyTarget: f,
  min: h,
  max: p,
  restDelta: m = .5,
  restSpeed: g
}) {
  const x = t[0],
    b = {
      done: !1,
      value: x
    },
    T = H => h !== void 0 && H < h || p !== void 0 && H > p,
    E = H => h === void 0 ? p : p === void 0 || Math.abs(h - H) < Math.abs(p - H) ? h : p;
  let C = a * i;
  const M = x + C,
    j = f === void 0 ? M : f(M);
  j !== M && (C = j - x);
  const _ = H => -C * Math.exp(-H / r),
    D = H => j + _(H),
    k = H => {
      const W = _(H),
        oe = D(H);
      b.done = Math.abs(W) <= m, b.value = b.done ? j : oe
    };
  let P, F;
  const Z = H => {
    T(b.value) && (P = H, F = yl({
      keyframes: [b.value, E(b.value)],
      velocity: c1(D, H, b.value),
      damping: l,
      stiffness: u,
      restDelta: m,
      restSpeed: g
    }))
  };
  return Z(0), {
    calculatedDuration: null,
    next: H => {
      let W = !1;
      return !F && P === void 0 && (W = !0, k(H), Z(H)), P !== void 0 && H >= P ? F.next(H - P) : (!W && k(H), b)
    }
  }
}

function fN(t, i, a) {
  const r = [],
    l = a || Un.mix || o1,
    u = t.length - 1;
  for (let f = 0; f < u; f++) {
    let h = l(t[f], t[f + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[f] || St : i;
      h = br(p, h)
    }
    r.push(h)
  }
  return r
}

function u1(t, i, {
  clamp: a = !0,
  ease: r,
  mixer: l
} = {}) {
  const u = t.length;
  if (dr(u === i.length), u === 1) return () => i[0];
  if (u === 2 && i[0] === i[1]) return () => i[1];
  const f = t[0] === t[1];
  t[0] > t[u - 1] && (t = [...t].reverse(), i = [...i].reverse());
  const h = fN(i, r, l),
    p = h.length,
    m = g => {
      if (f && g < t[0]) return i[0];
      let x = 0;
      if (p > 1)
        for (; x < t.length - 2 && !(g < t[x + 1]); x++);
      const b = Zs(t[x], t[x + 1], g);
      return h[x](b)
    };
  return a ? g => m(rn(t[0], t[u - 1], g)) : m
}

function dN(t, i) {
  const a = t[t.length - 1];
  for (let r = 1; r <= i; r++) {
    const l = Zs(0, i, r);
    t.push(Be(a, 1, l))
  }
}

function f1(t) {
  const i = [0];
  return dN(i, t.length - 1), i
}

function hN(t, i) {
  return t.map(a => a * i)
}

function mN(t, i) {
  return t.map(() => i || Wb).splice(0, t.length - 1)
}

function rr({
  duration: t = 300,
  keyframes: i,
  times: a,
  ease: r = "easeInOut"
}) {
  const l = RM(r) ? r.map(xv) : xv(r),
    u = {
      done: !1,
      value: i[0]
    },
    f = hN(a && a.length === i.length ? a : f1(i), t),
    h = u1(f, i, {
      ease: Array.isArray(l) ? l : mN(i, l)
    });
  return {
    calculatedDuration: t,
    next: p => (u.value = h(p), u.done = p >= t, u)
  }
}
const pN = t => t !== null;

function ih(t, {
  repeat: i,
  repeatType: a = "loop"
}, r, l = 1) {
  const u = t.filter(pN),
    h = l < 0 || i && a !== "loop" && i % 2 === 1 ? 0 : u.length - 1;
  return !h || r === void 0 ? u[h] : r
}
const gN = {
  decay: Jf,
  inertia: Jf,
  tween: rr,
  keyframes: rr,
  spring: yl
};

function d1(t) {
  typeof t.type == "string" && (t.type = gN[t.type])
}
class sh {
  constructor() {
    this.updateFinished()
  }
  get finished() {
    return this._finished
  }
  updateFinished() {
    this._finished = new Promise(i => {
      this.resolve = i
    })
  }
  notifyFinished() {
    this.resolve()
  }
  then(i, a) {
    return this.finished.then(i, a)
  }
}
const yN = t => t / 100;
class ah extends sh {
  constructor(i) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime =
      null, this.playbackSpeed = 1, this.stop = () => {
        const {
          motionValue: a
        } = this.options;
        a && a.updatedAt !== pt.now() && this.tick(pt.now()), this.isStopped = !0, this.state !== "idle" && (this
          .teardown(), this.options.onStop?.())
      }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause()
  }
  initAnimation() {
    const {
      options: i
    } = this;
    d1(i);
    const {
      type: a = rr,
      repeat: r = 0,
      repeatDelay: l = 0,
      repeatType: u,
      velocity: f = 0
    } = i;
    let {
      keyframes: h
    } = i;
    const p = a || rr;
    p !== rr && typeof h[0] != "number" && (this.mixKeyframes = br(yN, o1(h[0], h[1])), h = [0, 100]);
    const m = p({
      ...i,
      keyframes: h
    });
    u === "mirror" && (this.mirroredGenerator = p({
      ...i,
      keyframes: [...h].reverse(),
      velocity: -f
    })), m.calculatedDuration === null && (m.calculatedDuration = nh(m));
    const {
      calculatedDuration: g
    } = m;
    this.calculatedDuration = g, this.resolvedDuration = g + l, this.totalDuration = this.resolvedDuration * (r + 1) -
      l, this.generator = m
  }
  updateTime(i) {
    const a = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = a
  }
  tick(i, a = !1) {
    const {
      generator: r,
      totalDuration: l,
      mixKeyframes: u,
      mirroredGenerator: f,
      resolvedDuration: h,
      calculatedDuration: p
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: m = 0,
      keyframes: g,
      repeat: x,
      repeatType: b,
      repeatDelay: T,
      type: E,
      onUpdate: C,
      finalKeyframe: M
    } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i -
      l / this.speed, this.startTime)), a ? this.currentTime = i : this.updateTime(i);
    const j = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      _ = this.playbackSpeed >= 0 ? j < 0 : j > l;
    this.currentTime = Math.max(j, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let D = this.currentTime,
      k = r;
    if (x) {
      const H = Math.min(this.currentTime, l) / h;
      let W = Math.floor(H),
        oe = H % 1;
      !oe && H >= 1 && (oe = 1), oe === 1 && W--, W = Math.min(W, x + 1), W % 2 && (b === "reverse" ? (oe = 1 - oe,
        T && (oe -= T / h)) : b === "mirror" && (k = f)), D = rn(0, 1, oe) * h
    }
    const P = _ ? {
      done: !1,
      value: g[0]
    } : k.next(D);
    u && !_ && (P.value = u(P.value));
    let {
      done: F
    } = P;
    !_ && p !== null && (F = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
    const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && F);
    return Z && E !== Jf && (P.value = ih(g, this.options, M, this.speed)), C && C(P.value), Z && this.finish(), P
  }
  then(i, a) {
    return this.finished.then(i, a)
  }
  get duration() {
    return Qt(this.calculatedDuration)
  }
  get iterationDuration() {
    const {
      delay: i = 0
    } = this.options || {};
    return this.duration + Qt(i)
  }
  get time() {
    return Qt(this.currentTime)
  }
  set time(i) {
    i = en(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ?
      this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver ?
      this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = i, this.tick(i))
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(i) {
    const a = this.playbackSpeed !== i;
    a && this.driver && this.updateTime(pt.now()), this.playbackSpeed = i, a && this.driver && (this.time = Qt(this
      .currentTime))
  }
  play() {
    if (this.isStopped) return;
    const {
      driver: i = nN,
      startTime: a
    } = this.options;
    this.driver || (this.driver = i(l => this.tick(l))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this
      .startTime = r - this.holdTime : this.startTime || (this.startTime = a ?? r), this.state === "finished" && this
      .speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this
      .driver.start()
  }
  pause() {
    this.state = "paused", this.updateTime(pt.now()), this.holdTime = this.currentTime
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0)
  }
  sample(i) {
    return this.startTime = 0, this.tick(i, !0)
  }
  attachTimeline(i) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this
      .initAnimation()), this.driver?.stop(), i.observe(this)
  }
}

function vN(t) {
  for (let i = 1; i < t.length; i++) t[i] ?? (t[i] = t[i - 1])
}
const Ki = t => t * 180 / Math.PI,
  ed = t => {
    const i = Ki(Math.atan2(t[1], t[0]));
    return td(i)
  },
  xN = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: ed,
    rotateZ: ed,
    skewX: t => Ki(Math.atan(t[1])),
    skewY: t => Ki(Math.atan(t[2])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
  },
  td = t => (t = t % 360, t < 0 && (t += 360), t),
  Cv = ed,
  Rv = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  Mv = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  bN = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Rv,
    scaleY: Mv,
    scale: t => (Rv(t) + Mv(t)) / 2,
    rotateX: t => td(Ki(Math.atan2(t[6], t[5]))),
    rotateY: t => td(Ki(Math.atan2(-t[2], t[0]))),
    rotateZ: Cv,
    rotate: Cv,
    skewX: t => Ki(Math.atan(t[4])),
    skewY: t => Ki(Math.atan(t[1])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
  };

function nd(t) {
  return t.includes("scale") ? 1 : 0
}

function id(t, i) {
  if (!t || t === "none") return nd(i);
  const a = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, l;
  if (a) r = bN, l = a;
  else {
    const h = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = xN, l = h
  }
  if (!l) return nd(i);
  const u = r[i],
    f = l[1].split(",").map(SN);
  return typeof u == "function" ? u(f) : f[u]
}
const wN = (t, i) => {
  const {
    transform: a = "none"
  } = getComputedStyle(t);
  return id(a, i)
};

function SN(t) {
  return parseFloat(t.trim())
}
const Js = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX",
    "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"
  ],
  ea = new Set(Js),
  Nv = t => t === Is || t === ie,
  TN = new Set(["x", "y", "z"]),
  AN = Js.filter(t => !TN.has(t));

function EN(t) {
  const i = [];
  return AN.forEach(a => {
    const r = t.getValue(a);
    r !== void 0 && (i.push([a, r.get()]), r.set(a.startsWith("scale") ? 1 : 0))
  }), i
}
const vi = {
  width: ({
    x: t
  }, {
    paddingLeft: i = "0",
    paddingRight: a = "0"
  }) => t.max - t.min - parseFloat(i) - parseFloat(a),
  height: ({
    y: t
  }, {
    paddingTop: i = "0",
    paddingBottom: a = "0"
  }) => t.max - t.min - parseFloat(i) - parseFloat(a),
  top: (t, {
    top: i
  }) => parseFloat(i),
  left: (t, {
    left: i
  }) => parseFloat(i),
  bottom: ({
    y: t
  }, {
    top: i
  }) => parseFloat(i) + (t.max - t.min),
  right: ({
    x: t
  }, {
    left: i
  }) => parseFloat(i) + (t.max - t.min),
  x: (t, {
    transform: i
  }) => id(i, "x"),
  y: (t, {
    transform: i
  }) => id(i, "y")
};
vi.translateX = vi.x;
vi.translateY = vi.y;
const Zi = new Set;
let sd = !1,
  ad = !1,
  rd = !1;

function h1() {
  if (ad) {
    const t = Array.from(Zi).filter(r => r.needsMeasurement),
      i = new Set(t.map(r => r.element)),
      a = new Map;
    i.forEach(r => {
      const l = EN(r);
      l.length && (a.set(r, l), r.render())
    }), t.forEach(r => r.measureInitialState()), i.forEach(r => {
      r.render();
      const l = a.get(r);
      l && l.forEach(([u, f]) => {
        r.getValue(u)?.set(f)
      })
    }), t.forEach(r => r.measureEndState()), t.forEach(r => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
    })
  }
  ad = !1, sd = !1, Zi.forEach(t => t.complete(rd)), Zi.clear()
}

function m1() {
  Zi.forEach(t => {
    t.readKeyframes(), t.needsMeasurement && (ad = !0)
  })
}

function CN() {
  rd = !0, m1(), h1(), rd = !1
}
class rh {
  constructor(i, a, r, l, u, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this
      .onComplete = a, this.name = r, this.motionValue = l, this.element = u, this.isAsync = f
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Zi.add(this), sd || (sd = !0, Ce.read(m1), Ce.resolveKeyframes(h1))) : (
      this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: a,
      element: r,
      motionValue: l
    } = this;
    if (i[0] === null) {
      const u = l?.get(),
        f = i[i.length - 1];
      if (u !== void 0) i[0] = u;
      else if (r && a) {
        const h = r.readValue(a, f);
        h != null && (i[0] = h)
      }
      i[0] === void 0 && (i[0] = f), l && u === void 0 && l.set(i[0])
    }
    vN(i)
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), Zi.delete(this)
  }
  cancel() {
    this.state === "scheduled" && (Zi.delete(this), this.state = "pending")
  }
  resume() {
    this.state === "pending" && this.scheduleResolve()
  }
}
const RN = t => t.startsWith("--");

function p1(t, i, a) {
  RN(i) ? t.style.setProperty(i, a) : t.style[i] = a
}
const MN = {};

function oh(t, i) {
  const a = Hb(t);
  return () => MN[i] ?? a()
}
const lh = oh(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  g1 = oh(() => window.ViewTimeline !== void 0, "viewTimeline"),
  y1 = oh(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      })
    } catch {
      return !1
    }
    return !0
  }, "linearEasing"),
  nr = ([t, i, a, r]) => `cubic-bezier(${t}, ${i}, ${a}, ${r})`,
  jv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: nr([0, .65, .55, 1]),
    circOut: nr([.55, 0, 1, .45]),
    backIn: nr([.31, .01, .66, -.59]),
    backOut: nr([.33, 1.53, .69, .99])
  };

function v1(t, i) {
  if (t) return typeof t == "function" ? y1() ? l1(t, i) : "ease-out" : $b(t) ? nr(t) : Array.isArray(t) ? t.map(a =>
    v1(a, i) || jv.easeOut) : jv[t]
}

function NN(t, i, a, {
  delay: r = 0,
  duration: l = 300,
  repeat: u = 0,
  repeatType: f = "loop",
  ease: h = "easeOut",
  times: p
} = {}, m = void 0) {
  const g = {
    [i]: a
  };
  p && (g.offset = p);
  const x = v1(h, l);
  Array.isArray(x) && (g.easing = x);
  const b = {
    delay: r,
    duration: l,
    easing: Array.isArray(x) ? "linear" : x,
    fill: "both",
    iterations: u + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return m && (b.pseudoElement = m), t.animate(g, b)
}

function x1(t) {
  return typeof t == "function" && "applyToOptions" in t
}

function jN({
  type: t,
  ...i
}) {
  return x1(t) && y1() ? t.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i)
}
class b1 extends sh {
  constructor(i) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !i) return;
    const {
      element: a,
      name: r,
      keyframes: l,
      pseudoElement: u,
      allowFlatten: f = !1,
      finalKeyframe: h,
      onComplete: p
    } = i;
    this.isPseudoElement = !!u, this.allowFlatten = f, this.options = i, dr(typeof i.type != "string");
    const m = jN(i);
    this.animation = NN(a, r, l, m, u), m.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !u) {
        const g = ih(l, this.options, h, this.speed);
        this.updateMotionValue && this.updateMotionValue(g), p1(a, r, g), this.animation.cancel()
      }
      p?.(), this.notifyFinished()
    }
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this
      .updateFinished())
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    this.animation.finish?.()
  }
  cancel() {
    try {
      this.animation.cancel()
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const {
      state: i
    } = this;
    i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this
      .isPseudoElement || this.cancel())
  }
  commitStyles() {
    const i = this.options?.element;
    !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.()
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Qt(Number(i))
  }
  get iterationDuration() {
    const {
      delay: i = 0
    } = this.options || {};
    return this.duration + Qt(i)
  }
  get time() {
    return Qt(Number(this.animation.currentTime) || 0)
  }
  set time(i) {
    const a = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = en(i), a && this.animation
      .pause()
  }
  get speed() {
    return this.animation.playbackRate
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), this.animation.playbackRate = i
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime)
  }
  set startTime(i) {
    this.manualStartTime = this.animation.startTime = i
  }
  attachTimeline({
    timeline: i,
    rangeStart: a,
    rangeEnd: r,
    observe: l
  }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({
      easing: "linear"
    }), this.animation.onfinish = null, i && lh() ? (this.animation.timeline = i, a && (this.animation.rangeStart =
      a), r && (this.animation.rangeEnd = r), St) : l(this)
  }
}
const w1 = {
  anticipate: Fb,
  backInOut: Qb,
  circInOut: Zb
};

function ON(t) {
  return t in w1
}

function DN(t) {
  typeof t.ease == "string" && ON(t.ease) && (t.ease = w1[t.ease])
}
const Sf = 10;
class _N extends b1 {
  constructor(i) {
    DN(i), d1(i), super(i), i.startTime !== void 0 && (this.startTime = i.startTime), this.options = i
  }
  updateMotionValue(i) {
    const {
      motionValue: a,
      onUpdate: r,
      onComplete: l,
      element: u,
      ...f
    } = this.options;
    if (!a) return;
    if (i !== void 0) {
      a.set(i);
      return
    }
    const h = new ah({
        ...f,
        autoplay: !1
      }),
      p = Math.max(Sf, pt.now() - this.startTime),
      m = rn(0, Sf, p - Sf),
      g = h.sample(p).value,
      {
        name: x
      } = this.options;
    u && x && p1(u, x, g), a.setWithVelocity(h.sample(Math.max(0, p - m)).value, g, m), h.stop()
  }
}
const Ov = (t, i) => i === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (tn
  .test(t) || t === "0") && !t.startsWith("url("));

function zN(t) {
  const i = t[0];
  if (t.length === 1) return !0;
  for (let a = 0; a < t.length; a++)
    if (t[a] !== i) return !0
}

function VN(t, i, a, r) {
  const l = t[0];
  if (l === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const u = t[t.length - 1],
    f = Ov(l, i),
    h = Ov(u, i);
  return !f || !h ? !1 : zN(t) || (a === "spring" || x1(a)) && r
}

function od(t) {
  t.duration = 0, t.type = "keyframes"
}
const LN = new Set(["opacity", "clipPath", "filter", "transform"]),
  kN = Hb(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function PN(t) {
  const {
    motionValue: i,
    name: a,
    repeatDelay: r,
    repeatType: l,
    damping: u,
    type: f
  } = t;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const {
    onUpdate: p,
    transformTemplate: m
  } = i.owner.getProps();
  return kN() && a && LN.has(a) && (a !== "transform" || !m) && !p && !r && l !== "mirror" && u !== 0 && f !== "inertia"
}
const UN = 40;
class BN extends sh {
  constructor({
    autoplay: i = !0,
    delay: a = 0,
    type: r = "keyframes",
    repeat: l = 0,
    repeatDelay: u = 0,
    repeatType: f = "loop",
    keyframes: h,
    name: p,
    motionValue: m,
    element: g,
    ...x
  }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
    }, this.createdAt = pt.now();
    const b = {
        autoplay: i,
        delay: a,
        type: r,
        repeat: l,
        repeatDelay: u,
        repeatType: f,
        name: p,
        motionValue: m,
        element: g,
        ...x
      },
      T = g?.KeyframeResolver || rh;
    this.keyframeResolver = new T(h, (E, C, M) => this.onKeyframesResolved(E, C, b, !M), p, m, g), this
      .keyframeResolver?.scheduleResolve()
  }
  onKeyframesResolved(i, a, r, l) {
    this.keyframeResolver = void 0;
    const {
      name: u,
      type: f,
      velocity: h,
      delay: p,
      isHandoff: m,
      onUpdate: g
    } = r;
    this.resolvedAt = pt.now(), VN(i, u, f, h) || ((Un.instantAnimations || !p) && g?.(ih(i, r, a)), i[0] = i[i
      .length - 1], od(r), r.repeat = 0);
    const b = {
        startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > UN ? this.resolvedAt : this.createdAt :
          this.createdAt : void 0,
        finalKeyframe: a,
        ...r,
        keyframes: i
      },
      T = !m && PN(b),
      E = b.motionValue?.owner?.current,
      C = T ? new _N({
        ...b,
        element: E
      }) : new ah(b);
    C.finished.then(() => {
      this.notifyFinished()
    }).catch(St), this.pendingTimeline && (this.stopTimeline = C.attachTimeline(this.pendingTimeline), this
      .pendingTimeline = void 0), this._animation = C
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished
  }
  then(i, a) {
    return this.finished.finally(i).then(() => {})
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), CN()), this._animation
  }
  get duration() {
    return this.animation.duration
  }
  get iterationDuration() {
    return this.animation.iterationDuration
  }
  get time() {
    return this.animation.time
  }
  set time(i) {
    this.animation.time = i
  }
  get speed() {
    return this.animation.speed
  }
  get state() {
    return this.animation.state
  }
  set speed(i) {
    this.animation.speed = i
  }
  get startTime() {
    return this.animation.startTime
  }
  attachTimeline(i) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () =>
      this.stop()
  }
  play() {
    this.animation.play()
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    this.animation.complete()
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
  }
}

function S1(t, i, a, r = 0, l = 1) {
  const u = Array.from(t).sort((m, g) => m.sortNodePosition(g)).indexOf(i),
    f = t.size,
    h = (f - 1) * r;
  return typeof a == "function" ? a(u, f) : l === 1 ? u * r : h - u * r
}
const HN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function qN(t) {
  const i = HN.exec(t);
  if (!i) return [, ];
  const [, a, r, l] = i;
  return [`--${a??r}`, l]
}

function T1(t, i, a = 1) {
  const [r, l] = qN(t);
  if (!r) return;
  const u = window.getComputedStyle(i).getPropertyValue(r);
  if (u) {
    const f = u.trim();
    return Pb(f) ? parseFloat(f) : f
  }
  return Id(l) ? T1(l, i, a + 1) : l
}
const YN = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  GN = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  XN = {
    type: "keyframes",
    duration: .8
  },
  QN = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  FN = (t, {
    keyframes: i
  }) => i.length > 2 ? XN : ea.has(t) ? t.startsWith("scale") ? GN(i[1]) : YN : QN,
  KN = t => t !== null;

function ZN(t, {
  repeat: i,
  repeatType: a = "loop"
}, r) {
  const l = t.filter(KN),
    u = i && a !== "loop" && i % 2 === 1 ? 0 : l.length - 1;
  return l[u]
}

function A1(t, i) {
  if (t?.inherit && i) {
    const {
      inherit: a,
      ...r
    } = t;
    return {
      ...i,
      ...r
    }
  }
  return t
}

function ch(t, i) {
  const a = t?.[i] ?? t?.default ?? t;
  return a !== t ? A1(a, t) : a
}

function WN({
  when: t,
  delay: i,
  delayChildren: a,
  staggerChildren: r,
  staggerDirection: l,
  repeat: u,
  repeatType: f,
  repeatDelay: h,
  from: p,
  elapsed: m,
  ...g
}) {
  return !!Object.keys(g).length
}
const uh = (t, i, a, r = {}, l, u) => f => {
  const h = ch(r, t) || {},
    p = h.delay || r.delay || 0;
  let {
    elapsed: m = 0
  } = r;
  m = m - en(p);
  const g = {
    keyframes: Array.isArray(a) ? a : [null, a],
    ease: "easeOut",
    velocity: i.getVelocity(),
    ...h,
    delay: -m,
    onUpdate: b => {
      i.set(b), h.onUpdate && h.onUpdate(b)
    },
    onComplete: () => {
      f(), h.onComplete && h.onComplete()
    },
    name: t,
    motionValue: i,
    element: u ? void 0 : l
  };
  WN(h) || Object.assign(g, FN(t, g)), g.duration && (g.duration = en(g.duration)), g.repeatDelay && (g.repeatDelay =
    en(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let x = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (od(g), g.delay === 0 && (x = !0)), (Un
      .instantAnimations || Un.skipAnimations || l?.shouldSkipAnimations) && (x = !0, od(g), g.delay = 0), g
    .allowFlatten = !h.type && !h.ease, x && !u && i.get() !== void 0) {
    const b = ZN(g.keyframes, h);
    if (b !== void 0) {
      Ce.update(() => {
        g.onUpdate(b), g.onComplete()
      });
      return
    }
  }
  return h.isSync ? new ah(g) : new BN(g)
};

function Dv(t) {
  const i = [{}, {}];
  return t?.values.forEach((a, r) => {
    i[0][r] = a.get(), i[1][r] = a.getVelocity()
  }), i
}

function fh(t, i, a, r) {
  if (typeof i == "function") {
    const [l, u] = Dv(r);
    i = i(a !== void 0 ? a : t.custom, l, u)
  }
  if (typeof i == "string" && (i = t.variants && t.variants[i]), typeof i == "function") {
    const [l, u] = Dv(r);
    i = i(a !== void 0 ? a : t.custom, l, u)
  }
  return i
}

function Qs(t, i, a) {
  const r = t.getProps();
  return fh(r, i, a !== void 0 ? a : r.custom, t)
}
const E1 = new Set(["width", "height", "top", "left", "right", "bottom", ...Js]),
  _v = 30,
  $N = t => !isNaN(parseFloat(t));
class IN {
  constructor(i, a = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
      const l = pt.now();
      if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this
        .current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const u of this.dependents) u.dirty()
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = a.owner
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = pt.now(), this.canTrackVelocity === null && i !== void 0 && (this
      .canTrackVelocity = $N(this.current))
  }
  setPrevFrameValue(i = this.current) {
    this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt
  }
  onChange(i) {
    return this.on("change", i)
  }
  on(i, a) {
    this.events[i] || (this.events[i] = new Kd);
    const r = this.events[i].add(a);
    return i === "change" ? () => {
      r(), Ce.read(() => {
        this.events.change.getSize() || this.stop()
      })
    } : r
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear()
  }
  attach(i, a) {
    this.passiveEffect = i, this.stopPassiveEffect = a
  }
  set(i) {
    this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
  }
  setWithVelocity(i, a, r) {
    this.set(a), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - r
  }
  jump(i, a = !0) {
    this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, a && this.stop(), this
      .stopPassiveEffect && this.stopPassiveEffect()
  }
  dirty() {
    this.events.change?.notify(this.current)
  }
  addDependent(i) {
    this.dependents || (this.dependents = new Set), this.dependents.add(i)
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i)
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const i = pt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > _v) return 0;
    const a = Math.min(this.updatedAt - this.prevUpdatedAt, _v);
    return Zd(parseFloat(this.current) - parseFloat(this.prevFrameValue), a)
  }
  start(i) {
    return this.stop(), new Promise(a => {
      this.hasAnimated = !0, this.animation = i(a), this.events.animationStart && this.events.animationStart
        .notify()
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
    })
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this
      .stopPassiveEffect && this.stopPassiveEffect()
  }
}

function yn(t, i) {
  return new IN(t, i)
}
const ld = t => Array.isArray(t);

function JN(t, i, a) {
  t.hasValue(i) ? t.getValue(i).set(a) : t.addValue(i, yn(a))
}

function ej(t) {
  return ld(t) ? t[t.length - 1] || 0 : t
}

function tj(t, i) {
  const a = Qs(t, i);
  let {
    transitionEnd: r = {},
    transition: l = {},
    ...u
  } = a || {};
  u = {
    ...u,
    ...r
  };
  for (const f in u) {
    const h = ej(u[f]);
    JN(t, f, h)
  }
}
const dt = t => !!(t && t.getVelocity);

function nj(t) {
  return !!(dt(t) && t.add)
}

function cd(t, i) {
  const a = t.getValue("willChange");
  if (nj(a)) return a.add(i);
  if (!a && Un.WillChange) {
    const r = new Un.WillChange("auto");
    t.addValue("willChange", r), r.add(i)
  }
}

function dh(t) {
  return t.replace(/([A-Z])/g, i => `-${i.toLowerCase()}`)
}
const ij = "framerAppearId",
  C1 = "data-" + dh(ij);

function R1(t) {
  return t.props[C1]
}

function sj({
  protectedKeys: t,
  needsAnimating: i
}, a) {
  const r = t.hasOwnProperty(a) && i[a] !== !0;
  return i[a] = !1, r
}

function M1(t, i, {
  delay: a = 0,
  transitionOverride: r,
  type: l
} = {}) {
  let {
    transition: u,
    transitionEnd: f,
    ...h
  } = i;
  const p = t.getDefaultTransition();
  u = u ? A1(u, p) : p;
  const m = u?.reduceMotion;
  r && (u = r);
  const g = [],
    x = l && t.animationState && t.animationState.getState()[l];
  for (const b in h) {
    const T = t.getValue(b, t.latestValues[b] ?? null),
      E = h[b];
    if (E === void 0 || x && sj(x, b)) continue;
    const C = {
        delay: a,
        ...ch(u || {}, b)
      },
      M = T.get();
    if (M !== void 0 && !T.isAnimating && !Array.isArray(E) && E === M && !C.velocity) continue;
    let j = !1;
    if (window.MotionHandoffAnimation) {
      const k = R1(t);
      if (k) {
        const P = window.MotionHandoffAnimation(k, b, Ce);
        P !== null && (C.startTime = P, j = !0)
      }
    }
    cd(t, b);
    const _ = m ?? t.shouldReduceMotion;
    T.start(uh(b, T, E, _ && E1.has(b) ? {
      type: !1
    } : C, t, j));
    const D = T.animation;
    D && g.push(D)
  }
  if (f) {
    const b = () => Ce.update(() => {
      f && tj(t, f)
    });
    g.length ? Promise.all(g).then(b) : b()
  }
  return g
}

function ud(t, i, a = {}) {
  const r = Qs(t, i, a.type === "exit" ? t.presenceContext?.custom : void 0);
  let {
    transition: l = t.getDefaultTransition() || {}
  } = r || {};
  a.transitionOverride && (l = a.transitionOverride);
  const u = r ? () => Promise.all(M1(t, r, a)) : () => Promise.resolve(),
    f = t.variantChildren && t.variantChildren.size ? (p = 0) => {
      const {
        delayChildren: m = 0,
        staggerChildren: g,
        staggerDirection: x
      } = l;
      return aj(t, i, p, m, g, x, a)
    } : () => Promise.resolve(),
    {
      when: h
    } = l;
  if (h) {
    const [p, m] = h === "beforeChildren" ? [u, f] : [f, u];
    return p().then(() => m())
  } else return Promise.all([u(), f(a.delay)])
}

function aj(t, i, a = 0, r = 0, l = 0, u = 1, f) {
  const h = [];
  for (const p of t.variantChildren) p.notify("AnimationStart", i), h.push(ud(p, i, {
    ...f,
    delay: a + (typeof r == "function" ? 0 : r) + S1(t.variantChildren, p, r, l, u)
  }).then(() => p.notify("AnimationComplete", i)));
  return Promise.all(h)
}

function rj(t, i, a = {}) {
  t.notify("AnimationStart", i);
  let r;
  if (Array.isArray(i)) {
    const l = i.map(u => ud(t, u, a));
    r = Promise.all(l)
  } else if (typeof i == "string") r = ud(t, i, a);
  else {
    const l = typeof i == "function" ? Qs(t, i, a.custom) : i;
    r = Promise.all(M1(t, l, a))
  }
  return r.then(() => {
    t.notify("AnimationComplete", i)
  })
}
const oj = {
    test: t => t === "auto",
    parse: t => t
  },
  N1 = t => i => i.test(t),
  j1 = [Is, ie, xn, yi, BM, UM, oj],
  zv = t => j1.find(N1(t));

function lj(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Bb(t) : !0
}
const cj = new Set(["brightness", "contrast", "saturate", "opacity"]);

function uj(t) {
  const [i, a] = t.slice(0, -1).split("(");
  if (i === "drop-shadow") return t;
  const [r] = a.match(Jd) || [];
  if (!r) return t;
  const l = a.replace(r, "");
  let u = cj.has(i) ? 1 : 0;
  return r !== a && (u *= 100), i + "(" + u + l + ")"
}
const fj = /\b([a-z-]*)\(.*?\)/gu,
  fd = {
    ...tn,
    getAnimatableNone: t => {
      const i = t.match(fj);
      return i ? i.map(uj).join(" ") : t
    }
  },
  dd = {
    ...tn,
    getAnimatableNone: t => {
      const i = tn.parse(t);
      return tn.createTransformer(t)(i.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
        ...r,
        alpha: 1
      } : r))
    }
  },
  Vv = {
    ...Is,
    transform: Math.round
  },
  dj = {
    rotate: yi,
    rotateX: yi,
    rotateY: yi,
    rotateZ: yi,
    scale: Qo,
    scaleX: Qo,
    scaleY: Qo,
    scaleZ: Qo,
    skew: yi,
    skewX: yi,
    skewY: yi,
    distance: ie,
    translateX: ie,
    translateY: ie,
    translateZ: ie,
    x: ie,
    y: ie,
    z: ie,
    perspective: ie,
    transformPerspective: ie,
    opacity: hr,
    originX: wv,
    originY: wv,
    originZ: ie
  },
  hh = {
    borderWidth: ie,
    borderTopWidth: ie,
    borderRightWidth: ie,
    borderBottomWidth: ie,
    borderLeftWidth: ie,
    borderRadius: ie,
    borderTopLeftRadius: ie,
    borderTopRightRadius: ie,
    borderBottomRightRadius: ie,
    borderBottomLeftRadius: ie,
    width: ie,
    maxWidth: ie,
    height: ie,
    maxHeight: ie,
    top: ie,
    right: ie,
    bottom: ie,
    left: ie,
    inset: ie,
    insetBlock: ie,
    insetBlockStart: ie,
    insetBlockEnd: ie,
    insetInline: ie,
    insetInlineStart: ie,
    insetInlineEnd: ie,
    padding: ie,
    paddingTop: ie,
    paddingRight: ie,
    paddingBottom: ie,
    paddingLeft: ie,
    paddingBlock: ie,
    paddingBlockStart: ie,
    paddingBlockEnd: ie,
    paddingInline: ie,
    paddingInlineStart: ie,
    paddingInlineEnd: ie,
    margin: ie,
    marginTop: ie,
    marginRight: ie,
    marginBottom: ie,
    marginLeft: ie,
    marginBlock: ie,
    marginBlockStart: ie,
    marginBlockEnd: ie,
    marginInline: ie,
    marginInlineStart: ie,
    marginInlineEnd: ie,
    fontSize: ie,
    backgroundPositionX: ie,
    backgroundPositionY: ie,
    ...dj,
    zIndex: Vv,
    fillOpacity: hr,
    strokeOpacity: hr,
    numOctaves: Vv
  },
  hj = {
    ...hh,
    color: Ze,
    backgroundColor: Ze,
    outlineColor: Ze,
    fill: Ze,
    stroke: Ze,
    borderColor: Ze,
    borderTopColor: Ze,
    borderRightColor: Ze,
    borderBottomColor: Ze,
    borderLeftColor: Ze,
    filter: fd,
    WebkitFilter: fd,
    mask: dd,
    WebkitMask: dd
  },
  O1 = t => hj[t],
  mj = new Set([fd, dd]);

function D1(t, i) {
  let a = O1(t);
  return mj.has(a) || (a = tn), a.getAnimatableNone ? a.getAnimatableNone(i) : void 0
}
const pj = new Set(["auto", "none", "0"]);

function gj(t, i, a) {
  let r = 0,
    l;
  for (; r < t.length && !l;) {
    const u = t[r];
    typeof u == "string" && !pj.has(u) && mr(u).values.length && (l = t[r]), r++
  }
  if (l && a)
    for (const u of i) t[u] = D1(a, l)
}
class yj extends rh {
  constructor(i, a, r, l, u) {
    super(i, a, r, l, u, !0)
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      element: a,
      name: r
    } = this;
    if (!a || !a.current) return;
    super.readKeyframes();
    for (let g = 0; g < i.length; g++) {
      let x = i[g];
      if (typeof x == "string" && (x = x.trim(), Id(x))) {
        const b = T1(x, a.current);
        b !== void 0 && (i[g] = b), g === i.length - 1 && (this.finalKeyframe = x)
      }
    }
    if (this.resolveNoneKeyframes(), !E1.has(r) || i.length !== 2) return;
    const [l, u] = i, f = zv(l), h = zv(u), p = bv(l), m = bv(u);
    if (p !== m && vi[r]) {
      this.needsMeasurement = !0;
      return
    }
    if (f !== h)
      if (Nv(f) && Nv(h))
        for (let g = 0; g < i.length; g++) {
          const x = i[g];
          typeof x == "string" && (i[g] = parseFloat(x))
        } else vi[r] && (this.needsMeasurement = !0)
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: a
    } = this, r = [];
    for (let l = 0; l < i.length; l++)(i[l] === null || lj(i[l])) && r.push(l);
    r.length && gj(i, r, a)
  }
  measureInitialState() {
    const {
      element: i,
      unresolvedKeyframes: a,
      name: r
    } = this;
    if (!i || !i.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = vi[r](i
      .measureViewportBox(), window.getComputedStyle(i.current)), a[0] = this.measuredOrigin;
    const l = a[a.length - 1];
    l !== void 0 && i.getValue(r, l).jump(l, !1)
  }
  measureEndState() {
    const {
      element: i,
      name: a,
      unresolvedKeyframes: r
    } = this;
    if (!i || !i.current) return;
    const l = i.getValue(a);
    l && l.jump(this.measuredOrigin, !1);
    const u = r.length - 1,
      f = r[u];
    r[u] = vi[a](i.measureViewportBox(), window.getComputedStyle(i.current)), f !== null && this.finalKeyframe ===
      void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([h,
        p
      ]) => {
        i.getValue(h).set(p)
      }), this.resolveNoneKeyframes()
  }
}
const vj = new Set(["opacity", "clipPath", "filter", "transform"]);

function _1(t, i, a) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    const l = document.querySelectorAll(t);
    return l ? Array.from(l) : []
  }
  return Array.from(t).filter(r => r != null)
}
const z1 = (t, i) => i && typeof t == "number" ? i.transform(t) : t;

function vl(t) {
  return Ub(t) && "offsetHeight" in t
}
const {
  schedule: mh
} = Ib(queueMicrotask, !1), It = {
  x: !1,
  y: !1
};

function V1() {
  return It.x || It.y
}

function xj(t) {
  return t === "x" || t === "y" ? It[t] ? null : (It[t] = !0, () => {
    It[t] = !1
  }) : It.x || It.y ? null : (It.x = It.y = !0, () => {
    It.x = It.y = !1
  })
}

function L1(t, i) {
  const a = _1(t),
    r = new AbortController,
    l = {
      passive: !0,
      ...i,
      signal: r.signal
    };
  return [a, l, () => r.abort()]
}

function bj(t) {
  return !(t.pointerType === "touch" || V1())
}

function wj(t, i, a = {}) {
  const [r, l, u] = L1(t, a);
  return r.forEach(f => {
    let h = !1,
      p = !1,
      m;
    const g = () => {
        f.removeEventListener("pointerleave", E)
      },
      x = M => {
        m && (m(M), m = void 0), g()
      },
      b = M => {
        h = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), p && (
          p = !1, x(M))
      },
      T = () => {
        h = !0, window.addEventListener("pointerup", b, l), window.addEventListener("pointercancel", b, l)
      },
      E = M => {
        if (M.pointerType !== "touch") {
          if (h) {
            p = !0;
            return
          }
          x(M)
        }
      },
      C = M => {
        if (!bj(M)) return;
        p = !1;
        const j = i(f, M);
        typeof j == "function" && (m = j, f.addEventListener("pointerleave", E, l))
      };
    f.addEventListener("pointerenter", C, l), f.addEventListener("pointerdown", T, l)
  }), u
}
const k1 = (t, i) => i ? t === i ? !0 : k1(t, i.parentElement) : !1,
  ph = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
  Sj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Tj(t) {
  return Sj.has(t.tagName) || t.isContentEditable === !0
}
const Aj = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function Ej(t) {
  return Aj.has(t.tagName) || t.isContentEditable === !0
}
const tl = new WeakSet;

function Lv(t) {
  return i => {
    i.key === "Enter" && t(i)
  }
}

function Tf(t, i) {
  t.dispatchEvent(new PointerEvent("pointer" + i, {
    isPrimary: !0,
    bubbles: !0
  }))
}
const Cj = (t, i) => {
  const a = t.currentTarget;
  if (!a) return;
  const r = Lv(() => {
    if (tl.has(a)) return;
    Tf(a, "down");
    const l = Lv(() => {
        Tf(a, "up")
      }),
      u = () => Tf(a, "cancel");
    a.addEventListener("keyup", l, i), a.addEventListener("blur", u, i)
  });
  a.addEventListener("keydown", r, i), a.addEventListener("blur", () => a.removeEventListener("keydown", r), i)
};

function kv(t) {
  return ph(t) && !V1()
}
const Pv = new WeakSet;

function Rj(t, i, a = {}) {
  const [r, l, u] = L1(t, a), f = h => {
    const p = h.currentTarget;
    if (!kv(h) || Pv.has(h)) return;
    tl.add(p), a.stopPropagation && Pv.add(h);
    const m = i(p, h),
      g = (T, E) => {
        window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", b), tl.has(p) && tl
          .delete(p), kv(T) && typeof m == "function" && m(T, {
            success: E
          })
      },
      x = T => {
        g(T, p === window || p === document || a.useGlobalTarget || k1(p, T.target))
      },
      b = T => {
        g(T, !1)
      };
    window.addEventListener("pointerup", x, l), window.addEventListener("pointercancel", b, l)
  };
  return r.forEach(h => {
    (a.useGlobalTarget ? window : h).addEventListener("pointerdown", f, l), vl(h) && (h.addEventListener("focus",
      m => Cj(m, l)), !Tj(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0))
  }), u
}

function gh(t) {
  return Ub(t) && "ownerSVGElement" in t
}
const nl = new WeakMap;
let il;
const P1 = (t, i, a) => (r, l) => l && l[0] ? l[0][t + "Size"] : gh(r) && "getBBox" in r ? r.getBBox()[i] : r[a],
  Mj = P1("inline", "width", "offsetWidth"),
  Nj = P1("block", "height", "offsetHeight");

function jj({
  target: t,
  borderBoxSize: i
}) {
  nl.get(t)?.forEach(a => {
    a(t, {
      get width() {
        return Mj(t, i)
      },
      get height() {
        return Nj(t, i)
      }
    })
  })
}

function Oj(t) {
  t.forEach(jj)
}

function Dj() {
  typeof ResizeObserver > "u" || (il = new ResizeObserver(Oj))
}

function _j(t, i) {
  il || Dj();
  const a = _1(t);
  return a.forEach(r => {
    let l = nl.get(r);
    l || (l = new Set, nl.set(r, l)), l.add(i), il?.observe(r)
  }), () => {
    a.forEach(r => {
      const l = nl.get(r);
      l?.delete(i), l?.size || il?.unobserve(r)
    })
  }
}
const sl = new Set;
let Hs;

function zj() {
  Hs = () => {
    const t = {
      get width() {
        return window.innerWidth
      },
      get height() {
        return window.innerHeight
      }
    };
    sl.forEach(i => i(t))
  }, window.addEventListener("resize", Hs)
}

function Vj(t) {
  return sl.add(t), Hs || zj(), () => {
    sl.delete(t), !sl.size && typeof Hs == "function" && (window.removeEventListener("resize", Hs), Hs = void 0)
  }
}

function hd(t, i) {
  return typeof t == "function" ? Vj(t) : _j(t, i)
}

function U1(t, i) {
  let a;
  const r = () => {
    const {
      currentTime: l
    } = i, f = (l === null ? 0 : l.value) / 100;
    a !== f && t(f), a = f
  };
  return Ce.preUpdate(r, !0), () => on(r)
}

function Lj(t) {
  return gh(t) && t.tagName === "svg"
}
const kj = [...j1, Ze, tn],
  Pj = t => kj.find(N1(t)),
  Uv = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }),
  qs = () => ({
    x: Uv(),
    y: Uv()
  }),
  Bv = () => ({
    min: 0,
    max: 0
  }),
  Je = () => ({
    x: Bv(),
    y: Bv()
  }),
  Uj = new WeakMap;

function Hl(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function"
}

function pr(t) {
  return typeof t == "string" || Array.isArray(t)
}
const yh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  vh = ["initial", ...yh];

function ql(t) {
  return Hl(t.animate) || vh.some(i => pr(t[i]))
}

function B1(t) {
  return !!(ql(t) || t.variants)
}

function Bj(t, i, a) {
  for (const r in i) {
    const l = i[r],
      u = a[r];
    if (dt(l)) t.addValue(r, l);
    else if (dt(u)) t.addValue(r, yn(l, {
      owner: t
    }));
    else if (u !== l)
      if (t.hasValue(r)) {
        const f = t.getValue(r);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l)
      } else {
        const f = t.getStaticValue(r);
        t.addValue(r, yn(f !== void 0 ? f : l, {
          owner: t
        }))
      }
  }
  for (const r in a) i[r] === void 0 && t.removeValue(r);
  return i
}
const md = {
    current: null
  },
  H1 = {
    current: !1
  },
  Hj = typeof window < "u";

function qj() {
  if (H1.current = !0, !!Hj)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        i = () => md.current = t.matches;
      t.addEventListener("change", i), i()
    } else md.current = !1
}
const Hv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure",
  "LayoutAnimationStart", "LayoutAnimationComplete"
];
let xl = {};

function q1(t) {
  xl = t
}

function Yj() {
  return xl
}
class Gj {
  scrapeMotionValuesFromProps(i, a, r) {
    return {}
  }
  constructor({
    parent: i,
    props: a,
    presenceContext: r,
    reducedMotionConfig: l,
    skipAnimations: u,
    blockInitialAnimation: f,
    visualState: h
  }, p = {}) {
    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this
      .shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = rh,
      this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1,
      this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this
        .latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style,
          this.projection))
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        const T = pt.now();
        this.renderScheduledAt < T && (this.renderScheduledAt = T, Ce.render(this.render, !1, !0))
      };
    const {
      latestValues: m,
      renderState: g
    } = h;
    this.latestValues = m, this.baseTarget = {
        ...m
      }, this.initialValues = a.initial ? {
        ...m
      } : {}, this.renderState = g, this.parent = i, this.props = a, this.presenceContext = r, this.depth = i ? i
      .depth + 1 : 0, this.reducedMotionConfig = l, this.skipAnimationsConfig = u, this.options = p, this
      .blockInitialAnimation = !!f, this.isControllingVariants = ql(a), this.isVariantNode = B1(a), this
      .isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(i && i.current);
    const {
      willChange: x,
      ...b
    } = this.scrapeMotionValuesFromProps(a, {}, this);
    for (const T in b) {
      const E = b[T];
      m[T] !== void 0 && dt(E) && E.set(m[T])
    }
  }
  mount(i) {
    if (this.hasBeenMounted)
      for (const a in this.initialValues) this.values.get(a)?.jump(this.initialValues[a]), this.latestValues[a] = this
        .initialValues[a];
    this.current = i, Uj.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this
      .parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent
        .addVariantChild(this)), this.values.forEach((a, r) => this.bindToMotionValue(r, a)), this
      .reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this
      .shouldReduceMotion = !0 : (H1.current || qj(), this.shouldReduceMotion = md.current), this
      .shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props,
        this.presenceContext), this.hasBeenMounted = !0
  }
  unmount() {
    this.projection && this.projection.unmount(), on(this.notifyUpdate), on(this.render), this.valueSubscriptions
      .forEach(i => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this);
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const a = this.features[i];
      a && (a.unmount(), a.isMounted = !1)
    }
    this.current = null
  }
  addChild(i) {
    this.children.add(i), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(i)
  }
  removeChild(i) {
    this.children.delete(i), this.enteringChildren && this.enteringChildren.delete(i)
  }
  bindToMotionValue(i, a) {
    if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(), a.accelerate && vj.has(i) && this
      .current instanceof HTMLElement) {
      const {
        factory: f,
        keyframes: h,
        times: p,
        ease: m,
        duration: g
      } = a.accelerate, x = new b1({
        element: this.current,
        name: i,
        keyframes: h,
        times: p,
        ease: m,
        duration: en(g)
      }), b = f(x);
      this.valueSubscriptions.set(i, () => {
        b(), x.cancel()
      });
      return
    }
    const r = ea.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const l = a.on("change", f => {
      this.latestValues[i] = f, this.props.onUpdate && Ce.preRender(this.notifyUpdate), r && this.projection && (
        this.projection.isTransformDirty = !0), this.scheduleRender()
    });
    let u;
    typeof window < "u" && window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, i, a)), this
      .valueSubscriptions.set(i, () => {
        l(), u && u(), a.owner && a.stop()
      })
  }
  sortNodePosition(i) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this
      .sortInstanceNodePosition(this.current, i.current)
  }
  updateFeatures() {
    let i = "animation";
    for (i in xl) {
      const a = xl[i];
      if (!a) continue;
      const {
        isEnabled: r,
        Feature: l
      } = a;
      if (!this.features[i] && l && r(this.props) && (this.features[i] = new l(this)), this.features[i]) {
        const u = this.features[i];
        u.isMounted ? u.update() : (u.mount(), u.isMounted = !0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Je()
  }
  getStaticValue(i) {
    return this.latestValues[i]
  }
  setStaticValue(i, a) {
    this.latestValues[i] = a
  }
  update(i, a) {
    (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this
      .props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = a;
    for (let r = 0; r < Hv.length; r++) {
      const l = Hv[r];
      this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
      const u = "on" + l,
        f = i[u];
      f && (this.propEventSubscriptions[l] = this.on(l, f))
    }
    this.prevMotionValues = Bj(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this
      .prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(i) {
    const a = this.getClosestVariantNode();
    if (a) return a.variantChildren && a.variantChildren.add(i), () => a.variantChildren.delete(i)
  }
  addValue(i, a) {
    const r = this.values.get(i);
    a !== r && (r && this.removeValue(i), this.bindToMotionValue(i, a), this.values.set(i, a), this.latestValues[i] =
      a.get())
  }
  removeValue(i) {
    this.values.delete(i);
    const a = this.valueSubscriptions.get(i);
    a && (a(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i,
      this.renderState)
  }
  hasValue(i) {
    return this.values.has(i)
  }
  getValue(i, a) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let r = this.values.get(i);
    return r === void 0 && a !== void 0 && (r = yn(a === null ? void 0 : a, {
      owner: this
    }), this.addValue(i, r)), r
  }
  readValue(i, a) {
    let r = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this
      .props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return r != null && (typeof r == "string" && (Pb(r) || Bb(r)) ? r = parseFloat(r) : !Pj(r) && tn.test(a) && (r =
      D1(i, a)), this.setBaseTarget(i, dt(r) ? r.get() : r)), dt(r) ? r.get() : r
  }
  setBaseTarget(i, a) {
    this.baseTarget[i] = a
  }
  getBaseTarget(i) {
    const {
      initial: a
    } = this.props;
    let r;
    if (typeof a == "string" || typeof a == "object") {
      const u = fh(this.props, a, this.presenceContext?.custom);
      u && (r = u[i])
    }
    if (a && r !== void 0) return r;
    const l = this.getBaseTargetFromProps(this.props, i);
    return l !== void 0 && !dt(l) ? l : this.initialValues[i] !== void 0 && r === void 0 ? void 0 : this.baseTarget[i]
  }
  on(i, a) {
    return this.events[i] || (this.events[i] = new Kd), this.events[i].add(a)
  }
  notify(i, ...a) {
    this.events[i] && this.events[i].notify(...a)
  }
  scheduleRenderMicrotask() {
    mh.render(this.render)
  }
}
class Y1 extends Gj {
  constructor() {
    super(...arguments), this.KeyframeResolver = yj
  }
  sortInstanceNodePosition(i, a) {
    return i.compareDocumentPosition(a) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(i, a) {
    const r = i.style;
    return r ? r[a] : void 0
  }
  removeValueFromRenderState(i, {
    vars: a,
    style: r
  }) {
    delete a[i], delete r[i]
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const {
      children: i
    } = this.props;
    dt(i) && (this.childSubscription = i.on("change", a => {
      this.current && (this.current.textContent = `${a}`)
    }))
  }
}
class Ai {
  constructor(i) {
    this.isMounted = !1, this.node = i
  }
  update() {}
}

function G1({
  top: t,
  left: i,
  right: a,
  bottom: r
}) {
  return {
    x: {
      min: i,
      max: a
    },
    y: {
      min: t,
      max: r
    }
  }
}

function Xj({
  x: t,
  y: i
}) {
  return {
    top: i.min,
    right: t.max,
    bottom: i.max,
    left: t.min
  }
}

function Qj(t, i) {
  if (!i) return t;
  const a = i({
      x: t.left,
      y: t.top
    }),
    r = i({
      x: t.right,
      y: t.bottom
    });
  return {
    top: a.y,
    left: a.x,
    bottom: r.y,
    right: r.x
  }
}

function Af(t) {
  return t === void 0 || t === 1
}

function pd({
  scale: t,
  scaleX: i,
  scaleY: a
}) {
  return !Af(t) || !Af(i) || !Af(a)
}

function Qi(t) {
  return pd(t) || X1(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function X1(t) {
  return qv(t.x) || qv(t.y)
}

function qv(t) {
  return t && t !== "0%"
}

function bl(t, i, a) {
  const r = t - a,
    l = i * r;
  return a + l
}

function Yv(t, i, a, r, l) {
  return l !== void 0 && (t = bl(t, l, r)), bl(t, a, r) + i
}

function gd(t, i = 0, a = 1, r, l) {
  t.min = Yv(t.min, i, a, r, l), t.max = Yv(t.max, i, a, r, l)
}

function Q1(t, {
  x: i,
  y: a
}) {
  gd(t.x, i.translate, i.scale, i.originPoint), gd(t.y, a.translate, a.scale, a.originPoint)
}
const Gv = .999999999999,
  Xv = 1.0000000000001;

function Fj(t, i, a, r = !1) {
  const l = a.length;
  if (!l) return;
  i.x = i.y = 1;
  let u, f;
  for (let h = 0; h < l; h++) {
    u = a[h], f = u.projectionDelta;
    const {
      visualElement: p
    } = u.options;
    p && p.props.style && p.props.style.display === "contents" || (r && u.options.layoutScroll && u.scroll && u !== u
      .root && Gs(t, {
        x: -u.scroll.offset.x,
        y: -u.scroll.offset.y
      }), f && (i.x *= f.x.scale, i.y *= f.y.scale, Q1(t, f)), r && Qi(u.latestValues) && Gs(t, u.latestValues))
  }
  i.x < Xv && i.x > Gv && (i.x = 1), i.y < Xv && i.y > Gv && (i.y = 1)
}

function Ys(t, i) {
  t.min = t.min + i, t.max = t.max + i
}

function Qv(t, i, a, r, l = .5) {
  const u = Be(t.min, t.max, l);
  gd(t, i, a, u, r)
}

function Fv(t, i) {
  return typeof t == "string" ? parseFloat(t) / 100 * (i.max - i.min) : t
}

function Gs(t, i) {
  Qv(t.x, Fv(i.x, t.x), i.scaleX, i.scale, i.originX), Qv(t.y, Fv(i.y, t.y), i.scaleY, i.scale, i.originY)
}

function F1(t, i) {
  return G1(Qj(t.getBoundingClientRect(), i))
}

function Kj(t, i, a) {
  const r = F1(t, a),
    {
      scroll: l
    } = i;
  return l && (Ys(r.x, l.offset.x), Ys(r.y, l.offset.y)), r
}
const Zj = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  Wj = Js.length;

function $j(t, i, a) {
  let r = "",
    l = !0;
  for (let u = 0; u < Wj; u++) {
    const f = Js[u],
      h = t[f];
    if (h === void 0) continue;
    let p = !0;
    if (typeof h == "number") p = h === (f.startsWith("scale") ? 1 : 0);
    else {
      const m = parseFloat(h);
      p = f.startsWith("scale") ? m === 1 : m === 0
    }
    if (!p || a) {
      const m = z1(h, hh[f]);
      if (!p) {
        l = !1;
        const g = Zj[f] || f;
        r += `${g}(${m}) `
      }
      a && (i[f] = m)
    }
  }
  return r = r.trim(), a ? r = a(i, l ? "" : r) : l && (r = "none"), r
}

function xh(t, i, a) {
  const {
    style: r,
    vars: l,
    transformOrigin: u
  } = t;
  let f = !1,
    h = !1;
  for (const p in i) {
    const m = i[p];
    if (ea.has(p)) {
      f = !0;
      continue
    } else if (e1(p)) {
      l[p] = m;
      continue
    } else {
      const g = z1(m, hh[p]);
      p.startsWith("origin") ? (h = !0, u[p] = g) : r[p] = g
    }
  }
  if (i.transform || (f || a ? r.transform = $j(i, t.transform, a) : r.transform && (r.transform = "none")), h) {
    const {
      originX: p = "50%",
      originY: m = "50%",
      originZ: g = 0
    } = u;
    r.transformOrigin = `${p} ${m} ${g}`
  }
}

function K1(t, {
  style: i,
  vars: a
}, r, l) {
  const u = t.style;
  let f;
  for (f in i) u[f] = i[f];
  l?.applyProjectionStyles(u, r);
  for (f in a) u.setProperty(f, a[f])
}

function Kv(t, i) {
  return i.max === i.min ? 0 : t / (i.max - i.min) * 100
}
const tr = {
    correct: (t, i) => {
      if (!i.target) return t;
      if (typeof t == "string")
        if (ie.test(t)) t = parseFloat(t);
        else return t;
      const a = Kv(t, i.target.x),
        r = Kv(t, i.target.y);
      return `${a}% ${r}%`
    }
  },
  Ij = {
    correct: (t, {
      treeScale: i,
      projectionDelta: a
    }) => {
      const r = t,
        l = tn.parse(t);
      if (l.length > 5) return r;
      const u = tn.createTransformer(t),
        f = typeof l[0] != "number" ? 1 : 0,
        h = a.x.scale * i.x,
        p = a.y.scale * i.y;
      l[0 + f] /= h, l[1 + f] /= p;
      const m = Be(h, p, .5);
      return typeof l[2 + f] == "number" && (l[2 + f] /= m), typeof l[3 + f] == "number" && (l[3 + f] /= m), u(l)
    }
  },
  yd = {
    borderRadius: {
      ...tr,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: tr,
    borderTopRightRadius: tr,
    borderBottomLeftRadius: tr,
    borderBottomRightRadius: tr,
    boxShadow: Ij
  };

function Z1(t, {
  layout: i,
  layoutId: a
}) {
  return ea.has(t) || t.startsWith("origin") || (i || a !== void 0) && (!!yd[t] || t === "opacity")
}

function bh(t, i, a) {
  const r = t.style,
    l = i?.style,
    u = {};
  if (!r) return u;
  for (const f in r)(dt(r[f]) || l && dt(l[f]) || Z1(f, t) || a?.getValue(f)?.liveStyle !== void 0) && (u[f] = r[f]);
  return u
}

function Jj(t) {
  return window.getComputedStyle(t)
}
class eO extends Y1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = K1
  }
  readValueFromInstance(i, a) {
    if (ea.has(a)) return this.projection?.isProjecting ? nd(a) : wN(i, a);
    {
      const r = Jj(i),
        l = (e1(a) ? r.getPropertyValue(a) : r[a]) || 0;
      return typeof l == "string" ? l.trim() : l
    }
  }
  measureInstanceViewportBox(i, {
    transformPagePoint: a
  }) {
    return F1(i, a)
  }
  build(i, a, r) {
    xh(i, a, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(i, a, r) {
    return bh(i, a, r)
  }
}
const tO = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  },
  nO = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };

function iO(t, i, a = 1, r = 0, l = !0) {
  t.pathLength = 1;
  const u = l ? tO : nO;
  t[u.offset] = `${-r}`, t[u.array] = `${i} ${a}`
}
const sO = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function W1(t, {
  attrX: i,
  attrY: a,
  attrScale: r,
  pathLength: l,
  pathSpacing: u = 1,
  pathOffset: f = 0,
  ...h
}, p, m, g) {
  if (xh(t, h, m), p) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return
  }
  t.attrs = t.style, t.style = {};
  const {
    attrs: x,
    style: b
  } = t;
  x.transform && (b.transform = x.transform, delete x.transform), (b.transform || x.transformOrigin) && (b
    .transformOrigin = x.transformOrigin ?? "50% 50%", delete x.transformOrigin), b.transform && (b.transformBox = g
    ?.transformBox ?? "fill-box", delete x.transformBox);
  for (const T of sO) x[T] !== void 0 && (b[T] = x[T], delete x[T]);
  i !== void 0 && (x.x = i), a !== void 0 && (x.y = a), r !== void 0 && (x.scale = r), l !== void 0 && iO(x, l, u, f, !
    1)
}
const $1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes",
    "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale",
    "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform",
    "pathLength", "startOffset", "textLength", "lengthAdjust"
  ]),
  I1 = t => typeof t == "string" && t.toLowerCase() === "svg";

function aO(t, i, a, r) {
  K1(t, i, void 0, r);
  for (const l in i.attrs) t.setAttribute($1.has(l) ? l : dh(l), i.attrs[l])
}

function J1(t, i, a) {
  const r = bh(t, i, a);
  for (const l in t)
    if (dt(t[l]) || dt(i[l])) {
      const u = Js.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
      r[u] = t[l]
    } return r
}
class rO extends Y1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Je
  }
  getBaseTargetFromProps(i, a) {
    return i[a]
  }
  readValueFromInstance(i, a) {
    if (ea.has(a)) {
      const r = O1(a);
      return r && r.default || 0
    }
    return a = $1.has(a) ? a : dh(a), i.getAttribute(a)
  }
  scrapeMotionValuesFromProps(i, a, r) {
    return J1(i, a, r)
  }
  build(i, a, r) {
    W1(i, a, this.isSVGTag, r.transformTemplate, r.style)
  }
  renderInstance(i, a, r, l) {
    aO(i, a, r, l)
  }
  mount(i) {
    this.isSVGTag = I1(i.tagName), super.mount(i)
  }
}
const oO = vh.length;

function ew(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const a = t.parent ? ew(t.parent) || {} : {};
    return t.props.initial !== void 0 && (a.initial = t.props.initial), a
  }
  const i = {};
  for (let a = 0; a < oO; a++) {
    const r = vh[a],
      l = t.props[r];
    (pr(l) || l === !1) && (i[r] = l)
  }
  return i
}

function tw(t, i) {
  if (!Array.isArray(i)) return !1;
  const a = i.length;
  if (a !== t.length) return !1;
  for (let r = 0; r < a; r++)
    if (i[r] !== t[r]) return !1;
  return !0
}
const lO = [...yh].reverse(),
  cO = yh.length;

function uO(t) {
  return i => Promise.all(i.map(({
    animation: a,
    options: r
  }) => rj(t, a, r)))
}

function fO(t) {
  let i = uO(t),
    a = Zv(),
    r = !0,
    l = !1;
  const u = m => (g, x) => {
    const b = Qs(t, x, m === "exit" ? t.presenceContext?.custom : void 0);
    if (b) {
      const {
        transition: T,
        transitionEnd: E,
        ...C
      } = b;
      g = {
        ...g,
        ...C,
        ...E
      }
    }
    return g
  };

  function f(m) {
    i = m(t)
  }

  function h(m) {
    const {
      props: g
    } = t, x = ew(t.parent) || {}, b = [], T = new Set;
    let E = {},
      C = 1 / 0;
    for (let j = 0; j < cO; j++) {
      const _ = lO[j],
        D = a[_],
        k = g[_] !== void 0 ? g[_] : x[_],
        P = pr(k),
        F = _ === m ? D.isActive : null;
      F === !1 && (C = j);
      let Z = k === x[_] && k !== g[_] && P;
      if (Z && (r || l) && t.manuallyAnimateOnMount && (Z = !1), D.protectedKeys = {
          ...E
        }, !D.isActive && F === null || !k && !D.prevProp || Hl(k) || typeof k == "boolean") continue;
      if (_ === "exit" && D.isActive && F !== !0) {
        D.prevResolvedValues && (E = {
          ...E,
          ...D.prevResolvedValues
        });
        continue
      }
      const H = dO(D.prevProp, k);
      let W = H || _ === m && D.isActive && !Z && P || j > C && P,
        oe = !1;
      const pe = Array.isArray(k) ? k : [k];
      let ce = pe.reduce(u(_), {});
      F === !1 && (ce = {});
      const {
        prevResolvedValues: xe = {}
      } = D, J = {
        ...xe,
        ...ce
      }, fe = X => {
        W = !0, T.has(X) && (oe = !0, T.delete(X)), D.needsAnimating[X] = !0;
        const ee = t.getValue(X);
        ee && (ee.liveStyle = !1)
      };
      for (const X in J) {
        const ee = ce[X],
          A = xe[X];
        if (E.hasOwnProperty(X)) continue;
        let Y = !1;
        ld(ee) && ld(A) ? Y = !tw(ee, A) : Y = ee !== A, Y ? ee != null ? fe(X) : T.add(X) : ee !== void 0 && T.has(X) ?
          fe(X) : D.protectedKeys[X] = !0
      }
      D.prevProp = k, D.prevResolvedValues = ce, D.isActive && (E = {
        ...E,
        ...ce
      }), (r || l) && t.blockInitialAnimation && (W = !1);
      const z = Z && H;
      W && (!z || oe) && b.push(...pe.map(X => {
        const ee = {
          type: _
        };
        if (typeof X == "string" && (r || l) && !z && t.manuallyAnimateOnMount && t.parent) {
          const {
            parent: A
          } = t, Y = Qs(A, X);
          if (A.enteringChildren && Y) {
            const {
              delayChildren: I
            } = Y.transition || {};
            ee.delay = S1(A.enteringChildren, t, I)
          }
        }
        return {
          animation: X,
          options: ee
        }
      }))
    }
    if (T.size) {
      const j = {};
      if (typeof g.initial != "boolean") {
        const _ = Qs(t, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        _ && _.transition && (j.transition = _.transition)
      }
      T.forEach(_ => {
        const D = t.getBaseTarget(_),
          k = t.getValue(_);
        k && (k.liveStyle = !0), j[_] = D ?? null
      }), b.push({
        animation: j
      })
    }
    let M = !!b.length;
    return r && (g.initial === !1 || g.initial === g.animate) && !t.manuallyAnimateOnMount && (M = !1), r = !1, l = !1,
      M ? i(b) : Promise.resolve()
  }

  function p(m, g) {
    if (a[m].isActive === g) return Promise.resolve();
    t.variantChildren?.forEach(b => b.animationState?.setActive(m, g)), a[m].isActive = g;
    const x = h(m);
    for (const b in a) a[b].protectedKeys = {};
    return x
  }
  return {
    animateChanges: h,
    setActive: p,
    setAnimateFunction: f,
    getState: () => a,
    reset: () => {
      a = Zv(), l = !0
    }
  }
}

function dO(t, i) {
  return typeof i == "string" ? i !== t : Array.isArray(i) ? !tw(i, t) : !1
}

function Xi(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}

function Zv() {
  return {
    animate: Xi(!0),
    whileInView: Xi(),
    whileHover: Xi(),
    whileTap: Xi(),
    whileDrag: Xi(),
    whileFocus: Xi(),
    exit: Xi()
  }
}

function Wv(t, i) {
  t.min = i.min, t.max = i.max
}

function $t(t, i) {
  Wv(t.x, i.x), Wv(t.y, i.y)
}

function $v(t, i) {
  t.translate = i.translate, t.scale = i.scale, t.originPoint = i.originPoint, t.origin = i.origin
}
const nw = 1e-4,
  hO = 1 - nw,
  mO = 1 + nw,
  iw = .01,
  pO = 0 - iw,
  gO = 0 + iw;

function gt(t) {
  return t.max - t.min
}

function yO(t, i, a) {
  return Math.abs(t - i) <= a
}

function Iv(t, i, a, r = .5) {
  t.origin = r, t.originPoint = Be(i.min, i.max, t.origin), t.scale = gt(a) / gt(i), t.translate = Be(a.min, a.max, t
    .origin) - t.originPoint, (t.scale >= hO && t.scale <= mO || isNaN(t.scale)) && (t.scale = 1), (t.translate >=
    pO && t.translate <= gO || isNaN(t.translate)) && (t.translate = 0)
}

function or(t, i, a, r) {
  Iv(t.x, i.x, a.x, r ? r.originX : void 0), Iv(t.y, i.y, a.y, r ? r.originY : void 0)
}

function Jv(t, i, a) {
  t.min = a.min + i.min, t.max = t.min + gt(i)
}

function vO(t, i, a) {
  Jv(t.x, i.x, a.x), Jv(t.y, i.y, a.y)
}

function e0(t, i, a) {
  t.min = i.min - a.min, t.max = t.min + gt(i)
}

function wl(t, i, a) {
  e0(t.x, i.x, a.x), e0(t.y, i.y, a.y)
}

function t0(t, i, a, r, l) {
  return t -= i, t = bl(t, 1 / a, r), l !== void 0 && (t = bl(t, 1 / l, r)), t
}

function xO(t, i = 0, a = 1, r = .5, l, u = t, f = t) {
  if (xn.test(i) && (i = parseFloat(i), i = Be(f.min, f.max, i / 100) - f.min), typeof i != "number") return;
  let h = Be(u.min, u.max, r);
  t === u && (h -= i), t.min = t0(t.min, i, a, h, l), t.max = t0(t.max, i, a, h, l)
}

function n0(t, i, [a, r, l], u, f) {
  xO(t, i[a], i[r], i[l], i.scale, u, f)
}
const bO = ["x", "scaleX", "originX"],
  wO = ["y", "scaleY", "originY"];

function i0(t, i, a, r) {
  n0(t.x, i, bO, a ? a.x : void 0, r ? r.x : void 0), n0(t.y, i, wO, a ? a.y : void 0, r ? r.y : void 0)
}

function s0(t) {
  return t.translate === 0 && t.scale === 1
}

function sw(t) {
  return s0(t.x) && s0(t.y)
}

function a0(t, i) {
  return t.min === i.min && t.max === i.max
}

function SO(t, i) {
  return a0(t.x, i.x) && a0(t.y, i.y)
}

function r0(t, i) {
  return Math.round(t.min) === Math.round(i.min) && Math.round(t.max) === Math.round(i.max)
}

function aw(t, i) {
  return r0(t.x, i.x) && r0(t.y, i.y)
}

function o0(t) {
  return gt(t.x) / gt(t.y)
}

function l0(t, i) {
  return t.translate === i.translate && t.scale === i.scale && t.originPoint === i.originPoint
}

function pn(t) {
  return [t("x"), t("y")]
}

function TO(t, i, a) {
  let r = "";
  const l = t.x.translate / i.x,
    u = t.y.translate / i.y,
    f = a?.z || 0;
  if ((l || u || f) && (r = `translate3d(${l}px, ${u}px, ${f}px) `), (i.x !== 1 || i.y !== 1) && (r +=
      `scale(${1/i.x}, ${1/i.y}) `), a) {
    const {
      transformPerspective: m,
      rotate: g,
      rotateX: x,
      rotateY: b,
      skewX: T,
      skewY: E
    } = a;
    m && (r = `perspective(${m}px) ${r}`), g && (r += `rotate(${g}deg) `), x && (r += `rotateX(${x}deg) `), b && (r +=
      `rotateY(${b}deg) `), T && (r += `skewX(${T}deg) `), E && (r += `skewY(${E}deg) `)
  }
  const h = t.x.scale * i.x,
    p = t.y.scale * i.y;
  return (h !== 1 || p !== 1) && (r += `scale(${h}, ${p})`), r || "none"
}
const rw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  AO = rw.length,
  c0 = t => typeof t == "string" ? parseFloat(t) : t,
  u0 = t => typeof t == "number" || ie.test(t);

function EO(t, i, a, r, l, u) {
  l ? (t.opacity = Be(0, a.opacity ?? 1, CO(r)), t.opacityExit = Be(i.opacity ?? 1, 0, RO(r))) : u && (t.opacity = Be(i
    .opacity ?? 1, a.opacity ?? 1, r));
  for (let f = 0; f < AO; f++) {
    const h = `border${rw[f]}Radius`;
    let p = f0(i, h),
      m = f0(a, h);
    if (p === void 0 && m === void 0) continue;
    p || (p = 0), m || (m = 0), p === 0 || m === 0 || u0(p) === u0(m) ? (t[h] = Math.max(Be(c0(p), c0(m), r), 0), (xn
      .test(m) || xn.test(p)) && (t[h] += "%")) : t[h] = m
  }(i.rotate || a.rotate) && (t.rotate = Be(i.rotate || 0, a.rotate || 0, r))
}

function f0(t, i) {
  return t[i] !== void 0 ? t[i] : t.borderRadius
}
const CO = ow(0, .5, Kb),
  RO = ow(.5, .95, St);

function ow(t, i, a) {
  return r => r < t ? 0 : r > i ? 1 : a(Zs(t, i, r))
}

function MO(t, i, a) {
  const r = dt(t) ? t : yn(t);
  return r.start(uh("", r, i, a)), r.animation
}

function gr(t, i, a, r = {
  passive: !0
}) {
  return t.addEventListener(i, a, r), () => t.removeEventListener(i, a)
}
const NO = (t, i) => t.depth - i.depth;
class jO {
  constructor() {
    this.children = [], this.isDirty = !1
  }
  add(i) {
    Fd(this.children, i), this.isDirty = !0
  }
  remove(i) {
    ml(this.children, i), this.isDirty = !0
  }
  forEach(i) {
    this.isDirty && this.children.sort(NO), this.isDirty = !1, this.children.forEach(i)
  }
}

function OO(t, i) {
  const a = pt.now(),
    r = ({
      timestamp: l
    }) => {
      const u = l - a;
      u >= i && (on(r), t(u - i))
    };
  return Ce.setup(r, !0), () => on(r)
}

function al(t) {
  return dt(t) ? t.get() : t
}
class DO {
  constructor() {
    this.members = []
  }
  add(i) {
    Fd(this.members, i);
    for (let a = this.members.length - 1; a >= 0; a--) {
      const r = this.members[a];
      if (r === i || r === this.lead || r === this.prevLead) continue;
      const l = r.instance;
      (!l || l.isConnected === !1) && !r.snapshot && (ml(this.members, r), r.unmount())
    }
    i.scheduleRender()
  }
  remove(i) {
    if (ml(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
      const a = this.members[this.members.length - 1];
      a && this.promote(a)
    }
  }
  relegate(i) {
    for (let a = this.members.indexOf(i) - 1; a >= 0; a--) {
      const r = this.members[a];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1) return this.promote(r), !0
    }
    return !1
  }
  promote(i, a) {
    const r = this.lead;
    if (i !== r && (this.prevLead = r, this.lead = i, i.show(), r)) {
      r.updateSnapshot(), i.scheduleRender();
      const {
        layoutDependency: l
      } = r.options, {
        layoutDependency: u
      } = i.options;
      (l === void 0 || l !== u) && (i.resumeFrom = r, a && (r.preserveOpacity = !0), r.snapshot && (i.snapshot = r
        .snapshot, i.snapshot.latestValues = r.animationValues || r.latestValues), i.root?.isUpdating && (i
        .isLayoutDirty = !0)), i.options.crossfade === !1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(i => {
      i.options.onExitComplete?.(), i.resumingFrom?.options.onExitComplete?.()
    })
  }
  scheduleRender() {
    this.members.forEach(i => i.instance && i.scheduleRender(!1))
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0)
  }
}
const rl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
  },
  Ef = ["", "X", "Y", "Z"],
  _O = 1e3;
let zO = 0;

function Cf(t, i, a, r) {
  const {
    latestValues: l
  } = i;
  l[t] && (a[t] = l[t], i.setStaticValue(t, 0), r && (r[t] = 0))
}

function lw(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
  const {
    visualElement: i
  } = t.options;
  if (!i) return;
  const a = R1(i);
  if (window.MotionHasOptimisedAnimation(a, "transform")) {
    const {
      layout: l,
      layoutId: u
    } = t.options;
    window.MotionCancelOptimisedAnimation(a, "transform", Ce, !(l || u))
  }
  const {
    parent: r
  } = t;
  r && !r.hasCheckedOptimisedAppear && lw(r)
}

function cw({
  attachResizeListener: t,
  defaultParent: i,
  measureScroll: a,
  checkIsScrollRoot: r,
  resetTransform: l
}) {
  return class {
    constructor(f = {}, h = i?.()) {
      this.id = zO++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {},
        this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !
        1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this
        .updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this
        .shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
          x: 1,
          y: 1
        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !
        1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed =
        () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = !1, this.nodes.forEach(kO), this.nodes.forEach(HO), this.nodes.forEach(
            qO), this.nodes.forEach(PO)
        }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this
        .isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = f, this.root =
        h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 :
        0;
      for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new jO)
    }
    addEventListener(f, h) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Kd), this.eventHandlers.get(f).add(h)
    }
    notifyListeners(f, ...h) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...h)
    }
    hasListeners(f) {
      return this.eventHandlers.has(f)
    }
    mount(f) {
      if (this.instance) return;
      this.isSVG = gh(f) && !Lj(f), this.instance = f;
      const {
        layoutId: h,
        layout: p,
        visualElement: m
      } = this.options;
      if (m && !m.current && m.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0), t) {
        let g, x = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        Ce.read(() => {
          x = window.innerWidth
        }), t(f, () => {
          const T = window.innerWidth;
          T !== x && (x = T, this.root.updateBlockedByResize = !0, g && g(), g = OO(b, 250), rl
            .hasAnimatedSinceResize && (rl.hasAnimatedSinceResize = !1, this.nodes.forEach(m0)))
        })
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && m && (h || p) && this
        .addEventListener("didUpdate", ({
          delta: g,
          hasLayoutChanged: x,
          hasRelativeLayoutChanged: b,
          layout: T
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return
          }
          const E = this.options.transition || m.getDefaultTransition() || FO,
            {
              onLayoutAnimationStart: C,
              onLayoutAnimationComplete: M
            } = m.getProps(),
            j = !this.targetLayout || !aw(this.targetLayout, T),
            _ = !x && b;
          if (this.options.layoutRoot || this.resumeFrom || _ || x && (j || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
            const D = {
              ...ch(E, "layout"),
              onPlay: C,
              onComplete: M
            };
            (m.shouldReduceMotion || this.options.layoutRoot) && (D.delay = 0, D.type = !1), this.startAnimation(
              D), this.setAnimationOrigin(g, _)
          } else x || m0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = T
        })
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this
        .eventHandlers.clear(), on(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(YO), this.animationId++)
    }
    getTransformTemplate() {
      const {
        visualElement: f
      } = this.options;
      return f && f.getProps().transformTemplate
    }
    willUpdate(f = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lw(this), !this.root
        .isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g];
        x.shouldResetTransform = !0, x.updateScroll("snapshot"), x.options.layoutRoot && x.willUpdate(!1)
      }
      const {
        layoutId: h,
        layout: p
      } = this.options;
      if (h === void 0 && !p) return;
      const m = this.getTransformTemplate();
      this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), f && this
        .notifyListeners("willUpdate")
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(d0);
        return
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(h0);
        return
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(BO),
        this.nodes.forEach(VO), this.nodes.forEach(LO)) : this.nodes.forEach(h0), this.clearAllSnapshots();
      const h = pt.now();
      at.delta = rn(0, 1e3 / 60, h - at.timestamp), at.timestamp = h, at.isProcessing = !0, yf.update.process(at),
        yf.preRender.process(at), yf.render.process(at), at.isProcessing = !1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, mh.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(UO), this.sharedNodes.forEach(GO)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ce.preRender(this.updateProjection, !
        1, !0))
    }
    scheduleCheckAfterUnmount() {
      Ce.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !gt(this.snapshot
        .measuredBox.x) && !gt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this
          .isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = Je(), this.isLayoutDirty = !1,
        this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement: h
      } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1),
        h && this.instance) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: a(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p
        }
      }
    }
    resetTransform() {
      if (!l) return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !sw(this.projectionDelta),
        p = this.getTransformTemplate(),
        m = p ? p(this.latestValues, "") : void 0,
        g = m !== this.prevTransformTemplateValue;
      f && this.instance && (h || Qi(this.latestValues) || g) && (l(this.instance, m), this.shouldResetTransform = !
        1, this.scheduleRender())
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return f && (p = this.removeTransform(p)), KO(p), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: p,
        latestValues: {},
        source: this.id
      }
    }
    measurePageBox() {
      const {
        visualElement: f
      } = this.options;
      if (!f) return Je();
      const h = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ZO))) {
        const {
          scroll: m
        } = this.root;
        m && (Ys(h.x, m.offset.x), Ys(h.y, m.offset.y))
      }
      return h
    }
    removeElementScroll(f) {
      const h = Je();
      if ($t(h, f), this.scroll?.wasRoot) return h;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p],
          {
            scroll: g,
            options: x
          } = m;
        m !== this.root && g && x.layoutScroll && (g.wasRoot && $t(h, f), Ys(h.x, g.offset.x), Ys(h.y, g.offset.y))
      }
      return h
    }
    applyTransform(f, h = !1) {
      const p = Je();
      $t(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        !h && g.options.layoutScroll && g.scroll && g !== g.root && Gs(p, {
          x: -g.scroll.offset.x,
          y: -g.scroll.offset.y
        }), Qi(g.latestValues) && Gs(p, g.latestValues)
      }
      return Qi(this.latestValues) && Gs(p, this.latestValues), p
    }
    removeTransform(f) {
      const h = Je();
      $t(h, f);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!m.instance || !Qi(m.latestValues)) continue;
        pd(m.latestValues) && m.updateSnapshot();
        const g = Je(),
          x = m.measurePageBox();
        $t(g, x), i0(h, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
      }
      return Qi(this.latestValues) && i0(h, this.latestValues), h
    }
    setTargetDelta(f) {
      this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0
      }
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0,
        this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== at.timestamp && this.relativeParent
        .resolveTargetDelta(!0)
    }
    resolveTargetDelta(f = !1) {
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this
        .isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h
        .isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== h;
      if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const {
        layout: g,
        layoutId: x
      } = this.options;
      if (!this.layout || !(g || x)) return;
      this.resolvedRelativeTargetAt = at.timestamp;
      const b = this.getClosestProjectingParent();
      b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(), !
        this.targetDelta && !this.relativeTarget && (b && b.layout ? this.createRelativeTarget(b, this.layout
          .layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this
          .targetDelta) && (this.target || (this.target = Je(), this.targetWithTransforms = Je()), this
          .relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this
            .forceRelativeParentToResolveTarget(), vO(this.target, this.relativeTarget, this.relativeParent.target)
          ) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) :
            $t(this.target, this.layout.layoutBox), Q1(this.target, this.targetDelta)) : $t(this.target, this.layout
            .layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, b && !!b
            .resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this
            .animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent =
            this.relativeTarget = void 0))
    }
    getClosestProjectingParent() {
      if (!(!this.parent || pd(this.parent.latestValues) || X1(this.parent.latestValues))) return this.parent
        .isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    createRelativeTarget(f, h, p) {
      this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this
        .forceRelativeParentToResolveTarget(), this.relativeTarget = Je(), this.relativeTargetOrigin = Je(), wl(this
          .relativeTargetOrigin, h, p), $t(this.relativeTarget, this.relativeTargetOrigin)
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0
    }
    calcProjection() {
      const f = this.getLead(),
        h = !!this.resumingFrom || this !== f;
      let p = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1), h && (this
          .isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === at
        .timestamp && (p = !1), p) return;
      const {
        layout: m,
        layoutId: g
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this
          .pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this
        .layout || !(m || g)) return;
      $t(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x,
        b = this.treeScale.y;
      Fj(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 ||
        this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Je());
      const {
        target: T
      } = f;
      if (!T) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return
      }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : ($v(this
          .prevProjectionDelta.x, this.projectionDelta.x), $v(this.prevProjectionDelta.y, this.projectionDelta.y)),
        or(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== x || this
          .treeScale.y !== b || !l0(this.projectionDelta.x, this.prevProjectionDelta.x) || !l0(this.projectionDelta
            .y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this
          .notifyListeners("projectionUpdate", T))
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(f = !0) {
      if (this.options.visualElement?.scheduleRender(), f) {
        const h = this.getStack();
        h && h.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = qs(), this.projectionDelta = qs(), this.projectionDeltaWithTransform = qs()
    }
    setAnimationOrigin(f, h = !1) {
      const p = this.snapshot,
        m = p ? p.latestValues : {},
        g = {
          ...this.latestValues
        },
        x = qs();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this
        .relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const b = Je(),
        T = p ? p.source : void 0,
        E = this.layout ? this.layout.source : void 0,
        C = T !== E,
        M = this.getStack(),
        j = !M || M.members.length <= 1,
        _ = !!(C && !j && this.options.crossfade === !0 && !this.path.some(QO));
      this.animationProgress = 0;
      let D;
      this.mixTargetDelta = k => {
        const P = k / 1e3;
        p0(x.x, f.x, P), p0(x.y, f.y, P), this.setTargetDelta(x), this.relativeTarget && this
          .relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (wl(b, this
              .layout.layoutBox, this.relativeParent.layout.layoutBox), XO(this.relativeTarget, this
              .relativeTargetOrigin, b, P), D && SO(this.relativeTarget, D) && (this.isProjectionDirty = !1), D ||
            (D = Je()), $t(D, this.relativeTarget)), C && (this.animationValues = g, EO(g, m, this.latestValues,
            P, _, j)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation
        ?.stop(), this.pendingAnimation && (on(this.pendingAnimation), this.pendingAnimation = void 0), this
        .pendingAnimation = Ce.update(() => {
          rl.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = yn(0)), this.motionValue.jump(0,
              !1), this.currentAnimation = MO(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: h => {
                this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h)
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation()
              }
            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this
            .pendingAnimation = void 0
        })
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity =
        void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
        this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(_O), this.currentAnimation.stop()), this
        .completeAnimation()
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: h,
        target: p,
        layout: m,
        latestValues: g
      } = f;
      if (!(!h || !p || !m)) {
        if (this !== f && this.layout && m && uw(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
          p = this.target || Je();
          const x = gt(this.layout.layoutBox.x);
          p.x.min = f.target.x.min, p.x.max = p.x.min + x;
          const b = gt(this.layout.layoutBox.y);
          p.y.min = f.target.y.min, p.y.max = p.y.min + b
        }
        $t(h, p), Gs(h, g), or(this.projectionDeltaWithTransform, this.layoutCorrected, h, g)
      }
    }
    registerSharedNode(f, h) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new DO), this.sharedNodes.get(f).add(h);
      const m = h.options.initialPromotionConfig;
      h.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(h) : void 0
      })
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0
    }
    getLead() {
      const {
        layoutId: f
      } = this.options;
      return f ? this.getStack()?.lead || this : this
    }
    getPrevLead() {
      const {
        layoutId: f
      } = this.options;
      return f ? this.getStack()?.prevLead : void 0
    }
    getStack() {
      const {
        layoutId: f
      } = this.options;
      if (f) return this.root.sharedNodes.get(f)
    }
    promote({
      needsReset: f,
      transition: h,
      preserveFollowOpacity: p
    } = {}) {
      const m = this.getStack();
      m && m.promote(this, p), f && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({
        transition: h
      })
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const {
        visualElement: f
      } = this.options;
      if (!f) return;
      let h = !1;
      const {
        latestValues: p
      } = f;
      if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (h = !0), !h) return;
      const m = {};
      p.z && Cf("z", f, m, this.animationValues);
      for (let g = 0; g < Ef.length; g++) Cf(`rotate${Ef[g]}`, f, m, this.animationValues), Cf(`skew${Ef[g]}`, f, m,
        this.animationValues);
      f.render();
      for (const g in m) f.setStaticValue(g, m[g]), this.animationValues && (this.animationValues[g] = m[g]);
      f.scheduleRender()
    }
    applyProjectionStyles(f, h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = al(h?.pointerEvents) || "", f
          .transform = p ? p(this.latestValues, "") : "none";
        return
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
          f.pointerEvents = al(h?.pointerEvents) || ""), this.hasProjected && !Qi(this.latestValues) && (f
          .transform = p ? p({}, "") : "none", this.hasProjected = !1);
        return
      }
      f.visibility = "";
      const g = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let x = TO(this.projectionDeltaWithTransform, this.treeScale, g);
      p && (x = p(g, x)), f.transform = x;
      const {
        x: b,
        y: T
      } = this.projectionDelta;
      f.transformOrigin = `${b.origin*100}% ${T.origin*100}% 0`, m.animationValues ? f.opacity = m === this ? g
        .opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g
        .opacityExit : f.opacity = m === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g
        .opacityExit : 0;
      for (const E in yd) {
        if (g[E] === void 0) continue;
        const {
          correct: C,
          applyTo: M,
          isCSSVariable: j
        } = yd[E], _ = x === "none" ? g[E] : C(g[E], m);
        if (M) {
          const D = M.length;
          for (let k = 0; k < D; k++) f[M[k]] = _
        } else j ? this.options.visualElement.renderState.vars[E] = _ : f[E] = _
      }
      this.options.layoutId && (f.pointerEvents = m === this ? al(h?.pointerEvents) || "" : "none")
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(f => f.currentAnimation?.stop()), this.root.nodes.forEach(d0), this.root.sharedNodes
        .clear()
    }
  }
}

function VO(t) {
  t.updateLayout()
}

function LO(t) {
  const i = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
    const {
      layoutBox: a,
      measuredBox: r
    } = t.layout, {
      animationType: l
    } = t.options, u = i.source !== t.layout.source;
    l === "size" ? pn(g => {
      const x = u ? i.measuredBox[g] : i.layoutBox[g],
        b = gt(x);
      x.min = a[g].min, x.max = x.min + b
    }) : uw(l, i.layoutBox, a) && pn(g => {
      const x = u ? i.measuredBox[g] : i.layoutBox[g],
        b = gt(a[g]);
      x.max = x.min + b, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[g]
        .max = t.relativeTarget[g].min + b)
    });
    const f = qs();
    or(f, a, i.layoutBox);
    const h = qs();
    u ? or(h, t.applyTransform(r, !0), i.measuredBox) : or(h, a, i.layoutBox);
    const p = !sw(f);
    let m = !1;
    if (!t.resumeFrom) {
      const g = t.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const {
          snapshot: x,
          layout: b
        } = g;
        if (x && b) {
          const T = Je();
          wl(T, i.layoutBox, x.layoutBox);
          const E = Je();
          wl(E, a, b.layoutBox), aw(T, E) || (m = !0), g.options.layoutRoot && (t.relativeTarget = E, t
            .relativeTargetOrigin = T, t.relativeParent = g)
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: a,
      snapshot: i,
      delta: h,
      layoutDelta: f,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: m
    })
  } else if (t.isLead()) {
    const {
      onExitComplete: a
    } = t.options;
    a && a()
  }
  t.options.transition = void 0
}

function kO(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t
    .isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent
      .isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function PO(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function UO(t) {
  t.clearSnapshot()
}

function d0(t) {
  t.clearMeasurements()
}

function h0(t) {
  t.isLayoutDirty = !1
}

function BO(t) {
  const {
    visualElement: i
  } = t.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function m0(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function HO(t) {
  t.resolveTargetDelta()
}

function qO(t) {
  t.calcProjection()
}

function YO(t) {
  t.resetSkewAndRotation()
}

function GO(t) {
  t.removeLeadSnapshot()
}

function p0(t, i, a) {
  t.translate = Be(i.translate, 0, a), t.scale = Be(i.scale, 1, a), t.origin = i.origin, t.originPoint = i.originPoint
}

function g0(t, i, a, r) {
  t.min = Be(i.min, a.min, r), t.max = Be(i.max, a.max, r)
}

function XO(t, i, a, r) {
  g0(t.x, i.x, a.x, r), g0(t.y, i.y, a.y, r)
}

function QO(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0
}
const FO = {
    duration: .45,
    ease: [.4, 0, .1, 1]
  },
  y0 = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  v0 = y0("applewebkit/") && !y0("chrome/") ? Math.round : St;

function x0(t) {
  t.min = v0(t.min), t.max = v0(t.max)
}

function KO(t) {
  x0(t.x), x0(t.y)
}

function uw(t, i, a) {
  return t === "position" || t === "preserve-aspect" && !yO(o0(i), o0(a), .2)
}

function ZO(t) {
  return t !== t.root && t.scroll?.wasRoot
}
const WO = cw({
    attachResizeListener: (t, i) => gr(t, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0
    }),
    checkIsScrollRoot: () => !0
  }),
  Rf = {
    current: void 0
  },
  fw = cw({
    measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!Rf.current) {
        const t = new WO({});
        t.mount(window), t.setOptions({
          layoutScroll: !0
        }), Rf.current = t
      }
      return Rf.current
    },
    resetTransform: (t, i) => {
      t.style.transform = i !== void 0 ? i : "none"
    },
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
  }),
  wh = S.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
  });

function b0(t, i) {
  if (typeof t == "function") return t(i);
  t != null && (t.current = i)
}

function $O(...t) {
  return i => {
    let a = !1;
    const r = t.map(l => {
      const u = b0(l, i);
      return !a && typeof u == "function" && (a = !0), u
    });
    if (a) return () => {
      for (let l = 0; l < r.length; l++) {
        const u = r[l];
        typeof u == "function" ? u() : b0(t[l], null)
      }
    }
  }
}

function IO(...t) {
  return S.useCallback($O(...t), t)
}
class JO extends S.Component {
  getSnapshotBeforeUpdate(i) {
    const a = this.props.childRef.current;
    if (a && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = a.offsetParent,
        l = vl(r) && r.offsetWidth || 0,
        u = vl(r) && r.offsetHeight || 0,
        f = this.props.sizeRef.current;
      f.height = a.offsetHeight || 0, f.width = a.offsetWidth || 0, f.top = a.offsetTop, f.left = a.offsetLeft, f
        .right = l - f.width - f.left, f.bottom = u - f.height - f.top
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}

function eD({
  children: t,
  isPresent: i,
  anchorX: a,
  anchorY: r,
  root: l,
  pop: u
}) {
  const f = S.useId(),
    h = S.useRef(null),
    p = S.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }),
    {
      nonce: m
    } = S.useContext(wh),
    g = t.props?.ref ?? t?.ref,
    x = IO(h, g);
  return S.useInsertionEffect(() => {
    const {
      width: b,
      height: T,
      top: E,
      left: C,
      right: M,
      bottom: j
    } = p.current;
    if (i || u === !1 || !h.current || !b || !T) return;
    const _ = a === "left" ? `left: ${C}` : `right: ${M}`,
      D = r === "bottom" ? `bottom: ${j}` : `top: ${E}`;
    h.current.dataset.motionPopId = f;
    const k = document.createElement("style");
    m && (k.nonce = m);
    const P = l ?? document.head;
    return P.appendChild(k), k.sheet && k.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${T}px !important;
            ${_}px !important;
            ${D}px !important;
          }
        `), () => {
      P.contains(k) && P.removeChild(k)
    }
  }, [i]), y.jsx(JO, {
    isPresent: i,
    childRef: h,
    sizeRef: p,
    pop: u,
    children: u === !1 ? t : S.cloneElement(t, {
      ref: x
    })
  })
}
const tD = ({
  children: t,
  initial: i,
  isPresent: a,
  onExitComplete: r,
  custom: l,
  presenceAffectsLayout: u,
  mode: f,
  anchorX: h,
  anchorY: p,
  root: m
}) => {
  const g = Ul(nD),
    x = S.useId();
  let b = !0,
    T = S.useMemo(() => (b = !1, {
      id: x,
      initial: i,
      isPresent: a,
      custom: l,
      onExitComplete: E => {
        g.set(E, !0);
        for (const C of g.values())
          if (!C) return;
        r && r()
      },
      register: E => (g.set(E, !1), () => g.delete(E))
    }), [a, g, r]);
  return u && b && (T = {
    ...T
  }), S.useMemo(() => {
    g.forEach((E, C) => g.set(C, !1))
  }, [a]), S.useEffect(() => {
    !a && !g.size && r && r()
  }, [a]), t = y.jsx(eD, {
    pop: f === "popLayout",
    isPresent: a,
    anchorX: h,
    anchorY: p,
    root: m,
    children: t
  }), y.jsx(Bl.Provider, {
    value: T,
    children: t
  })
};

function nD() {
  return new Map
}

function dw(t = !0) {
  const i = S.useContext(Bl);
  if (i === null) return [!0, null];
  const {
    isPresent: a,
    onExitComplete: r,
    register: l
  } = i, u = S.useId();
  S.useEffect(() => {
    if (t) return l(u)
  }, [t]);
  const f = S.useCallback(() => t && r && r(u), [u, r, t]);
  return !a && r ? [!1, f] : [!0]
}
const Fo = t => t.key || "";

function w0(t) {
  const i = [];
  return S.Children.forEach(t, a => {
    S.isValidElement(a) && i.push(a)
  }), i
}
const Sh = ({
    children: t,
    custom: i,
    initial: a = !0,
    onExitComplete: r,
    presenceAffectsLayout: l = !0,
    mode: u = "sync",
    propagate: f = !1,
    anchorX: h = "left",
    anchorY: p = "top",
    root: m
  }) => {
    const [g, x] = dw(f), b = S.useMemo(() => w0(t), [t]), T = f && !g ? [] : b.map(Fo), E = S.useRef(!0), C = S.useRef(
      b), M = Ul(() => new Map), j = S.useRef(new Set), [_, D] = S.useState(b), [k, P] = S.useState(b);
    Qd(() => {
      E.current = !1, C.current = b;
      for (let H = 0; H < k.length; H++) {
        const W = Fo(k[H]);
        T.includes(W) ? (M.delete(W), j.current.delete(W)) : M.get(W) !== !0 && M.set(W, !1)
      }
    }, [k, T.length, T.join("-")]);
    const F = [];
    if (b !== _) {
      let H = [...b];
      for (let W = 0; W < k.length; W++) {
        const oe = k[W],
          pe = Fo(oe);
        T.includes(pe) || (H.splice(W, 0, oe), F.push(oe))
      }
      return u === "wait" && F.length && (H = F), P(w0(H)), D(b), null
    }
    const {
      forceRender: Z
    } = S.useContext(Xd);
    return y.jsx(y.Fragment, {
      children: k.map(H => {
        const W = Fo(H),
          oe = f && !g ? !1 : b === k || T.includes(W),
          pe = () => {
            if (j.current.has(W)) return;
            if (j.current.add(W), M.has(W)) M.set(W, !0);
            else return;
            let ce = !0;
            M.forEach(xe => {
              xe || (ce = !1)
            }), ce && (Z?.(), P(C.current), f && x?.(), r && r())
          };
        return y.jsx(tD, {
          isPresent: oe,
          initial: !E.current || a ? void 0 : !1,
          custom: i,
          presenceAffectsLayout: l,
          mode: u,
          root: m,
          onExitComplete: oe ? void 0 : pe,
          anchorX: h,
          anchorY: p,
          children: H
        }, W)
      })
    })
  },
  hw = S.createContext({
    strict: !1
  }),
  S0 = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  };
let T0 = !1;

function iD() {
  if (T0) return;
  const t = {};
  for (const i in S0) t[i] = {
    isEnabled: a => S0[i].some(r => !!a[r])
  };
  q1(t), T0 = !0
}

function mw() {
  return iD(), Yj()
}

function sD(t) {
  const i = mw();
  for (const a in t) i[a] = {
    ...i[a],
    ...t[a]
  };
  q1(i)
}
const aD = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition",
  "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete",
  "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock",
  "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave",
  "globalTapTarget", "propagate", "ignoreStrict", "viewport"
]);

function Sl(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith(
    "onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || aD.has(t)
}
let pw = t => !Sl(t);

function rD(t) {
  typeof t == "function" && (pw = i => i.startsWith("on") ? !Sl(i) : t(i))
}
try {
  rD(require("@emotion/is-prop-valid").default)
} catch {}

function oD(t, i, a) {
  const r = {};
  for (const l in t) l === "values" && typeof t.values == "object" || (pw(l) || a === !0 && Sl(l) || !i && !Sl(l) || t
    .draggable && l.startsWith("onDrag")) && (r[l] = t[l]);
  return r
}
const Yl = S.createContext({});

function lD(t, i) {
  if (ql(t)) {
    const {
      initial: a,
      animate: r
    } = t;
    return {
      initial: a === !1 || pr(a) ? a : void 0,
      animate: pr(r) ? r : void 0
    }
  }
  return t.inherit !== !1 ? i : {}
}

function cD(t) {
  const {
    initial: i,
    animate: a
  } = lD(t, S.useContext(Yl));
  return S.useMemo(() => ({
    initial: i,
    animate: a
  }), [A0(i), A0(a)])
}

function A0(t) {
  return Array.isArray(t) ? t.join(" ") : t
}
const Th = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

function gw(t, i, a) {
  for (const r in i) !dt(i[r]) && !Z1(r, a) && (t[r] = i[r])
}

function uD({
  transformTemplate: t
}, i) {
  return S.useMemo(() => {
    const a = Th();
    return xh(a, i, t), Object.assign({}, a.vars, a.style)
  }, [i])
}

function fD(t, i) {
  const a = t.style || {},
    r = {};
  return gw(r, a, t), Object.assign(r, uD(t, i)), r
}

function dD(t, i) {
  const a = {},
    r = fD(t, i);
  return t.drag && t.dragListener !== !1 && (a.draggable = !1, r.userSelect = r.WebkitUserSelect = r
      .WebkitTouchCallout = "none", r.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t
    .tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (a.tabIndex = 0), a.style = r, a
}
const yw = () => ({
  ...Th(),
  attrs: {}
});

function hD(t, i, a, r) {
  const l = S.useMemo(() => {
    const u = yw();
    return W1(u, i, I1(r), t.transformTemplate, t.style), {
      ...u.attrs,
      style: {
        ...u.style
      }
    }
  }, [i]);
  if (t.style) {
    const u = {};
    gw(u, t.style, t), l.style = {
      ...u,
      ...l.style
    }
  }
  return l
}
const mD = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask",
  "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan",
  "use", "view"
];

function Ah(t) {
  return typeof t != "string" || t.includes("-") ? !1 : !!(mD.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function pD(t, i, a, {
  latestValues: r
}, l, u = !1, f) {
  const p = (f ?? Ah(t) ? hD : dD)(i, r, l, t),
    m = oD(i, typeof t == "string", u),
    g = t !== S.Fragment ? {
      ...m,
      ...p,
      ref: a
    } : {},
    {
      children: x
    } = i,
    b = S.useMemo(() => dt(x) ? x.get() : x, [x]);
  return S.createElement(t, {
    ...g,
    children: b
  })
}

function gD({
  scrapeMotionValuesFromProps: t,
  createRenderState: i
}, a, r, l) {
  return {
    latestValues: yD(a, r, l, t),
    renderState: i()
  }
}

function yD(t, i, a, r) {
  const l = {},
    u = r(t, {});
  for (const b in u) l[b] = al(u[b]);
  let {
    initial: f,
    animate: h
  } = t;
  const p = ql(t),
    m = B1(t);
  i && m && !p && t.inherit !== !1 && (f === void 0 && (f = i.initial), h === void 0 && (h = i.animate));
  let g = a ? a.initial === !1 : !1;
  g = g || f === !1;
  const x = g ? h : f;
  if (x && typeof x != "boolean" && !Hl(x)) {
    const b = Array.isArray(x) ? x : [x];
    for (let T = 0; T < b.length; T++) {
      const E = fh(t, b[T]);
      if (E) {
        const {
          transitionEnd: C,
          transition: M,
          ...j
        } = E;
        for (const _ in j) {
          let D = j[_];
          if (Array.isArray(D)) {
            const k = g ? D.length - 1 : 0;
            D = D[k]
          }
          D !== null && (l[_] = D)
        }
        for (const _ in C) l[_] = C[_]
      }
    }
  }
  return l
}
const vw = t => (i, a) => {
    const r = S.useContext(Yl),
      l = S.useContext(Bl),
      u = () => gD(t, i, r, l);
    return a ? u() : Ul(u)
  },
  vD = vw({
    scrapeMotionValuesFromProps: bh,
    createRenderState: Th
  }),
  xD = vw({
    scrapeMotionValuesFromProps: J1,
    createRenderState: yw
  }),
  bD = Symbol.for("motionComponentSymbol");

function wD(t, i, a) {
  const r = S.useRef(a);
  S.useInsertionEffect(() => {
    r.current = a
  });
  const l = S.useRef(null);
  return S.useCallback(u => {
    u && t.onMount?.(u);
    const f = r.current;
    if (typeof f == "function")
      if (u) {
        const h = f(u);
        typeof h == "function" && (l.current = h)
      } else l.current ? (l.current(), l.current = null) : f(u);
    else f && (f.current = u);
    i && (u ? i.mount(u) : i.unmount())
  }, [i])
}
const xw = S.createContext({});

function Ps(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function SD(t, i, a, r, l, u) {
  const {
    visualElement: f
  } = S.useContext(Yl), h = S.useContext(hw), p = S.useContext(Bl), m = S.useContext(wh), g = m.reducedMotion, x = m
    .skipAnimations, b = S.useRef(null), T = S.useRef(!1);
  r = r || h.renderer, !b.current && r && (b.current = r(t, {
    visualState: i,
    parent: f,
    props: a,
    presenceContext: p,
    blockInitialAnimation: p ? p.initial === !1 : !1,
    reducedMotionConfig: g,
    skipAnimations: x,
    isSVG: u
  }), T.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const E = b.current,
    C = S.useContext(xw);
  E && !E.projection && l && (E.type === "html" || E.type === "svg") && TD(b.current, a, l, C);
  const M = S.useRef(!1);
  S.useInsertionEffect(() => {
    E && M.current && E.update(a, p)
  });
  const j = a[C1],
    _ = S.useRef(!!j && typeof window < "u" && !window.MotionHandoffIsComplete?.(j) && window
      .MotionHasOptimisedAnimation?.(j));
  return Qd(() => {
    T.current = !0, E && (M.current = !0, window.MotionIsMounted = !0, E.updateFeatures(), E
      .scheduleRenderMicrotask(), _.current && E.animationState && E.animationState.animateChanges())
  }), S.useEffect(() => {
    E && (!_.current && E.animationState && E.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(j)
    }), _.current = !1), E.enteringChildren = void 0)
  }), E
}

function TD(t, i, a, r) {
  const {
    layoutId: l,
    layout: u,
    drag: f,
    dragConstraints: h,
    layoutScroll: p,
    layoutRoot: m,
    layoutCrossfade: g
  } = i;
  t.projection = new a(t.latestValues, i["data-framer-portal-id"] ? void 0 : bw(t.parent)), t.projection.setOptions({
    layoutId: l,
    layout: u,
    alwaysMeasureLayout: !!f || h && Ps(h),
    visualElement: t,
    animationType: typeof u == "string" ? u : "both",
    initialPromotionConfig: r,
    crossfade: g,
    layoutScroll: p,
    layoutRoot: m
  })
}

function bw(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : bw(t.parent)
}

function Mf(t, {
  forwardMotionProps: i = !1,
  type: a
} = {}, r, l) {
  r && sD(r);
  const u = a ? a === "svg" : Ah(t),
    f = u ? xD : vD;

  function h(m, g) {
    let x;
    const b = {
        ...S.useContext(wh),
        ...m,
        layoutId: AD(m)
      },
      {
        isStatic: T
      } = b,
      E = cD(m),
      C = f(m, T);
    if (!T && typeof window < "u") {
      ED();
      const M = CD(b);
      x = M.MeasureLayout, E.visualElement = SD(t, C, b, l, M.ProjectionNode, u)
    }
    return y.jsxs(Yl.Provider, {
      value: E,
      children: [x && E.visualElement ? y.jsx(x, {
        visualElement: E.visualElement,
        ...b
      }) : null, pD(t, m, wD(C, E.visualElement, g), C, T, i, u)]
    })
  }
  h.displayName = `motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;
  const p = S.forwardRef(h);
  return p[bD] = t, p
}

function AD({
  layoutId: t
}) {
  const i = S.useContext(Xd).id;
  return i && t !== void 0 ? i + "-" + t : t
}

function ED(t, i) {
  S.useContext(hw).strict
}

function CD(t) {
  const i = mw(),
    {
      drag: a,
      layout: r
    } = i;
  if (!a && !r) return {};
  const l = {
    ...a,
    ...r
  };
  return {
    MeasureLayout: a?.isEnabled(t) || r?.isEnabled(t) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode
  }
}

function RD(t, i) {
  if (typeof Proxy > "u") return Mf;
  const a = new Map,
    r = (u, f) => Mf(u, f, t, i),
    l = (u, f) => r(u, f);
  return new Proxy(l, {
    get: (u, f) => f === "create" ? r : (a.has(f) || a.set(f, Mf(f, void 0, t, i)), a.get(f))
  })
}
const MD = (t, i) => i.isSVG ?? Ah(t) ? new rO(i) : new eO(i, {
  allowProjection: t !== S.Fragment
});
class ND extends Ai {
  constructor(i) {
    super(i), i.animationState || (i.animationState = fO(i))
  }
  updateAnimationControlsSubscription() {
    const {
      animate: i
    } = this.node.getProps();
    Hl(i) && (this.unmountControls = i.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const {
      animate: i
    } = this.node.getProps(), {
      animate: a
    } = this.node.prevProps || {};
    i !== a && this.updateAnimationControlsSubscription()
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.()
  }
}
let jD = 0;
class OD extends Ai {
  constructor() {
    super(...arguments), this.id = jD++
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: i,
      onExitComplete: a
    } = this.node.presenceContext, {
      isPresent: r
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === r) return;
    const l = this.node.animationState.setActive("exit", !i);
    a && !i && l.then(() => {
      a(this.id)
    })
  }
  mount() {
    const {
      register: i,
      onExitComplete: a
    } = this.node.presenceContext || {};
    a && a(this.id), i && (this.unmount = i(this.id))
  }
  unmount() {}
}
const DD = {
  animation: {
    Feature: ND
  },
  exit: {
    Feature: OD
  }
};

function Tr(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  }
}
const _D = t => i => ph(i) && t(i, Tr(i));

function lr(t, i, a, r) {
  return gr(t, i, _D(a), r)
}
const ww = ({
    current: t
  }) => t ? t.ownerDocument.defaultView : null,
  E0 = (t, i) => Math.abs(t - i);

function zD(t, i) {
  const a = E0(t.x, i.x),
    r = E0(t.y, i.y);
  return Math.sqrt(a ** 2 + r ** 2)
}
const C0 = new Set(["auto", "scroll"]);
class Sw {
  constructor(i, a, {
    transformPagePoint: r,
    contextWindow: l = window,
    dragSnapToOrigin: u = !1,
    distanceThreshold: f = 3,
    element: h
  } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this
      .contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this
      .onElementScroll = T => {
        this.handleScroll(T.target)
      }, this.onWindowScroll = () => {
        this.handleScroll(window)
      }, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const T = jf(this.lastMoveEventInfo, this.history),
          E = this.startEvent !== null,
          C = zD(T.offset, {
            x: 0,
            y: 0
          }) >= this.distanceThreshold;
        if (!E && !C) return;
        const {
          point: M
        } = T, {
          timestamp: j
        } = at;
        this.history.push({
          ...M,
          timestamp: j
        });
        const {
          onStart: _,
          onMove: D
        } = this.handlers;
        E || (_ && _(this.lastMoveEvent, T), this.startEvent = this.lastMoveEvent), D && D(this.lastMoveEvent, T)
      }, this.handlePointerMove = (T, E) => {
        this.lastMoveEvent = T, this.lastMoveEventInfo = Nf(E, this.transformPagePoint), Ce.update(this.updatePoint, !
          0)
      }, this.handlePointerUp = (T, E) => {
        this.end();
        const {
          onEnd: C,
          onSessionEnd: M,
          resumeAnimation: j
        } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && j && j(), !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const _ = jf(T.type === "pointercancel" ? this.lastMoveEventInfo : Nf(E, this.transformPagePoint), this
          .history);
        this.startEvent && C && C(T, _), M && M(T, _)
      }, !ph(i)) return;
    this.dragSnapToOrigin = u, this.handlers = a, this.transformPagePoint = r, this.distanceThreshold = f, this
      .contextWindow = l || window;
    const p = Tr(i),
      m = Nf(p, this.transformPagePoint),
      {
        point: g
      } = m,
      {
        timestamp: x
      } = at;
    this.history = [{
      ...g,
      timestamp: x
    }];
    const {
      onSessionStart: b
    } = a;
    b && b(i, jf(m, this.history)), this.removeListeners = br(lr(this.contextWindow, "pointermove", this
      .handlePointerMove), lr(this.contextWindow, "pointerup", this.handlePointerUp), lr(this.contextWindow,
      "pointercancel", this.handlePointerUp)), h && this.startScrollTracking(h)
  }
  startScrollTracking(i) {
    let a = i.parentElement;
    for (; a;) {
      const r = getComputedStyle(a);
      (C0.has(r.overflowX) || C0.has(r.overflowY)) && this.scrollPositions.set(a, {
        x: a.scrollLeft,
        y: a.scrollTop
      }), a = a.parentElement
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll)
    }
  }
  handleScroll(i) {
    const a = this.scrollPositions.get(i);
    if (!a) return;
    const r = i === window,
      l = r ? {
        x: window.scrollX,
        y: window.scrollY
      } : {
        x: i.scrollLeft,
        y: i.scrollTop
      },
      u = {
        x: l.x - a.x,
        y: l.y - a.y
      };
    u.x === 0 && u.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += u.x, this
      .lastMoveEventInfo.point.y += u.y) : this.history.length > 0 && (this.history[0].x -= u.x, this.history[0]
      .y -= u.y), this.scrollPositions.set(i, l), Ce.update(this.updatePoint, !0))
  }
  updateHandlers(i) {
    this.handlers = i
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this
      .scrollPositions.clear(), on(this.updatePoint)
  }
}

function Nf(t, i) {
  return i ? {
    point: i(t.point)
  } : t
}

function R0(t, i) {
  return {
    x: t.x - i.x,
    y: t.y - i.y
  }
}

function jf({
  point: t
}, i) {
  return {
    point: t,
    delta: R0(t, Tw(i)),
    offset: R0(t, VD(i)),
    velocity: LD(i, .1)
  }
}

function VD(t) {
  return t[0]
}

function Tw(t) {
  return t[t.length - 1]
}

function LD(t, i) {
  if (t.length < 2) return {
    x: 0,
    y: 0
  };
  let a = t.length - 1,
    r = null;
  const l = Tw(t);
  for (; a >= 0 && (r = t[a], !(l.timestamp - r.timestamp > en(i)));) a--;
  if (!r) return {
    x: 0,
    y: 0
  };
  r === t[0] && t.length > 2 && l.timestamp - r.timestamp > en(i) * 2 && (r = t[1]);
  const u = Qt(l.timestamp - r.timestamp);
  if (u === 0) return {
    x: 0,
    y: 0
  };
  const f = {
    x: (l.x - r.x) / u,
    y: (l.y - r.y) / u
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f
}

function kD(t, {
  min: i,
  max: a
}, r) {
  return i !== void 0 && t < i ? t = r ? Be(i, t, r.min) : Math.max(t, i) : a !== void 0 && t > a && (t = r ? Be(a, t, r
    .max) : Math.min(t, a)), t
}

function M0(t, i, a) {
  return {
    min: i !== void 0 ? t.min + i : void 0,
    max: a !== void 0 ? t.max + a - (t.max - t.min) : void 0
  }
}

function PD(t, {
  top: i,
  left: a,
  bottom: r,
  right: l
}) {
  return {
    x: M0(t.x, a, l),
    y: M0(t.y, i, r)
  }
}

function N0(t, i) {
  let a = i.min - t.min,
    r = i.max - t.max;
  return i.max - i.min < t.max - t.min && ([a, r] = [r, a]), {
    min: a,
    max: r
  }
}

function UD(t, i) {
  return {
    x: N0(t.x, i.x),
    y: N0(t.y, i.y)
  }
}

function BD(t, i) {
  let a = .5;
  const r = gt(t),
    l = gt(i);
  return l > r ? a = Zs(i.min, i.max - r, t.min) : r > l && (a = Zs(t.min, t.max - l, i.min)), rn(0, 1, a)
}

function HD(t, i) {
  const a = {};
  return i.min !== void 0 && (a.min = i.min - t.min), i.max !== void 0 && (a.max = i.max - t.min), a
}
const vd = .35;

function qD(t = vd) {
  return t === !1 ? t = 0 : t === !0 && (t = vd), {
    x: j0(t, "left", "right"),
    y: j0(t, "top", "bottom")
  }
}

function j0(t, i, a) {
  return {
    min: O0(t, i),
    max: O0(t, a)
  }
}

function O0(t, i) {
  return typeof t == "number" ? t : t[i] || 0
}
const YD = new WeakMap;
class GD {
  constructor(i) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
        x: 0,
        y: 0
      }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Je(), this.latestPointerEvent = null,
      this.latestPanInfo = null, this.visualElement = i
  }
  start(i, {
    snapToCursor: a = !1,
    distanceThreshold: r
  } = {}) {
    const {
      presenceContext: l
    } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const u = x => {
        a && this.snapToCursor(Tr(x).point), this.stopAnimation()
      },
      f = (x, b) => {
        const {
          drag: T,
          dragPropagation: E,
          onDragStart: C
        } = this.getProps();
        if (T && !E && (this.openDragLock && this.openDragLock(), this.openDragLock = xj(T), !this.openDragLock))
          return;
        this.latestPointerEvent = x, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this
          .resolveConstraints(), this.visualElement.projection && (this.visualElement.projection
            .isAnimationBlocked = !0, this.visualElement.projection.target = void 0), pn(j => {
            let _ = this.getAxisMotionValue(j).get() || 0;
            if (xn.test(_)) {
              const {
                projection: D
              } = this.visualElement;
              if (D && D.layout) {
                const k = D.layout.layoutBox[j];
                k && (_ = gt(k) * (parseFloat(_) / 100))
              }
            }
            this.originPoint[j] = _
          }), C && Ce.update(() => C(x, b), !1, !0), cd(this.visualElement, "transform");
        const {
          animationState: M
        } = this.visualElement;
        M && M.setActive("whileDrag", !0)
      },
      h = (x, b) => {
        this.latestPointerEvent = x, this.latestPanInfo = b;
        const {
          dragPropagation: T,
          dragDirectionLock: E,
          onDirectionLock: C,
          onDrag: M
        } = this.getProps();
        if (!T && !this.openDragLock) return;
        const {
          offset: j
        } = b;
        if (E && this.currentDirection === null) {
          this.currentDirection = QD(j), this.currentDirection !== null && C && C(this.currentDirection);
          return
        }
        this.updateAxis("x", b.point, j), this.updateAxis("y", b.point, j), this.visualElement.render(), M && Ce
          .update(() => M(x, b), !1, !0)
      },
      p = (x, b) => {
        this.latestPointerEvent = x, this.latestPanInfo = b, this.stop(x, b), this.latestPointerEvent = null, this
          .latestPanInfo = null
      },
      m = () => {
        const {
          dragSnapToOrigin: x
        } = this.getProps();
        (x || this.constraints) && this.startAnimation({
          x: 0,
          y: 0
        })
      },
      {
        dragSnapToOrigin: g
      } = this.getProps();
    this.panSession = new Sw(i, {
      onSessionStart: u,
      onStart: f,
      onMove: h,
      onSessionEnd: p,
      resumeAnimation: m
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: r,
      contextWindow: ww(this.visualElement),
      element: this.visualElement.current
    })
  }
  stop(i, a) {
    const r = i || this.latestPointerEvent,
      l = a || this.latestPanInfo,
      u = this.isDragging;
    if (this.cancel(), !u || !l || !r) return;
    const {
      velocity: f
    } = l;
    this.startAnimation(f);
    const {
      onDragEnd: h
    } = this.getProps();
    h && Ce.postRender(() => h(r, l))
  }
  cancel() {
    this.isDragging = !1;
    const {
      projection: i,
      animationState: a
    } = this.visualElement;
    i && (i.isAnimationBlocked = !1), this.endPanSession();
    const {
      dragPropagation: r
    } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), a && a.setActive("whileDrag", !1)
  }
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0
  }
  updateAxis(i, a, r) {
    const {
      drag: l
    } = this.getProps();
    if (!r || !Ko(i, l, this.currentDirection)) return;
    const u = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + r[i];
    this.constraints && this.constraints[i] && (f = kD(f, this.constraints[i], this.elastic[i])), u.set(f)
  }
  resolveConstraints() {
    const {
      dragConstraints: i,
      dragElastic: a
    } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this
      .visualElement.projection.measure(!1) : this.visualElement.projection?.layout, l = this.constraints;
    i && Ps(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && r ? this.constraints =
      PD(r.layoutBox, i) : this.constraints = !1, this.elastic = qD(a), l !== this.constraints && !Ps(i) && r && this
      .constraints && !this.hasMutatedConstraints && pn(u => {
        this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = HD(r.layoutBox[u], this
          .constraints[u]))
      })
  }
  resolveRefConstraints() {
    const {
      dragConstraints: i,
      onMeasureDragConstraints: a
    } = this.getProps();
    if (!i || !Ps(i)) return !1;
    const r = i.current,
      {
        projection: l
      } = this.visualElement;
    if (!l || !l.layout) return !1;
    const u = Kj(r, l.root, this.visualElement.getTransformPagePoint());
    let f = UD(l.layout.layoutBox, u);
    if (a) {
      const h = a(Xj(f));
      this.hasMutatedConstraints = !!h, h && (f = G1(h))
    }
    return f
  }
  startAnimation(i) {
    const {
      drag: a,
      dragMomentum: r,
      dragElastic: l,
      dragTransition: u,
      dragSnapToOrigin: f,
      onDragTransitionEnd: h
    } = this.getProps(), p = this.constraints || {}, m = pn(g => {
      if (!Ko(g, a, this.currentDirection)) return;
      let x = p && p[g] || {};
      f && (x = {
        min: 0,
        max: 0
      });
      const b = l ? 200 : 1e6,
        T = l ? 40 : 1e7,
        E = {
          type: "inertia",
          velocity: r ? i[g] : 0,
          bounceStiffness: b,
          bounceDamping: T,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...u,
          ...x
        };
      return this.startAxisValueAnimation(g, E)
    });
    return Promise.all(m).then(h)
  }
  startAxisValueAnimation(i, a) {
    const r = this.getAxisMotionValue(i);
    return cd(this.visualElement, i), r.start(uh(i, r, 0, a, this.visualElement, !1))
  }
  stopAnimation() {
    pn(i => this.getAxisMotionValue(i).stop())
  }
  getAxisMotionValue(i) {
    const a = `_drag${i.toUpperCase()}`,
      r = this.visualElement.getProps(),
      l = r[a];
    return l || this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
  }
  snapToCursor(i) {
    pn(a => {
      const {
        drag: r
      } = this.getProps();
      if (!Ko(a, r, this.currentDirection)) return;
      const {
        projection: l
      } = this.visualElement, u = this.getAxisMotionValue(a);
      if (l && l.layout) {
        const {
          min: f,
          max: h
        } = l.layout.layoutBox[a], p = u.get() || 0;
        u.set(i[a] - Be(f, h, .5) + p)
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: i,
      dragConstraints: a
    } = this.getProps(), {
      projection: r
    } = this.visualElement;
    if (!Ps(a) || !r || !this.constraints) return;
    this.stopAnimation();
    const l = {
      x: 0,
      y: 0
    };
    pn(f => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const p = h.get();
        l[f] = BD({
          min: p,
          max: p
        }, this.constraints[f])
      }
    });
    const {
      transformTemplate: u
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = u ? u({}, "") : "none", r.root && r.root.updateScroll(), r
      .updateLayout(), this.constraints = !1, this.resolveConstraints(), pn(f => {
        if (!Ko(f, i, null)) return;
        const h = this.getAxisMotionValue(f),
          {
            min: p,
            max: m
          } = this.constraints[f];
        h.set(Be(p, m, l[f]))
      }), this.visualElement.render()
  }
  addListeners() {
    if (!this.visualElement.current) return;
    YD.set(this.visualElement, this);
    const i = this.visualElement.current,
      a = lr(i, "pointerdown", m => {
        const {
          drag: g,
          dragListener: x = !0
        } = this.getProps(), b = m.target, T = b !== i && Ej(b);
        g && x && !T && this.start(m)
      });
    let r;
    const l = () => {
        const {
          dragConstraints: m
        } = this.getProps();
        Ps(m) && m.current && (this.constraints = this.resolveRefConstraints(), r || (r = XD(i, m.current, () => this
          .scalePositionWithinConstraints())))
      },
      {
        projection: u
      } = this.visualElement,
      f = u.addEventListener("measure", l);
    u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()), Ce.read(l);
    const h = gr(window, "resize", () => this.scalePositionWithinConstraints()),
      p = u.addEventListener("didUpdate", (({
        delta: m,
        hasLayoutChanged: g
      }) => {
        this.isDragging && g && (pn(x => {
          const b = this.getAxisMotionValue(x);
          b && (this.originPoint[x] += m[x].translate, b.set(b.get() + m[x].translate))
        }), this.visualElement.render())
      }));
    return () => {
      h(), a(), f(), p && p(), r && r()
    }
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: a = !1,
        dragDirectionLock: r = !1,
        dragPropagation: l = !1,
        dragConstraints: u = !1,
        dragElastic: f = vd,
        dragMomentum: h = !0
      } = i;
    return {
      ...i,
      drag: a,
      dragDirectionLock: r,
      dragPropagation: l,
      dragConstraints: u,
      dragElastic: f,
      dragMomentum: h
    }
  }
}

function D0(t) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return
    }
    t()
  }
}

function XD(t, i, a) {
  const r = hd(t, D0(a)),
    l = hd(i, D0(a));
  return () => {
    r(), l()
  }
}

function Ko(t, i, a) {
  return (i === !0 || i === t) && (a === null || a === t)
}

function QD(t, i = 10) {
  let a = null;
  return Math.abs(t.y) > i ? a = "y" : Math.abs(t.x) > i && (a = "x"), a
}
class FD extends Ai {
  constructor(i) {
    super(i), this.removeGroupControls = St, this.removeListeners = St, this.controls = new GD(i)
  }
  mount() {
    const {
      dragControls: i
    } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls
      .addListeners() || St
  }
  update() {
    const {
      dragControls: i
    } = this.node.getProps(), {
      dragControls: a
    } = this.node.prevProps || {};
    i !== a && (this.removeGroupControls(), i && (this.removeGroupControls = i.subscribe(this.controls)))
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
  }
}
const Of = t => (i, a) => {
  t && Ce.update(() => t(i, a), !1, !0)
};
class KD extends Ai {
  constructor() {
    super(...arguments), this.removePointerDownListener = St
  }
  onPointerDown(i) {
    this.session = new Sw(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ww(this.node)
    })
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: a,
      onPan: r,
      onPanEnd: l
    } = this.node.getProps();
    return {
      onSessionStart: Of(i),
      onStart: Of(a),
      onMove: Of(r),
      onEnd: (u, f) => {
        delete this.session, l && Ce.postRender(() => l(u, f))
      }
    }
  }
  mount() {
    this.removePointerDownListener = lr(this.node.current, "pointerdown", i => this.onPointerDown(i))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
let Df = !1;
class ZD extends S.Component {
  componentDidMount() {
    const {
      visualElement: i,
      layoutGroup: a,
      switchLayoutGroup: r,
      layoutId: l
    } = this.props, {
      projection: u
    } = i;
    u && (a.group && a.group.add(u), r && r.register && l && r.register(u), Df && u.root.didUpdate(), u
      .addEventListener("animationComplete", () => {
        this.safeToRemove()
      }), u.setOptions({
        ...u.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      })), rl.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(i) {
    const {
      layoutDependency: a,
      visualElement: r,
      drag: l,
      isPresent: u
    } = this.props, {
      projection: f
    } = r;
    return f && (f.isPresent = u, i.layoutDependency !== a && f.setOptions({
        ...f.options,
        layoutDependency: a
      }), Df = !0, l || i.layoutDependency !== a || a === void 0 || i.isPresent !== u ? f.willUpdate() : this
      .safeToRemove(), i.isPresent !== u && (u ? f.promote() : f.relegate() || Ce.postRender(() => {
        const h = f.getStack();
        (!h || !h.members.length) && this.safeToRemove()
      }))), null
  }
  componentDidUpdate() {
    const {
      projection: i
    } = this.props.visualElement;
    i && (i.root.didUpdate(), mh.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove()
    }))
  }
  componentWillUnmount() {
    const {
      visualElement: i,
      layoutGroup: a,
      switchLayoutGroup: r
    } = this.props, {
      projection: l
    } = i;
    Df = !0, l && (l.scheduleCheckAfterUnmount(), a && a.group && a.group.remove(l), r && r.deregister && r
      .deregister(l))
  }
  safeToRemove() {
    const {
      safeToRemove: i
    } = this.props;
    i && i()
  }
  render() {
    return null
  }
}

function Aw(t) {
  const [i, a] = dw(), r = S.useContext(Xd);
  return y.jsx(ZD, {
    ...t,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(xw),
    isPresent: i,
    safeToRemove: a
  })
}
const WD = {
  pan: {
    Feature: KD
  },
  drag: {
    Feature: FD,
    ProjectionNode: fw,
    MeasureLayout: Aw
  }
};

function _0(t, i, a) {
  const {
    props: r
  } = t;
  t.animationState && r.whileHover && t.animationState.setActive("whileHover", a === "Start");
  const l = "onHover" + a,
    u = r[l];
  u && Ce.postRender(() => u(i, Tr(i)))
}
class $D extends Ai {
  mount() {
    const {
      current: i
    } = this.node;
    i && (this.unmount = wj(i, (a, r) => (_0(this.node, r, "Start"), l => _0(this.node, l, "End"))))
  }
  unmount() {}
}
class ID extends Ai {
  constructor() {
    super(...arguments), this.isActive = !1
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible")
    } catch {
      i = !0
    }!i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this
      .isActive = !1)
  }
  mount() {
    this.unmount = br(gr(this.node.current, "focus", () => this.onFocus()), gr(this.node.current, "blur", () => this
      .onBlur()))
  }
  unmount() {}
}

function z0(t, i, a) {
  const {
    props: r
  } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && r.whileTap && t.animationState.setActive("whileTap", a === "Start");
  const l = "onTap" + (a === "End" ? "" : a),
    u = r[l];
  u && Ce.postRender(() => u(i, Tr(i)))
}
class JD extends Ai {
  mount() {
    const {
      current: i
    } = this.node;
    if (!i) return;
    const {
      globalTapTarget: a,
      propagate: r
    } = this.node.props;
    this.unmount = Rj(i, (l, u) => (z0(this.node, u, "Start"), (f, {
      success: h
    }) => z0(this.node, f, h ? "End" : "Cancel")), {
      useGlobalTarget: a,
      stopPropagation: r?.tap === !1
    })
  }
  unmount() {}
}
const xd = new WeakMap,
  _f = new WeakMap,
  e3 = t => {
    const i = xd.get(t.target);
    i && i(t)
  },
  t3 = t => {
    t.forEach(e3)
  };

function n3({
  root: t,
  ...i
}) {
  const a = t || document;
  _f.has(a) || _f.set(a, {});
  const r = _f.get(a),
    l = JSON.stringify(i);
  return r[l] || (r[l] = new IntersectionObserver(t3, {
    root: t,
    ...i
  })), r[l]
}

function i3(t, i, a) {
  const r = n3(i);
  return xd.set(t, a), r.observe(t), () => {
    xd.delete(t), r.unobserve(t)
  }
}
const s3 = {
  some: 0,
  all: 1
};
class a3 extends Ai {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
  }
  startObserver() {
    this.unmount();
    const {
      viewport: i = {}
    } = this.node.getProps(), {
      root: a,
      margin: r,
      amount: l = "some",
      once: u
    } = i, f = {
      root: a ? a.current : void 0,
      rootMargin: r,
      threshold: typeof l == "number" ? l : s3[l]
    }, h = p => {
      const {
        isIntersecting: m
      } = p;
      if (this.isInView === m || (this.isInView = m, u && !m && this.hasEnteredView)) return;
      m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView",
        m);
      const {
        onViewportEnter: g,
        onViewportLeave: x
      } = this.node.getProps(), b = m ? g : x;
      b && b(p)
    };
    return i3(this.node.current, f, h)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const {
      props: i,
      prevProps: a
    } = this.node;
    ["amount", "margin", "root"].some(r3(i, a)) && this.startObserver()
  }
  unmount() {}
}

function r3({
  viewport: t = {}
}, {
  viewport: i = {}
} = {}) {
  return a => t[a] !== i[a]
}
const o3 = {
    inView: {
      Feature: a3
    },
    tap: {
      Feature: JD
    },
    focus: {
      Feature: ID
    },
    hover: {
      Feature: $D
    }
  },
  l3 = {
    layout: {
      ProjectionNode: fw,
      MeasureLayout: Aw
    }
  },
  c3 = {
    ...DD,
    ...o3,
    ...WD,
    ...l3
  },
  Pe = RD(c3, MD);

function u3(t, i, a) {
  S.useInsertionEffect(() => t.on(i, a), [t, i, a])
}

function Tl(t) {
  return typeof window > "u" ? !1 : t ? g1() : lh()
}
const f3 = 50,
  V0 = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
  }),
  d3 = () => ({
    time: 0,
    x: V0(),
    y: V0()
  }),
  h3 = {
    x: {
      length: "Width",
      position: "Left"
    },
    y: {
      length: "Height",
      position: "Top"
    }
  };

function L0(t, i, a, r) {
  const l = a[i],
    {
      length: u,
      position: f
    } = h3[i],
    h = l.current,
    p = a.time;
  l.current = Math.abs(t[`scroll${f}`]), l.scrollLength = t[`scroll${u}`] - t[`client${u}`], l.offset.length = 0, l
    .offset[0] = 0, l.offset[1] = l.scrollLength, l.progress = Zs(0, l.scrollLength, l.current);
  const m = r - p;
  l.velocity = m > f3 ? 0 : Zd(l.current - h, m)
}

function m3(t, i, a) {
  L0(t, "x", i, a), L0(t, "y", i, a), i.time = a
}

function p3(t, i) {
  const a = {
    x: 0,
    y: 0
  };
  let r = t;
  for (; r && r !== i;)
    if (vl(r)) a.x += r.offsetLeft, a.y += r.offsetTop, r = r.offsetParent;
    else if (r.tagName === "svg") {
    const l = r.getBoundingClientRect();
    r = r.parentElement;
    const u = r.getBoundingClientRect();
    a.x += l.left - u.left, a.y += l.top - u.top
  } else if (r instanceof SVGGraphicsElement) {
    const {
      x: l,
      y: u
    } = r.getBBox();
    a.x += l, a.y += u;
    let f = null,
      h = r.parentNode;
    for (; !f;) h.tagName === "svg" && (f = h), h = r.parentNode;
    r = f
  } else break;
  return a
}
const bd = {
  start: 0,
  center: .5,
  end: 1
};

function k0(t, i, a = 0) {
  let r = 0;
  if (t in bd && (t = bd[t]), typeof t == "string") {
    const l = parseFloat(t);
    t.endsWith("px") ? r = l : t.endsWith("%") ? t = l / 100 : t.endsWith("vw") ? r = l / 100 * document.documentElement
      .clientWidth : t.endsWith("vh") ? r = l / 100 * document.documentElement.clientHeight : t = l
  }
  return typeof t == "number" && (r = i * t), a + r
}
const g3 = [0, 0];

function y3(t, i, a, r) {
  let l = Array.isArray(t) ? t : g3,
    u = 0,
    f = 0;
  return typeof t == "number" ? l = [t, t] : typeof t == "string" && (t = t.trim(), t.includes(" ") ? l = t.split(" ") :
    l = [t, bd[t] ? t : "0"]), u = k0(l[0], a, r), f = k0(l[1], i), u - f
}
const ir = {
    Enter: [
      [0, 1],
      [1, 1]
    ],
    Exit: [
      [0, 0],
      [1, 0]
    ],
    Any: [
      [1, 0],
      [0, 1]
    ],
    All: [
      [0, 0],
      [1, 1]
    ]
  },
  v3 = {
    x: 0,
    y: 0
  };

function x3(t) {
  return "getBBox" in t && t.tagName !== "svg" ? t.getBBox() : {
    width: t.clientWidth,
    height: t.clientHeight
  }
}

function b3(t, i, a) {
  const {
    offset: r = ir.All
  } = a, {
    target: l = t,
    axis: u = "y"
  } = a, f = u === "y" ? "height" : "width", h = l !== t ? p3(l, t) : v3, p = l === t ? {
    width: t.scrollWidth,
    height: t.scrollHeight
  } : x3(l), m = {
    width: t.clientWidth,
    height: t.clientHeight
  };
  i[u].offset.length = 0;
  let g = !i[u].interpolate;
  const x = r.length;
  for (let b = 0; b < x; b++) {
    const T = y3(r[b], m[f], p[f], h[u]);
    !g && T !== i[u].interpolatorOffsets[b] && (g = !0), i[u].offset[b] = T
  }
  g && (i[u].interpolate = u1(i[u].offset, f1(r), {
    clamp: !1
  }), i[u].interpolatorOffsets = [...i[u].offset]), i[u].progress = rn(0, 1, i[u].interpolate(i[u].current))
}

function w3(t, i = t, a) {
  if (a.x.targetOffset = 0, a.y.targetOffset = 0, i !== t) {
    let r = i;
    for (; r && r !== t;) a.x.targetOffset += r.offsetLeft, a.y.targetOffset += r.offsetTop, r = r.offsetParent
  }
  a.x.targetLength = i === t ? i.scrollWidth : i.clientWidth, a.y.targetLength = i === t ? i.scrollHeight : i
    .clientHeight, a.x.containerLength = t.clientWidth, a.y.containerLength = t.clientHeight
}

function S3(t, i, a, r = {}) {
  return {
    measure: l => {
      w3(t, r.target, a), m3(t, a, l), (r.offset || r.target) && b3(t, a, r)
    },
    notify: () => i(a)
  }
}
const ks = new WeakMap,
  P0 = new WeakMap,
  zf = new WeakMap,
  U0 = new WeakMap,
  Zo = new WeakMap,
  B0 = t => t === document.scrollingElement ? window : t;

function Ew(t, {
  container: i = document.scrollingElement,
  trackContentSize: a = !1,
  ...r
} = {}) {
  if (!i) return St;
  let l = zf.get(i);
  l || (l = new Set, zf.set(i, l));
  const u = d3(),
    f = S3(i, t, u, r);
  if (l.add(f), !ks.has(i)) {
    const p = () => {
        for (const b of l) b.measure(at.timestamp);
        Ce.preUpdate(m)
      },
      m = () => {
        for (const b of l) b.notify()
      },
      g = () => Ce.read(p);
    ks.set(i, g);
    const x = B0(i);
    window.addEventListener("resize", g), i !== document.documentElement && P0.set(i, hd(i, g)), x.addEventListener(
      "scroll", g), g()
  }
  if (a && !Zo.has(i)) {
    const p = ks.get(i),
      m = {
        width: i.scrollWidth,
        height: i.scrollHeight
      };
    U0.set(i, m);
    const g = () => {
        const b = i.scrollWidth,
          T = i.scrollHeight;
        (m.width !== b || m.height !== T) && (p(), m.width = b, m.height = T)
      },
      x = Ce.read(g, !0);
    Zo.set(i, x)
  }
  const h = ks.get(i);
  return Ce.read(h, !1, !0), () => {
    on(h);
    const p = zf.get(i);
    if (!p || (p.delete(f), p.size)) return;
    const m = ks.get(i);
    ks.delete(i), m && (B0(i).removeEventListener("scroll", m), P0.get(i)?.(), window.removeEventListener("resize",
      m));
    const g = Zo.get(i);
    g && (on(g), Zo.delete(i)), U0.delete(i)
  }
}
const T3 = [
  [ir.Enter, "entry"],
  [ir.Exit, "exit"],
  [ir.Any, "cover"],
  [ir.All, "contain"]
];

function A3(t, i) {
  if (t.length !== 2) return !1;
  for (let a = 0; a < 2; a++) {
    const r = t[a],
      l = i[a];
    if (!Array.isArray(r) || r.length !== 2 || r[0] !== l[0] || r[1] !== l[1]) return !1
  }
  return !0
}

function Eh(t) {
  if (!t) return {
    rangeStart: "contain 0%",
    rangeEnd: "contain 100%"
  };
  for (const [i, a] of T3)
    if (A3(t, i)) return {
      rangeStart: `${a} 0%`,
      rangeEnd: `${a} 100%`
    }
}
const H0 = new Map;

function q0(t) {
  const i = {
      value: 0
    },
    a = Ew(r => {
      i.value = r[t.axis].progress * 100
    }, t);
  return {
    currentTime: i,
    cancel: a
  }
}

function Cw({
  source: t,
  container: i,
  ...a
}) {
  const {
    axis: r
  } = a;
  t && (i = t);
  let l = H0.get(i);
  l || (l = new Map, H0.set(i, l));
  const u = a.target ?? "self";
  let f = l.get(u);
  f || (f = {}, l.set(u, f));
  const h = r + (a.offset ?? []).join(",");
  return f[h] || (a.target && Tl(a.target) ? Eh(a.offset) ? f[h] = new ViewTimeline({
    subject: a.target,
    axis: r
  }) : f[h] = q0({
    container: i,
    ...a
  }) : Tl() ? f[h] = new ScrollTimeline({
    source: i,
    axis: r
  }) : f[h] = q0({
    container: i,
    ...a
  })), f[h]
}

function E3(t, i) {
  const a = Cw(i),
    r = i.target ? Eh(i.offset) : void 0,
    l = i.target ? Tl(i.target) && !!r : Tl();
  return t.attachTimeline({
    timeline: l ? a : void 0,
    ...r && l && {
      rangeStart: r.rangeStart,
      rangeEnd: r.rangeEnd
    },
    observe: u => (u.pause(), U1(f => {
      u.time = u.iterationDuration * f
    }, a))
  })
}

function C3(t) {
  return t.length === 2
}

function R3(t, i) {
  return C3(t) ? Ew(a => {
    t(a[i.axis].progress, a)
  }, i) : U1(t, Cw(i))
}

function Rw(t, {
  axis: i = "y",
  container: a = document.scrollingElement,
  ...r
} = {}) {
  if (!a) return St;
  const l = {
    axis: i,
    container: a,
    ...r
  };
  return typeof t == "function" ? R3(t, l) : E3(t, l)
}
const M3 = () => ({
    scrollX: yn(0),
    scrollY: yn(0),
    scrollXProgress: yn(0),
    scrollYProgress: yn(0)
  }),
  Wo = t => t ? !t.current : !1;

function Y0(t, i, a, r) {
  return {
    factory: l => Rw(l, {
      ...i,
      axis: t,
      container: a?.current || void 0,
      target: r?.current || void 0
    }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: l => l,
    duration: 1
  }
}

function N3(t, i) {
  return typeof window > "u" ? !1 : t ? g1() && !!Eh(i) : lh()
}

function j3({
  container: t,
  target: i,
  ...a
} = {}) {
  const r = Ul(M3);
  N3(i, a.offset) && (r.scrollXProgress.accelerate = Y0("x", a, t, i), r.scrollYProgress.accelerate = Y0("y", a, t, i));
  const l = S.useRef(null),
    u = S.useRef(!1),
    f = S.useCallback(() => (l.current = Rw((h, {
      x: p,
      y: m
    }) => {
      r.scrollX.set(p.current), r.scrollXProgress.set(p.progress), r.scrollY.set(m.current), r.scrollYProgress
        .set(m.progress)
    }, {
      ...a,
      container: t?.current || void 0,
      target: i?.current || void 0
    }), () => {
      l.current?.()
    }), [t, i, JSON.stringify(a.offset)]);
  return Qd(() => {
    if (u.current = !1, Wo(t) || Wo(i)) {
      u.current = !0;
      return
    } else return f()
  }, [f]), S.useEffect(() => {
    if (u.current) return dr(!Wo(t)), dr(!Wo(i)), f()
  }, [f]), r
}
var O3 = Symbol.for("react.lazy"),
  Al = wd[" use ".trim().toString()];

function D3(t) {
  return typeof t == "object" && t !== null && "then" in t
}

function Mw(t) {
  return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === O3 && "_payload" in t && D3(t._payload)
}

function _3(t) {
  const i = V3(t),
    a = S.forwardRef((r, l) => {
      let {
        children: u,
        ...f
      } = r;
      Mw(u) && typeof Al == "function" && (u = Al(u._payload));
      const h = S.Children.toArray(u),
        p = h.find(k3);
      if (p) {
        const m = p.props.children,
          g = h.map(x => x === p ? S.Children.count(m) > 1 ? S.Children.only(null) : S.isValidElement(m) ? m.props
            .children : null : x);
        return y.jsx(i, {
          ...f,
          ref: l,
          children: S.isValidElement(m) ? S.cloneElement(m, void 0, g) : null
        })
      }
      return y.jsx(i, {
        ...f,
        ref: l,
        children: u
      })
    });
  return a.displayName = `${t}.Slot`, a
}
var z3 = _3("Slot");

function V3(t) {
  const i = S.forwardRef((a, r) => {
    let {
      children: l,
      ...u
    } = a;
    if (Mw(l) && typeof Al == "function" && (l = Al(l._payload)), S.isValidElement(l)) {
      const f = U3(l),
        h = P3(u, l.props);
      return l.type !== S.Fragment && (h.ref = r ? Rd(r, f) : f), S.cloneElement(l, h)
    }
    return S.Children.count(l) > 1 ? S.Children.only(null) : null
  });
  return i.displayName = `${t}.SlotClone`, i
}
var L3 = Symbol("radix.slottable");

function k3(t) {
  return S.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === L3
}

function P3(t, i) {
  const a = {
    ...i
  };
  for (const r in i) {
    const l = t[r],
      u = i[r];
    /^on[A-Z]/.test(r) ? l && u ? a[r] = (...h) => {
      const p = u(...h);
      return l(...h), p
    } : l && (a[r] = l) : r === "style" ? a[r] = {
      ...l,
      ...u
    } : r === "className" && (a[r] = [l, u].filter(Boolean).join(" "))
  }
  return {
    ...t,
    ...a
  }
}

function U3(t) {
  let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    a = i && "isReactWarning" in i && i.isReactWarning;
  return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i
    .isReactWarning, a ? t.props.ref : t.props.ref || t.ref)
}
const B3 = Vx(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground border border-primary-border",
          destructive: "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
          outline: " border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",
          secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }),
  Bn = S.forwardRef(({
    className: t,
    variant: i,
    size: a,
    asChild: r = !1,
    ...l
  }, u) => {
    const f = r ? z3 : "button";
    return y.jsx(f, {
      className: At(B3({
        variant: i,
        size: a,
        className: t
      })),
      ref: u,
      ...l
    })
  });
Bn.displayName = "Button";
const G0 = [{
  label: "Services",
  href: "#services"
}, {
  label: "Portfolio",
  href: "#portfolio"
}, {
  label: "Reviews",
  href: "#testimonials"
}, {
  label: "FAQ",
  href: "#faq"
}];

function H3() {
  const {
    scrollY: t
  } = j3(), [i, a] = S.useState(!1), [r, l] = S.useState(!1);
  u3(t, "change", f => {
    a(f > 50)
  }), S.useEffect(() => (r ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = ""
  }), [r]);
  const u = () => l(!1);
  return y.jsxs(y.Fragment, {
    children: [y.jsx(Pe.header, {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${i||r?"bg-background/95 backdrop-blur-md border-b border-border py-4":"bg-transparent py-6"}`,
      initial: {
        y: -100
      },
      animate: {
        y: 0
      },
      transition: {
        duration: .8,
        ease: [.16, 1, .3, 1]
      },
      children: y.jsxs("div", {
        className: "container mx-auto px-6 flex items-center justify-between",
        children: [y.jsxs(RA, {
          href: "/",
          className: "flex items-center gap-2.5 group",
          onClick: u,
          children: [y.jsx("div", {
            className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-extrabold text-lg tracking-tighter group-hover:scale-105 transition-transform shadow-[0_0_14px_hsl(252,71%,51%,0.5)]",
            children: "C"
          }), y.jsxs("span", {
            className: "font-extrabold text-xl tracking-tight",
            children: ["Codez", y.jsx("span", {
              className: "text-primary",
              children: "."
            })]
          })]
        }), y.jsxs("nav", {
          className: "hidden md:flex items-center gap-8",
          children: [G0.map(f => y.jsx("a", {
            href: f.href,
            className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
            children: f.label
          }, f.href)), y.jsx("a", {
            href: "#contact",
            children: y.jsx(Bn, {
              variant: "default",
              className: "font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-[0_0_16px_hsl(252,71%,51%,0.3)]",
              children: "Get a Quote"
            })
          })]
        }), y.jsx("button", {
          className: "md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-background/50 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all",
          onClick: () => l(f => !f),
          "aria-label": "Toggle menu",
          children: r ? y.jsx(Ux, {
            className: "w-5 h-5"
          }) : y.jsx(AE, {
            className: "w-5 h-5"
          })
        })]
      })
    }), y.jsx(Sh, {
      children: r && y.jsxs(Pe.div, {
        initial: {
          opacity: 0,
          y: -16
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: -16
        },
        transition: {
          duration: .22,
          ease: "easeOut"
        },
        className: "fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col pt-24 px-8 pb-10 md:hidden",
        children: [y.jsx("nav", {
          className: "flex flex-col gap-2 flex-1",
          children: G0.map((f, h) => y.jsx(Pe.a, {
            href: f.href,
            onClick: u,
            initial: {
              opacity: 0,
              x: -20
            },
            animate: {
              opacity: 1,
              x: 0
            },
            transition: {
              delay: h * .06,
              duration: .25
            },
            className: "text-2xl font-bold text-foreground/70 hover:text-foreground py-4 border-b border-border/50 transition-colors",
            children: f.label
          }, f.href))
        }), y.jsx(Pe.div, {
          initial: {
            opacity: 0,
            y: 16
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            delay: .28,
            duration: .25
          },
          children: y.jsx("a", {
            href: "#contact",
            onClick: u,
            className: "block",
            children: y.jsx(Bn, {
              size: "lg",
              className: "w-full h-14 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-[0_0_30px_hsl(252,71%,51%,0.35)]",
              children: "Get a Quote"
            })
          })
        })]
      }, "mobile-menu")
    })]
  })
}

function q3() {
  const [t, i] = S.useState(!1);
  S.useEffect(() => {
    const r = () => i(window.scrollY > 400);
    return window.addEventListener("scroll", r, {
      passive: !0
    }), () => window.removeEventListener("scroll", r)
  }, []);
  const a = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  return y.jsx(Sh, {
    children: t && y.jsx(Pe.button, {
      initial: {
        opacity: 0,
        scale: .8,
        y: 10
      },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        scale: .8,
        y: 10
      },
      transition: {
        duration: .25
      },
      onClick: a,
      className: "fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_24px_hsl(252,71%,51%,0.5)] hover:bg-primary/90 hover:scale-110 active:scale-95 transition-transform",
      "aria-label": "Back to top",
      children: y.jsx(fE, {
        className: "w-5 h-5"
      })
    })
  })
}

function Y3() {
  return y.jsxs("section", {
    className: "relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-grid-pattern opacity-40"
    }), y.jsx("div", {
      className: "glow-orb w-[900px] h-[900px] top-[-250px] left-[-250px]"
    }), y.jsx("div", {
      className: "glow-orb-secondary w-[700px] h-[700px] bottom-[-150px] right-[-150px] opacity-60"
    }), y.jsx("div", {
      className: "container mx-auto px-6 relative z-10",
      children: y.jsxs("div", {
        className: "max-w-4xl mx-auto text-center",
        children: [y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: .5,
            delay: .1
          },
          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8",
          children: [y.jsx("div", {
            className: "w-2 h-2 rounded-full bg-primary animate-pulse"
          }), y.jsx("span", {
            className: "text-xs font-mono text-primary/90 uppercase tracking-widest",
            children: "Websites & Mobile Applications"
          })]
        }), y.jsxs(Pe.h1, {
          className: "text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-6",
          initial: {
            opacity: 0,
            y: 30
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: .7,
            delay: .2,
            ease: [.16, 1, .3, 1]
          },
          children: ["We build digital products ", y.jsx("br", {}), y.jsx("span", {
            className: "text-gradient-primary",
            children: "people love to use."
          })]
        }), y.jsx(Pe.p, {
          className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: .7,
            delay: .3,
            ease: [.16, 1, .3, 1]
          },
          children: "Codez is a software services company crafting high-quality websites and mobile applications for businesses ready to make an impact online."
        }), y.jsxs(Pe.div, {
          className: "flex flex-col sm:flex-row items-center justify-center gap-4",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: .7,
            delay: .4,
            ease: [.16, 1, .3, 1]
          },
          children: [y.jsx("a", {
            href: "#contact",
            className: "w-full sm:w-auto",
            children: y.jsxs(Bn, {
              size: "lg",
              className: "w-full h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold rounded-xl group shadow-[0_0_30px_hsl(252,71%,51%,0.3)]",
              children: ["Start Your Project", y.jsx(_d, {
                className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              })]
            })
          }), y.jsx("a", {
            href: "#portfolio",
            className: "w-full sm:w-auto",
            children: y.jsx(Bn, {
              size: "lg",
              variant: "outline",
              className: "w-full h-14 px-8 border-white/10 hover:bg-white/5 text-base font-medium rounded-xl",
              children: "View Our Work"
            })
          })]
        }), y.jsxs(Pe.div, {
          className: "flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 text-sm text-muted-foreground",
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          transition: {
            duration: .8,
            delay: .7
          },
          children: [y.jsxs("div", {
            className: "flex items-center gap-2",
            children: [y.jsx(Us, {
              className: "w-4 h-4 text-primary"
            }), y.jsx("span", {
              children: "Custom Websites"
            })]
          }), y.jsx("div", {
            className: "w-1 h-1 rounded-full bg-border hidden sm:block"
          }), y.jsxs("div", {
            className: "flex items-center gap-2",
            children: [y.jsx(ll, {
              className: "w-4 h-4 text-primary"
            }), y.jsx("span", {
              children: "iOS & Android Apps"
            })]
          }), y.jsx("div", {
            className: "w-1 h-1 rounded-full bg-border hidden sm:block"
          }), y.jsxs("div", {
            className: "flex items-center gap-2",
            children: [y.jsx("div", {
              className: "w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center",
              children: y.jsx("div", {
                className: "w-1.5 h-1.5 rounded-full bg-primary"
              })
            }), y.jsx("span", {
              children: "End-to-End Delivery"
            })]
          })]
        })]
      })
    })]
  })
}
const G3 = ["Luminary Retail", "TrackFit Pro", "Meridian Realty", "Apex Ventures", "Novu Health", "Prism Studios"];

function X3() {
  return y.jsx("section", {
    className: "py-20 border-y border-border bg-card/50",
    children: y.jsxs("div", {
      className: "container mx-auto px-6",
      children: [y.jsx("p", {
        className: "text-center text-xs font-mono text-muted-foreground uppercase tracking-widest mb-10",
        children: "Trusted by businesses worldwide"
      }), y.jsx("div", {
        className: "flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 opacity-50 hover:opacity-80 transition-opacity duration-700",
        children: G3.map((t, i) => y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            y: 10
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            delay: i * .1,
            duration: .4
          },
          className: "text-lg md:text-xl font-bold tracking-tight text-foreground/70 flex items-center gap-2",
          children: [y.jsx("div", {
            className: "w-5 h-5 rounded bg-primary/20 border border-primary/30 flex items-center justify-center",
            children: y.jsx("div", {
              className: "w-2 h-2 rounded-sm bg-primary/60"
            })
          }), t]
        }, t))
      })]
    })
  })
}

function Q3() {
  return y.jsxs("section", {
    className: "py-20 md:py-32 relative overflow-hidden",
    id: "about",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-background z-0"
    }), y.jsx("div", {
      className: "container mx-auto px-6 relative z-10",
      children: y.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
        children: [y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            x: -30
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            duration: .6
          },
          children: [y.jsxs("div", {
            className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-6",
            children: [y.jsx("div", {
              className: "w-6 h-px bg-primary"
            }), "Why Codez"]
          }), y.jsxs("h2", {
            className: "text-3xl md:text-5xl font-bold mb-6 tracking-tight",
            children: ["Your digital presence is your", y.jsx("br", {}), y.jsx("span", {
              className: "text-gradient-primary italic",
              children: "first impression."
            })]
          }), y.jsxs("div", {
            className: "space-y-5 text-muted-foreground text-lg leading-relaxed",
            children: [y.jsx("p", {
              children: "Most agencies churn out templated sites that look like everyone else's. Your business is unique — your website and app should be too."
            }), y.jsx("p", {
              children: "At Codez, we take the time to understand your brand, your customers, and your goals. Then we craft a digital product that genuinely represents who you are and converts visitors into loyal customers."
            })]
          }), y.jsx("div", {
            className: "mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6",
            children: [{
              icon: BE,
              label: "Fast Delivery",
              value: "2–6 wks"
            }, {
              icon: Px,
              label: "Client Rating",
              value: "5.0 / 5"
            }, {
              icon: xE,
              label: "Ongoing Support",
              value: "Always"
            }].map((t, i) => y.jsxs("div", {
              className: "flex flex-col gap-2",
              children: [y.jsx(t.icon, {
                className: "w-6 h-6 text-primary"
              }), y.jsx("div", {
                className: "text-2xl font-bold font-mono text-white",
                children: t.value
              }), y.jsx("div", {
                className: "text-sm text-muted-foreground uppercase tracking-wider",
                children: t.label
              })]
            }, i))
          })]
        }), y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            scale: .92
          },
          whileInView: {
            opacity: 1,
            scale: 1
          },
          viewport: {
            once: !0
          },
          transition: {
            duration: .8
          },
          className: "relative",
          children: [y.jsxs("div", {
            className: "rounded-2xl bg-card border border-border overflow-hidden p-8 flex flex-col relative group",
            children: [y.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            }), y.jsxs("div", {
              className: "flex items-center gap-3 mb-6",
              children: [y.jsx("div", {
                className: "w-3 h-3 rounded-full bg-red-500"
              }), y.jsx("div", {
                className: "w-3 h-3 rounded-full bg-yellow-500"
              }), y.jsx("div", {
                className: "w-3 h-3 rounded-full bg-green-500"
              }), y.jsx("div", {
                className: "text-xs font-mono text-muted-foreground ml-4",
                children: "App.tsx"
              })]
            }), y.jsxs("div", {
              className: "font-mono text-sm text-muted-foreground/80 space-y-1.5",
              children: [y.jsxs("p", {
                children: [y.jsx("span", {
                  className: "text-pink-400",
                  children: "import"
                }), " ", y.jsx("span", {
                  className: "text-blue-300",
                  children: "React"
                }), " ", y.jsx("span", {
                  className: "text-pink-400",
                  children: "from"
                }), " ", y.jsx("span", {
                  className: "text-green-400",
                  children: "'react'"
                }), ";"]
              }), y.jsxs("p", {
                className: "mt-3",
                children: [y.jsx("span", {
                  className: "text-pink-400",
                  children: "export default function"
                }), " ", y.jsx("span", {
                  className: "text-yellow-200",
                  children: "App"
                }), "() ", "{"]
              }), y.jsx("p", {
                className: "pl-4 text-gray-500",
                children: "// Your brand, beautifully engineered"
              }), y.jsxs("p", {
                className: "pl-4 mt-2",
                children: [y.jsx("span", {
                  className: "text-pink-400",
                  children: "return"
                }), " ("]
              }), y.jsxs("p", {
                className: "pl-8",
                children: [y.jsx("span", {
                  className: "text-blue-300",
                  children: "<main"
                }), " ", y.jsx("span", {
                  className: "text-orange-300",
                  children: "className"
                }), "=", y.jsx("span", {
                  className: "text-green-400",
                  children: '"your-vision"'
                }), y.jsx("span", {
                  className: "text-blue-300",
                  children: ">"
                })]
              }), y.jsxs("p", {
                className: "pl-12",
                children: [y.jsx("span", {
                  className: "text-blue-300",
                  children: "<Hero"
                }), " ", y.jsx("span", {
                  className: "text-orange-300",
                  children: "headline"
                }), "=", y.jsx("span", {
                  className: "text-green-400",
                  children: '"Built for growth"'
                }), " ", y.jsx("span", {
                  className: "text-blue-300",
                  children: "/>"
                })]
              }), y.jsxs("p", {
                className: "pl-12",
                children: [y.jsx("span", {
                  className: "text-blue-300",
                  children: "<Services"
                }), " ", y.jsx("span", {
                  className: "text-orange-300",
                  children: "items"
                }), "=", "{", y.jsx("span", {
                  className: "text-purple-300",
                  children: "services"
                }), "}", " ", y.jsx("span", {
                  className: "text-blue-300",
                  children: "/>"
                })]
              }), y.jsxs("p", {
                className: "pl-12",
                children: [y.jsx("span", {
                  className: "text-blue-300",
                  children: "<CTA"
                }), " ", y.jsx("span", {
                  className: "text-orange-300",
                  children: "action"
                }), "=", y.jsx("span", {
                  className: "text-green-400",
                  children: '"Get started"'
                }), " ", y.jsx("span", {
                  className: "text-blue-300",
                  children: "/>"
                })]
              }), y.jsx("p", {
                className: "pl-8",
                children: y.jsx("span", {
                  className: "text-blue-300",
                  children: "</main>"
                })
              }), y.jsx("p", {
                className: "pl-4",
                children: ");"
              }), y.jsx("p", {
                children: "}"
              })]
            })]
          }), y.jsx("div", {
            className: "absolute -top-10 -right-10 w-48 h-48 bg-primary/15 rounded-full blur-3xl"
          }), y.jsx("div", {
            className: "absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/15 rounded-full blur-3xl"
          })]
        })]
      })
    })]
  })
}
const F3 = [{
  icon: Us,
  title: "Website Development",
  description: "From sleek landing pages to powerful web applications, we design and build websites that look stunning and perform flawlessly across all devices.",
  features: ["Landing Pages & Marketing Sites", "Web Applications & Portals", "E-commerce Solutions",
    "CMS Integration"
  ]
}, {
  icon: ll,
  title: "Mobile App Development",
  description: "We build polished iOS and Android apps that users actually enjoy. Whether native or cross-platform, your app will be fast, intuitive, and reliable.",
  features: ["iOS & Android Apps", "React Native / Flutter", "App Store Publishing",
    "Push Notifications & Analytics"
  ]
}, {
  icon: wE,
  title: "Full-Stack & Integrations",
  description: "Beyond the interface, we build the backend systems, APIs, and third-party integrations that power your product — scalable from day one.",
  features: ["REST & GraphQL APIs", "Payment Gateways", "Authentication & Security", "Cloud Deployment & Hosting"]
}];

function K3() {
  return y.jsx("section", {
    className: "py-20 md:py-32 bg-card relative",
    id: "services",
    children: y.jsxs("div", {
      className: "container mx-auto px-6",
      children: [y.jsxs("div", {
        className: "flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8",
        children: [y.jsxs("div", {
          className: "max-w-2xl",
          children: [y.jsxs("div", {
            className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4",
            children: [y.jsx("div", {
              className: "w-6 h-px bg-primary"
            }), "What We Build"]
          }), y.jsx("h2", {
            className: "text-3xl md:text-5xl font-bold tracking-tight mb-6",
            children: "Our Services."
          }), y.jsx("p", {
            className: "text-muted-foreground text-lg",
            children: "We cover every layer of your digital product — from pixel-perfect UI to the infrastructure running behind it."
          })]
        }), y.jsxs("a", {
          href: "#contact",
          className: "flex items-center gap-2 text-primary font-medium text-sm hover:text-white transition-colors group",
          children: ["Get a Free Quote", y.jsx(_d, {
            className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
          })]
        })]
      }), y.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
        children: F3.map((t, i) => y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            y: 24
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            delay: i * .12,
            duration: .5
          },
          className: "bg-background border border-border p-8 rounded-2xl group hover:border-primary/40 hover:shadow-[0_0_30px_hsl(252,71%,51%,0.1)] transition-all duration-300 cursor-default",
          children: [y.jsx("div", {
            className: "w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-300",
            children: y.jsx(t.icon, {
              className: "w-6 h-6 text-primary"
            })
          }), y.jsx("h3", {
            className: "text-xl font-bold mb-4",
            children: t.title
          }), y.jsx("p", {
            className: "text-muted-foreground mb-8 text-sm leading-relaxed",
            children: t.description
          }), y.jsx("ul", {
            className: "space-y-3",
            children: t.features.map((a, r) => y.jsxs("li", {
              className: "flex items-center gap-3 text-sm text-foreground/70",
              children: [y.jsx("div", {
                className: "w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"
              }), a]
            }, r))
          })]
        }, i))
      })]
    })
  })
}
const Z3 = [{
    name: "React",
    category: "Frontend"
  }, {
    name: "Next.js",
    category: "Frontend"
  }, {
    name: "TypeScript",
    category: "Language"
  }, {
    name: "Flutter",
    category: "Mobile"
  }, {
    name: "React Native",
    category: "Mobile"
  }, {
    name: "Swift",
    category: "iOS"
  }, {
    name: "Node.js",
    category: "Backend"
  }, {
    name: "Python",
    category: "Backend"
  }, {
    name: "PostgreSQL",
    category: "Database"
  }, {
    name: "MongoDB",
    category: "Database"
  }, {
    name: "AWS",
    category: "Cloud"
  }, {
    name: "Vercel",
    category: "Cloud"
  }, {
    name: "Tailwind CSS",
    category: "Styling"
  }, {
    name: "Figma",
    category: "Design"
  }, {
    name: "Stripe",
    category: "Payments"
  }, {
    name: "Firebase",
    category: "Backend"
  }],
  W3 = {
    Frontend: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    Mobile: "text-green-400 bg-green-400/10 border-green-400/20",
    Backend: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    Language: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    Database: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    Cloud: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    Styling: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    Design: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    Payments: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    iOS: "text-slate-300 bg-slate-300/10 border-slate-300/20"
  };

function $3() {
  return y.jsx("section", {
    className: "py-16 md:py-24 border-t border-border bg-card/40",
    id: "stack",
    children: y.jsxs("div", {
      className: "container mx-auto px-6",
      children: [y.jsxs("div", {
        className: "text-center mb-14",
        children: [y.jsxs("div", {
          className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4",
          children: [y.jsx("div", {
            className: "w-6 h-px bg-primary"
          }), "Technology", y.jsx("div", {
            className: "w-6 h-px bg-primary"
          })]
        }), y.jsx("h2", {
          className: "text-3xl md:text-4xl font-bold tracking-tight mb-4",
          children: "Our Tech Stack."
        }), y.jsx("p", {
          className: "text-muted-foreground max-w-xl mx-auto",
          children: "We work with modern, battle-tested technologies to deliver fast, scalable, and maintainable products."
        })]
      }), y.jsx("div", {
        className: "flex flex-wrap justify-center gap-3 max-w-4xl mx-auto",
        children: Z3.map((t, i) => y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            scale: .9
          },
          whileInView: {
            opacity: 1,
            scale: 1
          },
          viewport: {
            once: !0
          },
          transition: {
            delay: i * .04,
            duration: .35
          },
          whileHover: {
            y: -3
          },
          className: "flex items-center gap-2.5 px-4 py-2.5 bg-background border border-border rounded-xl hover:border-primary/30 transition-all duration-200 cursor-default group",
          children: [y.jsx("span", {
            className: "font-semibold text-sm text-foreground group-hover:text-primary transition-colors",
            children: t.name
          }), y.jsx("span", {
            className: `text-[10px] font-mono px-2 py-0.5 rounded-full border ${W3[t.category]??"text-muted-foreground bg-muted border-border"}`,
            children: t.category
          })]
        }, t.name))
      })]
    })
  })
}
const I3 = [{
  title: "Luminary Shop",
  client: "Luminary Retail",
  type: "Web App",
  typeIcon: Us,
  description: "Full-featured e-commerce platform with inventory management, payment integration, and a real-time analytics dashboard.",
  tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
  gradient: "from-violet-600/30 via-purple-500/20 to-transparent",
  accent: "bg-violet-500/20 border-violet-500/30"
}, {
  title: "TrackFit",
  client: "TrackFit Pro",
  type: "Mobile App",
  typeIcon: ll,
  description: "Cross-platform fitness tracking app with workout plans, progress charts, nutrition logging, and social features.",
  tags: ["React Native", "Firebase", "iOS", "Android"],
  gradient: "from-emerald-600/25 via-green-500/15 to-transparent",
  accent: "bg-emerald-500/20 border-emerald-500/30"
}, {
  title: "Meridian Homes",
  client: "Meridian Realty",
  type: "Website",
  typeIcon: Us,
  description: "High-performance property listings website with advanced filtering, virtual tours, and lead capture automation.",
  tags: ["Next.js", "TypeScript", "Vercel", "Figma"],
  gradient: "from-blue-600/25 via-cyan-500/15 to-transparent",
  accent: "bg-blue-500/20 border-blue-500/30"
}, {
  title: "Apex Portal",
  client: "Apex Ventures",
  type: "Web App",
  typeIcon: Us,
  description: "Investor relations portal with document management, portfolio tracking, and secure data room functionality.",
  tags: ["React", "Python", "AWS", "PostgreSQL"],
  gradient: "from-orange-600/25 via-amber-500/15 to-transparent",
  accent: "bg-orange-500/20 border-orange-500/30"
}, {
  title: "Novu Health",
  client: "Novu Health",
  type: "Mobile App",
  typeIcon: ll,
  description: "HIPAA-compliant patient portal enabling appointment booking, medical records access, and secure messaging with providers.",
  tags: ["Flutter", "Node.js", "MongoDB", "AWS"],
  gradient: "from-rose-600/25 via-pink-500/15 to-transparent",
  accent: "bg-rose-500/20 border-rose-500/30"
}, {
  title: "Prism Portfolio",
  client: "Prism Studios",
  type: "Website",
  typeIcon: Us,
  description: "Visually stunning portfolio website for a creative agency with animated case study reveals and custom transitions.",
  tags: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
  gradient: "from-indigo-600/25 via-purple-500/15 to-transparent",
  accent: "bg-indigo-500/20 border-indigo-500/30"
}];

function J3() {
  return y.jsx("section", {
    className: "py-20 md:py-32 border-t border-border",
    id: "portfolio",
    children: y.jsxs("div", {
      className: "container mx-auto px-6",
      children: [y.jsxs("div", {
        className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
        children: [y.jsxs("div", {
          children: [y.jsxs("div", {
            className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4",
            children: [y.jsx("div", {
              className: "w-6 h-px bg-primary"
            }), "Portfolio"]
          }), y.jsx("h2", {
            className: "text-3xl md:text-5xl font-bold tracking-tight",
            children: "Our Work."
          })]
        }), y.jsx("p", {
          className: "text-muted-foreground text-base max-w-sm",
          children: "A selection of websites and apps we've built for clients across industries."
        })]
      }), y.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: I3.map((t, i) => y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            y: 24
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            delay: i * .08,
            duration: .5
          },
          className: "group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-[0_0_30px_hsl(252,71%,51%,0.1)] transition-all duration-300 cursor-pointer flex flex-col",
          children: [y.jsxs("div", {
            className: `relative h-44 bg-gradient-to-br ${t.gradient} bg-card flex items-center justify-center overflow-hidden`,
            children: [y.jsx("div", {
              className: "absolute inset-0 bg-grid-pattern opacity-20"
            }), y.jsx("div", {
              className: `w-16 h-16 rounded-2xl border ${t.accent} flex items-center justify-center backdrop-blur-sm`,
              children: y.jsx(t.typeIcon, {
                className: "w-7 h-7 text-foreground/70"
              })
            }), y.jsx("div", {
              className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-background/30 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
              children: y.jsx(kx, {
                className: "w-4 h-4 text-white"
              })
            }), y.jsx("div", {
              className: "absolute bottom-4 left-4",
              children: y.jsx("span", {
                className: `text-xs font-mono px-2.5 py-1 rounded-full border ${t.accent} text-foreground/80`,
                children: t.type
              })
            })]
          }), y.jsxs("div", {
            className: "p-6 flex flex-col gap-3 flex-1",
            children: [y.jsxs("div", {
              children: [y.jsx("h3", {
                className: "text-lg font-bold group-hover:text-primary transition-colors",
                children: t.title
              }), y.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: t.client
              })]
            }), y.jsx("p", {
              className: "text-sm text-muted-foreground leading-relaxed flex-1",
              children: t.description
            }), y.jsx("div", {
              className: "flex flex-wrap gap-2 pt-2",
              children: t.tags.map(a => y.jsx("span", {
                className: "text-xs font-mono px-2 py-0.5 bg-muted rounded-md text-muted-foreground border border-border",
                children: a
              }, a))
            })]
          })]
        }, i))
      })]
    })
  })
}
const e4 = [{
  num: "01",
  title: "Discovery Call",
  description: "We listen first. We understand your business, your audience, and exactly what you need — before writing a single line of code."
}, {
  num: "02",
  title: "Design & Prototype",
  description: "We craft wireframes and visual designs for your approval. You see what your product will look like before development begins."
}, {
  num: "03",
  title: "Build & Refine",
  description: "Our engineers build your product in focused sprints. You get regular updates and can provide feedback at every stage."
}, {
  num: "04",
  title: "Launch & Support",
  description: "We handle the full deployment process and stick around to make sure everything runs smoothly after launch."
}];

function t4() {
  return y.jsx("section", {
    className: "py-20 md:py-32 border-t border-border",
    id: "process",
    children: y.jsxs("div", {
      className: "container mx-auto px-6",
      children: [y.jsxs("div", {
        className: "text-center max-w-3xl mx-auto mb-20",
        children: [y.jsxs("div", {
          className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4",
          children: [y.jsx("div", {
            className: "w-6 h-px bg-primary"
          }), "How We Work", y.jsx("div", {
            className: "w-6 h-px bg-primary"
          })]
        }), y.jsx("h2", {
          className: "text-3xl md:text-5xl font-bold tracking-tight mb-6",
          children: "Our Process."
        }), y.jsx("p", {
          className: "text-muted-foreground text-lg",
          children: "A simple, transparent process that keeps you informed and in control from start to finish."
        })]
      }), y.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-4 gap-8 relative",
        children: [y.jsx("div", {
          className: "hidden md:block absolute top-8 left-12 right-12 h-px bg-border z-0"
        }), e4.map((t, i) => y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            delay: i * .15,
            duration: .5
          },
          className: "relative z-10 flex flex-col items-center text-center md:items-start md:text-left",
          children: [y.jsx("div", {
            className: "w-16 h-16 rounded-full bg-card border border-primary text-primary flex items-center justify-center font-mono text-xl font-bold mb-8 shadow-[0_0_20px_hsl(252,71%,51%,0.25)]",
            children: t.num
          }), y.jsx("h3", {
            className: "text-xl font-bold mb-4",
            children: t.title
          }), y.jsx("p", {
            className: "text-muted-foreground text-sm leading-relaxed",
            children: t.description
          })]
        }, i))]
      })]
    })
  })
}
const n4 = [{
  name: "Sarah Mitchell",
  role: "CEO, Luminary Retail",
  rating: 5,
  text: "Codez delivered our e-commerce platform in just 5 weeks — on time, on budget, and way beyond what we expected visually. Our conversion rate went up 3x within the first month. Truly impressive team."
}, {
  name: "James Okafor",
  role: "Founder, TrackFit Pro",
  rating: 5,
  text: "We needed a cross-platform fitness app that felt native on both iOS and Android. Codez nailed it. The animations are smooth, the UX is intuitive, and our users absolutely love it. 50,000 downloads in the first week."
}, {
  name: "Linda Chen",
  role: "Head of Digital, Meridian Realty",
  rating: 5,
  text: "Our old site was slow and outdated. Codez completely rebuilt it from the ground up. The new site loads in under a second, looks beautiful on every device, and our leads have more than doubled."
}, {
  name: "Marcus Delgado",
  role: "CTO, Apex Ventures",
  rating: 5,
  text: "What impressed me most was their technical depth. They didn't just build a pretty interface — they designed a robust backend architecture that scales. Communication was excellent throughout. Highly recommended."
}, {
  name: "Aisha Rahman",
  role: "Product Manager, Novu Health",
  rating: 5,
  text: "We had a tight deadline for our patient portal MVP. The Codez team worked methodically and delivered a polished, HIPAA-compliant product on schedule. They're now our go-to for all digital development."
}, {
  name: "Tom Eriksson",
  role: "Founder, Prism Studios",
  rating: 5,
  text: "Professional, fast, and genuinely talented. Our portfolio website has been a game-changer for bringing in new clients. The design is exactly the vibe we were going for — clean, bold, and memorable."
}];

function i4() {
  return y.jsxs("section", {
    className: "py-20 md:py-32 border-t border-border relative overflow-hidden",
    id: "testimonials",
    children: [y.jsx("div", {
      className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/6 via-transparent to-transparent pointer-events-none"
    }), y.jsxs("div", {
      className: "container mx-auto px-6 relative z-10",
      children: [y.jsxs("div", {
        className: "text-center mb-16",
        children: [y.jsxs("div", {
          className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4",
          children: [y.jsx("div", {
            className: "w-6 h-px bg-primary"
          }), "Client Stories", y.jsx("div", {
            className: "w-6 h-px bg-primary"
          })]
        }), y.jsx("h2", {
          className: "text-3xl md:text-5xl font-bold tracking-tight mb-4",
          children: "What Our Clients Say."
        }), y.jsx("p", {
          className: "text-muted-foreground text-lg max-w-xl mx-auto",
          children: "We measure success by the results our clients achieve."
        })]
      }), y.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: n4.map((t, i) => y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            y: 24
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            delay: i * .08,
            duration: .5
          },
          className: "bg-card border border-border rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/30 hover:shadow-[0_0_24px_hsl(252,71%,51%,0.08)] transition-all duration-300",
          children: [y.jsx(OE, {
            className: "w-6 h-6 text-primary/50 flex-shrink-0"
          }), y.jsxs("p", {
            className: "text-foreground/80 text-sm leading-relaxed flex-1",
            children: ['"', t.text, '"']
          }), y.jsxs("div", {
            className: "flex items-center gap-3 pt-2 border-t border-border",
            children: [y.jsx("div", {
              className: "w-10 h-10 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0",
              children: t.name.charAt(0)
            }), y.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [y.jsx("div", {
                className: "font-semibold text-sm text-foreground truncate",
                children: t.name
              }), y.jsx("div", {
                className: "text-xs text-muted-foreground truncate",
                children: t.role
              })]
            }), y.jsx("div", {
              className: "flex gap-0.5 flex-shrink-0",
              children: Array.from({
                length: t.rating
              }).map((a, r) => y.jsx(Px, {
                className: "w-3.5 h-3.5 fill-primary text-primary"
              }, r))
            })]
          })]
        }, i))
      })]
    })]
  })
}
const s4 = [{
  client: "Luminary Retail",
  title: "E-commerce Web Platform",
  metric: "3.2x",
  metricLabel: "Conversion Increase",
  category: "Web App"
}, {
  client: "TrackFit Pro",
  title: "iOS & Android Fitness App",
  metric: "50k+",
  metricLabel: "Downloads at Launch",
  category: "Mobile App"
}, {
  client: "Meridian Realty",
  title: "Property Listings Website",
  metric: "4s → 0.8s",
  metricLabel: "Page Load Time",
  category: "Website"
}];

function a4() {
  return y.jsxs("section", {
    className: "py-20 md:py-32 bg-card relative overflow-hidden",
    id: "work",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"
    }), y.jsxs("div", {
      className: "container mx-auto px-6 relative z-10",
      children: [y.jsxs("div", {
        className: "mb-16",
        children: [y.jsxs("div", {
          className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4",
          children: [y.jsx("div", {
            className: "w-6 h-px bg-primary"
          }), "Client Results"]
        }), y.jsx("h2", {
          className: "text-3xl md:text-5xl font-bold tracking-tight",
          children: "Our Work."
        })]
      }), y.jsx("div", {
        className: "flex flex-col gap-5",
        children: s4.map((t, i) => y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            delay: i * .1,
            duration: .5
          },
          className: "group border border-border bg-background hover:bg-primary/[0.03] hover:border-primary/30 p-8 rounded-2xl transition-all flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer",
          children: [y.jsxs("div", {
            className: "mb-6 md:mb-0",
            children: [y.jsx("div", {
              className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20",
              children: t.category
            }), y.jsx("h3", {
              className: "text-2xl font-bold mb-1",
              children: t.title
            }), y.jsx("p", {
              className: "text-muted-foreground",
              children: t.client
            })]
          }), y.jsxs("div", {
            className: "flex items-center gap-8 md:gap-16 w-full md:w-auto justify-between md:justify-end",
            children: [y.jsxs("div", {
              className: "text-left md:text-right",
              children: [y.jsx("div", {
                className: "text-3xl font-mono font-bold text-white",
                children: t.metric
              }), y.jsx("div", {
                className: "text-sm text-muted-foreground uppercase tracking-wider",
                children: t.metricLabel
              })]
            }), y.jsx("div", {
              className: "w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all",
              children: y.jsx(kx, {
                className: "w-5 h-5"
              })
            })]
          })]
        }, i))
      })]
    })]
  })
}
const r4 = [{
  question: "How much does it cost to build a website or mobile app?",
  answer: "Pricing varies based on the scope and complexity of your project. A basic marketing website typically starts from $1,500, while a full web application or mobile app starts from $5,000. We provide a detailed, transparent quote after our initial discovery call — no surprises."
}, {
  question: "How long does it take to build a website or app?",
  answer: "A standard marketing website takes 2–4 weeks. A web application or mobile app typically takes 4–10 weeks depending on features. We work in focused sprints and give you a clear timeline before we begin."
}, {
  question: "Do you work with startups or only established businesses?",
  answer: "We work with both. Startups benefit from our ability to move fast and build MVPs efficiently. Established businesses benefit from our experience building scalable, robust systems. Whatever your stage, we tailor our approach to your needs."
}, {
  question: "Will I own the code and design after the project?",
  answer: "Yes, absolutely. Once the project is complete and payment is finalized, you own 100% of the code, design assets, and intellectual property. We hand over everything."
}, {
  question: "Do you offer ongoing maintenance and support?",
  answer: "Yes. We offer flexible monthly support packages that cover bug fixes, performance monitoring, security updates, and small feature additions. We stay available even after launch."
}, {
  question: "What platforms do you build mobile apps for?",
  answer: "We build for both iOS (iPhone/iPad) and Android. We use React Native and Flutter for cross-platform development — which means one codebase runs on both platforms, reducing cost and development time significantly."
}, {
  question: "How does the collaboration process work?",
  answer: "We start with a discovery call to understand your goals, then move through design, development, and testing phases. You'll get regular updates, review sessions, and direct access to your project team throughout. No black boxes."
}];

function o4() {
  const [t, i] = S.useState(null);
  return y.jsx("section", {
    className: "py-20 md:py-32 border-t border-border",
    id: "faq",
    children: y.jsx("div", {
      className: "container mx-auto px-6",
      children: y.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-16",
        children: [y.jsxs("div", {
          className: "lg:col-span-1",
          children: [y.jsxs("div", {
            className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4",
            children: [y.jsx("div", {
              className: "w-6 h-px bg-primary"
            }), "FAQ"]
          }), y.jsx("h2", {
            className: "text-3xl md:text-4xl font-bold tracking-tight mb-4",
            children: "Common Questions."
          }), y.jsx("p", {
            className: "text-muted-foreground leading-relaxed",
            children: "Have a question not listed here? Reach out — we're happy to chat."
          })]
        }), y.jsx("div", {
          className: "lg:col-span-2 flex flex-col divide-y divide-border",
          children: r4.map((a, r) => y.jsxs(Pe.div, {
            className: "py-6",
            children: [y.jsxs("button", {
              onClick: () => i(t === r ? null : r),
              className: "w-full flex items-center justify-between gap-4 text-left group",
              children: [y.jsx("span", {
                className: "font-semibold text-base group-hover:text-primary transition-colors leading-snug",
                children: a.question
              }), y.jsx("div", {
                className: "w-7 h-7 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all",
                children: t === r ? y.jsx(RE, {
                  className: "w-3.5 h-3.5 text-primary"
                }) : y.jsx(NE, {
                  className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors"
                })
              })]
            }), y.jsx(Sh, {
              children: t === r && y.jsx(Pe.div, {
                initial: {
                  height: 0,
                  opacity: 0
                },
                animate: {
                  height: "auto",
                  opacity: 1
                },
                exit: {
                  height: 0,
                  opacity: 0
                },
                transition: {
                  duration: .25,
                  ease: "easeInOut"
                },
                className: "overflow-hidden",
                children: y.jsx("p", {
                  className: "pt-4 text-muted-foreground leading-relaxed text-sm",
                  children: a.answer
                })
              })
            })]
          }, r))
        })]
      })
    })
  })
}
const l4 = ["Website", "Mobile App", "Web Application", "E-commerce", "Full Redesign", "Other"];

function c4() {
  const [t, i] = S.useState(!1), [a, r] = S.useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  }), l = f => {
    f.preventDefault(), i(!0)
  }, u = f => {
    r(h => ({
      ...h,
      [f.target.name]: f.target.value
    }))
  };
  return y.jsxs("section", {
    className: "py-20 md:py-32 border-t border-border bg-card/40 relative overflow-hidden",
    id: "contact",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/6 via-transparent to-transparent pointer-events-none"
    }), y.jsx("div", {
      className: "container mx-auto px-6 relative z-10",
      children: y.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",
        children: [y.jsxs(Pe.div, {
          initial: {
            opacity: 0,
            x: -24
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            duration: .6
          },
          children: [y.jsxs("div", {
            className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4",
            children: [y.jsx("div", {
              className: "w-6 h-px bg-primary"
            }), "Contact Us"]
          }), y.jsxs("h2", {
            className: "text-3xl md:text-5xl font-bold tracking-tight mb-6",
            children: ["Let's talk about ", y.jsx("span", {
              className: "text-gradient-primary",
              children: "your project."
            })]
          }), y.jsx("p", {
            className: "text-muted-foreground text-lg leading-relaxed mb-10",
            children: "Tell us what you're building and we'll get back to you within 24 hours with a plan and a quote."
          }), y.jsx("div", {
            className: "flex flex-col gap-5",
            children: [{
              icon: Gf,
              label: "Email Us",
              value: "hello@codez.dev"
            }, {
              icon: ev,
              label: "Response Time",
              value: "Within 24 hours"
            }, {
              icon: Jy,
              label: "Availability",
              value: "Currently accepting new projects"
            }].map((f, h) => y.jsxs("div", {
              className: "flex items-center gap-4",
              children: [y.jsx("div", {
                className: "w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0",
                children: y.jsx(f.icon, {
                  className: "w-4.5 h-4.5 text-primary"
                })
              }), y.jsxs("div", {
                children: [y.jsx("div", {
                  className: "text-xs text-muted-foreground",
                  children: f.label
                }), y.jsx("div", {
                  className: "font-semibold text-sm text-foreground",
                  children: f.value
                })]
              })]
            }, h))
          })]
        }), y.jsx(Pe.div, {
          initial: {
            opacity: 0,
            x: 24
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0
          },
          transition: {
            duration: .6
          },
          children: t ? y.jsxs("div", {
            className: "bg-card border border-primary/30 rounded-2xl p-10 text-center flex flex-col items-center gap-4",
            children: [y.jsx("div", {
              className: "w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center",
              children: y.jsx(gE, {
                className: "w-8 h-8 text-primary"
              })
            }), y.jsx("h3", {
              className: "text-2xl font-bold",
              children: "Message Sent!"
            }), y.jsx("p", {
              className: "text-muted-foreground max-w-sm",
              children: "Thanks for reaching out. We'll review your project details and get back to you within 24 hours."
            }), y.jsx(Bn, {
              variant: "outline",
              className: "mt-4 border-border hover:bg-white/5",
              onClick: () => {
                i(!1), r({
                  name: "",
                  email: "",
                  projectType: "",
                  message: ""
                })
              },
              children: "Send Another Message"
            })]
          }) : y.jsxs("form", {
            onSubmit: l,
            className: "bg-card border border-border rounded-2xl p-8 flex flex-col gap-5",
            children: [y.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
              children: [y.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [y.jsxs("label", {
                  className: "text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
                  children: [y.jsx(kE, {
                    className: "w-3 h-3"
                  }), " Your Name"]
                }), y.jsx("input", {
                  type: "text",
                  name: "name",
                  value: a.name,
                  onChange: u,
                  required: !0,
                  placeholder: "Jane Smith",
                  className: "bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                })]
              }), y.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [y.jsxs("label", {
                  className: "text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
                  children: [y.jsx(Gf, {
                    className: "w-3 h-3"
                  }), " Email Address"]
                }), y.jsx("input", {
                  type: "email",
                  name: "email",
                  value: a.email,
                  onChange: u,
                  required: !0,
                  placeholder: "jane@company.com",
                  className: "bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                })]
              })]
            }), y.jsxs("div", {
              className: "flex flex-col gap-2",
              children: [y.jsxs("label", {
                className: "text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
                children: [y.jsx(Jy, {
                  className: "w-3 h-3"
                }), " Project Type"]
              }), y.jsxs("select", {
                name: "projectType",
                value: a.projectType,
                onChange: u,
                required: !0,
                className: "bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all appearance-none cursor-pointer",
                children: [y.jsx("option", {
                  value: "",
                  disabled: !0,
                  children: "Select a project type..."
                }), l4.map(f => y.jsx("option", {
                  value: f,
                  children: f
                }, f))]
              })]
            }), y.jsxs("div", {
              className: "flex flex-col gap-2",
              children: [y.jsxs("label", {
                className: "text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
                children: [y.jsx(ev, {
                  className: "w-3 h-3"
                }), " Tell Us About Your Project"]
              }), y.jsx("textarea", {
                name: "message",
                value: a.message,
                onChange: u,
                required: !0,
                placeholder: "Describe your idea, goals, and any specific features you have in mind...",
                rows: 5,
                className: "bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              })]
            }), y.jsxs(Bn, {
              type: "submit",
              size: "lg",
              className: "h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-[0_0_20px_hsl(252,71%,51%,0.3)] group",
              children: ["Send Message", y.jsx(_E, {
                className: "ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              })]
            })]
          })
        })]
      })
    })]
  })
}

function u4() {
  return y.jsxs("section", {
    className: "py-20 md:py-32 relative overflow-hidden",
    children: [y.jsx("div", {
      className: "absolute inset-0 bg-primary/4"
    }), y.jsx("div", {
      className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[120px] pointer-events-none"
    }), y.jsx("div", {
      className: "container mx-auto px-6 relative z-10 text-center",
      children: y.jsxs(Pe.div, {
        initial: {
          opacity: 0,
          y: 30
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0
        },
        transition: {
          duration: .6
        },
        className: "max-w-3xl mx-auto",
        children: [y.jsxs("div", {
          className: "inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20",
          children: [y.jsx(Gf, {
            className: "w-3 h-3"
          }), "Let's Work Together"]
        }), y.jsxs("h2", {
          className: "text-4xl md:text-6xl font-bold tracking-tighter mb-6",
          children: ["Ready to bring your ", y.jsx("span", {
            className: "text-gradient-primary",
            children: "idea to life?"
          })]
        }), y.jsx("p", {
          className: "text-lg text-muted-foreground mb-10 max-w-xl mx-auto",
          children: "Whether you need a brand-new website, a mobile app, or a full rebuild — we're ready to make it happen. Let's talk."
        }), y.jsxs("div", {
          className: "flex flex-col sm:flex-row items-center justify-center gap-4",
          children: [y.jsx("a", {
            href: "#contact",
            className: "w-full sm:w-auto",
            children: y.jsxs(Bn, {
              size: "lg",
              className: "w-full h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold rounded-xl shadow-[0_0_30px_hsl(252,71%,51%,0.35)] group",
              children: ["Start Your Project", y.jsx(_d, {
                className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              })]
            })
          }), y.jsx("a", {
            href: "#contact",
            className: "w-full sm:w-auto",
            children: y.jsx(Bn, {
              size: "lg",
              variant: "outline",
              className: "w-full h-14 px-8 border-border hover:bg-white/5 text-base font-medium rounded-xl bg-background",
              children: "Book a Free Call"
            })
          })]
        })]
      })
    })]
  })
}

function f4() {
  return y.jsx("footer", {
    className: "bg-card border-t border-border pt-20 pb-10",
    children: y.jsxs("div", {
      className: "container mx-auto px-6",
      children: [y.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-16",
        children: [y.jsxs("div", {
          className: "col-span-1 md:col-span-2",
          children: [y.jsxs("div", {
            className: "flex items-center gap-2.5 mb-6",
            children: [y.jsx("div", {
              className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-extrabold text-lg shadow-[0_0_14px_hsl(252,71%,51%,0.4)]",
              children: "C"
            }), y.jsxs("span", {
              className: "font-extrabold text-xl tracking-tight",
              children: ["Codez", y.jsx("span", {
                className: "text-primary",
                children: "."
              })]
            })]
          }), y.jsx("p", {
            className: "text-muted-foreground max-w-sm leading-relaxed",
            children: "A software services company building high-quality websites and mobile applications for businesses that want to stand out online."
          })]
        }), y.jsxs("div", {
          children: [y.jsx("h4", {
            className: "font-semibold text-sm uppercase tracking-wider text-foreground/80 mb-6",
            children: "Services"
          }), y.jsxs("ul", {
            className: "space-y-3 text-muted-foreground text-sm",
            children: [y.jsx("li", {
              children: y.jsx("a", {
                href: "#services",
                className: "hover:text-primary transition-colors",
                children: "Website Development"
              })
            }), y.jsx("li", {
              children: y.jsx("a", {
                href: "#services",
                className: "hover:text-primary transition-colors",
                children: "Mobile App Development"
              })
            }), y.jsx("li", {
              children: y.jsx("a", {
                href: "#services",
                className: "hover:text-primary transition-colors",
                children: "E-commerce Solutions"
              })
            }), y.jsx("li", {
              children: y.jsx("a", {
                href: "#services",
                className: "hover:text-primary transition-colors",
                children: "API & Integrations"
              })
            })]
          })]
        }), y.jsxs("div", {
          children: [y.jsx("h4", {
            className: "font-semibold text-sm uppercase tracking-wider text-foreground/80 mb-6",
            children: "Company"
          }), y.jsxs("ul", {
            className: "space-y-3 text-muted-foreground text-sm",
            children: [y.jsx("li", {
              children: y.jsx("a", {
                href: "#about",
                className: "hover:text-primary transition-colors",
                children: "About Us"
              })
            }), y.jsx("li", {
              children: y.jsx("a", {
                href: "#portfolio",
                className: "hover:text-primary transition-colors",
                children: "Portfolio"
              })
            }), y.jsx("li", {
              children: y.jsx("a", {
                href: "#testimonials",
                className: "hover:text-primary transition-colors",
                children: "Reviews"
              })
            }), y.jsx("li", {
              children: y.jsx("a", {
                href: "#contact",
                className: "hover:text-primary transition-colors",
                children: "Contact"
              })
            })]
          })]
        })]
      }), y.jsxs("div", {
        className: "pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4",
        children: [y.jsxs("p", {
          className: "text-sm text-muted-foreground",
          children: ["© ", new Date().getFullYear(), " Codez. All rights reserved."]
        }), y.jsxs("div", {
          className: "flex gap-6 text-sm text-muted-foreground",
          children: [y.jsx("a", {
            href: "./privacy.html",
            className: "hover:text-foreground transition-colors",
            children: "Privacy Policy"
          }), y.jsx("a", {
            href: "./terms.html",
            className: "hover:text-foreground transition-colors",
            children: "Terms of Service"
          })]
        })]
      })]
    })
  })
}

function d4() {
  const [t, i] = S.useState(!1);
  return S.useEffect(() => {
    i(!0), document.documentElement.classList.add("dark")
  }, []), t ? y.jsxs("main", {
    className: "relative flex min-h-screen flex-col overflow-hidden",
    children: [y.jsx(H3, {}), y.jsx(q3, {}), y.jsx(Y3, {}), y.jsx(X3, {}), y.jsx(Q3, {}), y.jsx(K3, {}), y.jsx(
      $3, {}), y.jsx(J3, {}), y.jsx(t4, {}), y.jsx(i4, {}), y.jsx(a4, {}), y.jsx(o4, {}), y.jsx(c4, {}), y.jsx(
      u4, {}), y.jsx(f4, {})]
  }) : null
}
const h4 = new t2;

function m4() {
  return y.jsxs(MA, {
    children: [y.jsx(Ly, {
      path: "/",
      component: d4
    }), y.jsx(Ly, {
      component: xM
    })]
  })
}

function p4() {
  return y.jsx(i2, {
    client: h4,
    children: y.jsxs(hM, {
      children: [y.jsx(tx, {
        base: (window.location.hostname.endsWith("github.io") ? `/${window.location.pathname.split("/").filter(Boolean)[0] || ""}` : "/").replace(/\/$/, ""),
        children: y.jsx("div", {
          className: "dark min-h-screen bg-background text-foreground selection:bg-primary/30",
          children: y.jsx(m4, {})
        })
      }), y.jsx(_C, {})]
    })
  })
}
var b4 = document.getElementById("root");
b4 && rA.createRoot(b4).render(y.jsx(p4, {}));
(function() {
  var t = document.getElementById("footer-year");
  t && (t.textContent = new Date().getFullYear());
})();