const a = 10;
console.log(typeof a);
//  type of operator is js is used to check the type of value

// implicit type conversion js engine convert the type of string data type into number automatically

const b = "10";
const c = 5;
const res = b * c;
console.log(res);

//  explicit type conversion

const x = "10";
//const y = Number (x)  // forcefully convert the type of data
const y = Boolean(x);


const z = String(c);
console.log("b:", y);
console.log(typeof y);
console.log("c:", z, typeof z);

// BigInt
const p = 10;
const q = BigInt(p);
console.log("q", q, typeof q);

// Symbol
const r = 20;
const s = Symbol(r);
console.log("s", s, typeof s);

const t = "5";
const u = t;
console.log("u:", u, typeof u);

//  in ES-6 new way to convert into number use + before the variable
const v = +t;
console.log("v:", v, typeof v);

//  prompt always return a string value no matter what its type is number boolean or other
// const user = prompt("Enter your data");
// console.log(user);
// console.log("user type is :" , typeof (user))
