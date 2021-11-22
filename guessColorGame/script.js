const displayRGB = document.querySelector(".text-wrap__RGBColor");
const resetButton = document.querySelector(".jsResetBtn");
const modeButton = document.querySelectorAll("buttons");
const hardButton = document.querySelector(".jsHardBtn");
const easyButton = document.querySelector(".jsEasyBtn");
const circles = document.querySelectorAll(".circles");

let circlesNum = 9;
let colors = [];
let pickedColor;


easyButton.addEventListener("click", function() {
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  circlesNum = 6;
  colors = genRandomColors(circlesNum);
  pickedColor = chooseColor();
  displayRGB.textContent = pickedColor;

  for (let i = 0; i < circles.length; i++) {
    if (colors[i]) {
      circles[i].style.backgroundColor = colors[i];
    } else {
      circles[i].style.display = "none";
    }
  }
})

hardButton.addEventListener("click", function() {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  circlesNum = 9;
  colors = genRandomColors(circlesNum);
  pickedColor = chooseColor();
  displayRGB.textContent = pickedColor;

  for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].style.display = "block";
  }
})

// 7. resetButton
resetButton.addEventListener("click", function() {
  colors = genRandomColors(circlesNum);
  pickedColor = chooseColor();
  displayRGB.textContent = "RGB(" + pickedColor + ")";
  resetButton.textContent = "NEW GAME";

  for (let i = 0; i < circles.length; i++) {
    // 받아온 colors 배열을 차례로 넣기
    circles[i].style.backgroundColor = colors[i];
  }
})

// 6. 정답 display에 띄우기
displayRGB.textContent = pickedColor;

// 5. circles에 컬러 입히고 정, 오답 여부와 again button 만들기
for (let i = 0; i < circles.length; i++) {
  circles[i].style.backgroundColor = colors[i];
  circles[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    console.log(clickedColor, pickedColor);

    if (clickedColor === pickedColor) {
      alert("YOU WIW!");
      resetButton.textContent = "PLAY AGAIN";
      changeColor(clickedColor);
    } else {
      this.style.backgroundColor = "#ffffff";
    }
  });
}  

// 4. circle에 bg color 주기
function changeColor(colors) {
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
  }
}

// 3. genRandomColors로 나온 배열 중 하나를 선택 = pickedColor
function chooseColor() {
  let random = Math.floor(Math.random() * colors.length);
  
  return colors[random];
}

// 2. 1에서 만든 랜덤값을 num(newGame에서 파라미터 받아옴)만큼 배열에 담음
function genRandomColors(num) {
  let colorArr = [];

  for (let i = 0; i < num; i++) {
    colorArr.push(makeColorCode());
  }

  return colorArr;
}

// 1. 랜덤한 rgb 값을 만들어준다.
function makeColorCode() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  
  const rgbCode = r + ',' + g + ',' + b;
  
  return rgbCode;
}


