import { state, setStateWithoutRendering} from '../state.js';
import { COLORS } from '../constants.js';
import { shuffleArray } from '../utils.js';

export function SecondNumbering() {
    if (!state.products[0].secondNumber) {
        const productsShuffled = shuffleArray(state.products);
        setStateWithoutRendering({
            products: productsShuffled.map((p, i) => ({
                ...p,
                secondNumber: i + 1
            }))
        });
    }

    window.handleSecondNumberingSubmit = (event) => {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent('nextStep'));
    };

    return `
        <div class="step-container" style="background-color: ${COLORS.STEP_5}">
            <h2>Step 5: Second number assignment</h2>
            <form onsubmit="handleSecondNumberingSubmit(event)">
                <div class="product-list">
                    ${state.products
                        .sort((a, b) => a.firstNumber - b.firstNumber)
                        .map(product => `
                            <div class="product-item">
                                Product ${product.firstNumber} → ${product.secondNumber}
                            </div>
                        `).join('')}
                </div>
                <button type="submit" class="button">Next</button>
            </form>
        </div>
    `;
}
