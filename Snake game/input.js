let inputdirection = { x: 1, y: 0 };
let lastInptDirec = { x: 0, y: 0 };
//we split the canvas in grid
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      if (lastInptDirec.x !== 0) {
        //this for snake shouldn't move in opposite direction
        break;
      }
      left();
      break;
    case "ArrowUp":
      if (lastInptDirec.y !== 0) {
        break;
      }
      up();
      break;
    case "ArrowRight":
      if (lastInptDirec.x !== 0) {
        break;
      }
      right();
      break;
    case "ArrowDown":
      if (lastInptDirec.y !== 0) {
        break;
      }
      down();
      break;
  }
});

function left() {
  inputdirection = { x: -1, y: 0 };
}
function right() {
  inputdirection = { x: 1, y: 0 };
}
function up() {
  inputdirection = { x: 0, y: -1 };
}
function down() {
  inputdirection = { x: 0, y: 1 };
}
document.getElementById("left").addEventListener("click", left);
document.getElementById("right").addEventListener("click", right);
document.getElementById("up").addEventListener("click", up);
document.getElementById("down").addEventListener("click", down);

export function getInputDirection() {
  lastInptDirec = inputdirection; // taking last direction and setting it to the next snake segment
  return inputdirection;
}
