const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//first approach
const items = ingredients.map(ingredient => {
  const itemList = document.createElement('li');
  itemList.textContent = ingredient;
  itemList.classList.add('item');

  return itemList;
})

const ingrList = document.querySelector('#ingredients');
ingrList.append(...items);


//second approach
// const li = [];

// for (let i = 0; i < ingredients.length; i++){
//   li[i] = document.createElement("li");
//   li[i].textContent = ingredients[i];
//   li[i].classList.add('item');
//   li.push(li[i]);
// }


// li.forEach(element => {
//   console.log('object ', element.textContent);
// });

// const ingrList = document.querySelector('#ingredients');
// ingrList.append(...li);
