const budgetInput = document.getElementById("budget-amount");
const budgetSubmit = document.getElementById("budget-button");
const expenseDescriptionInput = document.getElementById("expense-description");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseSubmit = document.getElementById("expense-button");
const expenseList = document.getElementById("expense-list");
const clearSite = document.getElementById("clear-site");
const expenseDateInput = document.getElementById("expense-date");
const expenseCategoryInput = document.getElementById("expense-categories");

let budgetFinal = document.getElementById("final-budget");
let expensesFinal = document.getElementById("final-expenses");
let balanceFinal = document.getElementById("balance");

let myBudget = 0;
const myBudgetFromLocalStorage = localStorage.getItem("budget");
if (myBudgetFromLocalStorage) {
  myBudget = parseInt(myBudgetFromLocalStorage);
}
let myExpenses = [];
const myExpensesFromLocalStorage = localStorage.getItem("expenses");
if (myExpensesFromLocalStorage) {
  myExpenses = JSON.parse(myExpensesFromLocalStorage);
}
updateOutput();

/* save Budget input */
budgetSubmit.addEventListener("click", setBudget);

function validateAmountInput(inputField, inputFieldName) {
  if (inputField.value == "") {
    showToastMessage(
      "info",
      "Betrag eingeben",
      "Bitte " + inputFieldName + " angeben"
    );
    return false;
  }

  if (isNaN(inputField.value)) {
    showToastMessage("warning", "Betrag ungültig", "Bitte eine Zahl eingeben");
    return false;
  }

  if (inputField.value < 0) {
    showToastMessage("error", "Betrag negativ", "Der Betrag muss positiv sein");
    return false;
  }

  return true;
}

function setErrorForInput(inputField) {
  inputField.style.borderColor = "red";
}

function setBudget(event) {
  event.preventDefault();

  budgetInput.style.borderColor = "";

  if (validateAmountInput(budgetInput, "Budget") == false) {
    setErrorForInput(budgetInput);
    return false;
  }

  myBudget = parseInt(budgetInput.value);
  localStorage.setItem("budget", JSON.stringify(myBudget));

  console.log("myBudget", myBudget);

  updateOutput();
  clearInput();
}

/* generate Expense Array - user input */
expenseSubmit.addEventListener("click", addExpense);

function addExpense(event) {
  event.preventDefault();

  expenseDescriptionInput.style.borderColor = "";
  expenseAmountInput.style.borderColor = "";
  let inputHasErrors = false;

  if (expenseDescriptionInput.value == "") {
    showToastMessage(
      "warning",
      "Beschreibung ungültig",
      "Bitte geben Sie eine Beschreibung ein"
    );

    setErrorForInput(expenseDescriptionInput);
    inputHasErrors = true;
  }

  if (validateAmountInput(expenseAmountInput, "Ausgabe") == false) {
    setErrorForInput(expenseAmountInput);
    inputHasErrors = true;
  }

  if (expenseDateInput.value == "") {
    showToastMessage(
      "warning",
      "Datum fehlt",
      "Bitte geben Sie ein gültiges Datum ein"
    );

    setErrorForInput(expenseDateInput);
    inputHasErrors = true;
  }

  if (inputHasErrors) {
    return;
  }

  const description = expenseDescriptionInput.value;
  const amount = parseInt(expenseAmountInput.value);
  const date = expenseDateInput.value;
  const category = expenseCategoryInput.value;
  myExpenses.push({
    description: description,
    amount: amount,
    date: date,
    category: category,
  });

  localStorage.setItem("expenses", JSON.stringify(myExpenses));

  console.log("myExpeses", myExpenses);

  updateOutput();
  clearInput();
}

/**
 * Update Amounts (budget, expenses, amount left) in Results
 * Generate List Item in Expenses
 */
function updateOutput() {
  /* set sum for calculation to 0 */
  let sumExpense = 0;
  /* set List for next li empty */
  expenseList.innerHTML = "";

  /* sort Expenses by Date descending */
  myExpenses?.sort((a, b) => new Date(b.date) - new Date(a.date));

  /* calculate all expenses */
  myExpenses.forEach((expense) => {
    sumExpense += expense.amount;

    /* Generate Expense List Item */
    let expenseListItem = document.createElement("li");
    let formatedDate = new Date(expense.date);
    console.log(formatedDate.toLocaleDateString("de"));
    /* let createSpan = document.createElement("span");
    createSpan.setAttribute('id', 'output-category');
    console.log(createSpan); */
    expenseListItem.innerHTML =
      expense.category +
      " " +
      expense.description +
      ": " +
      expense.amount +
      " € – " +
      formatedDate.toLocaleDateString("de");
    expenseList.appendChild(expenseListItem);
  });

  console.log(sumExpense);

  /* calculate Budget Left */
  let balance = myBudget - sumExpense;

  /* set Text in Result */
  budgetFinal.innerText = myBudget;
  expensesFinal.innerText = sumExpense;
  balanceFinal.innerText = balance;

  if (balance < 0) {
    balanceFinal.style.color = "red";
  } else if (balance > 0) {
    balanceFinal.style.color = "green";
  } else {
    balanceFinal.style.color = "";
  }
}

/* clear input fields */
function clearInput() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });
}

/* Clear site - reload page & clear local storage */
clearSite.addEventListener("click", reloadPageAndClearLocalStorage);

function reloadPageAndClearLocalStorage() {
  localStorage.clear();
  myExpenses = [];
  updateOutput();
}

/**
 ** Shows a custom toast message
 *
 * @param {String} type         available types: error, success, warning, info
 * @param {String} title        title to display
 * @param {String} message      Message to display [String]
 * @param {Number} duration     Display duration in milliseconds - default set to 2000sec
 *
 * @copyright Marco
 */

function showToastMessage(type, title, message, duration = 2000) {
  const toastContainer = document.querySelector(".toast-msg");
  toastContainer.classList.add(type, "visible");
  setTimeout(() => {
    toastContainer.innerHTML = "";
    toastContainer.classList.remove(type, "visible");
  }, duration);
}
