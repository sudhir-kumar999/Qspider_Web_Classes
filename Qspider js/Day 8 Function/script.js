function findSum(a, b) {
  // console.log(a+b)
  return a + b;
}
// findSum(6, 7);
//  👆 it is reference  and (this is calling)
console.log(findSum(6, 7))

function meme(user){
    console.log(`${user}`)
}
meme() // it will print undefined bcz we do not pass anything
meme("kumar")

function returnn(user){
    console.log(user)
}
returnn(); //print undefined

