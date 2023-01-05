import { onsnake, expandsnake } from "./snake.js";
let food = { x: 10, y: 5 };

const Expansion_rate = 1; // this for how many snake segments will  increase after snake eats the food

export function update() {
  if (onsnake(food)) {
    expandsnake(Expansion_rate);
    let a = randomfoodPos();
    food = { x: a.x, y: a.y };
  }
}

export function draw(canvas) {
  // draws the food
  const createFood = document.createElement("div");
  createFood.style.gridRowStart = food.y;
  createFood.style.gridColumnStart = food.x;
  createFood.classList.add("food");
  canvas.appendChild(createFood);
}

function randomfoodPos() {
  let newfoodPos;
  while (newfoodPos == null || onsnake(newfoodPos)) {
    newfoodPos = randomGridposition();
  }
  //finding random position for the food
  return newfoodPos;
}

function randomGridposition() {
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  };
}
