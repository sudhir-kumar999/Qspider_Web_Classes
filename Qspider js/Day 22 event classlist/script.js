const btn=document.querySelector("button");
const div= document.querySelector(".container");
const body=document.body;
//  console.log(div)

//  btn.addEventListener("click", ()=>{
//     const x = btn.classList.contains("light")

//     if(x){
        
//         body.classList.replace("light", "dark")
//         div.classList.replace("light", "dark")
//         btn.classList.replace("light", "dark")
//         btn.textContent="light mode"
//     } else{
//         body.classList.replace("dark" , "light")
//         div.classList.replace("dark" , "light")
//         btn.classList.replace("dark" , "light")
//         btn.textContent="Dark mode"
//     }
//  })



//  btn.addEventListener("click", () => {
//     const x = div.classList.contains("gradient");
//     if(x){
//         div.classList.remove("gradient");
//     }
//     else{
//         div.classList.add("gradient");
//     }
// })


// btn.addEventListener("click", function (){
//     div.classList.forEach((element,index)=>{
//         console.log(element)
//           div.classList.replace(element, element+1)         
    
//     })
// })



btn.addEventListener("click",() =>{
const div= document.querySelector(".container");

    const x= Array.from( div.classList.entries());
    const y= Array.from( div.classList.values());
    const z= Array.from(div.classList.keys());
;
    // console.log("classList.entries():", x);
    // console.log("classList.values():", y);
    // console.log("classList.keys():",z);


    // console.log(div.classList.value)
    // console.log(div.classList)
    // console.log(Array.from(div.classList))


    console.log(div.classList.keys())
    console.log(Array.from(div.classList.keys()))


    // console.log(div.classList.supports("validToken"))
    // console.log(div.classList.item(0))
})