import createBoard from "../../utils/createBoard";
import { BoardInfo, E_WindowType } from "../../utils/BoardInfo";
import randomColorHOF from "../../utils/randomColor";
import randomID from "../../utils/randomID";
import validateMove from "../../utils/validateBoxMove";
import testMaze from "../../utils/maze/testMaze";
import showSolvedMaze from "../../utils/maze/showSolvedMaze";
import shortestPath from "../../utils/maze/shortestPath";
import checkMatches from "../../utils/maze/checkMatches";
import createAdjacencyList from "../../utils/maze/adjacencyList";

import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import {
  softBlue,
  softRed,
  softGreen,
  softOrange,
  softPurple,
  softTeal,
} from "@ifeelblue/color-kit";
import { BOARD_WIDTH, BOX_COUNT, BOX_SIZE } from "../../config";
import { I_Box } from "../../components/Box";

/**/
const colorsData = [
  softBlue.hex,
  softRed.hex,
  softGreen.hex,
  softOrange.hex,
  softPurple.hex,
  softTeal.hex,
];
function selectedBox(selected: I_Box) {}

/**/
let board: I_Box[];
let boardInfo: BoardInfo;
let originBox: I_Box;
let selectedBox_1: I_Box;
let selectedBox_2: I_Box;
beforeEach(() => {
  board = createBoard(BOX_COUNT, selectedBox);
  boardInfo = new BoardInfo(BOARD_WIDTH, BOX_SIZE, BOX_COUNT);

  originBox = board[0];
  selectedBox_1 = board[5];
  selectedBox_2 = board[20];
});

describe("randomColorHOF() \n randomID()", () => {
  it("should return a random color", () => {
    const randomColor = randomColorHOF(colorsData);

    expect(randomColor()).to.toBeDefined();
  });
  it("should return a random id", () => {
    expect(randomID()).to.toBeDefined();
  });
});

describe("Board Tests", () => {
  it("should create a board with 40 boxes", () => {
    expect(board.length).toBe(40);
  });
  it("should get board info correctly", () => {
    expect(boardInfo.boxCountForRow).toBe(5);
    expect(boardInfo.boxCountForCol).toBe(8);
  });
  it("should run BoardInfo.isWindowValid() correctly", () => {
    expect(boardInfo.isWindowValid(E_WindowType.Row, 3, 2)).toBe(true);
    expect(boardInfo.isWindowValid(E_WindowType.Row, 3, 4)).toBe(false);
    /*
        TODO
        expect(boardInfo.isWindowValid(E_WindowType.Column, 3, 35)).toBe(true);
        expect(boardInfo.isWindowValid(E_WindowType.Column, 3, 4)).toBe(false);
    */
  });
  it("should validate box move with validateBoxMove", () => {
    const move1 = validateMove(originBox, selectedBox_1);
    expect(move1).toBeTruthy();

    const move2 = validateMove(originBox, selectedBox_2);
    expect(move2).toBeFalsy();
  });
  it("should detect row and column box matches with checkMatches()", () => {
    const indexesToMatch = [/*row*/ 0, 1, 2, /*colum*/ 14, 19, 16];
    let customBoard = board.map((box) => {
      if (indexesToMatch.includes(box.index)) {
        return { ...box, bgColor: softBlue.hex };
      }

      return box;
    });

    customBoard = checkMatches(customBoard);

    indexesToMatch.forEach((indx) => {
      expect(customBoard[indx].bgColor).toBe("black");
    });
  });
  it("should cerate an adjacency list with board data", () => {
    /*set up 
        0 => [1, 5], 1 => [0,2]
    */
    board[0].bgColor = "black";
    board[5].bgColor = "black";
    board[1].bgColor = "black";
    board[6].bgColor = softRed.hex;
    board[2].bgColor = "black";

    const adjList = createAdjacencyList(board);
    expect(adjList.get(0)).toStrictEqual([1, 5]);
    expect(adjList.get(1)).toStrictEqual([0, 2]);
    expect(adjList.get(6)).toBeFalsy();
  });
});
describe("Maze test", () => {
  it("should test be failed", () => {
    expect(testMaze(board)).toBeFalsy();
  });

  it("should pass the test", () => {
    const correctPathİndexes = [0, 5, 10, 15, 20, 25, 30, 35, 36, 37, 38, 39];

    correctPathİndexes.forEach((indx) => {
      board[indx].bgColor = "black";
    });

    const result = testMaze(board);
    expect(result).toBeTruthy();
    expect(result?.length).toBe(correctPathİndexes.length);
  });
});
