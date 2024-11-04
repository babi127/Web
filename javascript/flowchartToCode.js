// let price=40;
// let mYWallet=20;


// if(mYWallet>=price){
//     console.log("Purchase item!");
// }else{
//     console.log("Not Enough money!");
// }


// murder scenario

// if.. else if method


/*
let room1="ballroom";
let room2="gallery";
let room3="billiards";
let room4="dining";

let weapon1="poison";
let weapon2="trophy";
let weapon3="pool stick";
let weapon4="knife";

let person1="Parkes";
let person2="Van Cleve";
let person3="Sparr";
let person4="Kalehoff";


let room=room3;
let wep=weapon3;
if(room===room1 && wep===weapon1){
    console.log(person1+" did it in the " + room1+" with the "+ weapon1);

}else if(room===room2 && wep===weapon2){
    console.log(person2+" did it in the " + room2+" with the "+ weapon2);
}else if(room===room3 && wep===weapon3){
console.log(person3+" did it in the " + room3+" with the "+ weapon3);
}else if(room===room4 && wep===weapon4){
    console.log(person4+" did it in the " + room4+" with the "+ weapon4);
}else{
    console.log("We could't know!");
}


Or we can also use Object method to solve the above problem , which is more scalable!

*/


let murderScenario={
'ballroom':{suspect:'Parkes',weapon:'poison'},
'gallery':{suspect:'Van Cleve',weapon:'trophy'},
'billiards':{suspect:'Sparr',weapon:'pool stick'},
'dining':{suspect:'Kalehoff',weapon:'knife'}


};
let room='ballroom';
let suspect='Parkes';
let solved=false;

if(murderScenario[room] && murderScenario[room].suspect===suspect){
    solved=true;
    let weapon=murderScenario[room].weapon;
    console.log(suspect + ' does it' + ' in the ' +room + ' with ' + weapon+ '!');
}else{
    console.log('Murder is not solved!');
}




