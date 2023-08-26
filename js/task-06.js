const inputElem = document.querySelector("#validation-input");

const handleBlur = (event) => {
 let inputText = event.currentTarget.value;

 inputText.length !== Number(inputElem.dataset.length)
   ? inputElem.classList.add("invalid")
   : inputElem.classList.remove("invalid") || inputElem.classList.add('valid');
}
inputElem.addEventListener("blur", handleBlur);