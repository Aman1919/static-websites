import GameInterface from "./gameInterface.js";
import Game from "./game.js";
import { context } from "./index.js";
export default class SuperGame extends GameInterface{
 current = null; 
        Onclick(e) {    
           const rect = canvas.getBoundingClientRect();
           const x = Math.floor((e.x - rect.x) / (this.blockWidth))
           const y = Math.floor((e.y - rect.y) / (this.blockHeight));
    
           if (this.state[y][x]==='O'||this.state[y][x]==='X') return;
        
                if (this.current) {
                this.CurrentMove(x, y, e)
                        return;
                } 
                
                const game = new Game(
                        x * this.blockWidth,
                        y*this.blockHeight
                        , this.blockWidth, this.blockHeight);
                this.current = game;
        }

        CurrentMove(x, y,e) {
                        let i = this.current.x / this.blockWidth;
                        let j = this.current.y / this.blockHeight
                        let rx = (i > 2) ? i % 3 : i,
                                ry = (j > 2) ? j % 3 : j;
                              
                        if (x !== rx || y !== ry) return;
                        let s = this.current.Onclick(e)
                        
                        if (s) {
                                
                                this.state[ry][rx] = s;
                                this.current = null;   
                                if (s === 'd') {
                                this.turn = 0;                               
                                        return
                                };
                                context.clearRect(x*this.blockWidth,y*this.blockHeight,this.blockWidth,this.blockHeight)
                                this.Draw();
                              this.drawOnClick(x, y);
                                let res= this.check();
                                if (res) {
                                        this.winner = res;
                                        document.getElementById('result').innerHTML = res + ' Wins ';
                                        document.getElementById('result').style.visibility = 'visible'
                                }
                                this.turn = 0;
                                return true;                                
                  }
                  
                        this.changeTurn();
                        
        }
        isValidMove(x,y) {
                let cx = this.current.x;
                let cy = this.current.y;
                return 
        }       
}