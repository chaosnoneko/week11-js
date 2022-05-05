// Write a function that takes in one parameter and logs that parameter 3 times into the console.
function num(a) {
    console.log(a ** 3);
}
num(4)
// Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"
function ani(animals) {
    let animal = "";
    for (let i = 0; i < 5; i++) {
        animal = animal + animals
    }
    return animal;
}
console.log(ani("cat"))
// Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs 3 and "Woah" it should return WoahWoahWoah
let word = (num, string) => {
    let words = "";
    for (let i = 0; i < num; i++) {
        words = string + words
    }
    return words;
}
console.log(word(3, "Woah"))
// Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input [1,6,83,91,0,-4,1337,5] it should return 1337
let array = (...array) => console.log(Math.max(...array));
array(1,6,83,91,0,-4,1337,5)
// This question has 2 parts
// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
let even = (x) => { 
    if (x % 10 === 0) {
        console.log("Even 10!")
    }
}
even(900);
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
// -----//------
// Write an arrow function that takes in 5 numbers as its parameters and returns the largest one
let num1 = (...array) => console.log(Math.max(...array)); 
num1(2,5,6,7,8,);
// Write an arrow function that takes in one parameter and returns true if that parameter is a string.
let string1 = (a) => { if (typeof a === "string") {
return true; 
}
}
console.log(string1("strin"));
// Write an arrow function that takes in two parameters and returns true if both of them are strings.
let string2 = (a,b) => { if (typeof a === "string" && typeof b === "string") {
    return true;
}}
console.log(string2("foo", "bar" ))
// Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
let getFirstWord = string => {
    let words = string.split(' ');
    return words[0];
};
console.log(getFirstWord("Internetting is hard"))
// getFirstWord("Internetting is hard") --> "Internetting"
// getFirstWord("Hello World") --> "Hello"
// getFirstWord("Hello") --> "Hello"
// HARD Write an arrow function that takes in one string. The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
let wordRepeater = (word) => {
  let single = word.split(" ")
    let result = "";
    for (let i = 0; i < single.length; i++) {
        for (let i = 0; i < single.length; i++) {
            const element = single[i];
            result = result + element;
        }    
    }
return result;
}
  console.log(wordRepeater("I am groot"));
  console.log(wordRepeater("O M G ?"));
  console.log(wordRepeater("bunny"));
  console.log(wordRepeater("Cat food"));
// wordRepeater("bunny") --> "bunny"
// wordRepeater("Cat food") --> "Cat Cat food food"
// wordRepeater("I am groot") --> "I I I am am am groot groot groot"
// wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"
// Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
let firstLetter = string => { console.log(string.charAt(0)) }
firstLetter("cat");
firstLetter("quylthulg")
// firstLetter("cat") --> "c"
// firstLetter("quylthulg") --> "q"
// Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
let firstLetters = string => { 
    let count = string.split(" ")
    let result = ""
    for (let i = 0; i < count.length; i++) {
        const element = count[i];
        result = result + element.charAt(0)   
    }
    return result;   
}
console.log(firstLetters("What the fruit"))
// firstLetters("cat") --> "c"
// firstLetters("What the fruit") --> "Wtf"
// firstLetters("MongoDB Express Node React") --> "MERN"
// firstLetters("What You See Is What You Get") --> "WYSIWYG"
// Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!
let variable = (unknown) => { if (unknown.length) { 
    return unknown.length;
}}
console.log(variable("rock"))
console.log(variable(["rock", 3, "faa"]))
// Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
let explode = (str) => { if (typeof str === "string" ) {
   return str.split(""); 
}
else {
    return null;
}
}
console.log(explode("Cat"))
console.log(explode("R & D"))
console.log(explode(41))
console.log(explode(""))
// explode("Cat") --> ["C", "a", "t"]
// explode(41) --> null
// explode("") --> []
// explode("R & D") --> ["R", " ", "&", " ", "D"]
// Reverse engineering challenge 1. Write a function that does this (BONUS: write it as a short (one line) arrow function):
let foo = (word) => word.includes("o") ? true : false ;
console.log(foo(""))
console.log(foo("a")) 
console.log(foo("o")) 
console.log(foo("Cat"))
console.log(foo("Tomato"))
console.log(foo("Potato"))
console.log(foo("Blanket"))
console.log(foo("1")) 
// Reverse engineering challenge 2. Write a function that does this (BONUS: write it as a short (one line) arrow function):
let bar = (word) => "Cat" + word.slice(3)
console.log(bar("x"))
console.log(bar("x")) 
console.log(bar("Cat"))
console.log(bar("Foobar"))
console.log(bar("Potato")) 
console.log(bar("Tomato")) 
// bar("International Space Station") --> "Catternational Space Station"



// solutions from the teacher


