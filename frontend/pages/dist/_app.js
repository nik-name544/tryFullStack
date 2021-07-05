"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var store_1 = require("../store");
var WrappedApp = function (_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (react_1["default"].createElement(Component, __assign({}, pageProps)));
};
exports["default"] = store_1.wrapper.withRedux(WrappedApp);
