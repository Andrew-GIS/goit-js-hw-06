let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resultValue = document.querySelector("#value");

const decrement = () => {
	counterValue = resultValue.textContent;
	counterValue--;
	resultValue.textContent = counterValue;
}

const increment = () => {
	counterValue = resultValue.textContent;
	counterValue++;
	resultValue.textContent = counterValue;
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
