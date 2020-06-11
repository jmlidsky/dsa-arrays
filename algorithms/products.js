// 10. Products
// Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

// function products(arr) {
//     let total = arr.reduce((a, b) => a * b)
//     let products = []
//     arr.forEach(val => products.push(total / val))
//     return products
// }

// console.log(products([1, 3, 9, 4]))

function products(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }
        output.push(product);
    }
    return output;
}

console.log(products([1, 3, 9, 4]))