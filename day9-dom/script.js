// SELECT ELEMENTS
let title = document.getElementById("title");
let text = document.getElementById("text");
let btn = document.getElementById("btn");

// CHANGE TEXT
title.innerText = "Welcome to DOM 😎";

// CHANGE STYLE
title.style.color = "blue";
title.style.backgroundColor = "lightgray";

// EVENT LISTENER
btn.addEventListener("click", function () {
  text.innerText = "Button Clicked 🔥";
  
  text.style.transform = "scale(1.2)";
  setTimeout(() => {
    text.style.transform = "scale(1)";
  }, 200);
});