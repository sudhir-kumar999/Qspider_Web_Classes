/**

const btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    console.log(e.type)
})
btn.addEventListener("click",(e)=>{
    console.log(e.target)
})
btn.addEventListener("click",(e)=>{
    console.log(e.currentTarget)
})
btn.addEventListener("click",(e)=>{
    console.log(e.timeStamp)
})
btn.addEventListener("click",(e)=>{
    console.log(e.clientX , e.clientY)
})
btn.addEventListener("keydown",(e)=>{
    console.log(e.key)
})
btn.addEventListener("click",(e)=>{
    console.log(e.target)
})

window.addEventListener("load",()=>{
    console.log("page fully loaded")
})

 */

/**
const btn = document.getElementById("btn");
btn.onclick=changeText;

function changeText(){
    let h2 = document.querySelectorAll("h2")
    h2.forEach((item)=>{
        item.textContent="text changed"
    })
}

 */

const light = document.querySelector("#light");
const dark = document.querySelector("#dark");

const btn = document.getElementById("btn");
light.addEventListener("click", () => {
  let link = document.querySelector("link");
  console.log(link);
  link.href = "light.css";
});

dark.addEventListener("click", () => {
  let link = document.querySelector("link");
  //   link.href = "dark.css";
  if (link.getAttribute("href") === "light.css"){
    console.log(link.href)
  link.setAttribute("href", "dark.css");
  }
});

const switchh = document.getElementById("switch");
switchh.addEventListener("click", () => {
//   let link = document.querySelector("link");
let link = document.getElementById("theme")
  if (link.getAttribute("href") === "light.css") {
    link.href = "dark.css";
    console.log(link.href)
    // link.setAttribute("href", "dark.css");
    console.log(link.getAttribute("href"))
  } else {
    // link.href = "light.css";
    link.setAttribute("href", "light.css");
  }
});
