var helper = require('../../helper');

var SearchPage = function (){

     this.searchField = element(by.id('search-query'));
     this.searchButton = element(by.xpath("//button[contains(text(),'Search')]"));

     this.searchItem = element(by.xpath("//*[@id=\"content\"]/div/div/div[2]/div/div[2]/div/div[1]/a/div/div[1]"));

    this.addToCartButton = element(by.css('.btn-transaction'));
    this.selectDeviceErrorText = element(by.css('.error-515'));
};


module.exports = SearchPage;