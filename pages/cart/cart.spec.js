var CartPage = require('./cart.po.js');
var CommonElements = require('../common/common.po.js');

var commonElements = new CommonElements();
var cartPage = new CartPage();

describe('Main page: cart', function(){

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function(){
        browser.manage().deleteAllCookies();
    });


    it('should navigate to the cart page', function(){
        commonElements.cartIcon.click();
        expect(cartPage.errorMessageEmptyCart.getText()).toBe(cartPage.emptyCartNotificationText);
    });
});