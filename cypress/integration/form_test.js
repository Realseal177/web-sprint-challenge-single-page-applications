describe('Lambda Eats inputs test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    const nameTextInput = () => cy.get('input[name=custName]');
    const checkBox = () => cy.get('[type="checkbox"]');
    const submitBtn = () => cy.get('button[id="order-button"]')

    it('can type in the text box', () => {
        nameTextInput()
            .should('have.value', '')
            .type('BlueBlah')
            .should('have.value', 'BlueBlah')
    })

    it('can check the checkbox', () => {
        checkBox()
            .check({ force: true })
    })

    describe('submit button', () => {
        it('can submit order for pizza', () => {
            nameTextInput().type("Drew");
            submitBtn().click();
            cy.contains("Drew").next().next().click();
            cy.contains("Drew").should('not.exist');
        })
    })

})