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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fileCheck_1 = __importDefault(require("../../routes/fileCheck"));
//the middleware spec
const randomfilePath = path_1.default.resolve(`.`, `assets`, `full`, `random.jpg`);
it(`the file check hast to return false for non-existing files`, () => __awaiter(void 0, void 0, void 0, function* () {
    const status = yield (0, fileCheck_1.default)(randomfilePath);
    expect(status).toBeFalse();
}));
