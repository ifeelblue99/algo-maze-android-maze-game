import { midGray, softGray } from "@ifeelblue/color-kit";

export enum E_DeveloperAccounts {
  Github = "https://github.com/ifeelblue99",
  Twitter = "https://twitter.com/ifeelblue13",
  Linkedin = "https://www.linkedin.com/in/barancakirbey/",
}
export const BOARD_WIDTH = 310;
export const BOX_SIZE = 60;
export const BOX_COUNT = 40;
export const SELECTED_BOX_COLOR = midGray.hex;

export const MOVE_COUNT = 15;
export const VALID_MOVES = [
  /* a box can only move up, down, left or right only 1 box distance*/
  -1, 1, -5, 5,
];
