// 抓取 DOM
let scoreDOM = document.querySelector("#score");
let calcBtnDOM = document.querySelector("#calc-btn");
let resultWrapDOM = document.querySelector("#result-wrap");
let resultScoreDOM = document.querySelector("#result-score");
let resultLevelDOM = document.querySelector("#result-level");
console.log(
    scoreDOM,
    calcBtnDOM,
    resultWrapDOM,
    resultScoreDOM,
    resultLevelDOM
);

const initScreen = () => {
    resultWrapDOM.classList.add("hide");
};

const toLevel = (score) => {
    if (score >= 90) {
        return "甲";
    }

    if (score >= 80) {
        return "乙";
    }

    if (score >= 70) {
        return "丙";
    }

    if (score >= 60) {
        return "丁";
    }

    return "不及格";
};

calcBtnDOM.addEventListener("click", () => {
    // 初始化畫面
    initScreen();

    let score = scoreDOM.value;

    // 檢查分數是否為空
    if (!score) {
        alert("請輸入分數");
        return;
    }

    // 限制分數只能在 0 ~ 100 之間

    let level = toLevel(score);

    resultScoreDOM.textContent = score;
    resultLevelDOM.textContent = level;

    resultWrapDOM.classList.remove("hide");
});
