// primitive data types
// immutable - cannot be changed after they are created
// "value mutate nahi hoti, reference change hota hai"
let name = "Chiku";   // String
let age = 20;         // Number
let isHappy = true;   // Boolean
let x = null;         
let y;                // undefined

// non-primitive data types
// mutable - can be changed after they are created
let user = {
  name: "Chiku",
  age: 20
};

let arr = [1, 2, 3];

// typeof operator
console.log(typeof "hello");   // string
console.log(typeof 123);       // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // ❌ object (bug)

// example
let a = 10;
let b = a;

b = 20;
console.log(a); // 10 (copy bana)

let obj1 = { name: "Chiku" };
let obj2 = obj1;

obj2.name = "Samrat";

console.log(obj1.name); // Samrat 

// practice
let a1 = null;
console.log(typeof a1);

let b2;
console.log(typeof b2);

let c = [1,2,3];
console.log(typeof c);


let big = 12345678901234567890n;
console.log(typeof big); // bigint
console.log(big); // 12345678901234567890n

let id = Symbol("id");
console.log(typeof id); // symbol
console.log(id); // Symbol(id)


