import { Board } from "./Board.js";
import { Drag, SelectSquare } from "./Event.js";
const canvas = document.querySelector('canvas')
let canvas_width = canvas.width
let canvas_height = canvas.height
let BlockWidth = canvas_width / 8
let BlockHeight = canvas_height / 8
let context = canvas.getContext('2d');
class Game {
    constructor() {
        this.Board = new Board(canvas_width, canvas_height, context, null)
    }

}


function main() {
    let game = new Game();

    canvas.addEventListener('drag', Drag);
    canvas.addEventListener('click', SelectSquare);
    console.log(game);

}

window.load = main()


export { BlockWidth, BlockHeight, canvas }