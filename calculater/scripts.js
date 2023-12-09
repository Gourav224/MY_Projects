let currentDisplay = "";
document.querySelector("#display").value = currentDisplay;
function appendToDisplay(data) {
  currentDisplay += data;
  document.querySelector("#display").value = currentDisplay;
}
function clearDisplay() {
  currentDisplay = "";
  document.querySelector("#display").value = currentDisplay;
}
function deleteToDisplay() {
  currentDisplay = currentDisplay.substring(0, currentDisplay.length - 1);
  document.querySelector("#display").value = currentDisplay;
}
function result() {
  try {
    currentDisplay = eval(currentDisplay);
    document.querySelector("#display").value = currentDisplay;
    if(currentDisplay=='Infinity'){
        currentDisplay='';
    }
  } catch (error) {
    currentDisplay = "";
    document.querySelector("#display").value = "Error";
  }
}