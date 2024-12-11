import { COLORS } from './constants.js';
import { state, nextStep, setState } from './state.js';
import { ProductSetup } from './components/ProductSetup.js';
import { FirstNumbering } from './components/FirstNumbering.js';
import { Break } from './components/Break.js';
import { SecondNumbering } from './components/SecondNumbering.js';
import { Results } from './components/Results.js';

// Make renderApp globally available
window.renderApp = renderApp;

// Clean up any existing handlers before setting new ones
window.removeEventListener('nextStep', nextStep);
window.addEventListener('nextStep', nextStep);

function renderStep() {
    switch (state.step) {
        case 1:
        case 2:
            return ProductSetup();
        case 3:
            return FirstNumbering();
        case 4:
            return Break("Please let the second person approach", COLORS.STEP_4);
        case 5:
            return SecondNumbering();
        case 6:
            return Break("Perform the test and click next when finished", COLORS.STEP_6);
        case 7:
            return Results();
        default:
            return '';
    }
}

function renderApp() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="app">
            ${renderStep()}
        </div>
    `;
}

renderApp();
