// diff  btw append it takes both string and it doesn't return any value but node object but appendChild takes only node obj and return the node object
let contanier = document.getElementById("contanier");

let h1 = adder(contanier, "h1", "header", "TO DO List");
let content = adder(contanier, "div", "content", "");
let inptDiv = adder(content, "div", "inptDiv", "");
inptDiv.setAttribute["required"];
let inpt = adder(inptDiv, "input", "inpt", "inpt");
let btn = adder(inptDiv, "button", "submit", "Add Task");
let listEl = adder(content, "div", "list", "<h2>Tasks to do</h2>");
let dele = document.querySelectorAll("button.delete");
let tasks = [];

btn.addEventListener("click", submit);
function submit() {
  if (inpt.value === "") {
    alert("enter Some thing");
  } else {
    tasks.push(inpt.value);
    task(tasks[tasks.length - 1]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // task(inpt.value);
    console.log(tasks);
    console.log(dele);

    inpt.value = "";
  }
}

function task(t) {
  let listEl = document.querySelector(".list");
  let taskel = adder(listEl, "div", "task", "");
  let taskInpt = adder(taskel, "input", "inpt", "");
  taskInpt.setAttribute("readonly", "true");
  taskInpt.value = t;
  let deletetask = adder(taskel, "button", "delete", "Delete");
  deletetask.addEventListener("click", (e) => {
    listEl.removeChild(taskel);
  });
}

function adder(parentelment, element, c, html) {
  let el = document.createElement(element);
  el.innerHTML = html;
  el.classList.add(c);
  return parentelment.appendChild(el);
}
