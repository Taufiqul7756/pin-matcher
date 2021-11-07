function pinGenerate() {
  const generateBtn = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const generatedPin = (document.getElementById("autoPin").value =
      randomNumber);
  });
}
pinGenerate();

let pinInput = document.querySelector(".form-control");
//console.log(pinInput);

function displayText(number) {
  pinInput.value += number;
}

function matching() {
  const matching = document.querySelector(".submit-btn");
  matching.addEventListener("click", function () {
    const generatedPin = document.getElementById("autoPin").value;
    const calculatorPin = document.querySelector(".form-control").value;

    if (generatedPin == calculatorPin) {
      document.querySelector("#matchedText").style.display = "block";
    } else {
      document.querySelector("#didnotMatchText").style.display = "block";
    }
  });
}

matching();

//BacK/delete Button's Operation

function deleteText() {
  const backBtnOperation = document.getElementById("backBtn");
  backBtnOperation.addEventListener("click", function () {
    const valueOfCalInput = document.querySelector(".form-control").value;
    valueOfCalInput = value.substr(0, value.length - 1);
  });
}
deleteText();

function clearText() {
  const clearBtnOperation = document.getElementById("clearBtn");
  clearBtnOperation.addEventListener("click", function () {
    const valueOfCalInput = document.querySelector(".form-control").value;
    valueOfCalInput = " ";
  });
}
clearText();

//Clear Button's Operation

// const deleteText = () => {
//   form-control.innerText = display.innerText.slice(0, -1);
// };
