"use strict";
// lets make the entry point ** the server and the app setup
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//get the main route (api)
const index_1 = __importDefault(require("./routes/index"));
app.use('/', index_1.default);
// //create the endpoint with middleware
// app.get('/api/images',(req:express.Request,res:express.Response)=>{
//     console.log(req.query)
// })
app.listen(port, () => console.log(`the server has been started at Port ${port}`));
