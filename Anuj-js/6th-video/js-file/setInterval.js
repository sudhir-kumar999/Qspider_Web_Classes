
let count = 0;
function increaseCount(){
    count++;
    console.log(count);

    if(count==5){
        clearInterval(intervalId);
        console.log('break limit reached');
        
    }
    
}
increaseCount()

const intervalId=setInterval(increaseCount,2000)

const mess = setInterval(() => {
    console.log('hii');
    
    
}, 2000);
clearInterval(mess)


// const date = new Date().toDateString();
// console.log(date);
