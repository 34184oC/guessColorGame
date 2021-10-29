const displayRGB = document.querySelector("#dipslay-color");
const resetButton = document.querySelector("#reset-btn");
const modeButton = document.querySelectorAll("buttons");
let ciclesNum = 9;
let colors = [];
let pickedColor;


function makeColor() {
  const hexCode = "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
  return hexCode;
}

function randomColor() {
  let circles = document.querySelectorAll(".circle");
  circles.style.backgroundColor = makeColor();
  return circles;
}

console.log(randomColor())