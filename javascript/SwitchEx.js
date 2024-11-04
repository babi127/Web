// const  colors=['green','yellow','navy','golden','blue'];
// const randomIndex=Math.floor(Math.random()* colors.length);
// const randomColor=colors[randomIndex];

// //Switch case statement
// // switch (condition){case} is the syntax for the switch statement

// switch(randomColor){
//     case 'green':
//         console.log('The color is green.');
//         break;
//     case 'yellow':
//         console.log('The color is yellow.');
//         break;
//     case 'navy':
//         console.log('The color is navy');
//         break;
//     case 'golden':
//         console.log('The color is golden.');
//         break;
//     case 'blue':
//         console.log('The color is blue.');
//         break;
//     default:
//         console.log('The color is not defined.')
// };
function getPlanetName(id){
    let name;
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        default:
      case 8:
        name = 'Neptune';
        
    }
    
    return name;
  };