"use strict";

exports.__esModule = true;
exports.default = createStore;

function createStore() {
  let lastStore = store = {};

  const notifyProviderUpdate = () => {};

  const setStore = (key, data) => {
    lastStore = store;
    Object.assign(store, {
      [key]: data
    });
    notifyProviderUpdate();
  };

  const getState = () => store;

  return {
    setStore,
    getState,
    addSubscribe,
    notifyProviderUpdate
  };
}