import { Piece } from "./piece.js";
import { Pieces } from "../defs.js";
class Bishop extends Piece {
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "Bishop";
        this.PieceText = this.selectPieceColor()
    }

    selectPieceColor() {
        return this.PieceColor ? Pieces.b : Pieces.B;
    }

    getValidMoves(board, square) {

    }
    makeMoves(square) {

    }

}

export { Bishop };