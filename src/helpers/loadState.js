function loadState(key, defaultValue) {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return defaultValue;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return defaultValue;
    }
}

export default loadState;