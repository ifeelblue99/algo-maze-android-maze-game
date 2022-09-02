import { I_Box } from "../../components/Box";
import { BoardInfo, E_WindowType } from "../BoardInfo";
import { BOARD_WIDTH, BOX_COUNT, BOX_SIZE } from "../../config";

const boardInfo = new BoardInfo(BOARD_WIDTH, BOX_SIZE, BOX_COUNT);

export default function checkMatches(
  board: I_Box[],
  origin?: I_Box,
  selected?: I_Box
) {
  let checkedBoard = board.map((box) => {
    if (box.boxId === selected?.boxId) {
      return { ...box, isSelected: false, bgColor: origin?.bgColor };
    }
    if (box.boxId === origin?.boxId) {
      return { ...box, isSelected: false, bgColor: selected?.bgColor };
    }
    return box;
  });

  return check3Col(check3Row(checkedBoard));
}

function check3Row(board: I_Box[]) {
  board.forEach((box) => {
    if (boardInfo.isWindowValid(E_WindowType.Row, 3, box.index)) {
      if (
        box.bgColor !== "black" &&
        box.bgColor === board[box.index + 1].bgColor &&
        box.bgColor === board[box.index + 2].bgColor
      ) {
        box.bgColor = "black";
        board[box.index + 1].bgColor = "black";
        board[box.index + 2].bgColor = "black";
      }
    }
  });

  return board;
}
function check3Col(board: I_Box[]) {
  board.forEach((box) => {
    if (
      box.bgColor !== "black" &&
      board[box.index + boardInfo.boxCountForRow] &&
      board[box.index + boardInfo.boxCountForRow * 2] &&
      box.bgColor === board[box.index + boardInfo.boxCountForRow].bgColor &&
      box.bgColor === board[box.index + boardInfo.boxCountForRow * 2].bgColor
    ) {
      box.bgColor = "black";
      board[box.index + boardInfo.boxCountForRow].bgColor = "black";
      board[box.index + boardInfo.boxCountForRow * 2].bgColor = "black";
    }
  });

  return board;
}
