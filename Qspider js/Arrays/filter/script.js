const arr = [5, 6, 8, 7, 9, 2, 3, 7, 1, 2, 6];

const x = arr.filter((ele) => {
  if (ele > 4) {
    return ele;
  }
}).map((ele)=>{
    return ele*4
})

console.log(x);
console.log(arr);
