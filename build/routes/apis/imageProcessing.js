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
const fileCheck_1 = __importDefault(require("../fileCheck"));
const sharp_1 = __importDefault(require("sharp"));
const copmressimage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filename = req.query.filename;
        const fwidth = req.query.width;
        const fheight = req.query.height;
        // const filename: string= (requestQuery.filename as unknown)as string
        // const fwidth:string = (requestQuery.fwidth as unknown)as string
        // const fheight:string = (requestQuery.fheight as unknown)as string
        const fullfilepath = path_1.default.join(__dirname, `..`, `..`, `..`, `assets`, `full`, `${filename}.jpg`);
        const outpath = path_1.default.join(__dirname, `..`, `..`, `..`, `assets`, `thumb`, `${filename}-${fwidth}-${fheight}.jpg`);
        //check if the file exist at first
        if ((0, fileCheck_1.default)(outpath)) {
            console.log(`the file already exist:${outpath}`);
            // add the file to the cache
            // res.sendFile(outpath)
        }
        else {
            yield (0, sharp_1.default)(fullfilepath)
                .resize(parseInt(fwidth), parseInt(fheight))
                .toFile(outpath)
                .then(data => {
                console.log(data);
            });
        }
        next();
        res.sendFile(outpath);
        return outpath;
    }
    catch (err) {
        console.log(`$the resize process throw the following error:{err}`);
        next();
        return null;
    }
});
exports.default = copmressimage;
