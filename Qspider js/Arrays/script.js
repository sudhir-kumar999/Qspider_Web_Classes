// way to create array
// by using square bracket and literals

const arr=[]
console.log(arr)

// by using new keyword and array inbuilt constructor

const skills=new Array("html","css","js")
// new keyword create empty object 
console.log(skills)

const arr2=[12,5,2,52,1,0,69]
// const x= arr2.sort((a,b)=>a-b)
// console.log(x)

let [a,b,...c]=arr2;
console.log(a,b,c)