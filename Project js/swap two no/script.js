const inp1= document.getElementById("inp1")
const inp2 = document.getElementById("inp2")
const swap = document.getElementById("swap")
const clear = document.getElementById("clear")
const para1 = document.getElementById("para1")
const para2 = document.getElementById("para2")

// console.log(/[0-9]/.test(value1))
inp1.addEventListener("input",()=>{
    
    let value1 = inp1.value;
    if(/^[0-9]+$/.test(value1)){
    para1.textContent="First Number => "+value1
    } else{
        alert("plz enter a nmber only")
    }
})
inp2.addEventListener("input",()=>{
    let value2 = inp2.value;
    if(/^[0-9]+$/.test(value2)){
    para2.textContent="Second Number => "+value2
    }
})

function debounce(cbfn ,delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            cbfn.apply(this,args)
        }, delay);
    }
}

const debouncing = debounce(swapping , 1000)

swap.addEventListener("click" , debouncing)

function swapping(){
    let value1 = inp1.value;
    let value2 = inp2.value;
    
    // console.log(value1)
    let c;
    c=value1;
    value1=value2;
    value2=c;
    console.log(value1)
    para1.textContent="First Number => "+value1
    para2.textContent="Second Number => "+value2
    console.log(value2)

}
clear.addEventListener("click",()=>{
    inp1.value="";
    inp2.value="";
    para1.textContent=""
    para2.textContent=""
})