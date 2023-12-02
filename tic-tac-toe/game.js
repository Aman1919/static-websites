import { canvas } from "./index.js";
import GameInterface from "./gameInterface.js";
import { AllPossibleMoves } from "./index.js";
export default  class Game extends GameInterface{
  Onclick(e) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.x - rect.x) / (this.blockWidth))
    const y = Math.floor((e.y - rect.y) / (this.blockHeight));
    const rx = x > 2 ? (x % 3) : x, ry = y > 2 ? (y % 3) : y;
    console.log('click');
    if (this.state[ry][rx]) return;
    this.drawOnClick(x, y);
    
    console.log(ry, rx);
    this.state[ry][rx] = this.turn ? 'X' : 'O';
    let res = this.check()
    this.changeTurn()
    return res;
  }
  
}
