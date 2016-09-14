var helper = require('../../helper.js');

var HomePage = function(){

    this.pageTitle = 'Etsy :: Your place to buy and sell all things handmade';
    this.signInButton = element(by.id('sign-in'));
    this.usernameFieldLogin = element(by.id('username-existing'));
    this.userPasswordField = element(by.id('password-existing'));
    this.signInLoginForm = element(by.id('signin-button'));
    this.usernameExistingError = element(by.id('username-existing-error'));
    this.emptyUsernameText = "Can't be blank.";

    this.passwordExistingError = element(by.id('password-existing-error'));
    this.passwordExistsText = 'Password was incorrect.';
    this.emptyPasswordText = "Can't be blank.";

    // registration
    this.registerButtonOnMainPage = element(by.id('register'));

    this.firstNameField = element(by.id('first-name'));
    this.lastNameField = element(by.id('last-name'));
    this.emailField = element(by.id('email'));
    this.passwordField = element(by.id('password'));
    this.confirmPasswordField = element(by.id('password-repeat'));
    this.usernameField = element(by.id('username'));
    this.etsyFinds = element(by.id('etsy_finds'));
    this.registerButtonOnForm = element(by.id('register_button'));

    this.goToRegister  = function(){
        helper.waitUntilReady(this.registerButtonOnMainPage);
        this.registerButtonOnMainPage.click();
        helper.waitUntilReady(this.firstNameField);
    };

    this.goToLogin = function(){
        helper.waitUntilReady(this.signInButton);
        this.signInButton.click();
        helper.waitUntilReady(this.usernameFieldLogin);
    };

};

module.exports = HomePage;