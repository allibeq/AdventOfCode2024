import fs from 'fs';

const lArr = [];
const rArr = [];

function getAndParseDayOneData() {
    const fileData = fs.readFileSync('day1', 'utf8');

    const arr = fileData.trim().split('\n');
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i].split('   ');
        lArr.push(a[0]);
        rArr.push(a[1]);
    }
    
    lArr.sort((a, b) => a - b);
    rArr.sort((a, b) => a - b);
}

function day1Part1 () {
    let sum = 0;

    getAndParseDayOneData();

    for (let i = 0; i < lArr.length; i++) {
        if (lArr[i] > rArr[i]) {
            sum += (lArr[i] - rArr[i]);
        } else {
            sum += (rArr[i] - lArr[i]);
        }
    }
        
    return sum;
}

function day1Part2 () {
    const obj = {};
    let score = 0;

    for (let i = 0; i < rArr.length; i++) {
        if (obj.hasOwnProperty(rArr[i])) {
            obj[rArr[i]]++;
        } else {
            obj[rArr[i]] = 1;
        }
    }

    for (let i = 0; i < lArr.length; i++) {
        if (obj.hasOwnProperty(lArr[i])) {
            score += (lArr[i] * obj[lArr[i]])
        } 
    }

    return score;
}

const dayonepartone = day1Part1();
const dayoneparttwo = day1Part2();

console.log(dayonepartone);
console.log(dayoneparttwo);
