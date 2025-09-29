function add(num) {
    return new Promise((resolve, reject) => {
        let add = num + 5;
        resolve(add);
    });
}

function multiply(num) {
    return new Promise((resolve, reject) => {
        let mult = num * 2;
        resolve(mult);
        // reject(mult);

    });
}

function substract(num) {
    return new Promise((resolve, reject) => {
        let sub = num - 2;
        resolve(sub);
    });
}

function divide(num) {
    return new Promise((resolve, reject) => {
        let divide = num / 2;
        resolve(divide);
    });
}

// Promise chaining
add(5)
    .then((result1) => {
        console.log("After Add:", result1);
        return multiply(result1);
    })
    .then((result2) => {
        console.log("After Multiply:", result2);
        return substract(result2);
    })
    .then((result3) => {
        console.log("After Substract:", result3);
        return divide(result3);
    })
    .then((finalResult) => {
        console.log("After Divide:", finalResult);
    })
    .catch((err) => {
        console.error("Error:", err);
    });
