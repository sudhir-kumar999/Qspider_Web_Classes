
function add(num , callback){
    // console.log(num)
    let add = num+5;
    callback(add)
}

function multiply(num2 , callback){
    let mult = num2*2;
    callback(mult)
}

function substract(num3 , callback){
    let sub = num3-2;
    // console.log("sub is " , sub)
    callback(sub)
}

function divide(num4){
    let divide = num4/2;
    console.log("divide is", divide)
}

add(5 , function(num){
    multiply(num , function(num1){
        substract(num1 , function(num2){
            divide(num2)
        })
    })
})