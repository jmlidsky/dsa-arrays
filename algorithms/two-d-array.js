// 11. 2D array
// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];

// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

function twoD(arr) {
    const zeroArr = [...arr]
    const col = []
    const row = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(0)) {
            for (let j = 0; j < arr[i].length; j++) {
                if (zeroArr[i][j] === 0 && arr[i].includes(0)) {
                    col[j] = true
                    row[i] = true
                }
            }
        }
    }
    for (let i = 0; i < zeroArr.length; i++) {
        for (let j = 0; j < zeroArr.length; j++) {
            if (row[i] || col[j]) {
                zeroArr[i][j] = 0
            }
        }

    }
    console.log(zeroArr)
}
twoD([[1, 0, 1, 1, 0],
[0, 1, 1, 1, 0],
[1, 1, 1, 1, 1],
[1, 0, 1, 1, 1],
[1, 1, 1, 1, 1]])
