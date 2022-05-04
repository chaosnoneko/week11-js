// # Declaring Functions 

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.
let number1 =0;
let number2 =0;
function multiplier (number1,number2){
    console.log(number1*number2)
}
multiplier(7,9)
// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.
function multiplier ( number1,number2){
    y3=number1;
    y4=number2;
    console.log(y3*y4)
}
multiplier (5,6)
// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers);
// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 
const divNumber = (a,b) => {
    console.log(a%b)
}
divNumber(30,49)