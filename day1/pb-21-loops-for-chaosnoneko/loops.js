//# Programming Basics: For Loops
//These exercises are designed for practising "for" loops. Print all your results to the console.
//1. **Addition.** 
//Write a program to add up the numbers 1 to 20.
for(let i=0; i<=20; i++){
    console.log(i)
}
//2. **There are i bottles of beer on the wall.** 
//Write a program that will output, "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall" up until there are five bottles. 
for(let i=1; i<6; i++){
    console.log("There is 1 bottle of beer on the wall", "There are", i,"bottles of beer on the wall")
}
//3. **The odd/even reporter.**
//Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (let x=0; x<=20; x++) {
    if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}
//4. **Multiplication Tables.**
//Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//**Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for(let x = 0 ; x <=10; x++) {
    console.log(`${x} * 9 = ${x*9}`);
    // bonus
    for (let i=1; i<=10; i++){
        console.log(`${x} * ${i} =${x*i}`)
    }
}
//5. **Fizz Buzz**
//Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (var i = 1; i < 100; i++) {
    if (i % 3 == 0 &&  i%5===0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
//6. **Sum of Multiples**
//Write a program to add the multiples of 3 and 5 under 1000.
let total = 0 
for(let i = 1; i<1000; i++){ 
 if(i%3==0 || i%5==0){ 
 total += i 
 } 
} 
console.log(total)

//**Bonus** 

//7. Write programs that produce the following outputs: 
//>100 200 300 400 500 600 700 800 900 1000
//>
for (let x = 1; x <=10;x++){
    console.log(x*100);}
//>0 2 4 6 8 10
//>
//>3 6 9 12 15
//>
//>9 8 7 6 5 4 3 2 1 0
for (let i=9; i>=0; i--){
process.stdout.write(`${i} `)
cosole.log(i)
}
//>
//>1 1 1 2 2 2 3 3 3 4 4 4
forr (let i=1; i<=4; i++){
   for(a=0;a<3;a++)
   {console.log(i)
   }
}
//>
//>0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for(let x=0;x<3;x++){
for (let xi = 0; xi <=5;xi++){
    console.log(xi*2);
}}
//8. **isPalindrome.**
//Write a program to check whether a word is a palindrome or not. 
//Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
let world = "chaos"
let reverseWord = ""
for (let i=word.logth-1;i>=0; i--){
console.log(word[i])
}
if(word === reverseWord){
console.log("this is palindrome")
}else{
console.log("this is not")}
