// variables for DOM

const budgetInput = document.getElementById("budget-input");
const expenseInputText = document.getElementById("expenses-input-text");
const expenseInputAmount = document.getElementById("expenses-input-amount");
const expenseInputCategory = document.getElementById("expenses-input-category");
const expenseInputCategoryList = document.querySelectorAll("select > option");
const saveBudgetButton = document.querySelector(
  "#budget-form > input[type=button]"
);
const saveExpensesButton = document.querySelector(
  "#expenses-form > input[type=button]"
);
const budgetForm = document.getElementById("budget-form");
const expensesForm = document.getElementById("expenses-form");
const categoryForm = document.getElementById("category-form");
const budgetResultSpan = document.getElementById("budget-result-span");
const expensesResultSpan = document.getElementById("expenses-result-span");
const expensesResultList = document.getElementById("expenses-result-list");
const moneyLeftAmount = document.getElementById("money-left");
const clearLocalStorageButton = document.getElementById("clear-storage");

const categoryInputType = document.getElementById("category-input-type");
const categoryInputColor = document.getElementById("category-input-color");
const categoryInputButton = document.getElementById("category-input-button");

// css variables

const root = getComputedStyle(document.querySelector(":root"));
let cssCategoryItemColor = root.getPropertyValue("--category-item-color");
const cssCategoryColors = [];
cssCategoryColors.push("");
cssCategoryColors.push(root.getPropertyValue("--category-car-color"));
cssCategoryColors.push(root.getPropertyValue("--category-house-color"));
cssCategoryColors.push(root.getPropertyValue("--category-groceries-color"));
const cssCategoryColorsClean = [];
cssCategoryColors.forEach((color) => {
  cssCategoryColorsClean.push(color.substring(1, color.length));
});

// storage

const budgetFromLocalStorage = localStorage.getItem("budget");
let budget = budgetFromLocalStorage ? parseInt(budgetFromLocalStorage) : 0;

const categoryFromLocalStorage = localStorage.getItem("category");
const categoryListArray = categoryFromLocalStorage
  ? JSON.parse(categoryFromLocalStorage)
  : [];
let categoryItem = "";

let expenseAmount = 0;
let expenseItem = "";
let expenseSum = 0;
let expenseAddDate = 0;
const expensesFromLocalStorage = localStorage.getItem("expenses");
const expensesListArray = expensesFromLocalStorage
  ? JSON.parse(expensesFromLocalStorage)
  : [];

let moneyLeft = 0;
let itemColor = "#ffffff";

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

categoryInputButton.addEventListener("click", categoryRoutine);

window.addEventListener("load", updateInterface);

clearLocalStorageButton.addEventListener("click", clearLocalStorage);

// preparation

function prepareTheCategories() {
  for (let i = 1; i < expenseInputCategoryList.length; i++) {
    const categoryPreset = expenseInputCategoryList[i];
    let categoryPresetValue = categoryPreset.value;
    if (
      !Object.values(categoryListArray[i - 1]).includes(categoryPresetValue)
    ) {
      categoryListArray.push({
        description: categoryPreset.value,
        color: cssCategoryColorsClean[i],
      });
    }
  }
}

// functions

function budgetRoutine() {
  try {
    setBudget();
    showToastMessage("success", "Budget", "Budget saved successfully.");
    updateInterface();

    budgetForm.reset();
  } catch (Error) {
    showToastMessage("error", "BUDGET", Error);
  }
}

function setBudget() {
  console.log(budgetInput.value);
  if (isValidInputLength(budgetInput) && isValidNumber(budgetInput)) {
    budget = parseInt(budgetInput.value);
    console.log("set Budget:", budget);
    budgetResultSpan.textContent = "$" + budget;
  }
}

function expensesRoutine() {
  try {
    addExpense();
    console.log("Expenses List:", expensesListArray);
    showToastMessage("success", "Expense", "Expense saved successfully.");
    updateInterface();

    expensesForm.reset();
  } catch (Error) {
    showToastMessage("error", "EXPENSES", Error);
  }
}

