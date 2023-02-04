import adder from "./app.js";

function inputs(element, label, name, type) {
  let div = document.createElement("div");
  let l = document.createElement("label");
  let input = document.createElement(element);
  div.classList.add("mb-2", "text-secondary");
  l.innerText = label;
  l.classList.add("form-label", "m-1");
  l.setAttribute("for", name);
  input.setAttribute("name", name);
  input.setAttribute("id", name);
  input.setAttribute("type", type);
  if (element === "textarea") {
  }
  input.classList.add("form-control");
  div.appendChild(l);
  div.appendChild(input);
  return div;
}

function requiredInputs() {
  let reqInptDiv = document.createElement("div");
  reqInptDiv.classList.add("req_inpt", "p-2");
  let Fullname = inputs("input", "Full name ", "fullname", "text");
  let image = inputs("input", "Upload Image", "uploadimage", "file");
  let ocupation = inputs("input", "Ocupation", "ocupation", "text");
  let phone = inputs("input", "Phone", "phonenumber", "text");
  let email = inputs("input", "Email", "email", "email");
  let address = inputs("input", "Address", "address", "text");
  let description = inputs("textarea", "Decription", "description", "");
  let div1 = document.createElement("div");
  div1.classList.add("d-flex", "justify-content-between");
  div1.append(image, Fullname);
  let div2 = document.createElement("div");
  div2.classList.add("d-flex", "justify-content-between");
  div2.append(ocupation, phone);
  let div3 = document.createElement("div");
  div3.classList.add("d-flex", "justify-content-between");
  div3.append(email, address);
  reqInptDiv.append(div1, div2, div3, description);
  return reqInptDiv;
}

function skillInpt() {
  let skillDiv = document.createElement("div");

  skillDiv.classList.add("workContanier", "skillsDiv", "w-100", "flex-wrap");
  let skillInpt = inputs("input", "Skills", "skills", "text");
  skillDiv.append(skillInpt);
  skillDiv.innerHTML += `<button class="btn btn-secondary  m-2" id="addSkill">Add Skill</button><div class="skills d-flex flex-wrap"></div>`;

  return skillDiv;
}

export { requiredInputs, inputs, skillInpt };
