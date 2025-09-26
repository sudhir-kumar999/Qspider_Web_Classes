function outer() {
  let name = "sudhir";
  function inner1() {
    console.log(name + "from inner1");
  }
  function inner2() {
    console.log(name + "from inner2");
  }
  inner1();
  inner2();
}
outer();
console.log("form outer", name);