function addExpense() {
  validateExpenseInputText();
  validateExpenseInputAmount();
  expenseAddDate = getTimeAndDate();

  if (cssCategoryColorsClean.indexOf()) {
  }

  categoryItem = expenseInputCategory.value;

  if (
    validateExpenseInputText() === true &&
    validateExpenseInputAmount() === true
  ) {
    console.log("set Expense:", expenseItem);
    console.log("set Expense amount:", expenseAmount);
    expensesListArray.push({
      description: expenseItem,
      amount: expenseAmount,
      dateAdded: expenseAddDate,
      category: categoryItem,
    });
  }
}

function validateExpenseInputText() {
  if (isValidInputLength(expenseInputText) && isValidString(expenseInputText)) {
    expenseItem = expenseInputText.value;
    return true;
  } else return false;
}

function validateExpenseInputAmount() {
  if (
    isValidInputLength(expenseInputAmount) &&
    isValidNumber(expenseInputAmount)
  ) {
    expenseAmount = parseInt(expenseInputAmount.value);
    return true;
  } else return false;
}

function validateCategoryInputText() {
  if (
    isValidInputLength(categoryInputType) &&
    isValidString(categoryInputType)
  ) {
    categoryItem = categoryInputType.value;
    return true;
  } else return false;
}

function sumOfExpenses() {
  expenseSum = 0;
  expensesListArray.forEach((expense) => {
    expenseSum += expense.amount;
  });
  moneyLeft = parseInt(budget - expenseSum);
  console.log("Money left:", moneyLeft);
}

/**
 * @param {Object} expense - for every 'expense.description' and 'expense.amount'
 *  in the array create the 'textContent' of a new <li></li> HTML element.
 *
 * @param {Number} index - every 'index' in the array also will add a <button></button>
 *  HTML element ith an eventListener("click") to the newly created <li></li> HTML element.
 *
 * if that <button></button> element is clicked -> deletes the <li></li> HTML element
 *  and it's content not only from the DOM but also in the array.
 *
 */

