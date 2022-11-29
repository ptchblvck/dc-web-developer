const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");

const submit = document.getElementById("submit");

const userArray = [];
// submit.addEventListener("mouseup", checkForErrors());

class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

function addUserToArray() {
  for (let i = 0; i < userArray.length - 1; i++) {
    const element = userArray[i];
    let newUser = new User(
      username.value,
      email.value,
      document.getElementById("password").value
    );
  }
  new User(
    username.value,
    email.value,
    document.getElementById("password").value
  );
}

function checkForErrors(event) {
  event.preventDefault();
  validateUsername(username.value.length);
  //   verifyPassword();
  validateEmail();
}

function validateUsername(nameLength) {
  console.log("username was filled in ", nameLength);
}

function validatePassword(minLength) {
  console.log("password was filled in ", minLength);
}

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    alert("email entered correctly!");
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

username.addEventListener("keydown", function () {
  validateUsername(username.value.length);
});

function verifyPassword() {
  let password = document.getElementById("password").value;
  if (password == "") {
    message.innerHTML = "**Fill in a Password please!";
    return false;
  }

  if (password.length < 8) {
    message.innerHTML = "**Password length must be at least 8 characters!";
    return false;
  }

  if (password.length > 16) {
    message.innerHTML = "**Password length must not exceed 16 characters!";
    return false;
  } else {
    alert("Password accepted!");
  }
}

submit.addEventListener("click", checkForErrors);
