
// const c=50;
// {
//     var a=10;
//     let b=15;
// }

// console.log("a",a)
// console.log(c)
// console.log(b);

// var a=10;
// let b= 20;
// const c= 30;

// console.log("a" , a)
// console.log("b" , b)
// console.log("c" , c)


var x=1;
let y = 2;
const z = 3;
{
    console.log("inside a local block ")
    var x=10;
    let y=20;
    const z=30
    console.log("x :",x)
    console.log("y :",y)
    console.log("z :",z)
}

console.log("outside a block");
    console.log("x :",x)
    console.log("y :",y)
    console.log("z :",z)

