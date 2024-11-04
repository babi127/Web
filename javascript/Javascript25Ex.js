//String reverse function


// Solution , First change the string to an Array and then reverse the array and lastly Join the array into a single string.
const reverseFun=(Str)=>{
return Str.split('').reverse().join('');// split('') splits the string into each character and store it into an 'array'
// then reverse() reverse the array , then join('') will join each character into a string.
};


// A function that filters only "even" numbers and return their sum from an array

const posetiveSum=(arr)=>{
    return arr
    .filter(num => num>=0)// don't add semicolon here if u want to use Dot expression to do some stuff like in this case add the values after checking their evenness
    .reduce((acc,num)=>acc+num,0);// reduce() 'sums' the filtered numbers Starting with '0' as an initial value!

};

// Other way of doing this is using if inside for loop

const sumOfPosetives=(arr)=>{
    let sum=0;// Initialize the sum to zero first
    for(i=0;i<=arr.length; i++){
        if(arr[i]>=0){
            return sum +=arr[i];
        }
    }
    return sum;

};

//Sheep count
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  };
  /*
  [filter] is a JavaScript array method that creates a new array with all elements that pass a specific test (i.e., the condition in the filter function).
By passing Boolean as the condition, JavaScript automatically converts each element in the array to its equivalent boolean value:
-true stays true.
-false, null, undefined, 0, NaN, and '' (empty string) are considered falsy and are filtered out (removed from the array).
  
  
  */

function getCount(str) {
    let countVowels=0;
    let arr=str.split('');
    for(let i=0; i<arr.length; i++){
      switch(arr[i]){
          case 'a':
            countVowels++;
            break;
          case 'e':
            countVowels++;
            break;
          case 'i':
            countVowels++;
            break;
          case 'o':
            countVowels++;
            break;
          case 'u':
            countVowels++;
      }
    }
    return countVowels;
  }
  /*
  
  Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
  
  */


function removeChar(str) {
    return str.slice(1, -1);
  };// Removes the first and last characters of a string!

  //1 means slicing starts from index 1 to , -1 meaning counting from the last char, backwards so that the last char will be removed!

  // OR this also works

  function removeChar(str){
    return str.substr(1,str.length-2);// substr() function returns substring of the string
  
  };