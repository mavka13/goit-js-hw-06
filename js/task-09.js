function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

const handleChangeColor = event =>{
  const color = getRandomHexColor();
  span.innerHTML = color;
  button.style.backgroundColor = color
}


button.addEventListener("click", handleChangeColor)