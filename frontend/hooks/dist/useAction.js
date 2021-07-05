"use strict";
exports.__esModule = true;
exports.useAction = void 0;
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var actions_creators_1 = require("../store/actions-creators");
exports.useAction = function () {
    var dispatch = react_redux_1.useDispatch();
    return redux_1.bindActionCreators(actions_creators_1["default"], dispatch);
};
