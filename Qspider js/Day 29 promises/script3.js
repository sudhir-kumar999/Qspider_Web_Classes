function loginUser(username){
    return new Promise((resolve , reject)=>{
        resolve(username)
    })
}

function getCart(username){
    return new Promise((resolve , reject)=>{
        resolve(['shoes' , 'shirt'])
    })
}

function payment(cart){
    return new Promise((resolve , reject)=>{
        resolve("payment success for " + cart)
    })
}

function confirmation(status){
    return new Promise((resolve , reject)=>{
        resolve("order placed" + status)
    })
}


loginUser("sudhir")
.then((result1)=>{
    console.log(result1)
    return getCart(result1)
})

.then((result2)=>{
    console.log(result2)
    return payment(result2)
})

.then((result3)=>{
    console.log(result3 )
    return confirmation(result3)
})

.then((result4)=>{
    console.log(result4)
})

.catch((error)=>{
    console.log("error occurred " + error)
})