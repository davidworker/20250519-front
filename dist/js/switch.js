let numberDOM = document.querySelector("#number");
let runDOM = document.querySelector("#run");
let resultDOM = document.querySelector("#result");

console.log(numberDOM, runDOM, resultDOM);

const initResultDOM = () => {
    resultDOM.classList.remove("show");
    resultDOM.classList.remove("success");
    resultDOM.innerHTML = "";
};

runDOM.addEventListener("click", () => {
    initResultDOM();
    console.log("run!");

    let number = numberDOM.value;

    switch (+number) {
        case 1:
            resultDOM.innerHTML = "一";
            break;
        case 2:
            resultDOM.innerHTML = "二";
            break;
        case 3:
            resultDOM.innerHTML = "三";
            break;
        case 4:
            resultDOM.innerHTML = "四";
            break;
        case 5:
            resultDOM.innerHTML = "五";
            break;
        case 6:
            resultDOM.innerHTML = "六";
            break;
        case 7:
            resultDOM.innerHTML = "七";
            break;
        case 8:
            resultDOM.innerHTML = "八";
            break;
        case 9:
            resultDOM.innerHTML = "九";
            break;
        case 10:
            resultDOM.innerHTML = "十";
            break;
        default:
            resultDOM.innerHTML = "請輸入 1-10 的數字";
            break;
    }

    resultDOM.classList.add("show");
});
