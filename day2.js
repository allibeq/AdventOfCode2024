import fs from 'fs';

let reports;

function getAndParseDayOneData() {
    const fileData = fs.readFileSync('day2', 'utf8');
    reports = fileData.trim().split('\n');

    console.log(reports.length);
}

function isSafe (report) {
    const levels = report.split(' ').map((v) => Number(v));

    let isIncrease = levels[0] < levels[1];

    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] < levels[i + 1] && levels[i + 1] - levels[i] < 4 && isIncrease) {
           continue;
        } else if (levels[i] > levels[i + 1] && levels[i] - levels[i + 1] < 4 && !isIncrease) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

function day2Part1 () {
    getAndParseDayOneData();

    let sum = 0;
    
    for (let i = 0; i < reports.length; i++) {
        if (isSafe(reports[i])) {
            sum++;
        }
    }

    return sum;
}

day2Part1();