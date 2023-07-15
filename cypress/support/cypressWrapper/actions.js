class Actions {
	/**
     * click on element with custom timeout if necessary
     * @param {*} element  DOM element
     * @param {string} customTimeout? string value for time in milliseconds (op)
     * @return Cypress.Chainable object
     */
	click(element, customTimeout = '40000') {
		if (customTimeout) {
			return element.click({timeout: customTimeout});
		} else return element.click({force: true});
	}
  
	/**
     * clears element and types text into it with custom timeout if necessary
     * @param {*} element  DOM element
     * @param {string} txt text to type into element
     * @param {string} customTimeout string value for time in milliseconds
     * @return Cypress.Chainable object
     */
	type(element, txt, customTimeout = '40000') {
		if (customTimeout) {
			return element.clear({timeout: customTimeout}).type(txt, {force: true});
		} else return element.clear().type(txt, {force: true});
	}
  
	/**
     * Hover on element
     * @param {*} element DOM element
     * @returns Cypress.Chainable object
     */
	hoverOnElement(element) {
		element.realHover();
	}
	/**
     * Check a checkbox 
     * @param {*} element DOM element
     * @returns Cypress.Chainable object
     */
	check(element){
		element.check();
	}
}
  
export const actions = new Actions();
  