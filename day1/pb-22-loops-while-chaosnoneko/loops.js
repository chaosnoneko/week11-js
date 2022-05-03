//# Repeat

//## 1. Run Along
//Create a `while` loop that runs as long as the variable `i` is less than 15. Print `i`.
let i= 0;
while(i < 15){
    console.log(i)
    i++;
}
//## 2. Add it up 
//Create a `while` loop which sums up numbers from 1-20.
let x=1;
let sum =0;
while (x<=20){
    sum += x
    x++;
}
console.log(sum)
//## 3. Do this while i...
//Use a `do`, `while` loop to print `The number is [i]` while i is less than 20. 
let y=0;
do{ 
    console.log(`The number is  [${y}]`)
    y++
}while(y<20);
