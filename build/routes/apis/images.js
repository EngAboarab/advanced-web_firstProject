"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const fileCheck_1 = __importDefault(require("../fileCheck"));
const images = express_1.default.Router();
images.get("/", (req, res) => {
    const filename = req.query.filename;
    const fwidth = req.query.width;
    const fheight = req.query.height;
    try {
        const fullfilepath = path_1.default.join(__dirname, `..`, `..`, `..`, `assets`, `full`, `${filename}.jpg`);
        const outpath = path_1.default.join(__dirname, `..`, `..`, `..`, `assets`, `thumb`, `${filename}-${fwidth}-${fheight}.jpg`);
        //check if the file exist at first
        if ((0, fileCheck_1.default)(outpath)) {
            console.log(`the file already exist:${outpath}`);
            // add the file to the cache
            // res.sendFile(outpath)
            res.sendFile(outpath);
        }
        else {
            (0, sharp_1.default)(fullfilepath)
                .resize(parseInt(fwidth), parseInt(fheight))
                .toFile(outpath)
                .then(data => {
                console.log(data);
                res.sendFile(outpath);
            });
        }
    }
    catch (err) {
        console.log(`$the resize process throw the following error:{err}`);
    }
});
exports.default = images;
