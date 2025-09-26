// const obj = new Object()
// obj.name="sudhir",
// obj.age=24;
// console.log(obj)

// const user = new Object({name:"sudhir",age:24})
// console.log(user)

// function person(name , age){
//     this.name = name;
//     this.age = age;
// }
// let p1 = new person("sudhir",24)
// let p2 = new person("kumar", 22)
// console.log(p1)
// console.log(p2)

let obj1 = {
    name:"sudhir",
    age:22,
    gender:"male",
    city:"noida"
}

//  to iterate over object using for in loop

for(let key in obj1){
    console.log( obj1[key])
}