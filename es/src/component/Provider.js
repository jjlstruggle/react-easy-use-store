import React, { useEffect, useMemo, useState } from "react";
import { Context } from "../util/context";
import { areEqualObj } from "../util/areEqualObj";

function Provider({
  store,
  children
}) {
  const [state, setState] = useState();
  const previousState = useMemo(() => store.getState(), [store]);
  useEffect(() => {
    if (areEqualObj(state, previousState)) {
      store.notifyProviderUpdate = () => {};

      return;
    }

    store.notifyProviderUpdate = setState;
  }, [state]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: store
  }, children);
}

export default Provider;