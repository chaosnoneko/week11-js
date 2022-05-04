//! return statement

//! Return-- will save your output but will not show the output in your internal terminal.

//! CLG-- will show the output in your terminal.

//! Clg is for just developers to check if the output is right or wrong, but in an actual project you will need return to save your values and pass them along.
//* return statement is used to return a particular value from a function

//? return statement can stop execution of your code

//? you can return any type of data from function 

function printHi(){
    console.log("Hello")
    return;
    console.log("byr")
}
printHi() //! will print only Hello // Anything after the "return" statement doesn't get executed in your code pile

const randomNumber = Math.random()
console.log(randomNumber)

let name = "Jonny" ;
const upperLetterName = name.toUpperCase()
console.log(upperLetterName)

//! concat first and last name

function concatName(firstname, lastname){
    const fullName= `${firstname} ${lastname}`
    console.log(fullName)
}
concatName("John","Smith") //* it will print John Smith
const fullName = concatName("John", "Smith") //* stored function 
function greetUser(fullname){
    console.log(`Good Morning !, ${fullname}`)
}
greetUser()

//*! concat first and last name
//* if return statement is not there function will automatically will return undefined
const fullName = concatName("john", "smith")
function concatName(firstname, lastname){
    const fullName = `${firstname} ${lastname}`
    return fullName;
    //* console.log(fullName)
}
//* concatName("john", "smith")
console.log(fullName)
function isAllowed(age){
    if(age>=18) {
        return true;
    } else {
        //* console.log("not allowed")
        return false;
    }
}
const letDrive= isAllowed(24)
console.log(letDrive)

function sumUp (a,b,c){
    return a+b+c
}
let total = sumUp(3,5,7) //* it will print 15 or this will look like this let total = 15;
console.log(total)

console.log(total*total) //* result will be 225

function multiValues(){
    let num1 = 23;
    let num2 = 12;
    let num3 = 43;
    return num1 , num2 , num3
}
console.log(multiValues()) //* it will print only 43

//? to return multiple values we have to wrap them []
function multiValues(){
    let num1 = 23;
    let num2 = 12;
    let num3 = 43;
    return [num1 , num2 , num3]
}
console.log(multiValues()) //* it will print [ 23 , 12 , 43 ]