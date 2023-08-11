const increment = document.querySelector("[data-action = increment]");

const decrement = document.querySelector("[data-action = decrement]");

const counter = document.querySelector("#value");

const handleIncrement = event => {

    const spanValue = Number(counter.innerHTML) + 1;
    counter.innerHTML = spanValue;

}
const handleDecrement = event => {

    const spanValue = Number(counter.innerHTML) - 1;
    counter.innerHTML = spanValue;

}
increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement)
