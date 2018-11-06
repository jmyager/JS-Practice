const array = [4,4,1,3,4,2];

function birthdayCakeCandles(ar) {
    var max = Math.max(...ar);
    return ar.filter(i => i === max).length;
  }

console.log(birthdayCakeCandles(4,array));