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
        this.width = BlockWidth
        this.context = context
        this.piece = piece
        this.height = BlockHeight
        this.selected = false;
        this.drawSquare()
        this.drawPiece();
    }

    reset() {
        let f = this.Location.getFile()
        let r = this.Location.getRank()
        this.context.clearRect(f * this.width, r * this.height, this.width, this.height)
        this.drawSquare();
        this.drawPiece();

    }



    setCurrentSquare(piece) {
        this.piece = piece
        this.reset();

    }

    drawSquare() {
        let f = this.Location.getFile()
        let r = this.Location.getRank()
        this.context.fillStyle = SquareColor.getSquareColor(f, r);
        this.context.globalAlpha = 1;
        this.context.fillRect(f * this.width, r * this.height, this.width, this.height)
    }


    selectPieces(turn) {
        let f = this.Location.getFile()
        let r = this.Location.getRank()
        this.context.fillStyle = (this.piece && this.piece.PieceColor != turn) ? 'red' : 'yellow'

        this.context.globalAlpha = .2;
        this.context.fillRect(f * this.width, r * this.height, this.width, this.height)
    }





    drawPiece() {
        if (!this.piece) {
            return;
        }
        this.context.font = Math.min(this.height * .9, 95) + 'px sans-serif'
        this.context.fillStyle = this.selectPieceColor()
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle'
        let f = this.Location.getFile();
        let r = this.Location.getRank();
        this.context.fillText(this.piece.PieceText, f * this.width + 50, 50 + r * this.height)
    }



    selectPieceColor() {
        return this.piece.PieceColor ? 'black' : 'white';
    }
    isSelected() {
        return this.selected;
    }
    Selected(s) {
        this.selected = s

    }
    getLocation() {
        return this.Location;
    }
    getSquareColor() {
        return this.SquareColor;
    }

}


export { Square, SquareColor }