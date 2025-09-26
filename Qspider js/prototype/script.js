const grandParent={
    name:"grandParent",
    sayHi:function(){
        console.log("Hii i am grand parent")
    }
}

const parent = Object.create(grandParent);

parent.sayHello=function(){
    name:"Parent",
    console.log("Hello from parent")
}

const child = Object.create(parent)

child.sayHey=function(){
    name:"Child",
    console.log("i am from child")
}

child.sayHey();
child.sayHello();
child.sayHi();
console.log(child.name)