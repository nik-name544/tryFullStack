"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var TrackItem_module_scss_1 = require("./TrackItem.module.scss");
var icons_1 = require("@material-ui/icons");
var router_1 = require("next/router");
var useAction_1 = require("../hooks/useAction");
var TrackItem = function (_a) {
    var track = _a.track, _b = _a.active, active = _b === void 0 ? false : _b;
    var router = router_1.useRouter();
    var _c = useAction_1.useAction(), playTrack = _c.playTrack, pauseTrack = _c.pauseTrack, setActive = _c.setActive;
    var play = function (e) {
        e.stopPropagation();
        setActive(track);
        playTrack();
    };
    return (react_1["default"].createElement(core_1.Card, { className: TrackItem_module_scss_1["default"].track, onClick: function () { return router.push("/tracks/" + track._id); } },
        react_1["default"].createElement(core_1.IconButton, { onClick: play }, active ? react_1["default"].createElement(icons_1.Pause, null) : react_1["default"].createElement(icons_1.PlayArrow, null)),
        react_1["default"].createElement("img", { src: "http://localhost:5000/" + track.picture, alt: track.name, height: 70, className: TrackItem_module_scss_1["default"].itemImg }),
        react_1["default"].createElement(core_1.Grid, { container: true, direction: "column", display: "flex", style: { width: 200, margin: "0 20px" }, justifyContent: "space-between" },
            react_1["default"].createElement("div", { className: TrackItem_module_scss_1["default"].trackName }, track.name),
            react_1["default"].createElement("div", { className: TrackItem_module_scss_1["default"].artist }, track.artist)),
        active && react_1["default"].createElement("div", null, "02:42 / 03:50"),
        react_1["default"].createElement(core_1.IconButton, { className: TrackItem_module_scss_1["default"].delBtn, onClick: function (e) { return e.stopPropagation(); } },
            react_1["default"].createElement(icons_1.Delete, null))));
};
exports["default"] = TrackItem;
