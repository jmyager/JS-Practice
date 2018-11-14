const string1 = "fcrxzwscanmligyxyvym";
const string2 = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let arrayA = a.split("");
    let arrayB = b.split("");
    let count = a.length + b.length;
    arrayA.forEach(aLetter => {
        for (var i = 0; i < arrayB.length; i++) {
            if (aLetter === arrayB[i]) {
                arrayB.splice(i,1);
                count -= 2;
                break;
            }
        }
    })
    return count;
}

console.log(makeAnagram(string1,string2));