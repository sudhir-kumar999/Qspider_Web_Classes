const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const divs = document.getElementsByTagName("div");
// console.log(box1);
// console.log(divs);
const container = document.getElementsByClassName("container");
// console.log(container);
// const box3 = document.querySelector('.container #box-3') // query select select all element so we have to show . # to select class or id
// console.log(box3);
// const boxMultiple = document.querySelectorAll('.container div')
// console.log(boxMultiple);

// box1.innerHTML = "<div><h1>this is box 1</h1></div>";
//change attribute
// document.getElementById("imgAtt").src =
//   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fdogs%2F&psig=AOvVaw3JZjzF8fh-j9B9KskSIM-I&ust=1745491267468000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNip4-v77YwDFQAAAAAdAAAAABAE";

// att.src='https://via.placeholder.com/100'
// console.log(att); 
//add a class at runtime
// box1.classList.add('fancy')
// box2.classList.remove('box')

//create div using js
// for (let i = 0; i < 10; i++) {
//   const boxEle = document.createElement("div");
//   boxEle.classList.add("box");
//   container[0].append(boxEle);
// }

box2.style.borderRadius="50%";
box2.style.backgroundColor="blue";