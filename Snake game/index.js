let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let CanvasWidth = canvas.width;
let CanvasHeight = canvas.height;

let titleCount = 20;
let tileSize = CanvasWidth / titleCount - 2;

let speed = 7;
let headX = 10;
let headY = 10;
let foodX = 5;
let foodY = 5;

let xVelocity = 0;
let yVelocity = 0;

let Score = 0;
const SnakeParts = [];
let tailLength = 0;
let score = 0;

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function DrawGame() {
  ChangeSnakePosition();
  if (isGameOver()) {
    context.fillStyle = "white";
    context.font = "50px Verdana";
    context.fillText("Game Over ! ", canvas.width / 7, CanvasHeight / 2);

    return;
  }
  clearScreen();
  DrawSnake();
  CheckCollision();
  DrawScore();
  DrawFood();
  setTimeout(DrawGame, 1000 / speed);
}

function clearScreen() {
  context.fillStyle = "black";
  context.fillRect(0, 0, CanvasWidth, CanvasHeight);
}

function isGameOver() {
  //Checks if snake contacted with canvas walls , or with him self
  let gameover = false;

  // if (yVelocity === 0 && xVelocity === 0) return false;

  if (headX < 0 || headY < 0 || headX === titleCount || headY === titleCount) {
    gameover = true;
  }

  for (let i = 0; i < SnakeParts.length; i++) {
    let part = SnakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameover = true;
      break;
    }
  }

  return gameover;
}

function DrawSnake() {
  context.fillStyle = "orange";
  for (let i = 0; i < SnakeParts.length; i++) {
    let part = SnakeParts[i];
    context.fillRect(
      part.x * titleCount,
      part.y * titleCount,
      tileSize,
      tileSize
    ); //  by *titleCount canvas is divided into grid and we can our snake in that
  }

  SnakeParts.push(new SnakePart(headX, headY));
  if (SnakeParts.length > tailLength) {
    SnakeParts.shift();
  }
  // this part still in little confusion . seems like it helps in the movement of the snake and this function  Draws snake
  context.fillStyle = "white";
  context.fillRect(headX * titleCount, headY * titleCount, tileSize, tileSize);
}

function DrawFood() {
  //Draws food
  context.fillStyle = "red";
  context.fillRect(foodX * titleCount, foodY * titleCount, tileSize, tileSize);
}

function DrawScore() {
  //Draws the score
  context.fillStyle = "white";
  context.font = "11px Verdana";
  context.fillText("Score : " + score, canvas.width - 55, 12);
}

function ChangeSnakePosition() {
  //changes the snake position if xVelocity,yVelocity changes by arrow keys
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}

function CheckCollision() {
  if (foodX === headX && foodY === headY) {
    foodX = Math.floor(Math.random() * titleCount);
    foodY = Math.floor(Math.random() * titleCount);
    tailLength++;
    score++;
  }
  //check if snake collided with the food , then updating food coordinates , snakelength, and score
}

document.body.addEventListener("keydown", keyDown);
//for moving the snake
function keyDown(event) {
  let e = event.key;
  if (e === "ArrowUp") {
    if (yVelocity === 1) return;
    yVelocity = -1;
    xVelocity = 0;
  } else if (e === "ArrowDown") {
    if (yVelocity === -1) return;
    yVelocity = 1;
    xVelocity = 0;
  } else if (e === "ArrowLeft") {
    if (xVelocity === 1) return;
    yVelocity = 0;
    xVelocity = -1;
  } else if (e === "ArrowRight") {
    if (xVelocity === -1) return;
    yVelocity = 0;
    xVelocity = 1;
  }
}

DrawGame();
