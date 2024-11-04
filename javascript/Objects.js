// Arrays are special Objects in Javascript, They have properties like -Length and -Methods
// Objects in js are data structures that lets us store data about a specific thing and let's us keep track of i using [KEY]

const umbrella={
    color:'pink',
    isOpen: true,
    open: function(){
        if(umbrella.isOpen===true){
            return 'Umbrella is open!';
        }else{
            umbrella.isOpen=true;
            return 'Julia open the umbrella !';
        };

    },
    close: function(){
        if(umbrella.isOpen===true){ // Don't forget to use the 'variableName.' when accessing any property of the obj since that isOpen property is out of scope !
            umbrella.isOpen=false;
            return 'Julia closed the Umbrella !';
        }else{
            return 'Julia already closed the umbrella !';
        };
    }
};

console.log(umbrella.open()); // Executes the open function and the return values are displayed using console.log() , since [return] only provides the value that can be captured
console.log(umbrella.close()); // same here 

console.log(umbrella.color); // prints the color
console.log(umbrella.isOpen); // prints the truth value
console.log(typeof umbrella); // Returns the type of the umbrella variable




