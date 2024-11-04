// the ability to store a function inside a variable enables us to pass that function into other functions
// A function that is passed into another function is called 'callback' function


// Lets say we have written a catSays function expression(function stored in a var=catSays) that we've written previously, and we wanted that same function in future code, instead of redoing the same function, just pass that function

const catSays=function catTalk(max){// function expression
    let catMsg='';
    for(let i=1;i<=max;i++){
        catMsg+='meow ';

    }
    return catMsg;
};// CatSays function expression

function catGreet(callBackFun){
    return 'hello ' + callBackFun(2);
    
};

console.log(catGreet(catSays));// even the function have name, but accessing it is through the variable name it is stored!
// console.log(catGreet(catTalk)); /this raises 'uncaught reference error'

// when using function expression, we can give the function a name but also stored in that variable, Accessing the fun is the same as before by using the variable name i.e A function expression with a named variable like on line 7







