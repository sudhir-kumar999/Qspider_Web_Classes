

function stateChange(){
    console.log("clicked")
    const btn = document.getElementById("btn");
    if(btn.classList.contains("off")){
        btn.classList.remove("off");
        btn.classList.add("on")
        btn.innerText="ON"
    } else{
        btn.classList.remove("on");
        btn.classList.add("off");
        btn.innerText="OFF"
    }
}