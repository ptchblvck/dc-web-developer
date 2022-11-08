function showMessageDeclaration() {
  console.log("Hallo Devs!");
}

showMessageDeclaration();

let anonymousShowMessageDeclaration = function () {
  console.log("Hallo! Funktion Expressions sind wichtig!");
};

anonymousShowMessageDeclaration();

function addNumbers(a, b) {
  let result = a + b;
  return result;
}

let resultOne = addNumbers(3, 6);
let resultTwo = addNumbers(6, 9);

console.log(resultOne);
console.log(resultTwo);

function createUser(userName, eMail, password) {
  let user = {
    userName: userName,
    eMail: eMail,
    password: password,
  };
  return user;
}

let mario = createUser("mario", "mario@mail.com", "12345");
console.log(mario);

// function declaration with 3 params height, length, width
// arguments should be saved in variables
// name function correctly
// calculate area of square
// call function in function and return result
// console log the result
// calculate volume as well and create a function for it

function setProperties(height, length, width) {
  let z = height;
  let x = length;
  let y = width;

  let newArea = squareArea(x, y);
  console.log("die flaeche betraegt: " + newArea);

  let newVolume = calculateVolume(z, x, y);
  console.log("das volumen betraegt: " + newVolume);
}

let newObject = setProperties(4, 8, 3);

function squareArea(length, width) {
  let resultArea = length * width;
  return resultArea;
}

function calculateVolume(height, length, width) {
  return height * length * width;
}

function calcCircleArea(radius) {
  return Math.PI * radius * radius;
}

let newCircle = calcCircleArea(4);
console.log("Die Kreisflaeche betraegt: " + newCircle);
