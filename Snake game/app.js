import {
  update as snakeUpdate,
  draw as snakeDraw,
  snake_speed,
  sc,
} from "./snake.js";
import { update as foodUpdate, draw as foodDraw } from "./food.js";

const canvas = document.getElementById("canvas");
let score = document.getElementById("score");
let newSegments = 0;
let lastTime = 0;
let gameOver = false;

score.innerText = sc;

function main(currentTime) {
  if (gameOver) {
    if (confirm("You Lost . Press ok to restart.")) {
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsLastRender = (currentTime - lastTime) / 1000; //this is getting the no. of seconds btw the last and current frame and by this we can play with the speed of the snake
  if (secondsLastRender < 1 / snake_speed) {
    //controlling the speed of the snake if secondslastRender is less then 1/snakeSpeed  no need to count that frame and get out
    return;
  }
  lastTime = currentTime;

  update();
  draw();
  checkgame();
}
document.getElementById("start").addEventListener("click", () => {
  window.requestAnimationFrame(main);
});

function update() {
  snakeUpdate();
  foodUpdate();
}
function draw() {
  canvas.innerHTML = "";
  snakeDraw(canvas);
  foodDraw(canvas);
}

function checkgame() {
  gameOver = outsideGrid() || snakeIntersection();
}
function outsideGrid(position) {
  return position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21;
}
