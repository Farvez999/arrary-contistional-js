// Practice Problem: 01
// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];
// Find the index of ‘Banana’
console.log(fruits.indexOf('Banana'));

// replace ‘Banana’ with ‘Mango’
fruits[1] = 'Mango';
console.log(fruits);

// Remove ‘Orange’ and add ‘Watermelon
fruits.pop('Orange');
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);

// Practice Problem: 02
// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.

var marks = 39;
if (marks > 80) {
    console.log('A grade');
}
else if (marks > 60) {
    console.log('B grade');
}
else if (marks > 50) {
    console.log('C grade');
}
else if (marks > 40) {
    console.log('D grade');
}
else if (marks >= 39) {
    console.log('F grade');
}
else {
    console.log('You are failed');
}

//Practice problem -3
// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal

var num1 = 13;
var num2 = 79;
var num3 = 45;
if (num1 >= num2 && num1 >= num3) {
    console.log('Number 1 is largest number');
}
else if (num2 >= num1 && num2 >= num3) {
    console.log('Number 2 is largest number');
}
else {
    console.log('Number 3 is largest number')
}

var triangleOne = 9;
var triangleTwo = 8;
var triangleThree = 9;

if (triangleOne == triangleTwo) {
    console.log('triangle 1 & 2 is Isosceles');
}
else if (triangleTwo == triangleThree) {
    console.log('triangle 2 & 3 is Isosceles');
}
else {
    console.log('triangle 1 & 3 is Isosceles');
}