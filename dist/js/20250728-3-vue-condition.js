let { createApp } = Vue;

const options = {
    data() {
        return {
            score: "",
            level: "",
        };
    },
    methods: {
        hasLevel() {
            return this.level != "";
        },
        calculateLevel() {
            this.level = "";
            if (!this.score || this.score < 0 || this.score > 100) {
                return;
            }

            let score = parseInt(this.score);
            this.score = "";
            this.$refs.scoreInput.focus();
            console.log(this.$refs);

            if (score >= 90) {
                this.level = "A";
                return;
            }

            if (score >= 80) {
                this.level = "B";
                return;
            }

            if (score >= 70) {
                this.level = "C";
                return;
            }

            if (score >= 60) {
                this.level = "D";
                return;
            }

            this.level = "E";
        },
        reset() {
            this.score = "";
            this.level = "";
        },
    },
    mounted() {
        console.log("mounted");
    },
};

createApp(options).mount("#app");

// 當 level 為空表示沒有計算過
