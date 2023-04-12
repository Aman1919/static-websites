let boxes = document.querySelectorAll(".box");
let CurrentUser = "cross";
let ResultMessage = document.querySelector("#result");
let AllPossibleCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box, i) => {
  box.addEventListener(
    "click",
    () => {
      box.classList.add(CurrentUser);
      if (CheckWinLoseDraw()) {
        box.removeEventListener("click", this);
      }
      if (CurrentUser == "cross") CurrentUser = "circle";
      else CurrentUser = "cross";
    },
    { once: true }
  );
});

function CheckWinLoseDraw() {
  if (CheckWin()) {
    let a = CurrentUser.toUpperCase();
    ResultMessage.innerHTML = a + " WINS ";
    CreatePlayAgainButton();
    return true;
  } else if (CheckDraw()) {
    ResultMessage.innerHTML = "ITS A DRAW !!";
    CreatePlayAgainButton();

    return true;
  }
}

function CheckWin() {
  /* The some() method returns true (and stops) if the function returns true for one of the array elements.
some will returns true if any of the combination matches it will continue in case of falses and every method  will iterate all indexes in combination and return false if any of them becomes false and continue in case of true;
*/

  return AllPossibleCombinations.some((combination) => {
    return combination.every((index) => {
      return boxes[index].classList.contains(CurrentUser);
    });
  });
}

function CheckDraw() {
  /* The every() method returns true if the function returns true for all elements.
   */
  return [...boxes].every((box) => {
    return box.classList.contains("cross") || box.classList.contains("circle");
  });
}

function CreatePlayAgainButton() {
  let PlayAgain = document.createElement("a");
  PlayAgain.href = "index.html";
  let body = document.querySelector("body");
  PlayAgain.innerText = "Play Again";
  body.append(PlayAgain);
}
