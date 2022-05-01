const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitCheck);

function onSubmitCheck(event) {
	event.preventDefault();
	const { elements: { email, password } } = event.currentTarget;
	
	if (email.value === "" && password.value === "")
	{
		return alert("All inputs should have an information");	
	}
	else if (email.value === "") {
		return alert("Fill an email field, please");
	}
	else if (password.value === "") {
		return alert("Fill a password field, please");
	}
	
	console.log({ Email: email.value, Password: password.value });
	// console.log('Email : ', email.value);
	// console.log('Password : ', password.value);
	event.currentTarget.reset();
}