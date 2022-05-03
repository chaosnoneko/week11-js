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
//Function

// function are the building blocks in program:
// function are designed to perform pirticular task.

// function declaration
//function keyword followed by function name and followed by parentheses;


// naming function use same rules as variable ...start varaible name $ , _ and character
//syntax :
// function printMessage () { // body of function }


/* function showName (){
    console.log("Hi, Syed")
}
 */
// function invokation (function calling) code will execute when anthing invokes function
// FunctionName (); 

/*  showName(); // calling
 showName();
 showName();
 showName(); */


 //parameters 
//paramters are named listing in the function definition/declaration
//arguments are the real values you pass in invokation


 function showName (name,age){
    console.log(`Hi,${name}, your age is ${age}` )
    }


//if you will not pass any value to your parameter ,it will just set to undefined
showName("Naqvi",32);
showName("Mike",28);
showName("Joseph",24)


// function declaration
function printRandomNumber(){
    console.log(Math.random())
}


printRandomNumber(); // invoke

/* let number1= 24;
let number2 = 34;
// create function to print sum of two numbers
function printSum(){
    console.log(number1+number2)
    //functions get access to outer varaibles
}
printSum()
printSum()
printSum() */

function sumTwoNumbers(num1,num2){
    console.log(num1+num2)
}

sumTwoNumbers(3 ,  5)
sumTwoNumbers(5 ,  25)


// make sqaure of any number
function makeSquare(number){
    console.log(number*number)
}

makeSquare(10)
makeSquare(4)


function greetUser(username="Guest"){
    console.log("Hi , "+username)
}

greetUser()

 function sumUp(...arg){
    console.log(arg)
    let sum = 0;
    for(let i= 0; i < arg.length; i++){
        sum += arg[i]
    }
    console.log(sum)
}

sumUp(1,1,1,4)
