import { I_Box } from "../components/Box";
import { VALID_MOVES } from "../config";

export default function validateMove(origin: I_Box, destination: I_Box): boolean {
    /* a box can only move to valid distance and different color expect for black | white*/
    let isMoveValid = false

    VALID_MOVES.forEach(move => {
        if (origin.index + move === destination.index)
            isMoveValid = true
    })

    if (isMoveValid && (origin.bgColor !== destination.bgColor) /* && destination.bgColor !== "black"*/)
        return true

    /*else*/
    return false
}