const contanier = document.getElementById("contanier");
const title = adder(contanier, "h1", "header", "Calculator");
let op = ["+", "-", "/", "%", "C"];
const CalculatorDiv = adder(contanier, "div", "main", "");
const inpt = adder(CalculatorDiv, "input", "display", "");
const equalTo = adder(CalculatorDiv, "button", "equal", "=");

const innerDiv = adder(CalculatorDiv, "div", "valueDiv", "");
let first;
let second;
let sign;
const numberDiv = adder(innerDiv, "div", "numberDiv", "");
const operations = adder(innerDiv, "div", "operationDiv", "");
for (let i = 9; i >= 1; i--) {
  let a = adder(numberDiv, "input", "numkey");
  a.value = i;
  a.setAttribute("readonly", "true");
}
for (let o = 0; o < op.length; o++) {
  let a = adder(operations, "input", "numkey", op[o]);
  a.value = op[o];
  a.setAttribute("readonly", "true");
}
console.log(equalTo);
let num = document.querySelectorAll(" .numkey");

equalTo.addEventListener("click", (e) => {
  let v = inpt.value;
  inpt.value = eval(v);
  //eval() this function evaluates the expression on the string
});

num.forEach((n) => {
  n.addEventListener("click", (e) => {
    first = n.value;
    if (first == "C") {
      inpt.value = "";
      return;
    }
    inpt.value += first;
    console.log(first);
  });
});

function adder(parent, Element, clas, html) {
  let createElement = document.createElement(Element);
  createElement.innerHTML = html;
  createElement.classList.add(clas);
  return parent.appendChild(createElement);
}
