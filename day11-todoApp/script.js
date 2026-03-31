/* =========================
   STATE
========================= */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

/* =========================
   DOM ELEMENTS
========================= */
const taskInput = document.getElementById("taskInput");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

/* =========================
   SAVE
========================= */
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* =========================
   ADD TASK
========================= */
document.getElementById("addBtn").addEventListener("click", () => {
  if (!taskInput.value) return;

  tasks.push({
    id: Date.now(),
    text: taskInput.value,
    due: dueDate.value,
    priority: priority.value,
    completed: false
  });

  taskInput.value = "";
  saveTasks();
  renderTasks();
});

/* =========================
   DELETE
========================= */
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

/* =========================
   TOGGLE
========================= */
function toggleTask(id) {
  tasks = tasks.map(t =>
    t.id === id ? {...t, completed: !t.completed} : t
  );
  saveTasks();
  renderTasks();
}

/* =========================
   EDIT
========================= */
function editTask(id) {
  const newText = prompt("Edit task:");
  if (!newText) return;

  tasks = tasks.map(t =>
    t.id === id ? {...t, text: newText} : t
  );

  saveTasks();
  renderTasks();
}

/* =========================
   FILTER
========================= */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    renderTasks();
  });
});

/* =========================
   RENDER
========================= */
function renderTasks() {
  taskList.innerHTML = "";

  let filtered = tasks.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  filtered.forEach(task => {
    const div = document.createElement("div");
    div.className = `task ${task.priority} ${task.completed ? "completed" : ""}`;

    div.innerHTML = `
      <div>
        <strong>${task.text}</strong><br>
        <small>${task.due || ""}</small>
      </div>
      <div>
        <button onclick="toggleTask(${task.id})">✔</button>
        <button onclick="editTask(${task.id})">✏</button>
        <button onclick="deleteTask(${task.id})">🗑</button>
      </div>
    `;

    taskList.appendChild(div);
  });

  updateCounter();
}

/* =========================
   COUNTER
========================= */
function updateCounter() {
  const completed = tasks.filter(t => t.completed).length;
  counter.innerText = `${completed} of ${tasks.length} completed`;
}

/* =========================
   THEME
========================= */
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* INIT */
renderTasks();