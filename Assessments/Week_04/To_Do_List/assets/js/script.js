//  Get task from input
var createTask = document.getElementById("createTask");

// Create button
var createButton = document.getElementById("createButton");

// Add an event listener to the create button
createButton.addEventListener("click", onClickCreateButton);


function onClickCreateButton() {
  // Assign task to value
  var createTaskValue = createTask.value;

  var newItem = ` <div>
                    <textarea id="message" name="message" rows="3" cols="30">${createTaskValue}</textarea><br>
                    <button class="deleteButton">Delete Task</button>
                    <button class="archiveButton">Archive Task</button>
                  </div>`;

  document.getElementById("activeTasks").innerHTML += newItem;

  // Get active task list
  var activeTasksList = document.getElementById("activeTasks");

  // Create a new element using task value
  //var newTaskEl = document.createElement("p"); 

  // Set the innerHTML of the new paragraph to the task input
  //newTaskEl.textContent = createTaskValue;

  // Append the new paragraph to the task list
  //activeTasksList.appendChild(newTaskEl);

  activeTasksList.appendChild(newItem);

 
}
 console.log(activeTasksList)
