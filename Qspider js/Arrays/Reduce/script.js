const arr = [1, 5, 6, 9, 8, 7, 4, 6, 9, 2, 1];

const x = arr.reduce((acc, ele, index) => {
  return acc + ele;
}, 5);
console.log(x);

const obj = {
  2: 1,
  3: 2,
  4: 2,
};
console.log(obj[4]);

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

const freq = fruits.reduce((acc, ele) => {
  acc[ele] = (acc[ele] || 0) + 1;
  return acc;
}, {});
console.log(freq);

const nested = [1, 2, [3, 4, [5, 6]], 9];
const flat = nested.reduce((acc, ele) => {
  return acc.concat(ele);
}, []);
console.log(flat);
