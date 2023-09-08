import { Piece } from "./piece.js";
import { Pieces } from "../defs.js";

/**
 * file + , rank +
 * file + , rank -
 * file - , rank +
 * file - , rank - 
 */
class Bishop extends Piece {
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "Bishop";
        this.PieceText = this.selectPieceColor()
    }
    upRight(file, rank, board, turn) {
        // file + , rank +
        let ValidMove = [];
        while (++file < 8 && ++rank < 8) {
            let square = board[rank][file];
            if (!square.piece) {
                ValidMove.push(square);
            }
            else if (square.piece && turn != square.piece.PieceColor) {
                ValidMove.push(square);
                break
            }
            else {
                break;
            }

        }
        return ValidMove;
    }
    downRight(file, rank, board, turn) {
        // file + , rank -
        let ValidMove = [];
        while (++file < 8 && --rank >= 0) {
            let square = board[rank][file];
            if (!square.piece) {
                ValidMove.push(square);
            }
            else if (square.piece && turn != square.piece.PieceColor) {
                ValidMove.push(square);
                break
            }
            else {
                break;
            }

        }
        return ValidMove;

    }
    downLeft(file, rank, board, turn) {
        // file - , rank -
        let ValidMove = [];
        while (--file >= 0 && --rank >= 0) {
            let square = board[rank][file];
            if (!square.piece) {
                ValidMove.push(square);
            }
            else if (square.piece && turn != square.piece.PieceColor) {
                ValidMove.push(square);
                break
            }
            else {
                break;
            }

        }
        return ValidMove;

    }
    upLeft(file, rank, board, turn) {
        // file - , rank +
        let ValidMove = [];
        while (--file >= 0 && ++rank < 8) {
            let square = board[rank][file];
            if (!square.piece) {
                ValidMove.push(square);
            }
            else if (square.piece && turn != square.piece.PieceColor) {
                ValidMove.push(square);
                break
            }
            else {
                break;
            }

        }
        return ValidMove;

    }
    selectPieceColor() {
        return this.PieceColor ? Pieces.b : Pieces.B;
    }

    getValidMoves(board, square, turn) {

        let file = square.getLocation().getFile();
        let rank = square.getLocation().getRank();
        let upLeft = this.upLeft(file, rank, board, turn);
        let downLeft = this.downLeft(file, rank, board, turn);
        let upRight = this.upRight(file, rank, board, turn);
        let downRight = this.downRight(file, rank, board, turn);
        let validMoves = [...upLeft, ...upRight, ...downLeft, ...downRight]
        return validMoves

    }


}

export { Bishop };