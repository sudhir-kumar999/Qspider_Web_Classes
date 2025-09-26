let regex = /\s/;
console.log(regex.test("Hello world"));
console.log(regex.test("Helloworld"));

let regex2 = /\S/;
console.log(regex2.test("G ello"));

let str = "hello   world";
let regex3 = /\S+/g;
console.log(str.match(regex3));

let str2 = "this is a test";
let words = str2.split(/\s+/);
console.log(words);
