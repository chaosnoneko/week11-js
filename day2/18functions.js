// function
// functions are the building block in program
// function are designed to perform particular task

// function declaration
//. function keyword followed by function name and followed by parentheses 

// naming function use same rules as variable ... start variable name $ , _ and 
// syntax 
// function printMessage () { // body of function}

function showName () {
    console.log("Hi,Chaos")
}

// function invokation ( function calling ) code will execute when anything invokes function
// functionName ();

console.log ("something")

showName()
showName()
showName() // it will print "Hi , Chaos " 3 times

// function declaration
function printRandomNumber () {
    console.log(Math.random())
} // it won't print any number on the screen because we didn't call it 
printRandomNumber(); // invoke the number so we will see it now

// create function to print sum of two numbers
function printSum(){
    let a = 5;
    let b = 14;
    console.log(a+b)
}
printSum()

// another example
let number1 =24;
let number2 =34;
function printSum(){
    console.log(number1+number2)
}
printSum()

// function can change outer variable values as well 
let firstName = "John"
function showMessage(){
    firstName = "Smith";
    console.log(`hi ,${firstName}`)
} // the code is not executed yet so it will print John
console.log(firstName)
// to print Smith we have to do this 
let firstName = "John"
function showMessage(){
    firstName = "Smith";
    console.log(`hi ,${firstName}`)
}
showMessage()
console.log(firstName) // now it will print Smith

// function expression
function showMessage(){
    firstName = "Smith";
    console.log(`hi ,${firstName}`)
} // instead of writing this we can store this into a variable
const showMessage = function showMessage(){
    firstName = "Smith";
    console.log(`hi ,${firstName}`)
};
showMessage()

// arrow function
const showMessage = (){
    firstName = "Smith";
    console.log(`hi , ${firstName}`)
};