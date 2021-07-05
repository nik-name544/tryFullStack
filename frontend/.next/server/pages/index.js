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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./MainLayout/MainLayout.tsx":
/*!***********************************!*\
  !*** ./MainLayout/MainLayout.tsx ***!
  \***********************************/
/*! exports provided: MainLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayout", function() { return MainLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player */ "./components/Player.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\MainLayout\\MainLayout.tsx";





const MainLayout = ({
  children,
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title || "musikalnaja gavna"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["NavBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      style: {
        margin: "90px 0"
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Player__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);

var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\components\\Navbar.tsx";



















const menuItems = [{
  "text": "Home",
  "href": "/"
}, {
  "text": "Tracks",
  "href": "/tracks"
}, {
  "text": "Albums",
  "href": "/albums"
}];
const NavBar = () => {
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["useRouter"])();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      position: "fixed",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          edge: "start",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
          variant: "h6",
          noWrap: true,
          children: "Persistent drawer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
      variant: "persistent",
      anchor: "left",
      open: open,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
          onClick: handleDrawerClose,
          children: theme.direction === 'ltr' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 54
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 76
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: menuItems.map(({
          text,
          href
        }, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
          button: true,
          onClick: () => {
            router.push(href);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15___default.a, {
            children: i % 2 === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_17___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 58
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_18___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 74
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16___default.a, {
            primary: text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 29
          }, undefined)]
        }, href, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/Player.tsx":
/*!*******************************!*\
  !*** ./components/Player.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackItem.module.scss */ "./components/TrackItem.module.scss");
/* harmony import */ var _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TrackProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrackProgress */ "./components/TrackProgress.tsx");
/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useTypedSelector */ "./hooks/useTypedSelector.ts");
/* harmony import */ var _hooks_useAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useAction */ "./hooks/useAction.ts");

var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\components\\Player.tsx";







let audio;

const Player = () => {
  const track = {
    _id: '1',
    name: "track 1",
    artist: "some1",
    text: "some text1",
    listens: 5,
    audio: "https://song.link/cXK8Cbv4WGwTW",
    picture: "https://restaurantmomo.com/wp-content/uploads/2020/01/footer-bg.jpg",
    comments: []
  };
  const {
    pause,
    volume,
    active,
    duration,
    currentTime
  } = Object(_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_6__["useTypedSelector"])(state => state.player);
  const {
    pauseTrack,
    playTrack,
    setVolume,
    setCurrentTime,
    setDuration,
    setActive
  } = Object(_hooks_useAction__WEBPACK_IMPORTED_MODULE_7__["useAction"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = "http://localhost:5000/" + active.audio;
      audio.volume = volume / 100;

      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };

      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = e => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  };

  const changeCurrentTime = e => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  if (!active) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.player,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      onClick: play,
      children: pause ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Pause"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 26
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["PlayArrow"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 38
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      direction: "column",
      display: "flex",
      style: {
        width: 200,
        margin: "0 20px"
      },
      justifyContent: "space-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.trackName,
        children: active === null || active === void 0 ? void 0 : active.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.artist,
        children: active === null || active === void 0 ? void 0 : active.artist
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TrackProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
      left: currentTime,
      right: duration,
      onChange: changeCurrentTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["VolumeUp"], {
      style: {
        marginLeft: "auto"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TrackProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
      left: volume,
      right: 100,
      onChange: changeVolume
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, undefined);
}; // 1,57,11


/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./components/TrackItem.module.scss":
/*!******************************************!*\
  !*** ./components/TrackItem.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"track": "TrackItem_track__3Fm7r",
	"artist": "TrackItem_artist__1VWE0",
	"delBtn": "TrackItem_delBtn__1EXfo",
	"itemImg": "TrackItem_itemImg__1Q6Wl",
	"trackName": "TrackItem_trackName__2KO3b",
	"stepWrapper": "TrackItem_stepWrapper__1MnVE",
	"stepWrapper__item": "TrackItem_stepWrapper__item__38GA1",
	"fileUploadInput": "TrackItem_fileUploadInput__10KLc",
	"player": "TrackItem_player__RmCuf",
	"trackProgress": "TrackItem_trackProgress__1JjRa",
	"trackProgressTime": "TrackItem_trackProgressTime__2TXJV"
};


/***/ }),

/***/ "./components/TrackProgress.tsx":
/*!**************************************!*\
  !*** ./components/TrackProgress.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrackItem.module.scss */ "./components/TrackItem.module.scss");
/* harmony import */ var _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\components\\TrackProgress.tsx";



