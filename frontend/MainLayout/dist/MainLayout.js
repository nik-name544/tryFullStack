"use strict";
exports.__esModule = true;
exports.MainLayout = void 0;
var react_1 = require("react");
var Navbar_1 = require("../components/Navbar");
var core_1 = require("@material-ui/core");
var Player_1 = require("../components/Player");
var head_1 = require("next/head");
exports.MainLayout = function (_a) {
    var children = _a.children, title = _a.title;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, title || "musikalnaja gavna")),
        react_1["default"].createElement(Navbar_1.NavBar, null),
        react_1["default"].createElement(core_1.Container, { style: { margin: "90px 0" } }, children),
        react_1["default"].createElement(Player_1["default"], null)));
};
