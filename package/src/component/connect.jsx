import { memo, useContext } from "react";
import Context from "../util/context";
import { areEqualObj } from "../util/areEqualObj";

function connect(...args) {
  let lastState = {},
    shouldUpdate = true;
  return function (Component) {
    const context = useContext(Context);
    const curState = context.getState();
    const curListenState = {};
    args.forEach((key) => {
      curListenState[key] = curState[key];
    });
    if (areEqualObj(lastState, Component)) {
      shouldUpdate = false;
    }
    const _Component = <Component {...curListenState} />;
    let MemoCompoent = memo(_Component, function () {
      if (shouldUpdate) {
        lastState = curListenState;
        return false;
      }
      return true;
    });
    return MemoCompoent;
  };
}

export { connect };
