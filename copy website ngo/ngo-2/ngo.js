let menu = document.getElementById("menu-div");
let nav = document.getElementById("navlist");
let cross = document.getElementById("cross");
let navtag = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.style.display = "block";
  menu.style.display = "none";
  cross.style.display = "block";
  navtag.style.display = "flex";
});
cross.addEventListener("click", () => {
  nav.style.display = "none";
  menu.style.display = "flex";
  cross.style.display = "none";
  navtag.style.display = "none";
});

/*slider functionality starts here*/

let slideindex = 1;
showslides(slideindex);
function plusslide(n) {
  showslides((slideindex += n));
}
function showslides(n) {
  let slide = document.getElementsByClassName("slide");
  console.log(slide.length);
  if (n > slide.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = slide.length;
  }
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideindex - 1].style.display = "flex";
}
