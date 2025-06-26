// This allows us to select multiple elements
var listEls = document.querySelectorAll("li");

// iterate over the widgetEls with a regaur for loop
for (var i = 0; i < listEls.length; i++) {
  listEls[i].style.backgroundColor = "blue";
}

// change the text of the first p tag in the mainContentEl
var widgetEls = document.querySelectorAll(".widget")
var firstWidgetEl = widgetEls[0].querySelector("h2");
firstWidgetEl.textContent = "Reports";

// The text inside the `<p>` element in the third widget is changed to “Optimise performance metrics here.”
const thirdWidgetPEl = widgetEls[2].querySelector("p");
thirdWidgetPEl.textContent = "Optimise performance metrics here.";