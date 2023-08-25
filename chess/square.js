/*
         Square
        /      \
       /        \
SquareColor     Location
                /       \
               Rank      File 
                
               */

import { BlockWidth, BlockHeight } from "./index.js";


class SquareColor {

    constructor() {
        this.black = '#9f7119',
            this.white = '#debf83'
    }

    getSquareColor(i, j) {
        if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
            return this.black;
        } else {
            return this.white;
        }
    }
}



class Square {
    constructor(Location, SquareColor, context, piece) {
        this.Location = Location
        this.SquareColor = SquareColor
        this.isOccupied = false;
        this.width = BlockWidth
        this.context = context
        this.piece = piece
        this.height = BlockHeight
        this.selected = false;
        this.drawSquare()
        this.drawPiece();
    }

    reset() {
        this.isOccupied = false
    }

    getCurrentSquare() {
        return this;
    }

    setCurrentSquare(square) {
        this.currentPiece = square
    }

    drawSquare() {
        let f = this.Location.getFile()
        let r = this.Location.getRank()
        this.context.fillStyle = this.SquareColor
        this.context.fillRect(f * this.width, r * this.height, this.width, this.height)
    }

    DrawPieceSelectStroke() {
        if (!this.piece) return;
        let f = this.Location.getFile()
        let r = this.Location.getRank()
        this.selected = true;
        this.context.fillStyle = "#4272f5"
        // this.context.lineWidth = 5
        this.context.fillRect(f * 100, r * 100, this.width, this.height)
        this.drawPiece()
    }
    RemovePieceSelectStroke() {
        this.selected = false;
        let f = this.Location.getFile()
        let r = this.Location.getRank()
        this.context.clearRect(f * 100, r * 100, this.width, this.height)
        this.drawSquare()
        this.drawPiece()

    }

    drawPiece(piece) {
        if (!this.piece) {
            return;
        }
        this.isOccupied = true;
        this.context.font = '95px sans-serif'
        this.context.fillStyle = this.selectPieceColor(piece)
        this.context.textAlign = 'center'
        this.context.textBaseline = 'middle'
        let f = this.Location.getFile();
        let r = this.Location.getRank();
        this.context.fillText(this.piece.PieceText, f * 100 + 50, 50 + r * 100)
    }

    selectPieceColor(piece) {
        return this.piece.PieceColor ? 'black' : 'white';
    }
    isOccupied() {
        return this.isOccupied;
    }

    setOccupied(occupied) {
        this.isOccupied = occupied
    }

    getLocation() {
        return this.Location;
    }
    getSquareColor() {
        return this.SquareColor;
    }

}

export { Square, SquareColor }