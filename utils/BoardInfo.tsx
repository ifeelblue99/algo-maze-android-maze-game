import { BOX_COUNT } from "../config"

export enum E_WindowType {
    Row,
    Column
}


export class BoardInfo {

    public boxCountForRow: number
    public boxCountForCol: number

    constructor(boardWidth: number, boxSize: number, boxCount: number) {
        this.boxCountForRow = Math.floor(boardWidth / boxSize)
        this.boxCountForCol = Math.floor(boxCount / this.boxCountForRow)

    }

    isWindowValid(window: E_WindowType, windowSize: number, startBoxIndx: number) {
        // To be fixed...
        if (window === E_WindowType.Row) {
            return this.boxCountForRow >= (startBoxIndx % this.boxCountForRow) + windowSize

        } else {
            return BOX_COUNT >= startBoxIndx + ((windowSize - 2) * this.boxCountForRow)
        }
    }
} 