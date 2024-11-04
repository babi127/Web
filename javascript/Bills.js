// Using the map() function to iterate over the array without using any index and printing out the new array !

const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const total=bills.map(function(elements){
    elements+=(0.15*elements); // element + 15% tip
    elements=elements.toFixed(2)
    elements=Number(elements);// toFixed() returns string! So , To get a number, Cast te 'element' using 'Number()' method
    return elements; //Using toFixed(n) method to round the number to the nearest n number of decimal places ! 
});

console.log(total); 