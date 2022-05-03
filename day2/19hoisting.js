// Hoisting
// hoisting is default behavior of moving all declaration in the top of script and in the top of function

// hoisting allows you to use your variable before declaration


// declaration // initialization
let name = "Chaos";

function showNumber(){}

const showNumber = function(){}


// another example
printMyName()
 function printMyName(){
     console.log("Chaos")
 }

 printMessage()
 function printMessage(){
     console.log("Hello Chaos")
 } // it will be undefined is not a function declaration 


// declaration:
// let x;
// initialization
// let x = something;
// declaration:
// function something(){};
// initialization:
// const someFunction = function () {}