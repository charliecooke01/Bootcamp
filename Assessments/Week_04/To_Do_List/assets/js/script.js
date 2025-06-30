// 1. use document.getElementById to select the searchTerm Button
var searchTerm = document.getElementById("searchTerm");

// 2. use document.getElementById to select the searchButton Button
var searchButton = document.getElementById("searchButton");

// 3. add an event listener to the searchButton that calls the search function when clicked
searchButton.addEventListener("click", onClickSearhButton);

function onClickSearhButton() {
  // 4. use the value property of the searchInput to get the search term
  var searchTermValue = searchTerm.value;
  //TODO:
  // 5. select the searches div using document.getElementById
  var searchList = document.getElementById("searches");
  //TODO:
  // 6. create a new li element using document.createElement
  //TODO:
  var newSearchEl = document.createElement("li"); 
  // 7. set the innerHTML of the new paragraph to the search term
  //TODO:
  newSearchEl.textContent = searchTermValue;
  // 8. append the new paragraph to the searches div
  //TODO:
  searchList.appendChild(newSearchEl);
}
