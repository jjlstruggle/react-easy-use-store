import React, { useEffect, useMemo, useState } from "react";
import { Context } from "../util/context";
import { areEqualObj } from "../util/areEqualObj";
import { subscription } from "../createStore";
function Provider({ store, children }) {
  const [state, setState] = useState(null);
  const curState = useMemo(() => store.getState(), [store]);
  useEffect(() => {
    if (areEqualObj(state, curState)) {
      subscription.onStateChange = () => {};
    } else {
      subscription.onStateChange = () => setState(curState);
    }
  });
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export default Provider;
