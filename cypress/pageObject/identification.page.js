import { actions } from '../support/cypressWrapper/actions';

class Identification {
// #### Page Elements ####
	identificationValueInputField(){
		return cy.get('#input_identifierValue');
	}
	continueButton(){
		return cy.get('button[type="submit"]');
	}
	// #### Page Actions ####
	typeValidEmail(email){
		actions.type(this.identificationValueInputField(),email);
	}
	clickContinueButton(){
		actions.click(this.continueButton());
	}
// #### Page Assertions ####
}
export const identification = new Identification();