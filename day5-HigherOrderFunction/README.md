## 📅 Day 5 - Callbacks, HOF & Array Methods

### 🔹 Topics Covered
- Callbacks (Synchronous & Asynchronous)
- Callback Hell
- Higher Order Functions (HOF)
- map(), filter(), reduce()

---

## 🔁 Callbacks

A callback is a function passed as an argument to another function.

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Chiku", sayBye);

Callback Hell
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

👉 Nested callbacks make code hard to read and maintain

Higher Order Functions (HOF)

A function that:

Takes another function as argument OR

Returns a function

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(2, 3, add)); // 5

map()

Returns a new array

Does not modify original array

let arr = [1, 2, 3];

let result = arr.map(function (x) {
  return x * 2;
});

console.log(result); // [2,4,6]

filter()

Returns elements that satisfy condition

let arr1 = [1, 2, 3, 4];
let result1 = arr1.filter(x => x % 2 === 0);
console.log(result1); // [2,4]


reduce()

Returns a single value

let arr3 = [1, 2, 3, 4];

let sum = arr3.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10

Key Learnings
Callback = function passed as argument
Sync vs Async callbacks difference
Callback hell = nested callbacks (bad practice)
HOF = function that takes/returns function
map → transform array
filter → select elements
reduce → single value output
Chaining makes code powerful