// 2:30:50 -> 2*60*60 + 30*60 + 50 = 9000
// 35:30 -> 35*60 + 30 = 2130
function stringTimeToSeconds(string) {
    string = "" + string;
    const timeArr = string.split(":");

    let hours = 0,
        minutes = 0,
        seconds = 0;
    if (timeArr.length === 3) {
        [hours, minutes, seconds] = string.split(":");
    } else if (timeArr.length === 2) {
        [minutes, seconds] = string.split(":");
    } else {
        seconds = string;
    }

    return parseInt(hours) * 60 * 60 + parseInt(minutes) * 60 + parseInt(seconds);
}

function evalBigTimeEquation(string) {
    let members = string.split(" ");
    if (members.length === 1) return string;

    for (let i = 0; i < members.length; i++) {
        if (members[i] === "÷" && [members[i + 1], members[i - 1]].every(e => e.includes(":"))) {
            members[i - 1] = String(stringTimeToSeconds(members[i - 1]) / stringTimeToSeconds(members[i + 1]));
            members.splice(i, 2);
            i--;
        }
    }

    let membersInSec = members.map(e => (/\+|-|÷|×/g.test(e) ? e : stringTimeToSeconds(e))).join(" ");

    members = members.join(" ");

    const isTimeResult =
        /(\+|-|×) (\d+):/g.test(members) ||
        /:(\d+) (\+|-|×)/g.test(members) ||
        /:(\d+) ÷ (?!((\d+):))/g.test(members);

    let rawEquation = membersInSec.replaceAll("×", "*").replaceAll("÷", "/");

    let adjustedEquation = rawEquation.replace(/(\d+)(\s*\/\s*)(\d+)/g, (match, p1, p2, p3) => {
        return `${p1 / p3}`;
    });

    const result = eval(adjustedEquation);

    return isTimeResult ? convertSecondsToHHMMSS(result) : "" + result;
}

function convertSecondsToHHMMSS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = roundToNDecimals(seconds % 60, 3);

    return `${hours !== 0 ? `${hours}:` : ""}${
        minutes < 10 && hours !== 0 ? "0" + minutes : minutes
    }:${secs < 10 ? "0" + secs : secs}`;
}

function convertMinutesToHHMMSS(minutes) {
    return convertSecondsToHHMMSS(minutes * 60);
}

function convertHoursToHHMMSS(hours) {
    return convertSecondsToHHMMSS(hours * 3600);
}

// round to n decimal places
function roundToNDecimals(number, n) {
    return Math.round((number + Number.EPSILON) * Math.pow(10, n)) / Math.pow(10, n);
}

export {
    stringTimeToSeconds,
    evalBigTimeEquation,
    convertSecondsToHHMMSS,
    convertMinutesToHHMMSS,
    convertHoursToHHMMSS,
};
