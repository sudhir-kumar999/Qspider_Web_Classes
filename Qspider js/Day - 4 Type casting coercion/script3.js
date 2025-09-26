var a = 1;
let b = 2;
const c = 3;

{
  console.log("inside a local block");
  a = 10;
  b = 20;
  //   c = 30;
  d = 40;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d); // d is autoglobal . it is only made when no any declaration rae dne to make it autoglobal
}
console.log("inside a local block");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
