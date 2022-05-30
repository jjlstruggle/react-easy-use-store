const notifyProviderUpdate = () => { }
let lastStore = store = {}
const setStore = (key, data) => {
    lastStore = store
    Object.assign(store, { [key]: data })
    notifyProviderUpdate()
}
const getState = () => store

export default function createStore() {
    return {
        setStore,
        getState,
        notifyProviderUpdate
    }
}

export {
    setStore
}
