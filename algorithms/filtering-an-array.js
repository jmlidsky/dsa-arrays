// 6. Filtering an array
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

function filter(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9]))