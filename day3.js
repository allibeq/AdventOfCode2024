import fs from 'fs';

let reports;
const regexOne = /mul\((\d+),(\d+)\)/g;
const regexTwo = /don't\(\).+?(do\(\)|$)/g;

function getAndParseDayThreeData() {
    const fileData = fs.readFileSync('day3', 'utf8');
    reports = fileData.trim();
}

function findAndMultNumbers() {
    const mults = [...reports.matchAll(regexOne)];
    let result = 0;

    for (let i = 0; i < mults.length; i++) {
        result += (Number(mults[i][1]) * Number(mults[i][2]));
    }

    return result;
}

function applyInstructionToNumbers() {
    reports = reports.replace(/\n/g, '');
    const strToRmv = [...reports.matchAll(regexTwo)];
    for (let i = 0; i < strToRmv.length; i++) {
        reports = reports.replace(String(strToRmv[i][0]), '');
    }
}

getAndParseDayThreeData();
applyInstructionToNumbers();
findAndMultNumbers();