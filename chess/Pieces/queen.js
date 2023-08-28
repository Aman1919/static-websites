import { Piece } from "./piece.js";
import { Pieces } from "../defs.js";
class Queen extends Piece {
    #bishop;
    #rook;
    constructor(PieceColor, bishop, rook) {
        super(PieceColor);
        this.name = "Queen";
        this.bishop = bishop
        this.rook = rook;
        this.PieceText = this.selectPieceColor()
    }
    selectPieceColor() {
        return this.PieceColor ? Pieces.q : Pieces.Q;
    }
    getValidMoves(board) {
        let moveCandidates = new Array();
        moveCandidates.push(this.bishop.getValidMoves(board, this.currentSquare()));
        moveCandidates.push(this.rook.getValidMoves(board, this.currentSquare()))
    }
    getValidMoves(board, square) {

    }
    makeMoves(square) {
        let current = this.getCurrentSquare();
        this.setCurrentSquare(square)
        current.reset();
    }

}

export { Queen };