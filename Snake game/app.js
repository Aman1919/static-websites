const snakecon = document.getElementById("snake");
const food = document.getElementById("food");
const canvas = document.getElementById("canvas");
let rect = canvas.getBoundingClientRect();
let direction = "right";
let b = snakecon.getBoundingClientRect();
console.log(b);
console.log(rect);

function move() {
  let b = snakecon.getBoundingClientRect();
  let x_coor = b.x;
  let y_coor = b.y;
  if (x_coor > rect.width) {
    x_coor = rect.left;
  }
  if (y_coor > rect.height) {
    y_coor = rect.top;
  }
  if (x_coor < 0) {
    x_coor = rect.width;
  }
  if (y_coor < 0) {
    y_coor = rect.height;
  }
  switch (direction) {
    case "left":
      snakecon.style.left = x_coor - 10 + "px";
      break;
    case "up":
      snakecon.style.top = y_coor - 1 + "px";
      break;
    case "right":
      snakecon.style.left = x_coor + 10 + "px";
      break;
    case "down":
      snakecon.style.top = y_coor + 1 + "px";
      break;
  }
}
document.addEventListener("keydown", (e) => {
  let key = e.keyCode;
  switch (key) {
    case 37:
      direction = "left";
      break;
    case 38:
      direction = "up";
      break;
    case 39:
      direction = "right";
      break;
    case 40:
      direction = "down";
      break;
  }
  console.log(direction);
});
function start() {
  setInterval(move, 300);
}
