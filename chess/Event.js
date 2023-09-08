import { canvas, BlockHeight, BlockWidth } from "./index.js";
import { AllPieces, locationSquareMap } from "./Board.js";
import { Location } from "./Location.js";
import { state, pieceColor } from "./defs.js";
import { ChessEngine } from "./chessEngine.js";

let PrevSelectedValidSquares = [];
let PrevSelectedSquare = null
let turn = pieceColor.LIGHT;

let p = document.getElementById('para');




class event {
    IsDragging = false;
    SelectedSquare = null;
    ChessEngine = new ChessEngine()
    CheckMate = false;
    OnClick(e) {
        this.deSelectPrevMoves()
        let square = this.GetSquare(e);

        let piece = square.piece
        if (!piece || piece.PieceColor != turn) return;

        square.Selected(true);
        let validMoves = piece.getValidMoves(state, square, turn);

        let checkvalidMoves = this.CheckValidMoves(validMoves, square);


        this.SelectedSquare = null;
        this.IsDragging = false;;
        this.select(checkvalidMoves);

        PrevSelectedSquare = square;
        PrevSelectedValidSquares = checkvalidMoves;
    }

    CheckValidMoves(validMoves, square) {
        let checkvalidMoves = [];
        let piece = square.piece
        for (let i = 0; i < validMoves.length; i++) {
            PrevSelectedSquare = square;
            this.SelectedSquare = validMoves[i];
            let spiece = this.SelectedSquare.piece;
            piece.makeMoves(this.SelectedSquare, PrevSelectedSquare)

            if (!this.check()) {
                checkvalidMoves.push(validMoves[i])

            }


            piece.makeMoves(PrevSelectedSquare, this.SelectedSquare)
            if (spiece) this.SelectedSquare.setCurrentSquare(spiece);


        }
        PrevSelectedSquare = null;
        this.SelectedSquare = null;
        return checkvalidMoves
    }

    OnMouseUp(e) {
        if (!this.SelectedSquare || !this.IsDragging) return;
        e.preventDefault()
        let piece = PrevSelectedSquare.piece;

        piece.makeMoves(this.SelectedSquare, PrevSelectedSquare);
        this.deSelectPrevMoves()
        turn = !turn ? pieceColor.DARK : pieceColor.LIGHT;
        p.innerText = turn ? "Black's Turn" : "White's Turn"
        this.CheckWinner()
    }

    CheckWinner() {
        if (this.checkcheckmate()) {
            let allMoves = []
            AllPieces.forEach(p => {
                if (p.PieceColor === turn) {
                    let vm = p.getValidMoves(state, p.currentSquare, turn);
                    let cm = this.CheckValidMoves(vm, p.currentSquare)
                    allMoves = [...allMoves, ...cm]
                }
            })
            console.log(allMoves);
            if (!allMoves.length) {
                alert(!turn ? 'White' : "black" + " is win")
            }
        }
    }
    checkcheckmate() {
        let king = this.searchKing();
        let Opponent = this.OpponentValidMoves()
        for (let j = 0; j < Opponent.length; j++) {
            if (king.getLocation().getName() === Opponent[j].getLocation().getName()) {
                return true;
            }
        }
    }
    searchKing() {
        let king;
        AllPieces.forEach(piece => {
            if (piece.PieceColor === turn && piece.getName() === 'King') {
                king = piece.currentSquare
            }
        })
        return king;
    }

    OpponentValidMoves() {
        let OpponentsValidMoves = [];

        AllPieces.forEach(piece => {
            if (piece.PieceColor == !turn) {
                let validMoves = piece.getValidMoves(state, piece.currentSquare, !turn);
                OpponentsValidMoves = [...OpponentsValidMoves, ...validMoves];
            }
        })

        return OpponentsValidMoves;
    }

    check() {
        let king = this.searchKing();
        let KingValidMoves = king.piece.getValidMoves(state, king, turn);
        let OpponentsValidMoves = this.OpponentValidMoves()
        if (this.abc(KingValidMoves, OpponentsValidMoves)) {
            this.CheckMate = true;
            console.log("check");
            return true
        }
        this.CheckMate = false;
        return false
    }

    abc(King, Opponent) {
        for (let i = 0; i < King.length; i++) {
            for (let j = 0; j < Opponent.length; j++) {
                if (King[i].getLocation().getName() === Opponent[j].getLocation().getName()) {
                    return true;
                }
            }
        }
        return false
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