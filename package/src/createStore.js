import Subscription from "./util/subscription"
const subscription = new Subscription()


export default function createStore() {

    let lastStore = {}, store = {}
    const getState = () => store
    const setStore = (key, data) => {
        lastStore = store
        store[key] = data
        subscription.notifySubs(store)
        if (subscription.onStateChange) {
            subscription.onStateChange(store)
        }
    }

    return {
        setStore,
        getState,
        subscription
    }
}

export { subscription }


