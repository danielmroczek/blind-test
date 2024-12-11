import { state } from '../state.js';
import { COLORS } from '../constants.js';

export function Results() {
    return `
        <div class="step-container" style="background-color: ${COLORS.STEP_7}">
            <h2>Results</h2>
            <div class="product-list">
                ${state.products
                    .sort((a, b) => a.secondNumber - b.secondNumber)
                    .map(product => `
                        <div class="product-item">
                            Product ${product.secondNumber} = ${product.name}
                            (Original: ${product.firstNumber})
                        </div>
                    `).join('')}
            </div>
        </div>
    `;
}
