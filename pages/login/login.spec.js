var helper = require('../../helper.js');
var faker = require('faker');

describe('Main page: login/register', function() {

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
        var title = 'Etsy :: Your place to buy and sell all things handmade';

        expect(browser.getTitle()).toEqual(title);
   });

    it('should sign in and verify that password error appears', function(){
        var signInButton = element(by.id('sign-in'));
        var usernameField = element(by.id('username-existing'));
        var userPasswordField = element(by.id('password-existing'));
        var signInLoginForm = element(by.id('signin-button'));
        var passwordExistingError = element(by.id('password-existing-error'));

        signInButton.click();
        helper.waitUntilReady(usernameField);

        usernameField.clear();
        usernameField.sendKeys('test@test.com');
        userPasswordField.sendKeys('password');
        signInLoginForm.click();

        helper.waitUntilReady(passwordExistingError);
        var passwordExistingErrorTesxt = passwordExistingError.getText();
        expect(passwordExistingErrorTesxt).toEqual('Password was incorrect.');
    });

    it('should register a new user', function(){
        var registerButtonOnMainPage = element(by.id('register'));

        var firstNameField = element(by.id('first-name'));
        var lastNameField = element(by.id('last-name'));
        var emailField = element(by.id('email'));
        var passwordField = element(by.id('password'));
        var confirmPasswordField = element(by.id('password-repeat'));
        var usernameField = element(by.id('username'));
        var etsyFinds = element(by.id('etsy_finds'));
        var registerButtonOnForm = element(by.id('register_button'));

        registerButtonOnMainPage.click();
        helper.waitUntilReady(firstNameField);

        firstNameField.sendKeys(randomFirstName);
        lastNameField.sendKeys(randomLastName);
        emailField.sendKeys(randomEmail);
        passwordField.sendKeys(randomPassword);
        confirmPasswordField.sendKeys(randomPassword);
        usernameField.sendKeys(randomUsername);
        etsyFinds.click();

    });

});