import { inputs } from "./inputs.js";
import adder from "./app.js";

function work(element, clas) {
  let onework = document.querySelectorAll(".onework");
  let div3 = document.createElement("div");
  div3.classList.add(clas);
  div3.innerHTML += `<h3>${element} ${onework.length} </h3>`;
  let position = inputs("input", "Position", "position", "text");
  let company = inputs("input", "Company", "company", "text");
  let jobDecription = inputs(
    "textarea",
    "Job decription",
    "job decription",
    "text"
  );
  let startDate = inputs("input", "Start Date", "startdate", "text");
  let enddate = inputs("input", "End Date", "enddate", "text");
  div3.append(position, company, jobDecription, startDate, enddate);
  return div3;
}

function workExprenience() {
  let div = document.createElement("div");
  div.classList.add("workContanier");
  let div2 = adder(
    "div",
    div,
    "d-flex justify-content-between align-items-center",
    `<h1>Work Exprenience</h1>`
  );
  let addSubdiv = adder(
    "div",
    div2,
    "",
    `<button class='btn btn-danger m-1'>-</button><button class='btn btn-warning m-1' id='add' onclick=${add()}>+</button>`
  );

  div.append(work("Work Exprenience", "onework"));

  return div;
}

function add() {
  console.log("nvlkad");
  //   let a = document.querySelector(".workContanier");
  //   a.append(work("Work Exprenience", "onework"));
}

export default workExprenience;
