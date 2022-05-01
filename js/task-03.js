const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


//first approuch
const list = document.querySelector(".gallery");
const markup = images.map((image) =>
  `<li style="padding: 30px; margin: 50px; background-color: #ffeb3b; width: 300px; display: flex;" 
  class="list-item new">
  <img src=${image.url} alt=${image.alt} width=240></img>
  </li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);

//second approuch
// for (let i = 0; i < images.length; i++) {
//   const li = document.createElement('li');
//   li.style = "padding: 30px; margin: 50px; background-color: #ffeb3b; min-width: 300px;";
//   const image = document.createElement('img');
//   image.src = images[i].url;
//   image.alt = images[i].alt;
//   image.width = 240;
//   li.appendChild(image);
//   console.log('image item :>> ', li);
//   const galler = document.querySelector(".gallery");
//   galler.appendChild(li);
// }

// const image = document.createElement('img');
// image.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// console.log('img :>> ', image);
