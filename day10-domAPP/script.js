let input = document.getElementById("input");
let output = document.getElementById("output");
let count = document.getElementById("count");
let clearBtn = document.getElementById("clearBtn");

// LIVE UPDATE
input.addEventListener("input", function () {
  let text = input.value;

  if (text.trim() === "") {
    output.innerText = "Your text will appear here";
  } else {
    output.innerText = text;
  }

  count.innerText = text.length + " characters";
});

// CLEAR BUTTON
clearBtn.addEventListener("click", function () {
  input.value = "";
  output.innerText = "Your text will appear here";
  count.innerText = "0 characters";
});