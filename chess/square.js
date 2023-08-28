/*
         Square
        /      \
       /        \
SquareColor     Location
                /       \
               Rank      File 
                
               */

import { BlockWidth, BlockHeight } from "./index.js";

const SquareColor = {
    DARKSQUARE: '#9f7119',
    LIGHTSQUARE: '#debf83',

    getSquareColor: (i, j) => {
        if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
            return SquareColor.DARKSQUARE;
        } else {
            return SquareColor.LIGHTSQUARE;
        }
    }

}

class Square {

    constructor(Location, context, piece) {
        this.Location = Location
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
        this.isOccupied = false;
        let f = this.Location.getFile()
        let r = this.Location.getRank()
        this.piece = null
        this.context.clearRect(f * 100, r * 100, this.width, this.height)
        this.drawSquare();

    }





    setCurrentSquare(piece) {
        this.piece = piece
        this.drawSquare()
        this.drawPiece()

    }

    drawSquare() {
        let f = this.Location.getFile()
        let r = this.Location.getRank()
        this.context.fillStyle = SquareColor.getSquareColor(f, r);
        this.context.globalAlpha = 1;
        this.context.fillRect(f * this.width, r * this.height, this.width, this.height)
    }


    getSelected() {
        let f = this.Location.getFile()
        let r = this.Location.getRank()
        this.selected = true;
        this.context.fillStyle = "black"

        this.context.globalAlpha = .5;
        this.context.fillRect(f * 100, r * 100, this.width, this.height)
        this.drawPiece()
    }

    DeSelectPiece() {
        this.selected = false;
        this.reset();

        this.drawPiece(this.piece)

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