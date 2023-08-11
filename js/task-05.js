const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

const inputName = event => {
    span.innerText = event.target.value;
    if (event.target.value === ""){
        span.innerText = "Anonymous"
    }
}


input.addEventListener("input", inputName)
