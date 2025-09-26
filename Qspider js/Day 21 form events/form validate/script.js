const form = document.querySelector("form");
const usernameInput= document.getElementById("inp1");
const emailInput = document.getElementById('inp2');
const passwordInput = document.getElementById('inp3');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePasswordBtn= document.getElementById("togglePasswordBtn");

function validateEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent='Plz enter a valid email'
    emailError.classList.add("invalid")
    emailError.classList.remove("valid")
    return false;
  } else {
    emailError.textContent = '';
    emailError.classList.add('valid');
    emailError.classList.remove('invalid');
    return true;
  }
}

function validatePassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.textContent ='Invalid Password';      
    passwordError.classList.add('invalid');
    passwordError.classList.remove('valid');
    return false;
  } else {
    passwordError.textContent = '';
    passwordError.classList.add('valid');
    passwordError.classList.remove('invalid');
    return true;
  }
}


form.addEventListener("submit", function(event){
    event.preventDefault();
    const userName=usernameInput.value.trim(); 
    const emailId= emailInput.value.trim();
    const password= passwordInput.value.trim();

    const isEmailValid =  validateEmail(emailId);
    const isPasswordValid=  validatePassword(password) ;
     if (isEmailValid && isPasswordValid) {
    alert('Form submitted successfully!');
    form.reset();
  }

});