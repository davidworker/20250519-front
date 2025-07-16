// 學生成績資料陣列
let students = [
    { id: "S001", name: "王小明", score: Math.floor(Math.random() * 100) },
    { id: "S002", name: "李小華", score: Math.floor(Math.random() * 100) },
    { id: "S003", name: "張小美", score: Math.floor(Math.random() * 100) },
    { id: "S004", name: "陳小強", score: Math.floor(Math.random() * 100) },
    { id: "S005", name: "林小雯", score: Math.floor(Math.random() * 100) },
    { id: "S006", name: "黃小龍", score: Math.floor(Math.random() * 100) },
    { id: "S007", name: "吳小芳", score: Math.floor(Math.random() * 100) },
    { id: "S008", name: "劉小傑", score: Math.floor(Math.random() * 100) },
    { id: "S009", name: "周小琪", score: Math.floor(Math.random() * 100) },
    { id: "S010", name: "蔡小威", score: Math.floor(Math.random() * 100) },
];

// DOM 元素
const scoreTableBody = document.getElementById("scoreTableBody");
const addScoreBtn = document.getElementById("addScoreBtn");

/**
 * 使用 for loop 產生表格內容
 */
function renderScoreTable() {
    let tableHTML = "";

    // 使用 for loop 遍歷學生資料
    for (let i = 0; i < students.length; i++) {
        tableHTML += `
            <tr id="row-${i}">
                <td>${students[i].id}</td>
                <td>${students[i].name}</td>
                <td class="score-cell">${students[i].score}</td>
            </tr>
        `;
    }

    scoreTableBody.innerHTML = tableHTML;
}

/**
 * 使用 for loop 為所有學生加分
 * @param {number} points - 要加的分數
 */
function addScoreToAllStudents(points) {
    // 使用 for loop 為每個學生加分
    for (let i = 0; i < students.length; i++) {
        students[i].score += points;

        // 確保成績不超過 100 分
        if (students[i].score > 100) {
            students[i].score = 100;
        }
    }

    // 重新渲染表格
    renderScoreTable();

    // 添加視覺效果
    highlightUpdatedRows();
}

/**
 * 為更新的行添加高亮效果
 */
function highlightUpdatedRows() {
    // 使用 for loop 為所有行添加高亮效果
    for (let i = 0; i < students.length; i++) {
        const row = document.getElementById(`row-${i}`);
        if (row) {
            row.classList.add("score-updated");

            // 1.5 秒後移除高亮效果
            setTimeout(() => {
                row.classList.remove("score-updated");
            }, 1500);
        }
    }
}

/**
 * 顯示統計資訊
 */
function showStatistics() {
    let totalScore = 0;
    let maxScore = 0;
    let minScore = 100;

    // 使用 for loop 計算統計資訊
    for (let i = 0; i < students.length; i++) {
        totalScore += students[i].score;

        if (students[i].score > maxScore) {
            maxScore = students[i].score;
        }

        if (students[i].score < minScore) {
            minScore = students[i].score;
        }
    }

    const averageScore = (totalScore / students.length).toFixed(1);

    alert(
        `統計資訊:\n總分: ${totalScore}\n平均: ${averageScore}\n最高分: ${maxScore}\n最低分: ${minScore}`
    );
}

// 事件監聽器
addScoreBtn.addEventListener("click", function () {
    const confirmed = confirm("確定要為所有學生加 10 分嗎？");

    if (confirmed) {
        addScoreToAllStudents(10);

        // 顯示完成訊息
        setTimeout(() => {
            alert("已為所有學生加 10 分！");
        }, 500);
    }
});

// 雙擊表格顯示統計資訊
scoreTableBody.addEventListener("dblclick", function () {
    showStatistics();
});

// 頁面載入完成後初始化表格
document.addEventListener("DOMContentLoaded", function () {
    renderScoreTable();
    console.log("學生成績管理系統已初始化");
    console.log("學生資料:", students);
});

// 額外功能：鍵盤快捷鍵
document.addEventListener("keydown", function (event) {
    // 按 Enter 鍵也可以加分
    if (event.key === "Enter") {
        addScoreBtn.click();
    }

    // 按 S 鍵顯示統計資訊
    if (event.key.toLowerCase() === "s") {
        showStatistics();
    }
});

console.log("add-score.js 載入完成");
