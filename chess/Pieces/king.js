import { Piece } from "./piece.js";
import { Pieces } from "../defs.js";
class King extends Piece {
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "King";
        this.PieceText = this.selectPieceColor()

    }

    selectPieceColor() {
        return this.PieceColor ? Pieces.k : Pieces.K;
    }

    getValidMoves(board) {

    }
    makeMoves(square) {

    }

}

export { King };