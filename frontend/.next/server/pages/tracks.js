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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/tracks/index.tsx");
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

/***/ "./components/TrackItem.tsx":
/*!**********************************!*\
  !*** ./components/TrackItem.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrackItem.module.scss */ "./components/TrackItem.module.scss");
/* harmony import */ var _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useAction */ "./hooks/useAction.ts");

var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\components\\TrackItem.tsx";







const TrackItem = ({
  track,
  active = false
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    playTrack,
    pauseTrack,
    setActive
  } = Object(_hooks_useAction__WEBPACK_IMPORTED_MODULE_6__["useAction"])();

  const play = e => {
    e.stopPropagation();
    setActive(track);
    playTrack();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.track,
    onClick: () => router.push("/tracks/" + track._id),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      onClick: play,
      children: active ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Pause"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 27
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["PlayArrow"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 39
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "http://localhost:5000/" + track.picture,
      alt: track.name,
      height: 70,
      className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemImg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      direction: "column",
      display: "flex",
      style: {
        width: 200,
        margin: "0 20px"
      },
      justifyContent: "space-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.trackName,
        children: track.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artist,
        children: track.artist
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "02:42 / 03:50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 24
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      className: _TrackItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.delBtn,
      onClick: e => e.stopPropagation(),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Delete"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TrackItem);

/***/ }),

/***/ "./components/TrackList.tsx":
/*!**********************************!*\
  !*** ./components/TrackList.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TrackItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrackItem */ "./components/TrackItem.tsx");

var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\components\\TrackList.tsx";




