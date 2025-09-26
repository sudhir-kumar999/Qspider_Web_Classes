const form = document.querySelector("form");
const usernameInput= document.getElementById("inp1");
const emailInput = document.getElementById('inp2');
const passwordInput = document.getElementById('inp3');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePasswordBtn= document.getElementById("togglePasswordBtn");

emailInput.addEventListener("change",()=>{


console.log(emailInput.value)
})