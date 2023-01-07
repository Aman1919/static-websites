const contanier = document.getElementById("contanier");
const title = adder(contanier, "h1", "header", "Calculator");
let op = ["+", "-", "/", "%", "C"];
const CalculatorDiv = adder(contanier, "div", "main", "");
const inpt = adder(CalculatorDiv, "input", "display", "");
const equalTo = adder(CalculatorDiv, "button", "equal", "=");

const innerDiv = adder(CalculatorDiv, "div", "valueDiv", "");

const numberDiv = adder(innerDiv, "div", "numberDiv", "");
const operations = adder(innerDiv, "div", "operationDiv", "");
for (let i = 9; i >= 1; i--) {
  let a = adder(numberDiv, "input", "numkey");
  a.setAttribute("value", i);
  a.setAttribute("readonly", "true");
}
for (let o = 0; o < op.length; o++) {
  adder(operations, "p", "numkey", op[o]);
}
console.log(equalTo);
let num = document.querySelectorAll(".numberDiv .numkey");

equalTo.addEventListener("click", (e) => {
  alert("fd");
});

num.forEach((n) => {
  n.addEventListener("click", (e) => {
    console.log(n.value);
  });
});

function adder(parent, Element, clas, html) {
  let createElement = document.createElement(Element);
  createElement.innerHTML = html;
  createElement.classList.add(clas);
  return parent.appendChild(createElement);
}
