const Pieces = {
    K: '♔',
    Q: '♕',
    R: '♖',
    B: '♗',
    N: '♘',
    P: '♙',
    k: '♚',
    q: '♛',
    r: '♜',
    b: '♝',
    n: "♞",
    p: '♟'

}

let state = [[], [], [], [], [], [], [], []];


const pieceColor = {
    LIGHT: 0,
    DARK: 1
}


const File = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7

}

export { Pieces, File, pieceColor, state }