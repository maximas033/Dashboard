// Define a function to fetch and display personal tasks from Firebase
const fetchPersonalTasks = () => {
  const tasksRef = firebase.database().ref("Tasks");

  tasksRef.on("value", (snapshot) => {
    const tasks = snapshot.val() || {};
    const taskList = Object.values(tasks);

    const listEl = document.getElementById("centerTasks");
    listEl.innerHTML = ""; // Clear previous list items

    if (taskList.length === 0) {
      const noTasksEl = document.createElement("p");
      noTasksEl.textContent = "No tasks";
      noTasksEl.style.textAlign = "center";
      noTasksEl.style.color = "gray";
      noTasksEl.style.fontWeight = "bold";
      listEl.appendChild(noTasksEl);
      return;
    }

    const ul = document.createElement("ul");

    taskList.forEach(({ id, Task }) => {
      const li = document.createElement("li");
      li.dataset.id = id;
      li.textContent = Task;

      const completeBtn = document.createElement("button");
      completeBtn.classList.add("btn", "btn-secondary");
      completeBtn.textContent = "Complete";
      completeBtn.addEventListener("click", () => {
        deleteTask(id);
      });

      li.appendChild(completeBtn);
      ul.appendChild(li);
    });

    listEl.appendChild(ul);
  });
};

// Define a function to delete a task from Firebase by ID
const deleteTask = (id) => {
  const taskRef = firebase.database().ref(`Tasks/${id}`);
  taskRef
    .remove()
    .then(() => {
      alert("Task deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting task: ", error);
    });
};

// Register the fetchPersonalTasks function to be called when the window is loaded
window.addEventListener("load", fetchPersonalTasks);