function generateExpenseList() {
  expensesResultList.innerHTML = "";

  expensesListArray.forEach((expense, index) => {
    // li for each expense in array
    const listItem = document.createElement("li");
    listItem.textContent = `${expense.description}: $ ${expense.amount} added ${expense.dateAdded}`;
    listItem.classList.add("list-item");
    // listItem.classList.add(categoryListArray[index].description);
    // listItem.style.color = expense.color;
    // if (
    //   expense.description == "car" ||
    //   expense.description == "house" ||
    //   expense.description == "groceries"
    // ) {
    //   listItem.classList.add("category-" + expense.category + "-color");
    // }
    addCategoryStyle(listItem, index);
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
  moneyLeftAmount.textContent = "$" + moneyLeft;
}

function isValidInputLength(input) {
  if (!input.value.length) {
    console.log(input.id, " length is invalid!");
    throw new Error(input.id + " is empty!");
  } else return true;
}

function isValidNumber(number) {
  if (number.value < 0) {
    throw new Error("negative number: " + number.id + " is not allowed!");
  }

  if (typeof parseInt(number.value) != "number") {
    throw new Error(number.id + " is not a Number!");
  }

  return true;
}

function isValidString(input) {
  if (!input.value.match(/^[A-Z][a-z]/g)) {
    throw new Error(input.id + " is not a valid String!");
  } else return true;
}

function deleteExpense(index) {
  expensesListArray.splice(index, 1);
  console.log(expensesListArray);
  showToastMessage("info", "Update", "Expense deleted.");
  updateInterface();
}

/**
 * sets classes for Budget styling:
 *
 * if 'moneyLeft' < 0 = negative
 *
 * if 'moneyLeft' > 0 = positive
 *
 * negative -> budget amount becomes RED
 *
 * positive -> budget amount becomes GREEN
 *
 */

function validateMoneyLeft() {
  moneyLeftAmount.className = "";
  if (moneyLeft < 0) {
    moneyLeftAmount.classList.add("money-left-negative");
    showToastMessage(
      "warning",
      "Discrepancy",
      "Expenses are higher than Budget."
    );
  }
  if (moneyLeft > 0) {
    moneyLeftAmount.classList.add("money-left-positive");
  }
}

function updateInterface() {
  prepareTheCategories();
  updateMoneyLeft();
  validateMoneyLeft();
  generateExpenseList();
  saveInterfaceToLocalStorage();
}

function saveInterfaceToLocalStorage() {
  let expensesStringified = JSON.stringify(expensesListArray);
  let categoryStringified = JSON.stringify(categoryListArray);
  localStorage.setItem("expenses", expensesStringified);
  localStorage.setItem("budget", budget);
  localStorage.setItem("category", categoryStringified);
}

/**
 * Shows a custom toast message
 *
 * @param {String} type         available types: error, success, warning, info
 * @param {String} title        title to display
 * @param {String} message      Message to display [String]
 * @param {Number} duration     Display duration in milliseconds - default set to 2000sec
 *
 * @copyright Marco
 */

function showToastMessage(type, title, message, duration = 2000) {
  //Todo: replace with marco's custom alert functionality after implementation
  const toastContainer = document.querySelector(".toast-msg");
  toastContainer.className = "toast-msg";
  toastContainer.classList.add(type, "visible");
  toastContainer.innerHTML = "<h4>" + title + "</h4><p>" + message + "</p>";
  setTimeout(() => {
    toastContainer.innerHTML = "";
    toastContainer.classList.remove(type, "visible");
  }, duration);
}

/**
 * @returns {String} dateTime - a String value with the local time and date.
 */

function getTimeAndDate() {
  const today = new Date();
  // the long and complicated way with date as well!
  let seconds = today.getSeconds();
  let minutes = today.getMinutes();
  let hours = today.getHours();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  if (seconds < 10) {
    seconds = "0" + today.getSeconds();
  }
  if (minutes < 10) {
    minutes = "0" + today.getSeconds();
  }
  if (hours < 10) {
    hours = "0" + today.getSeconds();
  }
  const time = hours + ":" + minutes + ":" + seconds;
  const dateTime = "at " + time + " on " + date;
  console.log(dateTime);
  return dateTime;
}

function clearLocalStorage() {
  categoryListArray.splice(0, categoryListArray.length);
  updateInterface();
  localStorage.clear();
  window.location.reload();
}

function categoryRoutine() {
  try {
    addCategory();
    showToastMessage("success", "Category", "Category added successfully.");
    updateInterface();
    categoryForm.reset();
    // categoryInputColor.value = "#000000";
    // categoryInputType.value = "";
  } catch (error) {
    showToastMessage("error", "CATEGORY", Error);
  }
}

function addCategory() {
  validateCategoryInputText();
  if (validateCategoryInputText() === true) {
    itemColor = categoryInputColor.value;
    console.log("Category type: " + categoryItem + " added.");
    updateCategorySelectOptions();
    if (!Array.prototype.includes.call(categoryListArray, itemcolor)) {
      categoryListArray.push({
        description: categoryItem,
        color: itemColor,
      });
    }
    console.log(categoryListArray);
  }
}

function updateCategorySelectOptions() {
  expenseInputCategory.innerHTML = "";
  categoryListArray.forEach((category, index) => {
    const optionItem = document.createElement("option");
    optionItem.innerText = category.description;
    optionItem.value = category.description;
    expenseInputCategory.append(optionItem);
  });
}

function addCategoryStyle(element, index) {
  cssCategoryItemColor = categoryListArray[index].color;
  element.style.borderRight = `3px solid ${cssCategoryItemColor}`;
  element.style.borderBottom = `3px solid ${cssCategoryItemColor}`;
}
