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
const sharp_1 = __importDefault(require("sharp"));
const fileCheck_1 = __importDefault(require("../fileCheck"));
const imageProcessing = (filename, fwidth, fheight) => __awaiter(void 0, void 0, void 0, function* () {
    const fullfilepath = path_1.default.resolve(`.`, `assets`, `full`, `${filename}.jpg`);
    console.log();
    const outpath = path_1.default.resolve(`.`, `assets`, `thumb`, `${filename}-${fwidth}-${fheight}.jpg`);
    // const height=parseInt(fheight)
    // const width=parseInt(fwidth)
    //check if the file exist at first
    if (yield (0, fileCheck_1.default)(outpath)) {
        console.log(`the file already exist:${outpath}`);
        // add the file to the cache
        // res.sendFile(outpath)
    }
    else {
        (0, sharp_1.default)(fullfilepath)
            .resize(parseInt(fwidth), parseInt(fheight))
            .toFile(outpath)
            .then(data => {
            console.log(data);
        });
    }
    return outpath;
});
exports.default = imageProcessing;
