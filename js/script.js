// const weapons = [
//   "Splattershot",
//   "Splat Roller",
//   "Splat Charger",
//   "Blaster",
//   "Inkbrush",
//   "Slosher",
// ];

let weaponsS1;

fetch("weaponsListS1.json")
  .then(res => res.json())
  .then(data => {
    weaponsS1 = data;
    createWeaponDropdown(); // safe to call here
  })
  .catch(err => console.error(err));

async function createWeaponDropdown() {
  try {
    const response = await fetch("weaponsListS1.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const weaponsS1 = await response.json();

    // ----- DROPDOWN -----
    const weaponDiv = document.getElementById("weaponDropdown");
    const weaponList = document.createElement("select");
    weaponList.id = "weaponList";
    weaponDiv.appendChild(weaponList);

    for (let weapon of weaponsS1.weapons) {
      let option = document.createElement("option");
      option.value = weapon;
      option.textContent = weapon.name;
      weaponList.appendChild(option);
    }

    // // ----- TABLE -----
    // const weaponGuessTable = document.getElementById("weaponTable");

    // for (let weapon of weaponsS1.weapons) {
    //   const row = weaponGuessTable.insertRow();

    //   row.insertCell().textContent = weapon.name;
    //   row.insertCell().textContent = weapon.sub;
    //   row.insertCell().textContent = weapon.special;
    //   row.insertCell().textContent = weapon.class;
    // }

  } catch (error) {
    console.error("Failed to load weapons:", error);
  }
}

//   let weaponDiv = document.getElementById("weaponDropdown");

//   const weaponList = document.createElement("select");
//   weaponList.id = "weaponList";
//   weaponDiv.appendChild(weaponList);

//   for (let i = 0; i < weaponsS1.weapons.length; i++) {
//     const option = document.createElement("option");
//     option.value = weaponsS1.weapons[i].name;
//     option.text = weaponsS1.weapons[i].name;
//     weaponList.appendChild(option);
//   }

//   const weaponGuessTable = document.getElementById("weaponTable")

//   for (let i = 0; i < weaponsS1.weapons.length; i++) {
//     const nameRow = weaponGuessTable.insertRow();

//     const newCell = nameRow.insertCell();
//     const newText = document.createTextNode(weaponsS1.weapons[i].name)
//     newCell.appendChild(newText);

//     const newCell2 = nameRow.insertCell();
//     const newText2 = document.createTextNode(weaponsS1.weapons[i].sub)
//     newCell2.appendChild(newText2);

//     const newCell3 = nameRow.insertCell();
//     const newText3 = document.createTextNode(weaponsS1.weapons[i].special)
//     newCell3.appendChild(newText3);

//     const newCell4 = nameRow.insertCell();
//     const newText4 = document.createTextNode(weaponsS1.weapons[i].class)
//     newCell4.appendChild(newText4);
//   }
// }
function randomWeapon() {
  const randWeapon = (document.getElementById("weapon").innerHTML =
    weapons[Math.floor(Math.random() * weapons.length)]);
  document.getElementById("weapon").value = randWeapon;
}

function guessWeapon() {
  weaponGuess = document.getElementById("weaponList");
  weaponAnswer = document.getElementById("weapon").value;

  // ----- TABLE -----
    const weaponGuessTable = document.getElementById("weaponTable");
    
    console.log(weaponGuess.value.id);

  //   const row = weaponGuessTable.insertRow();
    
  //   row.insertCell().textContent = weaponGuess.value;
  //   // row.insertCell().textContent = weapon.sub;
  //   // row.insertCell().textContent = weapon.special;
  //   // row.insertCell().textContent = weapon.class;
  
  // if (weaponGuess == weaponAnswer) {
  //   console.log("You guessed the right weapon!");
  // } else {
  //   console.log("You guessed the wrong weapon...");
  // }
  
  //   console.log(document.getElementById("weaponList").value);
  //   console.log(document.getElementById("weapon").value);
}

document.getElementById("button").addEventListener("click", randomWeapon);
document.getElementById("guess-button").addEventListener("click", guessWeapon);

// function createWeaponDropdown() {
//   if(!weaponsS1) {
//     console.log("Weapons not loaded yet!");
//     return;
//   }
  
//   console.log("Weapons are loaded, creating dropdown.")
//   let weaponDiv = document.getElementById("weaponDropdown");

//   const weaponList = document.createElement("select");
//   weaponList.id = "weaponList";
//   weaponDiv.appendChild(weaponList);

//   for (let i = 0; i < weaponsS1.weapons.length; i++) {
//     const option = document.createElement("option");
//     option.value = weaponsS1.weapons[i].name;
//     option.text = weaponsS1.weapons[i].name;
//     weaponList.appendChild(option);
//   }
// }
// function createTable() {
//   const weaponGuessTable = document.getElementById("weaponTable")
//   const nameRow = weaponGuessTable.insertRow();

//   const newCell = nameRow.insertCell();
//   const newText = document.createTextNode(weaponsS1.weapons[0].name)
//   newCell.appendChild(newText);
// }
// createTable();

// console.log(weaponsS1);