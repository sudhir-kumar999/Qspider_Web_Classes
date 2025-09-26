const cart = [
    {item:"shirt" ,price:200},
    {item:"t shirt" ,price:300},
    {item:"paint" ,price:400},
    {item:"jeans" ,price:800},
    {item:"shorts" ,price:500},
    {item:"vest" ,price:100}
]

const x=cart.find((element , index,array)=>{
    if(element.item==="shirt"){
        // if present it return product if not then give undefined
        return true
    }
})

// const y= cart.reduce((acc , element, index,array)=>{
//     acc=acc+element.price;
//     return acc;
// },0)
console.log(x)
// console.log(y)

const empList=[
    {name:"sudhir",skill:"java"},
    {name:"kumar",skill:"js"},
    {name:"singh",skill:"react"},
    {name:"patna",skill:"python"},
    {name:"bihar",skill:"ruby"}
]

const isExist = empList.some((element , index,array)=>{
    if(element.skill==="js"){
        return true;
    }
    return false;
})

console.log(isExist)