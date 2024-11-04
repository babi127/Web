const miniTest = [12, 29, 11, 3];


miniTest.forEach(function (elements,index){// Using forEach function to apply the function to all of the elements of the array !
    if(elements%3===0){
        miniTest[index]+=100;
        
    }
    else{
        console.log(`This element at index ${index} is not divisible by 3`);
    }
}
);
console.log(miniTest);// printing the new updated array !




// Using the map() method to get the new modified array

const arr1=['emily','Samuel','Dag','meg'];

const newArr=arr1.map(function(elem){
    elem+= ' Hello!'
    return elem;
});

console.log(newArr); // Array containing te Hello ! word
