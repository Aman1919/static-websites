import { json } from "./DefaultPositions.js";

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width,
  canvasHeight = canvas.height;
let NO_OF_ROWS = 8;
let BlockWidth = canvasWidth / 8,
  BlockHeight = canvasHeight / 8;
let BlackColor = "#9f7119",
  WhiteColor = "#debf83";

function DrawChessBoard() {
  //Drawing The chess Board
  for (let i = 0; i <= NO_OF_ROWS; i++) {
    for (let j = 0; j <= NO_OF_ROWS; j++) {
      DrawBlock(i, j);
    }
  }
}

function DrawBlock(i, j) {
  let color;
  //Filling color in each block
  if (i % 2) {
    color = j % 2 ? WhiteColor : BlackColor;
  } else {
    color = j % 2 ? BlackColor : WhiteColor;
  }
  ctx.fillStyle = color;
  ctx.fillRect(i * BlockWidth, j * BlockHeight, BlockWidth, BlockHeight);
}
/*
Json={
white:[
{
piece:position in the img  piece*100=x-coord in the img 
and for y if its white then y=0 else, y=100
block is of 100*100,
Row: row chess board or y-axis rows  || row*100=y-coordinate
col:col chess board or x-axis col || col*100=x-coord. of the chessboard for canvas
status:if piece is in play or not 
}]}
 */
function DrawPieces() {
  for (let i = 0; i < json.white.length; i++) {
    let w = json.white[i];
    let b = json.black[i];
    DrawImg(w.piece, w.row, w.col, 100);
    DrawImg(b.piece, b.row - 0.4, b.col, 0);
  }
}

function DrawImg(piecePosition, row, col, ImgY) {
  const img = new Image();
  img.src = "pieces.png";
  img.onload = () => {
    ctx.drawImage(
      img,
      piecePosition * 100,
      ImgY,
      100,
      100,
      col * 100,
      row * 100,
      100,
      95
    );
  };
}
function Game() {
  DrawChessBoard();
  DrawPieces();
}

Game();
