console.log("calculate.js");

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let operator = document.querySelector("#operator");
let calcBtn = document.querySelector("#calc-btn");
let resultDOM = document.querySelector("#result");
let resultWrap = document.querySelector("#result-wrap");
console.log(num1, num2, operator, calcBtn, resultDOM, resultWrap);
resultDOM.textContent = "";

function initResultWrap() {
    resultWrap.classList.add("hide");
}
function showResultWrap() {
    resultWrap.classList.remove("hide");
}

const calcRun = () => {
    initResultWrap();
    // 1. 取得使用者輸入的數字
    let value1 = num1.value;
    let value2 = num2.value;
    let op = operator.value;

    // if (!value1 || !value2 || !op) {
    //     alert("請輸入數字");
    // } else {
    //     // 開始計算
    // }

    // 2. 判斷使用者是否輸入數字
    if (value1 && value2 && op) {
        let result;
        // 3. 判斷 op
        if (op == "+") {
            result = +value1 + +value2;
        }

        if (op == "-") {
            result = +value1 - +value2;
        }

        if (op == "*") {
            result = +value1 * +value2;
        }

        if (op == "/") {
            result = +value1 / +value2;
        }

        // 4. 顯示結果到 UI 上
        console.log(result);
        resultDOM.textContent = result;
        showResultWrap();
    } else {
        let errorDOM = "";
        let errorMsg = "";
        if (value1 == "") {
            errorDOM = num1;
            errorMsg = "請輸入數字1";
        }

        if (!errorDOM && value2 == "") {
            errorDOM = num2;
            errorMsg = "請輸入數字2";
        }

        Swal.fire({
            title: "計算錯誤",
            text: errorMsg,
            icon: "error",
            confirmButtonText: "確定",
        }).then(() => {
            setTimeout(() => {
                errorDOM.focus();
            }, 500);
        });
    }
};
calcBtn.addEventListener("click", calcRun);
