// var a=1
// let b=2
// const c=3

// {
//     console.log("inside a local block")
//     var a=10
//     let b=20
//     // b=200
//     const c=30
//     d=40
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// console.log("outside a local block")
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)

console.log("start")
var a=1
let b=2
const c=3

{
    console.log("inside a local block")
    var a=10
    // let b=20
    b=200
    let c=30
    d=40
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
console.log("outside a local scope")
console.log(a)
console.log(b)
console.log(c)
console.log(d)