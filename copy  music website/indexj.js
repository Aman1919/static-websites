window.addEventListener("load", () => {
  const submit = document.getElementById("submit");
  //all input values
  const income_input = document.querySelector("#incomeInput");
  const expense_input = document.querySelector("#expenseInput");
  const income_note_input = document.querySelector("#noteincomeInput");
  const expense_note_input = document.querySelector("#noteexpenseInput");

  // declaring variables to the  all listed value column
  const income_col = document.getElementById("income-value");
  const income_note_col = document.getElementById("income-note-value");
  const expense_col = document.getElementById("expense-value");
  const expense_note_col = document.getElementById("expense-note-value");

  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //start form here
    //creating p tags when the user enter input
    const p_income = document.createElement("p");
    p_income.innerText = income_input.value;

    const p_income_note = document.createElement("p");
    p_income_note.innerText = income_note_input.value;

    const p_expense = document.createElement("p");
    p_expense.innerText = expense_input.value;

    const p_expense_note = document.createElement("p");
    p_expense_note.innerText = expense_note_input.value;

    //getting the input value inside the table
    income_col.appendChild(p_income);
    income_note_col.appendChild(p_income_note);
    expense_col.appendChild(p_expense);
    expense_note_col.appendChild(p_expense_note);

    //setting input value to nothing once a button is chicked
    income_input.value = "";
    income_note_input.value = "";
    expense_input.value = "";
    expense_note_input.value = "";
  });
});
