const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const inputReader = (event) => {
	if (event.currentTarget.value === "") {
		nameOutput.textContent = "Anonymous";
	}
	else {
		nameOutput.textContent = event.currentTarget.value;
	}
}

textInput.addEventListener("input", inputReader);
