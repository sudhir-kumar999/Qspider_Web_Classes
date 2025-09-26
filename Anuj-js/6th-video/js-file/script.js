// setTimeout(() => {
//   console.log("hii");
// }, 5000);

// setInterval(()=>{
//     console.log('sk');

// },2000)
function greet(name) {
  console.log("hello from greet" , name);
}
//setTimeout(greet, 2000);
//setTimeout(greet('sudhir') ,2000)
const timeoutid =setTimeout(greet , 2000 , 'sudhir')
console.log("after greet call text");

setTimeout(() => {
    greet('sudhirrr')
}, 2000);
clearTimeout(timeoutid)