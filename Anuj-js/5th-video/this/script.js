// const student  = {
//     name:"sudhir ",
//     marks: 87,
//     talk: function (){
//         console.log(`my marks is ${this.marks}`);
        
//     }

// }

// student.talk();

// const age = 25;
// console.log(`my age is ${age}`);

// class vehicle {
//     constructor(){
//         this.model = "XUV";
//         this.wheel = 4;
//     }
// }

class vehicle {
    constructor(model , wheel){
        this.model = model;
        this.wheel = wheel;
    }
    star(){
        console.log('vehicle started  ');
        
    }
}
const obj1 = new vehicle("sk" , 6);
const obj2 = new vehicle("sudhir" , 5);
obj1.star();
console.log(obj1);
console.log(obj2);

