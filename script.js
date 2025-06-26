let input = document.getElementById("inputText");
let displayElement = document.getElementById("displayText");
displayElement.innerHTML = localStorage.getItem("value");
input.addEventListener("keyup", display);

function display() {
  localStorage.setItem("value", input.value);
  displayElement.innerHTML = localStorage.getItem("value");
}
