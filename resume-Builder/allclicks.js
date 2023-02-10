import { data, workData, educationdata } from "./data.js";
function allClick() {
  document.querySelector("#AddSkill").addEventListener("click", () => {
    let skillinptVal = document.querySelector("input[name='skill']");
    let skillsDiv = document.querySelector(".skills");
    if (skillinptVal.value !== "") {
      skillsDiv.innerHTML += `<p class='m-2 btn btn-secondary'>${skillinptVal.value}</p>`;
      data.skills.push(skillinptVal.value);
      skillinptVal.value = "";
    }
  });

  document.querySelector(".addwork").addEventListener("click", () => {
    let allwork = document.querySelector(".allWorkExperience");
    data.workExperience.push(workData);
    console.log(data.workExperience);
    allwork.innerHTML += `
            <div class="border-top p-2
mt-2 border-secondary work">
              <div class="d-flex justify-content-between m-2">
                <div>
                  <label for="position" class="form-label text-secondary"
                    >Position</label
                  >
                  <input type="text" class="form-control" name="position" />
                </div>
                <div>
                  <label for="company" class="form-label text-secondary"
                    >Company</label
                  >
                  <input type="text" class="form-control" name="company" />
                </div>
              </div>
              <div class="d-flex justify-content-between m-2">
                <div>
                  <label for="startdate" class="form-label text-secondary"
                    >Start Date</label
                  >
                  <input type="date" class="form-control" name="startdate" />
                </div>
                <div>
                  <label for="enddate" class="form-label text-secondary"
                    >End Date</label
                  >
                  <input type="date" class="form-control" name="enddate" />
                </div>
              </div>
              <div>
                <label for="jobdescription" class="form-label text-secondary"
                  >Job Description</label
                >
                <textarea
                  name="jobdescription"
                  class="form-control"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>

`;
  });
  document.querySelector(".removework").addEventListener("click", () => {
    let allwork = document.querySelector(".allWorkExperience");
    allwork.removeChild(allwork.firstElementChild);
    data.workExperience.pop();
  });

  document.querySelector(".addEducation").addEventListener("click", () => {
    let alleducation = document.querySelector(".alleducation");
    data.education.push(educationdata);
    alleducation.innerHTML += `
            <div class="border-top p-2
mt-2 border-secondary work">
              <div class="d-flex justify-content-between m-2">
                <div>
                  <label for="school" class="form-label text-secondary"
                    >School/University</label
                  >
                  <input type="text" class="form-control" name="school" />
                </div>
                <div>
                  <label for="degree" class="form-label text-secondary"
                    >Degree/Class</label
                  >
                  <input type="text" class="form-control" name="degree" />
                </div>
              </div>
              <div class="d-flex justify-content-between m-2">
                <div>
                  <label for="startdate" class="form-label text-secondary"
                    >Start Date</label
                  >
                  <input type="date" class="form-control" name="startdate" />
                </div>
                <div>
                  <label for="enddate" class="form-label text-secondary"
                    >End Date</label
                  >
                  <input type="date" class="form-control" name="enddate" />
                </div>
              </div>
            </div>

`;
  });

  document.querySelector(".removeeducation").addEventListener("click", () => {
    let allwork = document.querySelector(".alleducation");
    allwork.removeChild(allwork.firstElementChild);
    data.education.pop();
  });

  document.querySelector("#download").addEventListener("click", () => {
    let img = document.querySelector("input[name='uploadimage']");
    let name = document.querySelector("input[name='fullname']");
    let email = document.querySelector("input[name='email']");
    let address = document.querySelector("input[name='address']");
    let occupation = document.querySelector("input[name='occupation']");
    let phone = document.querySelector("input[name='phone']");
    let yourDescription = document.querySelector(
      "textarea[name='yourdescription']"
    );
    data.RequiredInput.img = URL.createObjectURL(img.files[0]);

    data.RequiredInput.name = name.value;
    data.RequiredInput.address = address.value;
    data.RequiredInput.description = yourDescription.value;
    data.RequiredInput.phone = phone.value;
    data.RequiredInput.occupation = occupation.value;
    data.RequiredInput.email = email.value;

    let position = document.querySelectorAll("input[name='position']");
    let company = document.querySelectorAll("input[name='company']");
    let startDate = document.querySelectorAll(".work input[name='startdate']");
    let endate = document.querySelectorAll(".work input[name='enddate']");
    let jobdescription = document.querySelectorAll(
      "textarea[name='jobdescription']"
    );
    for (let i = 0; i < data.workExperience.length; i++) {
      data.workExperience[i].position = position[i].value;
      data.workExperience[i].company = company[i].value;
      data.workExperience[i].startDate = startDate[i].value;
      data.workExperience[i].description = jobdescription[i].value;
      data.workExperience[i].endate = endate[i].value;
    }

    let school = document.querySelectorAll("input[name='school']");
    let degree = document.querySelectorAll("input[name='degree']");
    let educationStartDate = document.querySelectorAll(
      ".education input[name='startdate']"
    );
    let educationEnddata = document.querySelectorAll(
      ".education input[name='enddate']"
    );

    for (let i = 0; i < data.education.length; i++) {
      data.education[i].school = school[i].value;
      data.education[i].degree = degree[i].value;
      data.education[i].startDate = educationStartDate[i].value;
      data.education[i].endate = educationEnddata[i].value;
    }
    console.log(position);
    console.log(data);
    let contanier = document.getElementById("root");
    contanier.innerHTML += resume(data);
    document.querySelector(".resumeDiv").style.display = "none";
    document.querySelector("#download").style.display = "none";

    document.querySelector(".print").addEventListener("click", () => {
      let temp = document.querySelector(".templete");
      setTimeout(() => {
        html2pdf(temp, {
          margin: [0, 2, 0, 2],
          filename: "resume.pdf",
          image: { type: "png", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "letter", orientation: "landscape" },
        });
      }, 100);
    });
  });

  function resume(data) {
    return `     
      <div class="templete">
      <div>
        <div
          class=" bg-dark align-items-center d-flex justify-content-between text-light"
        >
          <div class="m-5">
            <p class="h1 text-light">${data.RequiredInput.name}</p>
            <p class="h4 text-light">${data.RequiredInput.occupation}</p>
          </div>
          <img
            src=${data.RequiredInput.img}
            alt=""
          />
        </div>

        <div class="details p-5">
          <div class="row">
            <div class="col d-flex align-items-center">
              <ul class="list-unstyled">
                <li class="lead mb-2">Phone: ${data.RequiredInput.phone}</li>
                <li class="lead mb-2">Email: ${data.RequiredInput.email}</li>
                <li class="lead mb-2">Address: ${
                  data.RequiredInput.address
                }</li>
              </ul>
            </div>
            <div class="col">
              <h1>PROFILE</h1>
              <p class="lead">
       ${data.RequiredInput.description}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col skillResume">
              <h1>Skills</h1>
              <ul>
        ${getskills(data)}
              </ul>
            </div>
            <div class="col EducationResume">
              <h1>Education</h1>
          ${getEducation(data)}
            </div>
          </div>
 <div class="html2pdf__page-break"></div>
          <div class="row WorkResume" >
              <h1>Work Experience</h1>
              ${getwork(data)}
            
          </div>
        </div>
      </div>
    </div>
 <button class="btn btn-primary print">
print</button>
  </div>
`;
  }
}
function getskills(data) {
  let html = "";
  for (let i = 0; i < data.skills.length; i++) {
    html += `<li>${data.skills[i]}</li>`;
  }
  return html;
}

function getwork(data) {
  let html = "";
  for (let i = 0; i < data.workExperience.length; i++) {
    html += `
              <div class="job">
                <p class="lead">Position:${data.workExperience[i].position}</p>
                <p class="lead">Company : ${data.workExperience[i].company}</p>
                <p class="lead">${data.workExperience[i].startDate} to ${data.workExperience[i].enddate}</p>
                <p class="lead">
${data.workExperience[i].description}
                </p>
              </div>

`;
  }
  return html;
}
function getEducation(data) {
  let html = "";
  for (let i = 0; i < data.education.length; i++) {
    html += `
              <div class="eachEducation mt-3">
                <h3>University</h3>
                <p class="lead">${data.education[i].school}</p>
                <p class="lead">${data.education[i].startDate} to ${data.education.endate}</p>
              </div>

`;
  }
  return html;
}
export { allClick };
