import { requiredInputs } from "./inputs.js";
import workExprenience from "./allwork.js";
let root = document.getElementById("root");

window.onload = () => {
  let h1 = adder("h1", root, "h1  m-5 text-center", "Resume builder");
  let resumeDiv = adder("div", root, "resumeDiv bg-dark p-3 text-light", "");
  resumeDiv.append(requiredInputs(), workExprenience());
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
