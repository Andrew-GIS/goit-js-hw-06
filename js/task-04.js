let counterValue = 0;
const counter = {
	value: 0,
	decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resultValue = document.querySelector("#value");

const decrement = () => {
	counter.decrement();
	resultValue.textContent = counter.value;
}

const increment = () => {
	counter.increment();
	resultValue.textContent = counter.value;
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
