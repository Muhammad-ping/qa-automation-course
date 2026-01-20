// if
//if (x>10) {}

//Definition: Executes a block of code if the condition is true.
//if condition true it show in terminal
let enterAge = 19;

if (enterAge >= 18) {
  console.log("you good bro"); //  true
}
// if condition not true it not show in terminal
let winScore = 75;
if (winScore > 85) {
  console.log("you win!!!", winScore); // no true
}
console.log(winScore);
// else if
//else if (x>10) {}
// Definition: Specifies a new condition if the previous if condition is false.

let age = 55;

if (age === 25) {
  // if we use one = it will be reassingh.
  console.log("you good man");
} else if (age > 45) {
  console.log("you old bro"); // this true
}

// Else
//else {}
//Definition: Executes a block of code if all previous conditions are false.

let myPoint = 95;

if (myPoint > 100) {
  console.log("you are wellcome to the collage");
} else if (myPoint < 88) {
  console.log("you are not accept");
} else {
  console.log(" you are on weating"); // this true
}

//Switch
//switch (x) {case 1: break;}
//Definition: Allows you to execute one block of code from many options.

// when is off day ?
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

// when is holiday ?
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
// esli ne budet (break) mejdu case  to ono budet pocazovat dwa case vmeste!!!
//eee
