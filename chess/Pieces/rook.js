import { Piece } from "./piece.js";
import { Pieces } from "../defs.js";
class Rook extends Piece {
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "Rook";
        this.PieceText = this.selectPieceColor()

    }
    selectPieceColor() {
        return this.PieceColor ? Pieces.r : Pieces.R;
    }
    getValidMoves(board, square) {

    }
    makeMoves(square) {

    }

}

export { Rook };