## 📅 Day - Async / Await & Promises

---

## 🧠 What is Async/Await?

- `async` function → hamesha Promise return karta hai  
- `await` → Promise ko resolve hone ka wait karta hai  

---

## ⚡ Basic Example

```javascript
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data mil gaya");
    }, 2000);
  });
}

async function fetchData() {
  let result = await getData();
  console.log(result);
}

fetchData();
🔹 Async Function Always Returns Promise
async function test() {
  return 5;
}

test().then(res => console.log(res)); // 5
🔹 Await with Promise
async function test() {
  let x = await Promise.resolve(5);
  let y = await Promise.resolve(10);

  console.log(x + y); // 15
}

test();
🔍 Await vs Normal Promise
// with await
async function test() {
  let x = await Promise.resolve(10);
  console.log(x); // 10
}

// without await
async function test2() {
  let x = Promise.resolve(10);
  console.log(x); // Promise
}
❗ Error Handling (try...catch)
async function test() {
  try {
    let data = await Promise.reject("Error aa gaya");
    console.log(data);
  } catch (err) {
    console.log(err); // Error aa gaya
  }
}

test();
🔁 Another Example
async function getData() {
  return "Data mil gaya";
}

async function main() {
  let data = await getData();
  console.log(data);
}

main();
🔄 Execution Order (Important)
async function test() {
  console.log("A");

  let x = await Promise.resolve("B");

  console.log(x);

  console.log("C");
}

test();
console.log("D");
Output:
A
D
B
C