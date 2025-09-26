// let a=[1,3,29,8,5,3,7];
// a[1]=5;
// console.log(typeof a);
// a=10;
// console.log(typeof a);


//const sorted = a.sort();
//console.log(sorted); // sort in ascending not sort like integer 
//just sort like start number which is at first place






const words = ['hello' , 'words' ,'kumar', 'world']; // best practice
// console.log(words);

// for(let i=0; i<words.length;i++){
//     console.log('hello' , words[i]);
    
// }

//to check words is present in lst or not
// const isPresent=words.includes("kumar")
// console.log(isPresent);

// // to find index of any element
// const index = words.indexOf('kumar');
// console.log(index);

//remove or replace existing element and or add new elements
//extract small array from a big array
// words.splice(1 , 2) // hello world
// words.splice(2 , 2) //hello words
// words.splice(0 , words.length) // remove all elements


//add using splice in place of element removed
// words.splice(1,2,'sudhir' , 'sk')
// console.log(words);
// words.splice(2,0 ,'singh')//insert without delete element
// console.log(words);



//to sort alphabetically
// words.sort();
// console.log(words);


//for in loop
// for(let i =0;i<word.length;i++) we use for in instead of this
// for(let i in words){
//     console.log('hello', words[i]);
// }




//2nd method to declare array
//const words = new Array(4 , 1 , 6 , 'hii' , 'hello');
// console.log(words[4]);
// words[4] ='sudhir'; //adding 4th element in array
// console.log(words[4]);
// console.log(words);

// console.log(words.length);

// words.push('kumar') // add element to the last of the array
// console.log(words);
// words.pop();  // remove last element from array
// console.log(words);


let a = [10 , 4 , 23 , 'hii'];
// a.forEach((element , index , arr))
a.forEach((element , index)=>{
    console.log('printing' , element , index);
    
})

a.sort((firstNum , secNum)=>{
    return firstNum-secNum;
})

console.log(a);
