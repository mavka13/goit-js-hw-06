const increment = document.querySelector("[data-action = increment]");
console.log(increment)
const decrement = document.querySelector("[data-action = decrement]");
console.log(decrement)


const handleIncrement = event => {

    const counter = document.querySelector("#value");
    
    const spanValue = Number(counter.innerHTML) + 1;
    counter.innerHTML = spanValue;

}
const handleDecrement = event => {

    const counter = document.querySelector("#value");

    const spanValue = Number(counter.innerHTML) - 1;
    counter.innerHTML = spanValue;

}
increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement)
