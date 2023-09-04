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
    isAlive() {

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
    makeMoves(SelectedSquare, PrevSelectedSquare) {
        this.currentSquare = SelectedSquare;

        SelectedSquare.setCurrentSquare(this);
        PrevSelectedSquare.setCurrentSquare(null);
    }
    getValidMoves(board, square) {

    }

}

export { Piece }