//  Get task from input
var createTask = document.getElementById("createTask");

// Create button
var createButton = document.getElementById("createButton");

// Add an event listener to the create button
createButton.addEventListener("click", onClickCreateButton);

// Delete button
//var deleteButton = document.getElementsByClassName("deleteButton")[0];

// Add an event listener to the delete button
deleteButton.addEventListener("click", onClickDeleteButton);

function onClickCreateButton() {

  
  // Assign task to value
  var createTaskSpaces = createTask.value;
  // remove spaces
  let createTaskValue = createTaskSpaces.replace(/ /g, "_");
  //create new div using value for ids
  var newItem = ` <div id="${createTaskValue}">
                    <p contenteditable="true">${createTaskValue}</p><br>
                    <button id="${createTaskValue}button">Delete Task</button>
                  </div>`;

  // get active task div
  var activeTasks = document.getElementById("activeTasks");
  // add new div
  activeTasks.innerHTML += newItem;


  // Add an event listener to the delete button
  //deleteButton.addEventListener("click", onClickDeletebutton);

  console.log(activeTasks.innerHTML)

  //function onClickDeleteButton() {
  //
  // const elementToRemove = document.getElementById('element');
  //  elementToRemove.parentNode.removeChild(elementToRemove);
  //} 

}

//function onClickDeleteButton(element) {
//
// const elementToRemove = document.getElementById('element');
//  elementToRemove.parentNode.removeChild(elementToRemove);
//}
