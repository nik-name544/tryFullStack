module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.ts");

var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const WrappedApp = ({
  Component,
  pageProps
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_2__["wrapper"].withRedux(WrappedApp));

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);





const makeStore = context => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["reducer"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)); // const makeStore: MakeStore<RootState> = { context: Context }=> createStore(reducer)


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./store/reducers/index.ts":
/*!*********************************!*\
  !*** ./store/reducers/index.ts ***!
  \*********************************/
/*! exports provided: rootReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _playerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerReducer */ "./store/reducers/playerReducer.ts");
/* harmony import */ var _trackReduser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trackReduser */ "./store/reducers/trackReduser.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  player: _playerReducer__WEBPACK_IMPORTED_MODULE_2__["playerReducer"],
  track: _trackReduser__WEBPACK_IMPORTED_MODULE_3__["trackReduser"]
});
const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.count) nextState.count = state.count; // preserve count value on client side navigation

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

/***/ }),

/***/ "./store/reducers/playerReducer.ts":
/*!*****************************************!*\
  !*** ./store/reducers/playerReducer.ts ***!
  \*****************************************/
/*! exports provided: playerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerReducer", function() { return playerReducer; });
/* harmony import */ var _types_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/player */ "./types/player.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 50,
  pause: true
};
const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].PAUSE:
      return _objectSpread(_objectSpread({}, state), {}, {
        pause: true
      });

    case _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].PLAY:
      return _objectSpread(_objectSpread({}, state), {}, {
        pause: false
      });

    case _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].SET_ACTIVE:
      return _objectSpread(_objectSpread({}, state), {}, {
        active: action.payload,
        duration: 0,
        currentTime: 0
      });

    case _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].SET_CURRENT_TIME:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentTime: action.payload
      });

    case _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].SET_DURATION:
      return _objectSpread(_objectSpread({}, state), {}, {
        duration: action.payload
      });

    case _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].SET_VOLUME:
      return _objectSpread(_objectSpread({}, state), {}, {
        volume: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/reducers/trackReduser.ts":
/*!****************************************!*\
  !*** ./store/reducers/trackReduser.ts ***!
  \****************************************/
/*! exports provided: trackReduser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackReduser", function() { return trackReduser; });
/* harmony import */ var _types_track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/track */ "./types/track.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  tracks: [],
  error: ""
};
const trackReduser = (state = initialState, action) => {
  switch (action.type) {
    case _types_track__WEBPACK_IMPORTED_MODULE_0__["TrackActionTypes"].FETCH_TRACKS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload
      });

    case _types_track__WEBPACK_IMPORTED_MODULE_0__["TrackActionTypes"].FETCH_TRACKS:
      return {
        error: "",
        tracks: action.payload
      };

    default:
      return state;
  }
};

/***/ }),

/***/ "./types/player.ts":
/*!*************************!*\
  !*** ./types/player.ts ***!
  \*************************/
/*! exports provided: PlayerActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerActionTypes", function() { return PlayerActionTypes; });
let PlayerActionTypes;

(function (PlayerActionTypes) {
  PlayerActionTypes["PLAY"] = "PLAY";
  PlayerActionTypes["PAUSE"] = "PAUSE";
  PlayerActionTypes["SET_ACTIVE"] = "SET_ACTIVE";
  PlayerActionTypes["SET_DURATION"] = "SET_DURATION";
  PlayerActionTypes["SET_CURRENT_TIME"] = "SET_CURRENT_TIME";
  PlayerActionTypes["SET_VOLUME"] = "SET_VOLUME";
})(PlayerActionTypes || (PlayerActionTypes = {}));

/***/ }),

/***/ "./types/track.ts":
/*!************************!*\
  !*** ./types/track.ts ***!
  \************************/
