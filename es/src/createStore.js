import Subscription from "./util/subscription";
const subscription = new Subscription();
export default function createStore(initalStore = {}) {
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
export { subscription };