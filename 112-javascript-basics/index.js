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

function calcCircleArea(radius, emptyParam) {
  return Math.PI * radius * radius;
}

function calculator(a = null, b = null, operator) {
  if (operator == "sum") {
    let resultSum = sum(a, b);
    return console.log("Das Ergebnis wurde addiert und ergibt: " + resultSum);
  }
  if (operator == "subtract") {
    let resultSub = subtract(a, b);
    return console.log(
      "Das Ergebnis wurde subtrahiert und ergibt: " + resultSub
    );
  }
  if (operator == "multiply") {
    let resultMultiply = multiply(a, b);
    return console.log(
      "Das Ergebnis wurde multipliziert und ergibt: " + resultMultiply
    );
  }
  if (operator == "divide") {
    let resultDivide = divide(a, b);
    return console.log(
      "Das Ergebnis wurde dividiert und ergibt: " + resultDivide
    );
  }
  if (operator == "circle") {
    let newCircle = calcCircleArea(a, b);
    return console.log("Die Kreisflaeche betraegt: " + newCircle);
  }
}

function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

function findTheRightSize(num = 0) {
  if (num < 5) {
    return "Tiny";
  } else if (num >= 5 && num < 10) {
    return "Small";
  } else if (num >= 10 && num < 15) {
    return "Medium";
  } else if (num >= 15 && num <= 20) {
    return "Large";
  } else if (num > 20) {
    return "Huge";
  }
}

function showAlert(statusCode) {
  let message;

  if (statusCode == 1) {
    message = "Alpha";
  } else if (statusCode == 2) {
    message = "Beta";
  } else if (statusCode == 3) {
    message = "Gamma";
  } else if (statusCode == 4) {
    message = "Delta";
  } else {
    message = "Unbekannter Wert";
  }
  return message;
}

function oddOrEven(intNumber) {
  if (intNumber % 2 == 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}

function boolToWord(bool) {
  if (bool == true) {
    return "Yes";
  } else if (bool == false) {
    return "No";
  } else {
    return "Not a boolean value";
  }
}

function take_umbrella(weather, chance) {
  if (weather == "cloudy" && chance <= 0.2) {
    console.log("you don't have to take the umbrella with you");
    return false;
  } else if (weather == "cloudy" && chance > 0.2) {
    console.log("take the umbrella with you");
    return true;
  } else if (weather == "sunny" && chance < 0.5) {
    console.log("you don't have to take the umbrella with you");
    return false;
  } else if (weather == "sunny" && chance >= 0.5) {
    console.log("take the umbrella with you");
    return true;
  } else if (weather == "rainy") {
    console.log("take the umbrella with you");
    return true;
  }
}

// the Rock Paper Scissors function

function rps(p1, p2) {
  if (typeof p1 == "string" && typeof p2 == "string") {
    let player1 = p1;
    let player2 = p2;

    if (player1 == "rock" && player2 == "scissors") {
      return "Player1 wins!";
    } else if (player1 == "scissors" && player2 == "paper") {
      return "Player1 wins!";
    } else if (player1 == "paper" && player2 == "rock") {
      return "Player1 wins!";
    } else if (player1 == "rock" && player2 == "paper") {
      return "Player2 wins!";
    } else if (player1 == "scissors" && player2 == "rock") {
      return "Player2 wins!";
    } else if (player1 == "paper" && player2 == "scissors") {
      return "Player1 wins!";
    } else if (player1 == player2) {
      return "It's a Draw!";
    } else {
      return "Weapon not found!";
    }
  }
  return "not a string input";
}

// tic tac toe

const TICTACTOEFIELD_ARRAY = document.querySelectorAll("div.fields");
let userTic;
let userTicTac;
let ticTacToeUserArray = [];
let ticTacToeNpcArray = [];
winPossibilities = {
  win1: ["field1", "field2", "field3"],
  win2: ["field1", "field5", "field9"],
  win3: ["field1", "field4", "field7"],
  win4: ["field4", "field5", "field6"],
  win5: ["field7", "field8", "field9"],
  win6: ["field2", "field5", "field8"],
  win7: ["field3", "field6", "field9"],
  win8: ["field3", "field5", "field7"],
};

let ticTacToe = TICTACTOEFIELD_ARRAY.forEach((tictac) =>
  tictac.addEventListener("click", (e) => {
    userTic = e.target.id;
    console.log(userTic);
    userTicTacToField(userTic);
  })
);

function userTicTacToField(fieldName) {
  if (ticTacToeUserArray.includes(fieldName) == true) {
    alert("field already chosen!");
    return false;
  } else {
    for (let i = 0; i < 2; i++) {
      let crossSpan = document.createElement("span");
      crossSpan.className = "player-cross-filled";
      document.getElementById(fieldName).append(crossSpan);
    }
    ticTacToeUserArray.push(fieldName);

    console.log(ticTacToeUserArray);

    userWins();
  }
}

function sortArrayToString(arrayName) {
  return JSON.stringify(arrayName.sort());
}

// this is where the magic happens...

function userWins() {
  let userWinChanceOptions = Object.keys(winPossibilities);
  for (let chance = 0; chance < userWinChanceOptions.length; chance++) {
    const userWinChancePosition = userWinChanceOptions[chance];
    let userWinResult = sortArrayToString(ticTacToeUserArray);
    let userWinComparison = sortArrayToString(
      winPossibilities[userWinChancePosition]
    );
    if (userWinResult == userWinComparison) {
      console.log("you win!");
    }
  }
  // for (let i = 0; i < ticTacToeUserArray.length; i++) {
  //   const userArrayPosition = ticTacToeUserArray[i];
  //   if (
  //     winPossibilities.win1.includes(userArrayPosition) &&
  //     ticTacToeUserArray.length > 2
  //   ) {
  //     console.log("you Win!");
  //   }
  // }
}

function NpcRandomFieldInitialize() {
  let npcRandomField = Math.floor(Math.random() * 9) + 1;
  return "field" + npcRandomField;
}

function npcTicTacToField(fieldName) {
  if (ticTacToeNpcArray.includes(fieldName) == true) {
    return false;
  } else {
    for (let i = 0; i < 2; i++) {
      let circleNpc = document.createElement("div");
      circleNpc.className = "computer-circle-filled";
      document.getElementById(fieldName).append(circleNpc);
    }
    ticTacToeNpcArray.push(fieldName);

    console.log(ticTacToeNpcArray);
  }
}

npcTicTacToField(NpcRandomFieldInitialize());
