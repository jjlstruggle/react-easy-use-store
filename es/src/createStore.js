import Subscription from "./util/subscription";

const notifyProviderUpdate = () => {};

let lastStore = {},
    store = {};
const subscription = new Subscription();

const setStore = (key, data) => {
  lastStore = store;
  Object.assign(store, {
    [key]: data
  });
  notifyProviderUpdate();
  subscription.notifySubs(store);
};

const getState = () => store;

export default function createStore() {
  return {
    setStore,
    getState,
    notifyProviderUpdate
  };
}
export { setStore, subscription };