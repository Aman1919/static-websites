import { Square, SquareColor } from "./square.js";
import { Location } from "./Location.js";
import { PieceFactory } from "./Pieces/pieceFactory.js";
import { state } from "./defs.js";

let locationSquareMap = new Map();
let AllPieces = [];
let BlackKingsLocation, WhiteKingLocation;

class Board {
    constructor(width, height, context, state) {
        this.width = width;
        this.height = height
        this.context = context
        this.pieces = new PieceFactory().getPieces()
        console.log(AllPieces);
        for (let file = 0; file < 8; file++) {
            let rank = 0;
            while (rank < 8) {
                this.#setBoard(file, rank)
                rank++;
            }
        }
    }

    #setBoard(file, rank) {
        let l = new Location(file, rank)
        let locationName = l.getName()
        let Piece = this.pieces.get(locationName)
        let s = new Square(l, this.context, Piece);
        state[rank][file] = s || null;
        locationSquareMap.set(s.getLocation(), s)
        if (Piece) {
            Piece.setCurrentSquare(s);
            AllPieces.push(Piece);
            if (Piece.getName() === 'King') {
                if (Piece.PieceColor) {
                    BlackKingsLocation = s;
                } else {
                    WhiteKingLocation = s;
                }
            }
        }
    }


}

export { Board, locationSquareMap, state, AllPieces, BlackKingsLocation, WhiteKingLocation }