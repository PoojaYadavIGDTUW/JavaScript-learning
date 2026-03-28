## 📅 Day - "this" Keyword in JavaScript

---

## 🧠 What is `this`?

`this` refers to the object in which the function is being executed (calling context).

---

## 🌍 Global Context

- Browser → `window`
- Node → `global`

```javascript
console.log(this);
⚙️ Function Context
Normal function me this → global object (non-strict mode)
function test() {
  console.log(this);
}

test();
🧱 Object Context
Method call → this refers to that object
let user = {
  name: "Chiku",
  greet: function () {
    console.log(this.name);
  }
};

user.greet(); // Chiku
⚡ Arrow Function Context
Arrow function ka apna this nahi hota
Wo outer scope ka this use karta hai
let user1 = {
  name: "Chiku",
  greet: () => {
    console.log(this.name);
  }
};

user1.greet(); // undefined
🔍 Normal vs Arrow
let obj = {
  name: "Chiku",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj.normal(); // Chiku
obj.arrow();  // undefined
❌ Problem: Inner Function
let obj1 = {
  name: "Chiku",
  greet: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

obj1.greet(); // undefined

👉 inner function ka this global ho jata hai

✅ Solution 1: Arrow Function
let obj2 = {
  name: "Chiku",
  greet: function () {
    let inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

obj2.greet(); // Chiku
✅ Solution 2: Store this (self)
let obj3 = {
  name: "Chiku",
  greet: function () {
    let self = this;

    function inner() {
      console.log(self.name);
    }

    inner();
  }
};

obj3.greet(); // Chiku