function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector(".change-color");
const spanColorValue = document.querySelector(".color");
const body = document.body;

btnChangeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColorValue.textContent = randomColor;
});

