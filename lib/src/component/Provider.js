"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

exports.__esModule = true;
exports.default = exports.StoreContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../util/context");

const StoreContext = (0, _react.createContext)({});
exports.StoreContext = StoreContext;

function Provider({
  store,
  children
}) {
  const isInital = (0, _react.useRef)(true);
  const [state, setState] = (0, _react.useState)({});
  const {
    subscription
  } = store;
  (0, _react.useLayoutEffect)(() => {
    if (isInital.current) {
      subscription.onStateChange = setState;
      isInital.current = false;
      return;
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: store
  }, /*#__PURE__*/_react.default.createElement(StoreContext.Provider, {
    value: state
  }, children));
}

var _default = Provider;
exports.default = _default;