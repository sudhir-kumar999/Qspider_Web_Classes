// !forEach
// it return undefined
// it does not change the original array

/**
const arr = [5, 6, 4, 9, 8, 7];
const output = [];

const x = arr.forEach((ele, index, arr) => {
  // output.push(ele * ele);
  console.log(ele * 2);
});
console.log(output);
console.log(arr);
console.log("return from for each", x);

// const y = arr.forEach((ele, index) => {
//   console.log(ele, index);
// });
// console.log(y);
 */
/*

map works on each element and return it and it does change the original array

**/
// let arr2 = [5, 6, 9, 8, 7, 1, 2, 8, 4];

// const z = arr2.map((ele, index, array) => {
//   let y = ele * 5;
//   return y;
// });
// console.log(z);
// console.log(y);
// console.log(arr2);

// const arr = [5, 6, 4, 9, 8, 7];
// const obj = {
//   pow: 2,
// };
// const output = [];

// const x = arr.forEach(function task(ele, index, arr) {
//   console.log("this ", this);
//   output.push(ele ** this.pow);
// }, obj);
// console.log(output);
// console.log(arr);
// console.log("return from for each", x);

/**

let arr2 = [5, 6, 9, 8, 7, 1, 2, 8, 4];
const obj2 = {
  pow: 3,
};

const z = arr2.map(function task(ele, index, array) {
  return ele ** this.pow;
}, obj2);
console.log(z);
// console.log(arr2)
 */  

const arr3 = [1, 2, 3, 4, 5, 6];

const p = arr3.map((ele) => {
  if (ele < 4) {
    return ele * 3;
  }
  // if it not satisfy the condition it return undefined it is not stop in between while working on any array
  // return ele
});

console.log(p);
// map is only used to perform operation on elements

/**

// it does not change the original array
const arr=[1,2,3,4,50,6,7,8,9]

const x= arr.filter((ele , index)=>{
    if(index<5){
        return ele
    } 
    
}).map((ele)=>{
    // method chaining when we use .filter and .map
    return ele*5
})
console.log(x)
// console.log(arr)

  */

// reduce(callback , initial value of accumulator , thisArg)

// sum ,total , accumulator
// map return array filter return array
// reduce return a single value , array , {object} , string

// const arr=[1,2,3,6,5,47,8,9,52]

// const x=arr.reduce(task=(accumulator , curEle , index , array)=>{
//     accumulator=accumulator+curEle
//     return accumulator
// },0)
// console.log(x)

// const user = ["sudhir" , "kumar" , "singh" , "patna" , "noida"]

// const ul = document.getElementById("userList")
// user.forEach((ele)=>{
//   const li = document.createElement("li")
//   li.textContent=ele
//   ul.appendChild(li) 
// })

// const arr = [2, 1, 3, 6, 5, 4, 8, 9, 7, 4];

// const x = arr.forEach((ele) => {
//   if (ele % 2 == 0) {
//     console.log(ele)
//     return ele;
//   }
// });
// console.log(x);
