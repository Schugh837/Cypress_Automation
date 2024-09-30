describe('My loginOnSP', function()
{
    it('logintoSP', function(){
        cy.visit('https://staging.shieldpay.software/login');

        cy.get('#email').should('exist').and('be.visible').type('kulbir@42works.net');
        cy.get('#password').should('exist').and('be.visible').type('kulbir@1A');
        cy.get('.login-btn').click();

        cy.get(':nth-child(5) > .nav-link > .nav-item-text').click();
       
        cy.url().should('include', "/admin/workers/new-starters");
        
    });
  })
