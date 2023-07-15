class Cart{
// #### Page Elements ####
	productPrice(){
		return cy.get('._cl .prc');
	}
	subtotal(){
		return cy.get('p.-plm');
	}
	// #### Page Actions #####
	// #### Page Assertions ####
	verifySubtotalIsCalculatedCorrectly(){

		cy;
		this.productPrice()
			.eq(0)
			.invoke('text')
			.then(productNum1 => {
				this.productPrice()
					.eq(1)
					.invoke('text')
					.then(productNum2 => {
						const actualSubtotal = parseFloat(productNum1.replace(/EGP/g, '')) + parseFloat(productNum2.replace(/EGP/g, ''));
						this.subtotal().invoke('text').then(expectedSubtotal=>{
							console.log('expectedSubtotal', expectedSubtotal);

							expect(actualSubtotal).equal(parseFloat(expectedSubtotal.replace(/EGP/g, '')));
						});
					});
			});
	}
}
export const cart =  new Cart();
