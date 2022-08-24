import { InputParams } from "../types/types";
import yargs from "yargs/yargs";
import helpers = require("yargs/helpers");
const argv: InputParams = yargs(helpers.hideBin(process.argv))
  .argv as InputParams;

const inputFilepath = argv.f;
const outputFilepath = argv.o;
console.log(inputFilepath);
console.log(outputFilepath);
