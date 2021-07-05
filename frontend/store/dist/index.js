"use strict";
exports.__esModule = true;
exports.wrapper = void 0;
var redux_1 = require("redux");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var reducers_1 = require("./reducers");
var redux_thunk_1 = require("redux-thunk");
var makeStore = function (context) { return redux_1.createStore(reducers_1.reducer, redux_1.applyMiddleware(redux_thunk_1["default"])); };
// const makeStore: MakeStore<RootState> = { context: Context }=> createStore(reducer)
exports.wrapper = next_redux_wrapper_1.createWrapper(makeStore, { debug: true });
