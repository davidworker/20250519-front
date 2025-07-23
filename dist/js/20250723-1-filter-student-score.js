const loadStudents = () => {
    return new Promise((resolve, reject) => {
        fetch("json/202507-students.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

let students = [];

loadStudents().then((data) => {
    students = data;
    console.log(students);
});

const some = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("some");
        }, 5000);
    });
};

some().then(function (data) {
    console.log(data);
});

console.log("1234");

let dom = {
    allTable: document.querySelector("#all-table"),
    passTable: document.querySelector("#pass-table"),
    failTable: document.querySelector("#fail-table"),
    fn: document.querySelector("#fn"),
    fnBtns: document.querySelectorAll("#fn .btn"),
    allTableWrap: document.querySelector("#all-table-wrap"),
};

console.log(dom);

// 監聽 body 的 click 事件，確定事件冒泡有執行
document.body.addEventListener("click", (e) => {
    console.log("body click event");
    console.log(e.target);
});

dom.fn.addEventListener("click", (e) => {
    // 阻止事件冒泡
    e.stopPropagation();
    let target = e.target;
    if (target.classList.contains("btn")) {
        dom.allTableWrap.classList.remove("is-both");
        // 移除所有按鈕的 active 類別
        dom.fnBtns.forEach((btn) => {
            btn.classList.remove("active");
        });

        if (target.classList.contains("all")) {
            console.log("is all btn");
            target.classList.add("active");
            renderAllTable();
        }

        if (target.classList.contains("pass")) {
            console.log("is pass btn");
            target.classList.add("active");
            renderPassTable();
        }

        if (target.classList.contains("fail")) {
            console.log("is fail btn");
            target.classList.add("active");
            renderFailTable();
        }

        if (target.classList.contains("both")) {
            console.log("is both btn");
            target.classList.add("active");
            dom.allTableWrap.classList.add("is-both");
            renderPassTable("pass");
            renderFailTable("fail");
        }
    }
});

/**
 * 渲染學生資料
 * @param {Array} students 學生資料
 * @param {string} targetTable 目標表格
 * @returns {void}
 */
const renderTable = (students, targetTable) => {
    let tbody = "";
    students.forEach((student) => {
        tbody += `<tr>
    <td>${student.name}</td>
        <td>${student.score}</td>
        </tr>`;
    });

    let table = dom.allTable;

    if (targetTable === "pass") {
        table = dom.passTable;
    }

    if (targetTable === "fail") {
        table = dom.failTable;
    }

    table.querySelector("tbody").innerHTML = tbody;
};

/**
 * 渲染所有學生資料
 * @returns {void}
 */
const renderAllTable = () => {
    renderTable(students);
};

/**
 * 渲染及格學生資料
 * @returns {void}
 */
const renderPassTable = (targetTable) => {
    let passes = filterStudent(true);
    renderTable(passes, targetTable);
};

/**
 * 渲染不及格學生資料
 * @returns {void}
 */
const renderFailTable = (targetTable) => {
    let fails = filterStudent(false);
    renderTable(fails, targetTable);
};

/**
 * 篩選學生成績
 * @param {boolean} isPass 是否及格
 * @returns {Array} 篩選後的學生資料
 */
const filterStudent = (isPass) => {
    let filteredStudents = [];
    if (isPass) {
        filteredStudents = students.filter((student) => student.score >= 60);
    } else {
        filteredStudents = students.filter((student) => student.score < 60);
    }

    return filteredStudents;
};

let fails = filterStudent();
let passes = filterStudent(true);

// renderAllTable();
// renderPassTable();
// renderFailTable();
