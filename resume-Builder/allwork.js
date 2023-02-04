import { inputs } from "./inputs.js";
import adder from "./app.js";

function work(element, clas, p, c) {
  let onework = document.querySelectorAll(".workContanier .onework");
  let div3 = document.createElement("div");
  div3.classList.add(clas, "w-50");
  div3.innerHTML += `<h4>${element} ${onework.length + 1} </h4>`;
  let position = inputs("input", p, p, "text");
  let company = inputs("input", c, c, "text");
  let jobDecription = inputs("textarea", "decription", "decription", "text");

  let startDate = inputs("input", "Start Date", "startdate", "date");
  let enddate = inputs("input", "End Date", "enddate", "date");
  let jobDiv = adder("div", div3, "d-flex justify-content-between", "");
  jobDiv.append(position, company);
  div3.append(jobDecription);
  let dateDiv = adder("div", div3, "d-flex justify-content-between", "");
  dateDiv.append(startDate, enddate);
  return div3;
}

function workExprenience(section, p, c) {
  let div = document.createElement("div");
  div.classList.add("workContanier", "d-flex", "flex-wrap");
  let div2 = adder(
    "div",
    div,
    "d-flex justify-content-between align-items-center d-block w-100 m-2",
    `<h1>${section}</h1>`
  );
  let addSubdiv = adder(
    "div",
    div2,
    "",
    `<button class='btn btn-danger m-1 remove'>-</button><button class='btn btn-warning m-1 add'>+</button>`
  );

  div.append(work(section, "onework", p, c));

  return div;
}

export { work, workExprenience };
