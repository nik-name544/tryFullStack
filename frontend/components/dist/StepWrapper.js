"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var TrackItem_module_scss_1 = require("./TrackItem.module.scss");
var steps = ["info about track", "upd cover", "upd track"];
var StepWrapper = function (_a) {
    var activeStep = _a.activeStep, children = _a.children;
    return (react_1["default"].createElement(core_1.Container, null,
        react_1["default"].createElement(core_1.Stepper, { activeStep: activeStep }, steps.map(function (step, i) {
            return (react_1["default"].createElement(core_1.Step, { key: i, completed: activeStep > i },
                react_1["default"].createElement(core_1.StepLabel, null, step)));
        })),
        react_1["default"].createElement(core_1.Grid, { container: true, justifyContent: "center", className: TrackItem_module_scss_1["default"].stepWrapper },
            react_1["default"].createElement(core_1.Card, { className: TrackItem_module_scss_1["default"].stepWrapper__item }, children))));
};
exports["default"] = StepWrapper;
