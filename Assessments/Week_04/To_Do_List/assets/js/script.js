//  Get task from input
var createTask = document.getElementById("createTask");

// Create button
var createButton = document.getElementById("createButton");

// Add an event listener to the create button
createButton.addEventListener("click", onClickCreateTask);


function onClickCreateTask() {
  // Assign task to value
  var taskValue = createTask.value;
  
  //create new div using value for ids
  var newItem = `<div id="${taskValue}">
                    <p contenteditable="true">${taskValue}</p><br>
                    <button id="${taskValue}button" onclick="onClickDeleteButton(this)">Delete Task</button>
                  </div>`;

  // get active task div
  var activeTasks = document.getElementById("activeTasks");

  // add new div
  activeTasks.innerHTML += newItem;
}

// Delete parent div based on element
function onClickDeleteButton(e) {

  const elementToRemove = e.parentNode;
  elementToRemove.parentNode.removeChild(elementToRemove);
}
