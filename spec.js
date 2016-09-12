var helper = require('./helper.js');

describe('Main page: login/register', function() {

    xit('should have a title', function(){
        browser.get(browser.params.url);

        var title = 'Etsy :: Your place to buy and sell all things handmade';

        expect(browser.getTitle()).toEqual(title);
   });

    xit('should sign in and verify that password error appears', function(){
        browser.get(browser.params.url);

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
        browser.get(browser.params.url);

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

        firstNameField.sendKeys('QA firstname');
        lastNameField.sendKeys('QA lastname');
        emailField.sendKeys('qaEmail@dispostable.com');
        passwordField.sendKeys('password01');
        confirmPasswordField.sendKeys('password01');
        usernameField.sendKeys('qausername');
        etsyFinds.click();

    });

});