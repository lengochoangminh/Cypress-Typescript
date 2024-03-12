describe('E2E Test with TypeScript', () => {

    it('FieldInLineError', () => {
        cy.visit('https://getbootstrap.com/docs/5.1/examples/checkout')
        global.qe.ui.clickButton('Continue to checkout');
        global.qe.ui.verifyFieldInLineError('First name', 'Valid first name is required.');
        global.qe.ui.verifyFieldInLineError('Last name', 'Valid last name is required.');
        global.qe.ui.verifyFieldInLineError('Username', 'Your username is required.');
        global.qe.ui.verifyFieldInLineError('Address', 'Please enter your shipping address');
    })

    it('Demo Happy Path', () => {
        cy.visit('https://getbootstrap.com/docs/5.1/examples/checkout')
        global.qe.ui.verifySubHeaderExists('Checkout form');
        global.qe.ui.inputText('First name', 'Test');
        global.qe.ui.inputText('Last name', 'Test');
        global.qe.ui.inputText('Username', 'User1');
        global.qe.ui.inputTextDynamic('Email', 'email', 'test@abc.com');
        global.qe.ui.inputText('Address', 'Unit 1 225 wood street');
        global.qe.ui.selectByValue('Country', 'United States');
        global.qe.ui.selectByValue('State', 'California');
        global.qe.ui.inputText('Zip', '2323');
        global.qe.ui.checkCheckbox('Shipping address is the same as my billing address');
        global.qe.ui.checkRadio('Debit card');
        global.qe.ui.inputText('Name on card', 'Minh Le');
        global.qe.ui.inputText('Credit card number', '123456789');
        global.qe.ui.inputText('Expiration', '06/24');
        global.qe.ui.inputText('CVV', '123');
        global.qe.ui.clickButton('Continue to checkout');
    })

})