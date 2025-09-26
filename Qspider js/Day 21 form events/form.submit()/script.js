let name = document.getElementById("name");
let mail = document.getElementById("mail");
let mob = document.getElementById("mob");
let city = document.getElementById("city");

let form = document.getElementById("myform");
let btn = document.getElementById("btn");
// console.log(name.value);
// form.submit()

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(name.value);
});

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("call form.submit");
//   form.submit();
// });

//   form.submit();
// console.log("form submit called");


// submit after take user input
setTimeout(()=>{
    console.log(name.value , mail.value, mob.value , city.value)
  form.submit();
},10000)