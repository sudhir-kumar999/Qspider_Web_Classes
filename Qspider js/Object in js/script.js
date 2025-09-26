const obj = {
  userName: "sudhir",
  "user Name": "abhi",
  age: 21,
  // when fn is called inside object then it is called as method
  greet: function () {
    console.log("good morning");
    // return 10;
  },
};

console.log(obj["user Name"]);
console.log(obj.greet());

// when you want to pass keyname yourself

// const key1=prompt("enter key name")

// const obj2={
//     [key1]:"sudhir"
// }
// console.log(obj2)

// single key value

const userName = "sudhir";
const age = 22;

const obj3 = {
  userName,
  age,
};
console.log(obj3);

// ways to create an object

const obj4 = {};

// by using new keyword and in-build object constructor

const obj5 = new Object("abc");
// const obj5 = new Object((a, b) => {
// by using new keyword and custom constructor function
// name of function should bye capital cammel case
function CreateObject(userName, age, city) {
  (this.userName = userName), (this.age = age), (this.city = city);
  // console.log(userName);
}

const u1 = new CreateObject("sudhir", 22, "patna");

class car {
  constructor(name, price, color) {
    this.carname = name;
    this.price = price;
    this.color = color;
  }
}

const c1 = new car("scarpio", 2800000, "black");
console.log(c1);
