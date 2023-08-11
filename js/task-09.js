function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

const handleChangeColor = event =>{
  
  span.innerHTML = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}


button.addEventListener("click", handleChangeColor)