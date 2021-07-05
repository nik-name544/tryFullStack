"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var track_module_1 = require("./track/track.module");
var mongoose_1 = require("@nestjs/mongoose");
var file_module_1 = require("./file/file.module");
var serve_static_1 = require("@nestjs/serve-static");
var path = require("path");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: path.resolve(__dirname, 'static')
                }),
                mongoose_1.MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.kviwi.mongodb.net/music-test?retryWrites=true&w=majority'),
                track_module_1.TrackModule,
                file_module_1.FileModule
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
