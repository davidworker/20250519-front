import { Loader } from "./Loader.js";

class Header {
    static async init(selector, active) {
        await Loader.html("components/header.html", selector);
        this.activeMenu(active);
    }

    static activeMenu(id) {
        const menu = document.querySelector(
            `.header-wrap .menu li[data-id="${id}"]`
        );
        if (menu) {
            menu.classList.add("active");
        }
    }
}

export { Header };