const TrackProgress = ({
  left,
  right,
  onChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trackProgress,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "range",
      min: 0,
      max: right,
      value: left,
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trackProgressTime,
      children: [left, " / ", right]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TrackProgress);

/***/ }),

/***/ "./hooks/useAction.ts":
/*!****************************!*\
  !*** ./hooks/useAction.ts ***!
  \****************************/
/*! exports provided: useAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAction", function() { return useAction; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_creators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions-creators */ "./store/actions-creators/index.ts");



const useAction = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_store_actions_creators__WEBPACK_IMPORTED_MODULE_2__["default"], dispatch);
};

/***/ }),

/***/ "./hooks/useTypedSelector.ts":
/*!***********************************!*\
  !*** ./hooks/useTypedSelector.ts ***!
  \***********************************/
/*! exports provided: useTypedSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTypedSelector", function() { return useTypedSelector; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"];

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MainLayout/MainLayout */ "./MainLayout/MainLayout.tsx");


var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\pages\\index.tsx";


function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_2__["MainLayout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.center,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Hello music \u0448\u0442\u0443\u043A\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "\u0417\u0434\u0435\u0441\u044C \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u043D\u043E\u0440\u043C \u0442\u0440\u0435\u043A\u0438\u0447\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./store/actions-creators/index.ts":
/*!*****************************************!*\
  !*** ./store/actions-creators/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./store/actions-creators/player.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, _player__WEBPACK_IMPORTED_MODULE_0__));

/***/ }),

/***/ "./store/actions-creators/player.ts":
/*!******************************************!*\
  !*** ./store/actions-creators/player.ts ***!
  \******************************************/
/*! exports provided: playTrack, pauseTrack, setDuration, setVolume, setCurrentTime, setActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playTrack", function() { return playTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseTrack", function() { return pauseTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDuration", function() { return setDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVolume", function() { return setVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentTime", function() { return setCurrentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActive", function() { return setActive; });
/* harmony import */ var _types_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/player */ "./types/player.ts");

