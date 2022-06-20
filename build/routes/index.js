"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apis_1 = __importDefault(require("./apis/apis"));
const images_1 = __importDefault(require("./apis/images"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send(`<h1> welcome to the Home Page</h1>`);
});
routes.use('/api', apis_1.default);
routes.use("/api/images", images_1.default);
exports.default = routes;
