let dom = {
    btn: document.querySelector("#btn"),
    result: document.querySelector("#result"),
    btn2: document.querySelector("#btn2"),
};

dom.btn.addEventListener("click", function () {
    console.log("wait fetch...");

    // 嘗試使用 CORS 模式
    fetch("https://book.niceinfos.com/frontend/api/?action=sleep", {
        method: "GET",
    })
        .then((rep) => {
            if (!rep.ok) {
                throw new Error(`HTTP error! status: ${rep.status}`);
            }
            return rep.json();
        })
        .then((response) => {
            console.log("fetch success");
            console.log(response);
            dom.result.innerHTML = response.data;
        })
        .catch((error) => {
            console.error("Fetch error:", error);
            dom.result.innerHTML = "發生錯誤：" + error.message;

            // 如果 CORS 失敗，嘗試使用 JSONP 或顯示錯誤訊息
            if (error.message.includes("CORS")) {
                dom.result.innerHTML +=
                    "<br>CORS 錯誤：API 不允許跨域請求。請聯繫 API 提供者添加 CORS 支援。";
            }
        });
    alert("wait fetch");
});

dom.btn2.addEventListener("click", function () {
    console.log("click btn2");
});
