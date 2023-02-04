import { inputs } from "./inputs.js";

function projects() {
  let div = document.createElement("div");
  div.classList.add("workContanier", "m-2");
  let project = inputs("input", "Project Title", "projecttitle", "text");
  let decription = inputs(
    "textarea",
    "Project Description",
    "projectdecription",
    "text"
  );
  div.innerHTML += `<h1>Projects</h1>`;
  div.append(project, decription);
  div.innerHTML += `<button class="btn btn-secondary">Add project link</button>`;
  return div;
}

export default projects;
