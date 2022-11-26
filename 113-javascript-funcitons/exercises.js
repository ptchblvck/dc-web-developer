const footballPlayers = [
  {
    name: "Cristiano Ronaldo",
    height: 172,
    mass: 77,
    eyeColor: "blue",
    gender: "male",
    clubs: [
      {
        club: "Manchaster United",
        yearsPlayed: 3,
      },
      {
        club: "Real Madrid",
        yearsPlayed: 9,
      },
      {
        club: "Juventus Turin",
        yearsPlayed: 3,
      },
    ],
  },
  {
    name: "Lionel Messi",
    height: 202,
    mass: 136,
    eyeColor: "yellow",
    gender: "male",
    clubs: [
      {
        club: "FC Barcelona",
        yearsPlayed: 17,
      },
      {
        club: "Paris Saint-Germain",
        yearsPlayed: 2,
      },
    ],
  },
  {
    name: "Alex Morgan",
    height: 150,
    mass: 49,
    eyeColor: "brown",
    gender: "female",
    clubs: [
      {
        club: "Portland Thorns FC",
        yearsPlayed: 2,
      },
      {
        club: "Orlando Pride",
        yearsPlayed: 4,
      },
      {
        club: "Tottenham Hotspur",
        yearsPlayed: 1,
      },
    ],
  },
  {
    name: "David Alaba",
    height: 188,
    mass: 84,
    eyeColor: "blue",
    gender: "male",
    clubs: [
      {
        club: "Austria Wien",
        yearsPlayed: 6,
      },
      {
        club: "Bayern Munich",
        yearsPlayed: 11,
      },
      {
        club: "Real Madrid",
        yearsPlayed: 2,
      },
    ],
  },
];

// Exercise 1

function addPlayer(name, height, mass, eyeColor, gender) {
  footballPlayers.push({ name, height, mass, eyeColor, gender });
}

addPlayer("Zlatan Ibrahimovic", 195, 102, "brown", "male");
addPlayer("Diego Maradona", 165, 67, "brown", "male");

console.log(footballPlayers);

// Exercise 2

const playerNames = [];
footballPlayers.forEach((player) => {
  playerNames.push(player.name);
});

console.log(playerNames);

const playerNamesMap = footballPlayers.map((player) => player.name);

console.log(playerNamesMap);

// Exercise 3

const malePlayers = [];
footballPlayers.forEach((player) => {
  if (player.gender === "male") {
    malePlayers.push(player.name);
  }
});

console.log(malePlayers);

// Exercise 4

const lightWeightPlayers = footballPlayers
  .filter((player) => player.mass < 50)
  .map((player) => player.name);

console.log(lightWeightPlayers);

const hasPlayerUnderFiftyKg = footballPlayers.some(
  (player) => player.mass < 50
);

console.log(hasPlayerUnderFiftyKg);

// Exercise 5

const playerHeights = footballPlayers.map((player) => player.height);

console.log(playerHeights);

// Exercise 6

let playerMassTotal = 0;
footballPlayers
  .map((player) => player.mass)
  .forEach((number) => (playerMassTotal += number));

let playerHeightTotal = 0;
playerHeights.forEach((number) => (playerHeightTotal += number));

console.log(playerMassTotal);
console.log(playerHeightTotal);
console.log(
  "Alle Spieler gesamt wiegen " +
    playerMassTotal +
    "kg. Stapelt man die Spieler uebereinander sind sie " +
    playerHeightTotal / 100 +
    "m hoch."
);

console.log(
  footballPlayers.reduce(
    (totalHeight, player) => totalHeight + player.height,
    0
  )
);

// Exercise 7

const playersOverOnehunderedKg = footballPlayers.filter(
  (player) => player.mass > 100
);
console.log(playersOverOnehunderedKg);

// Exercise 8

const playersSmallerThanTwoMeters = footballPlayers
  .filter((player) => player.height < 200)
  .map((player) => player.name);
console.log(playersSmallerThanTwoMeters);

// Exercise 9

const lightestPlayerFirst = footballPlayers
  .map((player) => player)
  .sort((a, b) => a.mass - b.mass);
console.log(lightestPlayerFirst);

const tallestPlayerFirst = footballPlayers
  .map((player) => player)
  .sort((a, b) => b.height - a.height);
console.log(tallestPlayerFirst);

console.log(footballPlayers);

// Exercise 10

console.log(footballPlayers.every((player) => player.eyeColor === "blue"));

// Exercise 11

console.log(footballPlayers.every((player) => player.mass > 40));

// Exercise 12

console.log(footballPlayers.some((player) => player.gender === "male"));

//

function addNewPlayer() {
  try {
    const enteredName = getPlayerName();
    const convertedHeight = getPlayerHeight();
    const convertedMass = getPlayerMass();
    const enteredEyeColor = getPlayerEyeColor();
    const enteredGender = getPlayerGender();

    // const newPlayer = {
    //   name: enteredName,
    //   height: convertedHeight,
    //   mass: convertedMass,
    //   eyeColor: enteredEyeColor,
    //   gender: enteredGender,
    // };
    // footballPlayers.push(newPlayer);
    addPlayer(
      enteredName,
      convertedHeight,
      convertedMass,
      enteredEyeColor,
      enteredGender
    );
  } catch (error) {
    alert(error.message);
  }
}

function validateNumber(value) {
  if (isNaN(value)) {
    throw new Error("Bitte geben Sie eine gueltige Zahl ein!");
  }
}

function validateString(value) {
  if (value === "") {
    throw new Error("Bitte geben Sie einen gueltigen String ein.");
  }
}

function getPlayerName() {
  const enteredName = prompt("Bitte geben Sie einen Spielernamen ein.");

  if (enteredName.length < 3) {
    throw new Error("Spielername muss mindestens 3 Zeichen lang sein!");
  }
}

function getPlayerHeight() {
  const enteredHeight = prompt("Bitte geben Sie die Groesse des Spielers ein.");
  const convertedHeight = parseInt(enteredHeight);

  validateNumber(convertedHeight);

  if (convertedHeight < 100) {
    throw new Error("Der Spieler muss groesser als 100cm sein.");
  }
  return convertedHeight;
}

function getPlayerMass() {
  const enteredMass = prompt("Bitte geben Sie das Gewicht des Spielers ein.");
  const convertedMass = parseInt(enteredMass);

  validateNumber(convertedMass);

  if (convertedMass < 150) {
    throw new Error("Der Spieler darf nicht mehr als 150kg wiegen.");
  }
  return convertedMass;
}

function getPlayerEyeColor() {
  const enteredEyeColor = prompt(
    "Bitte geben Sie die Augenfarbe des Spielers ein."
  );

  validateString(enteredEyeColor);
  return enteredEyeColor;
}

function getPlayerGender() {
  const enteredGender = prompt(
    "Bitte geben Sie das Geschlecht des Spielers ein."
  );

  validateString(enteredGender);
  return enteredGender;
}
