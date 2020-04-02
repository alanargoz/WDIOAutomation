const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');

describe('Login Test Suite', () => {
  // Valid Email: 1@2.com
  //Valid password: password

  //Error Tests
  it('Should display error when password is missing', () => {
    browser.url('');
    LoginPage.emailField.setValue('test@test.com');
    LoginPage.submitButton.click();
    assert.equal(
      browser.getAlertText(),
      'Please enter an email and password',
      'Alert text is not equal'
    );
    browser.acceptAlert();
  });

  it('Should display error when email is missing', () => {
    browser.url('');
    LoginPage.passwordField.setValue();
    LoginPage.submitButton.click();
    assert.equal(
      browser.getAlertText(),
      'Please enter an email and password',
      'Alert text is not equal'
    );
    browser.acceptAlert();
  });

  it('Should display error when password and email missing', () => {
    browser.url('');
    LoginPage.submitButton.click();
    assert.equal(
      browser.getAlertText(),
      'Please enter an email and password',
      'Alert text is not equal'
    );
  });

  it('Should display error when email is incorrect', () => {
    browser.url('');

    LoginPage.emailField.setValue('fake@fake.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    assert.equal(
      browser.getAlertText(),
      'Invalid email and password',
      'Alert text is not equal'
    );
  });

  it('Should display error when password is incorrect', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('fake');
    LoginPage.submitButton.click();
    assert.equal(
      browser.getAlertText(),
      'Invalid email and password',
      'Alert text is not equal'
    );
  });

  it('Should display error when password case is incorrect', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('PASSWORD');
    LoginPage.submitButton.click();
    assert.equal(
      browser.getAlertText(),
      'Invalid email and password',
      'Alert text is not equal'
    );
  });

  //All correct test
  it('Should login with valid email and password', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    assert.equal(
      LoginPage.overlay.isDisplayed(),
      false,
      'Overlay is still displayed'
    );
  });

  it('Should remember login credentials', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.rememberLoginCheckBox.click();
    LoginPage.submitButton.click();
    assert.equal(LoginPage.overlay.isDisplayed(), false);
    HeaderPage.logoutLink.click();
    assert.equal(LoginPage.overlay.isDisplayed(), true);
    assert.equal(LoginPage.emailField.getValue(), '1@2.com');
    assert.equal(LoginPage.passwordField.getValue().length, 8);
    assert.equal(LoginPage.rememberLoginCheckBox.isSelected(), true);

    it('Should not remember login credentials', () => {
      browser.url('');
  
      LoginPage.emailField.setValue('1@2.com');
      LoginPage.passwordField.setValue('password');
      LoginPage.submitButton.click();
      assert.equal(LoginPage.overlay.isDisplayed(), false);
      HeaderPage.logoutLink.click();
      assert.equal(LoginPage.overlay.isDisplayed(), true);
      assert.equal(LoginPage.emailField.getValue(), '');
      assert.equal(LoginPage.passwordField.getValue().length, 0);
      assert.equal(LoginPage.rememberLoginCheckBox.isSelected(), false);
  });
});
