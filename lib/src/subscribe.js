"use strict";

/**
 * light.js
 */
// 双向链表方便增删订阅
let listener = {
  next: null,
  callback: null,
  prev: null
};

const createListenerCollection = () => {
  let first = null,
    last = null;
  return {
    initalListenerCollection() {
      first = null;
      last = null;
    },

    notify() {
      let listener = first;

      while (listener.next) {
        listener.callback();
        listener = listener.next;
      }
    },

    getListenCollect() {
      return first;
    },

    subscribe(callback) {
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
};

const createSubscription = store => {
  let collection = createListenerCollection(),
    unSubscribe;

  function addSub(callback) {
    if (!unSubscribe) {
      unSubscribe = store.subscribe(handleStateChange);
    }
    collection.subscribe(callback);
  }

  function notifySubs() {
    collection.notify();
  }

  function handleStateChange() {
    subscription.onStateChange && subscription.onStateChange();
  }

  function hasSubscribe() {
    return Boolean(hasSubscribe);
  }

  function unEnrollSub() {
    if (unSubscribe) {
      unSubscribe();
      unSubscribe = undefined;
      collection.clear();
    }
  }

  return {
    addSub,
    notifySubs,
    handleStateChange,
    hasSubscribe,
    unEnrollSub,
    getListener: () => collection
  };
};