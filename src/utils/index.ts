import {Options} from "../types/waterMakingOptions";
import {PROOFREAD_NUM_ARRAY, PROOFREAD_STR_ARRAY} from "../types/proofread";

export const validateOptions = (options:Options) :boolean=>{

    for (const optionsKey  in options) {
        // @ts-ignore
        if (options[optionsKey] === "") {
            throw new Error("You passed an incorrect empty string")
        }
    }

    PROOFREAD_STR_ARRAY.forEach((item :string )=> {
        // @ts-ignore

        // @ts-ignore
        if (!options[item]) return;
        // @ts-ignore
        if (typeof options[item] !== "string") throw new Error(`You seem to have passed the wrong property value. The property ${item} should be of type string`)
    })

    PROOFREAD_NUM_ARRAY.forEach((item :string )=>{
        // @ts-ignore
        if (!options[item]) return;
        // @ts-ignore
        if (typeof options[item] !== 'number') throw new Error(`You seem to have passed the wrong property value. The property ${item} should be of type number`)

    })

    return true
}
