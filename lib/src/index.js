"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

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
Object.defineProperty(exports, "setStore", {
  enumerable: true,
  get: function () {
    return _createStore.setStore;
  }
});

var _createStore = _interopRequireWildcard(require("./createStore"));

var _Provider = _interopRequireDefault(require("./component/Provider"));

var _connect = require("./component/connect");

var _default = {
  createStore: _createStore.default,
  connect: _connect.connect,
  Provider: _Provider.default,
  setStore: _createStore.setStore
};
exports.default = _default;