import { pieces } from "./DefaultPositions.js";
import {
  BlackColor,
  WhiteColor,
  BlockHeight,
  BlockWidth,
  NO_OF_ROWS,
  ctx,
} from "./index.js";
export class ChessBoard {
  constructor(canvasWidth, canvasHeight) {
    this.width = canvasWidth;
    this.height = canvasHeight;
  }
  DrawChessBoard() {
    ctx.clearRect(0, 0, this.width, this.height);
    for (let row = 0; row < NO_OF_ROWS; row++) {
      for (let col = 0; col < NO_OF_ROWS; col++) {
        let block = new Block(row, col, BlockWidth, BlockHeight);
        block.DrawBlock();
      }
    }
    this.DrawPieces();
    this.print();
  }

  DrawPieces() {
    for (let i = 0; i < pieces.white.length; i++) {
      let w = pieces.white[i];
      let b = pieces.black[i];
      this.DrawImg(w.piece, w.row, w.col, 100);
      this.DrawImg(b.piece, b.row - 0.4, b.col, 0);
    }
  }

  DrawImg(piecePosition, row, col, ImgY) {
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    const img = new Image();
    img.src = "pieces.png";
    img.draggable = true;
    img.width = 600;
    img.height = 200;
    img.onload = () => {
      ctx.drawImage(
        img,
        (piecePosition * img.width) / 6,
        ImgY,
        img.width / 6,
        img.height / 2,
        col * 100,
        row * 100,
        100,
        93
      );
    };
  }

  print() {
    ctx.font = "10px Arial";
    ctx.fillStyle = "white";
    let j = "abcdefgh";
    for (let i = 0; i < NO_OF_ROWS; i++) {
      ctx.fillText(i + 1, 5, 15 + i * BlockHeight);
      ctx.fillText(j[i], 90 + i * 100, 10);
    }
  }
}

class Block {
  constructor(row, col, BlockWidth, BlockHeight) {
    this.row = row;
    this.col = col;
    this.BlockWidth = BlockWidth;
    this.BlockHeight = BlockHeight;
    this.color = this.BlockColor(row, col);
  }
  DrawBlock() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.row * this.BlockWidth,
      this.col * this.BlockHeight,
      this.BlockWidth,
      this.BlockHeight
    );
  }
  BlockColor(row, col) {
    return (row % 2 === 0 && col % 2 === 0) || (row % 2 !== 0 && col % 2 !== 0)
      ? WhiteColor
      : BlackColor;
  }
}
