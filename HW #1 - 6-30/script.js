const todo = [];
const completedTasks = [];

let form = document.querySelector("form");
let ol = document.querySelector("ol");
let inputEl = document.querySelector("#item-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let value = inputEl.value.trim();

  if (value === "") {
    alert("Please enter a task!");
    return;
  }

  if (todo.includes(value)) {
    alert("You already have this To-Do!");
    inputEl.value = "";
    return;
  }

  todo.push(value);

  let index = completedTasks.indexOf(value);
  if (index !== -1) {
    completedTasks.splice(index, 1);
  }

  displayList();
});

function displayList() {
  ol.innerHTML = "";

  todo.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;

    if (completedTasks.includes(item)) {
      li.classList.add("completed");
    }

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      toggleCompleted(item);
    });

    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todo.splice(index, 1);
      displayList();
    });

    ol.appendChild(li);
  });
  inputEl.value = "";
}

function toggleCompleted(task) {
  const index = completedTasks.indexOf(task);
  if (index == -1) {
    completedTasks.push(task);
  } else {
    completedTasks.splice(index, 1);
  }
}
