const arr=[1,2,4,5,[5,6,7],5,8,9];

const x= arr.flatMap((item)=>{
    return item*2;
})
console.log(x)