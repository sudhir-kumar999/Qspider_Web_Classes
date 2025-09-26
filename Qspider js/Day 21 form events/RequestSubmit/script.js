let form = document.getElementById("myform");



    form.addEventListener("submit", (e) => {
      e.preventDefault(); // 🚫 reload stop
      let mail = document.getElementById("mail").value;
      let mob = document.getElementById("mob").value;
      console.log("✅ Form Submitted:", mail, mob);
    });

    //  form.requestSubmit();


  let mob = document.getElementById("mob");

  mob.addEventListener("change",(e)=>{
    e.preventDefault();
    let mail = document.getElementById("mail").value;
  let mob = document.getElementById("mob").value;
  e.preventDefault();
  
  if (mail !== "" && mob !== "") {
        console.log("Validation passed → auto submitting...");
        form.requestSubmit();
         // auto submit trigger
      }
 

})


