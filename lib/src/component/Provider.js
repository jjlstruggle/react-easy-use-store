"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../util/context");

var _areEqualObj = require("../util/areEqualObj");

function Provider({
  store,
  children
}) {
  const [state, setState] = (0, _react.useState)();
  const previousState = (0, _react.useMemo)(() => store.getState(), [store]);
  (0, _react.useEffect)(() => {
    if ((0, _areEqualObj.areEqualObj)(state, previousState)) {
      store.notifyProviderUpdate = () => {};

      return;
    }

    store.notifyProviderUpdate = setState;
  }, [state]);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: contextValue
  }, children);
}

var _default = Provider;
exports.default = _default;