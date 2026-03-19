//  BASIC TYPE COERCION

console.log("5" + 2);      // "52"
console.log("5" - 2);      // 3
console.log("5" * 2);      // 10
console.log("10" / 2);     // 5


//  CHAINED OPERATIONS

console.log("5" + 2 + 3);     // "523"
console.log("5" + (2 + 3));   // "55"


//  BOOLEAN CONVERSION

console.log(true + true);   // 2
console.log(true + 1);      // 2
console.log(false + 1);     // 1


//  EMPTY VALUES

console.log([] + []);       // ""
console.log([] + {});       // "[object Object]"
console.log({} + []);       // 0


//  EQUALITY CHECKS

console.log(5 == "5");      // true
console.log(5 === "5");     // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false


//  FALSY VALUES

console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false


//  TRUTHY VALUES

console.log(Boolean("hello"));   // true
console.log(Boolean(1));         // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true


//  WEIRD CASES (INTERVIEW FAV)

console.log([] == false);    // true
console.log("" == 0);        // true
console.log(" " == 0);       // true 


//  NUMBER CONVERSION

console.log(Number("123"));   // 123
console.log(Number("abc"));   // NaN
console.log(Number(true));    // 1
console.log(Number(false));   // 0


//  STRING CONVERSION

console.log(String(123));     // "123"
console.log(String(true));    // "true"


//  DOUBLE NOT (!!) TRICK

console.log(!!"hello");   // true
console.log(!!0);         // false




console.log(null + 1);    // 1
console.log(undefined + 1); // NaN


// Nan(Not a Number) is a special value in JavaScript that represents an invalid number.
//  It is the result of operations that cannot produce a valid number, 
// such as dividing zero by zero or converting a non-numeric string to a number.
//  NaN is unique because it is not equal to itself, which can lead to some interesting behavior when comparing values.
//  BASIC NaN

console.log(Number("abc"));    // NaN
console.log("hello" - 2);      // NaN
console.log(undefined + 1);    // NaN


//  typeof NaN

console.log(typeof NaN);       // "number"


//  NaN comparisons (MOST IMPORTANT)

console.log(NaN == NaN);       // false
console.log(NaN === NaN);      // false


//  CHECKING NaN

console.log(isNaN("abc"));         // true ❌ (confusing)
console.log(Number.isNaN("abc"));  // false ✅

console.log(Number.isNaN(NaN));    // true


//  OPERATIONS WITH NaN

console.log(NaN + 1);   // NaN
console.log(NaN * 5);   // NaN
console.log(NaN - 10);  // NaN


//  NULL vs UNDEFINED

console.log(null + 1);        // 1
console.log(undefined + 1);   // NaN


//  STRING TO NUMBER FAIL

console.log("10" - "a");   // NaN
console.log("abc" * 2);    // NaN


//  VALID CONVERSION

console.log("10" - "5");   // 5


//  EDGE CASES

console.log(0 / 0);        // NaN
console.log(Math.sqrt(-1)); // NaN


//  PARSE CASES

console.log(parseInt("abc"));    // NaN
console.log(parseFloat("xyz"));  // NaN


//  BOOLEAN CASES

console.log(Number(true));   // 1
console.log(Number(false));  // 0


//  BONUS (INTERVIEW)

let x = Number("abc"); // NaN

if (Number.isNaN(x)) {
  console.log("Invalid number input");
}