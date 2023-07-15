

class Assertions {
	/**
     * Assert element has text
     * @param element
     * @param {string} txt
     *
     * @param {Cypress.Chainable<undefined>|JQuery<HTMLElement>} $element
     */
	assertElementHasText(element, txt) {
		element.should('contain', txt, {matchCase: false});
	}
	/**
     * Assert url loaded
     * @param url
     */
	assertPageLoad(url) {
		cy.url().should('eq', url);
	}
}
  
export const assertions = new Assertions();
  