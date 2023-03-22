const number = document.querySelector(".number");

let counter = 0;
let targetNumber = 12345;
let increment = Math.ceil(targetNumber / 100);

function updateNumber() {
  if (counter < targetNumber) {
    counter += increment;
    if (counter > targetNumber) {
      counter = targetNumber;
    }
    number.textContent = counter.toLocaleString();
    const progress = counter / targetNumber;
    number.style.setProperty("--progress", progress);
  }
}

setInterval(updateNumber, 10);
