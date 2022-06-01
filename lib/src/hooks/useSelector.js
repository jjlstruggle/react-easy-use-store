"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _createStore = require("../createStore");

const useSelector = (...args) => {
  const [state, setState] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    _createStore.subscription.addSub(setState);
  }, []);
  return args.map(key => state[key]);
};

var _default = useSelector;
exports.default = _default;