import { Piece } from "./piece.js";
import {
    LocationFactory,
    Location
} from "../Location.js";
import { Pieces } from "../defs.js";
import { Board, locationSquareMap } from "../Board.js";

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

    OneStep(file, rank, turn) {
        return !turn ? new Location(file, rank + 1).getName() : new Location(file, rank - 1).getName()
    }
    TwoStep(file, rank, turn) {
        return !turn ? new Location(file, rank + 2).getName() : new Location(file, rank - 2).getName()
    }
    leftStep(file, rank, turn) {
        return !turn ? new Location(file - 1, rank + 1).getName() : new Location(file - 1, rank - 1).getName();
    }
    rightStep(file, rank, turn) {
        return !turn ? new Location(file + 1, rank + 1).getName() : new Location(file + 1, rank - 1).getName();
    }

    pushMoves(OneStepMove, TwoStepMove, leftCaptureMove, rightCaptureMove, turn) {
        let ValidMoves = [];
        if (!OneStepMove.piece) {
            ValidMoves.push(OneStepMove)
            if (!TwoStepMove.piece && this.#isFirstMove) {
                ValidMoves.push(TwoStepMove)
            }
        }

        if (leftCaptureMove.piece && leftCaptureMove.piece.PieceColor != turn) ValidMoves.push(leftCaptureMove)
        if (rightCaptureMove.piece && rightCaptureMove.piece.PieceColor != turn) ValidMoves.push(rightCaptureMove);
        return ValidMoves;
    }


    getValidMoves(board, square, turn) {
        let ValidMoves = [];
        this.currentSquare = square;
        let file = square.getLocation().getFile();
        let rank = square.getLocation().getRank();

        let OneStepMove = this.OneStep(file, rank, turn);
        let TwoStepMove = this.TwoStep(file, rank, turn);
        let leftCaptureMove = this.leftStep(file, rank, turn);
        let rightCaptureMove = this.rightStep(file, rank, turn);


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

        console.log(board);
        ValidMoves = this.pushMoves(OneStepMove, TwoStepMove, leftCaptureMove, rightCaptureMove, turn);
        return ValidMoves;
    }


    makeMoves(SelectedSquare, PrevSelectedSquare) {
        this.currentSquare = SelectedSquare;

        SelectedSquare.setCurrentSquare(this);
        PrevSelectedSquare.setCurrentSquare(null);
        if (this.#isFirstMove) this.#isFirstMove = false;
    }


}

export { Pawn };