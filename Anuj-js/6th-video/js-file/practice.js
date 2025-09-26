function callback(getData){
    setTimeout(() => {
        const name = "sudhir"
        getData(name);
    }, 2000);
}
function getData(name){
    console.log("my name is " + name);
    
}
callback(getData);
