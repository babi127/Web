// function reverseString(string){
//     let reversed='';
//     for(let i=string.length-1; i>=0;i--){// iterating from string Length through/until i<0
//         reversed+=string[i];// concatenate the reversed var w/c is empty at first with the reversed string!
//     }
//     return reversed;

// }
// console.log(reverseString('Babi'));// calling the function

//Another way to right the above code using 'Arrow function'

reverseString=(string)=>{
    reversed='';// without using 'let' or 'const', means i make the variable GLOBAL! thats why it could be accessed on line 25
    // but best practice is to use 'let' or 'const' then , if we want to access it , just store the return inside a var then

    for(let i=string.length-1;i>=0;i--){
        reversed+=string[i];

    }
    return reversed;// use 'return' when we want not to just print but to use the returned value elsewhere!!
    // Meaning , we can't use this value 'reversed' anywhere if we don't use return like this !

}
console.log(reverseString('jackson'));
console.log('hello '+ reversed);// since we used 'return' , we are able to use the returned value elsewhere in the code!




laugh=()=>{
    const laughing='hahahahahahahahahaha!';// used 'const' w/c makes it local var, it's best for multiple line of codes
    return laughing;
}
const theReturned=laugh();
console.log(theReturned);// able to access the value of the local var through storing the return inside a var!


