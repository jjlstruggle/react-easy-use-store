class Subscription {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notifySubs(store) {
    this.subs.forEach(sub => sub(store));
  }

}

export default Subscription;