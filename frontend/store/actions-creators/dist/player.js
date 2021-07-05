"use strict";
exports.__esModule = true;
exports.setActive = exports.setCurrentTime = exports.setVolume = exports.setDuration = exports.pauseTrack = exports.playTrack = void 0;
var player_1 = require("../../types/player");
exports.playTrack = function () {
    return {
        type: player_1.PlayerActionTypes.PLAY
    };
};
exports.pauseTrack = function () {
    return {
        type: player_1.PlayerActionTypes.PAUSE
    };
};
exports.setDuration = function (payload) {
    return {
        type: player_1.PlayerActionTypes.SET_DURATION,
        payload: payload
    };
};
exports.setVolume = function (payload) {
    return {
        type: player_1.PlayerActionTypes.SET_VOLUME,
        payload: payload
    };
};
exports.setCurrentTime = function (payload) {
    return {
        type: player_1.PlayerActionTypes.SET_CURRENT_TIME,
        payload: payload
    };
};
exports.setActive = function (payload) {
    return {
        type: player_1.PlayerActionTypes.SET_ACTIVE,
        payload: payload
    };
};
