describe('Verify Image Sizes and Title Fonts on About Us Page', () => {
    it('Logs in and checks image sizes and title fonts', () => {
      // Use cy.on() to listen for uncaught exceptions and prevent Cypress from failing the test
      cy.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
      });
  
      // Visit the website and navigate to the login page
      cy.visit('https://locoboxing.com/pages/new-about');
  
      // Click on the element to open the password field (assuming this triggers the input field)
      cy.get('.t4s-btn-sidebar-text').click();
  
      // Enter the password
      cy.get('input[name="password"]').type('loco2024'); // Types the password
  
      // Click the "Submit" button (assuming it's inside the #login_form element)
      cy.get('#login_form > .button').click();
  
      // Wait for the page to load
      cy.wait(2000);
  
      // Click on About Us page link using an alternative selector
      cy.get('#item_mb_nav-2 > a').click();
  
      // Wait for the page to load
      cy.wait(2000);
  
      // Verify image sizes
      cy.get('.rte img').each(($img, index, $list) => {
        if (index > 0) {
          // Compare current image dimensions with the first image
          cy.wrap($img).should('have.css', 'width', $list[0].clientWidth + 'px');
          cy.wrap($img).should('have.css', 'height', $list[0].clientHeight + 'px');
        }
      });
  
      // Verify title font sizes
      cy.get('.rte h1, .rte h2, .rte h3, .rte h4, .rte h5, .rte h6').each(($title, index, $list) => {
        if (index > 0) {
          // Compare current title font size with the first title
          cy.wrap($title).should('have.css', 'font-size', $list[0].css('font-size'));
        }
      });
    });
  });
  