//We can assign a function to an Alias variable and use the variable name as the function name to call it ~

const newFun=()=>{
    return 5;
};

const aliasVariable=newFun;// Not using () to re use te var name as the function name!
console.log(aliasVariable());// Variable name used as the function name!


// assigning it to object variables
const myObject={
    prop1:3,
    prop2:newFun
};
console.log(myObject.prop2());// prints 5

// Wen using arrow function , if we put the entire function definition and the 'return' statement, we don't have to use return key word!
//Eg

