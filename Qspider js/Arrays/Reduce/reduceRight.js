const arr = [2, 1, 5, 6, 4, 7, 8, 9, 5, 2, 5];

const x = arr.reduceRight((acc, ele) => {
  acc.push(ele);
  return acc;
}, []);
console.log(x);

const str = "sudhir";
const y = str.split("").reduceRight((acc, ele) => {
  acc.push(ele);
  return acc;
}, []);
console.log(y.join(""));


const fruits = [
  "apple",
  "orange",
  "grapes",
  "apple",
  "mango",
  "orange",
  "apple",
  "grapes",
  "litchi",
  "mango",
];

const z= fruits.reduceRight((acc , ele)=>{
    acc.push(ele)
    return acc
},[])

console.log(z)