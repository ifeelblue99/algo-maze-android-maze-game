import { I_Box } from "../components/Box";
import randomColorHOF from "./randomColor";
import { softBlue, softRed, softGreen, softOrange, softPurple, softTeal } from "@ifeelblue/color-kit";
import randomID from "./randomID";

const colorsData = [
    softBlue.hex,
    softRed.hex,
    softGreen.hex,
    softOrange.hex,
    softPurple.hex,
    softTeal.hex
]
const randomColor = randomColorHOF(colorsData)

export default function createBoard(iter: number, clickEvent: (box: I_Box) => void) {
    const board: I_Box[] = []

    for (let index = 0; index < iter; index++) {
        board.push({
            bgColor: randomColor(),
            boxId: randomID(),
            click: clickEvent,
            isSelected: false,
            index: index
        })
    }
    return board
}