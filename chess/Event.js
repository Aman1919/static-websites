import { canvas, BlockHeight, BlockWidth } from "./index.js";
import { locationSquareMap } from "./Board.js";
import { Location } from "./Location.js";
import { state, pieceColor } from "./defs.js";
let PrevSelectedValidSquares = [];
let PrevSelectedSquare = null
let turn = pieceColor.LIGHT;

let p = document.getElementById('para');
console.log(state);



class event {
    IsDragging = false;
    SelectedSquare = null;

    OnClick(e) {
        this.deSelectPrevMoves()
        let square = this.GetSquare(e);

        let piece = square.piece
        if (!piece || piece.PieceColor != turn) return;

        square.Selected(true);

        let validMoves = piece.getValidMoves(state, square, turn);
        console.log(validMoves);
        this.select(validMoves);

        PrevSelectedSquare = square;
        PrevSelectedValidSquares = validMoves;
    }

    updateState() {
        let pf = PrevSelectedSquare.getLocation().getFile()
        let pr = PrevSelectedSquare.getLocation().getRank()
        let sr = this.SelectedSquare.getLocation().getRank()
        let sf = this.SelectedSquare.getLocation().getFile()
        let piece = state[pr][pf].piece;
        state[sr][sf].setCurrentSquare(piece)
        state[pr][pf].setCurrentSquare(null);
    }

    OnMouseUp(e) {
        if (!this.SelectedSquare || !this.IsDragging) return;
        e.preventDefault()
        let piece = PrevSelectedSquare.piece;
        // this.updateState();
        piece.makeMoves(this.SelectedSquare, PrevSelectedSquare);
        this.deSelectPrevMoves()
        turn = !turn ? pieceColor.DARK : pieceColor.LIGHT;

    }


    OnMouseMove(e) {
        if (!PrevSelectedSquare || !PrevSelectedValidSquares.length) return;
        this.IsDragging = true;
        let square = this.GetSquare(e);
        if (this.isValid(square)) {
            this.SelectedSquare = square;
        }
    }


    isValid(square) {
        let location = square.getLocation().getName();
        return PrevSelectedValidSquares.some(p => p.getLocation().getName() === location)
    }


    select(validMoves) {
        validMoves.forEach(moves => { moves.selectPieces(turn) })
    }

    deSelectPrevMoves() {
        if (!PrevSelectedSquare || !PrevSelectedSquare.isSelected()) return;
        PrevSelectedSquare.Selected(false);
        PrevSelectedSquare = null;
        this.SelectedSquare = null;
        this.IsDragging = false;
        PrevSelectedValidSquares.forEach(moves => {
            moves.reset();

        })
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









export { event }