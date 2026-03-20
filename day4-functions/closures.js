//Function + uska surrounding data (scope) = Closure
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

let fn = outer();

fn(); // 1
fn(); // 2
// Closure =
// Function apne outer variables ko yaad rakhta hai even after outer function finished

// practice
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

let fn1 = outer();
let fn2 = outer();

fn1();
fn2();

function outer() {
  let count = 0;

  return function () {
    return count++;
  };
}

let a = outer();
let b = outer();

console.log(a()); // 0 (because count is 0 in the first call)
console.log(a()); // 1 (because count is incremented to 1 in the second call)
console.log(b()); // 0 (because count is 0 in the first call of b, as it has its own closure)
console.log(b()); // 1 (because count is incremented to 1 in the second call of b)

// counter
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// private variable
function createUser() {
  let password = "12345";

  return {
    checkPassword: function (input) {
      return input === password;
    }
  };
}

let user = createUser();

console.log(user.checkPassword("12345")); // true
console.log(user.checkPassword("wrong")); // false

// counter button logic
function counterApp() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    }
  };
}

let app = counterApp();

app.increment(); // 1
app.increment(); // 2
app.decrement(); // 1