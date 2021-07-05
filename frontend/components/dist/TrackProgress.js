"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TrackItem_module_scss_1 = require("./TrackItem.module.scss");
var TrackProgress = function (_a) {
    var left = _a.left, right = _a.right, onChange = _a.onChange;
    return (react_1["default"].createElement("div", { className: TrackItem_module_scss_1["default"].trackProgress },
        react_1["default"].createElement("input", { type: "range", min: 0, max: right, value: left, onChange: onChange }),
        react_1["default"].createElement("div", { className: TrackItem_module_scss_1["default"].trackProgressTime },
            left,
            " / ",
            right)));
};
exports["default"] = TrackProgress;
