"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FileService = exports.FileType = void 0;
var common_1 = require("@nestjs/common");
var path = require("path");
var fs = require("fs");
var uuid = require("uuid");
var FileType;
(function (FileType) {
    FileType["AUDIO"] = "audio";
    FileType["IMAGE"] = "image";
})(FileType = exports.FileType || (exports.FileType = {}));
var FileService = /** @class */ (function () {
    function FileService() {
    }
    FileService.prototype.createFile = function (type, file) {
        try {
            var fileExtentsion = file.originalname.split('.').pop();
            var fileName = uuid.v4() + '.' + fileExtentsion;
            var filePath = path.resolve(__dirname, '..', 'static', type);
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
            return type + '/' + fileName;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
    FileService.prototype.removeFile = function (fileName) { };
    FileService = __decorate([
        common_1.Injectable()
    ], FileService);
    return FileService;
}());
exports.FileService = FileService;
