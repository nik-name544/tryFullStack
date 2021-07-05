"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TrackItem_module_scss_1 = require("./TrackItem.module.scss");
var FileUpload = function (_a) {
    var setFile = _a.setFile, accept = _a.accept, children = _a.children;
    var ref = react_1.useRef();
    var onChange = function (e) {
        setFile(e.target.files[0]);
    };
    return (react_1["default"].createElement("div", { onClick: function () { return ref.current.click(); } },
        react_1["default"].createElement("input", { type: "file", name: "", id: "", accept: accept, className: TrackItem_module_scss_1["default"].fileUploadInput, ref: ref, onChange: onChange }),
        children));
};
exports["default"] = FileUpload;
