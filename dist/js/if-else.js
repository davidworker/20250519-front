let runDOM = document.querySelector("#run");
let ageDOM = document.querySelector("#age");
let resultDOM = document.querySelector("#result");
// 先確認 DOM 元素是否存在
console.log(runDOM, ageDOM, resultDOM);

const initResultDOM = () => {
    resultDOM.classList.remove("show");
    resultDOM.classList.remove("success");
    resultDOM.innerHTML = "";
};

runDOM.addEventListener("click", () => {
    initResultDOM();
    // 確認事件是否觸發
    console.log("run!");

    let age = ageDOM.value;

    if (!age) {
        resultDOM.innerHTML = "請輸入年齡";
        resultDOM.classList.add("show");
        ageDOM.focus();
    } else {
        if (age >= 18) {
            resultDOM.innerHTML = "您已滿 18 歲，可以投票";
            resultDOM.classList.add("show");
            resultDOM.classList.add("success");
        } else {
            resultDOM.innerHTML = "您未滿 18 歲，不能投票";
            resultDOM.classList.add("show");
            ageDOM.focus();
        }
    }
});

/**
 * 1. 按下按鈕時執行
 * 2. 取得 DOM 元素
 * 3. 取得年齡數值
 * 4. 判斷年齡是否大於等於 18
 * 5. 如果不符合，則顯示 "您未滿 18 歲，不能投票"
 * 6. 如果符合，則顯示 "您已滿 18 歲，可以投票"
 * 7. 如果年齡為空，則顯示 "請輸入年齡"
 * 8. 將顯示區塊顯示出來
 */
