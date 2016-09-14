var helper = require('../../helper.js');
var faker = require('faker');
var HomePage = require('./home.po.js');

describe('Main page: login/register', function() {

    var homePage = new HomePage();

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function(){
       browser.manage().deleteAllCookies();
    });

    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password();
    var randomUsername = faker.internet.userName();

    it('should have a title', function(){

        expect(browser.getTitle()).toEqual(homePage.pageTitle);
   });

    it('should sign in and verify that password error appears', function(){
        homePage.goToLogin();

        homePage.usernameFieldLogin.clear();
        homePage.usernameFieldLogin.sendKeys('test@test.com');
        homePage.userPasswordField.sendKeys('password');
        homePage.signInLoginForm.click();

        helper.waitUntilReady(homePage.passwordExistingError);
        var passwordExistingErrorTesxt = homePage.passwordExistingError.getText();
        expect(passwordExistingErrorTesxt).toEqual(homePage.passwordExistsText);
    });

    it('should sign in and verify that password cannot be empty', function(){
        homePage.goToLogin();
        homePage.usernameFieldLogin.sendKeys('1234@test.com');
        homePage.userPasswordField.sendKeys('');
        homePage.signInLoginForm.click();
        helper.waitUntilReady(homePage.passwordExistingError);
        expect(homePage.passwordExistingError.getText()).toBe(homePage.emptyPasswordText);
    });

    it('should sign in and verify that email cannot be empty', function(){
        homePage.goToLogin();
        homePage.usernameFieldLogin.sendKeys('');
        homePage.userPasswordField.sendKeys('qwerty123');
        homePage.signInLoginForm.click();
        helper.waitUntilReady(homePage.usernameExistingError);
        expect(homePage.usernameExistingError.getText()).toBe(homePage.emptyUsernameText);
    });

    it('should register a new user', function(){
        homePage.goToRegister();

        homePage.firstNameField.sendKeys(randomFirstName);
        homePage.lastNameField.sendKeys(randomLastName);
        homePage.emailField.sendKeys(randomEmail);
        homePage.passwordField.sendKeys(randomPassword);
        homePage.confirmPasswordField.sendKeys(randomPassword);
        homePage.usernameField.sendKeys(randomUsername);
        homePage.etsyFinds.click();

    });

});