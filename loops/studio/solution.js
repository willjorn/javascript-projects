const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  for (let i = 0; i < numMeals; i++) {
    let meal = [];
    for (let j = 0; j < pantry.length; j++) {
      let randomIndex = Math.floor(Math.random() * pantry[j].length);
      meal.push(pantry[j][randomIndex]);
    }
    meals.push(meal);
  }

  return meals;
}

function askForNumber() {
  let numMeals = Number(input.question("How many meals would you like to make? "));
  
  while (isNaN(numMeals) || numMeals < 1 || numMeals > 6) {
    numMeals = Number(input.question("Please select a number from 1 to 6: "));
  }

  return numMeals;
}

function generatePassword(string1, string2) {
  let combined = string1 + string2;
  let shuffled = combined.split('').sort(() => 0.5 - Math.random()).join('');
  return shuffled;
}

function runProgram() {
  /// TEST PART A #2 HERE ///
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
  console.log(meals);

  /// TEST PART B HERE ///
  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

  /// TEST PART C HERE ///
  let password1 = 'flavor';
  let password2 = 'saver';
  console.log("Time to run the password generator so we can update the menu tomorrow.");
  console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};

runProgram();  // Uncomment this line if you want to run the program directly

