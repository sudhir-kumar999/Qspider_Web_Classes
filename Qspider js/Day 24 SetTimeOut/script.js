// const timerId = setTimeout(() => {
//     console.log("Hello after 2 seconds")
// }, 5000);
// console.log(timerId)

for(let i =0;i<=5;i++){
    setTimeout(() => {
        console.log("i :",i)
    }, 1000);
}
for(var i =0;i<=5;i++){
    setTimeout(() => {
        console.log("i :",i)
    }, 1000);
}