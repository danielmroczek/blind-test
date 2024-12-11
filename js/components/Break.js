export function Break(message, color) {
    return `
        <div class="step-container" style="background-color: ${color}">
            <h2>${message}</h2>
            <button class="button" onclick="window.dispatchEvent(new CustomEvent('nextStep'))">Next</button>
        </div>
    `;
}
