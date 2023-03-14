function AddingTasks() {
  var TaskInput = document.getElementById("TaksToDo").value;
  var currentDate = new Date().toLocaleString();
  var task = {
    Task: TaskInput,
  };

  if (TaskInput === "") {
    document.getElementById("TaksToDo").value = "";
    document.getElementById("alertShow").innerHTML = "ADD A TASK";
    document.getElementById("alertShow").style.color = "red";
    setTimeout(function () {
      document.getElementById("alertShow").innerHTML = "";
    }, 2500);
    return;
  } else {
    firebase.database().ref("Tasks").push(task);
    document.getElementById("TaksToDo").value = "";
    document.getElementById("alertShow").innerHTML = "Successfully saved";
    document.getElementById("alertShow").style.color = "green";
    setTimeout(function () {
      document.getElementById("alertShow").innerHTML = "";
    }, 2500);
  }
}
