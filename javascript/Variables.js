const yourFirstVariable='My first variable';
const myThirdVariable={firstProperty:'Hello world'};// This is an OBJECT with a single property.

console.log(yourFirstVariable);

// 'const' vs 'let' vs 'var'

// To properly use a variable , we have to first DECLARE it and then ASSIGN a value to it.
// In the above usage of a variable , we declare and assign a value to it at the same time!
// But we can also declare first and then assign a value by using the 'let' keyword !

// Declaration must be 'initialized' when using the 'const' keyword ! So use 'let'
const mySecondVariable=2;

let newVar;// declaration

newVar=3; //Assignment

var theNew='Hello world!';
//var keyword for declaration is legacy, used in old version of js, avoid using it! It can be re declared
//Eg
var myAge=21;
var myAge=23;
console.log(myAge);// Overwrites te first value without letting me know abt it! Not good!
console.log(newVar);


const herAge=19;// Value never changes 
// const herAge=18; Shows an error of 'can not re-declare'


// reassign= changing the value ! It might be increase or decrease.
//re-declare= trying to declare a single variable in two different memory locations with different values !

// We use 'let' to declare a variable, whenever we expect to 'reassign' that value in the code at some moment
//eg
let counter=1;
counter=counter+1;

counter++;

console.log(counter);// value increase/updated

//we use 'const' keyword when we declare a variable whose value is not gonna change in the rest of the code !