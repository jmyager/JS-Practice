const fact = 99;

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    let total = n;
    let multiplier = n-1
    for (var i = 0; i < n-1; i++ ) {
        total *= multiplier
        multiplier --;
    }
    return total.toString();
}

console.log(extraLongFactorials(fact));


// const bigFactorial = n => {
//     const bigNumber = require('bignumber.js');
//     let result = new bigNumber(1);
//     for (let i = 1; i <= n; i++) {
//       result = result.mul(i);
//     }
//     return result.toFixed();
//   }
//   console.log(bigFactorial(n));