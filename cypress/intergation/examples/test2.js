//added item in cart and click on bag and see items and then click on place an order then page redirect on next page
describe('My PlaceAnOrderTest suite',function()
{
    it('My PlaceAnOrderTest case' , function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('Ca')
        cy.wait(2000)
       
        //parent child chaning
        cy.get('.products').as('productLocator') //as[alassing to reuse locator] IS USED AS A VARIABLE SO WE USE MULTIPLE TIME INSTARED OF NAME
         cy.get( '@productLocator').find('.product').each(($el ,index ,$list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
                {
                    $el.find('button').click()
                }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()





    })
})
