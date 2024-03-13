describe('A11y Test Demo', () => {
    it('Check A11y', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/');
        global.qe.a11y.initAxe();
        global.qe.a11y.check();
    });
});