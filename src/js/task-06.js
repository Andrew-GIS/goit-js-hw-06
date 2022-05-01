const inputArea = document.querySelector("#validation-input");

const onBorderColorCheck = (event) => {
	const necessaryLength = event.currentTarget.dataset.length;
	console.log('Nnecessary Length :>> ', necessaryLength);
	const inputeLength = String(event.currentTarget.value.length);
	console.log('Inpute Length :>> ', inputeLength);

	if (inputeLength === necessaryLength) {
		inputArea.classList.add("valid");
		inputArea.classList.remove("invalid");
	}
	else {
		inputArea.classList.add("invalid");
		inputArea.classList.remove("valid");
	}
};

inputArea.addEventListener("blur", onBorderColorCheck);