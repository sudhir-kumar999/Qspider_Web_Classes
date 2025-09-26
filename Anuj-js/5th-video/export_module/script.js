import { addition } from "./server.js";
import { mult } from "./server.js";

const res =addition(7,9);
console.log(res);
const resu = mult(5,8)
console.log(resu);

const arr = [1,2,3,4,8,7,9,6,5,8]


function number(){

    const b=[];
for(let i=0;i<arr.length;i++){
    
    if(arr[i]>7){
        b.push(arr[i]);
    }
    
}
return b;
}
const newarr =number();
console.log(newarr);

