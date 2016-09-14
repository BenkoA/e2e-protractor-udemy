var CartPage =  function() {

    this.errorMessageEmptyCart = element(by.xpath('//div[@id="newempty"]//h2'));

    this.emptyCartNotificationText = 'Your cart is empty.';

}
module.exports = CartPage;