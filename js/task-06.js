const validationInput = document.querySelector("#validation-input");

const handleBlur = event => {

    if(event.target.value.length > Number(event.target.dataset.length) ){
      validationInput.className = "invalid"  
    } else{
        validationInput.className = "valid"
    }


}

validationInput.addEventListener("blur", handleBlur);

// const requiredLength = parseInt(validationInput.dataset.length);
//   const inputValue = validationInput.value.trim();
  
//   if (inputValue.length === requiredLength) {
//     validationInput.classList.remove("invalid");
//     validationInput.classList.add("valid");
//   } else {
//     validationInput.classList.remove("valid");
//     validationInput.classList.add("invalid");
//   }
//   const inputValue = e.currentTarget;
//   const requiredLength = Number(input1.dataset.length);
//   if (inputValue.value.length === requiredLength) {
//     inputValue.classList.remove("invalid");
//     inputValue.classList.add("valid");
//   } else {
//     inputValue.classList.remove("valid");
//     inputValue.classList.add("invalid");
//   }