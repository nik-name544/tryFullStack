"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var react_1 = require("react");
var TrackItem_module_scss_1 = require("./TrackItem.module.scss");
var TrackProgress_1 = require("./TrackProgress");
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var useAction_1 = require("../hooks/useAction");
var audio;
var Player = function () {
    var track = { _id: '1', name: "track 1", artist: "some1", text: "some text1", listens: 5, audio: "https://song.link/cXK8Cbv4WGwTW", picture: "https://restaurantmomo.com/wp-content/uploads/2020/01/footer-bg.jpg", comments: [] };
    var _a = useTypedSelector_1.useTypedSelector(function (state) { return state.player; }), pause = _a.pause, volume = _a.volume, active = _a.active, duration = _a.duration, currentTime = _a.currentTime;
    var _b = useAction_1.useAction(), pauseTrack = _b.pauseTrack, playTrack = _b.playTrack, setVolume = _b.setVolume, setCurrentTime = _b.setCurrentTime, setDuration = _b.setDuration, setActive = _b.setActive;
    react_1.useEffect(function () {
        if (!audio) {
            audio = new Audio();
        }
        else {
            setAudio();
            play();
        }
    }, [active]);
    var setAudio = function () {
        if (active) {
            audio.src = "http://localhost:5000/" + active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = function () {
                setDuration(Math.ceil(audio.duration));
            };
            audio.ontimeupdate = function () {
                setCurrentTime(Math.ceil(audio.currentTime));
            };
        }
    };
    var play = function () {
        if (pause) {
            playTrack();
            audio.play();
        }
        else {
            pauseTrack();
            audio.pause();
        }
    };
    var changeVolume = function (e) {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value));
    };
    var changeCurrentTime = function (e) {
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value));
    };
    if (!active) {
        return null;
    }
    return (react_1["default"].createElement("div", { className: TrackItem_module_scss_1["default"].player },
        react_1["default"].createElement(core_1.IconButton, { onClick: play }, pause ? react_1["default"].createElement(icons_1.Pause, null) : react_1["default"].createElement(icons_1.PlayArrow, null)),
        react_1["default"].createElement(core_1.Grid, { container: true, direction: "column", display: "flex", style: { width: 200, margin: "0 20px" }, justifyContent: "space-between" },
            react_1["default"].createElement("div", { className: TrackItem_module_scss_1["default"].trackName }, active === null || active === void 0 ? void 0 : active.name),
            react_1["default"].createElement("div", { className: TrackItem_module_scss_1["default"].artist }, active === null || active === void 0 ? void 0 : active.artist)),
        react_1["default"].createElement(TrackProgress_1["default"], { left: currentTime, right: duration, onChange: changeCurrentTime }),
        react_1["default"].createElement(icons_1.VolumeUp, { style: { marginLeft: "auto" } }),
        react_1["default"].createElement(TrackProgress_1["default"], { left: volume, right: 100, onChange: changeVolume })));
};
// 1,57,11
exports["default"] = Player;
