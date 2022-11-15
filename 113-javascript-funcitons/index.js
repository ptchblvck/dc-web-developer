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
