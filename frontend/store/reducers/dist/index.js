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
exports.reducer = exports.rootReducer = void 0;
var next_redux_wrapper_1 = require("next-redux-wrapper");
var redux_1 = require("redux");
var playerReducer_1 = require("./playerReducer");
var trackReduser_1 = require("./trackReduser");
exports.rootReducer = redux_1.combineReducers({
    player: playerReducer_1.playerReducer,
    track: trackReduser_1.trackReduser
});
exports.reducer = function (state, action) {
    if (action.type === next_redux_wrapper_1.HYDRATE) {
        var nextState = __assign(__assign({}, state), action.payload);
        if (state.count)
            nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    }
    else {
        return exports.rootReducer(state, action);
    }
};
