const validationInput = document.querySelector("#validation-input");

const handleBlur = event => {
console.log(event.target.dataset)
    if(event.target.value.length > Number(event.target.dataset.length) ){
      validationInput.className = "invalid"  
    } else{
        validationInput.className = "valid"
    }

}


validationInput.addEventListener("blur", handleBlur);