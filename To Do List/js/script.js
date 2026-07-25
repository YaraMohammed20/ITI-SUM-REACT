"use strict";

let addInput = document.querySelector("#add");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

showTasks();

addBtn.addEventListener("click", function () {
  if (addInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  tasks.push(addInput.value.trim());
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
  addInput.value = "";
});

function showTasks() {
  let taskCard = "";

  tasks.forEach(function (task, idx) {
    taskCard += `
            <div class="d-flex justify-content-between align-items-center bg-white rounded-3 p-2 mb-2 shadow-sm">
                <span>${task}</span>
                <button class="btn btn-outline-danger rounded-pill btn-sm" onclick="deleteTask(${idx})">
                    Delete
                </button>
            </div>
        `;
  });
  taskList.innerHTML = taskCard;
}

function deleteTask(idx) {
  tasks.splice(idx, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}
