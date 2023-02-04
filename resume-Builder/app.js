import { requiredInputs, skillInpt } from "./inputs.js";
import { work, workExprenience } from "./allwork.js";
import projects from "./projects.js";
let root = document.getElementById("root");
window.onload = () => {
  let h1 = adder(
    "h1",
    root,
    "h1  p-4 mb-5 text-center text-light bg-dark",
    "Resume builder"
  );
  let resumeDiv = adder(
    "div",
    root,
    "resumeDiv d-flex flex-wrap bg-dark p-3 text-light",
    ""
  );
  let downloadbtn = adder(
    "button",
    root,
    "btn btn-dark m-2 p-2 ",
    "Download your Resume"
  );
  resumeDiv.append(
    requiredInputs(),
    workExprenience("Work Exprenience", "Postion", "Company"),
    workExprenience("Education", "School", "Degree"),
    skillInpt(),
    projects()
  );

  document.querySelectorAll(".add").forEach((e, i) => {
    e.addEventListener("click", () => {
      let a = document.getElementsByClassName("workContanier")[i];
      if (i == 0) {
        a.append(work("Work Exprenience", "onework", "Position", "Company"));
      } else {
        a.append(work("Education", "onework", "School", "Degree"));
      }
    });

    let skillbtn = document.getElementById("addSkill");
    skillbtn.addEventListener("click", () => {
      let inpt = document.querySelector("input[name='skills']");
      if (inpt.value === "") {
        return;
      }
      let skills = document.querySelector(".skills");
      let p = adder("p", skills, "bg-primary p-2 m-2", inpt.value);
      inpt.value = "";
    });
  });

  document.querySelectorAll(".remove").forEach((e, i) => {
    e.addEventListener("click", () => {
      let a = document.getElementsByClassName("workContanier")[i];
      a.removeChild(a.lastElementChild);
    });
  });
};

function adder(element, parentElement, clas, html) {
  let el = document.createElement(element);
  el.innerHTML = html;
  let a = "";
  for (let i = 0; i <= clas.length; i++) {
    if ((i === clas.length || clas[i] === " ") && a != "") {
      el.classList.add(a);
      a = "";
    } else if (clas[i] !== " ") {
      a += clas[i];
    }
  }
  return parentElement.appendChild(el);
}

export default adder;
