laugh=(num)=>{
    let laughter='';
    for(let i=1;i<=num;i++){
       laughter+='ha';
    }
    return laughter+ ' !';
};

console.log(laugh(4));



// Anonymous function : is a function which is assigned into a variable and has no name!
const theFun=function(num){// This is called 'function expression'
    let greet='';
    for (i=1;i<=num;i++){
        greet+='hello!';
    }
    return greet;
}
console.log(theFun(3));

const catSays = function(max) {
    let catMessage = "";
    for (let i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  
// to print it use console.log
console.log(catSays(3));// meow meow meow