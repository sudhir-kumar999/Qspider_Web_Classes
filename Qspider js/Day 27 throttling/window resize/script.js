// const windoww = window.innerWidth
// console.log(windoww)

function throttle(cbfn, delay) {
  let last = 0;
  return function (...args) {
    let now = Date.now();
    if (now - last >= delay) {
      cbfn.apply(this, args);
      last = now;
    }
  };
}

function resize() {
  console.log("scroll position", window.scrollY);
}

const throttilng = throttle(resize, 2000);

window.addEventListener("scroll", throttilng);
