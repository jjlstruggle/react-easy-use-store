"use strict";

exports.__esModule = true;
exports.default = createStore;
exports.setStore = void 0;

const notifyProviderUpdate = () => {};

let lastStore = store = {};

const setStore = (key, data) => {
  lastStore = store;
  Object.assign(store, {
    [key]: data
  });
  notifyProviderUpdate();
};

exports.setStore = setStore;

const getState = () => store;

function createStore() {
  return {
    setStore,
    getState,
    notifyProviderUpdate
  };
}