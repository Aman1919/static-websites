import { ChessBoard } from "./piece.js";
import { pieces } from "./DefaultPositions.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let BlackColor = "#9f7119",
  WhiteColor = "#debf83";
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let NO_OF_ROWS = 8;
let BlockWidth = canvasWidth / 8;
let BlockHeight = canvasHeight / 8;
let IsDragging = false;
let SelectedPieceIndex = null;
window.onload = Main;

class Game {
  constructor(canvasWidth, canvasHeight) {
    this.GameWidth = canvasWidth;
    this.GameHeight = canvasHeight;

    this.board = new ChessBoard(canvasWidth, canvasHeight);
  }
  Display() {
    this.board.DrawChessBoard();
  }
}
let turn = 0;
let game;
function Main() {
  game = new Game(canvasWidth, canvasHeight);
  game.Display();
  canvas.onmousedown = OnMouseDown;
  canvas.onmouseup = OnMouseUp;
}

function OnMouseDown(e) {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  let BlockX = Math.floor((e.x - rect.x) / 100);
  let BlockY = Math.floor((e.y - rect.y) / 100);

  // console.log(x + " + " + y);
  pieces.black.find(SelectingObject) || pieces.white.find(SelectingObject);
  function SelectingObject(p, i) {
    if (p.col === BlockX && p.row === BlockY) {
      SelectedPieceIndex = i;
      IsDragging = true;
      console.log(i);
      return p;
    } else console.log("piece is not present at this coodrinates");
  }
}
function OnMouseUp(e) {
  if (!IsDragging) {
    console.log("Select piece");
    return;
  }
  e.preventDefault();

  const rect = canvas.getBoundingClientRect();
  let BlockX = Math.floor((e.x - rect.x) / 100);
  let BlockY = Math.floor((e.y - rect.y) / 100);
  if (!turn) {
    pieces.white[SelectedPieceIndex].row = BlockY;
    pieces.white[SelectedPieceIndex].col = BlockX;
  } else {
    pieces.black[SelectedPieceIndex].row = BlockY;
    pieces.black[SelectedPieceIndex].col = BlockX;
  }
  // turn = !turn;
  IsDragging = false;
  SelectedPieceIndex = null;
  game.board.DrawChessBoard();
  turn = !turn;
}

export {
  BlockHeight,
  BlockWidth,
  NO_OF_ROWS,
  BlackColor,
  WhiteColor,
  ctx,
  canvas,
  turn,
};
