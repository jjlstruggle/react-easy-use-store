import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import { Context } from "../util/context";
import { subscription } from "../createStore";
import { createContext } from "react";

const StoreContext = createContext({});

function Provider({ store, children }) {
  const isInital = useRef(true);
  const [state, setState] = useState({});

  useLayoutEffect(() => {
    if (isInital.current) {
      subscription.onStateChange = setState;
      isInital.current = false;
      return;
    }
  }, []);
  return (
    <Context.Provider value={store}>
      <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
    </Context.Provider>
  );
}

export default Provider;

export { StoreContext };
