let covers = document.querySelectorAll(".book");

covers.forEach((cover) => {
  console.log(cover.offsetTop);
});
let i = 444;

window.addEventListener("scroll", change);

function change() {
  let s = window.scrollY;
  if (s < cal(0)) {
    document.body.style.background = "white";
  } else if (s > cal(0) && s < cal(1)) {
    document.body.style.background = "#00c1b5";
  } else if (s > cal(1) && s < cal(2)) {
    document.body.style.background = "#ff651a";
  } else if (s > cal(2) && s < cal(3)) {
    document.body.style.background = "#ffbe00";
  } else if (s > cal(3) && s < cal(4)) {
    document.body.style.background = "#1d3fbb";
  } else {
    document.body.style.background = "#e30512";
  }
  // i += 444;
}

function cal(num) {
  return window.innerHeight * num + window.innerHeight * 0.5;
}
