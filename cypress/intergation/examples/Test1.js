//cypress -- spec
describe('my FirstTest suite',function()
{
    it('My FirstTest case' , function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('Ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //parent child chaning
        cy.get('.products').as('productLocator') //as[alassing to reuse locator] IS USED AS A VARIABLE SO WE USE MULTIPLE TIME INSTARED OF NAME
        cy.get( '@productLocator').find('.product').should('have.length',4)
        cy.get( '@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get( '@productLocator').find('.product').each(($el ,index ,$list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
                {
                    $el.find('button').click()
                }
        })

        //assert if logo text is correctly displayed

        cy.get('.brand').should('have.text','GREENKART')
    




 cy.get('.brand').then(function(logoelement)
 {
    cy.log(logoelement.text())
})
 
  
})
})