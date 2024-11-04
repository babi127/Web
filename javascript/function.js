const functionVariable=function(){
    return 3;
}
// 5 main types of variables
// strings, integers, arrays,booleans,objects(also contains functions)

let myBoolean=true;// boolean variable with 'true' value

console.log(myBoolean);

const myString='hello world';// string var with 'hello world' variable
const firstNum=20;
let secondNumber=40;

secondNumber= secondNumber+40;
const myArray=[myBoolean,myString]
const myObject={
    firstProperty:myArray , sumProperty:firstNum + secondNumber
};
console.log(myObject);
console.log(myObject.sumProperty);
