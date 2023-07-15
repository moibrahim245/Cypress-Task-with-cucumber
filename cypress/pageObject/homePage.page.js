import { actions } from '../support/cypressWrapper/actions';
import $ from 'jquery';
import { assertions } from '../support/cypressWrapper/assertions';

class HomePage{
	// #### Page Elements ####
	closeButton(){
		return cy.get('button[aria-label="newsletter_popup_close-cta"]');
	}
	accountDropdownMenu(){
		return cy.get('[for="dpdw-login"]');
	}

	singInButton(){
		return cy.get('#dpdw-login-box .btn');
	}
	superMarketCategory(){
		return  cy.get('[href="/groceries/"] span', { scrollBehavior: false });
	}
	bakerySubCategory(){
		return cy.get('[href="/breads-bakery/"]');
	}
	welcomeLabel(){
		return cy.get('label[for="dpdw-login"]');
	}
	// #### Page Actions ####
	visitHomePage(){
		cy.visit('/');
	}
	NavigateToIdentificationPage(){
		actions.click(this.accountDropdownMenu());
		actions.click(this.singInButton());
	}
	hoverOverSuperMarket(){
		actions.hoverOnElement(this.superMarketCategory());

	}
	selectBakerySubCategory(){
		actions.click(this.bakerySubCategory());
	}
	// #### Page Assertions ####
	verifyUserRedirectedToHomePage(){
		assertions.assertPageLoad(Cypress.config().baseUrl);
	}
	verifyLoginWelcomeLabel(userName){
		assertions.assertElementHasText(this.welcomeLabel(), `Hi, ${userName}`);
	}
}
export const homePage = new HomePage();