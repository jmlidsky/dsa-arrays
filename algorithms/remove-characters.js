// 9. Remove characters
// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

// function removeCharacters(str) {
//   return str.replace(/[aeiou]/gi, '')
// }

// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny'))

function removeCharacters(string, chars) {
    let output = ''
    for (let i = 0; i < string.length; i++) {
        let contained = true
        for (let j = 0; j < chars.length; j++) {
            if (string[i] === chars[j]) {
                contained = false
            }
        }
        if (contained) {
            output += string[i]
        }
    }
    return output
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))