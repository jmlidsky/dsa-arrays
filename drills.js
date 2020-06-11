const Array = require('./Array')

function main() {

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    // Array { length: 1, _capacity: 3, ptr: 0 }

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    // Array { length: 6, _capacity: 12, ptr: 3 }
    // Memory increases to make space for the new items

    arr.pop();
    arr.pop();
    arr.pop();
    // Array { length: 3, _capacity: 12, ptr: 3 }
    // Pops three values off the end of the array, but does not resize the array. Leaves extra space for the next push

    // const firstItem = arr.get(0)
    // console.log(firstItem)

    arr.pop();
    arr.pop();
    arr.pop();
    // arr.push('tauhida');
    // console.log(arr.get(0));
    // NaN - The memory allocation is for float64 numbers, so it does not accept strings
    // The purpose of the _resize() function
    // When the array runs out of capacity it allocates more memory for the array. 

    console.log(arr);
}

main()