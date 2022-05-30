"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.connect = connect;

var _react = require("react");

var _context = _interopRequireDefault(require("../util/context"));

var _areEqualObj = require("../util/areEqualObj");

function connect(...args) {
  let lastState = {},
      shouldUpdate = true;
  return function (Component) {
    const context = (0, _react.useContext)(_context.default);
    const curState = context.getState();
    const curListenState = {};
    args.forEach(key => {
      curListenState[key] = curState[key];
    });

    if ((0, _areEqualObj.areEqualObj)(lastState, Component)) {
      shouldUpdate = false;
    }

    const _Component = /*#__PURE__*/React.createElement(Component, curListenState);

    let MemoCompoent = (0, _react.memo)(_Component, function () {
      if (shouldUpdate) {
        lastState = curListenState;
        return false;
      }

      return true;
    });
    return MemoCompoent;
  };
}