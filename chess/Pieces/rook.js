import { Piece } from "./piece.js";
import { Pieces } from "../defs.js";

class Rook extends Piece {
    castle = true;
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "Rook";
        this.PieceText = this.selectPieceColor()

    }
    selectPieceColor() {
        return this.PieceColor ? Pieces.r : Pieces.R;
    }
    HorizontalMoves(file, rank, turn, board) {
        let ValidMove = [];
        let i = file + 1;
        while (i < 8) {
            let square = board[rank][i];
            if (!square.piece) {
                ValidMove.push(square);
            } else if (square.piece && turn != square.piece.PieceColor) {
                ValidMove.push(square);
                break
            }
            else {
                break;
            }
            i++;
        }
        i = file - 1;
        while (i >= 0) {
            let square = board[rank][i];
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
            i--;
        }
        return ValidMove;
    }
    VerticalMoves(file, rank, turn, board) {

        let ValidMove = [];
        let i = rank + 1;
        while (i < 8) {
            let square = board[i][file];
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
            i++;
        }
        i = rank - 1;
        while (i >= 0) {
            let square = board[i][file];
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
            i--;
        }
        return ValidMove;
    }
    getValidMoves(board, square, turn) {
        let file = square.getLocation().getFile();
        let rank = square.getLocation().getRank();
        console.log(board);
        let h = this.HorizontalMoves(file, rank, turn, board)
        let v = this.VerticalMoves(file, rank, turn, board)
        let ValidMove = [...h, ...v];
        console.log(ValidMove);


        return ValidMove;
    }

}

export { Rook };