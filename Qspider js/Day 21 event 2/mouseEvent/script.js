let div = document.getElementById("div");
let btn = document.getElementById("btn");
let body = document.body;
btn.addEventListener("click", () => {
  console.log("click event triggered");
});

btn.addEventListener("dblclick", () => {
  console.log("double click event triggered");
});

body.addEventListener("mousedown", () => {
  console.log("mouse btn press event triggered");
    body.style.background="aqua"

});

body.addEventListener("mouseup", () => {
  console.log("mouse btn released event triggered");
    body.style.background="red"

});

body.addEventListener("mousemove", () => {
  console.log("mousemove triggered");
    // div.style.background="orange"

});
body.addEventListener("mouseout", () => {
  console.log("mouseout event triggered");
});
div.addEventListener("mouseenter", () => {
  console.log("mouseenter event triggered");
    div.style.background="yellow"
});
div.addEventListener("mouseleave", () => {
  console.log("mouseenter event triggered");
    div.style.background="pink"
});
body.addEventListener("wheel", () => {
  console.log("wheel event triggered");
});

btn.addEventListener("mouseover", function(){
   const body=document.body;
   body.style.background="black";
});

btn.addEventListener("mouseout", function(){
     const body=document.body;
   body.style.background="white";
})
