import { I_Box } from "../../components/Box";
import { VALID_MOVES } from "../../config";

export default function createAdjacencyList(board: I_Box[]) {
    const adjacency: Map<number, Array<number>> = new Map()

    board.forEach((element, index) => {
        if (element.bgColor !== "black")
            return

        const values = [] as number[]

        VALID_MOVES.forEach(move => {
            if (board[index + move] && board[index + move].bgColor === "black")
                values.push(board[index + move].index)
        });

        if (values.length > 0)
            adjacency.set(index, values)
    });

    return adjacency
}
