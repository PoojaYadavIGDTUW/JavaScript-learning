// Scope is the area where a variable is defined and can be accessed.
//  In JavaScript, there are two types of scope: global scope and local scope.
// global context is the outermost context in which code is executed.
//  Variables declared in the global context are accessible from anywhere in the code.
let a = 10;

function test() {
  let b = 20;
  console.log(a);
}

test();

// local context is the context created when a function is called.
//  Variables declared in the local context are only accessible within that function.
function test2() {
  let c = 30;
  console.log(c);
}
test2();
// console.log(c); // error (because c is not defined in the global context)

// practice
let x = 5;

function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  inner();
}

outer();


let x1 = 5;

function outer() {
  function inner() {
    console.log(x1);
  }

  inner();
}

outer();