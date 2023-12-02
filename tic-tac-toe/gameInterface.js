import {context,AllPossibleMoves} from "./index.js";


export default class GameInterface{
  constructor(x,y,width,height) {
          this.x = x;
          this.y = y;
          this.winner = '';
    this.width = width;
    this.height = height;
    this.turn = 0;
    this.blockWidth = this.width / 3;  
    this.blockHeight = this.height / 3;
    this.state = [[null, null, null], [null, null, null], [null, null, null]];
    this.Draw();
  }
  
  Draw() {
    let x = this.blockWidth, y = this.blockHeight;
    this.#Drawline(
      { x: x+this.x, y: this.y },
      { x: x+this.x, y: this.height+this.y });
    this.#Drawline(
      { x: x +this.x+ this.blockWidth, y: this.y },
      { x: x +this.x+ this.blockWidth, y: this.height +this.y});
    this.#Drawline(
      { x: this.x, y: y+this.y },
      { x: this.width+this.x, y: y+this.y });
    this.#Drawline(
      { x: this.x, y: y + this.blockHeight+this.y },
      { x: this.width+this.x, y: y + this.blockHeight+this.y });
  }
  
  #Drawline(start,end) {
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = 'black'
  
    context.moveTo(start.x, start.y)
    context.lineTo(end.x, end.y);
    context.stroke();
    context.closePath();
  }
  
  DrawCircle(x,y) {
    context.beginPath();
    context.strokeStyle = 'white'
    context.lineWidth = 5
    context.arc(x, y, this.blockWidth / (Math.PI), 0, 2 * Math.PI);
    context.stroke();
  }
  
  DrawCross(x, y) {
    const add = this.blockWidth/(Math.PI)
    this.#Drawline(
      { x: x, y: y },
      { x: x + add, y: y + add }
    )
    this.#Drawline(
      { x: x, y: y },
      { x: x - add, y: y - add }
    )
    this.#Drawline(
      { x: x, y: y },
      { x: x + add, y: y - add }
    )
    this.#Drawline(
      { x: x, y: y },
      { x: x - add, y: y + add }
    )
  }
  drawOnClick(x, y) {
    let X = (x * this.blockWidth) + this.blockWidth / 2;
      let Y = (y * this.blockHeight)+this.blockHeight/2
    if (this.turn) {
    this.DrawCross(X,Y)
    } else {
      this.DrawCircle(X,Y);
    }
  }

  check() {
    if (this.CheckWinner()) {
      this.winner =  this.turn ? 'X' : 'O'
      alert( this.turn ? 'X' : 'O' + ' Winns')
    return this.turn ? 'X' : 'O'
    }
    if (this.CheckDraw()) {
      alert('its a Draw')
    return 'd'
    }
  }
  
  changeTurn() {
    this.turn = (this.turn) ? 0 : 1;
  }
  
  CheckWinner() {
  return AllPossibleMoves.some(move => {
   return move.every((block) => (
      this.state[block.y][block.x] === 'O'
    ))
      ||
      move.every((block) => (
      this.state[block.y][block.x] === 'X'
      ))
    })
  }
  
  CheckDraw() {
    let state = [...this.state];
   return state.every(row => {
      return row.every(r => r !== null);
    })
    
  }
  
}