import {
  ctx,
  canvas,
  BlockHeight,
  BlockWidth,
  DrawPieces,
  selectedBlock,
  turn,
} from "./index.js";
import { json } from "./DefaultPositions.js";

let isDragging = null;
let piece;
let selectedPieceIndex;
let MouseDown = (e) => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  let BlockX = Math.floor((e.x - rect.x) / 100);
  let BlockY = Math.floor((e.y - rect.y) / 100);
  console.log(BlockX + " " + BlockY);

  json.black.find(SelectingObject) || json.white.find(SelectingObject);

  // if (turn != piece.color) {
  // alert("It's " + 0 ? "white" : "Black" + "turn");
  // return;
  // }
  function SelectingObject(p, i) {
    if (p.col === BlockX && p.row === BlockY) {
      selectedPieceIndex = i;
      isDragging = true;
      console.log(i);
      return p;
    } else console.log("piece is not present at this coodrinates");
  }
};
function MouseUp(e) {
  if (!isDragging) {
    console.log("Select piece");
    return;
  }
  e.preventDefault();

  const rect = canvas.getBoundingClientRect();
  let BlockX = Math.floor((e.x - rect.x) / 100);
  let BlockY = Math.floor((e.y - rect.y) / 100);
  if (!turn) {
    json.white[selectedPieceIndex].row = BlockY;
    json.white[selectedPieceIndex].col = BlockX;
  } else {
    json.black[selectedPieceIndex].row = BlockY;
    json.black[selectedPieceIndex].col = BlockX;
  }
  // turn = !turn;
  isDragging = false;
  selectedPieceIndex = null;
  DrawPieces();
  return !turn;
}
export { MouseDown, MouseUp };
