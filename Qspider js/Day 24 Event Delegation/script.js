const section= document.querySelector("section");

const divs=document.querySelectorAll("div");

section.addEventListener("click" , (e)=>{
    console.log(e.target)
    console.log("section clicked")
})

// divs.forEach((ele, index)=>{
//     ele.addEventListener("click",()=>{
//         console.log(`section clicked ${index+1}`)
//     })
// })