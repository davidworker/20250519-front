class Header {
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
