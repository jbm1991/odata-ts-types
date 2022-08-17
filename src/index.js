"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs/yargs"));
const { hideBin } = require('yargs/helpers');
const argv = (0, yargs_1.default)(hideBin(process.argv)).argv;
console.log(argv);
//# sourceMappingURL=index.js.map