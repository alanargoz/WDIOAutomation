const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const IntroPage = require('../pages/intro.page');
const VotePage = require('../pages/vote.page');
const RosterPage = require('../pages/roster.page');

describe('Smoke Test suite', () => {
  it('Should verify static elements are present', () => {
    browser.url('');
    assert.equal(
      LoginPage.headingText.isDisplayed(),
      true,
      'LoginPage.headingText'
    );
    assert.equal(
      LoginPage.emailLabel.isDisplayed(),
      true,
      'LoginPage.emailLabel'
    );
    assert.equal(
      LoginPage.passwordLabel.isDisplayed(),
      true,
      'LoginPage.passwordLabel'
    );
    assert.equal(
      LoginPage.emailField.isDisplayed(),
      true,
      'LoginPage.emailField'
    );
    assert.equal(
      LoginPage.emailLabel.isDisplayed(),
      true,
      'LoginPage.emailLabel'
    );
    assert.equal(
      LoginPage.passwordField.isDisplayed(),
      true,
      'LoginPage.passwordField'
    );
    assert.equal(
      LoginPage.passwordLabel.isDisplayed(),
      true,
      'LoginPage.passwordLabel'
    );
    assert.equal(
      LoginPage.rememberLoginLabel.isDisplayed(),
      true,
      'LoginPage.rememberLoginLabel'
    );
    assert.equal(
      LoginPage.rememberLoginCheckBox.isDisplayed(),
      true,
      'LoginPage.rememberLoginCheckBox'
    );
    assert.equal(
      LoginPage.submitButton.isDisplayed(),
      true,
      'LoginPage.submitButton'
    );
  });
});
