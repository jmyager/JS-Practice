const array = [1,2,3,4]

var sortArrayByParity = function(A) {
    const B = [];
    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            B.unshift(A[i]);
        }
        else if (A[i] % 2 === 1) {
            B.push(A[i]);
        }
    }
    return B;
};

console.log(sortArrayByParity(array));