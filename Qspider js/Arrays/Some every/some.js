const arr=[2,5,8,9,7,5,6,4,0,8,5,6,9,9,7,1,2,3]

const res=arr.some((item)=>{
    return item>8
})
console.log(res)

const result = arr.every((item)=>{
    return item>=1
})
console.log(result)