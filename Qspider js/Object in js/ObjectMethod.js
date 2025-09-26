const arr = [
  function fun1() {
    console.log("fun 1");
  },
  function fun2() {
    console.log("fun 1");
  },
  function fun3() {
    console.log("fun 1");
  },
  function fun4() {
    console.log("fun 1");
  },
  function fun5() {
    console.log("fun 1");
  },
  function fun6() {
    console.log("fun 1");
  },
];
arr[1]();
// console.log(arr)

const user = {
  userName: "sudhir",
  desg: "software developer",
  // intro:function(){
  //     console.log(`i am ${this.userName} working as a${this.desg}`)
  // }
  intro: () => {
    console.log(`i am ${user.userName} working as a${user.desg}`);
  },
};

const x = user.intro();
console.log(x);

// add a new key value pair

const obj = {
  name: "tinku",
  age: 22,
  deleteKey:"random",
};
console.log(obj.city); // given undefined because city is not present in the object
obj.city = "noida";
console.log(obj);

obj["state"] = "UP";
console.log(obj);
// delete a key value pair
delete obj.deleteKey
console.log(obj)
//  in keyword to check element is present or not
console.log("city" in obj);
obj.city="new delhi"
console.log(obj)
