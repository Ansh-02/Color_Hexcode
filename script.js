function changeColor() {
  var colorDisplay = document.getElementById("color-display");
  var newColor = getRandomColor();

  // Set the background color
  colorDisplay.style.backgroundColor = newColor;

  // Display the color hex code
  var colorHexCode = document.createElement("p");
  colorHexCode.innerText = "Hex Code: " + newColor;
  colorDisplay.appendChild(colorHexCode);
}

function getRandomColor() {
  // Generate a random hex color code
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
