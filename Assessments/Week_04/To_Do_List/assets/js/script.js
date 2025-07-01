//  Get task from input
var createTask = document.getElementById("createTask");

// Create button
var createButton = document.getElementById("createButton");

// Add an event listener to the create button
createButton.addEventListener("click", onClickCreateButton);

// Delete button
var deleteButton = document.getElementsByClassName("deleteButton")[0];

// Add an event listener to the delete button
deleteButton.addEventListener("click", onClickDeleteButton);

function onClickCreateButton() {

  
  // Assign task to value
  var createTaskValue = createTask.value;

  var newItem = ` <div class="task">
                    <p contenteditable="true">${createTaskValue}</p><br>
                    <button class="deleteButton">Delete Task</button>
                    <button class="archiveButton">Archive Task</button>
                  </div>`;

  document.getElementById("activeTasks").innerHTML += newItem;

  // Get active task list
  //var activeTasksList = document.getElementById("activeTasks");

  //activeTasksList.appendChild(newItem);
  
 console.log("test")
}

 function onClickDeleteButton() {
  const elementToRemove = document.getElementsByClassName('task')[0];
  elementToRemove.parentNode.removeChild(elementToRemove);
 }
