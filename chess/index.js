import { Board } from "./Board.js";
import { event } from "./Event.js";
const canvas = document.querySelector('canvas')

canvas.width = Math.min(800, window.innerWidth * 0.9)
canvas.height = Math.min(800, window.innerWidth * 0.9)



let canvas_width = canvas.width
let canvas_height = canvas.height
let BlockWidth = canvas_width / 8
let BlockHeight = canvas_height / 8
let context = canvas.getContext('2d');

window.addEventListener('resize', () => {
    canvas_width = canvas.width = canvas.width = window.innerWidth * 0.9;
    canvas_height = canvas.height = window.innerHeight * 0.9;
    location.reload();
})


class Game {
    constructor() {
        this.Board = new Board(canvas_width, canvas_height, context, null)
    }

}


function main() {
    let game = new Game();
    let Movement = new event()
    let dragging = false;
    canvas.addEventListener('click', (e) => {
        e.preventDefault()
        Movement.OnClick(e);
    });
    canvas.addEventListener('mousemove', (e) => {
        e.preventDefault()
        Movement.OnMouseMove(e);

    });
    canvas.addEventListener('mousedown', (e) => {
        Movement.OnMouseUp(e);
    });

}

window.load = main()


export { BlockWidth, BlockHeight, canvas }