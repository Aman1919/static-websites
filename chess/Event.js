import { canvas, BlockHeight, BlockWidth } from "./index.js";
import { locationSquareMap } from "./Board.js";
import { Location } from "./Location.js";
/* 
blockwidth=canvasWidth/8;
'' height =''height''

*/
let PrevSelectedSquare = null;

function SelectSquare(event) {
    event.preventDefault()
    const rect = canvas.getBoundingClientRect();
    let x = Math.floor((event.x - rect.x) / BlockWidth);
    let y = Math.floor((event.y - rect.y) / BlockHeight)

    // console.log('event.X :' + event.x + ' event.Y :' + event.y);
    // console.log('rect.X :' + rect.x + ' rect.Y :' + rect.y);
    let l = new Location(x, y);

    let square;
    locationSquareMap.forEach((value, key) => {
        if (key.getName() === l.getName()) {
            square = value;
            console.log(square);
            return;
        }
    })
    if (PrevSelectedSquare) PrevSelectedSquare.RemovePieceSelectStroke()
    square.DrawPieceSelectStroke()
    PrevSelectedSquare = square;
    console.log('X :' + x + ' Y :' + y);
}

function Drag() {


}

export { Drag, SelectSquare }