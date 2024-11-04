const foods=new Array('banana', 'orange','meet', 'onion');
foods.splice(-1,1, 'Bread'  ,' Burger ','Salads');// splice () method slices the list starting in the order (start, NumberOfElementsToDelete(beginning of the element to be added If set to 0, It will start adding from the start ), [any content to add from that index that ended splicing])
console.log(foods);

// Syntax of 'splice()' method is like bellow

/*
array.splice( Start-index, NumberOf-Elements-to-delete, 'element-1 to add', 'element-2 to add')
*/



// Start-index Mandatory: specifies the beginning of 'removing' or 'adding Elements'
// NumberOf-Elements-to-delete optional : specifies the number of items to be 'removed' . If set to 0, no element will be removed !

const arr= new Array('medications', 'cloths','foods','survival kits','tapes');
arr.splice(-2,3);
console.log(arr);// this will return as 'arr.splice(-2,2)' because the deletion occurs forward , but there are more than 2 elements in front of the -2 index element


const rainbow=new Array('Red', 'Orange', 'Blackberry', 'Blue');
rainbow.splice(2,1, 'Yellow', 'Green');
rainbow.splice(5,0, 'purple');// adds a new5th index element
console.log(rainbow);