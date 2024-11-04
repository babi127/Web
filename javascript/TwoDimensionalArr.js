const theArr=new Array(['Slytherin','Hufflepuff','Gryffindor','Malfoy'],
                        ['Harry','Hermione','Ron','Draco','Ginny','Luna'],
                        ['Martell','Grayjoy','Stark','Arryn','Lannister','Eyrie','Baratheon','Tyrell','Pyke']
); // 2D Array

for(let r=0;r<theArr.length; r++){ // loops over the array elements inside the array.
    for(let c=0; c<theArr[r].length; c++){ // This one loops over each element in each row .
        console.log(theArr[r][c]+ ' '+[c]); // We can concatenate the  Index of each element in each row !
    }
}

// even Odd Nested for loops

let numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(let r=0;r<numbers.length;r++){
    for(let c=0; c<numbers[r].length;c++){
        if(numbers[r][c]%2===0){
            numbers[r][c]='even';
        }else{
            numbers[r][c]='odd';
        }
        // console.log(numbers); since it'll print the whole array every time we change an element sub array . write it outside the for loop

    };
};

console.log(numbers);
