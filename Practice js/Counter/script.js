let count = document.querySelector(".count");
let counts = document.querySelector(".counts");

let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");


let para = document.createElement("p");
let counting = 0;
para.textContent = counting;
counts.appendChild(para);

btn.addEventListener("click", () => {
  counting++;
  console.log(counting);
  para.textContent = counting;
});
btn2.addEventListener("click", () => {
  counting--;
  console.log(counting);
  para.textContent = counting;
});
// console.log(counting)
