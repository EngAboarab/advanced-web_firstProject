"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fileCheck_1 = __importDefault(require("../../routes/fileCheck"));
//the middleware spec
describe('the functionality of filecheck function', () => {
    const randomfilePath = path_1.default.join(__dirname, `..`, `..`, `..`, `assets`, `full`, `random.jpg`);
    it(`the file check hast to return false for non-existing files`, () => {
        expect((0, fileCheck_1.default)(randomfilePath)).toBeFalse();
    });
});
