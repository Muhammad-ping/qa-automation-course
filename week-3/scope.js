// Global scope  - accsess (use) enerywhere

let global = "My name is Muhammad";
console.log(global);

function funcGlobal(n1, n2) {
  if (n1 > n2) {
    console.log(global);
  }
  console.log(global);
}

funcGlobal(8, 1);

//Function Scope

function Hello() {
  let messeg = "Hello world";
  console.log(messeg);
}

// console.log(messeg); - not show becaus its inside function
// but we can use indise func.. two or more time
Hello();

// or
function you() {
  if (10 > 1) {
    let aaa = 125;
    console.log(aaa);
  }
  // console.log(aaa); - don`t work becaus its inside if {}`
}
you();

// block scope

if (18 < 4) {
  const Rikki = 57;
}

//console.log(Rikki); - not work because it`s indise block`
