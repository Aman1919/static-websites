//getBoundingClientRect() gives width,height , position and x,y coordinates
const snakecon = document.getElementById("snake");
const food = document.getElementById("food");
const canvas = document.getElementById("canvas");
let rect = canvas.getBoundingClientRect(); //for canvas coordinates
let direction = "right";
let b = snakecon.getBoundingClientRect();
let score = document.getElementById("score");
let snake_div = document.querySelector(".snake-div");

let s = 0;
let time = 50;
window.addEventListener("resize", () => {
  rect = canvas.getBoundingClientRect();
});

console.log(b);
console.log(rect);
let y = b.y;
function move() {
  score.innerText = s;
  b = snakecon.getBoundingClientRect();
  let f_rect = food.getBoundingClientRect();
  check(f_rect, b);

  let x_coor = b.x;
  let y_coor = b.y - y;
  if (x_coor > rect.width) {
    x_coor = rect.left;
  }
  if (y_coor > rect.height - 40) {
    y_coor = rect.top - y;
  }
  if (x_coor < 0) {
    x_coor = rect.width;
  }
  if (y_coor < rect.top - y) {
    y_coor = rect.height - 40;
  }

  switch (direction) {
    case "left":
      snake_div[0].style.left = x_coor - 3 + "px";
      break;
    case "up":
      snake_div[0].style.top = y_coor - 3 + "px";
      break;
    case "right":
      snake_div[0].style.left = x_coor + 3 + "px";
      break;
    case "down":
      snake_div[0].style.top = y_coor + 3 + "px";
      break;
  }
}
document.addEventListener("keydown", (e) => {
  let key = e.keyCode;
  switch (key) {
    case 37:
      left();
      break;
    case 38:
      up();
      break;
    case 39:
      right();
      break;
    case 40:
      down();
      break;
  }
});

function left() {
  direction = "left";
}

function right() {
  direction = "right";
}
function up() {
  direction = "up";
}
function down() {
  direction = "down";
}
let c = snake_div[0].getBoundingClientRect();

function check(f_rect, c) {
  if (isCollide(f_rect, c)) {
    let rand_x = Math.floor(Math.random() * rect.width);
    let rand_y = Math.floor(Math.random() * rect.height);
    food.style.left = rand_x + "px";
    food.style.top = rand_y + "px";
    createSnakePart();
    s++;
    time -= 50;
  }
}

function isCollide(a, b) {
  return !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  );
}

function createSnakePart() {
  let create = document.createElement("div");
  create.classList.add("snake-div");
  snakecon.appendChild(create);
}
function start() {
  setInterval(move, time);
}
