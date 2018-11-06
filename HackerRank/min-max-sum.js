const array = [5,3,4,2,1];

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr.sort(function(a,b){return a - b});
    const min = arr[0] + arr[1] + arr[2] + arr[3];
    arr.sort(function(a,b){return b - a});
    const max = arr[0] + arr[1] + arr[2] + arr[3];
    console.log(min.toString() + " " + max.toString());
}

miniMaxSum(array);