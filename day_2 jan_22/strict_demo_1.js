'use strict'

var a = 10;         // globaal
let name = "sachin"; // global

function f1() {
    var b = 20; // function
    c = 30;
    console.log("f1 started");
    console.log(a); //y
    console.log(name); //y
    console.log(b); //y
    console.log(c); //y
    console.log("f1 completed");
}
function f2() {
    var d = 40; // function
    console.log("f2 started");
    console.log(a); //y
    console.log(name); //y
    console.log(c); //Y
    // console.log(b); //N
    console.log("f1 completed");
}
f1();
console.log(c);
f2();