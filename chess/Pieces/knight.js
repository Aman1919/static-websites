import { Piece } from "./piece.js";
import { Pieces } from "../defs.js";
class Knight extends Piece {
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "Knight";
        this.PieceText = this.selectPieceColor()

    }
    selectPieceColor() {
        return this.PieceColor ? Pieces.n : Pieces.N;
    }
    getValidMoves(board) {

    }
    makeMoves(square) {

    }

}

export { Knight };