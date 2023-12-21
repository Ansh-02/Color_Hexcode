function changeColor() {
  var colorDisplay = document.getElementById("color-display");
  var newColor = getRandomColor();

  
  colorDisplay.style.backgroundColor = newColor;

  
  var colorHexCode = document.createElement("p");
  colorHexCode.innerText = "Hex Code: " + newColor;
  colorDisplay.appendChild(colorHexCode);
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
