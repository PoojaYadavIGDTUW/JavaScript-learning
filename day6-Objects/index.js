// objects
// objects are used to store multiple values in a single variable
// key-value pairs
let user = {
  name: "Chiku",
  age: 20,
  isStudent: true
};
console.log(user.name); // Chiku
console.log(user["age"]); // 20
// Dynamic keys ke liye bracket use hota hai
user.city = "Delhi";
console.log(user); // { name: 'Chiku', age: 20, isStudent: true, city: 'Delhi' }
delete user.isStudent;
console.log(user); // { name: 'Chiku', age: 20, city: 'Delhi' }

// nested objects
let user1 = {
  name: "Chiku",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};
console.log(user1.address.city); // Delhi

let user = {
  name: "Chiku",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Chiku
//Object ke andar function → method kehlata hai