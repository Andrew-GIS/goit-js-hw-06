const items = document.querySelectorAll('.item');
console.log("Number of categories:", items.length);
const categoryText = document.querySelectorAll('h2');

const li = document.querySelectorAll('ul li ul');

li.forEach(element => {
	console.log("Category:", element.previousElementSibling.textContent);
	console.log("Elements:", element.children.length);
})
