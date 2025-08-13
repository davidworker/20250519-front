import { Loader } from "./Loader.js";

class Footer {
    static async init(selector) {
        await Loader.html("components/footer.html", selector);
        this.setCurrentYear();

        this.currentDate();
        setInterval(() => {
            this.currentDate();
        }, 1000);
    }

    static setCurrentYear() {
        // 取得年份
        let currentYear = new Date().getFullYear();

        let currentYearDom = document.querySelector("#current-year");
        if (currentYearDom) {
            currentYearDom.textContent = currentYear;
        }
    }

    static currentDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        hour = hour < 10 ? "0" + hour : hour; // hour = hour.toString().padStart(2, "0");
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        let full =
            [year, month, day].join("/") +
            " " +
            [hour, minute, second].join(":");

        let currentDateDom = document.querySelector("#current-date");
        if (currentDateDom) {
            currentDateDom.textContent = full;
        }
    }
}

export { Footer };
