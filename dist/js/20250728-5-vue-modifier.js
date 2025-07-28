let { createApp } = Vue;

const options = {
    data() {
        return {};
    },
    methods: {
        showAlert() {
            alert("Hello");
        },
    },
    mounted() {
        console.log("mounted");
    },
};

createApp(options).mount("#app");
