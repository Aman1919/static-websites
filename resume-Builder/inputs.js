function inputs(element, label, name, type) {
  let div = document.createElement("div");
  let l = document.createElement("label");
  let input = document.createElement(element);
  div.classList.add("mb-2", "text-secondary");
  l.innerText = label;
  l.classList.add("form-label");
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
  let image = inputs("input", "", "uploadimage", "file");
  let ocupation = inputs("input", "Ocupation", "ocupation", "text");
  let phone = inputs("input", "Phone", "phonenumber", "text");
  let email = inputs("input", "Email", "email", "email");
  let address = inputs("input", "Address", "address", "text");
  let description = inputs("textarea", "Decription", "description", "");

  reqInptDiv.append(
    image,
    Fullname,
    ocupation,
    phone,
    email,
    address,
    description
  );
  return reqInptDiv;
}

export { requiredInputs, inputs };
