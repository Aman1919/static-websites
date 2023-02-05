let workData = {
  position: "",
  company: "",
  description: "",
  startdate: "",
  enddate: "",
};
let educationdata = {
  school: "",
  degree: "",
  description: "",
  startdate: "",
  enddate: "",
};

const data = {
  RequiredInput: {
    img: "as",
    name: "Aman singh",
    occupation: "learner",
    phone: "",
    email: "",
    address: "",
    description: "",
  },
  workExperience: [workData],
  education: [educationdata],
  skills: [],
};

function EnterData() {
  let name = document.querySelector("input[name='fullname']").value;
  let uploadimage = document.querySelector("input[name='uploadimage']").value;
  let occupation = document.querySelector("input[name='ocupation']").value;
  let description = document.querySelector(
    "textarea[name='description']"
  ).value;
  let email = document.querySelector("input[name='email']").value;
  let phone = document.querySelector("input[name='phonenumber'").value;
  let address = document.querySelector("input[name='address']").value;

  data.RequiredInput.name = name;
  data.RequiredInput.img = uploadimage;
  data.RequiredInput.occupation = occupation;
  data.RequiredInput.email = email;
  data.RequiredInput.description = description;
  data.RequiredInput.phone = phone;
  data.RequiredInput.address = address;
  console.log(data);
}

export { data, EnterData };
