// function orderPizza(){
//    return new Promise(function(resolve , reject){
//     setTimeout(() => {
//         //console.log('this is pizza');
//         const pizza = 'pizza'
//         resolve(pizza)
//     }, 2000);
//    })
// }

// const pizza = orderPizza();
// console.log(pizza);

function getRandomInt(y) {
  let max = 10;
  return Math.floor(Math.random() * max);
}
// function promiseWithLoop(){
//     return new Promise((resolve , reject)=>{
//         for (let i = 0; i < 1000; i++) {
//             let num = getRandomInt(10);
//             if(num%2==0){
//                 resolve(num)
//             }
//             else {
//                 reject(num)
//             }

//         }
//     })
// }
// let x= promiseWithLoop();
// console.log(x);

function createPromiceTimeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 5000);
  });
}

let x = createPromiceTimeout();
console.log(x);

let p = 10;
let q = 20;
console.log(p + q);
