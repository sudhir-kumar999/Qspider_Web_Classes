// const outer = () => {
//   console.log("inside outer function");
//   const userId = "1345";
//   const password = "abcdef";

//   const inner = () => {
//     console.log("inside inner function");
//     console.log(userId);
//     console.log(password);
//   };
//   return inner;
// };

// const x = outer();
// console.log(typeof(x));
// // console.log(x);
// if(typeof(x)==="function"){
//     x()
// }else{
//     console.log(x)
// }

// Example 2 high memory consumption crete more closure for every functions inside parent here 2 closure are created

// const parent=()=>{
//     const a=10;
//     const inner1=()=>{
//         console.log("inside inner 1" , a)
//     }

//     const inner2=()=>{
//         console.log("inside inner 2" , a)
//     }

//     return [inner1 , inner2]
// }

// const [x1,x2]=parent()
// x1()
// x2()

// const outer=()=>{
//     console.log("inside outer function")
//     const a=10;
//     const b=20;
//     const inner1 =()=>{
//         console.log("inside inner function")
//         console.log("a",a)
//     }

//     const inner2 =()=>{
//         console.log("inside inner function")
//         console.log("b",b)
//     }
//     return [inner1 , inner2]
// }
// const [x1,x2]=outer()
// console.log(x1,x2)
// x1()
// x2()

// Example 4

// const parent =(a)=>{
//     console.log("Inside parent function")
    // const a=10;

//     const sum=(b)=>{
//         console.log("sum function")
//         console.log("a",a)
//         console.log("b",b)
//         return a+b
//     }
//     return sum
// }

// const x=parent(10)(20)
// const x = sum+(20)

// console.log(x)



// IIFE

// (function fun1() {
//   console.log("inside function 1");
//   let count = 0;

//   // return increment instead of using function name in return we directly give function as return
//   return function increment() {
//     console.log("inside increment function");
//     count++;
//     console.log(count);
//   };
// })()();


// Example 6

// const x=(function fun1() {
//   console.log("inside function 1");
//   let count = 0;

//   // return increment instead of using function name in return we directly give function as return
//   return function increment() {
//     console.log("inside increment function");
//     count++;
//     console.log(count);
//     return count
//   };
// })()()
// console.log(x)

const x=(function fun1() {
  console.log("inside function 1");
  let count = 0;

  // return increment instead of using function name in return we directly give function as return
  return function increment() {
    console.log("inside increment function");
    count++;
    console.log(count);
    return count
  };
})()
console.log(x())
console.log(x())
console.log(x())
console.log(x())