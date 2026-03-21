// map
let arr = [1,2,3];
let result = arr.map(x => x * 2);
console.log(result); 
// map():
// original array change nahi karta ❌
// naya array return karta hai ✅

let names = ["pooja", "chiku"];
let upper = names.map(name => name.toUpperCase());
console.log(upper);

let users = [
  {name: "A", age: 20},
  {name: "B", age: 25}
];
let ages = users.map(user => user.age);
console.log(ages);

// filter
let arr1 = [1, 2, 3, 4];
let result1 = arr1.filter(x => x % 2 === 0);
console.log(result1); // [2,4]

let arr2 = [5, 10, 15, 20];
let result2 = arr2.filter(x => x > 10);
console.log(result2); // [15,20]

// reduce (one value return karta hai)
let arr3 = [1, 2, 3, 4];
let sum = arr3.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum); // 10

let arr4 = [2, 3, 4];
let result3 = arr4.reduce((acc, curr) => {
  return acc * curr;
}, 1);
console.log(result3); // 24

// practice
let arr5 = [1, 2, 3];

let result4 = arr5
  .map(x => x * 2)
  .filter(x => x > 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result4); // 10