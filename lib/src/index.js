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
Object.defineProperty(exports, "setStore", {
  enumerable: true,
  get: function () {
    return _createStore.setStore;
  }
});

var _createStore = _interopRequireWildcard(require("./createStore"));

var _Provider = _interopRequireDefault(require("./component/Provider"));

var _connect = require("./component/connect");