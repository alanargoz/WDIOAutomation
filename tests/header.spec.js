const assert = require('assert');
const HeaderPage = require('../pages/header.page');
const LoginPage = require('../pages/login.page');

describe('Test suite', () => {
  beforeEach(function (done) {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
  });

  it('Should redirect to new site', () => {
    HeaderPage.linkLink.click();
    assert.equal(browser.getUrl(), 'https://glitchitsystem.com/');
  });

  it('Should open wolverine modal', () => {
    HeaderPage.heroFactsLink.click();
    HeaderPage.wolverineOption.click();
    browser.pause(1000);

    assert.equal(HeaderPage.wolverinemodalWindow.isDisplayed(), true);
    assert.equal(
      HeaderPage.wolverineModalTitleText.getText(),
      'Wolverine Fact',
      'Title not the same'
    );
    assert.equal(
      HeaderPage.wolverineModalContentText.getText(),
      'Wolverine made his first comic book appearance in 1974.',
      'Content not the same'
    );
  });

  it('Should close wolverine modal', () => {
    HeaderPage.heroFactsLink.click();
    HeaderPage.wolverineOption.click();
    browser.pause(1000);

    assert.equal(HeaderPage.wolverinemodalWindow.isDisplayed(), true);
    HeaderPage.wolverineModalCloseButton.click();
    assert.equal(HeaderPage.wolverinemodalWindow.isDisplayed(), false);
  });

  it('Should open spiderman modal', () => {
    HeaderPage.heroFactsLink.click();
    HeaderPage.spiderOption.click();
    browser.pause(1000);

    assert.equal(HeaderPage.spidermodalWindow.isDisplayed(), true);
    assert.equal(
      HeaderPage.spiderModalTitleText.getText(),
      'Spider-Man Fact',
      'Title not the same'
    );
    assert.equal(
      HeaderPage.spiderModalContentText.getText(),
      'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.',
      'Content not the same'
    );
  });

  it('Should close Spider Man modal', () => {
    HeaderPage.heroFactsLink.click();
    HeaderPage.spiderOption.click();
    browser.pause(1000);

    assert.equal(HeaderPage.spidermodalWindow.isDisplayed(), true);
    HeaderPage.spiderModalCloseButton.click();
    browser.pause(1000);
    assert.equal(HeaderPage.spidermodalWindow.isDisplayed(), false);
  });

  it.only('Should search for Wolverine', () => {
    HeaderPage.searchField.setValue('wolverine');
    HeaderPage.searchButton.click();
    browser.pause(1000);
    assert.equal(browser.getAlertText(), 'Wolverine is awesome!');
  });
});
