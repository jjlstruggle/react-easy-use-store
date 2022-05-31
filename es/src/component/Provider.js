import React, { useEffect, useMemo, useState, useRef, useLayoutEffect } from "react";
import { Context } from "../util/context";
import { subscription } from "../createStore";
import { createContext } from "react";
const StoreContext = createContext({});

function Provider({
  store,
  children
}) {
  const isInital = useRef(true);
  const [state, setState] = useState({});
  useLayoutEffect(() => {
    if (isInital.current) {
      subscription.onStateChange = setState;
      isInital.current = false;
      return;
    }
  }, []);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: store
  }, /*#__PURE__*/React.createElement(StoreContext.Provider, {
    value: state
  }, children));
}

export default Provider;
export { StoreContext };