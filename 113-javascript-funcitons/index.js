// variables

let marks = [88, 70, 40, 23, 34];

function calculateMarksAvg() {
  let marksAvg = 0;
  for (let i = 0; i < marks.length; i++) {
    marksAvg += marks[i];
  }
  let marksResult = Math.floor(marksAvg / marks.length);
  return marksResult;
}

let students = [
  ["David", 82],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishiltha", 95],
  ["Thomas", 63],
];

function markVerification(number) {
  if (number < 0) {
    alert("this value is not allowed. Are you stoopid?");
  } else {
    return gradeRange(number);
  }
}

function gradeRange(number) {
  if (number < 60) {
    console.log(number + " equals to an F Grade");
    return "F";
  } else if (number < 70) {
    console.log(number + " equals to a D Grade");
    return "D";
  } else if (number < 80) {
    console.log(number + " equals to a C Grade");
    return "C";
  } else if (number < 90) {
    console.log(number + " equals to a B Grade");
    return "B";
  } else if (number < 100) {
    console.log(number + " equals to a A Grade");
    return "A";
  }
}

function calculateAvg(a, b, c, d, e) {
  let = avgResult = Math.floor((a + b + c + d + e) / 5);
  return avgResult;
}

for (let k = 0; k < 7; k++) {
  console.log("Hallo JS!");
}

let i = 0;

while (i < 7) {
  console.log("Hallo JS!");
  i++;
}

let numbersInArray = [];

function onlyEven(amount) {
  for (let i = 0; i <= amount; i++) {
    if (i % 2 == 0) {
      numbersInArray.push(i);
    }
  }

  return numbersInArray;
}

function fibonacci(count) {
  let fibonacciArray = [];
  if (count === 1) {
    fibonacciArray = [0];
  } else if (count === 2) {
    fibonacciArray = [0, 1];
  } else {
    fibonacciArray = [0, 1];
    for (let i = 2; i < count; i++) {
      fibonacciArray.push(
        fibonacciArray[fibonacciArray.length - 2] +
          fibonacciArray[fibonacciArray.length - 1]
      );
    }
  }

  return fibonacciArray;
}

let errorCodeArray = [400, 402, 404, 409, 414, 425, 429];
let errorMessageArray = [
  "Bad Request",
  "Payment Required",
  "Not Found",
  "Conflict",
  "URI Too Long",
  "Too Early",
  "Too Many Requests",
];

function websiteFail(errorCode = null) {
  if (errorCode == null) {
    alert("Everything works fine!");
  } else if (!errorCodeArray.includes(errorCode)) {
    alert("Error Code is not included");
  } else if (errorCodeArray.includes(errorCode)) {
    for (let i = 0; i < errorCodeArray.length; i++) {
      const errorCodePosition = errorCodeArray[i];
      if (errorCodePosition == errorCode) {
        alert(errorMessageArray[i]);
      }
    }
  }
}

function caseWebsiteFail(errorCode = null) {
  switch (errorCode) {
    case 400:
      alert("Bad Request");
      break;
    case 402:
      alert("Payment Required");
      break;
    case 404:
      alert("Not Found");
      break;
    case 409:
      alert("Conflict");
      break;
    case 414:
      alert("URI Too Long");
      break;
    case 425:
      alert("Too Early");
      break;
    case 429:
      alert("Too Many Requests");
      break;
    default:
      alert("everything is working!");
      break;
  }
}

let numberArrayMultiplication = [6, 9, 13, 22, 17];

function multiplyArray() {
  let multiplicationResult = 1;
  for (let i = 0; i < numberArrayMultiplication.length; i++) {
    multiplicationResult *= numberArrayMultiplication[i];
  }
  return multiplicationResult;
}

function bigDiv(a, b) {
  let bigDivMax = Math.min(a, b);
  let maxDiv = 1;

  for (let i = 2; i <= bigDivMax; i++) {
    if (a % i === 0 && b % i === 0) {
      maxDiv = i;
    }
  }

  return maxDiv;
}

function getMinimum(minArray) {
  let minValue = minArray[0];
  for (let i = 0; i < minArray.length; i++) {
    const MINARRPOS = minArray[i];
    if (MINARRPOS < minValue) {
      minValue = MINARRPOS;
    }
  }
  return minValue;
}

function bubbleSorting(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function facultyfy(el) {
  let facult = 0;
}

// xmas vars

let lineMax = 1;
let lineMedian = 1;
let leaf = "*";
let space = "_";

function xMasTree(lines) {
  if (!(lines == typeof Number)) {
    lineMax = lines;
    if (lines % 2 == 0) {
      lineMax = lines + 1;
    }

    lineMedian = Math.floor(lineMax / 2);
    christmasPrint();

    console.log(lineMax);
    console.log(lineMedian);
  } else {
    console.log("not a number");
  }
}

function christmasPrint() {
  for (let i = 1; i <= lineMax; i++) {
    for (let j = i; j < lineMax; j++) {
      document.write(space);
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      document.write(leaf);
    }
    document.write("<br>");
  }
}
