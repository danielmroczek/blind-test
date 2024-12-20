import { state, setState, nextStep } from '../state.js';
import { COLORS } from '../constants.js';

export function FirstNumbering() {
    const products = state.products;
    if (!products[0].firstNumber) {
        
        // Fisher-Yates (Knuth) Shuffle
        for (let i = products.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [products[i], products[j]] = [products[j], products[i]];
        }
        setState({
            products: products.map((p, i) => ({
                ...p,
                firstNumber: i + 1
            }))
        });
    }

    return `
        <div class="step-container" style="background-color: ${COLORS.STEP_3}">
            <h2>Step 3: First number assignment</h2>
            <p>Remember these numbers for your products:</p>
            <div class="product-list">
                ${state.products
                    // .sort((a, b) => a.name.localeCompare(b.name))
                    .map(product => `
                        <div class="product-item">
                            ${product.firstNumber} → <strong>${product.name}</strong>
                        </div>
                    `).join('')}
            </div>
            <button class="button" onclick="window.dispatchEvent(new CustomEvent('nextStep'))">Next</button>
        </div>
    `;
}
