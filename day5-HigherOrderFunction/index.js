// callback 
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Chiku", sayBye);

// synchronous callback
function process(num, cb) {
  cb(num);
}

process(5, function (n) {
  console.log(n * 2);
});
// asynchronous callback
setTimeout(function () {
  console.log("This is an asynchronous callback");
}, 2000);

//callback hell
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

// HOF
function calculate(a, b, operation) {
  return operation(a, b);
}
function add(x, y) {
  return x + y;
}
console.log(calculate(2, 3, add)); // 5

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}
let double = multiplier(2);
console.log(double(5)); // 10

let arr = [1, 2, 3];

let result = arr.map(function (x) {
  return x * 2;
});

console.log(result); // [2,4,6]

// practice
function process(a, b, cb) {
  return cb(a, b);
}

let result1 = process(5, 3, function (x, y) {
  return x - y;
});

console.log(result1); // 2