// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ("happy", function(num) {
    let laughing='';
    for(let i=0; i<=num;i++){
        laughing+='ha';
    }
    return laughing + '!';
});