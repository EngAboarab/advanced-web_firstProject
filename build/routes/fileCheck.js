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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileCheck = void 0;
const fs_1 = require("fs");
const fileCheck = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const status = yield (0, fs_1.existsSync)(filePath);
        return status;
    }
    catch (err) {
        return false;
    }
});
exports.fileCheck = fileCheck;
exports.default = exports.fileCheck;
