const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");


const handlerResize = event => {
    console.log(event.target.value)
    span.style.fontSize = `${event.target.value}px`
}


input.addEventListener("input", handlerResize)