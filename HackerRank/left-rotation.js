const array = [1,2,3,4,5];

// Complete the rotLeft function below.
function rotLeft(a, d) {
    for (var i = 0; i < d; i++) {
        let value = a.shift();
        a.push(value);
    };
    return a;
}

console.log(rotLeft(array,4));