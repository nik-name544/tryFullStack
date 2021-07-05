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
exports.trackReduser = void 0;
var track_1 = require("../../types/track");
var initialState = {
    tracks: [],
    error: ""
};
exports.trackReduser = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case track_1.TrackActionTypes.FETCH_TRACKS_ERROR:
            return __assign(__assign({}, state), { error: action.payload });
        case track_1.TrackActionTypes.FETCH_TRACKS:
            return { error: "", tracks: action.payload };
        default:
            return state;
    }
};
