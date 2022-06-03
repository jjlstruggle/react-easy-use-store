"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.default = createStore;
exports.subscription = void 0;

var _subscription = _interopRequireDefault(require("./util/subscription"));

const subscription = new _subscription.default();
exports.subscription = subscription;

function createStore(initalStore = {}) {
  let lastStore = initalStore,
      store = initalStore;

  const getState = () => store;

  const setStore = (key, data) => {
    lastStore = store;
    store[key] = data;
    subscription.notifySubs(store);

    if (subscription.onStateChange) {
      subscription.onStateChange(store);
    }
  };

  return {
    setStore,
    getState,
    subscription
  };
}