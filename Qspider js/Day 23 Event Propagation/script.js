let grandp = document.getElementById("gp");
let parent = document.getElementById("p");
let child = document.getElementById("c");
let ch = document.getElementById("ch");

grandp.addEventListener(
  "click",
  (e) => {
    console.log("Grand Parent clicked");
  },
  true
);
parent.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    e.stopImmediatePropagation();

    console.log("Parent clicked");
  },
  true
);
parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked");
  },
  true
);
child.addEventListener(
  "click",
  (e) => {
    console.log("child clicked");
  },
  true
);
ch.addEventListener(
  "click",
  (e) => {
    console.log("child child clicked");
  },
  true
);

grandp.addEventListener("click", (e) => {
  console.log("Grand Parent bubbled");
});
parent.addEventListener("click", (e) => {
  console.log("Parent bubbled");
});
child.addEventListener("click", (e) => {
  console.log("child bubbled");
});
ch.addEventListener("click", (e) => {
  console.log("child child bubbled");
});
