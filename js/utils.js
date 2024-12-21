export function shuffleArray(array) {
    // Fisher-Yates (Knuth) Shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function focusFirstInput() {
    setTimeout(() => {
        const firstInput = document.querySelector('[autofocus]');
        if (firstInput) {
            firstInput.focus();
        }
    }, 0);
}
