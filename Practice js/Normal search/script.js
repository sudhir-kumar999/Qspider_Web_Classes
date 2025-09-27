let searchinput = document.getElementById("searchInput");
const elements = document.querySelectorAll(
  "p, h1, h2, h3, h4, h5, h6, div, section, header, span"
);

searchinput.addEventListener("keyup", () => {
  const filter = searchinput.value.toLowerCase();
  // console.log(filter)

  elements.forEach((ele) => {
    const text = ele.textContent.toLowerCase();
    if (text.includes(filter)) {
      ele.style.backgroundColor = "yellow";
    } else {
        ele.style.backgroundColor = "transparent";
    }
  });
});
