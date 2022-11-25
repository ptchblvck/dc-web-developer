// const obj = {
//   firstName: "Max",
//   lastName: "Mustermann",
// };

// console.log(obj.firstName);
// console.log(obj["firstName"]);

// for (let key in obj) {
//   console.log(obj[key]);
// }

// this ==> gives back where we are right now in the Object (window)

// arrow function in object is based on window object, not the object it's inside itself.

// Exercise 1

const personObj = {
  firstName: "Max",
  lastName: "Mustermann",
  age: 28,
  height: 183,
};

console.log(personObj);

// Exercise 2

console.log(personObj.firstName);
console.log(personObj.lastName);
console.log(personObj["age"]);
console.log(personObj["height"]);

// Exercise 3

personObj.firstName = "Moritz";
personObj.age = 19;
personObj.hobbies = ["Schwimmen", "Fahrrad Fahren", "Klettern"];
console.log(personObj.firstName);
console.log(personObj["age"]);
console.log(personObj.hobbies);

// Exercise 4

personObj.hobbies.shift();
console.log(personObj.hobbies);

//Exercise 5

delete personObj.height;
console.log(personObj.hasOwnProperty("height"));

// Exercise 6

const arrayOfKeysInObj = Object.keys(personObj);
arrayOfKeysInObj.forEach((key) => {
  console.log(personObj[key] + " - " + typeof personObj[key]);
});

// Exercise 7

personObj.printKeys = function () {
  const printKey = Object.keys(this);
  printKey.forEach((printKey) => {
    console.log(printKey + " this is a " + typeof this[printKey]);
  });
  console.log(this);
};

personObj.printKeys();

// Exercises Part II

console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");

// Exercise 1

let courseTitle = "Web Developer 2022/2023";
let courseDescription =
  "Kursangebot zur Ausbildung zum Web Developer mit HTML, CSS, JS, React";
let courseTrainers = ["Martin", "Pius", "Daniel", "Florian", "Oliver"];
let courseLessons = ["HTML", "CSS", "Javascript", "Typescript", "React"];
let courseStudents = [
  "Marco",
  "Julian",
  "Ebrahem",
  "Regina",
  "Denis",
  "Johannes",
];

function showCourseOffer(value = null) {
  if (typeof value == "object") {
    for (const key in value) {
      if (Object.hasOwnProperty.call(value, key)) {
        const element = value[key];
        console.log(element);
      }
    }
  } else {
    console.log(courseTitle);
    console.log(courseDescription);
    console.log(courseTrainers);
    console.log(courseLessons);
    console.log(courseStudents);
  }
  console.log("");
}

showCourseOffer();

// Exercise 2

function enrollStudent(studentName) {
  courseStudents.push(studentName);
  return courseStudents;
}

// Exercise 3

const course = new Object();
course.title = courseTitle;
course.description = courseDescription;
course.trainers = courseTrainers;
course.lessons = courseLessons;
course.students = courseStudents;
console.log(course);

showCourseOffer(course);

console.log(" ");

// Exercise 4

course.showOffer = function () {
  arrayOfCourseKeys = Object.keys(this);
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const offr = this[key];
      if (typeof offr != "function") {
        console.log(offr);
      }
    }
  }
};

course.showOffer();

// Exercise 5

course.lessons = [
  {
    title: "HTML",
    units: 80,
    trainer: "Martin",
  },
  { title: "CSS", units: 50, trainer: "Pius" },
  { title: "Javascript", units: 150, trainier: "Daniel" },
];

course.addLesson = function (title, units, trainer) {
  this.lessons.push({
    title,
    units,
    trainer,
  });
  console.log(this.lessons);
};

// Exercise 6

course.countUnits = function () {
  let unitSum = [];
  for (let i = 0; i < this.lessons.length; i++) {
    unitSum.push(this.lessons[i]["units"]);
  }
  return sumUnits(unitSum);
};

function sumUnits(arr) {
  let sumUnit = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sumUnit += arr[i];
  }
  return sumUnit;
}

// Exercise 7 & 8

course.enrollStudent = function () {
  let newStudent = prompt("Wie heisst der Teilnehmer?");
  if (newStudent.length == 0) {
    alert("Es wurde kein Name eingegeben!");
  } else {
    if (this.students.length < 9) {
      this.students.push(newStudent);
      alert("Es sind derzeit " + this.students + " im Kurs.");
    } else {
      alert("Kurs bereits voll!");
    }
  }
};

// Exercise 1

let arrayOne = [];
let arrayTwo = new Array();

// Exercise 2

let todoList = ["Bad Putzen", "Einkaufen"];

// Exericse 3

todoList.push("Rasen maehen");

// Exercise 4

todoList.unshift("Sport Machen");

// Exercise 5

todoList.splice(2, 0, "Garage streichen", "Rollrasen verlegen", "Klo putzen");

// Exercise 6

todoList.pop();

// Exercise 7

todoList.shift();

// Exercise 8

todoList.splice(1, 2);

// Exercise 9

