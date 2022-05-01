const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

btn.addEventListener("click", onChangeColor);

function onChangeColor() {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
