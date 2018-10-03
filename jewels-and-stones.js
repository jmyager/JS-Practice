const j = "aAB";
const s = "aaaaAAAAB";
let count = 0;

var numJewelsInStones = (J, S) => {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.includes(S.charAt(i))) {
            count++;
        }
    }
    return count;
};

console.log(numJewelsInStones(j,s));