// Write a function that takes in one parameter and logs that parameter 3 times into the console.
function PrintLog (word) {
    console.log(word)
    console.log(word)
    console.log(word)
}
PrintLog("Hello")
// Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"
function printFiveTimes(word) {
    let result = "";
    for (let i = 0; i < 5; i++) {
        result = result + word
    }
    return result;
}
console.log(printFiveTimes("cat"))
// Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs 3 and "Woah" it should return WoahWoahWoah
function multiTwo(number,word){
    console.log(word.repeat(number))
}
    multiTwo(5,"Woah")

// or another solution
function concatStirng(num,str) {
let result = "";
    for (let i = 0; i < 5; i++) {
        //result = result + word
    }
    return result;
}
console.log(concatString(2"Woah"))
// Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input [1,6,83,91,0,-4,1337,5] it should return 1337
function getLargestNumber(arr) {
    return Math.max(...arr)
}
console.log(Math.max(1,6,83,91,0,-4,1337,5))

// or another solution
function getLargestNumber(arr){
    let largestNubmer = 0;
    for(let i = 0; i< arr.legth; i++){
        if (arr[i]>largestNumber){
            largestNumber = arr[i]
        }
    }
    return largestNumber;
}
// This question has 2 parts
// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
function printIfDivisibleByTen(number){
    if(nubmer%10===0){
        console.log(`Even$ {number}`)
    }else{
        console.log("no output")
    }
}
    printIfDivisibleByTeb(30)
// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
for (let i = 0 ; i<125; i++){
    printIfDivisionByTen(i)
}
// Write an arrow function that takes in 5 numbers as its parameters and returns the largest one
const findLargestNumber = function (a,b,c,d,e)[
    return Math.max(a,b,c,d,e)
}
// Write an arrow function that takes in one parameter and returns true if that parameter is a string.
const checkDataType = data => typeof data ==="string"
console.log(checkDataType("1"));
// Write an arrow function that takes in two parameters and returns true if both of them are strings.
const checkDataTypeForBoth = (str1 , str2) => typeof str1 === "string" && typeof str2 === "string";
console.log(checkDataTypeForBoth("h",3))
// Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
// getFirstWord("Internetting is hard") --> "Internetting"
// getFirstWord("Hello World") --> "Hello"
// getFirstWord("Hello") --> "Hello"
function getFirstWord (sentence){
    const splitedText = sentence.split("")
    return splitedText [0]
}
const getFirstWord = sentence => sentence.split(" ")
console.log(getFirstWord("Hello World"))         
// HARD Write an arrow function that takes in one string. The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
// wordRepeater("bunny") --> "bunny"
// wordRepeater("Cat food") --> "Cat Cat food food"
// wordRepeater("I am groot") --> "I I I am am am groot groot groot"
// wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"
// Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
// firstLetter("cat") --> "c"
// firstLetter("quylthulg") --> "q"
function wordReapeater(word) {
    const spliteWord = word.split("") // ["Cat","food"]
    let result = ""
    for(let i = 0; i<splitedWord.legth ; i++){
        result += (splitedWord[i]+" ").repeat(splitedWord.length)
    }
    return result
}
  console.log(wordRepeater("Cat Food"));
  console.log(wordRepeater("O M G ?"));
  console.log(wordRepeater("bunny"));
  console.log(wordRepeater("Cat food"));
// Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
let firstLetters = string => { 
    let count = string.split(" ")
    let result = ""
    for (let i = 0; i < count.length; i++) {
        const element = count[i];
        result = result + element.charAt(0)   
    }
    return result;   
}
console.log(firstLetters("What the fruit"))
// firstLetters("cat") --> "c"
// firstLetters("What the fruit") --> "Wtf"
// firstLetters("MongoDB Express Node React") --> "MERN"
// firstLetters("What You See Is What You Get") --> "WYSIWYG"
// Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!
let variable = (unknown) => { if (unknown.length) { 
    return unknown.length;
}}
console.log(variable("rock"))
console.log(variable(["rock", 3, "faa"]))
// Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
let explode = (str) => { if (typeof str === "string" ) {
   return str.split(""); 
}
else {
    return null;
}
}
console.log(explode("Cat"))
console.log(explode("R & D"))
console.log(explode(41))
console.log(explode(""))
// explode("Cat") --> ["C", "a", "t"]
// explode(41) --> null
// explode("") --> []
// explode("R & D") --> ["R", " ", "&", " ", "D"]
// Reverse engineering challenge 1. Write a function that does this (BONUS: write it as a short (one line) arrow function):
let foo = (word) => word.includes("o") ? true : false ;
console.log(foo(""))
console.log(foo("a")) 
console.log(foo("o")) 
console.log(foo("Cat"))
console.log(foo("Tomato"))
console.log(foo("Potato"))
console.log(foo("Blanket"))
console.log(foo("1")) 
// Reverse engineering challenge 2. Write a function that does this (BONUS: write it as a short (one line) arrow function):
let bar = (word) => "Cat" + word.slice(3)
console.log(bar("x"))
console.log(bar("x")) 
console.log(bar("Cat"))
console.log(bar("Foobar"))
console.log(bar("Potato")) 
console.log(bar("Tomato")) 
// bar("International Space Station") --> "Catternational Space Station"
