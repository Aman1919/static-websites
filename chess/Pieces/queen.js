import { Piece } from "./piece.js";
import { Pieces } from "../defs.js"
import { Bishop } from "./bishop.js";
import { Rook } from "./rook.js";
class Queen extends Piece {
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "Queen";
        this.bishop = new Bishop(this.PieceColor)
        this.rook = new Rook(this.PieceColor);
        this.PieceText = this.selectPieceColor()
    }
    selectPieceColor() {
        return this.PieceColor ? Pieces.q : Pieces.Q;
    }
    getValidMoves(board, square, turn) {
        let diagonalMoves = new Bishop(this.PieceColor).getValidMoves(board, square, turn);
        let straightMoves = new Rook(this.PieceColor).getValidMoves(board, square, turn);
        let validMoves = [...diagonalMoves, ...straightMoves];
        return validMoves
    }



}

export { Queen };