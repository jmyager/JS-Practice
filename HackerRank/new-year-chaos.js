const array = [2,1,5,3,4];




// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribed = 0;
    let min = q.length;
    for (var i = q.length - 1; i >= 0; i--) {
        if ( q[i] - i > 3)  {
            return console.log('Too chaotic');
        }

        else if ( q[i] > i + 1)  {
            bribed += (q[i] - (i+1));
        }
        else {
            if (min > q[i]) {
                min = q[i];
            }
            else if (q[i] != min) {
                bribed ++;
            }
        }
    }
 
    return console.log(bribed);
}


console.log(minimumBribes(array));
