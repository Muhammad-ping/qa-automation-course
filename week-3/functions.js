//Function Syntax and Example

function bro() {
  console.log("Hi bro, what going on");
}

bro(); // callimg the function

//2
function math() {
  let mathh = 5 + 6;
  console.log(mathh);
}

math();

//3

function nameScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

nameScore("MUhammad", 50);

//4

function megic(name, score, a, b) {
  //(name, score, a, b)- caal parameter
  console.log(
    `Hi ${name} , what is going on bro , your score is ${score}. you got ${a + b} bro`,
  );
}

megic("Soliev", 50, 35, 15);

// Multiple Parameter

function add(a, b) {
  console.log(a + b);
}

add(5, 3);

//

function iff(num1, num2) {
  if (num1 > num2) {
    console.log("YOU GOOD");
  } else {
    console.log("NOOOOO BROOOOO");
  }
}

iff(5, 1);
iff(1, 9);

//Default Parameters

function greet(name = "SOLIEV") {
  console.log(`hello ${name}`);
}

greet();
greet("URA");

//return values

function addd(num1, num2) {
  return num1 * num2;
}

addd(5, 3); /// nothing show -потому что в function  у нас не говориться console.log
// для этого делаем -

let result = addd(5, 3);
console.log(result); //с помощью этого мы сейчас видим результат return

//
function aaa(n1, n2) {
  return n1 + n2;
}

console.log(aaa(1, 7));

//ARROW

// one line
const I = (name1) => console.log("hello" + " " + name1);

I("SOLIEV");

// or
const You = (name2) => {
  console.log(`noo, YOU ARE NOT ${name2}`);
};
You("Dave");
