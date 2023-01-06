// Mostly I am making the website with javascirpt for practicing
// i have made a adder function so that i can reuse that it has paramerters like this adder(parentElement,childElement,element,Class,its innerHtml)

let contanier = document.getElementById("contanier");

let h1 = adder(contanier, "h1", "header", "TO DO List");
let content = adder(contanier, "div", "content", "");
let inptDiv = adder(content, "div", "inptDiv", "");
inptDiv.setAttribute["required"];
let inpt = adder(inptDiv, "input", "inpt", "inpt");
let btn = adder(inptDiv, "button", "submit", "Add Task");
let listEl = adder(content, "div", "list", "<h2>Tasks to do</h2>");
let tasks = [];

let ta = JSON.parse(localStorage.getItem("tasks")); //Every time the page reloads it is getting tasks from the localstorage

if (ta === null) {
  //if the list is empty
  tasks = [];
} else {
  tasks = ta;
}

btn.addEventListener("click", submit);
function submit() {
  if (inpt.value === "") {
    alert("enter Some thing");
  } else {
    tasks.push(inpt.value);
    localStorage.setItem("tasks", JSON.stringify(tasks)); //Updating every time the localStorage after clicking

    inpt.value = "";
  }
  task();
}

task();

function task() {
  listEl.innerHTML = "";
  // Displaying the content of localstorage
  tasks.forEach((t, index) => {
    let taskel = adder(listEl, "div", "task", "");
    let taskInpt = adder(taskel, "input", "inpt", "");
    taskInpt.setAttribute("readonly", "true");
    taskInpt.value = t;
    let deletetask = adder(taskel, "button", "delete", "Delete");
    deletetask.addEventListener("click", (e) => {
      listEl.removeChild(taskel);
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  });
}

function adder(parentelment, element, c, html) {
  let el = document.createElement(element);
  el.innerHTML = html;
  el.classList.add(c);
  return parentelment.appendChild(el);
}
