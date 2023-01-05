import { getInputDirection } from "./input.js";
export const snake_speed = 1; // per sec;

let snakeBody = [{ x: 11, y: 11 }];
let newsegments = 0;
export let sc = 0;
export function update() {
  addsegments();
  const direction = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += direction.x;
  snakeBody[0].y += direction.y;
}

export function draw(canvas) {
  snakeBody.forEach((segment) => {
    const createSnake = document.createElement("div");
    createSnake.style.gridRowStart = segment.y;
    createSnake.style.gridColumnStart = segment.x;
    createSnake.classList.add("snake-div");
    canvas.appendChild(createSnake);
  });
}
export function expandsnake(amount) {
  newsegments += amount;
}
export function onsnake(position) {
  return snakeBody.some((segment) => {
    return equalposition(segment, position);
    //this is checking if the position of any of the snake segment and food are equal
  });
}

export function equalposition(pos1, pos2) {
  sc++;
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addsegments() {
  for (let i = 0; i < newsegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    // this is adding a new snake segment after snake eats the food
  }
  newsegments = 0;
}
