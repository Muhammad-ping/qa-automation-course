// 1) string; Definition: Represents textual data.
//const name = "muhammad";
const Name = "Muhammad";
const studName = `Muammad`;

//console.log(name);
console.log(Name);
console.log(studName);

// 2) Number: Represents numeric values (integers or floating-point)
// Numbers can be used in arithmetic operations.

const birthdYear = 2002;
const ID = 15234;

console.log(birthdYear);
console.log(ID);

//Boolean
// true/false

// Definition: Represents a logical value, either true or false
let isLightOn = false;
console.log("Is the light on?", isLightOn);
// some one turn on light
isLightOn = true;
console.log("Is the light on?", isLightOn);

//NULL;
//   Represents the intentional absence of any value (Преднамеренное отсутствие)

let seatOwner = null;
console.log("some one seat;", seatOwner);

//Ronaldo come and seat
seatOwner = "Ronaldo";
console.log("some one seat;", seatOwner);

//Undefined

//  Definition-  Indicates a variable has been declared
// but not assigned a value.
let carIsHere;
console.log(" is the car near at home ?", carIsHere);
// car was parked here at home
carIsHere = true;
console.log(" is the car near at home ?", carIsHere);

//Array
// use []
//  Definition: Represents an ordered collection of values (elements),
// which can be of any data type

let carColorAndId = ["white", "black", 25];
console.log(carColorAndId);

//Object  Non-Primitive Data
// use {}
//Definition: Represents a collection of key–value pairs used to store related data and functionality.

let person = {
  name: "Messi",
  age: 40,
  soccerPlayer: true,
};
console.log(person);
console.log(person.age);
