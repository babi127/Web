// Hoisting : is being able to call a function before it has been defined! In javascript , i's possible.
callMe();

function callMe(){
    const saying='My lady! ';
    console.log(saying);

}


findAverage(2,5);

function findAverage(x,y){
    const result=(x+y)/2;
    return result;
}// but when a variable is hoisted while using var keyword, it might cause an error with it since hoisting a variable doesn't hoist up the assigned value with it, it only hoists up the var name !

//note hoisting variable works only while using the key word var, doesn't work for the let and const keyword!

