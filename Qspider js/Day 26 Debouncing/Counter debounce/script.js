function debounce(cbfn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cbfn.apply(this, args);
    }, delay);
  };
}

let count = 0;
function counter() {
  count++;
  console.log(count);
  para.textContent=count
}

const div = document.querySelector(".count")
const para = document.createElement("p")
para.textContent=0
div.append(para)


const returndebounce = debounce(counter, 1000);
const btn = document.getElementById("btnp")
btn.addEventListener("click", () => {
  returndebounce();
});
