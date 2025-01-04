// 1. Custom Dragula JS: This code initializes the Dragula library with four containers representing the four columns in the task management system - "To Do," "Doing," "Done," and "Trash." The Dragula library is often used for implementing drag-and-drop functionality in web applications. In this case, it allows tasks to be moved between these columns by dragging and dropping them.
dragula([
    document.getElementById("to-do"),
    document.getElementById("doing"),
    document.getElementById("done"),
    document.getElementById("trash")
  ])
  
  // 2. addTask() Function: This function is triggered when a user wants to add a new task. It performs the following steps: It retrieves the task text entered by the user from an input field with the id "taskText." It appends the entered task text as an <li> element within the "To Do" column. It clears the input field, effectively removing the task text from the input after adding it.
  function addTask() {
    var inputTask = document.getElementById("taskText").value;
    document.getElementById("doing").innerHTML += "<li class='task'><p>" + inputTask + "</p></li>";
  }
  
  
  // 3. emptyTrash() Function: This function is used to delete tasks in the "Trash" column. Its purpose is to clear all tasks from the "Trash" column by setting the HTML content of the "trash" container to an empty string, effectively removing all tasks from this column. Create a JavaScript file with the name script.js and paste the given codes into your JavaScript file and make sure it's linked properly to your HTML document so that the scripts are executed on the page. Remember, you’ve to create a file with .js extension.
  function emptyTrash() {
    document.getElementById("trash").innerHTML = "";
  }