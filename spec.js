describe('Protractor Demo App', function() {

    it('should have a title', function(){
        browser.get(browser.params.url);

        var title = 'Etsy :: Your place to buy and sell all things handmade';

        expect(browser.getTitle()).toEqual(title);
   });
});