let weapons = [];

let answerWeapon; //variable for the random weapon chosen to guess

async function getData() {
  try {
    const response = await fetch("weaponsListS1.json");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(typeof data);
    weapons = data.weapons; //setting weapons to data.weapons because data has an attribute weapons in it

    createWeaponDropdown();
    answerWeapon = randomWeapon();

    // console.log(result);
  } catch (error) {
    console.error(error.message);
  }
  console.log("Weapons loaded:", weapons.length);
}

getData();
const weaponGuessTable = document.getElementById("weaponTable");

// creates dropdown menu of weapons given a hardcoded array (eventually want to make a read .json implementation)
function createWeaponDropdown() {
  const weaponList = document.getElementById("weaponList");

  for (let i = 0; i < weapons.length; i++) {
    const option = document.createElement("option");
    option.value = weapons[i].name;
    option.innerHTML = weapons[i].name;
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
  const weaponGuess = document.getElementById("weaponList").value;
  const foundGuessedWeapon = weapons.find((x) => x.name == weaponGuess); //finds the object within the array given a name from the dropdown menu
  weaponAnswer = document.getElementById("weapon").value;
  foundAnswerWeapon = weapons.find((x) => x.name == weaponAnswer); //finds the object within the array given a name from randomWeapon()

  const row = weaponGuessTable.insertRow();

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
    foundGuessedWeapon.sub == foundAnswerWeapon.sub
      ? (subCell.style.color = "green")
      : (subCell.style.color = "red");
    foundGuessedWeapon.special == foundAnswerWeapon.special
      ? (specialCell.style.color = "green")
      : (specialCell.style.color = "red");
    foundGuessedWeapon.class == foundAnswerWeapon.class
      ? (classCell.style.color = "green")
      : (classCell.style.color = "red");
  }
}

// document.getElementById("rand-button").addEventListener("click", randomWeapon);
document.getElementById("guess-button").addEventListener("click", guessWeapon);
