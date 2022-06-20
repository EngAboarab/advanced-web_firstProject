"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apis = express_1.default.Router();
apis.get('/', (req, res) => {
    res.send(`<h1> welcome to the APIs Page</h1>`);
    res.status(200);
});
exports.default = apis;
