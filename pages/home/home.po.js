var helper = require('../../helper.js');
var faker = require('faker');

var HomePage = function(){

    this.pageTitle = 'Etsy :: Your place to buy and sell all things handmade';
    this.passwordExistsText = 'Password was incorrect.';
    this.emptyPasswordText = "Can't be blank.";
    this.emptyUsernameText = "Can't be blank.";


    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password();
    var randomUsername = faker.internet.userName();


    this.signInButton = element(by.id('sign-in'));
    this.usernameFieldLogin = element(by.id('username-existing'));
    this.userPasswordField = element(by.id('password-existing'));
    this.signInLoginForm = element(by.id('signin-button'));
    this.usernameExistingError = element(by.id('username-existing-error'));
    this.passwordExistingError = element(by.id('password-existing-error'));


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

    this.doRegister = function(){
        this.firstNameField.sendKeys(randomFirstName);
        this.lastNameField.sendKeys(randomLastName);
        this.emailField.sendKeys(randomEmail);
        this.passwordField.sendKeys(randomPassword);
        this.confirmPasswordField.sendKeys(randomPassword);
        this.usernameField.sendKeys(randomUsername);
        this.etsyFinds.click();
    };

};

module.exports = HomePage;