//  Get task from input
var createTask = document.getElementById("createTask");

// Create button
var createButton = document.getElementById("createButton");

// Add an event listener to the create button
createButton.addEventListener("click", onClickCreateButton);

// Delete button
//var deleteButton = document.getElementsByClassName("deleteButton")[0];

// Add an event listener to the delete button
//deleteButton.addEventListener("click", onClickDeleteButton);

var TaskValue = 1;

function onClickCreateButton() {

  
  // Assign task to value
  //var createTaskSpaces = createTask.value;
  // remove spaces
  //let createTaskValue = createTaskSpaces.replace(/ /g, "_");

  //create new div using value for ids
  var newItem = ` <div id="${TaskValue}">
                    <p contenteditable="true">${TaskValue}</p><br>
                    <button id="${TaskValue}button" onClick="onClickDeleteButton()">Delete Task</button>
                  </div>`;

  // get active task div
  var activeTasks = document.getElementById("activeTasks");
  // add new div
  activeTasks.innerHTML += newItem;


  // Add an event listener to the delete button
  //deleteButton.addEventListener("click", onClickDeletebutton);

  console.log(activeTasks.innerHTML)



}



function onClickDeleteButton(element) {

  console.log(element.target)
// const elementToRemove = document.getElementById('element');
//  elementToRemove.parentNode.removeChild(elementToRemove);
}
