// let regex = /\w/
let regex = /[A-Za-z0-9_]/;

console.log(regex.test("_"));

let str = "Hello_123 world"
let regex2=/\w+/
console.log(str.match(regex2))