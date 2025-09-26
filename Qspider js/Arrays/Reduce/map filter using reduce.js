const arr=[1,3,6,5,4,7,8,3,5,9,5,4,5,5]

const mapped = arr.reduce((acc,ele)=>{
    acc.push(ele*5)
    return acc
},[])
console.log(mapped);