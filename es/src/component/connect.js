import _extends from "@babel/runtime/helpers/esm/extends";
import { memo, useContext } from "react";
import Context from "../util/context";
import { areEqualObj } from "../util/areEqualObj";

function connect(...args) {
  let lastState = {};

  const wrapConnect = Component => {
    const WrapComponet = props => {
      const context = useContext(Context);
      const curState = context.getState();
      const curListenState = {};
      args.forEach(key => {
        curListenState[key] = curState[key];
      });
      let MemoCompoent = memo(Component, function (prev, cur) {
        if (areEqualObj(cur, prev)) {
          return true;
        } else {
          lastState = curListenState;
          return false;
        }
      });
      return /*#__PURE__*/React.createElement(MemoCompoent, _extends({}, props, curListenState));
    };

    return WrapComponet;
  };

  return wrapConnect;
}

export { connect };