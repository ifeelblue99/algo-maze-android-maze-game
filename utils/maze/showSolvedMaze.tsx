import { I_Box } from "../../components/Box";

export default function showSolvedMaze(board: I_Box[], path: number[]) {
    const solvedMaze = board.map(box => {
        if (path.includes(box.index)) {
            return { ...box, bgColor: "green" }
        } else {
            return { ...box, bgColor: "black" }

        }
    })

    return solvedMaze
}