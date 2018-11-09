const matrix = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

const test = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8 ,-2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
];

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let sum = 0;
    let sums = [];
    let max = -Infinity;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
        sum+= arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
        if (sum > max) {
            max = sum;
        }
        sums.push(sum);
        sum = 0;
    }
    }
    console.log(max);
}

hourglassSum(test);
