import { Square, SquareColor } from "./square.js";
import { Location } from "./Location.js";
import { PieceFactory } from "./Pieces/pieceFactory.js";


let locationSquareMap = new Map();


class Board {
    constructor(width, height, context, state) {
        this.width = width;
        this.height = height
        this.context = context
        this.state = state;
        this.pieces = new PieceFactory().getPieces()
        console.log(this.pieces);

        for (let file = 0; file < 8; file++) {
            for (let rank = 0; rank < 8; rank++) {
                let l = new Location(file, rank)
                let locationName = l.getName()
                let sqc = new SquareColor().getSquareColor(file, rank);
                let Piece = this.pieces.get(locationName)

                let s = new Square(l, sqc, this.context, Piece);
                locationSquareMap.set(s.getLocation(), s)
            }
        }
    }
    getLocationSquareMap() {
        return this.locationSquareMap
    }

}

export { Board, locationSquareMap }