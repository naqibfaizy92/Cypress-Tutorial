describe('Aytu.com Website Contact Form Test Suite', () => {
  it('Aytu.com Website Contact Form Test', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://aytu.com/kontakt');
    // cy.get('button.cm__btn[data-role="all"]').click();
    cy.log('Test started'); 
    cy.get('#first-name').clear('Max');
    cy.get('#first-name').type('Max');
    cy.get('#last-name').clear();
    cy.get('#last-name').type('Mustermann');
    cy.get('#company').clear();
    cy.get('#company').type('Musterfirma123');
    cy.get('#email').clear();
    cy.get('#email').type('max.mustermann123@musterfirma123.de');
    cy.get('#first-name').clear();
    cy.get('#first-name').type('Max');
    cy.get('#message').click();
    cy.get('#datenschutz').check();
    cy.get('.bg-stone-800').click();
    cy.log('Test finished'); 
    /* ==== End Cypress Studio ==== */
  })
})