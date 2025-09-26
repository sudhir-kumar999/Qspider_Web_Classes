// function greet(){
//     console.log(this)
// }
// greet()

const user={
    name:"sudhir",
    age:22,
    city:"patna",
    greet:function greet(){
    console.log(this)
}
}
let fn =user.greet;
fn()


/* ! portion 1

var a=10;
console.log(window.a)
console.log(this.a)

 */ 

/** portion 2  */

// var a=10;
// {
//     let b= "block";
//     console.log("this : ", this)
// }