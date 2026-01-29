let carBrands = ["Toyota", "KIA", "Hyundai", "Mersedes", "BMW"];
let araayNumber = [3, 6, 4, 8, 1];
let string = "Toyota is the best car in the world";
let number = 25.5;

//## PART 1: STRING + FUNCTIONS
// ### 🔤 Task 1: Clean & Format Text
// Write a function that:
// 1. Takes a string
// 2. Removes extra spaces at the start and end
// 3. Converts the string to lowercase
// 4. Returns the cleaned string

function number1(string) {
  let trim = string.trim();
  let caseLowwer = trim.toLowerCase();
  return caseLowwer;
}

console.log(number1(" HI BRO ")); // hi bro

//### 🔤 Task 2: First & Last Character
// 1. Takes a string
// 2. Returns:
//     - The first character
//     - The last character

// 📌 Must handle strings with spaces.

function number2(string) {
  let num1 = string[0];
  let num2 = string.at(-1);
  return { num1, num2 };
}

console.log(number2(" hello bro ")); // I have a space at the beginning and at the end.

// ### 🔤 Task 3: Word Counter
// Write a function that:
// 1. Takes a sentence
// 2. Splits it into words
// 3. Returns the number of words
// 📌 Use string and array methods only.

function number3(string) {
  let words = string.split(" ");
  let numWord = `${words.length}`;
  return numWord;
}

console.log(number3("my name is MUhammad")); //4

//## 🔹 PART 2: ARRAY + FUNCTIONS

// ### 🚗 Task 4: Brand Checker
// Write a function that:
// 1. Takes an array of car brands
// 2. Takes a brand name
// 3. Returns:
//     - `"Brand exists"` if found
//     - `"Brand not found"` otherwise
// 📌 Case-insensitive comparison required.

// console.log(brand); //[ 'Toyota', 'KIA', 'Hyundai', 'Mersedes', 'BMW' ]
// function number4() {
//   let carM = carBrands.includes(brand);
//   let carMark = carM;
//   if (carMark) {
//     return "Brand exists";
//   } else {
//     return "Brand not found";
//   }
// }

// console.log(number4());

//### 🚗 Task 5: Get Last Brand
// Write a function that:
// 1. Takes an array of car brands
// 2. Returns the **last brand** using an array method

// console.log(carBrands);
// let array = (carBrands) => console.log(carBrands.lastIndexOf(4)); // I don`t now why it doesn`t work
// array();

function number5() {
  let array = carBrands.at(-1);
  return array;
}

console.log(number5());

//### Task 6: Format Brands List
// Write a function that:
// 1. Takes an array of car brands
// 2. Returns a **single string** of brands separated by commas

function number6() {
  let carJoin = carBrands.join(",");
  return carJoin;
}

console.log(number6());

// ## PART 3: NUMBER + FUNCTIONS
// ### 🔢 Task 7: Safe Rounding
// Write a function that:
// 1. Takes a number
// 2. If the value is not a number → return `"Invalid number"`
// 3. Otherwise:
//     - Round it normally
//     - Return the result

function number7(number) {
  let num = Number(number);
  if (Number.isNaN(num)) {
    return "Invalid number";
  }
  let numRound = Math.round(number);
  return numRound;
}

console.log(number7(10.5));

//### Task 8: Price Comparison
// Write a function that:
// 1. Takes two prices
// 2. Returns:
//     - `"Prices are equal"`
//     - `"First is higher"`
//     - `"Second is higher"`

function number8(num1, num2) {
  if (num1 === num2) {
    return "Prices are equal";
  } else if (num1 > num2) {
    return "First is higher";
  } else if (num1 < num2) {
    return "Second is higher";
  }
}

console.log(number8(8, 8));

// ### Task 9: Random Whole Number
// Write a function that:
// 1. Returns a random **whole number between 1 and 10**
// 2. Explain the formula in comments

//Math.floor(Math.random() * (max - min + 1)) + min;

function number9(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

console.log(number9(1, 10));

//use folmula and function . I don`t Know have explain but it was easy

// ## PART 4: CONDITIONAL THINKING
// ### 🧠 Task 10: Budget Check
// Write a function that:
// 1. Takes:
//     - car price
//     - user budget
// 2. Returns:
//     - `"Within budget"`
//     - `"Over budget"`
//     - `"Invalid input"`
// 📌 Must validate inputs before comparing.
//  → This means check if a car price is negative and it is a number and also
//  if the budget is negative and if it is a number.
//  **HINT:** This should handle returning `"Invald input"` part.

function number10(carPrice, userBudget) {
  let carPrice1 = Number(carPrice);
  let userBudget1 = Number(userBudget);
  if (Number.isNaN(carPrice1)) {
    return "Invald input";
  } else if (carPrice < 0) {
    return "Invald input";
  } else if (Number.isNaN(userBudget1)) {
    return "Invald input";
  } else if (userBudget < 0) {
    return "Invald input";
  } else if (carPrice <= userBudget) {
    return "Within budget";
  } else if (carPrice > userBudget) {
    return "Over budget";
  }
}

console.log(number10(5000, 7500));
