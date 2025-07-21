let student1 = {
    name: "David",
    score: 100,
    say: function () {
        console.log("Hello, I'm " + this.name);
    },
};

// let student2 = student1;

// student2.name = "John";

// console.log(student1, student2);

// shallow copy
// let student2 = {};
// for (let field in student1) {
//     console.log(field);
//     let value = student1[field];
//     student2[field] = value;
// }

// console.log(student2);
// student2.name = "John";

// console.log(student1, student2);

// deep copy
let str = JSON.stringify(student1);
console.log(str);
let student2 = JSON.parse(str);
console.log(student2);
student2.name = "John";
console.log(student1, student2);

let students = [
    {
        name: "David",
        score: 100,
    },
    {
        name: "John",
        score: 90,
    },
    {
        name: "Mary",
        score: 80,
    },
    {
        name: "Peter",
        score: 70,
    },
    {
        name: "Jane",
        score: 60,
    },
    {
        name: "Jim",
        score: 50,
    },
    {
        name: "Jill",
        score: 40,
    },
    {
        name: "Jack",
        score: 30,
    },
    {
        name: "Joe",
        score: 20,
    },
    {
        name: "Helen",
        score: 10,
    },
];

let fails = students.filter(function (student) {
    return student.score < 60;
});

console.log(fails);

let passes = students.filter(function (student) {
    return student.score >= 60;
});

console.log(passes);

// 列出所有學生
// 可篩選及格與不及格
// 將及格與不及格的學生呈現出兩張資料表
