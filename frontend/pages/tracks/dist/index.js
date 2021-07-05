"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getServerSideProps = void 0;
var react_1 = require("react");
var MainLayout_1 = require("../../MainLayout/MainLayout");
var core_1 = require("@material-ui/core");
var router_1 = require("next/router");
var TrackList_1 = require("../../components/TrackList");
var useTypedSelector_1 = require("../../hooks/useTypedSelector");
var store_1 = require("../../store");
var track_1 = require("../../store/actions-creators/track");
var react_redux_1 = require("react-redux");
var Tracks = function () {
    var router = router_1.useRouter();
    var _a = useTypedSelector_1.useTypedSelector(function (state) { return state.track; }), tracks = _a.tracks, error = _a.error;
    var _b = react_1.useState(""), query = _b[0], setQuery = _b[1];
    var _c = react_1.useState(null), timer = _c[0], setTimer = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var search = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setQuery(e.target.value);
            if (timer) {
                clearTimeout(timer);
            }
            setTimer(setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = dispatch;
                            return [4 /*yield*/, track_1.searchTracks(e.target.value)];
                        case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, 500));
            return [2 /*return*/];
        });
    }); };
    if (error) {
        return react_1["default"].createElement(MainLayout_1.MainLayout, null,
            react_1["default"].createElement("h1", null, error));
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(MainLayout_1.MainLayout, { title: "trekichi" },
            react_1["default"].createElement(core_1.Grid, { container: true, justifyContent: 'center' },
                react_1["default"].createElement(core_1.Card, { style: { width: 900 } },
                    react_1["default"].createElement(core_1.Box, { p: 3 },
                        react_1["default"].createElement(core_1.Grid, { container: true, justifyContent: 'space-between' },
                            react_1["default"].createElement("h1", null, "tracks"),
                            react_1["default"].createElement(core_1.Button, { onClick: function () { return router.push('/tracks/create'); } }, "Dwnld"))),
                    react_1["default"].createElement(core_1.TextField, { fullWidth: true, value: query, onChange: search }),
                    react_1["default"].createElement(TrackList_1["default"], { tracks: tracks }))))));
};
exports["default"] = Tracks;
exports.getServerSideProps = store_1.wrapper.getServerSideProps(function (_a) {
    var store = _a.store;
    return __awaiter(void 0, void 0, void 0, function () {
        var dispatch, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    dispatch = store.dispatch;
                    _b = dispatch;
                    return [4 /*yield*/, track_1.fetchTracks()];
                case 1: return [4 /*yield*/, _b.apply(void 0, [_c.sent()])];
                case 2:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
});
