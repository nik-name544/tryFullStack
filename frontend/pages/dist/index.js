"use strict";
exports.__esModule = true;
var Home_module_css_1 = require("../styles/Home.module.css");
var MainLayout_1 = require("../MainLayout/MainLayout");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(MainLayout_1.MainLayout, null,
            React.createElement("div", { className: Home_module_css_1["default"].center },
                React.createElement("h1", null, "Hello music \u0448\u0442\u0443\u043A\u0430"),
                React.createElement("h3", null, "\u0417\u0434\u0435\u0441\u044C \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u043D\u043E\u0440\u043C \u0442\u0440\u0435\u043A\u0438\u0447\u0438")))));
}
exports["default"] = Home;
