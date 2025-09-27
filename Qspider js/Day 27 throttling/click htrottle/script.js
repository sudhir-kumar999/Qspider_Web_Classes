
function throttle(cbfn , delay){
    let last =0;
    return function(...args){
        let now = Date.now()
        if(now-last>=delay){
            cbfn.apply(this,args)
            last = now;
        }
    }
}

function handleprint(){
    console.log("btn clicked")
    count++;
    console.log(count)
}

const throttling = throttle(handleprint,2000)
const btn = document.getElementById("btn");
let count =0;
btn.addEventListener("click",()=>{
throttling()
})