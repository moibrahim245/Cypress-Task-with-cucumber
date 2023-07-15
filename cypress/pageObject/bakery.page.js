import { actions } from '../support/cypressWrapper/actions';

class Bakery{
// #### Page Elements ####
	productCardByIndex(index){
		return cy.get('article.c-prd').eq(index);
	}
	addToCardButtonWithIndex(index){
		return cy.get('[data-track-onsubmit="addToCart"]').eq(index);
	}
	// #### Page Actions ####
	addToCartProductNumber(productNumber){
		this.productCardByIndex(productNumber)
			.realHover();
		this.addToCardButtonWithIndex(productNumber).click();
	}
// #### Page Assertions ####
}
export const bakery = new Bakery();