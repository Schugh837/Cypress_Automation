describe('My testCaseOnCE',function()
{
    it('Loginto in website' , function() {
    
    cy.visit('https://staging.clubemploy.co.uk/');
   
    cy.get('#portal-login').click()
    cy.get('#staticEmail').should('exist').and('be.visible').type('kulbir@42works.net');
    cy.get('#pass_log_id').should('exist').and('be.visible').type('kulbir@1A');
   
    cy.get(':nth-child(5) > .text-center > .sing-in-wp').should('exist').and('be.visible').click();
   //  cy.get('#example_filter > label > input').click();
   cy.get('#example_filter > label > input').type('test', { force: true });
    




    })

    it('clickOn seacrh element')
}) 