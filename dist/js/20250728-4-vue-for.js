let { createApp } = Vue;

const options = {
    data() {
        return {
            newItem: "",
            items: [],
        };
    },
    methods: {
        addItem() {
            if (this.newItem) {
                this.items.push(this.newItem);
                this.newItem = "";
            }
            console.log(this.items);
        },
    },
    mounted() {
        console.log("mounted");
    },
};

createApp(options).mount("#app");
