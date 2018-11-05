const array = [-4, 3, -9, 0, 4, 1]

// Complete the plusMinus function below.
function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero++;
        }
        else if (arr[i] + arr[i] > 0) {
            pos++;
        }
        else if (arr[i] + arr[i] < 0) {
            neg++;
        }
    }
    let fracPos = pos / arr.length
    let fracNeg = neg / arr.length;
    let fracZero = zero / arr.length;
    console.log(fracPos.toFixed(6) + '\n' + fracNeg.toFixed(6) + '\n' + fracZero.toFixed(6));
}

plusMinus(array);