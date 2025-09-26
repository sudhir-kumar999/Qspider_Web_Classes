// function greetings() {
  //declaration
  //alert('sudhir kumar')
//   console.log("hii");
//   console.log("sudhir");
//   console.log("kumar");
// }
// greetings(); // calling
// greetings();

// function greet(name) {
//   console.log(name + " are u ok");
// }
// greet('sudhir');
// greet('kumar')

// in js we can call the fn first then we can declare bcz at first code is compiled then called

// function addition(a, b) {
//   //console.log(a + b); // when fn not return nothing and we store in result it give undefined
//   return a+b; // first store into result and then print in return 
// }
// let result = addition(3, 9);
// console.log(result);


//function are stored in variable this type of function is called anonymous function 
// const myAddFn= function(a,b){
//     console.log('add is');
//     return a+b;
    
// }
// let result=myAddFn(7,9);
// console.log(result);
//normal function can be called before declaration but variable stored fn cannot be called before initialisation

//arrow function define this
let myAddFn = (a,b) =>{
    console.log("add is");
    return a+b;
    
}
let result = myAddFn(5,8)
console.log(result);
