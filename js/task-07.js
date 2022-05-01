const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onTextSizeChange = (event) => {
	let textSize = event.currentTarget.value;
	text.style.fontSize = textSize + "px";
}

input.addEventListener("input", onTextSizeChange);