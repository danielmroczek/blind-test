import { state, setStateWithoutRendering } from '../state.js';
import { COLORS } from '../constants.js';
import { shuffleArray } from '../utils.js';

export function FirstNumbering() {
    if (!state.products[0].firstNumber) {
        const productsShuffled = shuffleArray(state.products);
        setStateWithoutRendering({
            products: productsShuffled.map((p, i) => ({
                ...p,
                firstNumber: i + 1
            }))
        });
    }

    window.handleFirstNumberingSubmit = (event) => {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent('nextStep'));
    };

    return `
        <div class="step-container" style="background-color: ${COLORS.STEP_3}">
            <h2>Step 3: First number assignment</h2>
            <p>Write down numbers for your products:</p>
            <form onsubmit="handleFirstNumberingSubmit(event)">
                <div class="product-list">
                    ${state.products.map(product => `
                            <div class="product-item">
                                ${product.firstNumber} → <strong>${product.name}</strong>
                            </div>
                        `).join('')}
                </div>
                <button type="submit" class="button">Next</button>
            </form>
        </div>
    `;
}
