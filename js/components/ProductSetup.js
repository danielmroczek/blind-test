import { state, setState, nextStep } from '../state.js';
import { COLORS } from '../constants.js';

export function ProductSetup() {
    // Expose handler to window object
    window.handleProductSetupSubmit = (event) => {
        event.preventDefault();
        if (state.step === 1) {
            setState({
                numberOfProducts: parseInt(event.target.numberOfProducts.value),
                step: 2
            });
        } else {
            const products = Array.from(event.target.elements)
                .filter(el => el.name.startsWith('product'))
                .map((el, i) => ({
                    id: i + 1,
                    name: el.value
                }));
            setState({ products });
            nextStep();
        }
    };

    if (state.step === 1) {
        return `
            <div class="step-container" style="background-color: ${COLORS.STEP_1}">
                <h2>Step 1: Select number of products</h2>
                <form onsubmit="handleProductSetupSubmit(event)">
                    <input type="number" name="numberOfProducts" class="input" min="2" required>
                    <button type="submit" class="button">Next</button>
                </form>
            </div>
        `;
    }

    return `
        <div class="step-container" style="background-color: ${COLORS.STEP_2}">
            <h2>Step 2: Enter product names</h2>
            <form onsubmit="handleProductSetupSubmit(event)">
                ${Array(state.numberOfProducts).fill(0).map((_, i) => `
                    <input type="text" name="product${i}" class="input" placeholder="Product ${i + 1}" required>
                `).join('')}
                <button type="submit" class="button">Next</button>
            </form>
        </div>
    `;
}
