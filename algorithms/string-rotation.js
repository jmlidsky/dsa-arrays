// 12. String rotation
// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true

function isValidRotation(str1, str2) {
    let isValid = false
    for (let i = 0; i < str2.length; i < i++) {
        let tempStr = str2.slice(i) + str2.slice(0, i)
        console.log(tempStr)
        if (str1 === tempStr) {
            isValid = true
        }
    }
    return isValid
}

console.log(isValidRotation('amazon', 'azonma'))
console.log(isValidRotation('amazon', 'azonam'))