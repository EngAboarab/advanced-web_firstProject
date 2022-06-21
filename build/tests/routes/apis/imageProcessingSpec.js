"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageProcessing_1 = __importDefault(require("../../../routes/apis/imageProcessing"));
describe(`testing the image processing functionality`, () => {
    it('it sould return the resized file path', () => {
        expect((0, imageProcessing_1.default)("fjord", "200", "200")).not.toBeNull;
    });
});