/*! exports provided: TrackActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackActionTypes", function() { return TrackActionTypes; });
let TrackActionTypes;

(function (TrackActionTypes) {
  TrackActionTypes["FETCH_TRACKS"] = "FETCH_TRACKS";
  TrackActionTypes["FETCH_TRACKS_ERROR"] = "FETCH_TRACKS_ERROR";
})(TrackActionTypes || (TrackActionTypes = {}));

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvcGxheWVyUmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy90cmFja1JlZHVzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3R5cGVzL3RyYWNrLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIldyYXBwZWRBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwbGF5ZXIiLCJwbGF5ZXJSZWR1Y2VyIiwidHJhY2siLCJ0cmFja1JlZHVzZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwicGF5bG9hZCIsImNvdW50IiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsImFjdGl2ZSIsInZvbHVtZSIsInBhdXNlIiwiUGxheWVyQWN0aW9uVHlwZXMiLCJQQVVTRSIsIlBMQVkiLCJTRVRfQUNUSVZFIiwiU0VUX0NVUlJFTlRfVElNRSIsIlNFVF9EVVJBVElPTiIsIlNFVF9WT0xVTUUiLCJ0cmFja3MiLCJlcnJvciIsIlRyYWNrQWN0aW9uVHlwZXMiLCJGRVRDSF9UUkFDS1NfRVJST1IiLCJGRVRDSF9UUkFDS1MiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTs7QUFFQSxNQUFNQSxVQUF3QixHQUFHLENBQUM7QUFBQ0MsV0FBRDtBQUFZQztBQUFaLENBQUQsa0JBQzdCLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQUllQyw2R0FBTyxDQUFDQyxTQUFSLENBQWtCSixVQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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Qzs7QUFDSixTQUFLaUIsNkRBQWdCLENBQUNFLFlBQXRCO0FBQ0ksYUFBTztBQUFFSCxhQUFLLEVBQUUsRUFBVDtBQUFhRCxjQUFNLEVBQUVuQixNQUFNLENBQUNJO0FBQTVCLE9BQVA7O0FBQ0o7QUFDSSxhQUFPTCxLQUFQO0FBTlI7QUFRSCxDQVRNLEM7Ozs7Ozs7Ozs7OztBQ0VQO0FBQUE7QUFBTyxJQUFLYSxpQkFBWjs7V0FBWUEsaUI7QUFBQUEsbUI7QUFBQUEsbUI7QUFBQUEsbUI7QUFBQUEsbUI7QUFBQUEsbUI7QUFBQUEsbUI7R0FBQUEsaUIsS0FBQUEsaUI7Ozs7Ozs7Ozs7OztBQ1laO0FBQUE7QUFBTyxJQUFLUyxnQkFBWjs7V0FBWUEsZ0I7QUFBQUEsa0I7QUFBQUEsa0I7R0FBQUEsZ0IsS0FBQUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJaLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHtGQ30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5jb25zdCBXcmFwcGVkQXBwOiBGQzxBcHBQcm9wcz4gPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkgPT4gKFxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhcHBlZEFwcCk7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCJcclxuaW1wb3J0IHsgTWFrZVN0b3JlLCBDb250ZXh0LCBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQgeyByZWR1Y2VyLCBSb290U3RhdGUgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiXHJcbmltcG9ydCB0aHVuaywgeyAgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5cclxuY29uc3QgbWFrZVN0b3JlOiBNYWtlU3RvcmU8Um9vdFN0YXRlPiAgPSAoY29udGV4dDogQ29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcclxuLy8gY29uc3QgbWFrZVN0b3JlOiBNYWtlU3RvcmU8Um9vdFN0YXRlPiA9IHsgY29udGV4dDogQ29udGV4dCB9PT4gY3JlYXRlU3RvcmUocmVkdWNlcilcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxSb290U3RhdGU+KG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KVxyXG5cclxuZXhwb3J0IHR5cGUgTmV4dFRodW5rRGlzcGF0Y2ggPSBUaHVua0Rpc3BhdGNoPFJvb3RTdGF0ZSwgdm9pZCwgQW55QWN0aW9uPiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBwbGF5ZXJSZWR1Y2VyIH0gZnJvbSBcIi4vcGxheWVyUmVkdWNlclwiO1xyXG5pbXBvcnQgeyB0cmFja1JlZHVzZXIgfSBmcm9tIFwiLi90cmFja1JlZHVzZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBwbGF5ZXI6IHBsYXllclJlZHVjZXIsXHJcbiAgICB0cmFjazogdHJhY2tSZWR1c2VyXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhdGUuY291bnQpIG5leHRTdGF0ZS5jb3VudCA9IHN0YXRlLmNvdW50IC8vIHByZXNlcnZlIGNvdW50IHZhbHVlIG9uIGNsaWVudCBzaWRlIG5hdmlnYXRpb25cclxuICAgICAgICByZXR1cm4gbmV4dFN0YXRlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByb290UmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj4iLCJpbXBvcnQgeyBQbGF5ZXJBY3Rpb24sIFBsYXllckFjdGlvblR5cGVzLCBQbGF5ZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi90eXBlcy9wbGF5ZXJcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBQbGF5ZXJTdGF0ZSA9IHtcclxuICAgIGN1cnJlbnRUaW1lOiAwLFxyXG4gICAgZHVyYXRpb246IDAsXHJcbiAgICBhY3RpdmU6IG51bGwsXHJcbiAgICB2b2x1bWU6IDUwLFxyXG4gICAgcGF1c2U6IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXllclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUGxheWVyQWN0aW9uKTogUGxheWVyU3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgUGxheWVyQWN0aW9uVHlwZXMuUEFVU0U6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYXVzZTogdHJ1ZSB9XHJcbiAgICAgICAgY2FzZSBQbGF5ZXJBY3Rpb25UeXBlcy5QTEFZOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGF1c2U6IGZhbHNlIH1cclxuICAgICAgICBjYXNlIFBsYXllckFjdGlvblR5cGVzLlNFVF9BQ1RJVkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhY3RpdmU6IGFjdGlvbi5wYXlsb2FkLCBkdXJhdGlvbjogMCwgY3VycmVudFRpbWU6IDAgfVxyXG4gICAgICAgIGNhc2UgUGxheWVyQWN0aW9uVHlwZXMuU0VUX0NVUlJFTlRfVElNRTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRUaW1lOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgY2FzZSBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfRFVSQVRJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkdXJhdGlvbjogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIGNhc2UgUGxheWVyQWN0aW9uVHlwZXMuU0VUX1ZPTFVNRTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZvbHVtZTogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVHJhY2tTdGF0ZSwgVHJhY2tBY3Rpb24sIFRyYWNrQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHJhY2tcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBUcmFja1N0YXRlID0ge1xyXG4gICAgdHJhY2tzOiBbXSxcclxuICAgIGVycm9yOiBcIlwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdHJhY2tSZWR1c2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFRyYWNrQWN0aW9uKTogVHJhY2tTdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUcmFja0FjdGlvblR5cGVzLkZFVENIX1RSQUNLU19FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgY2FzZSBUcmFja0FjdGlvblR5cGVzLkZFVENIX1RSQUNLUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiXCIsIHRyYWNrczogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVRyYWNrIH0gZnJvbSBcIi4vdHJhY2tcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyU3RhdGUge1xyXG4gICAgYWN0aXZlOiBudWxsIHwgSVRyYWNrXHJcbiAgICB2b2x1bWU6IG51bWJlclxyXG4gICAgZHVyYXRpb246IG51bWJlclxyXG4gICAgY3VycmVudFRpbWU6IG51bWJlclxyXG4gICAgcGF1c2U6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGxheWVyQWN0aW9uVHlwZXMge1xyXG4gICAgUExBWSA9IFwiUExBWVwiLFxyXG4gICAgUEFVU0UgPSBcIlBBVVNFXCIsXHJcbiAgICBTRVRfQUNUSVZFID0gXCJTRVRfQUNUSVZFXCIsXHJcbiAgICBTRVRfRFVSQVRJT04gPSBcIlNFVF9EVVJBVElPTlwiLFxyXG4gICAgU0VUX0NVUlJFTlRfVElNRSA9IFwiU0VUX0NVUlJFTlRfVElNRVwiLFxyXG4gICAgU0VUX1ZPTFVNRSA9IFwiU0VUX1ZPTFVNRVwiXHJcbn1cclxuXHJcbmludGVyZmFjZSBQbGF5QWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlBMQVlcclxufVxyXG5pbnRlcmZhY2UgUGF1c2VBY3Rpb24ge1xyXG4gICAgdHlwZTogUGxheWVyQWN0aW9uVHlwZXMuUEFVU0VcclxufVxyXG5pbnRlcmZhY2UgU2V0QWN0aXZlQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9BQ1RJVkUsXHJcbiAgICBwYXlsb2FkOiBJVHJhY2tcclxufVxyXG5pbnRlcmZhY2UgU2V0RHVyYXRpb25BY3Rpb24ge1xyXG4gICAgdHlwZTogUGxheWVyQWN0aW9uVHlwZXMuU0VUX0RVUkFUSU9OLFxyXG4gICAgcGF5bG9hZDogbnVtYmVyXHJcbn1cclxuaW50ZXJmYWNlIFNldEN1cnJlbnRUaW1lQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9DVVJSRU5UX1RJTUUsXHJcbiAgICBwYXlsb2FkOiBudW1iZXJcclxufVxyXG5pbnRlcmZhY2UgU2V0Vm9sdW1lQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9WT0xVTUUsXHJcbiAgICBwYXlsb2FkOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUGxheWVyQWN0aW9uID1cclxuICAgIFBsYXlBY3Rpb25cclxuICAgIHwgUGF1c2VBY3Rpb25cclxuICAgIHwgU2V0QWN0aXZlQWN0aW9uXHJcbiAgICB8IFNldER1cmF0aW9uQWN0aW9uXHJcbiAgICB8IFNldEN1cnJlbnRUaW1lQWN0aW9uXHJcbiAgICB8IFNldFZvbHVtZUFjdGlvbiIsImV4cG9ydCBpbnRlcmZhY2UgSUNvbW1lbnQge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgdGV4dDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYWNrIHtcclxuICAgIF9pZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXJ0aXN0OiBzdHJpbmc7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBsaXN0ZW5zOiBudW1iZXI7XHJcbiAgICBwaWN0dXJlOiBzdHJpbmc7XHJcbiAgICBhdWRpbzogc3RyaW5nO1xyXG4gICAgY29tbWVudHM6IElDb21tZW50W11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmFja1N0YXRlIHtcclxuICAgIHRyYWNrczogSVRyYWNrW11cclxuICAgIGVycm9yOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVHJhY2tBY3Rpb25UeXBlcyB7XHJcbiAgICBGRVRDSF9UUkFDS1MgPSBcIkZFVENIX1RSQUNLU1wiLFxyXG4gICAgRkVUQ0hfVFJBQ0tTX0VSUk9SID0gXCJGRVRDSF9UUkFDS1NfRVJST1JcIixcclxufVxyXG5cclxuaW50ZXJmYWNlIEZldGNoVHJhY2tzQWN0aW9uIHtcclxuICAgIHR5cGU6IFRyYWNrQWN0aW9uVHlwZXMuRkVUQ0hfVFJBQ0tTXHJcbiAgICBwYXlsb2FkOiBJVHJhY2tbXVxyXG59XHJcbmludGVyZmFjZSBGZXRjaFRyYWNrc0Vycm9yQWN0aW9uIHtcclxuICAgIHR5cGU6IFRyYWNrQWN0aW9uVHlwZXMuRkVUQ0hfVFJBQ0tTX0VSUk9SLFxyXG4gICAgcGF5bG9hZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRyYWNrQWN0aW9uID0gRmV0Y2hUcmFja3NBY3Rpb24gfCBGZXRjaFRyYWNrc0Vycm9yQWN0aW9uIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9