"use strict";
exports.__esModule = true;
exports.NavBar = void 0;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var Drawer_1 = require("@material-ui/core/Drawer");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var List_1 = require("@material-ui/core/List");
var Typography_1 = require("@material-ui/core/Typography");
var Divider_1 = require("@material-ui/core/Divider");
var IconButton_1 = require("@material-ui/core/IconButton");
var Menu_1 = require("@material-ui/icons/Menu");
var ChevronLeft_1 = require("@material-ui/icons/ChevronLeft");
var ChevronRight_1 = require("@material-ui/icons/ChevronRight");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var MoveToInbox_1 = require("@material-ui/icons/MoveToInbox");
var Mail_1 = require("@material-ui/icons/Mail");
var router_1 = require("next/router");
var menuItems = [
    {
        "text": "Home",
        "href": "/"
    },
    {
        "text": "Tracks",
        "href": "/tracks"
    },
    {
        "text": "Albums",
        "href": "/albums"
    }
];
exports.NavBar = function () {
    var theme = styles_1.useTheme();
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var router = router_1.useRouter();
    var handleDrawerOpen = function () {
        setOpen(true);
    };
    var handleDrawerClose = function () {
        setOpen(false);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement(AppBar_1["default"], { position: "fixed" },
            react_1["default"].createElement(Toolbar_1["default"], null,
                react_1["default"].createElement(IconButton_1["default"], { color: "inherit", "aria-label": "open drawer", onClick: handleDrawerOpen, edge: "start" },
                    react_1["default"].createElement(Menu_1["default"], null)),
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", noWrap: true }, "Persistent drawer"))),
        react_1["default"].createElement(Drawer_1["default"], { variant: "persistent", anchor: "left", open: open },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(IconButton_1["default"], { onClick: handleDrawerClose }, theme.direction === 'ltr' ? react_1["default"].createElement(ChevronLeft_1["default"], null) : react_1["default"].createElement(ChevronRight_1["default"], null))),
            react_1["default"].createElement(Divider_1["default"], null),
            react_1["default"].createElement(List_1["default"], null, menuItems.map(function (_a, i) {
                var text = _a.text, href = _a.href;
                return (react_1["default"].createElement(ListItem_1["default"], { button: true, key: href, onClick: function () { router.push(href); } },
                    react_1["default"].createElement(ListItemIcon_1["default"], null, i % 2 === 0 ? react_1["default"].createElement(MoveToInbox_1["default"], null) : react_1["default"].createElement(Mail_1["default"], null)),
                    react_1["default"].createElement(ListItemText_1["default"], { primary: text })));
            })))));
};