let todoListNew = todoList.slice(1, todoList.length);

// Exercise 10

let names = ["Klaus", "Xaver", "Peter", "Andreas"];

// Exercise 11

let namesReverse = names.reverse();
let nameAsString = names.toString();

// Exercise 12

names.forEach((element) => {
  console.log(element);
});

// Exercise 13

function sayHello() {
  names.forEach((el) => {
    console.log("Hallo " + el);
  });
}

// Exercise 14
console.log(names.sort());

// Exercise 15

let numbers = [2, 45, 3, 67, 34, 567, 34, 345, 123];

let lN = 0;
numbers.forEach((e) => {
  if (e > lN) {
    lN = e;
  }
});
console.log(lN);

let laN = 0;
numbers.forEach((e) => {
  e > laN ? (laN = e) : (laN = laN);
});
console.log(laN);

function biggestNumber() {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1];
}

// Exercise 16

function sortNumbersBigToSmall() {
  return numbers.sort((a, b) => b - a);
}

// Exercise 17

let books = [
  { author: "Bill Gates", title: "The Road Ahead", bookId: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", bookId: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    bookId: 3245,
  },
];

function sortByBookTitle() {
  books.sort((a, b) => {
    return a["title"].localeCompare(b["title"]);
  });
  return books;
}

// Exercise 18

/* Plattenladen mit 3 lieblingsinterpreten im Array.
pro interpret neben name drei alben mit albumtitel und erscheinungsjahr */

let favouriteArtists = [
  {
    artist: "We Came A Romans",
    albums: [
      {
        title: "To Plant A Seed",
        year: 2011,
      },
      {
        title: "Cold Like War",
        year: 2017,
      },
      {
        title: "Darkbloom",
        year: 2022,
      },
    ],
  },
  {
    artist: "I See Stars",
    albums: [
      {
        title: "Digital Renegade",
        year: 2012,
      },
      {
        title: "New Demons",
        year: 2013,
      },
      {
        title: "Treehouse",
        year: 2016,
      },
    ],
  },
  {
    artist: "Nekrogoblikon",
    albums: [
      {
        title: "Heavy Meta",
        year: 2015,
      },
      {
        title: "Welcome To Bonkers",
        year: 2018,
      },
      {
        title: "The Fundamental Slimes and Humours",
        year: 2022,
      },
    ],
  },
];

// function with for loop

function showArtists() {
  for (let i = 0; i < favouriteArtists.length; i++) {
    const artistAlbum = favouriteArtists[i].albums;
    for (let j = 0; j < artistAlbum.length; j++) {
      console.log(
        artistAlbum[j].title +
          " from " +
          favouriteArtists[i].artist +
          " was released in " +
          artistAlbum[j].year +
          "."
      );
    }
  }
}

// function with foreach loop

function artistIteration() {
  favouriteArtists.forEach((artist) => {
    artist.albums.forEach((album) => {
      console.log(
        album.title + " by " + artist.artist + " was released in " + album.year
      );
    });
  });
}

// Exercise 19

let arrayNumberOne = [1, 2, 3];
let arrayNumberTwo = [1, 2, 3];
let arrayNumberThree = [4, 5, 6];

function checkForArraySimilarity(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
}

// Exercise 20

function multiplyByThree(arr) {
  let resultArray = [];
  arr.forEach((element) => {
    resultArray.push(element * 3);
  });
  return resultArray;
}

function multiplyByThreeWithMap(arr) {
  let newArrayMap = [];
  newArrayMap = arr.map((number) => {
    number * 3;
  });
  return newArrayMap;
}

// Exercise 21

let nums = [11, 22, 33, 46, 75, 86, 97, 98];

function squareNums() {
  let newArray = [];
  nums.forEach((e) => {
    if (e % 2 == 0) {
      newArray.push(e * e);
    }
  });
  let newArraySum = 0;
  newArray.forEach((a) => {
    newArraySum += a;
  });
  return newArraySum;
}

// Exercise 22

let strings = ["avengers", "captain america", "iron man", "black panther"];

function uppercaseMovies() {
  let uppercaseStrings = [];
  strings.forEach((element) => {
    uppercaseStrings.push(element.toLocaleUpperCase());
  });
  return uppercaseStrings;
}

// Exercise 23

function milesArray(arrayNumbers) {
  let resultMiles = 0;
  let arrayKm = [];
  arrayNumbers.forEach((aN) => {
    resultMiles += aN;
    arrayKm.push(aN * 1.6);
  });
  let resultKm = 0;
  arrayKm.forEach((allN) => {
    resultKm += allN;
  });
  console.log(
    "The whole journey in miles is " +
      resultMiles +
      " and " +
      resultKm +
      " in km."
  );
}

// Bonus 11 without reverse

function reverseArray() {
  let namesLength = names.length;
  let newNameArray = [];
  let endName;
  for (let i = 0; i < namesLength; i++) {
    endName = names.pop();
    newNameArray.push(endName);
  }
  return newNameArray;
}
