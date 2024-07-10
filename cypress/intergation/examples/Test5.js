describe('GET Posts', () => {
    it('should fetch posts and log the data', () => {
      // Perform a GET request to the API
      cy.request('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          // Assert that the response status is 200 (OK)
          expect(response.status).to.eq(200);
  
          // Log the response data
          console.log(response.body);  // Response body contains the JSON data
  
          // Further assertions on response data
          expect(response.body).to.be.an('array');
          expect(response.body).to.have.length.greaterThan(0);
          expect(response.body[0]).to.have.all.keys('userId', 'id', 'title', 'body');
        });
    });
  });
  