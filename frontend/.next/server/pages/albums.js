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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/albums/index.tsx");
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

/***/ "./pages/albums/index.tsx":
/*!********************************!*\
  !*** ./pages/albums/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MainLayout/MainLayout */ "./MainLayout/MainLayout.tsx");


var _jsxFileName = "d:\\visual\\js\\startReact\\startReact1\\tryfullstack\\tryfrontnew\\pages\\albums\\index.tsx";



const Albums = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_2__["MainLayout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Albums"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Albums);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTWFpbkxheW91dC9NYWluTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGF5ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhY2tJdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhY2tQcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQWN0aW9uLnRzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVR5cGVkU2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWxidW1zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zLWNyZWF0b3JzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMtY3JlYXRvcnMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3R5cGVzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsIm1hcmdpbiIsIm1lbnVJdGVtcyIsIk5hdkJhciIsInRoZW1lIiwidXNlVGhlbWUiLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlRHJhd2VyT3BlbiIsImhhbmRsZURyYXdlckNsb3NlIiwiZGlyZWN0aW9uIiwibWFwIiwidGV4dCIsImhyZWYiLCJpIiwicHVzaCIsImF1ZGlvIiwiUGxheWVyIiwidHJhY2siLCJfaWQiLCJuYW1lIiwiYXJ0aXN0IiwibGlzdGVucyIsInBpY3R1cmUiLCJjb21tZW50cyIsInBhdXNlIiwidm9sdW1lIiwiYWN0aXZlIiwiZHVyYXRpb24iLCJjdXJyZW50VGltZSIsInVzZVR5cGVkU2VsZWN0b3IiLCJzdGF0ZSIsInBsYXllciIsInBhdXNlVHJhY2siLCJwbGF5VHJhY2siLCJzZXRWb2x1bWUiLCJzZXRDdXJyZW50VGltZSIsInNldER1cmF0aW9uIiwic2V0QWN0aXZlIiwidXNlQWN0aW9uIiwidXNlRWZmZWN0IiwiQXVkaW8iLCJzZXRBdWRpbyIsInBsYXkiLCJzcmMiLCJvbmxvYWRlZG1ldGFkYXRhIiwiTWF0aCIsImNlaWwiLCJvbnRpbWV1cGRhdGUiLCJjaGFuZ2VWb2x1bWUiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJjaGFuZ2VDdXJyZW50VGltZSIsImMiLCJ3aWR0aCIsInRyYWNrTmFtZSIsIm1hcmdpbkxlZnQiLCJUcmFja1Byb2dyZXNzIiwibGVmdCIsInJpZ2h0Iiwib25DaGFuZ2UiLCJ0cmFja1Byb2dyZXNzIiwidHJhY2tQcm9ncmVzc1RpbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiQWN0aW9uQ3JlYXRvcnMiLCJ1c2VTZWxlY3RvciIsIkFsYnVtcyIsIlBsYXllckFjdGlvbkNyZWF0b3JzIiwidHlwZSIsIlBsYXllckFjdGlvblR5cGVzIiwiUExBWSIsIlBBVVNFIiwicGF5bG9hZCIsIlNFVF9EVVJBVElPTiIsIlNFVF9WT0xVTUUiLCJTRVRfQ1VSUkVOVF9USU1FIiwiU0VUX0FDVElWRSJdLCJt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Y0FBYyxHQUFJd0MsT0FBRCxJQUFtQztBQUM3RCxTQUFPO0FBQ0hKLFFBQUksRUFBRUMsK0RBQWlCLENBQUNNLGdCQURyQjtBQUVISDtBQUZHLEdBQVA7QUFJSCxDQUxNO0FBT0EsTUFBTXRDLFNBQVMsR0FBSXNDLE9BQUQsSUFBbUM7QUFDeEQsU0FBTztBQUNISixRQUFJLEVBQUVDLCtEQUFpQixDQUFDTyxVQURyQjtBQUVISjtBQUZHLEdBQVA7QUFJSCxDQUxNLEM7Ozs7Ozs7Ozs7OztBQzFCUDtBQUFBO0FBQU8sSUFBS0gsaUJBQVo7O1dBQVlBLGlCO0FBQUFBLG1CO0FBQUFBLG1CO0FBQUFBLG1CO0FBQUFBLG1CO0FBQUFBLG1CO0FBQUFBLG1CO0dBQUFBLGlCLEtBQUFBLGlCOzs7Ozs7Ozs7OztBQ1ZaLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2FsYnVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWxidW1zL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbnRlcmZhY2UgTWFpbkxheW91dFByb3BzIHtcclxuICAgIHRpdGxlPzogc3RyaW5nXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbkxheW91dDogUmVhY3QuRkM8TWFpbkxheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZSB8fCBcIm11c2lrYWxuYWphIGdhdm5hXCJ9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luOiBcIjkwcHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFBsYXllciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHQnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgICBcInRleHRcIjogXCJIb21lXCIsXHJcbiAgICAgICAgXCJocmVmXCI6IFwiL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGV4dFwiOiBcIlRyYWNrc1wiLFxyXG4gICAgICAgIFwiaHJlZlwiOiBcIi90cmFja3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRleHRcIjogXCJBbGJ1bXNcIixcclxuICAgICAgICBcImhyZWZcIjogXCIvYWxidW1zXCJcclxuICAgIH1cclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNpc3RlbnQgZHJhd2VyXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicGVyc2lzdGVudFwiXHJcbiAgICAgICAgICAgICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ2x0cicgPyA8Q2hldnJvbkxlZnRJY29uIC8+IDogPENoZXZyb25SaWdodEljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgdGV4dCwgaHJlZiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtocmVmfSBvbkNsaWNrPXsoKSA9PiB7IHJvdXRlci5wdXNoKGhyZWYpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57aSAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBHcmlkLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IFBhdXNlLCBQbGF5QXJyb3csIFZvbHVtZVVwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElUcmFjayB9IGZyb20gJy4uL3R5cGVzL3RyYWNrJ1xyXG5pbXBvcnQgYyBmcm9tICcuL1RyYWNrSXRlbS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFRyYWNrUHJvZ3Jlc3MgZnJvbSAnLi9UcmFja1Byb2dyZXNzJ1xyXG5pbXBvcnQgeyB1c2VUeXBlZFNlbGVjdG9yIH0gZnJvbSAnLi4vaG9va3MvdXNlVHlwZWRTZWxlY3RvcidcclxuaW1wb3J0IHsgdXNlQWN0aW9uIH0gZnJvbSAnLi4vaG9va3MvdXNlQWN0aW9uJ1xyXG5cclxuXHJcbmxldCBhdWRpb1xyXG5cclxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdHJhY2s6IElUcmFjayA9IHsgX2lkOiAnMScsIG5hbWU6IFwidHJhY2sgMVwiLCBhcnRpc3Q6IFwic29tZTFcIiwgdGV4dDogXCJzb21lIHRleHQxXCIsIGxpc3RlbnM6IDUsIGF1ZGlvOiBcImh0dHBzOi8vc29uZy5saW5rL2NYSzhDYnY0V0d3VFdcIiwgcGljdHVyZTogXCJodHRwczovL3Jlc3RhdXJhbnRtb21vLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMS9mb290ZXItYmcuanBnXCIsIGNvbW1lbnRzOiBbXSB9XHJcbiAgICBjb25zdCB7IHBhdXNlLCB2b2x1bWUsIGFjdGl2ZSwgZHVyYXRpb24sIGN1cnJlbnRUaW1lIH0gPSB1c2VUeXBlZFNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBsYXllcilcclxuICAgIGNvbnN0IHsgcGF1c2VUcmFjaywgcGxheVRyYWNrLCBzZXRWb2x1bWUsIHNldEN1cnJlbnRUaW1lLCBzZXREdXJhdGlvbiwgc2V0QWN0aXZlIH0gPSB1c2VBY3Rpb24oKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhdWRpbykge1xyXG4gICAgICAgICAgICBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0QXVkaW8oKVxyXG4gICAgICAgICAgICBwbGF5KClcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWN0aXZlXSlcclxuXHJcbiAgICBjb25zdCBzZXRBdWRpbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL1wiICsgYWN0aXZlLmF1ZGlvXHJcbiAgICAgICAgICAgIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZSAvIDEwMFxyXG4gICAgICAgICAgICBhdWRpby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RHVyYXRpb24oTWF0aC5jZWlsKGF1ZGlvLmR1cmF0aW9uKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdWRpby5vbnRpbWV1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VGltZShNYXRoLmNlaWwoYXVkaW8uY3VycmVudFRpbWUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhdXNlKSB7XHJcbiAgICAgICAgICAgIHBsYXlUcmFjaygpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhdXNlVHJhY2soKVxyXG4gICAgICAgICAgICBhdWRpby5wYXVzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVZvbHVtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLyAxMDBcclxuICAgICAgICBzZXRWb2x1bWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDdXJyZW50VGltZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHNldEN1cnJlbnRUaW1lKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2MucGxheWVyfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17cGxheX0+XHJcbiAgICAgICAgICAgICAgICB7cGF1c2UgPyA8UGF1c2UgLz4gOiA8UGxheUFycm93IC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgbWFyZ2luOiBcIjAgMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Yy50cmFja05hbWV9PnthY3RpdmU/Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Yy5hcnRpc3R9PnthY3RpdmU/LmFydGlzdH08L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8VHJhY2tQcm9ncmVzcyBsZWZ0PXtjdXJyZW50VGltZX0gcmlnaHQ9e2R1cmF0aW9ufSBvbkNoYW5nZT17Y2hhbmdlQ3VycmVudFRpbWV9IC8+XHJcbiAgICAgICAgICAgIDxWb2x1bWVVcCBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fSAvPlxyXG4gICAgICAgICAgICA8VHJhY2tQcm9ncmVzcyBsZWZ0PXt2b2x1bWV9IHJpZ2h0PXsxMDB9IG9uQ2hhbmdlPXtjaGFuZ2VWb2x1bWV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuLy8gMSw1NywxMVxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidHJhY2tcIjogXCJUcmFja0l0ZW1fdHJhY2tfXzNGbTdyXCIsXG5cdFwiYXJ0aXN0XCI6IFwiVHJhY2tJdGVtX2FydGlzdF9fMVZXRTBcIixcblx0XCJkZWxCdG5cIjogXCJUcmFja0l0ZW1fZGVsQnRuX18xRVhmb1wiLFxuXHRcIml0ZW1JbWdcIjogXCJUcmFja0l0ZW1faXRlbUltZ19fMVE2V2xcIixcblx0XCJ0cmFja05hbWVcIjogXCJUcmFja0l0ZW1fdHJhY2tOYW1lX18yS08zYlwiLFxuXHRcInN0ZXBXcmFwcGVyXCI6IFwiVHJhY2tJdGVtX3N0ZXBXcmFwcGVyX18xTW5WRVwiLFxuXHRcInN0ZXBXcmFwcGVyX19pdGVtXCI6IFwiVHJhY2tJdGVtX3N0ZXBXcmFwcGVyX19pdGVtX18zOEdBMVwiLFxuXHRcImZpbGVVcGxvYWRJbnB1dFwiOiBcIlRyYWNrSXRlbV9maWxlVXBsb2FkSW5wdXRfXzEwS0xjXCIsXG5cdFwicGxheWVyXCI6IFwiVHJhY2tJdGVtX3BsYXllcl9fUm1DdWZcIixcblx0XCJ0cmFja1Byb2dyZXNzXCI6IFwiVHJhY2tJdGVtX3RyYWNrUHJvZ3Jlc3NfXzFKalJhXCIsXG5cdFwidHJhY2tQcm9ncmVzc1RpbWVcIjogXCJUcmFja0l0ZW1fdHJhY2tQcm9ncmVzc1RpbWVfXzJUWEpWXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjIGZyb20gJy4vVHJhY2tJdGVtLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFRyYWNrUHJvZ3Jlc3NQcm9wcyB7XHJcbiAgICBsZWZ0OiBudW1iZXJcclxuICAgIHJpZ2h0OiBudW1iZXJcclxuICAgIG9uQ2hhbmdlOiAoZSkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBUcmFja1Byb2dyZXNzOiBSZWFjdC5GQzxUcmFja1Byb2dyZXNzUHJvcHM+ID0gKHsgbGVmdCwgcmlnaHQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2MudHJhY2tQcm9ncmVzc30+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49ezB9IG1heD17cmlnaHR9IHZhbHVlPXtsZWZ0fSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjLnRyYWNrUHJvZ3Jlc3NUaW1lfT57bGVmdH0gLyB7cmlnaHR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tQcm9ncmVzcyIsImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCJcclxuaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMtY3JlYXRvcnMnXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQWN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKEFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxufSIsImltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmUvcmVkdWNlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUeXBlZFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xyXG5pbXBvcnQgYyBmcm9tICcuL2FsYnVtcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgTWFpbkxheW91dCB9IGZyb20gJy4uLy4uL01haW5MYXlvdXQvTWFpbkxheW91dCdcclxuXHJcblxyXG5jb25zdCBBbGJ1bXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5BbGJ1bXM8L2Rpdj5cclxuICAgICAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGJ1bXMiLCJpbXBvcnQgKiBhcyBQbGF5ZXJBY3Rpb25DcmVhdG9ycyBmcm9tICcuL3BsYXllcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC4uLlBsYXllckFjdGlvbkNyZWF0b3JzXHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXJBY3Rpb24sIFBsYXllckFjdGlvblR5cGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBJVHJhY2sgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHJhY2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5VHJhY2sgPSAoKTogUGxheWVyQWN0aW9uID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUGxheWVyQWN0aW9uVHlwZXMuUExBWVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGF1c2VUcmFjayA9ICgpOiBQbGF5ZXJBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5QQVVTRVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RHVyYXRpb24gPSAocGF5bG9hZDogbnVtYmVyKTogUGxheWVyQWN0aW9uID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUGxheWVyQWN0aW9uVHlwZXMuU0VUX0RVUkFUSU9OLFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFZvbHVtZSA9IChwYXlsb2FkOiBudW1iZXIpOiBQbGF5ZXJBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfVk9MVU1FLFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRUaW1lID0gKHBheWxvYWQ6IG51bWJlcik6IFBsYXllckFjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9DVVJSRU5UX1RJTUUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfVxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZSA9IChwYXlsb2FkOiBJVHJhY2spOiBQbGF5ZXJBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBQbGF5ZXJBY3Rpb25UeXBlcy5TRVRfQUNUSVZFLFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgIH1cclxufSBcclxuIiwiaW1wb3J0IHsgSVRyYWNrIH0gZnJvbSBcIi4vdHJhY2tcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyU3RhdGUge1xyXG4gICAgYWN0aXZlOiBudWxsIHwgSVRyYWNrXHJcbiAgICB2b2x1bWU6IG51bWJlclxyXG4gICAgZHVyYXRpb246IG51bWJlclxyXG4gICAgY3VycmVudFRpbWU6IG51bWJlclxyXG4gICAgcGF1c2U6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGxheWVyQWN0aW9uVHlwZXMge1xyXG4gICAgUExBWSA9IFwiUExBWVwiLFxyXG4gICAgUEFVU0UgPSBcIlBBVVNFXCIsXHJcbiAgICBTRVRfQUNUSVZFID0gXCJTRVRfQUNUSVZFXCIsXHJcbiAgICBTRVRfRFVSQVRJT04gPSBcIlNFVF9EVVJBVElPTlwiLFxyXG4gICAgU0VUX0NVUlJFTlRfVElNRSA9IFwiU0VUX0NVUlJFTlRfVElNRVwiLFxyXG4gICAgU0VUX1ZPTFVNRSA9IFwiU0VUX1ZPTFVNRVwiXHJcbn1cclxuXHJcbmludGVyZmFjZSBQbGF5QWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlBMQVlcclxufVxyXG5pbnRlcmZhY2UgUGF1c2VBY3Rpb24ge1xyXG4gICAgdHlwZTogUGxheWVyQWN0aW9uVHlwZXMuUEFVU0VcclxufVxyXG5pbnRlcmZhY2UgU2V0QWN0aXZlQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9BQ1RJVkUsXHJcbiAgICBwYXlsb2FkOiBJVHJhY2tcclxufVxyXG5pbnRlcmZhY2UgU2V0RHVyYXRpb25BY3Rpb24ge1xyXG4gICAgdHlwZTogUGxheWVyQWN0aW9uVHlwZXMuU0VUX0RVUkFUSU9OLFxyXG4gICAgcGF5bG9hZDogbnVtYmVyXHJcbn1cclxuaW50ZXJmYWNlIFNldEN1cnJlbnRUaW1lQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9DVVJSRU5UX1RJTUUsXHJcbiAgICBwYXlsb2FkOiBudW1iZXJcclxufVxyXG5pbnRlcmZhY2UgU2V0Vm9sdW1lQWN0aW9uIHtcclxuICAgIHR5cGU6IFBsYXllckFjdGlvblR5cGVzLlNFVF9WT0xVTUUsXHJcbiAgICBwYXlsb2FkOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUGxheWVyQWN0aW9uID1cclxuICAgIFBsYXlBY3Rpb25cclxuICAgIHwgUGF1c2VBY3Rpb25cclxuICAgIHwgU2V0QWN0aXZlQWN0aW9uXHJcbiAgICB8IFNldER1cmF0aW9uQWN0aW9uXHJcbiAgICB8IFNldEN1cnJlbnRUaW1lQWN0aW9uXHJcbiAgICB8IFNldFZvbHVtZUFjdGlvbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9