let PAWN = 0,
  ROUKE = 1,
  KNIGHT = 2,
  BISHOP = 3,
  QUEEN = 4,
  KING = 5;
let IN_PLAY = 0;

class Piece {
  constructor(row, col, piecePosition, color, name) {
    this.row = row;
    this.col = col;
    this.piece = piecePosition;
    this.status = IN_PLAY;
    this.color = color;
    this.name = name;
  }
}

let json = {
  white: [
    new Piece(0, 0, ROUKE, 0, "rouke"),
    new Piece(0, 1, KNIGHT, 0, "knight"),
    new Piece(0, 2, BISHOP, 0, "bishop"),
    new Piece(0, 3, KING, 0, "king"),
    new Piece(0, 4, QUEEN, "queen"),
    new Piece(0, 5, BISHOP, 0, "bishop"),
    new Piece(0, 6, KNIGHT, 0, "knight"),
    new Piece(0, 7, ROUKE, 0, "rouke"),
    new Piece(1, 0, PAWN, 0, "pawn"),
    new Piece(1, 1, PAWN, 0, "pawn"),
    new Piece(1, 2, PAWN, 0, "pawn"),
    new Piece(1, 3, PAWN, 0, "pawn"),
    new Piece(1, 4, PAWN, 0, "pawn"),
    new Piece(1, 5, PAWN, 0, "pawn"),
    new Piece(1, 6, PAWN, 0, "pawn"),
    new Piece(1, 7, PAWN, 0, "pawn"),
  ],
  black: [
    new Piece(7, 0, ROUKE, 1, "rouke"),
    new Piece(7, 1, KNIGHT, 1, "knight"),
    new Piece(7, 2, BISHOP, 1, "bishop"),
    new Piece(7, 3, KING, 1, "king"),
    new Piece(7, 4, QUEEN, 1, "queen"),
    new Piece(7, 5, BISHOP, 1, "bishop"),
    new Piece(7, 6, KNIGHT, 1, "knight"),
    new Piece(7, 7, ROUKE, 1, "rouke"),
    new Piece(6, 0, PAWN, 1, "pawn"),
    new Piece(6, 1, PAWN, 1, "pawn"),
    new Piece(6, 2, PAWN, 1, "pawn"),
    new Piece(6, 3, PAWN, 1, "pawn"),
    new Piece(6, 4, PAWN, 1, "pawn"),
    new Piece(6, 5, PAWN, 1, "pawn"),
    new Piece(6, 6, PAWN, 1, "pawn"),
    new Piece(6, 7, PAWN, 1, "pawn"),
  ],
};
export { json };
