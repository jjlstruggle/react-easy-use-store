(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactEasyUseStore = {}, global.React));
})(this, (function (exports, React$1) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

    class Subscription {
      constructor() {
        this.subs = [];
      }

      addSub(sub) {
        this.subs.push(sub);
      }

      notifySubs(store) {
        this.subs.forEach(sub => sub(store));
      }

      onStateChange() {}

    }

    let store = {};
    const subscription = new Subscription();

    const setStore = (key, data) => {
      store[key] = data;
      subscription.notifySubs(store);
      subscription.onStateChange && subscription.onStateChange();
    };

    const getState = () => store;

    function createStore() {
      return {
        setStore,
        getState
      };
    }

    const Context = React__default["default"].createContext(null);

    function areEqualObj(x, y) {
      let i, l, leftChain, rightChain;

      function compare2Objects(x, y) {
        let p;

        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
          return true;
        }

        if (x === y) {
          return true;
        }

        if (typeof x === 'function' && typeof y === 'function' || x instanceof Date && y instanceof Date || x instanceof RegExp && y instanceof RegExp || x instanceof String && y instanceof String || x instanceof Number && y instanceof Number) {
          return x.toString() === y.toString();
        }

        if (!(x instanceof Object && y instanceof Object)) {
          return false;
        }

        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
          return false;
        }

        if (x.constructor !== y.constructor) {
          return false;
        }

        if (x.prototype !== y.prototype) {
          return false;
        }

        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
          return false;
        }

        for (p in y) {
          if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
            return false;
          } else if (typeof y[p] !== typeof x[p]) {
            return false;
          }
        }

        for (p in x) {
          if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
            return false;
          } else if (typeof y[p] !== typeof x[p]) {
            return false;
          }

          switch (typeof x[p]) {
            case 'object':
            case 'function':
              leftChain.push(x);
              rightChain.push(y);

              if (!compare2Objects(x[p], y[p])) {
                return false;
              }

              leftChain.pop();
              rightChain.pop();
              break;

            default:
              if (x[p] !== y[p]) {
                return false;
              }

              break;
          }
        }

        return true;
      }

      if (arguments.length < 1) {
        return true;
      }

      for (i = 1, l = arguments.length; i < l; i++) {
        leftChain = [];
        rightChain = [];

        if (!compare2Objects(arguments[0], arguments[i])) {
          return false;
        }
      }

      return true;
    }

    function Provider({
      store,
      children
    }) {
      const [state, setState] = React$1.useState(null);
      const curState = React$1.useMemo(() => store.getState(), [store]);
      React$1.useEffect(() => {
        if (areEqualObj(state, curState)) {
          subscription.onStateChange = () => {};
        } else {
          subscription.onStateChange = () => setState(curState);
        }
      });
      return /*#__PURE__*/React__default["default"].createElement(Context.Provider, {
        value: store
      }, children);
    }

    function _extends() {
      _extends = Object.assign || function (target) {
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

    function connect(...args) {

      const wrapConnect = Component => {
        const WrapComponet = props => {
          const context = React$1.useContext(Context);
          const curState = context.getState();
          const curListenState = {};
          args.forEach(key => {
            curListenState[key] = curState[key];
          });
          let MemoCompoent = React$1.memo(Component, function (prev, cur) {
            if (areEqualObj(cur, prev)) {
              return true;
            } else {
              return false;
            }
          });
          return /*#__PURE__*/React.createElement(MemoCompoent, _extends({}, props, curListenState));
        };

        return WrapComponet;
      };

      return wrapConnect;
    }

    var index = {
      createStore,
      connect,
      Provider,
      setStore
    };

    exports.Provider = Provider;
    exports.connect = connect;
    exports.createStore = createStore;
    exports["default"] = index;
    exports.setStore = setStore;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
