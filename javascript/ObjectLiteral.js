// Object-literal notation ..


const sister={ // the sister object

    name: 'Hirut',
    job :'Nurse',
    Brothers :['biruk','fasil'],
    age :25,
    sisterPaints: function(){ // We can also have a function as the key value pair, i.e property of the object !
        return `She doesn't paint !`
    }

};

// to access the value of a key (property), we can use two ways..

console.log(sister.job); // Nurse, Using [dot-Notation]
console.log(sister['Brothers']); // ['biruk','fasil'] , using [bracket-notation]
console.log(sister.sisterPaints());



// Notes:
// don't use quotes on property names and don't use Numbers on property name ! It'll cause errors while using dot-notation to access it's value !
// Don't use hyphens or spaces on property names !


const breakfast={
    menuName: 'theLumberjack',
    price : 23+ '$',
    ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
};

console.log(breakfast);// Prints the whole object in the form of key value pairs !