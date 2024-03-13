const checkThis = '//input[@id="username"]';

describe('Demo Visual Applitools Test', () => {

    beforeEach(() => {
        global.testName = Cypress.currentTest.title;
        global.qe.visual.open();
    });

    it('should log into a bank account', () => {
        cy.visit('https://demo.applitools.com');
        global.qe.visual.check('Login page', 'Layout');
        global.qe.visual.checkRegion('username textbox', checkThis, 'xpath', 'Strict');

        cy.get('#username').type('andy')
        cy.get('#password').type('i<3pandas')
        cy.get('#log-in').click()
        global.qe.visual.check('Main page', 'Layout');
    })

    afterEach(() => {
        global.qe.visual.close();
    })
});