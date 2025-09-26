let text = document.getElementById("text")
text.addEventListener("change",(e)=>{
    console.log(e.target.value)
})

let select = document.getElementById("select");
select.addEventListener("change",(e)=>{
    console.log(e.target.value)
})

let datalist = document.getElementById("datalist");
datalist.addEventListener("change",(e)=>{
    console.log(e.target.value)
})

let date = document.getElementById("date");
date.addEventListener("change",(e)=>{
    console.log(e.target.value)
})