let btn = document.querySelector("#btn");
console.log(btn);

/**
 * 容易導致多階層的callback(波動拳)
 */
const showAlert = function () {
    Swal.fire({
        title: "Hello World",
        text: "This is a test alert",
        icon: "success",
        confirmButtonText: "OK",
    }).then((result) => {
        console.log(result);
        console.log("showAlert");
        console.log("BalaBala");
    });
};

/**
 * 使用async/await可以避免多階層的callback
 * 讓程式碼看起來更直觀
 */
const showAlert2 = async function () {
    let result = await Swal.fire({
        title: "Hello World",
        text: "This is a test alert",
        icon: "success",
        confirmButtonText: "OK",
    });
    console.log(result);
    console.log("showAlert2");
    console.log("BalaBala2");
};
btn.addEventListener("click", () => {
    console.log("btn clicked");
    showAlert2();
    console.log("call showAlert2");
});

const doGet = async function (url, params = {}) {
    url = new URL(url);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    let result = await fetch(url, {
        method: "GET",
    });

    return await result.text();
};

let getBtn = document.querySelector("#get-btn");
getBtn.addEventListener("click", async () => {
    let params = {
        s: 2,
    };
    let result = await doGet(
        "https://book.niceinfos.com/frontend/api/?action=sleep",
        params
    );
    let json = JSON.parse(result);
    console.log(json);
});
