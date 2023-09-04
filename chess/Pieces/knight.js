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
    validSquare(file, rank, board) {
        if (file >= 8 || file < 0 || rank < 0 || rank >= 8) return;
        return board[file][rank];
    }
    getValidMoves(board, square, turn) {
        let file = square.getLocation().getFile()
        let rank = square.getLocation().getRank()
        let squares = [this.validSquare(rank + 1, file + 2, board), this.validSquare(rank - 1, file + 2, board), this.validSquare(rank + 1, file - 2, board), this.validSquare(rank - 1, file - 2, board), this.validSquare(rank + 2, file + 1, board), this.validSquare(rank + 2, file - 1, board), this.validSquare(rank - 2, file + 1, board), this.validSquare(rank - 2, file - 1, board),];

        let validMove = squares.filter(move => {
            return (move && (!move.piece || (move.piece && move.piece.PieceColor != turn)))
        })
        return validMove
    }

}

export { Knight };