let scores = [];
console.log(scores);

scores.push(100); // 加到最後面
scores.push(200);
scores.push(300);
console.log(scores);

// scores.unshift(1000); // 加到最前面
// console.log(scores);
// scores.shift(); // 移除最前面
// console.log(scores);

// let last = scores.pop(); // 移除最後面
// console.log(scores, last);

// let last = scores[2];
// console.log(last);
// console.log(scores);
// console.table(scores);

let length = scores.length;
console.log(length);

let last = scores[length - 1];
console.log(last);

scores.forEach(function (score, index) {
    console.log(score, index);
});

let newScores = scores.map(function (score) {
    return score + 10;
});
console.log(newScores, scores);

let forNewScores = [];
scores.forEach(function (score) {
    forNewScores.push(score + 10);
});

console.log(forNewScores, scores);

console.log(scores);
let has100Index = scores.indexOf(100); // 找不到時回傳 -1
if (has100Index >= 0) {
    console.log("has 100");
}

// 100,200,300 CSV

let csv = scores.join(",");
console.log(csv);

let studentScores = [];
for (let i = 0; i < 10; i++) {
    studentScores.push(Math.floor(Math.random() * 100));
}
console.log(studentScores);

// 回傳布林值
let passStudentScores = studentScores.filter(function (score) {
    return score >= 60;
});

console.log(passStudentScores);

let failStudentScores = studentScores.filter(function (score) {
    return score < 60;
});

console.log(failStudentScores);

let failStudentScoresAdd10 = studentScores
    .filter(function (score) {
        return score < 60;
    })
    .map(function (score) {
        return score + 10;
    });

console.log(failStudentScoresAdd10);
