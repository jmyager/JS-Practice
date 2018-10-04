let string = "hello";

var reverseString = function(s) {
    const output = [];
    for (var i = 0; i < s.length; i++) {
        output.unshift(s[i]);
    }
    return output.join('');
};

console.log(reverseString(string));