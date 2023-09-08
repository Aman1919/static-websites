import { Piece } from "./piece.js";
import { Pieces } from "../defs.js";
class King extends Piece {
    constructor(PieceColor) {
        super(PieceColor);
        this.name = "King";
        this.PieceText = this.selectPieceColor()

    }
    castle() {

    }
    selectPieceColor() {
        return this.PieceColor ? Pieces.k : Pieces.K;
    }
    validSquare(rank, file, board) {
        if (file >= 8 || file < 0 || rank < 0 || rank >= 8) return;
        return board[rank][file];
    }
    getValidMoves(board, square, turn) {
        let file = square.getLocation().getFile()
        let rank = square.getLocation().getRank()

        let squares = [this.validSquare(rank, file + 1, board), this.validSquare(rank, file - 1, board), this.validSquare(rank + 1, file, board), this.validSquare(rank - 1, file, board), this.validSquare(rank + 1, file + 1, board), this.validSquare(rank - 1, file - 1, board), this.validSquare(rank - 1, file + 1, board), this.validSquare(rank + 1, file - 1, board),];

        let validMove = squares.filter(move => {
            return (move && (!move.piece || (move.piece && move.piece.PieceColor != turn)))
        })
        return validMove
    }


}

export { King };