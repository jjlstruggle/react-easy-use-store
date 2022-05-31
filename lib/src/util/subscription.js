"use strict";

exports.__esModule = true;
exports.default = void 0;

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

  onStateChange() {}

}

var _default = Subscription;
exports.default = _default;