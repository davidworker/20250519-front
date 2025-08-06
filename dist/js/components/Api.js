class Api {
    constructor(api) {
        this.api = api;
    }

    async read(uid, sleep = 0) {
        let api = this.api;
        if (!api || !uid) {
            return { code: 400, data: [] };
        }

        let result = await fetch(`${api}?uid=${uid}&sleep=${sleep}`);
        let data = await result.json();
        return data;
    }

    async write(uid, todo = [], sleep = 0) {
        let api = this.api;
        if (!api || !uid) {
            return { code: 400, data: [] };
        }

        let params = {
            uid: uid,
            data: todo,
            sleep: sleep,
        };

        let options = {
            method: "POST",
            body: JSON.stringify(params), // Object 轉 JSON 裝進 body(包裹)
        };

        let result = await fetch(api, options);
        let data = await result.json();
        return data;
    }
}

export { Api };
