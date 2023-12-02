import Game from './game.js';
import SuperGame from './superEngine.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = Math.min(600,window.innerWidth*0.9);
canvas.height = Math.min(600,window.innerWidth*.9);
let blockWidth = canvas.width / 3;
let blockHeight = canvas.height / 3;


const AllPossibleMoves = [
  [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
  [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
  [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
  [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
  [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }],
  [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }],
  [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
  [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
  
]



function main() {
  let game; 
  const normalButton = document.getElementById('normal');
  const advanceButton = document.getElementById('advance')
  const buttonDiv = document.querySelector('#buttons');
  
  normalButton.addEventListener('click', () => {
    game = new Game(0, 0, canvas.width, canvas.height);
  buttonDiv.style.display ="none"
  })
  advanceButton.addEventListener('click', () => {
 game = new SuperGame(0, 0, canvas.width, canvas.height);
  buttonDiv.style.display ="none"
  
  })
  
canvas.addEventListener('click', (e) => {
  if (!game||game.winner.length) return;
    game.Onclick(e)
console.log('click');
});
}


window.addEventListener('resize', () => {
  
canvas.width = Math.min(600,window.innerWidth*0.9);
canvas.height = Math.min(600,window.innerHeight*.9);
blockWidth = canvas.width / 3;
blockHeight = canvas.height/3
  main();
})
main();

export {blockHeight,blockWidth,context,AllPossibleMoves,canvas}