const btn = document.getElementById("btn");


/**
function switchbar(){
    let iclass = document.getElementsByClassName("fa-solid")
    let bars = document.getElementById("bars")
    if(bars.classList.contains("fa-bars")){
    // iclass[0].className="fa-solid fa-xmark"
    bars.classList.remove("fa-bars")
    bars.classList.add("fa-xmark")
// bars.className="fa-solid fa-xmark"
    } else{
        bars.classList.remove("fa-xmark")
    bars.classList.add("fa-bars")
    }
}

 */

//  using toggle

function switchbar() {
      let bars = document.getElementById("bars");
      let menu = document.getElementById("menu")
      bars.classList.toggle("fa-bars");
      bars.classList.toggle("fa-xmark");
    menu.classList.toggle("active")
    }

    /**
    //  using event listener mouseover
      let bars = document.getElementById("bars");
      bars.addEventListener("mouseover", ()=>{
        console.log("mouse hovered")
        bars.classList.toggle("fa-bars");
      bars.classList.toggle("fa-xmark");
      })
      
     */