class Piece {
    constructor(PieceColor, name, currentSquare) {
        this.name = name
        this.PieceColor = PieceColor;
        this.currentSquare = currentSquare;
    }

    getPieceColor() {
        return this.PieceColor;
    }
    getName() {
        return this.name
    }
    getCurrentSquare() {
        return this.currentSquare
    }
    setCurrentSquare(currentSquare) {
        this.currentSquare = currentSquare
    }
    getValidMoves(board) {
        return null
    }
    getValidMoves(board, square) {

    }
    makeMoves(square) {
    }

}

export { Piece }