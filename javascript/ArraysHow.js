const udaFamily=['julia','james','biruk'];
for(let ind=0;ind<udaFamily.length; ind++){// Iterating over the items inside, the Array and print it using it's index
    console.log(udaFamily[ind]);
    
};


console.log('\n');
// we can also use constructor to create the array like this

const fruitArray= new Array('Mango', 'Banana','Pineapple');
for(let fru=0;fru<fruitArray.length;fru++){
    console.log(fruitArray[fru]);
}

// Defining variables to use them in an array we gonna create by their variable names
const captain = "Mal";
const second = "Zoe";
const pilot = "Wash";
const companion = "Inara";
const mercenary = "Jayne";
const mechanic = "Kaylee";

const crew=new Array(captain,second,pilot,companion,mercenary,mechanic);// Using constructor to create the array!
console.log(crew);


//
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0]*=2;
prices[2]*=2;
prices[6]*=2;

console.log(prices.pop());// pop() returns the value removed, push() returns the length after the push action .
console.log(prices);

// We can also use for oops to achieve the same result as the above

const theArr=new Array(2,5,8,10);
// Double elements based on their indices

for(let i=0;i<theArr.length;i++){// Iterating over the index
    //Using if else statement
    if(i===1){ // If index=1
        theArr[i]*=2;
    }else if(i===3){ // index=3
        theArr[i]*=2;
    }else if(i===7){ //index=7
        theArr[i]*=2;
    }
};
console.log(theArr);

