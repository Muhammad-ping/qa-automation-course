//Exercise 1:

//"Hello World" //- String
//42 //number
//true  // Boolean
//null // Null
//undefined // undefined
//[1, 2, 3] // Array
//{ name: "Alex", age: 20 } // object

// Exercise 2:
//Create variables for each of the following and assign appropriate values:
//- A **string** for your favorite movie
//-A **number** for your age
//- A **boolean** for whether you like JavaScript
//- A variable with **undefined** value
//- A variable with **null** value

//1
//const favoriteMovie = "Breveheart";
//console.log(favoriteMovie);

//2
let myAge = 23;
console.log(myAge);

//3
let isJavaEasyNow = true;
console.log("Is java easy for me now?", isJavaEasyNow);

//4
let whereCar;
console.log("where is my car?", whereCar);

//5
let whoInsideCar = null;
console.log("who is inside the car?", whoInsideCar);

// Exercise 3: Primitive vs Non-Primitive
//a) Which of the following are **primitive** and which are **non-primitive**?
//let a = "JS"; - primitive
//let b = [10,20]; - non prim
//let c = 100; - primitive
//let d = { city:"Paris" }; - non prim

//b) Explain in **1–2 sentences** why arrays and objects are called *non-primitive*.
//Examples: Object, Array, Function , Date , RegExp
// Stored by reference and mutable
//(you can change the contents without re-assigning
//the variable).

// Exercise 4: Modify the Value
//Look at the code below and answer the questions:
//let x ="Hello";
//let y = x;
//y ="Hi";
//a) What is the value of `x`?
// answer is x = "hello"; because we do y = x  its meen (hello = hello) and than y = "Hi"(hello = hi)  but x- don`t changed.
//b) Is this an example of primitive or non-primitive behavior? Why?
//it`s primitive because string is primitive

// Exercise 5: Array
//Create 3 different arrays that contains 5 elements each.
// Use different data types for each array.
// Log (console.log) the entire array

//1
let carColorAndInfo = ["white", "black", null, 2012, "5.1 motor"];
console.log(carColorAndInfo);

//2
let myInfo = ["white", 23, "Born2002", null, "Master sport"];
console.log(myInfo);

//3
let telephonInfo = ["Grey", "162.3mm", "4000mAh", "Galaxy", 24];
console.log(telephonInfo);

// Exercise 6:
//### 6️⃣ Object
//Create 3 different objects representing **something real** (example: phone, car, book, student, game etc).
//**Requirements for each object:**
//At least **5 properties**
// At least **1 property must be an array**

//Tasks:**
//Log (console.log) the entire object
// Access **two properties (keys)** using dot notation and print the value of those properties.

//1
let favoriteMovie = {
  movieName: "Gladiator",
  releaseDate: 2000,
  actors: "Russell Crowe , Loaquin Phoenix and etc.",
  buget: "$103 million",
  BoxOffice: "$466 million",
};
console.log(favoriteMovie);
console.log(favoriteMovie.movieName);
console.log(favoriteMovie.BoxOffice);

//2
let ufcBESTfighter = {
  fightername: "Islam Makhachev",
  hisAge: 34,
  fightWeight: "Welterweight",
  belt: "duble champ",
  p4p: "numper 1",
};
console.log(ufcBESTfighter);
console.log(ufcBESTfighter.p4p);
console.log(ufcBESTfighter.fightername);

//3
let book = {
  bookName: "Alchemist",
  author: "Paulo Coelho",
  publicationDate: 1993,
  page: 163,
};
console.log(book);
console.log(book.bookName);
console.log(book.author);

// Exercise 7:
//  If Statement
//Write a program that:
//Checks if a number is **positive**
// Prints `"Positive number"` if true

let isNumberPositive = true;
if (isNumberPositive === true) {
  console.log("positive number", isNumberPositive);
}

// Exercise 8: If–Else
//Create a **boolean variable** (your choice of meaning).
//Use `if / else` to log different messages depending on the boolean value
//Change the value and run the code again

//1
//let isCarBlue = true;
//if (isCarBlue === true) {
// console.log("Car is blue?", isCarBlue);
//}
//else {
// console.log("it's ok", isCarBlue);
//}

//2

//1
let isCarBlue = false;
if (isCarBlue === true) {
  console.log("Car is blue?", isCarBlue);
} else {
  console.log("it's ok", isCarBlue);
}

//Exercise 9:Write a program that:
//Takes a student’s score
//Prints:
//  - `"Grade A"` if score > 90
//- `"Grade B"` if score > 80
//- `"Grade C"` if score ≥ 70
//- `"Fail"` otherwise

let studentScore = 65;
if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 80) {
  console.log("Grase B");
} else if (studentScore >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//Exercise 10:### Switch Statement
//Create a variable with **multiple possible values** (string or number - your choice).
//Use a `switch` statement
// Include **at least 3 cases** and a `default`
//Log different messages for each case
//Do two examples one with `break` and one without and see the difference.

//1
let weekDay = "Sunday";

switch (weekDay) {
  case "Monday":
    console.log("work day");
    break;
  case "Tuesday":
    console.log("work day");
    break;
  case "Wednesday":
    console.log("work day");
    break;
  case "Thursday":
    console.log("work day");
    break;
  case "Friday":
    console.log("work day");
    break;
  default:
    console.log("off day bro");
}

// 2 with bo break
let holiday = "Wednesday";

switch (holiday) {
  case "Monday":
    console.log("work day");
    break;
  case "Tuesday":
    console.log("work day");
    break;
  case "Wednesday":
    console.log("HOLIDAY !!!");

  case "Thursday":
    console.log("work day");
    break;
  case "Friday":
    console.log("work day");
    break;
  default:
    console.log("off day bro");
}

//Exercise 11:Challenge (Optional - No hint)
//I will be so happy if you can solve this. Please try, don’t simply give up.
//**Small Hint:** **Order absolutely matters** when you’re classifying numbers with conditions.
//Write a program that:
//- Prints `"Negative number, we don't care!"` (think about the number yourself)
//- Prints `"Single digit number!"` (think about the number yourself)
//- Prints `"Double digit number!"` (think about the number yourself)
//- Prints `"Definitely not a negative, single or double digit number, so it is something else!"` (think about the number yourself)

let number = 135;

if (number < 0) {
  console.log(" Negative number, we don't care");
} else if (number <= 9) {
  console.log(" Single digit number");
} else if (number <= 99) {
  console.log("Double digit number");
} else {
  console.log(
    number,
    ":Definitely not a negative,single or double digit number",
  );
}

// if change to -7 or 1 or 25 it's will work.
// test
//
