var helper = require('../../helper');
SearchPage = require('./search.po.js');

describe('Main page: Search functionality', function(){

    var searchPage = new SearchPage();

    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();
    });

    afterEach(function(){
        browser.manage().deleteAllCookies();
    });


    it('should search for the iPhone 6 case', function(done){

        searchPage.searchField.sendKeys('Wolf Fox Feathers Black Mandala Henna Phone Case iPhone 6')
            .then(function () {
                return helper.waitUntilReady(searchPage.searchButton);
            })
            .then(function(){
                return searchPage.searchButton.click();
            })
            .then(function(){
                return helper.waitUntilReady(searchPage.searchItem);
            })
            .then(function(){
                return searchPage.searchItem.click();
            })
            .then(done);
    });

    it('should search for the iPhone 6 case and check for the "device error" message', function(done){

        searchPage.searchField.sendKeys('Wolf Fox Feathers Black Mandala Henna Phone Case iPhone 6')
            .then(function () {
                return helper.waitUntilReady(searchPage.searchButton);
            })
            .then(function(){
                return searchPage.searchButton.click();
            })
            .then(function(){
                return helper.waitUntilReady(searchPage.searchItem);
            })
            .then(function(){
                return searchPage.searchItem.click();
            })
            .then(function(){
                return searchPage.addToCartButton.click();
            })
            .then(function() {
                return expect(searchPage.selectDeviceErrorText.getText()).toBe('Please select a device');
            })
            .then(done);
    });

});