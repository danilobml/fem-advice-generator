const diceButton = document.querySelector(".div-button");
const adviceIdPrint = document.querySelector(".advice-id");
const adviceTextPrint = document.querySelector(".advice-text");
let adviceData;

async function fetchAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceData = data;
  printAdvice();
}

fetchAdvice();

function printAdvice() {
  if (adviceData) {
    adviceIdPrint.textContent = adviceData.slip.id;
    adviceTextPrint.textContent = `"${adviceData.slip.advice}"`;
  }
}

diceButton.addEventListener("click", fetchAdvice);
