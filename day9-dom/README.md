# 📅 Day 9 - DOM Manipulation Basics

## 🚀 Project Overview
This project demonstrates basic **DOM manipulation using JavaScript**.  
It includes selecting elements, modifying content, styling, and handling user events.

---

## 📂 Project Structure


day9-dom/
├── index.html
├── style.css
└── script.js


---

## 🧱 HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Practice</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1 id="title">Hello Chiku</h1>

  <p id="text">This is a paragraph</p>

  <button id="btn">Click Me</button>

  <script src="script.js"></script>
</body>
</html>
🎨 CSS (style.css)
body {
  font-family: Arial;
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
⚙️ JavaScript (script.js)
🔹 Selecting Elements
let title = document.getElementById("title");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
🔹 Changing Text
title.innerText = "Welcome to DOM 😎";
🔹 Changing Style
title.style.color = "blue";
title.style.backgroundColor = "lightgray";
🔹 Event Listener
btn.addEventListener("click", function () {
  text.innerText = "Button Clicked 🔥";
  text.style.color = "red";
});
💥 Output
👉 On Page Load
Heading changes to: "Welcome to DOM 😎"
Color and background applied
👉 On Button Click
Paragraph changes to: "Button Clicked 🔥"
Text color becomes red
🚀 Bonus Feature (Toggle Text)
btn.addEventListener("click", function () {
  if (text.innerText === "Button Clicked 🔥") {
    text.innerText = "This is a paragraph";
  } else {
    text.innerText = "Button Clicked 🔥";
  }
});
🧠 Concepts Used
DOM Selection (getElementById)
Text Manipulation (innerText)
Style Manipulation (style)
Event Handling (addEventListener)
Conditional Logic
🎯 Key Learnings
JavaScript can dynamically change HTML content
Events allow user interaction
DOM manipulation is core of frontend development
Small projects help in understanding real-world behavior