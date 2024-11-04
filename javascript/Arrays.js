const firstArray=[23,22,44,55,77];
console.log(firstArray[0]);
// firstArray.push(300);
console.log(firstArray.push(300));// returns the length

const arrays=['a string',10,{property1:'red'},[1,11,12]]; // arrays are indexed!
console.log(arrays);
console.log(arrays[3][1]); // prints the nested array value 11 by using the 2d array!

//objects

// objects are complex container!
// can have other containers in it.

const firstObject={prop1:10,prop2:20}; // firstObject with prop1 and prop2

// to access the values of prop1 and prop 2 of this object, we use dot notation
console.log(firstObject.prop1);

// we can construct an object with nested sub objects

const nestedObject={
    layer1:{
        layer2:{
            layer3:{
                prop3:50,prop4:80
            }

        }
    }
};

console.log(nestedObject.layer1.layer2.layer3.prop4); // accessing property nested in sub objects of nestedObject using dot notation.

// we also can also use the bracket method  like Arrays to get the properties of the nested objects like
console.log(nestedObject['layer1']['layer2']['layer3']['prop3']);
console.log(firstObject['prop2']);