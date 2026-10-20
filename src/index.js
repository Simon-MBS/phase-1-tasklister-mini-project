document.addEventListener("DOMContentLoaded", () => {
  // your code here


const form = document.getElementById("create-task-form");

form.addEventListener("submit", (event) => {
  // Step 1: Prevent the default form submission
  event.preventDefault();

  // Step 2: Get the task description
  const task = event.target.elements["new-task-description"].value;

  // Call buildToDo() and pass the task
  buildToDo(task);
});

function buildToDo(task) {
  // Step 3: Create a new list item
  const li = document.createElement("li");

  // Set the task as the list item's text
  li.textContent = task;

  // Append the item to the task list
  document.getElementById("tasks").appendChild(li);
}

});
