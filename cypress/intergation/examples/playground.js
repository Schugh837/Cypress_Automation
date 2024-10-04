describe('SignUp page', function()
{
    it('SignUp', function(){

        cy.visit('http://playground.42works.net/node-auth/');

        cy.get(':nth-child(2) > .text-ct-dark-600').click();
        cy.get('.max-w-md > :nth-child(1) > .w-full') .should('exist').and('be.visible').type('kulbir');
        cy.get(':nth-child(2) > .w-full').should('exist').and ('be.visible').type('singh');
        cy.get('.max-w-md > :nth-child(3) > .w-full').should('exist').and('be.visible').type('kulbir@42works.net');
        cy.get(':nth-child(4) > .w-full').should('exist').and('be.visible').type('Password123');
        cy.get(':nth-child(5) > .w-full').should('exist').and('be.visible').type('Password123');
        cy.get('#phoneNumber').should('exist').and('be.visible').type('+929878625509');
        cy.get('.py-3').should('exist').and('be.visible').click();

    });

it('logInPage', function(){

    cy.visit('http://playground.42works.net/node-auth/login');
    cy.get('.max-w-md > :nth-child(1) > .w-full').should('exist').and('be.visible').type('kulbir@42works.net');
    cy.get(':nth-child(2) > .w-full').should('exist').and('be.visible').type('Password123');
    cy.get('.py-3').click();
    cy.get('.text-white').click();
    cy.wait(10000);
    cy.get('.cursor-pointer').click();
});
   it('forgetPassword', function(){
    cy.visit('http://playground.42works.net/node-auth/login');
    cy.get('.text-right > a').click();
    cy.get('.max-w-md > div > .w-full').should('exist').and('be.visible').type('kulbir@42works.net');
    cy.get('.py-3').click();
    const resetLink = 'http://playground.42works.net/node-auth/resetpassword?token=L6L9e%2FkE3ImOawAfmCy2%2B%2Fkj7fMFFBokCTngV62xzPl%2FBj3fH3xy84O%2F8shh8n4SK2YDaa4KwjWi5PadS70VYg%3D%3D'
    
    
   });
   
   
});
