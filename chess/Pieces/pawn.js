import { Piece } from "./piece.js";
import { Pieces } from "../defs.js";

class Pawn extends Piece {
    #isFirstMove = true;

    constructor(PieceColor) {
        super(PieceColor);
        this.name = "Pawn";
        this.PieceText = this.selectPieceColor()

    }

    promotion() {

    }

    selectPieceColor() {
        return this.PieceColor ? Pieces.p : Pieces.P;
    }
    validSquare(file, rank, board) {
        if (file >= 8 || file < 0 || rank < 0 || rank >= 8) return;
        return board[rank][file];
    }
    OneStep(file, rank, turn, board) {
        return !turn ? this.validSquare(file, rank + 1, board) : this.validSquare(file, rank - 1, board)
    }
    TwoStep(file, rank, turn, board) {
        return !turn ? this.validSquare(file, rank + 2, board) : this.validSquare(file, rank - 2, board)
    }
    leftStep(file, rank, turn, board) {
        return !turn ? this.validSquare(file - 1, rank - 1, board) : this.validSquare(file - 1, rank - 1, board)


    }
    rightStep(file, rank, turn, board) {
        return !turn ? this.validSquare(file + 1, rank + 1, board) : this.validSquare(file + 1, rank - 1, board)
    }

    pushMoves(OneStepMove, TwoStepMove, leftCaptureMove, rightCaptureMove, turn) {
        let ValidMoves = [];
        if (!OneStepMove.piece) {
            ValidMoves.push(OneStepMove)
            if (!TwoStepMove.piece && this.#isFirstMove) {
                ValidMoves.push(TwoStepMove)
            }
        }

        if (leftCaptureMove != null && leftCaptureMove.piece && leftCaptureMove.piece.PieceColor != turn) ValidMoves.push(leftCaptureMove)
        if (rightCaptureMove != null && rightCaptureMove.piece && rightCaptureMove.piece.PieceColor != turn) ValidMoves.push(rightCaptureMove);
        return ValidMoves;
    }


    getValidMoves(board, square, turn) {
        let ValidMoves = [];
        this.currentSquare = square;
        let file = square.getLocation().getFile();
        let rank = square.getLocation().getRank();

        let OneStepMove = this.OneStep(file, rank, turn, board);
        let TwoStepMove = this.TwoStep(file, rank, turn, board);
        let leftCaptureMove = this.leftStep(file, rank, turn, board);
        let rightCaptureMove = this.rightStep(file, rank, turn, board);


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