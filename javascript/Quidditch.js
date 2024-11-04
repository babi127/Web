 let arr=['Oliver Wood', 'Angelina Johnson', 'Katie Bell', 'Alicia Spinnet', 'George Weasley'];
 let arr2=['Oliver Wood', 'Angelina Johnson', 'Katie Bell', 'Alicia Spinnet', 'George Weasley', 'Fred Weasley', 'Harry Potter'];
 let arr3=['Oliver Wood', 'Angelina Johnson', 'Katie Bell', 'Alicia Spinnet', 'George Weasley', 'Fred Weasley'];
 const hasEnoughPlayers=(arr)=>{
    if(arr.length<7){
        return false;
    }else{
        return true;
    };

};
console.log(hasEnoughPlayers(arr));
console.log(hasEnoughPlayers(arr2));
console.log(hasEnoughPlayers(arr3));





//more responsive version of the above code is that
const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const hasEnoughNum=(theArr)=>{

    return theArr.length>=7;

};

rl.question('Enter the elements of the array by separating them with a comma (,): ',(input)=>{
    let userArr=input.split(',').map(name=>name.trim());
    console.log(hasEnoughNum(userArr));// checks if they have enough players for the game
    console.log(userArr);// prints the array provided by user
    rl.close();
});


// split(',') separates the elements entered at the commas and create an array, 
// The map() 'arrow ' function is used to apply a function to each element of an array ! Like Applying the 'trim() ' method to each string entered by the user to get rid of any 'starting' and 'ending' spaces
