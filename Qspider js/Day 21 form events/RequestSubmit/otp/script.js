let form = document.getElementById("myform")

let inputs = document.querySelectorAll(".otp")

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

    // ✅ Jab last input field fill ho jaye → auto submit
    if (index === inputs.length - 1 && input.value.length === 1) {
      console.log("All OTP fields filled → Auto submitting...");
      form.requestSubmit();
    }
  });
});

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let otp="";
    inputs.forEach((inp)=>{
        otp+=inp.value
        console.log("opt is", otp)
    })
    if(otp==="1234"){
        console.log("verified")
    }else{
        console.log("wrong")
    }
})