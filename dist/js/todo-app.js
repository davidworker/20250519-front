import { Storage } from "./components/Storage.js";
import { Api } from "./components/Api.js";

let todoStorage = null;
const userStorage = new Storage("user");
const apiStorage = new Storage("api");
let api = null;

let currentUser = userStorage.read();

const setUser = async () => {
    while (!currentUser) {
        let result = await Swal.fire({
            title: "請輸入使用者名稱",
            input: "text",
            confirmButtonText: "確定",
            cancelButtonText: "取消",
        });

        if (result.isConfirmed && result.value) {
            currentUser = result.value;
            userStorage.write(result.value);
        }
    }
    currentUser = userStorage.read();
    todoStorage = new Storage(`todo-${currentUser}`);
};

await setUser();

const { createApp } = Vue;

const options = {
    data() {
        return {
            currentUser: "",
            processText: "",
            processList: [],
            api: "",
        };
    },
    methods: {
        addProcess() {
            // 當沒有輸入時，不新增
            if (!this.processText) {
                return;
            }

            // 新增代辦事項
            this.processList.push({
                id: Date.now(),
                text: this.processText,
                status: "pending",
            });

            // 清空輸入框
            this.processText = "";

            // 儲存資料
            todoStorage.write(this.processList);
        },
        toStatus(id, status) {
            let items = this.processList.filter((item) => {
                return item.id === id;
            });

            if (items.length > 0) {
                items[0].status = status;
                todoStorage.write(this.processList);
            }
        },
        statusItems(status) {
            return this.processList.filter((item) => {
                return item.status === status;
            });
        },
        async deleteItem(id) {
            let items = this.processList.filter((item) => {
                return item.id === id;
            });

            if (items.length > 0) {
                const result = await Swal.fire({
                    title: "刪除確認",
                    text: `確定要刪除 ${items[0].text} 嗎？`,
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "確定",
                    cancelButtonText: "取消",
                });

                if (result.isConfirmed) {
                    this.processList = this.processList.filter((item) => {
                        return item.id !== id;
                    });
                    todoStorage.write(this.processList);
                }
            }
        },
        async changeUser() {
            currentUser = "";
            await setUser();
            this.processList = todoStorage.read([]);
            this.currentUser = userStorage.read();
        },
        async setAPI() {
            let result = await Swal.fire({
                title: "設定 API",
                input: "text",
                confirmButtonText: "確定",
                cancelButtonText: "取消",
            });

            if (result.isConfirmed) {
                this.api = result.value;
            }
            // 儲存 API 到 localStorage
            apiStorage.write(this.api);
            api = new Api(this.api);
        },
        async getTodo() {
            // 當載入時間超過 1s 時，顯示載入中
            let delayTimer = setTimeout(() => {
                Swal.fire({
                    title: "載入中",
                    html: "請稍後...",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    showConfirmButton: false,
                    showCancelButton: false,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });
            }, 1000);

            let response = await api.read(this.currentUser, 5);
            clearTimeout(delayTimer);
            Swal.close();
            // 考量載入失敗可能性
            if (response.code === 200) {
                let result = await Swal.fire({
                    title: "載入確認",
                    text: "將覆蓋目前資料，確定要載入資料嗎？",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "確定",
                    cancelButtonText: "取消",
                });

                if (result.isConfirmed) {
                    this.processList = response.data;
                    todoStorage.write(this.processList);
                }
            }
        },
        async setTodo() {
            // 當儲存時間超過 1s 時，顯示儲存中
            let delayTimer = setTimeout(() => {
                Swal.fire({
                    title: "儲存中",
                    html: "請稍後...",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    showConfirmButton: false,
                    showCancelButton: false,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });
            }, 1000);
            let response = await api.write(
                this.currentUser,
                this.processList,
                5
            );
            clearTimeout(delayTimer);
            Swal.close();
            if (response.code === 200) {
                Swal.fire({
                    title: "儲存成功",
                    text: "資料已儲存",
                    icon: "success",
                });
            } else {
                Swal.fire({
                    title: "儲存失敗",
                    text: "資料未儲存",
                    icon: "error",
                });
            }
        },
    },
    mounted() {
        console.log("mounted");
        this.processList = todoStorage.read([]);

        this.currentUser = userStorage.read();
        console.log(this.currentUser);

        this.api = apiStorage.read();
        api = new Api(this.api);
    },
};

createApp(options).mount("#app");
