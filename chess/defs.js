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
// let state = [
//     [r, n, b, q, k, b, n, r],
//     [p, p, p, p, p, p, p, p],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     [P, P, P, P, P, P, P, P],
//     [R, N, B, Q, K, B, N, R],


// ]
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

export { Pieces, File, pieceColor }