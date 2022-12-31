let add = document.getElementById("plus");
let count = document.getElementById("count");
let neg = document.getElementById("neg");

add.addEventListener("click", () => {
  count.innerText++;
});
neg.addEventListener("click", () => {
  count.innerText--;
});
