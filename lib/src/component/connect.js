"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.connect = connect;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Provider = require("./Provider");

var _areEqualObj = require("../util/areEqualObj");

function connect(...args) {
  let lastState = {};

  const wrapConnect = Component => {
    const WrapComponet = props => {
      const curState = (0, _react.useContext)(_Provider.StoreContext);
      const curListenState = {};
      args.forEach(key => {
        curListenState[key] = curState[key];
      });
      let MemoCompoent = (0, _react.memo)(Component, function (prev, cur) {
        if ((0, _areEqualObj.areEqualObj)(cur, prev)) {
          return true;
        } else {
          lastState = curListenState;
          return false;
        }
      });
      return /*#__PURE__*/_react.default.createElement(MemoCompoent, (0, _extends2.default)({}, props, curListenState));
    };

    return WrapComponet;
  };

  return wrapConnect;
}