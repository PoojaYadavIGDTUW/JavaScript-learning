# 💻 Live Text App Pro

## 🚀 Project Overview
Live Text App is a simple yet powerful **DOM-based real-time text application**.  
It updates text instantly as the user types and handles multiple **edge cases with clean UI/UX**.

---

## ✨ Features

- 🔄 Live text update while typing  
- 🔢 Real-time character counter  
- 🧹 Clear button to reset input  
- 🚫 Handles empty input gracefully  
- 📦 Overflow handling with scroll  
- 🎨 Clean and responsive UI  

---

## 📂 Project Structure


day10-live-text-app/
├── index.html
├── style.css
└── script.js


---

## 🧱 HTML (index.html)

- Input field for user text  
- Output display area  
- Character counter  
- Clear button  

---

## 🎨 CSS (style.css)

- Centered layout using Flexbox  
- Gradient background  
- Card-style container with shadow  
- Scrollable output box  
- Hover effects on button  

---

## ⚙️ JavaScript (script.js)

### 🔹 DOM Selection

```javascript
let input = document.getElementById("input");
let output = document.getElementById("output");
let count = document.getElementById("count");
let clearBtn = document.getElementById("clearBtn");
🔹 Live Text Update
input.addEventListener("input", function () {
  let text = input.value;

  if (text.trim() === "") {
    output.innerText = "Your text will appear here";
  } else {
    output.innerText = text;
  }

  count.innerText = text.length + " characters";
});
🔹 Clear Button Functionality
clearBtn.addEventListener("click", function () {
  input.value = "";
  output.innerText = "Your text will appear here";
  count.innerText = "0 characters";
});

💥 Output Behavior
👉 While Typing
Text updates in real-time
Character count increases
👉 Empty Input
Default message shown
Counter resets
👉 Clear Button
Input cleared
Output reset
Counter reset

🧠 Concepts Used
DOM Manipulation
Event Handling (input, click)
Conditional Rendering
String Handling

UI/UX Design Basics
🎯 Key Learnings
Real-time UI updates using JavaScript
Handling edge cases improves UX
DOM + events = interactive apps
Small projects can be made production-like

🚀 How to Run
Clone or download the project
Open index.html in browser
Start typing and explore features

🔥 Future Improvements
Add dark mode 🌙
Add word counter 📝
Add copy button 📋
Save text in local storage 💾