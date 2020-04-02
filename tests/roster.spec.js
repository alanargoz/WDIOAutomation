const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Roster Test suite', () => {
  beforeEach(function (done) {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
  });

  it('Should have default values', () => {
    const instructions =
      'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.';
    assert.equal(
      RosterPage.instructionTest.getText(),
      instructions,
      'Instruction test is not the same'
    );

    const title = 'Build Your Superhero Roster:';
    assert.equal(RosterPage.listTitle.getText(), title);
    assert.equal(RosterPage.wolverineItem.getText(), 'Wolverine');
    assert.equal(RosterPage.ironmanItem.getText(), 'Iron Man');
    assert.equal(RosterPage.deadpoolItem.getText(), 'Deadpool');
    assert.equal(RosterPage.thorItem.getText(), 'Thor');
    assert.equal(RosterPage.spidermanItem.getText(), 'Spider-Man');
  });

  it('Should add a new heroe and validate', () => {
    RosterPage.addHeroField.setValue('Superman');
    RosterPage.submitButton.click();
    assert.equal(RosterPage.newItem.getText(), 'Superman');
  });
});
