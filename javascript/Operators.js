// Operators
// arithmetic , assignment, comparison, Logical operators

//Arithmetic includes +, -, *, /, %, **, ++, --

//Assignment operators include =, +=, -=, *=, /=

//Comparison Operators include ==(Are thy equal in VALUE) while using this operator first converts the values into the same datatype to see if they have the same Equal values, ===(Are they EQUAL in both VALUE and TYPE) ,!=,!==, >, <, <=, >=
//Eg
const result=20>2;
console.log(result);

//This == and === work as expected for string , integer and boolean

// But when it comes to objects, the result is different! Eg
const myObject={
    prop1:20,
    prop2:'hello'
};

const myArray=[1,2,3,4,5,6];
const mySecondArray=[1,2,3,4,5,6];

console.log(myArray==mySecondArray);// Prints out 'false'
console.log(myArray===mySecondArray);//This will print out 'false', even if it cares about the VALUES and TYPES. This is not gonna work for arrays

// Same goes for objects
const secondObj={
    prop1:20,
    prop2:'hello'
};

console.log(myObject==secondObj); // Prints out 'false'
console.log(myObject===secondObj); // Prints out 'false' for the same reason as the array

// Ternary operator

const results = 20===20 ? 'values equal' : 'values not equal';
console.log(results);

// const results=20===20 ? 'values equal' : 'values not equal'; This expression is functionally equivalent to this conditional expression
// '?' is like the IF part and ':' is like the 'ELSE' part
let setResult;
if(20===20){
    setResult='Values equal';
}else{
    setResult='values not equal';
}
console.log(setResult);


// Logical operator &&, ||, !

const isUserLoggedIn=true;
const doesUserHavePermission=false;
const canUserPerformFunction=isUserLoggedIn && doesUserHavePermission;// only evaluates to 'true' if both are 'true' boolean values!
console.log(canUserPerformFunction);// false