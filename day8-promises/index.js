// callback hell
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

// Promise = future me milne wala result (success ya fail)
let promise = new Promise(function(resolve, reject) {
  let success = true;
  if (success) {
    resolve("Kaam ho gaya");
  } else {
    reject("Error aa gaya");
  }
});
promise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data mil gaya");
    }, 2000);
  });
}
getData().then(data => console.log(data));

// Promise chaining
Promise.resolve(2)
  .then(x => x * 2)
  .then(x => x + 1)
  .then(x => console.log(x));

// practice
Promise.resolve(10)
  .then(x => x + 5)
  .then(x => {
    console.log(x);
    return x * 2;
  })
  .then(x => console.log(x));