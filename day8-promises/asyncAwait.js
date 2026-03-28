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

//Har async function automatically Promise return karta hai
async function test() {
  let x = await Promise.resolve(5);
  let y = await Promise.resolve(10);
  console.log(x + y);
}
test();

async function test() {
  return 5;
}
test().then(res => console.log(res));

// Promise ko unwrap karta hai
async function test() {
  let x = await Promise.resolve(10);
  console.log(x);
}
test();

async function test() {
  let x = Promise.resolve(10);
  console.log(x);
}
test();

// error handling
async function test() {
  try {
    let data = await Promise.reject("Error aa gaya");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
test();

async function getData() {
  return "Data mil gaya";
}

async function main() {
  let data = await getData();
  console.log(data);
}
main();

// practice
async function test() {
  console.log("A");

  let x = await Promise.resolve("B");

  console.log(x);

  console.log("C");
}

test();
console.log("D"); // A D B C