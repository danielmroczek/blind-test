export const state = {
    step: 1,
    numberOfProducts: 0,
    products: []
};

export const nextStep = () => {
    state.step++;
    renderApp();
};

export const setState = (newState) => {
    Object.assign(state, newState);
    renderApp();
};
