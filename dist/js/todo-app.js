import { Storage } from "./components/Storage.js";

let todoStorage = null;
const userStorage = new Storage("user");

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

setUser();

const { createApp } = Vue;

const options = {
    data() {
        return {
            currentUser: "",
            processText: "",
            processList: [],
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
    },
    mounted() {
        console.log("mounted");
        this.processList = todoStorage.read([]);

        this.currentUser = userStorage.read();
        console.log(this.currentUser);
    },
};

createApp(options).mount("#app");
