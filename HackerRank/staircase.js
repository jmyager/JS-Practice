const num = 4;

// // Complete the staircase function below.
// function staircase(n) {
//     let string = "";
//     for (var i = 1; i < n; i++) {
//         for (var j = i; j < n; j++) {
//             string += " ";
//         }
//         for (var k = 0; k < i; k++) {
//             string += "#";
//         }
//         string += "\n";
//     }
//     for (var l = 0; l < n; l++) {
//         string+= "#";
//     }
//     console.log(string);
// }

// staircase(num);


// More efficient method
function staircase2(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + "#".repeat(i)); 
    }
}

staircase2(num);