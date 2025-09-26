const user = {
  username: "tinku",
  desg: "developer",
  intro: () => {
    console.log(`i am ${user.username} working as ${user.desg}`);
    let bag = "10cr";
    const inner = () => {
      console.log("i am inner function");
      console.log(bag);
      
    };
    return inner;
  },
};

const x = user.intro();
console.log(x);
x();


const obj = {
    name:"sudhir",
    // greet=()=>{
    //     console.log(obj.name)
    // } not allowed inside object
}