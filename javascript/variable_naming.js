const firstVar=10;// camel case
const firstvar=2;// lowercase
const FirstVar=3;//pascal case
const FIRST_VAR=5;// constant case
const first_var=7;// snake case
// This shows that letter casing and underscore matter, they are all treated differently.

//use camel casing in javascript!
// use a descriptive name for variables

// Three most common 'data types' in js include string, integer, boolean
const age=22;
const name='Girma';
const isItTrue=false;
// these are primitive
// Javascript is 'dynamically typed language'! Doesn't have to specify th 'data type' for a variable during declaration

const typeOf=typeof firstVar;
console.log(typeOf);// prints the dat Type of the variable specified.

//explicitly coerce different data types together, like concatenated string with number/integer
const coerce=age+name;
console.log(coerce);//22Girma is the output.

//but if we have a string number inside a quote and want to add it with a integer number, we can use the 'Number()' function to convert the string number to actual integer and add the result. like
const stri1='20';
const num1=10;

console.log(Number(stri1)+num1);// Output is 30

//string

const firstString = 'hello!'; // we can also use double quotes! But in js use single quotes.

//number
const number1 = 2000;// We don't use commas for bigger numbers! Error 

//boolean
const boolVal = false; // Either true or false!

//