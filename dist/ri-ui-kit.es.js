import Ce from "react";
var U = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function mr() {
  if (Oe) return B;
  Oe = 1;
  var l = Ce, d = Symbol.for("react.element"), v = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, g = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(O, p, C) {
    var b, E = {}, S = null, $ = null;
    C !== void 0 && (S = "" + C), p.key !== void 0 && (S = "" + p.key), p.ref !== void 0 && ($ = p.ref);
    for (b in p) s.call(p, b) && !R.hasOwnProperty(b) && (E[b] = p[b]);
    if (O && O.defaultProps) for (b in p = O.defaultProps, p) E[b] === void 0 && (E[b] = p[b]);
    return { $$typeof: d, type: O, key: S, ref: $, props: E, _owner: g.current };
  }
  return B.Fragment = v, B.jsx = D, B.jsxs = D, B;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function _r() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Ce, d = Symbol.for("react.element"), v = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), O = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Z = Symbol.iterator, Ae = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var j = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Be("error", e, t);
      }
    }
    function Be(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ie = !1, $e = !1, We = !1, Ye = !1, Le = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === R || Le || e === g || e === C || e === b || Ye || e === $ || Ie || $e || We || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === D || e.$$typeof === O || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case v:
          return "Portal";
        case R:
          return "Profiler";
        case g:
          return "StrictMode";
        case C:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var r = e;
            return ee(r) + ".Consumer";
          case D:
            var t = e;
            return ee(t._context) + ".Provider";
          case p:
            return Ue(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case S: {
            var i = e, u = i._payload, o = i._init;
            try {
              return T(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, A = 0, re, te, ne, ae, oe, ie, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ve() {
      {
        if (A === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Me() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: re
            }),
            info: P({}, e, {
              value: te
            }),
            warn: P({}, e, {
              value: ne
            }),
            error: P({}, e, {
              value: ae
            }),
            group: P({}, e, {
              value: oe
            }),
            groupCollapsed: P({}, e, {
              value: ie
            }),
            groupEnd: P({}, e, {
              value: ue
            })
          });
        }
        A < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = j.ReactCurrentDispatcher, M;
    function W(e, r, t) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            M = n && n[1] || "";
          }
        return `
` + M + e;
      }
    }
    var q = !1, Y;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new qe();
    }
    function le(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = V.current, V.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), m = n.stack.split(`
`), f = a.length - 1, c = m.length - 1; f >= 1 && c >= 0 && a[f] !== m[c]; )
            c--;
          for (; f >= 1 && c >= 0; f--, c--)
            if (a[f] !== m[c]) {
              if (f !== 1 || c !== 1)
                do
                  if (f--, c--, c < 0 || a[f] !== m[c]) {
                    var h = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, h), h;
                  }
                while (f >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        q = !1, V.current = u, Me(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", w = k ? W(k) : "";
      return typeof e == "function" && Y.set(e, w), w;
    }
    function Je(e, r, t) {
      return le(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ke(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case C:
          return W("Suspense");
        case b:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Je(e.render);
          case E:
            return L(e.type, r, t);
          case S: {
            var n = e, i = n._payload, u = n._init;
            try {
              return L(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, fe = {}, ce = j.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, i) {
      {
        var u = Function.call.bind(F);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (N(i), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), N(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, N(i), y("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Ge = Array.isArray;
    function J(e) {
      return Ge(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (He(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), de(e);
    }
    var pe = j.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, me;
    function Qe(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      typeof e.ref == "string" && pe.current;
    }
    function tr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          me || (me = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function or(e, r, t, n, i) {
      {
        var u, o = {}, a = null, m = null;
        t !== void 0 && (ve(t), a = "" + t), er(r) && (ve(r.key), a = "" + r.key), Qe(r) && (m = r.ref, rr(r, i));
        for (u in r)
          F.call(r, u) && !Ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            o[u] === void 0 && (o[u] = f[u]);
        }
        if (a || m) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && tr(o, c), m && nr(o, c);
        }
        return ar(e, a, m, i, n, pe.current, o);
      }
    }
    var K = j.ReactCurrentOwner, _e = j.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function ge() {
      {
        if (K.current) {
          var e = T(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var be = {};
    function ur(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function he(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + T(e._owner.type) + "."), x(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            G(n) && he(n, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Fe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              G(o.value) && he(o.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var i = T(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    var Re = {};
    function Te(e, r, t, n, i, u) {
      {
        var o = Ne(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = ir();
          m ? a += m : a += ge();
          var f;
          e === null ? f = "null" : J(e) ? f = "array" : e !== void 0 && e.$$typeof === d ? (f = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var c = or(e, r, t, i, u);
        if (c == null)
          return c;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (J(h)) {
                for (var k = 0; k < h.length; k++)
                  Ee(h[k], e);
                Object.freeze && Object.freeze(h);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(h, e);
        }
        if (F.call(r, "key")) {
          var w = T(e), _ = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), X = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[w + X]) {
            var pr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, X, w, pr, w), Re[w + X] = !0;
          }
        }
        return e === s ? lr(c) : sr(c), c;
      }
    }
    function fr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var dr = cr, vr = fr;
    I.Fragment = s, I.jsx = dr, I.jsxs = vr;
  }()), I;
}
var Pe;
function gr() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? U.exports = mr() : U.exports = _r()), U.exports;
}
var H = gr();
function je(l) {
  var d, v, s = "";
  if (typeof l == "string" || typeof l == "number") s += l;
  else if (typeof l == "object") if (Array.isArray(l)) {
    var g = l.length;
    for (d = 0; d < g; d++) l[d] && (v = je(l[d])) && (s && (s += " "), s += v);
  } else for (v in l) l[v] && (s && (s += " "), s += v);
  return s;
}
function xe() {
  for (var l, d, v = 0, s = "", g = arguments.length; v < g; v++) (l = arguments[v]) && (d = je(l)) && (s && (s += " "), s += d);
  return s;
}
const ke = {
  medium: 44,
  small: 34
}, br = "_baseButton_5qzmf_1", hr = {
  baseButton: br
}, De = ({ children: l, size: d = "medium", className: v, style: s, ...g }) => {
  const R = {
    height: ke[d]
  };
  return /* @__PURE__ */ H.jsx("button", { className: xe(hr.baseButton, v), style: s || R, ...g, children: l });
}, Er = "_iconButton_1a9dd_1", Rr = "_iconButtonPrimary_1a9dd_4", we = {
  iconButton: Er,
  iconButtonPrimary: Rr
}, Pr = ({ size: l = "medium", isPrimary: d, className: v, ...s }) => {
  const g = ke[l], R = {
    height: g,
    width: g
  };
  return /* @__PURE__ */ H.jsx(
    De,
    {
      ...s,
      className: xe(we.iconButton, d && we.iconButtonPrimary, v),
      style: R
    }
  );
}, Tr = "_primaryButton_1l4hv_1", Or = {
  primaryButton: Tr
}, wr = (l) => /* @__PURE__ */ H.jsx(De, { ...l, className: Or.primaryButton });
export {
  De as Button,
  Pr as IconButton,
  wr as PrimaryButton
};
