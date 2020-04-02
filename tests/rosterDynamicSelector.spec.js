const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Roster Test suite with dynamic selectors', () => {
  beforeEach(function (done) {
    browser.url('');
    LoginPage.LoginIntoPage('1@2.com', 'password');
  });

  it('Should create single item', () => {
    RosterPage.addHero('SpongeBob');
    assert.equal(RosterPage.rosterItems[5].getText(), 'SpongeBob');
  });

  it('Should have default list of heros', () => {
    let heros = ['Wolverine', 'Iron Man', 'Deadpool', 'Thor', 'Spider-Man'];
    for (let i = 0; i < heros.length; i++) {
      assert.equal(RosterPage.rosterItems[i].getText(), heros[i]);
    }
  });

  it('Should create multiple items', () => {
    let heros = ['Bob', 'Joe', 'Steve', 'Sally'];

    for (let i = 0; i < heros.length; i++) {
      RosterPage.addHero(heros[i]);
      RosterPage.submitButton.click();
    }

    for (let i = 0; i < heros.length; i++) {
      assert.equal(RosterPage.rosterItems[5 + i].getText(), heros[i]);
    }
  });
});
