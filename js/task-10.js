const create = document.querySelector('[data-create]');
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const intut = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let widthElement = 20;
let hightElement = 20;

function createBoxes(amount) {
  // destroyAll();
  amount = intut.value;
  for (let i = 0; i < amount; i++) {
    
    const element = document.createElement("div");
    
    if (widthElement > element.style.width || hightElement > element.style.height ) {
      widthElement += 10;
      hightElement += 10;
      element.style.width = widthElement +"px";
      element.style.height = hightElement + "px";
      element.style.background = getRandomHexColor();
    }
    else {
      widthElement = 30;
      hightElement = 30;
      const firstElement = document.createElement("div");
      firstElement.style.width = widthElement +"px";
      firstElement.style.height = hightElement + "px";
      firstElement.style.background = getRandomHexColor();
    }
    boxes.append(element);
  }
}

function destroyAll (){
  boxes.innerHTML = "";
}

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyAll);


    // if (i === 0) {
    //       const firstElement = document.createElement("div");
    //       firstElement.style.width = widthElement +"px";
    //       firstElement.style.height = hightElement + "px";
    //   firstElement.style.background = getRandomHexColor();
      
    // }
    // else {
    //   const element = document.createElement("div");
    //       widthElement += 10;
    //       hightElement += 10;
    //       element.style.width = widthElement +"px";
    //       element.style.height = hightElement + "px";
    //   element.style.background = getRandomHexColor();
      
    // }