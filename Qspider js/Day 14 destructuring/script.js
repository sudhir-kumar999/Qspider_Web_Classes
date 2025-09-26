
/**
const obj = {
  username: "sudhir",
  age: 23,
  city: "noida",
};

// object destructing
const { username, age, city } = obj;
console.log(username);


const movies=["welcome","hera pheri","dhol","dhamal","php"]

// array destructing
const [m1,m2,m3,m4,m5]= movies;
console.log(m1)
console.log(m2)
 */
/**


// nested object destructing
const obj1 = {
  username: "sudhir",
  address: {
    state: "up",
    city: "noida",
    pin: 201301,
  },
};

// const {username , address:add} = obj1
const {
  username,
  address: { state, pin },
} = obj1;
//            rename address to add
console.log(state);
console.log(pin);

 */

/**
 *  !Nested array destructing
 */

const arr = [
  ["html", "css"],
  ["js", "ts"],
  ["node", "java"],
  ["mongo", "sql"],
];

// const [ui,logic,backend,db]=arr;
const [ui, logic, [b1, b2] = backend, db] = arr;

// const [b1,b2]=backend;
console.log(b1);
console.log(b2);

/**
 * !Mixed array destructuring
 */

const users = [
  {
    fname: "sudhir     ",
    lname: "     kumar",
  },

  {
    fname: "singh     ",
    lname: "     shiv   ",
  },
  {
    fname: "      ganj     ",
    lname: "hajipur",
  },
];
/**

const map = users.map((ele, i, array) => {
  const { fname, lname } = ele;
//   const first = fname.trim("");
//   const second = lname.trim("");
  
//   return [first, second];

return {
  fname:fname.trim(""),
  lname:lname.trim("")
  }
});
console.log(map);
console.log(users);
 */

const x = users.map(({ fname, lname }, index, array) => {
  array[index] = { fname: fname.trim(""), lname: lname.trim("") };
  return [fname, lname];
});
console.log(x);



import obj from "./logic.js";
const {add,greet,user}=obj
console.log(add(5,6))