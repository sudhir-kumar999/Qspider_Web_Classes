const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const bars = document.getElementById("bars")
    bars.classList.toggle("fa-xmark")
    bars.classList.toggle("fa-bars")

})