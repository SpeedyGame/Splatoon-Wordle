// array of possible weapons to guess from, currently working on a .json implementation that can actually work

const weapons = [
  {
    name: "Splattershot",
    sub: "Burst Bomb",
    special: "Bomb Rush",
    class: "Shooter",
  },
  {
    name: "Splat Roller",
    sub: "Suction Bomb",
    special: "Killer Wail",
    class: "Roller",
  },
  {
    name: "Splat Charger",
    sub: "Splat Bomb",
    special: "Bomb Rush",
    class: "Charger",
  },
  {
    name: "Slosher",
    sub: "Burst Bomb",
    special: "Inkstrike",
    class: "Slosher",
  },
  {
    name: "Heavy Splatling",
    sub: "Splash Wall",
    special: "Inkstrike",
    class: "Splatling",
  },
  {
    name: "Inkbrush",
    sub: "Sprinkler",
    special: "Inkstrike",
    class: "Roller",
  },
  {
    name: "Blaster",
    sub: "Disruptor",
    special: "Killer Wail",
    class: "Shooter",
  },
  {
    name: "Wasabi Splattershot",
    sub: "Splat Bomb",
    special: "Inkstrike",
    class: "Shooter",
  },
];

const weaponGuessTable = document.getElementById("weaponTable");

let randWeapon = randomWeapon();  //variable for the random weapon chosen to guess
// let rowCount = 0;

// creates dropdown menu of weapons given a hardcoded array (eventually want to make a read .json implementation)

function createWeaponDropdown() {
  let weaponDiv = document.getElementById("weaponDropdown");
  const weaponList = document.createElement("select");
  weaponList.id = "weaponList";
  // console.log(typeof(weaponList.id));
  weaponDiv.appendChild(weaponList);

  for (let i = 0; i < weapons.length; i++) {
    const option = document.createElement("option");
    option.value = weapons[i].name;
    option.innerText = weapons[i].name;
    weaponList.appendChild(option);
  }
}
// chooses a weapon at random given a hardcoded array (eventually want to make a read .json implementation)

function randomWeapon() {
  const randWeapon = weapons[Math.floor(Math.random() * weapons.length)];

  console.log(randWeapon.name);
  // document.getElementById("weapon").innerText = randWeapon.name;
  document.getElementById("weapon").value = randWeapon.name;

  return randWeapon;
}

// allows the user to guess the randomly selected weapon
function guessWeapon() {
  weaponGuess = document.getElementById("weaponList").value;
  foundGuessedWeapon = weapons.find(x => x.name == weaponGuess);  //finds the object within the array given a name from the dropdown menu
  weaponAnswer = document.getElementById("weapon").value;
  foundAnswerWeapon = weapons.find(x => x.name == weaponAnswer);  //finds the object within the array given a name from randomWeapon()
  
  const row = weaponGuessTable.insertRow();
  // row.id = String("row " + rowCount);
  // rowCount++;

  const mainCell = row.insertCell();
  const subCell = row.insertCell();
  const specialCell = row.insertCell();
  const classCell = row.insertCell();

  mainCell.innerText = foundGuessedWeapon.name;
  subCell.innerText = foundGuessedWeapon.sub;
  specialCell.innerText = foundGuessedWeapon.special;
  classCell.innerText = foundGuessedWeapon.class;

  if (weaponGuess == weaponAnswer) {
    row.style.color = "green";
    console.log("You guessed the right weapon!");
  } else {
    mainCell.style.color = "red";
    foundGuessedWeapon.sub == foundAnswerWeapon.sub ? subCell.style.color = "green" : subCell.style.color = "red";
    foundGuessedWeapon.special == foundAnswerWeapon.special ? specialCell.style.color = "green" : specialCell.style.color = "red";
    foundGuessedWeapon.class == foundAnswerWeapon.class ? classCell.style.color = "green" : classCell.style.color = "red";
  }
}

// document.getElementById("rand-button").addEventListener("click", randomWeapon);
document.getElementById("guess-button").addEventListener("click", guessWeapon);

createWeaponDropdown();
// console.log(weapons);