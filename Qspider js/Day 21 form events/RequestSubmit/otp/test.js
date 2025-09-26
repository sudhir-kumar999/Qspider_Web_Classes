let form = document.getElementById("myform");
let inputs = document.querySelectorAll(".otp");

// console.log(inputs);
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if(input.value.length===1 && index<inputs.length-1){
        inputs[index+1].focus();
    }

    if(index===input.length-1 && input.value.length===1){
        console.log("form submitted")
        form.requestSubmit();
    }
  });
});

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let otp = "";
    inputs.forEach((input)=>{
        otp+=input.value;
    })
    if(otp==="1234"){
        console.log("verified")
    }else{
        console.log("wrong otp")
    }
})