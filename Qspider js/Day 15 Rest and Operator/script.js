const shop={
    biscuits:["oreo", "parle g","dar fantasy","tiger"],
    coldDrinks:["sprite", "coke","limica","beer"]
}

const {biscuits:[,...item1] , coldDrinks:[a,,,...item2]} = shop
console.log(item1)
console.log(item2)

const b=[a,...item2]
console.log(b)


const user={
    name:"sudhir",
    age:223,
    city:"noida",
    state:"up"
}
const {name , ...obj} = user;
console.log(name)
console.log(obj)

const movies=["dhamal" , "dhol" , "welcome", "houseful"]

const [m1, ...m2]=movies
console.log(m1)
console.log(m2)