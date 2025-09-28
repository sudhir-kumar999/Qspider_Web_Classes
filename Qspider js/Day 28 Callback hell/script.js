function loginUser(username , callback){
    console.log("user logged in" , username)
    callback(username)
}

function getCart(user ,callback){
    console.log("fetching cart for :" , user)
    callback(['shoes' , 'shirt'])
}

function paymentProcess(cart , callback){
    console.log("Fetching payment for:" , cart)
    callback("Status complete")
}

function orderStatus(status){
    console.log("order status is ", status)
}

loginUser("sudhir" , function(user){
    getCart(user , function(cart){
        paymentProcess(cart, function(status){
            orderStatus(status)
        })
    })
})