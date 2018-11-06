const string = "12:00:00PM";

function timeConversion(s) {
    let AMPM = s.slice(-2);
    let timeArray = s.slice(0,-2).split(":");

    if (AMPM === "AM" && timeArray[0] === "12") {
        timeArray[0] = "00";
    }

    else if (AMPM === "PM") {
        timeArray[0] = (timeArray[0] % 12 + 12);
    }

    return timeArray.join(":");
}

console.log(timeConversion(string));