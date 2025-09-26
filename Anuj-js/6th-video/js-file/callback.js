

// const orderPizza2 = (callback)=>{
//     setTimeout(()=>{
//         const pizza = 'ppppp'
//         callback(pizza);
        
//     },2000)
// }

// function notification(pizza){
//     console.log('here is sound of ' + pizza);
    
// }
// orderPizza2(notification);



function orderPizza(myfn){
    getCheese((cheese)=>{
        makeDough(cheese ,(dough)=>{
            bakePizza(dough ,(pizza)=>{
                myfn(pizza)
            })
        })
    })
}

function getCheese(next){
    setTimeout(() => {
        const cheese = 'ccccc';
        console.log('this is cheese');
        next(cheese)
        
    }, 2000);
}

function makeDough(cheese , next){
    setTimeout(() => {
        const dough = cheese+'ccccc';
        console.log('this is dough');
        next(dough)
        
    }, 2000);
}

function bakePizza(dough , next){
    setTimeout(() => {
        const pizza = dough;
        console.log('this is pizza');
        next(pizza)
        
    }, 2000);
}


// const pizza = orderPizza((pizza)=>{
//     console.log(pizza);
    
// })
//console.log(pizza)