const arr = [
  1,
  2,
  3,
  ,
  5,
  6,
  9,
  [2, 5, 6, [8, 8, 9, 7, [4, 5]], [5, 9], [8, 9, 5]],
  [2, 3, 5],
];

const x = arr.flat(Infinity);
console.log(x);
