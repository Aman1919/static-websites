import { Piece } from "./piece.js";
import {
    LocationFactory,
    Location
} from "../Location.js";
import { Pieces } from "../defs.js";
import { Board, locationSquareMap } from "../Board.js";

class Pawn extends Piece {
    #isFirstMove = 2;
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "Pawn";
        this.PieceText = this.selectPieceColor()

    }

    selectPieceColor() {
        return this.PieceColor ? Pieces.p : Pieces.P;
    }


    getValidMoves(board) {
        let moveCandidates = []

        return validMoves;

    }

    /* 
    4 Pawns Moves:
    1 . One step - File, Rank +- 1 depending on color
    2 . two step - file , rank +-2  "" ""
    3 . left - file - 1 , rank +- 1 " "  "" and if enemys piece is there
    4 . right - rank + 1,  rank +- 1 ""
     */
    getValidMoves(board, square, turn) {
        let ValidMoves = [];
        this.currentSquare = square;
        let file = square.getLocation().getFile();
        let rank = square.getLocation().getRank();

        let OneStepMove = !turn ? new Location(file, rank + 1).getName() : new Location(file, rank - 1).getName();
        let TwoStepMove = !turn ? new Location(file, rank + 2).getName() : new Location(file, rank - 2).getName();
        let leftCaptureMove = !turn ? new Location(file - 1, rank + 1).getName() : new Location(file - 1, rank - 1).getName();
        let rightCaptureMove = !turn ? new Location(file + 1, rank + 1).getName() : new Location(file + 1, rank - 1).getName();


        locationSquareMap.forEach((value, key) => {
            if (OneStepMove === key.getName()) {
                OneStepMove = value;
            }
            if (TwoStepMove === key.getName()) {
                TwoStepMove = value;

            }

            if (leftCaptureMove === key.getName()) {
                leftCaptureMove = value;
            }
            if (rightCaptureMove === key.getName()) {
                rightCaptureMove = value;
            }

        })


        if (!OneStepMove.piece) {
            ValidMoves.push(OneStepMove)
            if (!TwoStepMove.piece) ValidMoves.push(TwoStepMove)
        }

        if (leftCaptureMove.piece && leftCaptureMove.piece.PieceColor != turn) ValidMoves.push(leftCaptureMove)
        if (rightCaptureMove.piece && leftCaptureMove.piece.PieceColor != turn) ValidMoves.push(rightCaptureMove);



        console.log(ValidMoves);


        return ValidMoves;
    }

    makeMoves(square) {
        this.currentSquare = square;
        let file = square.getLocation().getFile();
        let rank = square.getLocation().getRank();


    }


}

export { Pawn };