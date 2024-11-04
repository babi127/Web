// Ternary operator provides us with a 'short' way of writing lengthy if...else statements!
/*

lets say we hae this if else code

const result=isGoing;
const color;

if(isGoing){
color='green';
}else{
color='red;
}
console.log(color);

This code in short way expressed by Ternary operator looks like

*/
const isGoing=true;
const color=isGoing? "green":"red";// This is the 'ternary operator' explained ! Not only replaces the conditional , but also handles the color variable assignment!
console.log(color);

// Other ternary expression examples include 

const x=3; const y=2; 
console.log((x+y)>5 ? 2*x:2*y);

//other examples

const adult=true;
const preOrder=true;

console.log("You can get the tickets for $"+ (adult ? "40.00":"20.00")+ " at "+ (preOrder? "  your door steps":" Our official office") +"!");// Using ternary operator on the console.log

