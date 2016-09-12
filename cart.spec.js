var helper = require('./helper.js');

describe('Main page: cart', function(){

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function(){
        browser.manage().deleteAllCookies();
    });


    it('should navigate to the cart page', function(){
        var cartIcon = element(by.css('[title="Cart"]'));
        cartIcon.click();

        var errorMessageEmptyCart = element(by.xpath('//div[@id="newempty"]//h2'));
        expect(errorMessageEmptyCart.getText()).toBe('Your cart is empty.');
    });
});