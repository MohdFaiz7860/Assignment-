//----Swap two numbers using a temporary variable----

let a = 5;
let b = 10;

console.log("Before swapping: a = " + a + ", b = " + b);

let temp = a;
a = b;
b = temp;

console.log("After swapping: a = " + a + ", b = " + b);


//----Calculate the factorial of a number using a loop----

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log("Factorial of " + n + " is: " + factorial);



//----Print the multiplication table of a given number----

let number = 7;

console.log("Multiplication Table of " + number);
for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}


//----Reverse a number----

let num = 123;
let reversed = 0;

while (num !== 0) {
  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
}

console.log("Reversed number: " + reversed);


//----Check whether a year is a leap year or not----

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
