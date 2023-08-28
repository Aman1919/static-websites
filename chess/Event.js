import { canvas, BlockHeight, BlockWidth } from "./index.js";
import { locationSquareMap } from "./Board.js";
import { Location } from "./Location.js";
import { state } from "./defs.js";
let PrevSelectedValidSquares = [];
let PrevSelectedSquare = null
let turn = 0;

let p = document.getElementById('para');

console.log(state);



class event {

    SelectSquare(square) {
        if (PrevSelectedValidSquares.length && PrevSelectedSquare) {


            PrevSelectedValidSquares.forEach(s => s.DeSelectPiece())
            // PrevSelectedSquare.DeSelectPiece()
            PrevSelectedSquare = null;
            PrevSelectedValidSquares = [];
        }
        if (!square.isOccupied) return;


        if (square.piece.getPieceColor() !== turn) {
            return;
        }

        let pieceValidMoves = square.piece.getValidMoves(state, square, turn)
        // square.getSelected()
        pieceValidMoves.forEach((s) => [
            s.getSelected()
        ])

        PrevSelectedSquare = square
        PrevSelectedValidSquares = pieceValidMoves;
    }
    Action(event) {
        let square = this.GetSquare(event);

        if (PrevSelectedSquare && this.isValid(square)) {
            this.MakeMove(square)
            this.DeSelectPrev()
        } else {
            this.SelectSquare(square);

        }

    }
    isValid(square) {
        let flag = false;
        PrevSelectedValidSquares.forEach((s) => {
            if (s.getLocation().getName() == square.getLocation().getName()) {
                flag = true;
            }
        })
        return flag
    }
    DeSelectPrev() {
        if (PrevSelectedValidSquares.length && PrevSelectedSquare) {
            PrevSelectedValidSquares.forEach(s => s.DeSelectPiece())
            PrevSelectedSquare.DeSelectPiece()
            PrevSelectedSquare = null;
            PrevSelectedValidSquares = [];
        }
    }

    MakeMove(square) {
        let index;
        PrevSelectedValidSquares.forEach((s, i) => {
            if (s.getLocation().getName() == square.getLocation().getName()) {
                index = i;
            }
        })

        let piece = PrevSelectedSquare.piece;
        PrevSelectedValidSquares.splice(index, 1)
        PrevSelectedSquare.reset();
        square.setCurrentSquare(piece);

        console.log(square);


    }

    GetSquare(event) {
        const rect = canvas.getBoundingClientRect();
        let file = Math.floor((event.clientX - rect.left) / BlockWidth);
        let rank = Math.floor((event.clientY - rect.top) / BlockHeight)

        let l = new Location(file, rank);

        let square = null;
        locationSquareMap.forEach((value, key) => {
            if (key.getName() === l.getName()) {
                square = value;
                return value
            }
        })
        return square;
    }


}







function Drag() {


}



export { Drag, event }