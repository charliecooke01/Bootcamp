//  Get task from input
var createTask = document.getElementById("createTask");

// Create button
var createButton = document.getElementById("createButton");

// Add an event listener to the create button
createButton.addEventListener("click", onClickCreateTask);


function onClickCreateTask() {
  // Assign task to value
  var taskValue = createTask.value.trim();
  
  // check for empty value
  if (taskValue === "") {
    alert("Give the task a name");
    return;
  }

  // check for duplicate task name
  if (document.getElementById(taskValue)) {
    alert("Task with this name already exists");
    return;
  }

  //create new div using value for ids
  var newItem = `<div id="${taskValue}">
                    <p>${taskValue}</p><br>
                    <button id="${taskValue}edit" onclick="onClickEditButton(this)">Edit Task</button>
                    <button id="${taskValue}button" onclick="onClickDeleteButton(this)">Delete Task</button>
                  </div>`;

  // get active task div
  var activeTasks = document.getElementById("activeTasks");

  // add new div
  activeTasks.innerHTML += newItem;

  // clears input box
  createTask.value = "";

}

// delete parent div based on element
function onClickDeleteButton(e) {

  const elementToRemove = e.parentNode;
  elementToRemove.parentNode.removeChild(elementToRemove);
}

// edit task text
function onClickEditButton(e) {

  // get the paragraph within task div
  const taskDiv = e.parentNode;
  const paragraph = taskDiv.querySelector("p");

  // edit task name
  if (paragraph.isContentEditable) {

    // turns off editbale text
    paragraph.contentEditable = "false";
    // changes button text
    e.innerText = "Edit Task";

    // create new task value
    const newTaskValue = paragraph.innerText.trim();

    // checks for empty task name
    if (newTaskValue === "") {
      alert("Task name cannot be empty.");
      // keeps old name
      paragraph.innerText = taskDiv.id;
      return;
    }

    // checks for duplicate task name
    if (document.getElementById(newTaskValue) && newTaskValue !== taskDiv.id) {
      alert("A task with this name already exists.");
      // keeps old name
      paragraph.innerText = taskDiv.id;
      return;
    }

  } else {

    // turns on editbale text
    paragraph.contentEditable = "true";
    // highlights box
    paragraph.focus();
    // changes button text
    e.innerText = "Save Task";

  }
  
}