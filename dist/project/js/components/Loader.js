class Loader {
    static async html(url, selector) {
        let response = await fetch(url);
        if (response.status !== 200) {
            return;
        }
        let html = await response.text();
        if (!html) {
            return;
        }
        let dom = document.querySelector(selector);
        if (dom) {
            dom.innerHTML = html;
        }
    }
}

export { Loader };
