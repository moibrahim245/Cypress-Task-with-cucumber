/**
 * Use intercept to intercept any api request and provide alias for it. If a mocking
 * sample is provided, it will mock the response using this sample
 * @param {string} method the request method
 * @param {string} url the request url
 * @param {string} alias the name you want to give to the request
 * @param {object} mockingSample response sample
 */
const intercept = ({method, url, alias, mockingSample}) => {
	mockingSample ?
		cy
			.intercept(method, url, (req) => {
				req.reply(mockingSample);
			})
			.as(alias) :
		cy.intercept(method, url).as(alias);
};


export const interceptAddToCart = (mockingSample) =>
	intercept({
		method: 'POST',
		url: '**/quantity/',
		alias: 'addToCart',
		mockingSample,
	},
	);