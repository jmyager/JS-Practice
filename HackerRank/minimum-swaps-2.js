const array = [7,1,3,2,4,5,6];

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swaps = 0;
    for (var i = 0; i < arr.length-1; i++) {
        console.log(arr + ":" + arr[i]);
        for (var j = i; j < (arr.length); j++) {
            if (arr[j] === (i+1)) {
                let int1 = arr[j];
                let int2 = arr[i];
                arr[j] = int2;
                arr[i] = int1;
                swaps++;           
            }
        }
    }
    console.log(arr);
    return swaps;
}

console.log(minimumSwaps(array));
