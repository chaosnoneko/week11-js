// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:

function checkAge(age) {
  if (age>18){
    return true;
  }else{
    return false;
  }
  }
  
  console.log(checkAge(18));
  console.log(checkAge(29));
  console.log(checkAge(10))

// Write a function min(a,b) which returns the least of two numbers a and b.
  function min(a, b) {
    return Math.min(a,b);
  }
  console.log(min(6,2));
  console.log(min(8,-8));
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  function pow(y, x) {
    return Math.pow(y,x);
  }

  console.log(pow(0,19));
  console.log(pow(5,3));
  console.log(pow(-2,7))