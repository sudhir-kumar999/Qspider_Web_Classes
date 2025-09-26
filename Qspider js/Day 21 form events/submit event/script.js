let form = document.getElementById("myform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("text").value;
  let mail = document.getElementById("mail").value;
  let mob = document.getElementById("mob").value;
  let city = document.getElementById("city").value;

  if (mail == "" || mob == "") {
    alert("enter email and phone");
    return false;
  } else {
    console.log(mail, city, name, mob);
    return true;
  }
});
