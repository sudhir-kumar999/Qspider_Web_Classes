const arr = [2,6,5,7,8,9,6,5,4,[56]]

// const x= arr.find((item)=>{
//     return item>50
// })
// console.log(x)

// find index

const x= arr.findIndex((item)=>{
    return item>50
})
console.log(x)

const users=[
    {name:"sk" , dept:1},
    {name:"sks", dept:2},
    {name:"sudhir", dept:3},
    {name:"kumar", dept:4}
];

// const res = users.find((id)=>{
//     return id.dept===2;
// })
// console.log(res)

// find index

const res = users.findIndex((id)=>{
    return id.dept===2;
})
console.log(res)