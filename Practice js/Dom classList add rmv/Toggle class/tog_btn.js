const input = document.getElementById("input")
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    input.toggleAttribute("disabled")
})