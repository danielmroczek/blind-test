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
                            ${product.secondNumber} = <strong>${product.name}</strong>
                            <em>(Original: ${product.firstNumber})</em>
                        </div>
                    `).join('')}
            </div>
        </div>
    `;
}
