// Another way of using callBack function
function myCallback(someNum){
    return someNum*2;

};
function mainFunction(randomNUm, shouldCall,callback){
    let result=randomNUm;
    
    if(shouldCall){
        result=callback(randomNUm);
    }
    return result;
    
};

mainFunction(20, true,myCallback);