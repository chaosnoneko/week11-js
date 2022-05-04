// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...arguments) => {
    let sum = 0;
    for (let i = 0 ; i < arguments.length; i++){
        sum = sum + arguments[i]
    }
    return sum
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
