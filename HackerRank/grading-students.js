const array = [73,67,38,33];

function gradingStudents(grades) {
    return grades.map((n) => {
        let diff = 5 - (n % 5);
        if (n >= 38 && diff < 3) {
            n+= diff;
        }
        return n;
    })
}

console.log(gradingStudents(array));