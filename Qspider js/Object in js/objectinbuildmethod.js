/**
    object.keys()
    object.values()
    object.entries()
    object.fromEntries()
    object.assign()
    object.freeze()
    object.isFrozen()
    object.hasOwn()
    object.
    object

 
 */

const obj = {
  name: "       sudhir",
  age: "22",
  home: "patna       ",
};

const keys = Object.keys(obj);
const values = Object.values(obj);
// console.log(keys);
// console.log(values);

const x = Object.entries(obj);
// console.log(x);

// x.map((ele , index, array)=>{
const trimm = x.map(([key, value], index, array) => {
  console.log(value);
  return [key, value.trim()];
});

console.log(trimm)
