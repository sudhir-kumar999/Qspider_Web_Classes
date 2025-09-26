// const greet = (user) => console.log(`good morning ${user}`);

// const x = greet("kumar");
// console.log(x);
// log function return undefined after print the statement

// implicit return
// const sum = (a, b) => a + b;
// const y = sum(5, 6);
// console.log(y);

// const sum2 =(a,b)=>a+b;
// const task =(a,b)=>sum(a,b)
// const z=task(5,6);
// console.log(z)

// const sum2 = (a, b) => console.log(a + b);
// const task = (a, b) => sum2(a, b);
// const z = task(5, 6);
// console.log(z);

// explicit return type arrow function

// const findPower=(a,b)=>{
//     const power = a**b;
//     console.log(power)
//     return power;
// }
// const res = findPower(2,3)
// console.log(res)

//  functional programming

// the function which accept another another function as a parameter or return a function is called high order function (HOP)
//  the function which is passed to another function or the function which is returned by another function is called callback function (CBF)

// higher order function and calculator is HOF - the function which return another function

// function calculator(a, task, b) {
//   console.log("start");
//   const x = task(a, b);
//   console.log(x);
//   console.log("end");
// }

// const sum = (a, b) => a + b;
// calculator(10, sum, 20);
// here sum is callback fn



// function outer(){
//     console.log("inside the outer function")

//     // here inner is callback function
//     const inner=()=>{
//         console.log("inside inner function")
//     }
//     return inner;
// }

// const x= outer()
// console.log(x)

function parent(){
    console.log("i am parent function")
    const locker = "10 cr"
    const child=()=>{
        console.log("inside child function")
        console.log(locker)
    }
    return child
}
const x= parent();
console.log(x)
console.log(x())

