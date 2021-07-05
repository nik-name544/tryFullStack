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
exports.playerReducer = void 0;
var player_1 = require("../../types/player");
var initialState = {
    currentTime: 0,
    duration: 0,
    active: null,
    volume: 50,
    pause: true
};
exports.playerReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case player_1.PlayerActionTypes.PAUSE:
            return __assign(__assign({}, state), { pause: true });
        case player_1.PlayerActionTypes.PLAY:
            return __assign(__assign({}, state), { pause: false });
        case player_1.PlayerActionTypes.SET_ACTIVE:
            return __assign(__assign({}, state), { active: action.payload, duration: 0, currentTime: 0 });
        case player_1.PlayerActionTypes.SET_CURRENT_TIME:
            return __assign(__assign({}, state), { currentTime: action.payload });
        case player_1.PlayerActionTypes.SET_DURATION:
            return __assign(__assign({}, state), { duration: action.payload });
        case player_1.PlayerActionTypes.SET_VOLUME:
            return __assign(__assign({}, state), { volume: action.payload });
        default:
            return state;
    }
};
