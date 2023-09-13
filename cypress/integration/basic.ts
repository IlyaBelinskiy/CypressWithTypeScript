
it('google', function() {
    cy.visit('https://google.com')
    cy.get('[name="q"]')
        .type('GS Labs')
        .type('{enter}')
})