let name = "Chiku";
console.log(name);

// var
var x = 10;
console.log(x);

// let
let y = 20;
console.log(y);

// const
const z = 30;
console.log(z);

// block scope
{
  let a = 10;
  const b = 20;
}
// console.log(a); //  error
// console.log(b); //  error

// example
const userId = 101;  // fixed
let score = 0;       // change hoga

//practice
var x = 10;
let y2 = 20;

{
  var x = 30;   // var is function scoped, so it will overwrite the previous x
  let y2 = 40;   // let is block scoped, so this y is different from the previous y
}

console.log(x);  // Output: 30
console.log(y2);  // Output: 20

let a = 5;

{
  let a = 10;
  console.log(a); // Output: 10
}

console.log(a);  // Output: 5