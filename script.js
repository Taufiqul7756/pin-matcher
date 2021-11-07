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

//Matching Operations

function matching() {
  const matching = document.querySelector(".submit-btn");
  matching.addEventListener("click", function () {
    const generatedPin = document.getElementById("autoPin").value;
    const calculatorPin = document.querySelector(".form-control").value;

    if (generatedPin == calculatorPin) {
      document.querySelector("#matchedText").style.display = "block";
      document.querySelector("#didnotMatchText").style.display = "none";
    } else {
      document.querySelector("#didnotMatchText").style.display = "block";
      document.querySelector("#matchedText").style.display = "none";
      const trial = parseFloat(document.getElementById("trial-left").innerText);
      document.getElementById("trial-left").innerText = trial - 1;
    }
  });
}

matching();

//BacK/delete Button's Operation

const backBtnOperation = document.getElementById("backBtn");
backBtnOperation.addEventListener("click", function () {
  let valueOfCalInput = document.querySelector(".form-control");
  //valueOfCalInput.substr(0, valueOfCalInput.length - 1);
  valueOfCalInput.value = valueOfCalInput.value.slice(0, -1);
});

function clearText() {
  const clearBtnOperation = document.getElementById("clearBtn");
  clearBtnOperation.addEventListener("click", function () {
    const valueOfCalInput = (document.querySelector(".form-control").value =
      " ");
  });
}
clearText();

//Back/Delete Button's Operation (Extra)
//For this function you have to put onclick="deleteText()" on html file (line:45)

// const deleteText = () => {
//   pinInput.value = pinInput.value.slice(0, -1);
// };
