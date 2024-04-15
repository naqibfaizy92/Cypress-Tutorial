describe('URL Website Contact Form Test Suite', () => {
  it('URL Website Contact Form Test', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://URL/kontakt');
    // cy.get('button.cm__btn[data-role="all"]').click(); // If there is a cookie window: uncomment this
    cy.log('Test started'); 
    cy.get('#first-name').clear('***');
    cy.get('#first-name').type('***');
    cy.get('#last-name').clear();
    cy.get('#last-name').type('**********');
    cy.get('#company').clear();
    cy.get('#company').type('**************');
    cy.get('#email').clear();
    cy.get('#email').type('*************************');
    cy.get('#first-name').clear();
    cy.get('#first-name').type('***');
    cy.get('#message').click();
    cy.get('#datenschutz').check();
    cy.get('.bg-stone-800').click();
    cy.log('Test finished'); 
    /* ==== End Cypress Studio ==== */
  })
})
