"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileCheck = void 0;
const fs_1 = require("fs");
const fileCheck = (filePath) => {
    if ((0, fs_1.existsSync)(filePath)) {
        return true;
    }
    else {
        return false;
    }
};
exports.fileCheck = fileCheck;
exports.default = exports.fileCheck;
