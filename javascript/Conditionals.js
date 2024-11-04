
//Only using if statement 
const firstNum=20;
const secondNum=10;
const compare=firstNum>secondNum;

if(compare){
    console.log('This expression is true!');
}

// If Else conditional
// if(){} else{} is the structure

if ('this string is'==='this second string'){
    console.log('This strings are equal.');
}else{
    console.log('The strings are not equal.')
}

//adding another code path with 'else if'

if (compare){
    console.log('this expression is true!');
}else if(firstNum===secondNum){
    console.log('this expressions are equal');
}else{
    console.log('this expression is false');
}

//switch case
const colors=['green','yellow','yellow','blue','golden'];
const randomIndex=Math.floor(Math.random()*colors.length);
const randomColor=colors[randomIndex];

if (randomColor==='green'){
    console.log('the color is green');
}
else if(randomColor==='yellow'){
    console.log('The color is yellow.');
}
else if(randomColor==='blue'){
    console.log('The color is blue.');
}
else {
    console.log('The color is golden.');
}

// But using the above code is a clutter in our code so instead it's better if we use 'Switch' conditional statement!

let expression = 20 ===20;

switch(expression){
    case true:
        console.log('Expression is true and we can say its Valid! ');
        break;
    case false:
        console.log('Expression is false and it\'s so Invalid! ');
}

//Other switch example

let coloring = ['blue', 'green', 'lightblue', 'navy', 'yellow'];

coloring.forEach(color => {      // forEach loops over the array
    switch (color) {             // 'color' is the current element in the array
        case 'blue':
            console.log('Color is blue.');
            break;
        case 'green':
            console.log('Color is green.');
            break;
        case 'lightblue':
            console.log('Color is lightblue.');
            break;
        case 'navy':
            console.log('Color is navy.');
            break;
        case 'yellow':
            console.log('Color is yellow.');
            break;
        default:
            console.log('Unknown color.');
    }
});
