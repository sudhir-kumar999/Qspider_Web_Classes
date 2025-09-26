function greet(){
    console.log(this)
}

const person ={
    name:"person"
}

const fn = greet.bind(person)
fn()