// function declaration
function greet(){
    console.log("Hello chiku!!");
}
greet(); // calling the function

// function declaration with parameters (hoisting works here)
function add(a,b){
    return a+b;
}
console.log(add(11,6)); // calling the function with arguments

// function expression (hoisting does not work here)
const add2=function(a,b){
    return a+b;
}
console.log(add2(11,6)); // calling the function with arguments

// arrow function (hoisting does not work here)
const add3=(a,b)=>{
    return a+b;
}
console.log(add3(11,6)); // calling the function with arguments

// arrow function with implicit return
const add4=(a,b)=> a+b;
console.log(add4(11,6)); // calling the function with arguments

// hoisting is a JavaScript mechanism where variables and function declarations are moved 
// to the top of their containing scope during the compilation phase. 
// This means that you can use functions and variables before they are declared in the code.
//  However, this only applies to function declarations, not function expressions or arrow functions.

// parameters vs arguments
// parameters are the variables that are defined in the function declaration,
// while arguments are the actual values that are passed to the function when it is called.
function add(a, b) { // parameters
  return a + b;
}

add(2, 3); // arguments

// return vs console.log
// return is used to return a value from a function, while console.log is used to print a value to the console.
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result);

// practice
function test() {
  console.log("Hello");
}

let x = test();
console.log(x); // undefined (because the function does not return anything)