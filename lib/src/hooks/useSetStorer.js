"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _context = require("../util/context");

function useSetStorer() {
  return (0, _react.useContext)(_context.Context).setStore;
}

var _default = useSetStorer;
exports.default = _default;