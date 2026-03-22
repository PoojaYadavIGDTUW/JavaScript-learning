let user = {
  name: "Chiku",
  age: 20
};
let { name, age } = user;
console.log(name); // Chiku
console.log(age);  // 20
// Instead of:
// user.name
// user.age
//  Direct variables mil gaye

// rename
let { name: username } = user;
console.log(username); // Chiku

// default values
let { city = "Delhi" } = user;
console.log(city); // Delhi

// practice
let user2 = {
  name1: "Chiku",
  age: 20
};
let { name1, city1 = "Mumbai" } = user2;
console.log(name1, city1);

// spread operator
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };
let result = { ...obj1, ...obj2 };
console.log(result); // { a: 1, b: 2, c: 3 }

// Object me duplicate keys allowed nahi hote. later properties overwrite earlier ones”
let obj = { a: 1, b: 2 };
let newObj = { ...obj, b: 5 };
console.log(newObj); // { a: 1, b: 5 }

// rest operator
let obj3 = {
  a: 1,
  b: 2,
  c: 3
};
let { a, ...rest } = obj3;
console.log(a);     // 1
console.log(rest);  // ? { b: 2, c: 3 }
