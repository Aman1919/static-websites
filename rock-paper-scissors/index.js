window.addEventListener("load", Main);

function Main() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 500;
  canvas.style.background = "rgb(27,27,27)";
  let RockImg = document.querySelector("#rock");
  let ScissorsImg = document.querySelector("#scissors");
  let PaperImg = document.querySelector("#paper");
  const options = [RockImg, ScissorsImg, PaperImg];
  Move(options[0], context, 10, 10);
  Move(options[1], context, 10, 170);
  Move(options[2], context, 10, 330);
  canvas.addEventListener(
    "click",
    (event) => {
      let g = canvas.getBoundingClientRect();
      let userMove;

      if (event.clientX - g.left >= 10 && event.clientX - g.left <= 100) {
        if (event.clientY - g.top >= 10 && event.clientY - g.top < 151) {
          userMove = 0;
        } else if (
          event.clientY - g.top >= 170 &&
          event.clientY - g.top < 320
        ) {
          userMove = 1;
        } else if (
          event.clientY - g.top >= 330 &&
          event.clientY - g.top < 480
        ) {
          userMove = 2;
        }
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      let r = RandomMove();
      CheckTheWinner(context, userMove, r);
      Move(options[userMove], context, 50, canvas.height / 2 - 100);

      Move(options[r], context, canvas.width - 150, canvas.height / 2 - 100);
      let button = document.createElement("button");
      button.innerText = "Play Again ";
      let body = document.querySelector("body");
      body.appendChild(button);
      button.addEventListener("click", () => {
        window.location.href = "/";
      });
    },
    { once: true }
  );
}

function CheckTheWinner(context, userMove, ComputerMove) {
  if (userMove == ComputerMove) {
    TellResult(context, "It is a Draw !!");
    return;
  } else {
    if (userMove === 0) {
      if (ComputerMove === 1) {
        TellResult(context, "You win : )");
        return;
      } else {
        TellResult(context, "You Lose : (");
        return;
      }
    } else if (userMove === 1) {
      if (ComputerMove === 0) {
        TellResult(context, "You Lose : (");
        return;
      } else {
        TellResult(context, "You win : )");
        return;
      }
    } else if (userMove === 2) {
      if (ComputerMove === 0) {
        TellResult(context, "You lose : )");
        return;
      } else {
        TellResult(context, "You win : (");
        return;
      }
    }
  }
}

function TellResult(context, result) {
  context.font = "30px Arial";
  context.fillStyle = "white";
  context.fillText(result, 230, 100);
}

function Move(img, context, x, y) {
  context.drawImage(img, x, y, 100, 150);
}

function RandomMove() {
  let r = Math.floor(Math.random() * 3);
  return r;
}
