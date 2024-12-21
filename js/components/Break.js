export function Break(message, color) {
    window.handleBreakSubmit = (event) => {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent('nextStep'));
    };

    return `
        <div class="step-container" style="background-color: ${color}">
            <h2>${message}</h2>
            <form onsubmit="handleBreakSubmit(event)">
                <button type="submit" class="button">Next</button>
            </form>
        </div>
    `;
}
