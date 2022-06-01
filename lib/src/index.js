"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function () {
    return _Provider.default;
  }
});
Object.defineProperty(exports, "connect", {
  enumerable: true,
  get: function () {
    return _connect.connect;
  }
});
Object.defineProperty(exports, "createStore", {
  enumerable: true,
  get: function () {
    return _createStore.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "useSelector", {
  enumerable: true,
  get: function () {
    return _useSelector.default;
  }
});
Object.defineProperty(exports, "useSetStorer", {
  enumerable: true,
  get: function () {
    return _useSetStorer.default;
  }
});

var _createStore = _interopRequireDefault(require("./createStore"));

var _Provider = _interopRequireDefault(require("./component/Provider"));

var _connect = require("./component/connect");

var _useSetStorer = _interopRequireDefault(require("./hooks/useSetStorer"));

var _useSelector = _interopRequireDefault(require("./hooks/useSelector"));

var _default = {
  createStore: _createStore.default,
  connect: _connect.connect,
  Provider: _Provider.default,
  useSetStorer: _useSetStorer.default,
  useSelector: _useSelector.default
};
exports.default = _default;