/* describe('My CGTest suite',function()
{
    it('Log into the application' , function(){

       cy.visit('https://app.capitalgraphics.in/login');
        cy.get('input[name="Username"]').should('exist').type('superadmin');
       
        cy.get('input[name="Password"]').should('be.visible').type('Capital1787');
        cy.wait(2000)
        

        


        cy.get('#loginFormSbmitButtonm').should('be.visible').click();*/

       /* describe('My CGTest suite', function() {
            it('Log into the application', function() {
                // Visit the login page of the application
                cy.visit('https://app.capitalgraphics.in/admin/dashboard');
        
                // Wait for username input field and type 'superadmin'
                //cy.get('input[name="username"]').should('exist').should('be.visible').type('Superadmin');
                //cy.get('#email').should('be.visible').type('Superadmin');
        
                // Wait for password input field and type 'Capital1787'
                //cy.get('input[name="password"]').should('exist').should('be.visible').type('Capital1787');
                //cy.get('#password').should('exist').should('be.visible').type('Capital1787');
        
                // Wait for login form submit button and click it
                //cy.get('#loginFormSubmitButton').should('exist').should('be.visible').click();
        
                // Add assertions for successful login or navigation to the next page
                // Example: cy.url().should('include', '/dashboard');
            });
        });
        
       
    





   //})
//})*/
describe('My CGTest suite', function() {
    it('Log into the application', function() {
        cy.on('uncaught:exception', (err, runnable) => {
            // Ignore the specific application error to prevent Cypress from failing the test
            if (err.message.includes('Cannot read properties of null (reading \'addEventListener\')')) {
                return false;
            }
            // Return true to let the error propagate and fail the test
            return true;
        });

        // Visit the login page of the application
        cy.visit('https://app.capitalgraphics.in/login');

        // Proceed with your login test steps as before
        cy.get('#email').should('exist').and('be.visible').type('superadmin');
        cy.get('input[name="password"]').should('exist').should('be.visible').type('Capital1787');
        cy.get('#loginFormSbmitButtonm').should('exist').should('be.visible').click();
        cy.get('#someElement').should('exist').should('be.visible').click();
    });
});
