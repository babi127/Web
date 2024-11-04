const myFun=()=>{// using the arrow function method to declare a fun
console.log('Something');

};

// myFun();
//But if we assign the calling to some variable, and try to print the variable, there will be no output!
const result=myFun();
console.log(result);// won't print any output! It will say 'undefined'
//this is b/c the function didn't return anything!



// return something by using the return keyword

const returnFunction=()=>{
    const p=10;
    return p<9;// false
};

const resulting=returnFunction();
console.log(resulting);// print's false, i.e returns something! 


//Improper return Function
const myImpropFun=()=>{
let i=2;
return i;
i=3;// Unreachable code! This statement will not be executed , since we returned the value of i before we reassigned it!
};

const theImpRes=myImpropFun();
console.log(theImpRes);//2 , since we reassigned it after returning it!

//Return values
let n=10;// global var

const newelyFun=()=>{
    if(n<9){
        return 'Return this early';
    }
    return n;
    return 20;//Unreachable code
};
const res=newelyFun();
console.log(res);