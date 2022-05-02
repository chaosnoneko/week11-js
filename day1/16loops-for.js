// repl - read evaluate print loop

// loops
// for loop
// while loop
// do while

// loop are used to repeat our action

// in programing loops are sequence of instructions which execute repeatedly until certain condition is met

console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")

// syntax : for ( initilizationEypression ; condition ; updateExpression ) { // code / body }
// initilizationEypression ( let i = 0 ) execute only once before entering into the loop

// condition ( i <= 10 )
// condition ( i < 3 ) executes on every iteration . f false loop stops

// updateExpression ( i++ ) execute after body in each iteration

for ( let i = o ; i < 3 ; i++ ){
    console.log("Hello world")
}

for ( let i = o ; i < 3 ; i+=0.5 ){
    console.log("Hello world")
} // can be written also like that  it will execute 6 times
// Numeric Repetition
for ( let i = o ; i < 100 ; i++ ){
    console.log("Hello world")
     } 
// iteration 1 ;
// i = 0
// i < 3
// body console.log("..")
// i++

// iteration 2 ;
// i < 3 = 1 < 3
// body ...
i ++ => i=2

//iteration 3 ;
// i < 3 => 2 < 3
// body ...
// i++

// iteration 4
// i<3 => 3 < 3 false => stop loop

// write a loop to print number 0 - 10
for ( let i = 0 ; i <= 10 ; i++) {
    console.log("number",i)
} // i++ // i+1

// print each character of word
let string = "Hello world"
for ( let x = 0 ; x < string.length ; x++ ){
    console.log(string[x])
}
for(let x = string.length-1 ; x >= 0 ; x --){
    console.log(string[x])
} // it will print the text one letter at a time backwards
// print every number in your array

let number = [3,6,8,12,15]
for (let i=0; i<5){}

// print all even numbers in between 0 - 10
for ( let i=0; i<=10; i++)
{
    if(i%2===0){
        console.log(i)
    }
} // the numbers we will get are 0 , 2 , 4, 6 , 8 , 10

for ( let i=0; i<=10; i+=2)
{  
        console.log(i)
}

console.log(i) // ReferenceError : i is not defined

let i = 2;
for (let i = 0; i<5 ; i++){
    console.log(i)
}
console.log(i) // it will print out 2

for (let i = 5 ; i < 10 ; i ++){
    console.log(i)
} // it will print numbers from 5 to 9

// find sum of all numbers from 0 - 100
let sum =0;
for (let i = 0 ; i<=100 ; i++){
    sum += i;
}
console.log(sum)

// print this layout 
// *
// **
// ***
// ****
// *****

for (let i = 1; i < 5 ; i ++){
    console.log("*".repeat(i))
} 
// to print out the reverse version 
for (let i = 5; i < 1 ; i --){
    console.log("*".repeat(i))
} 

let cities = ["Berlin","Frankfurt","Hamburg"]
for(let i = 0 ; i < cities.length ; i++){
    console.log(cities[i])

    for (let j=0 ; j< cities[i].length ; j++){
        console.log(cities[i][j])
    }
} // it will print out all the cities 

let data [ [1,2,3,4] , [2,3,6,8] , [4,6,7,8]]

// break your loop manually
for(let i =o ; i<10 ; i++){
    if(i===5){
        break;
    }
} 

// break your loop if there is - negative number in your array
let numbers = [ 1,4,7,9,12,-7,-2,2,3,7,0]
for (let i = 0 ; i< numners.length ; i++){
    if (number[i]<0){
        break;
    }
    console.log(numbers[i])
} // it will print 1

// continue => skip that iteration
for(let i = 0; i<10 ; i++){
    if(i===5){
        continue;
    }
    console.log(i)
} // it will skip that equation , when you print it it will print everything without the number 5
for(let i = 0; i<10 ; i++){
    if(!(number[1]>0)){
        continue;
    }
    console.log(number[i])
}