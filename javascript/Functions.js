// Syntax is 
// function functionName(){ }, Which is the first step 'declaring the function' Then we have to call the function
// functionName(); This is the calling/invoking/execute
function myFirFun(){
    //output we want the function to perform
};

//There is a way to declare and also invoke the function at the same time instead of declaring first and invoking later. This is called 'Immediately Invoked functions'

// The syntax for this Immediately Invoked function is like
// (function my Function(){})();
// Eg
(function newFun(){
    console.log('This is Immediately Invoked function! ')// Declared and called at the same time. 

})();

//parameters and arguments

function secondFunction(param1, param2){// this are the 'parameters' that we have to pass.
console.log(param1);
console.log(param2);
};

secondFunction(21,'Hello!');// This are called 'arguments' that we passed!

//Scopes
// Another way of declaring a function is through assigning it to a var
const otherWay=function(){// We can use anonymous function b/c we assigned it to a var~
console.log('Some function');
};

//ES6 introduces a new way of defining function in 2015
// the arrow function.

const arrowFunction=()=>{// Omitting the keyword 'function' and adding an arrow after (). Used in most cases.
    console.log('An arrow function');

};