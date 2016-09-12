var helper = require('../../helper');
describe('Main page: Search functionality', function(){

    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();
    });

    afterEach(function(){
        browser.manage().deleteAllCookies();
    });


    it('should test the Search functionality', function(){
        var searchBar = element(by.id('search-query'));
        var searchButton = element(by.xpath("//button[contains(text(),'Search')]"));
        var searchItem = element(by.xpath("//*[@id=\"content\"]/div/div/div[2]/div/div[3]/div[2]/div[3]/a/div/div[1]"));

        searchBar.sendKeys('vinyl');
        helper.waitUntilReady(searchButton);
        searchButton.click();

        helper.waitUntilReady(searchItem);
        searchItem.click();
    });
});