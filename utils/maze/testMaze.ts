import { I_Box } from "../../components/Box";
import { BOX_COUNT } from "../../config";
import createAdjacencyList from "./adjacencyList";
import shortestPath from "./shortestPath";

export default function testMaze(board: I_Box[]) {
  if (board[0].bgColor !== "black" || board[BOX_COUNT - 1].bgColor !== "black")
    return null;

  const adjacency = createAdjacencyList(board);

  const path = shortestPath(adjacency, 0, BOX_COUNT - 1);

  if (path) {
    // I had to add start (0) index manually
    // do not know why...
    //  (\/)
    //  (•_•)
    //  (>💔
    path.push(0 /*start index*/);
  }
  return path;
}
