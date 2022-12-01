// DOM elements variables

const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");
const passwd = document.getElementById("password");
const submit = document.getElementById("submit");
const question = document.getElementById("question");
const form = document.getElementById("newsletter");
const btn = document.getElementById("open-form");

const userArray = [];
const questionArray = [];

// create classes that will become objects to parse
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

class Question {
  constructor(username, question) {
    this.username = username;
    this.question = question;
  }
}

// add objects to array

function addUserToArray() {
  if (verifyLength()) {
    let newUser = new User(username.value, passwd.value, email.value);
    userArray.push(newUser);
    console.log(userArray);
  } else {
    console.log("error while verifying length");
  }
}

function addQuestionToArray() {
  if (verifyLength() && verifyQuestion()) {
    let newQuestion = new Question(username.value, question.value);
    questionArray.push(newQuestion);
    console.log(questionArray);
  }
}

// input tests

username.addEventListener("keyup", () => {
  validateLength(username.id, username.value.length);
});

passwd.addEventListener("keyup", () => {
  validatePwLength(passwd.value.length);
});

email.addEventListener("keyup", () => {
  validateLength(email.id, email.value.length);
});

question.addEventListener("keyup", () => {
  validateLength(question.id, question.value.length);
});

// Length of textinput email & username

function validateLength(fieldName, nameLength) {
  console.log(fieldName, "was filled in. Current length:", nameLength);
}

function validatePwLength(minLength) {
  if (minLength >= 8 && minLength < 17) {
    console.log("Password is enough characters. Current length:", minLength);
  }
  console.log("Password current length: ", minLength);
}

function verifyLength() {
  if (
    username.value.length > 3 &&
    passwd.value.length >= 8 &&
    passwd.value.length < 17 &&
    email.value.length > 8
  ) {
    return true;
  }
  return false;
}

function verifyQuestion() {
  if (question.value.length > 25) {
    return true;
  }
  throw "question must contain at least 25 characters!";
}

// Email verification with only allowing true emails

function verifyEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    console.log("Email entered correctly!");
    return true;
  }
  throw "email address invalid!";
}

// password length verification with error handling

function verifyPassword() {
  let password = document.getElementById("password").value;
  if (password == "") {
    message.innerHTML = "**Fill in a Password please!";
    message.style.display = "block";
    throw "fill in a password!";
  }

  if (password.length < 8) {
    message.innerHTML = "**Password length must be at least 8 characters!";
    message.style.display = "block";
    throw "password length too short!";
  }

  if (password.length > 16) {
    message.innerHTML = "**Password length must not exceed 16 characters!";
    message.style.display = "block";
    throw "password lenght exceeded!";
  } else {
    console.log("Password accepted!");
  }
}

// Username verification

function verifyUsername(username) {
  let usernameRegex = /^[a-zA-Z0-9]+$/;
  if (usernameRegex.test(username)) {
    console.log("Username entered correctly!");
    return true;
  }
  throw "Invalid username!";
}

// validation function

function verifyForm(event) {
  event.preventDefault();
  try {
    verifyUsername(username.value);
    verifyPassword();
    verifyEmail(email.value);
    addUserToArray();
    addQuestionToArray();
    buttonOff();
  } catch (error) {
    console.error(error);
  }
}

// toggle form & button

function buttonOn() {
  form.style.display = "flex";
  btn.style.display = "none";
}

function buttonOff() {
  form.style.display = "none";
  btn.style.display = "inline-block";
  form.reset();
}

submit.addEventListener("click", verifyForm);

btn.addEventListener("click", buttonOn);
