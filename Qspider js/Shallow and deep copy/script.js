// shallow copy

const jack = {
  cake: "ice cream",
  home: {
    name: "oggy",
    age: 5,
    pin:{
        no:844502
    }
  },
};

const oggy = jack;
oggy.cake = "samosa";
oggy.home.name="patna";
oggy.home.pin.no=123
console.log(jack);
console.log(oggy)

const arr = [2,5,6,7,[9,8,6,4]]



// deep copy

// const jack ={
//     cake:"ice cream",
//     home:{
//         name:"oggy",
//         age:5
//     }
// }

//const oggy={...jack} // it can change the value of nested object
// console.log(oggy)
// oggy.food="litti"
// console.log(oggy)
// console.log(jack)
// oggy.home.age=10;
// console.log(jack)

// to overcome from this we use structured clone

// const oggy = structuredClone(jack)
// console.log(oggy)
// oggy.food="litti"
// console.log(oggy)
// console.log(jack)
// oggy.home.age=10;
// console.log(jack)
