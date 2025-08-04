class Storage {
    constructor(key) {
        this.key = key;
    }

    write(value) {
        const valueJson = JSON.stringify(value);
        localStorage.setItem(this.key, valueJson);
    }

    read(defaultValue = "") {
        const valueJson = localStorage.getItem(this.key);
        if (!valueJson) {
            return defaultValue;
        }
        return JSON.parse(valueJson);
    }
}

export { Storage };
