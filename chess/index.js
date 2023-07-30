import { json } from "./DefaultPositions.js";
import { MouseDown, MouseUp } from "./event.js";
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width,
  canvasHeight = canvas.height;
let NO_OF_ROWS = 8;
let BlockWidth = canvasWidth / 8,
  BlockHeight = canvasHeight / 8;
let BlackColor = "#9f7119",
  WhiteColor = "#debf83";
let turn = 1; //white=0,black=1;
let selectedBlock = null;
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
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  DrawChessBoard();
  for (let i = 0; i < json.white.length; i++) {
    let w = json.white[i];
    let b = json.black[i];
    DrawImg(w.piece, w.row, w.col, 100);
    DrawImg(b.piece, b.row - 0.44, b.col, 0); //-.44 bcz by row*100   generating middle coord of the block of so, pieces are getting overflow
  }
}
canvas.onmousedown = MouseDown;
canvas.onmouseup = (e) => {
  let a = MouseUp(e);
  turn = a;
};
function DrawImg(piecePosition, row, col, ImgY) {
  const img = new Image();
  img.src = "pieces.png";
  img.draggable = true;
  img.onload = () => {
    ctx.drawImage(
      img,
      piecePosition * 100,
      ImgY,
      100,
      93,
      col * 100,
      row * 100,
      100,
      93
    );
  };
}
function print() {
  ctx.font = "10px Arial";
  ctx.fillStyle = "black";
  let j = "abcdefgh";
  for (let i = 0; i <= NO_OF_ROWS; i++) {
    ctx.fillText(i + 1, 5, 8 + i * 100);
    ctx.fillText(j[i], 90 + i * 100, 10);
  }
}

function Game() {
  DrawPieces();
  print();
}

Game();

export {
  ctx,
  selectedBlock,
  turn,
  canvas,
  BlockHeight,
  BlockWidth,
  DrawPieces,
};
