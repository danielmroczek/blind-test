import { state, setState, nextStep } from '../state.js';
import { COLORS } from '../constants.js';

export function FirstNumbering() {
    if (!state.products[0].firstNumber) {
        const numbers = [...Array(state.numberOfProducts).keys()].map(i => i + 1);
        const shuffled = numbers.sort(() => Math.random() - 0.5);
        setState({
            products: state.products.map((p, i) => ({
                ...p,
                firstNumber: shuffled[i]
            }))
        });
    }

    return `
        <div class="step-container" style="background-color: ${COLORS.STEP_3}">
            <h2>Step 3: First number assignment</h2>
            <p>Remember these numbers for your products:</p>
            <div class="product-list">
                ${state.products
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(product => `
                        <div class="product-item">
                            ${product.name} → Product ${product.firstNumber}
                        </div>
                    `).join('')}
            </div>
            <button class="button" onclick="window.dispatchEvent(new CustomEvent('nextStep'))">Next</button>
        </div>
    `;
}