const playTrack = () => {
  return {
    type: _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].PLAY
  };
};
const pauseTrack = () => {
  return {
    type: _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].PAUSE
  };
};
const setDuration = payload => {
  return {
    type: _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].SET_DURATION,
    payload
  };
};
const setVolume = payload => {
  return {
    type: _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].SET_VOLUME,
    payload
  };
};
const setCurrentTime = payload => {
  return {
    type: _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].SET_CURRENT_TIME,
    payload
  };
};
const setActive = payload => {
  return {
    type: _types_player__WEBPACK_IMPORTED_MODULE_0__["PlayerActionTypes"].SET_ACTIVE,
    payload
  };
};

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"center": "Home_center__2Zxdr"
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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTWFpbkxheW91dC9NYWluTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGF5ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhY2tJdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhY2tQcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQWN0aW9uLnRzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVR5cGVkU2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMtY3JlYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy1jcmVhdG9ycy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJtYXJnaW4iLCJtZW51SXRlbXMiLCJOYXZCYXIiLCJ0aGVtZSIsInVzZVRoZW1lIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsImRpcmVjdGlvbiIsIm1hcCIsInRleHQiLCJocmVmIiwiaSIsInB1c2giLCJhdWRpbyIsIlBsYXllciIsInRyYWNrIiwiX2lkIiwibmFtZSIsImFydGlzdCIsImxpc3RlbnMiLCJwaWN0dXJlIiwiY29tbWVudHMiLCJwYXVzZSIsInZvbHVtZSIsImFjdGl2ZSIsImR1cmF0aW9uIiwiY3VycmVudFRpbWUiLCJ1c2VUeXBlZFNlbGVjdG9yIiwic3RhdGUiLCJwbGF5ZXIiLCJwYXVzZVRyYWNrIiwicGxheVRyYWNrIiwic2V0Vm9sdW1lIiwic2V0Q3VycmVudFRpbWUiLCJzZXREdXJhdGlvbiIsInNldEFjdGl2ZSIsInVzZUFjdGlvbiIsInVzZUVmZmVjdCIsIkF1ZGlvIiwic2V0QXVkaW8iLCJwbGF5Iiwic3JjIiwib25sb2FkZWRtZXRhZGF0YSIsIk1hdGgiLCJjZWlsIiwib250aW1ldXBkYXRlIiwiY2hhbmdlVm9sdW1lIiwiZSIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlQ3VycmVudFRpbWUiLCJjIiwid2lkdGgiLCJ0cmFja05hbWUiLCJtYXJnaW5MZWZ0IiwiVHJhY2tQcm9ncmVzcyIsImxlZnQiLCJyaWdodCIsIm9uQ2hhbmdlIiwidHJhY2tQcm9ncmVzcyIsInRyYWNrUHJvZ3Jlc3NUaW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsIkFjdGlvbkNyZWF0b3JzIiwidXNlU2VsZWN0b3IiLCJIb21lIiwiY2VudGVyIiwiUGxheWVyQWN0aW9uQ3JlYXRvcnMiLCJ0eXBlIiwiUGxheWVyQWN0aW9uVHlwZXMiLCJQTEFZIiwiUEFVU0UiLCJwYXlsb2FkIiwiU0VUX0RVUkFUSU9OIiwiU0VUX1ZPTFVN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Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmludGVyZmFjZSBNYWluTGF5b3V0UHJvcHMge1xyXG4gICAgdGl0bGU/OiBzdHJpbmdcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluTGF5b3V0OiBSZWFjdC5GQzxNYWluTGF5b3V0UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlIHx8IFwibXVzaWthbG5hamEgZ2F2bmFcIn08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBtYXJnaW46IFwiOTBweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGxheWVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSwgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCc7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwidGV4dFwiOiBcIkhvbWVcIixcclxuICAgICAgICBcImhyZWZcIjogXCIvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwiVHJhY2tzXCIsXHJcbiAgICAgICAgXCJocmVmXCI6IFwiL3RyYWNrc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGV4dFwiOiBcIkFsYnVtc1wiLFxyXG4gICAgICAgIFwiaHJlZlwiOiBcIi9hbGJ1bXNcIlxyXG4gICAgfVxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICAgIDxBcHBCYXJcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGVyc2lzdGVudCBkcmF3ZXJcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJzaXN0ZW50XCJcclxuICAgICAgICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAnbHRyJyA/IDxDaGV2cm9uTGVmdEljb24gLz4gOiA8Q2hldnJvblJpZ2h0SWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyB0ZXh0LCBocmVmIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2hyZWZ9IG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goaHJlZikgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPntpICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IEdyaWQsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgUGF1c2UsIFBsYXlBcnJvdywgVm9sdW1lVXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSVRyYWNrIH0gZnJvbSAnLi4vdHlwZXMvdHJhY2snXHJcbmltcG9ydCBjIGZyb20gJy4vVHJhY2tJdGVtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgVHJhY2tQcm9ncmVzcyBmcm9tICcuL1RyYWNrUHJvZ3Jlc3MnXHJcbmltcG9ydCB7IHVzZVR5cGVkU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcy91c2VUeXBlZFNlbGVjdG9yJ1xyXG5pbXBvcnQgeyB1c2VBY3Rpb24gfSBmcm9tICcuLi9ob29rcy91c2VBY3Rpb24nXHJcblxyXG5cclxubGV0IGF1ZGlvXHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0cmFjazogSVRyYWNrID0geyBfaWQ6ICcxJywgbmFtZTogXCJ0cmFjayAxXCIsIGFydGlzdDogXCJzb21lMVwiLCB0ZXh0OiBcInNvbWUgdGV4dDFcIiwgbGlzdGVuczogNSwgYXVkaW86IFwiaHR0cHM6Ly9zb25nLmxpbmsvY1hLOENidjRXR3dUV1wiLCBwaWN0dXJlOiBcImh0dHBzOi8vcmVzdGF1cmFudG1vbW8uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAxL2Zvb3Rlci1iZy5qcGdcIiwgY29tbWVudHM6IFtdIH1cclxuICAgIGNvbnN0IHsgcGF1c2UsIHZvbHVtZSwgYWN0aXZlLCBkdXJhdGlvbiwgY3VycmVudFRpbWUgfSA9IHVzZVR5cGVkU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGxheWVyKVxyXG4gICAgY29uc3QgeyBwYXVzZVRyYWNrLCBwbGF5VHJhY2ssIHNldFZvbHVtZSwgc2V0Q3VycmVudFRpbWUsIHNldER1cmF0aW9uLCBzZXRBY3RpdmUgfSA9IHVzZUFjdGlvbigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWF1ZGlvKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBdWRpbygpXHJcbiAgICAgICAgICAgIHBsYXkoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthY3RpdmVdKVxyXG5cclxuICAgIGNvbnN0IHNldEF1ZGlvID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgYXVkaW8uc3JjID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCIgKyBhY3RpdmUuYXVkaW9cclxuICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gdm9sdW1lIC8gMTAwXHJcbiAgICAgICAgICAgIGF1ZGlvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREdXJhdGlvbihNYXRoLmNlaWwoYXVkaW8uZHVyYXRpb24pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF1ZGlvLm9udGltZXVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUaW1lKE1hdGguY2VpbChhdWRpby5jdXJyZW50VGltZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiAocGF1c2UpIHtcclxuICAgICAgICAgICAgcGxheVRyYWNrKClcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGF1c2VUcmFjaygpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBhdXNlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVm9sdW1lID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgYXVkaW8udm9sdW1lID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAvIDEwMFxyXG4gICAgICAgIHNldFZvbHVtZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUN1cnJlbnRUaW1lID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgc2V0Q3VycmVudFRpbWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Yy5wbGF5ZXJ9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtwbGF5fT5cclxuICAgICAgICAgICAgICAgIHtwYXVzZSA/IDxQYXVzZSAvPiA6IDxQbGF5QXJyb3cgLz59XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjAwLCBtYXJnaW46IFwiMCAyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjLnRyYWNrTmFtZX0+e2FjdGl2ZT8ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjLmFydGlzdH0+e2FjdGl2ZT8uYXJ0aXN0fTwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxUcmFja1Byb2dyZXNzIGxlZnQ9e2N1cnJlbnRUaW1lfSByaWdodD17ZHVyYXRpb259IG9uQ2hhbmdlPXtjaGFuZ2VDdXJyZW50VGltZX0gLz5cclxuICAgICAgICAgICAgPFZvbHVtZVVwIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19IC8+XHJcbiAgICAgICAgICAgIDxUcmFja1Byb2dyZXNzIGxlZnQ9e3ZvbHVtZX0gcmlnaHQ9ezEwMH0gb25DaGFuZ2U9e2NoYW5nZVZvbHVtZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4vLyAxLDU3LDExXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0cmFja1wiOiBcIlRyYWNrSXRlbV90cmFja19fM0ZtN3JcIixcblx0XCJhcnRpc3RcIjogXCJUcmFja0l0ZW1fYXJ0aXN0X18xVldFMFwiLFxuXHRcImRlbEJ0blwiOiBcIlRyYWNrSXRlbV9kZWxCdG5fXzFFWGZvXCIsXG5cdFwiaXRlbUltZ1wiOiBcIlRyYWNrSXRlbV9pdGVtSW1nX18xUTZXbFwiLFxuXHRcInRyYWNrTmFtZVwiOiBcIlRyYWNrSXRlbV90cmFja05hbWVfXzJLTzNiXCIsXG5cdFwic3RlcFdyYXBwZXJcIjogXCJUcmFja0l0ZW1fc3RlcFdyYXBwZXJfXzFNblZFXCIsXG5cdFwic3RlcFdyYXBwZXJfX2l0ZW1cIjogXCJUcmFja0l0ZW1fc3RlcFdyYXBwZXJfX2l0ZW1fXzM4R0ExXCIsXG5cdFwiZmlsZVVwbG9hZElucHV0XCI6IFwiVHJhY2tJdGVtX2ZpbGVVcGxvYWRJbnB1dF9fMTBLTGNcIixcblx0XCJwbGF5ZXJcIjogXCJUcmFja0l0ZW1fcGxheWVyX19SbUN1ZlwiLFxuXHRcInRyYWNrUHJvZ3Jlc3NcIjogXCJUcmFja0l0ZW1fdHJhY2tQcm9ncmVzc19fMUpqUmFcIixcblx0XCJ0cmFja1Byb2dyZXNzVGltZVwiOiBcIlRyYWNrSXRlbV90cmFja1Byb2dyZXNzVGltZV9fMlRYSlZcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGMgZnJvbSAnLi9UcmFja0l0ZW0ubW9kdWxlLnNjc3MnXHJcblxyXG5pbnRlcmZhY2UgVHJhY2tQcm9ncmVzc1Byb3BzIHtcclxuICAgIGxlZnQ6IG51bWJlclxyXG4gICAgcmlnaHQ6IG51bWJlclxyXG4gICAgb25DaGFuZ2U6IChlKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IFRyYWNrUHJvZ3Jlc3M6IFJlYWN0LkZDPFRyYWNrUHJvZ3Jlc3NQcm9wcz4gPSAoeyBsZWZ0LCByaWdodCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Yy50cmFja1Byb2dyZXNzfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj17MH0gbWF4PXtyaWdodH0gdmFsdWU9e2xlZnR9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2MudHJhY2tQcm9ncmVzc1RpbWV9PntsZWZ0fSAvIHtyaWdodH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUcmFja1Byb2dyZXNzIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIlxyXG5pbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy1jcmVhdG9ycydcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxyXG59IiwiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZS9yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVR5cGVkU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvciIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBjIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSAnLi4vTWFpbkxheW91dC9NYWluTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1haW5MYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjLmNlbnRlcn0+XG4gICAgICAgICAgPGgxPkhlbGxvIG11c2ljINGI0YLRg9C60LA8L2gxPlxuICAgICAgICAgIDxoMz7Ql9C00LXRgdGMINGB0L7QsdGA0LDQvdGLINC90L7RgNC8INGC0YDQtdC60LjRh9C4PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01haW5MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFBsYXllckFjdGlvbkNyZWF0b3JzIGZyb20gJy4vcGxheWVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLi4uUGxheWVyQWN0aW9uQ3JlYXRvcnNcclxufSIsImltcG9ydCB7IFBsYXllckFjdGlvbiwgUGxheWVyQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcGxheWVyXCI7XHJcbmltcG9ydCB7IElUcmFjayB9IGZyb20gXCIuLi8uLi90eXBlcy90cmFja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXlUcmFjayA9ICgpOiBQbGF5ZXJBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5QTEFZXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXVzZVRyYWNrID0gKCk6IFBsYXllckFjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlBBVVNFXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXREdXJhdGlvbiA9IChwYXlsb2FkOiBudW1iZXIpOiBQbGF5ZXJBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfRFVSQVRJT04sXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Vm9sdW1lID0gKHBheWxvYWQ6IG51bWJlcik6IFBsYXllckFjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9WT0xVTUUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFRpbWUgPSAocGF5bG9hZDogbnVtYmVyKTogUGxheWVyQWN0aW9uID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUGxheWVyQWN0aW9uVHlwZXMuU0VUX0NVUlJFTlRfVElNRSxcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlID0gKHBheWxvYWQ6IElUcmFjayk6IFBsYXllckFjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9BQ1RJVkUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfVxyXG59IFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIixcblx0XCJjZW50ZXJcIjogXCJIb21lX2NlbnRlcl9fMlp4ZHJcIlxufTtcbiIsImltcG9ydCB7IElUcmFjayB9IGZyb20gXCIuL3RyYWNrXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllclN0YXRlIHtcclxuICAgIGFjdGl2ZTogbnVsbCB8IElUcmFja1xyXG4gICAgdm9sdW1lOiBudW1iZXJcclxuICAgIGR1cmF0aW9uOiBudW1iZXJcclxuICAgIGN1cnJlbnRUaW1lOiBudW1iZXJcclxuICAgIHBhdXNlOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBsYXllckFjdGlvblR5cGVzIHtcclxuICAgIFBMQVkgPSBcIlBMQVlcIixcclxuICAgIFBBVVNFID0gXCJQQVVTRVwiLFxyXG4gICAgU0VUX0FDVElWRSA9IFwiU0VUX0FDVElWRVwiLFxyXG4gICAgU0VUX0RVUkFUSU9OID0gXCJTRVRfRFVSQVRJT05cIixcclxuICAgIFNFVF9DVVJSRU5UX1RJTUUgPSBcIlNFVF9DVVJSRU5UX1RJTUVcIixcclxuICAgIFNFVF9WT0xVTUUgPSBcIlNFVF9WT0xVTUVcIlxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGxheUFjdGlvbiB7XHJcbiAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5QTEFZXHJcbn1cclxuaW50ZXJmYWNlIFBhdXNlQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlBBVVNFXHJcbn1cclxuaW50ZXJmYWNlIFNldEFjdGl2ZUFjdGlvbiB7XHJcbiAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfQUNUSVZFLFxyXG4gICAgcGF5bG9hZDogSVRyYWNrXHJcbn1cclxuaW50ZXJmYWNlIFNldER1cmF0aW9uQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9EVVJBVElPTixcclxuICAgIHBheWxvYWQ6IG51bWJlclxyXG59XHJcbmludGVyZmFjZSBTZXRDdXJyZW50VGltZUFjdGlvbiB7XHJcbiAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfQ1VSUkVOVF9USU1FLFxyXG4gICAgcGF5bG9hZDogbnVtYmVyXHJcbn1cclxuaW50ZXJmYWNlIFNldFZvbHVtZUFjdGlvbiB7XHJcbiAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfVk9MVU1FLFxyXG4gICAgcGF5bG9hZDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBsYXllckFjdGlvbiA9XHJcbiAgICBQbGF5QWN0aW9uXHJcbiAgICB8IFBhdXNlQWN0aW9uXHJcbiAgICB8IFNldEFjdGl2ZUFjdGlvblxyXG4gICAgfCBTZXREdXJhdGlvbkFjdGlvblxyXG4gICAgfCBTZXRDdXJyZW50VGltZUFjdGlvblxyXG4gICAgfCBTZXRWb2x1bWVBY3Rpb24iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==