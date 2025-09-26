function timeConsumeByLoop(){
    console.log("loop starts");
    for (let i = 0; i < 10000000000; i++) {
        // some task
        
    }
    console.log("loop end");
}

function timeConsumeByFeature(){
    console.log("starting timer");
    setTimeout(() => {
        console.log("completed the timer0");
        for (let i = 0; i < 1000000000; i++) {
           //some task 
        }
    }, 5000);
}
function timeConsumeByFeature2(){
    console.log("starting timer");
    setTimeout(() => {
        console.log("completed the timer2");
        for (let i = 0; i < 1000000000; i++) {
           //some task 
        }
    }, 5000);
}
function timeConsumeByFeature3(){
    console.log("starting timer");
    setTimeout(() => {
        console.log("completed the timer3");
        for (let i = 0; i < 1000000000; i++) {
           //some task 
        }
    }, 5000);
}

console.log("hii");
timeConsumeByLoop();
timeConsumeByFeature();
timeConsumeByFeature2();
timeConsumeByFeature3();
timeConsumeByLoop();
console.log("bye");

