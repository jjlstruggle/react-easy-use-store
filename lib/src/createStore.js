"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.default = createStore;
exports.subscription = exports.setStore = void 0;

var _subscription = _interopRequireDefault(require("./util/subscription"));

let lastStore = {},
    store = {};
const subscription = new _subscription.default();
exports.subscription = subscription;

const setStore = (key, data) => {
  lastStore = store;
  store[key] = data;
  subscription.notifySubs(store);
  subscription.onStateChange && subscription.onStateChange();
};

exports.setStore = setStore;

const getState = () => store;

function createStore() {
  return {
    setStore,
    getState
  };
}