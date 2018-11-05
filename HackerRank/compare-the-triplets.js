const aArray = [5,6,7];
const bArray = [3,6,10];

function compareTriplets(a, b) {
    let aScore = 0;
    let bScore = 0;
    for (var i = 0; i < a.length; i++){
            if (a[i] > b[i]) {
                aScore++;
            }
            else if (a[i] < b[i]) {
                bScore++;
            }
            }
    return [aScore, bScore];
}

console.log(compareTriplets(aArray,bArray));