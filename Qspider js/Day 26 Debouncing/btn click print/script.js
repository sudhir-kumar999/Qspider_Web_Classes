// function argum(...args){
//     console.log(args)
// }

// argum("sudhir","kumar","singh")


function debounce(cbfn , delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer =setTimeout(()=>{
            cbfn.apply(this,args)
        }, delay)
    }
}
function print(name){
    console.log("btn clicked" ,name)
}
const btn = document.getElementById("btn");
const debounced = debounce(print , 2000)
// console.log(debounced)
btn.addEventListener("click",()=>{
    debounced("sudhir")
})
