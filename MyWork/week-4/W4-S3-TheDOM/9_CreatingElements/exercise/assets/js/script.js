var mainContentEl = document.querySelector(".main-content");
var sideBarEl = document.querySelector(".sidebar ul");
var sideBarEls = document.querySelectorAll(".sidebar ul");

// create a new div element
var newEl = document.createElement("li");
newEl.textContent = "New Title";
var newEl2 = document.createElement("li");
newEl2.textContent = "Help link";


// append the new div to the main content
sideBarEl.appendChild(newEl);

for (var i = 0; i < sideBarEls.length; i++) {
  sideBarEls[3].appendChild(newEl2);
}