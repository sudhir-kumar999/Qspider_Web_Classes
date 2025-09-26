// let box = document.getElementById("box");
// let input = document.getElementById("inputbox");

//click event
// box.addEventListener("click", () => {
//   //alert("this is click event");
// });

// dbclick event

// box.addEventListener("dblclick", () => {
//   alert("this is double click event");
// });

//mouseover
// box.addEventListener("mouseover", () => {
//   // alert("this is mouse over event")
// });

// //mouseout
// box.addEventListener("mouseout", () => {
//   //alert('this is mouse out event')
// });

// input.addEventListener("keypress", (e) => {
//   //alert('key press' , e.key)
//   console.log("key press", e.key);
// });

//change event listener
// let language = document.getElementById("language");
// let output = document.getElementById("output");

// language.addEventListener("change", function () {
//   const selected = this.value;
//   output.innerText = "you selected " + selected;
// });

// let username = document.getElementById("username");
// let para = document.getElementById("para");
// let parag = document.getElementById("parag");

// username.addEventListener('change' , function(){
//     const input = this.value;
//     para.innerText= "you entered :" + input;
// })

//input event listener
// username.addEventListener("input", function () {
//   para.textContent = "output : " + this.value;
//   parag.textContent = "output : " + this.value.length;
// });

//submit event listener

// let form = document.getElementById("myform");
// let names = document.getElementById("names");
// let password = document.getElementById("password");
// let msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const username = name.value;
//   const pass = password.value;
//   msg.textContent = "you entered " + username + pass;
// });


// focus or blur

// names.addEventListener('focus' , ()=>{
//     names.style.borderColor = "green"
// })
// names.addEventListener('blur' , ()=>{
//     names.style.borderColor = "aqua "
// })

window.addEventListener('resize' , ()=>{
    console.log('width' + window.innerWidth);
    
})