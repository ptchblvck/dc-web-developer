// variables for DOM

const budgetInput = document.getElementById("budget-input");
const expensesInputText = document.getElementById("expenses-input-text");
const expenseInputAmount = document.getElementById("expenses-input");
const saveBudgetButton = document.querySelector(
  "#budget-form > input[type=button]"
);
const saveExpensesButton = document.querySelector(
  "#expenses-form > input[type=button]"
);
const budgetForm = document.getElementById("budget-form");
const expensesForm = document.getElementById("expenses-form");
const budgetResultSpan = document.getElementById("budget-result-span");
const expensesResultSpan = document.getElementById("expenses-result-span");
const expensesResultList = document.getElementById("expenses-result-list");
const moneyLeftAmount = document.getElementById("money-left");

let budget = 0;
let expenseAmount = 0;
let expenseItem = "";
let expenseSum = 0;
const expensesListArray = [];

let moneyLeft = 0;

// event listeners

saveBudgetButton.addEventListener("click", budgetRoutine);
saveExpensesButton.addEventListener("click", expensesRoutine);
budgetInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    budgetRoutine();
  }
});

expenseInputAmount.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    expensesRoutine();
  }
});

// functions

function budgetRoutine() {
  try {
    setBudget();
    validateMoneyLeft();
    updateMoneyLeft();
  } catch (Error) {
    alert(Error);
  }
}

function setBudget() {
  console.log(budgetInput.value);
  isValidInputLength(budgetInput.value);
  let budgetInputValue = parseInt(budgetInput.value);
  if (isValidNumber(budgetInputValue)) {
    budget = budgetInputValue;
    console.log("set Budget:", budget);
    budgetResultSpan.textContent = "$" + budget;
    budgetForm.reset();
  }
}

function expensesRoutine() {
  try {
    addExpense();
    expensesForm.reset();
    console.log("Expenses List:", expensesListArray);
    generateExpenseList();
    updateMoneyLeft();
    validateMoneyLeft();
  } catch (Error) {
    alert(Error);
  }
}

function addExpense() {
  if (isValidString(expensesInputText.value)) {
    expenseItem = expensesInputText.value;
  }
  if (isValidNumber(expenseInputAmount.value)) {
    expenseAmount = parseInt(expenseInputAmount.value);
  }
  console.log("set Expense:", expenseItem);
  console.log("set Expense amount:", expenseAmount);
  expensesListArray.push({
    description: expenseItem,
    amount: expenseAmount,
  });
}

function sumOfExpenses() {
  expenseSum = 0;
  expensesListArray.forEach((element) => {
    expenseSum += element.amount;
  });
  moneyLeft = parseInt(budget - expenseSum);
  console.log("Money left:", moneyLeft);
}

function generateExpenseList() {
  expensesResultList.innerHTML = "";

  expensesListArray.forEach((expense, index) => {
    // li for each expense in array
    const listItem = document.createElement("li");
    listItem.textContent = `${expense.description}: $ ${expense.amount}`;
    listItem.classList.add("list-item");
    // button for each li item
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", () => {
      deleteExpense(index);
    });

    listItem.append(deleteButton);
    expensesResultList.appendChild(listItem);
  });
}

function updateMoneyLeft() {
  sumOfExpenses();
  moneyLeftAmount.textContent = moneyLeft;
}

function isValidInputLength(input) {
  if (!input.length) {
    console.log(input, "invalid!");
    throw new Error(input, "is empty!");
  } else return true;
}

function isValidNumber(number) {
  if (isNaN(number)) {
    throw new Error(number, "is not a Number!");
  } else return true;
}

function isValidString(input) {
  if (!input.match(/^[A-Za-z]/g)) {
    throw new Error(input, "is not a valid String!");
  } else return true;
}

function deleteExpense(index) {
  expensesListArray.splice(index, 1);
  console.log(expensesListArray);
  generateExpenseList();
  updateMoneyLeft();
}

function validateMoneyLeft() {
  moneyLeftAmount.className = "";
  if (moneyLeft < 0) {
    moneyLeftAmount.classList.add("money-left-negative");
  }
  if (moneyLeft > 0) {
    moneyLeftAmount.classList.add("money-left-positive");
  }
}

updateMoneyLeft();
