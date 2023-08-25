import { Pawn } from "./pawn.js";
import { King } from "./king.js";
import { Rook } from "./rook.js";
import { Knight } from "./knight.js";
import { Bishop } from "./bishop.js";
import { Queen } from "./queen.js";
// import { Location } from "../Location.js";
import { File, pieceColor } from "../defs.js";


class PieceFactory {
    getPieces() {
        const pieces = new Map();
        //Rooks
        pieces.set("A0", new Rook(pieceColor.LIGHT))
        pieces.set("H0", new Rook(pieceColor.LIGHT))
        pieces.set("A7", new Rook(pieceColor.DARK))
        pieces.set("H7", new Rook(pieceColor.DARK))

        //Knights
        pieces.set("B0", new Knight(pieceColor.LIGHT))
        pieces.set("G0", new Knight(pieceColor.LIGHT))
        pieces.set("B7", new Knight(pieceColor.DARK))
        pieces.set("G7", new Knight(pieceColor.DARK))

        //Bishop
        pieces.set("C0", new Bishop(pieceColor.LIGHT))
        pieces.set("F0", new Bishop(pieceColor.LIGHT))
        pieces.set("C7", new Bishop(pieceColor.DARK))
        pieces.set("F7", new Bishop(pieceColor.DARK))

        //Queens
        pieces.set("D0", new Queen(pieceColor.LIGHT))
        pieces.set("D7", new Queen(pieceColor.DARK))

        //kings
        pieces.set("E0", new King(pieceColor.LIGHT))
        pieces.set("E7", new King(pieceColor.DARK))
        let FileKeys = Object.keys(File)
        //Pawns
        for (let i = 0; i < FileKeys.length; i++) {
            pieces.set(FileKeys[i] + "1", new Pawn(pieceColor.LIGHT))
            pieces.set(FileKeys[i] + "6", new Pawn(pieceColor.DARK))
        }


        return pieces;

    }
}

export { PieceFactory }