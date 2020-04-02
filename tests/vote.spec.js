const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Test suite', () => {
  beforeEach(function (done) {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
  });
  it('Should incremnt vote', () => {
    VotePage.submitButton.click();
    let originalValue = Number(VotePage.voteItemVal1.getText());
    assert.equal(VotePage.voteItemVal1.getText(), originalValue + 1);
    assert.equal(VotePage.thanksAlert.isDisplayed(), true);
  });
});
