// # Function Scope
// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers. 
// After that, the function should print _y_ exponential values starting from _x_.
// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.
function expoValues(x, y) {
    let result = 1;
    let allResults = " ";
   
     if (typeof x == 'number' && typeof y == 'number') {
         console.log(true); 
     } else {
         console.log(false);
     };
     for (let i = 1; i <= y; i++) {
         result = x ** i;
         allResults += result + " ";
     }
       console.log(allResults);   
   }
   expoValues(3, 5);
   expoValues(2, 8);
// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 
let favFruit = "strawberry";
function printFavoriteFruit(fruit) {
    let favFruit = "mango";
    console.log(`My favorite fruit is ${favFruit}`);
}
printFavoriteFruit();
// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.
function exponent(num1, num2) {
    let result;
    for (let i = 1; i <= num2; i++) {
        result = num1 ** i;
    }
    console.log(result);
}
exponent(7, 4); 