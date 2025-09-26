/**
 * ! Internal css
let style = document.createElement("style");
console.log(style)
style.textContent=`h1{
color:red;
font-size:20px;
background-color:aqua;
}`;
const head = document.head;
head.appendChild(style)
 */

/**
const stylesheet = document.styleSheets[0];
// console.log(stylesheet);

stylesheet.insertRule(
  `h1{
    background-color:red;
    font-size:20px;
    color:red;
    }`,
  stylesheet.cssRules.length
);
*/

// const body=document.body;
// const h1=document.createElement("h1");
// h1.textContent="Hello World";
// const c1= document.createComment("This is for testing purpose")
// body.append(h1,c1,"Bla bla bla")

/**
const t1 = performance.now();
const body = document.body;

for (let i = 1; i <= 500; i++) {
  const p = document.createElement("p");
  p.textContent = `Paragraph Tag-${i}`;
  body.append(p);
}

const t2 = performance.now();
console.log("time taken:", t2 - t1);
 */

