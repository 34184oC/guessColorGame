const displayRGB = document.querySelector(".text-wrap__RGBColor");
const resetButton = document.querySelector(".jsResetBtn");
const modeButton = document.querySelectorAll("buttons");
const circles = document.querySelectorAll(".circles");

let circlesNum = 9;
let colors = [];
let pickedColor;



init();

function init() {
  displayRGB.textContent = pickedColor;
  setupCircles();
  setupMode();
  newGame();
}


resetButton.addEventListener("click", function() {
  newGame();
});


// function setupCircles() {
//   for (var i = 0; i < circles.length; i++) {
//     circles[i].style.backgroundColor = colors[i]; 
//     circles[i].addEventListener("click", function() {
//       var clickedColor = this.style.backgroundColor;
//       if (clickedColor === pickedColor) {
//         messageDisplay.textContent = "Correct";
//         resetButton.textContent = "Play Again";
//         changeColors(pickedColor);
//       }
//       else {
//         this.style.backgroundColor = "#232323";
//         messageDisplay.textContent = "try again";
//       }
//     });
//   }
// }

// set easy, hard mode
function setupMode() {
  for (let i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function() {
      for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].classList.remove("selected");
      }
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        circlesNum = 6;
      }
      else {
        circlesNum = 9;
      }
      newGame();
    });
  }
}

function newGame() {
  colors = genRandomColors(circlesNum); // default : 9
  pickedColor = chooseColor();
  displayRGB.textContent = pickedColor;
  // resetButton.textContent = "TRY AGAIN";
  for (let i = 0; i < circles.length; i++) {
    if (colors[i]) {
      circles[i].style.dipslay = "block";
      circles[i].style.backgroundColor = colors[i]; // 맞추면 circles 전부 같은 컬러
    }
    else {
      circles[i].style.display = "none"; // 틀리며 사라지게 함
    }
  }
  
}

// 4. circle에 bg color 주기
function changeColor(color) {
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = color;
  }
}

// 3. genRandomColors로 나온 배열 중 하나를 선택 = pickedColor
function chooseColor() {
  let random = Math.floor(Math.random() * colors.length);
  
  return colors[random];
}

// 2. 1에서 만든 랜덤값을 num(newGame에서 파라미터 받아옴)만큼 배열에 담음
function genRandomColors(num) {
  let colorArr = Array(num).fill(makeColorCode());

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


