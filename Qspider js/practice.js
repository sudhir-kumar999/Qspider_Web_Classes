// function xx() {
//   x = 10;
//   console.log("inside fn", x);
// }
// xx()
// console.log(x);
// {
//   y = 30;
// }
// console.log(y);
// z = 20;
// function zz() {
//   console.log(z);
// }
// zz();

// const a=10;
// const a=20;
// console.log(a)

// const a=10
// {
//   a=20
//   console.log(a)
// }
// console.log(a)

// function vvv() {
//   const a = 20;
//   console.log(a);
// }
// vvv();
// console.log(a);

// {
//   var a=10
// }
// console.log(a)

// let a=10
// var b=20
// const c=30
// {
//   let a=100
//   var b=200
//   const c=300
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
//   console.log(a)
//   console.log(b)
//   console.log(c)

// console.log("start");
// let a = 10;
// console.log(b);
// {
//   var b = 200;
// }
// console.log(a);
// console.log(b);
// console.log("end");

// console.log("start");
// let a = 20;
// {
//   console.log(a);
//   let a = 40;
// }
// console.log(a);
// console.log("end");

// console.log("start");
// var b = 20;
// const c = 30;
// {
//   let a = 10;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);

// console.log("start")
// let a=10
// var b=20
// const c=30
// {
//   let a=100
//   console.log(a)
//   const c=300
//   console.log(b)
//   b=200
//   c=300
//   console.log(b)
// }
// console.log(a)
// console.log(b)
// console.log("end")

// function add() {
//   // console.log(a, b);
//   console.log(arguments);
// }
// add(5, 6);

// const sum = () => {
//   // console.log(a,b)
//   console.log(arguments);
// };
// sum(5, 6);
// sum()

// function greet(){
//   var a=10;
//   let b=20
//   const c=30

// }

// console.log(a)
// console.log(b)
// console.log(c)

// const greet = (user) => {
//   console.log(user);
// };
// const x = greet("sudhir");
// console.log(x);

// const square=(x)=> x*x;
// const res=square(10);
// console.log(res)

// var a=10;
// {
//   var a = 20;
// }
// console.log(a);

//   function add(){
//     var b=30;
//     return b;
//   }
//   console.log(add())
//   console.log(b)

// let c;
// let a = 20;
//   a = 40;
// {
//   // let a = 20;
//   // a = 40;
// }
// console.log(a);
// console.log(c)
// function add() {
//   let b = 30;
//   return b;
// }
// console.log(b)

// let a=10;
// {
//   console.log(a)
//   let b=20;
// }
// console.log(a)
// console.log(b)

const y="0123456789ABCDEF"
let z=""
for (let i =0;i<8;i++){
const x = Math.floor(Math.random()*y.length)
// console.log(x)
z+=y[x];
}
console.log(z)
