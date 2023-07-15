import { actions } from '../support/cypressWrapper/actions';
import { assertions } from '../support/cypressWrapper/assertions';

class Common{
// #### Page Elements ####
	cartIcon(){
		return cy.get('[href="/cart/"]');
	}
	successfulMessageForAddingProduct(){
		return cy.get('div._success');
	}
	// #### Page Actions ####
	navigateToCartPage(){
		actions.click(this.cartIcon());
	}
	// #### Page Assertions ####
	verifyProductIsAddedToCart(cartCount){
		cy.wait('@addToCart').then((req)=>{
			console.log('response', req);
			expect(req.response.statusCode).to.eq(200); 
			expect(req.response.body.success).to.eq(true); 
			expect(req.response.body.cart.count).to.eq(parseInt(cartCount)+1); 
		});
		assertions.assertElementHasText(this.successfulMessageForAddingProduct(), 'Product added successfully');
	}
}
export const common = new Common();