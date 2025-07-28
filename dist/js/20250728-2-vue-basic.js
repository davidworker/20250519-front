let { createApp } = Vue;

let options = {
    // 屬性
    data() {
        return {
            account: "",
            password: "",
            remember: false,
            article: `This is a article <br>
            <a href="https://www.google.com">Google</a>
            <p>
                <a href="https://www.google.com">Google</a>
            </p><script>alert("Hello")</script>`,
            readMoreLink: "https://www.google.com",
        };
    },
    // 方法
    methods: {
        toggleRemember() {
            // ture -> false
            // false -> true
            this.remember = !this.remember;
        },
        onlyString() {
            this.account = this.account.replace(/[^a-zA-Z]/g, "");
        },
    },
    mounted() {
        console.log("mounted");
    },
};

createApp(options).mount("#app");

// let account = document.querySelector("#account");

// account.value = "kindping@gmail.com";

// account.addEventListenr("change", function () {
//     let showAccount = document.querySelector("#show-account");
//     showAccount.innerHTML = account.value;
// });

// innerHTML -> v-html -> 會處理 html tag -> 效能差
// textContent -> {{ article }} -> 不會處理 html tag -> 效能好
// {{ article }} -> 單向綁定 -> html 無法更新資料
// v-model -> 雙向綁定 -> html 可以更新資料
