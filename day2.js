import fs from 'fs';

let reports;

function getAndParseDayOneData() {
    const fileData = fs.readFileSync('day2', 'utf8');
    reports = fileData.trim().split('\n');
}

function isSafe (report) {
    const levels = report.split(' ').map((v) => Number(v));

    let isAsc = levels[0] < levels[1];

    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] < levels[i + 1] && levels[i + 1] - levels[i] < 4 && isAsc) {
           continue;
        } else if (levels[i] > levels[i + 1] && levels[i] - levels[i + 1] < 4 && !isAsc) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

function isSafeWithDampener (report) {
    const levels = report.split(' ').map((v) => Number(v));
    let errCount = 0;
    let isAsc = levels[0] < levels[1];

    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] < levels[i + 1] && levels[i + 1] - levels[i] < 4 && isAsc) {
           continue;
        } else if (levels[i] > levels[i + 1] && levels[i] - levels[i + 1] < 4 && !isAsc) {
            continue;
        } else {
            if (i === 0) {
                isAsc = levels[i + 1] < levels[i + 2];
                errCount++;
                continue;
            }
            if (-4 < levels[i - 1] - levels[i + 1] < 4) {
                errCount++;
                if(errCount > 1) {
                    return false
                }
            }
        }        
    }
    
    return true;
}

function day2Part1 () {

    let sum = 0;
    
    for (let i = 0; i < reports.length; i++) {
        if (isSafe(reports[i])) {
            sum++;
        }
    }
    return sum;
}

function day2Part2 () {
    let sum = 0;
    
    for (let i = 0; i < reports.length; i++) {
        if (isSafeWithDampener(reports[i])) {
            sum++;
        }
    }
    return sum;
}

getAndParseDayOneData();

const day2Part1Res = day2Part1();
const day2Part2Res = day2Part2();

console.log(`Day 2 Results:\n  Part 1: ${day2Part1Res}\n  Part 2: ${day2Part2Res}`)