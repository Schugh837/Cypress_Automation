describe('login Test Suite' ,() =>{
    it('should allow a user to log in with valid credebtials', () => {
        //visite login page
        cy.visit('https://www.saucedemo.com/');
        cy.intercept('POST', '**/your-login-endpoint').as('loginRequest');

        //enter valid userName and Password then submit the form
        cy.get('input[name="username"]').type('locked_out_user');
        cy.get('input[name="password"]').type('secret_sauce');
        
     // cy.get('#submit').click();
       // cy.get('.wp-block-button__link').click();
    });

   /* //login with invalid credentials
    it('should shown an error messagewith invalid credentials' , () =>{
        cy.visit('https://www.saucedemo.com/');
        //enter invalid credentilas in login
        cy.get('input[name="username"]').type('silky');
        cy.get('input[name="password"]').type('password123');
        cy.get('#submit').click();
       
    })*/
})