import { state, setState, nextStep } from '../state.js';
import { COLORS } from '../constants.js';

export function SecondNumbering() {
    if (!state.products[0].secondNumber) {
        const numbers = [...Array(state.numberOfProducts).keys()].map(i => i + 1);
        const shuffled = numbers.sort(() => Math.random() - 0.5);
        setState({
            products: state.products.map((p, i) => ({
                ...p,
                secondNumber: shuffled[i]
            }))
        });
    }

    return `
        <div class="step-container" style="background-color: ${COLORS.STEP_5}">
            <h2>Step 5: Second number assignment</h2>
            <div class="product-list">
                ${state.products
                    .sort((a, b) => a.firstNumber - b.firstNumber)
                    .map(product => `
                        <div class="product-item">
                            Product ${product.firstNumber} → ${product.secondNumber}
                        </div>
                    `).join('')}
            </div>
            <button class="button" onclick="window.dispatchEvent(new CustomEvent('nextStep'))">Next</button>
        </div>
    `;
}
