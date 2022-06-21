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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const imageProcessing_1 = __importDefault(require("../apis/imageProcessing"));
const fileCheck_1 = __importDefault(require("../fileCheck"));
const images = express_1.default.Router();
images.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const fwidth = req.query.width;
    const fheight = req.query.height;
    const fullfilepath = path_1.default.resolve(`.`, `assets`, `full`, `${filename}.jpg`);
    //get the existing files names
    if (isNaN(parseInt(fwidth)) || isNaN(parseInt(fheight))) {
        res.status(400).send(`<h2>you have entered invaid width or height  value or Both</h2>`);
    }
    else {
        const status = yield (0, fileCheck_1.default)(fullfilepath);
        if (status == false) {
            res.status(400).send(`<h2>you have entered filename which is not exist in the assets/full folder</h2>`);
        }
        else {
            const response = yield (0, imageProcessing_1.default)(filename, fwidth, fheight);
            res.status(200).sendFile(response);
        }
    }
    // const filesnames: string[]=[]
    //     fs.readdir(path.resolve(".","assets","full"),async(err,files)=>{
    //         files.forEach((file)=>filesnames.push(path.basename(file)))
    //     }
    //     )
    //     const filewithext:string=filename+".jpg"
    //     console.log(filewithext)
    //    if(!filesnames.includes(filewithext)){
    //        res.status(400).send (`<h2>you have entered filename which is not exist in the assets/full folder</h2>`)
    //    }
}));
exports.default = images;
