import { Board } from "./Board.js";
import { Drag, event } from "./Event.js";
const canvas = document.querySelector('canvas')

canvas.width = Math.min(800, window.innerWidth * 0.9)
canvas.height = Math.min(800, window.innerWidth * 0.9)



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
    let Movement = new event()
    canvas.addEventListener('drag', Drag);

    canvas.addEventListener('click', (e) => {
        e.preventDefault()
        Movement.Action(e);
    });

    // canvas.addEventListener('mouseup', (e) => {
    //     e.preventDefault()
    //     console.log('up');
    //     Movement.MakeMove(e);
    // });
}

window.load = main()


export { BlockWidth, BlockHeight, canvas }