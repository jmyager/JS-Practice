let array = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]

function diagonalDifference(arr) {
    let diag1 = 0;
    let diag2 = 0;
    for (var i = 0; i < arr.length; i++) {
        diag1 += arr[i][i];
        diag2 += arr[arr.length-(i+1)][i];
    }
    return Math.abs(diag1 - diag2);
}

console.log(diagonalDifference(array));