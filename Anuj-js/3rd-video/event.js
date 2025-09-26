const box1 = document.getElementById("box");
const container = document.getElementById("container");
//console.log(box1);
// const parag = document.getElementById("para")
// parag.innerText='sk'
// parag.innerHTML="<h1>sks</h1>"

// let count = 0;
// const logMessage=()=>{
//     console.log("clicked " , count++);

// }

// const coordinate = document.createElement("p");
// document.body.append(coordinate);
// //box1.append(coordinate);
// const logMessage = (event) => {
//   //console.log(event);
// coordinate.innerHTML = ` ${event.offsetX} ${event.offsetY}`;
//   box1.style.left = `${event.offsetX}px`; 
//   box1.style.top = `${event.offsetY}px`;
// };

//we have to pass fn not call the fn when event is triggered it is automatic called
//box1.addEventListener("click", logMessage);
// box1.addEventListener("mousemove", logMessage);l


let grandp = document.getElementById("grandp");
let parent = document.getElementById("parent")
let child = document.getElementById("child")

child.addEventListener("click" , ()=>{
    console.log("child click");
    
})

parent.addEventListener("click" , ()=>{
    console.log("parent click");
    
})

grandp.addEventListener("click" , ()=>{
    console.log("child click");
    
})