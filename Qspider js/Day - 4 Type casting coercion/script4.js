var a=1
{
    console.log("inside a local block")
    a=10;
    b=20;
    c=30
    console.log(a)
    console.log(b)
    console.log(c)
    // b and c  are autoglobal and it is also rewrite when it is autoglobal
}
console.log("outside a block")
var c=2;
console.log(a)
    console.log(b)
    console.log(c)