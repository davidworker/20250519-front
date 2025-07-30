const { createApp } = Vue;

const options = {
    data() {
        return {
            processText: "",
            processList: [],
            processDoneList: [],
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
                text: this.processText,
            });

            // 清空輸入框
            this.processText = "";
        },
        toDone(index) {
            // 將資料拿出
            let item = this.processList[index];

            // 推到完成列表
            this.processDoneList.push(item);

            // 刪除原本的資料
            this.processList.splice(index, 1);
        },
        toProcess(index) {
            // 將資料拿出
            let item = this.processDoneList[index];

            // 推到進行中列表
            this.processList.push(item);

            // 刪除原本的資料
            this.processDoneList.splice(index, 1);
        },
    },
    mounted() {
        console.log("mounted");
        this.processList.push({
            text: "1111aaaaa",
        });
        this.processList.push({
            text: "2222bbbbb",
        });
        console.log(this.processList);

        // mock data
        this.processDoneList.push({
            text: "1111done",
        });
        this.processDoneList.push({
            text: "2222done",
        });

        console.log(this.processDoneList);
    },
};

createApp(options).mount("#app");