const TrackList = ({
  tracks
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "column",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      p: 2,
      children: tracks.map(track => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TrackItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        track: track
      }, track._id, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TrackList);

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

/***/ "./pages/tracks/index.tsx":
/*!********************************!*\
  !*** ./pages/tracks/index.tsx ***!
  \********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MainLayout/MainLayout */ "./MainLayout/MainLayout.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_TrackList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TrackList */ "./components/TrackList.tsx");
/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useTypedSelector */ "./hooks/useTypedSelector.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _store_actions_creators_track__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions-creators/track */ "./store/actions-creators/track.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\pages\\tracks\\index.tsx";










const Tracks = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    tracks,
    error
  } = Object(_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_6__["useTypedSelector"])(state => state.track);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: timer,
    1: setTimer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  const search = async e => {
    setQuery(e.target.value);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(setTimeout(async () => {
      await dispatch(await Object(_store_actions_creators_track__WEBPACK_IMPORTED_MODULE_8__["searchTracks"])(e.target.value));
    }, 500));
  };

  if (error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_2__["MainLayout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_2__["MainLayout"], {
      title: "trekichi",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true,
        justifyContent: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          style: {
            width: 900
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
            p: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
              container: true,
              justifyContent: "space-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "tracks"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                onClick: () => router.push('/tracks/create'),
                children: "Dwnld"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
            fullWidth: true,
            value: query,
            onChange: search
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TrackList__WEBPACK_IMPORTED_MODULE_5__["default"], {
            tracks: tracks
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Tracks);
const getServerSideProps = _store__WEBPACK_IMPORTED_MODULE_7__["wrapper"].getServerSideProps(async ({
  store
}) => {
  const dispatch = store.dispatch;
  await dispatch(await Object(_store_actions_creators_track__WEBPACK_IMPORTED_MODULE_8__["fetchTracks"])());
});

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

/***/ "./store/actions-creators/track.ts":
/*!*****************************************!*\
  !*** ./store/actions-creators/track.ts ***!
  \*****************************************/
/*! exports provided: fetchTracks, searchTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTracks", function() { return fetchTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTracks", function() { return searchTracks; });
/* harmony import */ var _types_track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/track */ "./types/track.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const fetchTracks = () => {
  return async dispatch => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:5000/tracks");
      dispatch({
        type: _types_track__WEBPACK_IMPORTED_MODULE_0__["TrackActionTypes"].FETCH_TRACKS,
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: _types_track__WEBPACK_IMPORTED_MODULE_0__["TrackActionTypes"].FETCH_TRACKS_ERROR,
        payload: "something wrong"
      });
    }
  };
};
const searchTracks = query => {
  return async dispatch => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:5000/tracks/search?query=" + query);
      dispatch({
        type: _types_track__WEBPACK_IMPORTED_MODULE_0__["TrackActionTypes"].FETCH_TRACKS,
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: _types_track__WEBPACK_IMPORTED_MODULE_0__["TrackActionTypes"].FETCH_TRACKS_ERROR,
        payload: "something wrong"
      });
    }
  };
};

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTWFpbkxheW91dC9NYWluTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGF5ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhY2tJdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhY2tJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYWNrTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFja1Byb2dyZXNzLnRzeCIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlVHlwZWRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy90cmFja3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMtY3JlYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy1jcmVhdG9ycy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy1jcmVhdG9ycy90cmFjay50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9wbGF5ZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3RyYWNrUmVkdXNlci50cyIsIndlYnBhY2s6Ly8vLi90eXBlcy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvdHJhY2sudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIk1haW5MYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwibWFyZ2luIiwibWVudUl0ZW1zIiwiTmF2QmFyIiwidGhlbWUiLCJ1c2VUaGVtZSIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJkaXJlY3Rpb24iLCJtYXAiLCJ0ZXh0IiwiaHJlZiIsImkiLCJwdXNoIiwiYXVkaW8iLCJQbGF5ZXIiLCJ0cmFjayIsIl9pZCIsIm5hbWUiLCJhcnRpc3QiLCJsaXN0ZW5zIiwicGljdHVyZSIsImNvbW1lbnRzIiwicGF1c2UiLCJ2b2x1bWUiLCJhY3RpdmUiLCJkdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwidXNlVHlwZWRTZWxlY3RvciIsInN0YXRlIiwicGxheWVyIiwicGF1c2VUcmFjayIsInBsYXlUcmFjayIsInNldFZvbHVtZSIsInNldEN1cnJlbnRUaW1lIiwic2V0RHVyYXRpb24iLCJzZXRBY3RpdmUiLCJ1c2VBY3Rpb24iLCJ1c2VFZmZlY3QiLCJBdWRpbyIsInNldEF1ZGlvIiwicGxheSIsInNyYyIsIm9ubG9hZGVkbWV0YWRhdGEiLCJNYXRoIiwiY2VpbCIsIm9udGltZXVwZGF0ZSIsImNoYW5nZVZvbHVtZSIsImUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZUN1cnJlbnRUaW1lIiwiYyIsIndpZHRoIiwidHJhY2tOYW1lIiwibWFyZ2luTGVmdCIsIlRyYWNrSXRlbSIsInN0b3BQcm9wYWdhdGlvbiIsIml0ZW1JbWciLCJkZWxCdG4iLCJUcmFja0xpc3QiLCJ0cmFja3MiLCJUcmFja1Byb2dyZXNzIiwibGVmdCIsInJpZ2h0Iiwib25DaGFuZ2UiLCJ0cmFja1Byb2dyZXNzIiwidHJhY2tQcm9ncmVzc1RpbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiQWN0aW9uQ3JlYXRvcnMiLCJ1c2VTZWxlY3RvciIsIlRyYWNrcyIsImVycm9yIiwicXVlcnkiLCJzZXRRdWVyeSIsInRpbWVyIiwic2V0VGltZXIiLCJzZWFyY2giLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2VhcmNoVHJhY2tzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsInN0b3JlIiwiZmV0Y2hUcmFja3MiLCJQbGF5ZXJBY3Rpb25DcmVhdG9ycyIsInR5cGUiLCJQbGF5ZXJBY3Rpb25UeXBlcyIsIlBMQVkiLCJQQVVTRSIsInBheWxvYWQiLCJTRVRfRFVSQVRJT04iLCJTRVRfVk9MVU1FIiwiU0VUX0NVUlJFTlRfVElNRSIsIlNFVF9BQ1RJVkUiLCJyZXMiLCJheGlvcyIsImdldCIsIlRyYWNrQWN0aW9uVHlwZXMiLCJGRVRDSF9UUkFDS1MiLCJkYXRhIiwiRkVUQ0hfVFJBQ0tTX0VSUk9SIiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwbGF5ZXJSZWR1Y2VyIiwidHJhY2tSZWR1c2VyIiwiYWN0aW9u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Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL3RyYWNrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdHJhY2tzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbnRlcmZhY2UgTWFpbkxheW91dFByb3BzIHtcclxuICAgIHRpdGxlPzogc3RyaW5nXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbkxheW91dDogUmVhY3QuRkM8TWFpbkxheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZSB8fCBcIm11c2lrYWxuYWphIGdhdm5hXCJ9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luOiBcIjkwcHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFBsYXllciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHQnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgICBcInRleHRcIjogXCJIb21lXCIsXHJcbiAgICAgICAgXCJocmVmXCI6IFwiL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGV4dFwiOiBcIlRyYWNrc1wiLFxyXG4gICAgICAgIFwiaHJlZlwiOiBcIi90cmFja3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRleHRcIjogXCJBbGJ1bXNcIixcclxuICAgICAgICBcImhyZWZcIjogXCIvYWxidW1zXCJcclxuICAgIH1cclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNpc3RlbnQgZHJhd2VyXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicGVyc2lzdGVudFwiXHJcbiAgICAgICAgICAgICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ2x0cicgPyA8Q2hldnJvbkxlZnRJY29uIC8+IDogPENoZXZyb25SaWdodEljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgdGV4dCwgaHJlZiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtocmVmfSBvbkNsaWNrPXsoKSA9PiB7IHJvdXRlci5wdXNoKGhyZWYpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57aSAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBHcmlkLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IFBhdXNlLCBQbGF5QXJyb3csIFZvbHVtZVVwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElUcmFjayB9IGZyb20gJy4uL3R5cGVzL3RyYWNrJ1xyXG5pbXBvcnQgYyBmcm9tICcuL1RyYWNrSXRlbS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFRyYWNrUHJvZ3Jlc3MgZnJvbSAnLi9UcmFja1Byb2dyZXNzJ1xyXG5pbXBvcnQgeyB1c2VUeXBlZFNlbGVjdG9yIH0gZnJvbSAnLi4vaG9va3MvdXNlVHlwZWRTZWxlY3RvcidcclxuaW1wb3J0IHsgdXNlQWN0aW9uIH0gZnJvbSAnLi4vaG9va3MvdXNlQWN0aW9uJ1xyXG5cclxuXHJcbmxldCBhdWRpb1xyXG5cclxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdHJhY2s6IElUcmFjayA9IHsgX2lkOiAnMScsIG5hbWU6IFwidHJhY2sgMVwiLCBhcnRpc3Q6IFwic29tZTFcIiwgdGV4dDogXCJzb21lIHRleHQxXCIsIGxpc3RlbnM6IDUsIGF1ZGlvOiBcImh0dHBzOi8vc29uZy5saW5rL2NYSzhDYnY0V0d3VFdcIiwgcGljdHVyZTogXCJodHRwczovL3Jlc3RhdXJhbnRtb21vLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMS9mb290ZXItYmcuanBnXCIsIGNvbW1lbnRzOiBbXSB9XHJcbiAgICBjb25zdCB7IHBhdXNlLCB2b2x1bWUsIGFjdGl2ZSwgZHVyYXRpb24sIGN1cnJlbnRUaW1lIH0gPSB1c2VUeXBlZFNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBsYXllcilcclxuICAgIGNvbnN0IHsgcGF1c2VUcmFjaywgcGxheVRyYWNrLCBzZXRWb2x1bWUsIHNldEN1cnJlbnRUaW1lLCBzZXREdXJhdGlvbiwgc2V0QWN0aXZlIH0gPSB1c2VBY3Rpb24oKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhdWRpbykge1xyXG4gICAgICAgICAgICBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0QXVkaW8oKVxyXG4gICAgICAgICAgICBwbGF5KClcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWN0aXZlXSlcclxuXHJcbiAgICBjb25zdCBzZXRBdWRpbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL1wiICsgYWN0aXZlLmF1ZGlvXHJcbiAgICAgICAgICAgIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZSAvIDEwMFxyXG4gICAgICAgICAgICBhdWRpby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RHVyYXRpb24oTWF0aC5jZWlsKGF1ZGlvLmR1cmF0aW9uKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdWRpby5vbnRpbWV1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VGltZShNYXRoLmNlaWwoYXVkaW8uY3VycmVudFRpbWUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhdXNlKSB7XHJcbiAgICAgICAgICAgIHBsYXlUcmFjaygpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhdXNlVHJhY2soKVxyXG4gICAgICAgICAgICBhdWRpby5wYXVzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVZvbHVtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLyAxMDBcclxuICAgICAgICBzZXRWb2x1bWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDdXJyZW50VGltZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHNldEN1cnJlbnRUaW1lKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2MucGxheWVyfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17cGxheX0+XHJcbiAgICAgICAgICAgICAgICB7cGF1c2UgPyA8UGF1c2UgLz4gOiA8UGxheUFycm93IC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgbWFyZ2luOiBcIjAgMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Yy50cmFja05hbWV9PnthY3RpdmU/Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Yy5hcnRpc3R9PnthY3RpdmU/LmFydGlzdH08L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8VHJhY2tQcm9ncmVzcyBsZWZ0PXtjdXJyZW50VGltZX0gcmlnaHQ9e2R1cmF0aW9ufSBvbkNoYW5nZT17Y2hhbmdlQ3VycmVudFRpbWV9IC8+XHJcbiAgICAgICAgICAgIDxWb2x1bWVVcCBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fSAvPlxyXG4gICAgICAgICAgICA8VHJhY2tQcm9ncmVzcyBsZWZ0PXt2b2x1bWV9IHJpZ2h0PXsxMDB9IG9uQ2hhbmdlPXtjaGFuZ2VWb2x1bWV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuLy8gMSw1NywxMVxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidHJhY2tcIjogXCJUcmFja0l0ZW1fdHJhY2tfXzNGbTdyXCIsXG5cdFwiYXJ0aXN0XCI6IFwiVHJhY2tJdGVtX2FydGlzdF9fMVZXRTBcIixcblx0XCJkZWxCdG5cIjogXCJUcmFja0l0ZW1fZGVsQnRuX18xRVhmb1wiLFxuXHRcIml0ZW1JbWdcIjogXCJUcmFja0l0ZW1faXRlbUltZ19fMVE2V2xcIixcblx0XCJ0cmFja05hbWVcIjogXCJUcmFja0l0ZW1fdHJhY2tOYW1lX18yS08zYlwiLFxuXHRcInN0ZXBXcmFwcGVyXCI6IFwiVHJhY2tJdGVtX3N0ZXBXcmFwcGVyX18xTW5WRVwiLFxuXHRcInN0ZXBXcmFwcGVyX19pdGVtXCI6IFwiVHJhY2tJdGVtX3N0ZXBXcmFwcGVyX19pdGVtX18zOEdBMVwiLFxuXHRcImZpbGVVcGxvYWRJbnB1dFwiOiBcIlRyYWNrSXRlbV9maWxlVXBsb2FkSW5wdXRfXzEwS0xjXCIsXG5cdFwicGxheWVyXCI6IFwiVHJhY2tJdGVtX3BsYXllcl9fUm1DdWZcIixcblx0XCJ0cmFja1Byb2dyZXNzXCI6IFwiVHJhY2tJdGVtX3RyYWNrUHJvZ3Jlc3NfXzFKalJhXCIsXG5cdFwidHJhY2tQcm9ncmVzc1RpbWVcIjogXCJUcmFja0l0ZW1fdHJhY2tQcm9ncmVzc1RpbWVfXzJUWEpWXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElUcmFjayB9IGZyb20gJy4uL3R5cGVzL3RyYWNrJ1xyXG5pbXBvcnQgeyBDYXJkLCBJY29uQnV0dG9uLCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBjIGZyb20gJy4vVHJhY2tJdGVtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBQbGF5QXJyb3csIFBhdXNlLCBEZWxldGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VBY3Rpb24gfSBmcm9tICcuLi9ob29rcy91c2VBY3Rpb24nXHJcblxyXG5pbnRlcmZhY2UgVHJhY2tJdGVtUHJvcHMge1xyXG4gICAgdHJhY2s6IElUcmFjaztcclxuICAgIGFjdGl2ZT86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgVHJhY2tJdGVtOiBSZWFjdC5GQzxUcmFja0l0ZW1Qcm9wcz4gPSAoeyB0cmFjaywgYWN0aXZlID0gZmFsc2UgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgcGxheVRyYWNrLCBwYXVzZVRyYWNrLCBzZXRBY3RpdmUgfSA9IHVzZUFjdGlvbigpXHJcbiAgICBjb25zdCBwbGF5ID0gKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgc2V0QWN0aXZlKHRyYWNrKVxyXG4gICAgICAgIHBsYXlUcmFjaygpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2MudHJhY2t9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3RyYWNrcy9cIiArIHRyYWNrLl9pZCl9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtwbGF5fT5cclxuICAgICAgICAgICAgICAgIHthY3RpdmUgPyA8UGF1c2UgLz4gOiA8UGxheUFycm93IC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9cIiArIHRyYWNrLnBpY3R1cmV9IGFsdD17dHJhY2submFtZX0gaGVpZ2h0PXs3MH0gY2xhc3NOYW1lPXtjLml0ZW1JbWd9IC8+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjAwLCBtYXJnaW46IFwiMCAyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjLnRyYWNrTmFtZX0+e3RyYWNrLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Yy5hcnRpc3R9Pnt0cmFjay5hcnRpc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAge2FjdGl2ZSAmJiA8ZGl2PjAyOjQyIC8gMDM6NTA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Yy5kZWxCdG59IG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tJdGVtIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHcmlkLCBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFRyYWNrSXRlbSBmcm9tICcuL1RyYWNrSXRlbSdcclxuaW1wb3J0IHsgSVRyYWNrIH0gZnJvbSAnLi4vdHlwZXMvdHJhY2snXHJcblxyXG5pbnRlcmZhY2UgVHJhY2tMaXN0UHJvcHMge1xyXG4gICAgdHJhY2tzOiBJVHJhY2tbXVxyXG59XHJcblxyXG5jb25zdCBUcmFja0xpc3Q6IFJlYWN0LkZDPFRyYWNrTGlzdFByb3BzPiA9ICh7IHRyYWNrcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPEJveCBwPXsyfT5cclxuICAgICAgICAgICAgICAgIHt0cmFja3MubWFwKHRyYWNrID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYWNrSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RyYWNrLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s9e3RyYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWNrTGlzdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGMgZnJvbSAnLi9UcmFja0l0ZW0ubW9kdWxlLnNjc3MnXHJcblxyXG5pbnRlcmZhY2UgVHJhY2tQcm9ncmVzc1Byb3BzIHtcclxuICAgIGxlZnQ6IG51bWJlclxyXG4gICAgcmlnaHQ6IG51bWJlclxyXG4gICAgb25DaGFuZ2U6IChlKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IFRyYWNrUHJvZ3Jlc3M6IFJlYWN0LkZDPFRyYWNrUHJvZ3Jlc3NQcm9wcz4gPSAoeyBsZWZ0LCByaWdodCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Yy50cmFja1Byb2dyZXNzfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj17MH0gbWF4PXtyaWdodH0gdmFsdWU9e2xlZnR9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2MudHJhY2tQcm9ncmVzc1RpbWV9PntsZWZ0fSAvIHtyaWdodH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUcmFja1Byb2dyZXNzIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIlxyXG5pbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy1jcmVhdG9ycydcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxyXG59IiwiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZS9yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVR5cGVkU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvciIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IGMgZnJvbSAnLi90cmFja3MubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tICcuLi8uLi9NYWluTGF5b3V0L01haW5MYXlvdXQnXHJcbmltcG9ydCB7IEdyaWQsIENhcmQsIEJ1dHRvbiwgQm94LCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IElUcmFjayB9IGZyb20gJy4uLy4uL3R5cGVzL3RyYWNrJ1xyXG5pbXBvcnQgVHJhY2tMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhY2tMaXN0J1xyXG5pbXBvcnQgeyB1c2VUeXBlZFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVHlwZWRTZWxlY3RvcidcclxuaW1wb3J0IHsgdXNlQWN0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQWN0aW9uJ1xyXG5pbXBvcnQgeyB3cmFwcGVyLCBOZXh0VGh1bmtEaXNwYXRjaCB9IGZyb20gJy4uLy4uL3N0b3JlJ1xyXG5pbXBvcnQgeyBmZXRjaFRyYWNrcywgc2VhcmNoVHJhY2tzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy1jcmVhdG9ycy90cmFjaydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNvbnN0IFRyYWNrcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IHRyYWNrcywgZXJyb3IgfSA9IHVzZVR5cGVkU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudHJhY2spXHJcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPFN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKSBhcyBOZXh0VGh1bmtEaXNwYXRjaFxyXG4gICAgY29uc3Qgc2VhcmNoID0gYXN5bmMgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZXIoXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goYXdhaXQgc2VhcmNoVHJhY2tzKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPGgxPntlcnJvcn08L2gxPlxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1haW5MYXlvdXQgdGl0bGU9e1widHJla2ljaGlcIn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6IDkwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5Q29udGVudD0nc3BhY2UtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnRyYWNrczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3RyYWNrcy9jcmVhdGUnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIER3bmxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFja0xpc3QgdHJhY2tzPXt0cmFja3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWNrc1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoeyBzdG9yZSB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoIGFzIE5leHRUaHVua0Rpc3BhdGNoXHJcbiAgICBhd2FpdCBkaXNwYXRjaChhd2FpdCBmZXRjaFRyYWNrcygpKVxyXG59KSIsImltcG9ydCAqIGFzIFBsYXllckFjdGlvbkNyZWF0b3JzIGZyb20gJy4vcGxheWVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLi4uUGxheWVyQWN0aW9uQ3JlYXRvcnNcclxufSIsImltcG9ydCB7IFBsYXllckFjdGlvbiwgUGxheWVyQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcGxheWVyXCI7XHJcbmltcG9ydCB7IElUcmFjayB9IGZyb20gXCIuLi8uLi90eXBlcy90cmFja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXlUcmFjayA9ICgpOiBQbGF5ZXJBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5QTEFZXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXVzZVRyYWNrID0gKCk6IFBsYXllckFjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlBBVVNFXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXREdXJhdGlvbiA9IChwYXlsb2FkOiBudW1iZXIpOiBQbGF5ZXJBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfRFVSQVRJT04sXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Vm9sdW1lID0gKHBheWxvYWQ6IG51bWJlcik6IFBsYXllckFjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9WT0xVTUUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFRpbWUgPSAocGF5bG9hZDogbnVtYmVyKTogUGxheWVyQWN0aW9uID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUGxheWVyQWN0aW9uVHlwZXMuU0VUX0NVUlJFTlRfVElNRSxcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlID0gKHBheWxvYWQ6IElUcmFjayk6IFBsYXllckFjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9BQ1RJVkUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfVxyXG59IFxyXG4iLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFRyYWNrQWN0aW9uLCBUcmFja0FjdGlvblR5cGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3RyYWNrXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVHJhY2tzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2g8VHJhY2tBY3Rpb24+KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RyYWNrc1wiKVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRyYWNrQWN0aW9uVHlwZXMuRkVUQ0hfVFJBQ0tTLCBwYXlsb2FkOiByZXMuZGF0YSB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBUcmFja0FjdGlvblR5cGVzLkZFVENIX1RSQUNLU19FUlJPUiwgcGF5bG9hZDogXCJzb21ldGhpbmcgd3JvbmdcIiB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFRyYWNrcyA9IChxdWVyeTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaDxUcmFja0FjdGlvbj4pID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdHJhY2tzL3NlYXJjaD9xdWVyeT1cIiArIHF1ZXJ5KVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRyYWNrQWN0aW9uVHlwZXMuRkVUQ0hfVFJBQ0tTLCBwYXlsb2FkOiByZXMuZGF0YSB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBUcmFja0FjdGlvblR5cGVzLkZFVENIX1RSQUNLU19FUlJPUiwgcGF5bG9hZDogXCJzb21ldGhpbmcgd3JvbmdcIiB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiXHJcbmltcG9ydCB7IE1ha2VTdG9yZSwgQ29udGV4dCwgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHsgcmVkdWNlciwgUm9vdFN0YXRlIH0gZnJvbSBcIi4vcmVkdWNlcnNcIlxyXG5pbXBvcnQgdGh1bmssIHsgIFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuaydcclxuXHJcbmNvbnN0IG1ha2VTdG9yZTogTWFrZVN0b3JlPFJvb3RTdGF0ZT4gID0gKGNvbnRleHQ6IENvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXHJcbi8vIGNvbnN0IG1ha2VTdG9yZTogTWFrZVN0b3JlPFJvb3RTdGF0ZT4gPSB7IGNvbnRleHQ6IENvbnRleHQgfT0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIpXHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8Um9vdFN0YXRlPihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSlcclxuXHJcbmV4cG9ydCB0eXBlIE5leHRUaHVua0Rpc3BhdGNoID0gVGh1bmtEaXNwYXRjaDxSb290U3RhdGUsIHZvaWQsIEFueUFjdGlvbj4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgcGxheWVyUmVkdWNlciB9IGZyb20gXCIuL3BsYXllclJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdHJhY2tSZWR1c2VyIH0gZnJvbSBcIi4vdHJhY2tSZWR1c2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcGxheWVyOiBwbGF5ZXJSZWR1Y2VyLFxyXG4gICAgdHJhY2s6IHRyYWNrUmVkdXNlclxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXRlLmNvdW50KSBuZXh0U3RhdGUuY291bnQgPSBzdGF0ZS5jb3VudCAvLyBwcmVzZXJ2ZSBjb3VudCB2YWx1ZSBvbiBjbGllbnQgc2lkZSBuYXZpZ2F0aW9uXHJcbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+IiwiaW1wb3J0IHsgUGxheWVyQWN0aW9uLCBQbGF5ZXJBY3Rpb25UeXBlcywgUGxheWVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcGxheWVyXCJcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUGxheWVyU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50VGltZTogMCxcclxuICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgYWN0aXZlOiBudWxsLFxyXG4gICAgdm9sdW1lOiA1MCxcclxuICAgIHBhdXNlOiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFBsYXllckFjdGlvbik6IFBsYXllclN0YXRlID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFBsYXllckFjdGlvblR5cGVzLlBBVVNFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGF1c2U6IHRydWUgfVxyXG4gICAgICAgIGNhc2UgUGxheWVyQWN0aW9uVHlwZXMuUExBWTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhdXNlOiBmYWxzZSB9XHJcbiAgICAgICAgY2FzZSBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfQUNUSVZFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWN0aXZlOiBhY3Rpb24ucGF5bG9hZCwgZHVyYXRpb246IDAsIGN1cnJlbnRUaW1lOiAwIH1cclxuICAgICAgICBjYXNlIFBsYXllckFjdGlvblR5cGVzLlNFVF9DVVJSRU5UX1RJTUU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50VGltZTogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIGNhc2UgUGxheWVyQWN0aW9uVHlwZXMuU0VUX0RVUkFUSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZHVyYXRpb246IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBjYXNlIFBsYXllckFjdGlvblR5cGVzLlNFVF9WT0xVTUU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2b2x1bWU6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRyYWNrU3RhdGUsIFRyYWNrQWN0aW9uLCBUcmFja0FjdGlvblR5cGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3RyYWNrXCJcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVHJhY2tTdGF0ZSA9IHtcclxuICAgIHRyYWNrczogW10sXHJcbiAgICBlcnJvcjogXCJcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWNrUmVkdXNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBUcmFja0FjdGlvbik6IFRyYWNrU3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVHJhY2tBY3Rpb25UeXBlcy5GRVRDSF9UUkFDS1NfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIGNhc2UgVHJhY2tBY3Rpb25UeXBlcy5GRVRDSF9UUkFDS1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBcIlwiLCB0cmFja3M6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufSIsImltcG9ydCB7IElUcmFjayB9IGZyb20gXCIuL3RyYWNrXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllclN0YXRlIHtcclxuICAgIGFjdGl2ZTogbnVsbCB8IElUcmFja1xyXG4gICAgdm9sdW1lOiBudW1iZXJcclxuICAgIGR1cmF0aW9uOiBudW1iZXJcclxuICAgIGN1cnJlbnRUaW1lOiBudW1iZXJcclxuICAgIHBhdXNlOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBsYXllckFjdGlvblR5cGVzIHtcclxuICAgIFBMQVkgPSBcIlBMQVlcIixcclxuICAgIFBBVVNFID0gXCJQQVVTRVwiLFxyXG4gICAgU0VUX0FDVElWRSA9IFwiU0VUX0FDVElWRVwiLFxyXG4gICAgU0VUX0RVUkFUSU9OID0gXCJTRVRfRFVSQVRJT05cIixcclxuICAgIFNFVF9DVVJSRU5UX1RJTUUgPSBcIlNFVF9DVVJSRU5UX1RJTUVcIixcclxuICAgIFNFVF9WT0xVTUUgPSBcIlNFVF9WT0xVTUVcIlxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGxheUFjdGlvbiB7XHJcbiAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5QTEFZXHJcbn1cclxuaW50ZXJmYWNlIFBhdXNlQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlBBVVNFXHJcbn1cclxuaW50ZXJmYWNlIFNldEFjdGl2ZUFjdGlvbiB7XHJcbiAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfQUNUSVZFLFxyXG4gICAgcGF5bG9hZDogSVRyYWNrXHJcbn1cclxuaW50ZXJmYWNlIFNldER1cmF0aW9uQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9EVVJBVElPTixcclxuICAgIHBheWxvYWQ6IG51bWJlclxyXG59XHJcbmludGVyZmFjZSBTZXRDdXJyZW50VGltZUFjdGlvbiB7XHJcbiAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfQ1VSUkVOVF9USU1FLFxyXG4gICAgcGF5bG9hZDogbnVtYmVyXHJcbn1cclxuaW50ZXJmYWNlIFNldFZvbHVtZUFjdGlvbiB7XHJcbiAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfVk9MVU1FLFxyXG4gICAgcGF5bG9hZDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBsYXllckFjdGlvbiA9XHJcbiAgICBQbGF5QWN0aW9uXHJcbiAgICB8IFBhdXNlQWN0aW9uXHJcbiAgICB8IFNldEFjdGl2ZUFjdGlvblxyXG4gICAgfCBTZXREdXJhdGlvbkFjdGlvblxyXG4gICAgfCBTZXRDdXJyZW50VGltZUFjdGlvblxyXG4gICAgfCBTZXRWb2x1bWVBY3Rpb24iLCJleHBvcnQgaW50ZXJmYWNlIElDb21tZW50IHtcclxuICAgIF9pZDogc3RyaW5nO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHRleHQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmFjayB7XHJcbiAgICBfaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGFydGlzdDogc3RyaW5nO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgbGlzdGVuczogbnVtYmVyO1xyXG4gICAgcGljdHVyZTogc3RyaW5nO1xyXG4gICAgYXVkaW86IHN0cmluZztcclxuICAgIGNvbW1lbnRzOiBJQ29tbWVudFtdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tTdGF0ZSB7XHJcbiAgICB0cmFja3M6IElUcmFja1tdXHJcbiAgICBlcnJvcjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRyYWNrQWN0aW9uVHlwZXMge1xyXG4gICAgRkVUQ0hfVFJBQ0tTID0gXCJGRVRDSF9UUkFDS1NcIixcclxuICAgIEZFVENIX1RSQUNLU19FUlJPUiA9IFwiRkVUQ0hfVFJBQ0tTX0VSUk9SXCIsXHJcbn1cclxuXHJcbmludGVyZmFjZSBGZXRjaFRyYWNrc0FjdGlvbiB7XHJcbiAgICB0eXBlOiBUcmFja0FjdGlvblR5cGVzLkZFVENIX1RSQUNLU1xyXG4gICAgcGF5bG9hZDogSVRyYWNrW11cclxufVxyXG5pbnRlcmZhY2UgRmV0Y2hUcmFja3NFcnJvckFjdGlvbiB7XHJcbiAgICB0eXBlOiBUcmFja0FjdGlvblR5cGVzLkZFVENIX1RSQUNLU19FUlJPUixcclxuICAgIHBheWxvYWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUcmFja0FjdGlvbiA9IEZldGNoVHJhY2tzQWN0aW9uIHwgRmV0Y2hUcmFja3NFcnJvckFjdGlvbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==