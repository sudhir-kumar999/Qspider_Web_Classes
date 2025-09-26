const names = document.getElementById("username").value;
// console.log(names)
// let forms = document.forms[0];
console.log(document.forms["login"]["username"].value);
let form = document.getElementById("form");

form.onsubmit=function(e){
    let name = document.getElementById("username").value;
    e.preventDefault();
    console.log(name)
}


function printValue(){
    let test = document.getElementById("test").value;
    console.log(test)
}