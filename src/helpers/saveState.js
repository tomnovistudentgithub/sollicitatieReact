function saveState(key, state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch {
           // ignore write errors
    }
}

export default saveState;