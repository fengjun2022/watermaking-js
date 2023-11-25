"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptions = void 0;
const proofread_1 = require("../types/proofread");
const validateOptions = (options) => {
    for (const optionsKey in options) {
        // @ts-ignore
        if (options[optionsKey] === "") {
            throw new Error("You passed an incorrect empty string");
        }
    }
    proofread_1.PROOFREAD_STR_ARRAY.forEach((item) => {
        // @ts-ignore
        // @ts-ignore
        if (!options[item])
            return;
        // @ts-ignore
        if (typeof options[item] !== "string")
            throw new Error(`You seem to have passed the wrong property value. The property ${item} should be of type string`);
    });
    proofread_1.PROOFREAD_NUM_ARRAY.forEach((item) => {
        // @ts-ignore
        if (!options[item])
            return;
        // @ts-ignore
        if (typeof options[item] !== 'number')
            throw new Error(`You seem to have passed the wrong property value. The property ${item} should be of type number`);
    });
    return true;
};
exports.validateOptions = validateOptions;
