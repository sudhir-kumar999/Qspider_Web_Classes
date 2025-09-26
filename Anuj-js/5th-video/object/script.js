const y = {
  name: "sudhir",
  age: 6,
  hobbies: ["playing", "listening", "biking"],
  food: {
    sunday: "pizza",
    monday: "burger",
  },
};
// //console.log(y.name);

// y.name = "kumar";
// //console.log(y.name);
// y.home = "hajipur";
// console.log(y);

// console.log(y.food);

// const car = {
//   wheel: 4,
//   model: "car",
//   IsDrive: true,
//   color: "red",
// };

//for (key in car) {
  //console.log(key);
  //console.log(car[key]);
  
//}

// function getVehicle(){
//     return{
//         wheel: 4,
//         model: "car",
//         IsDrive: true,
//         color: "red",
//     }
// }

// const carObj1 = getVehicle();
// console.log(carObj1);
// const carObj2 = getVehicle();
// carObj2.wheel=6;
// console.log(carObj2);


// in old version es5
// const age = y.age;
// console.log(age);

// in es6 
//object destructing


const {age , name} = y; //same var name as obj name
console.log(age);
console.log(name);


const {age : myAge , name:myName} = y;
console.log(myAge);
console.log(myName);

