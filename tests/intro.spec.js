const assert = require('assert');
const LoginPage = require('../pages/login.page');
const IntroPage = require('../pages/intro.page');

describe('Intro Test Suite', () => {
  beforeEach(function (done) {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
  });

  it('Should display correct title', () => {
    assert.equal(IntroPage.titleText.getText(), 'Superhero Roster');
  });

  it('Should display correct image', () => {
    assert.equal(
      IntroPage.mainImage.getAttribute('src'),
      './images/superhero.png'
    );
    assert.equal(IntroPage.mainImage.getAttribute('alt'), 'Superhero Image');
  });
});
