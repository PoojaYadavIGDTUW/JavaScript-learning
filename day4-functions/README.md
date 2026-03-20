## 📅 Day 4 - Functions, Scope & Closures

### 🔹 Topics Covered
1. Function Declaration, Expression & Arrow Functions
2. Parameters vs Arguments
3. return vs console.log
4. Global & Local Scope
5. Closures
6. Counters & Private Variables
7. Counter App Logic

---

##  Function Types

### Function Declaration

function greet() {
  console.log("Hello Chiku!!");
}
greet();

Parameters: variables defined in function declaration
Arguments: actual values passed when calling function

return → returns value from function
console.log → prints value to console

Closures
A function remembers its outer variables even after the outer function finishes

function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}

let fn1 = outer();
let fn2 = outer();

fn1(); // 10
fn2(); // 10

 Counter Example
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

 Private Variable Example
function createUser() {
  let password = "12345";

  return {
    checkPassword: function(input) {
      return input === password;
    }
  };
}

let user = createUser();
console.log(user.checkPassword("12345")); // true
console.log(user.checkPassword("wrong")); // false

 Counter App Logic
function counterApp() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

let app = counterApp();
app.increment(); // 1
app.increment(); // 2
app.decrement(); // 1