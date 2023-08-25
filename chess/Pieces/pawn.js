import { Piece } from "./piece.js";
import { LocationFactory } from "../Location.js";
import { Pieces } from "../defs.js";
class Pawn extends Piece {
    #isFirstMove = true;
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "Pawn";
        this.PieceText = this.selectPieceColor()

    }

    selectPieceColor() {
        return this.PieceColor ? Pieces.p : Pieces.P;
    }

    // getPiece() {
    //     return this.PieceColor.LIGHT ? Pieces.P : Pieces.p
    // }
    getValidMoves(board) {
        let moveCandidates = []
        let current = this.currentSquare().getLocation()
        moveCandidates.push(new LocationFactory().Build(current, 0, 1))
        if (this.#isFirstMove) {
            moveCandidates.push(new LocationFactory().Build(current, 0, 2))
            return moveCandidates;
        }
        moveCandidates.push(new LocationFactory().Build(current, 1, 1))
        moveCandidates.push(new LocationFactory().Build(current, -1, 1))
        let validMoves = moveCandidates.filter((candidate) => {
            return (board.getLocationSquareMap().has(candidate))
        })
        return validMoves;

    }
    getValidMoves(board, square) {

    }
    makeMoves(square) {

    }


}

export { Pawn };