import { actions } from '../support/cypressWrapper/actions';
import { assertions } from '../support/cypressWrapper/assertions';

class CreateAccount {
// #### Page Elements ####
	passwordInputField(){
		return cy.get('input[name="password"]');
	}
	confirmPasswordInputField() {
		return cy.get('input.confirm-password-input');
	}
	passwordCardContinueButton(){
		return cy.get('#card_password button');
	}
	profileDetailsCardContinueButton(){
		return cy.get('#card_profile_details button');
	}
	genderCardContinueButton(){
		return cy.get('#card_profile_gender button');
	}

	firstNameInputField(){
		return cy.get('#input_first_name');
	}
	lastNameInputField(){
		return cy.get('#input_last_name');
	}
	phoneNumberInputField(){
		return cy.get('input.phone-input');
	}
	genderDropdown(){
		return cy.get('#gender');
	}
	genderOption(option){
		return cy.get(`li[data-value = "${option}"]`);
	}
	birthDateInputField(){
		return cy.get('#input_birth_date');
	}
	termAndConditionCheckbox(){
		return cy.get('#acceptTC');
	}
	getStartButton(){
		return cy.get('[data-context="create-account-success"] button');
	}
	accountCreatedMessage(){
		return cy.get('[data-context="create-account-success"] h2');
	}
	// #### Page Actions ####
	typeValidPassword(password){
		actions.type(this.passwordInputField(), password);
	}
	confirmPassword(password){
		actions.type(this.confirmPasswordInputField(), password);
	}
	clickContinueButtonInPasswordCard(){
		actions.click(this.passwordCardContinueButton());
	}
	clickContinueButtonInProfileDetails(){
		actions.click(this.profileDetailsCardContinueButton());
	}
	typeFirstName(firstName){
		actions.type(this.firstNameInputField(), firstName);
	}
	typeLastName(lastName){
		actions.type(this.lastNameInputField(), lastName);
	}
	typePhoneNumber(phoneNumber){
		actions.type(this.phoneNumberInputField(), phoneNumber);
	}
	selectGender(option){
		actions.click(this.genderDropdown());
		actions.click(this.genderOption(option));
	}
	selectBirthDate(birthDate){
		actions.type(this.birthDateInputField(), birthDate.replace(/\//g, ''));
	}
	acceptTermAndConditions(){
		actions.check(this.termAndConditionCheckbox());
	}
	clickContinueButtonInGenderCard(){
		actions.click(this.genderCardContinueButton());
	}
	clickGetStart(){
		actions.click(this.getStartButton());
	}

	// #### Page Assertions ####
	verifyAccountCreated(){
		assertions.assertElementHasText(this.accountCreatedMessage(), 'Your account has been created!');
	}
}
export const createAccount = new CreateAccount();