import { homePage } from '../../pageObject/homePage.page';
import { createAccount } from '../../pageObject/createAccount.page';
import { identification } from '../../pageObject/identification.page';
import { bakery } from '../../pageObject/bakery.page';
import { common } from '../../pageObject/common.page';
import { cart } from '../../pageObject/cart.page';
import { generateRandomEmail, generateRandomPhoneNumber } from '../../support/helper/utils';
import { interceptAddToCart } from '../../support/API/intercepts';

Given ('I am on the Jumia website', ()=>{
	cy.visit('/'); 
});

When ('I navigate to identification page', ()=>{
	homePage.NavigateToIdentificationPage();
});

When ('I fill in the registration form with data from the  file and submit the form', ()=>{
	cy.readFile('cypress/testData/customerUser.json').then((userInfo)=>{
		userInfo.email = generateRandomEmail();
		userInfo.phoneNumber = generateRandomPhoneNumber();
		identification.typeValidEmail(userInfo.email);
		identification.clickContinueButton();
		
		createAccount.typeValidPassword(userInfo.password);
		createAccount.confirmPassword(userInfo.password);
		createAccount.clickContinueButtonInPasswordCard();
		
		createAccount.typeFirstName(userInfo.firstName);
		createAccount.typeLastName(userInfo.lastName);
		createAccount.typePhoneNumber(userInfo.phoneNumber);
		createAccount.clickContinueButtonInProfileDetails();
		
		createAccount.selectGender(userInfo.gender);
		createAccount.selectBirthDate(userInfo.birthDate);
		createAccount.acceptTermAndConditions();
		createAccount.clickContinueButtonInGenderCard();
		cy.writeFile('cypress/testData/customerUser.json', userInfo);
	});
});

Then ('I should be redirected to the Home page', ()=>{
	createAccount.verifyAccountCreated();
	createAccount.clickGetStart();
	homePage.verifyUserRedirectedToHomePage();
});

Given ('I am logged in to the Jumia website', ()=>{
	cy.readFile('cypress/testData/customerUser.json').then((customerUserInfo)=>{
		homePage.visitHomePage();
		homePage.NavigateToIdentificationPage();
		identification.typeValidEmail(customerUserInfo.email);
		identification.clickContinueButton();
		
		createAccount.typeValidPassword(customerUserInfo.password);
		identification.clickContinueButton();
		homePage.verifyLoginWelcomeLabel(customerUserInfo.firstName);
	});
});

When ('I hover over the supermarket menu', { scrollBehavior: false }, ()=>{
	homePage.hoverOverSuperMarket();
});

When ('I click on the bakery submenu', ()=>{
	homePage.selectBakerySubCategory();
});

When ('I add {string} product to the cart', (productNumber)=>{
	interceptAddToCart();
	cy.viewport(1400,1400);
	[...Array(parseInt(productNumber)).keys()].forEach((index) => {
		bakery.addToCartProductNumber(index);
		common.verifyProductIsAddedToCart(index);
	});
});

Then ('I can see the subtotal is calculated correctly according to the added item prices', ()=>{
	cart.verifySubtotalIsCalculatedCorrectly();
});

When ('I navigate to cart page', ()=>{
	common.navigateToCartPage();
	
});
