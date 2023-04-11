function displayTasks() {
  var centerTasks = document.getElementById("centerTasks");

  firebase
    .database()
    .ref("Tasks")
    .once("value")
    .then(function (snapshot) {
      if (!snapshot.exists()) {
        var li = document.createElement("li");
        var taskText = document.createTextNode("No tasks found");
        li.style.textAlign = "center";
        li.style.fontWeight = "bold";
        li.appendChild(taskText);
        li.style.borderLeft = "none";
        centerTasks.appendChild(li);
      } else {
        snapshot.forEach(function (childSnapshot) {
          document.getElementById("TasksSection").style.animation = "fadeIn";
          document.getElementById("TasksSection").style.animationDuration =
            "3s";
          var task = childSnapshot.val();
          var taskKey = childSnapshot.key;

          var li = document.createElement("li");
          var taskText = document.createTextNode(task.Task);
          li.appendChild(taskText);
          var button = document.createElement("button");
          var buttonText = document.createTextNode("COMPLETE");
          // small
          button.style.fontSize = "0.5em";
          button.style.borderRadius = "4px";
          button.appendChild(buttonText);
          button.addEventListener("click", function () {
            firebase
              .database()
              .ref("Tasks/" + taskKey)
              .remove();
            li.remove();
          });
          li.appendChild(button);

          centerTasks.appendChild(li);
        });
      }
    });
}

window.onload = displayTasks();
