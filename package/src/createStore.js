import Subscription from "./util/subscription"

let lastStore = {}, store = {}
const subscription = new Subscription()
const setStore = (key, data) => {
    lastStore = store
    store[key] = data
    subscription.notifySubs(store)
    if (subscription.onStateChange) {
        subscription.onStateChange(store)
    }
}
const getState = () => store

export default function createStore() {
    return {
        setStore,
        getState,
    }
}

export {
    setStore, subscription
}
