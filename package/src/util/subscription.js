class Subscription {
    subs = []
    addSub(sub) {
        this.subs.push(sub)
    }
    notifySubs(store) {
        this.subs.forEach(sub => sub(store))
    }
    onStateChange() { }
}

export default Subscription