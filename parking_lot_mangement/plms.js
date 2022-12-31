window.addEventListener("load", () => {
  const form = document.querySelector("#car-input-form");
  const input = document.querySelector(".input-box");
  const submit = document.querySelector("#submit-input");
  submit.addEventListener("click", (ab) => {
    ab.preventDefault();
    const input_box = input.value;
    if (!input_box) {
      alert("enter something");
      return;
    }
    //selecting the input fields
    //owner name
    const owner_input = document.querySelector("#owner-input");

    //car name
    const carname_input = document.querySelector("#car-name-input");

    const carnumber_input = document.querySelector("#carnumber-input");

    //Entry Date
    const entrydate = document.querySelector("#EntryTime-input");

    //exit date
    const ExitDate = document.querySelector("#ExitTime-input");
    const car_lists = document.getElementById("car-lists");

    if (entrydate.value > ExitDate.value) {
      alert("check the entry and exit timmings");
    } else {
      //arranged all the html elements
      const tbody = document.querySelector("#tableBody");
      const tr_car_list = document.createElement("tr");
      tbody.appendChild(tr_car_list);
      tr_car_list.innerHTML = `   <td>${owner_input.value}</td>
<td>${carname_input.value}</td>
<td>${carnumber_input.value}</td>
<td>${entrydate.value}</td>
<td>${ExitDate.value}</td>
<td><button class="delete" onclick="remove_row(this)">Delete</button></td>
`;
    }
    const inputs = document.querySelectorAll(".input-box");
    inputs.forEach((inp) => (inp.value = ""));
  });
});

//use a function to deleting the row
function remove_row(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i);
}

function searchBar() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-bar");
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
