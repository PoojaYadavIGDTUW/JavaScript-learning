## 📅 Day - Objects, Destructuring & Spread/Rest

---

## 🧱 Objects (Basics)

Objects store data in **key-value pairs**.

```javascript
let user = {
  name: "Chiku",
  age: 20,
  isStudent: true
};

console.log(user.name);   // Chiku
console.log(user["age"]); // 20
✏️ Add / Delete Properties
user.city = "Delhi";     // add
delete user.isStudent;   // delete

console.log(user);
// { name: 'Chiku', age: 20, city: 'Delhi' }
🏠 Nested Objects
let user1 = {
  name: "Chiku",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

console.log(user1.address.city); // Delhi
⚙️ Methods in Objects

Object ke andar function → method

let user = {
  name: "Chiku",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Chiku
🎯 Object Destructuring
let user = {
  name: "Chiku",
  age: 20
};

let { name, age } = user;

console.log(name); // Chiku
console.log(age);  // 20
🔹 Rename Variables
let { name: username } = user;
console.log(username); // Chiku
🔹 Default Values
let { city = "Delhi" } = user;
console.log(city); // Delhi
🔹 Practice
let user2 = {
  name1: "Chiku",
  age: 20
};

let { name1, city1 = "Mumbai" } = user2;

console.log(name1, city1);
🔄 Spread Operator (...)

Used to merge objects

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };

let result = { ...obj1, ...obj2 };

console.log(result); // { a: 1, b: 2, c: 3 }
⚠️ Duplicate Keys

Later value overwrite karti hai

let obj = { a: 1, b: 2 };
let newObj = { ...obj, b: 5 };

console.log(newObj); // { a: 1, b: 5 }
📦 Rest Operator (...)

Remaining properties collect karta hai

let obj3 = {
  a: 1,
  b: 2,
  c: 3
};

let { a, ...rest } = obj3;

console.log(a);    // 1
console.log(rest); // { b: 2, c: 3 }