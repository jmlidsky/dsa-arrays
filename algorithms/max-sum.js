// 7. Max sum in the array
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

function maxSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let total = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            total += arr[j]

            if (total > sum) {
                sum = total
            }
        }
    }
    return sum
}

console.log(maxSum([4, 6, -3, 5, -2, 1]))