let inputBox = document.getElementById("input");
inputBox.addEventListener("input",(e)=>{
    console.log(e.target.value)
})

let range = document.getElementById("range")
range.addEventListener("input", (e)=>{
    console.log(e.target.value)
})

let select = document.getElementById("select")
select.addEventListener("input",(e)=>{
    console.log(e.target.value)
})

let datalist = document.getElementById("datalist")
datalist.addEventListener("input",(e)=>{
    console.log(e.target.value);
})

let date = document.getElementById("date")
date.addEventListener("input",(e)=>{
    console.log(e.target.value);
})

let radio = document.querySelectorAll("input[name='gender']");
// radio.addEventListener("input",(e)=>{
//     console.log(e.target.value);
// }) can't use addEventListener bcz it return a nodelist and addeventlistener is used on single dom element
// console.log(radio)
radio.forEach((radio)=>{
    radio.addEventListener("input",(e)=>{
        console.log(e.target.value)
    })
})

let check = document.querySelectorAll("input[name='check']")
console.log(check)
check.forEach((check)=>{
    check.addEventListener("input",(e)=>{
        console.log(e.target.value)
    })
})