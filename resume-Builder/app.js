let form = document.getElementById("form");
let onlyinpt = document.getElementById("onlyinpt");
let work = document.getElementById("allWork");
let addWork = document.querySelectorAll("#work .add");
let AllWork = document.querySelectorAll("#work .postion");
let addEducation = document.querySelectorAll("#education .add");
let allEducation = document.querySelector("#alleducation");
let i = 1;

only();

function only() {
  onlyinpt.innerHTML += addOneTimeInpt("Upload image", "userimage", "file");
  onlyinpt.innerHTML += addOneTimeInpt("Full Name :", "fullname", "text");
  onlyinpt.innerHTML += addOneTimeInpt("Description", "description", "text");
  onlyinpt.innerHTML += addOneTimeInpt("Email", "email", "email");
  onlyinpt.innerHTML += addOneTimeInpt("Phone no. ", "phoneno", "text");
  onlyinpt.innerHTML += addOneTimeInpt("Address ", "address", "text");
  work.innerHTML += addWorkExperience("Work");
}

function addOneTimeInpt(Label, name, type) {
  return `<div class=""><label class="form-label" for=${name}>${Label}</label><input type=${type} name=${name} class="form-control"></div>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

addWork.forEach((element) => {
  element.addEventListener("click", (e) => {
    work.innerHTML += addWorkExperience("Work");
  });
});

addEducation.addEventListener("click", () => {
  allEducation.innerHTML += addWorkExperience("Education");
});

function addWorkExperience(title) {
  return ` 
          <h5>${title} ${i++}</h5> 
          <div class="postion m-2">
              <label for="postion">Position :</label>
              <div class="d-flex">
                <input
                  type="text"
                  class="form-control m-1"
                  placeholder="position"
                />

                <input
                  type="text"
                  class="form-control m-1"
                  placeholder="company"
                />
              </div>
              <div class="d-flex justify-content-between">
                ${addOneTimeInpt("Start Date :", "startdate", "date")}
                ${addOneTimeInpt("End Date :", "enddate", "date")}
              </div>
            </div>
`;
}
