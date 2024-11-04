// Arrays have a set of methods that we can operate and loop over them

//forEach()

const tehArr= new Array('Emanuel','Abel','Hen','Justin');

const theHole=(arr)=>{
    arr+= "hole .";
    arr=arr.toUpperCase();
    console.log(arr);
}

tehArr.forEach(theHole); //the forEach() function will apply the theHole() function to each element of the array ! We used the theHole() 
//function as a parameter for the forEach() function

// But since we won't use this theHole() method anywhere other than this part of the code, better version of this function is to make the thHole() function an inline function expression !


const arr1= new Array('Hodor','winterfell','Dragon stone','Lanesters');

arr1.forEach(function (arrayElement){ // made it an inline function expression !
    arrayElement+=" Kingdom";
    arrayElement=arrayElement.toUpperCase();
    console.log(arrayElement);

});